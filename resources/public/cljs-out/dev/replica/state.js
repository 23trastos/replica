// Compiled by ClojureScript 1.10.520 {}
goog.provide('replica.state');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof replica !== 'undefined') && (typeof replica.state !== 'undefined') && (typeof replica.state.rstate !== 'undefined')){
} else {
replica.state.rstate = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}

//# sourceMappingURL=state.js.map
