// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.cpp');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.cpp.eval_in_chan = (function klipse$lang$cpp$eval_in_chan(s,c){
try{var config = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stdio","stdio",-1570777132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),(function (p1__41838_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__41838_SHARP_);
})], null)], null));
var input = "";
var exitCode = (function (){var obj__26008__auto__ = JSCPP;
var f__26009__auto__ = (function (){var obj41840 = obj__26008__auto__;
var k41841 = "run";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41840,k41841)){
return (obj41840[k41841]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,s,input,config);
})();
if(cljs.core._EQ_.call(null,(0),exitCode)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),exitCode], null);
}
}catch (e41839){var e = e41839;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064),e], null);
}});
klipse.lang.cpp.str_eval_async = (function klipse$lang$cpp$str_eval_async(s,_){
var c = cljs.core.async.chan.call(null);
var vec__41842 = klipse.lang.cpp.eval_in_chan.call(null,s,c);
var status = cljs.core.nth.call(null,vec__41842,(0),null);
var res = cljs.core.nth.call(null,vec__41842,(1),null);
var G__41845_41846 = status;
var G__41845_41847__$1 = (((G__41845_41846 instanceof cljs.core.Keyword))?G__41845_41846.fqn:null);
switch (G__41845_41847__$1) {
case "ok":
cljs.core.async.put_BANG_.call(null,c,["\nexit code: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)].join(''));

break;
case "error":
cljs.core.async.put_BANG_.call(null,c,["\nexit code:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)].join(''));

break;
case "exception":
cljs.core.async.put_BANG_.call(null,c,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)].join(''));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41845_41847__$1)].join('')));

}

return c;
});
klipse.lang.cpp.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-c++src",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clike"),klipse.common.registry.scripts_src.call(null,"JSCPP.es5.min.js")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.cpp.str_eval_async,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-cpp","selector_eval_cpp",klipse.lang.cpp.opts);

//# sourceMappingURL=cpp.js.map
