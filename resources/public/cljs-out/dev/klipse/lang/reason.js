// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.reason');
goog.require('cljs.core');
goog.require('klipse.lang.ocaml');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.reason.eval_in_global_scope = eval;
klipse.lang.reason.ocaml__GT_js = (function klipse$lang$reason$ocaml__GT_js(src){
var map__22704 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__22704__$1 = (((((!((map__22704 == null))))?(((((map__22704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22704):map__22704);
var js_error_msg = cljs.core.get.call(null,map__22704__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__22704__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.reason.reason__GT_ocaml = (function klipse$lang$reason$reason__GT_ocaml(src){
var vec__22706 = refmt(src,"RE","implementation","ML");
var status = cljs.core.nth.call(null,vec__22706,(0),null);
var res = cljs.core.nth.call(null,vec__22706,(1),null);
if(cljs.core._EQ_.call(null,"REtoML",status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),res], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res], null);
}
});
klipse.lang.reason.ocaml__GT_reason = (function klipse$lang$reason$ocaml__GT_reason(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printRE(parseML(src))], null);
}catch (e22709){var e = e22709;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj22726 = (function (){var obj22724 = e;
var k22725 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22724,k22725)){
return (obj22724[k22725]);
} else {
return null;
}
})();
var k22727 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22726,k22727)){
return (obj22726[k22727]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj22730 = (function (){var obj22728 = e;
var k22729 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22728,k22729)){
return (obj22728[k22729]);
} else {
return null;
}
})();
var k22731 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22730,k22731)){
return (obj22730[k22731]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj22734 = (function (){var obj22732 = e;
var k22733 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22732,k22733)){
return (obj22732[k22733]);
} else {
return null;
}
})();
var k22735 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22734,k22735)){
return (obj22734[k22735]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj22736 = e;
var k22737 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22736,k22737)){
return (obj22736[k22737]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason_3__GT_ocaml = (function klipse$lang$reason$reason_3__GT_ocaml(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printML(parseRE(src))], null);
}catch (e22738){var e = e22738;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj22755 = (function (){var obj22753 = e;
var k22754 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22753,k22754)){
return (obj22753[k22754]);
} else {
return null;
}
})();
var k22756 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22755,k22756)){
return (obj22755[k22756]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj22759 = (function (){var obj22757 = e;
var k22758 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22757,k22758)){
return (obj22757[k22758]);
} else {
return null;
}
})();
var k22760 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22759,k22760)){
return (obj22759[k22760]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj22763 = (function (){var obj22761 = e;
var k22762 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22761,k22762)){
return (obj22761[k22762]);
} else {
return null;
}
})();
var k22764 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22763,k22764)){
return (obj22763[k22764]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj22765 = e;
var k22766 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22765,k22766)){
return (obj22765[k22766]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason__GT_js = (function klipse$lang$reason$reason__GT_js(version,src){
var vec__22767 = ((cljs.core._EQ_.call(null,version,(2)))?klipse.lang.reason.reason__GT_ocaml.call(null,src):klipse.lang.reason.reason_3__GT_ocaml.call(null,src));
var status = cljs.core.nth.call(null,vec__22767,(0),null);
var res = cljs.core.nth.call(null,vec__22767,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status)){
var vec__22770 = klipse.lang.reason.ocaml__GT_js.call(null,res);
var status__$1 = cljs.core.nth.call(null,vec__22770,(0),null);
var res__$1 = cljs.core.nth.call(null,vec__22770,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),res__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res__$1], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res], null);
}
});
klipse.lang.reason.eval_reason = (function klipse$lang$reason$eval_reason(version,exp,_){
var c = cljs.core.async.chan.call(null);
var console_log22773_22778 = console.log;
console.log = ((function (console_log22773_22778,c){
return (function() { 
var G__22779__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__22779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22780__i = 0, G__22780__a = new Array(arguments.length -  0);
while (G__22780__i < G__22780__a.length) {G__22780__a[G__22780__i] = arguments[G__22780__i + 0]; ++G__22780__i;}
  args = new cljs.core.IndexedSeq(G__22780__a,0,null);
} 
return G__22779__delegate.call(this,args);};
G__22779.cljs$lang$maxFixedArity = 0;
G__22779.cljs$lang$applyTo = (function (arglist__22781){
var args = cljs.core.seq(arglist__22781);
return G__22779__delegate(args);
});
G__22779.cljs$core$IFn$_invoke$arity$variadic = G__22779__delegate;
return G__22779;
})()
;})(console_log22773_22778,c))
;

