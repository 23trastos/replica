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
var map__33924 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__33924__$1 = (((((!((map__33924 == null))))?(((((map__33924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33924):map__33924);
var js_error_msg = cljs.core.get.call(null,map__33924__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__33924__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.reason.reason__GT_ocaml = (function klipse$lang$reason$reason__GT_ocaml(src){
var vec__33926 = refmt(src,"RE","implementation","ML");
var status = cljs.core.nth.call(null,vec__33926,(0),null);
var res = cljs.core.nth.call(null,vec__33926,(1),null);
if(cljs.core._EQ_.call(null,"REtoML",status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),res], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res], null);
}
});
klipse.lang.reason.ocaml__GT_reason = (function klipse$lang$reason$ocaml__GT_reason(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printRE(parseML(src))], null);
}catch (e33929){var e = e33929;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj33946 = (function (){var obj33944 = e;
var k33945 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33944,k33945)){
return (obj33944[k33945]);
} else {
return null;
}
})();
var k33947 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33946,k33947)){
return (obj33946[k33947]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj33950 = (function (){var obj33948 = e;
var k33949 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33948,k33949)){
return (obj33948[k33949]);
} else {
return null;
}
})();
var k33951 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33950,k33951)){
return (obj33950[k33951]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj33954 = (function (){var obj33952 = e;
var k33953 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33952,k33953)){
return (obj33952[k33953]);
} else {
return null;
}
})();
var k33955 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33954,k33955)){
return (obj33954[k33955]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj33956 = e;
var k33957 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33956,k33957)){
return (obj33956[k33957]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason_3__GT_ocaml = (function klipse$lang$reason$reason_3__GT_ocaml(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printML(parseRE(src))], null);
}catch (e33958){var e = e33958;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj33975 = (function (){var obj33973 = e;
var k33974 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33973,k33974)){
return (obj33973[k33974]);
} else {
return null;
}
})();
var k33976 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33975,k33976)){
return (obj33975[k33976]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj33979 = (function (){var obj33977 = e;
var k33978 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33977,k33978)){
return (obj33977[k33978]);
} else {
return null;
}
})();
var k33980 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33979,k33980)){
return (obj33979[k33980]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj33983 = (function (){var obj33981 = e;
var k33982 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33981,k33982)){
return (obj33981[k33982]);
} else {
return null;
}
})();
var k33984 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33983,k33984)){
return (obj33983[k33984]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj33985 = e;
var k33986 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33985,k33986)){
return (obj33985[k33986]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason__GT_js = (function klipse$lang$reason$reason__GT_js(version,src){
var vec__33987 = ((cljs.core._EQ_.call(null,version,(2)))?klipse.lang.reason.reason__GT_ocaml.call(null,src):klipse.lang.reason.reason_3__GT_ocaml.call(null,src));
var status = cljs.core.nth.call(null,vec__33987,(0),null);
var res = cljs.core.nth.call(null,vec__33987,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status)){
var vec__33990 = klipse.lang.reason.ocaml__GT_js.call(null,res);
var status__$1 = cljs.core.nth.call(null,vec__33990,(0),null);
var res__$1 = cljs.core.nth.call(null,vec__33990,(1),null);
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
var console_log33993_33998 = console.log;
console.log = ((function (console_log33993_33998,c){
return (function() { 
var G__33999__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__33999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34000__i = 0, G__34000__a = new Array(arguments.length -  0);
while (G__34000__i < G__34000__a.length) {G__34000__a[G__34000__i] = arguments[G__34000__i + 0]; ++G__34000__i;}
  args = new cljs.core.IndexedSeq(G__34000__a,0,null);
} 
return G__33999__delegate.call(this,args);};
G__33999.cljs$lang$maxFixedArity = 0;
G__33999.cljs$lang$applyTo = (function (arglist__34001){
var args = cljs.core.seq(arglist__34001);
return G__33999__delegate(args);
});
G__33999.cljs$core$IFn$_invoke$arity$variadic = G__33999__delegate;
return G__33999;
})()
;})(console_log33993_33998,c))
;

try{try{exports = ({});

var vec__33995_34002 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var status_34003 = cljs.core.nth.call(null,vec__33995_34002,(0),null);
var res_34004 = cljs.core.nth.call(null,vec__33995_34002,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_34003)){
cljs.core.async.put_BANG_.call(null,c,res_34004);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.reason.eval_in_global_scope.call(null,res_34004)));
}
}catch (e33994){var o_34005 = e33994;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_34005);
}}finally {console.log = console_log33993_33998;
}
return c;
});
klipse.lang.reason.eval_reason_with_types = (function klipse$lang$reason$eval_reason_with_types(version,exp,_){
var c = cljs.core.async.chan.call(null);
var console_error34006_34014 = console.error;
console.error = ((function (console_error34006_34014,c){
return (function() { 
var G__34015__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__34015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34016__i = 0, G__34016__a = new Array(arguments.length -  0);
while (G__34016__i < G__34016__a.length) {G__34016__a[G__34016__i] = arguments[G__34016__i + 0]; ++G__34016__i;}
  args = new cljs.core.IndexedSeq(G__34016__a,0,null);
} 
return G__34015__delegate.call(this,args);};
G__34015.cljs$lang$maxFixedArity = 0;
G__34015.cljs$lang$applyTo = (function (arglist__34017){
var args = cljs.core.seq(arglist__34017);
return G__34015__delegate(args);
});
G__34015.cljs$core$IFn$_invoke$arity$variadic = G__34015__delegate;
return G__34015;
})()
;})(console_error34006_34014,c))
;

