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
var G__23112 = arguments.length;
switch (G__23112) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23113 = (function (f,blockable,meta23114){
this.f = f;
this.blockable = blockable;
this.meta23114 = meta23114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23115,meta23114__$1){
var self__ = this;
var _23115__$1 = this;
return (new cljs.core.async.t_cljs$core$async23113(self__.f,self__.blockable,meta23114__$1));
});

cljs.core.async.t_cljs$core$async23113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23115){
var self__ = this;
var _23115__$1 = this;
return self__.meta23114;
});

cljs.core.async.t_cljs$core$async23113.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23113.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23114","meta23114",1354895563,null)], null);
});

cljs.core.async.t_cljs$core$async23113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23113";

cljs.core.async.t_cljs$core$async23113.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23113");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23113.
 */
cljs.core.async.__GT_t_cljs$core$async23113 = (function cljs$core$async$__GT_t_cljs$core$async23113(f__$1,blockable__$1,meta23114){
return (new cljs.core.async.t_cljs$core$async23113(f__$1,blockable__$1,meta23114));
});

}

return (new cljs.core.async.t_cljs$core$async23113(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23119 = arguments.length;
switch (G__23119) {
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
var G__23122 = arguments.length;
switch (G__23122) {
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
var G__23125 = arguments.length;
switch (G__23125) {
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
var val_23127 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23127);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23127,ret){
return (function (){
return fn1.call(null,val_23127);
});})(val_23127,ret))
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
var G__23129 = arguments.length;
switch (G__23129) {
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
var n__4607__auto___23131 = n;
var x_23132 = (0);
while(true){
if((x_23132 < n__4607__auto___23131)){
(a[x_23132] = (0));

var G__23133 = (x_23132 + (1));
x_23132 = G__23133;
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

var G__23134 = (i + (1));
i = G__23134;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23135 = (function (flag,meta23136){
this.flag = flag;
this.meta23136 = meta23136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23137,meta23136__$1){
var self__ = this;
var _23137__$1 = this;
return (new cljs.core.async.t_cljs$core$async23135(self__.flag,meta23136__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23137){
var self__ = this;
var _23137__$1 = this;
return self__.meta23136;
});})(flag))
;

cljs.core.async.t_cljs$core$async23135.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23135.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23135.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23136","meta23136",979257837,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23135";

cljs.core.async.t_cljs$core$async23135.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23135");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23135.
 */
cljs.core.async.__GT_t_cljs$core$async23135 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23135(flag__$1,meta23136){
return (new cljs.core.async.t_cljs$core$async23135(flag__$1,meta23136));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23135(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23138 = (function (flag,cb,meta23139){
this.flag = flag;
this.cb = cb;
this.meta23139 = meta23139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23140,meta23139__$1){
var self__ = this;
var _23140__$1 = this;
return (new cljs.core.async.t_cljs$core$async23138(self__.flag,self__.cb,meta23139__$1));
});

cljs.core.async.t_cljs$core$async23138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23140){
var self__ = this;
var _23140__$1 = this;
return self__.meta23139;
});

cljs.core.async.t_cljs$core$async23138.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23139","meta23139",2126633929,null)], null);
});

cljs.core.async.t_cljs$core$async23138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23138";

cljs.core.async.t_cljs$core$async23138.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23138");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23138.
 */
cljs.core.async.__GT_t_cljs$core$async23138 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23138(flag__$1,cb__$1,meta23139){
return (new cljs.core.async.t_cljs$core$async23138(flag__$1,cb__$1,meta23139));
});

}

