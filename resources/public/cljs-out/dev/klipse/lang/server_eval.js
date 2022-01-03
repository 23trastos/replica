// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.server_eval');
goog.require('cljs.core');
goog.require('klipse.lang.replit');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if(cljs.core.truth_((function (){var obj24348 = window;
var k24349 = "ReplitClient";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24348,k24349)){
return (obj24348[k24349]);
} else {
return null;
}
})())){
klipse.lang.server_eval.min_eval_idle_msec = (3000);

klipse.lang.server_eval.python = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_python",new cljs.core.Keyword(null,"name","name",1843675177),"eval-python",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"python3",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false], null)], null);

klipse.lang.server_eval.csharp = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_csharp",new cljs.core.Keyword(null,"name","name",1843675177),"eval-csharp",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-csharp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-csharp",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clike")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"csharp",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null)], null);

klipse.lang.server_eval.go = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_go",new cljs.core.Keyword(null,"name","name",1843675177),"eval-go",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"go",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"go",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null)], null);

var seq__24350_24362 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.lang.server_eval.python,klipse.lang.server_eval.csharp,klipse.lang.server_eval.go], null));
var chunk__24351_24363 = null;
var count__24352_24364 = (0);
var i__24353_24365 = (0);
while(true){
if((i__24353_24365 < count__24352_24364)){
var map__24358_24366 = cljs.core._nth.call(null,chunk__24351_24363,i__24353_24365);
var map__24358_24367__$1 = (((((!((map__24358_24366 == null))))?(((((map__24358_24366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24358_24366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24358_24366):map__24358_24366);
var selector_24368 = cljs.core.get.call(null,map__24358_24367__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_24369 = cljs.core.get.call(null,map__24358_24367__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_24370 = cljs.core.get.call(null,map__24358_24367__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_24371 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_24370,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_24370))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_24369,selector_24368,enriched_opts_24371);


var G__24372 = seq__24350_24362;
var G__24373 = chunk__24351_24363;
var G__24374 = count__24352_24364;
var G__24375 = (i__24353_24365 + (1));
seq__24350_24362 = G__24372;
chunk__24351_24363 = G__24373;
count__24352_24364 = G__24374;
i__24353_24365 = G__24375;
continue;
} else {
var temp__5720__auto___24376 = cljs.core.seq.call(null,seq__24350_24362);
if(temp__5720__auto___24376){
var seq__24350_24377__$1 = temp__5720__auto___24376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24350_24377__$1)){
var c__4550__auto___24378 = cljs.core.chunk_first.call(null,seq__24350_24377__$1);
var G__24379 = cljs.core.chunk_rest.call(null,seq__24350_24377__$1);
var G__24380 = c__4550__auto___24378;
var G__24381 = cljs.core.count.call(null,c__4550__auto___24378);
var G__24382 = (0);
seq__24350_24362 = G__24379;
chunk__24351_24363 = G__24380;
count__24352_24364 = G__24381;
i__24353_24365 = G__24382;
continue;
} else {
var map__24360_24383 = cljs.core.first.call(null,seq__24350_24377__$1);
var map__24360_24384__$1 = (((((!((map__24360_24383 == null))))?(((((map__24360_24383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24360_24383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24360_24383):map__24360_24383);
var selector_24385 = cljs.core.get.call(null,map__24360_24384__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_24386 = cljs.core.get.call(null,map__24360_24384__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_24387 = cljs.core.get.call(null,map__24360_24384__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_24388 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_24387,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_24387))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_24386,selector_24385,enriched_opts_24388);


var G__24389 = cljs.core.next.call(null,seq__24350_24377__$1);
var G__24390 = null;
var G__24391 = (0);
var G__24392 = (0);
seq__24350_24362 = G__24389;
chunk__24351_24363 = G__24390;
count__24352_24364 = G__24391;
i__24353_24365 = G__24392;
continue;
}
} else {
}
}
break;
}
} else {
}

//# sourceMappingURL=server_eval.js.map
