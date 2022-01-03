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
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_25942){
var state_val_25943 = (state_25942[(1)]);
if((state_val_25943 === (7))){
var inst_25938 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
var statearr_25944_25970 = state_25942__$1;
(statearr_25944_25970[(2)] = inst_25938);

(statearr_25944_25970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (1))){
var inst_25881 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_25942__$1 = state_25942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25942__$1,(2),inst_25881);
} else {
if((state_val_25943 === (4))){
var inst_25940 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25942__$1,inst_25940);
} else {
if((state_val_25943 === (15))){
var inst_25912 = (state_25942[(7)]);
var inst_25929 = (state_25942[(2)]);
var inst_25930 = cljs.core.next.call(null,inst_25912);
var inst_25892 = inst_25930;
var inst_25893 = null;
var inst_25894 = (0);
var inst_25895 = (0);
var state_25942__$1 = (function (){var statearr_25945 = state_25942;
(statearr_25945[(8)] = inst_25929);

(statearr_25945[(9)] = inst_25892);

(statearr_25945[(10)] = inst_25894);

(statearr_25945[(11)] = inst_25893);

(statearr_25945[(12)] = inst_25895);

return statearr_25945;
})();
var statearr_25946_25971 = state_25942__$1;
(statearr_25946_25971[(2)] = null);

(statearr_25946_25971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (13))){
var inst_25912 = (state_25942[(7)]);
var inst_25921 = cljs.core.first.call(null,inst_25912);
var inst_25922 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_25923 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_25924 = [inst_25923,klipse_clj.repl.current_ns_eval];
var inst_25925 = cljs.core.PersistentHashMap.fromArrays(inst_25922,inst_25924);
var inst_25926 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_25921,inst_25925);
var inst_25927 = cljs.core.first.call(null,inst_25926);
var state_25942__$1 = state_25942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25942__$1,(15),inst_25927);
} else {
if((state_val_25943 === (6))){
var inst_25912 = (state_25942[(7)]);
var inst_25892 = (state_25942[(9)]);
var inst_25912__$1 = cljs.core.seq.call(null,inst_25892);
var state_25942__$1 = (function (){var statearr_25947 = state_25942;
(statearr_25947[(7)] = inst_25912__$1);

return statearr_25947;
})();
if(inst_25912__$1){
var statearr_25948_25972 = state_25942__$1;
(statearr_25948_25972[(1)] = (9));

} else {
var statearr_25949_25973 = state_25942__$1;
(statearr_25949_25973[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (3))){
var inst_25894 = (state_25942[(10)]);
var inst_25895 = (state_25942[(12)]);
var inst_25897 = (inst_25895 < inst_25894);
var inst_25898 = inst_25897;
var state_25942__$1 = state_25942;
if(cljs.core.truth_(inst_25898)){
var statearr_25950_25974 = state_25942__$1;
(statearr_25950_25974[(1)] = (5));

} else {
var statearr_25951_25975 = state_25942__$1;
(statearr_25951_25975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (12))){
var inst_25912 = (state_25942[(7)]);
var inst_25916 = cljs.core.chunk_first.call(null,inst_25912);
var inst_25917 = cljs.core.chunk_rest.call(null,inst_25912);
var inst_25918 = cljs.core.count.call(null,inst_25916);
var inst_25892 = inst_25917;
var inst_25893 = inst_25916;
var inst_25894 = inst_25918;
var inst_25895 = (0);
var state_25942__$1 = (function (){var statearr_25952 = state_25942;
(statearr_25952[(9)] = inst_25892);

(statearr_25952[(10)] = inst_25894);

(statearr_25952[(11)] = inst_25893);

(statearr_25952[(12)] = inst_25895);

return statearr_25952;
})();
var statearr_25953_25976 = state_25942__$1;
(statearr_25953_25976[(2)] = null);

(statearr_25953_25976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (2))){
var inst_25883 = (state_25942[(2)]);
var inst_25888 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25889 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg inferred-type]])"];
var inst_25890 = (new cljs.core.PersistentVector(null,2,(5),inst_25888,inst_25889,null));
var inst_25891 = cljs.core.seq.call(null,inst_25890);
var inst_25892 = inst_25891;
var inst_25893 = null;
var inst_25894 = (0);
var inst_25895 = (0);
var state_25942__$1 = (function (){var statearr_25954 = state_25942;
(statearr_25954[(9)] = inst_25892);

(statearr_25954[(10)] = inst_25894);

(statearr_25954[(13)] = inst_25883);

(statearr_25954[(11)] = inst_25893);

(statearr_25954[(12)] = inst_25895);

return statearr_25954;
})();
var statearr_25955_25977 = state_25942__$1;
(statearr_25955_25977[(2)] = null);

(statearr_25955_25977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (11))){
var inst_25936 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
var statearr_25956_25978 = state_25942__$1;
(statearr_25956_25978[(2)] = inst_25936);

(statearr_25956_25978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (9))){
var inst_25912 = (state_25942[(7)]);
var inst_25914 = cljs.core.chunked_seq_QMARK_.call(null,inst_25912);
var state_25942__$1 = state_25942;
if(inst_25914){
var statearr_25957_25979 = state_25942__$1;
(statearr_25957_25979[(1)] = (12));

} else {
var statearr_25958_25980 = state_25942__$1;
(statearr_25958_25980[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (5))){
var inst_25893 = (state_25942[(11)]);
var inst_25895 = (state_25942[(12)]);
var inst_25900 = cljs.core._nth.call(null,inst_25893,inst_25895);
var inst_25901 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_25902 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_25903 = [inst_25902,klipse_clj.repl.current_ns_eval];
var inst_25904 = cljs.core.PersistentHashMap.fromArrays(inst_25901,inst_25903);
var inst_25905 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_25900,inst_25904);
var inst_25906 = cljs.core.first.call(null,inst_25905);
var state_25942__$1 = state_25942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25942__$1,(8),inst_25906);
} else {
if((state_val_25943 === (14))){
var inst_25933 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
var statearr_25962_25981 = state_25942__$1;
(statearr_25962_25981[(2)] = inst_25933);

(statearr_25962_25981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (10))){
var state_25942__$1 = state_25942;
var statearr_25963_25982 = state_25942__$1;
(statearr_25963_25982[(2)] = null);

(statearr_25963_25982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (8))){
var inst_25892 = (state_25942[(9)]);
var inst_25894 = (state_25942[(10)]);
var inst_25893 = (state_25942[(11)]);
var inst_25895 = (state_25942[(12)]);
var inst_25908 = (state_25942[(2)]);
var inst_25909 = (inst_25895 + (1));
var tmp25959 = inst_25892;
var tmp25960 = inst_25894;
var tmp25961 = inst_25893;
var inst_25892__$1 = tmp25959;
var inst_25893__$1 = tmp25961;
var inst_25894__$1 = tmp25960;
var inst_25895__$1 = inst_25909;
var state_25942__$1 = (function (){var statearr_25964 = state_25942;
(statearr_25964[(14)] = inst_25908);

(statearr_25964[(9)] = inst_25892__$1);

(statearr_25964[(10)] = inst_25894__$1);

(statearr_25964[(11)] = inst_25893__$1);

(statearr_25964[(12)] = inst_25895__$1);

return statearr_25964;
})();
var statearr_25965_25983 = state_25942__$1;
(statearr_25965_25983[(2)] = null);

(statearr_25965_25983[(1)] = (3));


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
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15944__auto____0 = (function (){
var statearr_25966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25966[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15944__auto__);

(statearr_25966[(1)] = (1));

return statearr_25966;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15944__auto____1 = (function (state_25942){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_25942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e25967){if((e25967 instanceof Object)){
var ex__15947__auto__ = e25967;
var statearr_25968_25984 = state_25942;
(statearr_25968_25984[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25985 = state_25942;
state_25942 = G__25985;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15944__auto__ = function(state_25942){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15944__auto____1.call(this,state_25942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_25969 = f__16039__auto__.call(null);
(statearr_25969[(6)] = c__16038__auto__);

return statearr_25969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_25988){
var state_val_25989 = (state_25988[(1)]);
if((state_val_25989 === (1))){
var inst_25986 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_25988__$1 = state_25988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25988__$1,inst_25986);
} else {
return null;
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15944__auto____0 = (function (){
var statearr_25990 = [null,null,null,null,null,null,null];
(statearr_25990[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15944__auto__);

(statearr_25990[(1)] = (1));

return statearr_25990;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15944__auto____1 = (function (state_25988){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_25988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e25991){if((e25991 instanceof Object)){
var ex__15947__auto__ = e25991;
var statearr_25992_25994 = state_25988;
(statearr_25992_25994[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25995 = state_25988;
state_25988 = G__25995;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15944__auto__ = function(state_25988){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15944__auto____1.call(this,state_25988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_25993 = f__16039__auto__.call(null);
(statearr_25993[(6)] = c__16038__auto__);

return statearr_25993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
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
}catch (e25996){if((e25996 instanceof Object)){
var e = e25996;

return e;
} else {
throw e25996;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__25997){
var map__25998 = p__25997;
var map__25998__$1 = (((((!((map__25998 == null))))?(((((map__25998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25998):map__25998);
var print_length = cljs.core.get.call(null,map__25998__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__25998__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__26001 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__26002 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__26002;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26003_26007 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26004_26008 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26005_26009 = true;
var _STAR_print_fn_STAR__temp_val__26006_26010 = ((function (_STAR_print_newline_STAR__orig_val__26003_26007,_STAR_print_fn_STAR__orig_val__26004_26008,_STAR_print_newline_STAR__temp_val__26005_26009,sb__4661__auto__,_STAR_print_length_STAR__orig_val__26001,_STAR_print_length_STAR__temp_val__26002,map__25998,map__25998__$1,print_length,beautify_strings){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26003_26007,_STAR_print_fn_STAR__orig_val__26004_26008,_STAR_print_newline_STAR__temp_val__26005_26009,sb__4661__auto__,_STAR_print_length_STAR__orig_val__26001,_STAR_print_length_STAR__temp_val__26002,map__25998,map__25998__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26005_26009;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26006_26010;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = typeof value === 'string';
if(and__4120__auto__){
return beautify_strings;
} else {
return and__4120__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26004_26008;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26003_26007;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__26001;
}}catch (e26000){if((e26000 instanceof Object)){
var e = e26000;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e26000;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__26011,verbose_QMARK_,current_ns){
var map__26012 = p__26011;
var map__26012__$1 = (((((!((map__26012 == null))))?(((((map__26012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26012):map__26012);
var ns = cljs.core.get.call(null,map__26012__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__26012__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__26012__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__26012__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__26012__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__26012__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__26014,opts){
var map__26015 = p__26014;
var map__26015__$1 = (((((!((map__26015 == null))))?(((((map__26015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26015):map__26015);
var args = map__26015__$1;
var ns = cljs.core.get.call(null,map__26015__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__26015__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__26015__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__26015__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__26015__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__26015__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__26017,opts){
var map__26018 = p__26017;
var map__26018__$1 = (((((!((map__26018 == null))))?(((((map__26018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26018):map__26018);
var args = map__26018__$1;
var ns = cljs.core.get.call(null,map__26018__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__26018__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__26018__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__26018__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__26018__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__26018__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var vec__26020 = klipse_clj.lang.clojure.result_as_str.call(null,args,opts);
var status = cljs.core.nth.call(null,vec__26020,(0),null);
var val = cljs.core.nth.call(null,vec__26020,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status))?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"form","form",-1624062471),form_str], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__26023){
var map__26024 = p__26023;
var map__26024__$1 = (((((!((map__26024 == null))))?(((((map__26024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26024):map__26024);
var form = cljs.core.get.call(null,map__26024__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__26024__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__26024__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__26024__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__26024__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__26026){
var map__26027 = p__26026;
var map__26027__$1 = (((((!((map__26027 == null))))?(((((map__26027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26027):map__26027);
var foo = map__26027__$1;
var value = cljs.core.get.call(null,map__26027__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__26027__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__26029){
var map__26030 = p__26029;
var map__26030__$1 = (((((!((map__26030 == null))))?(((((map__26030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26030):map__26030);
var args = map__26030__$1;
var file = cljs.core.get.call(null,map__26030__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__26030__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__26030__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__26030__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__26030__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__26030__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__26032){
var map__26033 = p__26032;
var map__26033__$1 = (((((!((map__26033 == null))))?(((((map__26033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26033):map__26033);
var source = cljs.core.get.call(null,map__26033__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__26035){
var map__26036 = p__26035;
var map__26036__$1 = (((((!((map__26036 == null))))?(((((map__26036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26036):map__26036);
var static_fns = cljs.core.get.call(null,map__26036__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__26036__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__26036__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__26036__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__26036__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__26036__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__26036__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4219__auto__ = max_eval_duration;
var y__4220__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,the_emits,map__26036,map__26036__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,the_emits,map__26036,map__26036__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
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
var c__16038__auto___26069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___26069,d){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___26069,d){
return (function (state_26054){
var state_val_26055 = (state_26054[(1)]);
if((state_val_26055 === (1))){
var inst_26038 = cljs.core.PersistentVector.EMPTY;
var inst_26039 = inst_26038;
var state_26054__$1 = (function (){var statearr_26056 = state_26054;
(statearr_26056[(7)] = inst_26039);

return statearr_26056;
})();
var statearr_26057_26070 = state_26054__$1;
(statearr_26057_26070[(2)] = null);

(statearr_26057_26070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (2))){
var state_26054__$1 = state_26054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26054__$1,(4),c);
} else {
if((state_val_26055 === (3))){
var inst_26052 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26054__$1,inst_26052);
} else {
if((state_val_26055 === (4))){
var inst_26042 = (state_26054[(8)]);
var inst_26042__$1 = (state_26054[(2)]);
var inst_26043 = (inst_26042__$1 == null);
var state_26054__$1 = (function (){var statearr_26058 = state_26054;
(statearr_26058[(8)] = inst_26042__$1);

return statearr_26058;
})();
if(cljs.core.truth_(inst_26043)){
var statearr_26059_26071 = state_26054__$1;
(statearr_26059_26071[(1)] = (5));

} else {
var statearr_26060_26072 = state_26054__$1;
(statearr_26060_26072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (5))){
var inst_26039 = (state_26054[(7)]);
var inst_26045 = cljs.core.async.put_BANG_.call(null,d,inst_26039);
var state_26054__$1 = state_26054;
var statearr_26061_26073 = state_26054__$1;
(statearr_26061_26073[(2)] = inst_26045);

(statearr_26061_26073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (6))){
var inst_26039 = (state_26054[(7)]);
var inst_26042 = (state_26054[(8)]);
var inst_26047 = cljs.core.conj.call(null,inst_26039,inst_26042);
var inst_26039__$1 = inst_26047;
var state_26054__$1 = (function (){var statearr_26062 = state_26054;
(statearr_26062[(7)] = inst_26039__$1);

return statearr_26062;
})();
var statearr_26063_26074 = state_26054__$1;
(statearr_26063_26074[(2)] = null);

(statearr_26063_26074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (7))){
var inst_26050 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
var statearr_26064_26075 = state_26054__$1;
(statearr_26064_26075[(2)] = inst_26050);

(statearr_26064_26075[(1)] = (3));


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
});})(c__16038__auto___26069,d))
;
return ((function (switch__15943__auto__,c__16038__auto___26069,d){
return (function() {
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15944__auto____0 = (function (){
var statearr_26065 = [null,null,null,null,null,null,null,null,null];
(statearr_26065[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15944__auto__);

(statearr_26065[(1)] = (1));

return statearr_26065;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15944__auto____1 = (function (state_26054){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26066){if((e26066 instanceof Object)){
var ex__15947__auto__ = e26066;
var statearr_26067_26076 = state_26054;
(statearr_26067_26076[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26077 = state_26054;
state_26054 = G__26077;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15944__auto__ = function(state_26054){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15944__auto____1.call(this,state_26054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___26069,d))
})();
var state__16040__auto__ = (function (){var statearr_26068 = f__16039__auto__.call(null);
(statearr_26068[(6)] = c__16038__auto___26069);

return statearr_26068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___26069,d))
);


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__26078){
var map__26079 = p__26078;
var map__26079__$1 = (((((!((map__26079 == null))))?(((((map__26079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26079):map__26079);
var static_fns = cljs.core.get.call(null,map__26079__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__26079__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__26079__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__26079__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__26079__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__26079__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4219__auto__ = max_eval_duration;
var y__4220__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var _STAR_cljs_warning_handlers_STAR__orig_val__26081 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__26082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__26082;

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (_STAR_cljs_warning_handlers_STAR__orig_val__26081,_STAR_cljs_warning_handlers_STAR__temp_val__26082,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26079,map__26079__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__26081,_STAR_cljs_warning_handlers_STAR__temp_val__26082,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26079,map__26079__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__26081,_STAR_cljs_warning_handlers_STAR__temp_val__26082,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26079,map__26079__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (state_26091){
var state_val_26092 = (state_26091[(1)]);
if((state_val_26092 === (1))){
var inst_26083 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_26091__$1 = state_26091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26091__$1,(2),inst_26083);
} else {
if((state_val_26092 === (2))){
var inst_26085 = (state_26091[(2)]);
var inst_26086 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_26087 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_26088 = clojure.string.join.call(null,"",inst_26085);
var inst_26089 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_26088);
var state_26091__$1 = (function (){var statearr_26093 = state_26091;
(statearr_26093[(7)] = inst_26086);

(statearr_26093[(8)] = inst_26087);

return statearr_26093;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26091__$1,inst_26089);
} else {
return null;
}
}
});})(c__16038__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__26081,_STAR_cljs_warning_handlers_STAR__temp_val__26082,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26079,map__26079__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
;
return ((function (switch__15943__auto__,c__16038__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__26081,_STAR_cljs_warning_handlers_STAR__temp_val__26082,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26079,map__26079__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15944__auto____0 = (function (){
var statearr_26094 = [null,null,null,null,null,null,null,null,null];
(statearr_26094[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15944__auto__);

(statearr_26094[(1)] = (1));

return statearr_26094;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15944__auto____1 = (function (state_26091){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26095){if((e26095 instanceof Object)){
var ex__15947__auto__ = e26095;
var statearr_26096_26098 = state_26091;
(statearr_26096_26098[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26099 = state_26091;
state_26091 = G__26099;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15944__auto__ = function(state_26091){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15944__auto____1.call(this,state_26091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__26081,_STAR_cljs_warning_handlers_STAR__temp_val__26082,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26079,map__26079__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
})();
var state__16040__auto__ = (function (){var statearr_26097 = f__16039__auto__.call(null);
(statearr_26097[(6)] = c__16038__auto__);

return statearr_26097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__26081,_STAR_cljs_warning_handlers_STAR__temp_val__26082,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26079,map__26079__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);

return c__16038__auto__;
});})(_STAR_cljs_warning_handlers_STAR__orig_val__26081,_STAR_cljs_warning_handlers_STAR__temp_val__26082,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26079,map__26079__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__26081;
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var ch = temp__5718__auto__;
var G__26100 = cljs.core.conj.call(null,res,ch);
res = G__26100;
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
var _STAR_alias_map_STAR__orig_val__26101 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__26102 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__26103 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__26104 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__26105 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__26106 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__26107 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__26108 = ns;
var _STAR_cljs_ns_STAR__temp_val__26109 = ns;
var _STAR_compiler_STAR__temp_val__26110 = st;
var resolve_symbol_temp_val__26111 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__26112 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__26107;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__26108;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__26109;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__26110;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__26111;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__26112;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__26106;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__26105;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__26104;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__26103;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__26102;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__26101;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__26116 = arguments.length;
switch (G__26116) {
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
var _STAR_alias_map_STAR__orig_val__26117 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__26118 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__26119 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__26120 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__26121 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__26122 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__26123 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__26124 = ns;
var _STAR_cljs_ns_STAR__temp_val__26125 = ns;
var _STAR_compiler_STAR__temp_val__26126 = st;
var resolve_symbol_temp_val__26127 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__26128 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__26123;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__26124;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__26125;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__26126;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__26127;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__26128;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__26122;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__26121;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__26120;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__26119;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__26118;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__26117;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__26133 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__26133,(0),null);
var rest_s = cljs.core.nth.call(null,vec__26133,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__26136 = rest_s;
var G__26137 = res;
s__$1 = G__26136;
res = G__26137;
continue;
} else {
var G__26138 = rest_s;
var G__26139 = cljs.core.conj.call(null,res,exp);
s__$1 = G__26138;
res = G__26139;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__26140){
var map__26141 = p__26140;
var map__26141__$1 = (((((!((map__26141 == null))))?(((((map__26141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26141):map__26141);
var result_element = cljs.core.get.call(null,map__26141__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__26141__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__16038__auto___26246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___26246,res_chan,warnings_chan){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___26246,res_chan,warnings_chan){
return (function (state_26218){
var state_val_26219 = (state_26218[(1)]);
if((state_val_26219 === (7))){
var inst_26214 = (state_26218[(2)]);
var state_26218__$1 = state_26218;
var statearr_26220_26247 = state_26218__$1;
(statearr_26220_26247[(2)] = inst_26214);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26218__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26219 === (1))){
var state_26218__$1 = state_26218;
var statearr_26221_26248 = state_26218__$1;
(statearr_26221_26248[(2)] = null);

(statearr_26221_26248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26219 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26218,(3),Object,null,(2));
var inst_26156 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_26218__$1 = state_26218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26218__$1,(5),inst_26156);
} else {
if((state_val_26219 === (15))){
var inst_26173 = (state_26218[(7)]);
var inst_26192 = (state_26218[(8)]);
var inst_26201 = (state_26218[(9)]);
var inst_26203 = (state_26218[(2)]);
var inst_26204 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26173),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26203)].join('');
var inst_26171 = inst_26201;
var inst_26172 = inst_26192;
var inst_26173__$1 = inst_26204;
var state_26218__$1 = (function (){var statearr_26222 = state_26218;
(statearr_26222[(10)] = inst_26172);

(statearr_26222[(7)] = inst_26173__$1);

(statearr_26222[(11)] = inst_26171);

return statearr_26222;
})();
var statearr_26223_26249 = state_26218__$1;
(statearr_26223_26249[(2)] = null);

(statearr_26223_26249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26219 === (13))){
var inst_26190 = (state_26218[(12)]);
var inst_26179 = (state_26218[(13)]);
var inst_26199 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_26200 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_26201 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_26179,inst_26199,inst_26200);
var state_26218__$1 = (function (){var statearr_26224 = state_26218;
(statearr_26224[(9)] = inst_26201);

return statearr_26224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26218__$1,(15),inst_26190);
} else {
if((state_val_26219 === (6))){
var inst_26178 = (state_26218[(14)]);
var inst_26171 = (state_26218[(11)]);
var inst_26178__$1 = cljs.core.nth.call(null,inst_26171,(0),null);
var inst_26179 = cljs.core.nth.call(null,inst_26171,(1),null);
var inst_26180 = cljs.core.empty_QMARK_.call(null,inst_26178__$1);
var inst_26181 = (!(inst_26180));
var state_26218__$1 = (function (){var statearr_26225 = state_26218;
(statearr_26225[(13)] = inst_26179);

(statearr_26225[(14)] = inst_26178__$1);

return statearr_26225;
})();
if(inst_26181){
var statearr_26226_26250 = state_26218__$1;
(statearr_26226_26250[(1)] = (8));

} else {
var statearr_26227_26251 = state_26218__$1;
(statearr_26227_26251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26219 === (3))){
var inst_26143 = (state_26218[(2)]);
var inst_26144 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_26145 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_26146 = [inst_26143];
var inst_26147 = cljs.core.PersistentHashMap.fromArrays(inst_26145,inst_26146);
var inst_26148 = cljs.core.async.put_BANG_.call(null,res_chan,inst_26147);
var inst_26149 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_26150 = [inst_26143];
var inst_26151 = cljs.core.PersistentHashMap.fromArrays(inst_26149,inst_26150);
var inst_26152 = klipse_clj.lang.clojure.populate_err.call(null,inst_26151,opts);
var state_26218__$1 = (function (){var statearr_26228 = state_26218;
(statearr_26228[(15)] = inst_26148);

(statearr_26228[(16)] = inst_26144);

return statearr_26228;
})();
var statearr_26229_26252 = state_26218__$1;
(statearr_26229_26252[(2)] = inst_26152);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26218__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26219 === (12))){
var inst_26192 = (state_26218[(8)]);
var inst_26195 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_26196 = cljs.core.async.put_BANG_.call(null,res_chan,inst_26192);
var inst_26197 = klipse_clj.lang.clojure.populate_err.call(null,inst_26192,opts);
var state_26218__$1 = (function (){var statearr_26230 = state_26218;
(statearr_26230[(17)] = inst_26195);

(statearr_26230[(18)] = inst_26196);

return statearr_26230;
})();
var statearr_26231_26253 = state_26218__$1;
(statearr_26231_26253[(2)] = inst_26197);

(statearr_26231_26253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26219 === (2))){
var inst_26216 = (state_26218[(2)]);
var state_26218__$1 = state_26218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26218__$1,inst_26216);
} else {
if((state_val_26219 === (11))){
var inst_26192 = (state_26218[(8)]);
var inst_26192__$1 = (state_26218[(2)]);
var inst_26193 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_26192__$1);
var state_26218__$1 = (function (){var statearr_26232 = state_26218;
(statearr_26232[(8)] = inst_26192__$1);

return statearr_26232;
})();
if(cljs.core.truth_(inst_26193)){
var statearr_26233_26254 = state_26218__$1;
(statearr_26233_26254[(1)] = (12));

} else {
var statearr_26234_26255 = state_26218__$1;
(statearr_26234_26255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26219 === (9))){
var inst_26172 = (state_26218[(10)]);
var inst_26173 = (state_26218[(7)]);
var inst_26209 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_26173);
var inst_26210 = cljs.core.async.put_BANG_.call(null,res_chan,inst_26172);
var state_26218__$1 = (function (){var statearr_26235 = state_26218;
(statearr_26235[(19)] = inst_26209);

return statearr_26235;
})();
var statearr_26236_26256 = state_26218__$1;
(statearr_26236_26256[(2)] = inst_26210);

(statearr_26236_26256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26219 === (5))){
var inst_26158 = (state_26218[(2)]);
var inst_26166 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_26167 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_26168 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_26166,inst_26167);
var inst_26169 = cljs.core.nth.call(null,inst_26168,(0),null);
var inst_26170 = cljs.core.nth.call(null,inst_26168,(1),null);
var inst_26171 = inst_26168;
var inst_26172 = null;
var inst_26173 = "";
var state_26218__$1 = (function (){var statearr_26237 = state_26218;
(statearr_26237[(10)] = inst_26172);

(statearr_26237[(20)] = inst_26169);

(statearr_26237[(21)] = inst_26158);

(statearr_26237[(7)] = inst_26173);

(statearr_26237[(11)] = inst_26171);

(statearr_26237[(22)] = inst_26170);

return statearr_26237;
})();
var statearr_26238_26257 = state_26218__$1;
(statearr_26238_26257[(2)] = null);

(statearr_26238_26257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26219 === (14))){
var inst_26207 = (state_26218[(2)]);
var state_26218__$1 = state_26218;
var statearr_26239_26258 = state_26218__$1;
(statearr_26239_26258[(2)] = inst_26207);

(statearr_26239_26258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26219 === (10))){
var inst_26212 = (state_26218[(2)]);
var state_26218__$1 = state_26218;
var statearr_26240_26259 = state_26218__$1;
(statearr_26240_26259[(2)] = inst_26212);

(statearr_26240_26259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26219 === (8))){
var inst_26178 = (state_26218[(14)]);
var inst_26186 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_26187 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_26186,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_26188 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_26178,inst_26187);
var inst_26189 = cljs.core.nth.call(null,inst_26188,(0),null);
var inst_26190 = cljs.core.nth.call(null,inst_26188,(1),null);
var state_26218__$1 = (function (){var statearr_26241 = state_26218;
(statearr_26241[(12)] = inst_26190);

return statearr_26241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26218__$1,(11),inst_26189);
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
});})(c__16038__auto___26246,res_chan,warnings_chan))
;
return ((function (switch__15943__auto__,c__16038__auto___26246,res_chan,warnings_chan){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__15944__auto____0 = (function (){
var statearr_26242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26242[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__15944__auto__);

(statearr_26242[(1)] = (1));

return statearr_26242;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__15944__auto____1 = (function (state_26218){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26243){if((e26243 instanceof Object)){
var ex__15947__auto__ = e26243;
var statearr_26244_26260 = state_26218;
(statearr_26244_26260[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26261 = state_26218;
state_26218 = G__26261;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__15944__auto__ = function(state_26218){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15944__auto____1.call(this,state_26218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___26246,res_chan,warnings_chan))
})();
var state__16040__auto__ = (function (){var statearr_26245 = f__16039__auto__.call(null);
(statearr_26245[(6)] = c__16038__auto___26246);

return statearr_26245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___26246,res_chan,warnings_chan))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26319){
var state_val_26320 = (state_26319[(1)]);
if((state_val_26320 === (7))){
var inst_26287 = (state_26319[(7)]);
var inst_26292 = klipse_clj.repl.create_state_compile.call(null);
var inst_26293 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_26292,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_26294 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_26287,inst_26293);
var state_26319__$1 = state_26319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26319__$1,(10),inst_26294);
} else {
if((state_val_26320 === (1))){
var state_26319__$1 = state_26319;
var statearr_26321_26342 = state_26319__$1;
(statearr_26321_26342[(2)] = null);

(statearr_26321_26342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26319,(3),Object,null,(2));
var inst_26276 = klipse_clj.repl.create_state_compile.call(null);
var inst_26277 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_26278 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_26276,inst_26277);
var inst_26279 = cljs.core.nth.call(null,inst_26278,(0),null);
var inst_26280 = cljs.core.nth.call(null,inst_26278,(1),null);
var inst_26281 = inst_26278;
var inst_26282 = "";
var state_26319__$1 = (function (){var statearr_26322 = state_26319;
(statearr_26322[(8)] = inst_26282);

(statearr_26322[(9)] = inst_26279);

(statearr_26322[(10)] = inst_26281);

(statearr_26322[(11)] = inst_26280);

return statearr_26322;
})();
var statearr_26323_26343 = state_26319__$1;
(statearr_26323_26343[(2)] = null);

(statearr_26323_26343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (13))){
var inst_26307 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
var statearr_26324_26344 = state_26319__$1;
(statearr_26324_26344[(2)] = inst_26307);

(statearr_26324_26344[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (6))){
var inst_26315 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
var statearr_26325_26345 = state_26319__$1;
(statearr_26325_26345[(2)] = inst_26315);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26319__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (3))){
var inst_26262 = (state_26319[(2)]);
var inst_26263 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_26264 = [inst_26262];
var inst_26265 = cljs.core.PersistentHashMap.fromArrays(inst_26263,inst_26264);
var state_26319__$1 = state_26319;
var statearr_26326_26346 = state_26319__$1;
(statearr_26326_26346[(2)] = inst_26265);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26319__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (12))){
var inst_26282 = (state_26319[(8)]);
var inst_26296 = (state_26319[(12)]);
var inst_26288 = (state_26319[(13)]);
var inst_26300 = klipse_clj.repl.create_state_compile.call(null);
var inst_26301 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_26302 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_26288,inst_26300,inst_26301);
var inst_26303 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_26296);
var inst_26304 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26282),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26303)].join('');
var inst_26281 = inst_26302;
var inst_26282__$1 = inst_26304;
var state_26319__$1 = (function (){var statearr_26327 = state_26319;
(statearr_26327[(8)] = inst_26282__$1);

(statearr_26327[(10)] = inst_26281);

return statearr_26327;
})();
var statearr_26328_26347 = state_26319__$1;
(statearr_26328_26347[(2)] = null);

(statearr_26328_26347[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (2))){
var inst_26317 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26319__$1,inst_26317);
} else {
if((state_val_26320 === (11))){
var inst_26296 = (state_26319[(12)]);
var state_26319__$1 = state_26319;
var statearr_26329_26348 = state_26319__$1;
(statearr_26329_26348[(2)] = inst_26296);

(statearr_26329_26348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (9))){
var inst_26313 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
var statearr_26330_26349 = state_26319__$1;
(statearr_26330_26349[(2)] = inst_26313);

(statearr_26330_26349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (5))){
var inst_26287 = (state_26319[(7)]);
var inst_26281 = (state_26319[(10)]);
var inst_26287__$1 = cljs.core.nth.call(null,inst_26281,(0),null);
var inst_26288 = cljs.core.nth.call(null,inst_26281,(1),null);
var inst_26289 = cljs.core.empty_QMARK_.call(null,inst_26287__$1);
var inst_26290 = (!(inst_26289));
var state_26319__$1 = (function (){var statearr_26331 = state_26319;
(statearr_26331[(7)] = inst_26287__$1);

(statearr_26331[(13)] = inst_26288);

return statearr_26331;
})();
if(inst_26290){
var statearr_26332_26350 = state_26319__$1;
(statearr_26332_26350[(1)] = (7));

} else {
var statearr_26333_26351 = state_26319__$1;
(statearr_26333_26351[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (10))){
var inst_26296 = (state_26319[(12)]);
var inst_26296__$1 = (state_26319[(2)]);
var inst_26297 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_26296__$1);
var state_26319__$1 = (function (){var statearr_26334 = state_26319;
(statearr_26334[(12)] = inst_26296__$1);

return statearr_26334;
})();
if(cljs.core.truth_(inst_26297)){
var statearr_26335_26352 = state_26319__$1;
(statearr_26335_26352[(1)] = (11));

} else {
var statearr_26336_26353 = state_26319__$1;
(statearr_26336_26353[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (8))){
var inst_26282 = (state_26319[(8)]);
var inst_26309 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_26310 = [inst_26282];
var inst_26311 = cljs.core.PersistentHashMap.fromArrays(inst_26309,inst_26310);
var state_26319__$1 = state_26319;
var statearr_26337_26354 = state_26319__$1;
(statearr_26337_26354[(2)] = inst_26311);

(statearr_26337_26354[(1)] = (9));


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
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__15944__auto____0 = (function (){
var statearr_26338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26338[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__15944__auto__);

(statearr_26338[(1)] = (1));

return statearr_26338;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__15944__auto____1 = (function (state_26319){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26339){if((e26339 instanceof Object)){
var ex__15947__auto__ = e26339;
var statearr_26340_26355 = state_26319;
(statearr_26340_26355[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26356 = state_26319;
state_26319 = G__26356;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__15944__auto__ = function(state_26319){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15944__auto____1.call(this,state_26319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26341 = f__16039__auto__.call(null);
(statearr_26341[(6)] = c__16038__auto__);

return statearr_26341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26372){
var state_val_26373 = (state_26372[(1)]);
if((state_val_26373 === (1))){
var inst_26360 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_26361 = cljs.core.nth.call(null,inst_26360,(0),null);
var inst_26362 = cljs.core.nth.call(null,inst_26360,(1),null);
var state_26372__$1 = (function (){var statearr_26374 = state_26372;
(statearr_26374[(7)] = inst_26362);

return statearr_26374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26372__$1,(2),inst_26361);
} else {
if((state_val_26373 === (2))){
var inst_26362 = (state_26372[(7)]);
var inst_26364 = (state_26372[(2)]);
var inst_26365 = klipse_clj.lang.clojure.result_as_str.call(null,inst_26364,opts);
var state_26372__$1 = (function (){var statearr_26375 = state_26372;
(statearr_26375[(8)] = inst_26365);

return statearr_26375;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26372__$1,(3),inst_26362);
} else {
if((state_val_26373 === (3))){
var inst_26365 = (state_26372[(8)]);
var inst_26367 = (state_26372[(2)]);
var inst_26368 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_26369 = [inst_26367,inst_26365];
var inst_26370 = cljs.core.PersistentHashMap.fromArrays(inst_26368,inst_26369);
var state_26372__$1 = state_26372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26372__$1,inst_26370);
} else {
return null;
}
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15944__auto____0 = (function (){
var statearr_26376 = [null,null,null,null,null,null,null,null,null];
(statearr_26376[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15944__auto__);

(statearr_26376[(1)] = (1));

return statearr_26376;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15944__auto____1 = (function (state_26372){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26377){if((e26377 instanceof Object)){
var ex__15947__auto__ = e26377;
var statearr_26378_26380 = state_26372;
(statearr_26378_26380[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26381 = state_26372;
state_26372 = G__26381;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15944__auto__ = function(state_26372){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15944__auto____1.call(this,state_26372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26379 = f__16039__auto__.call(null);
(statearr_26379[(6)] = c__16038__auto__);

return statearr_26379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26394){
var state_val_26395 = (state_26394[(1)]);
if((state_val_26395 === (1))){
var inst_26385 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_26386 = cljs.core.nth.call(null,inst_26385,(0),null);
var inst_26387 = cljs.core.nth.call(null,inst_26385,(1),null);
var state_26394__$1 = (function (){var statearr_26396 = state_26394;
(statearr_26396[(7)] = inst_26387);

return statearr_26396;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26394__$1,(2),inst_26386);
} else {
if((state_val_26395 === (2))){
var inst_26387 = (state_26394[(7)]);
var inst_26389 = (state_26394[(2)]);
var inst_26390 = klipse_clj.lang.clojure.result_as_str.call(null,inst_26389,opts);
var state_26394__$1 = (function (){var statearr_26397 = state_26394;
(statearr_26397[(8)] = inst_26390);

return statearr_26397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26394__$1,(3),inst_26387);
} else {
if((state_val_26395 === (3))){
var inst_26390 = (state_26394[(8)]);
var inst_26392 = (state_26394[(2)]);
var state_26394__$1 = (function (){var statearr_26398 = state_26394;
(statearr_26398[(9)] = inst_26392);

return statearr_26398;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26394__$1,inst_26390);
} else {
return null;
}
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__15944__auto____0 = (function (){
var statearr_26399 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26399[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__15944__auto__);

(statearr_26399[(1)] = (1));

return statearr_26399;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__15944__auto____1 = (function (state_26394){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26400){if((e26400 instanceof Object)){
var ex__15947__auto__ = e26400;
var statearr_26401_26403 = state_26394;
(statearr_26401_26403[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26404 = state_26394;
state_26394 = G__26404;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__15944__auto__ = function(state_26394){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15944__auto____1.call(this,state_26394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26402 = f__16039__auto__.call(null);
(statearr_26402[(6)] = c__16038__auto__);

return statearr_26402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__26406 = arguments.length;
switch (G__26406) {
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
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26413){
var state_val_26414 = (state_26413[(1)]);
if((state_val_26414 === (1))){
var inst_26407 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_26408 = cljs.core.first.call(null,inst_26407);
var state_26413__$1 = state_26413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26413__$1,(2),inst_26408);
} else {
if((state_val_26414 === (2))){
var inst_26410 = (state_26413[(2)]);
var inst_26411 = klipse_clj.lang.clojure.read_result.call(null,inst_26410);
var state_26413__$1 = state_26413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26413__$1,inst_26411);
} else {
return null;
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15944__auto____0 = (function (){
var statearr_26415 = [null,null,null,null,null,null,null];
(statearr_26415[(0)] = klipse_clj$lang$clojure$state_machine__15944__auto__);

(statearr_26415[(1)] = (1));

return statearr_26415;
});
var klipse_clj$lang$clojure$state_machine__15944__auto____1 = (function (state_26413){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26416){if((e26416 instanceof Object)){
var ex__15947__auto__ = e26416;
var statearr_26417_26420 = state_26413;
(statearr_26417_26420[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26421 = state_26413;
state_26413 = G__26421;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15944__auto__ = function(state_26413){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15944__auto____1.call(this,state_26413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15944__auto____0;
klipse_clj$lang$clojure$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15944__auto____1;
return klipse_clj$lang$clojure$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26418 = f__16039__auto__.call(null);
(statearr_26418[(6)] = c__16038__auto__);

return statearr_26418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26428){
var state_val_26429 = (state_26428[(1)]);
if((state_val_26429 === (1))){
var inst_26422 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_26428__$1 = state_26428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26428__$1,(2),inst_26422);
} else {
if((state_val_26429 === (2))){
var inst_26424 = (state_26428[(2)]);
var inst_26425 = cljs.core.clj__GT_js.call(null,inst_26424);
var inst_26426 = cb.call(null,inst_26425);
var state_26428__$1 = state_26428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26428__$1,inst_26426);
} else {
return null;
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15944__auto____0 = (function (){
var statearr_26430 = [null,null,null,null,null,null,null];
(statearr_26430[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15944__auto__);

(statearr_26430[(1)] = (1));

return statearr_26430;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15944__auto____1 = (function (state_26428){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26431){if((e26431 instanceof Object)){
var ex__15947__auto__ = e26431;
var statearr_26432_26434 = state_26428;
(statearr_26432_26434[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26435 = state_26428;
state_26428 = G__26435;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15944__auto__ = function(state_26428){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15944__auto____1.call(this,state_26428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26433 = f__16039__auto__.call(null);
(statearr_26433[(6)] = c__16038__auto__);

return statearr_26433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__26437 = arguments.length;
switch (G__26437) {
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
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26443){
var state_val_26444 = (state_26443[(1)]);
if((state_val_26444 === (1))){
var inst_26438 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_26443__$1 = state_26443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26443__$1,(2),inst_26438);
} else {
if((state_val_26444 === (2))){
var inst_26440 = (state_26443[(2)]);
var inst_26441 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_26440);
var state_26443__$1 = state_26443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26443__$1,inst_26441);
} else {
return null;
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15944__auto____0 = (function (){
var statearr_26445 = [null,null,null,null,null,null,null];
(statearr_26445[(0)] = klipse_clj$lang$clojure$state_machine__15944__auto__);

(statearr_26445[(1)] = (1));

return statearr_26445;
});
var klipse_clj$lang$clojure$state_machine__15944__auto____1 = (function (state_26443){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26446){if((e26446 instanceof Object)){
var ex__15947__auto__ = e26446;
var statearr_26447_26450 = state_26443;
(statearr_26447_26450[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26451 = state_26443;
state_26443 = G__26451;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15944__auto__ = function(state_26443){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15944__auto____1.call(this,state_26443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15944__auto____0;
klipse_clj$lang$clojure$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15944__auto____1;
return klipse_clj$lang$clojure$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26448 = f__16039__auto__.call(null);
(statearr_26448[(6)] = c__16038__auto__);

return statearr_26448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26457){
var state_val_26458 = (state_26457[(1)]);
if((state_val_26458 === (1))){
var inst_26452 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26457__$1,(2),inst_26452);
} else {
if((state_val_26458 === (2))){
var inst_26454 = (state_26457[(2)]);
var inst_26455 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_26454);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26457__$1,inst_26455);
} else {
return null;
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__15944__auto____0 = (function (){
var statearr_26459 = [null,null,null,null,null,null,null];
(statearr_26459[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__15944__auto__);

(statearr_26459[(1)] = (1));

return statearr_26459;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__15944__auto____1 = (function (state_26457){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26460){if((e26460 instanceof Object)){
var ex__15947__auto__ = e26460;
var statearr_26461_26463 = state_26457;
(statearr_26461_26463[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26464 = state_26457;
state_26457 = G__26464;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__15944__auto__ = function(state_26457){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15944__auto____1.call(this,state_26457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26462 = f__16039__auto__.call(null);
(statearr_26462[(6)] = c__16038__auto__);

return statearr_26462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26471){
var state_val_26472 = (state_26471[(1)]);
if((state_val_26472 === (1))){
var inst_26465 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(2),inst_26465);
} else {
if((state_val_26472 === (2))){
var inst_26467 = (state_26471[(2)]);
var inst_26468 = cljs.core.second.call(null,inst_26467);
var inst_26469 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26468);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26471__$1,inst_26469);
} else {
return null;
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15944__auto____0 = (function (){
var statearr_26473 = [null,null,null,null,null,null,null];
(statearr_26473[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15944__auto__);

(statearr_26473[(1)] = (1));

return statearr_26473;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15944__auto____1 = (function (state_26471){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26474){if((e26474 instanceof Object)){
var ex__15947__auto__ = e26474;
var statearr_26475_26477 = state_26471;
(statearr_26475_26477[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26478 = state_26471;
state_26471 = G__26478;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15944__auto__ = function(state_26471){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15944__auto____1.call(this,state_26471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26476 = f__16039__auto__.call(null);
(statearr_26476[(6)] = c__16038__auto__);

return statearr_26476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__26480){
var map__26481 = p__26480;
var map__26481__$1 = (((((!((map__26481 == null))))?(((((map__26481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26481):map__26481);
var opts = map__26481__$1;
var container_id = cljs.core.get.call(null,map__26481__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__26481__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__26481__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__16038__auto___26571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___26571,c,map__26481,map__26481__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___26571,c,map__26481,map__26481__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_26540){
var state_val_26541 = (state_26540[(1)]);
if((state_val_26541 === (7))){
var inst_26491 = (state_26540[(2)]);
var inst_26496 = (function (){var _STAR_print_newline_STAR__orig_val__26492 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26493 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26494 = true;
return ((function (_STAR_print_newline_STAR__orig_val__26492,_STAR_print_fn_STAR__orig_val__26493,_STAR_print_newline_STAR__temp_val__26494,inst_26491,state_val_26541,c__16038__auto___26571,c,map__26481,map__26481__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__26479_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__26479_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__26492,_STAR_print_fn_STAR__orig_val__26493,_STAR_print_newline_STAR__temp_val__26494,inst_26491,state_val_26541,c__16038__auto___26571,c,map__26481,map__26481__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_26497 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_26498 = cljs.core._STAR_print_fn_STAR_ = inst_26496;
var state_26540__$1 = (function (){var statearr_26542 = state_26540;
(statearr_26542[(7)] = inst_26497);

(statearr_26542[(8)] = inst_26491);

(statearr_26542[(9)] = inst_26498);

return statearr_26542;
})();
var statearr_26543_26572 = state_26540__$1;
(statearr_26543_26572[(2)] = null);

(statearr_26543_26572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (20))){
var inst_26529 = (state_26540[(2)]);
var inst_26530 = cljs.core.get.call(null,inst_26529,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_26531 = cljs.core.get.call(null,inst_26529,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_26532 = cljs.core.second.call(null,inst_26531);
var inst_26533 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26530),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26532)].join('');
var inst_26534 = cljs.core.async.put_BANG_.call(null,c,inst_26533);
var state_26540__$1 = state_26540;
var statearr_26544_26573 = state_26540__$1;
(statearr_26544_26573[(2)] = inst_26534);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26540__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (1))){
var inst_26483 = clojure.string.blank_QMARK_.call(null,exp);
var state_26540__$1 = state_26540;
if(inst_26483){
var statearr_26545_26574 = state_26540__$1;
(statearr_26545_26574[(1)] = (2));

} else {
var statearr_26546_26575 = state_26540__$1;
(statearr_26546_26575[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (4))){
var inst_26538 = (state_26540[(2)]);
var state_26540__$1 = state_26540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26540__$1,inst_26538);
} else {
if((state_val_26541 === (15))){
var state_26540__$1 = state_26540;
var statearr_26547_26576 = state_26540__$1;
(statearr_26547_26576[(2)] = true);

(statearr_26547_26576[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (13))){
var state_26540__$1 = state_26540;
var statearr_26548_26577 = state_26540__$1;
(statearr_26548_26577[(2)] = false);

(statearr_26548_26577[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (6))){
var state_26540__$1 = state_26540;
var statearr_26549_26578 = state_26540__$1;
(statearr_26549_26578[(2)] = null);

(statearr_26549_26578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (17))){
var inst_26521 = (state_26540[(2)]);
var state_26540__$1 = state_26540;
var statearr_26550_26579 = state_26540__$1;
(statearr_26550_26579[(2)] = inst_26521);

(statearr_26550_26579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (3))){
var state_26540__$1 = state_26540;
if(cljs.core.truth_(setup_container_fn)){
var statearr_26551_26580 = state_26540__$1;
(statearr_26551_26580[(1)] = (5));

} else {
var statearr_26552_26581 = state_26540__$1;
(statearr_26552_26581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (12))){
var inst_26508 = (state_26540[(10)]);
var inst_26513 = inst_26508.cljs$lang$protocol_mask$partition0$;
var inst_26514 = (inst_26513 & (64));
var inst_26515 = inst_26508.cljs$core$ISeq$;
var inst_26516 = (cljs.core.PROTOCOL_SENTINEL === inst_26515);
var inst_26517 = ((inst_26514) || (inst_26516));
var state_26540__$1 = state_26540;
if(cljs.core.truth_(inst_26517)){
var statearr_26553_26582 = state_26540__$1;
(statearr_26553_26582[(1)] = (15));

} else {
var statearr_26554_26583 = state_26540__$1;
(statearr_26554_26583[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (2))){
var inst_26485 = cljs.core.async.put_BANG_.call(null,c,"");
var state_26540__$1 = state_26540;
var statearr_26555_26584 = state_26540__$1;
(statearr_26555_26584[(2)] = inst_26485);

(statearr_26555_26584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (19))){
var inst_26508 = (state_26540[(10)]);
var state_26540__$1 = state_26540;
var statearr_26556_26585 = state_26540__$1;
(statearr_26556_26585[(2)] = inst_26508);

(statearr_26556_26585[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (11))){
var inst_26508 = (state_26540[(10)]);
var inst_26508__$1 = (state_26540[(2)]);
var inst_26510 = (inst_26508__$1 == null);
var inst_26511 = cljs.core.not.call(null,inst_26510);
var state_26540__$1 = (function (){var statearr_26557 = state_26540;
(statearr_26557[(10)] = inst_26508__$1);

return statearr_26557;
})();
if(inst_26511){
var statearr_26558_26586 = state_26540__$1;
(statearr_26558_26586[(1)] = (12));

} else {
var statearr_26559_26587 = state_26540__$1;
(statearr_26559_26587[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (9))){
var inst_26499 = (state_26540[(2)]);
var inst_26500 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_26501 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_26540__$1 = (function (){var statearr_26560 = state_26540;
(statearr_26560[(11)] = inst_26499);

(statearr_26560[(12)] = inst_26501);

(statearr_26560[(13)] = inst_26500);

return statearr_26560;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26540__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (5))){
var inst_26488 = setup_container_fn.call(null,container_id);
var state_26540__$1 = state_26540;
var statearr_26561_26588 = state_26540__$1;
(statearr_26561_26588[(2)] = inst_26488);

(statearr_26561_26588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (14))){
var inst_26524 = (state_26540[(2)]);
var state_26540__$1 = state_26540;
if(cljs.core.truth_(inst_26524)){
var statearr_26562_26589 = state_26540__$1;
(statearr_26562_26589[(1)] = (18));

} else {
var statearr_26563_26590 = state_26540__$1;
(statearr_26563_26590[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (16))){
var state_26540__$1 = state_26540;
var statearr_26564_26591 = state_26540__$1;
(statearr_26564_26591[(2)] = false);

(statearr_26564_26591[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26540,null,null,(9),(8));
var inst_26506 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_26540__$1 = state_26540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26540__$1,(11),inst_26506);
} else {
if((state_val_26541 === (18))){
var inst_26508 = (state_26540[(10)]);
var inst_26526 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26508);
var state_26540__$1 = state_26540;
var statearr_26565_26592 = state_26540__$1;
(statearr_26565_26592[(2)] = inst_26526);

(statearr_26565_26592[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26541 === (8))){
var inst_26536 = (state_26540[(2)]);
var state_26540__$1 = state_26540;
var statearr_26566_26593 = state_26540__$1;
(statearr_26566_26593[(2)] = inst_26536);

(statearr_26566_26593[(1)] = (4));


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
});})(c__16038__auto___26571,c,map__26481,map__26481__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__15943__auto__,c__16038__auto___26571,c,map__26481,map__26481__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15944__auto____0 = (function (){
var statearr_26567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26567[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15944__auto__);

(statearr_26567[(1)] = (1));

return statearr_26567;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15944__auto____1 = (function (state_26540){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26568){if((e26568 instanceof Object)){
var ex__15947__auto__ = e26568;
var statearr_26569_26594 = state_26540;
(statearr_26569_26594[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26595 = state_26540;
state_26540 = G__26595;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15944__auto__ = function(state_26540){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15944__auto____1.call(this,state_26540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___26571,c,map__26481,map__26481__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__16040__auto__ = (function (){var statearr_26570 = f__16039__auto__.call(null);
(statearr_26570[(6)] = c__16038__auto___26571);

return statearr_26570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___26571,c,map__26481,map__26481__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(var_args){
var G__26597 = arguments.length;
switch (G__26597) {
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
var c__16038__auto___26627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto___26627,c){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto___26627,c){
return (function (state_26616){
var state_val_26617 = (state_26616[(1)]);
if((state_val_26617 === (1))){
var inst_26600 = (function (){var _STAR_print_fn_STAR__orig_val__26598 = cljs.core._STAR_print_fn_STAR_;
return ((function (_STAR_print_fn_STAR__orig_val__26598,state_val_26617,c__16038__auto___26627,c){
return (function (s__$1){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),s__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
});
;})(_STAR_print_fn_STAR__orig_val__26598,state_val_26617,c__16038__auto___26627,c))
})();
var inst_26601 = cljs.core._STAR_print_fn_STAR_ = inst_26600;
var state_26616__$1 = (function (){var statearr_26618 = state_26616;
(statearr_26618[(7)] = inst_26601);

return statearr_26618;
})();
var statearr_26619_26628 = state_26616__$1;
(statearr_26619_26628[(2)] = null);

(statearr_26619_26628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (2))){
var inst_26614 = (state_26616[(2)]);
var state_26616__$1 = state_26616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26616__$1,inst_26614);
} else {
if((state_val_26617 === (3))){
var inst_26602 = (state_26616[(2)]);
var inst_26603 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var state_26616__$1 = (function (){var statearr_26620 = state_26616;
(statearr_26620[(8)] = inst_26603);

(statearr_26620[(9)] = inst_26602);

return statearr_26620;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26616__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26616,null,null,(3),(2));
var inst_26607 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_26608 = cljs.core.first.call(null,inst_26607);
var state_26616__$1 = state_26616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26616__$1,(5),inst_26608);
} else {
if((state_val_26617 === (5))){
var inst_26610 = (state_26616[(2)]);
var inst_26611 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_26610,opts);
var inst_26612 = cljs.core.async.put_BANG_.call(null,c,inst_26611);
var state_26616__$1 = state_26616;
var statearr_26621_26629 = state_26616__$1;
(statearr_26621_26629[(2)] = inst_26612);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26616__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__16038__auto___26627,c))
;
return ((function (switch__15943__auto__,c__16038__auto___26627,c){
return (function() {
var klipse_clj$lang$clojure$state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15944__auto____0 = (function (){
var statearr_26622 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26622[(0)] = klipse_clj$lang$clojure$state_machine__15944__auto__);

(statearr_26622[(1)] = (1));

return statearr_26622;
});
var klipse_clj$lang$clojure$state_machine__15944__auto____1 = (function (state_26616){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26623){if((e26623 instanceof Object)){
var ex__15947__auto__ = e26623;
var statearr_26624_26630 = state_26616;
(statearr_26624_26630[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26631 = state_26616;
state_26616 = G__26631;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15944__auto__ = function(state_26616){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15944__auto____1.call(this,state_26616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15944__auto____0;
klipse_clj$lang$clojure$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15944__auto____1;
return klipse_clj$lang$clojure$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto___26627,c))
})();
var state__16040__auto__ = (function (){var statearr_26625 = f__16039__auto__.call(null);
(statearr_26625[(6)] = c__16038__auto___26627);

return statearr_26625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto___26627,c))
);


return c;
});

klipse_clj.lang.clojure.eval_async_prepl.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
