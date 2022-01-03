// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.ruby');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.ruby.load_opal_parser = (function klipse$lang$ruby$load_opal_parser(){
var obj__18568__auto__ = Opal;
var f__18569__auto__ = (function (){var obj23438 = obj__18568__auto__;
var k23439 = "load";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23438,k23439)){
return (obj23438[k23439]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,"opal-parser");
});
klipse.lang.ruby.load_opal_parser_once = klipse.utils.runonce.call(null,klipse.lang.ruby.load_opal_parser);
klipse.lang.ruby.str_eval_async = (function klipse$lang$ruby$str_eval_async(exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_23460){
var state_val_23461 = (state_23460[(1)]);
if((state_val_23461 === (1))){
var inst_23440 = klipse.lang.ruby.load_opal_parser_once.call(null);
var state_23460__$1 = (function (){var statearr_23462 = state_23460;
(statearr_23462[(7)] = inst_23440);

return statearr_23462;
})();
var statearr_23463_23474 = state_23460__$1;
(statearr_23463_23474[(2)] = null);

(statearr_23463_23474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23461 === (2))){
var inst_23458 = (state_23460[(2)]);
var state_23460__$1 = state_23460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23460__$1,inst_23458);
} else {
if((state_val_23461 === (3))){
var inst_23441 = (state_23460[(2)]);
var inst_23442 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23441);
var state_23460__$1 = state_23460;
var statearr_23464_23475 = state_23460__$1;
(statearr_23464_23475[(2)] = inst_23442);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23460__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23461 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23460,(3),Object,null,(2));
var inst_23448 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,Opal,"eval");
var state_23460__$1 = state_23460;
if(inst_23448){
var statearr_23465_23476 = state_23460__$1;
(statearr_23465_23476[(1)] = (5));

} else {
var statearr_23466_23477 = state_23460__$1;
(statearr_23466_23477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23461 === (5))){
var inst_23450 = (Opal["eval"]);
var state_23460__$1 = state_23460;
var statearr_23467_23478 = state_23460__$1;
(statearr_23467_23478[(2)] = inst_23450);

(statearr_23467_23478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23461 === (6))){
var state_23460__$1 = state_23460;
var statearr_23468_23479 = state_23460__$1;
(statearr_23468_23479[(2)] = null);

(statearr_23468_23479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23461 === (7))){
var inst_23453 = (state_23460[(2)]);
var inst_23454 = inst_23453.call(Opal,exp);
var inst_23455 = (inst_23454["$inspect"]);
var inst_23456 = inst_23455.apply(inst_23454);
var state_23460__$1 = state_23460;
var statearr_23469_23480 = state_23460__$1;
(statearr_23469_23480[(2)] = inst_23456);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23460__$1);

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
var klipse$lang$ruby$str_eval_async_$_state_machine__15944__auto__ = null;
var klipse$lang$ruby$str_eval_async_$_state_machine__15944__auto____0 = (function (){
var statearr_23470 = [null,null,null,null,null,null,null,null];
(statearr_23470[(0)] = klipse$lang$ruby$str_eval_async_$_state_machine__15944__auto__);

(statearr_23470[(1)] = (1));

return statearr_23470;
});
var klipse$lang$ruby$str_eval_async_$_state_machine__15944__auto____1 = (function (state_23460){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_23460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e23471){if((e23471 instanceof Object)){
var ex__15947__auto__ = e23471;
var statearr_23472_23481 = state_23460;
(statearr_23472_23481[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23482 = state_23460;
state_23460 = G__23482;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$ruby$str_eval_async_$_state_machine__15944__auto__ = function(state_23460){
switch(arguments.length){
case 0:
return klipse$lang$ruby$str_eval_async_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$ruby$str_eval_async_$_state_machine__15944__auto____1.call(this,state_23460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$ruby$str_eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ruby$str_eval_async_$_state_machine__15944__auto____0;
klipse$lang$ruby$str_eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ruby$str_eval_async_$_state_machine__15944__auto____1;
return klipse$lang$ruby$str_eval_async_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_23473 = f__16039__auto__.call(null);
(statearr_23473[(6)] = c__16038__auto__);

return statearr_23473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.ruby.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"ruby",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ruby.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"opal.min.js?p"),klipse.common.registry.scripts_src.call(null,"opal-parser.min.js?p")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"eval-ruby","selector_eval_ruby",klipse.lang.ruby.opts);

//# sourceMappingURL=ruby.js.map
