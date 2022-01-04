// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.ruby');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.ruby.load_opal_parser = (function klipse$lang$ruby$load_opal_parser(){
var obj__26008__auto__ = Opal;
var f__26009__auto__ = (function (){var obj35224 = obj__26008__auto__;
var k35225 = "load";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj35224,k35225)){
return (obj35224[k35225]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,"opal-parser");
});
klipse.lang.ruby.load_opal_parser_once = klipse.utils.runonce.call(null,klipse.lang.ruby.load_opal_parser);
klipse.lang.ruby.str_eval_async = (function klipse$lang$ruby$str_eval_async(exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_35246){
var state_val_35247 = (state_35246[(1)]);
if((state_val_35247 === (1))){
var inst_35226 = klipse.lang.ruby.load_opal_parser_once.call(null);
var state_35246__$1 = (function (){var statearr_35248 = state_35246;
(statearr_35248[(7)] = inst_35226);

return statearr_35248;
})();
var statearr_35249_35260 = state_35246__$1;
(statearr_35249_35260[(2)] = null);

(statearr_35249_35260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (2))){
var inst_35244 = (state_35246[(2)]);
var state_35246__$1 = state_35246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35246__$1,inst_35244);
} else {
if((state_val_35247 === (3))){
var inst_35227 = (state_35246[(2)]);
var inst_35228 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35227);
var state_35246__$1 = state_35246;
var statearr_35250_35261 = state_35246__$1;
(statearr_35250_35261[(2)] = inst_35228);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35246__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35246,(3),Object,null,(2));
var inst_35234 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,Opal,"eval");
var state_35246__$1 = state_35246;
if(inst_35234){
var statearr_35251_35262 = state_35246__$1;
(statearr_35251_35262[(1)] = (5));

} else {
var statearr_35252_35263 = state_35246__$1;
(statearr_35252_35263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (5))){
var inst_35236 = (Opal["eval"]);
var state_35246__$1 = state_35246;
var statearr_35253_35264 = state_35246__$1;
(statearr_35253_35264[(2)] = inst_35236);

(statearr_35253_35264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (6))){
var state_35246__$1 = state_35246;
var statearr_35254_35265 = state_35246__$1;
(statearr_35254_35265[(2)] = null);

(statearr_35254_35265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (7))){
var inst_35239 = (state_35246[(2)]);
var inst_35240 = inst_35239.call(Opal,exp);
var inst_35241 = (inst_35240["$inspect"]);
var inst_35242 = inst_35241.apply(inst_35240);
var state_35246__$1 = state_35246;
var statearr_35255_35266 = state_35246__$1;
(statearr_35255_35266[(2)] = inst_35242);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35246__$1);

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
var klipse$lang$ruby$str_eval_async_$_state_machine__21022__auto__ = null;
var klipse$lang$ruby$str_eval_async_$_state_machine__21022__auto____0 = (function (){
var statearr_35256 = [null,null,null,null,null,null,null,null];
(statearr_35256[(0)] = klipse$lang$ruby$str_eval_async_$_state_machine__21022__auto__);

(statearr_35256[(1)] = (1));

return statearr_35256;
});
var klipse$lang$ruby$str_eval_async_$_state_machine__21022__auto____1 = (function (state_35246){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_35246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e35257){if((e35257 instanceof Object)){
var ex__21025__auto__ = e35257;
var statearr_35258_35267 = state_35246;
(statearr_35258_35267[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35268 = state_35246;
state_35246 = G__35268;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$ruby$str_eval_async_$_state_machine__21022__auto__ = function(state_35246){
switch(arguments.length){
case 0:
return klipse$lang$ruby$str_eval_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$ruby$str_eval_async_$_state_machine__21022__auto____1.call(this,state_35246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$ruby$str_eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ruby$str_eval_async_$_state_machine__21022__auto____0;
klipse$lang$ruby$str_eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ruby$str_eval_async_$_state_machine__21022__auto____1;
return klipse$lang$ruby$str_eval_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_35259 = f__21189__auto__.call(null);
(statearr_35259[(6)] = c__21188__auto__);

return statearr_35259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.ruby.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"ruby",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ruby.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"opal.min.js?p"),klipse.common.registry.scripts_src.call(null,"opal-parser.min.js?p")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"eval-ruby","selector_eval_ruby",klipse.lang.ruby.opts);

//# sourceMappingURL=ruby.js.map
