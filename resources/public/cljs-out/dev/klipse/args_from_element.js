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
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_35364){
var state_val_35365 = (state_35364[(1)]);
if((state_val_35365 === (1))){
var inst_35347 = (state_35364[(7)]);
var inst_35346 = (element["dataset"]);
var inst_35347__$1 = (inst_35346["gistId"]);
var state_35364__$1 = (function (){var statearr_35366 = state_35364;
(statearr_35366[(7)] = inst_35347__$1);

return statearr_35366;
})();
if(cljs.core.truth_(inst_35347__$1)){
var statearr_35367_35380 = state_35364__$1;
(statearr_35367_35380[(1)] = (2));

} else {
var statearr_35368_35381 = state_35364__$1;
(statearr_35368_35381[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (2))){
var inst_35347 = (state_35364[(7)]);
var state_35364__$1 = state_35364;
var statearr_35369_35382 = state_35364__$1;
(statearr_35369_35382[(2)] = inst_35347);

(statearr_35369_35382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (3))){
var state_35364__$1 = state_35364;
var statearr_35370_35383 = state_35364__$1;
(statearr_35370_35383[(2)] = null);

(statearr_35370_35383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (4))){
var inst_35351 = (state_35364[(8)]);
var inst_35351__$1 = (state_35364[(2)]);
var state_35364__$1 = (function (){var statearr_35371 = state_35364;
(statearr_35371[(8)] = inst_35351__$1);

return statearr_35371;
})();
if(cljs.core.truth_(inst_35351__$1)){
var statearr_35372_35384 = state_35364__$1;
(statearr_35372_35384[(1)] = (5));

} else {
var statearr_35373_35385 = state_35364__$1;
(statearr_35373_35385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (5))){
var inst_35351 = (state_35364[(8)]);
var inst_35353 = klipse.utils.read_input_from_gist.call(null,inst_35351);
var state_35364__$1 = state_35364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35364__$1,(8),inst_35353);
} else {
if((state_val_35365 === (6))){
var state_35364__$1 = state_35364;
var statearr_35374_35386 = state_35364__$1;
(statearr_35374_35386[(2)] = null);

(statearr_35374_35386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (7))){
var inst_35362 = (state_35364[(2)]);
var state_35364__$1 = state_35364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35364__$1,inst_35362);
} else {
if((state_val_35365 === (8))){
var inst_35351 = (state_35364[(8)]);
var inst_35355 = (state_35364[(2)]);
var inst_35356 = klipse.utils.gist_path_page.call(null,inst_35351);
var inst_35357 = ["loaded from gist: ",inst_35356].join('');
var inst_35358 = klipse.args_from_element.comment_out.call(null,inst_35357,comment_str);
var inst_35359 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35358),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35355)].join('');
var state_35364__$1 = state_35364;
var statearr_35375_35387 = state_35364__$1;
(statearr_35375_35387[(2)] = inst_35359);

(statearr_35375_35387[(1)] = (7));


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
var klipse$args_from_element$content_from_gist_$_state_machine__21022__auto__ = null;
var klipse$args_from_element$content_from_gist_$_state_machine__21022__auto____0 = (function (){
var statearr_35376 = [null,null,null,null,null,null,null,null,null];
(statearr_35376[(0)] = klipse$args_from_element$content_from_gist_$_state_machine__21022__auto__);

(statearr_35376[(1)] = (1));

return statearr_35376;
});
var klipse$args_from_element$content_from_gist_$_state_machine__21022__auto____1 = (function (state_35364){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_35364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e35377){if((e35377 instanceof Object)){
var ex__21025__auto__ = e35377;
var statearr_35378_35388 = state_35364;
(statearr_35378_35388[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35389 = state_35364;
state_35364 = G__35389;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$args_from_element$content_from_gist_$_state_machine__21022__auto__ = function(state_35364){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_from_gist_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$args_from_element$content_from_gist_$_state_machine__21022__auto____1.call(this,state_35364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$args_from_element$content_from_gist_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_from_gist_$_state_machine__21022__auto____0;
klipse$args_from_element$content_from_gist_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_from_gist_$_state_machine__21022__auto____1;
return klipse$args_from_element$content_from_gist_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_35379 = f__21189__auto__.call(null);
(statearr_35379[(6)] = c__21188__auto__);

return statearr_35379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.args_from_element.content = (function klipse$args_from_element$content(element,comment_str){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_35399){
var state_val_35400 = (state_35399[(1)]);
if((state_val_35400 === (1))){
var inst_35390 = klipse.args_from_element.content_from_gist.call(null,element,comment_str);
var state_35399__$1 = state_35399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35399__$1,(2),inst_35390);
} else {
if((state_val_35400 === (2))){
var inst_35392 = (state_35399[(7)]);
var inst_35392__$1 = (state_35399[(2)]);
var state_35399__$1 = (function (){var statearr_35401 = state_35399;
(statearr_35401[(7)] = inst_35392__$1);

return statearr_35401;
})();
if(cljs.core.truth_(inst_35392__$1)){
var statearr_35402_35410 = state_35399__$1;
(statearr_35402_35410[(1)] = (3));

} else {
var statearr_35403_35411 = state_35399__$1;
(statearr_35403_35411[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (3))){
var inst_35392 = (state_35399[(7)]);
var state_35399__$1 = state_35399;
var statearr_35404_35412 = state_35399__$1;
(statearr_35404_35412[(2)] = inst_35392);

(statearr_35404_35412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (4))){
var inst_35395 = (element["textContent"]);
var state_35399__$1 = state_35399;
var statearr_35405_35413 = state_35399__$1;
(statearr_35405_35413[(2)] = inst_35395);

(statearr_35405_35413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (5))){
var inst_35397 = (state_35399[(2)]);
var state_35399__$1 = state_35399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35399__$1,inst_35397);
} else {
return null;
}
}
}
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$args_from_element$content_$_state_machine__21022__auto__ = null;
var klipse$args_from_element$content_$_state_machine__21022__auto____0 = (function (){
var statearr_35406 = [null,null,null,null,null,null,null,null];
(statearr_35406[(0)] = klipse$args_from_element$content_$_state_machine__21022__auto__);

(statearr_35406[(1)] = (1));

return statearr_35406;
});
var klipse$args_from_element$content_$_state_machine__21022__auto____1 = (function (state_35399){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_35399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e35407){if((e35407 instanceof Object)){
var ex__21025__auto__ = e35407;
var statearr_35408_35414 = state_35399;
(statearr_35408_35414[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35415 = state_35399;
state_35399 = G__35415;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$args_from_element$content_$_state_machine__21022__auto__ = function(state_35399){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$args_from_element$content_$_state_machine__21022__auto____1.call(this,state_35399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$args_from_element$content_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_$_state_machine__21022__auto____0;
klipse$args_from_element$content_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_$_state_machine__21022__auto____1;
return klipse$args_from_element$content_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_35409 = f__21189__auto__.call(null);
(statearr_35409[(6)] = c__21188__auto__);

return statearr_35409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.args_from_element.eval_args_from_element = (function klipse$args_from_element$eval_args_from_element(element,p__35416){
var map__35417 = p__35416;
var map__35417__$1 = (((((!((map__35417 == null))))?(((((map__35417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35417):map__35417);
var print_length = cljs.core.get.call(null,map__35417__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__35417__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var eval_context = cljs.core.get.call(null,map__35417__$1,new cljs.core.Keyword(null,"eval-context","eval-context",536255614));
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
