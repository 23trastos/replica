// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.function_plot');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('klipse.lang.javascript');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.function_plot.draw_chart = (function klipse$lang$function_plot$draw_chart(data_js,container_id){
var chart_constructor = (function (){var obj29495 = (function (){var obj29493 = google;
var k29494 = "visualization";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29493,k29494)){
return (obj29493[k29494]);
} else {
return null;
}
})();
var k29496 = "ChartWrapper";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29495,k29496)){
return (obj29495[k29496]);
} else {
return null;
}
})();
var chart_wrapper = (new chart_constructor(data_js));
var obj__26008__auto__ = chart_wrapper;
var f__26009__auto__ = (function (){var obj29497 = obj__26008__auto__;
var k29498 = "draw";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29497,k29498)){
return (obj29497[k29498]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__);
});
klipse.lang.function_plot.parse_js_object = (function klipse$lang$function_plot$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e29499){var e = e29499;
throw "Invalid JSON";
}});
klipse.lang.function_plot.render_STAR_ = (function klipse$lang$function_plot$render_STAR_(src,p__29500){
var map__29501 = p__29500;
var map__29501__$1 = (((((!((map__29501 == null))))?(((((map__29501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29501):map__29501);
var opts = map__29501__$1;
var container = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var container_id = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var data = klipse.lang.function_plot.parse_js_object.call(null,src);
(data["target"] = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id)].join(''));

var obj__26008__auto__ = window;
var f__26009__auto__ = (function (){var obj29504 = obj__26008__auto__;
var k29505 = "functionPlot";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29504,k29505)){
return (obj29504[k29505]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,data);
}catch (e29503){var e = e29503;
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.function_plot.render = (function klipse$lang$function_plot$render(src,p__29506){
var map__29507 = p__29506;
var map__29507__$1 = (((((!((map__29507 == null))))?(((((map__29507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29507):map__29507);
var opts = map__29507__$1;
var container = cljs.core.get.call(null,map__29507__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,map__29507,map__29507__$1,opts,container){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,map__29507,map__29507__$1,opts,container){
return (function (state_29512){
var state_val_29513 = (state_29512[(1)]);
if((state_val_29513 === (1))){
var inst_29509 = goog.dom.setTextContent(container,"");
var inst_29510 = klipse.lang.function_plot.render_STAR_.call(null,src,opts);
var state_29512__$1 = (function (){var statearr_29514 = state_29512;
(statearr_29514[(7)] = inst_29509);

return statearr_29514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29512__$1,inst_29510);
} else {
return null;
}
});})(c__21188__auto__,map__29507,map__29507__$1,opts,container))
;
return ((function (switch__21021__auto__,c__21188__auto__,map__29507,map__29507__$1,opts,container){
return (function() {
var klipse$lang$function_plot$render_$_state_machine__21022__auto__ = null;
var klipse$lang$function_plot$render_$_state_machine__21022__auto____0 = (function (){
var statearr_29515 = [null,null,null,null,null,null,null,null];
(statearr_29515[(0)] = klipse$lang$function_plot$render_$_state_machine__21022__auto__);

(statearr_29515[(1)] = (1));

return statearr_29515;
});
var klipse$lang$function_plot$render_$_state_machine__21022__auto____1 = (function (state_29512){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_29512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e29516){if((e29516 instanceof Object)){
var ex__21025__auto__ = e29516;
var statearr_29517_29519 = state_29512;
(statearr_29517_29519[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29520 = state_29512;
state_29512 = G__29520;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$function_plot$render_$_state_machine__21022__auto__ = function(state_29512){
switch(arguments.length){
case 0:
return klipse$lang$function_plot$render_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$function_plot$render_$_state_machine__21022__auto____1.call(this,state_29512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$function_plot$render_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$function_plot$render_$_state_machine__21022__auto____0;
klipse$lang$function_plot$render_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$function_plot$render_$_state_machine__21022__auto____1;
return klipse$lang$function_plot$render_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,map__29507,map__29507__$1,opts,container))
})();
var state__21190__auto__ = (function (){var statearr_29518 = f__21189__auto__.call(null);
(statearr_29518[(6)] = c__21188__auto__);

return statearr_29518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,map__29507,map__29507__$1,opts,container))
);

return c__21188__auto__;
});
klipse.lang.function_plot.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.function_plot.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(400),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"function-plot-with-d3.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"function-plot","selector_plot",klipse.lang.function_plot.opts);

//# sourceMappingURL=function_plot.js.map
