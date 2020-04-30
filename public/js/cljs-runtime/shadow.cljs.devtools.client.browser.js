goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36470 = arguments.length;
var i__4731__auto___36471 = (0);
while(true){
if((i__4731__auto___36471 < len__4730__auto___36470)){
args__4736__auto__.push((arguments[i__4731__auto___36471]));

var G__36473 = (i__4731__auto___36471 + (1));
i__4731__auto___36471 = G__36473;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36192){
var G__36193 = cljs.core.first(seq36192);
var seq36192__$1 = cljs.core.next(seq36192);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36193,seq36192__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36194 = cljs.core.seq(sources);
var chunk__36195 = null;
var count__36196 = (0);
var i__36197 = (0);
while(true){
if((i__36197 < count__36196)){
var map__36215 = chunk__36195.cljs$core$IIndexed$_nth$arity$2(null,i__36197);
var map__36215__$1 = (((((!((map__36215 == null))))?(((((map__36215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36215):map__36215);
var src = map__36215__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36215__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36215__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36215__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36215__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36228){var e_36474 = e36228;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36474);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36474.message)].join('')));
}

var G__36475 = seq__36194;
var G__36476 = chunk__36195;
var G__36477 = count__36196;
var G__36478 = (i__36197 + (1));
seq__36194 = G__36475;
chunk__36195 = G__36476;
count__36196 = G__36477;
i__36197 = G__36478;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36194);
if(temp__5735__auto__){
var seq__36194__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36194__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36194__$1);
var G__36479 = cljs.core.chunk_rest(seq__36194__$1);
var G__36480 = c__4550__auto__;
var G__36481 = cljs.core.count(c__4550__auto__);
var G__36482 = (0);
seq__36194 = G__36479;
chunk__36195 = G__36480;
count__36196 = G__36481;
i__36197 = G__36482;
continue;
} else {
var map__36245 = cljs.core.first(seq__36194__$1);
var map__36245__$1 = (((((!((map__36245 == null))))?(((((map__36245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36245):map__36245);
var src = map__36245__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36250){var e_36490 = e36250;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36490);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36490.message)].join('')));
}

var G__36491 = cljs.core.next(seq__36194__$1);
var G__36492 = null;
var G__36493 = (0);
var G__36494 = (0);
seq__36194 = G__36491;
chunk__36195 = G__36492;
count__36196 = G__36493;
i__36197 = G__36494;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36257 = cljs.core.seq(js_requires);
var chunk__36258 = null;
var count__36259 = (0);
var i__36260 = (0);
while(true){
if((i__36260 < count__36259)){
var js_ns = chunk__36258.cljs$core$IIndexed$_nth$arity$2(null,i__36260);
var require_str_36501 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36501);


var G__36502 = seq__36257;
var G__36503 = chunk__36258;
var G__36504 = count__36259;
var G__36505 = (i__36260 + (1));
seq__36257 = G__36502;
chunk__36258 = G__36503;
count__36259 = G__36504;
i__36260 = G__36505;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36257);
if(temp__5735__auto__){
var seq__36257__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36257__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36257__$1);
var G__36506 = cljs.core.chunk_rest(seq__36257__$1);
var G__36507 = c__4550__auto__;
var G__36508 = cljs.core.count(c__4550__auto__);
var G__36509 = (0);
seq__36257 = G__36506;
chunk__36258 = G__36507;
count__36259 = G__36508;
i__36260 = G__36509;
continue;
} else {
var js_ns = cljs.core.first(seq__36257__$1);
var require_str_36510 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36510);


var G__36511 = cljs.core.next(seq__36257__$1);
var G__36512 = null;
var G__36513 = (0);
var G__36514 = (0);
seq__36257 = G__36511;
chunk__36258 = G__36512;
count__36259 = G__36513;
i__36260 = G__36514;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__36274 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36274) : callback.call(null,G__36274));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__36281){
var map__36282 = p__36281;
var map__36282__$1 = (((((!((map__36282 == null))))?(((((map__36282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36282):map__36282);
var msg = map__36282__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36282__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36282__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36288(s__36289){
return (new cljs.core.LazySeq(null,(function (){
var s__36289__$1 = s__36289;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36289__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36299 = cljs.core.first(xs__6292__auto__);
var map__36299__$1 = (((((!((map__36299 == null))))?(((((map__36299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36299):map__36299);
var src = map__36299__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36299__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36299__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__36289__$1,map__36299,map__36299__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36282,map__36282__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36288_$_iter__36290(s__36291){
return (new cljs.core.LazySeq(null,((function (s__36289__$1,map__36299,map__36299__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36282,map__36282__$1,msg,info,reload_info){
return (function (){
var s__36291__$1 = s__36291;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36291__$1);
if(temp__5735__auto____$1){
var s__36291__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36291__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36291__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36293 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36292 = (0);
while(true){
if((i__36292 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__36292);
cljs.core.chunk_append(b__36293,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36522 = (i__36292 + (1));
i__36292 = G__36522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36293),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36288_$_iter__36290(cljs.core.chunk_rest(s__36291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36293),null);
}
} else {
var warning = cljs.core.first(s__36291__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36288_$_iter__36290(cljs.core.rest(s__36291__$2)));
}
} else {
return null;
}
break;
}
});})(s__36289__$1,map__36299,map__36299__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36282,map__36282__$1,msg,info,reload_info))
,null,null));
});})(s__36289__$1,map__36299,map__36299__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36282,map__36282__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36288(cljs.core.rest(s__36289__$1)));
} else {
var G__36525 = cljs.core.rest(s__36289__$1);
s__36289__$1 = G__36525;
continue;
}
} else {
var G__36526 = cljs.core.rest(s__36289__$1);
s__36289__$1 = G__36526;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__36313_36527 = cljs.core.seq(warnings);
var chunk__36314_36528 = null;
var count__36315_36529 = (0);
var i__36316_36530 = (0);
while(true){
if((i__36316_36530 < count__36315_36529)){
var map__36327_36532 = chunk__36314_36528.cljs$core$IIndexed$_nth$arity$2(null,i__36316_36530);
var map__36327_36533__$1 = (((((!((map__36327_36532 == null))))?(((((map__36327_36532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36327_36532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36327_36532):map__36327_36532);
var w_36535 = map__36327_36533__$1;
var msg_36536__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36327_36533__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36327_36533__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36327_36533__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36327_36533__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36539)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36537),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36538),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36536__$1)].join(''));


var G__36540 = seq__36313_36527;
var G__36541 = chunk__36314_36528;
var G__36542 = count__36315_36529;
var G__36543 = (i__36316_36530 + (1));
seq__36313_36527 = G__36540;
chunk__36314_36528 = G__36541;
count__36315_36529 = G__36542;
i__36316_36530 = G__36543;
continue;
} else {
var temp__5735__auto___36545 = cljs.core.seq(seq__36313_36527);
if(temp__5735__auto___36545){
var seq__36313_36548__$1 = temp__5735__auto___36545;
if(cljs.core.chunked_seq_QMARK_(seq__36313_36548__$1)){
var c__4550__auto___36549 = cljs.core.chunk_first(seq__36313_36548__$1);
var G__36550 = cljs.core.chunk_rest(seq__36313_36548__$1);
var G__36551 = c__4550__auto___36549;
var G__36552 = cljs.core.count(c__4550__auto___36549);
var G__36553 = (0);
seq__36313_36527 = G__36550;
chunk__36314_36528 = G__36551;
count__36315_36529 = G__36552;
i__36316_36530 = G__36553;
continue;
} else {
var map__36332_36554 = cljs.core.first(seq__36313_36548__$1);
var map__36332_36555__$1 = (((((!((map__36332_36554 == null))))?(((((map__36332_36554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36332_36554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36332_36554):map__36332_36554);
var w_36556 = map__36332_36555__$1;
var msg_36557__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36332_36555__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36332_36555__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36332_36555__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36332_36555__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36560)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36558),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36559),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36557__$1)].join(''));


var G__36561 = cljs.core.next(seq__36313_36548__$1);
var G__36562 = null;
var G__36563 = (0);
var G__36564 = (0);
seq__36313_36527 = G__36561;
chunk__36314_36528 = G__36562;
count__36315_36529 = G__36563;
i__36316_36530 = G__36564;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__36280_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36280_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__36363){
var map__36364 = p__36363;
var map__36364__$1 = (((((!((map__36364 == null))))?(((((map__36364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36364):map__36364);
var msg = map__36364__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36364__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36366 = cljs.core.seq(updates);
var chunk__36368 = null;
var count__36369 = (0);
var i__36370 = (0);
while(true){
if((i__36370 < count__36369)){
var path = chunk__36368.cljs$core$IIndexed$_nth$arity$2(null,i__36370);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36404_36568 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36407_36569 = null;
var count__36408_36570 = (0);
var i__36409_36571 = (0);
while(true){
if((i__36409_36571 < count__36408_36570)){
var node_36572 = chunk__36407_36569.cljs$core$IIndexed$_nth$arity$2(null,i__36409_36571);
var path_match_36573 = shadow.cljs.devtools.client.browser.match_paths(node_36572.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36573)){
var new_link_36578 = (function (){var G__36414 = node_36572.cloneNode(true);
G__36414.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36573),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36414;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36573], 0));

goog.dom.insertSiblingAfter(new_link_36578,node_36572);

goog.dom.removeNode(node_36572);


var G__36579 = seq__36404_36568;
var G__36580 = chunk__36407_36569;
var G__36581 = count__36408_36570;
var G__36582 = (i__36409_36571 + (1));
seq__36404_36568 = G__36579;
chunk__36407_36569 = G__36580;
count__36408_36570 = G__36581;
i__36409_36571 = G__36582;
continue;
} else {
var G__36583 = seq__36404_36568;
var G__36584 = chunk__36407_36569;
var G__36585 = count__36408_36570;
var G__36586 = (i__36409_36571 + (1));
seq__36404_36568 = G__36583;
chunk__36407_36569 = G__36584;
count__36408_36570 = G__36585;
i__36409_36571 = G__36586;
continue;
}
} else {
var temp__5735__auto___36587 = cljs.core.seq(seq__36404_36568);
if(temp__5735__auto___36587){
var seq__36404_36588__$1 = temp__5735__auto___36587;
if(cljs.core.chunked_seq_QMARK_(seq__36404_36588__$1)){
var c__4550__auto___36589 = cljs.core.chunk_first(seq__36404_36588__$1);
var G__36590 = cljs.core.chunk_rest(seq__36404_36588__$1);
var G__36591 = c__4550__auto___36589;
var G__36592 = cljs.core.count(c__4550__auto___36589);
var G__36593 = (0);
seq__36404_36568 = G__36590;
chunk__36407_36569 = G__36591;
count__36408_36570 = G__36592;
i__36409_36571 = G__36593;
continue;
} else {
var node_36594 = cljs.core.first(seq__36404_36588__$1);
var path_match_36595 = shadow.cljs.devtools.client.browser.match_paths(node_36594.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36595)){
var new_link_36596 = (function (){var G__36415 = node_36594.cloneNode(true);
G__36415.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36595),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36415;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36595], 0));

goog.dom.insertSiblingAfter(new_link_36596,node_36594);

goog.dom.removeNode(node_36594);


var G__36597 = cljs.core.next(seq__36404_36588__$1);
var G__36598 = null;
var G__36599 = (0);
var G__36600 = (0);
seq__36404_36568 = G__36597;
chunk__36407_36569 = G__36598;
count__36408_36570 = G__36599;
i__36409_36571 = G__36600;
continue;
} else {
var G__36601 = cljs.core.next(seq__36404_36588__$1);
var G__36602 = null;
var G__36603 = (0);
var G__36604 = (0);
seq__36404_36568 = G__36601;
chunk__36407_36569 = G__36602;
count__36408_36570 = G__36603;
i__36409_36571 = G__36604;
continue;
}
}
} else {
}
}
break;
}


var G__36605 = seq__36366;
var G__36606 = chunk__36368;
var G__36607 = count__36369;
var G__36608 = (i__36370 + (1));
seq__36366 = G__36605;
chunk__36368 = G__36606;
count__36369 = G__36607;
i__36370 = G__36608;
continue;
} else {
var G__36611 = seq__36366;
var G__36612 = chunk__36368;
var G__36613 = count__36369;
var G__36614 = (i__36370 + (1));
seq__36366 = G__36611;
chunk__36368 = G__36612;
count__36369 = G__36613;
i__36370 = G__36614;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36366);
if(temp__5735__auto__){
var seq__36366__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36366__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36366__$1);
var G__36617 = cljs.core.chunk_rest(seq__36366__$1);
var G__36618 = c__4550__auto__;
var G__36619 = cljs.core.count(c__4550__auto__);
var G__36620 = (0);
seq__36366 = G__36617;
chunk__36368 = G__36618;
count__36369 = G__36619;
i__36370 = G__36620;
continue;
} else {
var path = cljs.core.first(seq__36366__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36416_36621 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36419_36622 = null;
var count__36420_36623 = (0);
var i__36421_36624 = (0);
while(true){
if((i__36421_36624 < count__36420_36623)){
var node_36625 = chunk__36419_36622.cljs$core$IIndexed$_nth$arity$2(null,i__36421_36624);
var path_match_36626 = shadow.cljs.devtools.client.browser.match_paths(node_36625.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36626)){
var new_link_36627 = (function (){var G__36426 = node_36625.cloneNode(true);
G__36426.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36626),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36426;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36626], 0));

goog.dom.insertSiblingAfter(new_link_36627,node_36625);

goog.dom.removeNode(node_36625);


var G__36628 = seq__36416_36621;
var G__36629 = chunk__36419_36622;
var G__36630 = count__36420_36623;
var G__36631 = (i__36421_36624 + (1));
seq__36416_36621 = G__36628;
chunk__36419_36622 = G__36629;
count__36420_36623 = G__36630;
i__36421_36624 = G__36631;
continue;
} else {
var G__36632 = seq__36416_36621;
var G__36633 = chunk__36419_36622;
var G__36634 = count__36420_36623;
var G__36635 = (i__36421_36624 + (1));
seq__36416_36621 = G__36632;
chunk__36419_36622 = G__36633;
count__36420_36623 = G__36634;
i__36421_36624 = G__36635;
continue;
}
} else {
var temp__5735__auto___36636__$1 = cljs.core.seq(seq__36416_36621);
if(temp__5735__auto___36636__$1){
var seq__36416_36637__$1 = temp__5735__auto___36636__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36416_36637__$1)){
var c__4550__auto___36638 = cljs.core.chunk_first(seq__36416_36637__$1);
var G__36639 = cljs.core.chunk_rest(seq__36416_36637__$1);
var G__36640 = c__4550__auto___36638;
var G__36641 = cljs.core.count(c__4550__auto___36638);
var G__36642 = (0);
seq__36416_36621 = G__36639;
chunk__36419_36622 = G__36640;
count__36420_36623 = G__36641;
i__36421_36624 = G__36642;
continue;
} else {
var node_36643 = cljs.core.first(seq__36416_36637__$1);
var path_match_36644 = shadow.cljs.devtools.client.browser.match_paths(node_36643.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36644)){
var new_link_36645 = (function (){var G__36427 = node_36643.cloneNode(true);
G__36427.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36644),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36427;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36644], 0));

goog.dom.insertSiblingAfter(new_link_36645,node_36643);

goog.dom.removeNode(node_36643);


var G__36646 = cljs.core.next(seq__36416_36637__$1);
var G__36647 = null;
var G__36648 = (0);
var G__36649 = (0);
seq__36416_36621 = G__36646;
chunk__36419_36622 = G__36647;
count__36420_36623 = G__36648;
i__36421_36624 = G__36649;
continue;
} else {
var G__36650 = cljs.core.next(seq__36416_36637__$1);
var G__36651 = null;
var G__36652 = (0);
var G__36653 = (0);
seq__36416_36621 = G__36650;
chunk__36419_36622 = G__36651;
count__36420_36623 = G__36652;
i__36421_36624 = G__36653;
continue;
}
}
} else {
}
}
break;
}


var G__36654 = cljs.core.next(seq__36366__$1);
var G__36655 = null;
var G__36656 = (0);
var G__36657 = (0);
seq__36366 = G__36654;
chunk__36368 = G__36655;
count__36369 = G__36656;
i__36370 = G__36657;
continue;
} else {
var G__36658 = cljs.core.next(seq__36366__$1);
var G__36659 = null;
var G__36660 = (0);
var G__36661 = (0);
seq__36366 = G__36658;
chunk__36368 = G__36659;
count__36369 = G__36660;
i__36370 = G__36661;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36428){
var map__36429 = p__36428;
var map__36429__$1 = (((((!((map__36429 == null))))?(((((map__36429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36429):map__36429);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36429__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36429__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36431,done){
var map__36432 = p__36431;
var map__36432__$1 = (((((!((map__36432 == null))))?(((((map__36432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36432):map__36432);
var msg = map__36432__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36432__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36432__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36432__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36432__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36434){
var map__36435 = p__36434;
var map__36435__$1 = (((((!((map__36435 == null))))?(((((map__36435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36435):map__36435);
var src = map__36435__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36435__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4109__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4109__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e36437){var e = e36437;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36438,done){
var map__36439 = p__36438;
var map__36439__$1 = (((((!((map__36439 == null))))?(((((map__36439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36439):map__36439);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36439__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36439__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36441){
var map__36442 = p__36441;
var map__36442__$1 = (((((!((map__36442 == null))))?(((((map__36442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36442):map__36442);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36442__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36442__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36444,done){
var map__36445 = p__36444;
var map__36445__$1 = (((((!((map__36445 == null))))?(((((map__36445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36445):map__36445);
var msg = map__36445__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36445__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36447_36664 = type;
var G__36447_36665__$1 = (((G__36447_36664 instanceof cljs.core.Keyword))?G__36447_36664.fqn:null);
switch (G__36447_36665__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__36448 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__36448.cljs$core$IFn$_invoke$arity$1 ? fexpr__36448.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__36448.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4120__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e36449){var e = e36449;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___36670 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___36670)){
var s_36671 = temp__5735__auto___36670;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_36671.onclose = (function (e){
return null;
}));

s_36671.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4109__auto__ = goog.global.document;
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4109__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
