// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.ocaml');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.ocaml.eval_in_global_scope = eval;
klipse.lang.ocaml.ocaml_to_js = (function klipse$lang$ocaml$ocaml_to_js(src){
var map__22655 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__22655__$1 = (((((!((map__22655 == null))))?(((((map__22655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22655):map__22655);
var js_error_msg = cljs.core.get.call(null,map__22655__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__22655__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.ocaml.eval_with_types = (function klipse$lang$ocaml$eval_with_types(exp){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj__18568__auto__ = evaluator;
var f__18569__auto__ = (function (){var obj22658 = obj__18568__auto__;
var k22659 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22658,k22659)){
return (obj22658[k22659]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,exp);
})()], null);
}catch (e22657){var o = e22657;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.ocaml.eval_ocaml = (function klipse$lang$ocaml$eval_ocaml(exp,_){
var c = cljs.core.async.chan.call(null);
var console_log22660_22665 = console.log;
console.log = ((function (console_log22660_22665,c){
return (function() { 
var G__22666__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__22666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22667__i = 0, G__22667__a = new Array(arguments.length -  0);
while (G__22667__i < G__22667__a.length) {G__22667__a[G__22667__i] = arguments[G__22667__i + 0]; ++G__22667__i;}
  args = new cljs.core.IndexedSeq(G__22667__a,0,null);
} 
return G__22666__delegate.call(this,args);};
G__22666.cljs$lang$maxFixedArity = 0;
G__22666.cljs$lang$applyTo = (function (arglist__22668){
var args = cljs.core.seq(arglist__22668);
return G__22666__delegate(args);
});
G__22666.cljs$core$IFn$_invoke$arity$variadic = G__22666__delegate;
return G__22666;
})()
;})(console_log22660_22665,c))
;

try{try{exports = ({});

var vec__22662_22669 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var status_22670 = cljs.core.nth.call(null,vec__22662_22669,(0),null);
var res_22671 = cljs.core.nth.call(null,vec__22662_22669,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_22670)){
cljs.core.async.put_BANG_.call(null,c,res_22671);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.ocaml.eval_in_global_scope.call(null,res_22671)));
}
}catch (e22661){var o_22672 = e22661;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_22672);
}}finally {console.log = console_log22660_22665;
}
return c;
});
klipse.lang.ocaml.eval_ocaml_with_types = (function klipse$lang$ocaml$eval_ocaml_with_types(exp,_){
var c = cljs.core.async.chan.call(null);
var console_error22673_22678 = console.error;
console.error = ((function (console_error22673_22678,c){
return (function() { 
var G__22679__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__22679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22680__i = 0, G__22680__a = new Array(arguments.length -  0);
while (G__22680__i < G__22680__a.length) {G__22680__a[G__22680__i] = arguments[G__22680__i + 0]; ++G__22680__i;}
  args = new cljs.core.IndexedSeq(G__22680__a,0,null);
} 
return G__22679__delegate.call(this,args);};
G__22679.cljs$lang$maxFixedArity = 0;
G__22679.cljs$lang$applyTo = (function (arglist__22681){
var args = cljs.core.seq(arglist__22681);
return G__22679__delegate(args);
});
G__22679.cljs$core$IFn$_invoke$arity$variadic = G__22679__delegate;
return G__22679;
})()
;})(console_error22673_22678,c))
;

try{try{exports = ({});

var vec__22675_22682 = klipse.lang.ocaml.eval_with_types.call(null,exp);
var status_22683 = cljs.core.nth.call(null,vec__22675_22682,(0),null);
var res_22684 = cljs.core.nth.call(null,vec__22675_22682,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_22683)){
cljs.core.async.put_BANG_.call(null,c,res_22684);
} else {
cljs.core.async.put_BANG_.call(null,c,res_22684);
}
}catch (e22674){var o_22685 = e22674;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_22685);
}}finally {console.error = console_error22673_22678;
}
return c;
});
klipse.lang.ocaml.transpile_ocaml = (function klipse$lang$ocaml$transpile_ocaml(exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_22693){
var state_val_22694 = (state_22693[(1)]);
if((state_val_22694 === (1))){
var inst_22689 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var inst_22690 = cljs.core.nth.call(null,inst_22689,(0),null);
var inst_22691 = cljs.core.nth.call(null,inst_22689,(1),null);
var state_22693__$1 = (function (){var statearr_22695 = state_22693;
(statearr_22695[(7)] = inst_22690);

return statearr_22695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22693__$1,inst_22691);
} else {
return null;
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__15944__auto__ = null;
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__15944__auto____0 = (function (){
var statearr_22696 = [null,null,null,null,null,null,null,null];
(statearr_22696[(0)] = klipse$lang$ocaml$transpile_ocaml_$_state_machine__15944__auto__);

(statearr_22696[(1)] = (1));

return statearr_22696;
});
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__15944__auto____1 = (function (state_22693){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_22693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e22697){if((e22697 instanceof Object)){
var ex__15947__auto__ = e22697;
var statearr_22698_22700 = state_22693;
(statearr_22698_22700[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22701 = state_22693;
state_22693 = G__22701;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$ocaml$transpile_ocaml_$_state_machine__15944__auto__ = function(state_22693){
switch(arguments.length){
case 0:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__15944__auto____1.call(this,state_22693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$ocaml$transpile_ocaml_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__15944__auto____0;
klipse$lang$ocaml$transpile_ocaml_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__15944__auto____1;
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_22699 = f__16039__auto__.call(null);
(statearr_22699[(6)] = c__16038__auto__);

return statearr_22699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
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
