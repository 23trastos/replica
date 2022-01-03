// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.markdown');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.markdown.str_eval_async = (function klipse$lang$markdown$str_eval_async(exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26793){
var state_val_26794 = (state_26793[(1)]);
if((state_val_26794 === (1))){
var inst_26791 = markdown.toHTML(exp);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26793__$1,inst_26791);
} else {
return null;
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$markdown$str_eval_async_$_state_machine__15944__auto__ = null;
var klipse$lang$markdown$str_eval_async_$_state_machine__15944__auto____0 = (function (){
var statearr_26795 = [null,null,null,null,null,null,null];
(statearr_26795[(0)] = klipse$lang$markdown$str_eval_async_$_state_machine__15944__auto__);

(statearr_26795[(1)] = (1));

return statearr_26795;
});
var klipse$lang$markdown$str_eval_async_$_state_machine__15944__auto____1 = (function (state_26793){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26796){if((e26796 instanceof Object)){
var ex__15947__auto__ = e26796;
var statearr_26797_26799 = state_26793;
(statearr_26797_26799[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26800 = state_26793;
state_26793 = G__26800;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$markdown$str_eval_async_$_state_machine__15944__auto__ = function(state_26793){
switch(arguments.length){
case 0:
return klipse$lang$markdown$str_eval_async_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$markdown$str_eval_async_$_state_machine__15944__auto____1.call(this,state_26793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$markdown$str_eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$markdown$str_eval_async_$_state_machine__15944__auto____0;
klipse$lang$markdown$str_eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$markdown$str_eval_async_$_state_machine__15944__auto____1;
return klipse$lang$markdown$str_eval_async_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26798 = f__16039__auto__.call(null);
(statearr_26798[(6)] = c__16038__auto__);

return statearr_26798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.markdown.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"markdown",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"htmlmixed",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.scripts_src.call(null,"markdown.min.js?"),klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.markdown.str_eval_async,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"[comment]: "], null);
klipse.common.registry.register_mode.call(null,"eval-markdown","selector_eval_markdown",klipse.lang.markdown.opts);

//# sourceMappingURL=markdown.js.map
