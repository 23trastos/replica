// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.lua');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if((typeof klipse !== 'undefined') && (typeof klipse.lang !== 'undefined') && (typeof klipse.lang.lua !== 'undefined') && (typeof klipse.lang.lua._STAR_loaded_STAR_ !== 'undefined')){
} else {
klipse.lang.lua._STAR_loaded_STAR_ = false;
}
klipse.lang.lua.create_module_BANG_ = (function klipse$lang$lua$create_module_BANG_(ready_chan){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"postRun","postRun",1423872796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("Lua Module loaded");
} else {
}

cljs.core.async.put_BANG_.call(null,ready_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236)], null));

var obj41603 = window;
var obj41604 = (((!((obj41603 == null))))?obj41603:({}));
(obj41604["evalLua"] = (function (){var obj__26008__auto__ = Module;
var f__26009__auto__ = (function (){var obj41607 = obj__26008__auto__;
var k41608 = "cwrap";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41607,k41608)){
return (obj41607[k41608]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,"run_lua","number",["string"]);
})());

return obj41604;
})], null)], null);
});
klipse.lang.lua.load_module_BANG_ = (function klipse$lang$lua$load_module_BANG_(){
var xhr = (new window.XMLHttpRequest());
var obj__26008__auto___41631 = xhr;
var f__26009__auto___41632 = (function (){var obj41609 = obj__26008__auto___41631;
var k41610 = "open";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41609,k41610)){
return (obj41609[k41610]);
} else {
return null;
}
})();
f__26009__auto___41632.call(obj__26008__auto___41631,"GET",klipse.common.registry.wasm_src.call(null,"lua.wasm"));

var obj41611_41633 = xhr;
var obj41612_41634 = (((!((obj41611_41633 == null))))?obj41611_41633:({}));
(obj41612_41634["responseType"] = "arraybuffer");


var obj__26008__auto___41635 = xhr;
var f__26009__auto___41636 = (function (){var obj41615 = obj__26008__auto___41635;
var k41616 = "overrideMimeType";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41615,k41616)){
return (obj41615[k41616]);
} else {
return null;
}
})();
f__26009__auto___41636.call(obj__26008__auto___41635,"application/javascript");

var obj41617_41637 = xhr;
var obj41618_41638 = (((!((obj41617_41637 == null))))?obj41617_41637:({}));
(obj41618_41638["onload"] = ((function (obj41618_41638,obj41617_41637,xhr){
return (function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("wasm loaded:");
} else {
}

var obj41621_41639 = window;
var obj41621_41640__$1 = (((!((obj41621_41639 == null))))?obj41621_41639:({}));
var inner_obj__25981__auto___41641 = (function (){var child41622 = (obj41621_41640__$1["Module"]);
if((!((child41622 == null)))){
return child41622;
} else {
var new_child__25953__auto__ = ({});
var obj41627_41642 = obj41621_41640__$1;
(obj41627_41642["Module"] = new_child__25953__auto__);


return new_child__25953__auto__;
}
})();
var obj41628_41643 = inner_obj__25981__auto___41641;
(obj41628_41643["wasmBinary"] = (xhr["response"]));



return klipse.utils.add_script_tag_BANG_.call(null,klipse.common.registry.scripts_src.call(null,"emscripten_module.js"));
});})(obj41618_41638,obj41617_41637,xhr))
);


