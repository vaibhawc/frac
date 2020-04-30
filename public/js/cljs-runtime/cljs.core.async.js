goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14278 = arguments.length;
switch (G__14278) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14279 = (function (f,blockable,meta14280){
this.f = f;
this.blockable = blockable;
this.meta14280 = meta14280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14281,meta14280__$1){
var self__ = this;
var _14281__$1 = this;
return (new cljs.core.async.t_cljs$core$async14279(self__.f,self__.blockable,meta14280__$1));
}));

(cljs.core.async.t_cljs$core$async14279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14281){
var self__ = this;
var _14281__$1 = this;
return self__.meta14280;
}));

(cljs.core.async.t_cljs$core$async14279.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14279.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14280","meta14280",-1567026140,null)], null);
}));

(cljs.core.async.t_cljs$core$async14279.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14279");

(cljs.core.async.t_cljs$core$async14279.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async14279");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14279.
 */
cljs.core.async.__GT_t_cljs$core$async14279 = (function cljs$core$async$__GT_t_cljs$core$async14279(f__$1,blockable__$1,meta14280){
return (new cljs.core.async.t_cljs$core$async14279(f__$1,blockable__$1,meta14280));
});

}

return (new cljs.core.async.t_cljs$core$async14279(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14284 = arguments.length;
switch (G__14284) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14286 = arguments.length;
switch (G__14286) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14288 = arguments.length;
switch (G__14288) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15746 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15746) : fn1.call(null,val_15746));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15746) : fn1.call(null,val_15746));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14290 = arguments.length;
switch (G__14290) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___15748 = n;
var x_15749 = (0);
while(true){
if((x_15749 < n__4607__auto___15748)){
(a[x_15749] = x_15749);

var G__15750 = (x_15749 + (1));
x_15749 = G__15750;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14291 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14291 = (function (flag,meta14292){
this.flag = flag;
this.meta14292 = meta14292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14293,meta14292__$1){
var self__ = this;
var _14293__$1 = this;
return (new cljs.core.async.t_cljs$core$async14291(self__.flag,meta14292__$1));
}));

(cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14293){
var self__ = this;
var _14293__$1 = this;
return self__.meta14292;
}));

(cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14292","meta14292",1083237550,null)], null);
}));

(cljs.core.async.t_cljs$core$async14291.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14291");

(cljs.core.async.t_cljs$core$async14291.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async14291");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14291.
 */
cljs.core.async.__GT_t_cljs$core$async14291 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14291(flag__$1,meta14292){
return (new cljs.core.async.t_cljs$core$async14291(flag__$1,meta14292));
});

}

return (new cljs.core.async.t_cljs$core$async14291(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14294 = (function (flag,cb,meta14295){
this.flag = flag;
this.cb = cb;
this.meta14295 = meta14295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14296,meta14295__$1){
var self__ = this;
var _14296__$1 = this;
return (new cljs.core.async.t_cljs$core$async14294(self__.flag,self__.cb,meta14295__$1));
}));

(cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14296){
var self__ = this;
var _14296__$1 = this;
return self__.meta14295;
}));

(cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14295","meta14295",-1202283930,null)], null);
}));

(cljs.core.async.t_cljs$core$async14294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14294");

(cljs.core.async.t_cljs$core$async14294.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async14294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14294.
 */
cljs.core.async.__GT_t_cljs$core$async14294 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14294(flag__$1,cb__$1,meta14295){
return (new cljs.core.async.t_cljs$core$async14294(flag__$1,cb__$1,meta14295));
});

}

