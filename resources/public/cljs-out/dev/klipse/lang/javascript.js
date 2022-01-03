// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.javascript');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.javascript.known_external_libs = new cljs.core.PersistentArrayMap(null, 3, ["immutable","https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.2/immutable.js","jQuery","https://code.jquery.com/jquery-2.2.4.js","underscore","http://underscorejs.org/underscore-min.js"], null);
klipse.lang.javascript.external_lib_path = (function klipse$lang$javascript$external_lib_path(lib_name_or_url){
return cljs.core.get.call(null,klipse.lang.javascript.known_external_libs,lib_name_or_url,lib_name_or_url);
});
klipse.lang.javascript.beautify = (function klipse$lang$javascript$beautify(js_exp){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(prettyFormat(js_exp));
}catch (e20434){if((e20434 instanceof Object)){
var o = e20434;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_exp);
} else {
throw e20434;

}
}});
klipse.lang.javascript.append_to_chan = (function klipse$lang$javascript$append_to_chan(c){
return (function() { 
var G__20435__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",cljs.core.map.call(null,klipse.lang.javascript.beautify,args)));

cljs.core.async.put_BANG_.call(null,c,"\n");

return undefined;
};
var G__20435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20436__i = 0, G__20436__a = new Array(arguments.length -  0);
while (G__20436__i < G__20436__a.length) {G__20436__a[G__20436__i] = arguments[G__20436__i + 0]; ++G__20436__i;}
  args = new cljs.core.IndexedSeq(G__20436__a,0,null);
} 
return G__20435__delegate.call(this,args);};
G__20435.cljs$lang$maxFixedArity = 0;
G__20435.cljs$lang$applyTo = (function (arglist__20437){
var args = cljs.core.seq(arglist__20437);
return G__20435__delegate(args);
});
G__20435.cljs$core$IFn$_invoke$arity$variadic = G__20435__delegate;
return G__20435;
})()
;
});
/**
 * Evals an expression where the window.console object is lexically bound to an object that puts the console output on a channel.
 *   Returns the empty string.
 *   It works fine also with asynchronous code.
 */
