// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse_clj.lang.clojure.io');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('clojure.string');
goog.require('klipse_clj.repl');
goog.require('clojure.walk');
goog.require('cljs_http.client');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('applied_science.js_interop');
klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_ = false;
klipse_clj.lang.clojure.io._STAR_cache_buster_QMARK__STAR_ = false;
klipse_clj.lang.clojure.io.edn = (function klipse_clj$lang$clojure$io$edn(json){
return cljs_http.util.transit_decode.call(null,JSON.stringify(cljs.core.clj__GT_js.call(null,json)),new cljs.core.Keyword(null,"json","json",1279968570),null);
});
klipse_clj.lang.clojure.io.macro_suffixes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null);
klipse_clj.lang.clojure.io.cljs_suffixes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc"], null);
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.lang !== 'undefined') && (typeof klipse_clj.lang.clojure !== 'undefined') && (typeof klipse_clj.lang.clojure.io !== 'undefined') && (typeof klipse_clj.lang.clojure.io.load_ns !== 'undefined')){
} else {
/**
 * 
 *   Each runtime environment provides a different way to load a library.
 *   Received two arguments - a map and a callback function:
 *   The map will have the following keys:
 * 
 *  :name   - the name of the library (a symbol)
 *  :macros - modifier signaling a macros namespace load
 *  :path   - munged relative library path (a string)
 * 
 *  It is up to the implementor to correctly resolve the corresponding .cljs,
 *  .cljc, or .js resource (the order must be respected).
 *  If :macros is true, resolution should only consider .clj or .cljc resources (the order must be respected).
 *   Upon resolution the callback should be invoked with a map containing the following keys:
 * 
 *  :lang       - the language, :clj or :js
 *  :source     - the source of the library (a string)
 *  :file       - optional, the file path, it will be added to AST's :file keyword (but not in :meta)
 *  :cache      - optional, if a :clj namespace has been precompiled to :js, can give an analysis cache for faster loads.
 *  :source-map - optional, if a :clj namespace has been precompiled to :js, can give a V3 source map JSON
 * 
 *  If the resource could not be resolved, the callback should be invoked with
 *  nil.
 */
klipse_clj.lang.clojure.io.load_ns = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,p__27272,src_cb){
var map__27273 = p__27272;
var map__27273__$1 = (((((!((map__27273 == null))))?(((((map__27273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27273):map__27273);
var name = cljs.core.get.call(null,map__27273__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__27273__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__27273__$1,new cljs.core.Keyword(null,"path","path",-188191168));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,macros,path], null);

if(cljs.core.truth_(macros)){
return new cljs.core.Keyword(null,"macro","macro",-867863404);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\..*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return new cljs.core.Keyword(null,"goog","goog",-1711135452);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\.gist-.*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return new cljs.core.Keyword(null,"gist","gist",96143031);
} else {
return new cljs.core.Keyword(null,"cljs","cljs",1492417629);

}
}
}
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
klipse_clj.lang.clojure.io.skip_ns_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"cljs.analyzer.macros","cljs.analyzer.macros",298494182,null),null,new cljs.core.Symbol(null,"cljs.env.macros","cljs.env.macros",1542748640,null),null,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),null,new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null),null,new cljs.core.Symbol(null,"cljs.compiler.macros","cljs.compiler.macros",750996207,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.js","cljs.js",474485962,null),null], null), null);
klipse_clj.lang.clojure.io.the_ns_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null),"https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs/",new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),"https://raw.githubusercontent.com/viebel/clojure/master/src/clj/"], null);
klipse_clj.lang.clojure.io.skip_ns_cljs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cljs.source-map","cljs.source-map",2108014936,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.env","cljs.env",-1810013139,null),null], null), null);
klipse_clj.lang.clojure.io.filename_of = (function klipse_clj$lang$clojure$io$filename_of(s){
if(klipse_clj.lang.clojure.io._STAR_cache_buster_QMARK__STAR_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join('');
} else {
return s;
}
});
/**
 * Tries to load one namespace from filenames.
 *   Will call the src-cb upon first success.
 *   If can-recover? is false, will call src-cb with nil if it cannot load any namespace.
 *   Returns :success if a nampespace was loaded otherwise, returns nil.
 *   
 */
