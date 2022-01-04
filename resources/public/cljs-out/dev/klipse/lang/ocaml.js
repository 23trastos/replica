// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.ocaml');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.ocaml.eval_in_global_scope = eval;
klipse.lang.ocaml.ocaml_to_js = (function klipse$lang$ocaml$ocaml_to_js(src){
var map__33710 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__33710__$1 = (((((!((map__33710 == null))))?(((((map__33710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33710):map__33710);
var js_error_msg = cljs.core.get.call(null,map__33710__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__33710__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.ocaml.eval_with_types = (function klipse$lang$ocaml$eval_with_types(exp){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj__26008__auto__ = evaluator;
var f__26009__auto__ = (function (){var obj33713 = obj__26008__auto__;
var k33714 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33713,k33714)){
return (obj33713[k33714]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,exp);
})()], null);
}catch (e33712){var o = e33712;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.ocaml.eval_ocaml = (function klipse$lang$ocaml$eval_ocaml(exp,_){
var c = cljs.core.async.chan.call(null);
var console_log33715_33720 = console.log;
console.log = ((function (console_log33715_33720,c){
return (function() { 
var G__33721__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__33721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33722__i = 0, G__33722__a = new Array(arguments.length -  0);
while (G__33722__i < G__33722__a.length) {G__33722__a[G__33722__i] = arguments[G__33722__i + 0]; ++G__33722__i;}
  args = new cljs.core.IndexedSeq(G__33722__a,0,null);
} 
return G__33721__delegate.call(this,args);};
G__33721.cljs$lang$maxFixedArity = 0;
G__33721.cljs$lang$applyTo = (function (arglist__33723){
var args = cljs.core.seq(arglist__33723);
return G__33721__delegate(args);
});
G__33721.cljs$core$IFn$_invoke$arity$variadic = G__33721__delegate;
return G__33721;
})()
;})(console_log33715_33720,c))
;

try{try{exports = ({});

var vec__33717_33724 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var status_33725 = cljs.core.nth.call(null,vec__33717_33724,(0),null);
var res_33726 = cljs.core.nth.call(null,vec__33717_33724,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_33725)){
cljs.core.async.put_BANG_.call(null,c,res_33726);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.ocaml.eval_in_global_scope.call(null,res_33726)));
}
}catch (e33716){var o_33727 = e33716;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_33727);
}}finally {console.log = console_log33715_33720;
}
return c;
});
klipse.lang.ocaml.eval_ocaml_with_types = (function klipse$lang$ocaml$eval_ocaml_with_types(exp,_){
var c = cljs.core.async.chan.call(null);
var console_error33728_33733 = console.error;
console.error = ((function (console_error33728_33733,c){
return (function() { 
var G__33734__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__33734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33735__i = 0, G__33735__a = new Array(arguments.length -  0);
while (G__33735__i < G__33735__a.length) {G__33735__a[G__33735__i] = arguments[G__33735__i + 0]; ++G__33735__i;}
  args = new cljs.core.IndexedSeq(G__33735__a,0,null);
} 
return G__33734__delegate.call(this,args);};
G__33734.cljs$lang$maxFixedArity = 0;
G__33734.cljs$lang$applyTo = (function (arglist__33736){
var args = cljs.core.seq(arglist__33736);
return G__33734__delegate(args);
});
G__33734.cljs$core$IFn$_invoke$arity$variadic = G__33734__delegate;
return G__33734;
})()
;})(console_error33728_33733,c))
;

try{try{exports = ({});

var vec__33730_33737 = klipse.lang.ocaml.eval_with_types.call(null,exp);
var status_33738 = cljs.core.nth.call(null,vec__33730_33737,(0),null);
var res_33739 = cljs.core.nth.call(null,vec__33730_33737,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_33738)){
cljs.core.async.put_BANG_.call(null,c,res_33739);
} else {
cljs.core.async.put_BANG_.call(null,c,res_33739);
}
}catch (e33729){var o_33740 = e33729;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_33740);
}}finally {console.error = console_error33728_33733;
}
return c;
});
klipse.lang.ocaml.transpile_ocaml = (function klipse$lang$ocaml$transpile_ocaml(exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_33748){
var state_val_33749 = (state_33748[(1)]);
if((state_val_33749 === (1))){
var inst_33744 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var inst_33745 = cljs.core.nth.call(null,inst_33744,(0),null);
var inst_33746 = cljs.core.nth.call(null,inst_33744,(1),null);
var state_33748__$1 = (function (){var statearr_33750 = state_33748;
(statearr_33750[(7)] = inst_33745);

return statearr_33750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33748__$1,inst_33746);
} else {
return null;
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__21022__auto__ = null;
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__21022__auto____0 = (function (){
var statearr_33751 = [null,null,null,null,null,null,null,null];
(statearr_33751[(0)] = klipse$lang$ocaml$transpile_ocaml_$_state_machine__21022__auto__);

(statearr_33751[(1)] = (1));

return statearr_33751;
});
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__21022__auto____1 = (function (state_33748){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_33748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e33752){if((e33752 instanceof Object)){
var ex__21025__auto__ = e33752;
var statearr_33753_33755 = state_33748;
(statearr_33753_33755[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33756 = state_33748;
state_33748 = G__33756;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$ocaml$transpile_ocaml_$_state_machine__21022__auto__ = function(state_33748){
switch(arguments.length){
case 0:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__21022__auto____1.call(this,state_33748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$ocaml$transpile_ocaml_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__21022__auto____0;
klipse$lang$ocaml$transpile_ocaml_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__21022__auto____1;
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_33754 = f__21189__auto__.call(null);
(statearr_33754[(6)] = c__21188__auto__);

return statearr_33754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.ocaml.comment_out = (function klipse$lang$ocaml$comment_out(src){
return ["(* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)," *)"].join('');
});
klipse.lang.ocaml.eval_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ocaml.eval_ocaml,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/stdlibBundle.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.ocaml.comment_out], null);
klipse.lang.ocaml.eval_with_types_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ocaml.eval_ocaml_with_types,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/ocaml_evaluate_type.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.ocaml.comment_out], null);
klipse.lang.ocaml.transpile_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ocaml.transpile_ocaml,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/pretty_format.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.ocaml.comment_out], null);
klipse.common.registry.register_mode.call(null,"eval-ocaml","selector_eval_ocaml",klipse.lang.ocaml.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-ocaml","selector_transpile_ocaml",klipse.lang.ocaml.transpile_opts);
klipse.common.registry.register_mode.call(null,"eval-with-types-opts","selector_eval_ocaml_with_types",klipse.lang.ocaml.eval_with_types_opts);

//# sourceMappingURL=ocaml.js.map
