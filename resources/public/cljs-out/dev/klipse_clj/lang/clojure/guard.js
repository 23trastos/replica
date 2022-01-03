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
var G__22116__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__22116 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22117__i = 0, G__22117__a = new Array(arguments.length -  0);
while (G__22117__i < G__22117__a.length) {G__22117__a[G__22117__i] = arguments[G__22117__i + 0]; ++G__22117__i;}
  args = new cljs.core.IndexedSeq(G__22117__a,0,null);
} 
return G__22116__delegate.call(this,args);};
G__22116.cljs$lang$maxFixedArity = 0;
G__22116.cljs$lang$applyTo = (function (arglist__22118){
var args = cljs.core.seq(arglist__22118);
return G__22116__delegate(args);
});
G__22116.cljs$core$IFn$_invoke$arity$variadic = G__22116__delegate;
return G__22116;
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

var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_22128){
var state_val_22129 = (state_22128[(1)]);
if((state_val_22129 === (1))){
var state_22128__$1 = state_22128;
var statearr_22130_22137 = state_22128__$1;
(statearr_22130_22137[(2)] = null);

(statearr_22130_22137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (2))){
var inst_22120 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22128__$1,(4),inst_22120);
} else {
if((state_val_22129 === (3))){
var inst_22126 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22128__$1,inst_22126);
} else {
if((state_val_22129 === (4))){
var inst_22122 = (state_22128[(2)]);
var inst_22123 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_22128__$1 = (function (){var statearr_22131 = state_22128;
(statearr_22131[(7)] = inst_22122);

(statearr_22131[(8)] = inst_22123);

return statearr_22131;
})();
var statearr_22132_22138 = state_22128__$1;
(statearr_22132_22138[(2)] = null);

(statearr_22132_22138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_22133 = [null,null,null,null,null,null,null,null,null];
(statearr_22133[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15944__auto__);

(statearr_22133[(1)] = (1));

return statearr_22133;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15944__auto____1 = (function (state_22128){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_22128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e22134){if((e22134 instanceof Object)){
var ex__15947__auto__ = e22134;
var statearr_22135_22139 = state_22128;
(statearr_22135_22139[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22140 = state_22128;
state_22128 = G__22140;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15944__auto__ = function(state_22128){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15944__auto____1.call(this,state_22128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_22136 = f__16039__auto__.call(null);
(statearr_22136[(6)] = c__16038__auto__);

return statearr_22136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
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
var len__4730__auto___22148 = arguments.length;
var i__4731__auto___22149 = (0);
while(true){
if((i__4731__auto___22149 < len__4730__auto___22148)){
args__4736__auto__.push((arguments[i__4731__auto___22149]));

var G__22150 = (i__4731__auto___22149 + (1));
i__4731__auto___22149 = G__22150;
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

var seq__22144_22151 = cljs.core.seq.call(null,xs);
var chunk__22145_22152 = null;
var count__22146_22153 = (0);
var i__22147_22154 = (0);
while(true){
if((i__22147_22154 < count__22146_22153)){
var x_22155 = cljs.core._nth.call(null,chunk__22145_22152,i__22147_22154);
if((x_22155 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_22155)){
cljs.compiler.emit.call(null,x_22155);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_22155)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_22155);
} else {
if(goog.isFunction(x_22155)){
x_22155.call(null);
} else {
var s_22156 = cljs.core.print_str.call(null,x_22155);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__22144_22151,chunk__22145_22152,count__22146_22153,i__22147_22154,s_22156,x_22155){
return (function (p1__22141_SHARP_){
return (p1__22141_SHARP_ + cljs.core.count.call(null,s_22156));
});})(seq__22144_22151,chunk__22145_22152,count__22146_22153,i__22147_22154,s_22156,x_22155))
);
}

cljs.core.print.call(null,s_22156);

}
}
}
}


var G__22157 = seq__22144_22151;
var G__22158 = chunk__22145_22152;
var G__22159 = count__22146_22153;
var G__22160 = (i__22147_22154 + (1));
seq__22144_22151 = G__22157;
chunk__22145_22152 = G__22158;
count__22146_22153 = G__22159;
i__22147_22154 = G__22160;
continue;
} else {
var temp__5720__auto___22161 = cljs.core.seq.call(null,seq__22144_22151);
if(temp__5720__auto___22161){
var seq__22144_22162__$1 = temp__5720__auto___22161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22144_22162__$1)){
var c__4550__auto___22163 = cljs.core.chunk_first.call(null,seq__22144_22162__$1);
var G__22164 = cljs.core.chunk_rest.call(null,seq__22144_22162__$1);
var G__22165 = c__4550__auto___22163;
var G__22166 = cljs.core.count.call(null,c__4550__auto___22163);
var G__22167 = (0);
seq__22144_22151 = G__22164;
chunk__22145_22152 = G__22165;
count__22146_22153 = G__22166;
i__22147_22154 = G__22167;
continue;
} else {
var x_22168 = cljs.core.first.call(null,seq__22144_22162__$1);
if((x_22168 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_22168)){
cljs.compiler.emit.call(null,x_22168);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_22168)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_22168);
} else {
if(goog.isFunction(x_22168)){
x_22168.call(null);
} else {
var s_22169 = cljs.core.print_str.call(null,x_22168);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__22144_22151,chunk__22145_22152,count__22146_22153,i__22147_22154,s_22169,x_22168,seq__22144_22162__$1,temp__5720__auto___22161){
return (function (p1__22141_SHARP_){
return (p1__22141_SHARP_ + cljs.core.count.call(null,s_22169));
});})(seq__22144_22151,chunk__22145_22152,count__22146_22153,i__22147_22154,s_22169,x_22168,seq__22144_22162__$1,temp__5720__auto___22161))
);
}

cljs.core.print.call(null,s_22169);

}
}
}
}


var G__22170 = cljs.core.next.call(null,seq__22144_22162__$1);
var G__22171 = null;
var G__22172 = (0);
var G__22173 = (0);
seq__22144_22151 = G__22170;
chunk__22145_22152 = G__22171;
count__22146_22153 = G__22172;
i__22147_22154 = G__22173;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq22142){
var G__22143 = cljs.core.first.call(null,seq22142);
var seq22142__$1 = cljs.core.next.call(null,seq22142);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22143,seq22142__$1);
});


//# sourceMappingURL=guard.js.map
