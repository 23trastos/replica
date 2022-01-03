// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.clisp');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.clisp.str_eval_async = (function klipse$lang$clisp$str_eval_async(exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_22889){
var state_val_22890 = (state_22889[(1)]);
if((state_val_22890 === (1))){
var state_22889__$1 = state_22889;
var statearr_22891_22902 = state_22889__$1;
(statearr_22891_22902[(2)] = null);

(statearr_22891_22902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (2))){
var inst_22887 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22889__$1,inst_22887);
} else {
if((state_val_22890 === (3))){
var inst_22869 = (state_22889[(2)]);
var inst_22870 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22869);
var state_22889__$1 = state_22889;
var statearr_22892_22903 = state_22889__$1;
(statearr_22892_22903[(2)] = inst_22870);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22889__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22889,(3),Object,null,(2));
var inst_22878 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,jscl,"evaluateString");
var state_22889__$1 = state_22889;
if(inst_22878){
var statearr_22893_22904 = state_22889__$1;
(statearr_22893_22904[(1)] = (5));

} else {
var statearr_22894_22905 = state_22889__$1;
(statearr_22894_22905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (5))){
var inst_22880 = (jscl["evaluateString"]);
var state_22889__$1 = state_22889;
var statearr_22895_22906 = state_22889__$1;
(statearr_22895_22906[(2)] = inst_22880);

(statearr_22895_22906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (6))){
var state_22889__$1 = state_22889;
var statearr_22896_22907 = state_22889__$1;
(statearr_22896_22907[(2)] = null);

(statearr_22896_22907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (7))){
var inst_22883 = (state_22889[(2)]);
var inst_22884 = inst_22883.call(jscl,exp);
var inst_22885 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22884);
var state_22889__$1 = state_22889;
var statearr_22897_22908 = state_22889__$1;
(statearr_22897_22908[(2)] = inst_22885);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22889__$1);

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
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$clisp$str_eval_async_$_state_machine__15944__auto__ = null;
var klipse$lang$clisp$str_eval_async_$_state_machine__15944__auto____0 = (function (){
var statearr_22898 = [null,null,null,null,null,null,null];
(statearr_22898[(0)] = klipse$lang$clisp$str_eval_async_$_state_machine__15944__auto__);

(statearr_22898[(1)] = (1));

return statearr_22898;
});
var klipse$lang$clisp$str_eval_async_$_state_machine__15944__auto____1 = (function (state_22889){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_22889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e22899){if((e22899 instanceof Object)){
var ex__15947__auto__ = e22899;
var statearr_22900_22909 = state_22889;
(statearr_22900_22909[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22910 = state_22889;
state_22889 = G__22910;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$clisp$str_eval_async_$_state_machine__15944__auto__ = function(state_22889){
switch(arguments.length){
case 0:
return klipse$lang$clisp$str_eval_async_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$clisp$str_eval_async_$_state_machine__15944__auto____1.call(this,state_22889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$clisp$str_eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clisp$str_eval_async_$_state_machine__15944__auto____0;
klipse$lang$clisp$str_eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clisp$str_eval_async_$_state_machine__15944__auto____1;
return klipse$lang$clisp$str_eval_async_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_22901 = f__16039__auto__.call(null);
(statearr_22901[(6)] = c__16038__auto__);

return statearr_22901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.clisp.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-common-lisp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-common-lisp",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.clisp.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"commonlisp"),klipse.common.registry.scripts_src.call(null,"jscl.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-clisp","selector_eval_clisp",klipse.lang.clisp.opts);

//# sourceMappingURL=clisp.js.map
