// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse_clj.lang.clojure.guard');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.core.async');
/**
 * each time the watchdog has a chance to run, this var is set with the current time
 */
klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_ = (0);
klipse_clj.lang.clojure.guard.min_max_eval_duration = (3000);
/**
 * The number of msec for the watchdog period.
 *          This value has to be much lower than min-max-eval-duration.
 */
klipse_clj.lang.clojure.guard.watchdog_period = (klipse_clj.lang.clojure.guard.min_max_eval_duration / (10));
klipse_clj.lang.clojure.guard.runonce = (function klipse_clj$lang$clojure$guard$runonce(f){
var ran = cljs.core.atom.call(null,false);
return ((function (ran){
return (function() { 
var G__32643__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__32643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32644__i = 0, G__32644__a = new Array(arguments.length -  0);
while (G__32644__i < G__32644__a.length) {G__32644__a[G__32644__i] = arguments[G__32644__i + 0]; ++G__32644__i;}
  args = new cljs.core.IndexedSeq(G__32644__a,0,null);
} 
return G__32643__delegate.call(this,args);};
G__32643.cljs$lang$maxFixedArity = 0;
G__32643.cljs$lang$applyTo = (function (arglist__32645){
var args = cljs.core.seq(arglist__32645);
return G__32643__delegate(args);
});
G__32643.cljs$core$IFn$_invoke$arity$variadic = G__32643__delegate;
return G__32643;
})()
;
;})(ran))
});
klipse_clj.lang.clojure.guard.tick = (function klipse_clj$lang$clojure$guard$tick(){
return klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_ = cljs.core.system_time.call(null);
});
/**
 * reset the *watchdog-tick* to the current time once in a while
 */
