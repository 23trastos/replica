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
var len__4730__auto___23564 = arguments.length;
var i__4731__auto___23565 = (0);
while(true){
if((i__4731__auto___23565 < len__4730__auto___23564)){
args__4736__auto__.push((arguments[i__4731__auto___23565]));

var G__23566 = (i__4731__auto___23565 + (1));
i__4731__auto___23565 = G__23566;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic = (function (p__23561){
var map__23562 = p__23561;
var map__23562__$1 = (((((!((map__23562 == null))))?(((((map__23562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23562):map__23562);
var result_element = cljs.core.get.call(null,map__23562__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__23562__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var editor_args = cljs.core.get.call(null,map__23562__$1,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598),(0),new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"container-id","container-id",1274665684),(cljs.core.truth_(container)?(container["id"]):null),new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element-id","result-element-id",-1916360024),(cljs.core.truth_(result_element)?(result_element["id"]):null),new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element], null));
});

klipse.klipse_editors.create_state.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
klipse.klipse_editors.create_state.cljs$lang$applyTo = (function (seq23560){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23560));
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
klipse.klipse_editors.eval_in_editor = (function klipse$klipse_editors$eval_in_editor(eval_fn,src_code,unsafe_setter,p__23567,state){
var map__23568 = p__23567;
var map__23568__$1 = (((((!((map__23568 == null))))?(((((map__23568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23568):map__23568);
var loop_msec = cljs.core.get.call(null,map__23568__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__23568__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("Evaluating: ",src_code);
} else {
}

var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble){
return (function (state_23703){
var state_val_23704 = (state_23703[(1)]);
if((state_val_23704 === (7))){
var inst_23580 = (state_23703[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23703,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_23580__$1 = cljs.core.deref.call(null,state);
var inst_23582 = (inst_23580__$1 == null);
var inst_23583 = cljs.core.not.call(null,inst_23582);
var state_23703__$1 = (function (){var statearr_23705 = state_23703;
(statearr_23705[(7)] = inst_23580__$1);

return statearr_23705;
})();
if(inst_23583){
var statearr_23706_23786 = state_23703__$1;
(statearr_23706_23786[(1)] = (8));

} else {
var statearr_23707_23787 = state_23703__$1;
(statearr_23707_23787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (20))){
var inst_23618 = (state_23703[(8)]);
var inst_23618__$1 = (state_23703[(2)]);
var inst_23619 = typeof inst_23618__$1 === 'string';
var state_23703__$1 = (function (){var statearr_23708 = state_23703;
(statearr_23708[(8)] = inst_23618__$1);

return statearr_23708;
})();
if(cljs.core.truth_(inst_23619)){
var statearr_23709_23788 = state_23703__$1;
(statearr_23709_23788[(1)] = (21));

} else {
var statearr_23710_23789 = state_23703__$1;
(statearr_23710_23789[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (1))){
var state_23703__$1 = state_23703;
if(cljs.core.truth_(unsafe_setter)){
var statearr_23711_23790 = state_23703__$1;
(statearr_23711_23790[(1)] = (2));

} else {
var statearr_23712_23791 = state_23703__$1;
(statearr_23712_23791[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (24))){
var inst_23618 = (state_23703[(8)]);
var inst_23601 = (state_23703[(9)]);
var inst_23573 = (state_23703[(10)]);
var inst_23602 = (state_23703[(11)]);
var inst_23616 = (state_23703[(12)]);
var inst_23624 = (state_23703[(13)]);
var inst_23603 = (state_23703[(14)]);
var inst_23657 = cljs.core.async.chan.call(null,(1));
var inst_23658 = (function (){var setter = inst_23573;
var map__23579 = inst_23601;
var cmd_chan = inst_23602;
var eval_counter = inst_23603;
var evaluation_chan = inst_23616;
var result = inst_23618;
var first_result = inst_23624;
var c__16038__auto____$1 = inst_23657;
return ((function (setter,map__23579,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__16038__auto____$1,inst_23618,inst_23601,inst_23573,inst_23602,inst_23616,inst_23624,inst_23603,inst_23657,state_val_23704,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (setter,map__23579,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__16038__auto____$1,inst_23618,inst_23601,inst_23573,inst_23602,inst_23616,inst_23624,inst_23603,inst_23657,state_val_23704,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble){
return (function (state_23655){
var state_val_23656 = (state_23655[(1)]);
if((state_val_23656 === (1))){
var state_23655__$1 = state_23655;
var statearr_23713_23792 = state_23655__$1;
(statearr_23713_23792[(2)] = null);

(statearr_23713_23792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (2))){
var inst_23631 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23632 = cljs.core.async.timeout.call(null,loop_msec);
var inst_23633 = [cmd_chan,inst_23632];
var inst_23634 = (new cljs.core.PersistentVector(null,2,(5),inst_23631,inst_23633,null));
var state_23655__$1 = state_23655;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23655__$1,(4),inst_23634);
} else {
if((state_val_23656 === (3))){
var inst_23653 = (state_23655[(2)]);
var state_23655__$1 = state_23655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23655__$1,inst_23653);
} else {
if((state_val_23656 === (4))){
var inst_23636 = (state_23655[(2)]);
var inst_23637 = cljs.core.nth.call(null,inst_23636,(0),null);
var inst_23638 = cljs.core.nth.call(null,inst_23636,(1),null);
var inst_23639 = cljs.core._EQ_.call(null,inst_23638,cmd_chan);
var inst_23640 = cljs.core._EQ_.call(null,inst_23637,new cljs.core.Keyword(null,"reset","reset",-800929946));
var inst_23641 = ((inst_23639) && (inst_23640));
var state_23655__$1 = state_23655;
if(cljs.core.truth_(inst_23641)){
var statearr_23714_23793 = state_23655__$1;
(statearr_23714_23793[(1)] = (5));

} else {
var statearr_23715_23794 = state_23655__$1;
(statearr_23715_23794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (5))){
var state_23655__$1 = state_23655;
var statearr_23716_23795 = state_23655__$1;
(statearr_23716_23795[(2)] = null);

(statearr_23716_23795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (6))){
var inst_23644 = cljs.core.deref.call(null,state);
var inst_23645 = eval_fn.call(null,src_code,inst_23644);
var state_23655__$1 = state_23655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23655__$1,(8),inst_23645);
} else {
if((state_val_23656 === (7))){
var inst_23651 = (state_23655[(2)]);
var state_23655__$1 = state_23655;
var statearr_23717_23796 = state_23655__$1;
(statearr_23717_23796[(2)] = inst_23651);

(statearr_23717_23796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (8))){
var inst_23647 = (state_23655[(2)]);
var inst_23648 = setter.call(null,inst_23647);
var state_23655__$1 = (function (){var statearr_23718 = state_23655;
(statearr_23718[(7)] = inst_23648);

return statearr_23718;
})();
var statearr_23719_23797 = state_23655__$1;
(statearr_23719_23797[(2)] = null);

(statearr_23719_23797[(1)] = (2));


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
});})(setter,map__23579,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__16038__auto____$1,inst_23618,inst_23601,inst_23573,inst_23602,inst_23616,inst_23624,inst_23603,inst_23657,state_val_23704,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble))
;
return ((function (switch__15943__auto__,setter,map__23579,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__16038__auto____$1,inst_23618,inst_23601,inst_23573,inst_23602,inst_23616,inst_23624,inst_23603,inst_23657,state_val_23704,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____0 = (function (){
var statearr_23720 = [null,null,null,null,null,null,null,null];
(statearr_23720[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__);

(statearr_23720[(1)] = (1));

return statearr_23720;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____1 = (function (state_23655){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_23655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e23721){if((e23721 instanceof Object)){
var ex__15947__auto__ = e23721;
var statearr_23722_23798 = state_23655;
(statearr_23722_23798[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23799 = state_23655;
state_23655 = G__23799;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__ = function(state_23655){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____1.call(this,state_23655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,setter,map__23579,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__16038__auto____$1,inst_23618,inst_23601,inst_23573,inst_23602,inst_23616,inst_23624,inst_23603,inst_23657,state_val_23704,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble))
})();
var state__16040__auto__ = (function (){var statearr_23723 = f__16039__auto__.call(null);
(statearr_23723[(6)] = c__16038__auto____$1);

return statearr_23723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});
;})(setter,map__23579,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__16038__auto____$1,inst_23618,inst_23601,inst_23573,inst_23602,inst_23616,inst_23624,inst_23603,inst_23657,state_val_23704,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble))
})();
var inst_23659 = cljs.core.async.impl.dispatch.run.call(null,inst_23658);
var state_23703__$1 = (function (){var statearr_23724 = state_23703;
(statearr_23724[(15)] = inst_23659);

return statearr_23724;
})();
var statearr_23725_23800 = state_23703__$1;
(statearr_23725_23800[(2)] = inst_23657);

(statearr_23725_23800[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (4))){
var inst_23573 = (state_23703[(2)]);
var state_23703__$1 = (function (){var statearr_23726 = state_23703;
(statearr_23726[(10)] = inst_23573);

return statearr_23726;
})();
var statearr_23727_23801 = state_23703__$1;
(statearr_23727_23801[(2)] = null);

(statearr_23727_23801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (15))){
var inst_23580 = (state_23703[(7)]);
var state_23703__$1 = state_23703;
var statearr_23728_23802 = state_23703__$1;
(statearr_23728_23802[(2)] = inst_23580);

(statearr_23728_23802[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (21))){
var inst_23618 = (state_23703[(8)]);
var state_23703__$1 = state_23703;
var statearr_23729_23803 = state_23703__$1;
(statearr_23729_23803[(2)] = inst_23618);

(statearr_23729_23803[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (13))){
var inst_23593 = (state_23703[(2)]);
var state_23703__$1 = state_23703;
var statearr_23730_23804 = state_23703__$1;
(statearr_23730_23804[(2)] = inst_23593);

(statearr_23730_23804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (22))){
var inst_23618 = (state_23703[(8)]);
var inst_23622 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_23618);
var state_23703__$1 = state_23703;
var statearr_23731_23805 = state_23703__$1;
(statearr_23731_23805[(2)] = inst_23622);

(statearr_23731_23805[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (6))){
var inst_23573 = (state_23703[(10)]);
var inst_23574 = (state_23703[(2)]);
var inst_23575 = inst_23573.call(null,inst_23574);
var state_23703__$1 = state_23703;
var statearr_23732_23806 = state_23703__$1;
(statearr_23732_23806[(2)] = inst_23575);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23703__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (25))){
var state_23703__$1 = state_23703;
var statearr_23733_23807 = state_23703__$1;
(statearr_23733_23807[(2)] = null);

(statearr_23733_23807[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (17))){
var state_23703__$1 = state_23703;
var statearr_23734_23808 = state_23703__$1;
(statearr_23734_23808[(2)] = null);

(statearr_23734_23808[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (3))){
var state_23703__$1 = state_23703;
var statearr_23735_23809 = state_23703__$1;
(statearr_23735_23809[(2)] = cljs.core.any_QMARK_);

(statearr_23735_23809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (12))){
var state_23703__$1 = state_23703;
var statearr_23736_23810 = state_23703__$1;
(statearr_23736_23810[(2)] = false);

(statearr_23736_23810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (2))){
var state_23703__$1 = state_23703;
var statearr_23737_23811 = state_23703__$1;
(statearr_23737_23811[(2)] = unsafe_setter);

(statearr_23737_23811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (23))){
var inst_23573 = (state_23703[(10)]);
var inst_23624 = (state_23703[(13)]);
var inst_23624__$1 = (state_23703[(2)]);
var inst_23625 = inst_23573.call(null,inst_23624__$1);
var state_23703__$1 = (function (){var statearr_23738 = state_23703;
(statearr_23738[(16)] = inst_23625);

(statearr_23738[(13)] = inst_23624__$1);

return statearr_23738;
})();
if(cljs.core.truth_(loop_msec)){
var statearr_23739_23812 = state_23703__$1;
(statearr_23739_23812[(1)] = (24));

} else {
var statearr_23740_23813 = state_23703__$1;
(statearr_23740_23813[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (19))){
var inst_23616 = (state_23703[(12)]);
var inst_23609 = (state_23703[(2)]);
var inst_23610 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23611 = [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598)];
var inst_23612 = (new cljs.core.PersistentVector(null,1,(5),inst_23610,inst_23611,null));
var inst_23613 = cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,inst_23612,cljs.core.inc);
var inst_23614 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(preamble),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_code)].join('');
var inst_23615 = cljs.core.deref.call(null,state);
var inst_23616__$1 = eval_fn.call(null,inst_23614,inst_23615);
var state_23703__$1 = (function (){var statearr_23741 = state_23703;
(statearr_23741[(17)] = inst_23609);

(statearr_23741[(18)] = inst_23613);

(statearr_23741[(12)] = inst_23616__$1);

return statearr_23741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23703__$1,(20),inst_23616__$1);
} else {
if((state_val_23704 === (11))){
var state_23703__$1 = state_23703;
var statearr_23742_23814 = state_23703__$1;
(statearr_23742_23814[(2)] = true);

(statearr_23742_23814[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (9))){
var state_23703__$1 = state_23703;
var statearr_23743_23815 = state_23703__$1;
(statearr_23743_23815[(2)] = false);

(statearr_23743_23815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (5))){
var inst_23701 = (state_23703[(2)]);
var state_23703__$1 = state_23703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23703__$1,inst_23701);
} else {
if((state_val_23704 === (14))){
var inst_23580 = (state_23703[(7)]);
var inst_23598 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23580);
var state_23703__$1 = state_23703;
var statearr_23744_23816 = state_23703__$1;
(statearr_23744_23816[(2)] = inst_23598);

(statearr_23744_23816[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (26))){
var inst_23618 = (state_23703[(8)]);
var inst_23601 = (state_23703[(9)]);
var inst_23573 = (state_23703[(10)]);
var inst_23602 = (state_23703[(11)]);
var inst_23616 = (state_23703[(12)]);
var inst_23624 = (state_23703[(13)]);
var inst_23603 = (state_23703[(14)]);
var inst_23662 = (state_23703[(2)]);
var inst_23697 = cljs.core.async.chan.call(null,(1));
var inst_23698 = (function (){var setter = inst_23573;
var map__23579 = inst_23601;
var cmd_chan = inst_23602;
var eval_counter = inst_23603;
var evaluation_chan = inst_23616;
var result = inst_23618;
var first_result = inst_23624;
var c__16038__auto____$1 = inst_23697;
return ((function (setter,map__23579,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__16038__auto____$1,inst_23618,inst_23601,inst_23573,inst_23602,inst_23616,inst_23624,inst_23603,inst_23662,inst_23697,state_val_23704,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (setter,map__23579,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__16038__auto____$1,inst_23618,inst_23601,inst_23573,inst_23602,inst_23616,inst_23624,inst_23603,inst_23662,inst_23697,state_val_23704,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble){
return (function (state_23695){
var state_val_23696 = (state_23695[(1)]);
if((state_val_23696 === (7))){
var inst_23673 = (state_23695[(7)]);
var inst_23666 = (state_23695[(8)]);
var inst_23672 = (state_23695[(2)]);
var inst_23673__$1 = cljs.core.map_QMARK_.call(null,inst_23666);
var state_23695__$1 = (function (){var statearr_23745 = state_23695;
(statearr_23745[(7)] = inst_23673__$1);

(statearr_23745[(9)] = inst_23672);

return statearr_23745;
})();
if(inst_23673__$1){
var statearr_23746_23817 = state_23695__$1;
(statearr_23746_23817[(1)] = (8));

} else {
var statearr_23747_23818 = state_23695__$1;
(statearr_23747_23818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (1))){
var inst_23663 = first_result;
var state_23695__$1 = (function (){var statearr_23748 = state_23695;
(statearr_23748[(10)] = inst_23663);

return statearr_23748;
})();
var statearr_23749_23819 = state_23695__$1;
(statearr_23749_23819[(2)] = null);

(statearr_23749_23819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (4))){
var inst_23666 = (state_23695[(8)]);
var inst_23666__$1 = (state_23695[(2)]);
var inst_23667 = cljs.core.map_QMARK_.call(null,inst_23666__$1);
var state_23695__$1 = (function (){var statearr_23750 = state_23695;
(statearr_23750[(8)] = inst_23666__$1);

return statearr_23750;
})();
if(inst_23667){
var statearr_23751_23820 = state_23695__$1;
(statearr_23751_23820[(1)] = (5));

} else {
var statearr_23752_23821 = state_23695__$1;
(statearr_23752_23821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (15))){
var state_23695__$1 = state_23695;
var statearr_23753_23822 = state_23695__$1;
(statearr_23753_23822[(2)] = null);

(statearr_23753_23822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (13))){
var inst_23672 = (state_23695[(9)]);
var inst_23682 = (state_23695[(2)]);
var inst_23683 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23682),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23672)].join('');
var inst_23684 = (inst_23672 == null);
var inst_23685 = cljs.core.not.call(null,inst_23684);
var state_23695__$1 = (function (){var statearr_23754 = state_23695;
(statearr_23754[(11)] = inst_23683);

return statearr_23754;
})();
if(inst_23685){
var statearr_23755_23823 = state_23695__$1;
(statearr_23755_23823[(1)] = (14));

} else {
var statearr_23756_23824 = state_23695__$1;
(statearr_23756_23824[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (6))){
var inst_23666 = (state_23695[(8)]);
var state_23695__$1 = state_23695;
var statearr_23757_23825 = state_23695__$1;
(statearr_23757_23825[(2)] = inst_23666);

(statearr_23757_23825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (3))){
var inst_23693 = (state_23695[(2)]);
var state_23695__$1 = state_23695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23695__$1,inst_23693);
} else {
if((state_val_23696 === (12))){
var inst_23663 = (state_23695[(10)]);
var state_23695__$1 = state_23695;
var statearr_23758_23826 = state_23695__$1;
(statearr_23758_23826[(2)] = inst_23663);

(statearr_23758_23826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (2))){
var state_23695__$1 = state_23695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23695__$1,(4),evaluation_chan);
} else {
if((state_val_23696 === (11))){
var state_23695__$1 = state_23695;
var statearr_23759_23827 = state_23695__$1;
(statearr_23759_23827[(2)] = null);

(statearr_23759_23827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (9))){
var inst_23673 = (state_23695[(7)]);
var state_23695__$1 = state_23695;
var statearr_23760_23828 = state_23695__$1;
(statearr_23760_23828[(2)] = inst_23673);

(statearr_23760_23828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (5))){
var inst_23666 = (state_23695[(8)]);
var inst_23669 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_23666);
var state_23695__$1 = state_23695;
var statearr_23761_23829 = state_23695__$1;
(statearr_23761_23829[(2)] = inst_23669);

(statearr_23761_23829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (14))){
var inst_23683 = (state_23695[(11)]);
var inst_23687 = setter.call(null,inst_23683);
var inst_23663 = inst_23683;
var state_23695__$1 = (function (){var statearr_23762 = state_23695;
(statearr_23762[(12)] = inst_23687);

(statearr_23762[(10)] = inst_23663);

return statearr_23762;
})();
var statearr_23763_23830 = state_23695__$1;
(statearr_23763_23830[(2)] = null);

(statearr_23763_23830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (16))){
var inst_23691 = (state_23695[(2)]);
var state_23695__$1 = state_23695;
var statearr_23764_23831 = state_23695__$1;
(statearr_23764_23831[(2)] = inst_23691);

(statearr_23764_23831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (10))){
var inst_23678 = (state_23695[(2)]);
var state_23695__$1 = state_23695;
if(cljs.core.truth_(inst_23678)){
var statearr_23765_23832 = state_23695__$1;
(statearr_23765_23832[(1)] = (11));

} else {
var statearr_23766_23833 = state_23695__$1;
(statearr_23766_23833[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (8))){
var inst_23666 = (state_23695[(8)]);
var inst_23675 = new cljs.core.Keyword(null,"remove-previous-results","remove-previous-results",883218005).cljs$core$IFn$_invoke$arity$1(inst_23666);
var state_23695__$1 = state_23695;
var statearr_23767_23834 = state_23695__$1;
(statearr_23767_23834[(2)] = inst_23675);

(statearr_23767_23834[(1)] = (10));


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
});})(setter,map__23579,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__16038__auto____$1,inst_23618,inst_23601,inst_23573,inst_23602,inst_23616,inst_23624,inst_23603,inst_23662,inst_23697,state_val_23704,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble))
;
return ((function (switch__15943__auto__,setter,map__23579,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__16038__auto____$1,inst_23618,inst_23601,inst_23573,inst_23602,inst_23616,inst_23624,inst_23603,inst_23662,inst_23697,state_val_23704,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____0 = (function (){
var statearr_23768 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23768[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__);

(statearr_23768[(1)] = (1));

return statearr_23768;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____1 = (function (state_23695){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_23695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e23769){if((e23769 instanceof Object)){
var ex__15947__auto__ = e23769;
var statearr_23770_23835 = state_23695;
(statearr_23770_23835[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23836 = state_23695;
state_23695 = G__23836;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__ = function(state_23695){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____1.call(this,state_23695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,setter,map__23579,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__16038__auto____$1,inst_23618,inst_23601,inst_23573,inst_23602,inst_23616,inst_23624,inst_23603,inst_23662,inst_23697,state_val_23704,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble))
})();
var state__16040__auto__ = (function (){var statearr_23771 = f__16039__auto__.call(null);
(statearr_23771[(6)] = c__16038__auto____$1);

return statearr_23771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});
;})(setter,map__23579,cmd_chan,eval_counter,evaluation_chan,result,first_result,c__16038__auto____$1,inst_23618,inst_23601,inst_23573,inst_23602,inst_23616,inst_23624,inst_23603,inst_23662,inst_23697,state_val_23704,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble))
})();
var inst_23699 = cljs.core.async.impl.dispatch.run.call(null,inst_23698);
var state_23703__$1 = (function (){var statearr_23772 = state_23703;
(statearr_23772[(19)] = inst_23662);

(statearr_23772[(20)] = inst_23699);

return statearr_23772;
})();
var statearr_23773_23837 = state_23703__$1;
(statearr_23773_23837[(2)] = inst_23697);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23703__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (16))){
var inst_23601 = (state_23703[(9)]);
var inst_23603 = (state_23703[(14)]);
var inst_23601__$1 = (state_23703[(2)]);
var inst_23602 = cljs.core.get.call(null,inst_23601__$1,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306));
var inst_23603__$1 = cljs.core.get.call(null,inst_23601__$1,new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598));
var inst_23604 = (inst_23603__$1 === (0));
var state_23703__$1 = (function (){var statearr_23774 = state_23703;
(statearr_23774[(9)] = inst_23601__$1);

(statearr_23774[(11)] = inst_23602);

(statearr_23774[(14)] = inst_23603__$1);

return statearr_23774;
})();
if(cljs.core.truth_(inst_23604)){
var statearr_23775_23838 = state_23703__$1;
(statearr_23775_23838[(1)] = (17));

} else {
var statearr_23776_23839 = state_23703__$1;
(statearr_23776_23839[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (10))){
var inst_23596 = (state_23703[(2)]);
var state_23703__$1 = state_23703;
if(cljs.core.truth_(inst_23596)){
var statearr_23777_23840 = state_23703__$1;
(statearr_23777_23840[(1)] = (14));

} else {
var statearr_23778_23841 = state_23703__$1;
(statearr_23778_23841[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (18))){
var inst_23602 = (state_23703[(11)]);
var inst_23607 = cljs.core.async.put_BANG_.call(null,inst_23602,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_23703__$1 = state_23703;
var statearr_23779_23842 = state_23703__$1;
(statearr_23779_23842[(2)] = inst_23607);

(statearr_23779_23842[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (8))){
var inst_23580 = (state_23703[(7)]);
var inst_23585 = inst_23580.cljs$lang$protocol_mask$partition0$;
var inst_23586 = (inst_23585 & (64));
var inst_23587 = inst_23580.cljs$core$ISeq$;
var inst_23588 = (cljs.core.PROTOCOL_SENTINEL === inst_23587);
var inst_23589 = ((inst_23586) || (inst_23588));
var state_23703__$1 = state_23703;
if(cljs.core.truth_(inst_23589)){
var statearr_23780_23843 = state_23703__$1;
(statearr_23780_23843[(1)] = (11));

} else {
var statearr_23781_23844 = state_23703__$1;
(statearr_23781_23844[(1)] = (12));

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
});})(c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble))
;
return ((function (switch__15943__auto__,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____0 = (function (){
var statearr_23782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23782[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__);

(statearr_23782[(1)] = (1));

return statearr_23782;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____1 = (function (state_23703){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_23703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e23783){if((e23783 instanceof Object)){
var ex__15947__auto__ = e23783;
var statearr_23784_23845 = state_23703;
(statearr_23784_23845[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23846 = state_23703;
state_23703 = G__23846;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__ = function(state_23703){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____1.call(this,state_23703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble))
})();
var state__16040__auto__ = (function (){var statearr_23785 = f__16039__auto__.call(null);
(statearr_23785[(6)] = c__16038__auto__);

return statearr_23785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,map__23568,map__23568__$1,loop_msec,preamble))
);

return c__16038__auto__;
});
klipse.klipse_editors.eval_in_codemirror_editor = (function klipse$klipse_editors$eval_in_codemirror_editor(eval_fn,result_element,editor_source,snippet_args,mode,state){
var editor_args = new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?((function (editor_args){
return (function (p1__23847_SHARP_){
return klipse.ui.editors.editor.set_value_and_beautify.call(null,result_element,mode,p1__23847_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441).cljs$core$IFn$_invoke$arity$1(editor_args),new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false], null));
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
var obj23848 = elem;
var obj23849 = (((!((obj23848 == null))))?obj23848:({}));
(obj23849["innerHTML"] = wrapped_res);

return obj23849;
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
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"html","html",-998796897),(function (_,p__23852){
var map__23853 = p__23852;
var map__23853__$1 = (((((!((map__23853 == null))))?(((((map__23853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23853):map__23853);
var editor_args = map__23853__$1;
var eval_fn = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var source_code = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__23855 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__23855,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__23855,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var result_element = (cljs.core.truth_(no_result)?null:klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_result_attrs.call(null,snippet_num)));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_);
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
if(cljs.core.truth_(result_element)){
goog.dom.setTextContent(result_element,default_txt);
} else {
}

klipse.ui.editors.common.handle_events.call(null,in_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),((function (vec__23855,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__23853,map__23853__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_html_editor.call(null,eval_fn,result_element,in_editor,snippet_args,state);
});})(vec__23855,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__23853,map__23853__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
], null));

return ((function (vec__23855,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__23853,map__23853__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_html_editor.call(null,eval_fn,result_element,in_editor,snippet_args,state);
});
;})(vec__23855,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__23853,map__23853__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
}));
klipse.klipse_editors.editors = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
klipse.klipse_editors.add_editor = (function klipse$klipse_editors$add_editor(editor,snippet_num){
cljs.core.swap_BANG_.call(null,klipse.klipse_editors.editors,cljs.core.assoc,snippet_num,editor);

var obj23858 = window;
var obj23859 = (((!((obj23858 == null))))?obj23858:({}));
(obj23859["klipse_editors"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.editors)));

return obj23859;
});
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),(function (_,p__23862){
var map__23863 = p__23862;
var map__23863__$1 = (((((!((map__23863 == null))))?(((((map__23863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23863):map__23863);
var editor_args = map__23863__$1;
var eval_fn = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var mode = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var source_code = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__23865 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__23865,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__23865,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var ___$1 = klipse.dom_utils.create_div_after.call(null,container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-separator"], null));
var result_element = (cljs.core.truth_(no_result)?null:klipse.ui.editors.editor.create_editor_after_element.call(null,element,default_txt,out_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse-result",["klipse-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)].join('')], null)));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse-snippet",["klipse-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)].join('')], null));
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
klipse.ui.editors.common.handle_events.call(null,in_editor,gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-completion","on-completion",1522510572),((cljs.core._EQ_.call(null,"clojure",editor_in_mode))?((function (vec__23865,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__23863,map__23863__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.ui.editors.editor.trigger_autocomplete.call(null,in_editor,(function (){var parent__18575__auto__ = (function (){var obj23872 = (function (){var obj23870 = (function (){var obj23868 = window;
var k23869 = "klipse_clj";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23868,k23869)){
return (obj23868[k23869]);
} else {
return null;
}
})();
var k23871 = "lang";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23870,k23871)){
return (obj23870[k23871]);
} else {
return null;
}
})();
var k23873 = "clojure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23872,k23873)){
return (obj23872[k23873]);
} else {
return null;
}
})();
var f__18576__auto__ = (function (){var obj23874 = parent__18575__auto__;
var k23875 = "completions";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23874,k23875)){
return (obj23874[k23875]);
} else {
return null;
}
})();
return f__18576__auto__.call(parent__18575__auto__,klipse.ui.editors.editor.current_token.call(null,in_editor));
})());
});})(vec__23865,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__23863,map__23863__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
:null),new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),((function (vec__23865,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__23863,map__23863__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_codemirror_editor.call(null,eval_fn,result_element,in_editor,snippet_args,editor_out_mode,state);
});})(vec__23865,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__23863,map__23863__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
], null)));

klipse.klipse_editors.add_editor.call(null,in_editor,snippet_num);

return ((function (vec__23865,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__23863,map__23863__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_codemirror_editor.call(null,eval_fn,result_element,in_editor,snippet_args,editor_out_mode,state);
});
;})(vec__23865,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__23863,map__23863__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
}));
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"dom","dom",-1236537922),(function (_,p__23876){
var map__23877 = p__23876;
var map__23877__$1 = (((((!((map__23877 == null))))?(((((map__23877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23877):map__23877);
var editor_args = map__23877__$1;
var eval_fn = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var out_editor_options = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"out-editor-options","out-editor-options",-95308421));
var no_result = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_txt = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var idle_msec = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var source_code = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var in_editor_options = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"in-editor-options","in-editor-options",-1444530378));
var snippet_num = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var result_element = (cljs.core.truth_(no_result)?null:klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_result_attrs.call(null,snippet_num)));
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
if(cljs.core.truth_(result_element)){
goog.dom.setTextContent(result_element,default_txt);
} else {
}

klipse.dom_utils.add_event_listener.call(null,element,"input",((function (container,result_element,snippet_args,state,map__23877,map__23877__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num){
return (function (){
return klipse.klipse_editors.eval_in_dom_editor.call(null,eval_fn,result_element,element,snippet_args,state);
});})(container,result_element,snippet_args,state,map__23877,map__23877__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num))
);

return ((function (container,result_element,snippet_args,state,map__23877,map__23877__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num){
return (function (){
return klipse.klipse_editors.eval_in_dom_editor.call(null,eval_fn,result_element,element,snippet_args,state);
});
;})(container,result_element,snippet_args,state,map__23877,map__23877__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num))
}));

//# sourceMappingURL=klipse_editors.js.map
