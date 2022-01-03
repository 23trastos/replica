// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16098 = arguments.length;
switch (G__16098) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16099 = (function (f,blockable,meta16100){
this.f = f;
this.blockable = blockable;
this.meta16100 = meta16100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16101,meta16100__$1){
var self__ = this;
var _16101__$1 = this;
return (new cljs.core.async.t_cljs$core$async16099(self__.f,self__.blockable,meta16100__$1));
});

cljs.core.async.t_cljs$core$async16099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16101){
var self__ = this;
var _16101__$1 = this;
return self__.meta16100;
});

cljs.core.async.t_cljs$core$async16099.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16099.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16100","meta16100",-94257681,null)], null);
});

cljs.core.async.t_cljs$core$async16099.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16099";

cljs.core.async.t_cljs$core$async16099.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16099");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16099.
 */
cljs.core.async.__GT_t_cljs$core$async16099 = (function cljs$core$async$__GT_t_cljs$core$async16099(f__$1,blockable__$1,meta16100){
return (new cljs.core.async.t_cljs$core$async16099(f__$1,blockable__$1,meta16100));
});

}

return (new cljs.core.async.t_cljs$core$async16099(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__16105 = arguments.length;
switch (G__16105) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16108 = arguments.length;
switch (G__16108) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__16111 = arguments.length;
switch (G__16111) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_16113 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16113);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16113,ret){
return (function (){
return fn1.call(null,val_16113);
});})(val_16113,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16115 = arguments.length;
switch (G__16115) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___16117 = n;
var x_16118 = (0);
while(true){
if((x_16118 < n__4607__auto___16117)){
(a[x_16118] = (0));

var G__16119 = (x_16118 + (1));
x_16118 = G__16119;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__16120 = (i + (1));
i = G__16120;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16121 = (function (flag,meta16122){
this.flag = flag;
this.meta16122 = meta16122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16123,meta16122__$1){
var self__ = this;
var _16123__$1 = this;
return (new cljs.core.async.t_cljs$core$async16121(self__.flag,meta16122__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16123){
var self__ = this;
var _16123__$1 = this;
return self__.meta16122;
});})(flag))
;

cljs.core.async.t_cljs$core$async16121.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16121.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16121.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16122","meta16122",424752710,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16121";

cljs.core.async.t_cljs$core$async16121.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16121");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16121.
 */
cljs.core.async.__GT_t_cljs$core$async16121 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16121(flag__$1,meta16122){
return (new cljs.core.async.t_cljs$core$async16121(flag__$1,meta16122));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16121(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16124 = (function (flag,cb,meta16125){
this.flag = flag;
this.cb = cb;
this.meta16125 = meta16125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16126,meta16125__$1){
var self__ = this;
var _16126__$1 = this;
return (new cljs.core.async.t_cljs$core$async16124(self__.flag,self__.cb,meta16125__$1));
});

cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16126){
var self__ = this;
var _16126__$1 = this;
return self__.meta16125;
});

cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16125","meta16125",519741344,null)], null);
});

cljs.core.async.t_cljs$core$async16124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16124";

cljs.core.async.t_cljs$core$async16124.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16124");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16124.
 */
cljs.core.async.__GT_t_cljs$core$async16124 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16124(flag__$1,cb__$1,meta16125){
return (new cljs.core.async.t_cljs$core$async16124(flag__$1,cb__$1,meta16125));
});

}