return (new cljs.core.async.t_cljs$core$async14294(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14297_SHARP_){
var G__14299 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14297_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14299) : fret.call(null,G__14299));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14298_SHARP_){
var G__14300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14298_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14300) : fret.call(null,G__14300));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4120__auto__ = wport;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15751 = (i + (1));
i = G__15751;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4120__auto__ = ret;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4109__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4109__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4109__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15752 = arguments.length;
var i__4731__auto___15753 = (0);
while(true){
if((i__4731__auto___15753 < len__4730__auto___15752)){
args__4736__auto__.push((arguments[i__4731__auto___15753]));

var G__15754 = (i__4731__auto___15753 + (1));
i__4731__auto___15753 = G__15754;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14303){
var map__14304 = p__14303;
var map__14304__$1 = (((((!((map__14304 == null))))?(((((map__14304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14304):map__14304);
var opts = map__14304__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14301){
var G__14302 = cljs.core.first(seq14301);
var seq14301__$1 = cljs.core.next(seq14301);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14302,seq14301__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14307 = arguments.length;
switch (G__14307) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14220__auto___15756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_14331){
var state_val_14332 = (state_14331[(1)]);
if((state_val_14332 === (7))){
var inst_14327 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
var statearr_14333_15757 = state_14331__$1;
(statearr_14333_15757[(2)] = inst_14327);

(statearr_14333_15757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (1))){
var state_14331__$1 = state_14331;
var statearr_14334_15758 = state_14331__$1;
(statearr_14334_15758[(2)] = null);

(statearr_14334_15758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (4))){
var inst_14310 = (state_14331[(7)]);
var inst_14310__$1 = (state_14331[(2)]);
var inst_14311 = (inst_14310__$1 == null);
var state_14331__$1 = (function (){var statearr_14335 = state_14331;
(statearr_14335[(7)] = inst_14310__$1);

return statearr_14335;
})();
if(cljs.core.truth_(inst_14311)){
var statearr_14336_15759 = state_14331__$1;
(statearr_14336_15759[(1)] = (5));

} else {
var statearr_14337_15760 = state_14331__$1;
(statearr_14337_15760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (13))){
var state_14331__$1 = state_14331;
var statearr_14338_15761 = state_14331__$1;
(statearr_14338_15761[(2)] = null);

(statearr_14338_15761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (6))){
var inst_14310 = (state_14331[(7)]);
var state_14331__$1 = state_14331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14331__$1,(11),to,inst_14310);
} else {
if((state_val_14332 === (3))){
var inst_14329 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14331__$1,inst_14329);
} else {
if((state_val_14332 === (12))){
var state_14331__$1 = state_14331;
var statearr_14339_15762 = state_14331__$1;
(statearr_14339_15762[(2)] = null);

(statearr_14339_15762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (2))){
var state_14331__$1 = state_14331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14331__$1,(4),from);
} else {
if((state_val_14332 === (11))){
var inst_14320 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
if(cljs.core.truth_(inst_14320)){
var statearr_14340_15763 = state_14331__$1;
(statearr_14340_15763[(1)] = (12));

} else {
var statearr_14341_15764 = state_14331__$1;
(statearr_14341_15764[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (9))){
var state_14331__$1 = state_14331;
var statearr_14342_15765 = state_14331__$1;
(statearr_14342_15765[(2)] = null);

(statearr_14342_15765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (5))){
var state_14331__$1 = state_14331;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14343_15766 = state_14331__$1;
(statearr_14343_15766[(1)] = (8));

} else {
var statearr_14344_15767 = state_14331__$1;
(statearr_14344_15767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (14))){
var inst_14325 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
var statearr_14345_15768 = state_14331__$1;
(statearr_14345_15768[(2)] = inst_14325);

(statearr_14345_15768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (10))){
var inst_14317 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
var statearr_14346_15769 = state_14331__$1;
(statearr_14346_15769[(2)] = inst_14317);

(statearr_14346_15769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (8))){
var inst_14314 = cljs.core.async.close_BANG_(to);
var state_14331__$1 = state_14331;
var statearr_14347_15770 = state_14331__$1;
(statearr_14347_15770[(2)] = inst_14314);

(statearr_14347_15770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14150__auto__ = null;
var cljs$core$async$state_machine__14150__auto____0 = (function (){
var statearr_14348 = [null,null,null,null,null,null,null,null];
(statearr_14348[(0)] = cljs$core$async$state_machine__14150__auto__);

(statearr_14348[(1)] = (1));

return statearr_14348;
});
var cljs$core$async$state_machine__14150__auto____1 = (function (state_14331){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_14331);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e14349){var ex__14153__auto__ = e14349;
var statearr_14350_15771 = state_14331;
(statearr_14350_15771[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_14331[(4)]))){
var statearr_14351_15772 = state_14331;
(statearr_14351_15772[(1)] = cljs.core.first((state_14331[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15773 = state_14331;
state_14331 = G__15773;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$state_machine__14150__auto__ = function(state_14331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14150__auto____1.call(this,state_14331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14150__auto____0;
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14150__auto____1;
return cljs$core$async$state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_14352 = f__14221__auto__();
(statearr_14352[(6)] = c__14220__auto___15756);

return statearr_14352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__14353){
var vec__14354 = p__14353;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14354,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14354,(1),null);
var job = vec__14354;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14220__auto___15774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_14361){
var state_val_14362 = (state_14361[(1)]);
if((state_val_14362 === (1))){
var state_14361__$1 = state_14361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14361__$1,(2),res,v);
} else {
if((state_val_14362 === (2))){
var inst_14358 = (state_14361[(2)]);
var inst_14359 = cljs.core.async.close_BANG_(res);
var state_14361__$1 = (function (){var statearr_14363 = state_14361;
(statearr_14363[(7)] = inst_14358);

return statearr_14363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14361__$1,inst_14359);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0 = (function (){
var statearr_14364 = [null,null,null,null,null,null,null,null];
(statearr_14364[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__);

(statearr_14364[(1)] = (1));

return statearr_14364;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1 = (function (state_14361){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_14361);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e14365){var ex__14153__auto__ = e14365;
var statearr_14366_15775 = state_14361;
(statearr_14366_15775[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_14361[(4)]))){
var statearr_14367_15776 = state_14361;
(statearr_14367_15776[(1)] = cljs.core.first((state_14361[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15777 = state_14361;
state_14361 = G__15777;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__ = function(state_14361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1.call(this,state_14361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_14368 = f__14221__auto__();
(statearr_14368[(6)] = c__14220__auto___15774);

return statearr_14368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14369){
var vec__14370 = p__14369;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(1),null);
var job = vec__14370;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4607__auto___15778 = n;
var __15779 = (0);
while(true){
if((__15779 < n__4607__auto___15778)){
var G__14373_15780 = type;
var G__14373_15781__$1 = (((G__14373_15780 instanceof cljs.core.Keyword))?G__14373_15780.fqn:null);
switch (G__14373_15781__$1) {
case "compute":
var c__14220__auto___15783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15779,c__14220__auto___15783,G__14373_15780,G__14373_15781__$1,n__4607__auto___15778,jobs,results,process,async){
return (function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = ((function (__15779,c__14220__auto___15783,G__14373_15780,G__14373_15781__$1,n__4607__auto___15778,jobs,results,process,async){
return (function (state_14386){
var state_val_14387 = (state_14386[(1)]);
if((state_val_14387 === (1))){
var state_14386__$1 = state_14386;
var statearr_14388_15784 = state_14386__$1;
(statearr_14388_15784[(2)] = null);

(statearr_14388_15784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14387 === (2))){
var state_14386__$1 = state_14386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14386__$1,(4),jobs);
} else {
if((state_val_14387 === (3))){
var inst_14384 = (state_14386[(2)]);
var state_14386__$1 = state_14386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14386__$1,inst_14384);
} else {
if((state_val_14387 === (4))){
var inst_14376 = (state_14386[(2)]);
var inst_14377 = process(inst_14376);
var state_14386__$1 = state_14386;
if(cljs.core.truth_(inst_14377)){
var statearr_14389_15785 = state_14386__$1;
(statearr_14389_15785[(1)] = (5));

} else {
var statearr_14390_15786 = state_14386__$1;
(statearr_14390_15786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14387 === (5))){
var state_14386__$1 = state_14386;
var statearr_14391_15787 = state_14386__$1;
(statearr_14391_15787[(2)] = null);

(statearr_14391_15787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14387 === (6))){
var state_14386__$1 = state_14386;
var statearr_14392_15788 = state_14386__$1;
(statearr_14392_15788[(2)] = null);

(statearr_14392_15788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14387 === (7))){
var inst_14382 = (state_14386[(2)]);
var state_14386__$1 = state_14386;
var statearr_14393_15789 = state_14386__$1;
(statearr_14393_15789[(2)] = inst_14382);

(statearr_14393_15789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15779,c__14220__auto___15783,G__14373_15780,G__14373_15781__$1,n__4607__auto___15778,jobs,results,process,async))
;
return ((function (__15779,switch__14149__auto__,c__14220__auto___15783,G__14373_15780,G__14373_15781__$1,n__4607__auto___15778,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0 = (function (){
var statearr_14394 = [null,null,null,null,null,null,null];
(statearr_14394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__);

(statearr_14394[(1)] = (1));

return statearr_14394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1 = (function (state_14386){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_14386);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e14395){var ex__14153__auto__ = e14395;
var statearr_14396_15791 = state_14386;
(statearr_14396_15791[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_14386[(4)]))){
var statearr_14397_15792 = state_14386;
(statearr_14397_15792[(1)] = cljs.core.first((state_14386[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15793 = state_14386;
state_14386 = G__15793;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__ = function(state_14386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1.call(this,state_14386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__;
})()
;})(__15779,switch__14149__auto__,c__14220__auto___15783,G__14373_15780,G__14373_15781__$1,n__4607__auto___15778,jobs,results,process,async))
})();
var state__14222__auto__ = (function (){var statearr_14398 = f__14221__auto__();
(statearr_14398[(6)] = c__14220__auto___15783);

return statearr_14398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
});})(__15779,c__14220__auto___15783,G__14373_15780,G__14373_15781__$1,n__4607__auto___15778,jobs,results,process,async))
);


break;
case "async":
var c__14220__auto___15798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15779,c__14220__auto___15798,G__14373_15780,G__14373_15781__$1,n__4607__auto___15778,jobs,results,process,async){
return (function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = ((function (__15779,c__14220__auto___15798,G__14373_15780,G__14373_15781__$1,n__4607__auto___15778,jobs,results,process,async){
return (function (state_14411){
var state_val_14412 = (state_14411[(1)]);
if((state_val_14412 === (1))){
var state_14411__$1 = state_14411;
var statearr_14413_15799 = state_14411__$1;
(statearr_14413_15799[(2)] = null);

(statearr_14413_15799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14412 === (2))){
var state_14411__$1 = state_14411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14411__$1,(4),jobs);
} else {
if((state_val_14412 === (3))){
var inst_14409 = (state_14411[(2)]);
var state_14411__$1 = state_14411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14411__$1,inst_14409);
} else {
if((state_val_14412 === (4))){
var inst_14401 = (state_14411[(2)]);
var inst_14402 = async(inst_14401);
var state_14411__$1 = state_14411;
if(cljs.core.truth_(inst_14402)){
var statearr_14414_15800 = state_14411__$1;
(statearr_14414_15800[(1)] = (5));

} else {
var statearr_14415_15801 = state_14411__$1;
(statearr_14415_15801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14412 === (5))){
var state_14411__$1 = state_14411;
var statearr_14416_15802 = state_14411__$1;
(statearr_14416_15802[(2)] = null);

(statearr_14416_15802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14412 === (6))){
var state_14411__$1 = state_14411;
var statearr_14417_15803 = state_14411__$1;
(statearr_14417_15803[(2)] = null);

(statearr_14417_15803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14412 === (7))){
var inst_14407 = (state_14411[(2)]);
var state_14411__$1 = state_14411;
var statearr_14418_15804 = state_14411__$1;
(statearr_14418_15804[(2)] = inst_14407);

(statearr_14418_15804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15779,c__14220__auto___15798,G__14373_15780,G__14373_15781__$1,n__4607__auto___15778,jobs,results,process,async))
;
return ((function (__15779,switch__14149__auto__,c__14220__auto___15798,G__14373_15780,G__14373_15781__$1,n__4607__auto___15778,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0 = (function (){
var statearr_14419 = [null,null,null,null,null,null,null];
(statearr_14419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__);

(statearr_14419[(1)] = (1));

return statearr_14419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1 = (function (state_14411){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_14411);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e14420){var ex__14153__auto__ = e14420;
var statearr_14421_15805 = state_14411;
(statearr_14421_15805[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_14411[(4)]))){
var statearr_14422_15806 = state_14411;
(statearr_14422_15806[(1)] = cljs.core.first((state_14411[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15807 = state_14411;
state_14411 = G__15807;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__ = function(state_14411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1.call(this,state_14411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__;
})()
;})(__15779,switch__14149__auto__,c__14220__auto___15798,G__14373_15780,G__14373_15781__$1,n__4607__auto___15778,jobs,results,process,async))
})();
var state__14222__auto__ = (function (){var statearr_14423 = f__14221__auto__();
(statearr_14423[(6)] = c__14220__auto___15798);

return statearr_14423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
});})(__15779,c__14220__auto___15798,G__14373_15780,G__14373_15781__$1,n__4607__auto___15778,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14373_15781__$1)].join('')));

}

var G__15808 = (__15779 + (1));
__15779 = G__15808;
continue;
} else {
}
break;
}

var c__14220__auto___15809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_14445){
var state_val_14446 = (state_14445[(1)]);
if((state_val_14446 === (7))){
var inst_14441 = (state_14445[(2)]);
var state_14445__$1 = state_14445;
var statearr_14447_15810 = state_14445__$1;
(statearr_14447_15810[(2)] = inst_14441);

(statearr_14447_15810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14446 === (1))){
var state_14445__$1 = state_14445;
var statearr_14448_15811 = state_14445__$1;
(statearr_14448_15811[(2)] = null);

(statearr_14448_15811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14446 === (4))){
var inst_14426 = (state_14445[(7)]);
var inst_14426__$1 = (state_14445[(2)]);
var inst_14427 = (inst_14426__$1 == null);
var state_14445__$1 = (function (){var statearr_14449 = state_14445;
(statearr_14449[(7)] = inst_14426__$1);

return statearr_14449;
})();
if(cljs.core.truth_(inst_14427)){
var statearr_14450_15812 = state_14445__$1;
(statearr_14450_15812[(1)] = (5));

} else {
var statearr_14451_15813 = state_14445__$1;
(statearr_14451_15813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14446 === (6))){
var inst_14426 = (state_14445[(7)]);
var inst_14431 = (state_14445[(8)]);
var inst_14431__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14433 = [inst_14426,inst_14431__$1];
var inst_14434 = (new cljs.core.PersistentVector(null,2,(5),inst_14432,inst_14433,null));
var state_14445__$1 = (function (){var statearr_14452 = state_14445;
(statearr_14452[(8)] = inst_14431__$1);

return statearr_14452;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14445__$1,(8),jobs,inst_14434);
} else {
if((state_val_14446 === (3))){
var inst_14443 = (state_14445[(2)]);
var state_14445__$1 = state_14445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14445__$1,inst_14443);
} else {
if((state_val_14446 === (2))){
var state_14445__$1 = state_14445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14445__$1,(4),from);
} else {
if((state_val_14446 === (9))){
var inst_14438 = (state_14445[(2)]);
var state_14445__$1 = (function (){var statearr_14453 = state_14445;
(statearr_14453[(9)] = inst_14438);

return statearr_14453;
})();
var statearr_14454_15814 = state_14445__$1;
(statearr_14454_15814[(2)] = null);

(statearr_14454_15814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14446 === (5))){
var inst_14429 = cljs.core.async.close_BANG_(jobs);
var state_14445__$1 = state_14445;
var statearr_14455_15815 = state_14445__$1;
(statearr_14455_15815[(2)] = inst_14429);

(statearr_14455_15815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14446 === (8))){
var inst_14431 = (state_14445[(8)]);
var inst_14436 = (state_14445[(2)]);
var state_14445__$1 = (function (){var statearr_14456 = state_14445;
(statearr_14456[(10)] = inst_14436);

return statearr_14456;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14445__$1,(9),results,inst_14431);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0 = (function (){
var statearr_14457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14457[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__);

(statearr_14457[(1)] = (1));

return statearr_14457;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1 = (function (state_14445){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_14445);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e14458){var ex__14153__auto__ = e14458;
var statearr_14459_15816 = state_14445;
(statearr_14459_15816[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_14445[(4)]))){
var statearr_14460_15817 = state_14445;
(statearr_14460_15817[(1)] = cljs.core.first((state_14445[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15818 = state_14445;
state_14445 = G__15818;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__ = function(state_14445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1.call(this,state_14445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_14461 = f__14221__auto__();
(statearr_14461[(6)] = c__14220__auto___15809);

return statearr_14461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


var c__14220__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_14499){
var state_val_14500 = (state_14499[(1)]);
if((state_val_14500 === (7))){
var inst_14495 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14501_15819 = state_14499__$1;
(statearr_14501_15819[(2)] = inst_14495);

(statearr_14501_15819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (20))){
var state_14499__$1 = state_14499;
var statearr_14502_15820 = state_14499__$1;
(statearr_14502_15820[(2)] = null);

(statearr_14502_15820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (1))){
var state_14499__$1 = state_14499;
var statearr_14503_15821 = state_14499__$1;
(statearr_14503_15821[(2)] = null);

(statearr_14503_15821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (4))){
var inst_14464 = (state_14499[(7)]);
var inst_14464__$1 = (state_14499[(2)]);
var inst_14465 = (inst_14464__$1 == null);
var state_14499__$1 = (function (){var statearr_14504 = state_14499;
(statearr_14504[(7)] = inst_14464__$1);

return statearr_14504;
})();
if(cljs.core.truth_(inst_14465)){
var statearr_14505_15822 = state_14499__$1;
(statearr_14505_15822[(1)] = (5));

} else {
var statearr_14506_15823 = state_14499__$1;
(statearr_14506_15823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (15))){
var inst_14477 = (state_14499[(8)]);
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14499__$1,(18),to,inst_14477);
} else {
if((state_val_14500 === (21))){
var inst_14490 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14507_15824 = state_14499__$1;
(statearr_14507_15824[(2)] = inst_14490);

(statearr_14507_15824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (13))){
var inst_14492 = (state_14499[(2)]);
var state_14499__$1 = (function (){var statearr_14508 = state_14499;
(statearr_14508[(9)] = inst_14492);

return statearr_14508;
})();
var statearr_14509_15825 = state_14499__$1;
(statearr_14509_15825[(2)] = null);

(statearr_14509_15825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (6))){
var inst_14464 = (state_14499[(7)]);
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14499__$1,(11),inst_14464);
} else {
if((state_val_14500 === (17))){
var inst_14485 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
if(cljs.core.truth_(inst_14485)){
var statearr_14510_15826 = state_14499__$1;
(statearr_14510_15826[(1)] = (19));

} else {
var statearr_14511_15827 = state_14499__$1;
(statearr_14511_15827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (3))){
var inst_14497 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14499__$1,inst_14497);
} else {
if((state_val_14500 === (12))){
var inst_14474 = (state_14499[(10)]);
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14499__$1,(14),inst_14474);
} else {
if((state_val_14500 === (2))){
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14499__$1,(4),results);
} else {
if((state_val_14500 === (19))){
var state_14499__$1 = state_14499;
var statearr_14512_15828 = state_14499__$1;
(statearr_14512_15828[(2)] = null);

(statearr_14512_15828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (11))){
var inst_14474 = (state_14499[(2)]);
var state_14499__$1 = (function (){var statearr_14513 = state_14499;
(statearr_14513[(10)] = inst_14474);

return statearr_14513;
})();
var statearr_14514_15829 = state_14499__$1;
(statearr_14514_15829[(2)] = null);

(statearr_14514_15829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (9))){
var state_14499__$1 = state_14499;
var statearr_14515_15830 = state_14499__$1;
(statearr_14515_15830[(2)] = null);

(statearr_14515_15830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (5))){
var state_14499__$1 = state_14499;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14516_15831 = state_14499__$1;
(statearr_14516_15831[(1)] = (8));

} else {
var statearr_14517_15832 = state_14499__$1;
(statearr_14517_15832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (14))){
var inst_14477 = (state_14499[(8)]);
var inst_14477__$1 = (state_14499[(2)]);
var inst_14478 = (inst_14477__$1 == null);
var inst_14479 = cljs.core.not(inst_14478);
var state_14499__$1 = (function (){var statearr_14518 = state_14499;
(statearr_14518[(8)] = inst_14477__$1);

return statearr_14518;
})();
if(inst_14479){
var statearr_14519_15833 = state_14499__$1;
(statearr_14519_15833[(1)] = (15));

} else {
var statearr_14520_15834 = state_14499__$1;
(statearr_14520_15834[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (16))){
var state_14499__$1 = state_14499;
var statearr_14521_15835 = state_14499__$1;
(statearr_14521_15835[(2)] = false);

(statearr_14521_15835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (10))){
var inst_14471 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14522_15836 = state_14499__$1;
(statearr_14522_15836[(2)] = inst_14471);

(statearr_14522_15836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (18))){
var inst_14482 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14523_15837 = state_14499__$1;
(statearr_14523_15837[(2)] = inst_14482);

(statearr_14523_15837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (8))){
var inst_14468 = cljs.core.async.close_BANG_(to);
var state_14499__$1 = state_14499;
var statearr_14524_15838 = state_14499__$1;
(statearr_14524_15838[(2)] = inst_14468);

(statearr_14524_15838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0 = (function (){
var statearr_14525 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__);

(statearr_14525[(1)] = (1));

return statearr_14525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1 = (function (state_14499){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_14499);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e14526){var ex__14153__auto__ = e14526;
var statearr_14527_15839 = state_14499;
(statearr_14527_15839[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_14499[(4)]))){
var statearr_14528_15840 = state_14499;
(statearr_14528_15840[(1)] = cljs.core.first((state_14499[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15841 = state_14499;
state_14499 = G__15841;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__ = function(state_14499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1.call(this,state_14499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14150__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_14529 = f__14221__auto__();
(statearr_14529[(6)] = c__14220__auto__);

return statearr_14529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));

return c__14220__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14531 = arguments.length;
switch (G__14531) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14533 = arguments.length;
switch (G__14533) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14535 = arguments.length;
switch (G__14535) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14220__auto___15846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_14561){
var state_val_14562 = (state_14561[(1)]);
if((state_val_14562 === (7))){
var inst_14557 = (state_14561[(2)]);
var state_14561__$1 = state_14561;
var statearr_14563_15847 = state_14561__$1;
(statearr_14563_15847[(2)] = inst_14557);

(statearr_14563_15847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (1))){
var state_14561__$1 = state_14561;
var statearr_14564_15848 = state_14561__$1;
(statearr_14564_15848[(2)] = null);

(statearr_14564_15848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (4))){
var inst_14538 = (state_14561[(7)]);
var inst_14538__$1 = (state_14561[(2)]);
var inst_14539 = (inst_14538__$1 == null);
var state_14561__$1 = (function (){var statearr_14565 = state_14561;
(statearr_14565[(7)] = inst_14538__$1);

return statearr_14565;
})();
if(cljs.core.truth_(inst_14539)){
var statearr_14566_15849 = state_14561__$1;
(statearr_14566_15849[(1)] = (5));

} else {
var statearr_14567_15850 = state_14561__$1;
(statearr_14567_15850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (13))){
var state_14561__$1 = state_14561;
var statearr_14568_15851 = state_14561__$1;
(statearr_14568_15851[(2)] = null);

(statearr_14568_15851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (6))){
var inst_14538 = (state_14561[(7)]);
var inst_14544 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14538) : p.call(null,inst_14538));
var state_14561__$1 = state_14561;
if(cljs.core.truth_(inst_14544)){
var statearr_14569_15852 = state_14561__$1;
(statearr_14569_15852[(1)] = (9));

} else {
var statearr_14570_15853 = state_14561__$1;
(statearr_14570_15853[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (3))){
var inst_14559 = (state_14561[(2)]);
var state_14561__$1 = state_14561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14561__$1,inst_14559);
} else {
if((state_val_14562 === (12))){
var state_14561__$1 = state_14561;
var statearr_14571_15854 = state_14561__$1;
(statearr_14571_15854[(2)] = null);

(statearr_14571_15854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (2))){
var state_14561__$1 = state_14561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14561__$1,(4),ch);
} else {
if((state_val_14562 === (11))){
var inst_14538 = (state_14561[(7)]);
var inst_14548 = (state_14561[(2)]);
var state_14561__$1 = state_14561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14561__$1,(8),inst_14548,inst_14538);
} else {
if((state_val_14562 === (9))){
var state_14561__$1 = state_14561;
var statearr_14572_15855 = state_14561__$1;
(statearr_14572_15855[(2)] = tc);

(statearr_14572_15855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (5))){
var inst_14541 = cljs.core.async.close_BANG_(tc);
var inst_14542 = cljs.core.async.close_BANG_(fc);
var state_14561__$1 = (function (){var statearr_14573 = state_14561;
(statearr_14573[(8)] = inst_14541);

return statearr_14573;
})();
var statearr_14574_15856 = state_14561__$1;
(statearr_14574_15856[(2)] = inst_14542);

(statearr_14574_15856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (14))){
var inst_14555 = (state_14561[(2)]);
var state_14561__$1 = state_14561;
var statearr_14575_15857 = state_14561__$1;
(statearr_14575_15857[(2)] = inst_14555);

(statearr_14575_15857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (10))){
var state_14561__$1 = state_14561;
var statearr_14576_15858 = state_14561__$1;
(statearr_14576_15858[(2)] = fc);

(statearr_14576_15858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (8))){
var inst_14550 = (state_14561[(2)]);
var state_14561__$1 = state_14561;
if(cljs.core.truth_(inst_14550)){
var statearr_14577_15859 = state_14561__$1;
(statearr_14577_15859[(1)] = (12));

} else {
var statearr_14578_15860 = state_14561__$1;
(statearr_14578_15860[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14150__auto__ = null;
var cljs$core$async$state_machine__14150__auto____0 = (function (){
var statearr_14579 = [null,null,null,null,null,null,null,null,null];
(statearr_14579[(0)] = cljs$core$async$state_machine__14150__auto__);

(statearr_14579[(1)] = (1));

return statearr_14579;
});
var cljs$core$async$state_machine__14150__auto____1 = (function (state_14561){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_14561);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e14580){var ex__14153__auto__ = e14580;
var statearr_14581_15861 = state_14561;
(statearr_14581_15861[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_14561[(4)]))){
var statearr_14582_15862 = state_14561;
(statearr_14582_15862[(1)] = cljs.core.first((state_14561[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15863 = state_14561;
state_14561 = G__15863;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$state_machine__14150__auto__ = function(state_14561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14150__auto____1.call(this,state_14561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14150__auto____0;
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14150__auto____1;
return cljs$core$async$state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_14583 = f__14221__auto__();
(statearr_14583[(6)] = c__14220__auto___15846);

return statearr_14583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14220__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_14605){
var state_val_14606 = (state_14605[(1)]);
if((state_val_14606 === (7))){
var inst_14601 = (state_14605[(2)]);
var state_14605__$1 = state_14605;
var statearr_14607_15864 = state_14605__$1;
(statearr_14607_15864[(2)] = inst_14601);

(statearr_14607_15864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (1))){
var inst_14584 = init;
var inst_14585 = inst_14584;
var state_14605__$1 = (function (){var statearr_14608 = state_14605;
(statearr_14608[(7)] = inst_14585);

return statearr_14608;
})();
var statearr_14609_15865 = state_14605__$1;
(statearr_14609_15865[(2)] = null);

(statearr_14609_15865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (4))){
var inst_14588 = (state_14605[(8)]);
var inst_14588__$1 = (state_14605[(2)]);
var inst_14589 = (inst_14588__$1 == null);
var state_14605__$1 = (function (){var statearr_14610 = state_14605;
(statearr_14610[(8)] = inst_14588__$1);

return statearr_14610;
})();
if(cljs.core.truth_(inst_14589)){
var statearr_14611_15866 = state_14605__$1;
(statearr_14611_15866[(1)] = (5));

} else {
var statearr_14612_15867 = state_14605__$1;
(statearr_14612_15867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (6))){
var inst_14592 = (state_14605[(9)]);
var inst_14588 = (state_14605[(8)]);
var inst_14585 = (state_14605[(7)]);
var inst_14592__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14585,inst_14588) : f.call(null,inst_14585,inst_14588));
var inst_14593 = cljs.core.reduced_QMARK_(inst_14592__$1);
var state_14605__$1 = (function (){var statearr_14613 = state_14605;
(statearr_14613[(9)] = inst_14592__$1);

return statearr_14613;
})();
if(inst_14593){
var statearr_14614_15868 = state_14605__$1;
(statearr_14614_15868[(1)] = (8));

} else {
var statearr_14615_15869 = state_14605__$1;
(statearr_14615_15869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (3))){
var inst_14603 = (state_14605[(2)]);
var state_14605__$1 = state_14605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14605__$1,inst_14603);
} else {
if((state_val_14606 === (2))){
var state_14605__$1 = state_14605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14605__$1,(4),ch);
} else {
if((state_val_14606 === (9))){
var inst_14592 = (state_14605[(9)]);
var inst_14585 = inst_14592;
var state_14605__$1 = (function (){var statearr_14616 = state_14605;
(statearr_14616[(7)] = inst_14585);

return statearr_14616;
})();
var statearr_14617_15870 = state_14605__$1;
(statearr_14617_15870[(2)] = null);

(statearr_14617_15870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (5))){
var inst_14585 = (state_14605[(7)]);
var state_14605__$1 = state_14605;
var statearr_14618_15871 = state_14605__$1;
(statearr_14618_15871[(2)] = inst_14585);

(statearr_14618_15871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (10))){
var inst_14599 = (state_14605[(2)]);
var state_14605__$1 = state_14605;
var statearr_14619_15872 = state_14605__$1;
(statearr_14619_15872[(2)] = inst_14599);

(statearr_14619_15872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (8))){
var inst_14592 = (state_14605[(9)]);
var inst_14595 = cljs.core.deref(inst_14592);
var state_14605__$1 = state_14605;
var statearr_14620_15873 = state_14605__$1;
(statearr_14620_15873[(2)] = inst_14595);

(statearr_14620_15873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14150__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14150__auto____0 = (function (){
var statearr_14621 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14621[(0)] = cljs$core$async$reduce_$_state_machine__14150__auto__);

(statearr_14621[(1)] = (1));

return statearr_14621;
});
var cljs$core$async$reduce_$_state_machine__14150__auto____1 = (function (state_14605){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_14605);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e14622){var ex__14153__auto__ = e14622;
var statearr_14623_15874 = state_14605;
(statearr_14623_15874[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_14605[(4)]))){
var statearr_14624_15875 = state_14605;
(statearr_14624_15875[(1)] = cljs.core.first((state_14605[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15876 = state_14605;
state_14605 = G__15876;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14150__auto__ = function(state_14605){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14150__auto____1.call(this,state_14605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14150__auto____0;
cljs$core$async$reduce_$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14150__auto____1;
return cljs$core$async$reduce_$_state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_14625 = f__14221__auto__();
(statearr_14625[(6)] = c__14220__auto__);

return statearr_14625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));

return c__14220__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14220__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_14631){
var state_val_14632 = (state_14631[(1)]);
if((state_val_14632 === (1))){
var inst_14626 = cljs.core.async.reduce(f__$1,init,ch);
var state_14631__$1 = state_14631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14631__$1,(2),inst_14626);
} else {
if((state_val_14632 === (2))){
var inst_14628 = (state_14631[(2)]);
var inst_14629 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14628) : f__$1.call(null,inst_14628));
var state_14631__$1 = state_14631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14631__$1,inst_14629);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14150__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14150__auto____0 = (function (){
var statearr_14633 = [null,null,null,null,null,null,null];
(statearr_14633[(0)] = cljs$core$async$transduce_$_state_machine__14150__auto__);

(statearr_14633[(1)] = (1));

return statearr_14633;
});
var cljs$core$async$transduce_$_state_machine__14150__auto____1 = (function (state_14631){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_14631);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e14634){var ex__14153__auto__ = e14634;
var statearr_14635_15877 = state_14631;
(statearr_14635_15877[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_14631[(4)]))){
var statearr_14636_15878 = state_14631;
(statearr_14636_15878[(1)] = cljs.core.first((state_14631[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15879 = state_14631;
state_14631 = G__15879;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14150__auto__ = function(state_14631){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14150__auto____1.call(this,state_14631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14150__auto____0;
cljs$core$async$transduce_$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14150__auto____1;
return cljs$core$async$transduce_$_state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_14637 = f__14221__auto__();
(statearr_14637[(6)] = c__14220__auto__);

return statearr_14637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));

return c__14220__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14639 = arguments.length;
switch (G__14639) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14220__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_14664){
var state_val_14665 = (state_14664[(1)]);
if((state_val_14665 === (7))){
var inst_14646 = (state_14664[(2)]);
var state_14664__$1 = state_14664;
var statearr_14666_15881 = state_14664__$1;
(statearr_14666_15881[(2)] = inst_14646);

(statearr_14666_15881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14665 === (1))){
var inst_14640 = cljs.core.seq(coll);
var inst_14641 = inst_14640;
var state_14664__$1 = (function (){var statearr_14667 = state_14664;
(statearr_14667[(7)] = inst_14641);

return statearr_14667;
})();
var statearr_14668_15882 = state_14664__$1;
(statearr_14668_15882[(2)] = null);

(statearr_14668_15882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14665 === (4))){
var inst_14641 = (state_14664[(7)]);
var inst_14644 = cljs.core.first(inst_14641);
var state_14664__$1 = state_14664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14664__$1,(7),ch,inst_14644);
} else {
if((state_val_14665 === (13))){
var inst_14658 = (state_14664[(2)]);
var state_14664__$1 = state_14664;
var statearr_14669_15883 = state_14664__$1;
(statearr_14669_15883[(2)] = inst_14658);

(statearr_14669_15883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14665 === (6))){
var inst_14649 = (state_14664[(2)]);
var state_14664__$1 = state_14664;
if(cljs.core.truth_(inst_14649)){
var statearr_14670_15884 = state_14664__$1;
(statearr_14670_15884[(1)] = (8));

} else {
var statearr_14671_15885 = state_14664__$1;
(statearr_14671_15885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14665 === (3))){
var inst_14662 = (state_14664[(2)]);
var state_14664__$1 = state_14664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14664__$1,inst_14662);
} else {
if((state_val_14665 === (12))){
var state_14664__$1 = state_14664;
var statearr_14672_15886 = state_14664__$1;
(statearr_14672_15886[(2)] = null);

(statearr_14672_15886[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14665 === (2))){
var inst_14641 = (state_14664[(7)]);
var state_14664__$1 = state_14664;
if(cljs.core.truth_(inst_14641)){
var statearr_14673_15887 = state_14664__$1;
(statearr_14673_15887[(1)] = (4));

} else {
var statearr_14674_15888 = state_14664__$1;
(statearr_14674_15888[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14665 === (11))){
var inst_14655 = cljs.core.async.close_BANG_(ch);
var state_14664__$1 = state_14664;
var statearr_14675_15889 = state_14664__$1;
(statearr_14675_15889[(2)] = inst_14655);

(statearr_14675_15889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14665 === (9))){
var state_14664__$1 = state_14664;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14676_15890 = state_14664__$1;
(statearr_14676_15890[(1)] = (11));

} else {
var statearr_14677_15891 = state_14664__$1;
(statearr_14677_15891[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14665 === (5))){
var inst_14641 = (state_14664[(7)]);
var state_14664__$1 = state_14664;
var statearr_14678_15892 = state_14664__$1;
(statearr_14678_15892[(2)] = inst_14641);

(statearr_14678_15892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14665 === (10))){
var inst_14660 = (state_14664[(2)]);
var state_14664__$1 = state_14664;
var statearr_14679_15893 = state_14664__$1;
(statearr_14679_15893[(2)] = inst_14660);

(statearr_14679_15893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14665 === (8))){
var inst_14641 = (state_14664[(7)]);
var inst_14651 = cljs.core.next(inst_14641);
var inst_14641__$1 = inst_14651;
var state_14664__$1 = (function (){var statearr_14680 = state_14664;
(statearr_14680[(7)] = inst_14641__$1);

return statearr_14680;
})();
var statearr_14681_15894 = state_14664__$1;
(statearr_14681_15894[(2)] = null);

(statearr_14681_15894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14150__auto__ = null;
var cljs$core$async$state_machine__14150__auto____0 = (function (){
var statearr_14682 = [null,null,null,null,null,null,null,null];
(statearr_14682[(0)] = cljs$core$async$state_machine__14150__auto__);

(statearr_14682[(1)] = (1));

return statearr_14682;
});
var cljs$core$async$state_machine__14150__auto____1 = (function (state_14664){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_14664);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e14683){var ex__14153__auto__ = e14683;
var statearr_14684_15895 = state_14664;
(statearr_14684_15895[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_14664[(4)]))){
var statearr_14685_15896 = state_14664;
(statearr_14685_15896[(1)] = cljs.core.first((state_14664[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15897 = state_14664;
state_14664 = G__15897;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$state_machine__14150__auto__ = function(state_14664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14150__auto____1.call(this,state_14664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14150__auto____0;
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14150__auto____1;
return cljs$core$async$state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_14686 = f__14221__auto__();
(statearr_14686[(6)] = c__14220__auto__);

return statearr_14686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));

return c__14220__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_15898 = (function (_){
var x__4422__auto__ = (((_ == null))?null:_);
var m__4423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4423__auto__.call(null,_));
} else {
var m__4420__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4420__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15898(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15899 = (function (m,ch,close_QMARK_){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4423__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4420__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15899(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15900 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15900(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15901 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15901(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14687 = (function (ch,cs,meta14688){
this.ch = ch;
this.cs = cs;
this.meta14688 = meta14688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14689,meta14688__$1){
var self__ = this;
var _14689__$1 = this;
return (new cljs.core.async.t_cljs$core$async14687(self__.ch,self__.cs,meta14688__$1));
}));

(cljs.core.async.t_cljs$core$async14687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14689){
var self__ = this;
var _14689__$1 = this;
return self__.meta14688;
}));

(cljs.core.async.t_cljs$core$async14687.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14687.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14687.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14687.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14687.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14688","meta14688",-1960070518,null)], null);
}));

(cljs.core.async.t_cljs$core$async14687.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14687");

(cljs.core.async.t_cljs$core$async14687.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async14687");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14687.
 */
cljs.core.async.__GT_t_cljs$core$async14687 = (function cljs$core$async$mult_$___GT_t_cljs$core$async14687(ch__$1,cs__$1,meta14688){
return (new cljs.core.async.t_cljs$core$async14687(ch__$1,cs__$1,meta14688));
});

}

return (new cljs.core.async.t_cljs$core$async14687(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14220__auto___15902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_14822){
var state_val_14823 = (state_14822[(1)]);
if((state_val_14823 === (7))){
var inst_14818 = (state_14822[(2)]);
var state_14822__$1 = state_14822;
var statearr_14824_15903 = state_14822__$1;
(statearr_14824_15903[(2)] = inst_14818);

(statearr_14824_15903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (20))){
var inst_14723 = (state_14822[(7)]);
var inst_14735 = cljs.core.first(inst_14723);
var inst_14736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14735,(0),null);
var inst_14737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14735,(1),null);
var state_14822__$1 = (function (){var statearr_14825 = state_14822;
(statearr_14825[(8)] = inst_14736);

return statearr_14825;
})();
if(cljs.core.truth_(inst_14737)){
var statearr_14826_15904 = state_14822__$1;
(statearr_14826_15904[(1)] = (22));

} else {
var statearr_14827_15905 = state_14822__$1;
(statearr_14827_15905[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (27))){
var inst_14772 = (state_14822[(9)]);
var inst_14767 = (state_14822[(10)]);
var inst_14765 = (state_14822[(11)]);
var inst_14692 = (state_14822[(12)]);
var inst_14772__$1 = cljs.core._nth(inst_14765,inst_14767);
var inst_14773 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14772__$1,inst_14692,done);
var state_14822__$1 = (function (){var statearr_14828 = state_14822;
(statearr_14828[(9)] = inst_14772__$1);

return statearr_14828;
})();
if(cljs.core.truth_(inst_14773)){
var statearr_14829_15906 = state_14822__$1;
(statearr_14829_15906[(1)] = (30));

} else {
var statearr_14830_15907 = state_14822__$1;
(statearr_14830_15907[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (1))){
var state_14822__$1 = state_14822;
var statearr_14831_15908 = state_14822__$1;
(statearr_14831_15908[(2)] = null);

(statearr_14831_15908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (24))){
var inst_14723 = (state_14822[(7)]);
var inst_14742 = (state_14822[(2)]);
var inst_14743 = cljs.core.next(inst_14723);
var inst_14701 = inst_14743;
var inst_14702 = null;
var inst_14703 = (0);
var inst_14704 = (0);
var state_14822__$1 = (function (){var statearr_14832 = state_14822;
(statearr_14832[(13)] = inst_14703);

(statearr_14832[(14)] = inst_14701);

(statearr_14832[(15)] = inst_14742);

(statearr_14832[(16)] = inst_14702);

(statearr_14832[(17)] = inst_14704);

return statearr_14832;
})();
var statearr_14833_15909 = state_14822__$1;
(statearr_14833_15909[(2)] = null);

(statearr_14833_15909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (39))){
var state_14822__$1 = state_14822;
var statearr_14837_15910 = state_14822__$1;
(statearr_14837_15910[(2)] = null);

(statearr_14837_15910[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (4))){
var inst_14692 = (state_14822[(12)]);
var inst_14692__$1 = (state_14822[(2)]);
var inst_14693 = (inst_14692__$1 == null);
var state_14822__$1 = (function (){var statearr_14838 = state_14822;
(statearr_14838[(12)] = inst_14692__$1);

return statearr_14838;
})();
if(cljs.core.truth_(inst_14693)){
var statearr_14839_15911 = state_14822__$1;
(statearr_14839_15911[(1)] = (5));

} else {
var statearr_14840_15912 = state_14822__$1;
(statearr_14840_15912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (15))){
var inst_14703 = (state_14822[(13)]);
var inst_14701 = (state_14822[(14)]);
var inst_14702 = (state_14822[(16)]);
var inst_14704 = (state_14822[(17)]);
var inst_14719 = (state_14822[(2)]);
var inst_14720 = (inst_14704 + (1));
var tmp14834 = inst_14703;
var tmp14835 = inst_14701;
var tmp14836 = inst_14702;
var inst_14701__$1 = tmp14835;
var inst_14702__$1 = tmp14836;
var inst_14703__$1 = tmp14834;
var inst_14704__$1 = inst_14720;
var state_14822__$1 = (function (){var statearr_14841 = state_14822;
(statearr_14841[(13)] = inst_14703__$1);

(statearr_14841[(14)] = inst_14701__$1);

(statearr_14841[(16)] = inst_14702__$1);

(statearr_14841[(17)] = inst_14704__$1);

(statearr_14841[(18)] = inst_14719);

return statearr_14841;
})();
var statearr_14842_15913 = state_14822__$1;
(statearr_14842_15913[(2)] = null);

(statearr_14842_15913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (21))){
var inst_14746 = (state_14822[(2)]);
var state_14822__$1 = state_14822;
var statearr_14846_15914 = state_14822__$1;
(statearr_14846_15914[(2)] = inst_14746);

(statearr_14846_15914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (31))){
var inst_14772 = (state_14822[(9)]);
var inst_14776 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14772);
var state_14822__$1 = state_14822;
var statearr_14847_15915 = state_14822__$1;
(statearr_14847_15915[(2)] = inst_14776);

(statearr_14847_15915[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (32))){
var inst_14767 = (state_14822[(10)]);
var inst_14765 = (state_14822[(11)]);
var inst_14764 = (state_14822[(19)]);
var inst_14766 = (state_14822[(20)]);
var inst_14778 = (state_14822[(2)]);
var inst_14779 = (inst_14767 + (1));
var tmp14843 = inst_14765;
var tmp14844 = inst_14764;
var tmp14845 = inst_14766;
var inst_14764__$1 = tmp14844;
var inst_14765__$1 = tmp14843;
var inst_14766__$1 = tmp14845;
var inst_14767__$1 = inst_14779;
var state_14822__$1 = (function (){var statearr_14848 = state_14822;
(statearr_14848[(10)] = inst_14767__$1);

(statearr_14848[(11)] = inst_14765__$1);

(statearr_14848[(21)] = inst_14778);

(statearr_14848[(19)] = inst_14764__$1);

(statearr_14848[(20)] = inst_14766__$1);

return statearr_14848;
})();
var statearr_14849_15916 = state_14822__$1;
(statearr_14849_15916[(2)] = null);

(statearr_14849_15916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (40))){
var inst_14791 = (state_14822[(22)]);
var inst_14795 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14791);
var state_14822__$1 = state_14822;
var statearr_14850_15917 = state_14822__$1;
(statearr_14850_15917[(2)] = inst_14795);

(statearr_14850_15917[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (33))){
var inst_14782 = (state_14822[(23)]);
var inst_14784 = cljs.core.chunked_seq_QMARK_(inst_14782);
var state_14822__$1 = state_14822;
if(inst_14784){
var statearr_14851_15918 = state_14822__$1;
(statearr_14851_15918[(1)] = (36));

} else {
var statearr_14852_15919 = state_14822__$1;
(statearr_14852_15919[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (13))){
var inst_14713 = (state_14822[(24)]);
var inst_14716 = cljs.core.async.close_BANG_(inst_14713);
var state_14822__$1 = state_14822;
var statearr_14853_15920 = state_14822__$1;
(statearr_14853_15920[(2)] = inst_14716);

(statearr_14853_15920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (22))){
var inst_14736 = (state_14822[(8)]);
var inst_14739 = cljs.core.async.close_BANG_(inst_14736);
var state_14822__$1 = state_14822;
var statearr_14854_15921 = state_14822__$1;
(statearr_14854_15921[(2)] = inst_14739);

(statearr_14854_15921[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (36))){
var inst_14782 = (state_14822[(23)]);
var inst_14786 = cljs.core.chunk_first(inst_14782);
var inst_14787 = cljs.core.chunk_rest(inst_14782);
var inst_14788 = cljs.core.count(inst_14786);
var inst_14764 = inst_14787;
var inst_14765 = inst_14786;
var inst_14766 = inst_14788;
var inst_14767 = (0);
var state_14822__$1 = (function (){var statearr_14855 = state_14822;
(statearr_14855[(10)] = inst_14767);

(statearr_14855[(11)] = inst_14765);

(statearr_14855[(19)] = inst_14764);

(statearr_14855[(20)] = inst_14766);

return statearr_14855;
})();
var statearr_14856_15922 = state_14822__$1;
(statearr_14856_15922[(2)] = null);

(statearr_14856_15922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (41))){
var inst_14782 = (state_14822[(23)]);
var inst_14797 = (state_14822[(2)]);
var inst_14798 = cljs.core.next(inst_14782);
var inst_14764 = inst_14798;
var inst_14765 = null;
var inst_14766 = (0);
var inst_14767 = (0);
var state_14822__$1 = (function (){var statearr_14857 = state_14822;
(statearr_14857[(25)] = inst_14797);

(statearr_14857[(10)] = inst_14767);

(statearr_14857[(11)] = inst_14765);

(statearr_14857[(19)] = inst_14764);

(statearr_14857[(20)] = inst_14766);

return statearr_14857;
})();
var statearr_14858_15923 = state_14822__$1;
(statearr_14858_15923[(2)] = null);

(statearr_14858_15923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (43))){
var state_14822__$1 = state_14822;
var statearr_14859_15924 = state_14822__$1;
(statearr_14859_15924[(2)] = null);

(statearr_14859_15924[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (29))){
var inst_14806 = (state_14822[(2)]);
var state_14822__$1 = state_14822;
var statearr_14860_15925 = state_14822__$1;
(statearr_14860_15925[(2)] = inst_14806);

(statearr_14860_15925[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (44))){
var inst_14815 = (state_14822[(2)]);
var state_14822__$1 = (function (){var statearr_14861 = state_14822;
(statearr_14861[(26)] = inst_14815);

return statearr_14861;
})();
var statearr_14862_15926 = state_14822__$1;
(statearr_14862_15926[(2)] = null);

(statearr_14862_15926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (6))){
var inst_14756 = (state_14822[(27)]);
var inst_14755 = cljs.core.deref(cs);
var inst_14756__$1 = cljs.core.keys(inst_14755);
var inst_14757 = cljs.core.count(inst_14756__$1);
var inst_14758 = cljs.core.reset_BANG_(dctr,inst_14757);
var inst_14763 = cljs.core.seq(inst_14756__$1);
var inst_14764 = inst_14763;
var inst_14765 = null;
var inst_14766 = (0);
var inst_14767 = (0);
var state_14822__$1 = (function (){var statearr_14863 = state_14822;
(statearr_14863[(10)] = inst_14767);

(statearr_14863[(11)] = inst_14765);

(statearr_14863[(27)] = inst_14756__$1);

(statearr_14863[(28)] = inst_14758);

(statearr_14863[(19)] = inst_14764);

(statearr_14863[(20)] = inst_14766);

return statearr_14863;
})();
var statearr_14864_15927 = state_14822__$1;
(statearr_14864_15927[(2)] = null);

(statearr_14864_15927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (28))){
var inst_14764 = (state_14822[(19)]);
var inst_14782 = (state_14822[(23)]);
var inst_14782__$1 = cljs.core.seq(inst_14764);
var state_14822__$1 = (function (){var statearr_14865 = state_14822;
(statearr_14865[(23)] = inst_14782__$1);

return statearr_14865;
})();
if(inst_14782__$1){
var statearr_14866_15928 = state_14822__$1;
(statearr_14866_15928[(1)] = (33));

} else {
var statearr_14867_15929 = state_14822__$1;
(statearr_14867_15929[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (25))){
var inst_14767 = (state_14822[(10)]);
var inst_14766 = (state_14822[(20)]);
var inst_14769 = (inst_14767 < inst_14766);
var inst_14770 = inst_14769;
var state_14822__$1 = state_14822;
if(cljs.core.truth_(inst_14770)){
var statearr_14868_15930 = state_14822__$1;
(statearr_14868_15930[(1)] = (27));

} else {
var statearr_14869_15931 = state_14822__$1;
(statearr_14869_15931[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (34))){
var state_14822__$1 = state_14822;
var statearr_14870_15932 = state_14822__$1;
(statearr_14870_15932[(2)] = null);

(statearr_14870_15932[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (17))){
var state_14822__$1 = state_14822;
var statearr_14871_15933 = state_14822__$1;
(statearr_14871_15933[(2)] = null);

(statearr_14871_15933[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (3))){
var inst_14820 = (state_14822[(2)]);
var state_14822__$1 = state_14822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14822__$1,inst_14820);
} else {
if((state_val_14823 === (12))){
var inst_14751 = (state_14822[(2)]);
var state_14822__$1 = state_14822;
var statearr_14872_15934 = state_14822__$1;
(statearr_14872_15934[(2)] = inst_14751);

(statearr_14872_15934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (2))){
var state_14822__$1 = state_14822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14822__$1,(4),ch);
} else {
if((state_val_14823 === (23))){
var state_14822__$1 = state_14822;
var statearr_14873_15935 = state_14822__$1;
(statearr_14873_15935[(2)] = null);

(statearr_14873_15935[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (35))){
var inst_14804 = (state_14822[(2)]);
var state_14822__$1 = state_14822;
var statearr_14874_15936 = state_14822__$1;
(statearr_14874_15936[(2)] = inst_14804);

(statearr_14874_15936[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (19))){
var inst_14723 = (state_14822[(7)]);
var inst_14727 = cljs.core.chunk_first(inst_14723);
var inst_14728 = cljs.core.chunk_rest(inst_14723);
var inst_14729 = cljs.core.count(inst_14727);
var inst_14701 = inst_14728;
var inst_14702 = inst_14727;
var inst_14703 = inst_14729;
var inst_14704 = (0);
var state_14822__$1 = (function (){var statearr_14875 = state_14822;
(statearr_14875[(13)] = inst_14703);

(statearr_14875[(14)] = inst_14701);

(statearr_14875[(16)] = inst_14702);

(statearr_14875[(17)] = inst_14704);

return statearr_14875;
})();
var statearr_14876_15937 = state_14822__$1;
(statearr_14876_15937[(2)] = null);

(statearr_14876_15937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (11))){
var inst_14701 = (state_14822[(14)]);
var inst_14723 = (state_14822[(7)]);
var inst_14723__$1 = cljs.core.seq(inst_14701);
var state_14822__$1 = (function (){var statearr_14877 = state_14822;
(statearr_14877[(7)] = inst_14723__$1);

return statearr_14877;
})();
if(inst_14723__$1){
var statearr_14878_15938 = state_14822__$1;
(statearr_14878_15938[(1)] = (16));

} else {
var statearr_14879_15939 = state_14822__$1;
(statearr_14879_15939[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (9))){
var inst_14753 = (state_14822[(2)]);
var state_14822__$1 = state_14822;
var statearr_14880_15940 = state_14822__$1;
(statearr_14880_15940[(2)] = inst_14753);

(statearr_14880_15940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (5))){
var inst_14699 = cljs.core.deref(cs);
var inst_14700 = cljs.core.seq(inst_14699);
var inst_14701 = inst_14700;
var inst_14702 = null;
var inst_14703 = (0);
var inst_14704 = (0);
var state_14822__$1 = (function (){var statearr_14881 = state_14822;
(statearr_14881[(13)] = inst_14703);

(statearr_14881[(14)] = inst_14701);

(statearr_14881[(16)] = inst_14702);

(statearr_14881[(17)] = inst_14704);

return statearr_14881;
})();
var statearr_14882_15941 = state_14822__$1;
(statearr_14882_15941[(2)] = null);

(statearr_14882_15941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (14))){
var state_14822__$1 = state_14822;
var statearr_14883_15942 = state_14822__$1;
(statearr_14883_15942[(2)] = null);

(statearr_14883_15942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (45))){
var inst_14812 = (state_14822[(2)]);
var state_14822__$1 = state_14822;
var statearr_14884_15943 = state_14822__$1;
(statearr_14884_15943[(2)] = inst_14812);

(statearr_14884_15943[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (26))){
var inst_14756 = (state_14822[(27)]);
var inst_14808 = (state_14822[(2)]);
var inst_14809 = cljs.core.seq(inst_14756);
var state_14822__$1 = (function (){var statearr_14885 = state_14822;
(statearr_14885[(29)] = inst_14808);

return statearr_14885;
})();
if(inst_14809){
var statearr_14886_15944 = state_14822__$1;
(statearr_14886_15944[(1)] = (42));

} else {
var statearr_14887_15945 = state_14822__$1;
(statearr_14887_15945[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (16))){
var inst_14723 = (state_14822[(7)]);
var inst_14725 = cljs.core.chunked_seq_QMARK_(inst_14723);
var state_14822__$1 = state_14822;
if(inst_14725){
var statearr_14888_15946 = state_14822__$1;
(statearr_14888_15946[(1)] = (19));

} else {
var statearr_14889_15947 = state_14822__$1;
(statearr_14889_15947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (38))){
var inst_14801 = (state_14822[(2)]);
var state_14822__$1 = state_14822;
var statearr_14890_15948 = state_14822__$1;
(statearr_14890_15948[(2)] = inst_14801);

(statearr_14890_15948[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (30))){
var state_14822__$1 = state_14822;
var statearr_14891_15949 = state_14822__$1;
(statearr_14891_15949[(2)] = null);

(statearr_14891_15949[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (10))){
var inst_14702 = (state_14822[(16)]);
var inst_14704 = (state_14822[(17)]);
var inst_14712 = cljs.core._nth(inst_14702,inst_14704);
var inst_14713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14712,(0),null);
var inst_14714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14712,(1),null);
var state_14822__$1 = (function (){var statearr_14892 = state_14822;
(statearr_14892[(24)] = inst_14713);

return statearr_14892;
})();
if(cljs.core.truth_(inst_14714)){
var statearr_14893_15950 = state_14822__$1;
(statearr_14893_15950[(1)] = (13));

} else {
var statearr_14894_15951 = state_14822__$1;
(statearr_14894_15951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (18))){
var inst_14749 = (state_14822[(2)]);
var state_14822__$1 = state_14822;
var statearr_14895_15952 = state_14822__$1;
(statearr_14895_15952[(2)] = inst_14749);

(statearr_14895_15952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (42))){
var state_14822__$1 = state_14822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14822__$1,(45),dchan);
} else {
if((state_val_14823 === (37))){
var inst_14791 = (state_14822[(22)]);
var inst_14692 = (state_14822[(12)]);
var inst_14782 = (state_14822[(23)]);
var inst_14791__$1 = cljs.core.first(inst_14782);
var inst_14792 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14791__$1,inst_14692,done);
var state_14822__$1 = (function (){var statearr_14896 = state_14822;
(statearr_14896[(22)] = inst_14791__$1);

return statearr_14896;
})();
if(cljs.core.truth_(inst_14792)){
var statearr_14897_15953 = state_14822__$1;
(statearr_14897_15953[(1)] = (39));

} else {
var statearr_14898_15954 = state_14822__$1;
(statearr_14898_15954[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (8))){
var inst_14703 = (state_14822[(13)]);
var inst_14704 = (state_14822[(17)]);
var inst_14706 = (inst_14704 < inst_14703);
var inst_14707 = inst_14706;
var state_14822__$1 = state_14822;
if(cljs.core.truth_(inst_14707)){
var statearr_14899_15955 = state_14822__$1;
(statearr_14899_15955[(1)] = (10));

} else {
var statearr_14900_15956 = state_14822__$1;
(statearr_14900_15956[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14150__auto__ = null;
var cljs$core$async$mult_$_state_machine__14150__auto____0 = (function (){
var statearr_14901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14901[(0)] = cljs$core$async$mult_$_state_machine__14150__auto__);

(statearr_14901[(1)] = (1));

return statearr_14901;
});
var cljs$core$async$mult_$_state_machine__14150__auto____1 = (function (state_14822){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_14822);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e14902){var ex__14153__auto__ = e14902;
var statearr_14903_15957 = state_14822;
(statearr_14903_15957[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_14822[(4)]))){
var statearr_14904_15958 = state_14822;
(statearr_14904_15958[(1)] = cljs.core.first((state_14822[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15959 = state_14822;
state_14822 = G__15959;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14150__auto__ = function(state_14822){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14150__auto____1.call(this,state_14822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14150__auto____0;
cljs$core$async$mult_$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14150__auto____1;
return cljs$core$async$mult_$_state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_14905 = f__14221__auto__();
(statearr_14905[(6)] = c__14220__auto___15902);

return statearr_14905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14907 = arguments.length;
switch (G__14907) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_15961 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_15961(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_15962 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_15962(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_15963 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_15963(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_15964 = (function (m,state_map){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4423__auto__.call(null,m,state_map));
} else {
var m__4420__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4420__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_15964(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_15965 = (function (m,mode){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4423__auto__.call(null,m,mode));
} else {
var m__4420__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4420__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_15965(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15966 = arguments.length;
var i__4731__auto___15967 = (0);
while(true){
if((i__4731__auto___15967 < len__4730__auto___15966)){
args__4736__auto__.push((arguments[i__4731__auto___15967]));

var G__15968 = (i__4731__auto___15967 + (1));
i__4731__auto___15967 = G__15968;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14912){
var map__14913 = p__14912;
var map__14913__$1 = (((((!((map__14913 == null))))?(((((map__14913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14913):map__14913);
var opts = map__14913__$1;
var statearr_14915_15969 = state;
(statearr_14915_15969[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14916_15970 = state;
(statearr_14916_15970[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_14917_15971 = state;
(statearr_14917_15971[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14908){
var G__14909 = cljs.core.first(seq14908);
var seq14908__$1 = cljs.core.next(seq14908);
var G__14910 = cljs.core.first(seq14908__$1);
var seq14908__$2 = cljs.core.next(seq14908__$1);
var G__14911 = cljs.core.first(seq14908__$2);
var seq14908__$3 = cljs.core.next(seq14908__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14909,G__14910,G__14911,seq14908__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14918 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14919){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14919 = meta14919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14920,meta14919__$1){
var self__ = this;
var _14920__$1 = this;
return (new cljs.core.async.t_cljs$core$async14918(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14919__$1));
}));

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14920){
var self__ = this;
var _14920__$1 = this;
return self__.meta14919;
}));

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14919","meta14919",415627942,null)], null);
}));

(cljs.core.async.t_cljs$core$async14918.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14918");

(cljs.core.async.t_cljs$core$async14918.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async14918");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14918.
 */
cljs.core.async.__GT_t_cljs$core$async14918 = (function cljs$core$async$mix_$___GT_t_cljs$core$async14918(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14919){
return (new cljs.core.async.t_cljs$core$async14918(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14919));
});

}

return (new cljs.core.async.t_cljs$core$async14918(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14220__auto___15972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_15022){
var state_val_15023 = (state_15022[(1)]);
if((state_val_15023 === (7))){
var inst_14937 = (state_15022[(2)]);
var state_15022__$1 = state_15022;
var statearr_15024_15973 = state_15022__$1;
(statearr_15024_15973[(2)] = inst_14937);

(statearr_15024_15973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (20))){
var inst_14949 = (state_15022[(7)]);
var state_15022__$1 = state_15022;
var statearr_15025_15974 = state_15022__$1;
(statearr_15025_15974[(2)] = inst_14949);

(statearr_15025_15974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (27))){
var state_15022__$1 = state_15022;
var statearr_15026_15975 = state_15022__$1;
(statearr_15026_15975[(2)] = null);

(statearr_15026_15975[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (1))){
var inst_14924 = (state_15022[(8)]);
var inst_14924__$1 = calc_state();
var inst_14926 = (inst_14924__$1 == null);
var inst_14927 = cljs.core.not(inst_14926);
var state_15022__$1 = (function (){var statearr_15027 = state_15022;
(statearr_15027[(8)] = inst_14924__$1);

return statearr_15027;
})();
if(inst_14927){
var statearr_15028_15976 = state_15022__$1;
(statearr_15028_15976[(1)] = (2));

} else {
var statearr_15029_15977 = state_15022__$1;
(statearr_15029_15977[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (24))){
var inst_14973 = (state_15022[(9)]);
var inst_14982 = (state_15022[(10)]);
var inst_14996 = (state_15022[(11)]);
var inst_14996__$1 = (inst_14973.cljs$core$IFn$_invoke$arity$1 ? inst_14973.cljs$core$IFn$_invoke$arity$1(inst_14982) : inst_14973.call(null,inst_14982));
var state_15022__$1 = (function (){var statearr_15030 = state_15022;
(statearr_15030[(11)] = inst_14996__$1);

return statearr_15030;
})();
if(cljs.core.truth_(inst_14996__$1)){
var statearr_15031_15978 = state_15022__$1;
(statearr_15031_15978[(1)] = (29));

} else {
var statearr_15032_15979 = state_15022__$1;
(statearr_15032_15979[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (4))){
var inst_14940 = (state_15022[(2)]);
var state_15022__$1 = state_15022;
if(cljs.core.truth_(inst_14940)){
var statearr_15033_15980 = state_15022__$1;
(statearr_15033_15980[(1)] = (8));

} else {
var statearr_15034_15981 = state_15022__$1;
(statearr_15034_15981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (15))){
var inst_14967 = (state_15022[(2)]);
var state_15022__$1 = state_15022;
if(cljs.core.truth_(inst_14967)){
var statearr_15035_15982 = state_15022__$1;
(statearr_15035_15982[(1)] = (19));

} else {
var statearr_15036_15983 = state_15022__$1;
(statearr_15036_15983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (21))){
var inst_14972 = (state_15022[(12)]);
var inst_14972__$1 = (state_15022[(2)]);
var inst_14973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14972__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14972__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14972__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15022__$1 = (function (){var statearr_15037 = state_15022;
(statearr_15037[(9)] = inst_14973);

(statearr_15037[(13)] = inst_14974);

(statearr_15037[(12)] = inst_14972__$1);

return statearr_15037;
})();
return cljs.core.async.ioc_alts_BANG_(state_15022__$1,(22),inst_14975);
} else {
if((state_val_15023 === (31))){
var inst_15004 = (state_15022[(2)]);
var state_15022__$1 = state_15022;
if(cljs.core.truth_(inst_15004)){
var statearr_15038_15984 = state_15022__$1;
(statearr_15038_15984[(1)] = (32));

} else {
var statearr_15039_15985 = state_15022__$1;
(statearr_15039_15985[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (32))){
var inst_14981 = (state_15022[(14)]);
var state_15022__$1 = state_15022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15022__$1,(35),out,inst_14981);
} else {
if((state_val_15023 === (33))){
var inst_14972 = (state_15022[(12)]);
var inst_14949 = inst_14972;
var state_15022__$1 = (function (){var statearr_15040 = state_15022;
(statearr_15040[(7)] = inst_14949);

return statearr_15040;
})();
var statearr_15041_15986 = state_15022__$1;
(statearr_15041_15986[(2)] = null);

(statearr_15041_15986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (13))){
var inst_14949 = (state_15022[(7)]);
var inst_14956 = inst_14949.cljs$lang$protocol_mask$partition0$;
var inst_14957 = (inst_14956 & (64));
var inst_14958 = inst_14949.cljs$core$ISeq$;
var inst_14959 = (cljs.core.PROTOCOL_SENTINEL === inst_14958);
var inst_14960 = ((inst_14957) || (inst_14959));
var state_15022__$1 = state_15022;
if(cljs.core.truth_(inst_14960)){
var statearr_15042_15987 = state_15022__$1;
(statearr_15042_15987[(1)] = (16));

} else {
var statearr_15043_15988 = state_15022__$1;
(statearr_15043_15988[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (22))){
var inst_14982 = (state_15022[(10)]);
var inst_14981 = (state_15022[(14)]);
var inst_14980 = (state_15022[(2)]);
var inst_14981__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14980,(0),null);
var inst_14982__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14980,(1),null);
var inst_14983 = (inst_14981__$1 == null);
var inst_14984 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14982__$1,change);
var inst_14985 = ((inst_14983) || (inst_14984));
var state_15022__$1 = (function (){var statearr_15044 = state_15022;
(statearr_15044[(10)] = inst_14982__$1);

(statearr_15044[(14)] = inst_14981__$1);

return statearr_15044;
})();
if(cljs.core.truth_(inst_14985)){
var statearr_15045_15989 = state_15022__$1;
(statearr_15045_15989[(1)] = (23));

} else {
var statearr_15046_15990 = state_15022__$1;
(statearr_15046_15990[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (36))){
var inst_14972 = (state_15022[(12)]);
var inst_14949 = inst_14972;
var state_15022__$1 = (function (){var statearr_15047 = state_15022;
(statearr_15047[(7)] = inst_14949);

return statearr_15047;
})();
var statearr_15048_15991 = state_15022__$1;
(statearr_15048_15991[(2)] = null);

(statearr_15048_15991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (29))){
var inst_14996 = (state_15022[(11)]);
var state_15022__$1 = state_15022;
var statearr_15049_15992 = state_15022__$1;
(statearr_15049_15992[(2)] = inst_14996);

(statearr_15049_15992[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (6))){
var state_15022__$1 = state_15022;
var statearr_15050_15993 = state_15022__$1;
(statearr_15050_15993[(2)] = false);

(statearr_15050_15993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (28))){
var inst_14992 = (state_15022[(2)]);
var inst_14993 = calc_state();
var inst_14949 = inst_14993;
var state_15022__$1 = (function (){var statearr_15051 = state_15022;
(statearr_15051[(7)] = inst_14949);

(statearr_15051[(15)] = inst_14992);

return statearr_15051;
})();
var statearr_15052_15994 = state_15022__$1;
(statearr_15052_15994[(2)] = null);

(statearr_15052_15994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (25))){
var inst_15018 = (state_15022[(2)]);
var state_15022__$1 = state_15022;
var statearr_15053_15995 = state_15022__$1;
(statearr_15053_15995[(2)] = inst_15018);

(statearr_15053_15995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (34))){
var inst_15016 = (state_15022[(2)]);
var state_15022__$1 = state_15022;
var statearr_15054_15996 = state_15022__$1;
(statearr_15054_15996[(2)] = inst_15016);

(statearr_15054_15996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (17))){
var state_15022__$1 = state_15022;
var statearr_15055_15997 = state_15022__$1;
(statearr_15055_15997[(2)] = false);

(statearr_15055_15997[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (3))){
var state_15022__$1 = state_15022;
var statearr_15056_15998 = state_15022__$1;
(statearr_15056_15998[(2)] = false);

(statearr_15056_15998[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (12))){
var inst_15020 = (state_15022[(2)]);
var state_15022__$1 = state_15022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15022__$1,inst_15020);
} else {
if((state_val_15023 === (2))){
var inst_14924 = (state_15022[(8)]);
var inst_14929 = inst_14924.cljs$lang$protocol_mask$partition0$;
var inst_14930 = (inst_14929 & (64));
var inst_14931 = inst_14924.cljs$core$ISeq$;
var inst_14932 = (cljs.core.PROTOCOL_SENTINEL === inst_14931);
var inst_14933 = ((inst_14930) || (inst_14932));
var state_15022__$1 = state_15022;
if(cljs.core.truth_(inst_14933)){
var statearr_15057_15999 = state_15022__$1;
(statearr_15057_15999[(1)] = (5));

} else {
var statearr_15058_16000 = state_15022__$1;
(statearr_15058_16000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (23))){
var inst_14981 = (state_15022[(14)]);
var inst_14987 = (inst_14981 == null);
var state_15022__$1 = state_15022;
if(cljs.core.truth_(inst_14987)){
var statearr_15059_16001 = state_15022__$1;
(statearr_15059_16001[(1)] = (26));

} else {
var statearr_15060_16002 = state_15022__$1;
(statearr_15060_16002[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (35))){
var inst_15007 = (state_15022[(2)]);
var state_15022__$1 = state_15022;
if(cljs.core.truth_(inst_15007)){
var statearr_15061_16003 = state_15022__$1;
(statearr_15061_16003[(1)] = (36));

} else {
var statearr_15062_16004 = state_15022__$1;
(statearr_15062_16004[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (19))){
var inst_14949 = (state_15022[(7)]);
var inst_14969 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14949);
var state_15022__$1 = state_15022;
var statearr_15063_16005 = state_15022__$1;
(statearr_15063_16005[(2)] = inst_14969);

(statearr_15063_16005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (11))){
var inst_14949 = (state_15022[(7)]);
var inst_14953 = (inst_14949 == null);
var inst_14954 = cljs.core.not(inst_14953);
var state_15022__$1 = state_15022;
if(inst_14954){
var statearr_15064_16006 = state_15022__$1;
(statearr_15064_16006[(1)] = (13));

} else {
var statearr_15065_16007 = state_15022__$1;
(statearr_15065_16007[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (9))){
var inst_14924 = (state_15022[(8)]);
var state_15022__$1 = state_15022;
var statearr_15066_16008 = state_15022__$1;
(statearr_15066_16008[(2)] = inst_14924);

(statearr_15066_16008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (5))){
var state_15022__$1 = state_15022;
var statearr_15067_16009 = state_15022__$1;
(statearr_15067_16009[(2)] = true);

(statearr_15067_16009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (14))){
var state_15022__$1 = state_15022;
var statearr_15068_16010 = state_15022__$1;
(statearr_15068_16010[(2)] = false);

(statearr_15068_16010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (26))){
var inst_14982 = (state_15022[(10)]);
var inst_14989 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14982);
var state_15022__$1 = state_15022;
var statearr_15069_16011 = state_15022__$1;
(statearr_15069_16011[(2)] = inst_14989);

(statearr_15069_16011[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (16))){
var state_15022__$1 = state_15022;
var statearr_15070_16012 = state_15022__$1;
(statearr_15070_16012[(2)] = true);

(statearr_15070_16012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (38))){
var inst_15012 = (state_15022[(2)]);
var state_15022__$1 = state_15022;
var statearr_15071_16013 = state_15022__$1;
(statearr_15071_16013[(2)] = inst_15012);

(statearr_15071_16013[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (30))){
var inst_14973 = (state_15022[(9)]);
var inst_14982 = (state_15022[(10)]);
var inst_14974 = (state_15022[(13)]);
var inst_14999 = cljs.core.empty_QMARK_(inst_14973);
var inst_15000 = (inst_14974.cljs$core$IFn$_invoke$arity$1 ? inst_14974.cljs$core$IFn$_invoke$arity$1(inst_14982) : inst_14974.call(null,inst_14982));
var inst_15001 = cljs.core.not(inst_15000);
var inst_15002 = ((inst_14999) && (inst_15001));
var state_15022__$1 = state_15022;
var statearr_15072_16014 = state_15022__$1;
(statearr_15072_16014[(2)] = inst_15002);

(statearr_15072_16014[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (10))){
var inst_14924 = (state_15022[(8)]);
var inst_14945 = (state_15022[(2)]);
var inst_14946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14945,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14945,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14945,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14949 = inst_14924;
var state_15022__$1 = (function (){var statearr_15073 = state_15022;
(statearr_15073[(16)] = inst_14947);

(statearr_15073[(7)] = inst_14949);

(statearr_15073[(17)] = inst_14946);

(statearr_15073[(18)] = inst_14948);

return statearr_15073;
})();
var statearr_15074_16015 = state_15022__$1;
(statearr_15074_16015[(2)] = null);

(statearr_15074_16015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (18))){
var inst_14964 = (state_15022[(2)]);
var state_15022__$1 = state_15022;
var statearr_15075_16016 = state_15022__$1;
(statearr_15075_16016[(2)] = inst_14964);

(statearr_15075_16016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (37))){
var state_15022__$1 = state_15022;
var statearr_15076_16017 = state_15022__$1;
(statearr_15076_16017[(2)] = null);

(statearr_15076_16017[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15023 === (8))){
var inst_14924 = (state_15022[(8)]);
var inst_14942 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14924);
var state_15022__$1 = state_15022;
var statearr_15077_16018 = state_15022__$1;
(statearr_15077_16018[(2)] = inst_14942);

(statearr_15077_16018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14150__auto__ = null;
var cljs$core$async$mix_$_state_machine__14150__auto____0 = (function (){
var statearr_15078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15078[(0)] = cljs$core$async$mix_$_state_machine__14150__auto__);

(statearr_15078[(1)] = (1));

return statearr_15078;
});
var cljs$core$async$mix_$_state_machine__14150__auto____1 = (function (state_15022){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_15022);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e15079){var ex__14153__auto__ = e15079;
var statearr_15080_16019 = state_15022;
(statearr_15080_16019[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_15022[(4)]))){
var statearr_15081_16020 = state_15022;
(statearr_15081_16020[(1)] = cljs.core.first((state_15022[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16021 = state_15022;
state_15022 = G__16021;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14150__auto__ = function(state_15022){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14150__auto____1.call(this,state_15022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14150__auto____0;
cljs$core$async$mix_$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14150__auto____1;
return cljs$core$async$mix_$_state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15082 = f__14221__auto__();
(statearr_15082[(6)] = c__14220__auto___15972);

return statearr_15082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16022 = (function (p,v,ch,close_QMARK_){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4423__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4420__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16022(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16023 = (function (p,v,ch){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4423__auto__.call(null,p,v,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4420__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16023(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16024 = (function() {
var G__16025 = null;
var G__16025__1 = (function (p){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4423__auto__.call(null,p));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4420__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16025__2 = (function (p,v){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4423__auto__.call(null,p,v));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4420__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16025 = function(p,v){
switch(arguments.length){
case 1:
return G__16025__1.call(this,p);
case 2:
return G__16025__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16025.cljs$core$IFn$_invoke$arity$1 = G__16025__1;
G__16025.cljs$core$IFn$_invoke$arity$2 = G__16025__2;
return G__16025;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15084 = arguments.length;
switch (G__15084) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16024(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16024(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15087 = arguments.length;
switch (G__15087) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15085_SHARP_){
if(cljs.core.truth_((p1__15085_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15085_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15085_SHARP_.call(null,topic)))){
return p1__15085_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15085_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15088 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15089){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15089 = meta15089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15090,meta15089__$1){
var self__ = this;
var _15090__$1 = this;
return (new cljs.core.async.t_cljs$core$async15088(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15089__$1));
}));

(cljs.core.async.t_cljs$core$async15088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15090){
var self__ = this;
var _15090__$1 = this;
return self__.meta15089;
}));

(cljs.core.async.t_cljs$core$async15088.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15088.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15088.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15088.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15089","meta15089",318098009,null)], null);
}));

(cljs.core.async.t_cljs$core$async15088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15088");

(cljs.core.async.t_cljs$core$async15088.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async15088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15088.
 */
cljs.core.async.__GT_t_cljs$core$async15088 = (function cljs$core$async$__GT_t_cljs$core$async15088(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15089){
return (new cljs.core.async.t_cljs$core$async15088(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15089));
});

}

return (new cljs.core.async.t_cljs$core$async15088(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14220__auto___16028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_15162){
var state_val_15163 = (state_15162[(1)]);
if((state_val_15163 === (7))){
var inst_15158 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15164_16029 = state_15162__$1;
(statearr_15164_16029[(2)] = inst_15158);

(statearr_15164_16029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (20))){
var state_15162__$1 = state_15162;
var statearr_15165_16030 = state_15162__$1;
(statearr_15165_16030[(2)] = null);

(statearr_15165_16030[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (1))){
var state_15162__$1 = state_15162;
var statearr_15166_16031 = state_15162__$1;
(statearr_15166_16031[(2)] = null);

(statearr_15166_16031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (24))){
var inst_15141 = (state_15162[(7)]);
var inst_15150 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15141);
var state_15162__$1 = state_15162;
var statearr_15167_16032 = state_15162__$1;
(statearr_15167_16032[(2)] = inst_15150);

(statearr_15167_16032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (4))){
var inst_15093 = (state_15162[(8)]);
var inst_15093__$1 = (state_15162[(2)]);
var inst_15094 = (inst_15093__$1 == null);
var state_15162__$1 = (function (){var statearr_15168 = state_15162;
(statearr_15168[(8)] = inst_15093__$1);

return statearr_15168;
})();
if(cljs.core.truth_(inst_15094)){
var statearr_15169_16033 = state_15162__$1;
(statearr_15169_16033[(1)] = (5));

} else {
var statearr_15170_16034 = state_15162__$1;
(statearr_15170_16034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (15))){
var inst_15135 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15171_16035 = state_15162__$1;
(statearr_15171_16035[(2)] = inst_15135);

(statearr_15171_16035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (21))){
var inst_15155 = (state_15162[(2)]);
var state_15162__$1 = (function (){var statearr_15172 = state_15162;
(statearr_15172[(9)] = inst_15155);

return statearr_15172;
})();
var statearr_15173_16036 = state_15162__$1;
(statearr_15173_16036[(2)] = null);

(statearr_15173_16036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (13))){
var inst_15117 = (state_15162[(10)]);
var inst_15119 = cljs.core.chunked_seq_QMARK_(inst_15117);
var state_15162__$1 = state_15162;
if(inst_15119){
var statearr_15174_16037 = state_15162__$1;
(statearr_15174_16037[(1)] = (16));

} else {
var statearr_15175_16038 = state_15162__$1;
(statearr_15175_16038[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (22))){
var inst_15147 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
if(cljs.core.truth_(inst_15147)){
var statearr_15176_16039 = state_15162__$1;
(statearr_15176_16039[(1)] = (23));

} else {
var statearr_15177_16040 = state_15162__$1;
(statearr_15177_16040[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (6))){
var inst_15141 = (state_15162[(7)]);
var inst_15143 = (state_15162[(11)]);
var inst_15093 = (state_15162[(8)]);
var inst_15141__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15093) : topic_fn.call(null,inst_15093));
var inst_15142 = cljs.core.deref(mults);
var inst_15143__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15142,inst_15141__$1);
var state_15162__$1 = (function (){var statearr_15178 = state_15162;
(statearr_15178[(7)] = inst_15141__$1);

(statearr_15178[(11)] = inst_15143__$1);

return statearr_15178;
})();
if(cljs.core.truth_(inst_15143__$1)){
var statearr_15179_16041 = state_15162__$1;
(statearr_15179_16041[(1)] = (19));

} else {
var statearr_15180_16042 = state_15162__$1;
(statearr_15180_16042[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (25))){
var inst_15152 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15181_16043 = state_15162__$1;
(statearr_15181_16043[(2)] = inst_15152);

(statearr_15181_16043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (17))){
var inst_15117 = (state_15162[(10)]);
var inst_15126 = cljs.core.first(inst_15117);
var inst_15127 = cljs.core.async.muxch_STAR_(inst_15126);
var inst_15128 = cljs.core.async.close_BANG_(inst_15127);
var inst_15129 = cljs.core.next(inst_15117);
var inst_15103 = inst_15129;
var inst_15104 = null;
var inst_15105 = (0);
var inst_15106 = (0);
var state_15162__$1 = (function (){var statearr_15182 = state_15162;
(statearr_15182[(12)] = inst_15103);

(statearr_15182[(13)] = inst_15106);

(statearr_15182[(14)] = inst_15105);

(statearr_15182[(15)] = inst_15128);

(statearr_15182[(16)] = inst_15104);

return statearr_15182;
})();
var statearr_15183_16044 = state_15162__$1;
(statearr_15183_16044[(2)] = null);

(statearr_15183_16044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (3))){
var inst_15160 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15162__$1,inst_15160);
} else {
if((state_val_15163 === (12))){
var inst_15137 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15184_16045 = state_15162__$1;
(statearr_15184_16045[(2)] = inst_15137);

(statearr_15184_16045[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (2))){
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15162__$1,(4),ch);
} else {
if((state_val_15163 === (23))){
var state_15162__$1 = state_15162;
var statearr_15185_16046 = state_15162__$1;
(statearr_15185_16046[(2)] = null);

(statearr_15185_16046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (19))){
var inst_15143 = (state_15162[(11)]);
var inst_15093 = (state_15162[(8)]);
var inst_15145 = cljs.core.async.muxch_STAR_(inst_15143);
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15162__$1,(22),inst_15145,inst_15093);
} else {
if((state_val_15163 === (11))){
var inst_15103 = (state_15162[(12)]);
var inst_15117 = (state_15162[(10)]);
var inst_15117__$1 = cljs.core.seq(inst_15103);
var state_15162__$1 = (function (){var statearr_15186 = state_15162;
(statearr_15186[(10)] = inst_15117__$1);

return statearr_15186;
})();
if(inst_15117__$1){
var statearr_15187_16047 = state_15162__$1;
(statearr_15187_16047[(1)] = (13));

} else {
var statearr_15188_16048 = state_15162__$1;
(statearr_15188_16048[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (9))){
var inst_15139 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15189_16049 = state_15162__$1;
(statearr_15189_16049[(2)] = inst_15139);

(statearr_15189_16049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (5))){
var inst_15100 = cljs.core.deref(mults);
var inst_15101 = cljs.core.vals(inst_15100);
var inst_15102 = cljs.core.seq(inst_15101);
var inst_15103 = inst_15102;
var inst_15104 = null;
var inst_15105 = (0);
var inst_15106 = (0);
var state_15162__$1 = (function (){var statearr_15190 = state_15162;
(statearr_15190[(12)] = inst_15103);

(statearr_15190[(13)] = inst_15106);

(statearr_15190[(14)] = inst_15105);

(statearr_15190[(16)] = inst_15104);

return statearr_15190;
})();
var statearr_15191_16050 = state_15162__$1;
(statearr_15191_16050[(2)] = null);

(statearr_15191_16050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (14))){
var state_15162__$1 = state_15162;
var statearr_15195_16051 = state_15162__$1;
(statearr_15195_16051[(2)] = null);

(statearr_15195_16051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (16))){
var inst_15117 = (state_15162[(10)]);
var inst_15121 = cljs.core.chunk_first(inst_15117);
var inst_15122 = cljs.core.chunk_rest(inst_15117);
var inst_15123 = cljs.core.count(inst_15121);
var inst_15103 = inst_15122;
var inst_15104 = inst_15121;
var inst_15105 = inst_15123;
var inst_15106 = (0);
var state_15162__$1 = (function (){var statearr_15196 = state_15162;
(statearr_15196[(12)] = inst_15103);

(statearr_15196[(13)] = inst_15106);

(statearr_15196[(14)] = inst_15105);

(statearr_15196[(16)] = inst_15104);

return statearr_15196;
})();
var statearr_15197_16052 = state_15162__$1;
(statearr_15197_16052[(2)] = null);

(statearr_15197_16052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (10))){
var inst_15103 = (state_15162[(12)]);
var inst_15106 = (state_15162[(13)]);
var inst_15105 = (state_15162[(14)]);
var inst_15104 = (state_15162[(16)]);
var inst_15111 = cljs.core._nth(inst_15104,inst_15106);
var inst_15112 = cljs.core.async.muxch_STAR_(inst_15111);
var inst_15113 = cljs.core.async.close_BANG_(inst_15112);
var inst_15114 = (inst_15106 + (1));
var tmp15192 = inst_15103;
var tmp15193 = inst_15105;
var tmp15194 = inst_15104;
var inst_15103__$1 = tmp15192;
var inst_15104__$1 = tmp15194;
var inst_15105__$1 = tmp15193;
var inst_15106__$1 = inst_15114;
var state_15162__$1 = (function (){var statearr_15198 = state_15162;
(statearr_15198[(12)] = inst_15103__$1);

(statearr_15198[(13)] = inst_15106__$1);

(statearr_15198[(14)] = inst_15105__$1);

(statearr_15198[(16)] = inst_15104__$1);

(statearr_15198[(17)] = inst_15113);

return statearr_15198;
})();
var statearr_15199_16053 = state_15162__$1;
(statearr_15199_16053[(2)] = null);

(statearr_15199_16053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (18))){
var inst_15132 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15200_16054 = state_15162__$1;
(statearr_15200_16054[(2)] = inst_15132);

(statearr_15200_16054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (8))){
var inst_15106 = (state_15162[(13)]);
var inst_15105 = (state_15162[(14)]);
var inst_15108 = (inst_15106 < inst_15105);
var inst_15109 = inst_15108;
var state_15162__$1 = state_15162;
if(cljs.core.truth_(inst_15109)){
var statearr_15201_16055 = state_15162__$1;
(statearr_15201_16055[(1)] = (10));

} else {
var statearr_15202_16056 = state_15162__$1;
(statearr_15202_16056[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14150__auto__ = null;
var cljs$core$async$state_machine__14150__auto____0 = (function (){
var statearr_15203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15203[(0)] = cljs$core$async$state_machine__14150__auto__);

(statearr_15203[(1)] = (1));

return statearr_15203;
});
var cljs$core$async$state_machine__14150__auto____1 = (function (state_15162){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_15162);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e15204){var ex__14153__auto__ = e15204;
var statearr_15205_16057 = state_15162;
(statearr_15205_16057[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_15162[(4)]))){
var statearr_15206_16058 = state_15162;
(statearr_15206_16058[(1)] = cljs.core.first((state_15162[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16059 = state_15162;
state_15162 = G__16059;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$state_machine__14150__auto__ = function(state_15162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14150__auto____1.call(this,state_15162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14150__auto____0;
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14150__auto____1;
return cljs$core$async$state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15207 = f__14221__auto__();
(statearr_15207[(6)] = c__14220__auto___16028);

return statearr_15207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15209 = arguments.length;
switch (G__15209) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15211 = arguments.length;
switch (G__15211) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15213 = arguments.length;
switch (G__15213) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__14220__auto___16063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_15256){
var state_val_15257 = (state_15256[(1)]);
if((state_val_15257 === (7))){
var state_15256__$1 = state_15256;
var statearr_15258_16064 = state_15256__$1;
(statearr_15258_16064[(2)] = null);

(statearr_15258_16064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (1))){
var state_15256__$1 = state_15256;
var statearr_15259_16065 = state_15256__$1;
(statearr_15259_16065[(2)] = null);

(statearr_15259_16065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (4))){
var inst_15216 = (state_15256[(7)]);
var inst_15217 = (state_15256[(8)]);
var inst_15219 = (inst_15217 < inst_15216);
var state_15256__$1 = state_15256;
if(cljs.core.truth_(inst_15219)){
var statearr_15260_16066 = state_15256__$1;
(statearr_15260_16066[(1)] = (6));

} else {
var statearr_15261_16067 = state_15256__$1;
(statearr_15261_16067[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (15))){
var inst_15242 = (state_15256[(9)]);
var inst_15247 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15242);
var state_15256__$1 = state_15256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15256__$1,(17),out,inst_15247);
} else {
if((state_val_15257 === (13))){
var inst_15242 = (state_15256[(9)]);
var inst_15242__$1 = (state_15256[(2)]);
var inst_15243 = cljs.core.some(cljs.core.nil_QMARK_,inst_15242__$1);
var state_15256__$1 = (function (){var statearr_15262 = state_15256;
(statearr_15262[(9)] = inst_15242__$1);

return statearr_15262;
})();
if(cljs.core.truth_(inst_15243)){
var statearr_15263_16068 = state_15256__$1;
(statearr_15263_16068[(1)] = (14));

} else {
var statearr_15264_16069 = state_15256__$1;
(statearr_15264_16069[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (6))){
var state_15256__$1 = state_15256;
var statearr_15265_16070 = state_15256__$1;
(statearr_15265_16070[(2)] = null);

(statearr_15265_16070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (17))){
var inst_15249 = (state_15256[(2)]);
var state_15256__$1 = (function (){var statearr_15267 = state_15256;
(statearr_15267[(10)] = inst_15249);

return statearr_15267;
})();
var statearr_15268_16071 = state_15256__$1;
(statearr_15268_16071[(2)] = null);

(statearr_15268_16071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (3))){
var inst_15254 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15256__$1,inst_15254);
} else {
if((state_val_15257 === (12))){
var _ = (function (){var statearr_15269 = state_15256;
(statearr_15269[(4)] = cljs.core.rest((state_15256[(4)])));

return statearr_15269;
})();
var state_15256__$1 = state_15256;
var ex15266 = (state_15256__$1[(2)]);
var statearr_15270_16072 = state_15256__$1;
(statearr_15270_16072[(5)] = ex15266);


if((ex15266 instanceof Object)){
var statearr_15271_16073 = state_15256__$1;
(statearr_15271_16073[(1)] = (11));

(statearr_15271_16073[(5)] = null);

} else {
throw ex15266;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (2))){
var inst_15215 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15216 = cnt;
var inst_15217 = (0);
var state_15256__$1 = (function (){var statearr_15272 = state_15256;
(statearr_15272[(7)] = inst_15216);

(statearr_15272[(11)] = inst_15215);

(statearr_15272[(8)] = inst_15217);

return statearr_15272;
})();
var statearr_15273_16074 = state_15256__$1;
(statearr_15273_16074[(2)] = null);

(statearr_15273_16074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (11))){
var inst_15221 = (state_15256[(2)]);
var inst_15222 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15256__$1 = (function (){var statearr_15274 = state_15256;
(statearr_15274[(12)] = inst_15221);

return statearr_15274;
})();
var statearr_15275_16075 = state_15256__$1;
(statearr_15275_16075[(2)] = inst_15222);

(statearr_15275_16075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (9))){
var inst_15217 = (state_15256[(8)]);
var _ = (function (){var statearr_15276 = state_15256;
(statearr_15276[(4)] = cljs.core.cons((12),(state_15256[(4)])));

return statearr_15276;
})();
var inst_15228 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15217) : chs__$1.call(null,inst_15217));
var inst_15229 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15217) : done.call(null,inst_15217));
var inst_15230 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15228,inst_15229);
var ___$1 = (function (){var statearr_15277 = state_15256;
(statearr_15277[(4)] = cljs.core.rest((state_15256[(4)])));

return statearr_15277;
})();
var state_15256__$1 = state_15256;
var statearr_15278_16076 = state_15256__$1;
(statearr_15278_16076[(2)] = inst_15230);

(statearr_15278_16076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (5))){
var inst_15240 = (state_15256[(2)]);
var state_15256__$1 = (function (){var statearr_15279 = state_15256;
(statearr_15279[(13)] = inst_15240);

return statearr_15279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15256__$1,(13),dchan);
} else {
if((state_val_15257 === (14))){
var inst_15245 = cljs.core.async.close_BANG_(out);
var state_15256__$1 = state_15256;
var statearr_15280_16077 = state_15256__$1;
(statearr_15280_16077[(2)] = inst_15245);

(statearr_15280_16077[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (16))){
var inst_15252 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
var statearr_15281_16078 = state_15256__$1;
(statearr_15281_16078[(2)] = inst_15252);

(statearr_15281_16078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (10))){
var inst_15217 = (state_15256[(8)]);
var inst_15233 = (state_15256[(2)]);
var inst_15234 = (inst_15217 + (1));
var inst_15217__$1 = inst_15234;
var state_15256__$1 = (function (){var statearr_15282 = state_15256;
(statearr_15282[(14)] = inst_15233);

(statearr_15282[(8)] = inst_15217__$1);

return statearr_15282;
})();
var statearr_15283_16079 = state_15256__$1;
(statearr_15283_16079[(2)] = null);

(statearr_15283_16079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (8))){
var inst_15238 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
var statearr_15284_16080 = state_15256__$1;
(statearr_15284_16080[(2)] = inst_15238);

(statearr_15284_16080[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14150__auto__ = null;
var cljs$core$async$state_machine__14150__auto____0 = (function (){
var statearr_15285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15285[(0)] = cljs$core$async$state_machine__14150__auto__);

(statearr_15285[(1)] = (1));

return statearr_15285;
});
var cljs$core$async$state_machine__14150__auto____1 = (function (state_15256){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_15256);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e15286){var ex__14153__auto__ = e15286;
var statearr_15287_16081 = state_15256;
(statearr_15287_16081[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_15256[(4)]))){
var statearr_15288_16082 = state_15256;
(statearr_15288_16082[(1)] = cljs.core.first((state_15256[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16083 = state_15256;
state_15256 = G__16083;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$state_machine__14150__auto__ = function(state_15256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14150__auto____1.call(this,state_15256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14150__auto____0;
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14150__auto____1;
return cljs$core$async$state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15289 = f__14221__auto__();
(statearr_15289[(6)] = c__14220__auto___16063);

return statearr_15289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15292 = arguments.length;
switch (G__15292) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14220__auto___16085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_15324){
var state_val_15325 = (state_15324[(1)]);
if((state_val_15325 === (7))){
var inst_15304 = (state_15324[(7)]);
var inst_15303 = (state_15324[(8)]);
var inst_15303__$1 = (state_15324[(2)]);
var inst_15304__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15303__$1,(0),null);
var inst_15305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15303__$1,(1),null);
var inst_15306 = (inst_15304__$1 == null);
var state_15324__$1 = (function (){var statearr_15326 = state_15324;
(statearr_15326[(7)] = inst_15304__$1);

(statearr_15326[(9)] = inst_15305);

(statearr_15326[(8)] = inst_15303__$1);

return statearr_15326;
})();
if(cljs.core.truth_(inst_15306)){
var statearr_15327_16086 = state_15324__$1;
(statearr_15327_16086[(1)] = (8));

} else {
var statearr_15328_16087 = state_15324__$1;
(statearr_15328_16087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15325 === (1))){
var inst_15293 = cljs.core.vec(chs);
var inst_15294 = inst_15293;
var state_15324__$1 = (function (){var statearr_15329 = state_15324;
(statearr_15329[(10)] = inst_15294);

return statearr_15329;
})();
var statearr_15330_16088 = state_15324__$1;
(statearr_15330_16088[(2)] = null);

(statearr_15330_16088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15325 === (4))){
var inst_15294 = (state_15324[(10)]);
var state_15324__$1 = state_15324;
return cljs.core.async.ioc_alts_BANG_(state_15324__$1,(7),inst_15294);
} else {
if((state_val_15325 === (6))){
var inst_15320 = (state_15324[(2)]);
var state_15324__$1 = state_15324;
var statearr_15331_16089 = state_15324__$1;
(statearr_15331_16089[(2)] = inst_15320);

(statearr_15331_16089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15325 === (3))){
var inst_15322 = (state_15324[(2)]);
var state_15324__$1 = state_15324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15324__$1,inst_15322);
} else {
if((state_val_15325 === (2))){
var inst_15294 = (state_15324[(10)]);
var inst_15296 = cljs.core.count(inst_15294);
var inst_15297 = (inst_15296 > (0));
var state_15324__$1 = state_15324;
if(cljs.core.truth_(inst_15297)){
var statearr_15333_16090 = state_15324__$1;
(statearr_15333_16090[(1)] = (4));

} else {
var statearr_15334_16091 = state_15324__$1;
(statearr_15334_16091[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15325 === (11))){
var inst_15294 = (state_15324[(10)]);
var inst_15313 = (state_15324[(2)]);
var tmp15332 = inst_15294;
var inst_15294__$1 = tmp15332;
var state_15324__$1 = (function (){var statearr_15335 = state_15324;
(statearr_15335[(11)] = inst_15313);

(statearr_15335[(10)] = inst_15294__$1);

return statearr_15335;
})();
var statearr_15336_16092 = state_15324__$1;
(statearr_15336_16092[(2)] = null);

(statearr_15336_16092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15325 === (9))){
var inst_15304 = (state_15324[(7)]);
var state_15324__$1 = state_15324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15324__$1,(11),out,inst_15304);
} else {
if((state_val_15325 === (5))){
var inst_15318 = cljs.core.async.close_BANG_(out);
var state_15324__$1 = state_15324;
var statearr_15337_16093 = state_15324__$1;
(statearr_15337_16093[(2)] = inst_15318);

(statearr_15337_16093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15325 === (10))){
var inst_15316 = (state_15324[(2)]);
var state_15324__$1 = state_15324;
var statearr_15338_16094 = state_15324__$1;
(statearr_15338_16094[(2)] = inst_15316);

(statearr_15338_16094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15325 === (8))){
var inst_15304 = (state_15324[(7)]);
var inst_15305 = (state_15324[(9)]);
var inst_15303 = (state_15324[(8)]);
var inst_15294 = (state_15324[(10)]);
var inst_15308 = (function (){var cs = inst_15294;
var vec__15299 = inst_15303;
var v = inst_15304;
var c = inst_15305;
return (function (p1__15290_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15290_SHARP_);
});
})();
var inst_15309 = cljs.core.filterv(inst_15308,inst_15294);
var inst_15294__$1 = inst_15309;
var state_15324__$1 = (function (){var statearr_15339 = state_15324;
(statearr_15339[(10)] = inst_15294__$1);

return statearr_15339;
})();
var statearr_15340_16095 = state_15324__$1;
(statearr_15340_16095[(2)] = null);

(statearr_15340_16095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14150__auto__ = null;
var cljs$core$async$state_machine__14150__auto____0 = (function (){
var statearr_15341 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15341[(0)] = cljs$core$async$state_machine__14150__auto__);

(statearr_15341[(1)] = (1));

return statearr_15341;
});
var cljs$core$async$state_machine__14150__auto____1 = (function (state_15324){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_15324);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e15342){var ex__14153__auto__ = e15342;
var statearr_15343_16096 = state_15324;
(statearr_15343_16096[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_15324[(4)]))){
var statearr_15344_16097 = state_15324;
(statearr_15344_16097[(1)] = cljs.core.first((state_15324[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16098 = state_15324;
state_15324 = G__16098;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$state_machine__14150__auto__ = function(state_15324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14150__auto____1.call(this,state_15324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14150__auto____0;
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14150__auto____1;
return cljs$core$async$state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15345 = f__14221__auto__();
(statearr_15345[(6)] = c__14220__auto___16085);

return statearr_15345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15347 = arguments.length;
switch (G__15347) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14220__auto___16100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_15371){
var state_val_15372 = (state_15371[(1)]);
if((state_val_15372 === (7))){
var inst_15353 = (state_15371[(7)]);
var inst_15353__$1 = (state_15371[(2)]);
var inst_15354 = (inst_15353__$1 == null);
var inst_15355 = cljs.core.not(inst_15354);
var state_15371__$1 = (function (){var statearr_15373 = state_15371;
(statearr_15373[(7)] = inst_15353__$1);

return statearr_15373;
})();
if(inst_15355){
var statearr_15374_16101 = state_15371__$1;
(statearr_15374_16101[(1)] = (8));

} else {
var statearr_15375_16102 = state_15371__$1;
(statearr_15375_16102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (1))){
var inst_15348 = (0);
var state_15371__$1 = (function (){var statearr_15376 = state_15371;
(statearr_15376[(8)] = inst_15348);

return statearr_15376;
})();
var statearr_15377_16103 = state_15371__$1;
(statearr_15377_16103[(2)] = null);

(statearr_15377_16103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (4))){
var state_15371__$1 = state_15371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15371__$1,(7),ch);
} else {
if((state_val_15372 === (6))){
var inst_15366 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
var statearr_15378_16104 = state_15371__$1;
(statearr_15378_16104[(2)] = inst_15366);

(statearr_15378_16104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (3))){
var inst_15368 = (state_15371[(2)]);
var inst_15369 = cljs.core.async.close_BANG_(out);
var state_15371__$1 = (function (){var statearr_15379 = state_15371;
(statearr_15379[(9)] = inst_15368);

return statearr_15379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15371__$1,inst_15369);
} else {
if((state_val_15372 === (2))){
var inst_15348 = (state_15371[(8)]);
var inst_15350 = (inst_15348 < n);
var state_15371__$1 = state_15371;
if(cljs.core.truth_(inst_15350)){
var statearr_15380_16105 = state_15371__$1;
(statearr_15380_16105[(1)] = (4));

} else {
var statearr_15381_16106 = state_15371__$1;
(statearr_15381_16106[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (11))){
var inst_15348 = (state_15371[(8)]);
var inst_15358 = (state_15371[(2)]);
var inst_15359 = (inst_15348 + (1));
var inst_15348__$1 = inst_15359;
var state_15371__$1 = (function (){var statearr_15382 = state_15371;
(statearr_15382[(8)] = inst_15348__$1);

(statearr_15382[(10)] = inst_15358);

return statearr_15382;
})();
var statearr_15383_16107 = state_15371__$1;
(statearr_15383_16107[(2)] = null);

(statearr_15383_16107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (9))){
var state_15371__$1 = state_15371;
var statearr_15384_16108 = state_15371__$1;
(statearr_15384_16108[(2)] = null);

(statearr_15384_16108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (5))){
var state_15371__$1 = state_15371;
var statearr_15385_16109 = state_15371__$1;
(statearr_15385_16109[(2)] = null);

(statearr_15385_16109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (10))){
var inst_15363 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
var statearr_15386_16110 = state_15371__$1;
(statearr_15386_16110[(2)] = inst_15363);

(statearr_15386_16110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (8))){
var inst_15353 = (state_15371[(7)]);
var state_15371__$1 = state_15371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15371__$1,(11),out,inst_15353);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14150__auto__ = null;
var cljs$core$async$state_machine__14150__auto____0 = (function (){
var statearr_15387 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15387[(0)] = cljs$core$async$state_machine__14150__auto__);

(statearr_15387[(1)] = (1));

return statearr_15387;
});
var cljs$core$async$state_machine__14150__auto____1 = (function (state_15371){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_15371);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e15388){var ex__14153__auto__ = e15388;
var statearr_15389_16111 = state_15371;
(statearr_15389_16111[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_15371[(4)]))){
var statearr_15390_16112 = state_15371;
(statearr_15390_16112[(1)] = cljs.core.first((state_15371[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16113 = state_15371;
state_15371 = G__16113;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$state_machine__14150__auto__ = function(state_15371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14150__auto____1.call(this,state_15371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14150__auto____0;
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14150__auto____1;
return cljs$core$async$state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15391 = f__14221__auto__();
(statearr_15391[(6)] = c__14220__auto___16100);

return statearr_15391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15393 = (function (f,ch,meta15394){
this.f = f;
this.ch = ch;
this.meta15394 = meta15394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15395,meta15394__$1){
var self__ = this;
var _15395__$1 = this;
return (new cljs.core.async.t_cljs$core$async15393(self__.f,self__.ch,meta15394__$1));
}));

(cljs.core.async.t_cljs$core$async15393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15395){
var self__ = this;
var _15395__$1 = this;
return self__.meta15394;
}));

(cljs.core.async.t_cljs$core$async15393.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15393.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15393.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15396 = (function (f,ch,meta15394,_,fn1,meta15397){
this.f = f;
this.ch = ch;
this.meta15394 = meta15394;
this._ = _;
this.fn1 = fn1;
this.meta15397 = meta15397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15398,meta15397__$1){
var self__ = this;
var _15398__$1 = this;
return (new cljs.core.async.t_cljs$core$async15396(self__.f,self__.ch,self__.meta15394,self__._,self__.fn1,meta15397__$1));
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15398){
var self__ = this;
var _15398__$1 = this;
return self__.meta15397;
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15392_SHARP_){
var G__15399 = (((p1__15392_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15392_SHARP_) : self__.f.call(null,p1__15392_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15399) : f1.call(null,G__15399));
});
}));

(cljs.core.async.t_cljs$core$async15396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15394","meta15394",681601682,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15393","cljs.core.async/t_cljs$core$async15393",-66968411,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15397","meta15397",2040931615,null)], null);
}));

(cljs.core.async.t_cljs$core$async15396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15396");

(cljs.core.async.t_cljs$core$async15396.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async15396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15396.
 */
cljs.core.async.__GT_t_cljs$core$async15396 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15396(f__$1,ch__$1,meta15394__$1,___$2,fn1__$1,meta15397){
return (new cljs.core.async.t_cljs$core$async15396(f__$1,ch__$1,meta15394__$1,___$2,fn1__$1,meta15397));
});

}

return (new cljs.core.async.t_cljs$core$async15396(self__.f,self__.ch,self__.meta15394,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15400 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15400) : self__.f.call(null,G__15400));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15393.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15394","meta15394",681601682,null)], null);
}));

(cljs.core.async.t_cljs$core$async15393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15393");

(cljs.core.async.t_cljs$core$async15393.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async15393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15393.
 */
cljs.core.async.__GT_t_cljs$core$async15393 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15393(f__$1,ch__$1,meta15394){
return (new cljs.core.async.t_cljs$core$async15393(f__$1,ch__$1,meta15394));
});

}

return (new cljs.core.async.t_cljs$core$async15393(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15401 = (function (f,ch,meta15402){
this.f = f;
this.ch = ch;
this.meta15402 = meta15402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15403,meta15402__$1){
var self__ = this;
var _15403__$1 = this;
return (new cljs.core.async.t_cljs$core$async15401(self__.f,self__.ch,meta15402__$1));
}));

(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15403){
var self__ = this;
var _15403__$1 = this;
return self__.meta15402;
}));

(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15402","meta15402",635172750,null)], null);
}));

(cljs.core.async.t_cljs$core$async15401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15401");

(cljs.core.async.t_cljs$core$async15401.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async15401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15401.
 */
cljs.core.async.__GT_t_cljs$core$async15401 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15401(f__$1,ch__$1,meta15402){
return (new cljs.core.async.t_cljs$core$async15401(f__$1,ch__$1,meta15402));
});

}

return (new cljs.core.async.t_cljs$core$async15401(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15404 = (function (p,ch,meta15405){
this.p = p;
this.ch = ch;
this.meta15405 = meta15405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15406,meta15405__$1){
var self__ = this;
var _15406__$1 = this;
return (new cljs.core.async.t_cljs$core$async15404(self__.p,self__.ch,meta15405__$1));
}));

(cljs.core.async.t_cljs$core$async15404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15406){
var self__ = this;
var _15406__$1 = this;
return self__.meta15405;
}));

(cljs.core.async.t_cljs$core$async15404.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15404.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15404.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15405","meta15405",1020322081,null)], null);
}));

(cljs.core.async.t_cljs$core$async15404.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15404");

(cljs.core.async.t_cljs$core$async15404.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async15404");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15404.
 */
cljs.core.async.__GT_t_cljs$core$async15404 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15404(p__$1,ch__$1,meta15405){
return (new cljs.core.async.t_cljs$core$async15404(p__$1,ch__$1,meta15405));
});

}

return (new cljs.core.async.t_cljs$core$async15404(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15408 = arguments.length;
switch (G__15408) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14220__auto___16115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_15429){
var state_val_15430 = (state_15429[(1)]);
if((state_val_15430 === (7))){
var inst_15425 = (state_15429[(2)]);
var state_15429__$1 = state_15429;
var statearr_15431_16116 = state_15429__$1;
(statearr_15431_16116[(2)] = inst_15425);

(statearr_15431_16116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15430 === (1))){
var state_15429__$1 = state_15429;
var statearr_15432_16117 = state_15429__$1;
(statearr_15432_16117[(2)] = null);

(statearr_15432_16117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15430 === (4))){
var inst_15411 = (state_15429[(7)]);
var inst_15411__$1 = (state_15429[(2)]);
var inst_15412 = (inst_15411__$1 == null);
var state_15429__$1 = (function (){var statearr_15433 = state_15429;
(statearr_15433[(7)] = inst_15411__$1);

return statearr_15433;
})();
if(cljs.core.truth_(inst_15412)){
var statearr_15434_16118 = state_15429__$1;
(statearr_15434_16118[(1)] = (5));

} else {
var statearr_15435_16119 = state_15429__$1;
(statearr_15435_16119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15430 === (6))){
var inst_15411 = (state_15429[(7)]);
var inst_15416 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15411) : p.call(null,inst_15411));
var state_15429__$1 = state_15429;
if(cljs.core.truth_(inst_15416)){
var statearr_15436_16120 = state_15429__$1;
(statearr_15436_16120[(1)] = (8));

} else {
var statearr_15437_16121 = state_15429__$1;
(statearr_15437_16121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15430 === (3))){
var inst_15427 = (state_15429[(2)]);
var state_15429__$1 = state_15429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15429__$1,inst_15427);
} else {
if((state_val_15430 === (2))){
var state_15429__$1 = state_15429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15429__$1,(4),ch);
} else {
if((state_val_15430 === (11))){
var inst_15419 = (state_15429[(2)]);
var state_15429__$1 = state_15429;
var statearr_15438_16122 = state_15429__$1;
(statearr_15438_16122[(2)] = inst_15419);

(statearr_15438_16122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15430 === (9))){
var state_15429__$1 = state_15429;
var statearr_15439_16123 = state_15429__$1;
(statearr_15439_16123[(2)] = null);

(statearr_15439_16123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15430 === (5))){
var inst_15414 = cljs.core.async.close_BANG_(out);
var state_15429__$1 = state_15429;
var statearr_15440_16124 = state_15429__$1;
(statearr_15440_16124[(2)] = inst_15414);

(statearr_15440_16124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15430 === (10))){
var inst_15422 = (state_15429[(2)]);
var state_15429__$1 = (function (){var statearr_15441 = state_15429;
(statearr_15441[(8)] = inst_15422);

return statearr_15441;
})();
var statearr_15442_16125 = state_15429__$1;
(statearr_15442_16125[(2)] = null);

(statearr_15442_16125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15430 === (8))){
var inst_15411 = (state_15429[(7)]);
var state_15429__$1 = state_15429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15429__$1,(11),out,inst_15411);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14150__auto__ = null;
var cljs$core$async$state_machine__14150__auto____0 = (function (){
var statearr_15443 = [null,null,null,null,null,null,null,null,null];
(statearr_15443[(0)] = cljs$core$async$state_machine__14150__auto__);

(statearr_15443[(1)] = (1));

return statearr_15443;
});
var cljs$core$async$state_machine__14150__auto____1 = (function (state_15429){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_15429);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e15444){var ex__14153__auto__ = e15444;
var statearr_15445_16126 = state_15429;
(statearr_15445_16126[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_15429[(4)]))){
var statearr_15446_16127 = state_15429;
(statearr_15446_16127[(1)] = cljs.core.first((state_15429[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16128 = state_15429;
state_15429 = G__16128;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$state_machine__14150__auto__ = function(state_15429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14150__auto____1.call(this,state_15429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14150__auto____0;
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14150__auto____1;
return cljs$core$async$state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15447 = f__14221__auto__();
(statearr_15447[(6)] = c__14220__auto___16115);

return statearr_15447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15449 = arguments.length;
switch (G__15449) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14220__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_15511){
var state_val_15512 = (state_15511[(1)]);
if((state_val_15512 === (7))){
var inst_15507 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
var statearr_15513_16130 = state_15511__$1;
(statearr_15513_16130[(2)] = inst_15507);

(statearr_15513_16130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (20))){
var inst_15477 = (state_15511[(7)]);
var inst_15488 = (state_15511[(2)]);
var inst_15489 = cljs.core.next(inst_15477);
var inst_15463 = inst_15489;
var inst_15464 = null;
var inst_15465 = (0);
var inst_15466 = (0);
var state_15511__$1 = (function (){var statearr_15514 = state_15511;
(statearr_15514[(8)] = inst_15466);

(statearr_15514[(9)] = inst_15465);

(statearr_15514[(10)] = inst_15488);

(statearr_15514[(11)] = inst_15464);

(statearr_15514[(12)] = inst_15463);

return statearr_15514;
})();
var statearr_15515_16131 = state_15511__$1;
(statearr_15515_16131[(2)] = null);

(statearr_15515_16131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (1))){
var state_15511__$1 = state_15511;
var statearr_15516_16132 = state_15511__$1;
(statearr_15516_16132[(2)] = null);

(statearr_15516_16132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (4))){
var inst_15452 = (state_15511[(13)]);
var inst_15452__$1 = (state_15511[(2)]);
var inst_15453 = (inst_15452__$1 == null);
var state_15511__$1 = (function (){var statearr_15517 = state_15511;
(statearr_15517[(13)] = inst_15452__$1);

return statearr_15517;
})();
if(cljs.core.truth_(inst_15453)){
var statearr_15518_16133 = state_15511__$1;
(statearr_15518_16133[(1)] = (5));

} else {
var statearr_15519_16134 = state_15511__$1;
(statearr_15519_16134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (15))){
var state_15511__$1 = state_15511;
var statearr_15523_16135 = state_15511__$1;
(statearr_15523_16135[(2)] = null);

(statearr_15523_16135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (21))){
var state_15511__$1 = state_15511;
var statearr_15524_16136 = state_15511__$1;
(statearr_15524_16136[(2)] = null);

(statearr_15524_16136[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (13))){
var inst_15466 = (state_15511[(8)]);
var inst_15465 = (state_15511[(9)]);
var inst_15464 = (state_15511[(11)]);
var inst_15463 = (state_15511[(12)]);
var inst_15473 = (state_15511[(2)]);
var inst_15474 = (inst_15466 + (1));
var tmp15520 = inst_15465;
var tmp15521 = inst_15464;
var tmp15522 = inst_15463;
var inst_15463__$1 = tmp15522;
var inst_15464__$1 = tmp15521;
var inst_15465__$1 = tmp15520;
var inst_15466__$1 = inst_15474;
var state_15511__$1 = (function (){var statearr_15525 = state_15511;
(statearr_15525[(8)] = inst_15466__$1);

(statearr_15525[(14)] = inst_15473);

(statearr_15525[(9)] = inst_15465__$1);

(statearr_15525[(11)] = inst_15464__$1);

(statearr_15525[(12)] = inst_15463__$1);

return statearr_15525;
})();
var statearr_15526_16137 = state_15511__$1;
(statearr_15526_16137[(2)] = null);

(statearr_15526_16137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (22))){
var state_15511__$1 = state_15511;
var statearr_15527_16138 = state_15511__$1;
(statearr_15527_16138[(2)] = null);

(statearr_15527_16138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (6))){
var inst_15452 = (state_15511[(13)]);
var inst_15461 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15452) : f.call(null,inst_15452));
var inst_15462 = cljs.core.seq(inst_15461);
var inst_15463 = inst_15462;
var inst_15464 = null;
var inst_15465 = (0);
var inst_15466 = (0);
var state_15511__$1 = (function (){var statearr_15528 = state_15511;
(statearr_15528[(8)] = inst_15466);

(statearr_15528[(9)] = inst_15465);

(statearr_15528[(11)] = inst_15464);

(statearr_15528[(12)] = inst_15463);

return statearr_15528;
})();
var statearr_15529_16139 = state_15511__$1;
(statearr_15529_16139[(2)] = null);

(statearr_15529_16139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (17))){
var inst_15477 = (state_15511[(7)]);
var inst_15481 = cljs.core.chunk_first(inst_15477);
var inst_15482 = cljs.core.chunk_rest(inst_15477);
var inst_15483 = cljs.core.count(inst_15481);
var inst_15463 = inst_15482;
var inst_15464 = inst_15481;
var inst_15465 = inst_15483;
var inst_15466 = (0);
var state_15511__$1 = (function (){var statearr_15530 = state_15511;
(statearr_15530[(8)] = inst_15466);

(statearr_15530[(9)] = inst_15465);

(statearr_15530[(11)] = inst_15464);

(statearr_15530[(12)] = inst_15463);

return statearr_15530;
})();
var statearr_15531_16140 = state_15511__$1;
(statearr_15531_16140[(2)] = null);

(statearr_15531_16140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (3))){
var inst_15509 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15511__$1,inst_15509);
} else {
if((state_val_15512 === (12))){
var inst_15497 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
var statearr_15532_16141 = state_15511__$1;
(statearr_15532_16141[(2)] = inst_15497);

(statearr_15532_16141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (2))){
var state_15511__$1 = state_15511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15511__$1,(4),in$);
} else {
if((state_val_15512 === (23))){
var inst_15505 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
var statearr_15533_16142 = state_15511__$1;
(statearr_15533_16142[(2)] = inst_15505);

(statearr_15533_16142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (19))){
var inst_15492 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
var statearr_15534_16143 = state_15511__$1;
(statearr_15534_16143[(2)] = inst_15492);

(statearr_15534_16143[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (11))){
var inst_15477 = (state_15511[(7)]);
var inst_15463 = (state_15511[(12)]);
var inst_15477__$1 = cljs.core.seq(inst_15463);
var state_15511__$1 = (function (){var statearr_15535 = state_15511;
(statearr_15535[(7)] = inst_15477__$1);

return statearr_15535;
})();
if(inst_15477__$1){
var statearr_15536_16144 = state_15511__$1;
(statearr_15536_16144[(1)] = (14));

} else {
var statearr_15537_16145 = state_15511__$1;
(statearr_15537_16145[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (9))){
var inst_15499 = (state_15511[(2)]);
var inst_15500 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15511__$1 = (function (){var statearr_15538 = state_15511;
(statearr_15538[(15)] = inst_15499);

return statearr_15538;
})();
if(cljs.core.truth_(inst_15500)){
var statearr_15539_16146 = state_15511__$1;
(statearr_15539_16146[(1)] = (21));

} else {
var statearr_15540_16147 = state_15511__$1;
(statearr_15540_16147[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (5))){
var inst_15455 = cljs.core.async.close_BANG_(out);
var state_15511__$1 = state_15511;
var statearr_15541_16148 = state_15511__$1;
(statearr_15541_16148[(2)] = inst_15455);

(statearr_15541_16148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (14))){
var inst_15477 = (state_15511[(7)]);
var inst_15479 = cljs.core.chunked_seq_QMARK_(inst_15477);
var state_15511__$1 = state_15511;
if(inst_15479){
var statearr_15542_16149 = state_15511__$1;
(statearr_15542_16149[(1)] = (17));

} else {
var statearr_15543_16150 = state_15511__$1;
(statearr_15543_16150[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (16))){
var inst_15495 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
var statearr_15544_16151 = state_15511__$1;
(statearr_15544_16151[(2)] = inst_15495);

(statearr_15544_16151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (10))){
var inst_15466 = (state_15511[(8)]);
var inst_15464 = (state_15511[(11)]);
var inst_15471 = cljs.core._nth(inst_15464,inst_15466);
var state_15511__$1 = state_15511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15511__$1,(13),out,inst_15471);
} else {
if((state_val_15512 === (18))){
var inst_15477 = (state_15511[(7)]);
var inst_15486 = cljs.core.first(inst_15477);
var state_15511__$1 = state_15511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15511__$1,(20),out,inst_15486);
} else {
if((state_val_15512 === (8))){
var inst_15466 = (state_15511[(8)]);
var inst_15465 = (state_15511[(9)]);
var inst_15468 = (inst_15466 < inst_15465);
var inst_15469 = inst_15468;
var state_15511__$1 = state_15511;
if(cljs.core.truth_(inst_15469)){
var statearr_15545_16152 = state_15511__$1;
(statearr_15545_16152[(1)] = (10));

} else {
var statearr_15546_16153 = state_15511__$1;
(statearr_15546_16153[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14150__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14150__auto____0 = (function (){
var statearr_15547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15547[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14150__auto__);

(statearr_15547[(1)] = (1));

return statearr_15547;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14150__auto____1 = (function (state_15511){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_15511);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e15548){var ex__14153__auto__ = e15548;
var statearr_15549_16154 = state_15511;
(statearr_15549_16154[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_15511[(4)]))){
var statearr_15550_16155 = state_15511;
(statearr_15550_16155[(1)] = cljs.core.first((state_15511[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16156 = state_15511;
state_15511 = G__16156;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14150__auto__ = function(state_15511){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14150__auto____1.call(this,state_15511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14150__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14150__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15551 = f__14221__auto__();
(statearr_15551[(6)] = c__14220__auto__);

return statearr_15551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));

return c__14220__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15553 = arguments.length;
switch (G__15553) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15555 = arguments.length;
switch (G__15555) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15557 = arguments.length;
switch (G__15557) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14220__auto___16160 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_15581){
var state_val_15582 = (state_15581[(1)]);
if((state_val_15582 === (7))){
var inst_15576 = (state_15581[(2)]);
var state_15581__$1 = state_15581;
var statearr_15583_16161 = state_15581__$1;
(statearr_15583_16161[(2)] = inst_15576);

(statearr_15583_16161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (1))){
var inst_15558 = null;
var state_15581__$1 = (function (){var statearr_15584 = state_15581;
(statearr_15584[(7)] = inst_15558);

return statearr_15584;
})();
var statearr_15585_16162 = state_15581__$1;
(statearr_15585_16162[(2)] = null);

(statearr_15585_16162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (4))){
var inst_15561 = (state_15581[(8)]);
var inst_15561__$1 = (state_15581[(2)]);
var inst_15562 = (inst_15561__$1 == null);
var inst_15563 = cljs.core.not(inst_15562);
var state_15581__$1 = (function (){var statearr_15586 = state_15581;
(statearr_15586[(8)] = inst_15561__$1);

return statearr_15586;
})();
if(inst_15563){
var statearr_15587_16163 = state_15581__$1;
(statearr_15587_16163[(1)] = (5));

} else {
var statearr_15588_16164 = state_15581__$1;
(statearr_15588_16164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (6))){
var state_15581__$1 = state_15581;
var statearr_15589_16165 = state_15581__$1;
(statearr_15589_16165[(2)] = null);

(statearr_15589_16165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (3))){
var inst_15578 = (state_15581[(2)]);
var inst_15579 = cljs.core.async.close_BANG_(out);
var state_15581__$1 = (function (){var statearr_15590 = state_15581;
(statearr_15590[(9)] = inst_15578);

return statearr_15590;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15581__$1,inst_15579);
} else {
if((state_val_15582 === (2))){
var state_15581__$1 = state_15581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15581__$1,(4),ch);
} else {
if((state_val_15582 === (11))){
var inst_15561 = (state_15581[(8)]);
var inst_15570 = (state_15581[(2)]);
var inst_15558 = inst_15561;
var state_15581__$1 = (function (){var statearr_15591 = state_15581;
(statearr_15591[(7)] = inst_15558);

(statearr_15591[(10)] = inst_15570);

return statearr_15591;
})();
var statearr_15592_16166 = state_15581__$1;
(statearr_15592_16166[(2)] = null);

(statearr_15592_16166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (9))){
var inst_15561 = (state_15581[(8)]);
var state_15581__$1 = state_15581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15581__$1,(11),out,inst_15561);
} else {
if((state_val_15582 === (5))){
var inst_15558 = (state_15581[(7)]);
var inst_15561 = (state_15581[(8)]);
var inst_15565 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15561,inst_15558);
var state_15581__$1 = state_15581;
if(inst_15565){
var statearr_15594_16167 = state_15581__$1;
(statearr_15594_16167[(1)] = (8));

} else {
var statearr_15595_16168 = state_15581__$1;
(statearr_15595_16168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (10))){
var inst_15573 = (state_15581[(2)]);
var state_15581__$1 = state_15581;
var statearr_15596_16169 = state_15581__$1;
(statearr_15596_16169[(2)] = inst_15573);

(statearr_15596_16169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (8))){
var inst_15558 = (state_15581[(7)]);
var tmp15593 = inst_15558;
var inst_15558__$1 = tmp15593;
var state_15581__$1 = (function (){var statearr_15597 = state_15581;
(statearr_15597[(7)] = inst_15558__$1);

return statearr_15597;
})();
var statearr_15598_16170 = state_15581__$1;
(statearr_15598_16170[(2)] = null);

(statearr_15598_16170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14150__auto__ = null;
var cljs$core$async$state_machine__14150__auto____0 = (function (){
var statearr_15599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15599[(0)] = cljs$core$async$state_machine__14150__auto__);

(statearr_15599[(1)] = (1));

return statearr_15599;
});
var cljs$core$async$state_machine__14150__auto____1 = (function (state_15581){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_15581);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e15600){var ex__14153__auto__ = e15600;
var statearr_15601_16171 = state_15581;
(statearr_15601_16171[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_15581[(4)]))){
var statearr_15602_16172 = state_15581;
(statearr_15602_16172[(1)] = cljs.core.first((state_15581[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16173 = state_15581;
state_15581 = G__16173;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$state_machine__14150__auto__ = function(state_15581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14150__auto____1.call(this,state_15581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14150__auto____0;
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14150__auto____1;
return cljs$core$async$state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15603 = f__14221__auto__();
(statearr_15603[(6)] = c__14220__auto___16160);

return statearr_15603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15605 = arguments.length;
switch (G__15605) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14220__auto___16175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_15643){
var state_val_15644 = (state_15643[(1)]);
if((state_val_15644 === (7))){
var inst_15639 = (state_15643[(2)]);
var state_15643__$1 = state_15643;
var statearr_15645_16176 = state_15643__$1;
(statearr_15645_16176[(2)] = inst_15639);

(statearr_15645_16176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15644 === (1))){
var inst_15606 = (new Array(n));
var inst_15607 = inst_15606;
var inst_15608 = (0);
var state_15643__$1 = (function (){var statearr_15646 = state_15643;
(statearr_15646[(7)] = inst_15607);

(statearr_15646[(8)] = inst_15608);

return statearr_15646;
})();
var statearr_15647_16177 = state_15643__$1;
(statearr_15647_16177[(2)] = null);

(statearr_15647_16177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15644 === (4))){
var inst_15611 = (state_15643[(9)]);
var inst_15611__$1 = (state_15643[(2)]);
var inst_15612 = (inst_15611__$1 == null);
var inst_15613 = cljs.core.not(inst_15612);
var state_15643__$1 = (function (){var statearr_15648 = state_15643;
(statearr_15648[(9)] = inst_15611__$1);

return statearr_15648;
})();
if(inst_15613){
var statearr_15649_16178 = state_15643__$1;
(statearr_15649_16178[(1)] = (5));

} else {
var statearr_15650_16179 = state_15643__$1;
(statearr_15650_16179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15644 === (15))){
var inst_15633 = (state_15643[(2)]);
var state_15643__$1 = state_15643;
var statearr_15651_16180 = state_15643__$1;
(statearr_15651_16180[(2)] = inst_15633);

(statearr_15651_16180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15644 === (13))){
var state_15643__$1 = state_15643;
var statearr_15652_16181 = state_15643__$1;
(statearr_15652_16181[(2)] = null);

(statearr_15652_16181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15644 === (6))){
var inst_15608 = (state_15643[(8)]);
var inst_15629 = (inst_15608 > (0));
var state_15643__$1 = state_15643;
if(cljs.core.truth_(inst_15629)){
var statearr_15653_16182 = state_15643__$1;
(statearr_15653_16182[(1)] = (12));

} else {
var statearr_15654_16183 = state_15643__$1;
(statearr_15654_16183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15644 === (3))){
var inst_15641 = (state_15643[(2)]);
var state_15643__$1 = state_15643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15643__$1,inst_15641);
} else {
if((state_val_15644 === (12))){
var inst_15607 = (state_15643[(7)]);
var inst_15631 = cljs.core.vec(inst_15607);
var state_15643__$1 = state_15643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15643__$1,(15),out,inst_15631);
} else {
if((state_val_15644 === (2))){
var state_15643__$1 = state_15643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15643__$1,(4),ch);
} else {
if((state_val_15644 === (11))){
var inst_15623 = (state_15643[(2)]);
var inst_15624 = (new Array(n));
var inst_15607 = inst_15624;
var inst_15608 = (0);
var state_15643__$1 = (function (){var statearr_15655 = state_15643;
(statearr_15655[(10)] = inst_15623);

(statearr_15655[(7)] = inst_15607);

(statearr_15655[(8)] = inst_15608);

return statearr_15655;
})();
var statearr_15656_16184 = state_15643__$1;
(statearr_15656_16184[(2)] = null);

(statearr_15656_16184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15644 === (9))){
var inst_15607 = (state_15643[(7)]);
var inst_15621 = cljs.core.vec(inst_15607);
var state_15643__$1 = state_15643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15643__$1,(11),out,inst_15621);
} else {
if((state_val_15644 === (5))){
var inst_15616 = (state_15643[(11)]);
var inst_15607 = (state_15643[(7)]);
var inst_15608 = (state_15643[(8)]);
var inst_15611 = (state_15643[(9)]);
var inst_15615 = (inst_15607[inst_15608] = inst_15611);
var inst_15616__$1 = (inst_15608 + (1));
var inst_15617 = (inst_15616__$1 < n);
var state_15643__$1 = (function (){var statearr_15657 = state_15643;
(statearr_15657[(11)] = inst_15616__$1);

(statearr_15657[(12)] = inst_15615);

return statearr_15657;
})();
if(cljs.core.truth_(inst_15617)){
var statearr_15658_16185 = state_15643__$1;
(statearr_15658_16185[(1)] = (8));

} else {
var statearr_15659_16186 = state_15643__$1;
(statearr_15659_16186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15644 === (14))){
var inst_15636 = (state_15643[(2)]);
var inst_15637 = cljs.core.async.close_BANG_(out);
var state_15643__$1 = (function (){var statearr_15661 = state_15643;
(statearr_15661[(13)] = inst_15636);

return statearr_15661;
})();
var statearr_15662_16187 = state_15643__$1;
(statearr_15662_16187[(2)] = inst_15637);

(statearr_15662_16187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15644 === (10))){
var inst_15627 = (state_15643[(2)]);
var state_15643__$1 = state_15643;
var statearr_15663_16188 = state_15643__$1;
(statearr_15663_16188[(2)] = inst_15627);

(statearr_15663_16188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15644 === (8))){
var inst_15616 = (state_15643[(11)]);
var inst_15607 = (state_15643[(7)]);
var tmp15660 = inst_15607;
var inst_15607__$1 = tmp15660;
var inst_15608 = inst_15616;
var state_15643__$1 = (function (){var statearr_15664 = state_15643;
(statearr_15664[(7)] = inst_15607__$1);

(statearr_15664[(8)] = inst_15608);

return statearr_15664;
})();
var statearr_15665_16189 = state_15643__$1;
(statearr_15665_16189[(2)] = null);

(statearr_15665_16189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14150__auto__ = null;
var cljs$core$async$state_machine__14150__auto____0 = (function (){
var statearr_15666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15666[(0)] = cljs$core$async$state_machine__14150__auto__);

(statearr_15666[(1)] = (1));

return statearr_15666;
});
var cljs$core$async$state_machine__14150__auto____1 = (function (state_15643){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_15643);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e15667){var ex__14153__auto__ = e15667;
var statearr_15668_16190 = state_15643;
(statearr_15668_16190[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_15643[(4)]))){
var statearr_15669_16191 = state_15643;
(statearr_15669_16191[(1)] = cljs.core.first((state_15643[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16192 = state_15643;
state_15643 = G__16192;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$state_machine__14150__auto__ = function(state_15643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14150__auto____1.call(this,state_15643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14150__auto____0;
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14150__auto____1;
return cljs$core$async$state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15670 = f__14221__auto__();
(statearr_15670[(6)] = c__14220__auto___16175);

return statearr_15670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15672 = arguments.length;
switch (G__15672) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14220__auto___16194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__14149__auto__ = (function (state_15714){
var state_val_15715 = (state_15714[(1)]);
if((state_val_15715 === (7))){
var inst_15710 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15716_16195 = state_15714__$1;
(statearr_15716_16195[(2)] = inst_15710);

(statearr_15716_16195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (1))){
var inst_15673 = [];
var inst_15674 = inst_15673;
var inst_15675 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15714__$1 = (function (){var statearr_15717 = state_15714;
(statearr_15717[(7)] = inst_15675);

(statearr_15717[(8)] = inst_15674);

return statearr_15717;
})();
var statearr_15718_16196 = state_15714__$1;
(statearr_15718_16196[(2)] = null);

(statearr_15718_16196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (4))){
var inst_15678 = (state_15714[(9)]);
var inst_15678__$1 = (state_15714[(2)]);
var inst_15679 = (inst_15678__$1 == null);
var inst_15680 = cljs.core.not(inst_15679);
var state_15714__$1 = (function (){var statearr_15719 = state_15714;
(statearr_15719[(9)] = inst_15678__$1);

return statearr_15719;
})();
if(inst_15680){
var statearr_15720_16197 = state_15714__$1;
(statearr_15720_16197[(1)] = (5));

} else {
var statearr_15721_16198 = state_15714__$1;
(statearr_15721_16198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (15))){
var inst_15704 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15722_16199 = state_15714__$1;
(statearr_15722_16199[(2)] = inst_15704);

(statearr_15722_16199[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (13))){
var state_15714__$1 = state_15714;
var statearr_15723_16200 = state_15714__$1;
(statearr_15723_16200[(2)] = null);

(statearr_15723_16200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (6))){
var inst_15674 = (state_15714[(8)]);
var inst_15699 = inst_15674.length;
var inst_15700 = (inst_15699 > (0));
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15700)){
var statearr_15724_16201 = state_15714__$1;
(statearr_15724_16201[(1)] = (12));

} else {
var statearr_15725_16202 = state_15714__$1;
(statearr_15725_16202[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (3))){
var inst_15712 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15714__$1,inst_15712);
} else {
if((state_val_15715 === (12))){
var inst_15674 = (state_15714[(8)]);
var inst_15702 = cljs.core.vec(inst_15674);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15714__$1,(15),out,inst_15702);
} else {
if((state_val_15715 === (2))){
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15714__$1,(4),ch);
} else {
if((state_val_15715 === (11))){
var inst_15678 = (state_15714[(9)]);
var inst_15682 = (state_15714[(10)]);
var inst_15692 = (state_15714[(2)]);
var inst_15693 = [];
var inst_15694 = inst_15693.push(inst_15678);
var inst_15674 = inst_15693;
var inst_15675 = inst_15682;
var state_15714__$1 = (function (){var statearr_15726 = state_15714;
(statearr_15726[(11)] = inst_15694);

(statearr_15726[(7)] = inst_15675);

(statearr_15726[(12)] = inst_15692);

(statearr_15726[(8)] = inst_15674);

return statearr_15726;
})();
var statearr_15727_16203 = state_15714__$1;
(statearr_15727_16203[(2)] = null);

(statearr_15727_16203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (9))){
var inst_15674 = (state_15714[(8)]);
var inst_15690 = cljs.core.vec(inst_15674);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15714__$1,(11),out,inst_15690);
} else {
if((state_val_15715 === (5))){
var inst_15678 = (state_15714[(9)]);
var inst_15675 = (state_15714[(7)]);
var inst_15682 = (state_15714[(10)]);
var inst_15682__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15678) : f.call(null,inst_15678));
var inst_15683 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15682__$1,inst_15675);
var inst_15684 = cljs.core.keyword_identical_QMARK_(inst_15675,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15685 = ((inst_15683) || (inst_15684));
var state_15714__$1 = (function (){var statearr_15728 = state_15714;
(statearr_15728[(10)] = inst_15682__$1);

return statearr_15728;
})();
if(cljs.core.truth_(inst_15685)){
var statearr_15729_16204 = state_15714__$1;
(statearr_15729_16204[(1)] = (8));

} else {
var statearr_15730_16205 = state_15714__$1;
(statearr_15730_16205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (14))){
var inst_15707 = (state_15714[(2)]);
var inst_15708 = cljs.core.async.close_BANG_(out);
var state_15714__$1 = (function (){var statearr_15732 = state_15714;
(statearr_15732[(13)] = inst_15707);

return statearr_15732;
})();
var statearr_15733_16206 = state_15714__$1;
(statearr_15733_16206[(2)] = inst_15708);

(statearr_15733_16206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (10))){
var inst_15697 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15734_16207 = state_15714__$1;
(statearr_15734_16207[(2)] = inst_15697);

(statearr_15734_16207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (8))){
var inst_15678 = (state_15714[(9)]);
var inst_15674 = (state_15714[(8)]);
var inst_15682 = (state_15714[(10)]);
var inst_15687 = inst_15674.push(inst_15678);
var tmp15731 = inst_15674;
var inst_15674__$1 = tmp15731;
var inst_15675 = inst_15682;
var state_15714__$1 = (function (){var statearr_15735 = state_15714;
(statearr_15735[(7)] = inst_15675);

(statearr_15735[(8)] = inst_15674__$1);

(statearr_15735[(14)] = inst_15687);

return statearr_15735;
})();
var statearr_15736_16208 = state_15714__$1;
(statearr_15736_16208[(2)] = null);

(statearr_15736_16208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14150__auto__ = null;
var cljs$core$async$state_machine__14150__auto____0 = (function (){
var statearr_15737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15737[(0)] = cljs$core$async$state_machine__14150__auto__);

(statearr_15737[(1)] = (1));

return statearr_15737;
});
var cljs$core$async$state_machine__14150__auto____1 = (function (state_15714){
while(true){
var ret_value__14151__auto__ = (function (){try{while(true){
var result__14152__auto__ = switch__14149__auto__(state_15714);
if(cljs.core.keyword_identical_QMARK_(result__14152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14152__auto__;
}
break;
}
}catch (e15738){var ex__14153__auto__ = e15738;
var statearr_15739_16209 = state_15714;
(statearr_15739_16209[(2)] = ex__14153__auto__);


if(cljs.core.seq((state_15714[(4)]))){
var statearr_15740_16210 = state_15714;
(statearr_15740_16210[(1)] = cljs.core.first((state_15714[(4)])));

} else {
throw ex__14153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16211 = state_15714;
state_15714 = G__16211;
continue;
} else {
return ret_value__14151__auto__;
}
break;
}
});
cljs$core$async$state_machine__14150__auto__ = function(state_15714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14150__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14150__auto____1.call(this,state_15714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14150__auto____0;
cljs$core$async$state_machine__14150__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14150__auto____1;
return cljs$core$async$state_machine__14150__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15741 = f__14221__auto__();
(statearr_15741[(6)] = c__14220__auto___16194);

return statearr_15741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
