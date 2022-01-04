// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.scheme');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.scheme.display = (function klipse$lang$scheme$display(result){
if(cljs.core.truth_((result["inspect"]))){
var obj__26008__auto__ = result;
var f__26009__auto__ = (function (){var obj34500 = obj__26008__auto__;
var k34501 = "inspect";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj34500,k34501)){
return (obj34500[k34501]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(result);
}
});
klipse.lang.scheme.create_interpreter = (function klipse$lang$scheme$create_interpreter(on_error){
var klass = (function (){var obj34502 = BiwaScheme;
var k34503 = "Interpreter";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj34502,k34503)){
return (obj34502[k34503]);
} else {
return null;
}
})();
return (new klass(on_error));
});
klipse.lang.scheme.str_eval_async = (function klipse$lang$scheme$str_eval_async(exp,_){
var c = cljs.core.async.chan.call(null);
var interpreter = klipse.lang.scheme.create_interpreter.call(null,((function (c){
return (function (err){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(err));
});})(c))
);
window.exp = exp;

cljs.core.async.put_BANG_.call(null,c,klipse.lang.scheme.display.call(null,(function (){var obj__26008__auto__ = interpreter;
var f__26009__auto__ = (function (){var obj34504 = obj__26008__auto__;
var k34505 = "evaluate";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj34504,k34505)){
return (obj34504[k34505]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,exp);
})()));

return c;
});
klipse.lang.scheme.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"scheme",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"scheme",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.scheme.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"scheme"),klipse.common.registry.scripts_src.call(null,"biwascheme-0.6.6-min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-scheme","selector_eval_scheme",klipse.lang.scheme.opts);

//# sourceMappingURL=scheme.js.map
