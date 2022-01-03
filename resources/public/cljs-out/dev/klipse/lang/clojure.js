// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.clojure');
goog.require('cljs.core');
goog.require('klipse_clj.lang.clojure');
goog.require('klipse_clj.lang.clojure.io');
goog.require('cljs.reader');
goog.require('klipse.common.registry');
goog.require('klipse.utils');
klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_ = klipse.utils.klipse_settings.call(null);
klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_ = klipse.utils.verbose_QMARK_.call(null);
klipse_clj.lang.clojure.io._STAR_cache_buster_QMARK__STAR_ = cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"cache-buster","cache-buster",-1567170482).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "false";
}
})()));
klipse.lang.clojure.eval_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"clojure",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),(function (exp,opts){
return klipse_clj.lang.clojure.str_eval_async.call(null,exp,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096),klipse.utils.setup_container_BANG_,new cljs.core.Keyword(null,"verbose","verbose",1694226060),klipse.utils.verbose_QMARK_.call(null)));
}),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.lang.clojure.compile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure"),klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),(function (exp,opts){
return klipse_clj.lang.clojure.str_compile_async.call(null,exp,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"verbose","verbose",1694226060),klipse.utils.verbose_QMARK_.call(null)));
}),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-clojure","selector",klipse.lang.clojure.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-clojurescript","selector_js",klipse.lang.clojure.compile_opts);

//# sourceMappingURL=clojure.js.map
