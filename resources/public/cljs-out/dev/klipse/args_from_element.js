// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.args_from_element');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('gadjett.collections');
klipse.args_from_element.read_string_or_val = (function klipse$args_from_element$read_string_or_val(value,not_found){
if(cljs.core.truth_(value)){
return cljs.reader.read_string.call(null,value);
} else {
return not_found;
}
});
klipse.args_from_element.string__GT_array = (function klipse$args_from_element$string__GT_array(s){
if(cljs.core.truth_(s)){
return cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,s,","));
} else {
return null;
}
});
klipse.args_from_element.comment_out = (function klipse$args_from_element$comment_out(src,comment_str){
if(typeof comment_str === 'string'){
return [comment_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)].join('');
} else {
return comment_str.call(null,src);
}
});
klipse.args_from_element.content_from_gist = (function klipse$args_from_element$content_from_gist(element,comment_str){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_23503){
var state_val_23504 = (state_23503[(1)]);
if((state_val_23504 === (1))){
var inst_23486 = (state_23503[(7)]);
var inst_23485 = (element["dataset"]);
var inst_23486__$1 = (inst_23485["gistId"]);
var state_23503__$1 = (function (){var statearr_23505 = state_23503;
(statearr_23505[(7)] = inst_23486__$1);

return statearr_23505;
})();
if(cljs.core.truth_(inst_23486__$1)){
var statearr_23506_23519 = state_23503__$1;
(statearr_23506_23519[(1)] = (2));

} else {
var statearr_23507_23520 = state_23503__$1;
(statearr_23507_23520[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (2))){
var inst_23486 = (state_23503[(7)]);
var state_23503__$1 = state_23503;
var statearr_23508_23521 = state_23503__$1;
(statearr_23508_23521[(2)] = inst_23486);

(statearr_23508_23521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (3))){
var state_23503__$1 = state_23503;
var statearr_23509_23522 = state_23503__$1;
(statearr_23509_23522[(2)] = null);

(statearr_23509_23522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (4))){
var inst_23490 = (state_23503[(8)]);
var inst_23490__$1 = (state_23503[(2)]);
var state_23503__$1 = (function (){var statearr_23510 = state_23503;
(statearr_23510[(8)] = inst_23490__$1);

return statearr_23510;
})();
if(cljs.core.truth_(inst_23490__$1)){
var statearr_23511_23523 = state_23503__$1;
(statearr_23511_23523[(1)] = (5));

} else {
var statearr_23512_23524 = state_23503__$1;
(statearr_23512_23524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (5))){
var inst_23490 = (state_23503[(8)]);
var inst_23492 = klipse.utils.read_input_from_gist.call(null,inst_23490);
var state_23503__$1 = state_23503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23503__$1,(8),inst_23492);
} else {
if((state_val_23504 === (6))){
var state_23503__$1 = state_23503;
var statearr_23513_23525 = state_23503__$1;
(statearr_23513_23525[(2)] = null);

(statearr_23513_23525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (7))){
var inst_23501 = (state_23503[(2)]);
var state_23503__$1 = state_23503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23503__$1,inst_23501);
} else {
if((state_val_23504 === (8))){
var inst_23490 = (state_23503[(8)]);
var inst_23494 = (state_23503[(2)]);
var inst_23495 = klipse.utils.gist_path_page.call(null,inst_23490);
var inst_23496 = ["loaded from gist: ",inst_23495].join('');
var inst_23497 = klipse.args_from_element.comment_out.call(null,inst_23496,comment_str);
var inst_23498 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23497),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23494)].join('');
var state_23503__$1 = state_23503;
var statearr_23514_23526 = state_23503__$1;
(statearr_23514_23526[(2)] = inst_23498);

(statearr_23514_23526[(1)] = (7));


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
var klipse$args_from_element$content_from_gist_$_state_machine__15944__auto__ = null;
var klipse$args_from_element$content_from_gist_$_state_machine__15944__auto____0 = (function (){
var statearr_23515 = [null,null,null,null,null,null,null,null,null];
(statearr_23515[(0)] = klipse$args_from_element$content_from_gist_$_state_machine__15944__auto__);

(statearr_23515[(1)] = (1));

return statearr_23515;
});
var klipse$args_from_element$content_from_gist_$_state_machine__15944__auto____1 = (function (state_23503){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_23503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e23516){if((e23516 instanceof Object)){
var ex__15947__auto__ = e23516;
var statearr_23517_23527 = state_23503;
(statearr_23517_23527[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23528 = state_23503;
state_23503 = G__23528;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$args_from_element$content_from_gist_$_state_machine__15944__auto__ = function(state_23503){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_from_gist_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$args_from_element$content_from_gist_$_state_machine__15944__auto____1.call(this,state_23503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$args_from_element$content_from_gist_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_from_gist_$_state_machine__15944__auto____0;
klipse$args_from_element$content_from_gist_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_from_gist_$_state_machine__15944__auto____1;
return klipse$args_from_element$content_from_gist_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_23518 = f__16039__auto__.call(null);
(statearr_23518[(6)] = c__16038__auto__);

return statearr_23518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.args_from_element.content = (function klipse$args_from_element$content(element,comment_str){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_23538){
var state_val_23539 = (state_23538[(1)]);
if((state_val_23539 === (1))){
var inst_23529 = klipse.args_from_element.content_from_gist.call(null,element,comment_str);
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23538__$1,(2),inst_23529);
} else {
if((state_val_23539 === (2))){
var inst_23531 = (state_23538[(7)]);
var inst_23531__$1 = (state_23538[(2)]);
var state_23538__$1 = (function (){var statearr_23540 = state_23538;
(statearr_23540[(7)] = inst_23531__$1);

return statearr_23540;
})();
if(cljs.core.truth_(inst_23531__$1)){
var statearr_23541_23549 = state_23538__$1;
(statearr_23541_23549[(1)] = (3));

} else {
var statearr_23542_23550 = state_23538__$1;
(statearr_23542_23550[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (3))){
var inst_23531 = (state_23538[(7)]);
var state_23538__$1 = state_23538;
var statearr_23543_23551 = state_23538__$1;
(statearr_23543_23551[(2)] = inst_23531);

(statearr_23543_23551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (4))){
var inst_23534 = (element["textContent"]);
var state_23538__$1 = state_23538;
var statearr_23544_23552 = state_23538__$1;
(statearr_23544_23552[(2)] = inst_23534);

(statearr_23544_23552[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (5))){
var inst_23536 = (state_23538[(2)]);
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23538__$1,inst_23536);
} else {
return null;
}
}
}
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$args_from_element$content_$_state_machine__15944__auto__ = null;
var klipse$args_from_element$content_$_state_machine__15944__auto____0 = (function (){
var statearr_23545 = [null,null,null,null,null,null,null,null];
(statearr_23545[(0)] = klipse$args_from_element$content_$_state_machine__15944__auto__);

(statearr_23545[(1)] = (1));

return statearr_23545;
});
var klipse$args_from_element$content_$_state_machine__15944__auto____1 = (function (state_23538){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_23538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e23546){if((e23546 instanceof Object)){
var ex__15947__auto__ = e23546;
var statearr_23547_23553 = state_23538;
(statearr_23547_23553[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23554 = state_23538;
state_23538 = G__23554;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$args_from_element$content_$_state_machine__15944__auto__ = function(state_23538){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$args_from_element$content_$_state_machine__15944__auto____1.call(this,state_23538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$args_from_element$content_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_$_state_machine__15944__auto____0;
klipse$args_from_element$content_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_$_state_machine__15944__auto____1;
return klipse$args_from_element$content_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_23548 = f__16039__auto__.call(null);
(statearr_23548[(6)] = c__16038__auto__);

return statearr_23548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.args_from_element.eval_args_from_element = (function klipse$args_from_element$eval_args_from_element(element,p__23555){
var map__23556 = p__23555;
var map__23556__$1 = (((((!((map__23556 == null))))?(((((map__23556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23556):map__23556);
var print_length = cljs.core.get.call(null,map__23556__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__23556__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var eval_context = cljs.core.get.call(null,map__23556__$1,new cljs.core.Keyword(null,"eval-context","eval-context",536255614));
var my_dataset = (element["dataset"]);
var static_fns = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["staticFns"]),false);
var async_code_QMARK_ = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["asyncCode"]),false);
var verbose = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["verbose"]),false);
var compile_display_guard = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["compileDisplayGuard"]),false);
var eval_context__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["evalContext"]),eval_context);
var max_eval_duration = (my_dataset["maxEvalDuration"]);
var print_length__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["printLength"]),print_length);
var beautify_strings__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["beautifyStrings"]),beautify_strings);
var external_libs = klipse.args_from_element.string__GT_array.call(null,(function (){var or__4131__auto__ = (my_dataset["externalLibs"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return null;
}
})());
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"verbose","verbose",1694226060),new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010)],[external_libs,static_fns,beautify_strings__$1,async_code_QMARK_,verbose,compile_display_guard,print_length__$1,eval_context__$1,max_eval_duration]);
});
klipse.args_from_element.editor_args_from_element = (function klipse$args_from_element$editor_args_from_element(element){
var my_dataset = (element["dataset"]);
var editor_type = (my_dataset["editorType"]);
var loop_msec = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["loopMsec"]),null);
var preamble = (function (){var or__4131__auto__ = (my_dataset["preamble"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})();
var idle_msec = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["evalIdleMsec"]),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),editor_type], null));
});

//# sourceMappingURL=args_from_element.js.map
