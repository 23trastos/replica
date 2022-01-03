// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8636__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8637__i = 0, G__8637__a = new Array(arguments.length -  0);
while (G__8637__i < G__8637__a.length) {G__8637__a[G__8637__i] = arguments[G__8637__i + 0]; ++G__8637__i;}
  args = new cljs.core.IndexedSeq(G__8637__a,0,null);
} 
return G__8636__delegate.call(this,args);};
G__8636.cljs$lang$maxFixedArity = 0;
G__8636.cljs$lang$applyTo = (function (arglist__8638){
var args = cljs.core.seq(arglist__8638);
return G__8636__delegate(args);
});
G__8636.cljs$core$IFn$_invoke$arity$variadic = G__8636__delegate;
return G__8636;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8639__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8640__i = 0, G__8640__a = new Array(arguments.length -  0);
while (G__8640__i < G__8640__a.length) {G__8640__a[G__8640__i] = arguments[G__8640__i + 0]; ++G__8640__i;}
  args = new cljs.core.IndexedSeq(G__8640__a,0,null);
} 
return G__8639__delegate.call(this,args);};
G__8639.cljs$lang$maxFixedArity = 0;
G__8639.cljs$lang$applyTo = (function (arglist__8641){
var args = cljs.core.seq(arglist__8641);
return G__8639__delegate(args);
});
G__8639.cljs$core$IFn$_invoke$arity$variadic = G__8639__delegate;
return G__8639;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
