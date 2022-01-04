// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.php');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.php.load_php_engine = (function klipse$lang$php$load_php_engine(){
var obj__26008__auto__ = uniter;
var f__26009__auto__ = (function (){var obj37330 = obj__26008__auto__;
var k37331 = "createEngine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj37330,k37331)){
return (obj37330[k37331]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,"PHP");
});
klipse.lang.php.execute = (function klipse$lang$php$execute(engine,input){
var obj__26008__auto__ = engine;
var f__26009__auto__ = (function (){var obj37332 = obj__26008__auto__;
var k37333 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj37332,k37333)){
return (obj37332[k37333]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,input);
});
klipse.lang.php.str_eval_async = (function klipse$lang$php$str_eval_async(exp,_){
var c = cljs.core.async.chan.call(null);
var php_exp = ["<?php",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp)].join('');
var c__21188__auto___37404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___37404,c,php_exp){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___37404,c,php_exp){
return (function (state_37377){
var state_val_37378 = (state_37377[(1)]);
if((state_val_37378 === (7))){
var inst_37336 = (state_37377[(7)]);
var inst_37345 = (state_37377[(8)]);
var inst_37353 = (state_37377[(2)]);
var inst_37354 = (function (){var php_engine = inst_37336;
var $ = inst_37345;
var obj__26008__auto__ = inst_37345;
var f__26009__auto__ = inst_37353;
return ((function (php_engine,$,obj__26008__auto__,f__26009__auto__,inst_37336,inst_37345,inst_37353,state_val_37378,c__21188__auto___37404,c,php_exp){
return (function (p1__37334_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37334_SHARP_));
});
;})(php_engine,$,obj__26008__auto__,f__26009__auto__,inst_37336,inst_37345,inst_37353,state_val_37378,c__21188__auto___37404,c,php_exp))
})();
var inst_37355 = inst_37353.call(inst_37345,"data",inst_37354);
var inst_37358 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_37336,"getStdout");
var state_37377__$1 = (function (){var statearr_37379 = state_37377;
(statearr_37379[(9)] = inst_37355);

return statearr_37379;
})();
if(inst_37358){
var statearr_37380_37405 = state_37377__$1;
(statearr_37380_37405[(1)] = (8));

} else {
var statearr_37381_37406 = state_37377__$1;
(statearr_37381_37406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (1))){
var inst_37336 = (state_37377[(7)]);
var inst_37336__$1 = klipse.lang.php.load_php_engine.call(null);
var inst_37339 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_37336__$1,"getStderr");
var state_37377__$1 = (function (){var statearr_37382 = state_37377;
(statearr_37382[(7)] = inst_37336__$1);

return statearr_37382;
})();
if(inst_37339){
var statearr_37383_37407 = state_37377__$1;
(statearr_37383_37407[(1)] = (2));

} else {
var statearr_37384_37408 = state_37377__$1;
(statearr_37384_37408[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (4))){
var inst_37336 = (state_37377[(7)]);
var inst_37345 = (state_37377[(8)]);
var inst_37344 = (state_37377[(2)]);
var inst_37345__$1 = inst_37344.call(inst_37336);
var inst_37348 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_37345__$1,"on");
var state_37377__$1 = (function (){var statearr_37385 = state_37377;
(statearr_37385[(8)] = inst_37345__$1);

return statearr_37385;
})();
if(inst_37348){
var statearr_37386_37409 = state_37377__$1;
(statearr_37386_37409[(1)] = (5));

} else {
var statearr_37387_37410 = state_37377__$1;
(statearr_37387_37410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (13))){
var inst_37364 = (state_37377[(10)]);
var inst_37336 = (state_37377[(7)]);
var inst_37372 = (state_37377[(2)]);
var inst_37373 = (function (){var php_engine = inst_37336;
var $ = inst_37364;
var obj__26008__auto__ = inst_37364;
var f__26009__auto__ = inst_37372;
return ((function (php_engine,$,obj__26008__auto__,f__26009__auto__,inst_37364,inst_37336,inst_37372,state_val_37378,c__21188__auto___37404,c,php_exp){
return (function (p1__37335_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37335_SHARP_));
});
;})(php_engine,$,obj__26008__auto__,f__26009__auto__,inst_37364,inst_37336,inst_37372,state_val_37378,c__21188__auto___37404,c,php_exp))
})();
var inst_37374 = inst_37372.call(inst_37364,"data",inst_37373);
var inst_37375 = klipse.lang.php.execute.call(null,inst_37336,php_exp);
var state_37377__$1 = (function (){var statearr_37388 = state_37377;
(statearr_37388[(11)] = inst_37374);

return statearr_37388;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37377__$1,inst_37375);
} else {
if((state_val_37378 === (6))){
var state_37377__$1 = state_37377;
var statearr_37389_37411 = state_37377__$1;
(statearr_37389_37411[(2)] = null);

(statearr_37389_37411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (3))){
var state_37377__$1 = state_37377;
var statearr_37390_37412 = state_37377__$1;
(statearr_37390_37412[(2)] = null);

(statearr_37390_37412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (12))){
var state_37377__$1 = state_37377;
var statearr_37391_37413 = state_37377__$1;
(statearr_37391_37413[(2)] = null);

(statearr_37391_37413[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (2))){
var inst_37336 = (state_37377[(7)]);
var inst_37341 = (inst_37336["getStderr"]);
var state_37377__$1 = state_37377;
var statearr_37392_37414 = state_37377__$1;
(statearr_37392_37414[(2)] = inst_37341);

(statearr_37392_37414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (11))){
var inst_37364 = (state_37377[(10)]);
var inst_37369 = (inst_37364["on"]);
var state_37377__$1 = state_37377;
var statearr_37393_37415 = state_37377__$1;
(statearr_37393_37415[(2)] = inst_37369);

(statearr_37393_37415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (9))){
var state_37377__$1 = state_37377;
var statearr_37394_37416 = state_37377__$1;
(statearr_37394_37416[(2)] = null);

(statearr_37394_37416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (5))){
var inst_37345 = (state_37377[(8)]);
var inst_37350 = (inst_37345["on"]);
var state_37377__$1 = state_37377;
var statearr_37395_37417 = state_37377__$1;
(statearr_37395_37417[(2)] = inst_37350);

(statearr_37395_37417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (10))){
var inst_37364 = (state_37377[(10)]);
var inst_37336 = (state_37377[(7)]);
var inst_37363 = (state_37377[(2)]);
var inst_37364__$1 = inst_37363.call(inst_37336);
var inst_37367 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_37364__$1,"on");
var state_37377__$1 = (function (){var statearr_37396 = state_37377;
(statearr_37396[(10)] = inst_37364__$1);

return statearr_37396;
})();
if(inst_37367){
var statearr_37397_37418 = state_37377__$1;
(statearr_37397_37418[(1)] = (11));

} else {
var statearr_37398_37419 = state_37377__$1;
(statearr_37398_37419[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (8))){
var inst_37336 = (state_37377[(7)]);
var inst_37360 = (inst_37336["getStdout"]);
var state_37377__$1 = state_37377;
var statearr_37399_37420 = state_37377__$1;
(statearr_37399_37420[(2)] = inst_37360);

(statearr_37399_37420[(1)] = (10));


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
});})(c__21188__auto___37404,c,php_exp))
;
return ((function (switch__21021__auto__,c__21188__auto___37404,c,php_exp){
return (function() {
var klipse$lang$php$str_eval_async_$_state_machine__21022__auto__ = null;
var klipse$lang$php$str_eval_async_$_state_machine__21022__auto____0 = (function (){
var statearr_37400 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37400[(0)] = klipse$lang$php$str_eval_async_$_state_machine__21022__auto__);

(statearr_37400[(1)] = (1));

return statearr_37400;
});
var klipse$lang$php$str_eval_async_$_state_machine__21022__auto____1 = (function (state_37377){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_37377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e37401){if((e37401 instanceof Object)){
var ex__21025__auto__ = e37401;
var statearr_37402_37421 = state_37377;
(statearr_37402_37421[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37422 = state_37377;
state_37377 = G__37422;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$php$str_eval_async_$_state_machine__21022__auto__ = function(state_37377){
switch(arguments.length){
case 0:
return klipse$lang$php$str_eval_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$php$str_eval_async_$_state_machine__21022__auto____1.call(this,state_37377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$php$str_eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$php$str_eval_async_$_state_machine__21022__auto____0;
klipse$lang$php$str_eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$php$str_eval_async_$_state_machine__21022__auto____1;
return klipse$lang$php$str_eval_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___37404,c,php_exp))
})();
var state__21190__auto__ = (function (){var statearr_37403 = f__21189__auto__.call(null);
(statearr_37403[(6)] = c__21188__auto___37404);

return statearr_37403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___37404,c,php_exp))
);


return c;
});
klipse.lang.php.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-php",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-php",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.php.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"clike"),klipse.common.registry.codemirror_mode_src.call(null,"php"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css"),klipse.common.registry.scripts_src.call(null,"uniter.js?r")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-php","selector_eval_php",klipse.lang.php.opts);

//# sourceMappingURL=php.js.map
