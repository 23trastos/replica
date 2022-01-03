// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.plugin');
goog.require('cljs.core');
goog.require('klipse.common.registry');
goog.require('klipse.args_from_element');
goog.require('klipse.klipse_editors');
goog.require('klipse.utils');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('cljs.core.async');
goog.require('gadjett.collections');
klipse.plugin.out_placeholder = "the evaluation will appear here (soon)...";
klipse.plugin.snippet_counter = cljs.core.atom.call(null,(0));
klipse.plugin.snippet_num_BANG_ = (function klipse$plugin$snippet_num_BANG_(){
var res = cljs.core.deref.call(null,klipse.plugin.snippet_counter);
cljs.core.swap_BANG_.call(null,klipse.plugin.snippet_counter,cljs.core.inc);

return res;
});
klipse.plugin.calc_editor_args_from_element = (function klipse$plugin$calc_editor_args_from_element(element,global_idle_msec,min_idle_msec,global_editor_type){
var map__23881 = klipse.args_from_element.editor_args_from_element.call(null,element);
var map__23881__$1 = (((((!((map__23881 == null))))?(((((map__23881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23881):map__23881);
var idle_msec = cljs.core.get.call(null,map__23881__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),global_idle_msec);
var editor_type = cljs.core.get.call(null,map__23881__$1,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),global_editor_type);
var preamble = cljs.core.get.call(null,map__23881__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var async_code_QMARK_ = cljs.core.get.call(null,map__23881__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var loop_msec = cljs.core.get.call(null,map__23881__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),(function (){var x__4219__auto__ = min_idle_msec;
var y__4220__auto__ = idle_msec;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),async_code_QMARK_,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480),editor_type], null));
});
klipse.plugin.calc_editor_type = (function klipse$plugin$calc_editor_type(minimalistic_ui_QMARK_,the_type){
if(cljs.core.truth_(minimalistic_ui_QMARK_)){
return new cljs.core.Keyword(null,"dom","dom",-1236537922);
} else {
var G__23883 = the_type;
switch (G__23883) {
case "code-mirror":
return new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768);

break;
case "dom":
return new cljs.core.Keyword(null,"dom","dom",-1236537922);

break;
case "html":
return new cljs.core.Keyword(null,"html","html",-998796897);

break;
default:
return new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768);

}
}
});
klipse.plugin.load_external_scripts = (function klipse$plugin$load_external_scripts(scripts,no_dynamic_scritps_QMARK_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_23914){
var state_val_23915 = (state_23914[(1)]);
if((state_val_23915 === (1))){
var state_23914__$1 = state_23914;
if(cljs.core.truth_(no_dynamic_scritps_QMARK_)){
var statearr_23916_23929 = state_23914__$1;
(statearr_23916_23929[(1)] = (2));

} else {
var statearr_23917_23930 = state_23914__$1;
(statearr_23917_23930[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (2))){
var inst_23886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23887 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_23888 = (new cljs.core.PersistentVector(null,2,(5),inst_23886,inst_23887,null));
var state_23914__$1 = state_23914;
var statearr_23918_23931 = state_23914__$1;
(statearr_23918_23931[(2)] = inst_23888);

(statearr_23918_23931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (3))){
var inst_23893 = klipse.utils.load_scripts_mem.call(null,scripts);
var state_23914__$1 = state_23914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23914__$1,(5),inst_23893);
} else {
if((state_val_23915 === (4))){
var inst_23912 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23914__$1,inst_23912);
} else {
if((state_val_23915 === (5))){
var inst_23895 = (state_23914[(2)]);
var inst_23896 = cljs.core.nth.call(null,inst_23895,(0),null);
var inst_23897 = cljs.core.nth.call(null,inst_23895,(1),null);
var inst_23898 = cljs.core.nth.call(null,inst_23895,(2),null);
var inst_23899 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_23896);
var state_23914__$1 = (function (){var statearr_23919 = state_23914;
(statearr_23919[(7)] = inst_23897);

(statearr_23919[(8)] = inst_23898);

return statearr_23919;
})();
if(inst_23899){
var statearr_23920_23932 = state_23914__$1;
(statearr_23920_23932[(1)] = (6));

} else {
var statearr_23921_23933 = state_23914__$1;
(statearr_23921_23933[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (6))){
var inst_23901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23902 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_23903 = (new cljs.core.PersistentVector(null,2,(5),inst_23901,inst_23902,null));
var state_23914__$1 = state_23914;
var statearr_23922_23934 = state_23914__$1;
(statearr_23922_23934[(2)] = inst_23903);

(statearr_23922_23934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (7))){
var inst_23897 = (state_23914[(7)]);
var inst_23898 = (state_23914[(8)]);
var inst_23905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23906 = ["Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23898),"\n","Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23897)].join('');
var inst_23907 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_23906];
var inst_23908 = (new cljs.core.PersistentVector(null,2,(5),inst_23905,inst_23907,null));
var state_23914__$1 = state_23914;
var statearr_23923_23935 = state_23914__$1;
(statearr_23923_23935[(2)] = inst_23908);

(statearr_23923_23935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (8))){
var inst_23910 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
var statearr_23924_23936 = state_23914__$1;
(statearr_23924_23936[(2)] = inst_23910);

(statearr_23924_23936[(1)] = (4));


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
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$plugin$load_external_scripts_$_state_machine__15944__auto__ = null;
var klipse$plugin$load_external_scripts_$_state_machine__15944__auto____0 = (function (){
var statearr_23925 = [null,null,null,null,null,null,null,null,null];
(statearr_23925[(0)] = klipse$plugin$load_external_scripts_$_state_machine__15944__auto__);

(statearr_23925[(1)] = (1));

return statearr_23925;
});
var klipse$plugin$load_external_scripts_$_state_machine__15944__auto____1 = (function (state_23914){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_23914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e23926){if((e23926 instanceof Object)){
var ex__15947__auto__ = e23926;
var statearr_23927_23937 = state_23914;
(statearr_23927_23937[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23938 = state_23914;
state_23914 = G__23938;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$plugin$load_external_scripts_$_state_machine__15944__auto__ = function(state_23914){
switch(arguments.length){
case 0:
return klipse$plugin$load_external_scripts_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$plugin$load_external_scripts_$_state_machine__15944__auto____1.call(this,state_23914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$load_external_scripts_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$load_external_scripts_$_state_machine__15944__auto____0;
klipse$plugin$load_external_scripts_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$load_external_scripts_$_state_machine__15944__auto____1;
return klipse$plugin$load_external_scripts_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_23928 = f__16039__auto__.call(null);
(statearr_23928[(6)] = c__16038__auto__);

return statearr_23928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
/**
 * returns a channel c with a function f.
 *   f returns a channel that will be ready to read when the snippet is evaluated.
 */
klipse.plugin.klipsify_with_opts = (function klipse$plugin$klipsify_with_opts(element,p__23941,p__23942,mode){
var map__23943 = p__23941;
var map__23943__$1 = (((((!((map__23943 == null))))?(((((map__23943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23943):map__23943);
var no_dynamic_scripts = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"no_dynamic_scripts","no_dynamic_scripts",-730706373));
var codemirror_options_in = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"codemirror_options_in","codemirror_options_in",-1220877316),cljs.core.PersistentArrayMap.EMPTY);
var eval_idle_msec = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(20));
var codemirror_options_out = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"codemirror_options_out","codemirror_options_out",440175842),cljs.core.PersistentArrayMap.EMPTY);
var print_length = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"print_length","print_length",2140955911),(1000));
var editor_type = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"editor_type","editor_type",195783179));
var minimalistic_ui = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362),false);
var beautify_strings = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"beautify_strings","beautify_strings",1690445266),false);
var eval_context = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"eval_context","eval_context",1307295352));
var map__23944 = p__23942;
var map__23944__$1 = (((((!((map__23944 == null))))?(((((map__23944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23944):map__23944);
var lang_opts = map__23944__$1;
var eval_fn = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var beautify_output_QMARK_ = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),true);
var no_result = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_editor = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"default-editor","default-editor",758164479));
var editor_out_mode = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var beautify_QMARK_ = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true);
var min_eval_idle_msec = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(0));
var comment_str = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
var editor_in_mode = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var external_scripts = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),cljs.core.PersistentVector.EMPTY);
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,map__23943,map__23943__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__23944,map__23944__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,map__23943,map__23943__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__23944,map__23944__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (state_24028){
var state_val_24029 = (state_24028[(1)]);
if((state_val_24029 === (7))){
var state_24028__$1 = state_24028;
var statearr_24030_24078 = state_24028__$1;
(statearr_24030_24078[(2)] = false);

(statearr_24030_24078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (20))){
var inst_23997 = (state_24028[(7)]);
var state_24028__$1 = state_24028;
var statearr_24031_24079 = state_24028__$1;
(statearr_24031_24079[(2)] = inst_23997);

(statearr_24031_24079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (27))){
var inst_23996 = (state_24028[(8)]);
var inst_24015 = (state_24028[(2)]);
var inst_24016 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_23996);
var state_24028__$1 = (function (){var statearr_24032 = state_24028;
(statearr_24032[(9)] = inst_24015);

return statearr_24032;
})();
if(inst_24016){
var statearr_24033_24080 = state_24028__$1;
(statearr_24033_24080[(1)] = (28));

} else {
var statearr_24034_24081 = state_24028__$1;
(statearr_24034_24081[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (1))){
var state_24028__$1 = state_24028;
if(cljs.core.truth_(element)){
var statearr_24035_24082 = state_24028__$1;
(statearr_24035_24082[(1)] = (2));

} else {
var statearr_24036_24083 = state_24028__$1;
(statearr_24036_24083[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (24))){
var inst_23996 = (state_24028[(8)]);
var inst_24008 = (state_24028[(2)]);
var inst_24009 = klipse.plugin.snippet_num_BANG_.call(null);
var inst_24010 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_23996);
var state_24028__$1 = (function (){var statearr_24037 = state_24028;
(statearr_24037[(10)] = inst_24008);

(statearr_24037[(11)] = inst_24009);

return statearr_24037;
})();
if(inst_24010){
var statearr_24038_24084 = state_24028__$1;
(statearr_24038_24084[(1)] = (25));

} else {
var statearr_24039_24085 = state_24028__$1;
(statearr_24039_24085[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (4))){
var inst_24026 = (state_24028[(2)]);
var state_24028__$1 = state_24028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24028__$1,inst_24026);
} else {
if((state_val_24029 === (15))){
var inst_23983 = (state_24028[(12)]);
var state_24028__$1 = state_24028;
var statearr_24040_24086 = state_24028__$1;
(statearr_24040_24086[(2)] = inst_23983);

(statearr_24040_24086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (21))){
var inst_23996 = (state_24028[(8)]);
var inst_24003 = (state_24028[(2)]);
var inst_24004 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_23996);
var state_24028__$1 = (function (){var statearr_24041 = state_24028;
(statearr_24041[(13)] = inst_24003);

return statearr_24041;
})();
if(inst_24004){
var statearr_24042_24087 = state_24028__$1;
(statearr_24042_24087[(1)] = (22));

} else {
var statearr_24043_24088 = state_24028__$1;
(statearr_24043_24088[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (13))){
var inst_23960 = (state_24028[(14)]);
var state_24028__$1 = state_24028;
var statearr_24044_24089 = state_24028__$1;
(statearr_24044_24089[(2)] = inst_23960);

(statearr_24044_24089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (22))){
var state_24028__$1 = state_24028;
var statearr_24045_24090 = state_24028__$1;
(statearr_24045_24090[(2)] = beautify_QMARK_);

(statearr_24045_24090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (29))){
var state_24028__$1 = state_24028;
var statearr_24046_24091 = state_24028__$1;
(statearr_24046_24091[(2)] = false);

(statearr_24046_24091[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (6))){
var inst_23960 = (state_24028[(14)]);
var inst_23965 = inst_23960.cljs$lang$protocol_mask$partition0$;
var inst_23966 = (inst_23965 & (64));
var inst_23967 = inst_23960.cljs$core$ISeq$;
var inst_23968 = (cljs.core.PROTOCOL_SENTINEL === inst_23967);
var inst_23969 = ((inst_23966) || (inst_23968));
var state_24028__$1 = state_24028;
if(cljs.core.truth_(inst_23969)){
var statearr_24047_24092 = state_24028__$1;
(statearr_24047_24092[(1)] = (9));

} else {
var statearr_24048_24093 = state_24028__$1;
(statearr_24048_24093[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (28))){
var state_24028__$1 = state_24028;
var statearr_24049_24094 = state_24028__$1;
(statearr_24049_24094[(2)] = beautify_output_QMARK_);

(statearr_24049_24094[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (25))){
var inst_23956 = (state_24028[(15)]);
var state_24028__$1 = state_24028;
var statearr_24050_24095 = state_24028__$1;
(statearr_24050_24095[(2)] = inst_23956);

(statearr_24050_24095[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (17))){
var inst_23990 = (state_24028[(2)]);
var inst_23991 = klipse.plugin.calc_editor_type.call(null,minimalistic_ui,inst_23990);
var inst_23992 = gadjett.collections.collify.call(null,external_scripts);
var inst_23993 = klipse.plugin.load_external_scripts.call(null,inst_23992,no_dynamic_scripts);
var state_24028__$1 = (function (){var statearr_24051 = state_24028;
(statearr_24051[(16)] = inst_23991);

return statearr_24051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24028__$1,(18),inst_23993);
} else {
if((state_val_24029 === (3))){
var state_24028__$1 = state_24028;
var statearr_24052_24096 = state_24028__$1;
(statearr_24052_24096[(2)] = null);

(statearr_24052_24096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (12))){
var inst_23960 = (state_24028[(14)]);
var inst_23978 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23960);
var state_24028__$1 = state_24028;
var statearr_24053_24097 = state_24028__$1;
(statearr_24053_24097[(2)] = inst_23978);

(statearr_24053_24097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (2))){
var inst_23955 = (state_24028[(17)]);
var inst_23952 = [new cljs.core.Keyword(null,"eval-context","eval-context",536255614),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479)];
var inst_23953 = [eval_context,print_length,beautify_strings];
var inst_23954 = cljs.core.PersistentHashMap.fromArrays(inst_23952,inst_23953);
var inst_23955__$1 = klipse.args_from_element.eval_args_from_element.call(null,element,inst_23954);
var inst_23956 = (function (){var eval_args = inst_23955__$1;
return ((function (eval_args,inst_23955,inst_23952,inst_23953,inst_23954,inst_23955__$1,state_val_24029,c__16038__auto__,map__23943,map__23943__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__23944,map__23944__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (p1__23939_SHARP_,p2__23940_SHARP_){
return eval_fn.call(null,p1__23939_SHARP_,cljs.core.merge.call(null,eval_args,p2__23940_SHARP_));
});
;})(eval_args,inst_23955,inst_23952,inst_23953,inst_23954,inst_23955__$1,state_val_24029,c__16038__auto__,map__23943,map__23943__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__23944,map__23944__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var inst_23957 = klipse.args_from_element.content.call(null,element,comment_str);
var state_24028__$1 = (function (){var statearr_24054 = state_24028;
(statearr_24054[(15)] = inst_23956);

(statearr_24054[(17)] = inst_23955__$1);

return statearr_24054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24028__$1,(5),inst_23957);
} else {
if((state_val_24029 === (23))){
var state_24028__$1 = state_24028;
var statearr_24055_24098 = state_24028__$1;
(statearr_24055_24098[(2)] = false);

(statearr_24055_24098[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (19))){
var state_24028__$1 = state_24028;
var statearr_24056_24099 = state_24028__$1;
(statearr_24056_24099[(2)] = klipse.plugin.out_placeholder);

(statearr_24056_24099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (11))){
var inst_23973 = (state_24028[(2)]);
var state_24028__$1 = state_24028;
var statearr_24057_24100 = state_24028__$1;
(statearr_24057_24100[(2)] = inst_23973);

(statearr_24057_24100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (9))){
var state_24028__$1 = state_24028;
var statearr_24058_24101 = state_24028__$1;
(statearr_24058_24101[(2)] = true);

(statearr_24058_24101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (5))){
var inst_23960 = (state_24028[(14)]);
var inst_23959 = (state_24028[(2)]);
var inst_23960__$1 = klipse.plugin.calc_editor_args_from_element.call(null,element,eval_idle_msec,min_eval_idle_msec,editor_type);
var inst_23962 = (inst_23960__$1 == null);
var inst_23963 = cljs.core.not.call(null,inst_23962);
var state_24028__$1 = (function (){var statearr_24059 = state_24028;
(statearr_24059[(18)] = inst_23959);

(statearr_24059[(14)] = inst_23960__$1);

return statearr_24059;
})();
if(inst_23963){
var statearr_24060_24102 = state_24028__$1;
(statearr_24060_24102[(1)] = (6));

} else {
var statearr_24061_24103 = state_24028__$1;
(statearr_24061_24103[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (14))){
var inst_23983 = (state_24028[(12)]);
var inst_23981 = (state_24028[(19)]);
var inst_23981__$1 = (state_24028[(2)]);
var inst_23982 = cljs.core.get.call(null,inst_23981__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var inst_23983__$1 = cljs.core.get.call(null,inst_23981__$1,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480));
var inst_23984 = cljs.core.get.call(null,inst_23981__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var inst_23985 = cljs.core.get.call(null,inst_23981__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var inst_23986 = cljs.core.get.call(null,inst_23981__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var state_24028__$1 = (function (){var statearr_24062 = state_24028;
(statearr_24062[(20)] = inst_23986);

(statearr_24062[(21)] = inst_23982);

(statearr_24062[(22)] = inst_23984);

(statearr_24062[(23)] = inst_23985);

(statearr_24062[(12)] = inst_23983__$1);

(statearr_24062[(19)] = inst_23981__$1);

return statearr_24062;
})();
if(cljs.core.truth_(inst_23983__$1)){
var statearr_24063_24104 = state_24028__$1;
(statearr_24063_24104[(1)] = (15));

} else {
var statearr_24064_24105 = state_24028__$1;
(statearr_24064_24105[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (26))){
var inst_23986 = (state_24028[(20)]);
var inst_23959 = (state_24028[(18)]);
var inst_23982 = (state_24028[(21)]);
var inst_23956 = (state_24028[(15)]);
var inst_23997 = (state_24028[(7)]);
var inst_23984 = (state_24028[(22)]);
var inst_23955 = (state_24028[(17)]);
var inst_23985 = (state_24028[(23)]);
var inst_23991 = (state_24028[(16)]);
var inst_23996 = (state_24028[(8)]);
var inst_23981 = (state_24028[(19)]);
var inst_23995 = (state_24028[(24)]);
var inst_24013 = (function (){var the_editor_type = inst_23991;
var eval_fn_with_args = inst_23956;
var idle_msec = inst_23982;
var loop_msec = inst_23984;
var map__23948 = inst_23981;
var load_error = inst_23997;
var async_code_QMARK_ = inst_23985;
var load_status = inst_23996;
var eval_args = inst_23955;
var source_code = inst_23959;
var preamble = inst_23986;
var vec__23949 = inst_23995;
return ((function (the_editor_type,eval_fn_with_args,idle_msec,loop_msec,map__23948,load_error,async_code_QMARK_,load_status,eval_args,source_code,preamble,vec__23949,inst_23986,inst_23959,inst_23982,inst_23956,inst_23997,inst_23984,inst_23955,inst_23985,inst_23991,inst_23996,inst_23981,inst_23995,state_val_24029,c__16038__auto__,map__23943,map__23943__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__23944,map__23944__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (){
return cljs.core.async.chan.call(null);
});
;})(the_editor_type,eval_fn_with_args,idle_msec,loop_msec,map__23948,load_error,async_code_QMARK_,load_status,eval_args,source_code,preamble,vec__23949,inst_23986,inst_23959,inst_23982,inst_23956,inst_23997,inst_23984,inst_23955,inst_23985,inst_23991,inst_23996,inst_23981,inst_23995,state_val_24029,c__16038__auto__,map__23943,map__23943__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__23944,map__23944__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var state_24028__$1 = state_24028;
var statearr_24065_24106 = state_24028__$1;
(statearr_24065_24106[(2)] = inst_24013);

(statearr_24065_24106[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (16))){
var state_24028__$1 = state_24028;
var statearr_24066_24107 = state_24028__$1;
(statearr_24066_24107[(2)] = default_editor);

(statearr_24066_24107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (30))){
var inst_23986 = (state_24028[(20)]);
var inst_23959 = (state_24028[(18)]);
var inst_23982 = (state_24028[(21)]);
var inst_24008 = (state_24028[(10)]);
var inst_23998 = (state_24028[(25)]);
var inst_23984 = (state_24028[(22)]);
var inst_23985 = (state_24028[(23)]);
var inst_23991 = (state_24028[(16)]);
var inst_24003 = (state_24028[(13)]);
var inst_24015 = (state_24028[(9)]);
var inst_24009 = (state_24028[(11)]);
var inst_24020 = (state_24028[(2)]);
var inst_24021 = [inst_24003,inst_24008,inst_23982,inst_23984,element,editor_out_mode,inst_23985,mode,inst_23959,inst_23986,codemirror_options_out,editor_in_mode,inst_24009,inst_24015,no_result,codemirror_options_in,inst_24020];
var inst_24022 = cljs.core.PersistentHashMap.fromArrays(inst_23998,inst_24021);
var inst_24023 = klipse.klipse_editors.create_editor.call(null,inst_23991,inst_24022);
var state_24028__$1 = state_24028;
var statearr_24067_24108 = state_24028__$1;
(statearr_24067_24108[(2)] = inst_24023);

(statearr_24067_24108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (10))){
var state_24028__$1 = state_24028;
var statearr_24068_24109 = state_24028__$1;
(statearr_24068_24109[(2)] = false);

(statearr_24068_24109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (18))){
var inst_23996 = (state_24028[(8)]);
var inst_23995 = (state_24028[(24)]);
var inst_23995__$1 = (state_24028[(2)]);
var inst_23996__$1 = cljs.core.nth.call(null,inst_23995__$1,(0),null);
var inst_23997 = cljs.core.nth.call(null,inst_23995__$1,(1),null);
var inst_23998 = [new cljs.core.Keyword(null,"default-txt","default-txt",27736322),new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"source-code","source-code",-685884337),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"no-result","no-result",1702657437),new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441)];
var inst_23999 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_23996__$1);
var state_24028__$1 = (function (){var statearr_24069 = state_24028;
(statearr_24069[(25)] = inst_23998);

(statearr_24069[(7)] = inst_23997);

(statearr_24069[(8)] = inst_23996__$1);

(statearr_24069[(24)] = inst_23995__$1);

return statearr_24069;
})();
if(inst_23999){
var statearr_24070_24110 = state_24028__$1;
(statearr_24070_24110[(1)] = (19));

} else {
var statearr_24071_24111 = state_24028__$1;
(statearr_24071_24111[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24029 === (8))){
var inst_23976 = (state_24028[(2)]);
var state_24028__$1 = state_24028;
if(cljs.core.truth_(inst_23976)){
var statearr_24072_24112 = state_24028__$1;
(statearr_24072_24112[(1)] = (12));

} else {
var statearr_24073_24113 = state_24028__$1;
(statearr_24073_24113[(1)] = (13));

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
});})(c__16038__auto__,map__23943,map__23943__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__23944,map__23944__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
;
return ((function (switch__15943__auto__,c__16038__auto__,map__23943,map__23943__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__23944,map__23944__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function() {
var klipse$plugin$klipsify_with_opts_$_state_machine__15944__auto__ = null;
var klipse$plugin$klipsify_with_opts_$_state_machine__15944__auto____0 = (function (){
var statearr_24074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24074[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__15944__auto__);

(statearr_24074[(1)] = (1));

return statearr_24074;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__15944__auto____1 = (function (state_24028){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_24028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e24075){if((e24075 instanceof Object)){
var ex__15947__auto__ = e24075;
var statearr_24076_24114 = state_24028;
(statearr_24076_24114[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24115 = state_24028;
state_24028 = G__24115;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__15944__auto__ = function(state_24028){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__15944__auto____1.call(this,state_24028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_with_opts_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__15944__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__15944__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,map__23943,map__23943__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__23944,map__23944__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var state__16040__auto__ = (function (){var statearr_24077 = f__16039__auto__.call(null);
(statearr_24077[(6)] = c__16038__auto__);

return statearr_24077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,map__23943,map__23943__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__23944,map__23944__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
);

return c__16038__auto__;
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Symbol("goog.dom","isElement","goog.dom/isElement",-1707224949,null),goog.dom.isElement);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"str","str",1089608819)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.string_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),true),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),false))),(function (p1__24116_SHARP_){
return ((cljs.core._EQ_.call(null,p1__24116_SHARP_,true)) || (cljs.core._EQ_.call(null,p1__24116_SHARP_,false)));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__24117){
return cljs.core.map_QMARK_.call(null,G__24117);
}),(function (G__24117){
return cljs.core.contains_QMARK_.call(null,G__24117,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
}),(function (G__24117){
return cljs.core.contains_QMARK_.call(null,G__24117,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
}),(function (G__24117){
return cljs.core.contains_QMARK_.call(null,G__24117,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
}),(function (G__24117){
return cljs.core.contains_QMARK_.call(null,G__24117,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
})], null),(function (G__24117){
return ((cljs.core.map_QMARK_.call(null,G__24117)) && (cljs.core.contains_QMARK_.call(null,G__24117,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))) && (cljs.core.contains_QMARK_.call(null,G__24117,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))) && (cljs.core.contains_QMARK_.call(null,G__24117,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))) && (cljs.core.contains_QMARK_.call(null,G__24117,new cljs.core.Keyword(null,"comment-str","comment-str",130143853))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__24118){
return cljs.core.map_QMARK_.call(null,G__24118);
})], null),(function (G__24118){
return cljs.core.map_QMARK_.call(null,G__24118);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("klipse.plugin","klipsify-with-opts","klipse.plugin/klipsify-with-opts",331340081,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * To be called from outside.
 *   Klipsifies a snippet.
 *   Returns a channel that will be ready when the snippet is evaluated.
 */
klipse.plugin.klipsify = (function klipse$plugin$klipsify(element,general_settings,mode){
var temp__5718__auto__ = cljs.core.deref.call(null,klipse.common.registry.mode_options).call(null,mode);
if(cljs.core.truth_(temp__5718__auto__)){
var opts = temp__5718__auto__;
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,opts,temp__5718__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,opts,temp__5718__auto__){
return (function (state_24126){
var state_val_24127 = (state_24126[(1)]);
if((state_val_24127 === (1))){
var inst_24119 = klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts,mode);
var state_24126__$1 = state_24126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24126__$1,(3),inst_24119);
} else {
if((state_val_24127 === (2))){
var inst_24124 = (state_24126[(2)]);
var state_24126__$1 = state_24126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24126__$1,inst_24124);
} else {
if((state_val_24127 === (3))){
var inst_24121 = (state_24126[(2)]);
var inst_24122 = inst_24121.call(null);
var state_24126__$1 = state_24126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24126__$1,(2),inst_24122);
} else {
return null;
}
}
}
});})(c__16038__auto__,opts,temp__5718__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__,opts,temp__5718__auto__){
return (function() {
var klipse$plugin$klipsify_$_state_machine__15944__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__15944__auto____0 = (function (){
var statearr_24128 = [null,null,null,null,null,null,null];
(statearr_24128[(0)] = klipse$plugin$klipsify_$_state_machine__15944__auto__);

(statearr_24128[(1)] = (1));

return statearr_24128;
});
var klipse$plugin$klipsify_$_state_machine__15944__auto____1 = (function (state_24126){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_24126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e24129){if((e24129 instanceof Object)){
var ex__15947__auto__ = e24129;
var statearr_24130_24142 = state_24126;
(statearr_24130_24142[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24143 = state_24126;
state_24126 = G__24143;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__15944__auto__ = function(state_24126){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__15944__auto____1.call(this,state_24126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__15944__auto____0;
klipse$plugin$klipsify_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__15944__auto____1;
return klipse$plugin$klipsify_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,opts,temp__5718__auto__))
})();
var state__16040__auto__ = (function (){var statearr_24131 = f__16039__auto__.call(null);
(statearr_24131[(6)] = c__16038__auto__);

return statearr_24131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,opts,temp__5718__auto__))
);

return c__16038__auto__;
} else {
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,temp__5718__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,temp__5718__auto__){
return (function (state_24136){
var state_val_24137 = (state_24136[(1)]);
if((state_val_24137 === (1))){
var inst_24132 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_24133 = cljs.core.keys.call(null,inst_24132);
var inst_24134 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_24133);
var state_24136__$1 = state_24136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24136__$1,inst_24134);
} else {
return null;
}
});})(c__16038__auto__,temp__5718__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__,temp__5718__auto__){
return (function() {
var klipse$plugin$klipsify_$_state_machine__15944__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__15944__auto____0 = (function (){
var statearr_24138 = [null,null,null,null,null,null,null];
(statearr_24138[(0)] = klipse$plugin$klipsify_$_state_machine__15944__auto__);

(statearr_24138[(1)] = (1));

return statearr_24138;
});
var klipse$plugin$klipsify_$_state_machine__15944__auto____1 = (function (state_24136){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_24136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e24139){if((e24139 instanceof Object)){
var ex__15947__auto__ = e24139;
var statearr_24140_24144 = state_24136;
(statearr_24140_24144[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24145 = state_24136;
state_24136 = G__24145;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__15944__auto__ = function(state_24136){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__15944__auto____1.call(this,state_24136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__15944__auto____0;
klipse$plugin$klipsify_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__15944__auto____1;
return klipse$plugin$klipsify_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,temp__5718__auto__))
})();
var state__16040__auto__ = (function (){var statearr_24141 = f__16039__auto__.call(null);
(statearr_24141[(6)] = c__16038__auto__);

return statearr_24141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,temp__5718__auto__))
);

return c__16038__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify', klipse.plugin.klipsify);
klipse.plugin.klipsify_no_eval = (function klipse$plugin$klipsify_no_eval(element,general_settings,mode){
var temp__5718__auto__ = cljs.core.deref.call(null,klipse.common.registry.mode_options).call(null,mode);
if(cljs.core.truth_(temp__5718__auto__)){
var opts = temp__5718__auto__;
return klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts,mode);
} else {
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,temp__5718__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,temp__5718__auto__){
return (function (state_24148){
var state_val_24149 = (state_24148[(1)]);
if((state_val_24149 === (1))){
var inst_24146 = (function (){return ((function (state_val_24149,c__16038__auto__,temp__5718__auto__){
return (function (){
var c__16038__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto____$1,state_val_24149,c__16038__auto__,temp__5718__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto____$1,state_val_24149,c__16038__auto__,temp__5718__auto__){
return (function (state_24154){
var state_val_24155 = (state_24154[(1)]);
if((state_val_24155 === (1))){
var inst_24150 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_24151 = cljs.core.keys.call(null,inst_24150);
var inst_24152 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_24151);
var state_24154__$1 = state_24154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24154__$1,inst_24152);
} else {
return null;
}
});})(c__16038__auto____$1,state_val_24149,c__16038__auto__,temp__5718__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto____$1,state_val_24149,c__16038__auto__,temp__5718__auto__){
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto____0 = (function (){
var statearr_24156 = [null,null,null,null,null,null,null];
(statearr_24156[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto__);

(statearr_24156[(1)] = (1));

return statearr_24156;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto____1 = (function (state_24154){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_24154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e24157){if((e24157 instanceof Object)){
var ex__15947__auto__ = e24157;
var statearr_24158_24164 = state_24154;
(statearr_24158_24164[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24165 = state_24154;
state_24154 = G__24165;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto__ = function(state_24154){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto____1.call(this,state_24154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto____$1,state_val_24149,c__16038__auto__,temp__5718__auto__))
})();
var state__16040__auto__ = (function (){var statearr_24159 = f__16039__auto__.call(null);
(statearr_24159[(6)] = c__16038__auto____$1);

return statearr_24159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto____$1,state_val_24149,c__16038__auto__,temp__5718__auto__))
);

return c__16038__auto____$1;
});
;})(state_val_24149,c__16038__auto__,temp__5718__auto__))
})();
var state_24148__$1 = state_24148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24148__$1,inst_24146);
} else {
return null;
}
});})(c__16038__auto__,temp__5718__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__,temp__5718__auto__){
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto____0 = (function (){
var statearr_24160 = [null,null,null,null,null,null,null];
(statearr_24160[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto__);

(statearr_24160[(1)] = (1));

return statearr_24160;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto____1 = (function (state_24148){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_24148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e24161){if((e24161 instanceof Object)){
var ex__15947__auto__ = e24161;
var statearr_24162_24166 = state_24148;
(statearr_24162_24166[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24167 = state_24148;
state_24148 = G__24167;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto__ = function(state_24148){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto____1.call(this,state_24148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,temp__5718__auto__))
})();
var state__16040__auto__ = (function (){var statearr_24163 = f__16039__auto__.call(null);
(statearr_24163[(6)] = c__16038__auto__);

return statearr_24163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,temp__5718__auto__))
);

return c__16038__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify_no_eval', klipse.plugin.klipsify_no_eval);
klipse.plugin.edit_elements = (function klipse$plugin$edit_elements(elements,general_settings,modes){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_24194){
var state_val_24195 = (state_24194[(1)]);
if((state_val_24195 === (7))){
var inst_24174 = (state_24194[(7)]);
var inst_24175 = (state_24194[(8)]);
var inst_24177 = klipse.plugin.klipsify_no_eval.call(null,inst_24174,general_settings,inst_24175);
var state_24194__$1 = state_24194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24194__$1,(10),inst_24177);
} else {
if((state_val_24195 === (1))){
var inst_24168 = cljs.core.PersistentVector.EMPTY;
var inst_24169 = elements;
var inst_24170 = inst_24168;
var state_24194__$1 = (function (){var statearr_24196 = state_24194;
(statearr_24196[(9)] = inst_24169);

(statearr_24196[(10)] = inst_24170);

return statearr_24196;
})();
var statearr_24197_24215 = state_24194__$1;
(statearr_24197_24215[(2)] = null);

(statearr_24197_24215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (4))){
var inst_24174 = (state_24194[(7)]);
var inst_24175 = (state_24194[(8)]);
var inst_24169 = (state_24194[(9)]);
var inst_24174__$1 = cljs.core.first.call(null,inst_24169);
var inst_24175__$1 = modes.call(null,inst_24174__$1);
var state_24194__$1 = (function (){var statearr_24198 = state_24194;
(statearr_24198[(7)] = inst_24174__$1);

(statearr_24198[(8)] = inst_24175__$1);

return statearr_24198;
})();
if(cljs.core.truth_(inst_24175__$1)){
var statearr_24199_24216 = state_24194__$1;
(statearr_24199_24216[(1)] = (7));

} else {
var statearr_24200_24217 = state_24194__$1;
(statearr_24200_24217[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (6))){
var inst_24190 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
var statearr_24201_24218 = state_24194__$1;
(statearr_24201_24218[(2)] = inst_24190);

(statearr_24201_24218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (3))){
var inst_24192 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24194__$1,inst_24192);
} else {
if((state_val_24195 === (2))){
var inst_24169 = (state_24194[(9)]);
var inst_24172 = cljs.core.seq.call(null,inst_24169);
var state_24194__$1 = state_24194;
if(inst_24172){
var statearr_24202_24219 = state_24194__$1;
(statearr_24202_24219[(1)] = (4));

} else {
var statearr_24203_24220 = state_24194__$1;
(statearr_24203_24220[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (9))){
var inst_24187 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
var statearr_24204_24221 = state_24194__$1;
(statearr_24204_24221[(2)] = inst_24187);

(statearr_24204_24221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (5))){
var inst_24170 = (state_24194[(10)]);
var state_24194__$1 = state_24194;
var statearr_24206_24222 = state_24194__$1;
(statearr_24206_24222[(2)] = inst_24170);

(statearr_24206_24222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (10))){
var inst_24169 = (state_24194[(9)]);
var inst_24170 = (state_24194[(10)]);
var inst_24179 = (state_24194[(2)]);
var inst_24180 = cljs.core.rest.call(null,inst_24169);
var inst_24181 = cljs.core.conj.call(null,inst_24170,inst_24179);
var inst_24169__$1 = inst_24180;
var inst_24170__$1 = inst_24181;
var state_24194__$1 = (function (){var statearr_24207 = state_24194;
(statearr_24207[(9)] = inst_24169__$1);

(statearr_24207[(10)] = inst_24170__$1);

return statearr_24207;
})();
var statearr_24208_24223 = state_24194__$1;
(statearr_24208_24223[(2)] = null);

(statearr_24208_24223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (8))){
var inst_24169 = (state_24194[(9)]);
var inst_24170 = (state_24194[(10)]);
var inst_24184 = cljs.core.rest.call(null,inst_24169);
var tmp24205 = inst_24170;
var inst_24169__$1 = inst_24184;
var inst_24170__$1 = tmp24205;
var state_24194__$1 = (function (){var statearr_24209 = state_24194;
(statearr_24209[(9)] = inst_24169__$1);

(statearr_24209[(10)] = inst_24170__$1);

return statearr_24209;
})();
var statearr_24210_24224 = state_24194__$1;
(statearr_24210_24224[(2)] = null);

(statearr_24210_24224[(1)] = (2));


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
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$plugin$edit_elements_$_state_machine__15944__auto__ = null;
var klipse$plugin$edit_elements_$_state_machine__15944__auto____0 = (function (){
var statearr_24211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24211[(0)] = klipse$plugin$edit_elements_$_state_machine__15944__auto__);

(statearr_24211[(1)] = (1));

return statearr_24211;
});
var klipse$plugin$edit_elements_$_state_machine__15944__auto____1 = (function (state_24194){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_24194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e24212){if((e24212 instanceof Object)){
var ex__15947__auto__ = e24212;
var statearr_24213_24225 = state_24194;
(statearr_24213_24225[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24226 = state_24194;
state_24194 = G__24226;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$plugin$edit_elements_$_state_machine__15944__auto__ = function(state_24194){
switch(arguments.length){
case 0:
return klipse$plugin$edit_elements_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$plugin$edit_elements_$_state_machine__15944__auto____1.call(this,state_24194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$edit_elements_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$edit_elements_$_state_machine__15944__auto____0;
klipse$plugin$edit_elements_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$edit_elements_$_state_machine__15944__auto____1;
return klipse$plugin$edit_elements_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_24214 = f__16039__auto__.call(null);
(statearr_24214[(6)] = c__16038__auto__);

return statearr_24214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.plugin.klipsify_elements = (function klipse$plugin$klipsify_elements(elements,general_settings,modes){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_24275){
var state_val_24276 = (state_24275[(1)]);
if((state_val_24276 === (7))){
var inst_24271 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
var statearr_24277_24303 = state_24275__$1;
(statearr_24277_24303[(2)] = inst_24271);

(statearr_24277_24303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (1))){
var inst_24227 = klipse.plugin.edit_elements.call(null,elements,general_settings,modes);
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24275__$1,(2),inst_24227);
} else {
if((state_val_24276 === (4))){
var inst_24273 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24275__$1,inst_24273);
} else {
if((state_val_24276 === (15))){
var inst_24250 = (state_24275[(7)]);
var inst_24262 = (state_24275[(2)]);
var inst_24263 = cljs.core.next.call(null,inst_24250);
var inst_24235 = inst_24263;
var inst_24236 = null;
var inst_24237 = (0);
var inst_24238 = (0);
var state_24275__$1 = (function (){var statearr_24278 = state_24275;
(statearr_24278[(8)] = inst_24235);

(statearr_24278[(9)] = inst_24238);

(statearr_24278[(10)] = inst_24262);

(statearr_24278[(11)] = inst_24236);

(statearr_24278[(12)] = inst_24237);

return statearr_24278;
})();
var statearr_24279_24304 = state_24275__$1;
(statearr_24279_24304[(2)] = null);

(statearr_24279_24304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (13))){
var inst_24250 = (state_24275[(7)]);
var inst_24259 = cljs.core.first.call(null,inst_24250);
var inst_24260 = inst_24259.call(null);
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24275__$1,(15),inst_24260);
} else {
if((state_val_24276 === (6))){
var inst_24235 = (state_24275[(8)]);
var inst_24250 = (state_24275[(7)]);
var inst_24250__$1 = cljs.core.seq.call(null,inst_24235);
var state_24275__$1 = (function (){var statearr_24280 = state_24275;
(statearr_24280[(7)] = inst_24250__$1);

return statearr_24280;
})();
if(inst_24250__$1){
var statearr_24281_24305 = state_24275__$1;
(statearr_24281_24305[(1)] = (9));

} else {
var statearr_24282_24306 = state_24275__$1;
(statearr_24282_24306[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (3))){
var inst_24238 = (state_24275[(9)]);
var inst_24237 = (state_24275[(12)]);
var inst_24240 = (inst_24238 < inst_24237);
var inst_24241 = inst_24240;
var state_24275__$1 = state_24275;
if(cljs.core.truth_(inst_24241)){
var statearr_24283_24307 = state_24275__$1;
(statearr_24283_24307[(1)] = (5));

} else {
var statearr_24284_24308 = state_24275__$1;
(statearr_24284_24308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (12))){
var inst_24250 = (state_24275[(7)]);
var inst_24254 = cljs.core.chunk_first.call(null,inst_24250);
var inst_24255 = cljs.core.chunk_rest.call(null,inst_24250);
var inst_24256 = cljs.core.count.call(null,inst_24254);
var inst_24235 = inst_24255;
var inst_24236 = inst_24254;
var inst_24237 = inst_24256;
var inst_24238 = (0);
var state_24275__$1 = (function (){var statearr_24285 = state_24275;
(statearr_24285[(8)] = inst_24235);

(statearr_24285[(9)] = inst_24238);

(statearr_24285[(11)] = inst_24236);

(statearr_24285[(12)] = inst_24237);

return statearr_24285;
})();
var statearr_24286_24309 = state_24275__$1;
(statearr_24286_24309[(2)] = null);

(statearr_24286_24309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (2))){
var inst_24229 = (state_24275[(2)]);
var inst_24234 = cljs.core.seq.call(null,inst_24229);
var inst_24235 = inst_24234;
var inst_24236 = null;
var inst_24237 = (0);
var inst_24238 = (0);
var state_24275__$1 = (function (){var statearr_24287 = state_24275;
(statearr_24287[(8)] = inst_24235);

(statearr_24287[(9)] = inst_24238);

(statearr_24287[(11)] = inst_24236);

(statearr_24287[(12)] = inst_24237);

return statearr_24287;
})();
var statearr_24288_24310 = state_24275__$1;
(statearr_24288_24310[(2)] = null);

(statearr_24288_24310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (11))){
var inst_24269 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
var statearr_24289_24311 = state_24275__$1;
(statearr_24289_24311[(2)] = inst_24269);

(statearr_24289_24311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (9))){
var inst_24250 = (state_24275[(7)]);
var inst_24252 = cljs.core.chunked_seq_QMARK_.call(null,inst_24250);
var state_24275__$1 = state_24275;
if(inst_24252){
var statearr_24290_24312 = state_24275__$1;
(statearr_24290_24312[(1)] = (12));

} else {
var statearr_24291_24313 = state_24275__$1;
(statearr_24291_24313[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (5))){
var inst_24238 = (state_24275[(9)]);
var inst_24236 = (state_24275[(11)]);
var inst_24243 = cljs.core._nth.call(null,inst_24236,inst_24238);
var inst_24244 = inst_24243.call(null);
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24275__$1,(8),inst_24244);
} else {
if((state_val_24276 === (14))){
var inst_24266 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
var statearr_24295_24314 = state_24275__$1;
(statearr_24295_24314[(2)] = inst_24266);

(statearr_24295_24314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (10))){
var state_24275__$1 = state_24275;
var statearr_24296_24315 = state_24275__$1;
(statearr_24296_24315[(2)] = null);

(statearr_24296_24315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (8))){
var inst_24235 = (state_24275[(8)]);
var inst_24238 = (state_24275[(9)]);
var inst_24236 = (state_24275[(11)]);
var inst_24237 = (state_24275[(12)]);
var inst_24246 = (state_24275[(2)]);
var inst_24247 = (inst_24238 + (1));
var tmp24292 = inst_24235;
var tmp24293 = inst_24236;
var tmp24294 = inst_24237;
var inst_24235__$1 = tmp24292;
var inst_24236__$1 = tmp24293;
var inst_24237__$1 = tmp24294;
var inst_24238__$1 = inst_24247;
var state_24275__$1 = (function (){var statearr_24297 = state_24275;
(statearr_24297[(8)] = inst_24235__$1);

(statearr_24297[(9)] = inst_24238__$1);

(statearr_24297[(11)] = inst_24236__$1);

(statearr_24297[(12)] = inst_24237__$1);

(statearr_24297[(13)] = inst_24246);

return statearr_24297;
})();
var statearr_24298_24316 = state_24275__$1;
(statearr_24298_24316[(2)] = null);

(statearr_24298_24316[(1)] = (3));


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
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$plugin$klipsify_elements_$_state_machine__15944__auto__ = null;
var klipse$plugin$klipsify_elements_$_state_machine__15944__auto____0 = (function (){
var statearr_24299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24299[(0)] = klipse$plugin$klipsify_elements_$_state_machine__15944__auto__);

(statearr_24299[(1)] = (1));

return statearr_24299;
});
var klipse$plugin$klipsify_elements_$_state_machine__15944__auto____1 = (function (state_24275){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_24275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e24300){if((e24300 instanceof Object)){
var ex__15947__auto__ = e24300;
var statearr_24301_24317 = state_24275;
(statearr_24301_24317[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24318 = state_24275;
state_24275 = G__24318;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__15944__auto__ = function(state_24275){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__15944__auto____1.call(this,state_24275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_elements_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__15944__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__15944__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_24302 = f__16039__auto__.call(null);
(statearr_24302[(6)] = c__16038__auto__);

return statearr_24302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.plugin.snippets_selector = (function klipse$plugin$snippets_selector(settings,selector_names){
return clojure.string.join.call(null,",",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,settings,selector_names)));
});
klipse.plugin.seq_from_selector = (function klipse$plugin$seq_from_selector(selector){
return cljs.core.array_seq.call(null,document.querySelectorAll(selector));
});
klipse.plugin.elements__GT_mode = (function klipse$plugin$elements__GT_mode(settings){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function klipse$plugin$elements__GT_mode_$_iter__24319(s__24320){
return (new cljs.core.LazySeq(null,(function (){
var s__24320__$1 = s__24320;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__24320__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var selector_name = cljs.core.first.call(null,xs__6277__auto__);
var selector = settings.call(null,selector_name);
if(cljs.core.truth_(selector)){
var iterys__4519__auto__ = ((function (s__24320__$1,selector,selector_name,xs__6277__auto__,temp__5720__auto__){
return (function klipse$plugin$elements__GT_mode_$_iter__24319_$_iter__24321(s__24322){
return (new cljs.core.LazySeq(null,((function (s__24320__$1,selector,selector_name,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__24322__$1 = s__24322;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__24322__$1);
if(temp__5720__auto____$1){
var s__24322__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24322__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__24322__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__24324 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__24323 = (0);
while(true){
if((i__24323 < size__4522__auto__)){
var element = cljs.core._nth.call(null,c__4521__auto__,i__24323);
cljs.core.chunk_append.call(null,b__24324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null));

var G__24325 = (i__24323 + (1));
i__24323 = G__24325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24324),klipse$plugin$elements__GT_mode_$_iter__24319_$_iter__24321.call(null,cljs.core.chunk_rest.call(null,s__24322__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24324),null);
}
} else {
var element = cljs.core.first.call(null,s__24322__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null),klipse$plugin$elements__GT_mode_$_iter__24319_$_iter__24321.call(null,cljs.core.rest.call(null,s__24322__$2)));
}
} else {
return null;
}
break;
}
});})(s__24320__$1,selector,selector_name,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__24320__$1,selector,selector_name,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,klipse.plugin.seq_from_selector.call(null,selector)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,klipse$plugin$elements__GT_mode_$_iter__24319.call(null,cljs.core.rest.call(null,s__24320__$1)));
} else {
var G__24326 = cljs.core.rest.call(null,s__24320__$1);
s__24320__$1 = G__24326;
continue;
}
} else {
var G__24327 = cljs.core.rest.call(null,s__24320__$1);
s__24320__$1 = G__24327;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode)));
})());
});
klipse.plugin.init_clj = (function klipse$plugin$init_clj(settings){
var map__24328 = clojure.walk.keywordize_keys.call(null,settings);
var map__24328__$1 = (((((!((map__24328 == null))))?(((((map__24328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24328):map__24328);
var keywordized_settings = map__24328__$1;
var secured_eval = cljs.core.get.call(null,map__24328__$1,new cljs.core.Keyword(null,"secured_eval","secured_eval",-1577487888));
var security_forbidden_symbols = cljs.core.get.call(null,map__24328__$1,new cljs.core.Keyword(null,"security_forbidden_symbols","security_forbidden_symbols",-1480402500),klipse.utils.default_forbidden_symbols.call(null));
var modes = klipse.plugin.elements__GT_mode.call(null,settings);
var elements = klipse.plugin.seq_from_selector.call(null,klipse.plugin.snippets_selector.call(null,settings,cljs.core.keys.call(null,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode))));
if(cljs.core.truth_(secured_eval)){
klipse.utils.securize_eval_BANG_.call(null,security_forbidden_symbols);
} else {
}

return klipse.plugin.klipsify_elements.call(null,elements,keywordized_settings,modes);
});
goog.exportSymbol('klipse.plugin.init_clj', klipse.plugin.init_clj);
klipse.plugin.init = (function klipse$plugin$init(js_settings){
return klipse.plugin.init_clj.call(null,cljs.core.js__GT_clj.call(null,js_settings,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false));
});
goog.exportSymbol('klipse.plugin.init', klipse.plugin.init);

//# sourceMappingURL=plugin.js.map
