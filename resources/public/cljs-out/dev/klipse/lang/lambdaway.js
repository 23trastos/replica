// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.lambdaway');
goog.require('cljs.core');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.lambdaway.my_eval = (function klipse$lang$lambdaway$my_eval(exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_37217){
var state_val_37218 = (state_37217[(1)]);
if((state_val_37218 === (1))){
var inst_37208 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,LAMBDATALK,"evaluate");
var state_37217__$1 = state_37217;
if(inst_37208){
var statearr_37219_37227 = state_37217__$1;
(statearr_37219_37227[(1)] = (2));

} else {
var statearr_37220_37228 = state_37217__$1;
(statearr_37220_37228[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37218 === (2))){
var inst_37210 = (LAMBDATALK["evaluate"]);
var state_37217__$1 = state_37217;
var statearr_37221_37229 = state_37217__$1;
(statearr_37221_37229[(2)] = inst_37210);

(statearr_37221_37229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37218 === (3))){
var state_37217__$1 = state_37217;
var statearr_37222_37230 = state_37217__$1;
(statearr_37222_37230[(2)] = null);

(statearr_37222_37230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37218 === (4))){
var inst_37213 = (state_37217[(2)]);
var inst_37214 = inst_37213.call(LAMBDATALK,exp);
var inst_37215 = (inst_37214["val"]);
var state_37217__$1 = state_37217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37217__$1,inst_37215);
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
var klipse$lang$lambdaway$my_eval_$_state_machine__21022__auto__ = null;
var klipse$lang$lambdaway$my_eval_$_state_machine__21022__auto____0 = (function (){
var statearr_37223 = [null,null,null,null,null,null,null];
(statearr_37223[(0)] = klipse$lang$lambdaway$my_eval_$_state_machine__21022__auto__);

(statearr_37223[(1)] = (1));

return statearr_37223;
});
var klipse$lang$lambdaway$my_eval_$_state_machine__21022__auto____1 = (function (state_37217){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_37217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e37224){if((e37224 instanceof Object)){
var ex__21025__auto__ = e37224;
var statearr_37225_37231 = state_37217;
(statearr_37225_37231[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37232 = state_37217;
state_37217 = G__37232;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$lambdaway$my_eval_$_state_machine__21022__auto__ = function(state_37217){
switch(arguments.length){
case 0:
return klipse$lang$lambdaway$my_eval_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$lambdaway$my_eval_$_state_machine__21022__auto____1.call(this,state_37217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lambdaway$my_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lambdaway$my_eval_$_state_machine__21022__auto____0;
klipse$lang$lambdaway$my_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lambdaway$my_eval_$_state_machine__21022__auto____1;
return klipse$lang$lambdaway$my_eval_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_37226 = f__21189__auto__.call(null);
(statearr_37226[(6)] = c__21188__auto__);

return statearr_37226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.lambdaway.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lambdaway.my_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.scripts_src.call(null,"lambdaway_eval.js"),klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"[comment]: "], null);
klipse.common.registry.register_mode.call(null,"eval-lambdaway","selector_eval_lambdaway",klipse.lang.lambdaway.opts);

//# sourceMappingURL=lambdaway.js.map
