// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.server_eval');
goog.require('cljs.core');
goog.require('klipse.lang.replit');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if(cljs.core.truth_((function (){var obj37044 = window;
var k37045 = "ReplitClient";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj37044,k37045)){
return (obj37044[k37045]);
} else {
return null;
}
})())){
klipse.lang.server_eval.min_eval_idle_msec = (3000);

klipse.lang.server_eval.python = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_python",new cljs.core.Keyword(null,"name","name",1843675177),"eval-python",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"python3",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false], null)], null);

klipse.lang.server_eval.csharp = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_csharp",new cljs.core.Keyword(null,"name","name",1843675177),"eval-csharp",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-csharp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-csharp",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clike")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"csharp",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null)], null);

klipse.lang.server_eval.go = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_go",new cljs.core.Keyword(null,"name","name",1843675177),"eval-go",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"go",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"go",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null)], null);

var seq__37046_37058 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.lang.server_eval.python,klipse.lang.server_eval.csharp,klipse.lang.server_eval.go], null));
var chunk__37047_37059 = null;
var count__37048_37060 = (0);
var i__37049_37061 = (0);
while(true){
if((i__37049_37061 < count__37048_37060)){
var map__37054_37062 = cljs.core._nth.call(null,chunk__37047_37059,i__37049_37061);
var map__37054_37063__$1 = (((((!((map__37054_37062 == null))))?(((((map__37054_37062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37054_37062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37054_37062):map__37054_37062);
var selector_37064 = cljs.core.get.call(null,map__37054_37063__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_37065 = cljs.core.get.call(null,map__37054_37063__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_37066 = cljs.core.get.call(null,map__37054_37063__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_37067 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_37066,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_37066))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_37065,selector_37064,enriched_opts_37067);


var G__37068 = seq__37046_37058;
var G__37069 = chunk__37047_37059;
var G__37070 = count__37048_37060;
var G__37071 = (i__37049_37061 + (1));
seq__37046_37058 = G__37068;
chunk__37047_37059 = G__37069;
count__37048_37060 = G__37070;
i__37049_37061 = G__37071;
continue;
} else {
var temp__5720__auto___37072 = cljs.core.seq.call(null,seq__37046_37058);
if(temp__5720__auto___37072){
var seq__37046_37073__$1 = temp__5720__auto___37072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37046_37073__$1)){
var c__4550__auto___37074 = cljs.core.chunk_first.call(null,seq__37046_37073__$1);
var G__37075 = cljs.core.chunk_rest.call(null,seq__37046_37073__$1);
var G__37076 = c__4550__auto___37074;
var G__37077 = cljs.core.count.call(null,c__4550__auto___37074);
var G__37078 = (0);
seq__37046_37058 = G__37075;
chunk__37047_37059 = G__37076;
count__37048_37060 = G__37077;
i__37049_37061 = G__37078;
continue;
} else {
var map__37056_37079 = cljs.core.first.call(null,seq__37046_37073__$1);
var map__37056_37080__$1 = (((((!((map__37056_37079 == null))))?(((((map__37056_37079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37056_37079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37056_37079):map__37056_37079);
var selector_37081 = cljs.core.get.call(null,map__37056_37080__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_37082 = cljs.core.get.call(null,map__37056_37080__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_37083 = cljs.core.get.call(null,map__37056_37080__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_37084 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_37083,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_37083))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_37082,selector_37081,enriched_opts_37084);


var G__37085 = cljs.core.next.call(null,seq__37046_37073__$1);
var G__37086 = null;
var G__37087 = (0);
var G__37088 = (0);
seq__37046_37058 = G__37085;
chunk__37047_37059 = G__37086;
count__37048_37060 = G__37087;
i__37049_37061 = G__37088;
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
