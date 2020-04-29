goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_9155 = (function (value){
var x__4422__auto__ = (((value == null))?null:value);
var m__4423__auto__ = (devtools.format._header[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4423__auto__.call(null,value));
} else {
var m__4420__auto__ = (devtools.format._header["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4420__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_9155(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_9172 = (function (value){
var x__4422__auto__ = (((value == null))?null:value);
var m__4423__auto__ = (devtools.format._has_body[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4423__auto__.call(null,value));
} else {
var m__4420__auto__ = (devtools.format._has_body["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4420__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_9172(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_9174 = (function (value){
var x__4422__auto__ = (((value == null))?null:value);
var m__4423__auto__ = (devtools.format._body[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4423__auto__.call(null,value));
} else {
var m__4420__auto__ = (devtools.format._body["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4420__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_9174(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o9062 = temp__5733__auto__;
var temp__5733__auto____$1 = (o9062["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o9063 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o9063["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o9064 = temp__5733__auto____$2;
return (o9064["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o9065 = temp__5733__auto__;
var temp__5733__auto____$1 = (o9065["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o9066 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o9066["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o9067 = temp__5733__auto____$2;
return (o9067["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o9068 = temp__5733__auto__;
var temp__5733__auto____$1 = (o9068["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o9069 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o9069["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o9070 = temp__5733__auto____$2;
return (o9070["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o9071 = temp__5733__auto__;
var temp__5733__auto____$1 = (o9071["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o9072 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o9072["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o9073 = temp__5733__auto____$2;
return (o9073["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o9078 = temp__5733__auto__;
var temp__5733__auto____$1 = (o9078["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o9079 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o9079["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o9080 = temp__5733__auto____$2;
return (o9080["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o9084 = temp__5733__auto__;
var temp__5733__auto____$1 = (o9084["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o9085 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o9085["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o9086 = temp__5733__auto____$2;
return (o9086["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o9090 = temp__5733__auto__;
var temp__5733__auto____$1 = (o9090["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o9091 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o9091["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o9092 = temp__5733__auto____$2;
return (o9092["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9199 = arguments.length;
var i__4731__auto___9200 = (0);
while(true){
if((i__4731__auto___9200 < len__4730__auto___9199)){
args__4736__auto__.push((arguments[i__4731__auto___9200]));

var G__9201 = (i__4731__auto___9200 + (1));
i__4731__auto___9200 = G__9201;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq9093){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9093));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9202 = arguments.length;
var i__4731__auto___9203 = (0);
while(true){
if((i__4731__auto___9203 < len__4730__auto___9202)){
args__4736__auto__.push((arguments[i__4731__auto___9203]));

var G__9204 = (i__4731__auto___9203 + (1));
i__4731__auto___9203 = G__9204;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq9094){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9094));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9205 = arguments.length;
var i__4731__auto___9206 = (0);
while(true){
if((i__4731__auto___9206 < len__4730__auto___9205)){
args__4736__auto__.push((arguments[i__4731__auto___9206]));

var G__9207 = (i__4731__auto___9206 + (1));
i__4731__auto___9206 = G__9207;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq9110){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9110));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9208 = arguments.length;
var i__4731__auto___9209 = (0);
while(true){
if((i__4731__auto___9209 < len__4730__auto___9208)){
args__4736__auto__.push((arguments[i__4731__auto___9209]));

var G__9210 = (i__4731__auto___9209 + (1));
i__4731__auto___9209 = G__9210;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq9111){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9111));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9212 = arguments.length;
var i__4731__auto___9213 = (0);
while(true){
if((i__4731__auto___9213 < len__4730__auto___9212)){
args__4736__auto__.push((arguments[i__4731__auto___9213]));

var G__9214 = (i__4731__auto___9213 + (1));
i__4731__auto___9213 = G__9214;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq9112){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9112));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9225 = arguments.length;
var i__4731__auto___9226 = (0);
while(true){
if((i__4731__auto___9226 < len__4730__auto___9225)){
args__4736__auto__.push((arguments[i__4731__auto___9226]));

var G__9227 = (i__4731__auto___9226 + (1));
i__4731__auto___9226 = G__9227;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq9116){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9116));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9228 = arguments.length;
var i__4731__auto___9229 = (0);
while(true){
if((i__4731__auto___9229 < len__4730__auto___9228)){
args__4736__auto__.push((arguments[i__4731__auto___9229]));

var G__9230 = (i__4731__auto___9229 + (1));
i__4731__auto___9229 = G__9230;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq9117){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9117));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9231 = arguments.length;
var i__4731__auto___9232 = (0);
while(true){
if((i__4731__auto___9232 < len__4730__auto___9231)){
args__4736__auto__.push((arguments[i__4731__auto___9232]));

var G__9233 = (i__4731__auto___9232 + (1));
i__4731__auto___9232 = G__9233;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__9131){
var vec__9132 = p__9131;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9132,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__9124_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__9124_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq9125){
var G__9126 = cljs.core.first(seq9125);
var seq9125__$1 = cljs.core.next(seq9125);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9126,seq9125__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__9135 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__9136 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__9137 = (function (){var G__9138 = new cljs.core.Keyword(null,"li","li",723558921);
var G__9139 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__9140 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__9138,G__9139,G__9140) : devtools.format.make_template_fn.call(null,G__9138,G__9139,G__9140));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__9135,G__9136,G__9137) : devtools.format.make_template_fn.call(null,G__9135,G__9136,G__9137));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9234 = arguments.length;
var i__4731__auto___9235 = (0);
while(true){
if((i__4731__auto___9235 < len__4730__auto___9234)){
args__4736__auto__.push((arguments[i__4731__auto___9235]));

var G__9236 = (i__4731__auto___9235 + (1));
i__4731__auto___9235 = G__9236;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq9141){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9141));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9237 = arguments.length;
var i__4731__auto___9241 = (0);
while(true){
if((i__4731__auto___9241 < len__4730__auto___9237)){
args__4736__auto__.push((arguments[i__4731__auto___9241]));

var G__9242 = (i__4731__auto___9241 + (1));
i__4731__auto___9241 = G__9242;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq9142){
var G__9143 = cljs.core.first(seq9142);
var seq9142__$1 = cljs.core.next(seq9142);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9143,seq9142__$1);
}));


//# sourceMappingURL=devtools.format.js.map
