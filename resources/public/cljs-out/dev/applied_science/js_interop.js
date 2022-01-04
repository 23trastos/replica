// Compiled by ClojureScript 1.10.520 {}
goog.provide('applied_science.js_interop');
goog.require('cljs.core');
goog.require('goog.reflect');
goog.require('cljs.core');
goog.require('applied_science.js_interop.impl');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26305 = arguments.length;
var i__4731__auto___26306 = (0);
while(true){
if((i__4731__auto___26306 < len__4730__auto___26305)){
args__4736__auto__.push((arguments[i__4731__auto___26306]));

var G__26307 = (i__4731__auto___26306 + (1));
i__4731__auto___26306 = G__26307;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__26298_26308 = keyvals;
var vec__26299_26309 = G__26298_26308;
var seq__26300_26310 = cljs.core.seq.call(null,vec__26299_26309);
var first__26301_26311 = cljs.core.first.call(null,seq__26300_26310);
var seq__26300_26312__$1 = cljs.core.next.call(null,seq__26300_26310);
var k_26313 = first__26301_26311;
var first__26301_26314__$1 = cljs.core.first.call(null,seq__26300_26312__$1);
var seq__26300_26315__$2 = cljs.core.next.call(null,seq__26300_26312__$1);
var v_26316 = first__26301_26314__$1;
var keyvals_26317__$1 = seq__26300_26315__$2;
var G__26298_26318__$1 = G__26298_26308;
while(true){
var vec__26302_26319 = G__26298_26318__$1;
var seq__26303_26320 = cljs.core.seq.call(null,vec__26302_26319);
var first__26304_26321 = cljs.core.first.call(null,seq__26303_26320);
var seq__26303_26322__$1 = cljs.core.next.call(null,seq__26303_26320);
var k_26323__$1 = first__26304_26321;
var first__26304_26324__$1 = cljs.core.first.call(null,seq__26303_26322__$1);
var seq__26303_26325__$2 = cljs.core.next.call(null,seq__26303_26322__$1);
var v_26326__$1 = first__26304_26324__$1;
var keyvals_26327__$2 = seq__26303_26325__$2;
(obj[applied_science.js_interop.impl.wrap_key.call(null,k_26323__$1)] = v_26326__$1);

if(keyvals_26327__$2){
var G__26328 = keyvals_26327__$2;
G__26298_26318__$1 = G__26328;
continue;
} else {
}
break;
}

return obj;
});

applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq26293){
var G__26294 = cljs.core.first.call(null,seq26293);
var seq26293__$1 = cljs.core.next.call(null,seq26293);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26294,seq26293__$1);
});

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key.call(null,k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__26330 = arguments.length;
switch (G__26330) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj26331 = obj;
var k26332 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26331,k26332)){
return (obj26331[k26332]);
} else {
return null;
}
});

applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj26333 = obj;
var k26334 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26333,k26334)){
return (obj26333[k26334]);
} else {
return not_found;
}
});

applied_science.js_interop.get.cljs$lang$maxFixedArity = 3;

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__26337 = arguments.length;
switch (G__26337) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks));
});

applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),not_found);
});

applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3;

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj,applied_science.js_interop.impl.wrap_key.call(null,k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj26339 = self__.obj;
var k26340 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26339,k26340)){
return (obj26339[k26340]);
} else {
return null;
}
});

applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj26341 = self__.obj;
var k26342 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26341,k26342)){
return (obj26341[k26342]);
} else {
return not_found;
}
});

applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
});

applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

applied_science.js_interop.JSLookup.cljs$lang$type = true;

applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup";

applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"applied-science.js-interop/JSLookup");
});

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26355 = arguments.length;
var i__4731__auto___26356 = (0);
while(true){
if((i__4731__auto___26356 < len__4730__auto___26355)){
args__4736__auto__.push((arguments[i__4731__auto___26356]));

var G__26357 = (i__4731__auto___26356 + (1));
i__4731__auto___26356 = G__26357;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__26348 = keyvals;
var vec__26349 = G__26348;
var seq__26350 = cljs.core.seq.call(null,vec__26349);
var first__26351 = cljs.core.first.call(null,seq__26350);
var seq__26350__$1 = cljs.core.next.call(null,seq__26350);
var k = first__26351;
var first__26351__$1 = cljs.core.first.call(null,seq__26350__$1);
var seq__26350__$2 = cljs.core.next.call(null,seq__26350__$1);
var v = first__26351__$1;
var kvs = seq__26350__$2;
var G__26348__$1 = G__26348;
while(true){
var vec__26352 = G__26348__$1;
var seq__26353 = cljs.core.seq.call(null,vec__26352);
var first__26354 = cljs.core.first.call(null,seq__26353);
var seq__26353__$1 = cljs.core.next.call(null,seq__26353);
var k__$1 = first__26354;
var first__26354__$1 = cljs.core.first.call(null,seq__26353__$1);
var seq__26353__$2 = cljs.core.next.call(null,seq__26353__$1);
var v__$1 = first__26354__$1;
var kvs__$1 = seq__26353__$2;
applied_science.js_interop.unchecked_set.call(null,obj__$1,k__$1,v__$1);

if(kvs__$1){
var G__26358 = kvs__$1;
G__26348__$1 = G__26358;
continue;
} else {
return obj__$1;
}
break;
}
});

applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq26343){
var G__26344 = cljs.core.first.call(null,seq26343);
var seq26343__$1 = cljs.core.next.call(null,seq26343);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26344,seq26343__$1);
});

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26363 = arguments.length;
var i__4731__auto___26364 = (0);
while(true){
if((i__4731__auto___26364 < len__4730__auto___26363)){
args__4736__auto__.push((arguments[i__4731__auto___26364]));

var G__26365 = (i__4731__auto___26364 + (1));
i__4731__auto___26364 = G__26365;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key.call(null,k);
var v = cljs.core.apply.call(null,f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
});

applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq26359){
var G__26360 = cljs.core.first.call(null,seq26359);
var seq26359__$1 = cljs.core.next.call(null,seq26359);
var G__26361 = cljs.core.first.call(null,seq26359__$1);
var seq26359__$2 = cljs.core.next.call(null,seq26359__$1);
var G__26362 = cljs.core.first.call(null,seq26359__$2);
var seq26359__$3 = cljs.core.next.call(null,seq26359__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26360,G__26361,G__26362,seq26359__$3);
});

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26370 = arguments.length;
var i__4731__auto___26371 = (0);
while(true){
if((i__4731__auto___26371 < len__4730__auto___26370)){
args__4736__auto__.push((arguments[i__4731__auto___26371]));

var G__26372 = (i__4731__auto___26371 + (1));
i__4731__auto___26371 = G__26372;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),f,args);
});

applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq26366){
var G__26367 = cljs.core.first.call(null,seq26366);
var seq26366__$1 = cljs.core.next.call(null,seq26366);
var G__26368 = cljs.core.first.call(null,seq26366__$1);
var seq26366__$2 = cljs.core.next.call(null,seq26366__$1);
var G__26369 = cljs.core.first.call(null,seq26366__$2);
var seq26366__$3 = cljs.core.next.call(null,seq26366__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26367,G__26368,G__26369,seq26366__$3);
});

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__26377 = arguments.length;
switch (G__26377) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___26383 = arguments.length;
var i__4731__auto___26384 = (0);
while(true){
if((i__4731__auto___26384 < len__4730__auto___26383)){
args_arr__4751__auto__.push((arguments[i__4731__auto___26384]));

var G__26385 = (i__4731__auto___26384 + (1));
i__4731__auto___26384 = G__26385;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
});

applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__26378_26386 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,x));
var chunk__26379_26387 = null;
var count__26380_26388 = (0);
var i__26381_26389 = (0);
while(true){
if((i__26381_26389 < count__26380_26388)){
var k_26390 = cljs.core._nth.call(null,chunk__26379_26387,i__26381_26389);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_26390,applied_science.js_interop.unchecked_get.call(null,x,k_26390));


var G__26391 = seq__26378_26386;
var G__26392 = chunk__26379_26387;
var G__26393 = count__26380_26388;
var G__26394 = (i__26381_26389 + (1));
seq__26378_26386 = G__26391;
chunk__26379_26387 = G__26392;
count__26380_26388 = G__26393;
i__26381_26389 = G__26394;
continue;
} else {
var temp__5720__auto___26395 = cljs.core.seq.call(null,seq__26378_26386);
if(temp__5720__auto___26395){
var seq__26378_26396__$1 = temp__5720__auto___26395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26378_26396__$1)){
var c__4550__auto___26397 = cljs.core.chunk_first.call(null,seq__26378_26396__$1);
var G__26398 = cljs.core.chunk_rest.call(null,seq__26378_26396__$1);
var G__26399 = c__4550__auto___26397;
var G__26400 = cljs.core.count.call(null,c__4550__auto___26397);
var G__26401 = (0);
seq__26378_26386 = G__26398;
chunk__26379_26387 = G__26399;
count__26380_26388 = G__26400;
i__26381_26389 = G__26401;
continue;
} else {
var k_26402 = cljs.core.first.call(null,seq__26378_26396__$1);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_26402,applied_science.js_interop.unchecked_get.call(null,x,k_26402));


var G__26403 = cljs.core.next.call(null,seq__26378_26396__$1);
var G__26404 = null;
var G__26405 = (0);
var G__26406 = (0);
seq__26378_26386 = G__26403;
chunk__26379_26387 = G__26404;
count__26380_26388 = G__26405;
i__26381_26389 = G__26406;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
});

applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.call(null,applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.call(null,obj,x),more);
});

/** @this {Function} */
applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq26374){
var G__26375 = cljs.core.first.call(null,seq26374);
var seq26374__$1 = cljs.core.next.call(null,seq26374);
var G__26376 = cljs.core.first.call(null,seq26374__$1);
var seq26374__$2 = cljs.core.next.call(null,seq26374__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26375,G__26376,seq26374__$2);
});

applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__26407 = array;
G__26407.push(x);

return G__26407;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__26408 = array;
G__26408.unshift(x);

return G__26408;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26414 = arguments.length;
var i__4731__auto___26415 = (0);
while(true){
if((i__4731__auto___26415 < len__4730__auto___26414)){
args__4736__auto__.push((arguments[i__4731__auto___26415]));

var G__26416 = (i__4731__auto___26415 + (1));
i__4731__auto___26415 = G__26416;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj26412 = obj;
var k26413 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26412,k26413)){
return (obj26412[k26413]);
} else {
return null;
}
})().apply(obj,cljs.core.to_array.call(null,args));
});

applied_science.js_interop.call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop.call.cljs$lang$applyTo = (function (seq26409){
var G__26410 = cljs.core.first.call(null,seq26409);
var seq26409__$1 = cljs.core.next.call(null,seq26409);
var G__26411 = cljs.core.first.call(null,seq26409__$1);
var seq26409__$2 = cljs.core.next.call(null,seq26409__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26410,G__26411,seq26409__$2);
});

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj26417 = obj;
var k26418 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26417,k26418)){
return (obj26417[k26418]);
} else {
return null;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26422 = arguments.length;
var i__4731__auto___26423 = (0);
while(true){
if((i__4731__auto___26423 < len__4730__auto___26422)){
args__4736__auto__.push((arguments[i__4731__auto___26423]));

var G__26424 = (i__4731__auto___26423 + (1));
i__4731__auto___26423 = G__26424;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array.call(null,args));
});

applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq26419){
var G__26420 = cljs.core.first.call(null,seq26419);
var seq26419__$1 = cljs.core.next.call(null,seq26419);
var G__26421 = cljs.core.first.call(null,seq26419__$1);
var seq26419__$2 = cljs.core.next.call(null,seq26419__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26420,G__26421,seq26419__$2);
});

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26460 = arguments.length;
var i__4731__auto___26461 = (0);
while(true){
if((i__4731__auto___26461 < len__4730__auto___26460)){
args__4736__auto__.push((arguments[i__4731__auto___26461]));

var G__26462 = (i__4731__auto___26461 + (1));
i__4731__auto___26461 = G__26462;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__26428_26463 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),keyvals));
var chunk__26429_26464 = null;
var count__26430_26465 = (0);
var i__26431_26466 = (0);
while(true){
if((i__26431_26466 < count__26430_26465)){
var vec__26446_26467 = cljs.core._nth.call(null,chunk__26429_26464,i__26431_26466);
var k_26468 = cljs.core.nth.call(null,vec__26446_26467,(0),null);
var v_26469 = cljs.core.nth.call(null,vec__26446_26467,(1),null);
var obj26449_26470 = obj;
var obj26450_26471 = (((!((obj26449_26470 == null))))?obj26449_26470:({}));
(obj26450_26471[applied_science.js_interop.impl.wrap_key.call(null,k_26468)] = v_26469);



var G__26472 = seq__26428_26463;
var G__26473 = chunk__26429_26464;
var G__26474 = count__26430_26465;
var G__26475 = (i__26431_26466 + (1));
seq__26428_26463 = G__26472;
chunk__26429_26464 = G__26473;
count__26430_26465 = G__26474;
i__26431_26466 = G__26475;
continue;
} else {
var temp__5720__auto___26476 = cljs.core.seq.call(null,seq__26428_26463);
if(temp__5720__auto___26476){
var seq__26428_26477__$1 = temp__5720__auto___26476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26428_26477__$1)){
var c__4550__auto___26478 = cljs.core.chunk_first.call(null,seq__26428_26477__$1);
var G__26479 = cljs.core.chunk_rest.call(null,seq__26428_26477__$1);
var G__26480 = c__4550__auto___26478;
var G__26481 = cljs.core.count.call(null,c__4550__auto___26478);
var G__26482 = (0);
seq__26428_26463 = G__26479;
chunk__26429_26464 = G__26480;
count__26430_26465 = G__26481;
i__26431_26466 = G__26482;
continue;
} else {
var vec__26453_26483 = cljs.core.first.call(null,seq__26428_26477__$1);
var k_26484 = cljs.core.nth.call(null,vec__26453_26483,(0),null);
var v_26485 = cljs.core.nth.call(null,vec__26453_26483,(1),null);
var obj26456_26486 = obj;
var obj26457_26487 = (((!((obj26456_26486 == null))))?obj26456_26486:({}));
(obj26457_26487[applied_science.js_interop.impl.wrap_key.call(null,k_26484)] = v_26485);



var G__26488 = cljs.core.next.call(null,seq__26428_26477__$1);
var G__26489 = null;
var G__26490 = (0);
var G__26491 = (0);
seq__26428_26463 = G__26488;
chunk__26429_26464 = G__26489;
count__26430_26465 = G__26490;
i__26431_26466 = G__26491;
continue;
}
} else {
}
}
break;
}

return obj;
});

applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq26425){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26425));
});


//# sourceMappingURL=js_interop.js.map
