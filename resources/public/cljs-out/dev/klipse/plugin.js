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
var map__36514 = klipse.args_from_element.editor_args_from_element.call(null,element);
var map__36514__$1 = (((((!((map__36514 == null))))?(((((map__36514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36514):map__36514);
var idle_msec = cljs.core.get.call(null,map__36514__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),global_idle_msec);
var editor_type = cljs.core.get.call(null,map__36514__$1,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),global_editor_type);
var preamble = cljs.core.get.call(null,map__36514__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var async_code_QMARK_ = cljs.core.get.call(null,map__36514__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var loop_msec = cljs.core.get.call(null,map__36514__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),(function (){var x__4219__auto__ = min_idle_msec;
var y__4220__auto__ = idle_msec;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),async_code_QMARK_,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480),editor_type], null));
});
klipse.plugin.calc_editor_type = (function klipse$plugin$calc_editor_type(minimalistic_ui_QMARK_,the_type){
if(cljs.core.truth_(minimalistic_ui_QMARK_)){
return new cljs.core.Keyword(null,"dom","dom",-1236537922);
} else {
var G__36516 = the_type;
switch (G__36516) {
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
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_36547){
var state_val_36548 = (state_36547[(1)]);
if((state_val_36548 === (1))){
var state_36547__$1 = state_36547;
if(cljs.core.truth_(no_dynamic_scritps_QMARK_)){
var statearr_36549_36562 = state_36547__$1;
(statearr_36549_36562[(1)] = (2));

} else {
var statearr_36550_36563 = state_36547__$1;
(statearr_36550_36563[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (2))){
var inst_36519 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36520 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_36521 = (new cljs.core.PersistentVector(null,2,(5),inst_36519,inst_36520,null));
var state_36547__$1 = state_36547;
var statearr_36551_36564 = state_36547__$1;
(statearr_36551_36564[(2)] = inst_36521);

(statearr_36551_36564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (3))){
var inst_36526 = klipse.utils.load_scripts_mem.call(null,scripts);
var state_36547__$1 = state_36547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36547__$1,(5),inst_36526);
} else {
if((state_val_36548 === (4))){
var inst_36545 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36547__$1,inst_36545);
} else {
if((state_val_36548 === (5))){
var inst_36528 = (state_36547[(2)]);
var inst_36529 = cljs.core.nth.call(null,inst_36528,(0),null);
var inst_36530 = cljs.core.nth.call(null,inst_36528,(1),null);
var inst_36531 = cljs.core.nth.call(null,inst_36528,(2),null);
var inst_36532 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_36529);
var state_36547__$1 = (function (){var statearr_36552 = state_36547;
(statearr_36552[(7)] = inst_36530);

(statearr_36552[(8)] = inst_36531);

return statearr_36552;
})();
if(inst_36532){
var statearr_36553_36565 = state_36547__$1;
(statearr_36553_36565[(1)] = (6));

} else {
var statearr_36554_36566 = state_36547__$1;
(statearr_36554_36566[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (6))){
var inst_36534 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36535 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_36536 = (new cljs.core.PersistentVector(null,2,(5),inst_36534,inst_36535,null));
var state_36547__$1 = state_36547;
var statearr_36555_36567 = state_36547__$1;
(statearr_36555_36567[(2)] = inst_36536);

(statearr_36555_36567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (7))){
var inst_36530 = (state_36547[(7)]);
var inst_36531 = (state_36547[(8)]);
var inst_36538 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36539 = ["Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36531),"\n","Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36530)].join('');
var inst_36540 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_36539];
var inst_36541 = (new cljs.core.PersistentVector(null,2,(5),inst_36538,inst_36540,null));
var state_36547__$1 = state_36547;
var statearr_36556_36568 = state_36547__$1;
(statearr_36556_36568[(2)] = inst_36541);

(statearr_36556_36568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (8))){
var inst_36543 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
var statearr_36557_36569 = state_36547__$1;
(statearr_36557_36569[(2)] = inst_36543);

(statearr_36557_36569[(1)] = (4));


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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$plugin$load_external_scripts_$_state_machine__21022__auto__ = null;
var klipse$plugin$load_external_scripts_$_state_machine__21022__auto____0 = (function (){
var statearr_36558 = [null,null,null,null,null,null,null,null,null];
(statearr_36558[(0)] = klipse$plugin$load_external_scripts_$_state_machine__21022__auto__);

(statearr_36558[(1)] = (1));

return statearr_36558;
});
var klipse$plugin$load_external_scripts_$_state_machine__21022__auto____1 = (function (state_36547){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_36547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e36559){if((e36559 instanceof Object)){
var ex__21025__auto__ = e36559;
var statearr_36560_36570 = state_36547;
(statearr_36560_36570[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36571 = state_36547;
state_36547 = G__36571;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$plugin$load_external_scripts_$_state_machine__21022__auto__ = function(state_36547){
switch(arguments.length){
case 0:
return klipse$plugin$load_external_scripts_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$plugin$load_external_scripts_$_state_machine__21022__auto____1.call(this,state_36547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$load_external_scripts_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$load_external_scripts_$_state_machine__21022__auto____0;
klipse$plugin$load_external_scripts_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$load_external_scripts_$_state_machine__21022__auto____1;
return klipse$plugin$load_external_scripts_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_36561 = f__21189__auto__.call(null);
(statearr_36561[(6)] = c__21188__auto__);

return statearr_36561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
/**
 * returns a channel c with a function f.
 *   f returns a channel that will be ready to read when the snippet is evaluated.
 */
klipse.plugin.klipsify_with_opts = (function klipse$plugin$klipsify_with_opts(element,p__36574,p__36575,mode){
var map__36576 = p__36574;
var map__36576__$1 = (((((!((map__36576 == null))))?(((((map__36576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36576):map__36576);
var no_dynamic_scripts = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"no_dynamic_scripts","no_dynamic_scripts",-730706373));
var codemirror_options_in = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"codemirror_options_in","codemirror_options_in",-1220877316),cljs.core.PersistentArrayMap.EMPTY);
var eval_idle_msec = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(20));
var codemirror_options_out = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"codemirror_options_out","codemirror_options_out",440175842),cljs.core.PersistentArrayMap.EMPTY);
var print_length = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"print_length","print_length",2140955911),(1000));
var editor_type = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"editor_type","editor_type",195783179));
var minimalistic_ui = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362),false);
var beautify_strings = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"beautify_strings","beautify_strings",1690445266),false);
var eval_context = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"eval_context","eval_context",1307295352));
var map__36577 = p__36575;
var map__36577__$1 = (((((!((map__36577 == null))))?(((((map__36577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36577):map__36577);
var lang_opts = map__36577__$1;
var eval_fn = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var beautify_output_QMARK_ = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),true);
var no_result = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_editor = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"default-editor","default-editor",758164479));
var editor_out_mode = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var beautify_QMARK_ = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true);
var min_eval_idle_msec = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(0));
var comment_str = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
var editor_in_mode = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var external_scripts = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),cljs.core.PersistentVector.EMPTY);
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,map__36576,map__36576__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__36577,map__36577__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,map__36576,map__36576__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__36577,map__36577__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (state_36661){
var state_val_36662 = (state_36661[(1)]);
if((state_val_36662 === (7))){
var state_36661__$1 = state_36661;
var statearr_36663_36711 = state_36661__$1;
(statearr_36663_36711[(2)] = false);

(statearr_36663_36711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (20))){
var inst_36630 = (state_36661[(7)]);
var state_36661__$1 = state_36661;
var statearr_36664_36712 = state_36661__$1;
(statearr_36664_36712[(2)] = inst_36630);

(statearr_36664_36712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (27))){
var inst_36629 = (state_36661[(8)]);
var inst_36648 = (state_36661[(2)]);
var inst_36649 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_36629);
var state_36661__$1 = (function (){var statearr_36665 = state_36661;
(statearr_36665[(9)] = inst_36648);

return statearr_36665;
})();
if(inst_36649){
var statearr_36666_36713 = state_36661__$1;
(statearr_36666_36713[(1)] = (28));

} else {
var statearr_36667_36714 = state_36661__$1;
(statearr_36667_36714[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (1))){
var state_36661__$1 = state_36661;
if(cljs.core.truth_(element)){
var statearr_36668_36715 = state_36661__$1;
(statearr_36668_36715[(1)] = (2));

} else {
var statearr_36669_36716 = state_36661__$1;
(statearr_36669_36716[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (24))){
var inst_36629 = (state_36661[(8)]);
var inst_36641 = (state_36661[(2)]);
var inst_36642 = klipse.plugin.snippet_num_BANG_.call(null);
var inst_36643 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_36629);
var state_36661__$1 = (function (){var statearr_36670 = state_36661;
(statearr_36670[(10)] = inst_36642);

(statearr_36670[(11)] = inst_36641);

return statearr_36670;
})();
if(inst_36643){
var statearr_36671_36717 = state_36661__$1;
(statearr_36671_36717[(1)] = (25));

} else {
var statearr_36672_36718 = state_36661__$1;
(statearr_36672_36718[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (4))){
var inst_36659 = (state_36661[(2)]);
var state_36661__$1 = state_36661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36661__$1,inst_36659);
} else {
if((state_val_36662 === (15))){
var inst_36616 = (state_36661[(12)]);
var state_36661__$1 = state_36661;
var statearr_36673_36719 = state_36661__$1;
(statearr_36673_36719[(2)] = inst_36616);

(statearr_36673_36719[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (21))){
var inst_36629 = (state_36661[(8)]);
var inst_36636 = (state_36661[(2)]);
var inst_36637 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_36629);
var state_36661__$1 = (function (){var statearr_36674 = state_36661;
(statearr_36674[(13)] = inst_36636);

return statearr_36674;
})();
if(inst_36637){
var statearr_36675_36720 = state_36661__$1;
(statearr_36675_36720[(1)] = (22));

} else {
var statearr_36676_36721 = state_36661__$1;
(statearr_36676_36721[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (13))){
var inst_36593 = (state_36661[(14)]);
var state_36661__$1 = state_36661;
var statearr_36677_36722 = state_36661__$1;
(statearr_36677_36722[(2)] = inst_36593);

(statearr_36677_36722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (22))){
var state_36661__$1 = state_36661;
var statearr_36678_36723 = state_36661__$1;
(statearr_36678_36723[(2)] = beautify_QMARK_);

(statearr_36678_36723[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (29))){
var state_36661__$1 = state_36661;
var statearr_36679_36724 = state_36661__$1;
(statearr_36679_36724[(2)] = false);

(statearr_36679_36724[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (6))){
var inst_36593 = (state_36661[(14)]);
var inst_36598 = inst_36593.cljs$lang$protocol_mask$partition0$;
var inst_36599 = (inst_36598 & (64));
var inst_36600 = inst_36593.cljs$core$ISeq$;
var inst_36601 = (cljs.core.PROTOCOL_SENTINEL === inst_36600);
var inst_36602 = ((inst_36599) || (inst_36601));
var state_36661__$1 = state_36661;
if(cljs.core.truth_(inst_36602)){
var statearr_36680_36725 = state_36661__$1;
(statearr_36680_36725[(1)] = (9));

} else {
var statearr_36681_36726 = state_36661__$1;
(statearr_36681_36726[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (28))){
var state_36661__$1 = state_36661;
var statearr_36682_36727 = state_36661__$1;
(statearr_36682_36727[(2)] = beautify_output_QMARK_);

(statearr_36682_36727[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (25))){
var inst_36589 = (state_36661[(15)]);
var state_36661__$1 = state_36661;
var statearr_36683_36728 = state_36661__$1;
(statearr_36683_36728[(2)] = inst_36589);

(statearr_36683_36728[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (17))){
var inst_36623 = (state_36661[(2)]);
var inst_36624 = klipse.plugin.calc_editor_type.call(null,minimalistic_ui,inst_36623);
var inst_36625 = gadjett.collections.collify.call(null,external_scripts);
var inst_36626 = klipse.plugin.load_external_scripts.call(null,inst_36625,no_dynamic_scripts);
var state_36661__$1 = (function (){var statearr_36684 = state_36661;
(statearr_36684[(16)] = inst_36624);

return statearr_36684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36661__$1,(18),inst_36626);
} else {
if((state_val_36662 === (3))){
var state_36661__$1 = state_36661;
var statearr_36685_36729 = state_36661__$1;
(statearr_36685_36729[(2)] = null);

(statearr_36685_36729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (12))){
var inst_36593 = (state_36661[(14)]);
var inst_36611 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36593);
var state_36661__$1 = state_36661;
var statearr_36686_36730 = state_36661__$1;
(statearr_36686_36730[(2)] = inst_36611);

(statearr_36686_36730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (2))){
var inst_36588 = (state_36661[(17)]);
var inst_36585 = [new cljs.core.Keyword(null,"eval-context","eval-context",536255614),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479)];
var inst_36586 = [eval_context,print_length,beautify_strings];
var inst_36587 = cljs.core.PersistentHashMap.fromArrays(inst_36585,inst_36586);
var inst_36588__$1 = klipse.args_from_element.eval_args_from_element.call(null,element,inst_36587);
var inst_36589 = (function (){var eval_args = inst_36588__$1;
return ((function (eval_args,inst_36588,inst_36585,inst_36586,inst_36587,inst_36588__$1,state_val_36662,c__21188__auto__,map__36576,map__36576__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__36577,map__36577__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (p1__36572_SHARP_,p2__36573_SHARP_){
return eval_fn.call(null,p1__36572_SHARP_,cljs.core.merge.call(null,eval_args,p2__36573_SHARP_));
});
;})(eval_args,inst_36588,inst_36585,inst_36586,inst_36587,inst_36588__$1,state_val_36662,c__21188__auto__,map__36576,map__36576__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__36577,map__36577__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var inst_36590 = klipse.args_from_element.content.call(null,element,comment_str);
var state_36661__$1 = (function (){var statearr_36687 = state_36661;
(statearr_36687[(17)] = inst_36588__$1);

(statearr_36687[(15)] = inst_36589);

return statearr_36687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36661__$1,(5),inst_36590);
} else {
if((state_val_36662 === (23))){
var state_36661__$1 = state_36661;
var statearr_36688_36731 = state_36661__$1;
(statearr_36688_36731[(2)] = false);

(statearr_36688_36731[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (19))){
var state_36661__$1 = state_36661;
var statearr_36689_36732 = state_36661__$1;
(statearr_36689_36732[(2)] = klipse.plugin.out_placeholder);

(statearr_36689_36732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (11))){
var inst_36606 = (state_36661[(2)]);
var state_36661__$1 = state_36661;
var statearr_36690_36733 = state_36661__$1;
(statearr_36690_36733[(2)] = inst_36606);

(statearr_36690_36733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (9))){
var state_36661__$1 = state_36661;
var statearr_36691_36734 = state_36661__$1;
(statearr_36691_36734[(2)] = true);

(statearr_36691_36734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (5))){
var inst_36593 = (state_36661[(14)]);
var inst_36592 = (state_36661[(2)]);
var inst_36593__$1 = klipse.plugin.calc_editor_args_from_element.call(null,element,eval_idle_msec,min_eval_idle_msec,editor_type);
var inst_36595 = (inst_36593__$1 == null);
var inst_36596 = cljs.core.not.call(null,inst_36595);
var state_36661__$1 = (function (){var statearr_36692 = state_36661;
(statearr_36692[(14)] = inst_36593__$1);

(statearr_36692[(18)] = inst_36592);

return statearr_36692;
})();
if(inst_36596){
var statearr_36693_36735 = state_36661__$1;
(statearr_36693_36735[(1)] = (6));

} else {
var statearr_36694_36736 = state_36661__$1;
(statearr_36694_36736[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (14))){
var inst_36616 = (state_36661[(12)]);
var inst_36614 = (state_36661[(19)]);
var inst_36614__$1 = (state_36661[(2)]);
var inst_36615 = cljs.core.get.call(null,inst_36614__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var inst_36616__$1 = cljs.core.get.call(null,inst_36614__$1,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480));
var inst_36617 = cljs.core.get.call(null,inst_36614__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var inst_36618 = cljs.core.get.call(null,inst_36614__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var inst_36619 = cljs.core.get.call(null,inst_36614__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var state_36661__$1 = (function (){var statearr_36695 = state_36661;
(statearr_36695[(20)] = inst_36617);

(statearr_36695[(12)] = inst_36616__$1);

(statearr_36695[(21)] = inst_36619);

(statearr_36695[(22)] = inst_36615);

(statearr_36695[(19)] = inst_36614__$1);

(statearr_36695[(23)] = inst_36618);

return statearr_36695;
})();
if(cljs.core.truth_(inst_36616__$1)){
var statearr_36696_36737 = state_36661__$1;
(statearr_36696_36737[(1)] = (15));

} else {
var statearr_36697_36738 = state_36661__$1;
(statearr_36697_36738[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (26))){
var inst_36624 = (state_36661[(16)]);
var inst_36628 = (state_36661[(24)]);
var inst_36617 = (state_36661[(20)]);
var inst_36588 = (state_36661[(17)]);
var inst_36592 = (state_36661[(18)]);
var inst_36619 = (state_36661[(21)]);
var inst_36630 = (state_36661[(7)]);
var inst_36615 = (state_36661[(22)]);
var inst_36614 = (state_36661[(19)]);
var inst_36618 = (state_36661[(23)]);
var inst_36629 = (state_36661[(8)]);
var inst_36589 = (state_36661[(15)]);
var inst_36646 = (function (){var vec__36582 = inst_36628;
var the_editor_type = inst_36624;
var map__36581 = inst_36614;
var eval_fn_with_args = inst_36589;
var idle_msec = inst_36615;
var loop_msec = inst_36617;
var load_error = inst_36630;
var async_code_QMARK_ = inst_36618;
var load_status = inst_36629;
var eval_args = inst_36588;
var source_code = inst_36592;
var preamble = inst_36619;
return ((function (vec__36582,the_editor_type,map__36581,eval_fn_with_args,idle_msec,loop_msec,load_error,async_code_QMARK_,load_status,eval_args,source_code,preamble,inst_36624,inst_36628,inst_36617,inst_36588,inst_36592,inst_36619,inst_36630,inst_36615,inst_36614,inst_36618,inst_36629,inst_36589,state_val_36662,c__21188__auto__,map__36576,map__36576__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__36577,map__36577__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (){
return cljs.core.async.chan.call(null);
});
;})(vec__36582,the_editor_type,map__36581,eval_fn_with_args,idle_msec,loop_msec,load_error,async_code_QMARK_,load_status,eval_args,source_code,preamble,inst_36624,inst_36628,inst_36617,inst_36588,inst_36592,inst_36619,inst_36630,inst_36615,inst_36614,inst_36618,inst_36629,inst_36589,state_val_36662,c__21188__auto__,map__36576,map__36576__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__36577,map__36577__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var state_36661__$1 = state_36661;
var statearr_36698_36739 = state_36661__$1;
(statearr_36698_36739[(2)] = inst_36646);

(statearr_36698_36739[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (16))){
var state_36661__$1 = state_36661;
var statearr_36699_36740 = state_36661__$1;
(statearr_36699_36740[(2)] = default_editor);

(statearr_36699_36740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (30))){
var inst_36624 = (state_36661[(16)]);
var inst_36617 = (state_36661[(20)]);
var inst_36636 = (state_36661[(13)]);
var inst_36592 = (state_36661[(18)]);
var inst_36642 = (state_36661[(10)]);
var inst_36619 = (state_36661[(21)]);
var inst_36631 = (state_36661[(25)]);
var inst_36648 = (state_36661[(9)]);
var inst_36641 = (state_36661[(11)]);
var inst_36615 = (state_36661[(22)]);
var inst_36618 = (state_36661[(23)]);
var inst_36653 = (state_36661[(2)]);
var inst_36654 = [inst_36636,inst_36641,inst_36615,inst_36617,element,editor_out_mode,inst_36618,mode,inst_36592,inst_36619,codemirror_options_out,editor_in_mode,inst_36642,inst_36648,no_result,codemirror_options_in,inst_36653];
var inst_36655 = cljs.core.PersistentHashMap.fromArrays(inst_36631,inst_36654);
var inst_36656 = klipse.klipse_editors.create_editor.call(null,inst_36624,inst_36655);
var state_36661__$1 = state_36661;
var statearr_36700_36741 = state_36661__$1;
(statearr_36700_36741[(2)] = inst_36656);

(statearr_36700_36741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (10))){
var state_36661__$1 = state_36661;
var statearr_36701_36742 = state_36661__$1;
(statearr_36701_36742[(2)] = false);

(statearr_36701_36742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (18))){
var inst_36628 = (state_36661[(24)]);
var inst_36629 = (state_36661[(8)]);
var inst_36628__$1 = (state_36661[(2)]);
var inst_36629__$1 = cljs.core.nth.call(null,inst_36628__$1,(0),null);
var inst_36630 = cljs.core.nth.call(null,inst_36628__$1,(1),null);
var inst_36631 = [new cljs.core.Keyword(null,"default-txt","default-txt",27736322),new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"source-code","source-code",-685884337),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"no-result","no-result",1702657437),new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441)];
var inst_36632 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_36629__$1);
var state_36661__$1 = (function (){var statearr_36702 = state_36661;
(statearr_36702[(24)] = inst_36628__$1);

(statearr_36702[(25)] = inst_36631);

(statearr_36702[(7)] = inst_36630);

(statearr_36702[(8)] = inst_36629__$1);

return statearr_36702;
})();
if(inst_36632){
var statearr_36703_36743 = state_36661__$1;
(statearr_36703_36743[(1)] = (19));

} else {
var statearr_36704_36744 = state_36661__$1;
(statearr_36704_36744[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36662 === (8))){
var inst_36609 = (state_36661[(2)]);
var state_36661__$1 = state_36661;
if(cljs.core.truth_(inst_36609)){
var statearr_36705_36745 = state_36661__$1;
(statearr_36705_36745[(1)] = (12));

} else {
var statearr_36706_36746 = state_36661__$1;
(statearr_36706_36746[(1)] = (13));

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
});})(c__21188__auto__,map__36576,map__36576__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__36577,map__36577__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
;
return ((function (switch__21021__auto__,c__21188__auto__,map__36576,map__36576__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__36577,map__36577__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function() {
var klipse$plugin$klipsify_with_opts_$_state_machine__21022__auto__ = null;
var klipse$plugin$klipsify_with_opts_$_state_machine__21022__auto____0 = (function (){
var statearr_36707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36707[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__21022__auto__);

(statearr_36707[(1)] = (1));

return statearr_36707;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__21022__auto____1 = (function (state_36661){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_36661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e36708){if((e36708 instanceof Object)){
var ex__21025__auto__ = e36708;
var statearr_36709_36747 = state_36661;
(statearr_36709_36747[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36748 = state_36661;
state_36661 = G__36748;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__21022__auto__ = function(state_36661){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__21022__auto____1.call(this,state_36661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_with_opts_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__21022__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__21022__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,map__36576,map__36576__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__36577,map__36577__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var state__21190__auto__ = (function (){var statearr_36710 = f__21189__auto__.call(null);
(statearr_36710[(6)] = c__21188__auto__);

return statearr_36710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,map__36576,map__36576__$1,no_dynamic_scripts,codemirror_options_in,eval_idle_msec,codemirror_options_out,print_length,editor_type,minimalistic_ui,beautify_strings,eval_context,map__36577,map__36577__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
);

return c__21188__auto__;
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Symbol("goog.dom","isElement","goog.dom/isElement",-1707224949,null),goog.dom.isElement);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"str","str",1089608819)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.string_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),true),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),false))),(function (p1__36749_SHARP_){
return ((cljs.core._EQ_.call(null,p1__36749_SHARP_,true)) || (cljs.core._EQ_.call(null,p1__36749_SHARP_,false)));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36750){
return cljs.core.map_QMARK_.call(null,G__36750);
}),(function (G__36750){
return cljs.core.contains_QMARK_.call(null,G__36750,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
}),(function (G__36750){
return cljs.core.contains_QMARK_.call(null,G__36750,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
}),(function (G__36750){
return cljs.core.contains_QMARK_.call(null,G__36750,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
}),(function (G__36750){
return cljs.core.contains_QMARK_.call(null,G__36750,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
})], null),(function (G__36750){
return ((cljs.core.map_QMARK_.call(null,G__36750)) && (cljs.core.contains_QMARK_.call(null,G__36750,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))) && (cljs.core.contains_QMARK_.call(null,G__36750,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))) && (cljs.core.contains_QMARK_.call(null,G__36750,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))) && (cljs.core.contains_QMARK_.call(null,G__36750,new cljs.core.Keyword(null,"comment-str","comment-str",130143853))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36751){
return cljs.core.map_QMARK_.call(null,G__36751);
})], null),(function (G__36751){
return cljs.core.map_QMARK_.call(null,G__36751);
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
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,opts,temp__5718__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,opts,temp__5718__auto__){
return (function (state_36759){
var state_val_36760 = (state_36759[(1)]);
if((state_val_36760 === (1))){
var inst_36752 = klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts,mode);
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36759__$1,(3),inst_36752);
} else {
if((state_val_36760 === (2))){
var inst_36757 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36759__$1,inst_36757);
} else {
if((state_val_36760 === (3))){
var inst_36754 = (state_36759[(2)]);
var inst_36755 = inst_36754.call(null);
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36759__$1,(2),inst_36755);
} else {
return null;
}
}
}
});})(c__21188__auto__,opts,temp__5718__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__,opts,temp__5718__auto__){
return (function() {
var klipse$plugin$klipsify_$_state_machine__21022__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__21022__auto____0 = (function (){
var statearr_36761 = [null,null,null,null,null,null,null];
(statearr_36761[(0)] = klipse$plugin$klipsify_$_state_machine__21022__auto__);

(statearr_36761[(1)] = (1));

return statearr_36761;
});
var klipse$plugin$klipsify_$_state_machine__21022__auto____1 = (function (state_36759){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_36759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e36762){if((e36762 instanceof Object)){
var ex__21025__auto__ = e36762;
var statearr_36763_36775 = state_36759;
(statearr_36763_36775[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36776 = state_36759;
state_36759 = G__36776;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__21022__auto__ = function(state_36759){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__21022__auto____1.call(this,state_36759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__21022__auto____0;
klipse$plugin$klipsify_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__21022__auto____1;
return klipse$plugin$klipsify_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,opts,temp__5718__auto__))
})();
var state__21190__auto__ = (function (){var statearr_36764 = f__21189__auto__.call(null);
(statearr_36764[(6)] = c__21188__auto__);

return statearr_36764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,opts,temp__5718__auto__))
);

return c__21188__auto__;
} else {
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,temp__5718__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,temp__5718__auto__){
return (function (state_36769){
var state_val_36770 = (state_36769[(1)]);
if((state_val_36770 === (1))){
var inst_36765 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_36766 = cljs.core.keys.call(null,inst_36765);
var inst_36767 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_36766);
var state_36769__$1 = state_36769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36769__$1,inst_36767);
} else {
return null;
}
});})(c__21188__auto__,temp__5718__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__,temp__5718__auto__){
return (function() {
var klipse$plugin$klipsify_$_state_machine__21022__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__21022__auto____0 = (function (){
var statearr_36771 = [null,null,null,null,null,null,null];
(statearr_36771[(0)] = klipse$plugin$klipsify_$_state_machine__21022__auto__);

(statearr_36771[(1)] = (1));

return statearr_36771;
});
var klipse$plugin$klipsify_$_state_machine__21022__auto____1 = (function (state_36769){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_36769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e36772){if((e36772 instanceof Object)){
var ex__21025__auto__ = e36772;
var statearr_36773_36777 = state_36769;
(statearr_36773_36777[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36778 = state_36769;
state_36769 = G__36778;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__21022__auto__ = function(state_36769){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__21022__auto____1.call(this,state_36769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__21022__auto____0;
klipse$plugin$klipsify_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__21022__auto____1;
return klipse$plugin$klipsify_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,temp__5718__auto__))
})();
var state__21190__auto__ = (function (){var statearr_36774 = f__21189__auto__.call(null);
(statearr_36774[(6)] = c__21188__auto__);

return statearr_36774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,temp__5718__auto__))
);

return c__21188__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify', klipse.plugin.klipsify);
klipse.plugin.klipsify_no_eval = (function klipse$plugin$klipsify_no_eval(element,general_settings,mode){
var temp__5718__auto__ = cljs.core.deref.call(null,klipse.common.registry.mode_options).call(null,mode);
if(cljs.core.truth_(temp__5718__auto__)){
var opts = temp__5718__auto__;
return klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts,mode);
} else {
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,temp__5718__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,temp__5718__auto__){
return (function (state_36781){
var state_val_36782 = (state_36781[(1)]);
if((state_val_36782 === (1))){
var inst_36779 = (function (){return ((function (state_val_36782,c__21188__auto__,temp__5718__auto__){
return (function (){
var c__21188__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto____$1,state_val_36782,c__21188__auto__,temp__5718__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto____$1,state_val_36782,c__21188__auto__,temp__5718__auto__){
return (function (state_36787){
var state_val_36788 = (state_36787[(1)]);
if((state_val_36788 === (1))){
var inst_36783 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_36784 = cljs.core.keys.call(null,inst_36783);
var inst_36785 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_36784);
var state_36787__$1 = state_36787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36787__$1,inst_36785);
} else {
return null;
}
});})(c__21188__auto____$1,state_val_36782,c__21188__auto__,temp__5718__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto____$1,state_val_36782,c__21188__auto__,temp__5718__auto__){
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto____0 = (function (){
var statearr_36789 = [null,null,null,null,null,null,null];
(statearr_36789[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto__);

(statearr_36789[(1)] = (1));

return statearr_36789;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto____1 = (function (state_36787){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_36787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e36790){if((e36790 instanceof Object)){
var ex__21025__auto__ = e36790;
var statearr_36791_36797 = state_36787;
(statearr_36791_36797[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36798 = state_36787;
state_36787 = G__36798;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto__ = function(state_36787){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto____1.call(this,state_36787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto____$1,state_val_36782,c__21188__auto__,temp__5718__auto__))
})();
var state__21190__auto__ = (function (){var statearr_36792 = f__21189__auto__.call(null);
(statearr_36792[(6)] = c__21188__auto____$1);

return statearr_36792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto____$1,state_val_36782,c__21188__auto__,temp__5718__auto__))
);

return c__21188__auto____$1;
});
;})(state_val_36782,c__21188__auto__,temp__5718__auto__))
})();
var state_36781__$1 = state_36781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36781__$1,inst_36779);
} else {
return null;
}
});})(c__21188__auto__,temp__5718__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__,temp__5718__auto__){
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto____0 = (function (){
var statearr_36793 = [null,null,null,null,null,null,null];
(statearr_36793[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto__);

(statearr_36793[(1)] = (1));

return statearr_36793;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto____1 = (function (state_36781){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_36781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e36794){if((e36794 instanceof Object)){
var ex__21025__auto__ = e36794;
var statearr_36795_36799 = state_36781;
(statearr_36795_36799[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36800 = state_36781;
state_36781 = G__36800;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto__ = function(state_36781){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto____1.call(this,state_36781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,temp__5718__auto__))
})();
var state__21190__auto__ = (function (){var statearr_36796 = f__21189__auto__.call(null);
(statearr_36796[(6)] = c__21188__auto__);

return statearr_36796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,temp__5718__auto__))
);

return c__21188__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify_no_eval', klipse.plugin.klipsify_no_eval);
klipse.plugin.edit_elements = (function klipse$plugin$edit_elements(elements,general_settings,modes){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_36827){
var state_val_36828 = (state_36827[(1)]);
if((state_val_36828 === (7))){
var inst_36807 = (state_36827[(7)]);
var inst_36808 = (state_36827[(8)]);
var inst_36810 = klipse.plugin.klipsify_no_eval.call(null,inst_36807,general_settings,inst_36808);
var state_36827__$1 = state_36827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36827__$1,(10),inst_36810);
} else {
if((state_val_36828 === (1))){
var inst_36801 = cljs.core.PersistentVector.EMPTY;
var inst_36802 = elements;
var inst_36803 = inst_36801;
var state_36827__$1 = (function (){var statearr_36829 = state_36827;
(statearr_36829[(9)] = inst_36802);

(statearr_36829[(10)] = inst_36803);

return statearr_36829;
})();
var statearr_36830_36848 = state_36827__$1;
(statearr_36830_36848[(2)] = null);

(statearr_36830_36848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (4))){
var inst_36802 = (state_36827[(9)]);
var inst_36807 = (state_36827[(7)]);
var inst_36808 = (state_36827[(8)]);
var inst_36807__$1 = cljs.core.first.call(null,inst_36802);
var inst_36808__$1 = modes.call(null,inst_36807__$1);
var state_36827__$1 = (function (){var statearr_36831 = state_36827;
(statearr_36831[(7)] = inst_36807__$1);

(statearr_36831[(8)] = inst_36808__$1);

return statearr_36831;
})();
if(cljs.core.truth_(inst_36808__$1)){
var statearr_36832_36849 = state_36827__$1;
(statearr_36832_36849[(1)] = (7));

} else {
var statearr_36833_36850 = state_36827__$1;
(statearr_36833_36850[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (6))){
var inst_36823 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36834_36851 = state_36827__$1;
(statearr_36834_36851[(2)] = inst_36823);

(statearr_36834_36851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (3))){
var inst_36825 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36827__$1,inst_36825);
} else {
if((state_val_36828 === (2))){
var inst_36802 = (state_36827[(9)]);
var inst_36805 = cljs.core.seq.call(null,inst_36802);
var state_36827__$1 = state_36827;
if(inst_36805){
var statearr_36835_36852 = state_36827__$1;
(statearr_36835_36852[(1)] = (4));

} else {
var statearr_36836_36853 = state_36827__$1;
(statearr_36836_36853[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (9))){
var inst_36820 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36837_36854 = state_36827__$1;
(statearr_36837_36854[(2)] = inst_36820);

(statearr_36837_36854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (5))){
var inst_36803 = (state_36827[(10)]);
var state_36827__$1 = state_36827;
var statearr_36839_36855 = state_36827__$1;
(statearr_36839_36855[(2)] = inst_36803);

(statearr_36839_36855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (10))){
var inst_36802 = (state_36827[(9)]);
var inst_36803 = (state_36827[(10)]);
var inst_36812 = (state_36827[(2)]);
var inst_36813 = cljs.core.rest.call(null,inst_36802);
var inst_36814 = cljs.core.conj.call(null,inst_36803,inst_36812);
var inst_36802__$1 = inst_36813;
var inst_36803__$1 = inst_36814;
var state_36827__$1 = (function (){var statearr_36840 = state_36827;
(statearr_36840[(9)] = inst_36802__$1);

(statearr_36840[(10)] = inst_36803__$1);

return statearr_36840;
})();
var statearr_36841_36856 = state_36827__$1;
(statearr_36841_36856[(2)] = null);

(statearr_36841_36856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (8))){
var inst_36802 = (state_36827[(9)]);
var inst_36803 = (state_36827[(10)]);
var inst_36817 = cljs.core.rest.call(null,inst_36802);
var tmp36838 = inst_36803;
var inst_36802__$1 = inst_36817;
var inst_36803__$1 = tmp36838;
var state_36827__$1 = (function (){var statearr_36842 = state_36827;
(statearr_36842[(9)] = inst_36802__$1);

(statearr_36842[(10)] = inst_36803__$1);

return statearr_36842;
})();
var statearr_36843_36857 = state_36827__$1;
(statearr_36843_36857[(2)] = null);

(statearr_36843_36857[(1)] = (2));


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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$plugin$edit_elements_$_state_machine__21022__auto__ = null;
var klipse$plugin$edit_elements_$_state_machine__21022__auto____0 = (function (){
var statearr_36844 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36844[(0)] = klipse$plugin$edit_elements_$_state_machine__21022__auto__);

(statearr_36844[(1)] = (1));

return statearr_36844;
});
var klipse$plugin$edit_elements_$_state_machine__21022__auto____1 = (function (state_36827){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_36827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e36845){if((e36845 instanceof Object)){
var ex__21025__auto__ = e36845;
var statearr_36846_36858 = state_36827;
(statearr_36846_36858[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36859 = state_36827;
state_36827 = G__36859;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$plugin$edit_elements_$_state_machine__21022__auto__ = function(state_36827){
switch(arguments.length){
case 0:
return klipse$plugin$edit_elements_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$plugin$edit_elements_$_state_machine__21022__auto____1.call(this,state_36827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$edit_elements_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$edit_elements_$_state_machine__21022__auto____0;
klipse$plugin$edit_elements_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$edit_elements_$_state_machine__21022__auto____1;
return klipse$plugin$edit_elements_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_36847 = f__21189__auto__.call(null);
(statearr_36847[(6)] = c__21188__auto__);

return statearr_36847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.plugin.klipsify_elements = (function klipse$plugin$klipsify_elements(elements,general_settings,modes){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_36908){
var state_val_36909 = (state_36908[(1)]);
if((state_val_36909 === (7))){
var inst_36904 = (state_36908[(2)]);
var state_36908__$1 = state_36908;
var statearr_36910_36936 = state_36908__$1;
(statearr_36910_36936[(2)] = inst_36904);

(statearr_36910_36936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36909 === (1))){
var inst_36860 = klipse.plugin.edit_elements.call(null,elements,general_settings,modes);
var state_36908__$1 = state_36908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36908__$1,(2),inst_36860);
} else {
if((state_val_36909 === (4))){
var inst_36906 = (state_36908[(2)]);
var state_36908__$1 = state_36908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36908__$1,inst_36906);
} else {
if((state_val_36909 === (15))){
var inst_36883 = (state_36908[(7)]);
var inst_36895 = (state_36908[(2)]);
var inst_36896 = cljs.core.next.call(null,inst_36883);
var inst_36868 = inst_36896;
var inst_36869 = null;
var inst_36870 = (0);
var inst_36871 = (0);
var state_36908__$1 = (function (){var statearr_36911 = state_36908;
(statearr_36911[(8)] = inst_36869);

(statearr_36911[(9)] = inst_36895);

(statearr_36911[(10)] = inst_36871);

(statearr_36911[(11)] = inst_36868);

(statearr_36911[(12)] = inst_36870);

return statearr_36911;
})();
var statearr_36912_36937 = state_36908__$1;
(statearr_36912_36937[(2)] = null);

(statearr_36912_36937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36909 === (13))){
var inst_36883 = (state_36908[(7)]);
var inst_36892 = cljs.core.first.call(null,inst_36883);
var inst_36893 = inst_36892.call(null);
var state_36908__$1 = state_36908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36908__$1,(15),inst_36893);
} else {
if((state_val_36909 === (6))){
var inst_36883 = (state_36908[(7)]);
var inst_36868 = (state_36908[(11)]);
var inst_36883__$1 = cljs.core.seq.call(null,inst_36868);
var state_36908__$1 = (function (){var statearr_36913 = state_36908;
(statearr_36913[(7)] = inst_36883__$1);

return statearr_36913;
})();
if(inst_36883__$1){
var statearr_36914_36938 = state_36908__$1;
(statearr_36914_36938[(1)] = (9));

} else {
var statearr_36915_36939 = state_36908__$1;
(statearr_36915_36939[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36909 === (3))){
var inst_36871 = (state_36908[(10)]);
var inst_36870 = (state_36908[(12)]);
var inst_36873 = (inst_36871 < inst_36870);
var inst_36874 = inst_36873;
var state_36908__$1 = state_36908;
if(cljs.core.truth_(inst_36874)){
var statearr_36916_36940 = state_36908__$1;
(statearr_36916_36940[(1)] = (5));

} else {
var statearr_36917_36941 = state_36908__$1;
(statearr_36917_36941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36909 === (12))){
var inst_36883 = (state_36908[(7)]);
var inst_36887 = cljs.core.chunk_first.call(null,inst_36883);
var inst_36888 = cljs.core.chunk_rest.call(null,inst_36883);
var inst_36889 = cljs.core.count.call(null,inst_36887);
var inst_36868 = inst_36888;
var inst_36869 = inst_36887;
var inst_36870 = inst_36889;
var inst_36871 = (0);
var state_36908__$1 = (function (){var statearr_36918 = state_36908;
(statearr_36918[(8)] = inst_36869);

(statearr_36918[(10)] = inst_36871);

(statearr_36918[(11)] = inst_36868);

(statearr_36918[(12)] = inst_36870);

return statearr_36918;
})();
var statearr_36919_36942 = state_36908__$1;
(statearr_36919_36942[(2)] = null);

(statearr_36919_36942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36909 === (2))){
var inst_36862 = (state_36908[(2)]);
var inst_36867 = cljs.core.seq.call(null,inst_36862);
var inst_36868 = inst_36867;
var inst_36869 = null;
var inst_36870 = (0);
var inst_36871 = (0);
var state_36908__$1 = (function (){var statearr_36920 = state_36908;
(statearr_36920[(8)] = inst_36869);

(statearr_36920[(10)] = inst_36871);

(statearr_36920[(11)] = inst_36868);

(statearr_36920[(12)] = inst_36870);

return statearr_36920;
})();
var statearr_36921_36943 = state_36908__$1;
(statearr_36921_36943[(2)] = null);

(statearr_36921_36943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36909 === (11))){
var inst_36902 = (state_36908[(2)]);
var state_36908__$1 = state_36908;
var statearr_36922_36944 = state_36908__$1;
(statearr_36922_36944[(2)] = inst_36902);

(statearr_36922_36944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36909 === (9))){
var inst_36883 = (state_36908[(7)]);
var inst_36885 = cljs.core.chunked_seq_QMARK_.call(null,inst_36883);
var state_36908__$1 = state_36908;
if(inst_36885){
var statearr_36923_36945 = state_36908__$1;
(statearr_36923_36945[(1)] = (12));

} else {
var statearr_36924_36946 = state_36908__$1;
(statearr_36924_36946[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36909 === (5))){
var inst_36869 = (state_36908[(8)]);
var inst_36871 = (state_36908[(10)]);
var inst_36876 = cljs.core._nth.call(null,inst_36869,inst_36871);
var inst_36877 = inst_36876.call(null);
var state_36908__$1 = state_36908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36908__$1,(8),inst_36877);
} else {
if((state_val_36909 === (14))){
var inst_36899 = (state_36908[(2)]);
var state_36908__$1 = state_36908;
var statearr_36928_36947 = state_36908__$1;
(statearr_36928_36947[(2)] = inst_36899);

(statearr_36928_36947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36909 === (10))){
var state_36908__$1 = state_36908;
var statearr_36929_36948 = state_36908__$1;
(statearr_36929_36948[(2)] = null);

(statearr_36929_36948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36909 === (8))){
var inst_36869 = (state_36908[(8)]);
var inst_36871 = (state_36908[(10)]);
var inst_36868 = (state_36908[(11)]);
var inst_36870 = (state_36908[(12)]);
var inst_36879 = (state_36908[(2)]);
var inst_36880 = (inst_36871 + (1));
var tmp36925 = inst_36869;
var tmp36926 = inst_36868;
var tmp36927 = inst_36870;
var inst_36868__$1 = tmp36926;
var inst_36869__$1 = tmp36925;
var inst_36870__$1 = tmp36927;
var inst_36871__$1 = inst_36880;
var state_36908__$1 = (function (){var statearr_36930 = state_36908;
(statearr_36930[(8)] = inst_36869__$1);

(statearr_36930[(13)] = inst_36879);

(statearr_36930[(10)] = inst_36871__$1);

(statearr_36930[(11)] = inst_36868__$1);

(statearr_36930[(12)] = inst_36870__$1);

return statearr_36930;
})();
var statearr_36931_36949 = state_36908__$1;
(statearr_36931_36949[(2)] = null);

(statearr_36931_36949[(1)] = (3));


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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$plugin$klipsify_elements_$_state_machine__21022__auto__ = null;
var klipse$plugin$klipsify_elements_$_state_machine__21022__auto____0 = (function (){
var statearr_36932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36932[(0)] = klipse$plugin$klipsify_elements_$_state_machine__21022__auto__);

(statearr_36932[(1)] = (1));

return statearr_36932;
});
var klipse$plugin$klipsify_elements_$_state_machine__21022__auto____1 = (function (state_36908){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_36908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e36933){if((e36933 instanceof Object)){
var ex__21025__auto__ = e36933;
var statearr_36934_36950 = state_36908;
(statearr_36934_36950[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36951 = state_36908;
state_36908 = G__36951;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__21022__auto__ = function(state_36908){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__21022__auto____1.call(this,state_36908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_elements_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__21022__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__21022__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_36935 = f__21189__auto__.call(null);
(statearr_36935[(6)] = c__21188__auto__);

return statearr_36935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.plugin.snippets_selector = (function klipse$plugin$snippets_selector(settings,selector_names){
return clojure.string.join.call(null,",",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,settings,selector_names)));
});
klipse.plugin.seq_from_selector = (function klipse$plugin$seq_from_selector(selector){
return cljs.core.array_seq.call(null,document.querySelectorAll(selector));
});
klipse.plugin.elements__GT_mode = (function klipse$plugin$elements__GT_mode(settings){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function klipse$plugin$elements__GT_mode_$_iter__36952(s__36953){
return (new cljs.core.LazySeq(null,(function (){
var s__36953__$1 = s__36953;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36953__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var selector_name = cljs.core.first.call(null,xs__6277__auto__);
var selector = settings.call(null,selector_name);
if(cljs.core.truth_(selector)){
var iterys__4519__auto__ = ((function (s__36953__$1,selector,selector_name,xs__6277__auto__,temp__5720__auto__){
return (function klipse$plugin$elements__GT_mode_$_iter__36952_$_iter__36954(s__36955){
return (new cljs.core.LazySeq(null,((function (s__36953__$1,selector,selector_name,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__36955__$1 = s__36955;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__36955__$1);
if(temp__5720__auto____$1){
var s__36955__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36955__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__36955__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__36957 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__36956 = (0);
while(true){
if((i__36956 < size__4522__auto__)){
var element = cljs.core._nth.call(null,c__4521__auto__,i__36956);
cljs.core.chunk_append.call(null,b__36957,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null));

var G__36958 = (i__36956 + (1));
i__36956 = G__36958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36957),klipse$plugin$elements__GT_mode_$_iter__36952_$_iter__36954.call(null,cljs.core.chunk_rest.call(null,s__36955__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36957),null);
}
} else {
var element = cljs.core.first.call(null,s__36955__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null),klipse$plugin$elements__GT_mode_$_iter__36952_$_iter__36954.call(null,cljs.core.rest.call(null,s__36955__$2)));
}
} else {
return null;
}
break;
}
});})(s__36953__$1,selector,selector_name,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__36953__$1,selector,selector_name,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,klipse.plugin.seq_from_selector.call(null,selector)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,klipse$plugin$elements__GT_mode_$_iter__36952.call(null,cljs.core.rest.call(null,s__36953__$1)));
} else {
var G__36959 = cljs.core.rest.call(null,s__36953__$1);
s__36953__$1 = G__36959;
continue;
}
} else {
var G__36960 = cljs.core.rest.call(null,s__36953__$1);
s__36953__$1 = G__36960;
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
var map__36961 = clojure.walk.keywordize_keys.call(null,settings);
var map__36961__$1 = (((((!((map__36961 == null))))?(((((map__36961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36961):map__36961);
var keywordized_settings = map__36961__$1;
var secured_eval = cljs.core.get.call(null,map__36961__$1,new cljs.core.Keyword(null,"secured_eval","secured_eval",-1577487888));
var security_forbidden_symbols = cljs.core.get.call(null,map__36961__$1,new cljs.core.Keyword(null,"security_forbidden_symbols","security_forbidden_symbols",-1480402500),klipse.utils.default_forbidden_symbols.call(null));
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
