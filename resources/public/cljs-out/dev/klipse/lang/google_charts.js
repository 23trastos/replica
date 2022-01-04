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
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_32896){
var state_val_32897 = (state_32896[(1)]);
if((state_val_32897 === (7))){
var state_32896__$1 = state_32896;
var statearr_32898_32928 = state_32896__$1;
(statearr_32898_32928[(2)] = null);

(statearr_32898_32928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (1))){
var state_32896__$1 = state_32896;
if(klipse.lang.google_charts.google_charts_loaded){
var statearr_32899_32929 = state_32896__$1;
(statearr_32899_32929[(1)] = (2));

} else {
var statearr_32900_32930 = state_32896__$1;
(statearr_32900_32930[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (4))){
var inst_32894 = (state_32896[(2)]);
var state_32896__$1 = state_32896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32896__$1,inst_32894);
} else {
if((state_val_32897 === (15))){
var inst_32879 = (state_32896[(7)]);
var inst_32884 = (inst_32879["setOnLoadCallback"]);
var state_32896__$1 = state_32896;
var statearr_32901_32931 = state_32896__$1;
(statearr_32901_32931[(2)] = inst_32884);

(statearr_32901_32931[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (13))){
var state_32896__$1 = state_32896;
var statearr_32902_32932 = state_32896__$1;
(statearr_32902_32932[(2)] = null);

(statearr_32902_32932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (6))){
var inst_32851 = (google["charts"]);
var state_32896__$1 = state_32896;
var statearr_32903_32933 = state_32896__$1;
(statearr_32903_32933[(2)] = inst_32851);

(statearr_32903_32933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (17))){
var inst_32879 = (state_32896[(7)]);
var inst_32871 = (state_32896[(8)]);
var inst_32887 = (state_32896[(2)]);
var inst_32888 = inst_32887.call(inst_32879);
var inst_32889 = (function (){var c = inst_32871;
return ((function (c,inst_32879,inst_32871,inst_32887,inst_32888,state_val_32897,c__21188__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.Keyword(null,"ok","ok",967785236));
});
;})(c,inst_32879,inst_32871,inst_32887,inst_32888,state_val_32897,c__21188__auto__))
})();
var state_32896__$1 = (function (){var statearr_32904 = state_32896;
(statearr_32904[(9)] = inst_32888);

(statearr_32904[(10)] = inst_32889);

return statearr_32904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32896__$1,(18),inst_32871);
} else {
if((state_val_32897 === (3))){
var inst_32844 = klipse.utils.add_script_tag_BANG_.call(null,"https://www.gstatic.com/charts/loader.js");
var state_32896__$1 = state_32896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32896__$1,(5),inst_32844);
} else {
if((state_val_32897 === (12))){
var inst_32876 = (google["charts"]);
var state_32896__$1 = state_32896;
var statearr_32905_32934 = state_32896__$1;
(statearr_32905_32934[(2)] = inst_32876);

(statearr_32905_32934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (2))){
var state_32896__$1 = state_32896;
var statearr_32906_32935 = state_32896__$1;
(statearr_32906_32935[(2)] = null);

(statearr_32906_32935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (11))){
var inst_32854 = (state_32896[(11)]);
var inst_32862 = (state_32896[(2)]);
var inst_32863 = inst_32862.call(inst_32854);
var inst_32864 = [new cljs.core.Keyword(null,"packages","packages",1549741112)];
var inst_32865 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32866 = ["corechart","table"];
var inst_32867 = (new cljs.core.PersistentVector(null,2,(5),inst_32865,inst_32866,null));
var inst_32868 = [inst_32867];
var inst_32869 = cljs.core.PersistentHashMap.fromArrays(inst_32864,inst_32868);
var inst_32870 = cljs.core.clj__GT_js.call(null,inst_32869);
var inst_32871 = cljs.core.async.chan.call(null);
var inst_32874 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_32896__$1 = (function (){var statearr_32907 = state_32896;
(statearr_32907[(12)] = inst_32870);

(statearr_32907[(8)] = inst_32871);

(statearr_32907[(13)] = inst_32863);

return statearr_32907;
})();
if(inst_32874){
var statearr_32908_32936 = state_32896__$1;
(statearr_32908_32936[(1)] = (12));

} else {
var statearr_32909_32937 = state_32896__$1;
(statearr_32909_32937[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (9))){
var inst_32854 = (state_32896[(11)]);
var inst_32859 = (inst_32854["load"]);
var state_32896__$1 = state_32896;
var statearr_32910_32938 = state_32896__$1;
(statearr_32910_32938[(2)] = inst_32859);

(statearr_32910_32938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (5))){
var inst_32846 = (state_32896[(2)]);
var inst_32849 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_32896__$1 = (function (){var statearr_32911 = state_32896;
(statearr_32911[(14)] = inst_32846);

return statearr_32911;
})();
if(inst_32849){
var statearr_32912_32939 = state_32896__$1;
(statearr_32912_32939[(1)] = (6));

} else {
var statearr_32913_32940 = state_32896__$1;
(statearr_32913_32940[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (14))){
var inst_32879 = (state_32896[(7)]);
var inst_32879__$1 = (state_32896[(2)]);
var inst_32882 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_32879__$1,"setOnLoadCallback");
var state_32896__$1 = (function (){var statearr_32914 = state_32896;
(statearr_32914[(7)] = inst_32879__$1);

return statearr_32914;
})();
if(inst_32882){
var statearr_32915_32941 = state_32896__$1;
(statearr_32915_32941[(1)] = (15));

} else {
var statearr_32916_32942 = state_32896__$1;
(statearr_32916_32942[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (16))){
var state_32896__$1 = state_32896;
var statearr_32917_32943 = state_32896__$1;
(statearr_32917_32943[(2)] = null);

(statearr_32917_32943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (10))){
var state_32896__$1 = state_32896;
var statearr_32918_32944 = state_32896__$1;
(statearr_32918_32944[(2)] = null);

(statearr_32918_32944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (18))){
var inst_32891 = (state_32896[(2)]);
var inst_32892 = klipse.lang.google_charts.google_charts_loaded = true;
var state_32896__$1 = (function (){var statearr_32919 = state_32896;
(statearr_32919[(15)] = inst_32891);

return statearr_32919;
})();
var statearr_32920_32945 = state_32896__$1;
(statearr_32920_32945[(2)] = inst_32892);

(statearr_32920_32945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (8))){
var inst_32854 = (state_32896[(11)]);
var inst_32854__$1 = (state_32896[(2)]);
var inst_32857 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_32854__$1,"load");
var state_32896__$1 = (function (){var statearr_32921 = state_32896;
(statearr_32921[(11)] = inst_32854__$1);

return statearr_32921;
})();
if(inst_32857){
var statearr_32922_32946 = state_32896__$1;
(statearr_32922_32946[(1)] = (9));

} else {
var statearr_32923_32947 = state_32896__$1;
(statearr_32923_32947[(1)] = (10));

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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__21022__auto__ = null;
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__21022__auto____0 = (function (){
var statearr_32924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32924[(0)] = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__21022__auto__);

(statearr_32924[(1)] = (1));

return statearr_32924;
});
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__21022__auto____1 = (function (state_32896){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_32896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e32925){if((e32925 instanceof Object)){
var ex__21025__auto__ = e32925;
var statearr_32926_32948 = state_32896;
(statearr_32926_32948[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32949 = state_32896;
state_32896 = G__32949;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__21022__auto__ = function(state_32896){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__21022__auto____1.call(this,state_32896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__21022__auto____0;
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__21022__auto____1;
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_32927 = f__21189__auto__.call(null);
(statearr_32927[(6)] = c__21188__auto__);

return statearr_32927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.google_charts.draw_chart = (function klipse$lang$google_charts$draw_chart(data_js,container_id){
var chart_constructor = (function (){var obj32952 = (function (){var obj32950 = google;
var k32951 = "visualization";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32950,k32951)){
return (obj32950[k32951]);
} else {
return null;
}
})();
var k32953 = "ChartWrapper";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32952,k32953)){
return (obj32952[k32953]);
} else {
return null;
}
})();
var chart_wrapper = (new chart_constructor(data_js));
var obj__26008__auto__ = chart_wrapper;
var f__26009__auto__ = (function (){var obj32954 = obj__26008__auto__;
var k32955 = "draw";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32954,k32955)){
return (obj32954[k32955]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__);
});
klipse.lang.google_charts.parse_js_object = (function klipse$lang$google_charts$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e32956){var e = e32956;
throw "Invalid JSON";
}});
klipse.lang.google_charts.render_STAR_ = (function klipse$lang$google_charts$render_STAR_(src,p__32957){
var map__32958 = p__32957;
var map__32958__$1 = (((((!((map__32958 == null))))?(((((map__32958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32958):map__32958);
var opts = map__32958__$1;
var container_id = cljs.core.get.call(null,map__32958__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var container = document.getElementById(container_id);
var _ = goog.dom.setTextContent(container,"");
var data_options_js = klipse.lang.google_charts.parse_js_object.call(null,src);
(data_options_js["containerId"] = container_id);

return klipse.lang.google_charts.draw_chart.call(null,data_options_js,container_id);
}catch (e32960){var e = e32960;
var container_32961 = document.getElementById(container_id);
goog.dom.setTextContent(container_32961,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));

var c = cljs.core.async.chan.call(null);
cljs.core.async.close_BANG_.call(null,c);

return c;
}});
klipse.lang.google_charts.render = (function klipse$lang$google_charts$render(src,p__32962){
var map__32963 = p__32962;
var map__32963__$1 = (((((!((map__32963 == null))))?(((((map__32963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32963):map__32963);
var opts = map__32963__$1;
var container_id = cljs.core.get.call(null,map__32963__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,map__32963,map__32963__$1,opts,container_id){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,map__32963,map__32963__$1,opts,container_id){
return (function (state_32970){
var state_val_32971 = (state_32970[(1)]);
if((state_val_32971 === (1))){
var inst_32965 = klipse.lang.google_charts.ensure_google_charts_loaded_BANG_.call(null);
var state_32970__$1 = state_32970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32970__$1,(2),inst_32965);
} else {
if((state_val_32971 === (2))){
var inst_32967 = (state_32970[(2)]);
var inst_32968 = klipse.lang.google_charts.render_STAR_.call(null,src,opts);
var state_32970__$1 = (function (){var statearr_32972 = state_32970;
(statearr_32972[(7)] = inst_32967);

return statearr_32972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32970__$1,inst_32968);
} else {
return null;
}
}
});})(c__21188__auto__,map__32963,map__32963__$1,opts,container_id))
;
return ((function (switch__21021__auto__,c__21188__auto__,map__32963,map__32963__$1,opts,container_id){
return (function() {
var klipse$lang$google_charts$render_$_state_machine__21022__auto__ = null;
var klipse$lang$google_charts$render_$_state_machine__21022__auto____0 = (function (){
var statearr_32973 = [null,null,null,null,null,null,null,null];
(statearr_32973[(0)] = klipse$lang$google_charts$render_$_state_machine__21022__auto__);

(statearr_32973[(1)] = (1));

return statearr_32973;
});
var klipse$lang$google_charts$render_$_state_machine__21022__auto____1 = (function (state_32970){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_32970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e32974){if((e32974 instanceof Object)){
var ex__21025__auto__ = e32974;
var statearr_32975_32977 = state_32970;
(statearr_32975_32977[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32978 = state_32970;
state_32970 = G__32978;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$google_charts$render_$_state_machine__21022__auto__ = function(state_32970){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$render_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$google_charts$render_$_state_machine__21022__auto____1.call(this,state_32970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$render_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$render_$_state_machine__21022__auto____0;
klipse$lang$google_charts$render_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$render_$_state_machine__21022__auto____1;
return klipse$lang$google_charts$render_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,map__32963,map__32963__$1,opts,container_id))
})();
var state__21190__auto__ = (function (){var statearr_32976 = f__21189__auto__.call(null);
(statearr_32976[(6)] = c__21188__auto__);

return statearr_32976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,map__32963,map__32963__$1,opts,container_id))
);

return c__21188__auto__;
});
klipse.lang.google_charts.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.google_charts.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(1000),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"google-charts","selector_google_charts",klipse.lang.google_charts.opts);

//# sourceMappingURL=google_charts.js.map