klipse.lang.javascript.eval_with_logger_BANG_ = (function klipse$lang$javascript$eval_with_logger_BANG_(c,exp){
var logger = klipse.lang.javascript.append_to_chan.call(null,c);
var wrapped_exp = ["(function(console) {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),"}(window.klipse_snippet_console))"].join('');
klipse_snippet_console = ({"log": logger});

klipse.utils.eval_in_global_scope.call(null,wrapped_exp);

return "";
});
klipse.lang.javascript.str_eval_js_async = (function klipse$lang$javascript$str_eval_js_async(exp,p__20438){
var map__20439 = p__20438;
var map__20439__$1 = (((((!((map__20439 == null))))?(((((map__20439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20439):map__20439);
var async_code_QMARK_ = cljs.core.get.call(null,map__20439__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var external_libs = cljs.core.get.call(null,map__20439__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var container_id = cljs.core.get.call(null,map__20439__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript] evaluating",exp);
} else {
}

var c__16038__auto___20523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___20523,c,map__20439,map__20439__$1,async_code_QMARK_,external_libs,container_id){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___20523,c,map__20439,map__20439__$1,async_code_QMARK_,external_libs,container_id){
return (function (state_20494){
var state_val_20495 = (state_20494[(1)]);
if((state_val_20495 === (7))){
var inst_20453 = (state_20494[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20494,null,null,null,(6));
var inst_20458 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_20453);
var state_20494__$1 = state_20494;
if(inst_20458){
var statearr_20496_20524 = state_20494__$1;
(statearr_20496_20524[(1)] = (8));

} else {
var statearr_20497_20525 = state_20494__$1;
(statearr_20497_20525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (1))){
var inst_20441 = clojure.string.blank_QMARK_.call(null,exp);
var state_20494__$1 = state_20494;
if(inst_20441){
var statearr_20498_20526 = state_20494__$1;
(statearr_20498_20526[(1)] = (2));

} else {
var statearr_20499_20527 = state_20494__$1;
(statearr_20499_20527[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (4))){
var inst_20492 = (state_20494[(2)]);
var state_20494__$1 = state_20494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20494__$1,inst_20492);
} else {
if((state_val_20495 === (15))){
var inst_20469 = klipse.lang.javascript.append_to_chan.call(null,c);
var inst_20470 = console.log = inst_20469;
var state_20494__$1 = (function (){var statearr_20500 = state_20494;
(statearr_20500[(8)] = inst_20470);

return statearr_20500;
})();
var statearr_20501_20528 = state_20494__$1;
(statearr_20501_20528[(2)] = null);

(statearr_20501_20528[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (13))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20494,(12),new cljs.core.Keyword(null,"default","default",-1987822328),null,(11));
var state_20494__$1 = state_20494;
if(cljs.core.truth_(async_code_QMARK_)){
var statearr_20502_20529 = state_20494__$1;
(statearr_20502_20529[(1)] = (14));

} else {
var statearr_20503_20530 = state_20494__$1;
(statearr_20503_20530[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (6))){
var inst_20490 = (state_20494[(2)]);
var state_20494__$1 = state_20494;
var statearr_20504_20531 = state_20494__$1;
(statearr_20504_20531[(2)] = inst_20490);

(statearr_20504_20531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (17))){
var inst_20479 = (state_20494[(2)]);
var state_20494__$1 = state_20494;
var statearr_20505_20532 = state_20494__$1;
(statearr_20505_20532[(2)] = inst_20479);

(statearr_20505_20532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (3))){
var inst_20445 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_20449 = cljs.core.map.call(null,klipse.lang.javascript.external_lib_path,external_libs);
var inst_20450 = klipse.utils.load_scripts.call(null,inst_20449,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),true);
var state_20494__$1 = (function (){var statearr_20506 = state_20494;
(statearr_20506[(9)] = inst_20445);

return statearr_20506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20494__$1,(5),inst_20450);
} else {
if((state_val_20495 === (12))){
var inst_20460 = (state_20494[(2)]);
var inst_20461 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20460);
var state_20494__$1 = state_20494;
var statearr_20507_20533 = state_20494__$1;
(statearr_20507_20533[(2)] = inst_20461);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (2))){
var inst_20443 = cljs.core.async.put_BANG_.call(null,c,"");
var state_20494__$1 = state_20494;
var statearr_20508_20534 = state_20494__$1;
(statearr_20508_20534[(2)] = inst_20443);

(statearr_20508_20534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20494,null,null,(18),(17));
var inst_20476 = klipse.utils.eval_in_global_scope.call(null,exp);
var inst_20477 = klipse.lang.javascript.beautify.call(null,inst_20476);
var state_20494__$1 = state_20494;
var statearr_20509_20535 = state_20494__$1;
(statearr_20509_20535[(2)] = inst_20477);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (11))){
var inst_20483 = (state_20494[(2)]);
var state_20494__$1 = state_20494;
var statearr_20510_20536 = state_20494__$1;
(statearr_20510_20536[(2)] = inst_20483);

(statearr_20510_20536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (9))){
var inst_20455 = (state_20494[(10)]);
var inst_20454 = (state_20494[(11)]);
var inst_20485 = ["//Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20455),"\n","//Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20454)].join('');
var state_20494__$1 = state_20494;
var statearr_20511_20537 = state_20494__$1;
(statearr_20511_20537[(2)] = inst_20485);

(statearr_20511_20537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (5))){
var inst_20452 = (state_20494[(2)]);
var inst_20453 = cljs.core.nth.call(null,inst_20452,(0),null);
var inst_20454 = cljs.core.nth.call(null,inst_20452,(1),null);
var inst_20455 = cljs.core.nth.call(null,inst_20452,(2),null);
var state_20494__$1 = (function (){var statearr_20512 = state_20494;
(statearr_20512[(7)] = inst_20453);

(statearr_20512[(10)] = inst_20455);

(statearr_20512[(11)] = inst_20454);

return statearr_20512;
})();
var statearr_20513_20538 = state_20494__$1;
(statearr_20513_20538[(2)] = null);

(statearr_20513_20538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (14))){
var inst_20466 = klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,exp);
var state_20494__$1 = state_20494;
var statearr_20514_20539 = state_20494__$1;
(statearr_20514_20539[(2)] = inst_20466);

(statearr_20514_20539[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (16))){
var inst_20481 = (state_20494[(2)]);
var state_20494__$1 = state_20494;
var statearr_20515_20540 = state_20494__$1;
(statearr_20515_20540[(2)] = inst_20481);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (10))){
var inst_20487 = (state_20494[(2)]);
var inst_20488 = cljs.core.async.put_BANG_.call(null,c,inst_20487);
var state_20494__$1 = state_20494;
var statearr_20516_20541 = state_20494__$1;
(statearr_20516_20541[(2)] = inst_20488);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (18))){
var inst_20471 = (state_20494[(2)]);
var inst_20472 = console.log = console.log;
var state_20494__$1 = (function (){var statearr_20517 = state_20494;
(statearr_20517[(12)] = inst_20471);

(statearr_20517[(13)] = inst_20472);

return statearr_20517;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (8))){
var state_20494__$1 = state_20494;
var statearr_20518_20542 = state_20494__$1;
(statearr_20518_20542[(2)] = null);

(statearr_20518_20542[(1)] = (13));


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
});})(c__16038__auto___20523,c,map__20439,map__20439__$1,async_code_QMARK_,external_libs,container_id))
;
return ((function (switch__15943__auto__,c__16038__auto___20523,c,map__20439,map__20439__$1,async_code_QMARK_,external_libs,container_id){
return (function() {
var klipse$lang$javascript$str_eval_js_async_$_state_machine__15944__auto__ = null;
var klipse$lang$javascript$str_eval_js_async_$_state_machine__15944__auto____0 = (function (){
var statearr_20519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20519[(0)] = klipse$lang$javascript$str_eval_js_async_$_state_machine__15944__auto__);

(statearr_20519[(1)] = (1));

return statearr_20519;
});
var klipse$lang$javascript$str_eval_js_async_$_state_machine__15944__auto____1 = (function (state_20494){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_20494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20520){if((e20520 instanceof Object)){
var ex__15947__auto__ = e20520;
var statearr_20521_20543 = state_20494;
(statearr_20521_20543[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20544 = state_20494;
state_20494 = G__20544;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$javascript$str_eval_js_async_$_state_machine__15944__auto__ = function(state_20494){
switch(arguments.length){
case 0:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__15944__auto____1.call(this,state_20494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$javascript$str_eval_js_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$javascript$str_eval_js_async_$_state_machine__15944__auto____0;
klipse$lang$javascript$str_eval_js_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$javascript$str_eval_js_async_$_state_machine__15944__auto____1;
return klipse$lang$javascript$str_eval_js_async_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___20523,c,map__20439,map__20439__$1,async_code_QMARK_,external_libs,container_id))
})();
var state__16040__auto__ = (function (){var statearr_20522 = f__16039__auto__.call(null);
(statearr_20522[(6)] = c__16038__auto___20523);

return statearr_20522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___20523,c,map__20439,map__20439__$1,async_code_QMARK_,external_libs,container_id))
);


return c;
});
klipse.lang.javascript.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.str_eval_js_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-javascript","selector_eval_js",klipse.lang.javascript.opts);
klipse.lang.javascript.babel = (function klipse$lang$javascript$babel(src){
return ((function (){var obj__18568__auto__ = Babel;
var f__18569__auto__ = (function (){var obj20545 = obj__18568__auto__;
var k20546 = "transform";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20545,k20546)){
return (obj20545[k20546]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,src,({"presets": ["es2017","stage-2","stage-3"]}));
})()["code"]);
});
klipse.lang.javascript.eval_es2017 = (function klipse$lang$javascript$eval_es2017(exp,p__20547){
var map__20548 = p__20547;
var map__20548__$1 = (((((!((map__20548 == null))))?(((((map__20548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20548):map__20548);
var async_code_QMARK_ = cljs.core.get.call(null,map__20548__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var container_id = cljs.core.get.call(null,map__20548__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript es2017] evaluating",exp);
} else {
}

try{if(clojure.string.blank_QMARK_.call(null,exp)){
cljs.core.async.put_BANG_.call(null,c,"");
} else {
klipse.utils.setup_container_BANG_.call(null,container_id);

var transpiled_exp_20552 = klipse.lang.javascript.babel.call(null,exp);
cljs.core.async.put_BANG_.call(null,c,(cljs.core.truth_(async_code_QMARK_)?klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,transpiled_exp_20552):(function (){var console_log20551 = console.log;
console.log = klipse.lang.javascript.append_to_chan.call(null,c);

try{return klipse.lang.javascript.beautify.call(null,klipse.utils.eval_in_global_scope.call(null,transpiled_exp_20552));
}finally {console.log = console_log20551;
}})()));
}
}catch (e20550){var o_20553 = e20550;
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_20553));
}
return c;
});
klipse.lang.javascript.es2017_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.eval_es2017,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js"),klipse.common.registry.scripts_src.call(null,"babel.min.js"),klipse.common.registry.scripts_src.call(null,"babel_polyfill.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-es2017","selector_es2017",klipse.lang.javascript.es2017_opts);

//# sourceMappingURL=javascript.js.map
