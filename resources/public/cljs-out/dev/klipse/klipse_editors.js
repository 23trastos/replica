// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.klipse_editors');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('applied_science.js_interop');
goog.require('gadjett.collections');
goog.require('cljs.spec.alpha');
goog.require('klipse.utils');
goog.require('klipse.dom_utils');
goog.require('cljs.core.async');
goog.require('klipse.ui.editors.common');
goog.require('klipse.ui.editors.editor');
klipse.klipse_editors.create_state = (function klipse$klipse_editors$create_state(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35746 = arguments.length;
var i__4731__auto___35747 = (0);
while(true){
if((i__4731__auto___35747 < len__4730__auto___35746)){
args__4736__auto__.push((arguments[i__4731__auto___35747]));

var G__35748 = (i__4731__auto___35747 + (1));
i__4731__auto___35747 = G__35748;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic = (function (p__35743){
var map__35744 = p__35743;
var map__35744__$1 = (((((!((map__35744 == null))))?(((((map__35744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35744):map__35744);
var result_element = cljs.core.get.call(null,map__35744__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__35744__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var editor_args = cljs.core.get.call(null,map__35744__$1,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598),(0),new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"container-id","container-id",1274665684),(cljs.core.truth_(container)?(container["id"]):null),new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element-id","result-element-id",-1916360024),(cljs.core.truth_(result_element)?(result_element["id"]):null),new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element], null));
});

klipse.klipse_editors.create_state.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
klipse.klipse_editors.create_state.cljs$lang$applyTo = (function (seq35742){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35742));
});

klipse.klipse_editors.klipse_result_attrs = (function klipse$klipse_editors$klipse_result_attrs(n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-result",new cljs.core.Keyword(null,"id","id",-1388402092),["klipse-result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null);
});
klipse.klipse_editors.klipse_container_attrs = (function klipse$klipse_editors$klipse_container_attrs(n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-container",new cljs.core.Keyword(null,"id","id",-1388402092),["klipse-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null);
});
/**
 * 
 *   Evaluates the `value` - with `preamble` prepended to it.
 *   If `setter` is defined, call `setter` with the result of the evaluation.
 *   Block until the first evaluation.
 *   Call `setter` with subsequent evaluations asynchronously. Subsequent evaluations don't include `preamble`.
 *   (Subsequent evaluations occur with `server-eval` where printing results are written on the channel, one after the other.
 *   In the case of client side evaluation, the channel is closed after the first message on the channel (this is done implicitly by `go`).
 *   
 */
klipse.klipse_editors.eval_in_editor = (function klipse$klipse_editors$eval_in_editor(eval_fn,src_code,unsafe_setter,p__35749,state){
var map__35750 = p__35749;
var map__35750__$1 = (((((!((map__35750 == null))))?(((((map__35750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35750):map__35750);
var loop_msec = cljs.core.get.call(null,map__35750__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__35750__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("Evaluating: ",src_code);
} else {
}

var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble){
return (function (state_35885){
var state_val_35886 = (state_35885[(1)]);
if((state_val_35886 === (7))){
var inst_35762 = (state_35885[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35885,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_35762__$1 = cljs.core.deref.call(null,state);
var inst_35764 = (inst_35762__$1 == null);
var inst_35765 = cljs.core.not.call(null,inst_35764);
var state_35885__$1 = (function (){var statearr_35887 = state_35885;
(statearr_35887[(7)] = inst_35762__$1);

return statearr_35887;
})();
if(inst_35765){
var statearr_35888_35968 = state_35885__$1;
(statearr_35888_35968[(1)] = (8));

} else {
var statearr_35889_35969 = state_35885__$1;
(statearr_35889_35969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (20))){
var inst_35800 = (state_35885[(8)]);
var inst_35800__$1 = (state_35885[(2)]);
var inst_35801 = typeof inst_35800__$1 === 'string';
var state_35885__$1 = (function (){var statearr_35890 = state_35885;
(statearr_35890[(8)] = inst_35800__$1);

return statearr_35890;
})();
if(cljs.core.truth_(inst_35801)){
var statearr_35891_35970 = state_35885__$1;
(statearr_35891_35970[(1)] = (21));

} else {
var statearr_35892_35971 = state_35885__$1;
(statearr_35892_35971[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (1))){
var state_35885__$1 = state_35885;
if(cljs.core.truth_(unsafe_setter)){
var statearr_35893_35972 = state_35885__$1;
(statearr_35893_35972[(1)] = (2));

} else {
var statearr_35894_35973 = state_35885__$1;
(statearr_35894_35973[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (24))){
var inst_35783 = (state_35885[(9)]);
var inst_35784 = (state_35885[(10)]);
var inst_35798 = (state_35885[(11)]);
var inst_35755 = (state_35885[(12)]);
var inst_35800 = (state_35885[(8)]);
var inst_35785 = (state_35885[(13)]);
var inst_35806 = (state_35885[(14)]);
var inst_35839 = cljs.core.async.chan.call(null,(1));
var inst_35840 = (function (){var setter = inst_35755;
var map__35761 = inst_35783;
var cmd_chan = inst_35784;
var eval_counter = inst_35785;
var evaluation_chan = inst_35798;
var result = inst_35800;
var first_result = inst_35806;
var c__21188__auto____$1 = inst_35839;
return ((function (setter,map__35761,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__21188__auto____$1,inst_35783,inst_35784,inst_35798,inst_35755,inst_35800,inst_35785,inst_35806,inst_35839,state_val_35886,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (setter,map__35761,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__21188__auto____$1,inst_35783,inst_35784,inst_35798,inst_35755,inst_35800,inst_35785,inst_35806,inst_35839,state_val_35886,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble){
return (function (state_35837){
var state_val_35838 = (state_35837[(1)]);
if((state_val_35838 === (1))){
var state_35837__$1 = state_35837;
var statearr_35895_35974 = state_35837__$1;
(statearr_35895_35974[(2)] = null);

(statearr_35895_35974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (2))){
var inst_35813 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35814 = cljs.core.async.timeout.call(null,loop_msec);
var inst_35815 = [cmd_chan,inst_35814];
var inst_35816 = (new cljs.core.PersistentVector(null,2,(5),inst_35813,inst_35815,null));
var state_35837__$1 = state_35837;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35837__$1,(4),inst_35816);
} else {
if((state_val_35838 === (3))){
var inst_35835 = (state_35837[(2)]);
var state_35837__$1 = state_35837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35837__$1,inst_35835);
} else {
if((state_val_35838 === (4))){
var inst_35818 = (state_35837[(2)]);
var inst_35819 = cljs.core.nth.call(null,inst_35818,(0),null);
var inst_35820 = cljs.core.nth.call(null,inst_35818,(1),null);
var inst_35821 = cljs.core._EQ_.call(null,inst_35820,cmd_chan);
var inst_35822 = cljs.core._EQ_.call(null,inst_35819,new cljs.core.Keyword(null,"reset","reset",-800929946));
var inst_35823 = ((inst_35821) && (inst_35822));
var state_35837__$1 = state_35837;
if(cljs.core.truth_(inst_35823)){
var statearr_35896_35975 = state_35837__$1;
(statearr_35896_35975[(1)] = (5));

} else {
var statearr_35897_35976 = state_35837__$1;
(statearr_35897_35976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (5))){
var state_35837__$1 = state_35837;
var statearr_35898_35977 = state_35837__$1;
(statearr_35898_35977[(2)] = null);

(statearr_35898_35977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (6))){
var inst_35826 = cljs.core.deref.call(null,state);
var inst_35827 = eval_fn.call(null,src_code,inst_35826);
var state_35837__$1 = state_35837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35837__$1,(8),inst_35827);
} else {
if((state_val_35838 === (7))){
var inst_35833 = (state_35837[(2)]);
var state_35837__$1 = state_35837;
var statearr_35899_35978 = state_35837__$1;
(statearr_35899_35978[(2)] = inst_35833);

(statearr_35899_35978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (8))){
var inst_35829 = (state_35837[(2)]);
var inst_35830 = setter.call(null,inst_35829);
var state_35837__$1 = (function (){var statearr_35900 = state_35837;
(statearr_35900[(7)] = inst_35830);

return statearr_35900;
})();
var statearr_35901_35979 = state_35837__$1;
(statearr_35901_35979[(2)] = null);

(statearr_35901_35979[(1)] = (2));


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
});})(setter,map__35761,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__21188__auto____$1,inst_35783,inst_35784,inst_35798,inst_35755,inst_35800,inst_35785,inst_35806,inst_35839,state_val_35886,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble))
;
return ((function (switch__21021__auto__,setter,map__35761,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__21188__auto____$1,inst_35783,inst_35784,inst_35798,inst_35755,inst_35800,inst_35785,inst_35806,inst_35839,state_val_35886,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____0 = (function (){
var statearr_35902 = [null,null,null,null,null,null,null,null];
(statearr_35902[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__);

(statearr_35902[(1)] = (1));

return statearr_35902;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____1 = (function (state_35837){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_35837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e35903){if((e35903 instanceof Object)){
var ex__21025__auto__ = e35903;
var statearr_35904_35980 = state_35837;
(statearr_35904_35980[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35981 = state_35837;
state_35837 = G__35981;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__ = function(state_35837){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____1.call(this,state_35837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,setter,map__35761,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__21188__auto____$1,inst_35783,inst_35784,inst_35798,inst_35755,inst_35800,inst_35785,inst_35806,inst_35839,state_val_35886,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble))
})();
var state__21190__auto__ = (function (){var statearr_35905 = f__21189__auto__.call(null);
(statearr_35905[(6)] = c__21188__auto____$1);

return statearr_35905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});
;})(setter,map__35761,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__21188__auto____$1,inst_35783,inst_35784,inst_35798,inst_35755,inst_35800,inst_35785,inst_35806,inst_35839,state_val_35886,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble))
})();
var inst_35841 = cljs.core.async.impl.dispatch.run.call(null,inst_35840);
var state_35885__$1 = (function (){var statearr_35906 = state_35885;
(statearr_35906[(15)] = inst_35841);

return statearr_35906;
})();
var statearr_35907_35982 = state_35885__$1;
(statearr_35907_35982[(2)] = inst_35839);

(statearr_35907_35982[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (4))){
var inst_35755 = (state_35885[(2)]);
var state_35885__$1 = (function (){var statearr_35908 = state_35885;
(statearr_35908[(12)] = inst_35755);

return statearr_35908;
})();
var statearr_35909_35983 = state_35885__$1;
(statearr_35909_35983[(2)] = null);

(statearr_35909_35983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (15))){
var inst_35762 = (state_35885[(7)]);
var state_35885__$1 = state_35885;
var statearr_35910_35984 = state_35885__$1;
(statearr_35910_35984[(2)] = inst_35762);

(statearr_35910_35984[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (21))){
var inst_35800 = (state_35885[(8)]);
var state_35885__$1 = state_35885;
var statearr_35911_35985 = state_35885__$1;
(statearr_35911_35985[(2)] = inst_35800);

(statearr_35911_35985[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (13))){
var inst_35775 = (state_35885[(2)]);
var state_35885__$1 = state_35885;
var statearr_35912_35986 = state_35885__$1;
(statearr_35912_35986[(2)] = inst_35775);

(statearr_35912_35986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (22))){
var inst_35800 = (state_35885[(8)]);
var inst_35804 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_35800);
var state_35885__$1 = state_35885;
var statearr_35913_35987 = state_35885__$1;
(statearr_35913_35987[(2)] = inst_35804);

(statearr_35913_35987[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (6))){
var inst_35755 = (state_35885[(12)]);
var inst_35756 = (state_35885[(2)]);
var inst_35757 = inst_35755.call(null,inst_35756);
var state_35885__$1 = state_35885;
var statearr_35914_35988 = state_35885__$1;
(statearr_35914_35988[(2)] = inst_35757);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35885__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (25))){
var state_35885__$1 = state_35885;
var statearr_35915_35989 = state_35885__$1;
(statearr_35915_35989[(2)] = null);

(statearr_35915_35989[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (17))){
var state_35885__$1 = state_35885;
var statearr_35916_35990 = state_35885__$1;
(statearr_35916_35990[(2)] = null);

(statearr_35916_35990[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (3))){
var state_35885__$1 = state_35885;
var statearr_35917_35991 = state_35885__$1;
(statearr_35917_35991[(2)] = cljs.core.any_QMARK_);

(statearr_35917_35991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (12))){
var state_35885__$1 = state_35885;
var statearr_35918_35992 = state_35885__$1;
(statearr_35918_35992[(2)] = false);

(statearr_35918_35992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (2))){
var state_35885__$1 = state_35885;
var statearr_35919_35993 = state_35885__$1;
(statearr_35919_35993[(2)] = unsafe_setter);

(statearr_35919_35993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (23))){
var inst_35755 = (state_35885[(12)]);
var inst_35806 = (state_35885[(14)]);
var inst_35806__$1 = (state_35885[(2)]);
var inst_35807 = inst_35755.call(null,inst_35806__$1);
var state_35885__$1 = (function (){var statearr_35920 = state_35885;
(statearr_35920[(16)] = inst_35807);

(statearr_35920[(14)] = inst_35806__$1);

return statearr_35920;
})();
if(cljs.core.truth_(loop_msec)){
var statearr_35921_35994 = state_35885__$1;
(statearr_35921_35994[(1)] = (24));

} else {
var statearr_35922_35995 = state_35885__$1;
(statearr_35922_35995[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (19))){
var inst_35798 = (state_35885[(11)]);
var inst_35791 = (state_35885[(2)]);
var inst_35792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35793 = [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598)];
var inst_35794 = (new cljs.core.PersistentVector(null,1,(5),inst_35792,inst_35793,null));
var inst_35795 = cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,inst_35794,cljs.core.inc);
var inst_35796 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(preamble),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_code)].join('');
var inst_35797 = cljs.core.deref.call(null,state);
var inst_35798__$1 = eval_fn.call(null,inst_35796,inst_35797);
var state_35885__$1 = (function (){var statearr_35923 = state_35885;
(statearr_35923[(17)] = inst_35791);

(statearr_35923[(11)] = inst_35798__$1);

(statearr_35923[(18)] = inst_35795);

return statearr_35923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35885__$1,(20),inst_35798__$1);
} else {
if((state_val_35886 === (11))){
var state_35885__$1 = state_35885;
var statearr_35924_35996 = state_35885__$1;
(statearr_35924_35996[(2)] = true);

(statearr_35924_35996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (9))){
var state_35885__$1 = state_35885;
var statearr_35925_35997 = state_35885__$1;
(statearr_35925_35997[(2)] = false);

(statearr_35925_35997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (5))){
var inst_35883 = (state_35885[(2)]);
var state_35885__$1 = state_35885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35885__$1,inst_35883);
} else {
if((state_val_35886 === (14))){
var inst_35762 = (state_35885[(7)]);
var inst_35780 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35762);
var state_35885__$1 = state_35885;
var statearr_35926_35998 = state_35885__$1;
(statearr_35926_35998[(2)] = inst_35780);

(statearr_35926_35998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (26))){
var inst_35783 = (state_35885[(9)]);
var inst_35784 = (state_35885[(10)]);
var inst_35798 = (state_35885[(11)]);
var inst_35755 = (state_35885[(12)]);
var inst_35800 = (state_35885[(8)]);
var inst_35785 = (state_35885[(13)]);
var inst_35806 = (state_35885[(14)]);
var inst_35844 = (state_35885[(2)]);
var inst_35879 = cljs.core.async.chan.call(null,(1));
var inst_35880 = (function (){var setter = inst_35755;
var map__35761 = inst_35783;
var cmd_chan = inst_35784;
var eval_counter = inst_35785;
var evaluation_chan = inst_35798;
var result = inst_35800;
var first_result = inst_35806;
var c__21188__auto____$1 = inst_35879;
return ((function (setter,map__35761,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__21188__auto____$1,inst_35783,inst_35784,inst_35798,inst_35755,inst_35800,inst_35785,inst_35806,inst_35844,inst_35879,state_val_35886,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (setter,map__35761,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__21188__auto____$1,inst_35783,inst_35784,inst_35798,inst_35755,inst_35800,inst_35785,inst_35806,inst_35844,inst_35879,state_val_35886,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble){
return (function (state_35877){
var state_val_35878 = (state_35877[(1)]);
if((state_val_35878 === (7))){
var inst_35848 = (state_35877[(7)]);
var inst_35855 = (state_35877[(8)]);
var inst_35854 = (state_35877[(2)]);
var inst_35855__$1 = cljs.core.map_QMARK_.call(null,inst_35848);
var state_35877__$1 = (function (){var statearr_35927 = state_35877;
(statearr_35927[(9)] = inst_35854);

(statearr_35927[(8)] = inst_35855__$1);

return statearr_35927;
})();
if(inst_35855__$1){
var statearr_35928_35999 = state_35877__$1;
(statearr_35928_35999[(1)] = (8));

} else {
var statearr_35929_36000 = state_35877__$1;
(statearr_35929_36000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (1))){
var inst_35845 = first_result;
var state_35877__$1 = (function (){var statearr_35930 = state_35877;
(statearr_35930[(10)] = inst_35845);

return statearr_35930;
})();
var statearr_35931_36001 = state_35877__$1;
(statearr_35931_36001[(2)] = null);

(statearr_35931_36001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (4))){
var inst_35848 = (state_35877[(7)]);
var inst_35848__$1 = (state_35877[(2)]);
var inst_35849 = cljs.core.map_QMARK_.call(null,inst_35848__$1);
var state_35877__$1 = (function (){var statearr_35932 = state_35877;
(statearr_35932[(7)] = inst_35848__$1);

return statearr_35932;
})();
if(inst_35849){
var statearr_35933_36002 = state_35877__$1;
(statearr_35933_36002[(1)] = (5));

} else {
var statearr_35934_36003 = state_35877__$1;
(statearr_35934_36003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (15))){
var state_35877__$1 = state_35877;
var statearr_35935_36004 = state_35877__$1;
(statearr_35935_36004[(2)] = null);

(statearr_35935_36004[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (13))){
var inst_35854 = (state_35877[(9)]);
var inst_35864 = (state_35877[(2)]);
var inst_35865 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35864),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35854)].join('');
var inst_35866 = (inst_35854 == null);
var inst_35867 = cljs.core.not.call(null,inst_35866);
var state_35877__$1 = (function (){var statearr_35936 = state_35877;
(statearr_35936[(11)] = inst_35865);

return statearr_35936;
})();
if(inst_35867){
var statearr_35937_36005 = state_35877__$1;
(statearr_35937_36005[(1)] = (14));

} else {
var statearr_35938_36006 = state_35877__$1;
(statearr_35938_36006[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (6))){
var inst_35848 = (state_35877[(7)]);
var state_35877__$1 = state_35877;
var statearr_35939_36007 = state_35877__$1;
(statearr_35939_36007[(2)] = inst_35848);

(statearr_35939_36007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (3))){
var inst_35875 = (state_35877[(2)]);
var state_35877__$1 = state_35877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35877__$1,inst_35875);
} else {
if((state_val_35878 === (12))){
var inst_35845 = (state_35877[(10)]);
var state_35877__$1 = state_35877;
var statearr_35940_36008 = state_35877__$1;
(statearr_35940_36008[(2)] = inst_35845);

(statearr_35940_36008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (2))){
var state_35877__$1 = state_35877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35877__$1,(4),evaluation_chan);
} else {
if((state_val_35878 === (11))){
var state_35877__$1 = state_35877;
var statearr_35941_36009 = state_35877__$1;
(statearr_35941_36009[(2)] = null);

(statearr_35941_36009[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (9))){
var inst_35855 = (state_35877[(8)]);
var state_35877__$1 = state_35877;
var statearr_35942_36010 = state_35877__$1;
(statearr_35942_36010[(2)] = inst_35855);

(statearr_35942_36010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (5))){
var inst_35848 = (state_35877[(7)]);
var inst_35851 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_35848);
var state_35877__$1 = state_35877;
var statearr_35943_36011 = state_35877__$1;
(statearr_35943_36011[(2)] = inst_35851);

(statearr_35943_36011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (14))){
var inst_35865 = (state_35877[(11)]);
var inst_35869 = setter.call(null,inst_35865);
var inst_35845 = inst_35865;
var state_35877__$1 = (function (){var statearr_35944 = state_35877;
(statearr_35944[(10)] = inst_35845);

(statearr_35944[(12)] = inst_35869);

return statearr_35944;
})();
var statearr_35945_36012 = state_35877__$1;
(statearr_35945_36012[(2)] = null);

(statearr_35945_36012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (16))){
var inst_35873 = (state_35877[(2)]);
var state_35877__$1 = state_35877;
var statearr_35946_36013 = state_35877__$1;
(statearr_35946_36013[(2)] = inst_35873);

(statearr_35946_36013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (10))){
var inst_35860 = (state_35877[(2)]);
var state_35877__$1 = state_35877;
if(cljs.core.truth_(inst_35860)){
var statearr_35947_36014 = state_35877__$1;
(statearr_35947_36014[(1)] = (11));

} else {
var statearr_35948_36015 = state_35877__$1;
(statearr_35948_36015[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (8))){
var inst_35848 = (state_35877[(7)]);
var inst_35857 = new cljs.core.Keyword(null,"remove-previous-results","remove-previous-results",883218005).cljs$core$IFn$_invoke$arity$1(inst_35848);
var state_35877__$1 = state_35877;
var statearr_35949_36016 = state_35877__$1;
(statearr_35949_36016[(2)] = inst_35857);

(statearr_35949_36016[(1)] = (10));


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
});})(setter,map__35761,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__21188__auto____$1,inst_35783,inst_35784,inst_35798,inst_35755,inst_35800,inst_35785,inst_35806,inst_35844,inst_35879,state_val_35886,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble))
;
return ((function (switch__21021__auto__,setter,map__35761,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__21188__auto____$1,inst_35783,inst_35784,inst_35798,inst_35755,inst_35800,inst_35785,inst_35806,inst_35844,inst_35879,state_val_35886,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____0 = (function (){
var statearr_35950 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35950[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__);

(statearr_35950[(1)] = (1));

return statearr_35950;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____1 = (function (state_35877){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_35877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e35951){if((e35951 instanceof Object)){
var ex__21025__auto__ = e35951;
var statearr_35952_36017 = state_35877;
(statearr_35952_36017[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36018 = state_35877;
state_35877 = G__36018;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__ = function(state_35877){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____1.call(this,state_35877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,setter,map__35761,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__21188__auto____$1,inst_35783,inst_35784,inst_35798,inst_35755,inst_35800,inst_35785,inst_35806,inst_35844,inst_35879,state_val_35886,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble))
})();
var state__21190__auto__ = (function (){var statearr_35953 = f__21189__auto__.call(null);
(statearr_35953[(6)] = c__21188__auto____$1);

return statearr_35953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});
;})(setter,map__35761,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__21188__auto____$1,inst_35783,inst_35784,inst_35798,inst_35755,inst_35800,inst_35785,inst_35806,inst_35844,inst_35879,state_val_35886,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble))
})();
var inst_35881 = cljs.core.async.impl.dispatch.run.call(null,inst_35880);
var state_35885__$1 = (function (){var statearr_35954 = state_35885;
(statearr_35954[(19)] = inst_35844);

(statearr_35954[(20)] = inst_35881);

return statearr_35954;
})();
var statearr_35955_36019 = state_35885__$1;
(statearr_35955_36019[(2)] = inst_35879);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35885__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (16))){
var inst_35783 = (state_35885[(9)]);
var inst_35785 = (state_35885[(13)]);
var inst_35783__$1 = (state_35885[(2)]);
var inst_35784 = cljs.core.get.call(null,inst_35783__$1,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306));
var inst_35785__$1 = cljs.core.get.call(null,inst_35783__$1,new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598));
var inst_35786 = (inst_35785__$1 === (0));
var state_35885__$1 = (function (){var statearr_35956 = state_35885;
(statearr_35956[(9)] = inst_35783__$1);

(statearr_35956[(10)] = inst_35784);

(statearr_35956[(13)] = inst_35785__$1);

return statearr_35956;
})();
if(cljs.core.truth_(inst_35786)){
var statearr_35957_36020 = state_35885__$1;
(statearr_35957_36020[(1)] = (17));

} else {
var statearr_35958_36021 = state_35885__$1;
(statearr_35958_36021[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (10))){
var inst_35778 = (state_35885[(2)]);
var state_35885__$1 = state_35885;
if(cljs.core.truth_(inst_35778)){
var statearr_35959_36022 = state_35885__$1;
(statearr_35959_36022[(1)] = (14));

} else {
var statearr_35960_36023 = state_35885__$1;
(statearr_35960_36023[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (18))){
var inst_35784 = (state_35885[(10)]);
var inst_35789 = cljs.core.async.put_BANG_.call(null,inst_35784,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_35885__$1 = state_35885;
var statearr_35961_36024 = state_35885__$1;
(statearr_35961_36024[(2)] = inst_35789);

(statearr_35961_36024[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (8))){
var inst_35762 = (state_35885[(7)]);
var inst_35767 = inst_35762.cljs$lang$protocol_mask$partition0$;
var inst_35768 = (inst_35767 & (64));
var inst_35769 = inst_35762.cljs$core$ISeq$;
var inst_35770 = (cljs.core.PROTOCOL_SENTINEL === inst_35769);
var inst_35771 = ((inst_35768) || (inst_35770));
var state_35885__$1 = state_35885;
if(cljs.core.truth_(inst_35771)){
var statearr_35962_36025 = state_35885__$1;
(statearr_35962_36025[(1)] = (11));

} else {
var statearr_35963_36026 = state_35885__$1;
(statearr_35963_36026[(1)] = (12));

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
});})(c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble))
;
return ((function (switch__21021__auto__,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____0 = (function (){
var statearr_35964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35964[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__);

(statearr_35964[(1)] = (1));

return statearr_35964;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____1 = (function (state_35885){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_35885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e35965){if((e35965 instanceof Object)){
var ex__21025__auto__ = e35965;
var statearr_35966_36027 = state_35885;
(statearr_35966_36027[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36028 = state_35885;
state_35885 = G__36028;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__ = function(state_35885){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____1.call(this,state_35885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble))
})();
var state__21190__auto__ = (function (){var statearr_35967 = f__21189__auto__.call(null);
(statearr_35967[(6)] = c__21188__auto__);

return statearr_35967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,map__35750,map__35750__$1,loop_msec,preamble))
);

return c__21188__auto__;
});
klipse.klipse_editors.eval_in_codemirror_editor = (function klipse$klipse_editors$eval_in_codemirror_editor(eval_fn,result_element,editor_source,snippet_args,mode,state){
var editor_args = new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?((function (editor_args){
return (function (p1__36029_SHARP_){
return klipse.ui.editors.editor.set_value_and_beautify.call(null,result_element,mode,p1__36029_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441).cljs$core$IFn$_invoke$arity$1(editor_args),new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false], null));
});})(editor_args))
:null),snippet_args,state);
});
klipse.klipse_editors.eval_in_dom_editor = (function klipse$klipse_editors$eval_in_dom_editor(eval_fn,result_element,source,snippet_args,state){
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,(function (){var or__4131__auto__ = klipse.dom_utils.value.call(null,source);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (source["textContent"]);
}
})(),(cljs.core.truth_(result_element)?cljs.core.partial.call(null,goog.dom.setTextContent,result_element):null),snippet_args,state);
});
klipse.klipse_editors.wrap_result_in_html = (function klipse$klipse_editors$wrap_result_in_html(elem,res){
var wrapped_res = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,res),Error))?["<div class=\"klipse-error\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(res),"</div>"].join(''):res);
var obj36030 = elem;
var obj36031 = (((!((obj36030 == null))))?obj36030:({}));
(obj36031["innerHTML"] = wrapped_res);

return obj36031;
});
klipse.klipse_editors.eval_in_html_editor = (function klipse$klipse_editors$eval_in_html_editor(eval_fn,result_element,editor_source,snippet_args,state){
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?cljs.core.partial.call(null,klipse.klipse_editors.wrap_result_in_html,result_element):null),snippet_args,state);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("klipse.klipse-editors","editor-options","klipse.klipse-editors/editor-options",1970701494,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword(null,"options-out","options-out",781271031),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword(null,"options-out","options-out",781271031),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword(null,"options-out","options-out",781271031)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword(null,"options-out","options-out",781271031),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
klipse.klipse_editors.default_editor_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true], null);
klipse.klipse_editors.editor_options = (function klipse$klipse_editors$editor_options(editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,cljs.core.assoc.call(null,klipse.klipse_editors.default_editor_options,new cljs.core.Keyword(null,"mode","mode",654403691),editor_in_mode),codemirror_options_in),cljs.core.merge.call(null,cljs.core.assoc.call(null,klipse.klipse_editors.default_editor_options,new cljs.core.Keyword(null,"mode","mode",654403691),editor_out_mode,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true),codemirror_options_out)], null);
});
if((typeof klipse !== 'undefined') && (typeof klipse.klipse_editors !== 'undefined') && (typeof klipse.klipse_editors.create_editor !== 'undefined')){
} else {
klipse.klipse_editors.create_editor = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.klipse-editors","create-editor"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (type,_){
return type;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"html","html",-998796897),(function (_,p__36034){
var map__36035 = p__36034;
var map__36035__$1 = (((((!((map__36035 == null))))?(((((map__36035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36035):map__36035);
var editor_args = map__36035__$1;
var eval_fn = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var source_code = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__36037 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__36037,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__36037,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var result_element = (cljs.core.truth_(no_result)?null:klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_result_attrs.call(null,snippet_num)));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_);
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
if(cljs.core.truth_(result_element)){
goog.dom.setTextContent(result_element,default_txt);
} else {
}

klipse.ui.editors.common.handle_events.call(null,in_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),((function (vec__36037,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__36035,map__36035__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_html_editor.call(null,eval_fn,result_element,in_editor,snippet_args,state);
});})(vec__36037,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__36035,map__36035__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
], null));

return ((function (vec__36037,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__36035,map__36035__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_html_editor.call(null,eval_fn,result_element,in_editor,snippet_args,state);
});
;})(vec__36037,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__36035,map__36035__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
}));
klipse.klipse_editors.editors = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
klipse.klipse_editors.add_editor = (function klipse$klipse_editors$add_editor(editor,snippet_num){
cljs.core.swap_BANG_.call(null,klipse.klipse_editors.editors,cljs.core.assoc,snippet_num,editor);

var obj36040 = window;
var obj36041 = (((!((obj36040 == null))))?obj36040:({}));
(obj36041["klipse_editors"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.editors)));

return obj36041;
});
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),(function (_,p__36044){
var map__36045 = p__36044;
var map__36045__$1 = (((((!((map__36045 == null))))?(((((map__36045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36045):map__36045);
var editor_args = map__36045__$1;
var eval_fn = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var mode = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var source_code = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__36047 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__36047,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__36047,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var ___$1 = klipse.dom_utils.create_div_after.call(null,container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-separator"], null));
var result_element = (cljs.core.truth_(no_result)?null:klipse.ui.editors.editor.create_editor_after_element.call(null,element,default_txt,out_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse-result",["klipse-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)].join('')], null)));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse-snippet",["klipse-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)].join('')], null));
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
klipse.ui.editors.common.handle_events.call(null,in_editor,gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-completion","on-completion",1522510572),((cljs.core._EQ_.call(null,"clojure",editor_in_mode))?((function (vec__36047,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__36045,map__36045__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.ui.editors.editor.trigger_autocomplete.call(null,in_editor,(function (){var parent__26015__auto__ = (function (){var obj36054 = (function (){var obj36052 = (function (){var obj36050 = window;
var k36051 = "klipse_clj";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj36050,k36051)){
return (obj36050[k36051]);
} else {
return null;
}
})();
var k36053 = "lang";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj36052,k36053)){
return (obj36052[k36053]);
} else {
return null;
}
})();
var k36055 = "clojure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj36054,k36055)){
return (obj36054[k36055]);
} else {
return null;
}
})();
var f__26016__auto__ = (function (){var obj36056 = parent__26015__auto__;
var k36057 = "completions";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj36056,k36057)){
return (obj36056[k36057]);
} else {
return null;
}
})();
return f__26016__auto__.call(parent__26015__auto__,klipse.ui.editors.editor.current_token.call(null,in_editor));
})());
});})(vec__36047,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__36045,map__36045__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
:null),new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),((function (vec__36047,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__36045,map__36045__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_codemirror_editor.call(null,eval_fn,result_element,in_editor,snippet_args,editor_out_mode,state);
});})(vec__36047,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__36045,map__36045__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
], null)));

klipse.klipse_editors.add_editor.call(null,in_editor,snippet_num);

return ((function (vec__36047,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__36045,map__36045__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_codemirror_editor.call(null,eval_fn,result_element,in_editor,snippet_args,editor_out_mode,state);
});
;})(vec__36047,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__36045,map__36045__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
}));
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"dom","dom",-1236537922),(function (_,p__36058){
var map__36059 = p__36058;
var map__36059__$1 = (((((!((map__36059 == null))))?(((((map__36059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36059):map__36059);
var editor_args = map__36059__$1;
var eval_fn = cljs.core.get.call(null,map__36059__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var out_editor_options = cljs.core.get.call(null,map__36059__$1,new cljs.core.Keyword(null,"out-editor-options","out-editor-options",-95308421));
var no_result = cljs.core.get.call(null,map__36059__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_txt = cljs.core.get.call(null,map__36059__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var idle_msec = cljs.core.get.call(null,map__36059__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__36059__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__36059__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var source_code = cljs.core.get.call(null,map__36059__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__36059__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var in_editor_options = cljs.core.get.call(null,map__36059__$1,new cljs.core.Keyword(null,"in-editor-options","in-editor-options",-1444530378));
var snippet_num = cljs.core.get.call(null,map__36059__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var result_element = (cljs.core.truth_(no_result)?null:klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_result_attrs.call(null,snippet_num)));
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
if(cljs.core.truth_(result_element)){
goog.dom.setTextContent(result_element,default_txt);
} else {
}

klipse.dom_utils.add_event_listener.call(null,element,"input",((function (container,result_element,snippet_args,state,map__36059,map__36059__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num){
return (function (){
return klipse.klipse_editors.eval_in_dom_editor.call(null,eval_fn,result_element,element,snippet_args,state);
});})(container,result_element,snippet_args,state,map__36059,map__36059__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num))
);

return ((function (container,result_element,snippet_args,state,map__36059,map__36059__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num){
return (function (){
return klipse.klipse_editors.eval_in_dom_editor.call(null,eval_fn,result_element,element,snippet_args,state);
});
;})(container,result_element,snippet_args,state,map__36059,map__36059__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num))
}));

//# sourceMappingURL=klipse_editors.js.map
