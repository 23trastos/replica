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
var chart_constructor = (function (){var obj20558 = (function (){var obj20556 = google;
var k20557 = "visualization";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20556,k20557)){
return (obj20556[k20557]);
} else {
return null;
}
})();
var k20559 = "ChartWrapper";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20558,k20559)){
return (obj20558[k20559]);
} else {
return null;
}
})();
var chart_wrapper = (new chart_constructor(data_js));
var obj__18568__auto__ = chart_wrapper;
var f__18569__auto__ = (function (){var obj20560 = obj__18568__auto__;
var k20561 = "draw";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20560,k20561)){
return (obj20560[k20561]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__);
});
klipse.lang.function_plot.parse_js_object = (function klipse$lang$function_plot$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e20562){var e = e20562;
throw "Invalid JSON";
}});
klipse.lang.function_plot.render_STAR_ = (function klipse$lang$function_plot$render_STAR_(src,p__20563){
var map__20564 = p__20563;
var map__20564__$1 = (((((!((map__20564 == null))))?(((((map__20564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20564):map__20564);
var opts = map__20564__$1;
var container = cljs.core.get.call(null,map__20564__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var container_id = cljs.core.get.call(null,map__20564__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var data = klipse.lang.function_plot.parse_js_object.call(null,src);
(data["target"] = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id)].join(''));

var obj__18568__auto__ = window;
var f__18569__auto__ = (function (){var obj20567 = obj__18568__auto__;
var k20568 = "functionPlot";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20567,k20568)){
return (obj20567[k20568]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,data);
}catch (e20566){var e = e20566;
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.function_plot.render = (function klipse$lang$function_plot$render(src,p__20569){
var map__20570 = p__20569;
var map__20570__$1 = (((((!((map__20570 == null))))?(((((map__20570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20570):map__20570);
var opts = map__20570__$1;
var container = cljs.core.get.call(null,map__20570__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,map__20570,map__20570__$1,opts,container){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,map__20570,map__20570__$1,opts,container){
return (function (state_20575){
var state_val_20576 = (state_20575[(1)]);
if((state_val_20576 === (1))){
var inst_20572 = goog.dom.setTextContent(container,"");
var inst_20573 = klipse.lang.function_plot.render_STAR_.call(null,src,opts);
var state_20575__$1 = (function (){var statearr_20577 = state_20575;
(statearr_20577[(7)] = inst_20572);

return statearr_20577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20575__$1,inst_20573);
} else {
return null;
}
});})(c__16038__auto__,map__20570,map__20570__$1,opts,container))
;
return ((function (switch__15943__auto__,c__16038__auto__,map__20570,map__20570__$1,opts,container){
return (function() {
var klipse$lang$function_plot$render_$_state_machine__15944__auto__ = null;
var klipse$lang$function_plot$render_$_state_machine__15944__auto____0 = (function (){
var statearr_20578 = [null,null,null,null,null,null,null,null];
(statearr_20578[(0)] = klipse$lang$function_plot$render_$_state_machine__15944__auto__);

(statearr_20578[(1)] = (1));

return statearr_20578;
});
var klipse$lang$function_plot$render_$_state_machine__15944__auto____1 = (function (state_20575){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_20575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20579){if((e20579 instanceof Object)){
var ex__15947__auto__ = e20579;
var statearr_20580_20582 = state_20575;
(statearr_20580_20582[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20583 = state_20575;
state_20575 = G__20583;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$function_plot$render_$_state_machine__15944__auto__ = function(state_20575){
switch(arguments.length){
case 0:
return klipse$lang$function_plot$render_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$function_plot$render_$_state_machine__15944__auto____1.call(this,state_20575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$function_plot$render_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$function_plot$render_$_state_machine__15944__auto____0;
klipse$lang$function_plot$render_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$function_plot$render_$_state_machine__15944__auto____1;
return klipse$lang$function_plot$render_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,map__20570,map__20570__$1,opts,container))
})();
var state__16040__auto__ = (function (){var statearr_20581 = f__16039__auto__.call(null);
(statearr_20581[(6)] = c__16038__auto__);

return statearr_20581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,map__20570,map__20570__$1,opts,container))
);

return c__16038__auto__;
});
klipse.lang.function_plot.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.function_plot.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(400),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"function-plot-with-d3.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"function-plot","selector_plot",klipse.lang.function_plot.opts);

//# sourceMappingURL=function_plot.js.map
