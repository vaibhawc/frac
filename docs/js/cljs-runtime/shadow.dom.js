goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35000 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35000(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35001 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35001(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34345 = coll;
var G__34346 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34345,G__34346) : shadow.dom.lazy_native_coll_seq.call(null,G__34345,G__34346));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4120__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34379 = arguments.length;
switch (G__34379) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34385 = arguments.length;
switch (G__34385) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34396 = arguments.length;
switch (G__34396) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34408 = arguments.length;
switch (G__34408) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34413 = arguments.length;
switch (G__34413) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34418 = arguments.length;
switch (G__34418) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34427){if((e34427 instanceof Object)){
var e = e34427;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34427;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34429 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34430 = null;
var count__34431 = (0);
var i__34432 = (0);
while(true){
if((i__34432 < count__34431)){
var el = chunk__34430.cljs$core$IIndexed$_nth$arity$2(null,i__34432);
var handler_35008__$1 = ((function (seq__34429,chunk__34430,count__34431,i__34432,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34429,chunk__34430,count__34431,i__34432,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35008__$1);


var G__35009 = seq__34429;
var G__35010 = chunk__34430;
var G__35011 = count__34431;
var G__35012 = (i__34432 + (1));
seq__34429 = G__35009;
chunk__34430 = G__35010;
count__34431 = G__35011;
i__34432 = G__35012;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34429);
if(temp__5735__auto__){
var seq__34429__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34429__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34429__$1);
var G__35013 = cljs.core.chunk_rest(seq__34429__$1);
var G__35014 = c__4550__auto__;
var G__35015 = cljs.core.count(c__4550__auto__);
var G__35016 = (0);
seq__34429 = G__35013;
chunk__34430 = G__35014;
count__34431 = G__35015;
i__34432 = G__35016;
continue;
} else {
var el = cljs.core.first(seq__34429__$1);
var handler_35017__$1 = ((function (seq__34429,chunk__34430,count__34431,i__34432,el,seq__34429__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34429,chunk__34430,count__34431,i__34432,el,seq__34429__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35017__$1);


var G__35018 = cljs.core.next(seq__34429__$1);
var G__35019 = null;
var G__35020 = (0);
var G__35021 = (0);
seq__34429 = G__35018;
chunk__34430 = G__35019;
count__34431 = G__35020;
i__34432 = G__35021;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34459 = arguments.length;
switch (G__34459) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34467 = cljs.core.seq(events);
var chunk__34468 = null;
var count__34469 = (0);
var i__34470 = (0);
while(true){
if((i__34470 < count__34469)){
var vec__34484 = chunk__34468.cljs$core$IIndexed$_nth$arity$2(null,i__34470);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34484,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34484,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35025 = seq__34467;
var G__35026 = chunk__34468;
var G__35027 = count__34469;
var G__35028 = (i__34470 + (1));
seq__34467 = G__35025;
chunk__34468 = G__35026;
count__34469 = G__35027;
i__34470 = G__35028;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34467);
if(temp__5735__auto__){
var seq__34467__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34467__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34467__$1);
var G__35029 = cljs.core.chunk_rest(seq__34467__$1);
var G__35030 = c__4550__auto__;
var G__35031 = cljs.core.count(c__4550__auto__);
var G__35032 = (0);
seq__34467 = G__35029;
chunk__34468 = G__35030;
count__34469 = G__35031;
i__34470 = G__35032;
continue;
} else {
var vec__34494 = cljs.core.first(seq__34467__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34494,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35033 = cljs.core.next(seq__34467__$1);
var G__35034 = null;
var G__35035 = (0);
var G__35036 = (0);
seq__34467 = G__35033;
chunk__34468 = G__35034;
count__34469 = G__35035;
i__34470 = G__35036;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34501 = cljs.core.seq(styles);
var chunk__34502 = null;
var count__34503 = (0);
var i__34504 = (0);
while(true){
if((i__34504 < count__34503)){
var vec__34530 = chunk__34502.cljs$core$IIndexed$_nth$arity$2(null,i__34504);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34530,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34530,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35039 = seq__34501;
var G__35040 = chunk__34502;
var G__35041 = count__34503;
var G__35042 = (i__34504 + (1));
seq__34501 = G__35039;
chunk__34502 = G__35040;
count__34503 = G__35041;
i__34504 = G__35042;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34501);
if(temp__5735__auto__){
var seq__34501__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34501__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34501__$1);
var G__35043 = cljs.core.chunk_rest(seq__34501__$1);
var G__35044 = c__4550__auto__;
var G__35045 = cljs.core.count(c__4550__auto__);
var G__35046 = (0);
seq__34501 = G__35043;
chunk__34502 = G__35044;
count__34503 = G__35045;
i__34504 = G__35046;
continue;
} else {
var vec__34535 = cljs.core.first(seq__34501__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34535,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35047 = cljs.core.next(seq__34501__$1);
var G__35048 = null;
var G__35049 = (0);
var G__35050 = (0);
seq__34501 = G__35047;
chunk__34502 = G__35048;
count__34503 = G__35049;
i__34504 = G__35050;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34540_35051 = key;
var G__34540_35052__$1 = (((G__34540_35051 instanceof cljs.core.Keyword))?G__34540_35051.fqn:null);
switch (G__34540_35052__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35054 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4120__auto__ = goog.string.startsWith(ks_35054,"data-");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.string.startsWith(ks_35054,"aria-");
}
})())){
el.setAttribute(ks_35054,value);
} else {
(el[ks_35054] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34557){
var map__34558 = p__34557;
var map__34558__$1 = (((((!((map__34558 == null))))?(((((map__34558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34558):map__34558);
var props = map__34558__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34558__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34561 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34561,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34561,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34561,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34566 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34566,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34566;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34571 = arguments.length;
switch (G__34571) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34575){
var vec__34576 = p__34575;
var seq__34577 = cljs.core.seq(vec__34576);
var first__34578 = cljs.core.first(seq__34577);
var seq__34577__$1 = cljs.core.next(seq__34577);
var nn = first__34578;
var first__34578__$1 = cljs.core.first(seq__34577__$1);
var seq__34577__$2 = cljs.core.next(seq__34577__$1);
var np = first__34578__$1;
var nc = seq__34577__$2;
var node = vec__34576;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34579 = nn;
var G__34580 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34579,G__34580) : create_fn.call(null,G__34579,G__34580));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34581 = nn;
var G__34582 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34581,G__34582) : create_fn.call(null,G__34581,G__34582));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34586 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34586,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34586,(1),null);
var seq__34590_35062 = cljs.core.seq(node_children);
var chunk__34591_35063 = null;
var count__34592_35064 = (0);
var i__34593_35065 = (0);
while(true){
if((i__34593_35065 < count__34592_35064)){
var child_struct_35066 = chunk__34591_35063.cljs$core$IIndexed$_nth$arity$2(null,i__34593_35065);
var children_35067 = shadow.dom.dom_node(child_struct_35066);
if(cljs.core.seq_QMARK_(children_35067)){
var seq__34648_35068 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35067));
var chunk__34650_35069 = null;
var count__34651_35070 = (0);
var i__34652_35071 = (0);
while(true){
if((i__34652_35071 < count__34651_35070)){
var child_35073 = chunk__34650_35069.cljs$core$IIndexed$_nth$arity$2(null,i__34652_35071);
if(cljs.core.truth_(child_35073)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35073);


var G__35075 = seq__34648_35068;
var G__35076 = chunk__34650_35069;
var G__35077 = count__34651_35070;
var G__35078 = (i__34652_35071 + (1));
seq__34648_35068 = G__35075;
chunk__34650_35069 = G__35076;
count__34651_35070 = G__35077;
i__34652_35071 = G__35078;
continue;
} else {
var G__35080 = seq__34648_35068;
var G__35081 = chunk__34650_35069;
var G__35082 = count__34651_35070;
var G__35083 = (i__34652_35071 + (1));
seq__34648_35068 = G__35080;
chunk__34650_35069 = G__35081;
count__34651_35070 = G__35082;
i__34652_35071 = G__35083;
continue;
}
} else {
var temp__5735__auto___35084 = cljs.core.seq(seq__34648_35068);
if(temp__5735__auto___35084){
var seq__34648_35085__$1 = temp__5735__auto___35084;
if(cljs.core.chunked_seq_QMARK_(seq__34648_35085__$1)){
var c__4550__auto___35086 = cljs.core.chunk_first(seq__34648_35085__$1);
var G__35087 = cljs.core.chunk_rest(seq__34648_35085__$1);
var G__35088 = c__4550__auto___35086;
var G__35089 = cljs.core.count(c__4550__auto___35086);
var G__35090 = (0);
seq__34648_35068 = G__35087;
chunk__34650_35069 = G__35088;
count__34651_35070 = G__35089;
i__34652_35071 = G__35090;
continue;
} else {
var child_35092 = cljs.core.first(seq__34648_35085__$1);
if(cljs.core.truth_(child_35092)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35092);


var G__35094 = cljs.core.next(seq__34648_35085__$1);
var G__35095 = null;
var G__35096 = (0);
var G__35097 = (0);
seq__34648_35068 = G__35094;
chunk__34650_35069 = G__35095;
count__34651_35070 = G__35096;
i__34652_35071 = G__35097;
continue;
} else {
var G__35099 = cljs.core.next(seq__34648_35085__$1);
var G__35100 = null;
var G__35101 = (0);
var G__35102 = (0);
seq__34648_35068 = G__35099;
chunk__34650_35069 = G__35100;
count__34651_35070 = G__35101;
i__34652_35071 = G__35102;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35067);
}


var G__35103 = seq__34590_35062;
var G__35104 = chunk__34591_35063;
var G__35105 = count__34592_35064;
var G__35106 = (i__34593_35065 + (1));
seq__34590_35062 = G__35103;
chunk__34591_35063 = G__35104;
count__34592_35064 = G__35105;
i__34593_35065 = G__35106;
continue;
} else {
var temp__5735__auto___35107 = cljs.core.seq(seq__34590_35062);
if(temp__5735__auto___35107){
var seq__34590_35108__$1 = temp__5735__auto___35107;
if(cljs.core.chunked_seq_QMARK_(seq__34590_35108__$1)){
var c__4550__auto___35109 = cljs.core.chunk_first(seq__34590_35108__$1);
var G__35110 = cljs.core.chunk_rest(seq__34590_35108__$1);
var G__35111 = c__4550__auto___35109;
var G__35112 = cljs.core.count(c__4550__auto___35109);
var G__35113 = (0);
seq__34590_35062 = G__35110;
chunk__34591_35063 = G__35111;
count__34592_35064 = G__35112;
i__34593_35065 = G__35113;
continue;
} else {
var child_struct_35114 = cljs.core.first(seq__34590_35108__$1);
var children_35115 = shadow.dom.dom_node(child_struct_35114);
if(cljs.core.seq_QMARK_(children_35115)){
var seq__34660_35116 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35115));
var chunk__34662_35117 = null;
var count__34663_35118 = (0);
var i__34664_35119 = (0);
while(true){
if((i__34664_35119 < count__34663_35118)){
var child_35120 = chunk__34662_35117.cljs$core$IIndexed$_nth$arity$2(null,i__34664_35119);
if(cljs.core.truth_(child_35120)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35120);


var G__35121 = seq__34660_35116;
var G__35122 = chunk__34662_35117;
var G__35123 = count__34663_35118;
var G__35124 = (i__34664_35119 + (1));
seq__34660_35116 = G__35121;
chunk__34662_35117 = G__35122;
count__34663_35118 = G__35123;
i__34664_35119 = G__35124;
continue;
} else {
var G__35125 = seq__34660_35116;
var G__35126 = chunk__34662_35117;
var G__35127 = count__34663_35118;
var G__35128 = (i__34664_35119 + (1));
seq__34660_35116 = G__35125;
chunk__34662_35117 = G__35126;
count__34663_35118 = G__35127;
i__34664_35119 = G__35128;
continue;
}
} else {
var temp__5735__auto___35129__$1 = cljs.core.seq(seq__34660_35116);
if(temp__5735__auto___35129__$1){
var seq__34660_35130__$1 = temp__5735__auto___35129__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34660_35130__$1)){
var c__4550__auto___35131 = cljs.core.chunk_first(seq__34660_35130__$1);
var G__35132 = cljs.core.chunk_rest(seq__34660_35130__$1);
var G__35133 = c__4550__auto___35131;
var G__35134 = cljs.core.count(c__4550__auto___35131);
var G__35135 = (0);
seq__34660_35116 = G__35132;
chunk__34662_35117 = G__35133;
count__34663_35118 = G__35134;
i__34664_35119 = G__35135;
continue;
} else {
var child_35136 = cljs.core.first(seq__34660_35130__$1);
if(cljs.core.truth_(child_35136)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35136);


var G__35137 = cljs.core.next(seq__34660_35130__$1);
var G__35138 = null;
var G__35139 = (0);
var G__35140 = (0);
seq__34660_35116 = G__35137;
chunk__34662_35117 = G__35138;
count__34663_35118 = G__35139;
i__34664_35119 = G__35140;
continue;
} else {
var G__35141 = cljs.core.next(seq__34660_35130__$1);
var G__35142 = null;
var G__35143 = (0);
var G__35144 = (0);
seq__34660_35116 = G__35141;
chunk__34662_35117 = G__35142;
count__34663_35118 = G__35143;
i__34664_35119 = G__35144;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35115);
}


var G__35145 = cljs.core.next(seq__34590_35108__$1);
var G__35146 = null;
var G__35147 = (0);
var G__35148 = (0);
seq__34590_35062 = G__35145;
chunk__34591_35063 = G__35146;
count__34592_35064 = G__35147;
i__34593_35065 = G__35148;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34692 = cljs.core.seq(node);
var chunk__34693 = null;
var count__34694 = (0);
var i__34695 = (0);
while(true){
if((i__34695 < count__34694)){
var n = chunk__34693.cljs$core$IIndexed$_nth$arity$2(null,i__34695);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35156 = seq__34692;
var G__35157 = chunk__34693;
var G__35158 = count__34694;
var G__35159 = (i__34695 + (1));
seq__34692 = G__35156;
chunk__34693 = G__35157;
count__34694 = G__35158;
i__34695 = G__35159;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34692);
if(temp__5735__auto__){
var seq__34692__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34692__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34692__$1);
var G__35160 = cljs.core.chunk_rest(seq__34692__$1);
var G__35161 = c__4550__auto__;
var G__35162 = cljs.core.count(c__4550__auto__);
var G__35163 = (0);
seq__34692 = G__35160;
chunk__34693 = G__35161;
count__34694 = G__35162;
i__34695 = G__35163;
continue;
} else {
var n = cljs.core.first(seq__34692__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35164 = cljs.core.next(seq__34692__$1);
var G__35165 = null;
var G__35166 = (0);
var G__35167 = (0);
seq__34692 = G__35164;
chunk__34693 = G__35165;
count__34694 = G__35166;
i__34695 = G__35167;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34707 = arguments.length;
switch (G__34707) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34709 = arguments.length;
switch (G__34709) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34720 = arguments.length;
switch (G__34720) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4120__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35171 = arguments.length;
var i__4731__auto___35172 = (0);
while(true){
if((i__4731__auto___35172 < len__4730__auto___35171)){
args__4736__auto__.push((arguments[i__4731__auto___35172]));

var G__35173 = (i__4731__auto___35172 + (1));
i__4731__auto___35172 = G__35173;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34735_35174 = cljs.core.seq(nodes);
var chunk__34737_35175 = null;
var count__34738_35176 = (0);
var i__34739_35177 = (0);
while(true){
if((i__34739_35177 < count__34738_35176)){
var node_35178 = chunk__34737_35175.cljs$core$IIndexed$_nth$arity$2(null,i__34739_35177);
fragment.appendChild(shadow.dom._to_dom(node_35178));


var G__35179 = seq__34735_35174;
var G__35180 = chunk__34737_35175;
var G__35181 = count__34738_35176;
var G__35182 = (i__34739_35177 + (1));
seq__34735_35174 = G__35179;
chunk__34737_35175 = G__35180;
count__34738_35176 = G__35181;
i__34739_35177 = G__35182;
continue;
} else {
var temp__5735__auto___35187 = cljs.core.seq(seq__34735_35174);
if(temp__5735__auto___35187){
var seq__34735_35188__$1 = temp__5735__auto___35187;
if(cljs.core.chunked_seq_QMARK_(seq__34735_35188__$1)){
var c__4550__auto___35189 = cljs.core.chunk_first(seq__34735_35188__$1);
var G__35190 = cljs.core.chunk_rest(seq__34735_35188__$1);
var G__35191 = c__4550__auto___35189;
var G__35192 = cljs.core.count(c__4550__auto___35189);
var G__35193 = (0);
seq__34735_35174 = G__35190;
chunk__34737_35175 = G__35191;
count__34738_35176 = G__35192;
i__34739_35177 = G__35193;
continue;
} else {
var node_35197 = cljs.core.first(seq__34735_35188__$1);
fragment.appendChild(shadow.dom._to_dom(node_35197));


var G__35198 = cljs.core.next(seq__34735_35188__$1);
var G__35199 = null;
var G__35200 = (0);
var G__35201 = (0);
seq__34735_35174 = G__35198;
chunk__34737_35175 = G__35199;
count__34738_35176 = G__35200;
i__34739_35177 = G__35201;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34733){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34733));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34744_35202 = cljs.core.seq(scripts);
var chunk__34745_35203 = null;
var count__34746_35204 = (0);
var i__34747_35205 = (0);
while(true){
if((i__34747_35205 < count__34746_35204)){
var vec__34755_35206 = chunk__34745_35203.cljs$core$IIndexed$_nth$arity$2(null,i__34747_35205);
var script_tag_35207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755_35206,(0),null);
var script_body_35208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755_35206,(1),null);
eval(script_body_35208);


var G__35209 = seq__34744_35202;
var G__35210 = chunk__34745_35203;
var G__35211 = count__34746_35204;
var G__35212 = (i__34747_35205 + (1));
seq__34744_35202 = G__35209;
chunk__34745_35203 = G__35210;
count__34746_35204 = G__35211;
i__34747_35205 = G__35212;
continue;
} else {
var temp__5735__auto___35213 = cljs.core.seq(seq__34744_35202);
if(temp__5735__auto___35213){
var seq__34744_35214__$1 = temp__5735__auto___35213;
if(cljs.core.chunked_seq_QMARK_(seq__34744_35214__$1)){
var c__4550__auto___35215 = cljs.core.chunk_first(seq__34744_35214__$1);
var G__35216 = cljs.core.chunk_rest(seq__34744_35214__$1);
var G__35217 = c__4550__auto___35215;
var G__35218 = cljs.core.count(c__4550__auto___35215);
var G__35219 = (0);
seq__34744_35202 = G__35216;
chunk__34745_35203 = G__35217;
count__34746_35204 = G__35218;
i__34747_35205 = G__35219;
continue;
} else {
var vec__34758_35220 = cljs.core.first(seq__34744_35214__$1);
var script_tag_35221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34758_35220,(0),null);
var script_body_35222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34758_35220,(1),null);
eval(script_body_35222);


var G__35223 = cljs.core.next(seq__34744_35214__$1);
var G__35224 = null;
var G__35225 = (0);
var G__35226 = (0);
seq__34744_35202 = G__35223;
chunk__34745_35203 = G__35224;
count__34746_35204 = G__35225;
i__34747_35205 = G__35226;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34761){
var vec__34764 = p__34761;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34775 = arguments.length;
switch (G__34775) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34782 = cljs.core.seq(style_keys);
var chunk__34783 = null;
var count__34784 = (0);
var i__34785 = (0);
while(true){
if((i__34785 < count__34784)){
var it = chunk__34783.cljs$core$IIndexed$_nth$arity$2(null,i__34785);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35234 = seq__34782;
var G__35235 = chunk__34783;
var G__35236 = count__34784;
var G__35237 = (i__34785 + (1));
seq__34782 = G__35234;
chunk__34783 = G__35235;
count__34784 = G__35236;
i__34785 = G__35237;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34782);
if(temp__5735__auto__){
var seq__34782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34782__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34782__$1);
var G__35238 = cljs.core.chunk_rest(seq__34782__$1);
var G__35239 = c__4550__auto__;
var G__35240 = cljs.core.count(c__4550__auto__);
var G__35241 = (0);
seq__34782 = G__35238;
chunk__34783 = G__35239;
count__34784 = G__35240;
i__34785 = G__35241;
continue;
} else {
var it = cljs.core.first(seq__34782__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35242 = cljs.core.next(seq__34782__$1);
var G__35243 = null;
var G__35244 = (0);
var G__35245 = (0);
seq__34782 = G__35242;
chunk__34783 = G__35243;
count__34784 = G__35244;
i__34785 = G__35245;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k34793,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__34797 = k34793;
var G__34797__$1 = (((G__34797 instanceof cljs.core.Keyword))?G__34797.fqn:null);
switch (G__34797__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34793,else__4377__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__34798){
var vec__34799 = p__34798;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34799,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34799,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34792){
var self__ = this;
var G__34792__$1 = this;
return (new cljs.core.RecordIter((0),G__34792__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34794,other34795){
var self__ = this;
var this34794__$1 = this;
return (((!((other34795 == null)))) && ((this34794__$1.constructor === other34795.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34794__$1.x,other34795.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34794__$1.y,other34795.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34794__$1.__extmap,other34795.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__34792){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__34805 = cljs.core.keyword_identical_QMARK_;
var expr__34806 = k__4382__auto__;
if(cljs.core.truth_((pred__34805.cljs$core$IFn$_invoke$arity$2 ? pred__34805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34806) : pred__34805.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34806)))){
return (new shadow.dom.Coordinate(G__34792,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34805.cljs$core$IFn$_invoke$arity$2 ? pred__34805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34806) : pred__34805.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34806)))){
return (new shadow.dom.Coordinate(self__.x,G__34792,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__34792),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__34792){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34792,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34796){
var extmap__4413__auto__ = (function (){var G__34808 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34796,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34796)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34808);
} else {
return G__34808;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34796),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34796),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k34810,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__34814 = k34810;
var G__34814__$1 = (((G__34814 instanceof cljs.core.Keyword))?G__34814.fqn:null);
switch (G__34814__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34810,else__4377__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__34815){
var vec__34816 = p__34815;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34816,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34816,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Size{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34809){
var self__ = this;
var G__34809__$1 = this;
return (new cljs.core.RecordIter((0),G__34809__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34811,other34812){
var self__ = this;
var this34811__$1 = this;
return (((!((other34812 == null)))) && ((this34811__$1.constructor === other34812.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34811__$1.w,other34812.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34811__$1.h,other34812.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34811__$1.__extmap,other34812.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__34809){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__34819 = cljs.core.keyword_identical_QMARK_;
var expr__34820 = k__4382__auto__;
if(cljs.core.truth_((pred__34819.cljs$core$IFn$_invoke$arity$2 ? pred__34819.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34820) : pred__34819.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34820)))){
return (new shadow.dom.Size(G__34809,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34819.cljs$core$IFn$_invoke$arity$2 ? pred__34819.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34820) : pred__34819.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34820)))){
return (new shadow.dom.Size(self__.w,G__34809,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__34809),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__34809){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34809,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34813){
var extmap__4413__auto__ = (function (){var G__34824 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34813,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34813)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34824);
} else {
return G__34824;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34813),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34813),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__35288 = (i + (1));
var G__35289 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35288;
ret = G__35289;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34841){
var vec__34842 = p__34841;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34842,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34842,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34847 = arguments.length;
switch (G__34847) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35291 = ps;
var G__35292 = (i + (1));
el__$1 = G__35291;
i = G__35292;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34859 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34859,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34859,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34859,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34863_35293 = cljs.core.seq(props);
var chunk__34864_35294 = null;
var count__34865_35295 = (0);
var i__34866_35296 = (0);
while(true){
if((i__34866_35296 < count__34865_35295)){
var vec__34879_35297 = chunk__34864_35294.cljs$core$IIndexed$_nth$arity$2(null,i__34866_35296);
var k_35298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34879_35297,(0),null);
var v_35299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34879_35297,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35298);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35298),v_35299);


var G__35300 = seq__34863_35293;
var G__35301 = chunk__34864_35294;
var G__35302 = count__34865_35295;
var G__35303 = (i__34866_35296 + (1));
seq__34863_35293 = G__35300;
chunk__34864_35294 = G__35301;
count__34865_35295 = G__35302;
i__34866_35296 = G__35303;
continue;
} else {
var temp__5735__auto___35304 = cljs.core.seq(seq__34863_35293);
if(temp__5735__auto___35304){
var seq__34863_35305__$1 = temp__5735__auto___35304;
if(cljs.core.chunked_seq_QMARK_(seq__34863_35305__$1)){
var c__4550__auto___35306 = cljs.core.chunk_first(seq__34863_35305__$1);
var G__35307 = cljs.core.chunk_rest(seq__34863_35305__$1);
var G__35308 = c__4550__auto___35306;
var G__35309 = cljs.core.count(c__4550__auto___35306);
var G__35310 = (0);
seq__34863_35293 = G__35307;
chunk__34864_35294 = G__35308;
count__34865_35295 = G__35309;
i__34866_35296 = G__35310;
continue;
} else {
var vec__34887_35311 = cljs.core.first(seq__34863_35305__$1);
var k_35312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34887_35311,(0),null);
var v_35313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34887_35311,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35312);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35312),v_35313);


var G__35314 = cljs.core.next(seq__34863_35305__$1);
var G__35315 = null;
var G__35316 = (0);
var G__35317 = (0);
seq__34863_35293 = G__35314;
chunk__34864_35294 = G__35315;
count__34865_35295 = G__35316;
i__34866_35296 = G__35317;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34895 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34895,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34895,(1),null);
var seq__34898_35318 = cljs.core.seq(node_children);
var chunk__34900_35319 = null;
var count__34901_35320 = (0);
var i__34902_35321 = (0);
while(true){
if((i__34902_35321 < count__34901_35320)){
var child_struct_35322 = chunk__34900_35319.cljs$core$IIndexed$_nth$arity$2(null,i__34902_35321);
if((!((child_struct_35322 == null)))){
if(typeof child_struct_35322 === 'string'){
var text_35326 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35326),child_struct_35322].join(''));
} else {
var children_35327 = shadow.dom.svg_node(child_struct_35322);
if(cljs.core.seq_QMARK_(children_35327)){
var seq__34935_35328 = cljs.core.seq(children_35327);
var chunk__34937_35329 = null;
var count__34938_35330 = (0);
var i__34939_35331 = (0);
while(true){
if((i__34939_35331 < count__34938_35330)){
var child_35332 = chunk__34937_35329.cljs$core$IIndexed$_nth$arity$2(null,i__34939_35331);
if(cljs.core.truth_(child_35332)){
node.appendChild(child_35332);


var G__35333 = seq__34935_35328;
var G__35334 = chunk__34937_35329;
var G__35335 = count__34938_35330;
var G__35336 = (i__34939_35331 + (1));
seq__34935_35328 = G__35333;
chunk__34937_35329 = G__35334;
count__34938_35330 = G__35335;
i__34939_35331 = G__35336;
continue;
} else {
var G__35337 = seq__34935_35328;
var G__35338 = chunk__34937_35329;
var G__35339 = count__34938_35330;
var G__35340 = (i__34939_35331 + (1));
seq__34935_35328 = G__35337;
chunk__34937_35329 = G__35338;
count__34938_35330 = G__35339;
i__34939_35331 = G__35340;
continue;
}
} else {
var temp__5735__auto___35341 = cljs.core.seq(seq__34935_35328);
if(temp__5735__auto___35341){
var seq__34935_35342__$1 = temp__5735__auto___35341;
if(cljs.core.chunked_seq_QMARK_(seq__34935_35342__$1)){
var c__4550__auto___35343 = cljs.core.chunk_first(seq__34935_35342__$1);
var G__35344 = cljs.core.chunk_rest(seq__34935_35342__$1);
var G__35345 = c__4550__auto___35343;
var G__35346 = cljs.core.count(c__4550__auto___35343);
var G__35347 = (0);
seq__34935_35328 = G__35344;
chunk__34937_35329 = G__35345;
count__34938_35330 = G__35346;
i__34939_35331 = G__35347;
continue;
} else {
var child_35348 = cljs.core.first(seq__34935_35342__$1);
if(cljs.core.truth_(child_35348)){
node.appendChild(child_35348);


var G__35349 = cljs.core.next(seq__34935_35342__$1);
var G__35350 = null;
var G__35351 = (0);
var G__35352 = (0);
seq__34935_35328 = G__35349;
chunk__34937_35329 = G__35350;
count__34938_35330 = G__35351;
i__34939_35331 = G__35352;
continue;
} else {
var G__35353 = cljs.core.next(seq__34935_35342__$1);
var G__35354 = null;
var G__35355 = (0);
var G__35356 = (0);
seq__34935_35328 = G__35353;
chunk__34937_35329 = G__35354;
count__34938_35330 = G__35355;
i__34939_35331 = G__35356;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35327);
}
}


var G__35358 = seq__34898_35318;
var G__35359 = chunk__34900_35319;
var G__35360 = count__34901_35320;
var G__35361 = (i__34902_35321 + (1));
seq__34898_35318 = G__35358;
chunk__34900_35319 = G__35359;
count__34901_35320 = G__35360;
i__34902_35321 = G__35361;
continue;
} else {
var G__35362 = seq__34898_35318;
var G__35363 = chunk__34900_35319;
var G__35364 = count__34901_35320;
var G__35365 = (i__34902_35321 + (1));
seq__34898_35318 = G__35362;
chunk__34900_35319 = G__35363;
count__34901_35320 = G__35364;
i__34902_35321 = G__35365;
continue;
}
} else {
var temp__5735__auto___35366 = cljs.core.seq(seq__34898_35318);
if(temp__5735__auto___35366){
var seq__34898_35367__$1 = temp__5735__auto___35366;
if(cljs.core.chunked_seq_QMARK_(seq__34898_35367__$1)){
var c__4550__auto___35368 = cljs.core.chunk_first(seq__34898_35367__$1);
var G__35369 = cljs.core.chunk_rest(seq__34898_35367__$1);
var G__35370 = c__4550__auto___35368;
var G__35371 = cljs.core.count(c__4550__auto___35368);
var G__35372 = (0);
seq__34898_35318 = G__35369;
chunk__34900_35319 = G__35370;
count__34901_35320 = G__35371;
i__34902_35321 = G__35372;
continue;
} else {
var child_struct_35373 = cljs.core.first(seq__34898_35367__$1);
if((!((child_struct_35373 == null)))){
if(typeof child_struct_35373 === 'string'){
var text_35374 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35374),child_struct_35373].join(''));
} else {
var children_35375 = shadow.dom.svg_node(child_struct_35373);
if(cljs.core.seq_QMARK_(children_35375)){
var seq__34954_35376 = cljs.core.seq(children_35375);
var chunk__34956_35377 = null;
var count__34957_35378 = (0);
var i__34958_35379 = (0);
while(true){
if((i__34958_35379 < count__34957_35378)){
var child_35380 = chunk__34956_35377.cljs$core$IIndexed$_nth$arity$2(null,i__34958_35379);
if(cljs.core.truth_(child_35380)){
node.appendChild(child_35380);


var G__35382 = seq__34954_35376;
var G__35383 = chunk__34956_35377;
var G__35384 = count__34957_35378;
var G__35385 = (i__34958_35379 + (1));
seq__34954_35376 = G__35382;
chunk__34956_35377 = G__35383;
count__34957_35378 = G__35384;
i__34958_35379 = G__35385;
continue;
} else {
var G__35386 = seq__34954_35376;
var G__35387 = chunk__34956_35377;
var G__35388 = count__34957_35378;
var G__35389 = (i__34958_35379 + (1));
seq__34954_35376 = G__35386;
chunk__34956_35377 = G__35387;
count__34957_35378 = G__35388;
i__34958_35379 = G__35389;
continue;
}
} else {
var temp__5735__auto___35390__$1 = cljs.core.seq(seq__34954_35376);
if(temp__5735__auto___35390__$1){
var seq__34954_35391__$1 = temp__5735__auto___35390__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34954_35391__$1)){
var c__4550__auto___35392 = cljs.core.chunk_first(seq__34954_35391__$1);
var G__35393 = cljs.core.chunk_rest(seq__34954_35391__$1);
var G__35394 = c__4550__auto___35392;
var G__35395 = cljs.core.count(c__4550__auto___35392);
var G__35396 = (0);
seq__34954_35376 = G__35393;
chunk__34956_35377 = G__35394;
count__34957_35378 = G__35395;
i__34958_35379 = G__35396;
continue;
} else {
var child_35397 = cljs.core.first(seq__34954_35391__$1);
if(cljs.core.truth_(child_35397)){
node.appendChild(child_35397);


var G__35398 = cljs.core.next(seq__34954_35391__$1);
var G__35399 = null;
var G__35400 = (0);
var G__35401 = (0);
seq__34954_35376 = G__35398;
chunk__34956_35377 = G__35399;
count__34957_35378 = G__35400;
i__34958_35379 = G__35401;
continue;
} else {
var G__35402 = cljs.core.next(seq__34954_35391__$1);
var G__35403 = null;
var G__35404 = (0);
var G__35405 = (0);
seq__34954_35376 = G__35402;
chunk__34956_35377 = G__35403;
count__34957_35378 = G__35404;
i__34958_35379 = G__35405;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35375);
}
}


var G__35406 = cljs.core.next(seq__34898_35367__$1);
var G__35407 = null;
var G__35408 = (0);
var G__35409 = (0);
seq__34898_35318 = G__35406;
chunk__34900_35319 = G__35407;
count__34901_35320 = G__35408;
i__34902_35321 = G__35409;
continue;
} else {
var G__35410 = cljs.core.next(seq__34898_35367__$1);
var G__35411 = null;
var G__35412 = (0);
var G__35413 = (0);
seq__34898_35318 = G__35410;
chunk__34900_35319 = G__35411;
count__34901_35320 = G__35412;
i__34902_35321 = G__35413;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35414 = arguments.length;
var i__4731__auto___35415 = (0);
while(true){
if((i__4731__auto___35415 < len__4730__auto___35414)){
args__4736__auto__.push((arguments[i__4731__auto___35415]));

var G__35416 = (i__4731__auto___35415 + (1));
i__4731__auto___35415 = G__35416;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34984){
var G__34985 = cljs.core.first(seq34984);
var seq34984__$1 = cljs.core.next(seq34984);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34985,seq34984__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34987 = arguments.length;
switch (G__34987) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4109__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4109__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4109__auto__;
}
})())){
var c__32649__auto___35422 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32650__auto__ = (function (){var switch__32592__auto__ = (function (state_34992){
var state_val_34993 = (state_34992[(1)]);
if((state_val_34993 === (1))){
var state_34992__$1 = state_34992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34992__$1,(2),once_or_cleanup);
} else {
if((state_val_34993 === (2))){
var inst_34989 = (state_34992[(2)]);
var inst_34990 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34992__$1 = (function (){var statearr_34994 = state_34992;
(statearr_34994[(7)] = inst_34989);

return statearr_34994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34992__$1,inst_34990);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32593__auto__ = null;
var shadow$dom$state_machine__32593__auto____0 = (function (){
var statearr_34995 = [null,null,null,null,null,null,null,null];
(statearr_34995[(0)] = shadow$dom$state_machine__32593__auto__);

(statearr_34995[(1)] = (1));

return statearr_34995;
});
var shadow$dom$state_machine__32593__auto____1 = (function (state_34992){
while(true){
var ret_value__32594__auto__ = (function (){try{while(true){
var result__32595__auto__ = switch__32592__auto__(state_34992);
if(cljs.core.keyword_identical_QMARK_(result__32595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32595__auto__;
}
break;
}
}catch (e34996){var ex__32596__auto__ = e34996;
var statearr_34997_35429 = state_34992;
(statearr_34997_35429[(2)] = ex__32596__auto__);


if(cljs.core.seq((state_34992[(4)]))){
var statearr_34998_35430 = state_34992;
(statearr_34998_35430[(1)] = cljs.core.first((state_34992[(4)])));

} else {
throw ex__32596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35431 = state_34992;
state_34992 = G__35431;
continue;
} else {
return ret_value__32594__auto__;
}
break;
}
});
shadow$dom$state_machine__32593__auto__ = function(state_34992){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32593__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32593__auto____1.call(this,state_34992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32593__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32593__auto____0;
shadow$dom$state_machine__32593__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32593__auto____1;
return shadow$dom$state_machine__32593__auto__;
})()
})();
var state__32651__auto__ = (function (){var statearr_34999 = f__32650__auto__();
(statearr_34999[(6)] = c__32649__auto___35422);

return statearr_34999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32651__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
