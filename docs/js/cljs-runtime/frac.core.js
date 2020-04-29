goog.provide('frac.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.core.async');
frac.core.red = (function frac$core$red(x){
return (x - 0.1);
});
frac.core.sqr = (function frac$core$sqr(x){
return (x * x);
});
frac.core.ool = (300);
frac.core.pi = ((22) / (7));
if((typeof frac !== 'undefined') && (typeof frac.core !== 'undefined') && (typeof frac.core.alpha !== 'undefined')){
} else {
frac.core.alpha = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(frac.core.pi);
}
if((typeof frac !== 'undefined') && (typeof frac.core !== 'undefined') && (typeof frac.core.interval !== 'undefined')){
} else {
frac.core.interval = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof frac !== 'undefined') && (typeof frac.core !== 'undefined') && (typeof frac.core.level !== 'undefined')){
} else {
frac.core.level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
frac.core.p = (function frac$core$p(x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
frac.core.cp = (function frac$core$cp(r,a){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"a","a",-2123407586),a], null);
});
frac.core.cp_from_p = (function frac$core$cp_from_p(p){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p);
if((x < (0))){
return frac.core.cp(Math.sqrt((frac.core.sqr(x) + frac.core.sqr(y))),(frac.core.pi + Math.atan((y / x))));
} else {
return frac.core.cp(Math.sqrt((frac.core.sqr(x) + frac.core.sqr(y))),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0)))?((2) / frac.core.pi):Math.atan((y / x))));
}
});
frac.core.p_from_cp = (function frac$core$p_from_cp(cp){
var r = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cp);
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cp);
return frac.core.p((r * Math.cos(a)),(r * Math.sin(a)));
});
frac.core.add_p = (function frac$core$add_p(p1,p2){
return frac.core.p((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2)));
});
frac.core.sub_p = (function frac$core$sub_p(p1,p2){
return frac.core.p((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2)));
});
frac.core.add_cp = (function frac$core$add_cp(cp1,cp2){
return frac.core.cp_from_p(frac.core.add_p(frac.core.p_from_cp(cp1),frac.core.p_from_cp(cp2)));
});
frac.core.sub_cp = (function frac$core$sub_cp(cp1,cp2){
return frac.core.cp_from_p(frac.core.sub_p(frac.core.p_from_cp(cp1),frac.core.p_from_cp(cp2)));
});
frac.core.mul_cp = (function frac$core$mul_cp(cp1,cp2){
return frac.core.cp((new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cp1) * new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cp2)),(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cp1) + new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cp2)));
});
frac.core.cp1 = frac.core.cp((0),(0));
frac.core.cp2 = frac.core.cp(frac.core.ool,(0));
frac.core.cline = (function frac$core$cline(cp1,cp2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cp1","cp1",1990213099),cp1,new cljs.core.Keyword(null,"cp2","cp2",317253565),cp2], null);
});
if((typeof frac !== 'undefined') && (typeof frac.core !== 'undefined') && (typeof frac.core.past_group_of_clines !== 'undefined')){
} else {
frac.core.past_group_of_clines = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
frac.core.draw_cline = (function frac$core$draw_cline(k,cline){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((50) + (new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cp1","cp1",1990213099).cljs$core$IFn$_invoke$arity$1(cline)) * Math.cos(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cp1","cp1",1990213099).cljs$core$IFn$_invoke$arity$1(cline))))),new cljs.core.Keyword(null,"y1","y1",589123466),((300) - (new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cp1","cp1",1990213099).cljs$core$IFn$_invoke$arity$1(cline)) * Math.sin(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cp1","cp1",1990213099).cljs$core$IFn$_invoke$arity$1(cline))))),new cljs.core.Keyword(null,"x2","x2",-1362513475),((50) + (new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cp2","cp2",317253565).cljs$core$IFn$_invoke$arity$1(cline)) * Math.cos(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cp2","cp2",317253565).cljs$core$IFn$_invoke$arity$1(cline))))),new cljs.core.Keyword(null,"y2","y2",-718691301),((300) - (new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cp2","cp2",317253565).cljs$core$IFn$_invoke$arity$1(cline)) * Math.sin(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cp2","cp2",317253565).cljs$core$IFn$_invoke$arity$1(cline))))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"grey",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"key","key",-1516042587),k], null)], null);
});
frac.core.frac_a_cline = (function frac$core$frac_a_cline(a_cline){
var cp2 = new cljs.core.Keyword(null,"cp2","cp2",317253565).cljs$core$IFn$_invoke$arity$1(a_cline);
var cp1 = new cljs.core.Keyword(null,"cp1","cp1",1990213099).cljs$core$IFn$_invoke$arity$1(a_cline);
var odc = frac.core.sub_cp(cp2,cp1);
var ol = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(odc);
var dd = ((2) * ((1) + Math.sin((cljs.core.deref(frac.core.alpha) / (2)))));
var nl = (ol / dd);
var ndc = frac.core.cp(nl,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(odc));
var beta = ((frac.core.pi - cljs.core.deref(frac.core.alpha)) / (2));
var rdc = frac.core.mul_cp(ndc,frac.core.cp((1),beta));
var cpq = frac.core.add_cp(cp1,ndc);
var cpp = frac.core.sub_cp(cp2,ndc);
var cpo = frac.core.add_cp(cpq,rdc);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frac.core.cline(cp1,cpq),frac.core.cline(cpq,cpo),frac.core.cline(cpo,cpp),frac.core.cline(cpp,cp2)], null);
});
frac.core.fract_it = (function frac$core$fract_it(clines){
if((cljs.core.count(clines) > (0))){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.vec,cljs.core.flatten,cljs.core.vector)(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frac.core.frac_a_cline,clines));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frac.core.cline(frac.core.cp1,frac.core.cp2)], null);
}
});
frac.core.alpha_min = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(0.15);
frac.core.red_alpha = (function frac$core$red_alpha(alpha){
return (alpha - 0.05);
});
frac.core.update_alpha = (function frac$core$update_alpha(){
if((cljs.core.deref(frac.core.alpha) > cljs.core.deref(frac.core.alpha_min))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frac.core.alpha,frac.core.red_alpha);
} else {
return clearInterval(cljs.core.deref(frac.core.interval));
}
});
frac.core.move_alpha = (function frac$core$move_alpha(){
return cljs.core.reset_BANG_(frac.core.interval,setInterval(frac.core.update_alpha,(10)));
});
frac.core.do_level = (function frac$core$do_level(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frac.core.past_group_of_clines,frac.core.fract_it);

cljs.core.reset_BANG_(frac.core.alpha,frac.core.pi);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frac.core.level,cljs.core.inc);
});
frac.core.update_alpha_level = (function frac$core$update_alpha_level(){
if((cljs.core.deref(frac.core.alpha) > cljs.core.deref(frac.core.alpha_min))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frac.core.alpha,frac.core.red_alpha);
} else {
return clearInterval(cljs.core.deref(frac.core.interval));
}
});
frac.core.move_do = (function frac$core$move_do(){
frac.core.do_level();

console.log(cljs.core.count(cljs.core.deref(frac.core.past_group_of_clines)));

return cljs.core.reset_BANG_(frac.core.interval,setInterval(frac.core.update_alpha_level,(10)));
});
frac.core.reset_everything = (function frac$core$reset_everything(){
cljs.core.reset_BANG_(frac.core.past_group_of_clines,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_(frac.core.alpha,frac.core.pi);

return cljs.core.reset_BANG_(frac.core.level,(1));
});
frac.core.move_do_button = (function frac$core$move_do_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(34),new cljs.core.Keyword(null,"height","height",1025178622),(25),new cljs.core.Keyword(null,"background-color","background-color",570434026),"green",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frac.core.move_do], null)], null);
});
frac.core.reset_button = (function frac$core$reset_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(34),new cljs.core.Keyword(null,"height","height",1025178622),(25),new cljs.core.Keyword(null,"background-color","background-color",570434026),"red",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frac.core.reset_everything], null)], null);
});
frac.core.set_min_alpha = (function frac$core$set_min_alpha(angle){
return cljs.core.reset_BANG_(frac.core.alpha_min,angle);
});
frac.core.set_min_alpha_space = (function frac$core$set_min_alpha_space(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(frac.core.alpha_min),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(34),new cljs.core.Keyword(null,"height","height",1025178622),(21),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15790_SHARP_){
return cljs.core.reset_BANG_(frac.core.alpha_min,p1__15790_SHARP_.target.value);
})], null)], null);
});
frac.core.frac = (function frac$core$frac(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(400)], null),(function (){var group = frac.core.fract_it(cljs.core.deref(frac.core.past_group_of_clines));
var iter__4523__auto__ = (function frac$core$frac_$_iter__15794(s__15795){
return (new cljs.core.LazySeq(null,(function (){
var s__15795__$1 = s__15795;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15795__$1);
if(temp__5735__auto__){
var s__15795__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15795__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15795__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15797 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15796 = (0);
while(true){
if((i__15796 < size__4522__auto__)){
var i = cljs.core._nth(c__4521__auto__,i__15796);
cljs.core.chunk_append(b__15797,frac.core.draw_cline(i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,i)));

var G__15842 = (i__15796 + (1));
i__15796 = G__15842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15797),frac$core$frac_$_iter__15794(cljs.core.chunk_rest(s__15795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15797),null);
}
} else {
var i = cljs.core.first(s__15795__$2);
return cljs.core.cons(frac.core.draw_cline(i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,i)),frac$core$frac_$_iter__15794(cljs.core.rest(s__15795__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(group)));
})()], null);
});
frac.core.input = (function frac$core$input(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-around",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),frac.core.set_min_alpha_space(),frac.core.move_do_button(),frac.core.reset_button()], null);
});
frac.core.root = (function frac$core$root(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),frac.core.frac(),frac.core.input()], null);
});
frac.core.mount_root = (function frac$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frac.core.root], null),document.getElementById("app"));
});
frac.core.init_BANG_ = (function frac$core$init_BANG_(){
return frac.core.mount_root();
});
goog.exportSymbol('frac.core.init_BANG_', frac.core.init_BANG_);

//# sourceMappingURL=frac.core.js.map