klipse_clj.lang.clojure.io.try_to_load_ns = (function klipse_clj$lang$clojure$io$try_to_load_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27389 = arguments.length;
var i__4731__auto___27390 = (0);
while(true){
if((i__4731__auto___27390 < len__4730__auto___27389)){
args__4736__auto__.push((arguments[i__4731__auto___27390]));

var G__27391 = (i__4731__auto___27390 + (1));
i__4731__auto___27390 = G__27391;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__27280){
var map__27281 = p__27280;
var map__27281__$1 = (((((!((map__27281 == null))))?(((((map__27281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27281):map__27281);
var transform = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,map__27281,map__27281__$1,transform,can_recover_QMARK_){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,map__27281,map__27281__$1,transform,can_recover_QMARK_){
return (function (state_27346){
var state_val_27347 = (state_27346[(1)]);
if((state_val_27347 === (7))){
var inst_27295 = (state_27346[(7)]);
var inst_27295__$1 = (state_27346[(2)]);
var inst_27297 = (inst_27295__$1 == null);
var inst_27298 = cljs.core.not.call(null,inst_27297);
var state_27346__$1 = (function (){var statearr_27348 = state_27346;
(statearr_27348[(7)] = inst_27295__$1);

return statearr_27348;
})();
if(inst_27298){
var statearr_27349_27392 = state_27346__$1;
(statearr_27349_27392[(1)] = (8));

} else {
var statearr_27350_27393 = state_27346__$1;
(statearr_27350_27393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (20))){
var state_27346__$1 = state_27346;
var statearr_27351_27394 = state_27346__$1;
(statearr_27351_27394[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_27351_27394[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (1))){
var inst_27283 = filenames;
var state_27346__$1 = (function (){var statearr_27352 = state_27346;
(statearr_27352[(8)] = inst_27283);

return statearr_27352;
})();
var statearr_27353_27395 = state_27346__$1;
(statearr_27353_27395[(2)] = null);

(statearr_27353_27395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (24))){
var inst_27340 = src_cb.call(null,null);
var state_27346__$1 = state_27346;
var statearr_27354_27396 = state_27346__$1;
(statearr_27354_27396[(2)] = inst_27340);

(statearr_27354_27396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (4))){
var inst_27283 = (state_27346[(8)]);
var inst_27288 = (state_27346[(9)]);
var inst_27288__$1 = cljs.core.first.call(null,inst_27283);
var inst_27289 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_27288__$1);
var inst_27290 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27291 = [false];
var inst_27292 = cljs.core.PersistentHashMap.fromArrays(inst_27290,inst_27291);
var inst_27293 = cljs_http.client.get.call(null,inst_27289,inst_27292);
var state_27346__$1 = (function (){var statearr_27355 = state_27346;
(statearr_27355[(9)] = inst_27288__$1);

return statearr_27355;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27346__$1,(7),inst_27293);
} else {
if((state_val_27347 === (15))){
var inst_27295 = (state_27346[(7)]);
var state_27346__$1 = state_27346;
var statearr_27356_27397 = state_27346__$1;
(statearr_27356_27397[(2)] = inst_27295);

(statearr_27356_27397[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (21))){
var state_27346__$1 = state_27346;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_27357_27398 = state_27346__$1;
(statearr_27357_27398[(1)] = (23));

} else {
var statearr_27358_27399 = state_27346__$1;
(statearr_27358_27399[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (13))){
var inst_27308 = (state_27346[(2)]);
var state_27346__$1 = state_27346;
var statearr_27359_27400 = state_27346__$1;
(statearr_27359_27400[(2)] = inst_27308);

(statearr_27359_27400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (22))){
var inst_27344 = (state_27346[(2)]);
var state_27346__$1 = state_27346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27346__$1,inst_27344);
} else {
if((state_val_27347 === (6))){
var inst_27333 = (state_27346[(2)]);
var state_27346__$1 = state_27346;
var statearr_27360_27401 = state_27346__$1;
(statearr_27360_27401[(2)] = inst_27333);

(statearr_27360_27401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (25))){
var inst_27342 = (state_27346[(2)]);
var state_27346__$1 = (function (){var statearr_27361 = state_27346;
(statearr_27361[(10)] = inst_27342);

return statearr_27361;
})();
var statearr_27362_27402 = state_27346__$1;
(statearr_27362_27402[(2)] = false);

(statearr_27362_27402[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (17))){
var inst_27288 = (state_27346[(9)]);
var inst_27318 = (state_27346[(11)]);
var inst_27321 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_27322 = transform.call(null,inst_27318);
var inst_27323 = [lang,inst_27322,inst_27288];
var inst_27324 = cljs.core.PersistentHashMap.fromArrays(inst_27321,inst_27323);
var inst_27325 = src_cb.call(null,inst_27324);
var state_27346__$1 = (function (){var statearr_27363 = state_27346;
(statearr_27363[(12)] = inst_27325);

return statearr_27363;
})();
var statearr_27364_27403 = state_27346__$1;
(statearr_27364_27403[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_27364_27403[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (3))){
var inst_27335 = (state_27346[(2)]);
var state_27346__$1 = state_27346;
if(cljs.core.truth_(inst_27335)){
var statearr_27365_27404 = state_27346__$1;
(statearr_27365_27404[(1)] = (20));

} else {
var statearr_27366_27405 = state_27346__$1;
(statearr_27366_27405[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (12))){
var state_27346__$1 = state_27346;
var statearr_27367_27406 = state_27346__$1;
(statearr_27367_27406[(2)] = false);

(statearr_27367_27406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (2))){
var inst_27283 = (state_27346[(8)]);
var inst_27285 = cljs.core.seq.call(null,inst_27283);
var state_27346__$1 = state_27346;
if(inst_27285){
var statearr_27368_27407 = state_27346__$1;
(statearr_27368_27407[(1)] = (4));

} else {
var statearr_27369_27408 = state_27346__$1;
(statearr_27369_27408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (23))){
var state_27346__$1 = state_27346;
var statearr_27370_27409 = state_27346__$1;
(statearr_27370_27409[(2)] = null);

(statearr_27370_27409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (19))){
var inst_27330 = (state_27346[(2)]);
var state_27346__$1 = state_27346;
var statearr_27371_27410 = state_27346__$1;
(statearr_27371_27410[(2)] = inst_27330);

(statearr_27371_27410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (11))){
var state_27346__$1 = state_27346;
var statearr_27372_27411 = state_27346__$1;
(statearr_27372_27411[(2)] = true);

(statearr_27372_27411[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (9))){
var state_27346__$1 = state_27346;
var statearr_27373_27412 = state_27346__$1;
(statearr_27373_27412[(2)] = false);

(statearr_27373_27412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (5))){
var state_27346__$1 = state_27346;
var statearr_27374_27413 = state_27346__$1;
(statearr_27374_27413[(2)] = null);

(statearr_27374_27413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (14))){
var inst_27295 = (state_27346[(7)]);
var inst_27313 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27295);
var state_27346__$1 = state_27346;
var statearr_27375_27414 = state_27346__$1;
(statearr_27375_27414[(2)] = inst_27313);

(statearr_27375_27414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (16))){
var inst_27316 = (state_27346[(2)]);
var inst_27317 = cljs.core.get.call(null,inst_27316,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_27318 = cljs.core.get.call(null,inst_27316,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_27319 = cljs.core._EQ_.call(null,(200),inst_27317);
var state_27346__$1 = (function (){var statearr_27376 = state_27346;
(statearr_27376[(11)] = inst_27318);

return statearr_27376;
})();
if(inst_27319){
var statearr_27377_27415 = state_27346__$1;
(statearr_27377_27415[(1)] = (17));

} else {
var statearr_27378_27416 = state_27346__$1;
(statearr_27378_27416[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (10))){
var inst_27311 = (state_27346[(2)]);
var state_27346__$1 = state_27346;
if(cljs.core.truth_(inst_27311)){
var statearr_27379_27417 = state_27346__$1;
(statearr_27379_27417[(1)] = (14));

} else {
var statearr_27380_27418 = state_27346__$1;
(statearr_27380_27418[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (18))){
var inst_27283 = (state_27346[(8)]);
var inst_27327 = cljs.core.rest.call(null,inst_27283);
var inst_27283__$1 = inst_27327;
var state_27346__$1 = (function (){var statearr_27381 = state_27346;
(statearr_27381[(8)] = inst_27283__$1);

return statearr_27381;
})();
var statearr_27382_27419 = state_27346__$1;
(statearr_27382_27419[(2)] = null);

(statearr_27382_27419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27347 === (8))){
var inst_27295 = (state_27346[(7)]);
var inst_27300 = inst_27295.cljs$lang$protocol_mask$partition0$;
var inst_27301 = (inst_27300 & (64));
var inst_27302 = inst_27295.cljs$core$ISeq$;
var inst_27303 = (cljs.core.PROTOCOL_SENTINEL === inst_27302);
var inst_27304 = ((inst_27301) || (inst_27303));
var state_27346__$1 = state_27346;
if(cljs.core.truth_(inst_27304)){
var statearr_27383_27420 = state_27346__$1;
(statearr_27383_27420[(1)] = (11));

} else {
var statearr_27384_27421 = state_27346__$1;
(statearr_27384_27421[(1)] = (12));

}

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
}
}
}
}
}
});})(c__21188__auto__,map__27281,map__27281__$1,transform,can_recover_QMARK_))
;
return ((function (switch__21021__auto__,c__21188__auto__,map__27281,map__27281__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__21022__auto____0 = (function (){
var statearr_27385 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27385[(0)] = klipse_clj$lang$clojure$io$state_machine__21022__auto__);

(statearr_27385[(1)] = (1));

return statearr_27385;
});
var klipse_clj$lang$clojure$io$state_machine__21022__auto____1 = (function (state_27346){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_27346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e27386){if((e27386 instanceof Object)){
var ex__21025__auto__ = e27386;
var statearr_27387_27422 = state_27346;
(statearr_27387_27422[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27423 = state_27346;
state_27346 = G__27423;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__21022__auto__ = function(state_27346){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__21022__auto____1.call(this,state_27346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__21022__auto____0;
klipse_clj$lang$clojure$io$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__21022__auto____1;
return klipse_clj$lang$clojure$io$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,map__27281,map__27281__$1,transform,can_recover_QMARK_))
})();
var state__21190__auto__ = (function (){var statearr_27388 = f__21189__auto__.call(null);
(statearr_27388[(6)] = c__21188__auto__);

return statearr_27388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,map__27281,map__27281__$1,transform,can_recover_QMARK_))
);

return c__21188__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq27275){
var G__27276 = cljs.core.first.call(null,seq27275);
var seq27275__$1 = cljs.core.next.call(null,seq27275);
var G__27277 = cljs.core.first.call(null,seq27275__$1);
var seq27275__$2 = cljs.core.next.call(null,seq27275__$1);
var G__27278 = cljs.core.first.call(null,seq27275__$2);
var seq27275__$3 = cljs.core.next.call(null,seq27275__$2);
var G__27279 = cljs.core.first.call(null,seq27275__$3);
var seq27275__$4 = cljs.core.next.call(null,seq27275__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27276,G__27277,G__27278,G__27279,seq27275__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4523__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__27424(s__27425){
return (new cljs.core.LazySeq(null,(function (){
var s__27425__$1 = s__27425;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27425__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var lib = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__27425__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__27424_$_iter__27426(s__27427){
return (new cljs.core.LazySeq(null,((function (s__27425__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__27427__$1 = s__27427;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__27427__$1);
if(temp__5720__auto____$1){
var s__27427__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27427__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__27427__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__27429 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__27428 = (0);
while(true){
if((i__27428 < size__4522__auto__)){
var suffix = cljs.core._nth.call(null,c__4521__auto__,i__27428);
cljs.core.chunk_append.call(null,b__27429,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__27430 = (i__27428 + (1));
i__27428 = G__27430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27429),klipse_clj$lang$clojure$io$external_libs_files_$_iter__27424_$_iter__27426.call(null,cljs.core.chunk_rest.call(null,s__27427__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27429),null);
}
} else {
var suffix = cljs.core.first.call(null,s__27427__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__27424_$_iter__27426.call(null,cljs.core.rest.call(null,s__27427__$2)));
}
} else {
return null;
}
break;
}
});})(s__27425__$1,lib,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__27425__$1,lib,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,suffixes));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__27424.call(null,cljs.core.rest.call(null,s__27425__$1)));
} else {
var G__27431 = cljs.core.rest.call(null,s__27425__$1);
s__27425__$1 = G__27431;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,external_libs);
});
klipse_clj.lang.clojure.io.name__GT_cached_resource = (function klipse_clj$lang$clojure$io$name__GT_cached_resource(name){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)),/\./,"_SLASH_");
});
klipse_clj.lang.clojure.io.cached_ns_root = (function klipse_clj$lang$clojure$io$cached_ns_root(){
return new cljs.core.Keyword(null,"cached_ns_root","cached_ns_root",-1077014575).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,"https://viebel.github.io/cljs-analysis-cache/cache/");
});
klipse_clj.lang.clojure.io.load_ns_from_cache = (function klipse_clj$lang$clojure$io$load_ns_from_cache(name,src_cb,macro_QMARK_){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-cache:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"macro: ",macro_QMARK_);
} else {
}

var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_27476){
var state_val_27477 = (state_27476[(1)]);
if((state_val_27477 === (7))){
var inst_27455 = (state_27476[(7)]);
var inst_27448 = (state_27476[(8)]);
var inst_27464 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_27465 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27455);
var inst_27466 = klipse_clj.lang.clojure.io.edn.call(null,inst_27465);
var inst_27467 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27448);
var inst_27468 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_27466,inst_27467];
var inst_27469 = cljs.core.PersistentHashMap.fromArrays(inst_27464,inst_27468);
var inst_27470 = src_cb.call(null,inst_27469);
var state_27476__$1 = state_27476;
var statearr_27478_27494 = state_27476__$1;
(statearr_27478_27494[(2)] = inst_27470);

(statearr_27478_27494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (1))){
var inst_27433 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_27476__$1 = (function (){var statearr_27479 = state_27476;
(statearr_27479[(9)] = inst_27433);

return statearr_27479;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_27480_27495 = state_27476__$1;
(statearr_27480_27495[(1)] = (2));

} else {
var statearr_27481_27496 = state_27476__$1;
(statearr_27481_27496[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (4))){
var inst_27440 = (state_27476[(10)]);
var inst_27437 = (state_27476[(11)]);
var inst_27433 = (state_27476[(9)]);
var inst_27439 = (state_27476[(12)]);
var inst_27437__$1 = (state_27476[(2)]);
var inst_27438 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_27439__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27438),"/"].join('');
var inst_27440__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27439__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27433),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27437__$1),".js"].join('');
var inst_27441 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27439__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27433),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27437__$1),".cache.json"].join('');
var inst_27442 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_27440__$1);
var inst_27443 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27444 = [false];
var inst_27445 = cljs.core.PersistentHashMap.fromArrays(inst_27443,inst_27444);
var inst_27446 = cljs_http.client.get.call(null,inst_27442,inst_27445);
var state_27476__$1 = (function (){var statearr_27482 = state_27476;
(statearr_27482[(10)] = inst_27440__$1);

(statearr_27482[(11)] = inst_27437__$1);

(statearr_27482[(13)] = inst_27441);

(statearr_27482[(12)] = inst_27439__$1);

return statearr_27482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27476__$1,(5),inst_27446);
} else {
if((state_val_27477 === (6))){
var inst_27455 = (state_27476[(7)]);
var inst_27440 = (state_27476[(10)]);
var inst_27437 = (state_27476[(11)]);
var inst_27433 = (state_27476[(9)]);
var inst_27448 = (state_27476[(8)]);
var inst_27441 = (state_27476[(13)]);
var inst_27439 = (state_27476[(12)]);
var inst_27455__$1 = (state_27476[(2)]);
var inst_27456 = (function (){var nn = inst_27433;
var suffix = inst_27437;
var root = inst_27439;
var src_filename = inst_27440;
var cache_filename = inst_27441;
var src = inst_27448;
var cache = inst_27455__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_27455,inst_27440,inst_27437,inst_27433,inst_27448,inst_27441,inst_27439,inst_27455__$1,state_val_27477,c__21188__auto__){
return (function (p1__27432_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__27432_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_27455,inst_27440,inst_27437,inst_27433,inst_27448,inst_27441,inst_27439,inst_27455__$1,state_val_27477,c__21188__auto__))
})();
var inst_27457 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27458 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27455__$1);
var inst_27459 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27448);
var inst_27460 = [inst_27458,inst_27459];
var inst_27461 = (new cljs.core.PersistentVector(null,2,(5),inst_27457,inst_27460,null));
var inst_27462 = cljs.core.every_QMARK_.call(null,inst_27456,inst_27461);
var state_27476__$1 = (function (){var statearr_27483 = state_27476;
(statearr_27483[(7)] = inst_27455__$1);

return statearr_27483;
})();
if(inst_27462){
var statearr_27484_27497 = state_27476__$1;
(statearr_27484_27497[(1)] = (7));

} else {
var statearr_27485_27498 = state_27476__$1;
(statearr_27485_27498[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (3))){
var state_27476__$1 = state_27476;
var statearr_27486_27499 = state_27476__$1;
(statearr_27486_27499[(2)] = "");

(statearr_27486_27499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (2))){
var state_27476__$1 = state_27476;
var statearr_27487_27500 = state_27476__$1;
(statearr_27487_27500[(2)] = "$macros");

(statearr_27487_27500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (9))){
var inst_27474 = (state_27476[(2)]);
var state_27476__$1 = state_27476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27476__$1,inst_27474);
} else {
if((state_val_27477 === (5))){
var inst_27441 = (state_27476[(13)]);
var inst_27448 = (state_27476[(2)]);
var inst_27449 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_27441);
var inst_27450 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27451 = [false];
var inst_27452 = cljs.core.PersistentHashMap.fromArrays(inst_27450,inst_27451);
var inst_27453 = cljs_http.client.get.call(null,inst_27449,inst_27452);
var state_27476__$1 = (function (){var statearr_27488 = state_27476;
(statearr_27488[(8)] = inst_27448);

return statearr_27488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27476__$1,(6),inst_27453);
} else {
if((state_val_27477 === (8))){
var inst_27472 = src_cb.call(null,null);
var state_27476__$1 = state_27476;
var statearr_27489_27501 = state_27476__$1;
(statearr_27489_27501[(2)] = inst_27472);

(statearr_27489_27501[(1)] = (9));


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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21022__auto____0 = (function (){
var statearr_27490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27490[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21022__auto__);

(statearr_27490[(1)] = (1));

return statearr_27490;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21022__auto____1 = (function (state_27476){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_27476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e27491){if((e27491 instanceof Object)){
var ex__21025__auto__ = e27491;
var statearr_27492_27502 = state_27476;
(statearr_27492_27502[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27503 = state_27476;
state_27476 = G__27503;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21022__auto__ = function(state_27476){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21022__auto____1.call(this,state_27476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_27493 = f__21189__auto__.call(null);
(statearr_27493[(6)] = c__21188__auto__);

return statearr_27493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_27543){
var state_val_27544 = (state_27543[(1)]);
if((state_val_27544 === (7))){
var state_27543__$1 = state_27543;
var statearr_27545_27567 = state_27543__$1;
(statearr_27545_27567[(2)] = false);

(statearr_27545_27567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (1))){
var inst_27505 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27506 = [false];
var inst_27507 = cljs.core.PersistentHashMap.fromArrays(inst_27505,inst_27506);
var inst_27508 = cljs_http.client.get.call(null,filename,inst_27507);
var state_27543__$1 = state_27543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27543__$1,(2),inst_27508);
} else {
if((state_val_27544 === (4))){
var state_27543__$1 = state_27543;
var statearr_27546_27568 = state_27543__$1;
(statearr_27546_27568[(2)] = false);

(statearr_27546_27568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (13))){
var inst_27539 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_27543__$1 = state_27543;
var statearr_27547_27569 = state_27543__$1;
(statearr_27547_27569[(2)] = inst_27539);

(statearr_27547_27569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (6))){
var state_27543__$1 = state_27543;
var statearr_27548_27570 = state_27543__$1;
(statearr_27548_27570[(2)] = true);

(statearr_27548_27570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (3))){
var inst_27510 = (state_27543[(7)]);
var inst_27515 = inst_27510.cljs$lang$protocol_mask$partition0$;
var inst_27516 = (inst_27515 & (64));
var inst_27517 = inst_27510.cljs$core$ISeq$;
var inst_27518 = (cljs.core.PROTOCOL_SENTINEL === inst_27517);
var inst_27519 = ((inst_27516) || (inst_27518));
var state_27543__$1 = state_27543;
if(cljs.core.truth_(inst_27519)){
var statearr_27549_27571 = state_27543__$1;
(statearr_27549_27571[(1)] = (6));

} else {
var statearr_27550_27572 = state_27543__$1;
(statearr_27550_27572[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (12))){
var inst_27532 = (state_27543[(8)]);
var inst_27536 = klipse_clj.lang.clojure.io.edn.call(null,inst_27532);
var inst_27537 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_27536);
var state_27543__$1 = state_27543;
var statearr_27551_27573 = state_27543__$1;
(statearr_27551_27573[(2)] = inst_27537);

(statearr_27551_27573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (2))){
var inst_27510 = (state_27543[(7)]);
var inst_27510__$1 = (state_27543[(2)]);
var inst_27512 = (inst_27510__$1 == null);
var inst_27513 = cljs.core.not.call(null,inst_27512);
var state_27543__$1 = (function (){var statearr_27552 = state_27543;
(statearr_27552[(7)] = inst_27510__$1);

return statearr_27552;
})();
if(inst_27513){
var statearr_27553_27574 = state_27543__$1;
(statearr_27553_27574[(1)] = (3));

} else {
var statearr_27554_27575 = state_27543__$1;
(statearr_27554_27575[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (11))){
var inst_27531 = (state_27543[(2)]);
var inst_27532 = cljs.core.get.call(null,inst_27531,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_27533 = cljs.core.get.call(null,inst_27531,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_27534 = cljs.core._EQ_.call(null,(200),inst_27533);
var state_27543__$1 = (function (){var statearr_27555 = state_27543;
(statearr_27555[(8)] = inst_27532);

return statearr_27555;
})();
if(inst_27534){
var statearr_27556_27576 = state_27543__$1;
(statearr_27556_27576[(1)] = (12));

} else {
var statearr_27557_27577 = state_27543__$1;
(statearr_27557_27577[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (9))){
var inst_27510 = (state_27543[(7)]);
var inst_27528 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27510);
var state_27543__$1 = state_27543;
var statearr_27558_27578 = state_27543__$1;
(statearr_27558_27578[(2)] = inst_27528);

(statearr_27558_27578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (5))){
var inst_27526 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
if(cljs.core.truth_(inst_27526)){
var statearr_27559_27579 = state_27543__$1;
(statearr_27559_27579[(1)] = (9));

} else {
var statearr_27560_27580 = state_27543__$1;
(statearr_27560_27580[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (14))){
var inst_27541 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27543__$1,inst_27541);
} else {
if((state_val_27544 === (10))){
var inst_27510 = (state_27543[(7)]);
var state_27543__$1 = state_27543;
var statearr_27561_27581 = state_27543__$1;
(statearr_27561_27581[(2)] = inst_27510);

(statearr_27561_27581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (8))){
var inst_27523 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27562_27582 = state_27543__$1;
(statearr_27562_27582[(2)] = inst_27523);

(statearr_27562_27582[(1)] = (5));


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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21022__auto____0 = (function (){
var statearr_27563 = [null,null,null,null,null,null,null,null,null];
(statearr_27563[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21022__auto__);

(statearr_27563[(1)] = (1));

return statearr_27563;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21022__auto____1 = (function (state_27543){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_27543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e27564){if((e27564 instanceof Object)){
var ex__21025__auto__ = e27564;
var statearr_27565_27583 = state_27543;
(statearr_27565_27583[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27584 = state_27543;
state_27543 = G__27584;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21022__auto__ = function(state_27543){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21022__auto____1.call(this,state_27543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21022__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21022__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_27566 = f__21189__auto__.call(null);
(statearr_27566[(6)] = c__21188__auto__);

return statearr_27566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse_clj.lang.clojure.io.cached_macro_ns_regexp = (function klipse_clj$lang$clojure$io$cached_macro_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_macro_ns_regexp","clojure_cached_macro_ns_regexp",-771780299).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/cljs.core.specs.alpha|klipse-clj\..*|klipse-clj\.repl|cljs\.reader|cljs\.core\.[async|match].*|clojure\.math\.macros|gadjett\.core|cljs\.test|cljs.tools.reader.*|clojure.test.check.*|reagent\..*|om\..*|cljs\.spec.*|cljs-time\..*|re-frame\..*|net\.cgrand\.macrovich|reagent-forms\..*|ajax\.macros|poppea|expound\..*/);
});
klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_macro_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_macro_ns_regexp.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
klipse_clj.lang.clojure.io.cached_ns_regexp = (function klipse_clj$lang$clojure$io$cached_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_ns_regexp","clojure_cached_ns_regexp",-1735711110).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/cljs.core.specs.alpha|cljs\.stacktrace|cljs\.core\.[async|match].*|cljs\.spec.*|clojure.math\.combinatorics|clojure.test.check.*|reagent\..*|om\..*|clojure\.data|cljs.tools.reader.*|cljs-time\..*|re-frame\..*|day8\.re-frame\..*|reagent-forms\..*|re-frisk\..*|re-frisk-shell\..*|datafrisk\..*|ajax\..*|cljs\.tools\.reader\..*|expound\..*/);
});
klipse_clj.lang.clojure.io.cached_cljs_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_cljs_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_ns_regexp.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__27585,src_cb_original){
var map__27586 = p__27585;
var map__27586__$1 = (((((!((map__27586 == null))))?(((((map__27586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27586):map__27586);
var name = cljs.core.get.call(null,map__27586__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__27586__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__27586,map__27586__$1,name,path){
return (function() { 
var G__27588__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__27588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27589__i = 0, G__27589__a = new Array(arguments.length -  0);
while (G__27589__i < G__27589__a.length) {G__27589__a[G__27589__i] = arguments[G__27589__i + 0]; ++G__27589__i;}
  args = new cljs.core.IndexedSeq(G__27589__a,0,null);
} 
return G__27588__delegate.call(this,args);};
G__27588.cljs$lang$maxFixedArity = 0;
G__27588.cljs$lang$applyTo = (function (arglist__27590){
var args = cljs.core.seq(arglist__27590);
return G__27588__delegate(args);
});
G__27588.cljs$core$IFn$_invoke$arity$variadic = G__27588__delegate;
return G__27588;
})()
;})(map__27586,map__27586__$1,name,path))
);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.skip_ns_macros.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro skipping:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro cached:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return klipse_clj.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,true);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.the_ns_map.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro known:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.the_ns_map.call(null,name)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var filenames = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,prefix),klipse_clj.lang.clojure.io.macro_suffixes);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
} else {
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro external-libs:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.macro_suffixes,path);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}
}
}));
klipse_clj.lang.clojure.io.bundled_ns_root = (function klipse_clj$lang$clojure$io$bundled_ns_root(){
return new cljs.core.Keyword(null,"bundled_ns_root","bundled_ns_root",205057992).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,"https://viebel.github.io/klipse-clj/target/public/cljs-out/dev/");
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__27592,src_cb){
var map__27593 = p__27592;
var map__27593__$1 = (((((!((map__27593 == null))))?(((((map__27593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27593):map__27593);
var path = cljs.core.get.call(null,map__27593__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__27593,map__27593__$1,path){
return (function (p1__27591_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27591_SHARP_)].join('');
});})(path__$1,map__27593,map__27593__$1,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}));
klipse_clj.lang.clojure.io.bundled_ns_ignore_regexp = (function klipse_clj$lang$clojure$io$bundled_ns_ignore_regexp(){
return new cljs.core.Keyword(null,"clojure_bundled_ns_ignore_regexp","clojure_bundled_ns_ignore_regexp",-1479622333).cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_);
});
klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_ = (function klipse_clj$lang$clojure$io$custom_bundled_ns_ignore_QMARK_(name){
var temp__5720__auto__ = klipse_clj.lang.clojure.io.bundled_ns_ignore_regexp.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var regexp = temp__5720__auto__;
return cljs.core.re_matches.call(null,regexp,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
return null;
}
});
klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_ = (function klipse_clj$lang$clojure$io$buggy_bundled_ns_ignore_QMARK_(name){
return cljs.core.re_matches.call(null,/.*reagent.*|cljs.core.async.*|cljs.core.specs.alpha/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
/**
 * Checks whether a namespace is present at run-time
 */
klipse_clj.lang.clojure.io.bundled_ns_QMARK_ = (function klipse_clj$lang$clojure$io$bundled_ns_QMARK_(name){
if(cljs.core.truth_((function (){var or__4131__auto__ = klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_.call(null,name);
}
})())){
return false;
} else {
return (!(((function (){var obj__26008__auto__ = goog;
var f__26009__auto__ = (function (){var obj27595 = obj__26008__auto__;
var k27596 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj27595,k27596)){
return (obj27595[k27596]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)));
})() == null)));
}
});
klipse_clj.lang.clojure.io.cljsjs_QMARK_ = (function klipse_clj$lang$clojure$io$cljsjs_QMARK_(name){
return cljs.core.re_matches.call(null,/cljsjs\..*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
klipse_clj.lang.clojure.io.cljsjs_libname = (function klipse_clj$lang$clojure$io$cljsjs_libname(name){
var $ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(name);
var $__$1 = cljs.core.re_matches.call(null,/cljsjs\.(.*)/,$);
var $__$2 = cljs.core.second.call(null,$__$1);
return clojure.string.replace.call(null,$__$2,/\./,"-");
});
/**
 * some cljsjs packages are already loaded e.g react in klipse app
 */
klipse_clj.lang.clojure.io.bundled_cljsjs_ns_QMARK_ = (function klipse_clj$lang$clojure$io$bundled_cljsjs_ns_QMARK_(name){
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__4120__auto__){
var obj27603 = window;
var k27604 = "React";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj27603,k27604)){
return (obj27603[k27604]);
} else {
return null;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__4120__auto__){
var obj27611 = window;
var k27612 = "ReactDOMServer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj27611,k27612)){
return (obj27611[k27612]);
} else {
return null;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__4120__auto__){
var obj27615 = window;
var k27616 = "ReactDOM";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj27615,k27616)){
return (obj27615[k27616]);
} else {
return null;
}
} else {
return and__4120__auto__;
}
}
}
});
/**
 * Try to load the js file corresponding to a cljsjs package.
 *   For that, we have to convert the package name into a full path - hosted on this git repo: https://github.com/viebel/cljsjs-hosted
 *   
 */
klipse_clj.lang.clojure.io.try_to_load_cljsjs_ns = (function klipse_clj$lang$clojure$io$try_to_load_cljsjs_ns(name,src_cb){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.log("load-ns :cljs try-to-load-cljsjs-ns",name);
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.bundled_cljsjs_ns_QMARK_.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns bundled-cljsjs-ns",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var root_path = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null),"null",new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null),"null",new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null),"null"], null), null).call(null,name))?"https://viebel.github.io/cljsjs-hosted/cljsjs-klipse-only/":"https://viebel.github.io/cljsjs-hosted/cljsjs/");
var lib_name = klipse_clj.lang.clojure.io.cljsjs_libname.call(null,name);
var full_names = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[root_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[root_path,"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[root_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join(''),[root_path,"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join('')], null);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,full_names,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__27618,src_cb){
var map__27619 = p__27618;
var map__27619__$1 = (((((!((map__27619 == null))))?(((((map__27619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27619):map__27619);
var name = cljs.core.get.call(null,map__27619__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__27619__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"external-libs: ",external_libs);
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.skip_ns_cljs.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs skipping",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(klipse_clj.lang.clojure.io.bundled_ns_QMARK_.call(null,name)){
var _ = ((klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)?console.log("load-ns :cljs bundled",name):null);
var filenames = cljs.core.map.call(null,((function (_,map__27619,map__27619__$1,name,path){
return (function (p1__27617_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27617_SHARP_),".cache.json"].join('');
});})(_,map__27619,map__27619__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,_,filenames,map__27619,map__27619__$1,name,path){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,_,filenames,map__27619,map__27619__$1,name,path){
return (function (state_27633){
var state_val_27634 = (state_27633[(1)]);
if((state_val_27634 === (1))){
var inst_27621 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_27633__$1 = state_27633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27633__$1,(2),inst_27621);
} else {
if((state_val_27634 === (2))){
var inst_27623 = (state_27633[(2)]);
var state_27633__$1 = state_27633;
if(cljs.core.truth_(inst_27623)){
var statearr_27635_27686 = state_27633__$1;
(statearr_27635_27686[(1)] = (3));

} else {
var statearr_27636_27687 = state_27633__$1;
(statearr_27636_27687[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (3))){
var state_27633__$1 = state_27633;
var statearr_27637_27688 = state_27633__$1;
(statearr_27637_27688[(2)] = null);

(statearr_27637_27688[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (4))){
var inst_27626 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_27627 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_27628 = cljs.core.PersistentHashMap.fromArrays(inst_27626,inst_27627);
var inst_27629 = src_cb.call(null,inst_27628);
var state_27633__$1 = state_27633;
var statearr_27638_27689 = state_27633__$1;
(statearr_27638_27689[(2)] = inst_27629);

(statearr_27638_27689[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (5))){
var inst_27631 = (state_27633[(2)]);
var state_27633__$1 = state_27633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27633__$1,inst_27631);
} else {
return null;
}
}
}
}
}
});})(c__21188__auto__,_,filenames,map__27619,map__27619__$1,name,path))
;
return ((function (switch__21021__auto__,c__21188__auto__,_,filenames,map__27619,map__27619__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__21022__auto____0 = (function (){
var statearr_27639 = [null,null,null,null,null,null,null];
(statearr_27639[(0)] = klipse_clj$lang$clojure$io$state_machine__21022__auto__);

(statearr_27639[(1)] = (1));

return statearr_27639;
});
var klipse_clj$lang$clojure$io$state_machine__21022__auto____1 = (function (state_27633){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_27633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e27640){if((e27640 instanceof Object)){
var ex__21025__auto__ = e27640;
var statearr_27641_27690 = state_27633;
(statearr_27641_27690[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27691 = state_27633;
state_27633 = G__27691;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__21022__auto__ = function(state_27633){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__21022__auto____1.call(this,state_27633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__21022__auto____0;
klipse_clj$lang$clojure$io$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__21022__auto____1;
return klipse_clj$lang$clojure$io$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,_,filenames,map__27619,map__27619__$1,name,path))
})();
var state__21190__auto__ = (function (){var statearr_27642 = f__21189__auto__.call(null);
(statearr_27642[(6)] = c__21188__auto__);

return statearr_27642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,_,filenames,map__27619,map__27619__$1,name,path))
);

return c__21188__auto__;
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.cached_cljs_ns_QMARK_.call(null,name))){
return klipse_clj.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,false);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.cljsjs_QMARK_.call(null,name))){
return klipse_clj.lang.clojure.io.try_to_load_cljsjs_ns.call(null,name,src_cb);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.the_ns_map.call(null,name))){
var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.the_ns_map.call(null,name)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var filenames = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,prefix),klipse_clj.lang.clojure.io.cljs_suffixes);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs from external libs",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,prefix,filenames,map__27619,map__27619__$1,name,path){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,prefix,filenames,map__27619,map__27619__$1,name,path){
return (function (state_27653){
var state_val_27654 = (state_27653[(1)]);
if((state_val_27654 === (1))){
var inst_27643 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27653__$1,(2),inst_27643);
} else {
if((state_val_27654 === (2))){
var inst_27645 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
if(cljs.core.truth_(inst_27645)){
var statearr_27655_27692 = state_27653__$1;
(statearr_27655_27692[(1)] = (3));

} else {
var statearr_27656_27693 = state_27653__$1;
(statearr_27656_27693[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (3))){
var state_27653__$1 = state_27653;
var statearr_27657_27694 = state_27653__$1;
(statearr_27657_27694[(2)] = null);

(statearr_27657_27694[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (4))){
var inst_27648 = [prefix,".js"].join('');
var inst_27649 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_27648,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_27653__$1 = state_27653;
var statearr_27658_27695 = state_27653__$1;
(statearr_27658_27695[(2)] = inst_27649);

(statearr_27658_27695[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (5))){
var inst_27651 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27653__$1,inst_27651);
} else {
return null;
}
}
}
}
}
});})(c__21188__auto__,prefix,filenames,map__27619,map__27619__$1,name,path))
;
return ((function (switch__21021__auto__,c__21188__auto__,prefix,filenames,map__27619,map__27619__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__21022__auto____0 = (function (){
var statearr_27659 = [null,null,null,null,null,null,null];
(statearr_27659[(0)] = klipse_clj$lang$clojure$io$state_machine__21022__auto__);

(statearr_27659[(1)] = (1));

return statearr_27659;
});
var klipse_clj$lang$clojure$io$state_machine__21022__auto____1 = (function (state_27653){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_27653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e27660){if((e27660 instanceof Object)){
var ex__21025__auto__ = e27660;
var statearr_27661_27696 = state_27653;
(statearr_27661_27696[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27697 = state_27653;
state_27653 = G__27697;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__21022__auto__ = function(state_27653){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__21022__auto____1.call(this,state_27653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__21022__auto____0;
klipse_clj$lang$clojure$io$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__21022__auto____1;
return klipse_clj$lang$clojure$io$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,prefix,filenames,map__27619,map__27619__$1,name,path))
})();
var state__21190__auto__ = (function (){var statearr_27662 = f__21189__auto__.call(null);
(statearr_27662[(6)] = c__21188__auto__);

return statearr_27662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,prefix,filenames,map__27619,map__27619__$1,name,path))
);

return c__21188__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,filenames,map__27619,map__27619__$1,name,path){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,filenames,map__27619,map__27619__$1,name,path){
return (function (state_27676){
var state_val_27677 = (state_27676[(1)]);
if((state_val_27677 === (1))){
var inst_27663 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27676__$1,(2),inst_27663);
} else {
if((state_val_27677 === (2))){
var inst_27665 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
if(cljs.core.truth_(inst_27665)){
var statearr_27678_27698 = state_27676__$1;
(statearr_27678_27698[(1)] = (3));

} else {
var statearr_27679_27699 = state_27676__$1;
(statearr_27679_27699[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (3))){
var state_27676__$1 = state_27676;
var statearr_27680_27700 = state_27676__$1;
(statearr_27680_27700[(2)] = null);

(statearr_27680_27700[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (4))){
var inst_27668 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27669 = [".js"];
var inst_27670 = (new cljs.core.PersistentVector(null,1,(5),inst_27668,inst_27669,null));
var inst_27671 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_27670,path);
var inst_27672 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_27671,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_27676__$1 = state_27676;
var statearr_27681_27701 = state_27676__$1;
(statearr_27681_27701[(2)] = inst_27672);

(statearr_27681_27701[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (5))){
var inst_27674 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27676__$1,inst_27674);
} else {
return null;
}
}
}
}
}
});})(c__21188__auto__,filenames,map__27619,map__27619__$1,name,path))
;
return ((function (switch__21021__auto__,c__21188__auto__,filenames,map__27619,map__27619__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__21022__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__21022__auto____0 = (function (){
var statearr_27682 = [null,null,null,null,null,null,null];
(statearr_27682[(0)] = klipse_clj$lang$clojure$io$state_machine__21022__auto__);

(statearr_27682[(1)] = (1));

return statearr_27682;
});
var klipse_clj$lang$clojure$io$state_machine__21022__auto____1 = (function (state_27676){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_27676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e27683){if((e27683 instanceof Object)){
var ex__21025__auto__ = e27683;
var statearr_27684_27702 = state_27676;
(statearr_27684_27702[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27703 = state_27676;
state_27676 = G__27703;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__21022__auto__ = function(state_27676){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__21022__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__21022__auto____1.call(this,state_27676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__21022__auto____0;
klipse_clj$lang$clojure$io$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__21022__auto____1;
return klipse_clj$lang$clojure$io$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,filenames,map__27619,map__27619__$1,name,path))
})();
var state__21190__auto__ = (function (){var statearr_27685 = f__21189__auto__.call(null);
(statearr_27685[(6)] = c__21188__auto__);

return statearr_27685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,filenames,map__27619,map__27619__$1,name,path))
);

return c__21188__auto__;
} else {
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs nothing can be done",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,null);

}
}
}
}
}
}
}));
klipse_clj.lang.clojure.io.fix_goog_path = (function klipse_clj$lang$clojure$io$fix_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),((cljs.core._EQ_.call(null,last_part,clojure.string.lower_case.call(null,last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,last_part)], null)));
return clojure.string.join.call(null,"/",new_parts);
});
klipse_clj.lang.clojure.io.simple_goog_path = (function klipse_clj$lang$clojure$io$simple_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var butlast_parts = cljs.core.butlast.call(null,parts);
var new_parts = cljs.core.concat.call(null,butlast_parts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,butlast_parts)], null));
return clojure.string.join.call(null,"/",new_parts);
});
klipse_clj.lang.clojure.io.another_goog_path = (function klipse_clj$lang$clojure$io$another_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,"",cljs.core.take_last.call(null,(2),parts))], null));
return clojure.string.join.call(null,"/",new_parts);
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__27705,src_cb){
var map__27706 = p__27705;
var map__27706__$1 = (((((!((map__27706 == null))))?(((((map__27706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27706):map__27706);
var name = cljs.core.get.call(null,map__27706__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__27706__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj__26008__auto__ = goog;
var f__26009__auto__ = (function (){var obj27708 = obj__26008__auto__;
var k27709 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj27708,k27709)){
return (obj27708[k27709]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__27706,map__27706__$1,name,path){
return (function (p1__27704_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27704_SHARP_),".js"].join('');
});})(closure_github_path,map__27706,map__27706__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
