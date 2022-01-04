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
}catch (e29341){if((e29341 instanceof Object)){
var o = e29341;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_exp);
} else {
throw e29341;

}
}});
klipse.lang.javascript.append_to_chan = (function klipse$lang$javascript$append_to_chan(c){
return (function() { 
var G__29342__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",cljs.core.map.call(null,klipse.lang.javascript.beautify,args)));

cljs.core.async.put_BANG_.call(null,c,"\n");

return undefined;
};
var G__29342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29343__i = 0, G__29343__a = new Array(arguments.length -  0);
while (G__29343__i < G__29343__a.length) {G__29343__a[G__29343__i] = arguments[G__29343__i + 0]; ++G__29343__i;}
  args = new cljs.core.IndexedSeq(G__29343__a,0,null);
} 
return G__29342__delegate.call(this,args);};
G__29342.cljs$lang$maxFixedArity = 0;
G__29342.cljs$lang$applyTo = (function (arglist__29344){
var args = cljs.core.seq(arglist__29344);
return G__29342__delegate(args);
});
G__29342.cljs$core$IFn$_invoke$arity$variadic = G__29342__delegate;
return G__29342;
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
klipse.lang.javascript.str_eval_js_async = (function klipse$lang$javascript$str_eval_js_async(exp,p__29345){
var map__29346 = p__29345;
var map__29346__$1 = (((((!((map__29346 == null))))?(((((map__29346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29346):map__29346);
var async_code_QMARK_ = cljs.core.get.call(null,map__29346__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var external_libs = cljs.core.get.call(null,map__29346__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var container_id = cljs.core.get.call(null,map__29346__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript] evaluating",exp);
} else {
}

var c__21188__auto___29430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___29430,c,map__29346,map__29346__$1,async_code_QMARK_,external_libs,container_id){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___29430,c,map__29346,map__29346__$1,async_code_QMARK_,external_libs,container_id){
return (function (state_29401){
var state_val_29402 = (state_29401[(1)]);
if((state_val_29402 === (7))){
var inst_29360 = (state_29401[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29401,null,null,null,(6));
var inst_29365 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29360);
var state_29401__$1 = state_29401;
if(inst_29365){
var statearr_29403_29431 = state_29401__$1;
(statearr_29403_29431[(1)] = (8));

} else {
var statearr_29404_29432 = state_29401__$1;
(statearr_29404_29432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (1))){
var inst_29348 = clojure.string.blank_QMARK_.call(null,exp);
var state_29401__$1 = state_29401;
if(inst_29348){
var statearr_29405_29433 = state_29401__$1;
(statearr_29405_29433[(1)] = (2));

} else {
var statearr_29406_29434 = state_29401__$1;
(statearr_29406_29434[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (4))){
var inst_29399 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29401__$1,inst_29399);
} else {
if((state_val_29402 === (15))){
var inst_29376 = klipse.lang.javascript.append_to_chan.call(null,c);
var inst_29377 = console.log = inst_29376;
var state_29401__$1 = (function (){var statearr_29407 = state_29401;
(statearr_29407[(8)] = inst_29377);

return statearr_29407;
})();
var statearr_29408_29435 = state_29401__$1;
(statearr_29408_29435[(2)] = null);

(statearr_29408_29435[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (13))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29401,(12),new cljs.core.Keyword(null,"default","default",-1987822328),null,(11));
var state_29401__$1 = state_29401;
if(cljs.core.truth_(async_code_QMARK_)){
var statearr_29409_29436 = state_29401__$1;
(statearr_29409_29436[(1)] = (14));

} else {
var statearr_29410_29437 = state_29401__$1;
(statearr_29410_29437[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (6))){
var inst_29397 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29411_29438 = state_29401__$1;
(statearr_29411_29438[(2)] = inst_29397);

(statearr_29411_29438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (17))){
var inst_29386 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29412_29439 = state_29401__$1;
(statearr_29412_29439[(2)] = inst_29386);

(statearr_29412_29439[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (3))){
var inst_29352 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_29356 = cljs.core.map.call(null,klipse.lang.javascript.external_lib_path,external_libs);
var inst_29357 = klipse.utils.load_scripts.call(null,inst_29356,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),true);
var state_29401__$1 = (function (){var statearr_29413 = state_29401;
(statearr_29413[(9)] = inst_29352);

return statearr_29413;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29401__$1,(5),inst_29357);
} else {
if((state_val_29402 === (12))){
var inst_29367 = (state_29401[(2)]);
var inst_29368 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29367);
var state_29401__$1 = state_29401;
var statearr_29414_29440 = state_29401__$1;
(statearr_29414_29440[(2)] = inst_29368);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (2))){
var inst_29350 = cljs.core.async.put_BANG_.call(null,c,"");
var state_29401__$1 = state_29401;
var statearr_29415_29441 = state_29401__$1;
(statearr_29415_29441[(2)] = inst_29350);

(statearr_29415_29441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29401,null,null,(18),(17));
var inst_29383 = klipse.utils.eval_in_global_scope.call(null,exp);
var inst_29384 = klipse.lang.javascript.beautify.call(null,inst_29383);
var state_29401__$1 = state_29401;
var statearr_29416_29442 = state_29401__$1;
(statearr_29416_29442[(2)] = inst_29384);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (11))){
var inst_29390 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29417_29443 = state_29401__$1;
(statearr_29417_29443[(2)] = inst_29390);

(statearr_29417_29443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (9))){
var inst_29362 = (state_29401[(10)]);
var inst_29361 = (state_29401[(11)]);
var inst_29392 = ["//Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29362),"\n","//Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29361)].join('');
var state_29401__$1 = state_29401;
var statearr_29418_29444 = state_29401__$1;
(statearr_29418_29444[(2)] = inst_29392);

(statearr_29418_29444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (5))){
var inst_29359 = (state_29401[(2)]);
var inst_29360 = cljs.core.nth.call(null,inst_29359,(0),null);
var inst_29361 = cljs.core.nth.call(null,inst_29359,(1),null);
var inst_29362 = cljs.core.nth.call(null,inst_29359,(2),null);
var state_29401__$1 = (function (){var statearr_29419 = state_29401;
(statearr_29419[(10)] = inst_29362);

(statearr_29419[(11)] = inst_29361);

(statearr_29419[(7)] = inst_29360);

return statearr_29419;
})();
var statearr_29420_29445 = state_29401__$1;
(statearr_29420_29445[(2)] = null);

(statearr_29420_29445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (14))){
var inst_29373 = klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,exp);
var state_29401__$1 = state_29401;
var statearr_29421_29446 = state_29401__$1;
(statearr_29421_29446[(2)] = inst_29373);

(statearr_29421_29446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (16))){
var inst_29388 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29422_29447 = state_29401__$1;
(statearr_29422_29447[(2)] = inst_29388);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (10))){
var inst_29394 = (state_29401[(2)]);
var inst_29395 = cljs.core.async.put_BANG_.call(null,c,inst_29394);
var state_29401__$1 = state_29401;
var statearr_29423_29448 = state_29401__$1;
(statearr_29423_29448[(2)] = inst_29395);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (18))){
var inst_29378 = (state_29401[(2)]);
var inst_29379 = console.log = console.log;
var state_29401__$1 = (function (){var statearr_29424 = state_29401;
(statearr_29424[(12)] = inst_29379);

(statearr_29424[(13)] = inst_29378);

return statearr_29424;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (8))){
var state_29401__$1 = state_29401;
var statearr_29425_29449 = state_29401__$1;
(statearr_29425_29449[(2)] = null);

(statearr_29425_29449[(1)] = (13));


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
});})(c__21188__auto___29430,c,map__29346,map__29346__$1,async_code_QMARK_,external_libs,container_id))
;
return ((function (switch__21021__auto__,c__21188__auto___29430,c,map__29346,map__29346__$1,async_code_QMARK_,external_libs,container_id){
return (function() {
var klipse$lang$javascript$str_eval_js_async_$_state_machine__21022__auto__ = null;
var klipse$lang$javascript$str_eval_js_async_$_state_machine__21022__auto____0 = (function (){
var statearr_29426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29426[(0)] = klipse$lang$javascript$str_eval_js_async_$_state_machine__21022__auto__);

(statearr_29426[(1)] = (1));

return statearr_29426;
});
var klipse$lang$javascript$str_eval_js_async_$_state_machine__21022__auto____1 = (function (state_29401){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_29401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e29427){if((e29427 instanceof Object)){
var ex__21025__auto__ = e29427;
var statearr_29428_29450 = state_29401;
(statearr_29428_29450[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29451 = state_29401;
state_29401 = G__29451;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$javascript$str_eval_js_async_$_state_machine__21022__auto__ = function(state_29401){
switch(arguments.length){
case 0:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__21022__auto____1.call(this,state_29401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$javascript$str_eval_js_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$javascript$str_eval_js_async_$_state_machine__21022__auto____0;
klipse$lang$javascript$str_eval_js_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$javascript$str_eval_js_async_$_state_machine__21022__auto____1;
return klipse$lang$javascript$str_eval_js_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___29430,c,map__29346,map__29346__$1,async_code_QMARK_,external_libs,container_id))
})();
var state__21190__auto__ = (function (){var statearr_29429 = f__21189__auto__.call(null);
(statearr_29429[(6)] = c__21188__auto___29430);

return statearr_29429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___29430,c,map__29346,map__29346__$1,async_code_QMARK_,external_libs,container_id))
);


return c;
});
klipse.lang.javascript.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.str_eval_js_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-javascript","selector_eval_js",klipse.lang.javascript.opts);
klipse.lang.javascript.babel = (function klipse$lang$javascript$babel(src){
return ((function (){var obj__26008__auto__ = Babel;
var f__26009__auto__ = (function (){var obj29452 = obj__26008__auto__;
var k29453 = "transform";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29452,k29453)){
return (obj29452[k29453]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,src,({"presets": ["es2017","stage-2","stage-3"]}));
})()["code"]);
});
klipse.lang.javascript.eval_es2017 = (function klipse$lang$javascript$eval_es2017(exp,p__29454){
var map__29455 = p__29454;
var map__29455__$1 = (((((!((map__29455 == null))))?(((((map__29455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29455):map__29455);
var async_code_QMARK_ = cljs.core.get.call(null,map__29455__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var container_id = cljs.core.get.call(null,map__29455__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript es2017] evaluating",exp);
} else {
}

try{if(clojure.string.blank_QMARK_.call(null,exp)){
cljs.core.async.put_BANG_.call(null,c,"");
} else {
klipse.utils.setup_container_BANG_.call(null,container_id);

var transpiled_exp_29459 = klipse.lang.javascript.babel.call(null,exp);
cljs.core.async.put_BANG_.call(null,c,(cljs.core.truth_(async_code_QMARK_)?klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,transpiled_exp_29459):(function (){var console_log29458 = console.log;
console.log = klipse.lang.javascript.append_to_chan.call(null,c);

try{return klipse.lang.javascript.beautify.call(null,klipse.utils.eval_in_global_scope.call(null,transpiled_exp_29459));
}finally {console.log = console_log29458;
}})()));
}
}catch (e29457){var o_29460 = e29457;
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_29460));
}
return c;
});
klipse.lang.javascript.es2017_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.eval_es2017,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js"),klipse.common.registry.scripts_src.call(null,"babel.min.js"),klipse.common.registry.scripts_src.call(null,"babel_polyfill.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-es2017","selector_es2017",klipse.lang.javascript.es2017_opts);

//# sourceMappingURL=javascript.js.map
