goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37793){
var map__37794 = p__37793;
var map__37794__$1 = (((((!((map__37794 == null))))?(((((map__37794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37794):map__37794);
var m = map__37794__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37794__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37794__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4120__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37797_38018 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37799_38019 = null;
var count__37800_38020 = (0);
var i__37801_38021 = (0);
while(true){
if((i__37801_38021 < count__37800_38020)){
var f_38022 = chunk__37799_38019.cljs$core$IIndexed$_nth$arity$2(null,i__37801_38021);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38022], 0));


var G__38023 = seq__37797_38018;
var G__38024 = chunk__37799_38019;
var G__38025 = count__37800_38020;
var G__38026 = (i__37801_38021 + (1));
seq__37797_38018 = G__38023;
chunk__37799_38019 = G__38024;
count__37800_38020 = G__38025;
i__37801_38021 = G__38026;
continue;
} else {
var temp__5735__auto___38027 = cljs.core.seq(seq__37797_38018);
if(temp__5735__auto___38027){
var seq__37797_38028__$1 = temp__5735__auto___38027;
if(cljs.core.chunked_seq_QMARK_(seq__37797_38028__$1)){
var c__4550__auto___38029 = cljs.core.chunk_first(seq__37797_38028__$1);
var G__38030 = cljs.core.chunk_rest(seq__37797_38028__$1);
var G__38031 = c__4550__auto___38029;
var G__38032 = cljs.core.count(c__4550__auto___38029);
var G__38033 = (0);
seq__37797_38018 = G__38030;
chunk__37799_38019 = G__38031;
count__37800_38020 = G__38032;
i__37801_38021 = G__38033;
continue;
} else {
var f_38034 = cljs.core.first(seq__37797_38028__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38034], 0));


var G__38035 = cljs.core.next(seq__37797_38028__$1);
var G__38036 = null;
var G__38037 = (0);
var G__38038 = (0);
seq__37797_38018 = G__38035;
chunk__37799_38019 = G__38036;
count__37800_38020 = G__38037;
i__37801_38021 = G__38038;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38039 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38039], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38039)))?cljs.core.second(arglists_38039):arglists_38039)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37806_38041 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37807_38042 = null;
var count__37808_38043 = (0);
var i__37809_38044 = (0);
while(true){
if((i__37809_38044 < count__37808_38043)){
var vec__37821_38045 = chunk__37807_38042.cljs$core$IIndexed$_nth$arity$2(null,i__37809_38044);
var name_38046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37821_38045,(0),null);
var map__37824_38047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37821_38045,(1),null);
var map__37824_38048__$1 = (((((!((map__37824_38047 == null))))?(((((map__37824_38047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37824_38047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37824_38047):map__37824_38047);
var doc_38049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37824_38048__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37824_38048__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38046], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38050], 0));

if(cljs.core.truth_(doc_38049)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38049], 0));
} else {
}


var G__38051 = seq__37806_38041;
var G__38052 = chunk__37807_38042;
var G__38053 = count__37808_38043;
var G__38054 = (i__37809_38044 + (1));
seq__37806_38041 = G__38051;
chunk__37807_38042 = G__38052;
count__37808_38043 = G__38053;
i__37809_38044 = G__38054;
continue;
} else {
var temp__5735__auto___38055 = cljs.core.seq(seq__37806_38041);
if(temp__5735__auto___38055){
var seq__37806_38056__$1 = temp__5735__auto___38055;
if(cljs.core.chunked_seq_QMARK_(seq__37806_38056__$1)){
var c__4550__auto___38057 = cljs.core.chunk_first(seq__37806_38056__$1);
var G__38058 = cljs.core.chunk_rest(seq__37806_38056__$1);
var G__38059 = c__4550__auto___38057;
var G__38060 = cljs.core.count(c__4550__auto___38057);
var G__38061 = (0);
seq__37806_38041 = G__38058;
chunk__37807_38042 = G__38059;
count__37808_38043 = G__38060;
i__37809_38044 = G__38061;
continue;
} else {
var vec__37831_38062 = cljs.core.first(seq__37806_38056__$1);
var name_38063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37831_38062,(0),null);
var map__37834_38064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37831_38062,(1),null);
var map__37834_38065__$1 = (((((!((map__37834_38064 == null))))?(((((map__37834_38064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37834_38064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37834_38064):map__37834_38064);
var doc_38066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37834_38065__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37834_38065__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38063], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38067], 0));

if(cljs.core.truth_(doc_38066)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38066], 0));
} else {
}


var G__38068 = cljs.core.next(seq__37806_38056__$1);
var G__38069 = null;
var G__38070 = (0);
var G__38071 = (0);
seq__37806_38041 = G__38068;
chunk__37807_38042 = G__38069;
count__37808_38043 = G__38070;
i__37809_38044 = G__38071;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37853 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37854 = null;
var count__37855 = (0);
var i__37856 = (0);
while(true){
if((i__37856 < count__37855)){
var role = chunk__37854.cljs$core$IIndexed$_nth$arity$2(null,i__37856);
var temp__5735__auto___38072__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38072__$1)){
var spec_38073 = temp__5735__auto___38072__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38073)], 0));
} else {
}


var G__38074 = seq__37853;
var G__38075 = chunk__37854;
var G__38076 = count__37855;
var G__38077 = (i__37856 + (1));
seq__37853 = G__38074;
chunk__37854 = G__38075;
count__37855 = G__38076;
i__37856 = G__38077;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37853);
if(temp__5735__auto____$1){
var seq__37853__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37853__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37853__$1);
var G__38078 = cljs.core.chunk_rest(seq__37853__$1);
var G__38079 = c__4550__auto__;
var G__38080 = cljs.core.count(c__4550__auto__);
var G__38081 = (0);
seq__37853 = G__38078;
chunk__37854 = G__38079;
count__37855 = G__38080;
i__37856 = G__38081;
continue;
} else {
var role = cljs.core.first(seq__37853__$1);
var temp__5735__auto___38082__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38082__$2)){
var spec_38083 = temp__5735__auto___38082__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38083)], 0));
} else {
}


