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

var obj26634 = window;
var obj26635 = (((!((obj26634 == null))))?obj26634:({}));
(obj26635["evalLua"] = (function (){var obj__18568__auto__ = Module;
var f__18569__auto__ = (function (){var obj26638 = obj__18568__auto__;
var k26639 = "cwrap";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26638,k26639)){
return (obj26638[k26639]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,"run_lua","number",["string"]);
})());

return obj26635;
})], null)], null);
});
klipse.lang.lua.load_module_BANG_ = (function klipse$lang$lua$load_module_BANG_(){
var xhr = (new window.XMLHttpRequest());
var obj__18568__auto___26662 = xhr;
var f__18569__auto___26663 = (function (){var obj26640 = obj__18568__auto___26662;
var k26641 = "open";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26640,k26641)){
return (obj26640[k26641]);
} else {
return null;
}
})();
f__18569__auto___26663.call(obj__18568__auto___26662,"GET",klipse.common.registry.wasm_src.call(null,"lua.wasm"));

var obj26642_26664 = xhr;
var obj26643_26665 = (((!((obj26642_26664 == null))))?obj26642_26664:({}));
(obj26643_26665["responseType"] = "arraybuffer");


var obj__18568__auto___26666 = xhr;
var f__18569__auto___26667 = (function (){var obj26646 = obj__18568__auto___26666;
var k26647 = "overrideMimeType";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26646,k26647)){
return (obj26646[k26647]);
} else {
return null;
}
})();
f__18569__auto___26667.call(obj__18568__auto___26666,"application/javascript");

var obj26648_26668 = xhr;
var obj26649_26669 = (((!((obj26648_26668 == null))))?obj26648_26668:({}));
(obj26649_26669["onload"] = ((function (obj26649_26669,obj26648_26668,xhr){
return (function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("wasm loaded:");
} else {
}

var obj26652_26670 = window;
var obj26652_26671__$1 = (((!((obj26652_26670 == null))))?obj26652_26670:({}));
var inner_obj__18541__auto___26672 = (function (){var child26653 = (obj26652_26671__$1["Module"]);
if((!((child26653 == null)))){
return child26653;
} else {
var new_child__18513__auto__ = ({});
var obj26658_26673 = obj26652_26671__$1;
(obj26658_26673["Module"] = new_child__18513__auto__);


return new_child__18513__auto__;
}
})();
var obj26659_26674 = inner_obj__18541__auto___26672;
(obj26659_26674["wasmBinary"] = (xhr["response"]));



return klipse.utils.add_script_tag_BANG_.call(null,klipse.common.registry.scripts_src.call(null,"emscripten_module.js"));
});})(obj26649_26669,obj26648_26668,xhr))
);