try{try{exports = ({});

var vec__22775_22782 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var status_22783 = cljs.core.nth.call(null,vec__22775_22782,(0),null);
var res_22784 = cljs.core.nth.call(null,vec__22775_22782,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_22783)){
cljs.core.async.put_BANG_.call(null,c,res_22784);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.reason.eval_in_global_scope.call(null,res_22784)));
}
}catch (e22774){var o_22785 = e22774;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_22785);
}}finally {console.log = console_log22773_22778;
}
return c;
});
klipse.lang.reason.eval_reason_with_types = (function klipse$lang$reason$eval_reason_with_types(version,exp,_){
var c = cljs.core.async.chan.call(null);
var console_error22786_22794 = console.error;
console.error = ((function (console_error22786_22794,c){
return (function() { 
var G__22795__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__22795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22796__i = 0, G__22796__a = new Array(arguments.length -  0);
while (G__22796__i < G__22796__a.length) {G__22796__a[G__22796__i] = arguments[G__22796__i + 0]; ++G__22796__i;}
  args = new cljs.core.IndexedSeq(G__22796__a,0,null);
} 
return G__22795__delegate.call(this,args);};
G__22795.cljs$lang$maxFixedArity = 0;
G__22795.cljs$lang$applyTo = (function (arglist__22797){
var args = cljs.core.seq(arglist__22797);
return G__22795__delegate(args);
});
G__22795.cljs$core$IFn$_invoke$arity$variadic = G__22795__delegate;
return G__22795;
})()
;})(console_error22786_22794,c))
;