var G__38084 = cljs.core.next(seq__37853__$1);
var G__38085 = null;
var G__38086 = (0);
var G__38087 = (0);
seq__37853 = G__38084;
chunk__37854 = G__38085;
count__37855 = G__38086;
i__37856 = G__38087;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38089 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38090 = cljs.core.ex_cause(t);
via = G__38089;
t = G__38090;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37938 = datafied_throwable;
var map__37938__$1 = (((((!((map__37938 == null))))?(((((map__37938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37938):map__37938);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37938__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37938__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37938__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37939 = cljs.core.last(via);
var map__37939__$1 = (((((!((map__37939 == null))))?(((((map__37939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37939):map__37939);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37939__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37939__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37939__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37940 = data;
var map__37940__$1 = (((((!((map__37940 == null))))?(((((map__37940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37940):map__37940);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37940__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37940__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37940__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37941 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37941__$1 = (((((!((map__37941 == null))))?(((((map__37941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37941):map__37941);
var top_data = map__37941__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37941__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37947 = phase;
var G__37947__$1 = (((G__37947 instanceof cljs.core.Keyword))?G__37947.fqn:null);
switch (G__37947__$1) {
case "read-source":
var map__37948 = data;
var map__37948__$1 = (((((!((map__37948 == null))))?(((((map__37948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37948):map__37948);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37951 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37951__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37951,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37951);
var G__37951__$2 = (cljs.core.truth_((function (){var fexpr__37952 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37952.cljs$core$IFn$_invoke$arity$1 ? fexpr__37952.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37952.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37951__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37951__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37951__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37951__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37954 = top_data;
var G__37954__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37954,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37954);
var G__37954__$2 = (cljs.core.truth_((function (){var fexpr__37955 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37955.cljs$core$IFn$_invoke$arity$1 ? fexpr__37955.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37955.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37954__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37954__$1);
var G__37954__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37954__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37954__$2);
var G__37954__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37954__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37954__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37954__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37954__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37957 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37957,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37957,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37957,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37957,(3),null);
var G__37960 = top_data;
var G__37960__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37960,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37960);
var G__37960__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37960__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37960__$1);
var G__37960__$3 = (cljs.core.truth_((function (){var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37960__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37960__$2);
var G__37960__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37960__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37960__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37960__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37960__$4;
}

break;
case "execution":
var vec__37961 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37961,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37961,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37961,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37961,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37936_SHARP_){
var or__4120__auto__ = (p1__37936_SHARP_ == null);
if(or__4120__auto__){
return or__4120__auto__;
} else {
var fexpr__37966 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37966.cljs$core$IFn$_invoke$arity$1 ? fexpr__37966.cljs$core$IFn$_invoke$arity$1(p1__37936_SHARP_) : fexpr__37966.call(null,p1__37936_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return line;
}
})();
var G__37967 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37967__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37967,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37967);
var G__37967__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37967__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37967__$1);
var G__37967__$3 = (cljs.core.truth_((function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37967__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37967__$2);
var G__37967__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37967__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37967__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37967__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37967__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37947__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37970){
var map__37971 = p__37970;
var map__37971__$1 = (((((!((map__37971 == null))))?(((((map__37971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37971):map__37971);
var triage_data = map__37971__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37971__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37971__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37971__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37971__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37971__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37971__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37971__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37971__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = source;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = line;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4120__auto__ = class$;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37975 = phase;
var G__37975__$1 = (((G__37975 instanceof cljs.core.Keyword))?G__37975.fqn:null);
switch (G__37975__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37978 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37979 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37980 = loc;
var G__37981 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37982_38098 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37983_38099 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37984_38100 = true;
var _STAR_print_fn_STAR__temp_val__37985_38101 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37984_38100);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37985_38101);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37968_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37968_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37983_38099);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37982_38098);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37978,G__37979,G__37980,G__37981) : format.call(null,G__37978,G__37979,G__37980,G__37981));

break;
case "macroexpansion":
var G__37990 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37991 = cause_type;
var G__37992 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37993 = loc;
var G__37994 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37990,G__37991,G__37992,G__37993,G__37994) : format.call(null,G__37990,G__37991,G__37992,G__37993,G__37994));

break;
case "compile-syntax-check":
var G__37995 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37996 = cause_type;
var G__37997 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37998 = loc;
var G__37999 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37995,G__37996,G__37997,G__37998,G__37999) : format.call(null,G__37995,G__37996,G__37997,G__37998,G__37999));

break;
case "compilation":
var G__38000 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38001 = cause_type;
var G__38002 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38003 = loc;
var G__38004 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38000,G__38001,G__38002,G__38003,G__38004) : format.call(null,G__38000,G__38001,G__38002,G__38003,G__38004));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38005 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38006 = symbol;
var G__38007 = loc;
var G__38008 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38009_38103 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38010_38104 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38011_38105 = true;
var _STAR_print_fn_STAR__temp_val__38012_38106 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38011_38105);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38012_38106);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37969_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37969_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38010_38104);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38009_38103);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38005,G__38006,G__38007,G__38008) : format.call(null,G__38005,G__38006,G__38007,G__38008));
} else {
var G__38013 = "Execution error%s at %s(%s).\n%s\n";
var G__38014 = cause_type;
var G__38015 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38016 = loc;
var G__38017 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38013,G__38014,G__38015,G__38016,G__38017) : format.call(null,G__38013,G__38014,G__38015,G__38016,G__38017));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37975__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
