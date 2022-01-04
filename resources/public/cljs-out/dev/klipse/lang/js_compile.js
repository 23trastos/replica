// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.js_compile');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.js_compile.advanced_compile = (function klipse$lang$js_compile$advanced_compile(code){
var flags = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsCode","jsCode",-574022139),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),code], null)], null),new cljs.core.Keyword(null,"compilationLevel","compilationLevel",-1778317460),"ADVANCED"], null));
var _ = console.log(flags);
var map__42001 = cljs.core.js__GT_clj.call(null,compile(flags),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__42001__$1 = (((((!((map__42001 == null))))?(((((map__42001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42001):map__42001);
var compiledCode = cljs.core.get.call(null,map__42001__$1,new cljs.core.Keyword(null,"compiledCode","compiledCode",-1391179489));
var errors = cljs.core.get.call(null,map__42001__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var warnings = cljs.core.get.call(null,map__42001__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.seq.call(null,errors)){
return ["//errors during compilation:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,errors)))].join('');
} else {
return compiledCode;
}
});
klipse.lang.js_compile.str_compile_js_async = (function klipse$lang$js_compile$str_compile_js_async(exp,_){
var c = cljs.core.async.chan.call(null);
var c__21188__auto___42020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___42020,c){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___42020,c){
return (function (state_42012){
var state_val_42013 = (state_42012[(1)]);
if((state_val_42013 === (1))){
var state_42012__$1 = state_42012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42012__$1,(2),c,"//compiling...\n");
} else {
if((state_val_42013 === (2))){
var inst_42004 = (state_42012[(2)]);
var inst_42005 = cljs.core.async.timeout.call(null,(0));
var state_42012__$1 = (function (){var statearr_42014 = state_42012;
(statearr_42014[(7)] = inst_42004);

return statearr_42014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42012__$1,(3),inst_42005);
} else {
if((state_val_42013 === (3))){
var inst_42007 = (state_42012[(2)]);
var inst_42008 = klipse.lang.js_compile.advanced_compile.call(null,exp);
var state_42012__$1 = (function (){var statearr_42015 = state_42012;
(statearr_42015[(8)] = inst_42007);

return statearr_42015;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42012__$1,(4),c,inst_42008);
} else {
if((state_val_42013 === (4))){
var inst_42010 = (state_42012[(2)]);
var state_42012__$1 = state_42012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42012__$1,inst_42010);
} else {
return null;
}
}
}
}
});})(c__21188__auto___42020,c))
;
return ((function (switch__21021__auto__,c__21188__auto___42020,c){
return (function() {
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__21022__auto__ = null;
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__21022__auto____0 = (function (){
var statearr_42016 = [null,null,null,null,null,null,null,null,null];
(statearr_42016[(0)] = klipse$lang$js_compile$str_compile_js_async_$_state_machine__21022__auto__);

(statearr_42016[(1)] = (1));

return statearr_42016;
});
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__21022__auto____1 = (function (state_42012){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_42012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e42017){if((e42017 instanceof Object)){
var ex__21025__auto__ = e42017;
var statearr_42018_42021 = state_42012;
(statearr_42018_42021[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42022 = state_42012;
state_42012 = G__42022;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$js_compile$str_compile_js_async_$_state_machine__21022__auto__ = function(state_42012){
switch(arguments.length){
case 0:
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__21022__auto____1.call(this,state_42012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$js_compile$str_compile_js_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$js_compile$str_compile_js_async_$_state_machine__21022__auto____0;
klipse$lang$js_compile$str_compile_js_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$js_compile$str_compile_js_async_$_state_machine__21022__auto____1;
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___42020,c))
})();
var state__21190__auto__ = (function (){var statearr_42019 = f__21189__auto__.call(null);
(statearr_42019[(6)] = c__21188__auto___42020);

return statearr_42019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___42020,c))
);


return c;
});
klipse.lang.js_compile.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.js_compile.str_compile_js_async,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(5000),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"compile-javascript","selector_compile_js",klipse.lang.js_compile.opts);

//# sourceMappingURL=js_compile.js.map