try{try{var vec__34008_34018 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var status_34019 = cljs.core.nth.call(null,vec__34008_34018,(0),null);
var res_34020 = cljs.core.nth.call(null,vec__34008_34018,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_34019)){
cljs.core.async.put_BANG_.call(null,c,res_34020);
} else {
var vec__34011_34021 = klipse.lang.ocaml.eval_with_types.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res_34020),";;"].join(''));
var status_34022__$1 = cljs.core.nth.call(null,vec__34011_34021,(0),null);
var res_34023__$1 = cljs.core.nth.call(null,vec__34011_34021,(1),null);
cljs.core.async.put_BANG_.call(null,c,res_34023__$1);
}
}catch (e34007){var o_34024 = e34007;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_34024);
}}finally {console.error = console_error34006_34014;
}
return c;
});
klipse.lang.reason.transpile_reason = (function klipse$lang$reason$transpile_reason(version,exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_34032){
var state_val_34033 = (state_34032[(1)]);
if((state_val_34033 === (1))){
var inst_34028 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var inst_34029 = cljs.core.nth.call(null,inst_34028,(0),null);
var inst_34030 = cljs.core.nth.call(null,inst_34028,(1),null);
var state_34032__$1 = (function (){var statearr_34034 = state_34032;
(statearr_34034[(7)] = inst_34029);

return statearr_34034;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34032__$1,inst_34030);
} else {
return null;
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$reason$transpile_reason_$_state_machine__21022__auto__ = null;
var klipse$lang$reason$transpile_reason_$_state_machine__21022__auto____0 = (function (){
var statearr_34035 = [null,null,null,null,null,null,null,null];
(statearr_34035[(0)] = klipse$lang$reason$transpile_reason_$_state_machine__21022__auto__);

(statearr_34035[(1)] = (1));

return statearr_34035;
});
var klipse$lang$reason$transpile_reason_$_state_machine__21022__auto____1 = (function (state_34032){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_34032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e34036){if((e34036 instanceof Object)){
var ex__21025__auto__ = e34036;
var statearr_34037_34039 = state_34032;
(statearr_34037_34039[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34040 = state_34032;
state_34032 = G__34040;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason_$_state_machine__21022__auto__ = function(state_34032){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason_$_state_machine__21022__auto____1.call(this,state_34032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason_$_state_machine__21022__auto____0;
klipse$lang$reason$transpile_reason_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason_$_state_machine__21022__auto____1;
return klipse$lang$reason$transpile_reason_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_34038 = f__21189__auto__.call(null);
(statearr_34038[(6)] = c__21188__auto__);

return statearr_34038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.reason.transpile_ocaml__GT_reason = (function klipse$lang$reason$transpile_ocaml__GT_reason(exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_34048){
var state_val_34049 = (state_34048[(1)]);
if((state_val_34049 === (1))){
var inst_34044 = klipse.lang.reason.ocaml__GT_reason.call(null,exp);
var inst_34045 = cljs.core.nth.call(null,inst_34044,(0),null);
var inst_34046 = cljs.core.nth.call(null,inst_34044,(1),null);
var state_34048__$1 = (function (){var statearr_34050 = state_34048;
(statearr_34050[(7)] = inst_34045);

return statearr_34050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34048__$1,inst_34046);
} else {
return null;
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__21022__auto__ = null;
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__21022__auto____0 = (function (){
var statearr_34051 = [null,null,null,null,null,null,null,null];
(statearr_34051[(0)] = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__21022__auto__);

(statearr_34051[(1)] = (1));

return statearr_34051;
});
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__21022__auto____1 = (function (state_34048){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_34048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e34052){if((e34052 instanceof Object)){
var ex__21025__auto__ = e34052;
var statearr_34053_34055 = state_34048;
(statearr_34053_34055[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34056 = state_34048;
state_34048 = G__34056;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__21022__auto__ = function(state_34048){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__21022__auto____1.call(this,state_34048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__21022__auto____0;
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__21022__auto____1;
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_34054 = f__21189__auto__.call(null);
(statearr_34054[(6)] = c__21188__auto__);

return statearr_34054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.reason.transpile_reason__GT_ocaml = (function klipse$lang$reason$transpile_reason__GT_ocaml(version,exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_34070){
var state_val_34071 = (state_34070[(1)]);
if((state_val_34071 === (1))){
var inst_34060 = cljs.core._EQ_.call(null,version,(2));
var state_34070__$1 = state_34070;
if(inst_34060){
var statearr_34072_34081 = state_34070__$1;
(statearr_34072_34081[(1)] = (2));

} else {
var statearr_34073_34082 = state_34070__$1;
(statearr_34073_34082[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (2))){
var inst_34062 = klipse.lang.reason.reason__GT_ocaml.call(null,exp);
var state_34070__$1 = state_34070;
var statearr_34074_34083 = state_34070__$1;
(statearr_34074_34083[(2)] = inst_34062);

(statearr_34074_34083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (3))){
var inst_34064 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var state_34070__$1 = state_34070;
var statearr_34075_34084 = state_34070__$1;
(statearr_34075_34084[(2)] = inst_34064);

(statearr_34075_34084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34071 === (4))){
var inst_34066 = (state_34070[(2)]);
var inst_34067 = cljs.core.nth.call(null,inst_34066,(0),null);
var inst_34068 = cljs.core.nth.call(null,inst_34066,(1),null);
var state_34070__$1 = (function (){var statearr_34076 = state_34070;
(statearr_34076[(7)] = inst_34067);

return statearr_34076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34070__$1,inst_34068);
} else {
return null;
}
}
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__21022__auto__ = null;
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__21022__auto____0 = (function (){
var statearr_34077 = [null,null,null,null,null,null,null,null];
(statearr_34077[(0)] = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__21022__auto__);

(statearr_34077[(1)] = (1));

return statearr_34077;
});
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__21022__auto____1 = (function (state_34070){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_34070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e34078){if((e34078 instanceof Object)){
var ex__21025__auto__ = e34078;
var statearr_34079_34085 = state_34070;
(statearr_34079_34085[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34086 = state_34070;
state_34070 = G__34086;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__21022__auto__ = function(state_34070){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__21022__auto____1.call(this,state_34070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__21022__auto____0;
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__21022__auto____1;
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_34080 = f__21189__auto__.call(null);
(statearr_34080[(6)] = c__21188__auto__);

return statearr_34080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
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
