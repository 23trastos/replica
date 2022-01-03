// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.html');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.html.my_eval = (function klipse$lang$html$my_eval(exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26825){
var state_val_26826 = (state_26825[(1)]);
if((state_val_26826 === (1))){
var state_26825__$1 = state_26825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26825__$1,exp);
} else {
return null;
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$html$my_eval_$_state_machine__15944__auto__ = null;
var klipse$lang$html$my_eval_$_state_machine__15944__auto____0 = (function (){
var statearr_26827 = [null,null,null,null,null,null,null];
(statearr_26827[(0)] = klipse$lang$html$my_eval_$_state_machine__15944__auto__);

(statearr_26827[(1)] = (1));

return statearr_26827;
});
var klipse$lang$html$my_eval_$_state_machine__15944__auto____1 = (function (state_26825){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26828){if((e26828 instanceof Object)){
var ex__15947__auto__ = e26828;
var statearr_26829_26831 = state_26825;
(statearr_26829_26831[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26832 = state_26825;
state_26825 = G__26832;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$html$my_eval_$_state_machine__15944__auto__ = function(state_26825){
switch(arguments.length){
case 0:
return klipse$lang$html$my_eval_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$html$my_eval_$_state_machine__15944__auto____1.call(this,state_26825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$html$my_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$html$my_eval_$_state_machine__15944__auto____0;
klipse$lang$html$my_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$html$my_eval_$_state_machine__15944__auto____1;
return klipse$lang$html$my_eval_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26830 = f__16039__auto__.call(null);
(statearr_26830[(6)] = c__16038__auto__);

return statearr_26830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.html.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/html",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.html.my_eval,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"; "], null);
klipse.common.registry.register_mode.call(null,"eval-html","selector_eval_html",klipse.lang.html.opts);

//# sourceMappingURL=html.js.map
