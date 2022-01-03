// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.lambdaway');
goog.require('cljs.core');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.lambdaway.my_eval = (function klipse$lang$lambdaway$my_eval(exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_24449){
var state_val_24450 = (state_24449[(1)]);
if((state_val_24450 === (1))){
var inst_24440 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,LAMBDATALK,"evaluate");
var state_24449__$1 = state_24449;
if(inst_24440){
var statearr_24451_24459 = state_24449__$1;
(statearr_24451_24459[(1)] = (2));

} else {
var statearr_24452_24460 = state_24449__$1;
(statearr_24452_24460[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (2))){
var inst_24442 = (LAMBDATALK["evaluate"]);
var state_24449__$1 = state_24449;
var statearr_24453_24461 = state_24449__$1;
(statearr_24453_24461[(2)] = inst_24442);

(statearr_24453_24461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (3))){
var state_24449__$1 = state_24449;
var statearr_24454_24462 = state_24449__$1;
(statearr_24454_24462[(2)] = null);

(statearr_24454_24462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (4))){
var inst_24445 = (state_24449[(2)]);
var inst_24446 = inst_24445.call(LAMBDATALK,exp);
var inst_24447 = (inst_24446["val"]);
var state_24449__$1 = state_24449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24449__$1,inst_24447);
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
var klipse$lang$lambdaway$my_eval_$_state_machine__15944__auto__ = null;
var klipse$lang$lambdaway$my_eval_$_state_machine__15944__auto____0 = (function (){
var statearr_24455 = [null,null,null,null,null,null,null];
(statearr_24455[(0)] = klipse$lang$lambdaway$my_eval_$_state_machine__15944__auto__);

(statearr_24455[(1)] = (1));

return statearr_24455;
});
var klipse$lang$lambdaway$my_eval_$_state_machine__15944__auto____1 = (function (state_24449){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_24449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e24456){if((e24456 instanceof Object)){
var ex__15947__auto__ = e24456;
var statearr_24457_24463 = state_24449;
(statearr_24457_24463[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24464 = state_24449;
state_24449 = G__24464;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$lambdaway$my_eval_$_state_machine__15944__auto__ = function(state_24449){
switch(arguments.length){
case 0:
return klipse$lang$lambdaway$my_eval_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$lambdaway$my_eval_$_state_machine__15944__auto____1.call(this,state_24449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lambdaway$my_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lambdaway$my_eval_$_state_machine__15944__auto____0;
klipse$lang$lambdaway$my_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lambdaway$my_eval_$_state_machine__15944__auto____1;
return klipse$lang$lambdaway$my_eval_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_24458 = f__16039__auto__.call(null);
(statearr_24458[(6)] = c__16038__auto__);

return statearr_24458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.lambdaway.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lambdaway.my_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.scripts_src.call(null,"lambdaway_eval.js"),klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"[comment]: "], null);
klipse.common.registry.register_mode.call(null,"eval-lambdaway","selector_eval_lambdaway",klipse.lang.lambdaway.opts);

//# sourceMappingURL=lambdaway.js.map