var obj__18568__auto__ = xhr;
var f__18569__auto__ = (function (){var obj26660 = obj__18568__auto__;
var k26661 = "send";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26660,k26661)){
return (obj26660[k26661]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,null);
});
klipse.lang.lua.ensure_loaded_BANG_ = (function klipse$lang$lua$ensure_loaded_BANG_(){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26699){
var state_val_26700 = (state_26699[(1)]);
if((state_val_26700 === (1))){
var state_26699__$1 = state_26699;
if(klipse.lang.lua._STAR_loaded_STAR_){
var statearr_26701_26716 = state_26699__$1;
(statearr_26701_26716[(1)] = (2));

} else {
var statearr_26702_26717 = state_26699__$1;
(statearr_26702_26717[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (2))){
var state_26699__$1 = state_26699;
var statearr_26703_26718 = state_26699__$1;
(statearr_26703_26718[(2)] = null);

(statearr_26703_26718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (3))){
var inst_26677 = (state_26699[(7)]);
var inst_26677__$1 = cljs.core.async.chan.call(null);
var inst_26678 = klipse.lang.lua.create_module_BANG_.call(null,inst_26677__$1);
var inst_26681 = (window == null);
var inst_26682 = cljs.core.not.call(null,inst_26681);
var state_26699__$1 = (function (){var statearr_26704 = state_26699;
(statearr_26704[(8)] = inst_26678);

(statearr_26704[(7)] = inst_26677__$1);

return statearr_26704;
})();
if(inst_26682){
var statearr_26705_26719 = state_26699__$1;
(statearr_26705_26719[(1)] = (5));

} else {
var statearr_26706_26720 = state_26699__$1;
(statearr_26706_26720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (4))){
var inst_26697 = (state_26699[(2)]);
var state_26699__$1 = state_26699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26699__$1,inst_26697);
} else {
if((state_val_26700 === (5))){
var state_26699__$1 = state_26699;
var statearr_26707_26721 = state_26699__$1;
(statearr_26707_26721[(2)] = window);

(statearr_26707_26721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (6))){
var inst_26687 = ({});
var state_26699__$1 = state_26699;
var statearr_26708_26722 = state_26699__$1;
(statearr_26708_26722[(2)] = inst_26687);

(statearr_26708_26722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (7))){
var inst_26678 = (state_26699[(8)]);
var inst_26677 = (state_26699[(7)]);
var inst_26689 = (state_26699[(2)]);
var inst_26690 = cljs.core.clj__GT_js.call(null,inst_26678);
var inst_26691 = (inst_26689["Module"] = inst_26690);
var inst_26692 = klipse.lang.lua.load_module_BANG_.call(null);
var state_26699__$1 = (function (){var statearr_26709 = state_26699;
(statearr_26709[(9)] = inst_26692);

(statearr_26709[(10)] = inst_26691);

return statearr_26709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26699__$1,(8),inst_26677);
} else {
if((state_val_26700 === (8))){
var inst_26694 = (state_26699[(2)]);
var inst_26695 = klipse.lang.lua._STAR_loaded_STAR_ = true;
var state_26699__$1 = (function (){var statearr_26710 = state_26699;
(statearr_26710[(11)] = inst_26694);

return statearr_26710;
})();
var statearr_26711_26723 = state_26699__$1;
(statearr_26711_26723[(2)] = inst_26695);

(statearr_26711_26723[(1)] = (4));


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
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15944__auto__ = null;
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15944__auto____0 = (function (){
var statearr_26712 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26712[(0)] = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15944__auto__);

(statearr_26712[(1)] = (1));

return statearr_26712;
});
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15944__auto____1 = (function (state_26699){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26713){if((e26713 instanceof Object)){
var ex__15947__auto__ = e26713;
var statearr_26714_26724 = state_26699;
(statearr_26714_26724[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26725 = state_26699;
state_26699 = G__26725;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15944__auto__ = function(state_26699){
switch(arguments.length){
case 0:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15944__auto____1.call(this,state_26699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15944__auto____0;
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15944__auto____1;
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26715 = f__16039__auto__.call(null);
(statearr_26715[(6)] = c__16038__auto__);

return statearr_26715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.lua.eval_STAR_ = (function klipse$lang$lua$eval_STAR_(src,opts){
var c = cljs.core.async.chan.call(null);
try{var obj26727_26737 = window;
var obj26727_26738__$1 = (((!((obj26727_26737 == null))))?obj26727_26737:({}));
var inner_obj__18541__auto___26739 = (function (){var child26728 = (obj26727_26738__$1["Module"]);
if((!((child26728 == null)))){
return child26728;
} else {
var new_child__18513__auto__ = ({});
var obj26733_26740 = obj26727_26738__$1;
(obj26733_26740["Module"] = new_child__18513__auto__);


return new_child__18513__auto__;
}
})();
var obj26734_26741 = inner_obj__18541__auto___26739;
(obj26734_26741["print"] = ((function (obj26734_26741,obj26727_26737,obj26727_26738__$1,inner_obj__18541__auto___26739,c){
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
});})(obj26734_26741,obj26727_26737,obj26727_26738__$1,inner_obj__18541__auto___26739,c))
);



var obj__18568__auto___26742 = window;
var f__18569__auto___26743 = (function (){var obj26735 = obj__18568__auto___26742;
var k26736 = "evalLua";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26735,k26736)){
return (obj26735[k26736]);
} else {
return null;
}
})();
f__18569__auto___26743.call(obj__18568__auto___26742,src,opts);

return c;
}catch (e26726){var e = e26726;
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.lua.the_eval = (function klipse$lang$lua$the_eval(src,opts){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26751){
var state_val_26752 = (state_26751[(1)]);
if((state_val_26752 === (1))){
var inst_26744 = klipse.lang.lua.ensure_loaded_BANG_.call(null);
var state_26751__$1 = state_26751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26751__$1,(2),inst_26744);
} else {
if((state_val_26752 === (2))){
var inst_26746 = (state_26751[(2)]);
var inst_26747 = klipse.lang.lua.eval_STAR_.call(null,src,opts);
var state_26751__$1 = (function (){var statearr_26753 = state_26751;
(statearr_26753[(7)] = inst_26746);

return statearr_26753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26751__$1,(3),inst_26747);
} else {
if((state_val_26752 === (3))){
var inst_26749 = (state_26751[(2)]);
var state_26751__$1 = state_26751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26751__$1,inst_26749);
} else {
return null;
}
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$lua$the_eval_$_state_machine__15944__auto__ = null;
var klipse$lang$lua$the_eval_$_state_machine__15944__auto____0 = (function (){
var statearr_26754 = [null,null,null,null,null,null,null,null];
(statearr_26754[(0)] = klipse$lang$lua$the_eval_$_state_machine__15944__auto__);

(statearr_26754[(1)] = (1));

return statearr_26754;
});
var klipse$lang$lua$the_eval_$_state_machine__15944__auto____1 = (function (state_26751){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26755){if((e26755 instanceof Object)){
var ex__15947__auto__ = e26755;
var statearr_26756_26758 = state_26751;
(statearr_26756_26758[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26759 = state_26751;
state_26751 = G__26759;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$lua$the_eval_$_state_machine__15944__auto__ = function(state_26751){
switch(arguments.length){
case 0:
return klipse$lang$lua$the_eval_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$lua$the_eval_$_state_machine__15944__auto____1.call(this,state_26751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$the_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$the_eval_$_state_machine__15944__auto____0;
klipse$lang$lua$the_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$the_eval_$_state_machine__15944__auto____1;
return klipse$lang$lua$the_eval_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26757 = f__16039__auto__.call(null);
(statearr_26757[(6)] = c__16038__auto__);

return statearr_26757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.lua.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-lua",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lua.the_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"lua")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"lua","selector_lua",klipse.lang.lua.opts);

//# sourceMappingURL=lua.js.map
