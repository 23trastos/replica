// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.html');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.html.my_eval = (function klipse$lang$html$my_eval(exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41865){
var state_val_41866 = (state_41865[(1)]);
if((state_val_41866 === (1))){
var state_41865__$1 = state_41865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41865__$1,exp);
} else {
return null;
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$html$my_eval_$_state_machine__21022__auto__ = null;
var klipse$lang$html$my_eval_$_state_machine__21022__auto____0 = (function (){
var statearr_41867 = [null,null,null,null,null,null,null];
(statearr_41867[(0)] = klipse$lang$html$my_eval_$_state_machine__21022__auto__);

(statearr_41867[(1)] = (1));

return statearr_41867;
});
var klipse$lang$html$my_eval_$_state_machine__21022__auto____1 = (function (state_41865){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41868){if((e41868 instanceof Object)){
var ex__21025__auto__ = e41868;
var statearr_41869_41871 = state_41865;
(statearr_41869_41871[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41872 = state_41865;
state_41865 = G__41872;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$html$my_eval_$_state_machine__21022__auto__ = function(state_41865){
switch(arguments.length){
case 0:
return klipse$lang$html$my_eval_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$html$my_eval_$_state_machine__21022__auto____1.call(this,state_41865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$html$my_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$html$my_eval_$_state_machine__21022__auto____0;
klipse$lang$html$my_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$html$my_eval_$_state_machine__21022__auto____1;
return klipse$lang$html$my_eval_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41870 = f__21189__auto__.call(null);
(statearr_41870[(6)] = c__21188__auto__);

return statearr_41870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.html.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/html",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.html.my_eval,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"; "], null);
klipse.common.registry.register_mode.call(null,"eval-html","selector_eval_html",klipse.lang.html.opts);

//# sourceMappingURL=html.js.map
