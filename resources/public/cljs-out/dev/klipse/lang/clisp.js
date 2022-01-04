// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.clisp');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.clisp.str_eval_async = (function klipse$lang$clisp$str_eval_async(exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_34153){
var state_val_34154 = (state_34153[(1)]);
if((state_val_34154 === (1))){
var state_34153__$1 = state_34153;
var statearr_34155_34166 = state_34153__$1;
(statearr_34155_34166[(2)] = null);

(statearr_34155_34166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34154 === (2))){
var inst_34151 = (state_34153[(2)]);
var state_34153__$1 = state_34153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34153__$1,inst_34151);
} else {
if((state_val_34154 === (3))){
var inst_34133 = (state_34153[(2)]);
var inst_34134 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34133);
var state_34153__$1 = state_34153;
var statearr_34156_34167 = state_34153__$1;
(statearr_34156_34167[(2)] = inst_34134);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34153__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34154 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34153,(3),Object,null,(2));
var inst_34142 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,jscl,"evaluateString");
var state_34153__$1 = state_34153;
if(inst_34142){
var statearr_34157_34168 = state_34153__$1;
(statearr_34157_34168[(1)] = (5));

} else {
var statearr_34158_34169 = state_34153__$1;
(statearr_34158_34169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34154 === (5))){
var inst_34144 = (jscl["evaluateString"]);
var state_34153__$1 = state_34153;
var statearr_34159_34170 = state_34153__$1;
(statearr_34159_34170[(2)] = inst_34144);

(statearr_34159_34170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34154 === (6))){
var state_34153__$1 = state_34153;
var statearr_34160_34171 = state_34153__$1;
(statearr_34160_34171[(2)] = null);

(statearr_34160_34171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34154 === (7))){
var inst_34147 = (state_34153[(2)]);
var inst_34148 = inst_34147.call(jscl,exp);
var inst_34149 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34148);
var state_34153__$1 = state_34153;
var statearr_34161_34172 = state_34153__$1;
(statearr_34161_34172[(2)] = inst_34149);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34153__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$clisp$str_eval_async_$_state_machine__21022__auto__ = null;
var klipse$lang$clisp$str_eval_async_$_state_machine__21022__auto____0 = (function (){
var statearr_34162 = [null,null,null,null,null,null,null];
(statearr_34162[(0)] = klipse$lang$clisp$str_eval_async_$_state_machine__21022__auto__);

(statearr_34162[(1)] = (1));

return statearr_34162;
});
var klipse$lang$clisp$str_eval_async_$_state_machine__21022__auto____1 = (function (state_34153){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_34153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e34163){if((e34163 instanceof Object)){
var ex__21025__auto__ = e34163;
var statearr_34164_34173 = state_34153;
(statearr_34164_34173[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34174 = state_34153;
state_34153 = G__34174;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$clisp$str_eval_async_$_state_machine__21022__auto__ = function(state_34153){
switch(arguments.length){
case 0:
return klipse$lang$clisp$str_eval_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$clisp$str_eval_async_$_state_machine__21022__auto____1.call(this,state_34153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$clisp$str_eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clisp$str_eval_async_$_state_machine__21022__auto____0;
klipse$lang$clisp$str_eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clisp$str_eval_async_$_state_machine__21022__auto____1;
return klipse$lang$clisp$str_eval_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_34165 = f__21189__auto__.call(null);
(statearr_34165[(6)] = c__21188__auto__);

return statearr_34165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.clisp.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-common-lisp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-common-lisp",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.clisp.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"commonlisp"),klipse.common.registry.scripts_src.call(null,"jscl.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-clisp","selector_eval_clisp",klipse.lang.clisp.opts);

//# sourceMappingURL=clisp.js.map
