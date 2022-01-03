// Compiled by ClojureScript 1.10.520 {}
goog.provide('applied_science.js_interop');
goog.require('cljs.core');
goog.require('goog.reflect');
goog.require('cljs.core');
goog.require('applied_science.js_interop.impl');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18664 = arguments.length;
var i__4731__auto___18665 = (0);
while(true){
if((i__4731__auto___18665 < len__4730__auto___18664)){
args__4736__auto__.push((arguments[i__4731__auto___18665]));

var G__18666 = (i__4731__auto___18665 + (1));
i__4731__auto___18665 = G__18666;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__18657_18667 = keyvals;
var vec__18658_18668 = G__18657_18667;
var seq__18659_18669 = cljs.core.seq.call(null,vec__18658_18668);
var first__18660_18670 = cljs.core.first.call(null,seq__18659_18669);
var seq__18659_18671__$1 = cljs.core.next.call(null,seq__18659_18669);
var k_18672 = first__18660_18670;
var first__18660_18673__$1 = cljs.core.first.call(null,seq__18659_18671__$1);
var seq__18659_18674__$2 = cljs.core.next.call(null,seq__18659_18671__$1);
var v_18675 = first__18660_18673__$1;
var keyvals_18676__$1 = seq__18659_18674__$2;
var G__18657_18677__$1 = G__18657_18667;
while(true){
var vec__18661_18678 = G__18657_18677__$1;
var seq__18662_18679 = cljs.core.seq.call(null,vec__18661_18678);
var first__18663_18680 = cljs.core.first.call(null,seq__18662_18679);
var seq__18662_18681__$1 = cljs.core.next.call(null,seq__18662_18679);
var k_18682__$1 = first__18663_18680;
var first__18663_18683__$1 = cljs.core.first.call(null,seq__18662_18681__$1);
var seq__18662_18684__$2 = cljs.core.next.call(null,seq__18662_18681__$1);
var v_18685__$1 = first__18663_18683__$1;
var keyvals_18686__$2 = seq__18662_18684__$2;
(obj[applied_science.js_interop.impl.wrap_key.call(null,k_18682__$1)] = v_18685__$1);

if(keyvals_18686__$2){
var G__18687 = keyvals_18686__$2;
G__18657_18677__$1 = G__18687;
continue;
} else {
}
break;
}

return obj;
});

applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq18652){
var G__18653 = cljs.core.first.call(null,seq18652);
var seq18652__$1 = cljs.core.next.call(null,seq18652);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18653,seq18652__$1);
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
var G__18689 = arguments.length;
switch (G__18689) {
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
var obj18690 = obj;
var k18691 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18690,k18691)){
return (obj18690[k18691]);
} else {
return null;
}
});

applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj18692 = obj;
var k18693 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18692,k18693)){
return (obj18692[k18693]);
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
var G__18696 = arguments.length;
switch (G__18696) {
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
var obj18698 = self__.obj;
var k18699 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18698,k18699)){
return (obj18698[k18699]);
} else {
return null;
}
});

applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj18700 = self__.obj;
var k18701 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18700,k18701)){
return (obj18700[k18701]);
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
var len__4730__auto___18714 = arguments.length;
var i__4731__auto___18715 = (0);
while(true){
if((i__4731__auto___18715 < len__4730__auto___18714)){
args__4736__auto__.push((arguments[i__4731__auto___18715]));

var G__18716 = (i__4731__auto___18715 + (1));
i__4731__auto___18715 = G__18716;
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
var G__18707 = keyvals;
var vec__18708 = G__18707;
var seq__18709 = cljs.core.seq.call(null,vec__18708);
var first__18710 = cljs.core.first.call(null,seq__18709);
var seq__18709__$1 = cljs.core.next.call(null,seq__18709);
var k = first__18710;
var first__18710__$1 = cljs.core.first.call(null,seq__18709__$1);
var seq__18709__$2 = cljs.core.next.call(null,seq__18709__$1);
var v = first__18710__$1;
var kvs = seq__18709__$2;
var G__18707__$1 = G__18707;
while(true){
var vec__18711 = G__18707__$1;
var seq__18712 = cljs.core.seq.call(null,vec__18711);
var first__18713 = cljs.core.first.call(null,seq__18712);
var seq__18712__$1 = cljs.core.next.call(null,seq__18712);
var k__$1 = first__18713;
var first__18713__$1 = cljs.core.first.call(null,seq__18712__$1);
var seq__18712__$2 = cljs.core.next.call(null,seq__18712__$1);
var v__$1 = first__18713__$1;
var kvs__$1 = seq__18712__$2;
applied_science.js_interop.unchecked_set.call(null,obj__$1,k__$1,v__$1);

if(kvs__$1){
var G__18717 = kvs__$1;
G__18707__$1 = G__18717;
continue;
} else {
return obj__$1;
}
break;
}
});

applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq18702){
var G__18703 = cljs.core.first.call(null,seq18702);
var seq18702__$1 = cljs.core.next.call(null,seq18702);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18703,seq18702__$1);
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
var len__4730__auto___18722 = arguments.length;
var i__4731__auto___18723 = (0);
while(true){
if((i__4731__auto___18723 < len__4730__auto___18722)){
args__4736__auto__.push((arguments[i__4731__auto___18723]));

var G__18724 = (i__4731__auto___18723 + (1));
i__4731__auto___18723 = G__18724;
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
applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq18718){
var G__18719 = cljs.core.first.call(null,seq18718);
var seq18718__$1 = cljs.core.next.call(null,seq18718);
var G__18720 = cljs.core.first.call(null,seq18718__$1);
var seq18718__$2 = cljs.core.next.call(null,seq18718__$1);
var G__18721 = cljs.core.first.call(null,seq18718__$2);
var seq18718__$3 = cljs.core.next.call(null,seq18718__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18719,G__18720,G__18721,seq18718__$3);
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
var len__4730__auto___18729 = arguments.length;
var i__4731__auto___18730 = (0);
while(true){
if((i__4731__auto___18730 < len__4730__auto___18729)){
args__4736__auto__.push((arguments[i__4731__auto___18730]));

var G__18731 = (i__4731__auto___18730 + (1));
i__4731__auto___18730 = G__18731;
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
applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq18725){
var G__18726 = cljs.core.first.call(null,seq18725);
var seq18725__$1 = cljs.core.next.call(null,seq18725);
var G__18727 = cljs.core.first.call(null,seq18725__$1);
var seq18725__$2 = cljs.core.next.call(null,seq18725__$1);
var G__18728 = cljs.core.first.call(null,seq18725__$2);
var seq18725__$3 = cljs.core.next.call(null,seq18725__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18726,G__18727,G__18728,seq18725__$3);
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
var G__18736 = arguments.length;
switch (G__18736) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___18742 = arguments.length;
var i__4731__auto___18743 = (0);
while(true){
if((i__4731__auto___18743 < len__4730__auto___18742)){
args_arr__4751__auto__.push((arguments[i__4731__auto___18743]));

var G__18744 = (i__4731__auto___18743 + (1));
i__4731__auto___18743 = G__18744;
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
var seq__18737_18745 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,x));
var chunk__18738_18746 = null;
var count__18739_18747 = (0);
var i__18740_18748 = (0);
while(true){
if((i__18740_18748 < count__18739_18747)){
var k_18749 = cljs.core._nth.call(null,chunk__18738_18746,i__18740_18748);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_18749,applied_science.js_interop.unchecked_get.call(null,x,k_18749));


var G__18750 = seq__18737_18745;
var G__18751 = chunk__18738_18746;
var G__18752 = count__18739_18747;
var G__18753 = (i__18740_18748 + (1));
seq__18737_18745 = G__18750;
chunk__18738_18746 = G__18751;
count__18739_18747 = G__18752;
i__18740_18748 = G__18753;
continue;
} else {
var temp__5720__auto___18754 = cljs.core.seq.call(null,seq__18737_18745);
if(temp__5720__auto___18754){
var seq__18737_18755__$1 = temp__5720__auto___18754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18737_18755__$1)){
var c__4550__auto___18756 = cljs.core.chunk_first.call(null,seq__18737_18755__$1);
var G__18757 = cljs.core.chunk_rest.call(null,seq__18737_18755__$1);
var G__18758 = c__4550__auto___18756;
var G__18759 = cljs.core.count.call(null,c__4550__auto___18756);
var G__18760 = (0);
seq__18737_18745 = G__18757;
chunk__18738_18746 = G__18758;
count__18739_18747 = G__18759;
i__18740_18748 = G__18760;
continue;
} else {
var k_18761 = cljs.core.first.call(null,seq__18737_18755__$1);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_18761,applied_science.js_interop.unchecked_get.call(null,x,k_18761));


var G__18762 = cljs.core.next.call(null,seq__18737_18755__$1);
var G__18763 = null;
var G__18764 = (0);
var G__18765 = (0);
seq__18737_18745 = G__18762;
chunk__18738_18746 = G__18763;
count__18739_18747 = G__18764;
i__18740_18748 = G__18765;
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
applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq18733){
var G__18734 = cljs.core.first.call(null,seq18733);
var seq18733__$1 = cljs.core.next.call(null,seq18733);
var G__18735 = cljs.core.first.call(null,seq18733__$1);
var seq18733__$2 = cljs.core.next.call(null,seq18733__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18734,G__18735,seq18733__$2);
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
var G__18766 = array;
G__18766.push(x);

return G__18766;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__18767 = array;
G__18767.unshift(x);

return G__18767;
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
var len__4730__auto___18773 = arguments.length;
var i__4731__auto___18774 = (0);
while(true){
if((i__4731__auto___18774 < len__4730__auto___18773)){
args__4736__auto__.push((arguments[i__4731__auto___18774]));

var G__18775 = (i__4731__auto___18774 + (1));
i__4731__auto___18774 = G__18775;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj18771 = obj;
var k18772 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18771,k18772)){
return (obj18771[k18772]);
} else {
return null;
}
})().apply(obj,cljs.core.to_array.call(null,args));
});

