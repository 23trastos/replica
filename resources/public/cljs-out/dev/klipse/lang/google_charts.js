// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.google_charts');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('klipse.lang.javascript');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if((typeof klipse !== 'undefined') && (typeof klipse.lang !== 'undefined') && (typeof klipse.lang.google_charts !== 'undefined') && (typeof klipse.lang.google_charts.google_charts_loaded !== 'undefined')){
} else {
klipse.lang.google_charts.google_charts_loaded = false;
}
klipse.lang.google_charts.ensure_google_charts_loaded_BANG_ = (function klipse$lang$google_charts$ensure_google_charts_loaded_BANG_(){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_22230){
var state_val_22231 = (state_22230[(1)]);
if((state_val_22231 === (7))){
var state_22230__$1 = state_22230;
var statearr_22232_22262 = state_22230__$1;
(statearr_22232_22262[(2)] = null);

(statearr_22232_22262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (1))){
var state_22230__$1 = state_22230;
if(klipse.lang.google_charts.google_charts_loaded){
var statearr_22233_22263 = state_22230__$1;
(statearr_22233_22263[(1)] = (2));

} else {
var statearr_22234_22264 = state_22230__$1;
(statearr_22234_22264[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (4))){
var inst_22228 = (state_22230[(2)]);
var state_22230__$1 = state_22230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22230__$1,inst_22228);
} else {
if((state_val_22231 === (15))){
var inst_22213 = (state_22230[(7)]);
var inst_22218 = (inst_22213["setOnLoadCallback"]);
var state_22230__$1 = state_22230;
var statearr_22235_22265 = state_22230__$1;
(statearr_22235_22265[(2)] = inst_22218);

(statearr_22235_22265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (13))){
var state_22230__$1 = state_22230;
var statearr_22236_22266 = state_22230__$1;
(statearr_22236_22266[(2)] = null);

(statearr_22236_22266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (6))){
var inst_22185 = (google["charts"]);
var state_22230__$1 = state_22230;
var statearr_22237_22267 = state_22230__$1;
(statearr_22237_22267[(2)] = inst_22185);

(statearr_22237_22267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (17))){
var inst_22213 = (state_22230[(7)]);
var inst_22205 = (state_22230[(8)]);
var inst_22221 = (state_22230[(2)]);
var inst_22222 = inst_22221.call(inst_22213);
var inst_22223 = (function (){var c = inst_22205;
return ((function (c,inst_22213,inst_22205,inst_22221,inst_22222,state_val_22231,c__16038__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.Keyword(null,"ok","ok",967785236));
});
;})(c,inst_22213,inst_22205,inst_22221,inst_22222,state_val_22231,c__16038__auto__))
})();
var state_22230__$1 = (function (){var statearr_22238 = state_22230;
(statearr_22238[(9)] = inst_22223);

(statearr_22238[(10)] = inst_22222);

return statearr_22238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22230__$1,(18),inst_22205);
} else {
if((state_val_22231 === (3))){
var inst_22178 = klipse.utils.add_script_tag_BANG_.call(null,"https://www.gstatic.com/charts/loader.js");
var state_22230__$1 = state_22230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22230__$1,(5),inst_22178);
} else {
if((state_val_22231 === (12))){
var inst_22210 = (google["charts"]);
var state_22230__$1 = state_22230;
var statearr_22239_22268 = state_22230__$1;
(statearr_22239_22268[(2)] = inst_22210);

(statearr_22239_22268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (2))){
var state_22230__$1 = state_22230;
var statearr_22240_22269 = state_22230__$1;
(statearr_22240_22269[(2)] = null);

(statearr_22240_22269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (11))){
var inst_22188 = (state_22230[(11)]);
var inst_22196 = (state_22230[(2)]);
var inst_22197 = inst_22196.call(inst_22188);
var inst_22198 = [new cljs.core.Keyword(null,"packages","packages",1549741112)];
var inst_22199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22200 = ["corechart","table"];
var inst_22201 = (new cljs.core.PersistentVector(null,2,(5),inst_22199,inst_22200,null));
var inst_22202 = [inst_22201];
var inst_22203 = cljs.core.PersistentHashMap.fromArrays(inst_22198,inst_22202);
var inst_22204 = cljs.core.clj__GT_js.call(null,inst_22203);
var inst_22205 = cljs.core.async.chan.call(null);
var inst_22208 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_22230__$1 = (function (){var statearr_22241 = state_22230;
(statearr_22241[(12)] = inst_22204);

(statearr_22241[(8)] = inst_22205);

(statearr_22241[(13)] = inst_22197);

return statearr_22241;
})();
if(inst_22208){
var statearr_22242_22270 = state_22230__$1;
(statearr_22242_22270[(1)] = (12));

} else {
var statearr_22243_22271 = state_22230__$1;
(statearr_22243_22271[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (9))){
var inst_22188 = (state_22230[(11)]);
var inst_22193 = (inst_22188["load"]);
var state_22230__$1 = state_22230;
var statearr_22244_22272 = state_22230__$1;
(statearr_22244_22272[(2)] = inst_22193);

(statearr_22244_22272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (5))){
var inst_22180 = (state_22230[(2)]);
var inst_22183 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_22230__$1 = (function (){var statearr_22245 = state_22230;
(statearr_22245[(14)] = inst_22180);

return statearr_22245;
})();
if(inst_22183){
var statearr_22246_22273 = state_22230__$1;
(statearr_22246_22273[(1)] = (6));

} else {
var statearr_22247_22274 = state_22230__$1;
(statearr_22247_22274[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (14))){
var inst_22213 = (state_22230[(7)]);
var inst_22213__$1 = (state_22230[(2)]);
var inst_22216 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_22213__$1,"setOnLoadCallback");
var state_22230__$1 = (function (){var statearr_22248 = state_22230;
(statearr_22248[(7)] = inst_22213__$1);

return statearr_22248;
})();
if(inst_22216){
var statearr_22249_22275 = state_22230__$1;
(statearr_22249_22275[(1)] = (15));

} else {
var statearr_22250_22276 = state_22230__$1;
(statearr_22250_22276[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (16))){
var state_22230__$1 = state_22230;
var statearr_22251_22277 = state_22230__$1;
(statearr_22251_22277[(2)] = null);

(statearr_22251_22277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (10))){
var state_22230__$1 = state_22230;
var statearr_22252_22278 = state_22230__$1;
(statearr_22252_22278[(2)] = null);

(statearr_22252_22278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (18))){
var inst_22225 = (state_22230[(2)]);
var inst_22226 = klipse.lang.google_charts.google_charts_loaded = true;
var state_22230__$1 = (function (){var statearr_22253 = state_22230;
(statearr_22253[(15)] = inst_22225);

return statearr_22253;
})();
var statearr_22254_22279 = state_22230__$1;
(statearr_22254_22279[(2)] = inst_22226);

(statearr_22254_22279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (8))){
var inst_22188 = (state_22230[(11)]);
var inst_22188__$1 = (state_22230[(2)]);
var inst_22191 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_22188__$1,"load");
var state_22230__$1 = (function (){var statearr_22255 = state_22230;
(statearr_22255[(11)] = inst_22188__$1);

return statearr_22255;
})();
if(inst_22191){
var statearr_22256_22280 = state_22230__$1;
(statearr_22256_22280[(1)] = (9));

} else {
var statearr_22257_22281 = state_22230__$1;
(statearr_22257_22281[(1)] = (10));

}

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
}
}
}
}
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
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15944__auto__ = null;
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15944__auto____0 = (function (){
var statearr_22258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22258[(0)] = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15944__auto__);

(statearr_22258[(1)] = (1));

return statearr_22258;
});
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15944__auto____1 = (function (state_22230){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_22230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e22259){if((e22259 instanceof Object)){
var ex__15947__auto__ = e22259;
var statearr_22260_22282 = state_22230;
(statearr_22260_22282[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22283 = state_22230;
state_22230 = G__22283;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15944__auto__ = function(state_22230){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15944__auto____1.call(this,state_22230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15944__auto____0;
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15944__auto____1;
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_22261 = f__16039__auto__.call(null);
(statearr_22261[(6)] = c__16038__auto__);

return statearr_22261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.google_charts.draw_chart = (function klipse$lang$google_charts$draw_chart(data_js,container_id){
var chart_constructor = (function (){var obj22286 = (function (){var obj22284 = google;
var k22285 = "visualization";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22284,k22285)){
return (obj22284[k22285]);
} else {
return null;
}
})();
var k22287 = "ChartWrapper";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22286,k22287)){
return (obj22286[k22287]);
} else {
return null;
}
})();
var chart_wrapper = (new chart_constructor(data_js));
var obj__18568__auto__ = chart_wrapper;
var f__18569__auto__ = (function (){var obj22288 = obj__18568__auto__;
var k22289 = "draw";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22288,k22289)){
return (obj22288[k22289]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__);
});
klipse.lang.google_charts.parse_js_object = (function klipse$lang$google_charts$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e22290){var e = e22290;
throw "Invalid JSON";
}});
klipse.lang.google_charts.render_STAR_ = (function klipse$lang$google_charts$render_STAR_(src,p__22291){
var map__22292 = p__22291;
var map__22292__$1 = (((((!((map__22292 == null))))?(((((map__22292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22292):map__22292);
var opts = map__22292__$1;
var container_id = cljs.core.get.call(null,map__22292__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var container = document.getElementById(container_id);
var _ = goog.dom.setTextContent(container,"");
var data_options_js = klipse.lang.google_charts.parse_js_object.call(null,src);
(data_options_js["containerId"] = container_id);

return klipse.lang.google_charts.draw_chart.call(null,data_options_js,container_id);
}catch (e22294){var e = e22294;
var container_22295 = document.getElementById(container_id);
goog.dom.setTextContent(container_22295,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));

var c = cljs.core.async.chan.call(null);
cljs.core.async.close_BANG_.call(null,c);

return c;
}});
klipse.lang.google_charts.render = (function klipse$lang$google_charts$render(src,p__22296){
var map__22297 = p__22296;
var map__22297__$1 = (((((!((map__22297 == null))))?(((((map__22297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22297):map__22297);
var opts = map__22297__$1;
var container_id = cljs.core.get.call(null,map__22297__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,map__22297,map__22297__$1,opts,container_id){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,map__22297,map__22297__$1,opts,container_id){
return (function (state_22304){
var state_val_22305 = (state_22304[(1)]);
if((state_val_22305 === (1))){
var inst_22299 = klipse.lang.google_charts.ensure_google_charts_loaded_BANG_.call(null);
var state_22304__$1 = state_22304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22304__$1,(2),inst_22299);
} else {
if((state_val_22305 === (2))){
var inst_22301 = (state_22304[(2)]);
var inst_22302 = klipse.lang.google_charts.render_STAR_.call(null,src,opts);
var state_22304__$1 = (function (){var statearr_22306 = state_22304;
(statearr_22306[(7)] = inst_22301);

return statearr_22306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22304__$1,inst_22302);
} else {
return null;
}
}
});})(c__16038__auto__,map__22297,map__22297__$1,opts,container_id))
;
return ((function (switch__15943__auto__,c__16038__auto__,map__22297,map__22297__$1,opts,container_id){
return (function() {
var klipse$lang$google_charts$render_$_state_machine__15944__auto__ = null;
var klipse$lang$google_charts$render_$_state_machine__15944__auto____0 = (function (){
var statearr_22307 = [null,null,null,null,null,null,null,null];
(statearr_22307[(0)] = klipse$lang$google_charts$render_$_state_machine__15944__auto__);

(statearr_22307[(1)] = (1));

return statearr_22307;
});
var klipse$lang$google_charts$render_$_state_machine__15944__auto____1 = (function (state_22304){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_22304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e22308){if((e22308 instanceof Object)){
var ex__15947__auto__ = e22308;
var statearr_22309_22311 = state_22304;
(statearr_22309_22311[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22312 = state_22304;
state_22304 = G__22312;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$google_charts$render_$_state_machine__15944__auto__ = function(state_22304){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$render_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$google_charts$render_$_state_machine__15944__auto____1.call(this,state_22304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$render_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$render_$_state_machine__15944__auto____0;
klipse$lang$google_charts$render_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$render_$_state_machine__15944__auto____1;
return klipse$lang$google_charts$render_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,map__22297,map__22297__$1,opts,container_id))
})();
var state__16040__auto__ = (function (){var statearr_22310 = f__16039__auto__.call(null);
(statearr_22310[(6)] = c__16038__auto__);

return statearr_22310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,map__22297,map__22297__$1,opts,container_id))
);

return c__16038__auto__;
});
klipse.lang.google_charts.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.google_charts.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(1000),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"google-charts","selector_google_charts",klipse.lang.google_charts.opts);

//# sourceMappingURL=google_charts.js.map
