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
return (function (_,p__19191,src_cb){
var map__19192 = p__19191;
var map__19192__$1 = (((((!((map__19192 == null))))?(((((map__19192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19192):map__19192);
var name = cljs.core.get.call(null,map__19192__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__19192__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__19192__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var len__4730__auto___19308 = arguments.length;
var i__4731__auto___19309 = (0);
while(true){
if((i__4731__auto___19309 < len__4730__auto___19308)){
args__4736__auto__.push((arguments[i__4731__auto___19309]));

var G__19310 = (i__4731__auto___19309 + (1));
i__4731__auto___19309 = G__19310;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__19199){
var map__19200 = p__19199;
var map__19200__$1 = (((((!((map__19200 == null))))?(((((map__19200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19200):map__19200);
var transform = cljs.core.get.call(null,map__19200__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__19200__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,map__19200,map__19200__$1,transform,can_recover_QMARK_){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,map__19200,map__19200__$1,transform,can_recover_QMARK_){
return (function (state_19265){
var state_val_19266 = (state_19265[(1)]);
if((state_val_19266 === (7))){
var inst_19214 = (state_19265[(7)]);
var inst_19214__$1 = (state_19265[(2)]);
var inst_19216 = (inst_19214__$1 == null);
var inst_19217 = cljs.core.not.call(null,inst_19216);
var state_19265__$1 = (function (){var statearr_19267 = state_19265;
(statearr_19267[(7)] = inst_19214__$1);

return statearr_19267;
})();
if(inst_19217){
var statearr_19268_19311 = state_19265__$1;
(statearr_19268_19311[(1)] = (8));

} else {
var statearr_19269_19312 = state_19265__$1;
(statearr_19269_19312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (20))){
var state_19265__$1 = state_19265;
var statearr_19270_19313 = state_19265__$1;
(statearr_19270_19313[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_19270_19313[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (1))){
var inst_19202 = filenames;
var state_19265__$1 = (function (){var statearr_19271 = state_19265;
(statearr_19271[(8)] = inst_19202);

return statearr_19271;
})();
var statearr_19272_19314 = state_19265__$1;
(statearr_19272_19314[(2)] = null);

(statearr_19272_19314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (24))){
var inst_19259 = src_cb.call(null,null);
var state_19265__$1 = state_19265;
var statearr_19273_19315 = state_19265__$1;
(statearr_19273_19315[(2)] = inst_19259);

(statearr_19273_19315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (4))){
var inst_19207 = (state_19265[(9)]);
var inst_19202 = (state_19265[(8)]);
var inst_19207__$1 = cljs.core.first.call(null,inst_19202);
var inst_19208 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_19207__$1);
var inst_19209 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_19210 = [false];
var inst_19211 = cljs.core.PersistentHashMap.fromArrays(inst_19209,inst_19210);
var inst_19212 = cljs_http.client.get.call(null,inst_19208,inst_19211);
var state_19265__$1 = (function (){var statearr_19274 = state_19265;
(statearr_19274[(9)] = inst_19207__$1);

return statearr_19274;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19265__$1,(7),inst_19212);
} else {
if((state_val_19266 === (15))){
var inst_19214 = (state_19265[(7)]);
var state_19265__$1 = state_19265;
var statearr_19275_19316 = state_19265__$1;
(statearr_19275_19316[(2)] = inst_19214);

(statearr_19275_19316[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (21))){
var state_19265__$1 = state_19265;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_19276_19317 = state_19265__$1;
(statearr_19276_19317[(1)] = (23));

} else {
var statearr_19277_19318 = state_19265__$1;
(statearr_19277_19318[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (13))){
var inst_19227 = (state_19265[(2)]);
var state_19265__$1 = state_19265;
var statearr_19278_19319 = state_19265__$1;
(statearr_19278_19319[(2)] = inst_19227);

(statearr_19278_19319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (22))){
var inst_19263 = (state_19265[(2)]);
var state_19265__$1 = state_19265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19265__$1,inst_19263);
} else {
if((state_val_19266 === (6))){
var inst_19252 = (state_19265[(2)]);
var state_19265__$1 = state_19265;
var statearr_19279_19320 = state_19265__$1;
(statearr_19279_19320[(2)] = inst_19252);

(statearr_19279_19320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (25))){
var inst_19261 = (state_19265[(2)]);
var state_19265__$1 = (function (){var statearr_19280 = state_19265;
(statearr_19280[(10)] = inst_19261);

return statearr_19280;
})();
var statearr_19281_19321 = state_19265__$1;
(statearr_19281_19321[(2)] = false);

(statearr_19281_19321[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (17))){
var inst_19237 = (state_19265[(11)]);
var inst_19207 = (state_19265[(9)]);
var inst_19240 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_19241 = transform.call(null,inst_19237);
var inst_19242 = [lang,inst_19241,inst_19207];
var inst_19243 = cljs.core.PersistentHashMap.fromArrays(inst_19240,inst_19242);
var inst_19244 = src_cb.call(null,inst_19243);
var state_19265__$1 = (function (){var statearr_19282 = state_19265;
(statearr_19282[(12)] = inst_19244);

return statearr_19282;
})();
var statearr_19283_19322 = state_19265__$1;
(statearr_19283_19322[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_19283_19322[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (3))){
var inst_19254 = (state_19265[(2)]);
var state_19265__$1 = state_19265;
if(cljs.core.truth_(inst_19254)){
var statearr_19284_19323 = state_19265__$1;
(statearr_19284_19323[(1)] = (20));

} else {
var statearr_19285_19324 = state_19265__$1;
(statearr_19285_19324[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (12))){
var state_19265__$1 = state_19265;
var statearr_19286_19325 = state_19265__$1;
(statearr_19286_19325[(2)] = false);

(statearr_19286_19325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (2))){
var inst_19202 = (state_19265[(8)]);
var inst_19204 = cljs.core.seq.call(null,inst_19202);
var state_19265__$1 = state_19265;
if(inst_19204){
var statearr_19287_19326 = state_19265__$1;
(statearr_19287_19326[(1)] = (4));

} else {
var statearr_19288_19327 = state_19265__$1;
(statearr_19288_19327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (23))){
var state_19265__$1 = state_19265;
var statearr_19289_19328 = state_19265__$1;
(statearr_19289_19328[(2)] = null);

(statearr_19289_19328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (19))){
var inst_19249 = (state_19265[(2)]);
var state_19265__$1 = state_19265;
var statearr_19290_19329 = state_19265__$1;
(statearr_19290_19329[(2)] = inst_19249);

(statearr_19290_19329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (11))){
var state_19265__$1 = state_19265;
var statearr_19291_19330 = state_19265__$1;
(statearr_19291_19330[(2)] = true);

(statearr_19291_19330[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (9))){
var state_19265__$1 = state_19265;
var statearr_19292_19331 = state_19265__$1;
(statearr_19292_19331[(2)] = false);

(statearr_19292_19331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (5))){
var state_19265__$1 = state_19265;
var statearr_19293_19332 = state_19265__$1;
(statearr_19293_19332[(2)] = null);

(statearr_19293_19332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (14))){
var inst_19214 = (state_19265[(7)]);
var inst_19232 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19214);
var state_19265__$1 = state_19265;
var statearr_19294_19333 = state_19265__$1;
(statearr_19294_19333[(2)] = inst_19232);

(statearr_19294_19333[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (16))){
var inst_19235 = (state_19265[(2)]);
var inst_19236 = cljs.core.get.call(null,inst_19235,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_19237 = cljs.core.get.call(null,inst_19235,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_19238 = cljs.core._EQ_.call(null,(200),inst_19236);
var state_19265__$1 = (function (){var statearr_19295 = state_19265;
(statearr_19295[(11)] = inst_19237);

return statearr_19295;
})();
if(inst_19238){
var statearr_19296_19334 = state_19265__$1;
(statearr_19296_19334[(1)] = (17));

} else {
var statearr_19297_19335 = state_19265__$1;
(statearr_19297_19335[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (10))){
var inst_19230 = (state_19265[(2)]);
var state_19265__$1 = state_19265;
if(cljs.core.truth_(inst_19230)){
var statearr_19298_19336 = state_19265__$1;
(statearr_19298_19336[(1)] = (14));

} else {
var statearr_19299_19337 = state_19265__$1;
(statearr_19299_19337[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (18))){
var inst_19202 = (state_19265[(8)]);
var inst_19246 = cljs.core.rest.call(null,inst_19202);
var inst_19202__$1 = inst_19246;
var state_19265__$1 = (function (){var statearr_19300 = state_19265;
(statearr_19300[(8)] = inst_19202__$1);

return statearr_19300;
})();
var statearr_19301_19338 = state_19265__$1;
(statearr_19301_19338[(2)] = null);

(statearr_19301_19338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19266 === (8))){
var inst_19214 = (state_19265[(7)]);
var inst_19219 = inst_19214.cljs$lang$protocol_mask$partition0$;
var inst_19220 = (inst_19219 & (64));
var inst_19221 = inst_19214.cljs$core$ISeq$;
var inst_19222 = (cljs.core.PROTOCOL_SENTINEL === inst_19221);
var inst_19223 = ((inst_19220) || (inst_19222));
var state_19265__$1 = state_19265;
if(cljs.core.truth_(inst_19223)){
var statearr_19302_19339 = state_19265__$1;
(statearr_19302_19339[(1)] = (11));

} else {
var statearr_19303_19340 = state_19265__$1;
(statearr_19303_19340[(1)] = (12));

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
});})(c__16038__auto__,map__19200,map__19200__$1,transform,can_recover_QMARK_))
;
return ((function (switch__15943__auto__,c__16038__auto__,map__19200,map__19200__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15944__auto____0 = (function (){
var statearr_19304 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19304[(0)] = klipse_clj$lang$clojure$io$state_machine__15944__auto__);

(statearr_19304[(1)] = (1));

return statearr_19304;
});
var klipse_clj$lang$clojure$io$state_machine__15944__auto____1 = (function (state_19265){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19305){if((e19305 instanceof Object)){
var ex__15947__auto__ = e19305;
var statearr_19306_19341 = state_19265;
(statearr_19306_19341[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19342 = state_19265;
state_19265 = G__19342;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15944__auto__ = function(state_19265){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15944__auto____1.call(this,state_19265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15944__auto____0;
klipse_clj$lang$clojure$io$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15944__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,map__19200,map__19200__$1,transform,can_recover_QMARK_))
})();
var state__16040__auto__ = (function (){var statearr_19307 = f__16039__auto__.call(null);
(statearr_19307[(6)] = c__16038__auto__);

return statearr_19307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,map__19200,map__19200__$1,transform,can_recover_QMARK_))
);

return c__16038__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq19194){
var G__19195 = cljs.core.first.call(null,seq19194);
var seq19194__$1 = cljs.core.next.call(null,seq19194);
var G__19196 = cljs.core.first.call(null,seq19194__$1);
var seq19194__$2 = cljs.core.next.call(null,seq19194__$1);
var G__19197 = cljs.core.first.call(null,seq19194__$2);
var seq19194__$3 = cljs.core.next.call(null,seq19194__$2);
var G__19198 = cljs.core.first.call(null,seq19194__$3);
var seq19194__$4 = cljs.core.next.call(null,seq19194__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19195,G__19196,G__19197,G__19198,seq19194__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4523__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__19343(s__19344){
return (new cljs.core.LazySeq(null,(function (){
var s__19344__$1 = s__19344;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19344__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var lib = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__19344__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__19343_$_iter__19345(s__19346){
return (new cljs.core.LazySeq(null,((function (s__19344__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__19346__$1 = s__19346;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__19346__$1);
if(temp__5720__auto____$1){
var s__19346__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19346__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19346__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19348 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19347 = (0);
while(true){
if((i__19347 < size__4522__auto__)){
var suffix = cljs.core._nth.call(null,c__4521__auto__,i__19347);
cljs.core.chunk_append.call(null,b__19348,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__19349 = (i__19347 + (1));
i__19347 = G__19349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19348),klipse_clj$lang$clojure$io$external_libs_files_$_iter__19343_$_iter__19345.call(null,cljs.core.chunk_rest.call(null,s__19346__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19348),null);
}
} else {
var suffix = cljs.core.first.call(null,s__19346__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__19343_$_iter__19345.call(null,cljs.core.rest.call(null,s__19346__$2)));
}
} else {
return null;
}
break;
}
});})(s__19344__$1,lib,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__19344__$1,lib,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,suffixes));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__19343.call(null,cljs.core.rest.call(null,s__19344__$1)));
} else {
var G__19350 = cljs.core.rest.call(null,s__19344__$1);
s__19344__$1 = G__19350;
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

var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_19395){
var state_val_19396 = (state_19395[(1)]);
if((state_val_19396 === (7))){
var inst_19374 = (state_19395[(7)]);
var inst_19367 = (state_19395[(8)]);
var inst_19383 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_19384 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19374);
var inst_19385 = klipse_clj.lang.clojure.io.edn.call(null,inst_19384);
var inst_19386 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19367);
var inst_19387 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_19385,inst_19386];
var inst_19388 = cljs.core.PersistentHashMap.fromArrays(inst_19383,inst_19387);
var inst_19389 = src_cb.call(null,inst_19388);
var state_19395__$1 = state_19395;
var statearr_19397_19413 = state_19395__$1;
(statearr_19397_19413[(2)] = inst_19389);

(statearr_19397_19413[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (1))){
var inst_19352 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_19395__$1 = (function (){var statearr_19398 = state_19395;
(statearr_19398[(9)] = inst_19352);

return statearr_19398;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_19399_19414 = state_19395__$1;
(statearr_19399_19414[(1)] = (2));

} else {
var statearr_19400_19415 = state_19395__$1;
(statearr_19400_19415[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (4))){
var inst_19359 = (state_19395[(10)]);
var inst_19356 = (state_19395[(11)]);
var inst_19352 = (state_19395[(9)]);
var inst_19358 = (state_19395[(12)]);
var inst_19356__$1 = (state_19395[(2)]);
var inst_19357 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_19358__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19357),"/"].join('');
var inst_19359__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19358__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19352),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19356__$1),".js"].join('');
var inst_19360 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19358__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19352),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19356__$1),".cache.json"].join('');
var inst_19361 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_19359__$1);
var inst_19362 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_19363 = [false];
var inst_19364 = cljs.core.PersistentHashMap.fromArrays(inst_19362,inst_19363);
var inst_19365 = cljs_http.client.get.call(null,inst_19361,inst_19364);
var state_19395__$1 = (function (){var statearr_19401 = state_19395;
(statearr_19401[(10)] = inst_19359__$1);

(statearr_19401[(11)] = inst_19356__$1);

(statearr_19401[(13)] = inst_19360);

(statearr_19401[(12)] = inst_19358__$1);

return statearr_19401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19395__$1,(5),inst_19365);
} else {
if((state_val_19396 === (6))){
var inst_19359 = (state_19395[(10)]);
var inst_19374 = (state_19395[(7)]);
var inst_19356 = (state_19395[(11)]);
var inst_19367 = (state_19395[(8)]);
var inst_19352 = (state_19395[(9)]);
var inst_19360 = (state_19395[(13)]);
var inst_19358 = (state_19395[(12)]);
var inst_19374__$1 = (state_19395[(2)]);
var inst_19375 = (function (){var nn = inst_19352;
var suffix = inst_19356;
var root = inst_19358;
var src_filename = inst_19359;
var cache_filename = inst_19360;
var src = inst_19367;
var cache = inst_19374__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_19359,inst_19374,inst_19356,inst_19367,inst_19352,inst_19360,inst_19358,inst_19374__$1,state_val_19396,c__16038__auto__){
return (function (p1__19351_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__19351_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_19359,inst_19374,inst_19356,inst_19367,inst_19352,inst_19360,inst_19358,inst_19374__$1,state_val_19396,c__16038__auto__))
})();
var inst_19376 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19377 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_19374__$1);
var inst_19378 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_19367);
var inst_19379 = [inst_19377,inst_19378];
var inst_19380 = (new cljs.core.PersistentVector(null,2,(5),inst_19376,inst_19379,null));
var inst_19381 = cljs.core.every_QMARK_.call(null,inst_19375,inst_19380);
var state_19395__$1 = (function (){var statearr_19402 = state_19395;
(statearr_19402[(7)] = inst_19374__$1);

return statearr_19402;
})();
if(inst_19381){
var statearr_19403_19416 = state_19395__$1;
(statearr_19403_19416[(1)] = (7));

} else {
var statearr_19404_19417 = state_19395__$1;
(statearr_19404_19417[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (3))){
var state_19395__$1 = state_19395;
var statearr_19405_19418 = state_19395__$1;
(statearr_19405_19418[(2)] = "");

(statearr_19405_19418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (2))){
var state_19395__$1 = state_19395;
var statearr_19406_19419 = state_19395__$1;
(statearr_19406_19419[(2)] = "$macros");

(statearr_19406_19419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (9))){
var inst_19393 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19395__$1,inst_19393);
} else {
if((state_val_19396 === (5))){
var inst_19360 = (state_19395[(13)]);
var inst_19367 = (state_19395[(2)]);
var inst_19368 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_19360);
var inst_19369 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_19370 = [false];
var inst_19371 = cljs.core.PersistentHashMap.fromArrays(inst_19369,inst_19370);
var inst_19372 = cljs_http.client.get.call(null,inst_19368,inst_19371);
var state_19395__$1 = (function (){var statearr_19407 = state_19395;
(statearr_19407[(8)] = inst_19367);

return statearr_19407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19395__$1,(6),inst_19372);
} else {
if((state_val_19396 === (8))){
var inst_19391 = src_cb.call(null,null);
var state_19395__$1 = state_19395;
var statearr_19408_19420 = state_19395__$1;
(statearr_19408_19420[(2)] = inst_19391);

(statearr_19408_19420[(1)] = (9));


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
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15944__auto____0 = (function (){
var statearr_19409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19409[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15944__auto__);

(statearr_19409[(1)] = (1));

return statearr_19409;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15944__auto____1 = (function (state_19395){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19410){if((e19410 instanceof Object)){
var ex__15947__auto__ = e19410;
var statearr_19411_19421 = state_19395;
(statearr_19411_19421[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19422 = state_19395;
state_19395 = G__19422;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15944__auto__ = function(state_19395){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15944__auto____1.call(this,state_19395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_19412 = f__16039__auto__.call(null);
(statearr_19412[(6)] = c__16038__auto__);

return statearr_19412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_19462){
var state_val_19463 = (state_19462[(1)]);
if((state_val_19463 === (7))){
var state_19462__$1 = state_19462;
var statearr_19464_19486 = state_19462__$1;
(statearr_19464_19486[(2)] = false);

(statearr_19464_19486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19463 === (1))){
var inst_19424 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_19425 = [false];
var inst_19426 = cljs.core.PersistentHashMap.fromArrays(inst_19424,inst_19425);
var inst_19427 = cljs_http.client.get.call(null,filename,inst_19426);
var state_19462__$1 = state_19462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19462__$1,(2),inst_19427);
} else {
if((state_val_19463 === (4))){
var state_19462__$1 = state_19462;
var statearr_19465_19487 = state_19462__$1;
(statearr_19465_19487[(2)] = false);

(statearr_19465_19487[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19463 === (13))){
var inst_19458 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_19462__$1 = state_19462;
var statearr_19466_19488 = state_19462__$1;
(statearr_19466_19488[(2)] = inst_19458);

(statearr_19466_19488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19463 === (6))){
var state_19462__$1 = state_19462;
var statearr_19467_19489 = state_19462__$1;
(statearr_19467_19489[(2)] = true);

(statearr_19467_19489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19463 === (3))){
var inst_19429 = (state_19462[(7)]);
var inst_19434 = inst_19429.cljs$lang$protocol_mask$partition0$;
var inst_19435 = (inst_19434 & (64));
var inst_19436 = inst_19429.cljs$core$ISeq$;
var inst_19437 = (cljs.core.PROTOCOL_SENTINEL === inst_19436);
var inst_19438 = ((inst_19435) || (inst_19437));
var state_19462__$1 = state_19462;
if(cljs.core.truth_(inst_19438)){
var statearr_19468_19490 = state_19462__$1;
(statearr_19468_19490[(1)] = (6));

} else {
var statearr_19469_19491 = state_19462__$1;
(statearr_19469_19491[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19463 === (12))){
var inst_19451 = (state_19462[(8)]);
var inst_19455 = klipse_clj.lang.clojure.io.edn.call(null,inst_19451);
var inst_19456 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_19455);
var state_19462__$1 = state_19462;
var statearr_19470_19492 = state_19462__$1;
(statearr_19470_19492[(2)] = inst_19456);

(statearr_19470_19492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19463 === (2))){
var inst_19429 = (state_19462[(7)]);
var inst_19429__$1 = (state_19462[(2)]);
var inst_19431 = (inst_19429__$1 == null);
var inst_19432 = cljs.core.not.call(null,inst_19431);
var state_19462__$1 = (function (){var statearr_19471 = state_19462;
(statearr_19471[(7)] = inst_19429__$1);

return statearr_19471;
})();
if(inst_19432){
var statearr_19472_19493 = state_19462__$1;
(statearr_19472_19493[(1)] = (3));

} else {
var statearr_19473_19494 = state_19462__$1;
(statearr_19473_19494[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19463 === (11))){
var inst_19450 = (state_19462[(2)]);
var inst_19451 = cljs.core.get.call(null,inst_19450,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_19452 = cljs.core.get.call(null,inst_19450,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_19453 = cljs.core._EQ_.call(null,(200),inst_19452);
var state_19462__$1 = (function (){var statearr_19474 = state_19462;
(statearr_19474[(8)] = inst_19451);

return statearr_19474;
})();
if(inst_19453){
var statearr_19475_19495 = state_19462__$1;
(statearr_19475_19495[(1)] = (12));

} else {
var statearr_19476_19496 = state_19462__$1;
(statearr_19476_19496[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19463 === (9))){
var inst_19429 = (state_19462[(7)]);
var inst_19447 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19429);
var state_19462__$1 = state_19462;
var statearr_19477_19497 = state_19462__$1;
(statearr_19477_19497[(2)] = inst_19447);

(statearr_19477_19497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19463 === (5))){
var inst_19445 = (state_19462[(2)]);
var state_19462__$1 = state_19462;
if(cljs.core.truth_(inst_19445)){
var statearr_19478_19498 = state_19462__$1;
(statearr_19478_19498[(1)] = (9));

} else {
var statearr_19479_19499 = state_19462__$1;
(statearr_19479_19499[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19463 === (14))){
var inst_19460 = (state_19462[(2)]);
var state_19462__$1 = state_19462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19462__$1,inst_19460);
} else {
if((state_val_19463 === (10))){
var inst_19429 = (state_19462[(7)]);
var state_19462__$1 = state_19462;
var statearr_19480_19500 = state_19462__$1;
(statearr_19480_19500[(2)] = inst_19429);

(statearr_19480_19500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19463 === (8))){
var inst_19442 = (state_19462[(2)]);
var state_19462__$1 = state_19462;
var statearr_19481_19501 = state_19462__$1;
(statearr_19481_19501[(2)] = inst_19442);

(statearr_19481_19501[(1)] = (5));


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
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15944__auto____0 = (function (){
var statearr_19482 = [null,null,null,null,null,null,null,null,null];
(statearr_19482[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15944__auto__);

(statearr_19482[(1)] = (1));

return statearr_19482;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15944__auto____1 = (function (state_19462){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19483){if((e19483 instanceof Object)){
var ex__15947__auto__ = e19483;
var statearr_19484_19502 = state_19462;
(statearr_19484_19502[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19503 = state_19462;
state_19462 = G__19503;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15944__auto__ = function(state_19462){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15944__auto____1.call(this,state_19462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15944__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15944__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_19485 = f__16039__auto__.call(null);
(statearr_19485[(6)] = c__16038__auto__);

return statearr_19485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__19504,src_cb_original){
var map__19505 = p__19504;
var map__19505__$1 = (((((!((map__19505 == null))))?(((((map__19505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19505):map__19505);
var name = cljs.core.get.call(null,map__19505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__19505__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__19505,map__19505__$1,name,path){
return (function() { 
var G__19507__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__19507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19508__i = 0, G__19508__a = new Array(arguments.length -  0);
while (G__19508__i < G__19508__a.length) {G__19508__a[G__19508__i] = arguments[G__19508__i + 0]; ++G__19508__i;}
  args = new cljs.core.IndexedSeq(G__19508__a,0,null);
} 
return G__19507__delegate.call(this,args);};
G__19507.cljs$lang$maxFixedArity = 0;
G__19507.cljs$lang$applyTo = (function (arglist__19509){
var args = cljs.core.seq(arglist__19509);
return G__19507__delegate(args);
});
G__19507.cljs$core$IFn$_invoke$arity$variadic = G__19507__delegate;
return G__19507;
})()
;})(map__19505,map__19505__$1,name,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__19511,src_cb){
var map__19512 = p__19511;
var map__19512__$1 = (((((!((map__19512 == null))))?(((((map__19512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19512):map__19512);
var path = cljs.core.get.call(null,map__19512__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__19512,map__19512__$1,path){
return (function (p1__19510_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19510_SHARP_)].join('');
});})(path__$1,map__19512,map__19512__$1,path))
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
return (!(((function (){var obj__18568__auto__ = goog;
var f__18569__auto__ = (function (){var obj19514 = obj__18568__auto__;
var k19515 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19514,k19515)){
return (obj19514[k19515]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)));
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
var obj19522 = window;
var k19523 = "React";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19522,k19523)){
return (obj19522[k19523]);
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
var obj19530 = window;
var k19531 = "ReactDOMServer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19530,k19531)){
return (obj19530[k19531]);
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
var obj19534 = window;
var k19535 = "ReactDOM";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19534,k19535)){
return (obj19534[k19535]);
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__19537,src_cb){
var map__19538 = p__19537;
var map__19538__$1 = (((((!((map__19538 == null))))?(((((map__19538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19538):map__19538);
var name = cljs.core.get.call(null,map__19538__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__19538__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var filenames = cljs.core.map.call(null,((function (_,map__19538,map__19538__$1,name,path){
return (function (p1__19536_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19536_SHARP_),".cache.json"].join('');
});})(_,map__19538,map__19538__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,_,filenames,map__19538,map__19538__$1,name,path){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,_,filenames,map__19538,map__19538__$1,name,path){
return (function (state_19552){
var state_val_19553 = (state_19552[(1)]);
if((state_val_19553 === (1))){
var inst_19540 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_19552__$1 = state_19552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19552__$1,(2),inst_19540);
} else {
if((state_val_19553 === (2))){
var inst_19542 = (state_19552[(2)]);
var state_19552__$1 = state_19552;
if(cljs.core.truth_(inst_19542)){
var statearr_19554_19605 = state_19552__$1;
(statearr_19554_19605[(1)] = (3));

} else {
var statearr_19555_19606 = state_19552__$1;
(statearr_19555_19606[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19553 === (3))){
var state_19552__$1 = state_19552;
var statearr_19556_19607 = state_19552__$1;
(statearr_19556_19607[(2)] = null);

(statearr_19556_19607[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19553 === (4))){
var inst_19545 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_19546 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_19547 = cljs.core.PersistentHashMap.fromArrays(inst_19545,inst_19546);
var inst_19548 = src_cb.call(null,inst_19547);
var state_19552__$1 = state_19552;
var statearr_19557_19608 = state_19552__$1;
(statearr_19557_19608[(2)] = inst_19548);

(statearr_19557_19608[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19553 === (5))){
var inst_19550 = (state_19552[(2)]);
var state_19552__$1 = state_19552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19552__$1,inst_19550);
} else {
return null;
}
}
}
}
}
});})(c__16038__auto__,_,filenames,map__19538,map__19538__$1,name,path))
;
return ((function (switch__15943__auto__,c__16038__auto__,_,filenames,map__19538,map__19538__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15944__auto____0 = (function (){
var statearr_19558 = [null,null,null,null,null,null,null];
(statearr_19558[(0)] = klipse_clj$lang$clojure$io$state_machine__15944__auto__);

(statearr_19558[(1)] = (1));

return statearr_19558;
});
var klipse_clj$lang$clojure$io$state_machine__15944__auto____1 = (function (state_19552){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19559){if((e19559 instanceof Object)){
var ex__15947__auto__ = e19559;
var statearr_19560_19609 = state_19552;
(statearr_19560_19609[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19610 = state_19552;
state_19552 = G__19610;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15944__auto__ = function(state_19552){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15944__auto____1.call(this,state_19552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15944__auto____0;
klipse_clj$lang$clojure$io$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15944__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,_,filenames,map__19538,map__19538__$1,name,path))
})();
var state__16040__auto__ = (function (){var statearr_19561 = f__16039__auto__.call(null);
(statearr_19561[(6)] = c__16038__auto__);

return statearr_19561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,_,filenames,map__19538,map__19538__$1,name,path))
);

return c__16038__auto__;
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

var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,prefix,filenames,map__19538,map__19538__$1,name,path){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,prefix,filenames,map__19538,map__19538__$1,name,path){
return (function (state_19572){
var state_val_19573 = (state_19572[(1)]);
if((state_val_19573 === (1))){
var inst_19562 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_19572__$1 = state_19572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19572__$1,(2),inst_19562);
} else {
if((state_val_19573 === (2))){
var inst_19564 = (state_19572[(2)]);
var state_19572__$1 = state_19572;
if(cljs.core.truth_(inst_19564)){
var statearr_19574_19611 = state_19572__$1;
(statearr_19574_19611[(1)] = (3));

} else {
var statearr_19575_19612 = state_19572__$1;
(statearr_19575_19612[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (3))){
var state_19572__$1 = state_19572;
var statearr_19576_19613 = state_19572__$1;
(statearr_19576_19613[(2)] = null);

(statearr_19576_19613[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (4))){
var inst_19567 = [prefix,".js"].join('');
var inst_19568 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_19567,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_19572__$1 = state_19572;
var statearr_19577_19614 = state_19572__$1;
(statearr_19577_19614[(2)] = inst_19568);

(statearr_19577_19614[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (5))){
var inst_19570 = (state_19572[(2)]);
var state_19572__$1 = state_19572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19572__$1,inst_19570);
} else {
return null;
}
}
}
}
}
});})(c__16038__auto__,prefix,filenames,map__19538,map__19538__$1,name,path))
;
return ((function (switch__15943__auto__,c__16038__auto__,prefix,filenames,map__19538,map__19538__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15944__auto____0 = (function (){
var statearr_19578 = [null,null,null,null,null,null,null];
(statearr_19578[(0)] = klipse_clj$lang$clojure$io$state_machine__15944__auto__);

(statearr_19578[(1)] = (1));

return statearr_19578;
});
var klipse_clj$lang$clojure$io$state_machine__15944__auto____1 = (function (state_19572){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19579){if((e19579 instanceof Object)){
var ex__15947__auto__ = e19579;
var statearr_19580_19615 = state_19572;
(statearr_19580_19615[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19616 = state_19572;
state_19572 = G__19616;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15944__auto__ = function(state_19572){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15944__auto____1.call(this,state_19572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15944__auto____0;
klipse_clj$lang$clojure$io$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15944__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,prefix,filenames,map__19538,map__19538__$1,name,path))
})();
var state__16040__auto__ = (function (){var statearr_19581 = f__16039__auto__.call(null);
(statearr_19581[(6)] = c__16038__auto__);

return statearr_19581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,prefix,filenames,map__19538,map__19538__$1,name,path))
);

return c__16038__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,filenames,map__19538,map__19538__$1,name,path){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,filenames,map__19538,map__19538__$1,name,path){
return (function (state_19595){
var state_val_19596 = (state_19595[(1)]);
if((state_val_19596 === (1))){
var inst_19582 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_19595__$1 = state_19595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19595__$1,(2),inst_19582);
} else {
if((state_val_19596 === (2))){
var inst_19584 = (state_19595[(2)]);
var state_19595__$1 = state_19595;
if(cljs.core.truth_(inst_19584)){
var statearr_19597_19617 = state_19595__$1;
(statearr_19597_19617[(1)] = (3));

} else {
var statearr_19598_19618 = state_19595__$1;
(statearr_19598_19618[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19596 === (3))){
var state_19595__$1 = state_19595;
var statearr_19599_19619 = state_19595__$1;
(statearr_19599_19619[(2)] = null);

(statearr_19599_19619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19596 === (4))){
var inst_19587 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19588 = [".js"];
var inst_19589 = (new cljs.core.PersistentVector(null,1,(5),inst_19587,inst_19588,null));
var inst_19590 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_19589,path);
var inst_19591 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_19590,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_19595__$1 = state_19595;
var statearr_19600_19620 = state_19595__$1;
(statearr_19600_19620[(2)] = inst_19591);

(statearr_19600_19620[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19596 === (5))){
var inst_19593 = (state_19595[(2)]);
var state_19595__$1 = state_19595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19595__$1,inst_19593);
} else {
return null;
}
}
}
}
}
});})(c__16038__auto__,filenames,map__19538,map__19538__$1,name,path))
;
return ((function (switch__15943__auto__,c__16038__auto__,filenames,map__19538,map__19538__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15944__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15944__auto____0 = (function (){
var statearr_19601 = [null,null,null,null,null,null,null];
(statearr_19601[(0)] = klipse_clj$lang$clojure$io$state_machine__15944__auto__);

(statearr_19601[(1)] = (1));

return statearr_19601;
});
var klipse_clj$lang$clojure$io$state_machine__15944__auto____1 = (function (state_19595){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19602){if((e19602 instanceof Object)){
var ex__15947__auto__ = e19602;
var statearr_19603_19621 = state_19595;
(statearr_19603_19621[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19622 = state_19595;
state_19595 = G__19622;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15944__auto__ = function(state_19595){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15944__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15944__auto____1.call(this,state_19595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15944__auto____0;
klipse_clj$lang$clojure$io$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15944__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,filenames,map__19538,map__19538__$1,name,path))
})();
var state__16040__auto__ = (function (){var statearr_19604 = f__16039__auto__.call(null);
(statearr_19604[(6)] = c__16038__auto__);

return statearr_19604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,filenames,map__19538,map__19538__$1,name,path))
);

return c__16038__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__19624,src_cb){
var map__19625 = p__19624;
var map__19625__$1 = (((((!((map__19625 == null))))?(((((map__19625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19625):map__19625);
var name = cljs.core.get.call(null,map__19625__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__19625__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj__18568__auto__ = goog;
var f__18569__auto__ = (function (){var obj19627 = obj__18568__auto__;
var k19628 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19627,k19628)){
return (obj19627[k19628]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__19625,map__19625__$1,name,path){
return (function (p1__19623_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19623_SHARP_),".js"].join('');
});})(closure_github_path,map__19625,map__19625__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
