(ns frac.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d] [clojure.core.async :as async]))


;; -------------------------
;; Views
;;
(defn red [x] (- x 0.1))
(defn sqr [x] (* x x))
(def ool 300)
(def pi (/ 22 7))
(defonce alpha (r/atom pi))
(defonce interval (atom 0))
(defonce level (atom 0))
(defn p [x y] {:x x :y y})
(defn cp [r a] {:r r :a a})

(defn cp-from-p [p] (let [x (:x p) y (:y p)]
                      (if (< x 0)
                        (cp (Math/sqrt (+ (sqr x) (sqr y))) (+ pi (Math/atan (/ y x))))
                        (cp (Math/sqrt (+ (sqr x) (sqr y))) (if (= x 0) (/ 2 pi) (Math/atan (/ y x)))))))

(defn p-from-cp [cp] (let [r (:r cp) a (:a cp)] (p (* r (Math/cos a)) (* r (Math/sin a)))))

(defn add-p [p1 p2] (p (+ (:x p1) (:x p2)) (+ (:y p1) (:y p2))))
(defn sub-p [p1 p2] (p (- (:x p1) (:x p2)) (- (:y p1) (:y p2))))
(defn add-cp [cp1 cp2] (cp-from-p (add-p (p-from-cp cp1) (p-from-cp cp2))))
(defn sub-cp [cp1 cp2] (cp-from-p (sub-p (p-from-cp cp1) (p-from-cp cp2))))
(defn mul-cp [cp1 cp2] (cp (* (:r cp1) (:r cp2)) (+ (:a cp1) (:a cp2))))

(def cp1 (cp 0 0))
(def cp2 (cp ool 0))

(defn cline [cp1 cp2] {:cp1 cp1 :cp2 cp2})

(defonce past-group-of-clines (r/atom []))

(defn draw-cline [k cline]
  [:line {:x1 (+ 50 (* (:r (:cp1 cline)) (Math/cos (:a (:cp1 cline)))))
          :y1 (- 300 (* (:r (:cp1 cline)) (Math/sin (:a (:cp1 cline)))))
          :x2 (+ 50 (* (:r (:cp2 cline)) (Math/cos (:a (:cp2 cline)))))
          :y2 (- 300 (* (:r (:cp2 cline)) (Math/sin (:a (:cp2 cline)))))
          :stroke "grey"
          :stroke-width 1 :key k}])

(defn frac-a-cline [a-cline]
  (let [cp2 (:cp2 a-cline)
        cp1 (:cp1 a-cline)
        odc (sub-cp cp2 cp1)
        ol (:r odc)
        dd (* 2 (+ 1 (Math/sin (/ @alpha 2))))
        nl (/ ol dd)
        ndc (cp nl (:a odc))
        beta (/ (- pi @alpha) 2)
        rdc (mul-cp ndc (cp 1 beta))
        cpq (add-cp cp1 ndc)
        cpp (sub-cp cp2 ndc)
        cpo (add-cp cpq rdc)]
      [(cline cp1 cpq)
       (cline cpq cpo)
       (cline cpo cpp)
       (cline cpp cp2)]))

(defn fract-it [clines]
  (if (> (count clines) 0)
    ((comp vec flatten vector) (map frac-a-cline clines))
    [(cline cp1 cp2)]))

;;
(def alpha-min (r/atom 0.15))
(defn red-alpha [alpha] (- alpha 0.05))

(defn update-alpha []
  (if (> @alpha @alpha-min)
    (swap! alpha red-alpha)
    (js/clearInterval @interval)))

(defn move-alpha []
  (reset! interval (js/setInterval update-alpha 10)))

(defn do-level []
  (swap! past-group-of-clines fract-it)
  (reset! alpha pi)
  (swap! level inc))

(defn update-alpha-level []
  (if (> @alpha @alpha-min)
      (swap! alpha red-alpha)
      (js/clearInterval @interval)))

(defn move-do []
      (do-level)
      (js/console.log (count @past-group-of-clines))
      (reset! interval (js/setInterval update-alpha-level 10)))

(defn reset-everything []
  (reset! past-group-of-clines [])
  (reset! alpha pi)
  (reset! level 1))

(defn move-do-button []
  [:div {:style {:width 34 :height 25 :background-color "green" :border-radius 5} :on-click move-do}])

(defn reset-button []
  [:div {:style {:width 34 :height 25 :background-color "red" :border-radius 5} :on-click reset-everything}])

(defn set-min-alpha [angle]
  (reset! alpha-min angle))

(defn set-min-alpha-space []
   [:input {:type "text" :value @alpha-min :style {:width 34 :height 21 :border-radius 5} :on-change #(reset! alpha-min (.-value (.-target %)))}])

(defn frac []
  [:svg {:x 0 :y 0 :width 400 :height 400}
   (let [group (fract-it @past-group-of-clines)]
     (for [i (range (count group))]
       (draw-cline i (nth group i))))])

(defn input []
  [:div {:style {:height 200 :width 400 :align-items "flex-start" :justify-content "space-around" :display "flex"}}
   (set-min-alpha-space)
   (move-do-button)
   (reset-button)])

(defn root []
  [:div {:style {:height 600 :width 400 :align-items "center"}}
    (frac)(input)])

;; -------------------------
;; -------------------------
;; Initialize app
(defn mount-root []
  (d/render [root]
            (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