var obj__26008__auto__ = xhr;
var f__26009__auto__ = (function (){var obj41629 = obj__26008__auto__;
var k41630 = "send";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41629,k41630)){
return (obj41629[k41630]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,null);
});
klipse.lang.lua.ensure_loaded_BANG_ = (function klipse$lang$lua$ensure_loaded_BANG_(){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41668){
var state_val_41669 = (state_41668[(1)]);
if((state_val_41669 === (1))){
var state_41668__$1 = state_41668;
if(klipse.lang.lua._STAR_loaded_STAR_){
var statearr_41670_41685 = state_41668__$1;
(statearr_41670_41685[(1)] = (2));

} else {
var statearr_41671_41686 = state_41668__$1;
(statearr_41671_41686[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41669 === (2))){
var state_41668__$1 = state_41668;
var statearr_41672_41687 = state_41668__$1;
(statearr_41672_41687[(2)] = null);

(statearr_41672_41687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41669 === (3))){
var inst_41646 = (state_41668[(7)]);
var inst_41646__$1 = cljs.core.async.chan.call(null);
var inst_41647 = klipse.lang.lua.create_module_BANG_.call(null,inst_41646__$1);
var inst_41650 = (window == null);
var inst_41651 = cljs.core.not.call(null,inst_41650);
var state_41668__$1 = (function (){var statearr_41673 = state_41668;
(statearr_41673[(7)] = inst_41646__$1);

(statearr_41673[(8)] = inst_41647);

return statearr_41673;
})();
if(inst_41651){
var statearr_41674_41688 = state_41668__$1;
(statearr_41674_41688[(1)] = (5));

} else {
var statearr_41675_41689 = state_41668__$1;
(statearr_41675_41689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41669 === (4))){
var inst_41666 = (state_41668[(2)]);
var state_41668__$1 = state_41668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41668__$1,inst_41666);
} else {
if((state_val_41669 === (5))){
var state_41668__$1 = state_41668;
var statearr_41676_41690 = state_41668__$1;
(statearr_41676_41690[(2)] = window);

(statearr_41676_41690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41669 === (6))){
var inst_41656 = ({});
var state_41668__$1 = state_41668;
var statearr_41677_41691 = state_41668__$1;
(statearr_41677_41691[(2)] = inst_41656);

(statearr_41677_41691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41669 === (7))){
var inst_41646 = (state_41668[(7)]);
var inst_41647 = (state_41668[(8)]);
var inst_41658 = (state_41668[(2)]);
var inst_41659 = cljs.core.clj__GT_js.call(null,inst_41647);
var inst_41660 = (inst_41658["Module"] = inst_41659);
var inst_41661 = klipse.lang.lua.load_module_BANG_.call(null);
var state_41668__$1 = (function (){var statearr_41678 = state_41668;
(statearr_41678[(9)] = inst_41660);

(statearr_41678[(10)] = inst_41661);

return statearr_41678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41668__$1,(8),inst_41646);
} else {
if((state_val_41669 === (8))){
var inst_41663 = (state_41668[(2)]);
var inst_41664 = klipse.lang.lua._STAR_loaded_STAR_ = true;
var state_41668__$1 = (function (){var statearr_41679 = state_41668;
(statearr_41679[(11)] = inst_41663);

return statearr_41679;
})();
var statearr_41680_41692 = state_41668__$1;
(statearr_41680_41692[(2)] = inst_41664);

(statearr_41680_41692[(1)] = (4));


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
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__21022__auto__ = null;
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__21022__auto____0 = (function (){
var statearr_41681 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41681[(0)] = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__21022__auto__);

(statearr_41681[(1)] = (1));

return statearr_41681;
});
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__21022__auto____1 = (function (state_41668){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41682){if((e41682 instanceof Object)){
var ex__21025__auto__ = e41682;
var statearr_41683_41693 = state_41668;
(statearr_41683_41693[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41694 = state_41668;
state_41668 = G__41694;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__21022__auto__ = function(state_41668){
switch(arguments.length){
case 0:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__21022__auto____1.call(this,state_41668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__21022__auto____0;
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__21022__auto____1;
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41684 = f__21189__auto__.call(null);
(statearr_41684[(6)] = c__21188__auto__);

return statearr_41684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.lua.eval_STAR_ = (function klipse$lang$lua$eval_STAR_(src,opts){
var c = cljs.core.async.chan.call(null);
try{var obj41696_41706 = window;
var obj41696_41707__$1 = (((!((obj41696_41706 == null))))?obj41696_41706:({}));
var inner_obj__25981__auto___41708 = (function (){var child41697 = (obj41696_41707__$1["Module"]);
if((!((child41697 == null)))){
return child41697;
} else {
var new_child__25953__auto__ = ({});
var obj41702_41709 = obj41696_41707__$1;
(obj41702_41709["Module"] = new_child__25953__auto__);


return new_child__25953__auto__;
}
})();
var obj41703_41710 = inner_obj__25981__auto___41708;
(obj41703_41710["print"] = ((function (obj41703_41710,obj41696_41706,obj41696_41707__$1,inner_obj__25981__auto___41708,c){
return (function (txt){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("lua res:",txt);
} else {
}

if(cljs.core._EQ_.call(null,txt,"emsc")){
return null;
} else {
return cljs.core.async.put_BANG_.call(null,c,txt);
}
});})(obj41703_41710,obj41696_41706,obj41696_41707__$1,inner_obj__25981__auto___41708,c))
);



var obj__26008__auto___41711 = window;
var f__26009__auto___41712 = (function (){var obj41704 = obj__26008__auto___41711;
var k41705 = "evalLua";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41704,k41705)){
return (obj41704[k41705]);
} else {
return null;
}
})();
f__26009__auto___41712.call(obj__26008__auto___41711,src,opts);

return c;
}catch (e41695){var e = e41695;
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.lua.the_eval = (function klipse$lang$lua$the_eval(src,opts){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41720){
var state_val_41721 = (state_41720[(1)]);
if((state_val_41721 === (1))){
var inst_41713 = klipse.lang.lua.ensure_loaded_BANG_.call(null);
var state_41720__$1 = state_41720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41720__$1,(2),inst_41713);
} else {
if((state_val_41721 === (2))){
var inst_41715 = (state_41720[(2)]);
var inst_41716 = klipse.lang.lua.eval_STAR_.call(null,src,opts);
var state_41720__$1 = (function (){var statearr_41722 = state_41720;
(statearr_41722[(7)] = inst_41715);

return statearr_41722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41720__$1,(3),inst_41716);
} else {
if((state_val_41721 === (3))){
var inst_41718 = (state_41720[(2)]);
var state_41720__$1 = state_41720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41720__$1,inst_41718);
} else {
return null;
}
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$lua$the_eval_$_state_machine__21022__auto__ = null;
var klipse$lang$lua$the_eval_$_state_machine__21022__auto____0 = (function (){
var statearr_41723 = [null,null,null,null,null,null,null,null];
(statearr_41723[(0)] = klipse$lang$lua$the_eval_$_state_machine__21022__auto__);

(statearr_41723[(1)] = (1));

return statearr_41723;
});
var klipse$lang$lua$the_eval_$_state_machine__21022__auto____1 = (function (state_41720){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41724){if((e41724 instanceof Object)){
var ex__21025__auto__ = e41724;
var statearr_41725_41727 = state_41720;
(statearr_41725_41727[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41728 = state_41720;
state_41720 = G__41728;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$lua$the_eval_$_state_machine__21022__auto__ = function(state_41720){
switch(arguments.length){
case 0:
return klipse$lang$lua$the_eval_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$lua$the_eval_$_state_machine__21022__auto____1.call(this,state_41720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$the_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$the_eval_$_state_machine__21022__auto____0;
klipse$lang$lua$the_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$the_eval_$_state_machine__21022__auto____1;
return klipse$lang$lua$the_eval_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41726 = f__21189__auto__.call(null);
(statearr_41726[(6)] = c__21188__auto__);

return statearr_41726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.lua.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-lua",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lua.the_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"lua")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"lua","selector_lua",klipse.lang.lua.opts);

//# sourceMappingURL=lua.js.map
