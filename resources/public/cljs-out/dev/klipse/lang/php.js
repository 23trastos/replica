// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.php');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.php.load_php_engine = (function klipse$lang$php$load_php_engine(){
var obj__18568__auto__ = uniter;
var f__18569__auto__ = (function (){var obj24467 = obj__18568__auto__;
var k24468 = "createEngine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24467,k24468)){
return (obj24467[k24468]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,"PHP");
});
klipse.lang.php.execute = (function klipse$lang$php$execute(engine,input){
var obj__18568__auto__ = engine;
var f__18569__auto__ = (function (){var obj24469 = obj__18568__auto__;
var k24470 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24469,k24470)){
return (obj24469[k24470]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,input);
});
klipse.lang.php.str_eval_async = (function klipse$lang$php$str_eval_async(exp,_){
var c = cljs.core.async.chan.call(null);
var php_exp = ["<?php",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp)].join('');
var c__16038__auto___24541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___24541,c,php_exp){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___24541,c,php_exp){
return (function (state_24514){
var state_val_24515 = (state_24514[(1)]);
if((state_val_24515 === (7))){
var inst_24482 = (state_24514[(7)]);
var inst_24473 = (state_24514[(8)]);
var inst_24490 = (state_24514[(2)]);
var inst_24491 = (function (){var php_engine = inst_24473;
var $ = inst_24482;
var obj__18568__auto__ = inst_24482;
var f__18569__auto__ = inst_24490;
return ((function (php_engine,$,obj__18568__auto__,f__18569__auto__,inst_24482,inst_24473,inst_24490,state_val_24515,c__16038__auto___24541,c,php_exp){
return (function (p1__24471_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24471_SHARP_));
});
;})(php_engine,$,obj__18568__auto__,f__18569__auto__,inst_24482,inst_24473,inst_24490,state_val_24515,c__16038__auto___24541,c,php_exp))
})();
var inst_24492 = inst_24490.call(inst_24482,"data",inst_24491);
var inst_24495 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_24473,"getStdout");
var state_24514__$1 = (function (){var statearr_24516 = state_24514;
(statearr_24516[(9)] = inst_24492);

return statearr_24516;
})();
if(inst_24495){
var statearr_24517_24542 = state_24514__$1;
(statearr_24517_24542[(1)] = (8));

} else {
var statearr_24518_24543 = state_24514__$1;
(statearr_24518_24543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (1))){
var inst_24473 = (state_24514[(8)]);
var inst_24473__$1 = klipse.lang.php.load_php_engine.call(null);
var inst_24476 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_24473__$1,"getStderr");
var state_24514__$1 = (function (){var statearr_24519 = state_24514;
(statearr_24519[(8)] = inst_24473__$1);

return statearr_24519;
})();
if(inst_24476){
var statearr_24520_24544 = state_24514__$1;
(statearr_24520_24544[(1)] = (2));

} else {
var statearr_24521_24545 = state_24514__$1;
(statearr_24521_24545[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (4))){
var inst_24482 = (state_24514[(7)]);
var inst_24473 = (state_24514[(8)]);
var inst_24481 = (state_24514[(2)]);
var inst_24482__$1 = inst_24481.call(inst_24473);
var inst_24485 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_24482__$1,"on");
var state_24514__$1 = (function (){var statearr_24522 = state_24514;
(statearr_24522[(7)] = inst_24482__$1);

return statearr_24522;
})();
if(inst_24485){
var statearr_24523_24546 = state_24514__$1;
(statearr_24523_24546[(1)] = (5));

} else {
var statearr_24524_24547 = state_24514__$1;
(statearr_24524_24547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (13))){
var inst_24501 = (state_24514[(10)]);
var inst_24473 = (state_24514[(8)]);
var inst_24509 = (state_24514[(2)]);
var inst_24510 = (function (){var php_engine = inst_24473;
var $ = inst_24501;
var obj__18568__auto__ = inst_24501;
var f__18569__auto__ = inst_24509;
return ((function (php_engine,$,obj__18568__auto__,f__18569__auto__,inst_24501,inst_24473,inst_24509,state_val_24515,c__16038__auto___24541,c,php_exp){
return (function (p1__24472_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24472_SHARP_));
});
;})(php_engine,$,obj__18568__auto__,f__18569__auto__,inst_24501,inst_24473,inst_24509,state_val_24515,c__16038__auto___24541,c,php_exp))
})();
var inst_24511 = inst_24509.call(inst_24501,"data",inst_24510);
var inst_24512 = klipse.lang.php.execute.call(null,inst_24473,php_exp);
var state_24514__$1 = (function (){var statearr_24525 = state_24514;
(statearr_24525[(11)] = inst_24511);

return statearr_24525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24514__$1,inst_24512);
} else {
if((state_val_24515 === (6))){
var state_24514__$1 = state_24514;
var statearr_24526_24548 = state_24514__$1;
(statearr_24526_24548[(2)] = null);

(statearr_24526_24548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (3))){
var state_24514__$1 = state_24514;
var statearr_24527_24549 = state_24514__$1;
(statearr_24527_24549[(2)] = null);

(statearr_24527_24549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (12))){
var state_24514__$1 = state_24514;
var statearr_24528_24550 = state_24514__$1;
(statearr_24528_24550[(2)] = null);

(statearr_24528_24550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (2))){
var inst_24473 = (state_24514[(8)]);
var inst_24478 = (inst_24473["getStderr"]);
var state_24514__$1 = state_24514;
var statearr_24529_24551 = state_24514__$1;
(statearr_24529_24551[(2)] = inst_24478);

(statearr_24529_24551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (11))){
var inst_24501 = (state_24514[(10)]);
var inst_24506 = (inst_24501["on"]);
var state_24514__$1 = state_24514;
var statearr_24530_24552 = state_24514__$1;
(statearr_24530_24552[(2)] = inst_24506);

(statearr_24530_24552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (9))){
var state_24514__$1 = state_24514;
var statearr_24531_24553 = state_24514__$1;
(statearr_24531_24553[(2)] = null);

(statearr_24531_24553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (5))){
var inst_24482 = (state_24514[(7)]);
var inst_24487 = (inst_24482["on"]);
var state_24514__$1 = state_24514;
var statearr_24532_24554 = state_24514__$1;
(statearr_24532_24554[(2)] = inst_24487);

(statearr_24532_24554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (10))){
var inst_24501 = (state_24514[(10)]);
var inst_24473 = (state_24514[(8)]);
var inst_24500 = (state_24514[(2)]);
var inst_24501__$1 = inst_24500.call(inst_24473);
var inst_24504 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_24501__$1,"on");
var state_24514__$1 = (function (){var statearr_24533 = state_24514;
(statearr_24533[(10)] = inst_24501__$1);

return statearr_24533;
})();
if(inst_24504){
var statearr_24534_24555 = state_24514__$1;
(statearr_24534_24555[(1)] = (11));

} else {
var statearr_24535_24556 = state_24514__$1;
(statearr_24535_24556[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (8))){
var inst_24473 = (state_24514[(8)]);
var inst_24497 = (inst_24473["getStdout"]);
var state_24514__$1 = state_24514;
var statearr_24536_24557 = state_24514__$1;
(statearr_24536_24557[(2)] = inst_24497);

(statearr_24536_24557[(1)] = (10));


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
});})(c__16038__auto___24541,c,php_exp))
;
return ((function (switch__15943__auto__,c__16038__auto___24541,c,php_exp){
return (function() {
var klipse$lang$php$str_eval_async_$_state_machine__15944__auto__ = null;
var klipse$lang$php$str_eval_async_$_state_machine__15944__auto____0 = (function (){
var statearr_24537 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24537[(0)] = klipse$lang$php$str_eval_async_$_state_machine__15944__auto__);

(statearr_24537[(1)] = (1));

return statearr_24537;
});
var klipse$lang$php$str_eval_async_$_state_machine__15944__auto____1 = (function (state_24514){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_24514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e24538){if((e24538 instanceof Object)){
var ex__15947__auto__ = e24538;
var statearr_24539_24558 = state_24514;
(statearr_24539_24558[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24559 = state_24514;
state_24514 = G__24559;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$php$str_eval_async_$_state_machine__15944__auto__ = function(state_24514){
switch(arguments.length){
case 0:
return klipse$lang$php$str_eval_async_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$php$str_eval_async_$_state_machine__15944__auto____1.call(this,state_24514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$php$str_eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$php$str_eval_async_$_state_machine__15944__auto____0;
klipse$lang$php$str_eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$php$str_eval_async_$_state_machine__15944__auto____1;
return klipse$lang$php$str_eval_async_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___24541,c,php_exp))
})();
var state__16040__auto__ = (function (){var statearr_24540 = f__16039__auto__.call(null);
(statearr_24540[(6)] = c__16038__auto___24541);

return statearr_24540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___24541,c,php_exp))
);


return c;
});
klipse.lang.php.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-php",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-php",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.php.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"clike"),klipse.common.registry.codemirror_mode_src.call(null,"php"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css"),klipse.common.registry.scripts_src.call(null,"uniter.js?r")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-php","selector_eval_php",klipse.lang.php.opts);

//# sourceMappingURL=php.js.map