klipse_clj.lang.clojure.guard.run_watchdog_STAR_ = (function klipse_clj$lang$clojure$guard$run_watchdog_STAR_(){
klipse_clj.lang.clojure.guard.tick.call(null);

var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_32655){
var state_val_32656 = (state_32655[(1)]);
if((state_val_32656 === (1))){
var state_32655__$1 = state_32655;
var statearr_32657_32664 = state_32655__$1;
(statearr_32657_32664[(2)] = null);

(statearr_32657_32664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (2))){
var inst_32647 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_32655__$1 = state_32655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32655__$1,(4),inst_32647);
} else {
if((state_val_32656 === (3))){
var inst_32653 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32655__$1,inst_32653);
} else {
if((state_val_32656 === (4))){
var inst_32649 = (state_32655[(2)]);
var inst_32650 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_32655__$1 = (function (){var statearr_32658 = state_32655;
(statearr_32658[(7)] = inst_32649);

(statearr_32658[(8)] = inst_32650);

return statearr_32658;
})();
var statearr_32659_32665 = state_32655__$1;
(statearr_32659_32665[(2)] = null);

(statearr_32659_32665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21022__auto____0 = (function (){
var statearr_32660 = [null,null,null,null,null,null,null,null,null];
(statearr_32660[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21022__auto__);

(statearr_32660[(1)] = (1));

return statearr_32660;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21022__auto____1 = (function (state_32655){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_32655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e32661){if((e32661 instanceof Object)){
var ex__21025__auto__ = e32661;
var statearr_32662_32666 = state_32655;
(statearr_32662_32666[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32667 = state_32655;
state_32655 = G__32667;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21022__auto__ = function(state_32655){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21022__auto____1.call(this,state_32655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_32663 = f__21189__auto__.call(null);
(statearr_32663[(6)] = c__21188__auto__);

return statearr_32663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse_clj.lang.clojure.guard.run_watchdog_once = klipse_clj.lang.clojure.guard.runonce.call(null,klipse_clj.lang.clojure.guard.run_watchdog_STAR_);
klipse_clj.lang.clojure.guard.watchdog = (function klipse_clj$lang$clojure$guard$watchdog(){
klipse_clj.lang.clojure.guard.tick.call(null);

return klipse_clj.lang.clojure.guard.run_watchdog_once.call(null);
});
klipse_clj.lang.clojure.guard.guard = (function klipse_clj$lang$clojure$guard$guard(max_eval_duration){
if(((cljs.core.system_time.call(null) - klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_) > max_eval_duration)){
if(cljs.core.truth_(confirm(["A KLIPSE snippet has been running for more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration)," milliseconds. This is often because of a long-running computation or infinite loop. Would you like to interrupt the snippet? \n OK to interrupt the evaluation.\n Cancel to continue."].join('')))){
throw "Infinite Loop";
} else {
}

return klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_ = cljs.core.system_time.call(null);
} else {
return null;
}
});
goog.exportSymbol('klipse_clj.lang.clojure.guard.guard', klipse_clj.lang.clojure.guard.guard);
/**
 * same as cljs.compiler/emits with insertion of a `guard()` call before if and recur (emitted as continue) statement.
 * 
 *   Limitations:
 *   1. It doesn't prevent infinite loop in imported code e.g. (reduce + (range)
 *   
 */
klipse_clj.lang.clojure.guard.my_emits = (function klipse_clj$lang$clojure$guard$my_emits(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32675 = arguments.length;
var i__4731__auto___32676 = (0);
while(true){
if((i__4731__auto___32676 < len__4730__auto___32675)){
args__4736__auto__.push((arguments[i__4731__auto___32676]));

var G__32677 = (i__4731__auto___32676 + (1));
i__4731__auto___32676 = G__32677;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic = (function (max_eval_duration,xs){
if(cljs.core.truth_((function (){var and__4120__auto__ = typeof cljs.core.first.call(null,xs) === 'string';
if(and__4120__auto__){
return cljs.core.re_matches.call(null,/^(if|continue).*/,cljs.core.first.call(null,xs));
} else {
return and__4120__auto__;
}
})())){
cljs.core.print.call(null,["klipse_clj.lang.clojure.guard.guard(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration),");"].join(''));
} else {
}

var seq__32671_32678 = cljs.core.seq.call(null,xs);
var chunk__32672_32679 = null;
var count__32673_32680 = (0);
var i__32674_32681 = (0);
while(true){
if((i__32674_32681 < count__32673_32680)){
var x_32682 = cljs.core._nth.call(null,chunk__32672_32679,i__32674_32681);
if((x_32682 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_32682)){
cljs.compiler.emit.call(null,x_32682);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_32682)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_32682);
} else {
if(goog.isFunction(x_32682)){
x_32682.call(null);
} else {
var s_32683 = cljs.core.print_str.call(null,x_32682);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__32671_32678,chunk__32672_32679,count__32673_32680,i__32674_32681,s_32683,x_32682){
return (function (p1__32668_SHARP_){
return (p1__32668_SHARP_ + cljs.core.count.call(null,s_32683));
});})(seq__32671_32678,chunk__32672_32679,count__32673_32680,i__32674_32681,s_32683,x_32682))
);
}

cljs.core.print.call(null,s_32683);

}
}
}
}


var G__32684 = seq__32671_32678;
var G__32685 = chunk__32672_32679;
var G__32686 = count__32673_32680;
var G__32687 = (i__32674_32681 + (1));
seq__32671_32678 = G__32684;
chunk__32672_32679 = G__32685;
count__32673_32680 = G__32686;
i__32674_32681 = G__32687;
continue;
} else {
var temp__5720__auto___32688 = cljs.core.seq.call(null,seq__32671_32678);
if(temp__5720__auto___32688){
var seq__32671_32689__$1 = temp__5720__auto___32688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32671_32689__$1)){
var c__4550__auto___32690 = cljs.core.chunk_first.call(null,seq__32671_32689__$1);
var G__32691 = cljs.core.chunk_rest.call(null,seq__32671_32689__$1);
var G__32692 = c__4550__auto___32690;
var G__32693 = cljs.core.count.call(null,c__4550__auto___32690);
var G__32694 = (0);
seq__32671_32678 = G__32691;
chunk__32672_32679 = G__32692;
count__32673_32680 = G__32693;
i__32674_32681 = G__32694;
continue;
} else {
var x_32695 = cljs.core.first.call(null,seq__32671_32689__$1);
if((x_32695 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_32695)){
cljs.compiler.emit.call(null,x_32695);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_32695)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_32695);
} else {
if(goog.isFunction(x_32695)){
x_32695.call(null);
} else {
var s_32696 = cljs.core.print_str.call(null,x_32695);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__32671_32678,chunk__32672_32679,count__32673_32680,i__32674_32681,s_32696,x_32695,seq__32671_32689__$1,temp__5720__auto___32688){
return (function (p1__32668_SHARP_){
return (p1__32668_SHARP_ + cljs.core.count.call(null,s_32696));
});})(seq__32671_32678,chunk__32672_32679,count__32673_32680,i__32674_32681,s_32696,x_32695,seq__32671_32689__$1,temp__5720__auto___32688))
);
}

cljs.core.print.call(null,s_32696);

}
}
}
}


var G__32697 = cljs.core.next.call(null,seq__32671_32689__$1);
var G__32698 = null;
var G__32699 = (0);
var G__32700 = (0);
seq__32671_32678 = G__32697;
chunk__32672_32679 = G__32698;
count__32673_32680 = G__32699;
i__32674_32681 = G__32700;
continue;
}
} else {
}
}
break;
}

return null;
});

klipse_clj.lang.clojure.guard.my_emits.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq32669){
var G__32670 = cljs.core.first.call(null,seq32669);
var seq32669__$1 = cljs.core.next.call(null,seq32669);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32670,seq32669__$1);
});


//# sourceMappingURL=guard.js.map
