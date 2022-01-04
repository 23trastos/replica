// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.markdown');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.markdown.str_eval_async = (function klipse$lang$markdown$str_eval_async(exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41803){
var state_val_41804 = (state_41803[(1)]);
if((state_val_41804 === (1))){
var inst_41801 = markdown.toHTML(exp);
var state_41803__$1 = state_41803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41803__$1,inst_41801);
} else {
return null;
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$markdown$str_eval_async_$_state_machine__21022__auto__ = null;
var klipse$lang$markdown$str_eval_async_$_state_machine__21022__auto____0 = (function (){
var statearr_41805 = [null,null,null,null,null,null,null];
(statearr_41805[(0)] = klipse$lang$markdown$str_eval_async_$_state_machine__21022__auto__);

(statearr_41805[(1)] = (1));

return statearr_41805;
});
var klipse$lang$markdown$str_eval_async_$_state_machine__21022__auto____1 = (function (state_41803){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41806){if((e41806 instanceof Object)){
var ex__21025__auto__ = e41806;
var statearr_41807_41809 = state_41803;
(statearr_41807_41809[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41810 = state_41803;
state_41803 = G__41810;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$markdown$str_eval_async_$_state_machine__21022__auto__ = function(state_41803){
switch(arguments.length){
case 0:
return klipse$lang$markdown$str_eval_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$markdown$str_eval_async_$_state_machine__21022__auto____1.call(this,state_41803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$markdown$str_eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$markdown$str_eval_async_$_state_machine__21022__auto____0;
klipse$lang$markdown$str_eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$markdown$str_eval_async_$_state_machine__21022__auto____1;
return klipse$lang$markdown$str_eval_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41808 = f__21189__auto__.call(null);
(statearr_41808[(6)] = c__21188__auto__);

return statearr_41808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.markdown.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"markdown",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"htmlmixed",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.scripts_src.call(null,"markdown.min.js?"),klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.markdown.str_eval_async,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"[comment]: "], null);
klipse.common.registry.register_mode.call(null,"eval-markdown","selector_eval_markdown",klipse.lang.markdown.opts);

//# sourceMappingURL=markdown.js.map