applied_science.js_interop.call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop.call.cljs$lang$applyTo = (function (seq18768){
var G__18769 = cljs.core.first.call(null,seq18768);
var seq18768__$1 = cljs.core.next.call(null,seq18768);
var G__18770 = cljs.core.first.call(null,seq18768__$1);
var seq18768__$2 = cljs.core.next.call(null,seq18768__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18769,G__18770,seq18768__$2);
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
return (function (){var obj18776 = obj;
var k18777 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18776,k18777)){
return (obj18776[k18777]);
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
var len__4730__auto___18781 = arguments.length;
var i__4731__auto___18782 = (0);
while(true){
if((i__4731__auto___18782 < len__4730__auto___18781)){
args__4736__auto__.push((arguments[i__4731__auto___18782]));

var G__18783 = (i__4731__auto___18782 + (1));
i__4731__auto___18782 = G__18783;
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
applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq18778){
var G__18779 = cljs.core.first.call(null,seq18778);
var seq18778__$1 = cljs.core.next.call(null,seq18778);
var G__18780 = cljs.core.first.call(null,seq18778__$1);
var seq18778__$2 = cljs.core.next.call(null,seq18778__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18779,G__18780,seq18778__$2);
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
var len__4730__auto___18819 = arguments.length;
var i__4731__auto___18820 = (0);
while(true){
if((i__4731__auto___18820 < len__4730__auto___18819)){
args__4736__auto__.push((arguments[i__4731__auto___18820]));

var G__18821 = (i__4731__auto___18820 + (1));
i__4731__auto___18820 = G__18821;
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
var seq__18787_18822 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),keyvals));
var chunk__18788_18823 = null;
var count__18789_18824 = (0);
var i__18790_18825 = (0);
while(true){
if((i__18790_18825 < count__18789_18824)){
var vec__18805_18826 = cljs.core._nth.call(null,chunk__18788_18823,i__18790_18825);
var k_18827 = cljs.core.nth.call(null,vec__18805_18826,(0),null);
var v_18828 = cljs.core.nth.call(null,vec__18805_18826,(1),null);
var obj18808_18829 = obj;
var obj18809_18830 = (((!((obj18808_18829 == null))))?obj18808_18829:({}));
(obj18809_18830[applied_science.js_interop.impl.wrap_key.call(null,k_18827)] = v_18828);



var G__18831 = seq__18787_18822;
var G__18832 = chunk__18788_18823;
var G__18833 = count__18789_18824;
var G__18834 = (i__18790_18825 + (1));
seq__18787_18822 = G__18831;
chunk__18788_18823 = G__18832;
count__18789_18824 = G__18833;
i__18790_18825 = G__18834;
continue;
} else {
var temp__5720__auto___18835 = cljs.core.seq.call(null,seq__18787_18822);
if(temp__5720__auto___18835){
var seq__18787_18836__$1 = temp__5720__auto___18835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18787_18836__$1)){
var c__4550__auto___18837 = cljs.core.chunk_first.call(null,seq__18787_18836__$1);
var G__18838 = cljs.core.chunk_rest.call(null,seq__18787_18836__$1);
var G__18839 = c__4550__auto___18837;
var G__18840 = cljs.core.count.call(null,c__4550__auto___18837);
var G__18841 = (0);
seq__18787_18822 = G__18838;
chunk__18788_18823 = G__18839;
count__18789_18824 = G__18840;
i__18790_18825 = G__18841;
continue;
} else {
var vec__18812_18842 = cljs.core.first.call(null,seq__18787_18836__$1);
var k_18843 = cljs.core.nth.call(null,vec__18812_18842,(0),null);
var v_18844 = cljs.core.nth.call(null,vec__18812_18842,(1),null);
var obj18815_18845 = obj;
var obj18816_18846 = (((!((obj18815_18845 == null))))?obj18815_18845:({}));
(obj18816_18846[applied_science.js_interop.impl.wrap_key.call(null,k_18843)] = v_18844);



var G__18847 = cljs.core.next.call(null,seq__18787_18836__$1);
var G__18848 = null;
var G__18849 = (0);
var G__18850 = (0);
seq__18787_18822 = G__18847;
chunk__18788_18823 = G__18848;
count__18789_18824 = G__18849;
i__18790_18825 = G__18850;
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
applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq18784){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18784));
});


//# sourceMappingURL=js_interop.js.map