return (new cljs.core.async.t_cljs$core$async16124(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16127_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16127_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16128_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16128_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16129 = (i + (1));
i = G__16129;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4730__auto___16135 = arguments.length;
var i__4731__auto___16136 = (0);
while(true){
if((i__4731__auto___16136 < len__4730__auto___16135)){
args__4736__auto__.push((arguments[i__4731__auto___16136]));

var G__16137 = (i__4731__auto___16136 + (1));
i__4731__auto___16136 = G__16137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16132){
var map__16133 = p__16132;
var map__16133__$1 = (((((!((map__16133 == null))))?(((((map__16133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16133):map__16133);
var opts = map__16133__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16130){
var G__16131 = cljs.core.first.call(null,seq16130);
var seq16130__$1 = cljs.core.next.call(null,seq16130);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16131,seq16130__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__16139 = arguments.length;
switch (G__16139) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16038__auto___16185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___16185){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___16185){
return (function (state_16163){
var state_val_16164 = (state_16163[(1)]);
if((state_val_16164 === (7))){
var inst_16159 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16165_16186 = state_16163__$1;
(statearr_16165_16186[(2)] = inst_16159);

(statearr_16165_16186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (1))){
var state_16163__$1 = state_16163;
var statearr_16166_16187 = state_16163__$1;
(statearr_16166_16187[(2)] = null);

(statearr_16166_16187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (4))){
var inst_16142 = (state_16163[(7)]);
var inst_16142__$1 = (state_16163[(2)]);
var inst_16143 = (inst_16142__$1 == null);
var state_16163__$1 = (function (){var statearr_16167 = state_16163;
(statearr_16167[(7)] = inst_16142__$1);

return statearr_16167;
})();
if(cljs.core.truth_(inst_16143)){
var statearr_16168_16188 = state_16163__$1;
(statearr_16168_16188[(1)] = (5));

} else {
var statearr_16169_16189 = state_16163__$1;
(statearr_16169_16189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (13))){
var state_16163__$1 = state_16163;
var statearr_16170_16190 = state_16163__$1;
(statearr_16170_16190[(2)] = null);

(statearr_16170_16190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (6))){
var inst_16142 = (state_16163[(7)]);
var state_16163__$1 = state_16163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16163__$1,(11),to,inst_16142);
} else {
if((state_val_16164 === (3))){
var inst_16161 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16163__$1,inst_16161);
} else {
if((state_val_16164 === (12))){
var state_16163__$1 = state_16163;
var statearr_16171_16191 = state_16163__$1;
(statearr_16171_16191[(2)] = null);

(statearr_16171_16191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (2))){
var state_16163__$1 = state_16163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16163__$1,(4),from);
} else {
if((state_val_16164 === (11))){
var inst_16152 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
if(cljs.core.truth_(inst_16152)){
var statearr_16172_16192 = state_16163__$1;
(statearr_16172_16192[(1)] = (12));

} else {
var statearr_16173_16193 = state_16163__$1;
(statearr_16173_16193[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (9))){
var state_16163__$1 = state_16163;
var statearr_16174_16194 = state_16163__$1;
(statearr_16174_16194[(2)] = null);

(statearr_16174_16194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (5))){
var state_16163__$1 = state_16163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16175_16195 = state_16163__$1;
(statearr_16175_16195[(1)] = (8));

} else {
var statearr_16176_16196 = state_16163__$1;
(statearr_16176_16196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (14))){
var inst_16157 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16177_16197 = state_16163__$1;
(statearr_16177_16197[(2)] = inst_16157);

(statearr_16177_16197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (10))){
var inst_16149 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16178_16198 = state_16163__$1;
(statearr_16178_16198[(2)] = inst_16149);

(statearr_16178_16198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (8))){
var inst_16146 = cljs.core.async.close_BANG_.call(null,to);
var state_16163__$1 = state_16163;
var statearr_16179_16199 = state_16163__$1;
(statearr_16179_16199[(2)] = inst_16146);

(statearr_16179_16199[(1)] = (10));


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
});})(c__16038__auto___16185))
;
return ((function (switch__15943__auto__,c__16038__auto___16185){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_16180 = [null,null,null,null,null,null,null,null];
(statearr_16180[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_16180[(1)] = (1));

return statearr_16180;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_16163){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_16163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e16181){if((e16181 instanceof Object)){
var ex__15947__auto__ = e16181;
var statearr_16182_16200 = state_16163;
(statearr_16182_16200[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16201 = state_16163;
state_16163 = G__16201;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_16163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_16163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___16185))
})();
var state__16040__auto__ = (function (){var statearr_16183 = f__16039__auto__.call(null);
(statearr_16183[(6)] = c__16038__auto___16185);

return statearr_16183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___16185))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__16202){
var vec__16203 = p__16202;
var v = cljs.core.nth.call(null,vec__16203,(0),null);
var p = cljs.core.nth.call(null,vec__16203,(1),null);
var job = vec__16203;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16038__auto___16374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___16374,res,vec__16203,v,p,job,jobs,results){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___16374,res,vec__16203,v,p,job,jobs,results){
return (function (state_16210){
var state_val_16211 = (state_16210[(1)]);
if((state_val_16211 === (1))){
var state_16210__$1 = state_16210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16210__$1,(2),res,v);
} else {
if((state_val_16211 === (2))){
var inst_16207 = (state_16210[(2)]);
var inst_16208 = cljs.core.async.close_BANG_.call(null,res);
var state_16210__$1 = (function (){var statearr_16212 = state_16210;
(statearr_16212[(7)] = inst_16207);

return statearr_16212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16210__$1,inst_16208);
} else {
return null;
}
}
});})(c__16038__auto___16374,res,vec__16203,v,p,job,jobs,results))
;
return ((function (switch__15943__auto__,c__16038__auto___16374,res,vec__16203,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_16213 = [null,null,null,null,null,null,null,null];
(statearr_16213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__);

(statearr_16213[(1)] = (1));

return statearr_16213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1 = (function (state_16210){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_16210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e16214){if((e16214 instanceof Object)){
var ex__15947__auto__ = e16214;
var statearr_16215_16375 = state_16210;
(statearr_16215_16375[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16376 = state_16210;
state_16210 = G__16376;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = function(state_16210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1.call(this,state_16210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___16374,res,vec__16203,v,p,job,jobs,results))
})();
var state__16040__auto__ = (function (){var statearr_16216 = f__16039__auto__.call(null);
(statearr_16216[(6)] = c__16038__auto___16374);

return statearr_16216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___16374,res,vec__16203,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16217){
var vec__16218 = p__16217;
var v = cljs.core.nth.call(null,vec__16218,(0),null);
var p = cljs.core.nth.call(null,vec__16218,(1),null);
var job = vec__16218;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___16377 = n;
var __16378 = (0);
while(true){
if((__16378 < n__4607__auto___16377)){
var G__16221_16379 = type;
var G__16221_16380__$1 = (((G__16221_16379 instanceof cljs.core.Keyword))?G__16221_16379.fqn:null);
switch (G__16221_16380__$1) {
case "compute":
var c__16038__auto___16382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16378,c__16038__auto___16382,G__16221_16379,G__16221_16380__$1,n__4607__auto___16377,jobs,results,process,async){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (__16378,c__16038__auto___16382,G__16221_16379,G__16221_16380__$1,n__4607__auto___16377,jobs,results,process,async){
return (function (state_16234){
var state_val_16235 = (state_16234[(1)]);
if((state_val_16235 === (1))){
var state_16234__$1 = state_16234;
var statearr_16236_16383 = state_16234__$1;
(statearr_16236_16383[(2)] = null);

(statearr_16236_16383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (2))){
var state_16234__$1 = state_16234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16234__$1,(4),jobs);
} else {
if((state_val_16235 === (3))){
var inst_16232 = (state_16234[(2)]);
var state_16234__$1 = state_16234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16234__$1,inst_16232);
} else {
if((state_val_16235 === (4))){
var inst_16224 = (state_16234[(2)]);
var inst_16225 = process.call(null,inst_16224);
var state_16234__$1 = state_16234;
if(cljs.core.truth_(inst_16225)){
var statearr_16237_16384 = state_16234__$1;
(statearr_16237_16384[(1)] = (5));

} else {
var statearr_16238_16385 = state_16234__$1;
(statearr_16238_16385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (5))){
var state_16234__$1 = state_16234;
var statearr_16239_16386 = state_16234__$1;
(statearr_16239_16386[(2)] = null);

(statearr_16239_16386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (6))){
var state_16234__$1 = state_16234;
var statearr_16240_16387 = state_16234__$1;
(statearr_16240_16387[(2)] = null);

(statearr_16240_16387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (7))){
var inst_16230 = (state_16234[(2)]);
var state_16234__$1 = state_16234;
var statearr_16241_16388 = state_16234__$1;
(statearr_16241_16388[(2)] = inst_16230);

(statearr_16241_16388[(1)] = (3));


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
});})(__16378,c__16038__auto___16382,G__16221_16379,G__16221_16380__$1,n__4607__auto___16377,jobs,results,process,async))
;
return ((function (__16378,switch__15943__auto__,c__16038__auto___16382,G__16221_16379,G__16221_16380__$1,n__4607__auto___16377,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_16242 = [null,null,null,null,null,null,null];
(statearr_16242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__);

(statearr_16242[(1)] = (1));

return statearr_16242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1 = (function (state_16234){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_16234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e16243){if((e16243 instanceof Object)){
var ex__15947__auto__ = e16243;
var statearr_16244_16389 = state_16234;
(statearr_16244_16389[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16390 = state_16234;
state_16234 = G__16390;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = function(state_16234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1.call(this,state_16234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__;
})()
;})(__16378,switch__15943__auto__,c__16038__auto___16382,G__16221_16379,G__16221_16380__$1,n__4607__auto___16377,jobs,results,process,async))
})();
var state__16040__auto__ = (function (){var statearr_16245 = f__16039__auto__.call(null);
(statearr_16245[(6)] = c__16038__auto___16382);

return statearr_16245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(__16378,c__16038__auto___16382,G__16221_16379,G__16221_16380__$1,n__4607__auto___16377,jobs,results,process,async))
);


break;
case "async":
var c__16038__auto___16391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16378,c__16038__auto___16391,G__16221_16379,G__16221_16380__$1,n__4607__auto___16377,jobs,results,process,async){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (__16378,c__16038__auto___16391,G__16221_16379,G__16221_16380__$1,n__4607__auto___16377,jobs,results,process,async){
return (function (state_16258){
var state_val_16259 = (state_16258[(1)]);
if((state_val_16259 === (1))){
var state_16258__$1 = state_16258;
var statearr_16260_16392 = state_16258__$1;
(statearr_16260_16392[(2)] = null);

(statearr_16260_16392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (2))){
var state_16258__$1 = state_16258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16258__$1,(4),jobs);
} else {
if((state_val_16259 === (3))){
var inst_16256 = (state_16258[(2)]);
var state_16258__$1 = state_16258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16258__$1,inst_16256);
} else {
if((state_val_16259 === (4))){
var inst_16248 = (state_16258[(2)]);
var inst_16249 = async.call(null,inst_16248);
var state_16258__$1 = state_16258;
if(cljs.core.truth_(inst_16249)){
var statearr_16261_16393 = state_16258__$1;
(statearr_16261_16393[(1)] = (5));

} else {
var statearr_16262_16394 = state_16258__$1;
(statearr_16262_16394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (5))){
var state_16258__$1 = state_16258;
var statearr_16263_16395 = state_16258__$1;
(statearr_16263_16395[(2)] = null);

(statearr_16263_16395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (6))){
var state_16258__$1 = state_16258;
var statearr_16264_16396 = state_16258__$1;
(statearr_16264_16396[(2)] = null);

(statearr_16264_16396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (7))){
var inst_16254 = (state_16258[(2)]);
var state_16258__$1 = state_16258;
var statearr_16265_16397 = state_16258__$1;
(statearr_16265_16397[(2)] = inst_16254);

(statearr_16265_16397[(1)] = (3));


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
});})(__16378,c__16038__auto___16391,G__16221_16379,G__16221_16380__$1,n__4607__auto___16377,jobs,results,process,async))
;
return ((function (__16378,switch__15943__auto__,c__16038__auto___16391,G__16221_16379,G__16221_16380__$1,n__4607__auto___16377,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_16266 = [null,null,null,null,null,null,null];
(statearr_16266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__);

(statearr_16266[(1)] = (1));

return statearr_16266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1 = (function (state_16258){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_16258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e16267){if((e16267 instanceof Object)){
var ex__15947__auto__ = e16267;
var statearr_16268_16398 = state_16258;
(statearr_16268_16398[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16399 = state_16258;
state_16258 = G__16399;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = function(state_16258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1.call(this,state_16258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__;
})()
;})(__16378,switch__15943__auto__,c__16038__auto___16391,G__16221_16379,G__16221_16380__$1,n__4607__auto___16377,jobs,results,process,async))
})();
var state__16040__auto__ = (function (){var statearr_16269 = f__16039__auto__.call(null);
(statearr_16269[(6)] = c__16038__auto___16391);

return statearr_16269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(__16378,c__16038__auto___16391,G__16221_16379,G__16221_16380__$1,n__4607__auto___16377,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16221_16380__$1)].join('')));

}

var G__16400 = (__16378 + (1));
__16378 = G__16400;
continue;
} else {
}
break;
}

var c__16038__auto___16401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___16401,jobs,results,process,async){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___16401,jobs,results,process,async){
return (function (state_16291){
var state_val_16292 = (state_16291[(1)]);
if((state_val_16292 === (7))){
var inst_16287 = (state_16291[(2)]);
var state_16291__$1 = state_16291;
var statearr_16293_16402 = state_16291__$1;
(statearr_16293_16402[(2)] = inst_16287);

(statearr_16293_16402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16292 === (1))){
var state_16291__$1 = state_16291;
var statearr_16294_16403 = state_16291__$1;
(statearr_16294_16403[(2)] = null);

(statearr_16294_16403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16292 === (4))){
var inst_16272 = (state_16291[(7)]);
var inst_16272__$1 = (state_16291[(2)]);
var inst_16273 = (inst_16272__$1 == null);
var state_16291__$1 = (function (){var statearr_16295 = state_16291;
(statearr_16295[(7)] = inst_16272__$1);

return statearr_16295;
})();
if(cljs.core.truth_(inst_16273)){
var statearr_16296_16404 = state_16291__$1;
(statearr_16296_16404[(1)] = (5));

} else {
var statearr_16297_16405 = state_16291__$1;
(statearr_16297_16405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16292 === (6))){
var inst_16272 = (state_16291[(7)]);
var inst_16277 = (state_16291[(8)]);
var inst_16277__$1 = cljs.core.async.chan.call(null,(1));
var inst_16278 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16279 = [inst_16272,inst_16277__$1];
var inst_16280 = (new cljs.core.PersistentVector(null,2,(5),inst_16278,inst_16279,null));
var state_16291__$1 = (function (){var statearr_16298 = state_16291;
(statearr_16298[(8)] = inst_16277__$1);

return statearr_16298;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16291__$1,(8),jobs,inst_16280);
} else {
if((state_val_16292 === (3))){
var inst_16289 = (state_16291[(2)]);
var state_16291__$1 = state_16291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16291__$1,inst_16289);
} else {
if((state_val_16292 === (2))){
var state_16291__$1 = state_16291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16291__$1,(4),from);
} else {
if((state_val_16292 === (9))){
var inst_16284 = (state_16291[(2)]);
var state_16291__$1 = (function (){var statearr_16299 = state_16291;
(statearr_16299[(9)] = inst_16284);

return statearr_16299;
})();
var statearr_16300_16406 = state_16291__$1;
(statearr_16300_16406[(2)] = null);

(statearr_16300_16406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16292 === (5))){
var inst_16275 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16291__$1 = state_16291;
var statearr_16301_16407 = state_16291__$1;
(statearr_16301_16407[(2)] = inst_16275);

(statearr_16301_16407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16292 === (8))){
var inst_16277 = (state_16291[(8)]);
var inst_16282 = (state_16291[(2)]);
var state_16291__$1 = (function (){var statearr_16302 = state_16291;
(statearr_16302[(10)] = inst_16282);

return statearr_16302;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16291__$1,(9),results,inst_16277);
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
});})(c__16038__auto___16401,jobs,results,process,async))
;
return ((function (switch__15943__auto__,c__16038__auto___16401,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_16303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__);

(statearr_16303[(1)] = (1));

return statearr_16303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1 = (function (state_16291){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_16291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e16304){if((e16304 instanceof Object)){
var ex__15947__auto__ = e16304;
var statearr_16305_16408 = state_16291;
(statearr_16305_16408[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16409 = state_16291;
state_16291 = G__16409;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = function(state_16291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1.call(this,state_16291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___16401,jobs,results,process,async))
})();
var state__16040__auto__ = (function (){var statearr_16306 = f__16039__auto__.call(null);
(statearr_16306[(6)] = c__16038__auto___16401);

return statearr_16306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___16401,jobs,results,process,async))
);


var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,jobs,results,process,async){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,jobs,results,process,async){
return (function (state_16344){
var state_val_16345 = (state_16344[(1)]);
if((state_val_16345 === (7))){
var inst_16340 = (state_16344[(2)]);
var state_16344__$1 = state_16344;
var statearr_16346_16410 = state_16344__$1;
(statearr_16346_16410[(2)] = inst_16340);

(statearr_16346_16410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (20))){
var state_16344__$1 = state_16344;
var statearr_16347_16411 = state_16344__$1;
(statearr_16347_16411[(2)] = null);

(statearr_16347_16411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (1))){
var state_16344__$1 = state_16344;
var statearr_16348_16412 = state_16344__$1;
(statearr_16348_16412[(2)] = null);

(statearr_16348_16412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (4))){
var inst_16309 = (state_16344[(7)]);
var inst_16309__$1 = (state_16344[(2)]);
var inst_16310 = (inst_16309__$1 == null);
var state_16344__$1 = (function (){var statearr_16349 = state_16344;
(statearr_16349[(7)] = inst_16309__$1);

return statearr_16349;
})();
if(cljs.core.truth_(inst_16310)){
var statearr_16350_16413 = state_16344__$1;
(statearr_16350_16413[(1)] = (5));

} else {
var statearr_16351_16414 = state_16344__$1;
(statearr_16351_16414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (15))){
var inst_16322 = (state_16344[(8)]);
var state_16344__$1 = state_16344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16344__$1,(18),to,inst_16322);
} else {
if((state_val_16345 === (21))){
var inst_16335 = (state_16344[(2)]);
var state_16344__$1 = state_16344;
var statearr_16352_16415 = state_16344__$1;
(statearr_16352_16415[(2)] = inst_16335);

(statearr_16352_16415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (13))){
var inst_16337 = (state_16344[(2)]);
var state_16344__$1 = (function (){var statearr_16353 = state_16344;
(statearr_16353[(9)] = inst_16337);

return statearr_16353;
})();
var statearr_16354_16416 = state_16344__$1;
(statearr_16354_16416[(2)] = null);

(statearr_16354_16416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (6))){
var inst_16309 = (state_16344[(7)]);
var state_16344__$1 = state_16344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16344__$1,(11),inst_16309);
} else {
if((state_val_16345 === (17))){
var inst_16330 = (state_16344[(2)]);
var state_16344__$1 = state_16344;
if(cljs.core.truth_(inst_16330)){
var statearr_16355_16417 = state_16344__$1;
(statearr_16355_16417[(1)] = (19));

} else {
var statearr_16356_16418 = state_16344__$1;
(statearr_16356_16418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (3))){
var inst_16342 = (state_16344[(2)]);
var state_16344__$1 = state_16344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16344__$1,inst_16342);
} else {
if((state_val_16345 === (12))){
var inst_16319 = (state_16344[(10)]);
var state_16344__$1 = state_16344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16344__$1,(14),inst_16319);
} else {
if((state_val_16345 === (2))){
var state_16344__$1 = state_16344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16344__$1,(4),results);
} else {
if((state_val_16345 === (19))){
var state_16344__$1 = state_16344;
var statearr_16357_16419 = state_16344__$1;
(statearr_16357_16419[(2)] = null);

(statearr_16357_16419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (11))){
var inst_16319 = (state_16344[(2)]);
var state_16344__$1 = (function (){var statearr_16358 = state_16344;
(statearr_16358[(10)] = inst_16319);

return statearr_16358;
})();
var statearr_16359_16420 = state_16344__$1;
(statearr_16359_16420[(2)] = null);

(statearr_16359_16420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (9))){
var state_16344__$1 = state_16344;
var statearr_16360_16421 = state_16344__$1;
(statearr_16360_16421[(2)] = null);

(statearr_16360_16421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (5))){
var state_16344__$1 = state_16344;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16361_16422 = state_16344__$1;
(statearr_16361_16422[(1)] = (8));

} else {
var statearr_16362_16423 = state_16344__$1;
(statearr_16362_16423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (14))){
var inst_16322 = (state_16344[(8)]);
var inst_16324 = (state_16344[(11)]);
var inst_16322__$1 = (state_16344[(2)]);
var inst_16323 = (inst_16322__$1 == null);
var inst_16324__$1 = cljs.core.not.call(null,inst_16323);
var state_16344__$1 = (function (){var statearr_16363 = state_16344;
(statearr_16363[(8)] = inst_16322__$1);

(statearr_16363[(11)] = inst_16324__$1);

return statearr_16363;
})();
if(inst_16324__$1){
var statearr_16364_16424 = state_16344__$1;
(statearr_16364_16424[(1)] = (15));

} else {
var statearr_16365_16425 = state_16344__$1;
(statearr_16365_16425[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (16))){
var inst_16324 = (state_16344[(11)]);
var state_16344__$1 = state_16344;
var statearr_16366_16426 = state_16344__$1;
(statearr_16366_16426[(2)] = inst_16324);

(statearr_16366_16426[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (10))){
var inst_16316 = (state_16344[(2)]);
var state_16344__$1 = state_16344;
var statearr_16367_16427 = state_16344__$1;
(statearr_16367_16427[(2)] = inst_16316);

(statearr_16367_16427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (18))){
var inst_16327 = (state_16344[(2)]);
var state_16344__$1 = state_16344;
var statearr_16368_16428 = state_16344__$1;
(statearr_16368_16428[(2)] = inst_16327);

(statearr_16368_16428[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16345 === (8))){
var inst_16313 = cljs.core.async.close_BANG_.call(null,to);
var state_16344__$1 = state_16344;
var statearr_16369_16429 = state_16344__$1;
(statearr_16369_16429[(2)] = inst_16313);

(statearr_16369_16429[(1)] = (10));


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
});})(c__16038__auto__,jobs,results,process,async))
;
return ((function (switch__15943__auto__,c__16038__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_16370 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__);

(statearr_16370[(1)] = (1));

return statearr_16370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1 = (function (state_16344){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_16344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e16371){if((e16371 instanceof Object)){
var ex__15947__auto__ = e16371;
var statearr_16372_16430 = state_16344;
(statearr_16372_16430[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16431 = state_16344;
state_16344 = G__16431;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = function(state_16344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1.call(this,state_16344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,jobs,results,process,async))
})();
var state__16040__auto__ = (function (){var statearr_16373 = f__16039__auto__.call(null);
(statearr_16373[(6)] = c__16038__auto__);

return statearr_16373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,jobs,results,process,async))
);

return c__16038__auto__;
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
var G__16433 = arguments.length;
switch (G__16433) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__16436 = arguments.length;
switch (G__16436) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__16439 = arguments.length;
switch (G__16439) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16038__auto___16488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___16488,tc,fc){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___16488,tc,fc){
return (function (state_16465){
var state_val_16466 = (state_16465[(1)]);
if((state_val_16466 === (7))){
var inst_16461 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
var statearr_16467_16489 = state_16465__$1;
(statearr_16467_16489[(2)] = inst_16461);

(statearr_16467_16489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (1))){
var state_16465__$1 = state_16465;
var statearr_16468_16490 = state_16465__$1;
(statearr_16468_16490[(2)] = null);

(statearr_16468_16490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (4))){
var inst_16442 = (state_16465[(7)]);
var inst_16442__$1 = (state_16465[(2)]);
var inst_16443 = (inst_16442__$1 == null);
var state_16465__$1 = (function (){var statearr_16469 = state_16465;
(statearr_16469[(7)] = inst_16442__$1);

return statearr_16469;
})();
if(cljs.core.truth_(inst_16443)){
var statearr_16470_16491 = state_16465__$1;
(statearr_16470_16491[(1)] = (5));

} else {
var statearr_16471_16492 = state_16465__$1;
(statearr_16471_16492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (13))){
var state_16465__$1 = state_16465;
var statearr_16472_16493 = state_16465__$1;
(statearr_16472_16493[(2)] = null);

(statearr_16472_16493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (6))){
var inst_16442 = (state_16465[(7)]);
var inst_16448 = p.call(null,inst_16442);
var state_16465__$1 = state_16465;
if(cljs.core.truth_(inst_16448)){
var statearr_16473_16494 = state_16465__$1;
(statearr_16473_16494[(1)] = (9));

} else {
var statearr_16474_16495 = state_16465__$1;
(statearr_16474_16495[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (3))){
var inst_16463 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16465__$1,inst_16463);
} else {
if((state_val_16466 === (12))){
var state_16465__$1 = state_16465;
var statearr_16475_16496 = state_16465__$1;
(statearr_16475_16496[(2)] = null);

(statearr_16475_16496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (2))){
var state_16465__$1 = state_16465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16465__$1,(4),ch);
} else {
if((state_val_16466 === (11))){
var inst_16442 = (state_16465[(7)]);
var inst_16452 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16465__$1,(8),inst_16452,inst_16442);
} else {
if((state_val_16466 === (9))){
var state_16465__$1 = state_16465;
var statearr_16476_16497 = state_16465__$1;
(statearr_16476_16497[(2)] = tc);

(statearr_16476_16497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (5))){
var inst_16445 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16446 = cljs.core.async.close_BANG_.call(null,fc);
var state_16465__$1 = (function (){var statearr_16477 = state_16465;
(statearr_16477[(8)] = inst_16445);

return statearr_16477;
})();
var statearr_16478_16498 = state_16465__$1;
(statearr_16478_16498[(2)] = inst_16446);

(statearr_16478_16498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (14))){
var inst_16459 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
var statearr_16479_16499 = state_16465__$1;
(statearr_16479_16499[(2)] = inst_16459);

(statearr_16479_16499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (10))){
var state_16465__$1 = state_16465;
var statearr_16480_16500 = state_16465__$1;
(statearr_16480_16500[(2)] = fc);

(statearr_16480_16500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (8))){
var inst_16454 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
if(cljs.core.truth_(inst_16454)){
var statearr_16481_16501 = state_16465__$1;
(statearr_16481_16501[(1)] = (12));

} else {
var statearr_16482_16502 = state_16465__$1;
(statearr_16482_16502[(1)] = (13));

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
});})(c__16038__auto___16488,tc,fc))
;
return ((function (switch__15943__auto__,c__16038__auto___16488,tc,fc){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_16483 = [null,null,null,null,null,null,null,null,null];
(statearr_16483[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_16483[(1)] = (1));

return statearr_16483;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_16465){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_16465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e16484){if((e16484 instanceof Object)){
var ex__15947__auto__ = e16484;
var statearr_16485_16503 = state_16465;
(statearr_16485_16503[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16504 = state_16465;
state_16465 = G__16504;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_16465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_16465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___16488,tc,fc))
})();
var state__16040__auto__ = (function (){var statearr_16486 = f__16039__auto__.call(null);
(statearr_16486[(6)] = c__16038__auto___16488);

return statearr_16486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___16488,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_16525){
var state_val_16526 = (state_16525[(1)]);
if((state_val_16526 === (7))){
var inst_16521 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16527_16545 = state_16525__$1;
(statearr_16527_16545[(2)] = inst_16521);

(statearr_16527_16545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (1))){
var inst_16505 = init;
var state_16525__$1 = (function (){var statearr_16528 = state_16525;
(statearr_16528[(7)] = inst_16505);

return statearr_16528;
})();
var statearr_16529_16546 = state_16525__$1;
(statearr_16529_16546[(2)] = null);

(statearr_16529_16546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (4))){
var inst_16508 = (state_16525[(8)]);
var inst_16508__$1 = (state_16525[(2)]);
var inst_16509 = (inst_16508__$1 == null);
var state_16525__$1 = (function (){var statearr_16530 = state_16525;
(statearr_16530[(8)] = inst_16508__$1);

return statearr_16530;
})();
if(cljs.core.truth_(inst_16509)){
var statearr_16531_16547 = state_16525__$1;
(statearr_16531_16547[(1)] = (5));

} else {
var statearr_16532_16548 = state_16525__$1;
(statearr_16532_16548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (6))){
var inst_16512 = (state_16525[(9)]);
var inst_16508 = (state_16525[(8)]);
var inst_16505 = (state_16525[(7)]);
var inst_16512__$1 = f.call(null,inst_16505,inst_16508);
var inst_16513 = cljs.core.reduced_QMARK_.call(null,inst_16512__$1);
var state_16525__$1 = (function (){var statearr_16533 = state_16525;
(statearr_16533[(9)] = inst_16512__$1);

return statearr_16533;
})();
if(inst_16513){
var statearr_16534_16549 = state_16525__$1;
(statearr_16534_16549[(1)] = (8));

} else {
var statearr_16535_16550 = state_16525__$1;
(statearr_16535_16550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (3))){
var inst_16523 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16525__$1,inst_16523);
} else {
if((state_val_16526 === (2))){
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16525__$1,(4),ch);
} else {
if((state_val_16526 === (9))){
var inst_16512 = (state_16525[(9)]);
var inst_16505 = inst_16512;
var state_16525__$1 = (function (){var statearr_16536 = state_16525;
(statearr_16536[(7)] = inst_16505);

return statearr_16536;
})();
var statearr_16537_16551 = state_16525__$1;
(statearr_16537_16551[(2)] = null);

(statearr_16537_16551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (5))){
var inst_16505 = (state_16525[(7)]);
var state_16525__$1 = state_16525;
var statearr_16538_16552 = state_16525__$1;
(statearr_16538_16552[(2)] = inst_16505);

(statearr_16538_16552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (10))){
var inst_16519 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16539_16553 = state_16525__$1;
(statearr_16539_16553[(2)] = inst_16519);

(statearr_16539_16553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (8))){
var inst_16512 = (state_16525[(9)]);
var inst_16515 = cljs.core.deref.call(null,inst_16512);
var state_16525__$1 = state_16525;
var statearr_16540_16554 = state_16525__$1;
(statearr_16540_16554[(2)] = inst_16515);

(statearr_16540_16554[(1)] = (10));


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
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15944__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15944__auto____0 = (function (){
var statearr_16541 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16541[(0)] = cljs$core$async$reduce_$_state_machine__15944__auto__);

(statearr_16541[(1)] = (1));

return statearr_16541;
});
var cljs$core$async$reduce_$_state_machine__15944__auto____1 = (function (state_16525){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_16525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e16542){if((e16542 instanceof Object)){
var ex__15947__auto__ = e16542;
var statearr_16543_16555 = state_16525;
(statearr_16543_16555[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16556 = state_16525;
state_16525 = G__16556;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15944__auto__ = function(state_16525){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15944__auto____1.call(this,state_16525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15944__auto____0;
cljs$core$async$reduce_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15944__auto____1;
return cljs$core$async$reduce_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_16544 = f__16039__auto__.call(null);
(statearr_16544[(6)] = c__16038__auto__);

return statearr_16544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,f__$1){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,f__$1){
return (function (state_16562){
var state_val_16563 = (state_16562[(1)]);
if((state_val_16563 === (1))){
var inst_16557 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16562__$1 = state_16562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16562__$1,(2),inst_16557);
} else {
if((state_val_16563 === (2))){
var inst_16559 = (state_16562[(2)]);
var inst_16560 = f__$1.call(null,inst_16559);
var state_16562__$1 = state_16562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16562__$1,inst_16560);
} else {
return null;
}
}
});})(c__16038__auto__,f__$1))
;
return ((function (switch__15943__auto__,c__16038__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15944__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15944__auto____0 = (function (){
var statearr_16564 = [null,null,null,null,null,null,null];
(statearr_16564[(0)] = cljs$core$async$transduce_$_state_machine__15944__auto__);

(statearr_16564[(1)] = (1));

return statearr_16564;
});
var cljs$core$async$transduce_$_state_machine__15944__auto____1 = (function (state_16562){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_16562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e16565){if((e16565 instanceof Object)){
var ex__15947__auto__ = e16565;
var statearr_16566_16568 = state_16562;
(statearr_16566_16568[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16569 = state_16562;
state_16562 = G__16569;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15944__auto__ = function(state_16562){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15944__auto____1.call(this,state_16562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15944__auto____0;
cljs$core$async$transduce_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15944__auto____1;
return cljs$core$async$transduce_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,f__$1))
})();
var state__16040__auto__ = (function (){var statearr_16567 = f__16039__auto__.call(null);
(statearr_16567[(6)] = c__16038__auto__);

return statearr_16567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,f__$1))
);

return c__16038__auto__;
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
var G__16571 = arguments.length;
switch (G__16571) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_16596){
var state_val_16597 = (state_16596[(1)]);
if((state_val_16597 === (7))){
var inst_16578 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
var statearr_16598_16619 = state_16596__$1;
(statearr_16598_16619[(2)] = inst_16578);

(statearr_16598_16619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (1))){
var inst_16572 = cljs.core.seq.call(null,coll);
var inst_16573 = inst_16572;
var state_16596__$1 = (function (){var statearr_16599 = state_16596;
(statearr_16599[(7)] = inst_16573);

return statearr_16599;
})();
var statearr_16600_16620 = state_16596__$1;
(statearr_16600_16620[(2)] = null);

(statearr_16600_16620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (4))){
var inst_16573 = (state_16596[(7)]);
var inst_16576 = cljs.core.first.call(null,inst_16573);
var state_16596__$1 = state_16596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16596__$1,(7),ch,inst_16576);
} else {
if((state_val_16597 === (13))){
var inst_16590 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
var statearr_16601_16621 = state_16596__$1;
(statearr_16601_16621[(2)] = inst_16590);

(statearr_16601_16621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (6))){
var inst_16581 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
if(cljs.core.truth_(inst_16581)){
var statearr_16602_16622 = state_16596__$1;
(statearr_16602_16622[(1)] = (8));

} else {
var statearr_16603_16623 = state_16596__$1;
(statearr_16603_16623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (3))){
var inst_16594 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16596__$1,inst_16594);
} else {
if((state_val_16597 === (12))){
var state_16596__$1 = state_16596;
var statearr_16604_16624 = state_16596__$1;
(statearr_16604_16624[(2)] = null);

(statearr_16604_16624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (2))){
var inst_16573 = (state_16596[(7)]);
var state_16596__$1 = state_16596;
if(cljs.core.truth_(inst_16573)){
var statearr_16605_16625 = state_16596__$1;
(statearr_16605_16625[(1)] = (4));

} else {
var statearr_16606_16626 = state_16596__$1;
(statearr_16606_16626[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (11))){
var inst_16587 = cljs.core.async.close_BANG_.call(null,ch);
var state_16596__$1 = state_16596;
var statearr_16607_16627 = state_16596__$1;
(statearr_16607_16627[(2)] = inst_16587);

(statearr_16607_16627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (9))){
var state_16596__$1 = state_16596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16608_16628 = state_16596__$1;
(statearr_16608_16628[(1)] = (11));

} else {
var statearr_16609_16629 = state_16596__$1;
(statearr_16609_16629[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (5))){
var inst_16573 = (state_16596[(7)]);
var state_16596__$1 = state_16596;
var statearr_16610_16630 = state_16596__$1;
(statearr_16610_16630[(2)] = inst_16573);

(statearr_16610_16630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (10))){
var inst_16592 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
var statearr_16611_16631 = state_16596__$1;
(statearr_16611_16631[(2)] = inst_16592);

(statearr_16611_16631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (8))){
var inst_16573 = (state_16596[(7)]);
var inst_16583 = cljs.core.next.call(null,inst_16573);
var inst_16573__$1 = inst_16583;
var state_16596__$1 = (function (){var statearr_16612 = state_16596;
(statearr_16612[(7)] = inst_16573__$1);

return statearr_16612;
})();
var statearr_16613_16632 = state_16596__$1;
(statearr_16613_16632[(2)] = null);

(statearr_16613_16632[(1)] = (2));


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
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_16614 = [null,null,null,null,null,null,null,null];
(statearr_16614[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_16614[(1)] = (1));

return statearr_16614;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_16596){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_16596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e16615){if((e16615 instanceof Object)){
var ex__15947__auto__ = e16615;
var statearr_16616_16633 = state_16596;
(statearr_16616_16633[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16634 = state_16596;
state_16596 = G__16634;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_16596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_16596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_16617 = f__16039__auto__.call(null);
(statearr_16617[(6)] = c__16038__auto__);

return statearr_16617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16635 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16635 = (function (ch,cs,meta16636){
this.ch = ch;
this.cs = cs;
this.meta16636 = meta16636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16637,meta16636__$1){
var self__ = this;
var _16637__$1 = this;
return (new cljs.core.async.t_cljs$core$async16635(self__.ch,self__.cs,meta16636__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16637){
var self__ = this;
var _16637__$1 = this;
return self__.meta16636;
});})(cs))
;

cljs.core.async.t_cljs$core$async16635.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16635.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16635.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16635.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16635.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16635.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16636","meta16636",-1021935494,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16635";

cljs.core.async.t_cljs$core$async16635.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16635");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16635.
 */
cljs.core.async.__GT_t_cljs$core$async16635 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16635(ch__$1,cs__$1,meta16636){
return (new cljs.core.async.t_cljs$core$async16635(ch__$1,cs__$1,meta16636));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16635(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16038__auto___16857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___16857,cs,m,dchan,dctr,done){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___16857,cs,m,dchan,dctr,done){
return (function (state_16772){
var state_val_16773 = (state_16772[(1)]);
if((state_val_16773 === (7))){
var inst_16768 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16774_16858 = state_16772__$1;
(statearr_16774_16858[(2)] = inst_16768);

(statearr_16774_16858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (20))){
var inst_16671 = (state_16772[(7)]);
var inst_16683 = cljs.core.first.call(null,inst_16671);
var inst_16684 = cljs.core.nth.call(null,inst_16683,(0),null);
var inst_16685 = cljs.core.nth.call(null,inst_16683,(1),null);
var state_16772__$1 = (function (){var statearr_16775 = state_16772;
(statearr_16775[(8)] = inst_16684);

return statearr_16775;
})();
if(cljs.core.truth_(inst_16685)){
var statearr_16776_16859 = state_16772__$1;
(statearr_16776_16859[(1)] = (22));

} else {
var statearr_16777_16860 = state_16772__$1;
(statearr_16777_16860[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (27))){
var inst_16640 = (state_16772[(9)]);
var inst_16713 = (state_16772[(10)]);
var inst_16715 = (state_16772[(11)]);
var inst_16720 = (state_16772[(12)]);
var inst_16720__$1 = cljs.core._nth.call(null,inst_16713,inst_16715);
var inst_16721 = cljs.core.async.put_BANG_.call(null,inst_16720__$1,inst_16640,done);
var state_16772__$1 = (function (){var statearr_16778 = state_16772;
(statearr_16778[(12)] = inst_16720__$1);

return statearr_16778;
})();
if(cljs.core.truth_(inst_16721)){
var statearr_16779_16861 = state_16772__$1;
(statearr_16779_16861[(1)] = (30));

} else {
var statearr_16780_16862 = state_16772__$1;
(statearr_16780_16862[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (1))){
var state_16772__$1 = state_16772;
var statearr_16781_16863 = state_16772__$1;
(statearr_16781_16863[(2)] = null);

(statearr_16781_16863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (24))){
var inst_16671 = (state_16772[(7)]);
var inst_16690 = (state_16772[(2)]);
var inst_16691 = cljs.core.next.call(null,inst_16671);
var inst_16649 = inst_16691;
var inst_16650 = null;
var inst_16651 = (0);
var inst_16652 = (0);
var state_16772__$1 = (function (){var statearr_16782 = state_16772;
(statearr_16782[(13)] = inst_16649);

(statearr_16782[(14)] = inst_16690);

(statearr_16782[(15)] = inst_16652);

(statearr_16782[(16)] = inst_16650);

(statearr_16782[(17)] = inst_16651);

return statearr_16782;
})();
var statearr_16783_16864 = state_16772__$1;
(statearr_16783_16864[(2)] = null);

(statearr_16783_16864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (39))){
var state_16772__$1 = state_16772;
var statearr_16787_16865 = state_16772__$1;
(statearr_16787_16865[(2)] = null);

(statearr_16787_16865[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (4))){
var inst_16640 = (state_16772[(9)]);
var inst_16640__$1 = (state_16772[(2)]);
var inst_16641 = (inst_16640__$1 == null);
var state_16772__$1 = (function (){var statearr_16788 = state_16772;
(statearr_16788[(9)] = inst_16640__$1);

return statearr_16788;
})();
if(cljs.core.truth_(inst_16641)){
var statearr_16789_16866 = state_16772__$1;
(statearr_16789_16866[(1)] = (5));

} else {
var statearr_16790_16867 = state_16772__$1;
(statearr_16790_16867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (15))){
var inst_16649 = (state_16772[(13)]);
var inst_16652 = (state_16772[(15)]);
var inst_16650 = (state_16772[(16)]);
var inst_16651 = (state_16772[(17)]);
var inst_16667 = (state_16772[(2)]);
var inst_16668 = (inst_16652 + (1));
var tmp16784 = inst_16649;
var tmp16785 = inst_16650;
var tmp16786 = inst_16651;
var inst_16649__$1 = tmp16784;
var inst_16650__$1 = tmp16785;
var inst_16651__$1 = tmp16786;
var inst_16652__$1 = inst_16668;
var state_16772__$1 = (function (){var statearr_16791 = state_16772;
(statearr_16791[(13)] = inst_16649__$1);

(statearr_16791[(15)] = inst_16652__$1);

(statearr_16791[(18)] = inst_16667);

(statearr_16791[(16)] = inst_16650__$1);

(statearr_16791[(17)] = inst_16651__$1);

return statearr_16791;
})();
var statearr_16792_16868 = state_16772__$1;
(statearr_16792_16868[(2)] = null);

(statearr_16792_16868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (21))){
var inst_16694 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16796_16869 = state_16772__$1;
(statearr_16796_16869[(2)] = inst_16694);

(statearr_16796_16869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (31))){
var inst_16720 = (state_16772[(12)]);
var inst_16724 = done.call(null,null);
var inst_16725 = cljs.core.async.untap_STAR_.call(null,m,inst_16720);
var state_16772__$1 = (function (){var statearr_16797 = state_16772;
(statearr_16797[(19)] = inst_16724);

return statearr_16797;
})();
var statearr_16798_16870 = state_16772__$1;
(statearr_16798_16870[(2)] = inst_16725);

(statearr_16798_16870[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (32))){
var inst_16712 = (state_16772[(20)]);
var inst_16713 = (state_16772[(10)]);
var inst_16714 = (state_16772[(21)]);
var inst_16715 = (state_16772[(11)]);
var inst_16727 = (state_16772[(2)]);
var inst_16728 = (inst_16715 + (1));
var tmp16793 = inst_16712;
var tmp16794 = inst_16713;
var tmp16795 = inst_16714;
var inst_16712__$1 = tmp16793;
var inst_16713__$1 = tmp16794;
var inst_16714__$1 = tmp16795;
var inst_16715__$1 = inst_16728;
var state_16772__$1 = (function (){var statearr_16799 = state_16772;
(statearr_16799[(22)] = inst_16727);

(statearr_16799[(20)] = inst_16712__$1);

(statearr_16799[(10)] = inst_16713__$1);

(statearr_16799[(21)] = inst_16714__$1);

(statearr_16799[(11)] = inst_16715__$1);

return statearr_16799;
})();
var statearr_16800_16871 = state_16772__$1;
(statearr_16800_16871[(2)] = null);

(statearr_16800_16871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (40))){
var inst_16740 = (state_16772[(23)]);
var inst_16744 = done.call(null,null);
var inst_16745 = cljs.core.async.untap_STAR_.call(null,m,inst_16740);
var state_16772__$1 = (function (){var statearr_16801 = state_16772;
(statearr_16801[(24)] = inst_16744);

return statearr_16801;
})();
var statearr_16802_16872 = state_16772__$1;
(statearr_16802_16872[(2)] = inst_16745);

(statearr_16802_16872[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (33))){
var inst_16731 = (state_16772[(25)]);
var inst_16733 = cljs.core.chunked_seq_QMARK_.call(null,inst_16731);
var state_16772__$1 = state_16772;
if(inst_16733){
var statearr_16803_16873 = state_16772__$1;
(statearr_16803_16873[(1)] = (36));

} else {
var statearr_16804_16874 = state_16772__$1;
(statearr_16804_16874[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (13))){
var inst_16661 = (state_16772[(26)]);
var inst_16664 = cljs.core.async.close_BANG_.call(null,inst_16661);
var state_16772__$1 = state_16772;
var statearr_16805_16875 = state_16772__$1;
(statearr_16805_16875[(2)] = inst_16664);

(statearr_16805_16875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (22))){
var inst_16684 = (state_16772[(8)]);
var inst_16687 = cljs.core.async.close_BANG_.call(null,inst_16684);
var state_16772__$1 = state_16772;
var statearr_16806_16876 = state_16772__$1;
(statearr_16806_16876[(2)] = inst_16687);

(statearr_16806_16876[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (36))){
var inst_16731 = (state_16772[(25)]);
var inst_16735 = cljs.core.chunk_first.call(null,inst_16731);
var inst_16736 = cljs.core.chunk_rest.call(null,inst_16731);
var inst_16737 = cljs.core.count.call(null,inst_16735);
var inst_16712 = inst_16736;
var inst_16713 = inst_16735;
var inst_16714 = inst_16737;
var inst_16715 = (0);
var state_16772__$1 = (function (){var statearr_16807 = state_16772;
(statearr_16807[(20)] = inst_16712);

(statearr_16807[(10)] = inst_16713);

(statearr_16807[(21)] = inst_16714);

(statearr_16807[(11)] = inst_16715);

return statearr_16807;
})();
var statearr_16808_16877 = state_16772__$1;
(statearr_16808_16877[(2)] = null);

(statearr_16808_16877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (41))){
var inst_16731 = (state_16772[(25)]);
var inst_16747 = (state_16772[(2)]);
var inst_16748 = cljs.core.next.call(null,inst_16731);
var inst_16712 = inst_16748;
var inst_16713 = null;
var inst_16714 = (0);
var inst_16715 = (0);
var state_16772__$1 = (function (){var statearr_16809 = state_16772;
(statearr_16809[(20)] = inst_16712);

(statearr_16809[(27)] = inst_16747);

(statearr_16809[(10)] = inst_16713);

(statearr_16809[(21)] = inst_16714);

(statearr_16809[(11)] = inst_16715);

return statearr_16809;
})();
var statearr_16810_16878 = state_16772__$1;
(statearr_16810_16878[(2)] = null);

(statearr_16810_16878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (43))){
var state_16772__$1 = state_16772;
var statearr_16811_16879 = state_16772__$1;
(statearr_16811_16879[(2)] = null);

(statearr_16811_16879[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (29))){
var inst_16756 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16812_16880 = state_16772__$1;
(statearr_16812_16880[(2)] = inst_16756);

(statearr_16812_16880[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (44))){
var inst_16765 = (state_16772[(2)]);
var state_16772__$1 = (function (){var statearr_16813 = state_16772;
(statearr_16813[(28)] = inst_16765);

return statearr_16813;
})();
var statearr_16814_16881 = state_16772__$1;
(statearr_16814_16881[(2)] = null);

(statearr_16814_16881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (6))){
var inst_16704 = (state_16772[(29)]);
var inst_16703 = cljs.core.deref.call(null,cs);
var inst_16704__$1 = cljs.core.keys.call(null,inst_16703);
var inst_16705 = cljs.core.count.call(null,inst_16704__$1);
var inst_16706 = cljs.core.reset_BANG_.call(null,dctr,inst_16705);
var inst_16711 = cljs.core.seq.call(null,inst_16704__$1);
var inst_16712 = inst_16711;
var inst_16713 = null;
var inst_16714 = (0);
var inst_16715 = (0);
var state_16772__$1 = (function (){var statearr_16815 = state_16772;
(statearr_16815[(20)] = inst_16712);

(statearr_16815[(10)] = inst_16713);

(statearr_16815[(21)] = inst_16714);

(statearr_16815[(11)] = inst_16715);

(statearr_16815[(29)] = inst_16704__$1);

(statearr_16815[(30)] = inst_16706);

return statearr_16815;
})();
var statearr_16816_16882 = state_16772__$1;
(statearr_16816_16882[(2)] = null);

(statearr_16816_16882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (28))){
var inst_16712 = (state_16772[(20)]);
var inst_16731 = (state_16772[(25)]);
var inst_16731__$1 = cljs.core.seq.call(null,inst_16712);
var state_16772__$1 = (function (){var statearr_16817 = state_16772;
(statearr_16817[(25)] = inst_16731__$1);

return statearr_16817;
})();
if(inst_16731__$1){
var statearr_16818_16883 = state_16772__$1;
(statearr_16818_16883[(1)] = (33));

} else {
var statearr_16819_16884 = state_16772__$1;
(statearr_16819_16884[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (25))){
var inst_16714 = (state_16772[(21)]);
var inst_16715 = (state_16772[(11)]);
var inst_16717 = (inst_16715 < inst_16714);
var inst_16718 = inst_16717;
var state_16772__$1 = state_16772;
if(cljs.core.truth_(inst_16718)){
var statearr_16820_16885 = state_16772__$1;
(statearr_16820_16885[(1)] = (27));

} else {
var statearr_16821_16886 = state_16772__$1;
(statearr_16821_16886[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (34))){
var state_16772__$1 = state_16772;
var statearr_16822_16887 = state_16772__$1;
(statearr_16822_16887[(2)] = null);

(statearr_16822_16887[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (17))){
var state_16772__$1 = state_16772;
var statearr_16823_16888 = state_16772__$1;
(statearr_16823_16888[(2)] = null);

(statearr_16823_16888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (3))){
var inst_16770 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16772__$1,inst_16770);
} else {
if((state_val_16773 === (12))){
var inst_16699 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16824_16889 = state_16772__$1;
(statearr_16824_16889[(2)] = inst_16699);

(statearr_16824_16889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (2))){
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16772__$1,(4),ch);
} else {
if((state_val_16773 === (23))){
var state_16772__$1 = state_16772;
var statearr_16825_16890 = state_16772__$1;
(statearr_16825_16890[(2)] = null);

(statearr_16825_16890[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (35))){
var inst_16754 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16826_16891 = state_16772__$1;
(statearr_16826_16891[(2)] = inst_16754);

(statearr_16826_16891[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (19))){
var inst_16671 = (state_16772[(7)]);
var inst_16675 = cljs.core.chunk_first.call(null,inst_16671);
var inst_16676 = cljs.core.chunk_rest.call(null,inst_16671);
var inst_16677 = cljs.core.count.call(null,inst_16675);
var inst_16649 = inst_16676;
var inst_16650 = inst_16675;
var inst_16651 = inst_16677;
var inst_16652 = (0);
var state_16772__$1 = (function (){var statearr_16827 = state_16772;
(statearr_16827[(13)] = inst_16649);

(statearr_16827[(15)] = inst_16652);

(statearr_16827[(16)] = inst_16650);

(statearr_16827[(17)] = inst_16651);

return statearr_16827;
})();
var statearr_16828_16892 = state_16772__$1;
(statearr_16828_16892[(2)] = null);

(statearr_16828_16892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (11))){
var inst_16649 = (state_16772[(13)]);
var inst_16671 = (state_16772[(7)]);
var inst_16671__$1 = cljs.core.seq.call(null,inst_16649);
var state_16772__$1 = (function (){var statearr_16829 = state_16772;
(statearr_16829[(7)] = inst_16671__$1);

return statearr_16829;
})();
if(inst_16671__$1){
var statearr_16830_16893 = state_16772__$1;
(statearr_16830_16893[(1)] = (16));

} else {
var statearr_16831_16894 = state_16772__$1;
(statearr_16831_16894[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (9))){
var inst_16701 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16832_16895 = state_16772__$1;
(statearr_16832_16895[(2)] = inst_16701);

(statearr_16832_16895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (5))){
var inst_16647 = cljs.core.deref.call(null,cs);
var inst_16648 = cljs.core.seq.call(null,inst_16647);
var inst_16649 = inst_16648;
var inst_16650 = null;
var inst_16651 = (0);
var inst_16652 = (0);
var state_16772__$1 = (function (){var statearr_16833 = state_16772;
(statearr_16833[(13)] = inst_16649);

(statearr_16833[(15)] = inst_16652);

(statearr_16833[(16)] = inst_16650);

(statearr_16833[(17)] = inst_16651);

return statearr_16833;
})();
var statearr_16834_16896 = state_16772__$1;
(statearr_16834_16896[(2)] = null);

(statearr_16834_16896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (14))){
var state_16772__$1 = state_16772;
var statearr_16835_16897 = state_16772__$1;
(statearr_16835_16897[(2)] = null);

(statearr_16835_16897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (45))){
var inst_16762 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16836_16898 = state_16772__$1;
(statearr_16836_16898[(2)] = inst_16762);

(statearr_16836_16898[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (26))){
var inst_16704 = (state_16772[(29)]);
var inst_16758 = (state_16772[(2)]);
var inst_16759 = cljs.core.seq.call(null,inst_16704);
var state_16772__$1 = (function (){var statearr_16837 = state_16772;
(statearr_16837[(31)] = inst_16758);

return statearr_16837;
})();
if(inst_16759){
var statearr_16838_16899 = state_16772__$1;
(statearr_16838_16899[(1)] = (42));

} else {
var statearr_16839_16900 = state_16772__$1;
(statearr_16839_16900[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (16))){
var inst_16671 = (state_16772[(7)]);
var inst_16673 = cljs.core.chunked_seq_QMARK_.call(null,inst_16671);
var state_16772__$1 = state_16772;
if(inst_16673){
var statearr_16840_16901 = state_16772__$1;
(statearr_16840_16901[(1)] = (19));

} else {
var statearr_16841_16902 = state_16772__$1;
(statearr_16841_16902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (38))){
var inst_16751 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16842_16903 = state_16772__$1;
(statearr_16842_16903[(2)] = inst_16751);

(statearr_16842_16903[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (30))){
var state_16772__$1 = state_16772;
var statearr_16843_16904 = state_16772__$1;
(statearr_16843_16904[(2)] = null);

(statearr_16843_16904[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (10))){
var inst_16652 = (state_16772[(15)]);
var inst_16650 = (state_16772[(16)]);
var inst_16660 = cljs.core._nth.call(null,inst_16650,inst_16652);
var inst_16661 = cljs.core.nth.call(null,inst_16660,(0),null);
var inst_16662 = cljs.core.nth.call(null,inst_16660,(1),null);
var state_16772__$1 = (function (){var statearr_16844 = state_16772;
(statearr_16844[(26)] = inst_16661);

return statearr_16844;
})();
if(cljs.core.truth_(inst_16662)){
var statearr_16845_16905 = state_16772__$1;
(statearr_16845_16905[(1)] = (13));

} else {
var statearr_16846_16906 = state_16772__$1;
(statearr_16846_16906[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (18))){
var inst_16697 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16847_16907 = state_16772__$1;
(statearr_16847_16907[(2)] = inst_16697);

(statearr_16847_16907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (42))){
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16772__$1,(45),dchan);
} else {
if((state_val_16773 === (37))){
var inst_16740 = (state_16772[(23)]);
var inst_16640 = (state_16772[(9)]);
var inst_16731 = (state_16772[(25)]);
var inst_16740__$1 = cljs.core.first.call(null,inst_16731);
var inst_16741 = cljs.core.async.put_BANG_.call(null,inst_16740__$1,inst_16640,done);
var state_16772__$1 = (function (){var statearr_16848 = state_16772;
(statearr_16848[(23)] = inst_16740__$1);

return statearr_16848;
})();
if(cljs.core.truth_(inst_16741)){
var statearr_16849_16908 = state_16772__$1;
(statearr_16849_16908[(1)] = (39));

} else {
var statearr_16850_16909 = state_16772__$1;
(statearr_16850_16909[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (8))){
var inst_16652 = (state_16772[(15)]);
var inst_16651 = (state_16772[(17)]);
var inst_16654 = (inst_16652 < inst_16651);
var inst_16655 = inst_16654;
var state_16772__$1 = state_16772;
if(cljs.core.truth_(inst_16655)){
var statearr_16851_16910 = state_16772__$1;
(statearr_16851_16910[(1)] = (10));

} else {
var statearr_16852_16911 = state_16772__$1;
(statearr_16852_16911[(1)] = (11));

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
});})(c__16038__auto___16857,cs,m,dchan,dctr,done))
;
return ((function (switch__15943__auto__,c__16038__auto___16857,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15944__auto__ = null;
var cljs$core$async$mult_$_state_machine__15944__auto____0 = (function (){
var statearr_16853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16853[(0)] = cljs$core$async$mult_$_state_machine__15944__auto__);

(statearr_16853[(1)] = (1));

return statearr_16853;
});
var cljs$core$async$mult_$_state_machine__15944__auto____1 = (function (state_16772){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_16772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e16854){if((e16854 instanceof Object)){
var ex__15947__auto__ = e16854;
var statearr_16855_16912 = state_16772;
(statearr_16855_16912[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16913 = state_16772;
state_16772 = G__16913;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15944__auto__ = function(state_16772){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15944__auto____1.call(this,state_16772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15944__auto____0;
cljs$core$async$mult_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15944__auto____1;
return cljs$core$async$mult_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___16857,cs,m,dchan,dctr,done))
})();
var state__16040__auto__ = (function (){var statearr_16856 = f__16039__auto__.call(null);
(statearr_16856[(6)] = c__16038__auto___16857);

return statearr_16856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___16857,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16915 = arguments.length;
switch (G__16915) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16927 = arguments.length;
var i__4731__auto___16928 = (0);
while(true){
if((i__4731__auto___16928 < len__4730__auto___16927)){
args__4736__auto__.push((arguments[i__4731__auto___16928]));

var G__16929 = (i__4731__auto___16928 + (1));
i__4731__auto___16928 = G__16929;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16921){
var map__16922 = p__16921;
var map__16922__$1 = (((((!((map__16922 == null))))?(((((map__16922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16922):map__16922);
var opts = map__16922__$1;
var statearr_16924_16930 = state;
(statearr_16924_16930[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__16922,map__16922__$1,opts){
return (function (val){
var statearr_16925_16931 = state;
(statearr_16925_16931[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16922,map__16922__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_16926_16932 = state;
(statearr_16926_16932[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16917){
var G__16918 = cljs.core.first.call(null,seq16917);
var seq16917__$1 = cljs.core.next.call(null,seq16917);
var G__16919 = cljs.core.first.call(null,seq16917__$1);
var seq16917__$2 = cljs.core.next.call(null,seq16917__$1);
var G__16920 = cljs.core.first.call(null,seq16917__$2);
var seq16917__$3 = cljs.core.next.call(null,seq16917__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16918,G__16919,G__16920,seq16917__$3);
});

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16933 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16934){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16934 = meta16934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16935,meta16934__$1){
var self__ = this;
var _16935__$1 = this;
return (new cljs.core.async.t_cljs$core$async16933(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16934__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16935){
var self__ = this;
var _16935__$1 = this;
return self__.meta16934;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16933.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16933.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16933.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16933.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16933.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16933.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16933.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16933.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16934","meta16934",-1286891496,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16933";

cljs.core.async.t_cljs$core$async16933.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16933");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16933.
 */
cljs.core.async.__GT_t_cljs$core$async16933 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16933(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16934){
return (new cljs.core.async.t_cljs$core$async16933(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16934));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16933(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16038__auto___17097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___17097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___17097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17037){
var state_val_17038 = (state_17037[(1)]);
if((state_val_17038 === (7))){
var inst_16952 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
var statearr_17039_17098 = state_17037__$1;
(statearr_17039_17098[(2)] = inst_16952);

(statearr_17039_17098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (20))){
var inst_16964 = (state_17037[(7)]);
var state_17037__$1 = state_17037;
var statearr_17040_17099 = state_17037__$1;
(statearr_17040_17099[(2)] = inst_16964);

(statearr_17040_17099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (27))){
var state_17037__$1 = state_17037;
var statearr_17041_17100 = state_17037__$1;
(statearr_17041_17100[(2)] = null);

(statearr_17041_17100[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (1))){
var inst_16939 = (state_17037[(8)]);
var inst_16939__$1 = calc_state.call(null);
var inst_16941 = (inst_16939__$1 == null);
var inst_16942 = cljs.core.not.call(null,inst_16941);
var state_17037__$1 = (function (){var statearr_17042 = state_17037;
(statearr_17042[(8)] = inst_16939__$1);

return statearr_17042;
})();
if(inst_16942){
var statearr_17043_17101 = state_17037__$1;
(statearr_17043_17101[(1)] = (2));

} else {
var statearr_17044_17102 = state_17037__$1;
(statearr_17044_17102[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (24))){
var inst_17011 = (state_17037[(9)]);
var inst_16997 = (state_17037[(10)]);
var inst_16988 = (state_17037[(11)]);
var inst_17011__$1 = inst_16988.call(null,inst_16997);
var state_17037__$1 = (function (){var statearr_17045 = state_17037;
(statearr_17045[(9)] = inst_17011__$1);

return statearr_17045;
})();
if(cljs.core.truth_(inst_17011__$1)){
var statearr_17046_17103 = state_17037__$1;
(statearr_17046_17103[(1)] = (29));

} else {
var statearr_17047_17104 = state_17037__$1;
(statearr_17047_17104[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (4))){
var inst_16955 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
if(cljs.core.truth_(inst_16955)){
var statearr_17048_17105 = state_17037__$1;
(statearr_17048_17105[(1)] = (8));

} else {
var statearr_17049_17106 = state_17037__$1;
(statearr_17049_17106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (15))){
var inst_16982 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
if(cljs.core.truth_(inst_16982)){
var statearr_17050_17107 = state_17037__$1;
(statearr_17050_17107[(1)] = (19));

} else {
var statearr_17051_17108 = state_17037__$1;
(statearr_17051_17108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (21))){
var inst_16987 = (state_17037[(12)]);
var inst_16987__$1 = (state_17037[(2)]);
var inst_16988 = cljs.core.get.call(null,inst_16987__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16989 = cljs.core.get.call(null,inst_16987__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16990 = cljs.core.get.call(null,inst_16987__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17037__$1 = (function (){var statearr_17052 = state_17037;
(statearr_17052[(13)] = inst_16989);

(statearr_17052[(11)] = inst_16988);

(statearr_17052[(12)] = inst_16987__$1);

return statearr_17052;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17037__$1,(22),inst_16990);
} else {
if((state_val_17038 === (31))){
var inst_17019 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
if(cljs.core.truth_(inst_17019)){
var statearr_17053_17109 = state_17037__$1;
(statearr_17053_17109[(1)] = (32));

} else {
var statearr_17054_17110 = state_17037__$1;
(statearr_17054_17110[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (32))){
var inst_16996 = (state_17037[(14)]);
var state_17037__$1 = state_17037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17037__$1,(35),out,inst_16996);
} else {
if((state_val_17038 === (33))){
var inst_16987 = (state_17037[(12)]);
var inst_16964 = inst_16987;
var state_17037__$1 = (function (){var statearr_17055 = state_17037;
(statearr_17055[(7)] = inst_16964);

return statearr_17055;
})();
var statearr_17056_17111 = state_17037__$1;
(statearr_17056_17111[(2)] = null);

(statearr_17056_17111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (13))){
var inst_16964 = (state_17037[(7)]);
var inst_16971 = inst_16964.cljs$lang$protocol_mask$partition0$;
var inst_16972 = (inst_16971 & (64));
var inst_16973 = inst_16964.cljs$core$ISeq$;
var inst_16974 = (cljs.core.PROTOCOL_SENTINEL === inst_16973);
var inst_16975 = ((inst_16972) || (inst_16974));
var state_17037__$1 = state_17037;
if(cljs.core.truth_(inst_16975)){
var statearr_17057_17112 = state_17037__$1;
(statearr_17057_17112[(1)] = (16));

} else {
var statearr_17058_17113 = state_17037__$1;
(statearr_17058_17113[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (22))){
var inst_16996 = (state_17037[(14)]);
var inst_16997 = (state_17037[(10)]);
var inst_16995 = (state_17037[(2)]);
var inst_16996__$1 = cljs.core.nth.call(null,inst_16995,(0),null);
var inst_16997__$1 = cljs.core.nth.call(null,inst_16995,(1),null);
var inst_16998 = (inst_16996__$1 == null);
var inst_16999 = cljs.core._EQ_.call(null,inst_16997__$1,change);
var inst_17000 = ((inst_16998) || (inst_16999));
var state_17037__$1 = (function (){var statearr_17059 = state_17037;
(statearr_17059[(14)] = inst_16996__$1);

(statearr_17059[(10)] = inst_16997__$1);

return statearr_17059;
})();
if(cljs.core.truth_(inst_17000)){
var statearr_17060_17114 = state_17037__$1;
(statearr_17060_17114[(1)] = (23));

} else {
var statearr_17061_17115 = state_17037__$1;
(statearr_17061_17115[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (36))){
var inst_16987 = (state_17037[(12)]);
var inst_16964 = inst_16987;
var state_17037__$1 = (function (){var statearr_17062 = state_17037;
(statearr_17062[(7)] = inst_16964);

return statearr_17062;
})();
var statearr_17063_17116 = state_17037__$1;
(statearr_17063_17116[(2)] = null);

(statearr_17063_17116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (29))){
var inst_17011 = (state_17037[(9)]);
var state_17037__$1 = state_17037;
var statearr_17064_17117 = state_17037__$1;
(statearr_17064_17117[(2)] = inst_17011);

(statearr_17064_17117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (6))){
var state_17037__$1 = state_17037;
var statearr_17065_17118 = state_17037__$1;
(statearr_17065_17118[(2)] = false);

(statearr_17065_17118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (28))){
var inst_17007 = (state_17037[(2)]);
var inst_17008 = calc_state.call(null);
var inst_16964 = inst_17008;
var state_17037__$1 = (function (){var statearr_17066 = state_17037;
(statearr_17066[(15)] = inst_17007);

(statearr_17066[(7)] = inst_16964);

return statearr_17066;
})();
var statearr_17067_17119 = state_17037__$1;
(statearr_17067_17119[(2)] = null);

(statearr_17067_17119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (25))){
var inst_17033 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
var statearr_17068_17120 = state_17037__$1;
(statearr_17068_17120[(2)] = inst_17033);

(statearr_17068_17120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (34))){
var inst_17031 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
var statearr_17069_17121 = state_17037__$1;
(statearr_17069_17121[(2)] = inst_17031);

(statearr_17069_17121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (17))){
var state_17037__$1 = state_17037;
var statearr_17070_17122 = state_17037__$1;
(statearr_17070_17122[(2)] = false);

(statearr_17070_17122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (3))){
var state_17037__$1 = state_17037;
var statearr_17071_17123 = state_17037__$1;
(statearr_17071_17123[(2)] = false);

(statearr_17071_17123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (12))){
var inst_17035 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17037__$1,inst_17035);
} else {
if((state_val_17038 === (2))){
var inst_16939 = (state_17037[(8)]);
var inst_16944 = inst_16939.cljs$lang$protocol_mask$partition0$;
var inst_16945 = (inst_16944 & (64));
var inst_16946 = inst_16939.cljs$core$ISeq$;
var inst_16947 = (cljs.core.PROTOCOL_SENTINEL === inst_16946);
var inst_16948 = ((inst_16945) || (inst_16947));
var state_17037__$1 = state_17037;
if(cljs.core.truth_(inst_16948)){
var statearr_17072_17124 = state_17037__$1;
(statearr_17072_17124[(1)] = (5));

} else {
var statearr_17073_17125 = state_17037__$1;
(statearr_17073_17125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (23))){
var inst_16996 = (state_17037[(14)]);
var inst_17002 = (inst_16996 == null);
var state_17037__$1 = state_17037;
if(cljs.core.truth_(inst_17002)){
var statearr_17074_17126 = state_17037__$1;
(statearr_17074_17126[(1)] = (26));

} else {
var statearr_17075_17127 = state_17037__$1;
(statearr_17075_17127[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (35))){
var inst_17022 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
if(cljs.core.truth_(inst_17022)){
var statearr_17076_17128 = state_17037__$1;
(statearr_17076_17128[(1)] = (36));

} else {
var statearr_17077_17129 = state_17037__$1;
(statearr_17077_17129[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (19))){
var inst_16964 = (state_17037[(7)]);
var inst_16984 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16964);
var state_17037__$1 = state_17037;
var statearr_17078_17130 = state_17037__$1;
(statearr_17078_17130[(2)] = inst_16984);

(statearr_17078_17130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (11))){
var inst_16964 = (state_17037[(7)]);
var inst_16968 = (inst_16964 == null);
var inst_16969 = cljs.core.not.call(null,inst_16968);
var state_17037__$1 = state_17037;
if(inst_16969){
var statearr_17079_17131 = state_17037__$1;
(statearr_17079_17131[(1)] = (13));

} else {
var statearr_17080_17132 = state_17037__$1;
(statearr_17080_17132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (9))){
var inst_16939 = (state_17037[(8)]);
var state_17037__$1 = state_17037;
var statearr_17081_17133 = state_17037__$1;
(statearr_17081_17133[(2)] = inst_16939);

(statearr_17081_17133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (5))){
var state_17037__$1 = state_17037;
var statearr_17082_17134 = state_17037__$1;
(statearr_17082_17134[(2)] = true);

(statearr_17082_17134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (14))){
var state_17037__$1 = state_17037;
var statearr_17083_17135 = state_17037__$1;
(statearr_17083_17135[(2)] = false);

(statearr_17083_17135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (26))){
var inst_16997 = (state_17037[(10)]);
var inst_17004 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16997);
var state_17037__$1 = state_17037;
var statearr_17084_17136 = state_17037__$1;
(statearr_17084_17136[(2)] = inst_17004);

(statearr_17084_17136[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (16))){
var state_17037__$1 = state_17037;
var statearr_17085_17137 = state_17037__$1;
(statearr_17085_17137[(2)] = true);

(statearr_17085_17137[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (38))){
var inst_17027 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
var statearr_17086_17138 = state_17037__$1;
(statearr_17086_17138[(2)] = inst_17027);

(statearr_17086_17138[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (30))){
var inst_16989 = (state_17037[(13)]);
var inst_16997 = (state_17037[(10)]);
var inst_16988 = (state_17037[(11)]);
var inst_17014 = cljs.core.empty_QMARK_.call(null,inst_16988);
var inst_17015 = inst_16989.call(null,inst_16997);
var inst_17016 = cljs.core.not.call(null,inst_17015);
var inst_17017 = ((inst_17014) && (inst_17016));
var state_17037__$1 = state_17037;
var statearr_17087_17139 = state_17037__$1;
(statearr_17087_17139[(2)] = inst_17017);

(statearr_17087_17139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (10))){
var inst_16939 = (state_17037[(8)]);
var inst_16960 = (state_17037[(2)]);
var inst_16961 = cljs.core.get.call(null,inst_16960,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16962 = cljs.core.get.call(null,inst_16960,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16963 = cljs.core.get.call(null,inst_16960,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16964 = inst_16939;
var state_17037__$1 = (function (){var statearr_17088 = state_17037;
(statearr_17088[(16)] = inst_16961);

(statearr_17088[(17)] = inst_16963);

(statearr_17088[(18)] = inst_16962);

(statearr_17088[(7)] = inst_16964);

return statearr_17088;
})();
var statearr_17089_17140 = state_17037__$1;
(statearr_17089_17140[(2)] = null);

(statearr_17089_17140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (18))){
var inst_16979 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
var statearr_17090_17141 = state_17037__$1;
(statearr_17090_17141[(2)] = inst_16979);

(statearr_17090_17141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (37))){
var state_17037__$1 = state_17037;
var statearr_17091_17142 = state_17037__$1;
(statearr_17091_17142[(2)] = null);

(statearr_17091_17142[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (8))){
var inst_16939 = (state_17037[(8)]);
var inst_16957 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16939);
var state_17037__$1 = state_17037;
var statearr_17092_17143 = state_17037__$1;
(statearr_17092_17143[(2)] = inst_16957);

(statearr_17092_17143[(1)] = (10));


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
});})(c__16038__auto___17097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15943__auto__,c__16038__auto___17097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15944__auto__ = null;
var cljs$core$async$mix_$_state_machine__15944__auto____0 = (function (){
var statearr_17093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17093[(0)] = cljs$core$async$mix_$_state_machine__15944__auto__);

(statearr_17093[(1)] = (1));

return statearr_17093;
});
var cljs$core$async$mix_$_state_machine__15944__auto____1 = (function (state_17037){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_17037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e17094){if((e17094 instanceof Object)){
var ex__15947__auto__ = e17094;
var statearr_17095_17144 = state_17037;
(statearr_17095_17144[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17145 = state_17037;
state_17037 = G__17145;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15944__auto__ = function(state_17037){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15944__auto____1.call(this,state_17037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15944__auto____0;
cljs$core$async$mix_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15944__auto____1;
return cljs$core$async$mix_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___17097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16040__auto__ = (function (){var statearr_17096 = f__16039__auto__.call(null);
(statearr_17096[(6)] = c__16038__auto___17097);

return statearr_17096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___17097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17147 = arguments.length;
switch (G__17147) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__17151 = arguments.length;
switch (G__17151) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__17149_SHARP_){
if(cljs.core.truth_(p1__17149_SHARP_.call(null,topic))){
return p1__17149_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17149_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17152 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17153){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17153 = meta17153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17154,meta17153__$1){
var self__ = this;
var _17154__$1 = this;
return (new cljs.core.async.t_cljs$core$async17152(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17153__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17154){
var self__ = this;
var _17154__$1 = this;
return self__.meta17153;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17152.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17152.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17152.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17152.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17152.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17153","meta17153",1692550855,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17152";

cljs.core.async.t_cljs$core$async17152.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17152");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17152.
 */
cljs.core.async.__GT_t_cljs$core$async17152 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17152(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17153){
return (new cljs.core.async.t_cljs$core$async17152(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17153));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17152(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16038__auto___17272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___17272,mults,ensure_mult,p){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___17272,mults,ensure_mult,p){
return (function (state_17226){
var state_val_17227 = (state_17226[(1)]);
if((state_val_17227 === (7))){
var inst_17222 = (state_17226[(2)]);
var state_17226__$1 = state_17226;
var statearr_17228_17273 = state_17226__$1;
(statearr_17228_17273[(2)] = inst_17222);

(statearr_17228_17273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (20))){
var state_17226__$1 = state_17226;
var statearr_17229_17274 = state_17226__$1;
(statearr_17229_17274[(2)] = null);

(statearr_17229_17274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (1))){
var state_17226__$1 = state_17226;
var statearr_17230_17275 = state_17226__$1;
(statearr_17230_17275[(2)] = null);

(statearr_17230_17275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (24))){
var inst_17205 = (state_17226[(7)]);
var inst_17214 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17205);
var state_17226__$1 = state_17226;
var statearr_17231_17276 = state_17226__$1;
(statearr_17231_17276[(2)] = inst_17214);

(statearr_17231_17276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (4))){
var inst_17157 = (state_17226[(8)]);
var inst_17157__$1 = (state_17226[(2)]);
var inst_17158 = (inst_17157__$1 == null);
var state_17226__$1 = (function (){var statearr_17232 = state_17226;
(statearr_17232[(8)] = inst_17157__$1);

return statearr_17232;
})();
if(cljs.core.truth_(inst_17158)){
var statearr_17233_17277 = state_17226__$1;
(statearr_17233_17277[(1)] = (5));

} else {
var statearr_17234_17278 = state_17226__$1;
(statearr_17234_17278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (15))){
var inst_17199 = (state_17226[(2)]);
var state_17226__$1 = state_17226;
var statearr_17235_17279 = state_17226__$1;
(statearr_17235_17279[(2)] = inst_17199);

(statearr_17235_17279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (21))){
var inst_17219 = (state_17226[(2)]);
var state_17226__$1 = (function (){var statearr_17236 = state_17226;
(statearr_17236[(9)] = inst_17219);

return statearr_17236;
})();
var statearr_17237_17280 = state_17226__$1;
(statearr_17237_17280[(2)] = null);

(statearr_17237_17280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (13))){
var inst_17181 = (state_17226[(10)]);
var inst_17183 = cljs.core.chunked_seq_QMARK_.call(null,inst_17181);
var state_17226__$1 = state_17226;
if(inst_17183){
var statearr_17238_17281 = state_17226__$1;
(statearr_17238_17281[(1)] = (16));

} else {
var statearr_17239_17282 = state_17226__$1;
(statearr_17239_17282[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (22))){
var inst_17211 = (state_17226[(2)]);
var state_17226__$1 = state_17226;
if(cljs.core.truth_(inst_17211)){
var statearr_17240_17283 = state_17226__$1;
(statearr_17240_17283[(1)] = (23));

} else {
var statearr_17241_17284 = state_17226__$1;
(statearr_17241_17284[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (6))){
var inst_17157 = (state_17226[(8)]);
var inst_17207 = (state_17226[(11)]);
var inst_17205 = (state_17226[(7)]);
var inst_17205__$1 = topic_fn.call(null,inst_17157);
var inst_17206 = cljs.core.deref.call(null,mults);
var inst_17207__$1 = cljs.core.get.call(null,inst_17206,inst_17205__$1);
var state_17226__$1 = (function (){var statearr_17242 = state_17226;
(statearr_17242[(11)] = inst_17207__$1);

(statearr_17242[(7)] = inst_17205__$1);

return statearr_17242;
})();
if(cljs.core.truth_(inst_17207__$1)){
var statearr_17243_17285 = state_17226__$1;
(statearr_17243_17285[(1)] = (19));

} else {
var statearr_17244_17286 = state_17226__$1;
(statearr_17244_17286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (25))){
var inst_17216 = (state_17226[(2)]);
var state_17226__$1 = state_17226;
var statearr_17245_17287 = state_17226__$1;
(statearr_17245_17287[(2)] = inst_17216);

(statearr_17245_17287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (17))){
var inst_17181 = (state_17226[(10)]);
var inst_17190 = cljs.core.first.call(null,inst_17181);
var inst_17191 = cljs.core.async.muxch_STAR_.call(null,inst_17190);
var inst_17192 = cljs.core.async.close_BANG_.call(null,inst_17191);
var inst_17193 = cljs.core.next.call(null,inst_17181);
var inst_17167 = inst_17193;
var inst_17168 = null;
var inst_17169 = (0);
var inst_17170 = (0);
var state_17226__$1 = (function (){var statearr_17246 = state_17226;
(statearr_17246[(12)] = inst_17169);

(statearr_17246[(13)] = inst_17192);

(statearr_17246[(14)] = inst_17170);

(statearr_17246[(15)] = inst_17167);

(statearr_17246[(16)] = inst_17168);

return statearr_17246;
})();
var statearr_17247_17288 = state_17226__$1;
(statearr_17247_17288[(2)] = null);

(statearr_17247_17288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (3))){
var inst_17224 = (state_17226[(2)]);
var state_17226__$1 = state_17226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17226__$1,inst_17224);
} else {
if((state_val_17227 === (12))){
var inst_17201 = (state_17226[(2)]);
var state_17226__$1 = state_17226;
var statearr_17248_17289 = state_17226__$1;
(statearr_17248_17289[(2)] = inst_17201);

(statearr_17248_17289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (2))){
var state_17226__$1 = state_17226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17226__$1,(4),ch);
} else {
if((state_val_17227 === (23))){
var state_17226__$1 = state_17226;
var statearr_17249_17290 = state_17226__$1;
(statearr_17249_17290[(2)] = null);

(statearr_17249_17290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (19))){
var inst_17157 = (state_17226[(8)]);
var inst_17207 = (state_17226[(11)]);
var inst_17209 = cljs.core.async.muxch_STAR_.call(null,inst_17207);
var state_17226__$1 = state_17226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17226__$1,(22),inst_17209,inst_17157);
} else {
if((state_val_17227 === (11))){
var inst_17181 = (state_17226[(10)]);
var inst_17167 = (state_17226[(15)]);
var inst_17181__$1 = cljs.core.seq.call(null,inst_17167);
var state_17226__$1 = (function (){var statearr_17250 = state_17226;
(statearr_17250[(10)] = inst_17181__$1);

return statearr_17250;
})();
if(inst_17181__$1){
var statearr_17251_17291 = state_17226__$1;
(statearr_17251_17291[(1)] = (13));

} else {
var statearr_17252_17292 = state_17226__$1;
(statearr_17252_17292[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (9))){
var inst_17203 = (state_17226[(2)]);
var state_17226__$1 = state_17226;
var statearr_17253_17293 = state_17226__$1;
(statearr_17253_17293[(2)] = inst_17203);

(statearr_17253_17293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (5))){
var inst_17164 = cljs.core.deref.call(null,mults);
var inst_17165 = cljs.core.vals.call(null,inst_17164);
var inst_17166 = cljs.core.seq.call(null,inst_17165);
var inst_17167 = inst_17166;
var inst_17168 = null;
var inst_17169 = (0);
var inst_17170 = (0);
var state_17226__$1 = (function (){var statearr_17254 = state_17226;
(statearr_17254[(12)] = inst_17169);

(statearr_17254[(14)] = inst_17170);

(statearr_17254[(15)] = inst_17167);

(statearr_17254[(16)] = inst_17168);

return statearr_17254;
})();
var statearr_17255_17294 = state_17226__$1;
(statearr_17255_17294[(2)] = null);

(statearr_17255_17294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (14))){
var state_17226__$1 = state_17226;
var statearr_17259_17295 = state_17226__$1;
(statearr_17259_17295[(2)] = null);

(statearr_17259_17295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (16))){
var inst_17181 = (state_17226[(10)]);
var inst_17185 = cljs.core.chunk_first.call(null,inst_17181);
var inst_17186 = cljs.core.chunk_rest.call(null,inst_17181);
var inst_17187 = cljs.core.count.call(null,inst_17185);
var inst_17167 = inst_17186;
var inst_17168 = inst_17185;
var inst_17169 = inst_17187;
var inst_17170 = (0);
var state_17226__$1 = (function (){var statearr_17260 = state_17226;
(statearr_17260[(12)] = inst_17169);

(statearr_17260[(14)] = inst_17170);

(statearr_17260[(15)] = inst_17167);

(statearr_17260[(16)] = inst_17168);

return statearr_17260;
})();
var statearr_17261_17296 = state_17226__$1;
(statearr_17261_17296[(2)] = null);

(statearr_17261_17296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (10))){
var inst_17169 = (state_17226[(12)]);
var inst_17170 = (state_17226[(14)]);
var inst_17167 = (state_17226[(15)]);
var inst_17168 = (state_17226[(16)]);
var inst_17175 = cljs.core._nth.call(null,inst_17168,inst_17170);
var inst_17176 = cljs.core.async.muxch_STAR_.call(null,inst_17175);
var inst_17177 = cljs.core.async.close_BANG_.call(null,inst_17176);
var inst_17178 = (inst_17170 + (1));
var tmp17256 = inst_17169;
var tmp17257 = inst_17167;
var tmp17258 = inst_17168;
var inst_17167__$1 = tmp17257;
var inst_17168__$1 = tmp17258;
var inst_17169__$1 = tmp17256;
var inst_17170__$1 = inst_17178;
var state_17226__$1 = (function (){var statearr_17262 = state_17226;
(statearr_17262[(12)] = inst_17169__$1);

(statearr_17262[(14)] = inst_17170__$1);

(statearr_17262[(17)] = inst_17177);

(statearr_17262[(15)] = inst_17167__$1);

(statearr_17262[(16)] = inst_17168__$1);

return statearr_17262;
})();
var statearr_17263_17297 = state_17226__$1;
(statearr_17263_17297[(2)] = null);

(statearr_17263_17297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (18))){
var inst_17196 = (state_17226[(2)]);
var state_17226__$1 = state_17226;
var statearr_17264_17298 = state_17226__$1;
(statearr_17264_17298[(2)] = inst_17196);

(statearr_17264_17298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (8))){
var inst_17169 = (state_17226[(12)]);
var inst_17170 = (state_17226[(14)]);
var inst_17172 = (inst_17170 < inst_17169);
var inst_17173 = inst_17172;
var state_17226__$1 = state_17226;
if(cljs.core.truth_(inst_17173)){
var statearr_17265_17299 = state_17226__$1;
(statearr_17265_17299[(1)] = (10));

} else {
var statearr_17266_17300 = state_17226__$1;
(statearr_17266_17300[(1)] = (11));

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
});})(c__16038__auto___17272,mults,ensure_mult,p))
;
return ((function (switch__15943__auto__,c__16038__auto___17272,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_17267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17267[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_17267[(1)] = (1));

return statearr_17267;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_17226){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_17226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e17268){if((e17268 instanceof Object)){
var ex__15947__auto__ = e17268;
var statearr_17269_17301 = state_17226;
(statearr_17269_17301[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17302 = state_17226;
state_17226 = G__17302;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_17226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_17226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___17272,mults,ensure_mult,p))
})();
var state__16040__auto__ = (function (){var statearr_17270 = f__16039__auto__.call(null);
(statearr_17270[(6)] = c__16038__auto___17272);

return statearr_17270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___17272,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17304 = arguments.length;
switch (G__17304) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17307 = arguments.length;
switch (G__17307) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__17310 = arguments.length;
switch (G__17310) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__16038__auto___17377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___17377,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___17377,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17349){
var state_val_17350 = (state_17349[(1)]);
if((state_val_17350 === (7))){
var state_17349__$1 = state_17349;
var statearr_17351_17378 = state_17349__$1;
(statearr_17351_17378[(2)] = null);

(statearr_17351_17378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (1))){
var state_17349__$1 = state_17349;
var statearr_17352_17379 = state_17349__$1;
(statearr_17352_17379[(2)] = null);

(statearr_17352_17379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (4))){
var inst_17313 = (state_17349[(7)]);
var inst_17315 = (inst_17313 < cnt);
var state_17349__$1 = state_17349;
if(cljs.core.truth_(inst_17315)){
var statearr_17353_17380 = state_17349__$1;
(statearr_17353_17380[(1)] = (6));

} else {
var statearr_17354_17381 = state_17349__$1;
(statearr_17354_17381[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (15))){
var inst_17345 = (state_17349[(2)]);
var state_17349__$1 = state_17349;
var statearr_17355_17382 = state_17349__$1;
(statearr_17355_17382[(2)] = inst_17345);

(statearr_17355_17382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (13))){
var inst_17338 = cljs.core.async.close_BANG_.call(null,out);
var state_17349__$1 = state_17349;
var statearr_17356_17383 = state_17349__$1;
(statearr_17356_17383[(2)] = inst_17338);

(statearr_17356_17383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (6))){
var state_17349__$1 = state_17349;
var statearr_17357_17384 = state_17349__$1;
(statearr_17357_17384[(2)] = null);

(statearr_17357_17384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (3))){
var inst_17347 = (state_17349[(2)]);
var state_17349__$1 = state_17349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17349__$1,inst_17347);
} else {
if((state_val_17350 === (12))){
var inst_17335 = (state_17349[(8)]);
var inst_17335__$1 = (state_17349[(2)]);
var inst_17336 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17335__$1);
var state_17349__$1 = (function (){var statearr_17358 = state_17349;
(statearr_17358[(8)] = inst_17335__$1);

return statearr_17358;
})();
if(cljs.core.truth_(inst_17336)){
var statearr_17359_17385 = state_17349__$1;
(statearr_17359_17385[(1)] = (13));

} else {
var statearr_17360_17386 = state_17349__$1;
(statearr_17360_17386[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (2))){
var inst_17312 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17313 = (0);
var state_17349__$1 = (function (){var statearr_17361 = state_17349;
(statearr_17361[(9)] = inst_17312);

(statearr_17361[(7)] = inst_17313);

return statearr_17361;
})();
var statearr_17362_17387 = state_17349__$1;
(statearr_17362_17387[(2)] = null);

(statearr_17362_17387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (11))){
var inst_17313 = (state_17349[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17349,(10),Object,null,(9));
var inst_17322 = chs__$1.call(null,inst_17313);
var inst_17323 = done.call(null,inst_17313);
var inst_17324 = cljs.core.async.take_BANG_.call(null,inst_17322,inst_17323);
var state_17349__$1 = state_17349;
var statearr_17363_17388 = state_17349__$1;
(statearr_17363_17388[(2)] = inst_17324);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (9))){
var inst_17313 = (state_17349[(7)]);
var inst_17326 = (state_17349[(2)]);
var inst_17327 = (inst_17313 + (1));
var inst_17313__$1 = inst_17327;
var state_17349__$1 = (function (){var statearr_17364 = state_17349;
(statearr_17364[(10)] = inst_17326);

(statearr_17364[(7)] = inst_17313__$1);

return statearr_17364;
})();
var statearr_17365_17389 = state_17349__$1;
(statearr_17365_17389[(2)] = null);

(statearr_17365_17389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (5))){
var inst_17333 = (state_17349[(2)]);
var state_17349__$1 = (function (){var statearr_17366 = state_17349;
(statearr_17366[(11)] = inst_17333);

return statearr_17366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17349__$1,(12),dchan);
} else {
if((state_val_17350 === (14))){
var inst_17335 = (state_17349[(8)]);
var inst_17340 = cljs.core.apply.call(null,f,inst_17335);
var state_17349__$1 = state_17349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17349__$1,(16),out,inst_17340);
} else {
if((state_val_17350 === (16))){
var inst_17342 = (state_17349[(2)]);
var state_17349__$1 = (function (){var statearr_17367 = state_17349;
(statearr_17367[(12)] = inst_17342);

return statearr_17367;
})();
var statearr_17368_17390 = state_17349__$1;
(statearr_17368_17390[(2)] = null);

(statearr_17368_17390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (10))){
var inst_17317 = (state_17349[(2)]);
var inst_17318 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17349__$1 = (function (){var statearr_17369 = state_17349;
(statearr_17369[(13)] = inst_17317);

return statearr_17369;
})();
var statearr_17370_17391 = state_17349__$1;
(statearr_17370_17391[(2)] = inst_17318);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (8))){
var inst_17331 = (state_17349[(2)]);
var state_17349__$1 = state_17349;
var statearr_17371_17392 = state_17349__$1;
(statearr_17371_17392[(2)] = inst_17331);

(statearr_17371_17392[(1)] = (5));


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
});})(c__16038__auto___17377,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15943__auto__,c__16038__auto___17377,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_17372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17372[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_17372[(1)] = (1));

return statearr_17372;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_17349){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_17349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e17373){if((e17373 instanceof Object)){
var ex__15947__auto__ = e17373;
var statearr_17374_17393 = state_17349;
(statearr_17374_17393[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17394 = state_17349;
state_17349 = G__17394;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_17349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_17349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___17377,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16040__auto__ = (function (){var statearr_17375 = f__16039__auto__.call(null);
(statearr_17375[(6)] = c__16038__auto___17377);

return statearr_17375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___17377,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17397 = arguments.length;
switch (G__17397) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16038__auto___17451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___17451,out){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___17451,out){
return (function (state_17429){
var state_val_17430 = (state_17429[(1)]);
if((state_val_17430 === (7))){
var inst_17408 = (state_17429[(7)]);
var inst_17409 = (state_17429[(8)]);
var inst_17408__$1 = (state_17429[(2)]);
var inst_17409__$1 = cljs.core.nth.call(null,inst_17408__$1,(0),null);
var inst_17410 = cljs.core.nth.call(null,inst_17408__$1,(1),null);
var inst_17411 = (inst_17409__$1 == null);
var state_17429__$1 = (function (){var statearr_17431 = state_17429;
(statearr_17431[(7)] = inst_17408__$1);

(statearr_17431[(9)] = inst_17410);

(statearr_17431[(8)] = inst_17409__$1);

return statearr_17431;
})();
if(cljs.core.truth_(inst_17411)){
var statearr_17432_17452 = state_17429__$1;
(statearr_17432_17452[(1)] = (8));

} else {
var statearr_17433_17453 = state_17429__$1;
(statearr_17433_17453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (1))){
var inst_17398 = cljs.core.vec.call(null,chs);
var inst_17399 = inst_17398;
var state_17429__$1 = (function (){var statearr_17434 = state_17429;
(statearr_17434[(10)] = inst_17399);

return statearr_17434;
})();
var statearr_17435_17454 = state_17429__$1;
(statearr_17435_17454[(2)] = null);

(statearr_17435_17454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (4))){
var inst_17399 = (state_17429[(10)]);
var state_17429__$1 = state_17429;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17429__$1,(7),inst_17399);
} else {
if((state_val_17430 === (6))){
var inst_17425 = (state_17429[(2)]);
var state_17429__$1 = state_17429;
var statearr_17436_17455 = state_17429__$1;
(statearr_17436_17455[(2)] = inst_17425);

(statearr_17436_17455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (3))){
var inst_17427 = (state_17429[(2)]);
var state_17429__$1 = state_17429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17429__$1,inst_17427);
} else {
if((state_val_17430 === (2))){
var inst_17399 = (state_17429[(10)]);
var inst_17401 = cljs.core.count.call(null,inst_17399);
var inst_17402 = (inst_17401 > (0));
var state_17429__$1 = state_17429;
if(cljs.core.truth_(inst_17402)){
var statearr_17438_17456 = state_17429__$1;
(statearr_17438_17456[(1)] = (4));

} else {
var statearr_17439_17457 = state_17429__$1;
(statearr_17439_17457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (11))){
var inst_17399 = (state_17429[(10)]);
var inst_17418 = (state_17429[(2)]);
var tmp17437 = inst_17399;
var inst_17399__$1 = tmp17437;
var state_17429__$1 = (function (){var statearr_17440 = state_17429;
(statearr_17440[(11)] = inst_17418);

(statearr_17440[(10)] = inst_17399__$1);

return statearr_17440;
})();
var statearr_17441_17458 = state_17429__$1;
(statearr_17441_17458[(2)] = null);

(statearr_17441_17458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (9))){
var inst_17409 = (state_17429[(8)]);
var state_17429__$1 = state_17429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17429__$1,(11),out,inst_17409);
} else {
if((state_val_17430 === (5))){
var inst_17423 = cljs.core.async.close_BANG_.call(null,out);
var state_17429__$1 = state_17429;
var statearr_17442_17459 = state_17429__$1;
(statearr_17442_17459[(2)] = inst_17423);

(statearr_17442_17459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (10))){
var inst_17421 = (state_17429[(2)]);
var state_17429__$1 = state_17429;
var statearr_17443_17460 = state_17429__$1;
(statearr_17443_17460[(2)] = inst_17421);

(statearr_17443_17460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (8))){
var inst_17408 = (state_17429[(7)]);
var inst_17410 = (state_17429[(9)]);
var inst_17409 = (state_17429[(8)]);
var inst_17399 = (state_17429[(10)]);
var inst_17413 = (function (){var cs = inst_17399;
var vec__17404 = inst_17408;
var v = inst_17409;
var c = inst_17410;
return ((function (cs,vec__17404,v,c,inst_17408,inst_17410,inst_17409,inst_17399,state_val_17430,c__16038__auto___17451,out){
return (function (p1__17395_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17395_SHARP_);
});
;})(cs,vec__17404,v,c,inst_17408,inst_17410,inst_17409,inst_17399,state_val_17430,c__16038__auto___17451,out))
})();
var inst_17414 = cljs.core.filterv.call(null,inst_17413,inst_17399);
var inst_17399__$1 = inst_17414;
var state_17429__$1 = (function (){var statearr_17444 = state_17429;
(statearr_17444[(10)] = inst_17399__$1);

return statearr_17444;
})();
var statearr_17445_17461 = state_17429__$1;
(statearr_17445_17461[(2)] = null);

(statearr_17445_17461[(1)] = (2));


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
});})(c__16038__auto___17451,out))
;
return ((function (switch__15943__auto__,c__16038__auto___17451,out){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_17446 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17446[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_17446[(1)] = (1));

return statearr_17446;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_17429){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_17429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e17447){if((e17447 instanceof Object)){
var ex__15947__auto__ = e17447;
var statearr_17448_17462 = state_17429;
(statearr_17448_17462[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17463 = state_17429;
state_17429 = G__17463;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_17429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_17429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___17451,out))
})();
var state__16040__auto__ = (function (){var statearr_17449 = f__16039__auto__.call(null);
(statearr_17449[(6)] = c__16038__auto___17451);

return statearr_17449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___17451,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17465 = arguments.length;
switch (G__17465) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16038__auto___17510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___17510,out){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___17510,out){
return (function (state_17489){
var state_val_17490 = (state_17489[(1)]);
if((state_val_17490 === (7))){
var inst_17471 = (state_17489[(7)]);
var inst_17471__$1 = (state_17489[(2)]);
var inst_17472 = (inst_17471__$1 == null);
var inst_17473 = cljs.core.not.call(null,inst_17472);
var state_17489__$1 = (function (){var statearr_17491 = state_17489;
(statearr_17491[(7)] = inst_17471__$1);

return statearr_17491;
})();
if(inst_17473){
var statearr_17492_17511 = state_17489__$1;
(statearr_17492_17511[(1)] = (8));

} else {
var statearr_17493_17512 = state_17489__$1;
(statearr_17493_17512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17490 === (1))){
var inst_17466 = (0);
var state_17489__$1 = (function (){var statearr_17494 = state_17489;
(statearr_17494[(8)] = inst_17466);

return statearr_17494;
})();
var statearr_17495_17513 = state_17489__$1;
(statearr_17495_17513[(2)] = null);

(statearr_17495_17513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17490 === (4))){
var state_17489__$1 = state_17489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17489__$1,(7),ch);
} else {
if((state_val_17490 === (6))){
var inst_17484 = (state_17489[(2)]);
var state_17489__$1 = state_17489;
var statearr_17496_17514 = state_17489__$1;
(statearr_17496_17514[(2)] = inst_17484);

(statearr_17496_17514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17490 === (3))){
var inst_17486 = (state_17489[(2)]);
var inst_17487 = cljs.core.async.close_BANG_.call(null,out);
var state_17489__$1 = (function (){var statearr_17497 = state_17489;
(statearr_17497[(9)] = inst_17486);

return statearr_17497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17489__$1,inst_17487);
} else {
if((state_val_17490 === (2))){
var inst_17466 = (state_17489[(8)]);
var inst_17468 = (inst_17466 < n);
var state_17489__$1 = state_17489;
if(cljs.core.truth_(inst_17468)){
var statearr_17498_17515 = state_17489__$1;
(statearr_17498_17515[(1)] = (4));

} else {
var statearr_17499_17516 = state_17489__$1;
(statearr_17499_17516[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17490 === (11))){
var inst_17466 = (state_17489[(8)]);
var inst_17476 = (state_17489[(2)]);
var inst_17477 = (inst_17466 + (1));
var inst_17466__$1 = inst_17477;
var state_17489__$1 = (function (){var statearr_17500 = state_17489;
(statearr_17500[(8)] = inst_17466__$1);

(statearr_17500[(10)] = inst_17476);

return statearr_17500;
})();
var statearr_17501_17517 = state_17489__$1;
(statearr_17501_17517[(2)] = null);

(statearr_17501_17517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17490 === (9))){
var state_17489__$1 = state_17489;
var statearr_17502_17518 = state_17489__$1;
(statearr_17502_17518[(2)] = null);

(statearr_17502_17518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17490 === (5))){
var state_17489__$1 = state_17489;
var statearr_17503_17519 = state_17489__$1;
(statearr_17503_17519[(2)] = null);

(statearr_17503_17519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17490 === (10))){
var inst_17481 = (state_17489[(2)]);
var state_17489__$1 = state_17489;
var statearr_17504_17520 = state_17489__$1;
(statearr_17504_17520[(2)] = inst_17481);

(statearr_17504_17520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17490 === (8))){
var inst_17471 = (state_17489[(7)]);
var state_17489__$1 = state_17489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17489__$1,(11),out,inst_17471);
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
});})(c__16038__auto___17510,out))
;
return ((function (switch__15943__auto__,c__16038__auto___17510,out){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_17505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17505[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_17505[(1)] = (1));

return statearr_17505;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_17489){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_17489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e17506){if((e17506 instanceof Object)){
var ex__15947__auto__ = e17506;
var statearr_17507_17521 = state_17489;
(statearr_17507_17521[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17522 = state_17489;
state_17489 = G__17522;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_17489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_17489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___17510,out))
})();
var state__16040__auto__ = (function (){var statearr_17508 = f__16039__auto__.call(null);
(statearr_17508[(6)] = c__16038__auto___17510);

return statearr_17508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___17510,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17524 = (function (f,ch,meta17525){
this.f = f;
this.ch = ch;
this.meta17525 = meta17525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17526,meta17525__$1){
var self__ = this;
var _17526__$1 = this;
return (new cljs.core.async.t_cljs$core$async17524(self__.f,self__.ch,meta17525__$1));
});

cljs.core.async.t_cljs$core$async17524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17526){
var self__ = this;
var _17526__$1 = this;
return self__.meta17525;
});

cljs.core.async.t_cljs$core$async17524.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17524.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17524.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17527 = (function (f,ch,meta17525,_,fn1,meta17528){
this.f = f;
this.ch = ch;
this.meta17525 = meta17525;
this._ = _;
this.fn1 = fn1;
this.meta17528 = meta17528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17529,meta17528__$1){
var self__ = this;
var _17529__$1 = this;
return (new cljs.core.async.t_cljs$core$async17527(self__.f,self__.ch,self__.meta17525,self__._,self__.fn1,meta17528__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17529){
var self__ = this;
var _17529__$1 = this;
return self__.meta17528;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17527.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17523_SHARP_){
return f1.call(null,(((p1__17523_SHARP_ == null))?null:self__.f.call(null,p1__17523_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17527.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17525","meta17525",-1334078658,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17524","cljs.core.async/t_cljs$core$async17524",-634377413,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17528","meta17528",940757675,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17527";

cljs.core.async.t_cljs$core$async17527.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17527");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17527.
 */
cljs.core.async.__GT_t_cljs$core$async17527 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17527(f__$1,ch__$1,meta17525__$1,___$2,fn1__$1,meta17528){
return (new cljs.core.async.t_cljs$core$async17527(f__$1,ch__$1,meta17525__$1,___$2,fn1__$1,meta17528));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17527(self__.f,self__.ch,self__.meta17525,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17524.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17525","meta17525",-1334078658,null)], null);
});

cljs.core.async.t_cljs$core$async17524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17524";

cljs.core.async.t_cljs$core$async17524.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17524");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17524.
 */
cljs.core.async.__GT_t_cljs$core$async17524 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17524(f__$1,ch__$1,meta17525){
return (new cljs.core.async.t_cljs$core$async17524(f__$1,ch__$1,meta17525));
});

}

return (new cljs.core.async.t_cljs$core$async17524(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17530 = (function (f,ch,meta17531){
this.f = f;
this.ch = ch;
this.meta17531 = meta17531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17532,meta17531__$1){
var self__ = this;
var _17532__$1 = this;
return (new cljs.core.async.t_cljs$core$async17530(self__.f,self__.ch,meta17531__$1));
});

cljs.core.async.t_cljs$core$async17530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17532){
var self__ = this;
var _17532__$1 = this;
return self__.meta17531;
});

cljs.core.async.t_cljs$core$async17530.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17530.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17530.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17531","meta17531",-149721385,null)], null);
});

cljs.core.async.t_cljs$core$async17530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17530";

cljs.core.async.t_cljs$core$async17530.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17530");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17530.
 */
cljs.core.async.__GT_t_cljs$core$async17530 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17530(f__$1,ch__$1,meta17531){
return (new cljs.core.async.t_cljs$core$async17530(f__$1,ch__$1,meta17531));
});

}

return (new cljs.core.async.t_cljs$core$async17530(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17533 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17533 = (function (p,ch,meta17534){
this.p = p;
this.ch = ch;
this.meta17534 = meta17534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17535,meta17534__$1){
var self__ = this;
var _17535__$1 = this;
return (new cljs.core.async.t_cljs$core$async17533(self__.p,self__.ch,meta17534__$1));
});

cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17535){
var self__ = this;
var _17535__$1 = this;
return self__.meta17534;
});

cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17534","meta17534",-1469358796,null)], null);
});

cljs.core.async.t_cljs$core$async17533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17533";

cljs.core.async.t_cljs$core$async17533.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17533");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17533.
 */
cljs.core.async.__GT_t_cljs$core$async17533 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17533(p__$1,ch__$1,meta17534){
return (new cljs.core.async.t_cljs$core$async17533(p__$1,ch__$1,meta17534));
});

}

return (new cljs.core.async.t_cljs$core$async17533(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17537 = arguments.length;
switch (G__17537) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16038__auto___17577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___17577,out){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___17577,out){
return (function (state_17558){
var state_val_17559 = (state_17558[(1)]);
if((state_val_17559 === (7))){
var inst_17554 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
var statearr_17560_17578 = state_17558__$1;
(statearr_17560_17578[(2)] = inst_17554);

(statearr_17560_17578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (1))){
var state_17558__$1 = state_17558;
var statearr_17561_17579 = state_17558__$1;
(statearr_17561_17579[(2)] = null);

(statearr_17561_17579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (4))){
var inst_17540 = (state_17558[(7)]);
var inst_17540__$1 = (state_17558[(2)]);
var inst_17541 = (inst_17540__$1 == null);
var state_17558__$1 = (function (){var statearr_17562 = state_17558;
(statearr_17562[(7)] = inst_17540__$1);

return statearr_17562;
})();
if(cljs.core.truth_(inst_17541)){
var statearr_17563_17580 = state_17558__$1;
(statearr_17563_17580[(1)] = (5));

} else {
var statearr_17564_17581 = state_17558__$1;
(statearr_17564_17581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (6))){
var inst_17540 = (state_17558[(7)]);
var inst_17545 = p.call(null,inst_17540);
var state_17558__$1 = state_17558;
if(cljs.core.truth_(inst_17545)){
var statearr_17565_17582 = state_17558__$1;
(statearr_17565_17582[(1)] = (8));

} else {
var statearr_17566_17583 = state_17558__$1;
(statearr_17566_17583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (3))){
var inst_17556 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17558__$1,inst_17556);
} else {
if((state_val_17559 === (2))){
var state_17558__$1 = state_17558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17558__$1,(4),ch);
} else {
if((state_val_17559 === (11))){
var inst_17548 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
var statearr_17567_17584 = state_17558__$1;
(statearr_17567_17584[(2)] = inst_17548);

(statearr_17567_17584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (9))){
var state_17558__$1 = state_17558;
var statearr_17568_17585 = state_17558__$1;
(statearr_17568_17585[(2)] = null);

(statearr_17568_17585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (5))){
var inst_17543 = cljs.core.async.close_BANG_.call(null,out);
var state_17558__$1 = state_17558;
var statearr_17569_17586 = state_17558__$1;
(statearr_17569_17586[(2)] = inst_17543);

(statearr_17569_17586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (10))){
var inst_17551 = (state_17558[(2)]);
var state_17558__$1 = (function (){var statearr_17570 = state_17558;
(statearr_17570[(8)] = inst_17551);

return statearr_17570;
})();
var statearr_17571_17587 = state_17558__$1;
(statearr_17571_17587[(2)] = null);

(statearr_17571_17587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (8))){
var inst_17540 = (state_17558[(7)]);
var state_17558__$1 = state_17558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17558__$1,(11),out,inst_17540);
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
});})(c__16038__auto___17577,out))
;
return ((function (switch__15943__auto__,c__16038__auto___17577,out){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_17572 = [null,null,null,null,null,null,null,null,null];
(statearr_17572[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_17572[(1)] = (1));

return statearr_17572;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_17558){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_17558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e17573){if((e17573 instanceof Object)){
var ex__15947__auto__ = e17573;
var statearr_17574_17588 = state_17558;
(statearr_17574_17588[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17589 = state_17558;
state_17558 = G__17589;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_17558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_17558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___17577,out))
})();
var state__16040__auto__ = (function (){var statearr_17575 = f__16039__auto__.call(null);
(statearr_17575[(6)] = c__16038__auto___17577);

return statearr_17575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___17577,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17591 = arguments.length;
switch (G__17591) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_17654){
var state_val_17655 = (state_17654[(1)]);
if((state_val_17655 === (7))){
var inst_17650 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
var statearr_17656_17694 = state_17654__$1;
(statearr_17656_17694[(2)] = inst_17650);

(statearr_17656_17694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (20))){
var inst_17620 = (state_17654[(7)]);
var inst_17631 = (state_17654[(2)]);
var inst_17632 = cljs.core.next.call(null,inst_17620);
var inst_17606 = inst_17632;
var inst_17607 = null;
var inst_17608 = (0);
var inst_17609 = (0);
var state_17654__$1 = (function (){var statearr_17657 = state_17654;
(statearr_17657[(8)] = inst_17631);

(statearr_17657[(9)] = inst_17609);

(statearr_17657[(10)] = inst_17606);

(statearr_17657[(11)] = inst_17608);

(statearr_17657[(12)] = inst_17607);

return statearr_17657;
})();
var statearr_17658_17695 = state_17654__$1;
(statearr_17658_17695[(2)] = null);

(statearr_17658_17695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (1))){
var state_17654__$1 = state_17654;
var statearr_17659_17696 = state_17654__$1;
(statearr_17659_17696[(2)] = null);

(statearr_17659_17696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (4))){
var inst_17595 = (state_17654[(13)]);
var inst_17595__$1 = (state_17654[(2)]);
var inst_17596 = (inst_17595__$1 == null);
var state_17654__$1 = (function (){var statearr_17660 = state_17654;
(statearr_17660[(13)] = inst_17595__$1);

return statearr_17660;
})();
if(cljs.core.truth_(inst_17596)){
var statearr_17661_17697 = state_17654__$1;
(statearr_17661_17697[(1)] = (5));

} else {
var statearr_17662_17698 = state_17654__$1;
(statearr_17662_17698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (15))){
var state_17654__$1 = state_17654;
var statearr_17666_17699 = state_17654__$1;
(statearr_17666_17699[(2)] = null);

(statearr_17666_17699[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (21))){
var state_17654__$1 = state_17654;
var statearr_17667_17700 = state_17654__$1;
(statearr_17667_17700[(2)] = null);

(statearr_17667_17700[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (13))){
var inst_17609 = (state_17654[(9)]);
var inst_17606 = (state_17654[(10)]);
var inst_17608 = (state_17654[(11)]);
var inst_17607 = (state_17654[(12)]);
var inst_17616 = (state_17654[(2)]);
var inst_17617 = (inst_17609 + (1));
var tmp17663 = inst_17606;
var tmp17664 = inst_17608;
var tmp17665 = inst_17607;
var inst_17606__$1 = tmp17663;
var inst_17607__$1 = tmp17665;
var inst_17608__$1 = tmp17664;
var inst_17609__$1 = inst_17617;
var state_17654__$1 = (function (){var statearr_17668 = state_17654;
(statearr_17668[(14)] = inst_17616);

(statearr_17668[(9)] = inst_17609__$1);

(statearr_17668[(10)] = inst_17606__$1);

(statearr_17668[(11)] = inst_17608__$1);

(statearr_17668[(12)] = inst_17607__$1);

return statearr_17668;
})();
var statearr_17669_17701 = state_17654__$1;
(statearr_17669_17701[(2)] = null);

(statearr_17669_17701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (22))){
var state_17654__$1 = state_17654;
var statearr_17670_17702 = state_17654__$1;
(statearr_17670_17702[(2)] = null);

(statearr_17670_17702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (6))){
var inst_17595 = (state_17654[(13)]);
var inst_17604 = f.call(null,inst_17595);
var inst_17605 = cljs.core.seq.call(null,inst_17604);
var inst_17606 = inst_17605;
var inst_17607 = null;
var inst_17608 = (0);
var inst_17609 = (0);
var state_17654__$1 = (function (){var statearr_17671 = state_17654;
(statearr_17671[(9)] = inst_17609);

(statearr_17671[(10)] = inst_17606);

(statearr_17671[(11)] = inst_17608);

(statearr_17671[(12)] = inst_17607);

return statearr_17671;
})();
var statearr_17672_17703 = state_17654__$1;
(statearr_17672_17703[(2)] = null);

(statearr_17672_17703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (17))){
var inst_17620 = (state_17654[(7)]);
var inst_17624 = cljs.core.chunk_first.call(null,inst_17620);
var inst_17625 = cljs.core.chunk_rest.call(null,inst_17620);
var inst_17626 = cljs.core.count.call(null,inst_17624);
var inst_17606 = inst_17625;
var inst_17607 = inst_17624;
var inst_17608 = inst_17626;
var inst_17609 = (0);
var state_17654__$1 = (function (){var statearr_17673 = state_17654;
(statearr_17673[(9)] = inst_17609);

(statearr_17673[(10)] = inst_17606);

(statearr_17673[(11)] = inst_17608);

(statearr_17673[(12)] = inst_17607);

return statearr_17673;
})();
var statearr_17674_17704 = state_17654__$1;
(statearr_17674_17704[(2)] = null);

(statearr_17674_17704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (3))){
var inst_17652 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17654__$1,inst_17652);
} else {
if((state_val_17655 === (12))){
var inst_17640 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
var statearr_17675_17705 = state_17654__$1;
(statearr_17675_17705[(2)] = inst_17640);

(statearr_17675_17705[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (2))){
var state_17654__$1 = state_17654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17654__$1,(4),in$);
} else {
if((state_val_17655 === (23))){
var inst_17648 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
var statearr_17676_17706 = state_17654__$1;
(statearr_17676_17706[(2)] = inst_17648);

(statearr_17676_17706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (19))){
var inst_17635 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
var statearr_17677_17707 = state_17654__$1;
(statearr_17677_17707[(2)] = inst_17635);

(statearr_17677_17707[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (11))){
var inst_17620 = (state_17654[(7)]);
var inst_17606 = (state_17654[(10)]);
var inst_17620__$1 = cljs.core.seq.call(null,inst_17606);
var state_17654__$1 = (function (){var statearr_17678 = state_17654;
(statearr_17678[(7)] = inst_17620__$1);

return statearr_17678;
})();
if(inst_17620__$1){
var statearr_17679_17708 = state_17654__$1;
(statearr_17679_17708[(1)] = (14));

} else {
var statearr_17680_17709 = state_17654__$1;
(statearr_17680_17709[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (9))){
var inst_17642 = (state_17654[(2)]);
var inst_17643 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17654__$1 = (function (){var statearr_17681 = state_17654;
(statearr_17681[(15)] = inst_17642);

return statearr_17681;
})();
if(cljs.core.truth_(inst_17643)){
var statearr_17682_17710 = state_17654__$1;
(statearr_17682_17710[(1)] = (21));

} else {
var statearr_17683_17711 = state_17654__$1;
(statearr_17683_17711[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (5))){
var inst_17598 = cljs.core.async.close_BANG_.call(null,out);
var state_17654__$1 = state_17654;
var statearr_17684_17712 = state_17654__$1;
(statearr_17684_17712[(2)] = inst_17598);

(statearr_17684_17712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (14))){
var inst_17620 = (state_17654[(7)]);
var inst_17622 = cljs.core.chunked_seq_QMARK_.call(null,inst_17620);
var state_17654__$1 = state_17654;
if(inst_17622){
var statearr_17685_17713 = state_17654__$1;
(statearr_17685_17713[(1)] = (17));

} else {
var statearr_17686_17714 = state_17654__$1;
(statearr_17686_17714[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (16))){
var inst_17638 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
var statearr_17687_17715 = state_17654__$1;
(statearr_17687_17715[(2)] = inst_17638);

(statearr_17687_17715[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (10))){
var inst_17609 = (state_17654[(9)]);
var inst_17607 = (state_17654[(12)]);
var inst_17614 = cljs.core._nth.call(null,inst_17607,inst_17609);
var state_17654__$1 = state_17654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17654__$1,(13),out,inst_17614);
} else {
if((state_val_17655 === (18))){
var inst_17620 = (state_17654[(7)]);
var inst_17629 = cljs.core.first.call(null,inst_17620);
var state_17654__$1 = state_17654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17654__$1,(20),out,inst_17629);
} else {
if((state_val_17655 === (8))){
var inst_17609 = (state_17654[(9)]);
var inst_17608 = (state_17654[(11)]);
var inst_17611 = (inst_17609 < inst_17608);
var inst_17612 = inst_17611;
var state_17654__$1 = state_17654;
if(cljs.core.truth_(inst_17612)){
var statearr_17688_17716 = state_17654__$1;
(statearr_17688_17716[(1)] = (10));

} else {
var statearr_17689_17717 = state_17654__$1;
(statearr_17689_17717[(1)] = (11));

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
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15944__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_17690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17690[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15944__auto__);

(statearr_17690[(1)] = (1));

return statearr_17690;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15944__auto____1 = (function (state_17654){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_17654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e17691){if((e17691 instanceof Object)){
var ex__15947__auto__ = e17691;
var statearr_17692_17718 = state_17654;
(statearr_17692_17718[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17719 = state_17654;
state_17654 = G__17719;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15944__auto__ = function(state_17654){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15944__auto____1.call(this,state_17654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15944__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15944__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_17693 = f__16039__auto__.call(null);
(statearr_17693[(6)] = c__16038__auto__);

return statearr_17693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17721 = arguments.length;
switch (G__17721) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17724 = arguments.length;
switch (G__17724) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17727 = arguments.length;
switch (G__17727) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16038__auto___17774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___17774,out){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___17774,out){
return (function (state_17751){
var state_val_17752 = (state_17751[(1)]);
if((state_val_17752 === (7))){
var inst_17746 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17753_17775 = state_17751__$1;
(statearr_17753_17775[(2)] = inst_17746);

(statearr_17753_17775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (1))){
var inst_17728 = null;
var state_17751__$1 = (function (){var statearr_17754 = state_17751;
(statearr_17754[(7)] = inst_17728);

return statearr_17754;
})();
var statearr_17755_17776 = state_17751__$1;
(statearr_17755_17776[(2)] = null);

(statearr_17755_17776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (4))){
var inst_17731 = (state_17751[(8)]);
var inst_17731__$1 = (state_17751[(2)]);
var inst_17732 = (inst_17731__$1 == null);
var inst_17733 = cljs.core.not.call(null,inst_17732);
var state_17751__$1 = (function (){var statearr_17756 = state_17751;
(statearr_17756[(8)] = inst_17731__$1);

return statearr_17756;
})();
if(inst_17733){
var statearr_17757_17777 = state_17751__$1;
(statearr_17757_17777[(1)] = (5));

} else {
var statearr_17758_17778 = state_17751__$1;
(statearr_17758_17778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (6))){
var state_17751__$1 = state_17751;
var statearr_17759_17779 = state_17751__$1;
(statearr_17759_17779[(2)] = null);

(statearr_17759_17779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (3))){
var inst_17748 = (state_17751[(2)]);
var inst_17749 = cljs.core.async.close_BANG_.call(null,out);
var state_17751__$1 = (function (){var statearr_17760 = state_17751;
(statearr_17760[(9)] = inst_17748);

return statearr_17760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17751__$1,inst_17749);
} else {
if((state_val_17752 === (2))){
var state_17751__$1 = state_17751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17751__$1,(4),ch);
} else {
if((state_val_17752 === (11))){
var inst_17731 = (state_17751[(8)]);
var inst_17740 = (state_17751[(2)]);
var inst_17728 = inst_17731;
var state_17751__$1 = (function (){var statearr_17761 = state_17751;
(statearr_17761[(7)] = inst_17728);

(statearr_17761[(10)] = inst_17740);

return statearr_17761;
})();
var statearr_17762_17780 = state_17751__$1;
(statearr_17762_17780[(2)] = null);

(statearr_17762_17780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (9))){
var inst_17731 = (state_17751[(8)]);
var state_17751__$1 = state_17751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17751__$1,(11),out,inst_17731);
} else {
if((state_val_17752 === (5))){
var inst_17728 = (state_17751[(7)]);
var inst_17731 = (state_17751[(8)]);
var inst_17735 = cljs.core._EQ_.call(null,inst_17731,inst_17728);
var state_17751__$1 = state_17751;
if(inst_17735){
var statearr_17764_17781 = state_17751__$1;
(statearr_17764_17781[(1)] = (8));

} else {
var statearr_17765_17782 = state_17751__$1;
(statearr_17765_17782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (10))){
var inst_17743 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17766_17783 = state_17751__$1;
(statearr_17766_17783[(2)] = inst_17743);

(statearr_17766_17783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (8))){
var inst_17728 = (state_17751[(7)]);
var tmp17763 = inst_17728;
var inst_17728__$1 = tmp17763;
var state_17751__$1 = (function (){var statearr_17767 = state_17751;
(statearr_17767[(7)] = inst_17728__$1);

return statearr_17767;
})();
var statearr_17768_17784 = state_17751__$1;
(statearr_17768_17784[(2)] = null);

(statearr_17768_17784[(1)] = (2));


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
});})(c__16038__auto___17774,out))
;
return ((function (switch__15943__auto__,c__16038__auto___17774,out){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_17769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17769[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_17769[(1)] = (1));

return statearr_17769;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_17751){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_17751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e17770){if((e17770 instanceof Object)){
var ex__15947__auto__ = e17770;
var statearr_17771_17785 = state_17751;
(statearr_17771_17785[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17786 = state_17751;
state_17751 = G__17786;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_17751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_17751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___17774,out))
})();
var state__16040__auto__ = (function (){var statearr_17772 = f__16039__auto__.call(null);
(statearr_17772[(6)] = c__16038__auto___17774);

return statearr_17772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___17774,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17788 = arguments.length;
switch (G__17788) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16038__auto___17854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___17854,out){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___17854,out){
return (function (state_17826){
var state_val_17827 = (state_17826[(1)]);
if((state_val_17827 === (7))){
var inst_17822 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
var statearr_17828_17855 = state_17826__$1;
(statearr_17828_17855[(2)] = inst_17822);

(statearr_17828_17855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (1))){
var inst_17789 = (new Array(n));
var inst_17790 = inst_17789;
var inst_17791 = (0);
var state_17826__$1 = (function (){var statearr_17829 = state_17826;
(statearr_17829[(7)] = inst_17790);

(statearr_17829[(8)] = inst_17791);

return statearr_17829;
})();
var statearr_17830_17856 = state_17826__$1;
(statearr_17830_17856[(2)] = null);

(statearr_17830_17856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (4))){
var inst_17794 = (state_17826[(9)]);
var inst_17794__$1 = (state_17826[(2)]);
var inst_17795 = (inst_17794__$1 == null);
var inst_17796 = cljs.core.not.call(null,inst_17795);
var state_17826__$1 = (function (){var statearr_17831 = state_17826;
(statearr_17831[(9)] = inst_17794__$1);

return statearr_17831;
})();
if(inst_17796){
var statearr_17832_17857 = state_17826__$1;
(statearr_17832_17857[(1)] = (5));

} else {
var statearr_17833_17858 = state_17826__$1;
(statearr_17833_17858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (15))){
var inst_17816 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
var statearr_17834_17859 = state_17826__$1;
(statearr_17834_17859[(2)] = inst_17816);

(statearr_17834_17859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (13))){
var state_17826__$1 = state_17826;
var statearr_17835_17860 = state_17826__$1;
(statearr_17835_17860[(2)] = null);

(statearr_17835_17860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (6))){
var inst_17791 = (state_17826[(8)]);
var inst_17812 = (inst_17791 > (0));
var state_17826__$1 = state_17826;
if(cljs.core.truth_(inst_17812)){
var statearr_17836_17861 = state_17826__$1;
(statearr_17836_17861[(1)] = (12));

} else {
var statearr_17837_17862 = state_17826__$1;
(statearr_17837_17862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (3))){
var inst_17824 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17826__$1,inst_17824);
} else {
if((state_val_17827 === (12))){
var inst_17790 = (state_17826[(7)]);
var inst_17814 = cljs.core.vec.call(null,inst_17790);
var state_17826__$1 = state_17826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17826__$1,(15),out,inst_17814);
} else {
if((state_val_17827 === (2))){
var state_17826__$1 = state_17826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17826__$1,(4),ch);
} else {
if((state_val_17827 === (11))){
var inst_17806 = (state_17826[(2)]);
var inst_17807 = (new Array(n));
var inst_17790 = inst_17807;
var inst_17791 = (0);
var state_17826__$1 = (function (){var statearr_17838 = state_17826;
(statearr_17838[(10)] = inst_17806);

(statearr_17838[(7)] = inst_17790);

(statearr_17838[(8)] = inst_17791);

return statearr_17838;
})();
var statearr_17839_17863 = state_17826__$1;
(statearr_17839_17863[(2)] = null);

(statearr_17839_17863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (9))){
var inst_17790 = (state_17826[(7)]);
var inst_17804 = cljs.core.vec.call(null,inst_17790);
var state_17826__$1 = state_17826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17826__$1,(11),out,inst_17804);
} else {
if((state_val_17827 === (5))){
var inst_17794 = (state_17826[(9)]);
var inst_17799 = (state_17826[(11)]);
var inst_17790 = (state_17826[(7)]);
var inst_17791 = (state_17826[(8)]);
var inst_17798 = (inst_17790[inst_17791] = inst_17794);
var inst_17799__$1 = (inst_17791 + (1));
var inst_17800 = (inst_17799__$1 < n);
var state_17826__$1 = (function (){var statearr_17840 = state_17826;
(statearr_17840[(11)] = inst_17799__$1);

(statearr_17840[(12)] = inst_17798);

return statearr_17840;
})();
if(cljs.core.truth_(inst_17800)){
var statearr_17841_17864 = state_17826__$1;
(statearr_17841_17864[(1)] = (8));

} else {
var statearr_17842_17865 = state_17826__$1;
(statearr_17842_17865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (14))){
var inst_17819 = (state_17826[(2)]);
var inst_17820 = cljs.core.async.close_BANG_.call(null,out);
var state_17826__$1 = (function (){var statearr_17844 = state_17826;
(statearr_17844[(13)] = inst_17819);

return statearr_17844;
})();
var statearr_17845_17866 = state_17826__$1;
(statearr_17845_17866[(2)] = inst_17820);

(statearr_17845_17866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (10))){
var inst_17810 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
var statearr_17846_17867 = state_17826__$1;
(statearr_17846_17867[(2)] = inst_17810);

(statearr_17846_17867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (8))){
var inst_17799 = (state_17826[(11)]);
var inst_17790 = (state_17826[(7)]);
var tmp17843 = inst_17790;
var inst_17790__$1 = tmp17843;
var inst_17791 = inst_17799;
var state_17826__$1 = (function (){var statearr_17847 = state_17826;
(statearr_17847[(7)] = inst_17790__$1);

(statearr_17847[(8)] = inst_17791);

return statearr_17847;
})();
var statearr_17848_17868 = state_17826__$1;
(statearr_17848_17868[(2)] = null);

(statearr_17848_17868[(1)] = (2));


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
});})(c__16038__auto___17854,out))
;
return ((function (switch__15943__auto__,c__16038__auto___17854,out){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_17849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17849[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_17849[(1)] = (1));

return statearr_17849;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_17826){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_17826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e17850){if((e17850 instanceof Object)){
var ex__15947__auto__ = e17850;
var statearr_17851_17869 = state_17826;
(statearr_17851_17869[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17870 = state_17826;
state_17826 = G__17870;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_17826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_17826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___17854,out))
})();
var state__16040__auto__ = (function (){var statearr_17852 = f__16039__auto__.call(null);
(statearr_17852[(6)] = c__16038__auto___17854);

return statearr_17852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___17854,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17872 = arguments.length;
switch (G__17872) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16038__auto___17942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___17942,out){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___17942,out){
return (function (state_17914){
var state_val_17915 = (state_17914[(1)]);
if((state_val_17915 === (7))){
var inst_17910 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
var statearr_17916_17943 = state_17914__$1;
(statearr_17916_17943[(2)] = inst_17910);

(statearr_17916_17943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (1))){
var inst_17873 = [];
var inst_17874 = inst_17873;
var inst_17875 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17914__$1 = (function (){var statearr_17917 = state_17914;
(statearr_17917[(7)] = inst_17874);

(statearr_17917[(8)] = inst_17875);

return statearr_17917;
})();
var statearr_17918_17944 = state_17914__$1;
(statearr_17918_17944[(2)] = null);

(statearr_17918_17944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (4))){
var inst_17878 = (state_17914[(9)]);
var inst_17878__$1 = (state_17914[(2)]);
var inst_17879 = (inst_17878__$1 == null);
var inst_17880 = cljs.core.not.call(null,inst_17879);
var state_17914__$1 = (function (){var statearr_17919 = state_17914;
(statearr_17919[(9)] = inst_17878__$1);

return statearr_17919;
})();
if(inst_17880){
var statearr_17920_17945 = state_17914__$1;
(statearr_17920_17945[(1)] = (5));

} else {
var statearr_17921_17946 = state_17914__$1;
(statearr_17921_17946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (15))){
var inst_17904 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
var statearr_17922_17947 = state_17914__$1;
(statearr_17922_17947[(2)] = inst_17904);

(statearr_17922_17947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (13))){
var state_17914__$1 = state_17914;
var statearr_17923_17948 = state_17914__$1;
(statearr_17923_17948[(2)] = null);

(statearr_17923_17948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (6))){
var inst_17874 = (state_17914[(7)]);
var inst_17899 = inst_17874.length;
var inst_17900 = (inst_17899 > (0));
var state_17914__$1 = state_17914;
if(cljs.core.truth_(inst_17900)){
var statearr_17924_17949 = state_17914__$1;
(statearr_17924_17949[(1)] = (12));

} else {
var statearr_17925_17950 = state_17914__$1;
(statearr_17925_17950[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (3))){
var inst_17912 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17914__$1,inst_17912);
} else {
if((state_val_17915 === (12))){
var inst_17874 = (state_17914[(7)]);
var inst_17902 = cljs.core.vec.call(null,inst_17874);
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17914__$1,(15),out,inst_17902);
} else {
if((state_val_17915 === (2))){
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17914__$1,(4),ch);
} else {
if((state_val_17915 === (11))){
var inst_17882 = (state_17914[(10)]);
var inst_17878 = (state_17914[(9)]);
var inst_17892 = (state_17914[(2)]);
var inst_17893 = [];
var inst_17894 = inst_17893.push(inst_17878);
var inst_17874 = inst_17893;
var inst_17875 = inst_17882;
var state_17914__$1 = (function (){var statearr_17926 = state_17914;
(statearr_17926[(11)] = inst_17894);

(statearr_17926[(7)] = inst_17874);

(statearr_17926[(8)] = inst_17875);

(statearr_17926[(12)] = inst_17892);

return statearr_17926;
})();
var statearr_17927_17951 = state_17914__$1;
(statearr_17927_17951[(2)] = null);

(statearr_17927_17951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (9))){
var inst_17874 = (state_17914[(7)]);
var inst_17890 = cljs.core.vec.call(null,inst_17874);
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17914__$1,(11),out,inst_17890);
} else {
if((state_val_17915 === (5))){
var inst_17882 = (state_17914[(10)]);
var inst_17878 = (state_17914[(9)]);
var inst_17875 = (state_17914[(8)]);
var inst_17882__$1 = f.call(null,inst_17878);
var inst_17883 = cljs.core._EQ_.call(null,inst_17882__$1,inst_17875);
var inst_17884 = cljs.core.keyword_identical_QMARK_.call(null,inst_17875,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17885 = ((inst_17883) || (inst_17884));
var state_17914__$1 = (function (){var statearr_17928 = state_17914;
(statearr_17928[(10)] = inst_17882__$1);

return statearr_17928;
})();
if(cljs.core.truth_(inst_17885)){
var statearr_17929_17952 = state_17914__$1;
(statearr_17929_17952[(1)] = (8));

} else {
var statearr_17930_17953 = state_17914__$1;
(statearr_17930_17953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (14))){
var inst_17907 = (state_17914[(2)]);
var inst_17908 = cljs.core.async.close_BANG_.call(null,out);
var state_17914__$1 = (function (){var statearr_17932 = state_17914;
(statearr_17932[(13)] = inst_17907);

return statearr_17932;
})();
var statearr_17933_17954 = state_17914__$1;
(statearr_17933_17954[(2)] = inst_17908);

(statearr_17933_17954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (10))){
var inst_17897 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
var statearr_17934_17955 = state_17914__$1;
(statearr_17934_17955[(2)] = inst_17897);

(statearr_17934_17955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (8))){
var inst_17882 = (state_17914[(10)]);
var inst_17874 = (state_17914[(7)]);
var inst_17878 = (state_17914[(9)]);
var inst_17887 = inst_17874.push(inst_17878);
var tmp17931 = inst_17874;
var inst_17874__$1 = tmp17931;
var inst_17875 = inst_17882;
var state_17914__$1 = (function (){var statearr_17935 = state_17914;
(statearr_17935[(7)] = inst_17874__$1);

(statearr_17935[(8)] = inst_17875);

(statearr_17935[(14)] = inst_17887);

return statearr_17935;
})();
var statearr_17936_17956 = state_17914__$1;
(statearr_17936_17956[(2)] = null);

(statearr_17936_17956[(1)] = (2));


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
});})(c__16038__auto___17942,out))
;
return ((function (switch__15943__auto__,c__16038__auto___17942,out){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_17937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17937[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_17937[(1)] = (1));

return statearr_17937;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_17914){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_17914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e17938){if((e17938 instanceof Object)){
var ex__15947__auto__ = e17938;
var statearr_17939_17957 = state_17914;
(statearr_17939_17957[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17958 = state_17914;
state_17914 = G__17958;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_17914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_17914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___17942,out))
})();
var state__16040__auto__ = (function (){var statearr_17940 = f__16039__auto__.call(null);
(statearr_17940[(6)] = c__16038__auto___17942);

return statearr_17940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___17942,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