try{try{var vec__22788_22798 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var status_22799 = cljs.core.nth.call(null,vec__22788_22798,(0),null);
var res_22800 = cljs.core.nth.call(null,vec__22788_22798,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_22799)){
cljs.core.async.put_BANG_.call(null,c,res_22800);
} else {
var vec__22791_22801 = klipse.lang.ocaml.eval_with_types.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res_22800),";;"].join(''));
var status_22802__$1 = cljs.core.nth.call(null,vec__22791_22801,(0),null);
var res_22803__$1 = cljs.core.nth.call(null,vec__22791_22801,(1),null);
cljs.core.async.put_BANG_.call(null,c,res_22803__$1);
}
}catch (e22787){var o_22804 = e22787;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_22804);
}}finally {console.error = console_error22786_22794;
}
return c;
});
klipse.lang.reason.transpile_reason = (function klipse$lang$reason$transpile_reason(version,exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_22812){
var state_val_22813 = (state_22812[(1)]);
if((state_val_22813 === (1))){
var inst_22808 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var inst_22809 = cljs.core.nth.call(null,inst_22808,(0),null);
var inst_22810 = cljs.core.nth.call(null,inst_22808,(1),null);
var state_22812__$1 = (function (){var statearr_22814 = state_22812;
(statearr_22814[(7)] = inst_22809);

return statearr_22814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22812__$1,inst_22810);
} else {
return null;
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$reason$transpile_reason_$_state_machine__15944__auto__ = null;
var klipse$lang$reason$transpile_reason_$_state_machine__15944__auto____0 = (function (){
var statearr_22815 = [null,null,null,null,null,null,null,null];
(statearr_22815[(0)] = klipse$lang$reason$transpile_reason_$_state_machine__15944__auto__);

(statearr_22815[(1)] = (1));

return statearr_22815;
});
var klipse$lang$reason$transpile_reason_$_state_machine__15944__auto____1 = (function (state_22812){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_22812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e22816){if((e22816 instanceof Object)){
var ex__15947__auto__ = e22816;
var statearr_22817_22819 = state_22812;
(statearr_22817_22819[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22820 = state_22812;
state_22812 = G__22820;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason_$_state_machine__15944__auto__ = function(state_22812){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason_$_state_machine__15944__auto____1.call(this,state_22812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason_$_state_machine__15944__auto____0;
klipse$lang$reason$transpile_reason_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason_$_state_machine__15944__auto____1;
return klipse$lang$reason$transpile_reason_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_22818 = f__16039__auto__.call(null);
(statearr_22818[(6)] = c__16038__auto__);

return statearr_22818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.reason.transpile_ocaml__GT_reason = (function klipse$lang$reason$transpile_ocaml__GT_reason(exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_22828){
var state_val_22829 = (state_22828[(1)]);
if((state_val_22829 === (1))){
var inst_22824 = klipse.lang.reason.ocaml__GT_reason.call(null,exp);
var inst_22825 = cljs.core.nth.call(null,inst_22824,(0),null);
var inst_22826 = cljs.core.nth.call(null,inst_22824,(1),null);
var state_22828__$1 = (function (){var statearr_22830 = state_22828;
(statearr_22830[(7)] = inst_22825);

return statearr_22830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22828__$1,inst_22826);
} else {
return null;
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15944__auto__ = null;
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15944__auto____0 = (function (){
var statearr_22831 = [null,null,null,null,null,null,null,null];
(statearr_22831[(0)] = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15944__auto__);

(statearr_22831[(1)] = (1));

return statearr_22831;
});
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15944__auto____1 = (function (state_22828){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_22828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e22832){if((e22832 instanceof Object)){
var ex__15947__auto__ = e22832;
var statearr_22833_22835 = state_22828;
(statearr_22833_22835[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22836 = state_22828;
state_22828 = G__22836;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15944__auto__ = function(state_22828){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15944__auto____1.call(this,state_22828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15944__auto____0;
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15944__auto____1;
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_22834 = f__16039__auto__.call(null);
(statearr_22834[(6)] = c__16038__auto__);

return statearr_22834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.reason.transpile_reason__GT_ocaml = (function klipse$lang$reason$transpile_reason__GT_ocaml(version,exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_22850){
var state_val_22851 = (state_22850[(1)]);
if((state_val_22851 === (1))){
var inst_22840 = cljs.core._EQ_.call(null,version,(2));
var state_22850__$1 = state_22850;
if(inst_22840){
var statearr_22852_22861 = state_22850__$1;
(statearr_22852_22861[(1)] = (2));

} else {
var statearr_22853_22862 = state_22850__$1;
(statearr_22853_22862[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (2))){
var inst_22842 = klipse.lang.reason.reason__GT_ocaml.call(null,exp);
var state_22850__$1 = state_22850;
var statearr_22854_22863 = state_22850__$1;
(statearr_22854_22863[(2)] = inst_22842);

(statearr_22854_22863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (3))){
var inst_22844 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var state_22850__$1 = state_22850;
var statearr_22855_22864 = state_22850__$1;
(statearr_22855_22864[(2)] = inst_22844);

(statearr_22855_22864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (4))){
var inst_22846 = (state_22850[(2)]);
var inst_22847 = cljs.core.nth.call(null,inst_22846,(0),null);
var inst_22848 = cljs.core.nth.call(null,inst_22846,(1),null);
var state_22850__$1 = (function (){var statearr_22856 = state_22850;
(statearr_22856[(7)] = inst_22847);

return statearr_22856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22850__$1,inst_22848);
} else {
return null;
}
}
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15944__auto__ = null;
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15944__auto____0 = (function (){
var statearr_22857 = [null,null,null,null,null,null,null,null];
(statearr_22857[(0)] = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15944__auto__);

(statearr_22857[(1)] = (1));

return statearr_22857;
});
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15944__auto____1 = (function (state_22850){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_22850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e22858){if((e22858 instanceof Object)){
var ex__15947__auto__ = e22858;
var statearr_22859_22865 = state_22850;
(statearr_22859_22865[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22866 = state_22850;
state_22850 = G__22866;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15944__auto__ = function(state_22850){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15944__auto____1.call(this,state_22850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15944__auto____0;
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15944__auto____1;
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_22860 = f__16039__auto__.call(null);
(statearr_22860[(6)] = c__16038__auto__);

return statearr_22860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.reason.comment_out = (function klipse$lang$reason$comment_out(src){
return ["/* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)," */"].join('');
});
klipse.lang.reason.eval_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.eval_reason,(2)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/refmt.js","https://viebel.github.io/klipse/repo/js/stdlibBundle.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.transpile_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.transpile_reason,(2)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/refmt.js","https://viebel.github.io/klipse/repo/js/pretty_format.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.transpile__GT_ocaml_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.transpile_reason__GT_ocaml,(2)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/refmt.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.common.registry.register_mode.call(null,"eval-reason","selector_eval_reason",klipse.lang.reason.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-reason","selector_transpile_reason",klipse.lang.reason.transpile_opts);
klipse.common.registry.register_mode.call(null,"transpile-reason->ocaml","selector_transpile_reason_to_ocaml",klipse.lang.reason.transpile__GT_ocaml_opts);
klipse.lang.reason.eval_3_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.eval_reason,(3)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/refmt-3.js","https://viebel.github.io/klipse/repo/js/stdlibBundle.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.eval_3_with_types_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.eval_reason_with_types,(3)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/refmt-3.js","https://viebel.github.io/klipse/repo/js/ocaml_evaluate_type.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.transpile_3_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.transpile_reason,(3)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/refmt-3.js","https://viebel.github.io/klipse/repo/js/pretty_format.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.transpile_3__GT_ocaml_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.transpile_reason__GT_ocaml,(3)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/refmt-3.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.ocaml__GT_reason_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.reason.transpile_ocaml__GT_reason,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/refmt-3.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.common.registry.register_mode.call(null,"eval-reason-3","selector_eval_reason_3",klipse.lang.reason.eval_3_opts);
klipse.common.registry.register_mode.call(null,"transpile-reason-3","selector_transpile_reason_3",klipse.lang.reason.transpile_3_opts);
klipse.common.registry.register_mode.call(null,"transpile-reason-3->ocaml","selector_transpile_reason_3_to_ocaml",klipse.lang.reason.transpile_3__GT_ocaml_opts);
klipse.common.registry.register_mode.call(null,"ocaml->reason","selector_ocaml_to_reason",klipse.lang.reason.ocaml__GT_reason_opts);
klipse.common.registry.register_mode.call(null,"eval-reason-3-with-types","selector_eval_reason_3_with_types",klipse.lang.reason.eval_3_with_types_opts);

//# sourceMappingURL=reason.js.map
