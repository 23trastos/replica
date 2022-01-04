// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse_clj.lang.clojure');
goog.require('cljs.core');
goog.require('klipse_clj.lang.clojure.bundled_namespaces');
goog.require('gadjett.core_fn');
goog.require('cljs.tagged_literals');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('klipse_clj.repl');
goog.require('klipse_clj.lang.clojure.guard');
goog.require('klipse_clj.lang.clojure.io');
goog.require('cljs.pprint');
goog.require('cljs.analyzer');
goog.require('klipse_clj.lang.cljs_repl');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.compiler');
goog.require('cljs.core.async');
goog.require('cljs.env');
goog.require('cljs.js');
klipse_clj.lang.clojure.load_core_macros_cache = (function klipse_clj$lang$clojure$load_core_macros_cache(){
return klipse_clj.lang.clojure.io.load_ns_from_file.call(null,cljs.core.deref.call(null,klipse_clj.repl.st),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),"/cljs/core$macros.cljc.cache.json"].join(''));
});
klipse_clj.lang.clojure.init_custom_macros = (function klipse_clj$lang$clojure$init_custom_macros(){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_40783){
var state_val_40784 = (state_40783[(1)]);
if((state_val_40784 === (7))){
var inst_40779 = (state_40783[(2)]);
var state_40783__$1 = state_40783;
var statearr_40785_40811 = state_40783__$1;
(statearr_40785_40811[(2)] = inst_40779);

(statearr_40785_40811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40784 === (1))){
var inst_40722 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_40783__$1 = state_40783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40783__$1,(2),inst_40722);
} else {
if((state_val_40784 === (4))){
var inst_40781 = (state_40783[(2)]);
var state_40783__$1 = state_40783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40783__$1,inst_40781);
} else {
if((state_val_40784 === (15))){
var inst_40753 = (state_40783[(7)]);
var inst_40770 = (state_40783[(2)]);
var inst_40771 = cljs.core.next.call(null,inst_40753);
var inst_40733 = inst_40771;
var inst_40734 = null;
var inst_40735 = (0);
var inst_40736 = (0);
var state_40783__$1 = (function (){var statearr_40786 = state_40783;
(statearr_40786[(8)] = inst_40734);

(statearr_40786[(9)] = inst_40735);

(statearr_40786[(10)] = inst_40736);

(statearr_40786[(11)] = inst_40733);

(statearr_40786[(12)] = inst_40770);

return statearr_40786;
})();
var statearr_40787_40812 = state_40783__$1;
(statearr_40787_40812[(2)] = null);

(statearr_40787_40812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40784 === (13))){
var inst_40753 = (state_40783[(7)]);
var inst_40762 = cljs.core.first.call(null,inst_40753);
var inst_40763 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_40764 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_40765 = [inst_40764,klipse_clj.repl.current_ns_eval];
var inst_40766 = cljs.core.PersistentHashMap.fromArrays(inst_40763,inst_40765);
var inst_40767 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_40762,inst_40766);
var inst_40768 = cljs.core.first.call(null,inst_40767);
var state_40783__$1 = state_40783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40783__$1,(15),inst_40768);
} else {
if((state_val_40784 === (6))){
var inst_40753 = (state_40783[(7)]);
var inst_40733 = (state_40783[(11)]);
var inst_40753__$1 = cljs.core.seq.call(null,inst_40733);
var state_40783__$1 = (function (){var statearr_40788 = state_40783;
(statearr_40788[(7)] = inst_40753__$1);

return statearr_40788;
})();
if(inst_40753__$1){
var statearr_40789_40813 = state_40783__$1;
(statearr_40789_40813[(1)] = (9));

} else {
var statearr_40790_40814 = state_40783__$1;
(statearr_40790_40814[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40784 === (3))){
var inst_40735 = (state_40783[(9)]);
var inst_40736 = (state_40783[(10)]);
var inst_40738 = (inst_40736 < inst_40735);
var inst_40739 = inst_40738;
var state_40783__$1 = state_40783;
if(cljs.core.truth_(inst_40739)){
var statearr_40791_40815 = state_40783__$1;
(statearr_40791_40815[(1)] = (5));

} else {
var statearr_40792_40816 = state_40783__$1;
(statearr_40792_40816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40784 === (12))){
var inst_40753 = (state_40783[(7)]);
var inst_40757 = cljs.core.chunk_first.call(null,inst_40753);
var inst_40758 = cljs.core.chunk_rest.call(null,inst_40753);
var inst_40759 = cljs.core.count.call(null,inst_40757);
var inst_40733 = inst_40758;
var inst_40734 = inst_40757;
var inst_40735 = inst_40759;
var inst_40736 = (0);
var state_40783__$1 = (function (){var statearr_40793 = state_40783;
(statearr_40793[(8)] = inst_40734);

(statearr_40793[(9)] = inst_40735);

(statearr_40793[(10)] = inst_40736);

(statearr_40793[(11)] = inst_40733);

return statearr_40793;
})();
var statearr_40794_40817 = state_40783__$1;
(statearr_40794_40817[(2)] = null);

(statearr_40794_40817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40784 === (2))){
var inst_40724 = (state_40783[(2)]);
var inst_40729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40730 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg inferred-type]])"];
var inst_40731 = (new cljs.core.PersistentVector(null,2,(5),inst_40729,inst_40730,null));
var inst_40732 = cljs.core.seq.call(null,inst_40731);
var inst_40733 = inst_40732;
var inst_40734 = null;
var inst_40735 = (0);
var inst_40736 = (0);
var state_40783__$1 = (function (){var statearr_40795 = state_40783;
(statearr_40795[(8)] = inst_40734);

(statearr_40795[(13)] = inst_40724);

(statearr_40795[(9)] = inst_40735);

(statearr_40795[(10)] = inst_40736);

(statearr_40795[(11)] = inst_40733);

return statearr_40795;
})();
var statearr_40796_40818 = state_40783__$1;
(statearr_40796_40818[(2)] = null);

(statearr_40796_40818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40784 === (11))){
var inst_40777 = (state_40783[(2)]);
var state_40783__$1 = state_40783;
var statearr_40797_40819 = state_40783__$1;
(statearr_40797_40819[(2)] = inst_40777);

(statearr_40797_40819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40784 === (9))){
var inst_40753 = (state_40783[(7)]);
var inst_40755 = cljs.core.chunked_seq_QMARK_.call(null,inst_40753);
var state_40783__$1 = state_40783;
if(inst_40755){
var statearr_40798_40820 = state_40783__$1;
(statearr_40798_40820[(1)] = (12));

} else {
var statearr_40799_40821 = state_40783__$1;
(statearr_40799_40821[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40784 === (5))){
var inst_40734 = (state_40783[(8)]);
var inst_40736 = (state_40783[(10)]);
var inst_40741 = cljs.core._nth.call(null,inst_40734,inst_40736);
var inst_40742 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_40743 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_40744 = [inst_40743,klipse_clj.repl.current_ns_eval];
var inst_40745 = cljs.core.PersistentHashMap.fromArrays(inst_40742,inst_40744);
var inst_40746 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_40741,inst_40745);
var inst_40747 = cljs.core.first.call(null,inst_40746);
var state_40783__$1 = state_40783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40783__$1,(8),inst_40747);
} else {
if((state_val_40784 === (14))){
var inst_40774 = (state_40783[(2)]);
var state_40783__$1 = state_40783;
var statearr_40803_40822 = state_40783__$1;
(statearr_40803_40822[(2)] = inst_40774);

(statearr_40803_40822[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40784 === (10))){
var state_40783__$1 = state_40783;
var statearr_40804_40823 = state_40783__$1;
(statearr_40804_40823[(2)] = null);

(statearr_40804_40823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40784 === (8))){
var inst_40734 = (state_40783[(8)]);
var inst_40735 = (state_40783[(9)]);
var inst_40736 = (state_40783[(10)]);
var inst_40733 = (state_40783[(11)]);
var inst_40749 = (state_40783[(2)]);
var inst_40750 = (inst_40736 + (1));
var tmp40800 = inst_40734;
var tmp40801 = inst_40735;
var tmp40802 = inst_40733;
var inst_40733__$1 = tmp40802;
var inst_40734__$1 = tmp40800;
var inst_40735__$1 = tmp40801;
var inst_40736__$1 = inst_40750;
var state_40783__$1 = (function (){var statearr_40805 = state_40783;
(statearr_40805[(14)] = inst_40749);

(statearr_40805[(8)] = inst_40734__$1);

(statearr_40805[(9)] = inst_40735__$1);

(statearr_40805[(10)] = inst_40736__$1);

(statearr_40805[(11)] = inst_40733__$1);

return statearr_40805;
})();
var statearr_40806_40824 = state_40783__$1;
(statearr_40806_40824[(2)] = null);

(statearr_40806_40824[(1)] = (3));


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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21022__auto____0 = (function (){
var statearr_40807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40807[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21022__auto__);

(statearr_40807[(1)] = (1));

return statearr_40807;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21022__auto____1 = (function (state_40783){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_40783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e40808){if((e40808 instanceof Object)){
var ex__21025__auto__ = e40808;
var statearr_40809_40825 = state_40783;
(statearr_40809_40825[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40826 = state_40783;
state_40783 = G__40826;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21022__auto__ = function(state_40783){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21022__auto____1.call(this,state_40783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_40810 = f__21189__auto__.call(null);
(statearr_40810[(6)] = c__21188__auto__);

return statearr_40810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_40829){
var state_val_40830 = (state_40829[(1)]);
if((state_val_40830 === (1))){
var inst_40827 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_40829__$1 = state_40829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40829__$1,inst_40827);
} else {
return null;
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__21022__auto____0 = (function (){
var statearr_40831 = [null,null,null,null,null,null,null];
(statearr_40831[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__21022__auto__);

(statearr_40831[(1)] = (1));

return statearr_40831;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__21022__auto____1 = (function (state_40829){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_40829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e40832){if((e40832 instanceof Object)){
var ex__21025__auto__ = e40832;
var statearr_40833_40835 = state_40829;
(statearr_40833_40835[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40836 = state_40829;
state_40829 = G__40836;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__21022__auto__ = function(state_40829){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__21022__auto____1.call(this,state_40829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_40834 = f__21189__auto__.call(null);
(statearr_40834[(6)] = c__21188__auto__);

return statearr_40834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
} else {
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,cljs.js.empty_state.call(null));

return klipse_clj.lang.clojure.init_custom_macros.call(null);
}
});
klipse_clj.lang.clojure.reader_error_QMARK_ = (function klipse_clj$lang$clojure$reader_error_QMARK_(e){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,e)));
});
klipse_clj.lang.clojure.error_message = (function klipse_clj$lang$clojure$error_message(error){
if((error instanceof cljs.core.ExceptionInfo)){
return cljs.core.ex_message.call(null,error);
} else {
return error.message;
}
});
klipse_clj.lang.clojure.display_err = (function klipse_clj$lang$clojure$display_err(error){
try{if(cljs.core.contains_QMARK_.call(null,cljs.core.ex_data.call(null,cljs.core.ex_cause.call(null,error)),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358))){
return klipse_clj.lang.cljs_repl.error__GT_str.call(null,cljs.core.ex_cause.call(null,error));
} else {
if(klipse_clj.lang.clojure.reader_error_QMARK_.call(null,error)){
return ["Syntax error reading source.","\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.error_message.call(null,error))].join('');
} else {
return ["Execution error.\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message.call(null,error)),(cljs.core.truth_(cljs.core.ex_cause.call(null,error))?[": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_cause.call(null,error))].join(''):null)].join('');

}
}
}catch (e40837){if((e40837 instanceof Object)){
var e = e40837;

return e;
} else {
throw e40837;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__40838){
var map__40839 = p__40838;
var map__40839__$1 = (((((!((map__40839 == null))))?(((((map__40839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40839):map__40839);
var print_length = cljs.core.get.call(null,map__40839__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__40839__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__40842 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__40843 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40843;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40844_40848 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40845_40849 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40846_40850 = true;
var _STAR_print_fn_STAR__temp_val__40847_40851 = ((function (_STAR_print_newline_STAR__orig_val__40844_40848,_STAR_print_fn_STAR__orig_val__40845_40849,_STAR_print_newline_STAR__temp_val__40846_40850,sb__4661__auto__,_STAR_print_length_STAR__orig_val__40842,_STAR_print_length_STAR__temp_val__40843,map__40839,map__40839__$1,print_length,beautify_strings){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__40844_40848,_STAR_print_fn_STAR__orig_val__40845_40849,_STAR_print_newline_STAR__temp_val__40846_40850,sb__4661__auto__,_STAR_print_length_STAR__orig_val__40842,_STAR_print_length_STAR__temp_val__40843,map__40839,map__40839__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40846_40850;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40847_40851;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = typeof value === 'string';
if(and__4120__auto__){
return beautify_strings;
} else {
return and__4120__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40845_40849;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40844_40848;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40842;
}}catch (e40841){if((e40841 instanceof Object)){
var e = e40841;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e40841;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__40852,verbose_QMARK_,current_ns){
var map__40853 = p__40852;
var map__40853__$1 = (((((!((map__40853 == null))))?(((((map__40853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40853):map__40853);
var ns = cljs.core.get.call(null,map__40853__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__40853__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__40853__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__40853__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__40853__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__40853__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
if(cljs.core.truth_(error)){
return null;
} else {
if(cljs.core.truth_(verbose_QMARK_)){
console.info("update-current-ns:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
} else {
}

return cljs.core.reset_BANG_.call(null,current_ns,ns);
}
});
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__40855,opts){
var map__40856 = p__40855;
var map__40856__$1 = (((((!((map__40856 == null))))?(((((map__40856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40856):map__40856);
var args = map__40856__$1;
var ns = cljs.core.get.call(null,map__40856__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__40856__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__40856__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__40856__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__40856__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__40856__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__40858,opts){
var map__40859 = p__40858;
var map__40859__$1 = (((((!((map__40859 == null))))?(((((map__40859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40859):map__40859);
var args = map__40859__$1;
var ns = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var vec__40861 = klipse_clj.lang.clojure.result_as_str.call(null,args,opts);
var status = cljs.core.nth.call(null,vec__40861,(0),null);
var val = cljs.core.nth.call(null,vec__40861,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status))?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"form","form",-1624062471),form_str], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__40864){
var map__40865 = p__40864;
var map__40865__$1 = (((((!((map__40865 == null))))?(((((map__40865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40865):map__40865);
var form = cljs.core.get.call(null,map__40865__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__40865__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__40865__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__40865__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__40865__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__40867){
var map__40868 = p__40867;
var map__40868__$1 = (((((!((map__40868 == null))))?(((((map__40868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40868):map__40868);
var foo = map__40868__$1;
var value = cljs.core.get.call(null,map__40868__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__40868__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__40870){
var map__40871 = p__40870;
var map__40871__$1 = (((((!((map__40871 == null))))?(((((map__40871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40871):map__40871);
var args = map__40871__$1;
var file = cljs.core.get.call(null,map__40871__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__40871__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__40871__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__40871__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__40871__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__40871__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__40873){
var map__40874 = p__40873;
var map__40874__$1 = (((((!((map__40874 == null))))?(((((map__40874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40874):map__40874);
var source = cljs.core.get.call(null,map__40874__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__40876){
var map__40877 = p__40876;
var map__40877__$1 = (((((!((map__40877 == null))))?(((((map__40877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40877):map__40877);
var static_fns = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4219__auto__ = max_eval_duration;
var y__4220__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,the_emits,map__40877,map__40877__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,the_emits,map__40877,map__40877__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {}
return c;
});
klipse_clj.lang.clojure.warning_handler = (function klipse_clj$lang$clojure$warning_handler(c,warning_type,env,extra){
if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
var temp__5720__auto__ = cljs.analyzer.error_message.call(null,warning_type,extra);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return cljs.core.async.put_BANG_.call(null,c,[cljs.analyzer.message.call(null,env,["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')),"\n"].join(''));
} else {
return null;
}
} else {
return null;
}
});
klipse_clj.lang.clojure.read_until_closed_BANG_ = (function klipse_clj$lang$clojure$read_until_closed_BANG_(c){
var d = cljs.core.async.chan.call(null);
var c__21188__auto___40910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___40910,d){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___40910,d){
return (function (state_40895){
var state_val_40896 = (state_40895[(1)]);
if((state_val_40896 === (1))){
var inst_40879 = cljs.core.PersistentVector.EMPTY;
var inst_40880 = inst_40879;
var state_40895__$1 = (function (){var statearr_40897 = state_40895;
(statearr_40897[(7)] = inst_40880);

return statearr_40897;
})();
var statearr_40898_40911 = state_40895__$1;
(statearr_40898_40911[(2)] = null);

(statearr_40898_40911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (2))){
var state_40895__$1 = state_40895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40895__$1,(4),c);
} else {
if((state_val_40896 === (3))){
var inst_40893 = (state_40895[(2)]);
var state_40895__$1 = state_40895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40895__$1,inst_40893);
} else {
if((state_val_40896 === (4))){
var inst_40883 = (state_40895[(8)]);
var inst_40883__$1 = (state_40895[(2)]);
var inst_40884 = (inst_40883__$1 == null);
var state_40895__$1 = (function (){var statearr_40899 = state_40895;
(statearr_40899[(8)] = inst_40883__$1);

return statearr_40899;
})();
if(cljs.core.truth_(inst_40884)){
var statearr_40900_40912 = state_40895__$1;
(statearr_40900_40912[(1)] = (5));

} else {
var statearr_40901_40913 = state_40895__$1;
(statearr_40901_40913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (5))){
var inst_40880 = (state_40895[(7)]);
var inst_40886 = cljs.core.async.put_BANG_.call(null,d,inst_40880);
var state_40895__$1 = state_40895;
var statearr_40902_40914 = state_40895__$1;
(statearr_40902_40914[(2)] = inst_40886);

(statearr_40902_40914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (6))){
var inst_40880 = (state_40895[(7)]);
var inst_40883 = (state_40895[(8)]);
var inst_40888 = cljs.core.conj.call(null,inst_40880,inst_40883);
var inst_40880__$1 = inst_40888;
var state_40895__$1 = (function (){var statearr_40903 = state_40895;
(statearr_40903[(7)] = inst_40880__$1);

return statearr_40903;
})();
var statearr_40904_40915 = state_40895__$1;
(statearr_40904_40915[(2)] = null);

(statearr_40904_40915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (7))){
var inst_40891 = (state_40895[(2)]);
var state_40895__$1 = state_40895;
var statearr_40905_40916 = state_40895__$1;
(statearr_40905_40916[(2)] = inst_40891);

(statearr_40905_40916[(1)] = (3));


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
});})(c__21188__auto___40910,d))
;
return ((function (switch__21021__auto__,c__21188__auto___40910,d){
return (function() {
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21022__auto____0 = (function (){
var statearr_40906 = [null,null,null,null,null,null,null,null,null];
(statearr_40906[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21022__auto__);

(statearr_40906[(1)] = (1));

return statearr_40906;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21022__auto____1 = (function (state_40895){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_40895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e40907){if((e40907 instanceof Object)){
var ex__21025__auto__ = e40907;
var statearr_40908_40917 = state_40895;
(statearr_40908_40917[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40918 = state_40895;
state_40895 = G__40918;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21022__auto__ = function(state_40895){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21022__auto____1.call(this,state_40895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___40910,d))
})();
var state__21190__auto__ = (function (){var statearr_40909 = f__21189__auto__.call(null);
(statearr_40909[(6)] = c__21188__auto___40910);

return statearr_40909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___40910,d))
);


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__40919){
var map__40920 = p__40919;
var map__40920__$1 = (((((!((map__40920 == null))))?(((((map__40920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40920):map__40920);
var static_fns = cljs.core.get.call(null,map__40920__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__40920__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__40920__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__40920__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__40920__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__40920__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4219__auto__ = max_eval_duration;
var y__4220__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var _STAR_cljs_warning_handlers_STAR__orig_val__40922 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__40923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__40923;

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (_STAR_cljs_warning_handlers_STAR__orig_val__40922,_STAR_cljs_warning_handlers_STAR__temp_val__40923,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__40920,map__40920__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__40922,_STAR_cljs_warning_handlers_STAR__temp_val__40923,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__40920,map__40920__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__40922,_STAR_cljs_warning_handlers_STAR__temp_val__40923,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__40920,map__40920__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (state_40932){
var state_val_40933 = (state_40932[(1)]);
if((state_val_40933 === (1))){
var inst_40924 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_40932__$1 = state_40932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40932__$1,(2),inst_40924);
} else {
if((state_val_40933 === (2))){
var inst_40926 = (state_40932[(2)]);
var inst_40927 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_40928 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_40929 = clojure.string.join.call(null,"",inst_40926);
var inst_40930 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_40929);
var state_40932__$1 = (function (){var statearr_40934 = state_40932;
(statearr_40934[(7)] = inst_40928);

(statearr_40934[(8)] = inst_40927);

return statearr_40934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40932__$1,inst_40930);
} else {
return null;
}
}
});})(c__21188__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__40922,_STAR_cljs_warning_handlers_STAR__temp_val__40923,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__40920,map__40920__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
;
return ((function (switch__21021__auto__,c__21188__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__40922,_STAR_cljs_warning_handlers_STAR__temp_val__40923,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__40920,map__40920__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21022__auto____0 = (function (){
var statearr_40935 = [null,null,null,null,null,null,null,null,null];
(statearr_40935[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21022__auto__);

(statearr_40935[(1)] = (1));

return statearr_40935;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21022__auto____1 = (function (state_40932){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_40932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e40936){if((e40936 instanceof Object)){
var ex__21025__auto__ = e40936;
var statearr_40937_40939 = state_40932;
(statearr_40937_40939[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40940 = state_40932;
state_40932 = G__40940;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21022__auto__ = function(state_40932){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21022__auto____1.call(this,state_40932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__40922,_STAR_cljs_warning_handlers_STAR__temp_val__40923,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__40920,map__40920__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
})();
var state__21190__auto__ = (function (){var statearr_40938 = f__21189__auto__.call(null);
(statearr_40938[(6)] = c__21188__auto__);

return statearr_40938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__40922,_STAR_cljs_warning_handlers_STAR__temp_val__40923,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__40920,map__40920__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);

return c__21188__auto__;
});})(_STAR_cljs_warning_handlers_STAR__orig_val__40922,_STAR_cljs_warning_handlers_STAR__temp_val__40923,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__40920,map__40920__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__40922;
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var ch = temp__5718__auto__;
var G__40941 = cljs.core.conj.call(null,res,ch);
res = G__40941;
continue;
} else {
return res;
}
break;
}
});
klipse_clj.lang.clojure.reader_content = (function klipse_clj$lang$clojure$reader_content(r){
return cljs.core.apply.call(null,cljs.core.str,klipse_clj.lang.clojure.read_chars.call(null,r));
});
klipse_clj.lang.clojure.data_readers = (function klipse_clj$lang$clojure$data_readers(){
return cljs.tagged_literals._STAR_cljs_data_readers_STAR_;
});
klipse_clj.lang.clojure.first_exp_and_rest = (function klipse_clj$lang$clojure$first_exp_and_rest(s,st,ns){
var _STAR_alias_map_STAR__orig_val__40942 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__40943 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__40944 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__40945 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__40946 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__40947 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__40948 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__40949 = ns;
var _STAR_cljs_ns_STAR__temp_val__40950 = ns;
var _STAR_compiler_STAR__temp_val__40951 = st;
var resolve_symbol_temp_val__40952 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__40953 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__40948;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__40949;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__40950;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__40951;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__40952;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__40953;

try{var sentinel = ({});
var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
var res = cljs.tools.reader.read.call(null,reader,false,sentinel);
if(cljs.core._EQ_.call(null,sentinel,res)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null);
} else {
var rest_s = klipse_clj.lang.clojure.reader_content.call(null,reader);
var first_exp = cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - cljs.core.count.call(null,rest_s)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace.call(null,first_exp,/^[\s\n]*/,""),rest_s], null);
}
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__40947;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__40946;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__40945;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__40944;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__40943;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__40942;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__40957 = arguments.length;
switch (G__40957) {
case 1:
return klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse_clj.lang.clojure.read_string.call(null,s,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
});

klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$3 = (function (s,st,ns){
var _STAR_alias_map_STAR__orig_val__40958 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__40959 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__40960 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__40961 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__40962 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__40963 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__40964 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__40965 = ns;
var _STAR_cljs_ns_STAR__temp_val__40966 = ns;
var _STAR_compiler_STAR__temp_val__40967 = st;
var resolve_symbol_temp_val__40968 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__40969 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__40964;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__40965;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__40966;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__40967;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__40968;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__40969;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__40963;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__40962;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__40961;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__40960;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__40959;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__40958;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__40974 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__40974,(0),null);
var rest_s = cljs.core.nth.call(null,vec__40974,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__40977 = rest_s;
var G__40978 = res;
s__$1 = G__40977;
res = G__40978;
continue;
} else {
var G__40979 = rest_s;
var G__40980 = cljs.core.conj.call(null,res,exp);
s__$1 = G__40979;
res = G__40980;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__40981){
var map__40982 = p__40981;
var map__40982__$1 = (((((!((map__40982 == null))))?(((((map__40982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40982):map__40982);
var result_element = cljs.core.get.call(null,map__40982__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__40982__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__4120__auto__ = container;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__4120__auto__;
}
})())){
goog.dom.setTextContent(container,klipse_clj.lang.clojure.display_err.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(err)));
} else {
}

return err;
});
klipse_clj.lang.clojure.completions = klipse_clj.repl.get_completions;
klipse_clj.lang.clojure.core_eval = (function klipse_clj$lang$clojure$core_eval(s,opts){
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null);
var c__21188__auto___41087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___41087,res_chan,warnings_chan){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___41087,res_chan,warnings_chan){
return (function (state_41059){
var state_val_41060 = (state_41059[(1)]);
if((state_val_41060 === (7))){
var inst_41055 = (state_41059[(2)]);
var state_41059__$1 = state_41059;
var statearr_41061_41088 = state_41059__$1;
(statearr_41061_41088[(2)] = inst_41055);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41059__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (1))){
var state_41059__$1 = state_41059;
var statearr_41062_41089 = state_41059__$1;
(statearr_41062_41089[(2)] = null);

(statearr_41062_41089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41059,(3),Object,null,(2));
var inst_40997 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_41059__$1 = state_41059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41059__$1,(5),inst_40997);
} else {
if((state_val_41060 === (15))){
var inst_41042 = (state_41059[(7)]);
var inst_41033 = (state_41059[(8)]);
var inst_41014 = (state_41059[(9)]);
var inst_41044 = (state_41059[(2)]);
var inst_41045 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41014),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41044)].join('');
var inst_41012 = inst_41042;
var inst_41013 = inst_41033;
var inst_41014__$1 = inst_41045;
var state_41059__$1 = (function (){var statearr_41063 = state_41059;
(statearr_41063[(10)] = inst_41012);

(statearr_41063[(9)] = inst_41014__$1);

(statearr_41063[(11)] = inst_41013);

return statearr_41063;
})();
var statearr_41064_41090 = state_41059__$1;
(statearr_41064_41090[(2)] = null);

(statearr_41064_41090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (13))){
var inst_41031 = (state_41059[(12)]);
var inst_41020 = (state_41059[(13)]);
var inst_41040 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_41041 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_41042 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_41020,inst_41040,inst_41041);
var state_41059__$1 = (function (){var statearr_41065 = state_41059;
(statearr_41065[(7)] = inst_41042);

return statearr_41065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41059__$1,(15),inst_41031);
} else {
if((state_val_41060 === (6))){
var inst_41012 = (state_41059[(10)]);
var inst_41019 = (state_41059[(14)]);
var inst_41019__$1 = cljs.core.nth.call(null,inst_41012,(0),null);
var inst_41020 = cljs.core.nth.call(null,inst_41012,(1),null);
var inst_41021 = cljs.core.empty_QMARK_.call(null,inst_41019__$1);
var inst_41022 = (!(inst_41021));
var state_41059__$1 = (function (){var statearr_41066 = state_41059;
(statearr_41066[(14)] = inst_41019__$1);

(statearr_41066[(13)] = inst_41020);

return statearr_41066;
})();
if(inst_41022){
var statearr_41067_41091 = state_41059__$1;
(statearr_41067_41091[(1)] = (8));

} else {
var statearr_41068_41092 = state_41059__$1;
(statearr_41068_41092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (3))){
var inst_40984 = (state_41059[(2)]);
var inst_40985 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_40986 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_40987 = [inst_40984];
var inst_40988 = cljs.core.PersistentHashMap.fromArrays(inst_40986,inst_40987);
var inst_40989 = cljs.core.async.put_BANG_.call(null,res_chan,inst_40988);
var inst_40990 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_40991 = [inst_40984];
var inst_40992 = cljs.core.PersistentHashMap.fromArrays(inst_40990,inst_40991);
var inst_40993 = klipse_clj.lang.clojure.populate_err.call(null,inst_40992,opts);
var state_41059__$1 = (function (){var statearr_41069 = state_41059;
(statearr_41069[(15)] = inst_40989);

(statearr_41069[(16)] = inst_40985);

return statearr_41069;
})();
var statearr_41070_41093 = state_41059__$1;
(statearr_41070_41093[(2)] = inst_40993);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41059__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (12))){
var inst_41033 = (state_41059[(8)]);
var inst_41036 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_41037 = cljs.core.async.put_BANG_.call(null,res_chan,inst_41033);
var inst_41038 = klipse_clj.lang.clojure.populate_err.call(null,inst_41033,opts);
var state_41059__$1 = (function (){var statearr_41071 = state_41059;
(statearr_41071[(17)] = inst_41036);

(statearr_41071[(18)] = inst_41037);

return statearr_41071;
})();
var statearr_41072_41094 = state_41059__$1;
(statearr_41072_41094[(2)] = inst_41038);

(statearr_41072_41094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (2))){
var inst_41057 = (state_41059[(2)]);
var state_41059__$1 = state_41059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41059__$1,inst_41057);
} else {
if((state_val_41060 === (11))){
var inst_41033 = (state_41059[(8)]);
var inst_41033__$1 = (state_41059[(2)]);
var inst_41034 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41033__$1);
var state_41059__$1 = (function (){var statearr_41073 = state_41059;
(statearr_41073[(8)] = inst_41033__$1);

return statearr_41073;
})();
if(cljs.core.truth_(inst_41034)){
var statearr_41074_41095 = state_41059__$1;
(statearr_41074_41095[(1)] = (12));

} else {
var statearr_41075_41096 = state_41059__$1;
(statearr_41075_41096[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (9))){
var inst_41014 = (state_41059[(9)]);
var inst_41013 = (state_41059[(11)]);
var inst_41050 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_41014);
var inst_41051 = cljs.core.async.put_BANG_.call(null,res_chan,inst_41013);
var state_41059__$1 = (function (){var statearr_41076 = state_41059;
(statearr_41076[(19)] = inst_41050);

return statearr_41076;
})();
var statearr_41077_41097 = state_41059__$1;
(statearr_41077_41097[(2)] = inst_41051);

(statearr_41077_41097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (5))){
var inst_40999 = (state_41059[(2)]);
var inst_41007 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_41008 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_41009 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_41007,inst_41008);
var inst_41010 = cljs.core.nth.call(null,inst_41009,(0),null);
var inst_41011 = cljs.core.nth.call(null,inst_41009,(1),null);
var inst_41012 = inst_41009;
var inst_41013 = null;
var inst_41014 = "";
var state_41059__$1 = (function (){var statearr_41078 = state_41059;
(statearr_41078[(10)] = inst_41012);

(statearr_41078[(20)] = inst_40999);

(statearr_41078[(21)] = inst_41010);

(statearr_41078[(9)] = inst_41014);

(statearr_41078[(11)] = inst_41013);

(statearr_41078[(22)] = inst_41011);

return statearr_41078;
})();
var statearr_41079_41098 = state_41059__$1;
(statearr_41079_41098[(2)] = null);

(statearr_41079_41098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (14))){
var inst_41048 = (state_41059[(2)]);
var state_41059__$1 = state_41059;
var statearr_41080_41099 = state_41059__$1;
(statearr_41080_41099[(2)] = inst_41048);

(statearr_41080_41099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (10))){
var inst_41053 = (state_41059[(2)]);
var state_41059__$1 = state_41059;
var statearr_41081_41100 = state_41059__$1;
(statearr_41081_41100[(2)] = inst_41053);

(statearr_41081_41100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41060 === (8))){
var inst_41019 = (state_41059[(14)]);
var inst_41027 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_41028 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_41027,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_41029 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_41019,inst_41028);
var inst_41030 = cljs.core.nth.call(null,inst_41029,(0),null);
var inst_41031 = cljs.core.nth.call(null,inst_41029,(1),null);
var state_41059__$1 = (function (){var statearr_41082 = state_41059;
(statearr_41082[(12)] = inst_41031);

return statearr_41082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41059__$1,(11),inst_41030);
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
});})(c__21188__auto___41087,res_chan,warnings_chan))
;
return ((function (switch__21021__auto__,c__21188__auto___41087,res_chan,warnings_chan){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__21022__auto____0 = (function (){
var statearr_41083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41083[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__21022__auto__);

(statearr_41083[(1)] = (1));

return statearr_41083;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__21022__auto____1 = (function (state_41059){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41084){if((e41084 instanceof Object)){
var ex__21025__auto__ = e41084;
var statearr_41085_41101 = state_41059;
(statearr_41085_41101[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41102 = state_41059;
state_41059 = G__41102;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__21022__auto__ = function(state_41059){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__21022__auto____1.call(this,state_41059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___41087,res_chan,warnings_chan))
})();
var state__21190__auto__ = (function (){var statearr_41086 = f__21189__auto__.call(null);
(statearr_41086[(6)] = c__21188__auto___41087);

return statearr_41086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___41087,res_chan,warnings_chan))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41160){
var state_val_41161 = (state_41160[(1)]);
if((state_val_41161 === (7))){
var inst_41128 = (state_41160[(7)]);
var inst_41133 = klipse_clj.repl.create_state_compile.call(null);
var inst_41134 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_41133,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_41135 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_41128,inst_41134);
var state_41160__$1 = state_41160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41160__$1,(10),inst_41135);
} else {
if((state_val_41161 === (1))){
var state_41160__$1 = state_41160;
var statearr_41162_41183 = state_41160__$1;
(statearr_41162_41183[(2)] = null);

(statearr_41162_41183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41161 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41160,(3),Object,null,(2));
var inst_41117 = klipse_clj.repl.create_state_compile.call(null);
var inst_41118 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_41119 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_41117,inst_41118);
var inst_41120 = cljs.core.nth.call(null,inst_41119,(0),null);
var inst_41121 = cljs.core.nth.call(null,inst_41119,(1),null);
var inst_41122 = inst_41119;
var inst_41123 = "";
var state_41160__$1 = (function (){var statearr_41163 = state_41160;
(statearr_41163[(8)] = inst_41120);

(statearr_41163[(9)] = inst_41122);

(statearr_41163[(10)] = inst_41123);

(statearr_41163[(11)] = inst_41121);

return statearr_41163;
})();
var statearr_41164_41184 = state_41160__$1;
(statearr_41164_41184[(2)] = null);

(statearr_41164_41184[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41161 === (13))){
var inst_41148 = (state_41160[(2)]);
var state_41160__$1 = state_41160;
var statearr_41165_41185 = state_41160__$1;
(statearr_41165_41185[(2)] = inst_41148);

(statearr_41165_41185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41161 === (6))){
var inst_41156 = (state_41160[(2)]);
var state_41160__$1 = state_41160;
var statearr_41166_41186 = state_41160__$1;
(statearr_41166_41186[(2)] = inst_41156);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41160__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41161 === (3))){
var inst_41103 = (state_41160[(2)]);
var inst_41104 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_41105 = [inst_41103];
var inst_41106 = cljs.core.PersistentHashMap.fromArrays(inst_41104,inst_41105);
var state_41160__$1 = state_41160;
var statearr_41167_41187 = state_41160__$1;
(statearr_41167_41187[(2)] = inst_41106);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41160__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41161 === (12))){
var inst_41129 = (state_41160[(12)]);
var inst_41137 = (state_41160[(13)]);
var inst_41123 = (state_41160[(10)]);
var inst_41141 = klipse_clj.repl.create_state_compile.call(null);
var inst_41142 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_41143 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_41129,inst_41141,inst_41142);
var inst_41144 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_41137);
var inst_41145 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41123),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41144)].join('');
var inst_41122 = inst_41143;
var inst_41123__$1 = inst_41145;
var state_41160__$1 = (function (){var statearr_41168 = state_41160;
(statearr_41168[(9)] = inst_41122);

(statearr_41168[(10)] = inst_41123__$1);

return statearr_41168;
})();
var statearr_41169_41188 = state_41160__$1;
(statearr_41169_41188[(2)] = null);

(statearr_41169_41188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41161 === (2))){
var inst_41158 = (state_41160[(2)]);
var state_41160__$1 = state_41160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41160__$1,inst_41158);
} else {
if((state_val_41161 === (11))){
var inst_41137 = (state_41160[(13)]);
var state_41160__$1 = state_41160;
var statearr_41170_41189 = state_41160__$1;
(statearr_41170_41189[(2)] = inst_41137);

(statearr_41170_41189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41161 === (9))){
var inst_41154 = (state_41160[(2)]);
var state_41160__$1 = state_41160;
var statearr_41171_41190 = state_41160__$1;
(statearr_41171_41190[(2)] = inst_41154);

(statearr_41171_41190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41161 === (5))){
var inst_41122 = (state_41160[(9)]);
var inst_41128 = (state_41160[(7)]);
var inst_41128__$1 = cljs.core.nth.call(null,inst_41122,(0),null);
var inst_41129 = cljs.core.nth.call(null,inst_41122,(1),null);
var inst_41130 = cljs.core.empty_QMARK_.call(null,inst_41128__$1);
var inst_41131 = (!(inst_41130));
var state_41160__$1 = (function (){var statearr_41172 = state_41160;
(statearr_41172[(12)] = inst_41129);

(statearr_41172[(7)] = inst_41128__$1);

return statearr_41172;
})();
if(inst_41131){
var statearr_41173_41191 = state_41160__$1;
(statearr_41173_41191[(1)] = (7));

} else {
var statearr_41174_41192 = state_41160__$1;
(statearr_41174_41192[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41161 === (10))){
var inst_41137 = (state_41160[(13)]);
var inst_41137__$1 = (state_41160[(2)]);
var inst_41138 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41137__$1);
var state_41160__$1 = (function (){var statearr_41175 = state_41160;
(statearr_41175[(13)] = inst_41137__$1);

return statearr_41175;
})();
if(cljs.core.truth_(inst_41138)){
var statearr_41176_41193 = state_41160__$1;
(statearr_41176_41193[(1)] = (11));

} else {
var statearr_41177_41194 = state_41160__$1;
(statearr_41177_41194[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41161 === (8))){
var inst_41123 = (state_41160[(10)]);
var inst_41150 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_41151 = [inst_41123];
var inst_41152 = cljs.core.PersistentHashMap.fromArrays(inst_41150,inst_41151);
var state_41160__$1 = state_41160;
var statearr_41178_41195 = state_41160__$1;
(statearr_41178_41195[(2)] = inst_41152);

(statearr_41178_41195[(1)] = (9));


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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__21022__auto____0 = (function (){
var statearr_41179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41179[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__21022__auto__);

(statearr_41179[(1)] = (1));

return statearr_41179;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__21022__auto____1 = (function (state_41160){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41180){if((e41180 instanceof Object)){
var ex__21025__auto__ = e41180;
var statearr_41181_41196 = state_41160;
(statearr_41181_41196[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41197 = state_41160;
state_41160 = G__41197;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__21022__auto__ = function(state_41160){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__21022__auto____1.call(this,state_41160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41182 = f__21189__auto__.call(null);
(statearr_41182[(6)] = c__21188__auto__);

return statearr_41182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41213){
var state_val_41214 = (state_41213[(1)]);
if((state_val_41214 === (1))){
var inst_41201 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_41202 = cljs.core.nth.call(null,inst_41201,(0),null);
var inst_41203 = cljs.core.nth.call(null,inst_41201,(1),null);
var state_41213__$1 = (function (){var statearr_41215 = state_41213;
(statearr_41215[(7)] = inst_41203);

return statearr_41215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41213__$1,(2),inst_41202);
} else {
if((state_val_41214 === (2))){
var inst_41203 = (state_41213[(7)]);
var inst_41205 = (state_41213[(2)]);
var inst_41206 = klipse_clj.lang.clojure.result_as_str.call(null,inst_41205,opts);
var state_41213__$1 = (function (){var statearr_41216 = state_41213;
(statearr_41216[(8)] = inst_41206);

return statearr_41216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41213__$1,(3),inst_41203);
} else {
if((state_val_41214 === (3))){
var inst_41206 = (state_41213[(8)]);
var inst_41208 = (state_41213[(2)]);
var inst_41209 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_41210 = [inst_41208,inst_41206];
var inst_41211 = cljs.core.PersistentHashMap.fromArrays(inst_41209,inst_41210);
var state_41213__$1 = state_41213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41213__$1,inst_41211);
} else {
return null;
}
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__21022__auto____0 = (function (){
var statearr_41217 = [null,null,null,null,null,null,null,null,null];
(statearr_41217[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__21022__auto__);

(statearr_41217[(1)] = (1));

return statearr_41217;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__21022__auto____1 = (function (state_41213){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41218){if((e41218 instanceof Object)){
var ex__21025__auto__ = e41218;
var statearr_41219_41221 = state_41213;
(statearr_41219_41221[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41222 = state_41213;
state_41213 = G__41222;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__21022__auto__ = function(state_41213){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__21022__auto____1.call(this,state_41213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41220 = f__21189__auto__.call(null);
(statearr_41220[(6)] = c__21188__auto__);

return statearr_41220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41235){
var state_val_41236 = (state_41235[(1)]);
if((state_val_41236 === (1))){
var inst_41226 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_41227 = cljs.core.nth.call(null,inst_41226,(0),null);
var inst_41228 = cljs.core.nth.call(null,inst_41226,(1),null);
var state_41235__$1 = (function (){var statearr_41237 = state_41235;
(statearr_41237[(7)] = inst_41228);

return statearr_41237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41235__$1,(2),inst_41227);
} else {
if((state_val_41236 === (2))){
var inst_41228 = (state_41235[(7)]);
var inst_41230 = (state_41235[(2)]);
var inst_41231 = klipse_clj.lang.clojure.result_as_str.call(null,inst_41230,opts);
var state_41235__$1 = (function (){var statearr_41238 = state_41235;
(statearr_41238[(8)] = inst_41231);

return statearr_41238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41235__$1,(3),inst_41228);
} else {
if((state_val_41236 === (3))){
var inst_41231 = (state_41235[(8)]);
var inst_41233 = (state_41235[(2)]);
var state_41235__$1 = (function (){var statearr_41239 = state_41235;
(statearr_41239[(9)] = inst_41233);

return statearr_41239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41235__$1,inst_41231);
} else {
return null;
}
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__21022__auto____0 = (function (){
var statearr_41240 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41240[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__21022__auto__);

(statearr_41240[(1)] = (1));

return statearr_41240;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__21022__auto____1 = (function (state_41235){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41241){if((e41241 instanceof Object)){
var ex__21025__auto__ = e41241;
var statearr_41242_41244 = state_41235;
(statearr_41242_41244[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41245 = state_41235;
state_41235 = G__41245;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__21022__auto__ = function(state_41235){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__21022__auto____1.call(this,state_41235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41243 = f__21189__auto__.call(null);
(statearr_41243[(6)] = c__21188__auto__);

return statearr_41243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__41247 = arguments.length;
switch (G__41247) {
case 1:
return klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse_clj.lang.clojure.the_eval.call(null,s,cljs.core.PersistentArrayMap.EMPTY);
});

klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41254){
var state_val_41255 = (state_41254[(1)]);
if((state_val_41255 === (1))){
var inst_41248 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_41249 = cljs.core.first.call(null,inst_41248);
var state_41254__$1 = state_41254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41254__$1,(2),inst_41249);
} else {
if((state_val_41255 === (2))){
var inst_41251 = (state_41254[(2)]);
var inst_41252 = klipse_clj.lang.clojure.read_result.call(null,inst_41251);
var state_41254__$1 = state_41254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41254__$1,inst_41252);
} else {
return null;
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$state_machine__21022__auto____0 = (function (){
var statearr_41256 = [null,null,null,null,null,null,null];
(statearr_41256[(0)] = klipse_clj$lang$clojure$state_machine__21022__auto__);

(statearr_41256[(1)] = (1));

return statearr_41256;
});
var klipse_clj$lang$clojure$state_machine__21022__auto____1 = (function (state_41254){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41257){if((e41257 instanceof Object)){
var ex__21025__auto__ = e41257;
var statearr_41258_41261 = state_41254;
(statearr_41258_41261[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41262 = state_41254;
state_41254 = G__41262;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__21022__auto__ = function(state_41254){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__21022__auto____1.call(this,state_41254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__21022__auto____0;
klipse_clj$lang$clojure$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__21022__auto____1;
return klipse_clj$lang$clojure$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41259 = f__21189__auto__.call(null);
(statearr_41259[(6)] = c__21188__auto__);

return statearr_41259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41269){
var state_val_41270 = (state_41269[(1)]);
if((state_val_41270 === (1))){
var inst_41263 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_41269__$1 = state_41269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41269__$1,(2),inst_41263);
} else {
if((state_val_41270 === (2))){
var inst_41265 = (state_41269[(2)]);
var inst_41266 = cljs.core.clj__GT_js.call(null,inst_41265);
var inst_41267 = cb.call(null,inst_41266);
var state_41269__$1 = state_41269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41269__$1,inst_41267);
} else {
return null;
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21022__auto____0 = (function (){
var statearr_41271 = [null,null,null,null,null,null,null];
(statearr_41271[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21022__auto__);

(statearr_41271[(1)] = (1));

return statearr_41271;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21022__auto____1 = (function (state_41269){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41272){if((e41272 instanceof Object)){
var ex__21025__auto__ = e41272;
var statearr_41273_41275 = state_41269;
(statearr_41273_41275[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41276 = state_41269;
state_41269 = G__41276;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21022__auto__ = function(state_41269){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21022__auto____1.call(this,state_41269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41274 = f__21189__auto__.call(null);
(statearr_41274[(6)] = c__21188__auto__);

return statearr_41274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__41278 = arguments.length;
switch (G__41278) {
case 1:
return klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$1 = (function (exp){
return klipse_clj.lang.clojure.str_compile.call(null,exp,cljs.core.PersistentArrayMap.EMPTY);
});

klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$2 = (function (exp,opts){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41284){
var state_val_41285 = (state_41284[(1)]);
if((state_val_41285 === (1))){
var inst_41279 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_41284__$1 = state_41284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41284__$1,(2),inst_41279);
} else {
if((state_val_41285 === (2))){
var inst_41281 = (state_41284[(2)]);
var inst_41282 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_41281);
var state_41284__$1 = state_41284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41284__$1,inst_41282);
} else {
return null;
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$state_machine__21022__auto____0 = (function (){
var statearr_41286 = [null,null,null,null,null,null,null];
(statearr_41286[(0)] = klipse_clj$lang$clojure$state_machine__21022__auto__);

(statearr_41286[(1)] = (1));

return statearr_41286;
});
var klipse_clj$lang$clojure$state_machine__21022__auto____1 = (function (state_41284){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41287){if((e41287 instanceof Object)){
var ex__21025__auto__ = e41287;
var statearr_41288_41291 = state_41284;
(statearr_41288_41291[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41292 = state_41284;
state_41284 = G__41292;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__21022__auto__ = function(state_41284){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__21022__auto____1.call(this,state_41284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__21022__auto____0;
klipse_clj$lang$clojure$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__21022__auto____1;
return klipse_clj$lang$clojure$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41289 = f__21189__auto__.call(null);
(statearr_41289[(6)] = c__21188__auto__);

return statearr_41289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41298){
var state_val_41299 = (state_41298[(1)]);
if((state_val_41299 === (1))){
var inst_41293 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_41298__$1 = state_41298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41298__$1,(2),inst_41293);
} else {
if((state_val_41299 === (2))){
var inst_41295 = (state_41298[(2)]);
var inst_41296 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_41295);
var state_41298__$1 = state_41298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41298__$1,inst_41296);
} else {
return null;
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__21022__auto____0 = (function (){
var statearr_41300 = [null,null,null,null,null,null,null];
(statearr_41300[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__21022__auto__);

(statearr_41300[(1)] = (1));

return statearr_41300;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__21022__auto____1 = (function (state_41298){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41301){if((e41301 instanceof Object)){
var ex__21025__auto__ = e41301;
var statearr_41302_41304 = state_41298;
(statearr_41302_41304[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41305 = state_41298;
state_41298 = G__41305;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__21022__auto__ = function(state_41298){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__21022__auto____1.call(this,state_41298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41303 = f__21189__auto__.call(null);
(statearr_41303[(6)] = c__21188__auto__);

return statearr_41303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41312){
var state_val_41313 = (state_41312[(1)]);
if((state_val_41313 === (1))){
var inst_41306 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_41312__$1 = state_41312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41312__$1,(2),inst_41306);
} else {
if((state_val_41313 === (2))){
var inst_41308 = (state_41312[(2)]);
var inst_41309 = cljs.core.second.call(null,inst_41308);
var inst_41310 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41309);
var state_41312__$1 = state_41312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41312__$1,inst_41310);
} else {
return null;
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__21022__auto____0 = (function (){
var statearr_41314 = [null,null,null,null,null,null,null];
(statearr_41314[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__21022__auto__);

(statearr_41314[(1)] = (1));

return statearr_41314;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__21022__auto____1 = (function (state_41312){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41315){if((e41315 instanceof Object)){
var ex__21025__auto__ = e41315;
var statearr_41316_41318 = state_41312;
(statearr_41316_41318[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41319 = state_41312;
state_41312 = G__41319;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__21022__auto__ = function(state_41312){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__21022__auto____1.call(this,state_41312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41317 = f__21189__auto__.call(null);
(statearr_41317[(6)] = c__21188__auto__);

return statearr_41317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__41321){
var map__41322 = p__41321;
var map__41322__$1 = (((((!((map__41322 == null))))?(((((map__41322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41322):map__41322);
var opts = map__41322__$1;
var container_id = cljs.core.get.call(null,map__41322__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__41322__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__41322__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__21188__auto___41412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___41412,c,map__41322,map__41322__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___41412,c,map__41322,map__41322__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_41381){
var state_val_41382 = (state_41381[(1)]);
if((state_val_41382 === (7))){
var inst_41332 = (state_41381[(2)]);
var inst_41337 = (function (){var _STAR_print_newline_STAR__orig_val__41333 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41334 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41335 = true;
return ((function (_STAR_print_newline_STAR__orig_val__41333,_STAR_print_fn_STAR__orig_val__41334,_STAR_print_newline_STAR__temp_val__41335,inst_41332,state_val_41382,c__21188__auto___41412,c,map__41322,map__41322__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__41320_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__41320_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__41333,_STAR_print_fn_STAR__orig_val__41334,_STAR_print_newline_STAR__temp_val__41335,inst_41332,state_val_41382,c__21188__auto___41412,c,map__41322,map__41322__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_41338 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_41339 = cljs.core._STAR_print_fn_STAR_ = inst_41337;
var state_41381__$1 = (function (){var statearr_41383 = state_41381;
(statearr_41383[(7)] = inst_41332);

(statearr_41383[(8)] = inst_41338);

(statearr_41383[(9)] = inst_41339);

return statearr_41383;
})();
var statearr_41384_41413 = state_41381__$1;
(statearr_41384_41413[(2)] = null);

(statearr_41384_41413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (20))){
var inst_41370 = (state_41381[(2)]);
var inst_41371 = cljs.core.get.call(null,inst_41370,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_41372 = cljs.core.get.call(null,inst_41370,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_41373 = cljs.core.second.call(null,inst_41372);
var inst_41374 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41371),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41373)].join('');
var inst_41375 = cljs.core.async.put_BANG_.call(null,c,inst_41374);
var state_41381__$1 = state_41381;
var statearr_41385_41414 = state_41381__$1;
(statearr_41385_41414[(2)] = inst_41375);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41381__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (1))){
var inst_41324 = clojure.string.blank_QMARK_.call(null,exp);
var state_41381__$1 = state_41381;
if(inst_41324){
var statearr_41386_41415 = state_41381__$1;
(statearr_41386_41415[(1)] = (2));

} else {
var statearr_41387_41416 = state_41381__$1;
(statearr_41387_41416[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (4))){
var inst_41379 = (state_41381[(2)]);
var state_41381__$1 = state_41381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41381__$1,inst_41379);
} else {
if((state_val_41382 === (15))){
var state_41381__$1 = state_41381;
var statearr_41388_41417 = state_41381__$1;
(statearr_41388_41417[(2)] = true);

(statearr_41388_41417[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (13))){
var state_41381__$1 = state_41381;
var statearr_41389_41418 = state_41381__$1;
(statearr_41389_41418[(2)] = false);

(statearr_41389_41418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (6))){
var state_41381__$1 = state_41381;
var statearr_41390_41419 = state_41381__$1;
(statearr_41390_41419[(2)] = null);

(statearr_41390_41419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (17))){
var inst_41362 = (state_41381[(2)]);
var state_41381__$1 = state_41381;
var statearr_41391_41420 = state_41381__$1;
(statearr_41391_41420[(2)] = inst_41362);

(statearr_41391_41420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (3))){
var state_41381__$1 = state_41381;
if(cljs.core.truth_(setup_container_fn)){
var statearr_41392_41421 = state_41381__$1;
(statearr_41392_41421[(1)] = (5));

} else {
var statearr_41393_41422 = state_41381__$1;
(statearr_41393_41422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (12))){
var inst_41349 = (state_41381[(10)]);
var inst_41354 = inst_41349.cljs$lang$protocol_mask$partition0$;
var inst_41355 = (inst_41354 & (64));
var inst_41356 = inst_41349.cljs$core$ISeq$;
var inst_41357 = (cljs.core.PROTOCOL_SENTINEL === inst_41356);
var inst_41358 = ((inst_41355) || (inst_41357));
var state_41381__$1 = state_41381;
if(cljs.core.truth_(inst_41358)){
var statearr_41394_41423 = state_41381__$1;
(statearr_41394_41423[(1)] = (15));

} else {
var statearr_41395_41424 = state_41381__$1;
(statearr_41395_41424[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (2))){
var inst_41326 = cljs.core.async.put_BANG_.call(null,c,"");
var state_41381__$1 = state_41381;
var statearr_41396_41425 = state_41381__$1;
(statearr_41396_41425[(2)] = inst_41326);

(statearr_41396_41425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (19))){
var inst_41349 = (state_41381[(10)]);
var state_41381__$1 = state_41381;
var statearr_41397_41426 = state_41381__$1;
(statearr_41397_41426[(2)] = inst_41349);

(statearr_41397_41426[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (11))){
var inst_41349 = (state_41381[(10)]);
var inst_41349__$1 = (state_41381[(2)]);
var inst_41351 = (inst_41349__$1 == null);
var inst_41352 = cljs.core.not.call(null,inst_41351);
var state_41381__$1 = (function (){var statearr_41398 = state_41381;
(statearr_41398[(10)] = inst_41349__$1);

return statearr_41398;
})();
if(inst_41352){
var statearr_41399_41427 = state_41381__$1;
(statearr_41399_41427[(1)] = (12));

} else {
var statearr_41400_41428 = state_41381__$1;
(statearr_41400_41428[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (9))){
var inst_41340 = (state_41381[(2)]);
var inst_41341 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_41342 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_41381__$1 = (function (){var statearr_41401 = state_41381;
(statearr_41401[(11)] = inst_41341);

(statearr_41401[(12)] = inst_41340);

(statearr_41401[(13)] = inst_41342);

return statearr_41401;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41381__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (5))){
var inst_41329 = setup_container_fn.call(null,container_id);
var state_41381__$1 = state_41381;
var statearr_41402_41429 = state_41381__$1;
(statearr_41402_41429[(2)] = inst_41329);

(statearr_41402_41429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (14))){
var inst_41365 = (state_41381[(2)]);
var state_41381__$1 = state_41381;
if(cljs.core.truth_(inst_41365)){
var statearr_41403_41430 = state_41381__$1;
(statearr_41403_41430[(1)] = (18));

} else {
var statearr_41404_41431 = state_41381__$1;
(statearr_41404_41431[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (16))){
var state_41381__$1 = state_41381;
var statearr_41405_41432 = state_41381__$1;
(statearr_41405_41432[(2)] = false);

(statearr_41405_41432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41381,null,null,(9),(8));
var inst_41347 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_41381__$1 = state_41381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41381__$1,(11),inst_41347);
} else {
if((state_val_41382 === (18))){
var inst_41349 = (state_41381[(10)]);
var inst_41367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41349);
var state_41381__$1 = state_41381;
var statearr_41406_41433 = state_41381__$1;
(statearr_41406_41433[(2)] = inst_41367);

(statearr_41406_41433[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41382 === (8))){
var inst_41377 = (state_41381[(2)]);
var state_41381__$1 = state_41381;
var statearr_41407_41434 = state_41381__$1;
(statearr_41407_41434[(2)] = inst_41377);

(statearr_41407_41434[(1)] = (4));


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
});})(c__21188__auto___41412,c,map__41322,map__41322__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__21021__auto__,c__21188__auto___41412,c,map__41322,map__41322__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__21022__auto____0 = (function (){
var statearr_41408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41408[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__21022__auto__);

(statearr_41408[(1)] = (1));

return statearr_41408;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__21022__auto____1 = (function (state_41381){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41409){if((e41409 instanceof Object)){
var ex__21025__auto__ = e41409;
var statearr_41410_41435 = state_41381;
(statearr_41410_41435[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41436 = state_41381;
state_41381 = G__41436;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__21022__auto__ = function(state_41381){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__21022__auto____1.call(this,state_41381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___41412,c,map__41322,map__41322__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__21190__auto__ = (function (){var statearr_41411 = f__21189__auto__.call(null);
(statearr_41411[(6)] = c__21188__auto___41412);

return statearr_41411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___41412,c,map__41322,map__41322__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(var_args){
var G__41438 = arguments.length;
switch (G__41438) {
case 1:
return klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse_clj.lang.clojure.eval_async_prepl.call(null,s,cljs.core.PersistentArrayMap.EMPTY);
});

klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var c = cljs.core.async.chan.call(null);
var c__21188__auto___41468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto___41468,c){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto___41468,c){
return (function (state_41457){
var state_val_41458 = (state_41457[(1)]);
if((state_val_41458 === (1))){
var inst_41441 = (function (){var _STAR_print_fn_STAR__orig_val__41439 = cljs.core._STAR_print_fn_STAR_;
return ((function (_STAR_print_fn_STAR__orig_val__41439,state_val_41458,c__21188__auto___41468,c){
return (function (s__$1){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),s__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
});
;})(_STAR_print_fn_STAR__orig_val__41439,state_val_41458,c__21188__auto___41468,c))
})();
var inst_41442 = cljs.core._STAR_print_fn_STAR_ = inst_41441;
var state_41457__$1 = (function (){var statearr_41459 = state_41457;
(statearr_41459[(7)] = inst_41442);

return statearr_41459;
})();
var statearr_41460_41469 = state_41457__$1;
(statearr_41460_41469[(2)] = null);

(statearr_41460_41469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41458 === (2))){
var inst_41455 = (state_41457[(2)]);
var state_41457__$1 = state_41457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41457__$1,inst_41455);
} else {
if((state_val_41458 === (3))){
var inst_41443 = (state_41457[(2)]);
var inst_41444 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var state_41457__$1 = (function (){var statearr_41461 = state_41457;
(statearr_41461[(8)] = inst_41444);

(statearr_41461[(9)] = inst_41443);

return statearr_41461;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41457__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41458 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41457,null,null,(3),(2));
var inst_41448 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_41449 = cljs.core.first.call(null,inst_41448);
var state_41457__$1 = state_41457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41457__$1,(5),inst_41449);
} else {
if((state_val_41458 === (5))){
var inst_41451 = (state_41457[(2)]);
var inst_41452 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_41451,opts);
var inst_41453 = cljs.core.async.put_BANG_.call(null,c,inst_41452);
var state_41457__$1 = state_41457;
var statearr_41462_41470 = state_41457__$1;
(statearr_41462_41470[(2)] = inst_41453);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41457__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__21188__auto___41468,c))
;
return ((function (switch__21021__auto__,c__21188__auto___41468,c){
return (function() {
var klipse_clj$lang$clojure$state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$state_machine__21022__auto____0 = (function (){
var statearr_41463 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41463[(0)] = klipse_clj$lang$clojure$state_machine__21022__auto__);

(statearr_41463[(1)] = (1));

return statearr_41463;
});
var klipse_clj$lang$clojure$state_machine__21022__auto____1 = (function (state_41457){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41464){if((e41464 instanceof Object)){
var ex__21025__auto__ = e41464;
var statearr_41465_41471 = state_41457;
(statearr_41465_41471[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41472 = state_41457;
state_41457 = G__41472;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__21022__auto__ = function(state_41457){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__21022__auto____1.call(this,state_41457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__21022__auto____0;
klipse_clj$lang$clojure$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__21022__auto____1;
return klipse_clj$lang$clojure$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto___41468,c))
})();
var state__21190__auto__ = (function (){var statearr_41466 = f__21189__auto__.call(null);
(statearr_41466[(6)] = c__21188__auto___41468);

return statearr_41466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto___41468,c))
);


return c;
});

klipse_clj.lang.clojure.eval_async_prepl.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
