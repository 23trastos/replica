// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.jsx');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.jsx.babel = (function klipse$lang$jsx$babel(src){
return ((function (){var obj__18568__auto__ = Babel;
var f__18569__auto__ = (function (){var obj23349 = obj__18568__auto__;
var k23350 = "transform";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23349,k23350)){
return (obj23349[k23350]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,src,({"presets": ["react"]}));
})()["code"]);
});
klipse.lang.jsx.eval_jsx = (function klipse$lang$jsx$eval_jsx(exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_23361){
var state_val_23362 = (state_23361[(1)]);
if((state_val_23362 === (1))){
var state_23361__$1 = state_23361;
var statearr_23363_23371 = state_23361__$1;
(statearr_23363_23371[(2)] = null);

(statearr_23363_23371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (2))){
var inst_23359 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23361__$1,inst_23359);
} else {
if((state_val_23362 === (3))){
var inst_23351 = (state_23361[(2)]);
var inst_23352 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23351);
var state_23361__$1 = state_23361;
var statearr_23364_23372 = state_23361__$1;
(statearr_23364_23372[(2)] = inst_23352);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23361__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23361,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_23356 = klipse.lang.jsx.babel.call(null,exp);
var inst_23357 = klipse.utils.eval_in_global_scope.call(null,inst_23356);
var state_23361__$1 = (function (){var statearr_23365 = state_23361;
(statearr_23365[(7)] = inst_23357);

return statearr_23365;
})();
var statearr_23366_23373 = state_23361__$1;
(statearr_23366_23373[(2)] = "//Evaluation done");


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23361__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$jsx$eval_jsx_$_state_machine__15944__auto__ = null;
var klipse$lang$jsx$eval_jsx_$_state_machine__15944__auto____0 = (function (){
var statearr_23367 = [null,null,null,null,null,null,null,null];
(statearr_23367[(0)] = klipse$lang$jsx$eval_jsx_$_state_machine__15944__auto__);

(statearr_23367[(1)] = (1));

return statearr_23367;
});
var klipse$lang$jsx$eval_jsx_$_state_machine__15944__auto____1 = (function (state_23361){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_23361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e23368){if((e23368 instanceof Object)){
var ex__15947__auto__ = e23368;
var statearr_23369_23374 = state_23361;
(statearr_23369_23374[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23375 = state_23361;
state_23361 = G__23375;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$jsx$eval_jsx_$_state_machine__15944__auto__ = function(state_23361){
switch(arguments.length){
case 0:
return klipse$lang$jsx$eval_jsx_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$jsx$eval_jsx_$_state_machine__15944__auto____1.call(this,state_23361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$eval_jsx_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$eval_jsx_$_state_machine__15944__auto____0;
klipse$lang$jsx$eval_jsx_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$eval_jsx_$_state_machine__15944__auto____1;
return klipse$lang$jsx$eval_jsx_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_23370 = f__16039__auto__.call(null);
(statearr_23370[(6)] = c__16038__auto__);

return statearr_23370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.jsx.render_jsx_STAR_ = (function klipse$lang$jsx$render_jsx_STAR_(exp,p__23376){
var map__23377 = p__23376;
var map__23377__$1 = (((((!((map__23377 == null))))?(((((map__23377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23377):map__23377);
var container_id = cljs.core.get.call(null,map__23377__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{klipse.lang.jsx.babel.call(null,exp);

var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-jsx - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,klipse.lang.jsx.babel.call(null,wrapped_exp));
}catch (e23379){var e = e23379;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_jsx = (function klipse$lang$jsx$render_jsx(exp,opts){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_23382){
var state_val_23383 = (state_23382[(1)]);
if((state_val_23383 === (1))){
var inst_23380 = klipse.lang.jsx.render_jsx_STAR_.call(null,exp,opts);
var state_23382__$1 = state_23382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23382__$1,inst_23380);
} else {
return null;
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$jsx$render_jsx_$_state_machine__15944__auto__ = null;
var klipse$lang$jsx$render_jsx_$_state_machine__15944__auto____0 = (function (){
var statearr_23384 = [null,null,null,null,null,null,null];
(statearr_23384[(0)] = klipse$lang$jsx$render_jsx_$_state_machine__15944__auto__);

(statearr_23384[(1)] = (1));

return statearr_23384;
});
var klipse$lang$jsx$render_jsx_$_state_machine__15944__auto____1 = (function (state_23382){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_23382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e23385){if((e23385 instanceof Object)){
var ex__15947__auto__ = e23385;
var statearr_23386_23388 = state_23382;
(statearr_23386_23388[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23389 = state_23382;
state_23382 = G__23389;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$jsx$render_jsx_$_state_machine__15944__auto__ = function(state_23382){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_jsx_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_jsx_$_state_machine__15944__auto____1.call(this,state_23382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_jsx_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_jsx_$_state_machine__15944__auto____0;
klipse$lang$jsx$render_jsx_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_jsx_$_state_machine__15944__auto____1;
return klipse$lang$jsx$render_jsx_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_23387 = f__16039__auto__.call(null);
(statearr_23387[(6)] = c__16038__auto__);

return statearr_23387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.jsx.render_react_STAR_ = (function klipse$lang$jsx$render_react_STAR_(exp,p__23390){
var map__23391 = p__23390;
var map__23391__$1 = (((((!((map__23391 == null))))?(((((map__23391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23391):map__23391);
var container_id = cljs.core.get.call(null,map__23391__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-react - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,wrapped_exp);
}catch (e23393){var e = e23393;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_react = (function klipse$lang$jsx$render_react(exp,opts){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_23396){
var state_val_23397 = (state_23396[(1)]);
if((state_val_23397 === (1))){
var inst_23394 = klipse.lang.jsx.render_react_STAR_.call(null,exp,opts);
var state_23396__$1 = state_23396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23396__$1,inst_23394);
} else {
return null;
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$jsx$render_react_$_state_machine__15944__auto__ = null;
var klipse$lang$jsx$render_react_$_state_machine__15944__auto____0 = (function (){
var statearr_23398 = [null,null,null,null,null,null,null];
(statearr_23398[(0)] = klipse$lang$jsx$render_react_$_state_machine__15944__auto__);

(statearr_23398[(1)] = (1));

return statearr_23398;
});
var klipse$lang$jsx$render_react_$_state_machine__15944__auto____1 = (function (state_23396){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_23396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e23399){if((e23399 instanceof Object)){
var ex__15947__auto__ = e23399;
var statearr_23400_23402 = state_23396;
(statearr_23400_23402[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23403 = state_23396;
state_23396 = G__23403;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$jsx$render_react_$_state_machine__15944__auto__ = function(state_23396){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_react_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_react_$_state_machine__15944__auto____1.call(this,state_23396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_react_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_react_$_state_machine__15944__auto____0;
klipse$lang$jsx$render_react_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_react_$_state_machine__15944__auto____1;
return klipse$lang$jsx$render_react_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_23401 = f__16039__auto__.call(null);
(statearr_23401[(6)] = c__16038__auto__);

return statearr_23401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.jsx.transpile_jsx = (function klipse$lang$jsx$transpile_jsx(exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_23413){
var state_val_23414 = (state_23413[(1)]);
if((state_val_23414 === (1))){
var state_23413__$1 = state_23413;
var statearr_23415_23422 = state_23413__$1;
(statearr_23415_23422[(2)] = null);

(statearr_23415_23422[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23414 === (2))){
var inst_23411 = (state_23413[(2)]);
var state_23413__$1 = state_23413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23413__$1,inst_23411);
} else {
if((state_val_23414 === (3))){
var inst_23404 = (state_23413[(2)]);
var inst_23405 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23404);
var state_23413__$1 = state_23413;
var statearr_23416_23423 = state_23413__$1;
(statearr_23416_23423[(2)] = inst_23405);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23413__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23414 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23413,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_23409 = klipse.lang.jsx.babel.call(null,exp);
var state_23413__$1 = state_23413;
var statearr_23417_23424 = state_23413__$1;
(statearr_23417_23424[(2)] = inst_23409);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23413__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$jsx$transpile_jsx_$_state_machine__15944__auto__ = null;
var klipse$lang$jsx$transpile_jsx_$_state_machine__15944__auto____0 = (function (){
var statearr_23418 = [null,null,null,null,null,null,null];
(statearr_23418[(0)] = klipse$lang$jsx$transpile_jsx_$_state_machine__15944__auto__);

(statearr_23418[(1)] = (1));

return statearr_23418;
});
var klipse$lang$jsx$transpile_jsx_$_state_machine__15944__auto____1 = (function (state_23413){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_23413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e23419){if((e23419 instanceof Object)){
var ex__15947__auto__ = e23419;
var statearr_23420_23425 = state_23413;
(statearr_23420_23425[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23426 = state_23413;
state_23413 = G__23426;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$jsx$transpile_jsx_$_state_machine__15944__auto__ = function(state_23413){
switch(arguments.length){
case 0:
return klipse$lang$jsx$transpile_jsx_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$jsx$transpile_jsx_$_state_machine__15944__auto____1.call(this,state_23413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$transpile_jsx_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$transpile_jsx_$_state_machine__15944__auto____0;
klipse$lang$jsx$transpile_jsx_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$transpile_jsx_$_state_machine__15944__auto____1;
return klipse$lang$jsx$transpile_jsx_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_23421 = f__16039__auto__.call(null);
(statearr_23421[(6)] = c__16038__auto__);

return statearr_23421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.jsx.eval_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.eval_jsx,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.transpile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.transpile_jsx,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.render_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.render_jsx,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.render_react_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.render_react,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-jsx","selector_jsx",klipse.lang.jsx.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-jsx","selector_transpile_jsx",klipse.lang.jsx.transpile_opts);
klipse.common.registry.register_mode.call(null,"render-jsx","selector_render_jsx",klipse.lang.jsx.render_opts);
klipse.common.registry.register_mode.call(null,"render-react","selector_react",klipse.lang.jsx.render_react_opts);

//# sourceMappingURL=jsx.js.map