return (new cljs.core.async.t_cljs$core$async23138(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23141_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23141_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23142_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23142_SHARP_,port], null));
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
var G__23143 = (i + (1));
i = G__23143;
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
var len__4730__auto___23149 = arguments.length;
var i__4731__auto___23150 = (0);
while(true){
if((i__4731__auto___23150 < len__4730__auto___23149)){
args__4736__auto__.push((arguments[i__4731__auto___23150]));

var G__23151 = (i__4731__auto___23150 + (1));
i__4731__auto___23150 = G__23151;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23146){
var map__23147 = p__23146;
var map__23147__$1 = (((((!((map__23147 == null))))?(((((map__23147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23147):map__23147);
var opts = map__23147__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23144){
var G__23145 = cljs.core.first.call(null,seq23144);
var seq23144__$1 = cljs.core.next.call(null,seq23144);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23145,seq23144__$1);
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
var G__23153 = arguments.length;
switch (G__23153) {
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
var c__21188__auto___23199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___23199){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___23199){
return (function (state_23177){
var state_val_23178 = (state_23177[(1)]);
if((state_val_23178 === (7))){
var inst_23173 = (state_23177[(2)]);
var state_23177__$1 = state_23177;
var statearr_23179_23200 = state_23177__$1;
(statearr_23179_23200[(2)] = inst_23173);

(statearr_23179_23200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (1))){
var state_23177__$1 = state_23177;
var statearr_23180_23201 = state_23177__$1;
(statearr_23180_23201[(2)] = null);

(statearr_23180_23201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (4))){
var inst_23156 = (state_23177[(7)]);
var inst_23156__$1 = (state_23177[(2)]);
var inst_23157 = (inst_23156__$1 == null);
var state_23177__$1 = (function (){var statearr_23181 = state_23177;
(statearr_23181[(7)] = inst_23156__$1);

return statearr_23181;
})();
if(cljs.core.truth_(inst_23157)){
var statearr_23182_23202 = state_23177__$1;
(statearr_23182_23202[(1)] = (5));

} else {
var statearr_23183_23203 = state_23177__$1;
(statearr_23183_23203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (13))){
var state_23177__$1 = state_23177;
var statearr_23184_23204 = state_23177__$1;
(statearr_23184_23204[(2)] = null);

(statearr_23184_23204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (6))){
var inst_23156 = (state_23177[(7)]);
var state_23177__$1 = state_23177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23177__$1,(11),to,inst_23156);
} else {
if((state_val_23178 === (3))){
var inst_23175 = (state_23177[(2)]);
var state_23177__$1 = state_23177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23177__$1,inst_23175);
} else {
if((state_val_23178 === (12))){
var state_23177__$1 = state_23177;
var statearr_23185_23205 = state_23177__$1;
(statearr_23185_23205[(2)] = null);

(statearr_23185_23205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (2))){
var state_23177__$1 = state_23177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23177__$1,(4),from);
} else {
if((state_val_23178 === (11))){
var inst_23166 = (state_23177[(2)]);
var state_23177__$1 = state_23177;
if(cljs.core.truth_(inst_23166)){
var statearr_23186_23206 = state_23177__$1;
(statearr_23186_23206[(1)] = (12));

} else {
var statearr_23187_23207 = state_23177__$1;
(statearr_23187_23207[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (9))){
var state_23177__$1 = state_23177;
var statearr_23188_23208 = state_23177__$1;
(statearr_23188_23208[(2)] = null);

(statearr_23188_23208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (5))){
var state_23177__$1 = state_23177;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23189_23209 = state_23177__$1;
(statearr_23189_23209[(1)] = (8));

} else {
var statearr_23190_23210 = state_23177__$1;
(statearr_23190_23210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (14))){
var inst_23171 = (state_23177[(2)]);
var state_23177__$1 = state_23177;
var statearr_23191_23211 = state_23177__$1;
(statearr_23191_23211[(2)] = inst_23171);

(statearr_23191_23211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (10))){
var inst_23163 = (state_23177[(2)]);
var state_23177__$1 = state_23177;
var statearr_23192_23212 = state_23177__$1;
(statearr_23192_23212[(2)] = inst_23163);

(statearr_23192_23212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (8))){
var inst_23160 = cljs.core.async.close_BANG_.call(null,to);
var state_23177__$1 = state_23177;
var statearr_23193_23213 = state_23177__$1;
(statearr_23193_23213[(2)] = inst_23160);

(statearr_23193_23213[(1)] = (10));


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
});})(c__21188__auto___23199))
;
return ((function (switch__21021__auto__,c__21188__auto___23199){
return (function() {
var cljs$core$async$state_machine__21022__auto__ = null;
var cljs$core$async$state_machine__21022__auto____0 = (function (){
var statearr_23194 = [null,null,null,null,null,null,null,null];
(statearr_23194[(0)] = cljs$core$async$state_machine__21022__auto__);

(statearr_23194[(1)] = (1));

return statearr_23194;
});
var cljs$core$async$state_machine__21022__auto____1 = (function (state_23177){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_23177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e23195){if((e23195 instanceof Object)){
var ex__21025__auto__ = e23195;
var statearr_23196_23214 = state_23177;
(statearr_23196_23214[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23215 = state_23177;
state_23177 = G__23215;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$state_machine__21022__auto__ = function(state_23177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21022__auto____1.call(this,state_23177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21022__auto____0;
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21022__auto____1;
return cljs$core$async$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___23199))
})();
var state__21190__auto__ = (function (){var statearr_23197 = f__21189__auto__.call(null);
(statearr_23197[(6)] = c__21188__auto___23199);

return statearr_23197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___23199))
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
return (function (p__23216){
var vec__23217 = p__23216;
var v = cljs.core.nth.call(null,vec__23217,(0),null);
var p = cljs.core.nth.call(null,vec__23217,(1),null);
var job = vec__23217;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21188__auto___23388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___23388,res,vec__23217,v,p,job,jobs,results){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___23388,res,vec__23217,v,p,job,jobs,results){
return (function (state_23224){
var state_val_23225 = (state_23224[(1)]);
if((state_val_23225 === (1))){
var state_23224__$1 = state_23224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23224__$1,(2),res,v);
} else {
if((state_val_23225 === (2))){
var inst_23221 = (state_23224[(2)]);
var inst_23222 = cljs.core.async.close_BANG_.call(null,res);
var state_23224__$1 = (function (){var statearr_23226 = state_23224;
(statearr_23226[(7)] = inst_23221);

return statearr_23226;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23224__$1,inst_23222);
} else {
return null;
}
}
});})(c__21188__auto___23388,res,vec__23217,v,p,job,jobs,results))
;
return ((function (switch__21021__auto__,c__21188__auto___23388,res,vec__23217,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0 = (function (){
var statearr_23227 = [null,null,null,null,null,null,null,null];
(statearr_23227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__);

(statearr_23227[(1)] = (1));

return statearr_23227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1 = (function (state_23224){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_23224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e23228){if((e23228 instanceof Object)){
var ex__21025__auto__ = e23228;
var statearr_23229_23389 = state_23224;
(statearr_23229_23389[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23390 = state_23224;
state_23224 = G__23390;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__ = function(state_23224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1.call(this,state_23224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___23388,res,vec__23217,v,p,job,jobs,results))
})();
var state__21190__auto__ = (function (){var statearr_23230 = f__21189__auto__.call(null);
(statearr_23230[(6)] = c__21188__auto___23388);

return statearr_23230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___23388,res,vec__23217,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23231){
var vec__23232 = p__23231;
var v = cljs.core.nth.call(null,vec__23232,(0),null);
var p = cljs.core.nth.call(null,vec__23232,(1),null);
var job = vec__23232;
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
var n__4607__auto___23391 = n;
var __23392 = (0);
while(true){
if((__23392 < n__4607__auto___23391)){
var G__23235_23393 = type;
var G__23235_23394__$1 = (((G__23235_23393 instanceof cljs.core.Keyword))?G__23235_23393.fqn:null);
switch (G__23235_23394__$1) {
case "compute":
var c__21188__auto___23396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23392,c__21188__auto___23396,G__23235_23393,G__23235_23394__$1,n__4607__auto___23391,jobs,results,process,async){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (__23392,c__21188__auto___23396,G__23235_23393,G__23235_23394__$1,n__4607__auto___23391,jobs,results,process,async){
return (function (state_23248){
var state_val_23249 = (state_23248[(1)]);
if((state_val_23249 === (1))){
var state_23248__$1 = state_23248;
var statearr_23250_23397 = state_23248__$1;
(statearr_23250_23397[(2)] = null);

(statearr_23250_23397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (2))){
var state_23248__$1 = state_23248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23248__$1,(4),jobs);
} else {
if((state_val_23249 === (3))){
var inst_23246 = (state_23248[(2)]);
var state_23248__$1 = state_23248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23248__$1,inst_23246);
} else {
if((state_val_23249 === (4))){
var inst_23238 = (state_23248[(2)]);
var inst_23239 = process.call(null,inst_23238);
var state_23248__$1 = state_23248;
if(cljs.core.truth_(inst_23239)){
var statearr_23251_23398 = state_23248__$1;
(statearr_23251_23398[(1)] = (5));

} else {
var statearr_23252_23399 = state_23248__$1;
(statearr_23252_23399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (5))){
var state_23248__$1 = state_23248;
var statearr_23253_23400 = state_23248__$1;
(statearr_23253_23400[(2)] = null);

(statearr_23253_23400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (6))){
var state_23248__$1 = state_23248;
var statearr_23254_23401 = state_23248__$1;
(statearr_23254_23401[(2)] = null);

(statearr_23254_23401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (7))){
var inst_23244 = (state_23248[(2)]);
var state_23248__$1 = state_23248;
var statearr_23255_23402 = state_23248__$1;
(statearr_23255_23402[(2)] = inst_23244);

(statearr_23255_23402[(1)] = (3));


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
});})(__23392,c__21188__auto___23396,G__23235_23393,G__23235_23394__$1,n__4607__auto___23391,jobs,results,process,async))
;
return ((function (__23392,switch__21021__auto__,c__21188__auto___23396,G__23235_23393,G__23235_23394__$1,n__4607__auto___23391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0 = (function (){
var statearr_23256 = [null,null,null,null,null,null,null];
(statearr_23256[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__);

(statearr_23256[(1)] = (1));

return statearr_23256;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1 = (function (state_23248){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_23248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e23257){if((e23257 instanceof Object)){
var ex__21025__auto__ = e23257;
var statearr_23258_23403 = state_23248;
(statearr_23258_23403[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23404 = state_23248;
state_23248 = G__23404;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__ = function(state_23248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1.call(this,state_23248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__;
})()
;})(__23392,switch__21021__auto__,c__21188__auto___23396,G__23235_23393,G__23235_23394__$1,n__4607__auto___23391,jobs,results,process,async))
})();
var state__21190__auto__ = (function (){var statearr_23259 = f__21189__auto__.call(null);
(statearr_23259[(6)] = c__21188__auto___23396);

return statearr_23259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(__23392,c__21188__auto___23396,G__23235_23393,G__23235_23394__$1,n__4607__auto___23391,jobs,results,process,async))
);


break;
case "async":
var c__21188__auto___23405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23392,c__21188__auto___23405,G__23235_23393,G__23235_23394__$1,n__4607__auto___23391,jobs,results,process,async){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (__23392,c__21188__auto___23405,G__23235_23393,G__23235_23394__$1,n__4607__auto___23391,jobs,results,process,async){
return (function (state_23272){
var state_val_23273 = (state_23272[(1)]);
if((state_val_23273 === (1))){
var state_23272__$1 = state_23272;
var statearr_23274_23406 = state_23272__$1;
(statearr_23274_23406[(2)] = null);

(statearr_23274_23406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23273 === (2))){
var state_23272__$1 = state_23272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23272__$1,(4),jobs);
} else {
if((state_val_23273 === (3))){
var inst_23270 = (state_23272[(2)]);
var state_23272__$1 = state_23272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23272__$1,inst_23270);
} else {
if((state_val_23273 === (4))){
var inst_23262 = (state_23272[(2)]);
var inst_23263 = async.call(null,inst_23262);
var state_23272__$1 = state_23272;
if(cljs.core.truth_(inst_23263)){
var statearr_23275_23407 = state_23272__$1;
(statearr_23275_23407[(1)] = (5));

} else {
var statearr_23276_23408 = state_23272__$1;
(statearr_23276_23408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23273 === (5))){
var state_23272__$1 = state_23272;
var statearr_23277_23409 = state_23272__$1;
(statearr_23277_23409[(2)] = null);

(statearr_23277_23409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23273 === (6))){
var state_23272__$1 = state_23272;
var statearr_23278_23410 = state_23272__$1;
(statearr_23278_23410[(2)] = null);

(statearr_23278_23410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23273 === (7))){
var inst_23268 = (state_23272[(2)]);
var state_23272__$1 = state_23272;
var statearr_23279_23411 = state_23272__$1;
(statearr_23279_23411[(2)] = inst_23268);

(statearr_23279_23411[(1)] = (3));


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
});})(__23392,c__21188__auto___23405,G__23235_23393,G__23235_23394__$1,n__4607__auto___23391,jobs,results,process,async))
;
return ((function (__23392,switch__21021__auto__,c__21188__auto___23405,G__23235_23393,G__23235_23394__$1,n__4607__auto___23391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0 = (function (){
var statearr_23280 = [null,null,null,null,null,null,null];
(statearr_23280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__);

(statearr_23280[(1)] = (1));

return statearr_23280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1 = (function (state_23272){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_23272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e23281){if((e23281 instanceof Object)){
var ex__21025__auto__ = e23281;
var statearr_23282_23412 = state_23272;
(statearr_23282_23412[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23413 = state_23272;
state_23272 = G__23413;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__ = function(state_23272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1.call(this,state_23272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__;
})()
;})(__23392,switch__21021__auto__,c__21188__auto___23405,G__23235_23393,G__23235_23394__$1,n__4607__auto___23391,jobs,results,process,async))
})();
var state__21190__auto__ = (function (){var statearr_23283 = f__21189__auto__.call(null);
(statearr_23283[(6)] = c__21188__auto___23405);

return statearr_23283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(__23392,c__21188__auto___23405,G__23235_23393,G__23235_23394__$1,n__4607__auto___23391,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23235_23394__$1)].join('')));

}

var G__23414 = (__23392 + (1));
__23392 = G__23414;
continue;
} else {
}
break;
}

var c__21188__auto___23415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___23415,jobs,results,process,async){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___23415,jobs,results,process,async){
return (function (state_23305){
var state_val_23306 = (state_23305[(1)]);
if((state_val_23306 === (7))){
var inst_23301 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
var statearr_23307_23416 = state_23305__$1;
(statearr_23307_23416[(2)] = inst_23301);

(statearr_23307_23416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (1))){
var state_23305__$1 = state_23305;
var statearr_23308_23417 = state_23305__$1;
(statearr_23308_23417[(2)] = null);

(statearr_23308_23417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (4))){
var inst_23286 = (state_23305[(7)]);
var inst_23286__$1 = (state_23305[(2)]);
var inst_23287 = (inst_23286__$1 == null);
var state_23305__$1 = (function (){var statearr_23309 = state_23305;
(statearr_23309[(7)] = inst_23286__$1);

return statearr_23309;
})();
if(cljs.core.truth_(inst_23287)){
var statearr_23310_23418 = state_23305__$1;
(statearr_23310_23418[(1)] = (5));

} else {
var statearr_23311_23419 = state_23305__$1;
(statearr_23311_23419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (6))){
var inst_23291 = (state_23305[(8)]);
var inst_23286 = (state_23305[(7)]);
var inst_23291__$1 = cljs.core.async.chan.call(null,(1));
var inst_23292 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23293 = [inst_23286,inst_23291__$1];
var inst_23294 = (new cljs.core.PersistentVector(null,2,(5),inst_23292,inst_23293,null));
var state_23305__$1 = (function (){var statearr_23312 = state_23305;
(statearr_23312[(8)] = inst_23291__$1);

return statearr_23312;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23305__$1,(8),jobs,inst_23294);
} else {
if((state_val_23306 === (3))){
var inst_23303 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23305__$1,inst_23303);
} else {
if((state_val_23306 === (2))){
var state_23305__$1 = state_23305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23305__$1,(4),from);
} else {
if((state_val_23306 === (9))){
var inst_23298 = (state_23305[(2)]);
var state_23305__$1 = (function (){var statearr_23313 = state_23305;
(statearr_23313[(9)] = inst_23298);

return statearr_23313;
})();
var statearr_23314_23420 = state_23305__$1;
(statearr_23314_23420[(2)] = null);

(statearr_23314_23420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (5))){
var inst_23289 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23305__$1 = state_23305;
var statearr_23315_23421 = state_23305__$1;
(statearr_23315_23421[(2)] = inst_23289);

(statearr_23315_23421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (8))){
var inst_23291 = (state_23305[(8)]);
var inst_23296 = (state_23305[(2)]);
var state_23305__$1 = (function (){var statearr_23316 = state_23305;
(statearr_23316[(10)] = inst_23296);

return statearr_23316;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23305__$1,(9),results,inst_23291);
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
});})(c__21188__auto___23415,jobs,results,process,async))
;
return ((function (switch__21021__auto__,c__21188__auto___23415,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0 = (function (){
var statearr_23317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__);

(statearr_23317[(1)] = (1));

return statearr_23317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1 = (function (state_23305){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_23305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e23318){if((e23318 instanceof Object)){
var ex__21025__auto__ = e23318;
var statearr_23319_23422 = state_23305;
(statearr_23319_23422[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23423 = state_23305;
state_23305 = G__23423;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__ = function(state_23305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1.call(this,state_23305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___23415,jobs,results,process,async))
})();
var state__21190__auto__ = (function (){var statearr_23320 = f__21189__auto__.call(null);
(statearr_23320[(6)] = c__21188__auto___23415);

return statearr_23320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___23415,jobs,results,process,async))
);


var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,jobs,results,process,async){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,jobs,results,process,async){
return (function (state_23358){
var state_val_23359 = (state_23358[(1)]);
if((state_val_23359 === (7))){
var inst_23354 = (state_23358[(2)]);
var state_23358__$1 = state_23358;
var statearr_23360_23424 = state_23358__$1;
(statearr_23360_23424[(2)] = inst_23354);

(statearr_23360_23424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (20))){
var state_23358__$1 = state_23358;
var statearr_23361_23425 = state_23358__$1;
(statearr_23361_23425[(2)] = null);

(statearr_23361_23425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (1))){
var state_23358__$1 = state_23358;
var statearr_23362_23426 = state_23358__$1;
(statearr_23362_23426[(2)] = null);

(statearr_23362_23426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (4))){
var inst_23323 = (state_23358[(7)]);
var inst_23323__$1 = (state_23358[(2)]);
var inst_23324 = (inst_23323__$1 == null);
var state_23358__$1 = (function (){var statearr_23363 = state_23358;
(statearr_23363[(7)] = inst_23323__$1);

return statearr_23363;
})();
if(cljs.core.truth_(inst_23324)){
var statearr_23364_23427 = state_23358__$1;
(statearr_23364_23427[(1)] = (5));

} else {
var statearr_23365_23428 = state_23358__$1;
(statearr_23365_23428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (15))){
var inst_23336 = (state_23358[(8)]);
var state_23358__$1 = state_23358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23358__$1,(18),to,inst_23336);
} else {
if((state_val_23359 === (21))){
var inst_23349 = (state_23358[(2)]);
var state_23358__$1 = state_23358;
var statearr_23366_23429 = state_23358__$1;
(statearr_23366_23429[(2)] = inst_23349);

(statearr_23366_23429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (13))){
var inst_23351 = (state_23358[(2)]);
var state_23358__$1 = (function (){var statearr_23367 = state_23358;
(statearr_23367[(9)] = inst_23351);

return statearr_23367;
})();
var statearr_23368_23430 = state_23358__$1;
(statearr_23368_23430[(2)] = null);

(statearr_23368_23430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (6))){
var inst_23323 = (state_23358[(7)]);
var state_23358__$1 = state_23358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23358__$1,(11),inst_23323);
} else {
if((state_val_23359 === (17))){
var inst_23344 = (state_23358[(2)]);
var state_23358__$1 = state_23358;
if(cljs.core.truth_(inst_23344)){
var statearr_23369_23431 = state_23358__$1;
(statearr_23369_23431[(1)] = (19));

} else {
var statearr_23370_23432 = state_23358__$1;
(statearr_23370_23432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (3))){
var inst_23356 = (state_23358[(2)]);
var state_23358__$1 = state_23358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23358__$1,inst_23356);
} else {
if((state_val_23359 === (12))){
var inst_23333 = (state_23358[(10)]);
var state_23358__$1 = state_23358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23358__$1,(14),inst_23333);
} else {
if((state_val_23359 === (2))){
var state_23358__$1 = state_23358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23358__$1,(4),results);
} else {
if((state_val_23359 === (19))){
var state_23358__$1 = state_23358;
var statearr_23371_23433 = state_23358__$1;
(statearr_23371_23433[(2)] = null);

(statearr_23371_23433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (11))){
var inst_23333 = (state_23358[(2)]);
var state_23358__$1 = (function (){var statearr_23372 = state_23358;
(statearr_23372[(10)] = inst_23333);

return statearr_23372;
})();
var statearr_23373_23434 = state_23358__$1;
(statearr_23373_23434[(2)] = null);

(statearr_23373_23434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (9))){
var state_23358__$1 = state_23358;
var statearr_23374_23435 = state_23358__$1;
(statearr_23374_23435[(2)] = null);

(statearr_23374_23435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (5))){
var state_23358__$1 = state_23358;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23375_23436 = state_23358__$1;
(statearr_23375_23436[(1)] = (8));

} else {
var statearr_23376_23437 = state_23358__$1;
(statearr_23376_23437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (14))){
var inst_23336 = (state_23358[(8)]);
var inst_23338 = (state_23358[(11)]);
var inst_23336__$1 = (state_23358[(2)]);
var inst_23337 = (inst_23336__$1 == null);
var inst_23338__$1 = cljs.core.not.call(null,inst_23337);
var state_23358__$1 = (function (){var statearr_23377 = state_23358;
(statearr_23377[(8)] = inst_23336__$1);

(statearr_23377[(11)] = inst_23338__$1);

return statearr_23377;
})();
if(inst_23338__$1){
var statearr_23378_23438 = state_23358__$1;
(statearr_23378_23438[(1)] = (15));

} else {
var statearr_23379_23439 = state_23358__$1;
(statearr_23379_23439[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (16))){
var inst_23338 = (state_23358[(11)]);
var state_23358__$1 = state_23358;
var statearr_23380_23440 = state_23358__$1;
(statearr_23380_23440[(2)] = inst_23338);

(statearr_23380_23440[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (10))){
var inst_23330 = (state_23358[(2)]);
var state_23358__$1 = state_23358;
var statearr_23381_23441 = state_23358__$1;
(statearr_23381_23441[(2)] = inst_23330);

(statearr_23381_23441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (18))){
var inst_23341 = (state_23358[(2)]);
var state_23358__$1 = state_23358;
var statearr_23382_23442 = state_23358__$1;
(statearr_23382_23442[(2)] = inst_23341);

(statearr_23382_23442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23359 === (8))){
var inst_23327 = cljs.core.async.close_BANG_.call(null,to);
var state_23358__$1 = state_23358;
var statearr_23383_23443 = state_23358__$1;
(statearr_23383_23443[(2)] = inst_23327);

(statearr_23383_23443[(1)] = (10));


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
});})(c__21188__auto__,jobs,results,process,async))
;
return ((function (switch__21021__auto__,c__21188__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0 = (function (){
var statearr_23384 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__);

(statearr_23384[(1)] = (1));

return statearr_23384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1 = (function (state_23358){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_23358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e23385){if((e23385 instanceof Object)){
var ex__21025__auto__ = e23385;
var statearr_23386_23444 = state_23358;
(statearr_23386_23444[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23445 = state_23358;
state_23358 = G__23445;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__ = function(state_23358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1.call(this,state_23358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,jobs,results,process,async))
})();
var state__21190__auto__ = (function (){var statearr_23387 = f__21189__auto__.call(null);
(statearr_23387[(6)] = c__21188__auto__);

return statearr_23387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,jobs,results,process,async))
);

return c__21188__auto__;
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
var G__23447 = arguments.length;
switch (G__23447) {
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
var G__23450 = arguments.length;
switch (G__23450) {
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
var G__23453 = arguments.length;
switch (G__23453) {
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
var c__21188__auto___23502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___23502,tc,fc){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___23502,tc,fc){
return (function (state_23479){
var state_val_23480 = (state_23479[(1)]);
if((state_val_23480 === (7))){
var inst_23475 = (state_23479[(2)]);
var state_23479__$1 = state_23479;
var statearr_23481_23503 = state_23479__$1;
(statearr_23481_23503[(2)] = inst_23475);

(statearr_23481_23503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23480 === (1))){
var state_23479__$1 = state_23479;
var statearr_23482_23504 = state_23479__$1;
(statearr_23482_23504[(2)] = null);

(statearr_23482_23504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23480 === (4))){
var inst_23456 = (state_23479[(7)]);
var inst_23456__$1 = (state_23479[(2)]);
var inst_23457 = (inst_23456__$1 == null);
var state_23479__$1 = (function (){var statearr_23483 = state_23479;
(statearr_23483[(7)] = inst_23456__$1);

return statearr_23483;
})();
if(cljs.core.truth_(inst_23457)){
var statearr_23484_23505 = state_23479__$1;
(statearr_23484_23505[(1)] = (5));

} else {
var statearr_23485_23506 = state_23479__$1;
(statearr_23485_23506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23480 === (13))){
var state_23479__$1 = state_23479;
var statearr_23486_23507 = state_23479__$1;
(statearr_23486_23507[(2)] = null);

(statearr_23486_23507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23480 === (6))){
var inst_23456 = (state_23479[(7)]);
var inst_23462 = p.call(null,inst_23456);
var state_23479__$1 = state_23479;
if(cljs.core.truth_(inst_23462)){
var statearr_23487_23508 = state_23479__$1;
(statearr_23487_23508[(1)] = (9));

} else {
var statearr_23488_23509 = state_23479__$1;
(statearr_23488_23509[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23480 === (3))){
var inst_23477 = (state_23479[(2)]);
var state_23479__$1 = state_23479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23479__$1,inst_23477);
} else {
if((state_val_23480 === (12))){
var state_23479__$1 = state_23479;
var statearr_23489_23510 = state_23479__$1;
(statearr_23489_23510[(2)] = null);

(statearr_23489_23510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23480 === (2))){
var state_23479__$1 = state_23479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23479__$1,(4),ch);
} else {
if((state_val_23480 === (11))){
var inst_23456 = (state_23479[(7)]);
var inst_23466 = (state_23479[(2)]);
var state_23479__$1 = state_23479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23479__$1,(8),inst_23466,inst_23456);
} else {
if((state_val_23480 === (9))){
var state_23479__$1 = state_23479;
var statearr_23490_23511 = state_23479__$1;
(statearr_23490_23511[(2)] = tc);

(statearr_23490_23511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23480 === (5))){
var inst_23459 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23460 = cljs.core.async.close_BANG_.call(null,fc);
var state_23479__$1 = (function (){var statearr_23491 = state_23479;
(statearr_23491[(8)] = inst_23459);

return statearr_23491;
})();
var statearr_23492_23512 = state_23479__$1;
(statearr_23492_23512[(2)] = inst_23460);

(statearr_23492_23512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23480 === (14))){
var inst_23473 = (state_23479[(2)]);
var state_23479__$1 = state_23479;
var statearr_23493_23513 = state_23479__$1;
(statearr_23493_23513[(2)] = inst_23473);

(statearr_23493_23513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23480 === (10))){
var state_23479__$1 = state_23479;
var statearr_23494_23514 = state_23479__$1;
(statearr_23494_23514[(2)] = fc);

(statearr_23494_23514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23480 === (8))){
var inst_23468 = (state_23479[(2)]);
var state_23479__$1 = state_23479;
if(cljs.core.truth_(inst_23468)){
var statearr_23495_23515 = state_23479__$1;
(statearr_23495_23515[(1)] = (12));

} else {
var statearr_23496_23516 = state_23479__$1;
(statearr_23496_23516[(1)] = (13));

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
});})(c__21188__auto___23502,tc,fc))
;
return ((function (switch__21021__auto__,c__21188__auto___23502,tc,fc){
return (function() {
var cljs$core$async$state_machine__21022__auto__ = null;
var cljs$core$async$state_machine__21022__auto____0 = (function (){
var statearr_23497 = [null,null,null,null,null,null,null,null,null];
(statearr_23497[(0)] = cljs$core$async$state_machine__21022__auto__);

(statearr_23497[(1)] = (1));

return statearr_23497;
});
var cljs$core$async$state_machine__21022__auto____1 = (function (state_23479){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_23479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e23498){if((e23498 instanceof Object)){
var ex__21025__auto__ = e23498;
var statearr_23499_23517 = state_23479;
(statearr_23499_23517[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23518 = state_23479;
state_23479 = G__23518;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$state_machine__21022__auto__ = function(state_23479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21022__auto____1.call(this,state_23479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21022__auto____0;
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21022__auto____1;
return cljs$core$async$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___23502,tc,fc))
})();
var state__21190__auto__ = (function (){var statearr_23500 = f__21189__auto__.call(null);
(statearr_23500[(6)] = c__21188__auto___23502);

return statearr_23500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___23502,tc,fc))
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
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_23539){
var state_val_23540 = (state_23539[(1)]);
if((state_val_23540 === (7))){
var inst_23535 = (state_23539[(2)]);
var state_23539__$1 = state_23539;
var statearr_23541_23559 = state_23539__$1;
(statearr_23541_23559[(2)] = inst_23535);

(statearr_23541_23559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (1))){
var inst_23519 = init;
var state_23539__$1 = (function (){var statearr_23542 = state_23539;
(statearr_23542[(7)] = inst_23519);

return statearr_23542;
})();
var statearr_23543_23560 = state_23539__$1;
(statearr_23543_23560[(2)] = null);

(statearr_23543_23560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (4))){
var inst_23522 = (state_23539[(8)]);
var inst_23522__$1 = (state_23539[(2)]);
var inst_23523 = (inst_23522__$1 == null);
var state_23539__$1 = (function (){var statearr_23544 = state_23539;
(statearr_23544[(8)] = inst_23522__$1);

return statearr_23544;
})();
if(cljs.core.truth_(inst_23523)){
var statearr_23545_23561 = state_23539__$1;
(statearr_23545_23561[(1)] = (5));

} else {
var statearr_23546_23562 = state_23539__$1;
(statearr_23546_23562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (6))){
var inst_23522 = (state_23539[(8)]);
var inst_23519 = (state_23539[(7)]);
var inst_23526 = (state_23539[(9)]);
var inst_23526__$1 = f.call(null,inst_23519,inst_23522);
var inst_23527 = cljs.core.reduced_QMARK_.call(null,inst_23526__$1);
var state_23539__$1 = (function (){var statearr_23547 = state_23539;
(statearr_23547[(9)] = inst_23526__$1);

return statearr_23547;
})();
if(inst_23527){
var statearr_23548_23563 = state_23539__$1;
(statearr_23548_23563[(1)] = (8));

} else {
var statearr_23549_23564 = state_23539__$1;
(statearr_23549_23564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (3))){
var inst_23537 = (state_23539[(2)]);
var state_23539__$1 = state_23539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23539__$1,inst_23537);
} else {
if((state_val_23540 === (2))){
var state_23539__$1 = state_23539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23539__$1,(4),ch);
} else {
if((state_val_23540 === (9))){
var inst_23526 = (state_23539[(9)]);
var inst_23519 = inst_23526;
var state_23539__$1 = (function (){var statearr_23550 = state_23539;
(statearr_23550[(7)] = inst_23519);

return statearr_23550;
})();
var statearr_23551_23565 = state_23539__$1;
(statearr_23551_23565[(2)] = null);

(statearr_23551_23565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (5))){
var inst_23519 = (state_23539[(7)]);
var state_23539__$1 = state_23539;
var statearr_23552_23566 = state_23539__$1;
(statearr_23552_23566[(2)] = inst_23519);

(statearr_23552_23566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (10))){
var inst_23533 = (state_23539[(2)]);
var state_23539__$1 = state_23539;
var statearr_23553_23567 = state_23539__$1;
(statearr_23553_23567[(2)] = inst_23533);

(statearr_23553_23567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (8))){
var inst_23526 = (state_23539[(9)]);
var inst_23529 = cljs.core.deref.call(null,inst_23526);
var state_23539__$1 = state_23539;
var statearr_23554_23568 = state_23539__$1;
(statearr_23554_23568[(2)] = inst_23529);

(statearr_23554_23568[(1)] = (10));


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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21022__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21022__auto____0 = (function (){
var statearr_23555 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23555[(0)] = cljs$core$async$reduce_$_state_machine__21022__auto__);

(statearr_23555[(1)] = (1));

return statearr_23555;
});
var cljs$core$async$reduce_$_state_machine__21022__auto____1 = (function (state_23539){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_23539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e23556){if((e23556 instanceof Object)){
var ex__21025__auto__ = e23556;
var statearr_23557_23569 = state_23539;
(statearr_23557_23569[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23570 = state_23539;
state_23539 = G__23570;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21022__auto__ = function(state_23539){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21022__auto____1.call(this,state_23539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21022__auto____0;
cljs$core$async$reduce_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21022__auto____1;
return cljs$core$async$reduce_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_23558 = f__21189__auto__.call(null);
(statearr_23558[(6)] = c__21188__auto__);

return statearr_23558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,f__$1){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,f__$1){
return (function (state_23576){
var state_val_23577 = (state_23576[(1)]);
if((state_val_23577 === (1))){
var inst_23571 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23576__$1,(2),inst_23571);
} else {
if((state_val_23577 === (2))){
var inst_23573 = (state_23576[(2)]);
var inst_23574 = f__$1.call(null,inst_23573);
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23576__$1,inst_23574);
} else {
return null;
}
}
});})(c__21188__auto__,f__$1))
;
return ((function (switch__21021__auto__,c__21188__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__21022__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21022__auto____0 = (function (){
var statearr_23578 = [null,null,null,null,null,null,null];
(statearr_23578[(0)] = cljs$core$async$transduce_$_state_machine__21022__auto__);

(statearr_23578[(1)] = (1));

return statearr_23578;
});
var cljs$core$async$transduce_$_state_machine__21022__auto____1 = (function (state_23576){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_23576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e23579){if((e23579 instanceof Object)){
var ex__21025__auto__ = e23579;
var statearr_23580_23582 = state_23576;
(statearr_23580_23582[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23583 = state_23576;
state_23576 = G__23583;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21022__auto__ = function(state_23576){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21022__auto____1.call(this,state_23576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21022__auto____0;
cljs$core$async$transduce_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21022__auto____1;
return cljs$core$async$transduce_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,f__$1))
})();
var state__21190__auto__ = (function (){var statearr_23581 = f__21189__auto__.call(null);
(statearr_23581[(6)] = c__21188__auto__);

return statearr_23581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,f__$1))
);

return c__21188__auto__;
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
var G__23585 = arguments.length;
switch (G__23585) {
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
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_23610){
var state_val_23611 = (state_23610[(1)]);
if((state_val_23611 === (7))){
var inst_23592 = (state_23610[(2)]);
var state_23610__$1 = state_23610;
var statearr_23612_23633 = state_23610__$1;
(statearr_23612_23633[(2)] = inst_23592);

(statearr_23612_23633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (1))){
var inst_23586 = cljs.core.seq.call(null,coll);
var inst_23587 = inst_23586;
var state_23610__$1 = (function (){var statearr_23613 = state_23610;
(statearr_23613[(7)] = inst_23587);

return statearr_23613;
})();
var statearr_23614_23634 = state_23610__$1;
(statearr_23614_23634[(2)] = null);

(statearr_23614_23634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (4))){
var inst_23587 = (state_23610[(7)]);
var inst_23590 = cljs.core.first.call(null,inst_23587);
var state_23610__$1 = state_23610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23610__$1,(7),ch,inst_23590);
} else {
if((state_val_23611 === (13))){
var inst_23604 = (state_23610[(2)]);
var state_23610__$1 = state_23610;
var statearr_23615_23635 = state_23610__$1;
(statearr_23615_23635[(2)] = inst_23604);

(statearr_23615_23635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (6))){
var inst_23595 = (state_23610[(2)]);
var state_23610__$1 = state_23610;
if(cljs.core.truth_(inst_23595)){
var statearr_23616_23636 = state_23610__$1;
(statearr_23616_23636[(1)] = (8));

} else {
var statearr_23617_23637 = state_23610__$1;
(statearr_23617_23637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (3))){
var inst_23608 = (state_23610[(2)]);
var state_23610__$1 = state_23610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23610__$1,inst_23608);
} else {
if((state_val_23611 === (12))){
var state_23610__$1 = state_23610;
var statearr_23618_23638 = state_23610__$1;
(statearr_23618_23638[(2)] = null);

(statearr_23618_23638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (2))){
var inst_23587 = (state_23610[(7)]);
var state_23610__$1 = state_23610;
if(cljs.core.truth_(inst_23587)){
var statearr_23619_23639 = state_23610__$1;
(statearr_23619_23639[(1)] = (4));

} else {
var statearr_23620_23640 = state_23610__$1;
(statearr_23620_23640[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (11))){
var inst_23601 = cljs.core.async.close_BANG_.call(null,ch);
var state_23610__$1 = state_23610;
var statearr_23621_23641 = state_23610__$1;
(statearr_23621_23641[(2)] = inst_23601);

(statearr_23621_23641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (9))){
var state_23610__$1 = state_23610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23622_23642 = state_23610__$1;
(statearr_23622_23642[(1)] = (11));

} else {
var statearr_23623_23643 = state_23610__$1;
(statearr_23623_23643[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (5))){
var inst_23587 = (state_23610[(7)]);
var state_23610__$1 = state_23610;
var statearr_23624_23644 = state_23610__$1;
(statearr_23624_23644[(2)] = inst_23587);

(statearr_23624_23644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (10))){
var inst_23606 = (state_23610[(2)]);
var state_23610__$1 = state_23610;
var statearr_23625_23645 = state_23610__$1;
(statearr_23625_23645[(2)] = inst_23606);

(statearr_23625_23645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (8))){
var inst_23587 = (state_23610[(7)]);
var inst_23597 = cljs.core.next.call(null,inst_23587);
var inst_23587__$1 = inst_23597;
var state_23610__$1 = (function (){var statearr_23626 = state_23610;
(statearr_23626[(7)] = inst_23587__$1);

return statearr_23626;
})();
var statearr_23627_23646 = state_23610__$1;
(statearr_23627_23646[(2)] = null);

(statearr_23627_23646[(1)] = (2));


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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var cljs$core$async$state_machine__21022__auto__ = null;
var cljs$core$async$state_machine__21022__auto____0 = (function (){
var statearr_23628 = [null,null,null,null,null,null,null,null];
(statearr_23628[(0)] = cljs$core$async$state_machine__21022__auto__);

(statearr_23628[(1)] = (1));

return statearr_23628;
});
var cljs$core$async$state_machine__21022__auto____1 = (function (state_23610){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_23610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e23629){if((e23629 instanceof Object)){
var ex__21025__auto__ = e23629;
var statearr_23630_23647 = state_23610;
(statearr_23630_23647[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23648 = state_23610;
state_23610 = G__23648;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$state_machine__21022__auto__ = function(state_23610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21022__auto____1.call(this,state_23610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21022__auto____0;
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21022__auto____1;
return cljs$core$async$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_23631 = f__21189__auto__.call(null);
(statearr_23631[(6)] = c__21188__auto__);

return statearr_23631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23649 = (function (ch,cs,meta23650){
this.ch = ch;
this.cs = cs;
this.meta23650 = meta23650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23651,meta23650__$1){
var self__ = this;
var _23651__$1 = this;
return (new cljs.core.async.t_cljs$core$async23649(self__.ch,self__.cs,meta23650__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23651){
var self__ = this;
var _23651__$1 = this;
return self__.meta23650;
});})(cs))
;

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23649.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23650","meta23650",-1141059328,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23649";

cljs.core.async.t_cljs$core$async23649.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23649");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23649.
 */
cljs.core.async.__GT_t_cljs$core$async23649 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23649(ch__$1,cs__$1,meta23650){
return (new cljs.core.async.t_cljs$core$async23649(ch__$1,cs__$1,meta23650));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23649(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21188__auto___23871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___23871,cs,m,dchan,dctr,done){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___23871,cs,m,dchan,dctr,done){
return (function (state_23786){
var state_val_23787 = (state_23786[(1)]);
if((state_val_23787 === (7))){
var inst_23782 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23788_23872 = state_23786__$1;
(statearr_23788_23872[(2)] = inst_23782);

(statearr_23788_23872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (20))){
var inst_23685 = (state_23786[(7)]);
var inst_23697 = cljs.core.first.call(null,inst_23685);
var inst_23698 = cljs.core.nth.call(null,inst_23697,(0),null);
var inst_23699 = cljs.core.nth.call(null,inst_23697,(1),null);
var state_23786__$1 = (function (){var statearr_23789 = state_23786;
(statearr_23789[(8)] = inst_23698);

return statearr_23789;
})();
if(cljs.core.truth_(inst_23699)){
var statearr_23790_23873 = state_23786__$1;
(statearr_23790_23873[(1)] = (22));

} else {
var statearr_23791_23874 = state_23786__$1;
(statearr_23791_23874[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (27))){
var inst_23734 = (state_23786[(9)]);
var inst_23729 = (state_23786[(10)]);
var inst_23727 = (state_23786[(11)]);
var inst_23654 = (state_23786[(12)]);
var inst_23734__$1 = cljs.core._nth.call(null,inst_23727,inst_23729);
var inst_23735 = cljs.core.async.put_BANG_.call(null,inst_23734__$1,inst_23654,done);
var state_23786__$1 = (function (){var statearr_23792 = state_23786;
(statearr_23792[(9)] = inst_23734__$1);

return statearr_23792;
})();
if(cljs.core.truth_(inst_23735)){
var statearr_23793_23875 = state_23786__$1;
(statearr_23793_23875[(1)] = (30));

} else {
var statearr_23794_23876 = state_23786__$1;
(statearr_23794_23876[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (1))){
var state_23786__$1 = state_23786;
var statearr_23795_23877 = state_23786__$1;
(statearr_23795_23877[(2)] = null);

(statearr_23795_23877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (24))){
var inst_23685 = (state_23786[(7)]);
var inst_23704 = (state_23786[(2)]);
var inst_23705 = cljs.core.next.call(null,inst_23685);
var inst_23663 = inst_23705;
var inst_23664 = null;
var inst_23665 = (0);
var inst_23666 = (0);
var state_23786__$1 = (function (){var statearr_23796 = state_23786;
(statearr_23796[(13)] = inst_23704);

(statearr_23796[(14)] = inst_23663);

(statearr_23796[(15)] = inst_23665);

(statearr_23796[(16)] = inst_23664);

(statearr_23796[(17)] = inst_23666);

return statearr_23796;
})();
var statearr_23797_23878 = state_23786__$1;
(statearr_23797_23878[(2)] = null);

(statearr_23797_23878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (39))){
var state_23786__$1 = state_23786;
var statearr_23801_23879 = state_23786__$1;
(statearr_23801_23879[(2)] = null);

(statearr_23801_23879[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (4))){
var inst_23654 = (state_23786[(12)]);
var inst_23654__$1 = (state_23786[(2)]);
var inst_23655 = (inst_23654__$1 == null);
var state_23786__$1 = (function (){var statearr_23802 = state_23786;
(statearr_23802[(12)] = inst_23654__$1);

return statearr_23802;
})();
if(cljs.core.truth_(inst_23655)){
var statearr_23803_23880 = state_23786__$1;
(statearr_23803_23880[(1)] = (5));

} else {
var statearr_23804_23881 = state_23786__$1;
(statearr_23804_23881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (15))){
var inst_23663 = (state_23786[(14)]);
var inst_23665 = (state_23786[(15)]);
var inst_23664 = (state_23786[(16)]);
var inst_23666 = (state_23786[(17)]);
var inst_23681 = (state_23786[(2)]);
var inst_23682 = (inst_23666 + (1));
var tmp23798 = inst_23663;
var tmp23799 = inst_23665;
var tmp23800 = inst_23664;
var inst_23663__$1 = tmp23798;
var inst_23664__$1 = tmp23800;
var inst_23665__$1 = tmp23799;
var inst_23666__$1 = inst_23682;
var state_23786__$1 = (function (){var statearr_23805 = state_23786;
(statearr_23805[(14)] = inst_23663__$1);

(statearr_23805[(15)] = inst_23665__$1);

(statearr_23805[(16)] = inst_23664__$1);

(statearr_23805[(17)] = inst_23666__$1);

(statearr_23805[(18)] = inst_23681);

return statearr_23805;
})();
var statearr_23806_23882 = state_23786__$1;
(statearr_23806_23882[(2)] = null);

(statearr_23806_23882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (21))){
var inst_23708 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23810_23883 = state_23786__$1;
(statearr_23810_23883[(2)] = inst_23708);

(statearr_23810_23883[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (31))){
var inst_23734 = (state_23786[(9)]);
var inst_23738 = done.call(null,null);
var inst_23739 = cljs.core.async.untap_STAR_.call(null,m,inst_23734);
var state_23786__$1 = (function (){var statearr_23811 = state_23786;
(statearr_23811[(19)] = inst_23738);

return statearr_23811;
})();
var statearr_23812_23884 = state_23786__$1;
(statearr_23812_23884[(2)] = inst_23739);

(statearr_23812_23884[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (32))){
var inst_23729 = (state_23786[(10)]);
var inst_23726 = (state_23786[(20)]);
var inst_23727 = (state_23786[(11)]);
var inst_23728 = (state_23786[(21)]);
var inst_23741 = (state_23786[(2)]);
var inst_23742 = (inst_23729 + (1));
var tmp23807 = inst_23726;
var tmp23808 = inst_23727;
var tmp23809 = inst_23728;
var inst_23726__$1 = tmp23807;
var inst_23727__$1 = tmp23808;
var inst_23728__$1 = tmp23809;
var inst_23729__$1 = inst_23742;
var state_23786__$1 = (function (){var statearr_23813 = state_23786;
(statearr_23813[(10)] = inst_23729__$1);

(statearr_23813[(22)] = inst_23741);

(statearr_23813[(20)] = inst_23726__$1);

(statearr_23813[(11)] = inst_23727__$1);

(statearr_23813[(21)] = inst_23728__$1);

return statearr_23813;
})();
var statearr_23814_23885 = state_23786__$1;
(statearr_23814_23885[(2)] = null);

(statearr_23814_23885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (40))){
var inst_23754 = (state_23786[(23)]);
var inst_23758 = done.call(null,null);
var inst_23759 = cljs.core.async.untap_STAR_.call(null,m,inst_23754);
var state_23786__$1 = (function (){var statearr_23815 = state_23786;
(statearr_23815[(24)] = inst_23758);

return statearr_23815;
})();
var statearr_23816_23886 = state_23786__$1;
(statearr_23816_23886[(2)] = inst_23759);

(statearr_23816_23886[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (33))){
var inst_23745 = (state_23786[(25)]);
var inst_23747 = cljs.core.chunked_seq_QMARK_.call(null,inst_23745);
var state_23786__$1 = state_23786;
if(inst_23747){
var statearr_23817_23887 = state_23786__$1;
(statearr_23817_23887[(1)] = (36));

} else {
var statearr_23818_23888 = state_23786__$1;
(statearr_23818_23888[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (13))){
var inst_23675 = (state_23786[(26)]);
var inst_23678 = cljs.core.async.close_BANG_.call(null,inst_23675);
var state_23786__$1 = state_23786;
var statearr_23819_23889 = state_23786__$1;
(statearr_23819_23889[(2)] = inst_23678);

(statearr_23819_23889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (22))){
var inst_23698 = (state_23786[(8)]);
var inst_23701 = cljs.core.async.close_BANG_.call(null,inst_23698);
var state_23786__$1 = state_23786;
var statearr_23820_23890 = state_23786__$1;
(statearr_23820_23890[(2)] = inst_23701);

(statearr_23820_23890[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (36))){
var inst_23745 = (state_23786[(25)]);
var inst_23749 = cljs.core.chunk_first.call(null,inst_23745);
var inst_23750 = cljs.core.chunk_rest.call(null,inst_23745);
var inst_23751 = cljs.core.count.call(null,inst_23749);
var inst_23726 = inst_23750;
var inst_23727 = inst_23749;
var inst_23728 = inst_23751;
var inst_23729 = (0);
var state_23786__$1 = (function (){var statearr_23821 = state_23786;
(statearr_23821[(10)] = inst_23729);

(statearr_23821[(20)] = inst_23726);

(statearr_23821[(11)] = inst_23727);

(statearr_23821[(21)] = inst_23728);

return statearr_23821;
})();
var statearr_23822_23891 = state_23786__$1;
(statearr_23822_23891[(2)] = null);

(statearr_23822_23891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (41))){
var inst_23745 = (state_23786[(25)]);
var inst_23761 = (state_23786[(2)]);
var inst_23762 = cljs.core.next.call(null,inst_23745);
var inst_23726 = inst_23762;
var inst_23727 = null;
var inst_23728 = (0);
var inst_23729 = (0);
var state_23786__$1 = (function (){var statearr_23823 = state_23786;
(statearr_23823[(27)] = inst_23761);

(statearr_23823[(10)] = inst_23729);

(statearr_23823[(20)] = inst_23726);

(statearr_23823[(11)] = inst_23727);

(statearr_23823[(21)] = inst_23728);

return statearr_23823;
})();
var statearr_23824_23892 = state_23786__$1;
(statearr_23824_23892[(2)] = null);

(statearr_23824_23892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (43))){
var state_23786__$1 = state_23786;
var statearr_23825_23893 = state_23786__$1;
(statearr_23825_23893[(2)] = null);

(statearr_23825_23893[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (29))){
var inst_23770 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23826_23894 = state_23786__$1;
(statearr_23826_23894[(2)] = inst_23770);

(statearr_23826_23894[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (44))){
var inst_23779 = (state_23786[(2)]);
var state_23786__$1 = (function (){var statearr_23827 = state_23786;
(statearr_23827[(28)] = inst_23779);

return statearr_23827;
})();
var statearr_23828_23895 = state_23786__$1;
(statearr_23828_23895[(2)] = null);

(statearr_23828_23895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (6))){
var inst_23718 = (state_23786[(29)]);
var inst_23717 = cljs.core.deref.call(null,cs);
var inst_23718__$1 = cljs.core.keys.call(null,inst_23717);
var inst_23719 = cljs.core.count.call(null,inst_23718__$1);
var inst_23720 = cljs.core.reset_BANG_.call(null,dctr,inst_23719);
var inst_23725 = cljs.core.seq.call(null,inst_23718__$1);
var inst_23726 = inst_23725;
var inst_23727 = null;
var inst_23728 = (0);
var inst_23729 = (0);
var state_23786__$1 = (function (){var statearr_23829 = state_23786;
(statearr_23829[(10)] = inst_23729);

(statearr_23829[(20)] = inst_23726);

(statearr_23829[(30)] = inst_23720);

(statearr_23829[(11)] = inst_23727);

(statearr_23829[(29)] = inst_23718__$1);

(statearr_23829[(21)] = inst_23728);

return statearr_23829;
})();
var statearr_23830_23896 = state_23786__$1;
(statearr_23830_23896[(2)] = null);

(statearr_23830_23896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (28))){
var inst_23726 = (state_23786[(20)]);
var inst_23745 = (state_23786[(25)]);
var inst_23745__$1 = cljs.core.seq.call(null,inst_23726);
var state_23786__$1 = (function (){var statearr_23831 = state_23786;
(statearr_23831[(25)] = inst_23745__$1);

return statearr_23831;
})();
if(inst_23745__$1){
var statearr_23832_23897 = state_23786__$1;
(statearr_23832_23897[(1)] = (33));

} else {
var statearr_23833_23898 = state_23786__$1;
(statearr_23833_23898[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (25))){
var inst_23729 = (state_23786[(10)]);
var inst_23728 = (state_23786[(21)]);
var inst_23731 = (inst_23729 < inst_23728);
var inst_23732 = inst_23731;
var state_23786__$1 = state_23786;
if(cljs.core.truth_(inst_23732)){
var statearr_23834_23899 = state_23786__$1;
(statearr_23834_23899[(1)] = (27));

} else {
var statearr_23835_23900 = state_23786__$1;
(statearr_23835_23900[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (34))){
var state_23786__$1 = state_23786;
var statearr_23836_23901 = state_23786__$1;
(statearr_23836_23901[(2)] = null);

(statearr_23836_23901[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (17))){
var state_23786__$1 = state_23786;
var statearr_23837_23902 = state_23786__$1;
(statearr_23837_23902[(2)] = null);

(statearr_23837_23902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (3))){
var inst_23784 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23786__$1,inst_23784);
} else {
if((state_val_23787 === (12))){
var inst_23713 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23838_23903 = state_23786__$1;
(statearr_23838_23903[(2)] = inst_23713);

(statearr_23838_23903[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (2))){
var state_23786__$1 = state_23786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23786__$1,(4),ch);
} else {
if((state_val_23787 === (23))){
var state_23786__$1 = state_23786;
var statearr_23839_23904 = state_23786__$1;
(statearr_23839_23904[(2)] = null);

(statearr_23839_23904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (35))){
var inst_23768 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23840_23905 = state_23786__$1;
(statearr_23840_23905[(2)] = inst_23768);

(statearr_23840_23905[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (19))){
var inst_23685 = (state_23786[(7)]);
var inst_23689 = cljs.core.chunk_first.call(null,inst_23685);
var inst_23690 = cljs.core.chunk_rest.call(null,inst_23685);
var inst_23691 = cljs.core.count.call(null,inst_23689);
var inst_23663 = inst_23690;
var inst_23664 = inst_23689;
var inst_23665 = inst_23691;
var inst_23666 = (0);
var state_23786__$1 = (function (){var statearr_23841 = state_23786;
(statearr_23841[(14)] = inst_23663);

(statearr_23841[(15)] = inst_23665);

(statearr_23841[(16)] = inst_23664);

(statearr_23841[(17)] = inst_23666);

return statearr_23841;
})();
var statearr_23842_23906 = state_23786__$1;
(statearr_23842_23906[(2)] = null);

(statearr_23842_23906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (11))){
var inst_23663 = (state_23786[(14)]);
var inst_23685 = (state_23786[(7)]);
var inst_23685__$1 = cljs.core.seq.call(null,inst_23663);
var state_23786__$1 = (function (){var statearr_23843 = state_23786;
(statearr_23843[(7)] = inst_23685__$1);

return statearr_23843;
})();
if(inst_23685__$1){
var statearr_23844_23907 = state_23786__$1;
(statearr_23844_23907[(1)] = (16));

} else {
var statearr_23845_23908 = state_23786__$1;
(statearr_23845_23908[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (9))){
var inst_23715 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23846_23909 = state_23786__$1;
(statearr_23846_23909[(2)] = inst_23715);

(statearr_23846_23909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (5))){
var inst_23661 = cljs.core.deref.call(null,cs);
var inst_23662 = cljs.core.seq.call(null,inst_23661);
var inst_23663 = inst_23662;
var inst_23664 = null;
var inst_23665 = (0);
var inst_23666 = (0);
var state_23786__$1 = (function (){var statearr_23847 = state_23786;
(statearr_23847[(14)] = inst_23663);

(statearr_23847[(15)] = inst_23665);

(statearr_23847[(16)] = inst_23664);

(statearr_23847[(17)] = inst_23666);

return statearr_23847;
})();
var statearr_23848_23910 = state_23786__$1;
(statearr_23848_23910[(2)] = null);

(statearr_23848_23910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (14))){
var state_23786__$1 = state_23786;
var statearr_23849_23911 = state_23786__$1;
(statearr_23849_23911[(2)] = null);

(statearr_23849_23911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (45))){
var inst_23776 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23850_23912 = state_23786__$1;
(statearr_23850_23912[(2)] = inst_23776);

(statearr_23850_23912[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (26))){
var inst_23718 = (state_23786[(29)]);
var inst_23772 = (state_23786[(2)]);
var inst_23773 = cljs.core.seq.call(null,inst_23718);
var state_23786__$1 = (function (){var statearr_23851 = state_23786;
(statearr_23851[(31)] = inst_23772);

return statearr_23851;
})();
if(inst_23773){
var statearr_23852_23913 = state_23786__$1;
(statearr_23852_23913[(1)] = (42));

} else {
var statearr_23853_23914 = state_23786__$1;
(statearr_23853_23914[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (16))){
var inst_23685 = (state_23786[(7)]);
var inst_23687 = cljs.core.chunked_seq_QMARK_.call(null,inst_23685);
var state_23786__$1 = state_23786;
if(inst_23687){
var statearr_23854_23915 = state_23786__$1;
(statearr_23854_23915[(1)] = (19));

} else {
var statearr_23855_23916 = state_23786__$1;
(statearr_23855_23916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (38))){
var inst_23765 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23856_23917 = state_23786__$1;
(statearr_23856_23917[(2)] = inst_23765);

(statearr_23856_23917[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (30))){
var state_23786__$1 = state_23786;
var statearr_23857_23918 = state_23786__$1;
(statearr_23857_23918[(2)] = null);

(statearr_23857_23918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (10))){
var inst_23664 = (state_23786[(16)]);
var inst_23666 = (state_23786[(17)]);
var inst_23674 = cljs.core._nth.call(null,inst_23664,inst_23666);
var inst_23675 = cljs.core.nth.call(null,inst_23674,(0),null);
var inst_23676 = cljs.core.nth.call(null,inst_23674,(1),null);
var state_23786__$1 = (function (){var statearr_23858 = state_23786;
(statearr_23858[(26)] = inst_23675);

return statearr_23858;
})();
if(cljs.core.truth_(inst_23676)){
var statearr_23859_23919 = state_23786__$1;
(statearr_23859_23919[(1)] = (13));

} else {
var statearr_23860_23920 = state_23786__$1;
(statearr_23860_23920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (18))){
var inst_23711 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23861_23921 = state_23786__$1;
(statearr_23861_23921[(2)] = inst_23711);

(statearr_23861_23921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (42))){
var state_23786__$1 = state_23786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23786__$1,(45),dchan);
} else {
if((state_val_23787 === (37))){
var inst_23754 = (state_23786[(23)]);
var inst_23745 = (state_23786[(25)]);
var inst_23654 = (state_23786[(12)]);
var inst_23754__$1 = cljs.core.first.call(null,inst_23745);
var inst_23755 = cljs.core.async.put_BANG_.call(null,inst_23754__$1,inst_23654,done);
var state_23786__$1 = (function (){var statearr_23862 = state_23786;
(statearr_23862[(23)] = inst_23754__$1);

return statearr_23862;
})();
if(cljs.core.truth_(inst_23755)){
var statearr_23863_23922 = state_23786__$1;
(statearr_23863_23922[(1)] = (39));

} else {
var statearr_23864_23923 = state_23786__$1;
(statearr_23864_23923[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (8))){
var inst_23665 = (state_23786[(15)]);
var inst_23666 = (state_23786[(17)]);
var inst_23668 = (inst_23666 < inst_23665);
var inst_23669 = inst_23668;
var state_23786__$1 = state_23786;
if(cljs.core.truth_(inst_23669)){
var statearr_23865_23924 = state_23786__$1;
(statearr_23865_23924[(1)] = (10));

} else {
var statearr_23866_23925 = state_23786__$1;
(statearr_23866_23925[(1)] = (11));

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
});})(c__21188__auto___23871,cs,m,dchan,dctr,done))
;
return ((function (switch__21021__auto__,c__21188__auto___23871,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21022__auto__ = null;
var cljs$core$async$mult_$_state_machine__21022__auto____0 = (function (){
var statearr_23867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23867[(0)] = cljs$core$async$mult_$_state_machine__21022__auto__);

(statearr_23867[(1)] = (1));

return statearr_23867;
});
var cljs$core$async$mult_$_state_machine__21022__auto____1 = (function (state_23786){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_23786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e23868){if((e23868 instanceof Object)){
var ex__21025__auto__ = e23868;
var statearr_23869_23926 = state_23786;
(statearr_23869_23926[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23927 = state_23786;
state_23786 = G__23927;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21022__auto__ = function(state_23786){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21022__auto____1.call(this,state_23786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21022__auto____0;
cljs$core$async$mult_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21022__auto____1;
return cljs$core$async$mult_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___23871,cs,m,dchan,dctr,done))
})();
var state__21190__auto__ = (function (){var statearr_23870 = f__21189__auto__.call(null);
(statearr_23870[(6)] = c__21188__auto___23871);

return statearr_23870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___23871,cs,m,dchan,dctr,done))
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
var G__23929 = arguments.length;
switch (G__23929) {
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
var len__4730__auto___23941 = arguments.length;
var i__4731__auto___23942 = (0);
while(true){
if((i__4731__auto___23942 < len__4730__auto___23941)){
args__4736__auto__.push((arguments[i__4731__auto___23942]));

var G__23943 = (i__4731__auto___23942 + (1));
i__4731__auto___23942 = G__23943;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23935){
var map__23936 = p__23935;
var map__23936__$1 = (((((!((map__23936 == null))))?(((((map__23936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23936):map__23936);
var opts = map__23936__$1;
var statearr_23938_23944 = state;
(statearr_23938_23944[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__23936,map__23936__$1,opts){
return (function (val){
var statearr_23939_23945 = state;
(statearr_23939_23945[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23936,map__23936__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_23940_23946 = state;
(statearr_23940_23946[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23931){
var G__23932 = cljs.core.first.call(null,seq23931);
var seq23931__$1 = cljs.core.next.call(null,seq23931);
var G__23933 = cljs.core.first.call(null,seq23931__$1);
var seq23931__$2 = cljs.core.next.call(null,seq23931__$1);
var G__23934 = cljs.core.first.call(null,seq23931__$2);
var seq23931__$3 = cljs.core.next.call(null,seq23931__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23932,G__23933,G__23934,seq23931__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23947 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23948){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23948 = meta23948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23949,meta23948__$1){
var self__ = this;
var _23949__$1 = this;
return (new cljs.core.async.t_cljs$core$async23947(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23948__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23949){
var self__ = this;
var _23949__$1 = this;
return self__.meta23948;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23947.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23947.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23947.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23947.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23947.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23947.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23947.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23947.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23947.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23948","meta23948",-1515622134,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23947";

cljs.core.async.t_cljs$core$async23947.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23947");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23947.
 */
cljs.core.async.__GT_t_cljs$core$async23947 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23947(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23948){
return (new cljs.core.async.t_cljs$core$async23947(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23948));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23947(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21188__auto___24111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___24111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___24111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24051){
var state_val_24052 = (state_24051[(1)]);
if((state_val_24052 === (7))){
var inst_23966 = (state_24051[(2)]);
var state_24051__$1 = state_24051;
var statearr_24053_24112 = state_24051__$1;
(statearr_24053_24112[(2)] = inst_23966);

(statearr_24053_24112[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (20))){
var inst_23978 = (state_24051[(7)]);
var state_24051__$1 = state_24051;
var statearr_24054_24113 = state_24051__$1;
(statearr_24054_24113[(2)] = inst_23978);

(statearr_24054_24113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (27))){
var state_24051__$1 = state_24051;
var statearr_24055_24114 = state_24051__$1;
(statearr_24055_24114[(2)] = null);

(statearr_24055_24114[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (1))){
var inst_23953 = (state_24051[(8)]);
var inst_23953__$1 = calc_state.call(null);
var inst_23955 = (inst_23953__$1 == null);
var inst_23956 = cljs.core.not.call(null,inst_23955);
var state_24051__$1 = (function (){var statearr_24056 = state_24051;
(statearr_24056[(8)] = inst_23953__$1);

return statearr_24056;
})();
if(inst_23956){
var statearr_24057_24115 = state_24051__$1;
(statearr_24057_24115[(1)] = (2));

} else {
var statearr_24058_24116 = state_24051__$1;
(statearr_24058_24116[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (24))){
var inst_24025 = (state_24051[(9)]);
var inst_24011 = (state_24051[(10)]);
var inst_24002 = (state_24051[(11)]);
var inst_24025__$1 = inst_24002.call(null,inst_24011);
var state_24051__$1 = (function (){var statearr_24059 = state_24051;
(statearr_24059[(9)] = inst_24025__$1);

return statearr_24059;
})();
if(cljs.core.truth_(inst_24025__$1)){
var statearr_24060_24117 = state_24051__$1;
(statearr_24060_24117[(1)] = (29));

} else {
var statearr_24061_24118 = state_24051__$1;
(statearr_24061_24118[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (4))){
var inst_23969 = (state_24051[(2)]);
var state_24051__$1 = state_24051;
if(cljs.core.truth_(inst_23969)){
var statearr_24062_24119 = state_24051__$1;
(statearr_24062_24119[(1)] = (8));

} else {
var statearr_24063_24120 = state_24051__$1;
(statearr_24063_24120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (15))){
var inst_23996 = (state_24051[(2)]);
var state_24051__$1 = state_24051;
if(cljs.core.truth_(inst_23996)){
var statearr_24064_24121 = state_24051__$1;
(statearr_24064_24121[(1)] = (19));

} else {
var statearr_24065_24122 = state_24051__$1;
(statearr_24065_24122[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (21))){
var inst_24001 = (state_24051[(12)]);
var inst_24001__$1 = (state_24051[(2)]);
var inst_24002 = cljs.core.get.call(null,inst_24001__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24003 = cljs.core.get.call(null,inst_24001__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24004 = cljs.core.get.call(null,inst_24001__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24051__$1 = (function (){var statearr_24066 = state_24051;
(statearr_24066[(12)] = inst_24001__$1);

(statearr_24066[(13)] = inst_24003);

(statearr_24066[(11)] = inst_24002);

return statearr_24066;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24051__$1,(22),inst_24004);
} else {
if((state_val_24052 === (31))){
var inst_24033 = (state_24051[(2)]);
var state_24051__$1 = state_24051;
if(cljs.core.truth_(inst_24033)){
var statearr_24067_24123 = state_24051__$1;
(statearr_24067_24123[(1)] = (32));

} else {
var statearr_24068_24124 = state_24051__$1;
(statearr_24068_24124[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (32))){
var inst_24010 = (state_24051[(14)]);
var state_24051__$1 = state_24051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24051__$1,(35),out,inst_24010);
} else {
if((state_val_24052 === (33))){
var inst_24001 = (state_24051[(12)]);
var inst_23978 = inst_24001;
var state_24051__$1 = (function (){var statearr_24069 = state_24051;
(statearr_24069[(7)] = inst_23978);

return statearr_24069;
})();
var statearr_24070_24125 = state_24051__$1;
(statearr_24070_24125[(2)] = null);

(statearr_24070_24125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (13))){
var inst_23978 = (state_24051[(7)]);
var inst_23985 = inst_23978.cljs$lang$protocol_mask$partition0$;
var inst_23986 = (inst_23985 & (64));
var inst_23987 = inst_23978.cljs$core$ISeq$;
var inst_23988 = (cljs.core.PROTOCOL_SENTINEL === inst_23987);
var inst_23989 = ((inst_23986) || (inst_23988));
var state_24051__$1 = state_24051;
if(cljs.core.truth_(inst_23989)){
var statearr_24071_24126 = state_24051__$1;
(statearr_24071_24126[(1)] = (16));

} else {
var statearr_24072_24127 = state_24051__$1;
(statearr_24072_24127[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (22))){
var inst_24010 = (state_24051[(14)]);
var inst_24011 = (state_24051[(10)]);
var inst_24009 = (state_24051[(2)]);
var inst_24010__$1 = cljs.core.nth.call(null,inst_24009,(0),null);
var inst_24011__$1 = cljs.core.nth.call(null,inst_24009,(1),null);
var inst_24012 = (inst_24010__$1 == null);
var inst_24013 = cljs.core._EQ_.call(null,inst_24011__$1,change);
var inst_24014 = ((inst_24012) || (inst_24013));
var state_24051__$1 = (function (){var statearr_24073 = state_24051;
(statearr_24073[(14)] = inst_24010__$1);

(statearr_24073[(10)] = inst_24011__$1);

return statearr_24073;
})();
if(cljs.core.truth_(inst_24014)){
var statearr_24074_24128 = state_24051__$1;
(statearr_24074_24128[(1)] = (23));

} else {
var statearr_24075_24129 = state_24051__$1;
(statearr_24075_24129[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (36))){
var inst_24001 = (state_24051[(12)]);
var inst_23978 = inst_24001;
var state_24051__$1 = (function (){var statearr_24076 = state_24051;
(statearr_24076[(7)] = inst_23978);

return statearr_24076;
})();
var statearr_24077_24130 = state_24051__$1;
(statearr_24077_24130[(2)] = null);

(statearr_24077_24130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (29))){
var inst_24025 = (state_24051[(9)]);
var state_24051__$1 = state_24051;
var statearr_24078_24131 = state_24051__$1;
(statearr_24078_24131[(2)] = inst_24025);

(statearr_24078_24131[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (6))){
var state_24051__$1 = state_24051;
var statearr_24079_24132 = state_24051__$1;
(statearr_24079_24132[(2)] = false);

(statearr_24079_24132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (28))){
var inst_24021 = (state_24051[(2)]);
var inst_24022 = calc_state.call(null);
var inst_23978 = inst_24022;
var state_24051__$1 = (function (){var statearr_24080 = state_24051;
(statearr_24080[(15)] = inst_24021);

(statearr_24080[(7)] = inst_23978);

return statearr_24080;
})();
var statearr_24081_24133 = state_24051__$1;
(statearr_24081_24133[(2)] = null);

(statearr_24081_24133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (25))){
var inst_24047 = (state_24051[(2)]);
var state_24051__$1 = state_24051;
var statearr_24082_24134 = state_24051__$1;
(statearr_24082_24134[(2)] = inst_24047);

(statearr_24082_24134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (34))){
var inst_24045 = (state_24051[(2)]);
var state_24051__$1 = state_24051;
var statearr_24083_24135 = state_24051__$1;
(statearr_24083_24135[(2)] = inst_24045);

(statearr_24083_24135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (17))){
var state_24051__$1 = state_24051;
var statearr_24084_24136 = state_24051__$1;
(statearr_24084_24136[(2)] = false);

(statearr_24084_24136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (3))){
var state_24051__$1 = state_24051;
var statearr_24085_24137 = state_24051__$1;
(statearr_24085_24137[(2)] = false);

(statearr_24085_24137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (12))){
var inst_24049 = (state_24051[(2)]);
var state_24051__$1 = state_24051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24051__$1,inst_24049);
} else {
if((state_val_24052 === (2))){
var inst_23953 = (state_24051[(8)]);
var inst_23958 = inst_23953.cljs$lang$protocol_mask$partition0$;
var inst_23959 = (inst_23958 & (64));
var inst_23960 = inst_23953.cljs$core$ISeq$;
var inst_23961 = (cljs.core.PROTOCOL_SENTINEL === inst_23960);
var inst_23962 = ((inst_23959) || (inst_23961));
var state_24051__$1 = state_24051;
if(cljs.core.truth_(inst_23962)){
var statearr_24086_24138 = state_24051__$1;
(statearr_24086_24138[(1)] = (5));

} else {
var statearr_24087_24139 = state_24051__$1;
(statearr_24087_24139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (23))){
var inst_24010 = (state_24051[(14)]);
var inst_24016 = (inst_24010 == null);
var state_24051__$1 = state_24051;
if(cljs.core.truth_(inst_24016)){
var statearr_24088_24140 = state_24051__$1;
(statearr_24088_24140[(1)] = (26));

} else {
var statearr_24089_24141 = state_24051__$1;
(statearr_24089_24141[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (35))){
var inst_24036 = (state_24051[(2)]);
var state_24051__$1 = state_24051;
if(cljs.core.truth_(inst_24036)){
var statearr_24090_24142 = state_24051__$1;
(statearr_24090_24142[(1)] = (36));

} else {
var statearr_24091_24143 = state_24051__$1;
(statearr_24091_24143[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (19))){
var inst_23978 = (state_24051[(7)]);
var inst_23998 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23978);
var state_24051__$1 = state_24051;
var statearr_24092_24144 = state_24051__$1;
(statearr_24092_24144[(2)] = inst_23998);

(statearr_24092_24144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (11))){
var inst_23978 = (state_24051[(7)]);
var inst_23982 = (inst_23978 == null);
var inst_23983 = cljs.core.not.call(null,inst_23982);
var state_24051__$1 = state_24051;
if(inst_23983){
var statearr_24093_24145 = state_24051__$1;
(statearr_24093_24145[(1)] = (13));

} else {
var statearr_24094_24146 = state_24051__$1;
(statearr_24094_24146[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (9))){
var inst_23953 = (state_24051[(8)]);
var state_24051__$1 = state_24051;
var statearr_24095_24147 = state_24051__$1;
(statearr_24095_24147[(2)] = inst_23953);

(statearr_24095_24147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (5))){
var state_24051__$1 = state_24051;
var statearr_24096_24148 = state_24051__$1;
(statearr_24096_24148[(2)] = true);

(statearr_24096_24148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (14))){
var state_24051__$1 = state_24051;
var statearr_24097_24149 = state_24051__$1;
(statearr_24097_24149[(2)] = false);

(statearr_24097_24149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (26))){
var inst_24011 = (state_24051[(10)]);
var inst_24018 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24011);
var state_24051__$1 = state_24051;
var statearr_24098_24150 = state_24051__$1;
(statearr_24098_24150[(2)] = inst_24018);

(statearr_24098_24150[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (16))){
var state_24051__$1 = state_24051;
var statearr_24099_24151 = state_24051__$1;
(statearr_24099_24151[(2)] = true);

(statearr_24099_24151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (38))){
var inst_24041 = (state_24051[(2)]);
var state_24051__$1 = state_24051;
var statearr_24100_24152 = state_24051__$1;
(statearr_24100_24152[(2)] = inst_24041);

(statearr_24100_24152[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (30))){
var inst_24003 = (state_24051[(13)]);
var inst_24011 = (state_24051[(10)]);
var inst_24002 = (state_24051[(11)]);
var inst_24028 = cljs.core.empty_QMARK_.call(null,inst_24002);
var inst_24029 = inst_24003.call(null,inst_24011);
var inst_24030 = cljs.core.not.call(null,inst_24029);
var inst_24031 = ((inst_24028) && (inst_24030));
var state_24051__$1 = state_24051;
var statearr_24101_24153 = state_24051__$1;
(statearr_24101_24153[(2)] = inst_24031);

(statearr_24101_24153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (10))){
var inst_23953 = (state_24051[(8)]);
var inst_23974 = (state_24051[(2)]);
var inst_23975 = cljs.core.get.call(null,inst_23974,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23976 = cljs.core.get.call(null,inst_23974,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23977 = cljs.core.get.call(null,inst_23974,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23978 = inst_23953;
var state_24051__$1 = (function (){var statearr_24102 = state_24051;
(statearr_24102[(16)] = inst_23975);

(statearr_24102[(17)] = inst_23977);

(statearr_24102[(18)] = inst_23976);

(statearr_24102[(7)] = inst_23978);

return statearr_24102;
})();
var statearr_24103_24154 = state_24051__$1;
(statearr_24103_24154[(2)] = null);

(statearr_24103_24154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (18))){
var inst_23993 = (state_24051[(2)]);
var state_24051__$1 = state_24051;
var statearr_24104_24155 = state_24051__$1;
(statearr_24104_24155[(2)] = inst_23993);

(statearr_24104_24155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (37))){
var state_24051__$1 = state_24051;
var statearr_24105_24156 = state_24051__$1;
(statearr_24105_24156[(2)] = null);

(statearr_24105_24156[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (8))){
var inst_23953 = (state_24051[(8)]);
var inst_23971 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23953);
var state_24051__$1 = state_24051;
var statearr_24106_24157 = state_24051__$1;
(statearr_24106_24157[(2)] = inst_23971);

(statearr_24106_24157[(1)] = (10));


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
});})(c__21188__auto___24111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21021__auto__,c__21188__auto___24111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21022__auto__ = null;
var cljs$core$async$mix_$_state_machine__21022__auto____0 = (function (){
var statearr_24107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24107[(0)] = cljs$core$async$mix_$_state_machine__21022__auto__);

(statearr_24107[(1)] = (1));

return statearr_24107;
});
var cljs$core$async$mix_$_state_machine__21022__auto____1 = (function (state_24051){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_24051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e24108){if((e24108 instanceof Object)){
var ex__21025__auto__ = e24108;
var statearr_24109_24158 = state_24051;
(statearr_24109_24158[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24159 = state_24051;
state_24051 = G__24159;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21022__auto__ = function(state_24051){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21022__auto____1.call(this,state_24051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21022__auto____0;
cljs$core$async$mix_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21022__auto____1;
return cljs$core$async$mix_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___24111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21190__auto__ = (function (){var statearr_24110 = f__21189__auto__.call(null);
(statearr_24110[(6)] = c__21188__auto___24111);

return statearr_24110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___24111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__24161 = arguments.length;
switch (G__24161) {
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
var G__24165 = arguments.length;
switch (G__24165) {
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
return (function (p1__24163_SHARP_){
if(cljs.core.truth_(p1__24163_SHARP_.call(null,topic))){
return p1__24163_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24163_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24166 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24167){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24167 = meta24167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24168,meta24167__$1){
var self__ = this;
var _24168__$1 = this;
return (new cljs.core.async.t_cljs$core$async24166(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24167__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24168){
var self__ = this;
var _24168__$1 = this;
return self__.meta24167;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24166.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24167","meta24167",1449765836,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24166.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24166";

cljs.core.async.t_cljs$core$async24166.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24166");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24166.
 */
cljs.core.async.__GT_t_cljs$core$async24166 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24166(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24167){
return (new cljs.core.async.t_cljs$core$async24166(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24167));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24166(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21188__auto___24286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___24286,mults,ensure_mult,p){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___24286,mults,ensure_mult,p){
return (function (state_24240){
var state_val_24241 = (state_24240[(1)]);
if((state_val_24241 === (7))){
var inst_24236 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24242_24287 = state_24240__$1;
(statearr_24242_24287[(2)] = inst_24236);

(statearr_24242_24287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (20))){
var state_24240__$1 = state_24240;
var statearr_24243_24288 = state_24240__$1;
(statearr_24243_24288[(2)] = null);

(statearr_24243_24288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (1))){
var state_24240__$1 = state_24240;
var statearr_24244_24289 = state_24240__$1;
(statearr_24244_24289[(2)] = null);

(statearr_24244_24289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (24))){
var inst_24219 = (state_24240[(7)]);
var inst_24228 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24219);
var state_24240__$1 = state_24240;
var statearr_24245_24290 = state_24240__$1;
(statearr_24245_24290[(2)] = inst_24228);

(statearr_24245_24290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (4))){
var inst_24171 = (state_24240[(8)]);
var inst_24171__$1 = (state_24240[(2)]);
var inst_24172 = (inst_24171__$1 == null);
var state_24240__$1 = (function (){var statearr_24246 = state_24240;
(statearr_24246[(8)] = inst_24171__$1);

return statearr_24246;
})();
if(cljs.core.truth_(inst_24172)){
var statearr_24247_24291 = state_24240__$1;
(statearr_24247_24291[(1)] = (5));

} else {
var statearr_24248_24292 = state_24240__$1;
(statearr_24248_24292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (15))){
var inst_24213 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24249_24293 = state_24240__$1;
(statearr_24249_24293[(2)] = inst_24213);

(statearr_24249_24293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (21))){
var inst_24233 = (state_24240[(2)]);
var state_24240__$1 = (function (){var statearr_24250 = state_24240;
(statearr_24250[(9)] = inst_24233);

return statearr_24250;
})();
var statearr_24251_24294 = state_24240__$1;
(statearr_24251_24294[(2)] = null);

(statearr_24251_24294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (13))){
var inst_24195 = (state_24240[(10)]);
var inst_24197 = cljs.core.chunked_seq_QMARK_.call(null,inst_24195);
var state_24240__$1 = state_24240;
if(inst_24197){
var statearr_24252_24295 = state_24240__$1;
(statearr_24252_24295[(1)] = (16));

} else {
var statearr_24253_24296 = state_24240__$1;
(statearr_24253_24296[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (22))){
var inst_24225 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
if(cljs.core.truth_(inst_24225)){
var statearr_24254_24297 = state_24240__$1;
(statearr_24254_24297[(1)] = (23));

} else {
var statearr_24255_24298 = state_24240__$1;
(statearr_24255_24298[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (6))){
var inst_24171 = (state_24240[(8)]);
var inst_24219 = (state_24240[(7)]);
var inst_24221 = (state_24240[(11)]);
var inst_24219__$1 = topic_fn.call(null,inst_24171);
var inst_24220 = cljs.core.deref.call(null,mults);
var inst_24221__$1 = cljs.core.get.call(null,inst_24220,inst_24219__$1);
var state_24240__$1 = (function (){var statearr_24256 = state_24240;
(statearr_24256[(7)] = inst_24219__$1);

(statearr_24256[(11)] = inst_24221__$1);

return statearr_24256;
})();
if(cljs.core.truth_(inst_24221__$1)){
var statearr_24257_24299 = state_24240__$1;
(statearr_24257_24299[(1)] = (19));

} else {
var statearr_24258_24300 = state_24240__$1;
(statearr_24258_24300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (25))){
var inst_24230 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24259_24301 = state_24240__$1;
(statearr_24259_24301[(2)] = inst_24230);

(statearr_24259_24301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (17))){
var inst_24195 = (state_24240[(10)]);
var inst_24204 = cljs.core.first.call(null,inst_24195);
var inst_24205 = cljs.core.async.muxch_STAR_.call(null,inst_24204);
var inst_24206 = cljs.core.async.close_BANG_.call(null,inst_24205);
var inst_24207 = cljs.core.next.call(null,inst_24195);
var inst_24181 = inst_24207;
var inst_24182 = null;
var inst_24183 = (0);
var inst_24184 = (0);
var state_24240__$1 = (function (){var statearr_24260 = state_24240;
(statearr_24260[(12)] = inst_24206);

(statearr_24260[(13)] = inst_24183);

(statearr_24260[(14)] = inst_24184);

(statearr_24260[(15)] = inst_24182);

(statearr_24260[(16)] = inst_24181);

return statearr_24260;
})();
var statearr_24261_24302 = state_24240__$1;
(statearr_24261_24302[(2)] = null);

(statearr_24261_24302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (3))){
var inst_24238 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24240__$1,inst_24238);
} else {
if((state_val_24241 === (12))){
var inst_24215 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24262_24303 = state_24240__$1;
(statearr_24262_24303[(2)] = inst_24215);

(statearr_24262_24303[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (2))){
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24240__$1,(4),ch);
} else {
if((state_val_24241 === (23))){
var state_24240__$1 = state_24240;
var statearr_24263_24304 = state_24240__$1;
(statearr_24263_24304[(2)] = null);

(statearr_24263_24304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (19))){
var inst_24171 = (state_24240[(8)]);
var inst_24221 = (state_24240[(11)]);
var inst_24223 = cljs.core.async.muxch_STAR_.call(null,inst_24221);
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24240__$1,(22),inst_24223,inst_24171);
} else {
if((state_val_24241 === (11))){
var inst_24195 = (state_24240[(10)]);
var inst_24181 = (state_24240[(16)]);
var inst_24195__$1 = cljs.core.seq.call(null,inst_24181);
var state_24240__$1 = (function (){var statearr_24264 = state_24240;
(statearr_24264[(10)] = inst_24195__$1);

return statearr_24264;
})();
if(inst_24195__$1){
var statearr_24265_24305 = state_24240__$1;
(statearr_24265_24305[(1)] = (13));

} else {
var statearr_24266_24306 = state_24240__$1;
(statearr_24266_24306[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (9))){
var inst_24217 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24267_24307 = state_24240__$1;
(statearr_24267_24307[(2)] = inst_24217);

(statearr_24267_24307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (5))){
var inst_24178 = cljs.core.deref.call(null,mults);
var inst_24179 = cljs.core.vals.call(null,inst_24178);
var inst_24180 = cljs.core.seq.call(null,inst_24179);
var inst_24181 = inst_24180;
var inst_24182 = null;
var inst_24183 = (0);
var inst_24184 = (0);
var state_24240__$1 = (function (){var statearr_24268 = state_24240;
(statearr_24268[(13)] = inst_24183);

(statearr_24268[(14)] = inst_24184);

(statearr_24268[(15)] = inst_24182);

(statearr_24268[(16)] = inst_24181);

return statearr_24268;
})();
var statearr_24269_24308 = state_24240__$1;
(statearr_24269_24308[(2)] = null);

(statearr_24269_24308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (14))){
var state_24240__$1 = state_24240;
var statearr_24273_24309 = state_24240__$1;
(statearr_24273_24309[(2)] = null);

(statearr_24273_24309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (16))){
var inst_24195 = (state_24240[(10)]);
var inst_24199 = cljs.core.chunk_first.call(null,inst_24195);
var inst_24200 = cljs.core.chunk_rest.call(null,inst_24195);
var inst_24201 = cljs.core.count.call(null,inst_24199);
var inst_24181 = inst_24200;
var inst_24182 = inst_24199;
var inst_24183 = inst_24201;
var inst_24184 = (0);
var state_24240__$1 = (function (){var statearr_24274 = state_24240;
(statearr_24274[(13)] = inst_24183);

(statearr_24274[(14)] = inst_24184);

(statearr_24274[(15)] = inst_24182);

(statearr_24274[(16)] = inst_24181);

return statearr_24274;
})();
var statearr_24275_24310 = state_24240__$1;
(statearr_24275_24310[(2)] = null);

(statearr_24275_24310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (10))){
var inst_24183 = (state_24240[(13)]);
var inst_24184 = (state_24240[(14)]);
var inst_24182 = (state_24240[(15)]);
var inst_24181 = (state_24240[(16)]);
var inst_24189 = cljs.core._nth.call(null,inst_24182,inst_24184);
var inst_24190 = cljs.core.async.muxch_STAR_.call(null,inst_24189);
var inst_24191 = cljs.core.async.close_BANG_.call(null,inst_24190);
var inst_24192 = (inst_24184 + (1));
var tmp24270 = inst_24183;
var tmp24271 = inst_24182;
var tmp24272 = inst_24181;
var inst_24181__$1 = tmp24272;
var inst_24182__$1 = tmp24271;
var inst_24183__$1 = tmp24270;
var inst_24184__$1 = inst_24192;
var state_24240__$1 = (function (){var statearr_24276 = state_24240;
(statearr_24276[(13)] = inst_24183__$1);

(statearr_24276[(14)] = inst_24184__$1);

(statearr_24276[(15)] = inst_24182__$1);

(statearr_24276[(17)] = inst_24191);

(statearr_24276[(16)] = inst_24181__$1);

return statearr_24276;
})();
var statearr_24277_24311 = state_24240__$1;
(statearr_24277_24311[(2)] = null);

(statearr_24277_24311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (18))){
var inst_24210 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24278_24312 = state_24240__$1;
(statearr_24278_24312[(2)] = inst_24210);

(statearr_24278_24312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (8))){
var inst_24183 = (state_24240[(13)]);
var inst_24184 = (state_24240[(14)]);
var inst_24186 = (inst_24184 < inst_24183);
var inst_24187 = inst_24186;
var state_24240__$1 = state_24240;
if(cljs.core.truth_(inst_24187)){
var statearr_24279_24313 = state_24240__$1;
(statearr_24279_24313[(1)] = (10));

} else {
var statearr_24280_24314 = state_24240__$1;
(statearr_24280_24314[(1)] = (11));

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
});})(c__21188__auto___24286,mults,ensure_mult,p))
;
return ((function (switch__21021__auto__,c__21188__auto___24286,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21022__auto__ = null;
var cljs$core$async$state_machine__21022__auto____0 = (function (){
var statearr_24281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24281[(0)] = cljs$core$async$state_machine__21022__auto__);

(statearr_24281[(1)] = (1));

return statearr_24281;
});
var cljs$core$async$state_machine__21022__auto____1 = (function (state_24240){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_24240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e24282){if((e24282 instanceof Object)){
var ex__21025__auto__ = e24282;
var statearr_24283_24315 = state_24240;
(statearr_24283_24315[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24316 = state_24240;
state_24240 = G__24316;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$state_machine__21022__auto__ = function(state_24240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21022__auto____1.call(this,state_24240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21022__auto____0;
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21022__auto____1;
return cljs$core$async$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___24286,mults,ensure_mult,p))
})();
var state__21190__auto__ = (function (){var statearr_24284 = f__21189__auto__.call(null);
(statearr_24284[(6)] = c__21188__auto___24286);

return statearr_24284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___24286,mults,ensure_mult,p))
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
var G__24318 = arguments.length;
switch (G__24318) {
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
var G__24321 = arguments.length;
switch (G__24321) {
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
var G__24324 = arguments.length;
switch (G__24324) {
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
var c__21188__auto___24391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___24391,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___24391,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24363){
var state_val_24364 = (state_24363[(1)]);
if((state_val_24364 === (7))){
var state_24363__$1 = state_24363;
var statearr_24365_24392 = state_24363__$1;
(statearr_24365_24392[(2)] = null);

(statearr_24365_24392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (1))){
var state_24363__$1 = state_24363;
var statearr_24366_24393 = state_24363__$1;
(statearr_24366_24393[(2)] = null);

(statearr_24366_24393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (4))){
var inst_24327 = (state_24363[(7)]);
var inst_24329 = (inst_24327 < cnt);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24329)){
var statearr_24367_24394 = state_24363__$1;
(statearr_24367_24394[(1)] = (6));

} else {
var statearr_24368_24395 = state_24363__$1;
(statearr_24368_24395[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (15))){
var inst_24359 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24369_24396 = state_24363__$1;
(statearr_24369_24396[(2)] = inst_24359);

(statearr_24369_24396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (13))){
var inst_24352 = cljs.core.async.close_BANG_.call(null,out);
var state_24363__$1 = state_24363;
var statearr_24370_24397 = state_24363__$1;
(statearr_24370_24397[(2)] = inst_24352);

(statearr_24370_24397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (6))){
var state_24363__$1 = state_24363;
var statearr_24371_24398 = state_24363__$1;
(statearr_24371_24398[(2)] = null);

(statearr_24371_24398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (3))){
var inst_24361 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24363__$1,inst_24361);
} else {
if((state_val_24364 === (12))){
var inst_24349 = (state_24363[(8)]);
var inst_24349__$1 = (state_24363[(2)]);
var inst_24350 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24349__$1);
var state_24363__$1 = (function (){var statearr_24372 = state_24363;
(statearr_24372[(8)] = inst_24349__$1);

return statearr_24372;
})();
if(cljs.core.truth_(inst_24350)){
var statearr_24373_24399 = state_24363__$1;
(statearr_24373_24399[(1)] = (13));

} else {
var statearr_24374_24400 = state_24363__$1;
(statearr_24374_24400[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (2))){
var inst_24326 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24327 = (0);
var state_24363__$1 = (function (){var statearr_24375 = state_24363;
(statearr_24375[(7)] = inst_24327);

(statearr_24375[(9)] = inst_24326);

return statearr_24375;
})();
var statearr_24376_24401 = state_24363__$1;
(statearr_24376_24401[(2)] = null);

(statearr_24376_24401[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (11))){
var inst_24327 = (state_24363[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24363,(10),Object,null,(9));
var inst_24336 = chs__$1.call(null,inst_24327);
var inst_24337 = done.call(null,inst_24327);
var inst_24338 = cljs.core.async.take_BANG_.call(null,inst_24336,inst_24337);
var state_24363__$1 = state_24363;
var statearr_24377_24402 = state_24363__$1;
(statearr_24377_24402[(2)] = inst_24338);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24363__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (9))){
var inst_24327 = (state_24363[(7)]);
var inst_24340 = (state_24363[(2)]);
var inst_24341 = (inst_24327 + (1));
var inst_24327__$1 = inst_24341;
var state_24363__$1 = (function (){var statearr_24378 = state_24363;
(statearr_24378[(7)] = inst_24327__$1);

(statearr_24378[(10)] = inst_24340);

return statearr_24378;
})();
var statearr_24379_24403 = state_24363__$1;
(statearr_24379_24403[(2)] = null);

(statearr_24379_24403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (5))){
var inst_24347 = (state_24363[(2)]);
var state_24363__$1 = (function (){var statearr_24380 = state_24363;
(statearr_24380[(11)] = inst_24347);

return statearr_24380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24363__$1,(12),dchan);
} else {
if((state_val_24364 === (14))){
var inst_24349 = (state_24363[(8)]);
var inst_24354 = cljs.core.apply.call(null,f,inst_24349);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24363__$1,(16),out,inst_24354);
} else {
if((state_val_24364 === (16))){
var inst_24356 = (state_24363[(2)]);
var state_24363__$1 = (function (){var statearr_24381 = state_24363;
(statearr_24381[(12)] = inst_24356);

return statearr_24381;
})();
var statearr_24382_24404 = state_24363__$1;
(statearr_24382_24404[(2)] = null);

(statearr_24382_24404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (10))){
var inst_24331 = (state_24363[(2)]);
var inst_24332 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24363__$1 = (function (){var statearr_24383 = state_24363;
(statearr_24383[(13)] = inst_24331);

return statearr_24383;
})();
var statearr_24384_24405 = state_24363__$1;
(statearr_24384_24405[(2)] = inst_24332);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24363__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (8))){
var inst_24345 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24385_24406 = state_24363__$1;
(statearr_24385_24406[(2)] = inst_24345);

(statearr_24385_24406[(1)] = (5));


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
});})(c__21188__auto___24391,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21021__auto__,c__21188__auto___24391,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21022__auto__ = null;
var cljs$core$async$state_machine__21022__auto____0 = (function (){
var statearr_24386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24386[(0)] = cljs$core$async$state_machine__21022__auto__);

(statearr_24386[(1)] = (1));

return statearr_24386;
});
var cljs$core$async$state_machine__21022__auto____1 = (function (state_24363){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_24363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e24387){if((e24387 instanceof Object)){
var ex__21025__auto__ = e24387;
var statearr_24388_24407 = state_24363;
(statearr_24388_24407[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24408 = state_24363;
state_24363 = G__24408;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$state_machine__21022__auto__ = function(state_24363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21022__auto____1.call(this,state_24363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21022__auto____0;
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21022__auto____1;
return cljs$core$async$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___24391,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21190__auto__ = (function (){var statearr_24389 = f__21189__auto__.call(null);
(statearr_24389[(6)] = c__21188__auto___24391);

return statearr_24389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___24391,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24411 = arguments.length;
switch (G__24411) {
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
var c__21188__auto___24465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___24465,out){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___24465,out){
return (function (state_24443){
var state_val_24444 = (state_24443[(1)]);
if((state_val_24444 === (7))){
var inst_24423 = (state_24443[(7)]);
var inst_24422 = (state_24443[(8)]);
var inst_24422__$1 = (state_24443[(2)]);
var inst_24423__$1 = cljs.core.nth.call(null,inst_24422__$1,(0),null);
var inst_24424 = cljs.core.nth.call(null,inst_24422__$1,(1),null);
var inst_24425 = (inst_24423__$1 == null);
var state_24443__$1 = (function (){var statearr_24445 = state_24443;
(statearr_24445[(9)] = inst_24424);

(statearr_24445[(7)] = inst_24423__$1);

(statearr_24445[(8)] = inst_24422__$1);

return statearr_24445;
})();
if(cljs.core.truth_(inst_24425)){
var statearr_24446_24466 = state_24443__$1;
(statearr_24446_24466[(1)] = (8));

} else {
var statearr_24447_24467 = state_24443__$1;
(statearr_24447_24467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (1))){
var inst_24412 = cljs.core.vec.call(null,chs);
var inst_24413 = inst_24412;
var state_24443__$1 = (function (){var statearr_24448 = state_24443;
(statearr_24448[(10)] = inst_24413);

return statearr_24448;
})();
var statearr_24449_24468 = state_24443__$1;
(statearr_24449_24468[(2)] = null);

(statearr_24449_24468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (4))){
var inst_24413 = (state_24443[(10)]);
var state_24443__$1 = state_24443;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24443__$1,(7),inst_24413);
} else {
if((state_val_24444 === (6))){
var inst_24439 = (state_24443[(2)]);
var state_24443__$1 = state_24443;
var statearr_24450_24469 = state_24443__$1;
(statearr_24450_24469[(2)] = inst_24439);

(statearr_24450_24469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (3))){
var inst_24441 = (state_24443[(2)]);
var state_24443__$1 = state_24443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24443__$1,inst_24441);
} else {
if((state_val_24444 === (2))){
var inst_24413 = (state_24443[(10)]);
var inst_24415 = cljs.core.count.call(null,inst_24413);
var inst_24416 = (inst_24415 > (0));
var state_24443__$1 = state_24443;
if(cljs.core.truth_(inst_24416)){
var statearr_24452_24470 = state_24443__$1;
(statearr_24452_24470[(1)] = (4));

} else {
var statearr_24453_24471 = state_24443__$1;
(statearr_24453_24471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (11))){
var inst_24413 = (state_24443[(10)]);
var inst_24432 = (state_24443[(2)]);
var tmp24451 = inst_24413;
var inst_24413__$1 = tmp24451;
var state_24443__$1 = (function (){var statearr_24454 = state_24443;
(statearr_24454[(11)] = inst_24432);

(statearr_24454[(10)] = inst_24413__$1);

return statearr_24454;
})();
var statearr_24455_24472 = state_24443__$1;
(statearr_24455_24472[(2)] = null);

(statearr_24455_24472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (9))){
var inst_24423 = (state_24443[(7)]);
var state_24443__$1 = state_24443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24443__$1,(11),out,inst_24423);
} else {
if((state_val_24444 === (5))){
var inst_24437 = cljs.core.async.close_BANG_.call(null,out);
var state_24443__$1 = state_24443;
var statearr_24456_24473 = state_24443__$1;
(statearr_24456_24473[(2)] = inst_24437);

(statearr_24456_24473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (10))){
var inst_24435 = (state_24443[(2)]);
var state_24443__$1 = state_24443;
var statearr_24457_24474 = state_24443__$1;
(statearr_24457_24474[(2)] = inst_24435);

(statearr_24457_24474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (8))){
var inst_24424 = (state_24443[(9)]);
var inst_24413 = (state_24443[(10)]);
var inst_24423 = (state_24443[(7)]);
var inst_24422 = (state_24443[(8)]);
var inst_24427 = (function (){var cs = inst_24413;
var vec__24418 = inst_24422;
var v = inst_24423;
var c = inst_24424;
return ((function (cs,vec__24418,v,c,inst_24424,inst_24413,inst_24423,inst_24422,state_val_24444,c__21188__auto___24465,out){
return (function (p1__24409_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24409_SHARP_);
});
;})(cs,vec__24418,v,c,inst_24424,inst_24413,inst_24423,inst_24422,state_val_24444,c__21188__auto___24465,out))
})();
var inst_24428 = cljs.core.filterv.call(null,inst_24427,inst_24413);
var inst_24413__$1 = inst_24428;
var state_24443__$1 = (function (){var statearr_24458 = state_24443;
(statearr_24458[(10)] = inst_24413__$1);

return statearr_24458;
})();
var statearr_24459_24475 = state_24443__$1;
(statearr_24459_24475[(2)] = null);

(statearr_24459_24475[(1)] = (2));


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
});})(c__21188__auto___24465,out))
;
return ((function (switch__21021__auto__,c__21188__auto___24465,out){
return (function() {
var cljs$core$async$state_machine__21022__auto__ = null;
var cljs$core$async$state_machine__21022__auto____0 = (function (){
var statearr_24460 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24460[(0)] = cljs$core$async$state_machine__21022__auto__);

(statearr_24460[(1)] = (1));

return statearr_24460;
});
var cljs$core$async$state_machine__21022__auto____1 = (function (state_24443){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_24443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e24461){if((e24461 instanceof Object)){
var ex__21025__auto__ = e24461;
var statearr_24462_24476 = state_24443;
(statearr_24462_24476[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24477 = state_24443;
state_24443 = G__24477;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$state_machine__21022__auto__ = function(state_24443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21022__auto____1.call(this,state_24443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21022__auto____0;
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21022__auto____1;
return cljs$core$async$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___24465,out))
})();
var state__21190__auto__ = (function (){var statearr_24463 = f__21189__auto__.call(null);
(statearr_24463[(6)] = c__21188__auto___24465);

return statearr_24463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___24465,out))
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
var G__24479 = arguments.length;
switch (G__24479) {
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
var c__21188__auto___24524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___24524,out){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___24524,out){
return (function (state_24503){
var state_val_24504 = (state_24503[(1)]);
if((state_val_24504 === (7))){
var inst_24485 = (state_24503[(7)]);
var inst_24485__$1 = (state_24503[(2)]);
var inst_24486 = (inst_24485__$1 == null);
var inst_24487 = cljs.core.not.call(null,inst_24486);
var state_24503__$1 = (function (){var statearr_24505 = state_24503;
(statearr_24505[(7)] = inst_24485__$1);

return statearr_24505;
})();
if(inst_24487){
var statearr_24506_24525 = state_24503__$1;
(statearr_24506_24525[(1)] = (8));

} else {
var statearr_24507_24526 = state_24503__$1;
(statearr_24507_24526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (1))){
var inst_24480 = (0);
var state_24503__$1 = (function (){var statearr_24508 = state_24503;
(statearr_24508[(8)] = inst_24480);

return statearr_24508;
})();
var statearr_24509_24527 = state_24503__$1;
(statearr_24509_24527[(2)] = null);

(statearr_24509_24527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (4))){
var state_24503__$1 = state_24503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24503__$1,(7),ch);
} else {
if((state_val_24504 === (6))){
var inst_24498 = (state_24503[(2)]);
var state_24503__$1 = state_24503;
var statearr_24510_24528 = state_24503__$1;
(statearr_24510_24528[(2)] = inst_24498);

(statearr_24510_24528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (3))){
var inst_24500 = (state_24503[(2)]);
var inst_24501 = cljs.core.async.close_BANG_.call(null,out);
var state_24503__$1 = (function (){var statearr_24511 = state_24503;
(statearr_24511[(9)] = inst_24500);

return statearr_24511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24503__$1,inst_24501);
} else {
if((state_val_24504 === (2))){
var inst_24480 = (state_24503[(8)]);
var inst_24482 = (inst_24480 < n);
var state_24503__$1 = state_24503;
if(cljs.core.truth_(inst_24482)){
var statearr_24512_24529 = state_24503__$1;
(statearr_24512_24529[(1)] = (4));

} else {
var statearr_24513_24530 = state_24503__$1;
(statearr_24513_24530[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (11))){
var inst_24480 = (state_24503[(8)]);
var inst_24490 = (state_24503[(2)]);
var inst_24491 = (inst_24480 + (1));
var inst_24480__$1 = inst_24491;
var state_24503__$1 = (function (){var statearr_24514 = state_24503;
(statearr_24514[(8)] = inst_24480__$1);

(statearr_24514[(10)] = inst_24490);

return statearr_24514;
})();
var statearr_24515_24531 = state_24503__$1;
(statearr_24515_24531[(2)] = null);

(statearr_24515_24531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (9))){
var state_24503__$1 = state_24503;
var statearr_24516_24532 = state_24503__$1;
(statearr_24516_24532[(2)] = null);

(statearr_24516_24532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (5))){
var state_24503__$1 = state_24503;
var statearr_24517_24533 = state_24503__$1;
(statearr_24517_24533[(2)] = null);

(statearr_24517_24533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (10))){
var inst_24495 = (state_24503[(2)]);
var state_24503__$1 = state_24503;
var statearr_24518_24534 = state_24503__$1;
(statearr_24518_24534[(2)] = inst_24495);

(statearr_24518_24534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24504 === (8))){
var inst_24485 = (state_24503[(7)]);
var state_24503__$1 = state_24503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24503__$1,(11),out,inst_24485);
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
});})(c__21188__auto___24524,out))
;
return ((function (switch__21021__auto__,c__21188__auto___24524,out){
return (function() {
var cljs$core$async$state_machine__21022__auto__ = null;
var cljs$core$async$state_machine__21022__auto____0 = (function (){
var statearr_24519 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24519[(0)] = cljs$core$async$state_machine__21022__auto__);

(statearr_24519[(1)] = (1));

return statearr_24519;
});
var cljs$core$async$state_machine__21022__auto____1 = (function (state_24503){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_24503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e24520){if((e24520 instanceof Object)){
var ex__21025__auto__ = e24520;
var statearr_24521_24535 = state_24503;
(statearr_24521_24535[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24536 = state_24503;
state_24503 = G__24536;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$state_machine__21022__auto__ = function(state_24503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21022__auto____1.call(this,state_24503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21022__auto____0;
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21022__auto____1;
return cljs$core$async$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___24524,out))
})();
var state__21190__auto__ = (function (){var statearr_24522 = f__21189__auto__.call(null);
(statearr_24522[(6)] = c__21188__auto___24524);

return statearr_24522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___24524,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24538 = (function (f,ch,meta24539){
this.f = f;
this.ch = ch;
this.meta24539 = meta24539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24540,meta24539__$1){
var self__ = this;
var _24540__$1 = this;
return (new cljs.core.async.t_cljs$core$async24538(self__.f,self__.ch,meta24539__$1));
});

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24540){
var self__ = this;
var _24540__$1 = this;
return self__.meta24539;
});

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24541 = (function (f,ch,meta24539,_,fn1,meta24542){
this.f = f;
this.ch = ch;
this.meta24539 = meta24539;
this._ = _;
this.fn1 = fn1;
this.meta24542 = meta24542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24543,meta24542__$1){
var self__ = this;
var _24543__$1 = this;
return (new cljs.core.async.t_cljs$core$async24541(self__.f,self__.ch,self__.meta24539,self__._,self__.fn1,meta24542__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24543){
var self__ = this;
var _24543__$1 = this;
return self__.meta24542;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24537_SHARP_){
return f1.call(null,(((p1__24537_SHARP_ == null))?null:self__.f.call(null,p1__24537_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24541.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24539","meta24539",272357320,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24538","cljs.core.async/t_cljs$core$async24538",2063417200,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24542","meta24542",304755355,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24541";

cljs.core.async.t_cljs$core$async24541.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24541");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24541.
 */
cljs.core.async.__GT_t_cljs$core$async24541 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24541(f__$1,ch__$1,meta24539__$1,___$2,fn1__$1,meta24542){
return (new cljs.core.async.t_cljs$core$async24541(f__$1,ch__$1,meta24539__$1,___$2,fn1__$1,meta24542));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24541(self__.f,self__.ch,self__.meta24539,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24539","meta24539",272357320,null)], null);
});

cljs.core.async.t_cljs$core$async24538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24538";

cljs.core.async.t_cljs$core$async24538.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24538");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24538.
 */
cljs.core.async.__GT_t_cljs$core$async24538 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24538(f__$1,ch__$1,meta24539){
return (new cljs.core.async.t_cljs$core$async24538(f__$1,ch__$1,meta24539));
});

}

return (new cljs.core.async.t_cljs$core$async24538(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24544 = (function (f,ch,meta24545){
this.f = f;
this.ch = ch;
this.meta24545 = meta24545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24546,meta24545__$1){
var self__ = this;
var _24546__$1 = this;
return (new cljs.core.async.t_cljs$core$async24544(self__.f,self__.ch,meta24545__$1));
});

cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24546){
var self__ = this;
var _24546__$1 = this;
return self__.meta24545;
});

cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24545","meta24545",-1291919962,null)], null);
});

cljs.core.async.t_cljs$core$async24544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24544";

cljs.core.async.t_cljs$core$async24544.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24544");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24544.
 */
cljs.core.async.__GT_t_cljs$core$async24544 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24544(f__$1,ch__$1,meta24545){
return (new cljs.core.async.t_cljs$core$async24544(f__$1,ch__$1,meta24545));
});

}

return (new cljs.core.async.t_cljs$core$async24544(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24547 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24547 = (function (p,ch,meta24548){
this.p = p;
this.ch = ch;
this.meta24548 = meta24548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24549,meta24548__$1){
var self__ = this;
var _24549__$1 = this;
return (new cljs.core.async.t_cljs$core$async24547(self__.p,self__.ch,meta24548__$1));
});

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24549){
var self__ = this;
var _24549__$1 = this;
return self__.meta24548;
});

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24548","meta24548",1122683785,null)], null);
});

cljs.core.async.t_cljs$core$async24547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24547";

cljs.core.async.t_cljs$core$async24547.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24547");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24547.
 */
cljs.core.async.__GT_t_cljs$core$async24547 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24547(p__$1,ch__$1,meta24548){
return (new cljs.core.async.t_cljs$core$async24547(p__$1,ch__$1,meta24548));
});

}

return (new cljs.core.async.t_cljs$core$async24547(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24551 = arguments.length;
switch (G__24551) {
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
var c__21188__auto___24591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___24591,out){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___24591,out){
return (function (state_24572){
var state_val_24573 = (state_24572[(1)]);
if((state_val_24573 === (7))){
var inst_24568 = (state_24572[(2)]);
var state_24572__$1 = state_24572;
var statearr_24574_24592 = state_24572__$1;
(statearr_24574_24592[(2)] = inst_24568);

(statearr_24574_24592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24573 === (1))){
var state_24572__$1 = state_24572;
var statearr_24575_24593 = state_24572__$1;
(statearr_24575_24593[(2)] = null);

(statearr_24575_24593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24573 === (4))){
var inst_24554 = (state_24572[(7)]);
var inst_24554__$1 = (state_24572[(2)]);
var inst_24555 = (inst_24554__$1 == null);
var state_24572__$1 = (function (){var statearr_24576 = state_24572;
(statearr_24576[(7)] = inst_24554__$1);

return statearr_24576;
})();
if(cljs.core.truth_(inst_24555)){
var statearr_24577_24594 = state_24572__$1;
(statearr_24577_24594[(1)] = (5));

} else {
var statearr_24578_24595 = state_24572__$1;
(statearr_24578_24595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24573 === (6))){
var inst_24554 = (state_24572[(7)]);
var inst_24559 = p.call(null,inst_24554);
var state_24572__$1 = state_24572;
if(cljs.core.truth_(inst_24559)){
var statearr_24579_24596 = state_24572__$1;
(statearr_24579_24596[(1)] = (8));

} else {
var statearr_24580_24597 = state_24572__$1;
(statearr_24580_24597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24573 === (3))){
var inst_24570 = (state_24572[(2)]);
var state_24572__$1 = state_24572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24572__$1,inst_24570);
} else {
if((state_val_24573 === (2))){
var state_24572__$1 = state_24572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24572__$1,(4),ch);
} else {
if((state_val_24573 === (11))){
var inst_24562 = (state_24572[(2)]);
var state_24572__$1 = state_24572;
var statearr_24581_24598 = state_24572__$1;
(statearr_24581_24598[(2)] = inst_24562);

(statearr_24581_24598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24573 === (9))){
var state_24572__$1 = state_24572;
var statearr_24582_24599 = state_24572__$1;
(statearr_24582_24599[(2)] = null);

(statearr_24582_24599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24573 === (5))){
var inst_24557 = cljs.core.async.close_BANG_.call(null,out);
var state_24572__$1 = state_24572;
var statearr_24583_24600 = state_24572__$1;
(statearr_24583_24600[(2)] = inst_24557);

(statearr_24583_24600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24573 === (10))){
var inst_24565 = (state_24572[(2)]);
var state_24572__$1 = (function (){var statearr_24584 = state_24572;
(statearr_24584[(8)] = inst_24565);

return statearr_24584;
})();
var statearr_24585_24601 = state_24572__$1;
(statearr_24585_24601[(2)] = null);

(statearr_24585_24601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24573 === (8))){
var inst_24554 = (state_24572[(7)]);
var state_24572__$1 = state_24572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24572__$1,(11),out,inst_24554);
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
});})(c__21188__auto___24591,out))
;
return ((function (switch__21021__auto__,c__21188__auto___24591,out){
return (function() {
var cljs$core$async$state_machine__21022__auto__ = null;
var cljs$core$async$state_machine__21022__auto____0 = (function (){
var statearr_24586 = [null,null,null,null,null,null,null,null,null];
(statearr_24586[(0)] = cljs$core$async$state_machine__21022__auto__);

(statearr_24586[(1)] = (1));

return statearr_24586;
});
var cljs$core$async$state_machine__21022__auto____1 = (function (state_24572){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_24572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e24587){if((e24587 instanceof Object)){
var ex__21025__auto__ = e24587;
var statearr_24588_24602 = state_24572;
(statearr_24588_24602[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24603 = state_24572;
state_24572 = G__24603;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$state_machine__21022__auto__ = function(state_24572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21022__auto____1.call(this,state_24572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21022__auto____0;
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21022__auto____1;
return cljs$core$async$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___24591,out))
})();
var state__21190__auto__ = (function (){var statearr_24589 = f__21189__auto__.call(null);
(statearr_24589[(6)] = c__21188__auto___24591);

return statearr_24589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___24591,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24605 = arguments.length;
switch (G__24605) {
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
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_24668){
var state_val_24669 = (state_24668[(1)]);
if((state_val_24669 === (7))){
var inst_24664 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
var statearr_24670_24708 = state_24668__$1;
(statearr_24670_24708[(2)] = inst_24664);

(statearr_24670_24708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (20))){
var inst_24634 = (state_24668[(7)]);
var inst_24645 = (state_24668[(2)]);
var inst_24646 = cljs.core.next.call(null,inst_24634);
var inst_24620 = inst_24646;
var inst_24621 = null;
var inst_24622 = (0);
var inst_24623 = (0);
var state_24668__$1 = (function (){var statearr_24671 = state_24668;
(statearr_24671[(8)] = inst_24645);

(statearr_24671[(9)] = inst_24623);

(statearr_24671[(10)] = inst_24621);

(statearr_24671[(11)] = inst_24622);

(statearr_24671[(12)] = inst_24620);

return statearr_24671;
})();
var statearr_24672_24709 = state_24668__$1;
(statearr_24672_24709[(2)] = null);

(statearr_24672_24709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (1))){
var state_24668__$1 = state_24668;
var statearr_24673_24710 = state_24668__$1;
(statearr_24673_24710[(2)] = null);

(statearr_24673_24710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (4))){
var inst_24609 = (state_24668[(13)]);
var inst_24609__$1 = (state_24668[(2)]);
var inst_24610 = (inst_24609__$1 == null);
var state_24668__$1 = (function (){var statearr_24674 = state_24668;
(statearr_24674[(13)] = inst_24609__$1);

return statearr_24674;
})();
if(cljs.core.truth_(inst_24610)){
var statearr_24675_24711 = state_24668__$1;
(statearr_24675_24711[(1)] = (5));

} else {
var statearr_24676_24712 = state_24668__$1;
(statearr_24676_24712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (15))){
var state_24668__$1 = state_24668;
var statearr_24680_24713 = state_24668__$1;
(statearr_24680_24713[(2)] = null);

(statearr_24680_24713[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (21))){
var state_24668__$1 = state_24668;
var statearr_24681_24714 = state_24668__$1;
(statearr_24681_24714[(2)] = null);

(statearr_24681_24714[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (13))){
var inst_24623 = (state_24668[(9)]);
var inst_24621 = (state_24668[(10)]);
var inst_24622 = (state_24668[(11)]);
var inst_24620 = (state_24668[(12)]);
var inst_24630 = (state_24668[(2)]);
var inst_24631 = (inst_24623 + (1));
var tmp24677 = inst_24621;
var tmp24678 = inst_24622;
var tmp24679 = inst_24620;
var inst_24620__$1 = tmp24679;
var inst_24621__$1 = tmp24677;
var inst_24622__$1 = tmp24678;
var inst_24623__$1 = inst_24631;
var state_24668__$1 = (function (){var statearr_24682 = state_24668;
(statearr_24682[(9)] = inst_24623__$1);

(statearr_24682[(14)] = inst_24630);

(statearr_24682[(10)] = inst_24621__$1);

(statearr_24682[(11)] = inst_24622__$1);

(statearr_24682[(12)] = inst_24620__$1);

return statearr_24682;
})();
var statearr_24683_24715 = state_24668__$1;
(statearr_24683_24715[(2)] = null);

(statearr_24683_24715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (22))){
var state_24668__$1 = state_24668;
var statearr_24684_24716 = state_24668__$1;
(statearr_24684_24716[(2)] = null);

(statearr_24684_24716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (6))){
var inst_24609 = (state_24668[(13)]);
var inst_24618 = f.call(null,inst_24609);
var inst_24619 = cljs.core.seq.call(null,inst_24618);
var inst_24620 = inst_24619;
var inst_24621 = null;
var inst_24622 = (0);
var inst_24623 = (0);
var state_24668__$1 = (function (){var statearr_24685 = state_24668;
(statearr_24685[(9)] = inst_24623);

(statearr_24685[(10)] = inst_24621);

(statearr_24685[(11)] = inst_24622);

(statearr_24685[(12)] = inst_24620);

return statearr_24685;
})();
var statearr_24686_24717 = state_24668__$1;
(statearr_24686_24717[(2)] = null);

(statearr_24686_24717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (17))){
var inst_24634 = (state_24668[(7)]);
var inst_24638 = cljs.core.chunk_first.call(null,inst_24634);
var inst_24639 = cljs.core.chunk_rest.call(null,inst_24634);
var inst_24640 = cljs.core.count.call(null,inst_24638);
var inst_24620 = inst_24639;
var inst_24621 = inst_24638;
var inst_24622 = inst_24640;
var inst_24623 = (0);
var state_24668__$1 = (function (){var statearr_24687 = state_24668;
(statearr_24687[(9)] = inst_24623);

(statearr_24687[(10)] = inst_24621);

(statearr_24687[(11)] = inst_24622);

(statearr_24687[(12)] = inst_24620);

return statearr_24687;
})();
var statearr_24688_24718 = state_24668__$1;
(statearr_24688_24718[(2)] = null);

(statearr_24688_24718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (3))){
var inst_24666 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24668__$1,inst_24666);
} else {
if((state_val_24669 === (12))){
var inst_24654 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
var statearr_24689_24719 = state_24668__$1;
(statearr_24689_24719[(2)] = inst_24654);

(statearr_24689_24719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (2))){
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24668__$1,(4),in$);
} else {
if((state_val_24669 === (23))){
var inst_24662 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
var statearr_24690_24720 = state_24668__$1;
(statearr_24690_24720[(2)] = inst_24662);

(statearr_24690_24720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (19))){
var inst_24649 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
var statearr_24691_24721 = state_24668__$1;
(statearr_24691_24721[(2)] = inst_24649);

(statearr_24691_24721[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (11))){
var inst_24634 = (state_24668[(7)]);
var inst_24620 = (state_24668[(12)]);
var inst_24634__$1 = cljs.core.seq.call(null,inst_24620);
var state_24668__$1 = (function (){var statearr_24692 = state_24668;
(statearr_24692[(7)] = inst_24634__$1);

return statearr_24692;
})();
if(inst_24634__$1){
var statearr_24693_24722 = state_24668__$1;
(statearr_24693_24722[(1)] = (14));

} else {
var statearr_24694_24723 = state_24668__$1;
(statearr_24694_24723[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (9))){
var inst_24656 = (state_24668[(2)]);
var inst_24657 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24668__$1 = (function (){var statearr_24695 = state_24668;
(statearr_24695[(15)] = inst_24656);

return statearr_24695;
})();
if(cljs.core.truth_(inst_24657)){
var statearr_24696_24724 = state_24668__$1;
(statearr_24696_24724[(1)] = (21));

} else {
var statearr_24697_24725 = state_24668__$1;
(statearr_24697_24725[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (5))){
var inst_24612 = cljs.core.async.close_BANG_.call(null,out);
var state_24668__$1 = state_24668;
var statearr_24698_24726 = state_24668__$1;
(statearr_24698_24726[(2)] = inst_24612);

(statearr_24698_24726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (14))){
var inst_24634 = (state_24668[(7)]);
var inst_24636 = cljs.core.chunked_seq_QMARK_.call(null,inst_24634);
var state_24668__$1 = state_24668;
if(inst_24636){
var statearr_24699_24727 = state_24668__$1;
(statearr_24699_24727[(1)] = (17));

} else {
var statearr_24700_24728 = state_24668__$1;
(statearr_24700_24728[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (16))){
var inst_24652 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
var statearr_24701_24729 = state_24668__$1;
(statearr_24701_24729[(2)] = inst_24652);

(statearr_24701_24729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (10))){
var inst_24623 = (state_24668[(9)]);
var inst_24621 = (state_24668[(10)]);
var inst_24628 = cljs.core._nth.call(null,inst_24621,inst_24623);
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24668__$1,(13),out,inst_24628);
} else {
if((state_val_24669 === (18))){
var inst_24634 = (state_24668[(7)]);
var inst_24643 = cljs.core.first.call(null,inst_24634);
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24668__$1,(20),out,inst_24643);
} else {
if((state_val_24669 === (8))){
var inst_24623 = (state_24668[(9)]);
var inst_24622 = (state_24668[(11)]);
var inst_24625 = (inst_24623 < inst_24622);
var inst_24626 = inst_24625;
var state_24668__$1 = state_24668;
if(cljs.core.truth_(inst_24626)){
var statearr_24702_24730 = state_24668__$1;
(statearr_24702_24730[(1)] = (10));

} else {
var statearr_24703_24731 = state_24668__$1;
(statearr_24703_24731[(1)] = (11));

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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21022__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21022__auto____0 = (function (){
var statearr_24704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24704[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21022__auto__);

(statearr_24704[(1)] = (1));

return statearr_24704;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21022__auto____1 = (function (state_24668){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_24668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e24705){if((e24705 instanceof Object)){
var ex__21025__auto__ = e24705;
var statearr_24706_24732 = state_24668;
(statearr_24706_24732[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24733 = state_24668;
state_24668 = G__24733;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21022__auto__ = function(state_24668){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21022__auto____1.call(this,state_24668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21022__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21022__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_24707 = f__21189__auto__.call(null);
(statearr_24707[(6)] = c__21188__auto__);

return statearr_24707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24735 = arguments.length;
switch (G__24735) {
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
var G__24738 = arguments.length;
switch (G__24738) {
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
var G__24741 = arguments.length;
switch (G__24741) {
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
var c__21188__auto___24788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___24788,out){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___24788,out){
return (function (state_24765){
var state_val_24766 = (state_24765[(1)]);
if((state_val_24766 === (7))){
var inst_24760 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24767_24789 = state_24765__$1;
(statearr_24767_24789[(2)] = inst_24760);

(statearr_24767_24789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (1))){
var inst_24742 = null;
var state_24765__$1 = (function (){var statearr_24768 = state_24765;
(statearr_24768[(7)] = inst_24742);

return statearr_24768;
})();
var statearr_24769_24790 = state_24765__$1;
(statearr_24769_24790[(2)] = null);

(statearr_24769_24790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (4))){
var inst_24745 = (state_24765[(8)]);
var inst_24745__$1 = (state_24765[(2)]);
var inst_24746 = (inst_24745__$1 == null);
var inst_24747 = cljs.core.not.call(null,inst_24746);
var state_24765__$1 = (function (){var statearr_24770 = state_24765;
(statearr_24770[(8)] = inst_24745__$1);

return statearr_24770;
})();
if(inst_24747){
var statearr_24771_24791 = state_24765__$1;
(statearr_24771_24791[(1)] = (5));

} else {
var statearr_24772_24792 = state_24765__$1;
(statearr_24772_24792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (6))){
var state_24765__$1 = state_24765;
var statearr_24773_24793 = state_24765__$1;
(statearr_24773_24793[(2)] = null);

(statearr_24773_24793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (3))){
var inst_24762 = (state_24765[(2)]);
var inst_24763 = cljs.core.async.close_BANG_.call(null,out);
var state_24765__$1 = (function (){var statearr_24774 = state_24765;
(statearr_24774[(9)] = inst_24762);

return statearr_24774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24765__$1,inst_24763);
} else {
if((state_val_24766 === (2))){
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24765__$1,(4),ch);
} else {
if((state_val_24766 === (11))){
var inst_24745 = (state_24765[(8)]);
var inst_24754 = (state_24765[(2)]);
var inst_24742 = inst_24745;
var state_24765__$1 = (function (){var statearr_24775 = state_24765;
(statearr_24775[(7)] = inst_24742);

(statearr_24775[(10)] = inst_24754);

return statearr_24775;
})();
var statearr_24776_24794 = state_24765__$1;
(statearr_24776_24794[(2)] = null);

(statearr_24776_24794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (9))){
var inst_24745 = (state_24765[(8)]);
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24765__$1,(11),out,inst_24745);
} else {
if((state_val_24766 === (5))){
var inst_24745 = (state_24765[(8)]);
var inst_24742 = (state_24765[(7)]);
var inst_24749 = cljs.core._EQ_.call(null,inst_24745,inst_24742);
var state_24765__$1 = state_24765;
if(inst_24749){
var statearr_24778_24795 = state_24765__$1;
(statearr_24778_24795[(1)] = (8));

} else {
var statearr_24779_24796 = state_24765__$1;
(statearr_24779_24796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (10))){
var inst_24757 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24780_24797 = state_24765__$1;
(statearr_24780_24797[(2)] = inst_24757);

(statearr_24780_24797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (8))){
var inst_24742 = (state_24765[(7)]);
var tmp24777 = inst_24742;
var inst_24742__$1 = tmp24777;
var state_24765__$1 = (function (){var statearr_24781 = state_24765;
(statearr_24781[(7)] = inst_24742__$1);

return statearr_24781;
})();
var statearr_24782_24798 = state_24765__$1;
(statearr_24782_24798[(2)] = null);

(statearr_24782_24798[(1)] = (2));


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
});})(c__21188__auto___24788,out))
;
return ((function (switch__21021__auto__,c__21188__auto___24788,out){
return (function() {
var cljs$core$async$state_machine__21022__auto__ = null;
var cljs$core$async$state_machine__21022__auto____0 = (function (){
var statearr_24783 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24783[(0)] = cljs$core$async$state_machine__21022__auto__);

(statearr_24783[(1)] = (1));

return statearr_24783;
});
var cljs$core$async$state_machine__21022__auto____1 = (function (state_24765){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_24765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e24784){if((e24784 instanceof Object)){
var ex__21025__auto__ = e24784;
var statearr_24785_24799 = state_24765;
(statearr_24785_24799[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24800 = state_24765;
state_24765 = G__24800;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$state_machine__21022__auto__ = function(state_24765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21022__auto____1.call(this,state_24765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21022__auto____0;
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21022__auto____1;
return cljs$core$async$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___24788,out))
})();
var state__21190__auto__ = (function (){var statearr_24786 = f__21189__auto__.call(null);
(statearr_24786[(6)] = c__21188__auto___24788);

return statearr_24786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___24788,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24802 = arguments.length;
switch (G__24802) {
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
var c__21188__auto___24868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___24868,out){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___24868,out){
return (function (state_24840){
var state_val_24841 = (state_24840[(1)]);
if((state_val_24841 === (7))){
var inst_24836 = (state_24840[(2)]);
var state_24840__$1 = state_24840;
var statearr_24842_24869 = state_24840__$1;
(statearr_24842_24869[(2)] = inst_24836);

(statearr_24842_24869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24841 === (1))){
var inst_24803 = (new Array(n));
var inst_24804 = inst_24803;
var inst_24805 = (0);
var state_24840__$1 = (function (){var statearr_24843 = state_24840;
(statearr_24843[(7)] = inst_24804);

(statearr_24843[(8)] = inst_24805);

return statearr_24843;
})();
var statearr_24844_24870 = state_24840__$1;
(statearr_24844_24870[(2)] = null);

(statearr_24844_24870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24841 === (4))){
var inst_24808 = (state_24840[(9)]);
var inst_24808__$1 = (state_24840[(2)]);
var inst_24809 = (inst_24808__$1 == null);
var inst_24810 = cljs.core.not.call(null,inst_24809);
var state_24840__$1 = (function (){var statearr_24845 = state_24840;
(statearr_24845[(9)] = inst_24808__$1);

return statearr_24845;
})();
if(inst_24810){
var statearr_24846_24871 = state_24840__$1;
(statearr_24846_24871[(1)] = (5));

} else {
var statearr_24847_24872 = state_24840__$1;
(statearr_24847_24872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24841 === (15))){
var inst_24830 = (state_24840[(2)]);
var state_24840__$1 = state_24840;
var statearr_24848_24873 = state_24840__$1;
(statearr_24848_24873[(2)] = inst_24830);

(statearr_24848_24873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24841 === (13))){
var state_24840__$1 = state_24840;
var statearr_24849_24874 = state_24840__$1;
(statearr_24849_24874[(2)] = null);

(statearr_24849_24874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24841 === (6))){
var inst_24805 = (state_24840[(8)]);
var inst_24826 = (inst_24805 > (0));
var state_24840__$1 = state_24840;
if(cljs.core.truth_(inst_24826)){
var statearr_24850_24875 = state_24840__$1;
(statearr_24850_24875[(1)] = (12));

} else {
var statearr_24851_24876 = state_24840__$1;
(statearr_24851_24876[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24841 === (3))){
var inst_24838 = (state_24840[(2)]);
var state_24840__$1 = state_24840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24840__$1,inst_24838);
} else {
if((state_val_24841 === (12))){
var inst_24804 = (state_24840[(7)]);
var inst_24828 = cljs.core.vec.call(null,inst_24804);
var state_24840__$1 = state_24840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24840__$1,(15),out,inst_24828);
} else {
if((state_val_24841 === (2))){
var state_24840__$1 = state_24840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24840__$1,(4),ch);
} else {
if((state_val_24841 === (11))){
var inst_24820 = (state_24840[(2)]);
var inst_24821 = (new Array(n));
var inst_24804 = inst_24821;
var inst_24805 = (0);
var state_24840__$1 = (function (){var statearr_24852 = state_24840;
(statearr_24852[(7)] = inst_24804);

(statearr_24852[(8)] = inst_24805);

(statearr_24852[(10)] = inst_24820);

return statearr_24852;
})();
var statearr_24853_24877 = state_24840__$1;
(statearr_24853_24877[(2)] = null);

(statearr_24853_24877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24841 === (9))){
var inst_24804 = (state_24840[(7)]);
var inst_24818 = cljs.core.vec.call(null,inst_24804);
var state_24840__$1 = state_24840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24840__$1,(11),out,inst_24818);
} else {
if((state_val_24841 === (5))){
var inst_24804 = (state_24840[(7)]);
var inst_24813 = (state_24840[(11)]);
var inst_24805 = (state_24840[(8)]);
var inst_24808 = (state_24840[(9)]);
var inst_24812 = (inst_24804[inst_24805] = inst_24808);
var inst_24813__$1 = (inst_24805 + (1));
var inst_24814 = (inst_24813__$1 < n);
var state_24840__$1 = (function (){var statearr_24854 = state_24840;
(statearr_24854[(12)] = inst_24812);

(statearr_24854[(11)] = inst_24813__$1);

return statearr_24854;
})();
if(cljs.core.truth_(inst_24814)){
var statearr_24855_24878 = state_24840__$1;
(statearr_24855_24878[(1)] = (8));

} else {
var statearr_24856_24879 = state_24840__$1;
(statearr_24856_24879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24841 === (14))){
var inst_24833 = (state_24840[(2)]);
var inst_24834 = cljs.core.async.close_BANG_.call(null,out);
var state_24840__$1 = (function (){var statearr_24858 = state_24840;
(statearr_24858[(13)] = inst_24833);

return statearr_24858;
})();
var statearr_24859_24880 = state_24840__$1;
(statearr_24859_24880[(2)] = inst_24834);

(statearr_24859_24880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24841 === (10))){
var inst_24824 = (state_24840[(2)]);
var state_24840__$1 = state_24840;
var statearr_24860_24881 = state_24840__$1;
(statearr_24860_24881[(2)] = inst_24824);

(statearr_24860_24881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24841 === (8))){
var inst_24804 = (state_24840[(7)]);
var inst_24813 = (state_24840[(11)]);
var tmp24857 = inst_24804;
var inst_24804__$1 = tmp24857;
var inst_24805 = inst_24813;
var state_24840__$1 = (function (){var statearr_24861 = state_24840;
(statearr_24861[(7)] = inst_24804__$1);

(statearr_24861[(8)] = inst_24805);

return statearr_24861;
})();
var statearr_24862_24882 = state_24840__$1;
(statearr_24862_24882[(2)] = null);

(statearr_24862_24882[(1)] = (2));


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
});})(c__21188__auto___24868,out))
;
return ((function (switch__21021__auto__,c__21188__auto___24868,out){
return (function() {
var cljs$core$async$state_machine__21022__auto__ = null;
var cljs$core$async$state_machine__21022__auto____0 = (function (){
var statearr_24863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24863[(0)] = cljs$core$async$state_machine__21022__auto__);

(statearr_24863[(1)] = (1));

return statearr_24863;
});
var cljs$core$async$state_machine__21022__auto____1 = (function (state_24840){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_24840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e24864){if((e24864 instanceof Object)){
var ex__21025__auto__ = e24864;
var statearr_24865_24883 = state_24840;
(statearr_24865_24883[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24884 = state_24840;
state_24840 = G__24884;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$state_machine__21022__auto__ = function(state_24840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21022__auto____1.call(this,state_24840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21022__auto____0;
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21022__auto____1;
return cljs$core$async$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___24868,out))
})();
var state__21190__auto__ = (function (){var statearr_24866 = f__21189__auto__.call(null);
(statearr_24866[(6)] = c__21188__auto___24868);

return statearr_24866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___24868,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24886 = arguments.length;
switch (G__24886) {
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
var c__21188__auto___24956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___24956,out){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___24956,out){
return (function (state_24928){
var state_val_24929 = (state_24928[(1)]);
if((state_val_24929 === (7))){
var inst_24924 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
var statearr_24930_24957 = state_24928__$1;
(statearr_24930_24957[(2)] = inst_24924);

(statearr_24930_24957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (1))){
var inst_24887 = [];
var inst_24888 = inst_24887;
var inst_24889 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24928__$1 = (function (){var statearr_24931 = state_24928;
(statearr_24931[(7)] = inst_24888);

(statearr_24931[(8)] = inst_24889);

return statearr_24931;
})();
var statearr_24932_24958 = state_24928__$1;
(statearr_24932_24958[(2)] = null);

(statearr_24932_24958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (4))){
var inst_24892 = (state_24928[(9)]);
var inst_24892__$1 = (state_24928[(2)]);
var inst_24893 = (inst_24892__$1 == null);
var inst_24894 = cljs.core.not.call(null,inst_24893);
var state_24928__$1 = (function (){var statearr_24933 = state_24928;
(statearr_24933[(9)] = inst_24892__$1);

return statearr_24933;
})();
if(inst_24894){
var statearr_24934_24959 = state_24928__$1;
(statearr_24934_24959[(1)] = (5));

} else {
var statearr_24935_24960 = state_24928__$1;
(statearr_24935_24960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (15))){
var inst_24918 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
var statearr_24936_24961 = state_24928__$1;
(statearr_24936_24961[(2)] = inst_24918);

(statearr_24936_24961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (13))){
var state_24928__$1 = state_24928;
var statearr_24937_24962 = state_24928__$1;
(statearr_24937_24962[(2)] = null);

(statearr_24937_24962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (6))){
var inst_24888 = (state_24928[(7)]);
var inst_24913 = inst_24888.length;
var inst_24914 = (inst_24913 > (0));
var state_24928__$1 = state_24928;
if(cljs.core.truth_(inst_24914)){
var statearr_24938_24963 = state_24928__$1;
(statearr_24938_24963[(1)] = (12));

} else {
var statearr_24939_24964 = state_24928__$1;
(statearr_24939_24964[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (3))){
var inst_24926 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24928__$1,inst_24926);
} else {
if((state_val_24929 === (12))){
var inst_24888 = (state_24928[(7)]);
var inst_24916 = cljs.core.vec.call(null,inst_24888);
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24928__$1,(15),out,inst_24916);
} else {
if((state_val_24929 === (2))){
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24928__$1,(4),ch);
} else {
if((state_val_24929 === (11))){
var inst_24896 = (state_24928[(10)]);
var inst_24892 = (state_24928[(9)]);
var inst_24906 = (state_24928[(2)]);
var inst_24907 = [];
var inst_24908 = inst_24907.push(inst_24892);
var inst_24888 = inst_24907;
var inst_24889 = inst_24896;
var state_24928__$1 = (function (){var statearr_24940 = state_24928;
(statearr_24940[(7)] = inst_24888);

(statearr_24940[(11)] = inst_24906);

(statearr_24940[(8)] = inst_24889);

(statearr_24940[(12)] = inst_24908);

return statearr_24940;
})();
var statearr_24941_24965 = state_24928__$1;
(statearr_24941_24965[(2)] = null);

(statearr_24941_24965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (9))){
var inst_24888 = (state_24928[(7)]);
var inst_24904 = cljs.core.vec.call(null,inst_24888);
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24928__$1,(11),out,inst_24904);
} else {
if((state_val_24929 === (5))){
var inst_24889 = (state_24928[(8)]);
var inst_24896 = (state_24928[(10)]);
var inst_24892 = (state_24928[(9)]);
var inst_24896__$1 = f.call(null,inst_24892);
var inst_24897 = cljs.core._EQ_.call(null,inst_24896__$1,inst_24889);
var inst_24898 = cljs.core.keyword_identical_QMARK_.call(null,inst_24889,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24899 = ((inst_24897) || (inst_24898));
var state_24928__$1 = (function (){var statearr_24942 = state_24928;
(statearr_24942[(10)] = inst_24896__$1);

return statearr_24942;
})();
if(cljs.core.truth_(inst_24899)){
var statearr_24943_24966 = state_24928__$1;
(statearr_24943_24966[(1)] = (8));

} else {
var statearr_24944_24967 = state_24928__$1;
(statearr_24944_24967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (14))){
var inst_24921 = (state_24928[(2)]);
var inst_24922 = cljs.core.async.close_BANG_.call(null,out);
var state_24928__$1 = (function (){var statearr_24946 = state_24928;
(statearr_24946[(13)] = inst_24921);

return statearr_24946;
})();
var statearr_24947_24968 = state_24928__$1;
(statearr_24947_24968[(2)] = inst_24922);

(statearr_24947_24968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (10))){
var inst_24911 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
var statearr_24948_24969 = state_24928__$1;
(statearr_24948_24969[(2)] = inst_24911);

(statearr_24948_24969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (8))){
var inst_24888 = (state_24928[(7)]);
var inst_24896 = (state_24928[(10)]);
var inst_24892 = (state_24928[(9)]);
var inst_24901 = inst_24888.push(inst_24892);
var tmp24945 = inst_24888;
var inst_24888__$1 = tmp24945;
var inst_24889 = inst_24896;
var state_24928__$1 = (function (){var statearr_24949 = state_24928;
(statearr_24949[(7)] = inst_24888__$1);

(statearr_24949[(8)] = inst_24889);

(statearr_24949[(14)] = inst_24901);

return statearr_24949;
})();
var statearr_24950_24970 = state_24928__$1;
(statearr_24950_24970[(2)] = null);

(statearr_24950_24970[(1)] = (2));


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
});})(c__21188__auto___24956,out))
;
return ((function (switch__21021__auto__,c__21188__auto___24956,out){
return (function() {
var cljs$core$async$state_machine__21022__auto__ = null;
var cljs$core$async$state_machine__21022__auto____0 = (function (){
var statearr_24951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24951[(0)] = cljs$core$async$state_machine__21022__auto__);

(statearr_24951[(1)] = (1));

return statearr_24951;
});
var cljs$core$async$state_machine__21022__auto____1 = (function (state_24928){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_24928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e24952){if((e24952 instanceof Object)){
var ex__21025__auto__ = e24952;
var statearr_24953_24971 = state_24928;
(statearr_24953_24971[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24972 = state_24928;
state_24928 = G__24972;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
cljs$core$async$state_machine__21022__auto__ = function(state_24928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21022__auto____1.call(this,state_24928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21022__auto____0;
cljs$core$async$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21022__auto____1;
return cljs$core$async$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___24956,out))
})();
var state__21190__auto__ = (function (){var statearr_24954 = f__21189__auto__.call(null);
(statearr_24954[(6)] = c__21188__auto___24956);

return statearr_24954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___24956,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
