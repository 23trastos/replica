// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__10342){
var vec__10343 = p__10342;
var i = cljs.core.nth.call(null,vec__10343,(0),null);
var v = cljs.core.nth.call(null,vec__10343,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__10346 = seg;
var gcol = cljs.core.nth.call(null,vec__10346,(0),null);
var source = cljs.core.nth.call(null,vec__10346,(1),null);
var line = cljs.core.nth.call(null,vec__10346,(2),null);
var col = cljs.core.nth.call(null,vec__10346,(3),null);
var name = cljs.core.nth.call(null,vec__10346,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5720__auto__)){
var name__$1 = temp__5720__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__10349 = seg;
var gcol = cljs.core.nth.call(null,vec__10349,(0),null);
var source = cljs.core.nth.call(null,vec__10349,(1),null);
var line = cljs.core.nth.call(null,vec__10349,(2),null);
var col = cljs.core.nth.call(null,vec__10349,(3),null);
var name = cljs.core.nth.call(null,vec__10349,(4),null);
var vec__10352 = relseg;
var rgcol = cljs.core.nth.call(null,vec__10352,(0),null);
var rsource = cljs.core.nth.call(null,vec__10352,(1),null);
var rline = cljs.core.nth.call(null,vec__10352,(2),null);
var rcol = cljs.core.nth.call(null,vec__10352,(3),null);
var rname = cljs.core.nth.call(null,vec__10352,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4131__auto__ = col;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__10355 = segmap;
var map__10355__$1 = (((((!((map__10355 == null))))?(((((map__10355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10355):map__10355);
var gcol = cljs.core.get.call(null,map__10355__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10355__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10355__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10355__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10355__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__10355,map__10355__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__10355,map__10355__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__10355,map__10355__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__10355,map__10355__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10355,map__10355__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__10355,map__10355__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__10358 = arguments.length;
switch (G__10358) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__10362 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10366 = cljs.core.next.call(null,segs__$1);
var G__10367 = nrelseg;
var G__10368 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10366;
relseg__$1 = G__10367;
result__$1 = G__10368;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10362,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10362,(1),null);
var G__10369 = (gline + (1));
var G__10370 = cljs.core.next.call(null,lines__$1);
var G__10371 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10372 = result__$1;
gline = G__10369;
lines__$1 = G__10370;
relseg = G__10371;
result = G__10372;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__10374 = segmap;
var map__10374__$1 = (((((!((map__10374 == null))))?(((((map__10374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10374):map__10374);
var gcol = cljs.core.get.call(null,map__10374__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10374__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10374__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10374__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10374__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__10374,map__10374__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__10374,map__10374__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__10373_SHARP_){
return cljs.core.conj.call(null,p1__10373_SHARP_,d__$1);
});})(map__10374,map__10374__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10374,map__10374__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__10377 = arguments.length;
switch (G__10377) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__10381 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10385 = cljs.core.next.call(null,segs__$1);
var G__10386 = nrelseg;
var G__10387 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10385;
relseg__$1 = G__10386;
result__$1 = G__10387;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10381,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10381,(1),null);
var G__10388 = (gline + (1));
var G__10389 = cljs.core.next.call(null,lines__$1);
var G__10390 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10391 = result__$1;
gline = G__10388;
lines__$1 = G__10389;
relseg = G__10390;
result = G__10391;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__10392){
var vec__10393 = p__10392;
var _ = cljs.core.nth.call(null,vec__10393,(0),null);
var source = cljs.core.nth.call(null,vec__10393,(1),null);
var line = cljs.core.nth.call(null,vec__10393,(2),null);
var col = cljs.core.nth.call(null,vec__10393,(3),null);
var name = cljs.core.nth.call(null,vec__10393,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__10396){
var vec__10397 = p__10396;
var gcol = cljs.core.nth.call(null,vec__10397,(0),null);
var sidx = cljs.core.nth.call(null,vec__10397,(1),null);
var line = cljs.core.nth.call(null,vec__10397,(2),null);
var col = cljs.core.nth.call(null,vec__10397,(3),null);
var name = cljs.core.nth.call(null,vec__10397,(4),null);
var seg = vec__10397;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__10397,gcol,sidx,line,col,name,seg,relseg){
return (function (p__10400){
var vec__10401 = p__10400;
var _ = cljs.core.nth.call(null,vec__10401,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10401,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__10401,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__10401,(3),null);
var lname = cljs.core.nth.call(null,vec__10401,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__10397,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
var idx = (function (){var temp__5718__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__10407 = cljs.core.seq.call(null,infos);
var chunk__10408 = null;
var count__10409 = (0);
var i__10410 = (0);
while(true){
if((i__10410 < count__10409)){
var info = cljs.core._nth.call(null,chunk__10408,i__10410);
var segv_10761 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_10762 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_10763 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_10762 > (lc_10763 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__10407,chunk__10408,count__10409,i__10410,segv_10761,gline_10762,lc_10763,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_10762 - (lc_10763 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_10761], null));
});})(seq__10407,chunk__10408,count__10409,i__10410,segv_10761,gline_10762,lc_10763,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__10407,chunk__10408,count__10409,i__10410,segv_10761,gline_10762,lc_10763,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10762], null),cljs.core.conj,segv_10761);
});})(seq__10407,chunk__10408,count__10409,i__10410,segv_10761,gline_10762,lc_10763,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__10764 = seq__10407;
var G__10765 = chunk__10408;
var G__10766 = count__10409;
var G__10767 = (i__10410 + (1));
seq__10407 = G__10764;
chunk__10408 = G__10765;
count__10409 = G__10766;
i__10410 = G__10767;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10407);
if(temp__5720__auto__){
var seq__10407__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10407__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10407__$1);
var G__10768 = cljs.core.chunk_rest.call(null,seq__10407__$1);
var G__10769 = c__4550__auto__;
var G__10770 = cljs.core.count.call(null,c__4550__auto__);
var G__10771 = (0);
seq__10407 = G__10768;
chunk__10408 = G__10769;
count__10409 = G__10770;
i__10410 = G__10771;
continue;
} else {
var info = cljs.core.first.call(null,seq__10407__$1);
var segv_10772 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_10773 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_10774 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_10773 > (lc_10774 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__10407,chunk__10408,count__10409,i__10410,segv_10772,gline_10773,lc_10774,info,seq__10407__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_10773 - (lc_10774 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_10772], null));
});})(seq__10407,chunk__10408,count__10409,i__10410,segv_10772,gline_10773,lc_10774,info,seq__10407__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__10407,chunk__10408,count__10409,i__10410,segv_10772,gline_10773,lc_10774,info,seq__10407__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10773], null),cljs.core.conj,segv_10772);
});})(seq__10407,chunk__10408,count__10409,i__10410,segv_10772,gline_10773,lc_10774,info,seq__10407__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__10775 = cljs.core.next.call(null,seq__10407__$1);
var G__10776 = null;
var G__10777 = (0);
var G__10778 = (0);
seq__10407 = G__10775;
chunk__10408 = G__10776;
count__10409 = G__10777;
i__10410 = G__10778;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__10411_10779 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__10412_10780 = null;
var count__10413_10781 = (0);
var i__10414_10782 = (0);
while(true){
if((i__10414_10782 < count__10413_10781)){
var vec__10587_10783 = cljs.core._nth.call(null,chunk__10412_10780,i__10414_10782);
var source_idx_10784 = cljs.core.nth.call(null,vec__10587_10783,(0),null);
var vec__10590_10785 = cljs.core.nth.call(null,vec__10587_10783,(1),null);
var __10786 = cljs.core.nth.call(null,vec__10590_10785,(0),null);
var lines_10787__$1 = cljs.core.nth.call(null,vec__10590_10785,(1),null);
var seq__10593_10788 = cljs.core.seq.call(null,lines_10787__$1);
var chunk__10594_10789 = null;
var count__10595_10790 = (0);
var i__10596_10791 = (0);
while(true){
if((i__10596_10791 < count__10595_10790)){
var vec__10635_10792 = cljs.core._nth.call(null,chunk__10594_10789,i__10596_10791);
var line_10793 = cljs.core.nth.call(null,vec__10635_10792,(0),null);
var cols_10794 = cljs.core.nth.call(null,vec__10635_10792,(1),null);
var seq__10638_10795 = cljs.core.seq.call(null,cols_10794);
var chunk__10639_10796 = null;
var count__10640_10797 = (0);
var i__10641_10798 = (0);
while(true){
if((i__10641_10798 < count__10640_10797)){
var vec__10648_10799 = cljs.core._nth.call(null,chunk__10639_10796,i__10641_10798);
var col_10800 = cljs.core.nth.call(null,vec__10648_10799,(0),null);
var infos_10801 = cljs.core.nth.call(null,vec__10648_10799,(1),null);
encode_cols.call(null,infos_10801,source_idx_10784,line_10793,col_10800);


var G__10802 = seq__10638_10795;
var G__10803 = chunk__10639_10796;
var G__10804 = count__10640_10797;
var G__10805 = (i__10641_10798 + (1));
seq__10638_10795 = G__10802;
chunk__10639_10796 = G__10803;
count__10640_10797 = G__10804;
i__10641_10798 = G__10805;
continue;
} else {
var temp__5720__auto___10806 = cljs.core.seq.call(null,seq__10638_10795);
if(temp__5720__auto___10806){
var seq__10638_10807__$1 = temp__5720__auto___10806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10638_10807__$1)){
var c__4550__auto___10808 = cljs.core.chunk_first.call(null,seq__10638_10807__$1);
var G__10809 = cljs.core.chunk_rest.call(null,seq__10638_10807__$1);
var G__10810 = c__4550__auto___10808;
var G__10811 = cljs.core.count.call(null,c__4550__auto___10808);
var G__10812 = (0);
seq__10638_10795 = G__10809;
chunk__10639_10796 = G__10810;
count__10640_10797 = G__10811;
i__10641_10798 = G__10812;
continue;
} else {
var vec__10651_10813 = cljs.core.first.call(null,seq__10638_10807__$1);
var col_10814 = cljs.core.nth.call(null,vec__10651_10813,(0),null);
var infos_10815 = cljs.core.nth.call(null,vec__10651_10813,(1),null);
encode_cols.call(null,infos_10815,source_idx_10784,line_10793,col_10814);


var G__10816 = cljs.core.next.call(null,seq__10638_10807__$1);
var G__10817 = null;
var G__10818 = (0);
var G__10819 = (0);
seq__10638_10795 = G__10816;
chunk__10639_10796 = G__10817;
count__10640_10797 = G__10818;
i__10641_10798 = G__10819;
continue;
}
} else {
}
}
break;
}


var G__10820 = seq__10593_10788;
var G__10821 = chunk__10594_10789;
var G__10822 = count__10595_10790;
var G__10823 = (i__10596_10791 + (1));
seq__10593_10788 = G__10820;
chunk__10594_10789 = G__10821;
count__10595_10790 = G__10822;
i__10596_10791 = G__10823;
continue;
} else {
var temp__5720__auto___10824 = cljs.core.seq.call(null,seq__10593_10788);
if(temp__5720__auto___10824){
var seq__10593_10825__$1 = temp__5720__auto___10824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10593_10825__$1)){
var c__4550__auto___10826 = cljs.core.chunk_first.call(null,seq__10593_10825__$1);
var G__10827 = cljs.core.chunk_rest.call(null,seq__10593_10825__$1);
var G__10828 = c__4550__auto___10826;
var G__10829 = cljs.core.count.call(null,c__4550__auto___10826);
var G__10830 = (0);
seq__10593_10788 = G__10827;
chunk__10594_10789 = G__10828;
count__10595_10790 = G__10829;
i__10596_10791 = G__10830;
continue;
} else {
var vec__10654_10831 = cljs.core.first.call(null,seq__10593_10825__$1);
var line_10832 = cljs.core.nth.call(null,vec__10654_10831,(0),null);
var cols_10833 = cljs.core.nth.call(null,vec__10654_10831,(1),null);
var seq__10657_10834 = cljs.core.seq.call(null,cols_10833);
var chunk__10658_10835 = null;
var count__10659_10836 = (0);
var i__10660_10837 = (0);
while(true){
if((i__10660_10837 < count__10659_10836)){
var vec__10667_10838 = cljs.core._nth.call(null,chunk__10658_10835,i__10660_10837);
var col_10839 = cljs.core.nth.call(null,vec__10667_10838,(0),null);
var infos_10840 = cljs.core.nth.call(null,vec__10667_10838,(1),null);
encode_cols.call(null,infos_10840,source_idx_10784,line_10832,col_10839);


var G__10841 = seq__10657_10834;
var G__10842 = chunk__10658_10835;
var G__10843 = count__10659_10836;
var G__10844 = (i__10660_10837 + (1));
seq__10657_10834 = G__10841;
chunk__10658_10835 = G__10842;
count__10659_10836 = G__10843;
i__10660_10837 = G__10844;
continue;
} else {
var temp__5720__auto___10845__$1 = cljs.core.seq.call(null,seq__10657_10834);
if(temp__5720__auto___10845__$1){
var seq__10657_10846__$1 = temp__5720__auto___10845__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10657_10846__$1)){
var c__4550__auto___10847 = cljs.core.chunk_first.call(null,seq__10657_10846__$1);
var G__10848 = cljs.core.chunk_rest.call(null,seq__10657_10846__$1);
var G__10849 = c__4550__auto___10847;
var G__10850 = cljs.core.count.call(null,c__4550__auto___10847);
var G__10851 = (0);
seq__10657_10834 = G__10848;
chunk__10658_10835 = G__10849;
count__10659_10836 = G__10850;
i__10660_10837 = G__10851;
continue;
} else {
var vec__10670_10852 = cljs.core.first.call(null,seq__10657_10846__$1);
var col_10853 = cljs.core.nth.call(null,vec__10670_10852,(0),null);
var infos_10854 = cljs.core.nth.call(null,vec__10670_10852,(1),null);
encode_cols.call(null,infos_10854,source_idx_10784,line_10832,col_10853);


var G__10855 = cljs.core.next.call(null,seq__10657_10846__$1);
var G__10856 = null;
var G__10857 = (0);
var G__10858 = (0);
seq__10657_10834 = G__10855;
chunk__10658_10835 = G__10856;
count__10659_10836 = G__10857;
i__10660_10837 = G__10858;
continue;
}
} else {
}
}
break;
}


var G__10859 = cljs.core.next.call(null,seq__10593_10825__$1);
var G__10860 = null;
var G__10861 = (0);
var G__10862 = (0);
seq__10593_10788 = G__10859;
chunk__10594_10789 = G__10860;
count__10595_10790 = G__10861;
i__10596_10791 = G__10862;
continue;
}
} else {
}
}
break;
}


var G__10863 = seq__10411_10779;
var G__10864 = chunk__10412_10780;
var G__10865 = count__10413_10781;
var G__10866 = (i__10414_10782 + (1));
seq__10411_10779 = G__10863;
chunk__10412_10780 = G__10864;
count__10413_10781 = G__10865;
i__10414_10782 = G__10866;
continue;
} else {
var temp__5720__auto___10867 = cljs.core.seq.call(null,seq__10411_10779);
if(temp__5720__auto___10867){
var seq__10411_10868__$1 = temp__5720__auto___10867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10411_10868__$1)){
var c__4550__auto___10869 = cljs.core.chunk_first.call(null,seq__10411_10868__$1);
var G__10870 = cljs.core.chunk_rest.call(null,seq__10411_10868__$1);
var G__10871 = c__4550__auto___10869;
var G__10872 = cljs.core.count.call(null,c__4550__auto___10869);
var G__10873 = (0);
seq__10411_10779 = G__10870;
chunk__10412_10780 = G__10871;
count__10413_10781 = G__10872;
i__10414_10782 = G__10873;
continue;
} else {
var vec__10673_10874 = cljs.core.first.call(null,seq__10411_10868__$1);
var source_idx_10875 = cljs.core.nth.call(null,vec__10673_10874,(0),null);
var vec__10676_10876 = cljs.core.nth.call(null,vec__10673_10874,(1),null);
var __10877 = cljs.core.nth.call(null,vec__10676_10876,(0),null);
var lines_10878__$1 = cljs.core.nth.call(null,vec__10676_10876,(1),null);
var seq__10679_10879 = cljs.core.seq.call(null,lines_10878__$1);
var chunk__10680_10880 = null;
var count__10681_10881 = (0);
var i__10682_10882 = (0);
while(true){
if((i__10682_10882 < count__10681_10881)){
var vec__10721_10883 = cljs.core._nth.call(null,chunk__10680_10880,i__10682_10882);
var line_10884 = cljs.core.nth.call(null,vec__10721_10883,(0),null);
var cols_10885 = cljs.core.nth.call(null,vec__10721_10883,(1),null);
var seq__10724_10886 = cljs.core.seq.call(null,cols_10885);
var chunk__10725_10887 = null;
var count__10726_10888 = (0);
var i__10727_10889 = (0);
while(true){
if((i__10727_10889 < count__10726_10888)){
var vec__10734_10890 = cljs.core._nth.call(null,chunk__10725_10887,i__10727_10889);
var col_10891 = cljs.core.nth.call(null,vec__10734_10890,(0),null);
var infos_10892 = cljs.core.nth.call(null,vec__10734_10890,(1),null);
encode_cols.call(null,infos_10892,source_idx_10875,line_10884,col_10891);


var G__10893 = seq__10724_10886;
var G__10894 = chunk__10725_10887;
var G__10895 = count__10726_10888;
var G__10896 = (i__10727_10889 + (1));
seq__10724_10886 = G__10893;
chunk__10725_10887 = G__10894;
count__10726_10888 = G__10895;
i__10727_10889 = G__10896;
continue;
} else {
var temp__5720__auto___10897__$1 = cljs.core.seq.call(null,seq__10724_10886);
if(temp__5720__auto___10897__$1){
var seq__10724_10898__$1 = temp__5720__auto___10897__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10724_10898__$1)){
var c__4550__auto___10899 = cljs.core.chunk_first.call(null,seq__10724_10898__$1);
var G__10900 = cljs.core.chunk_rest.call(null,seq__10724_10898__$1);
var G__10901 = c__4550__auto___10899;
var G__10902 = cljs.core.count.call(null,c__4550__auto___10899);
var G__10903 = (0);
seq__10724_10886 = G__10900;
chunk__10725_10887 = G__10901;
count__10726_10888 = G__10902;
i__10727_10889 = G__10903;
continue;
} else {
var vec__10737_10904 = cljs.core.first.call(null,seq__10724_10898__$1);
var col_10905 = cljs.core.nth.call(null,vec__10737_10904,(0),null);
var infos_10906 = cljs.core.nth.call(null,vec__10737_10904,(1),null);
encode_cols.call(null,infos_10906,source_idx_10875,line_10884,col_10905);


var G__10907 = cljs.core.next.call(null,seq__10724_10898__$1);
var G__10908 = null;
var G__10909 = (0);
var G__10910 = (0);
seq__10724_10886 = G__10907;
chunk__10725_10887 = G__10908;
count__10726_10888 = G__10909;
i__10727_10889 = G__10910;
continue;
}
} else {
}
}
break;
}


var G__10911 = seq__10679_10879;
var G__10912 = chunk__10680_10880;
var G__10913 = count__10681_10881;
var G__10914 = (i__10682_10882 + (1));
seq__10679_10879 = G__10911;
chunk__10680_10880 = G__10912;
count__10681_10881 = G__10913;
i__10682_10882 = G__10914;
continue;
} else {
var temp__5720__auto___10915__$1 = cljs.core.seq.call(null,seq__10679_10879);
if(temp__5720__auto___10915__$1){
var seq__10679_10916__$1 = temp__5720__auto___10915__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10679_10916__$1)){
var c__4550__auto___10917 = cljs.core.chunk_first.call(null,seq__10679_10916__$1);
var G__10918 = cljs.core.chunk_rest.call(null,seq__10679_10916__$1);
var G__10919 = c__4550__auto___10917;
var G__10920 = cljs.core.count.call(null,c__4550__auto___10917);
var G__10921 = (0);
seq__10679_10879 = G__10918;
chunk__10680_10880 = G__10919;
count__10681_10881 = G__10920;
i__10682_10882 = G__10921;
continue;
} else {
var vec__10740_10922 = cljs.core.first.call(null,seq__10679_10916__$1);
var line_10923 = cljs.core.nth.call(null,vec__10740_10922,(0),null);
var cols_10924 = cljs.core.nth.call(null,vec__10740_10922,(1),null);
var seq__10743_10925 = cljs.core.seq.call(null,cols_10924);
var chunk__10744_10926 = null;
var count__10745_10927 = (0);
var i__10746_10928 = (0);
while(true){
if((i__10746_10928 < count__10745_10927)){
var vec__10753_10929 = cljs.core._nth.call(null,chunk__10744_10926,i__10746_10928);
var col_10930 = cljs.core.nth.call(null,vec__10753_10929,(0),null);
var infos_10931 = cljs.core.nth.call(null,vec__10753_10929,(1),null);
encode_cols.call(null,infos_10931,source_idx_10875,line_10923,col_10930);


var G__10932 = seq__10743_10925;
var G__10933 = chunk__10744_10926;
var G__10934 = count__10745_10927;
var G__10935 = (i__10746_10928 + (1));
seq__10743_10925 = G__10932;
chunk__10744_10926 = G__10933;
count__10745_10927 = G__10934;
i__10746_10928 = G__10935;
continue;
} else {
var temp__5720__auto___10936__$2 = cljs.core.seq.call(null,seq__10743_10925);
if(temp__5720__auto___10936__$2){
var seq__10743_10937__$1 = temp__5720__auto___10936__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10743_10937__$1)){
var c__4550__auto___10938 = cljs.core.chunk_first.call(null,seq__10743_10937__$1);
var G__10939 = cljs.core.chunk_rest.call(null,seq__10743_10937__$1);
var G__10940 = c__4550__auto___10938;
var G__10941 = cljs.core.count.call(null,c__4550__auto___10938);
var G__10942 = (0);
seq__10743_10925 = G__10939;
chunk__10744_10926 = G__10940;
count__10745_10927 = G__10941;
i__10746_10928 = G__10942;
continue;
} else {
var vec__10756_10943 = cljs.core.first.call(null,seq__10743_10937__$1);
var col_10944 = cljs.core.nth.call(null,vec__10756_10943,(0),null);
var infos_10945 = cljs.core.nth.call(null,vec__10756_10943,(1),null);
encode_cols.call(null,infos_10945,source_idx_10875,line_10923,col_10944);


var G__10946 = cljs.core.next.call(null,seq__10743_10937__$1);
var G__10947 = null;
var G__10948 = (0);
var G__10949 = (0);
seq__10743_10925 = G__10946;
chunk__10744_10926 = G__10947;
count__10745_10927 = G__10948;
i__10746_10928 = G__10949;
continue;
}
} else {
}
}
break;
}


var G__10950 = cljs.core.next.call(null,seq__10679_10916__$1);
var G__10951 = null;
var G__10952 = (0);
var G__10953 = (0);
seq__10679_10879 = G__10950;
chunk__10680_10880 = G__10951;
count__10681_10881 = G__10952;
i__10682_10882 = G__10953;
continue;
}
} else {
}
}
break;
}


var G__10954 = cljs.core.next.call(null,seq__10411_10868__$1);
var G__10955 = null;
var G__10956 = (0);
var G__10957 = (0);
seq__10411_10779 = G__10954;
chunk__10412_10780 = G__10955;
count__10413_10781 = G__10956;
i__10414_10782 = G__10957;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__10759 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10404_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10404_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10405_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__10405_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10406_SHARP_){
return clojure.string.join.call(null,",",p1__10406_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__10760 = G__10759;
goog.object.set(G__10760,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__10760;
} else {
return G__10759;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__10958 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__10958,(0),null);
var col_map = cljs.core.nth.call(null,vec__10958,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__10961 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__10961,(0),null);
var infos = cljs.core.nth.call(null,vec__10961,(1),null);
var G__10967 = cljs.core.next.call(null,col_map_seq);
var G__10968 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__10961,col,infos,vec__10958,line,col_map){
return (function (v,p__10964){
var map__10965 = p__10964;
var map__10965__$1 = (((((!((map__10965 == null))))?(((((map__10965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10965):map__10965);
var gline = cljs.core.get.call(null,map__10965__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__10965__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__10961,col,infos,vec__10958,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__10967;
new_cols = G__10968;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__10969 = cljs.core.next.call(null,line_map_seq);
var G__10970 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__10969;
new_lines = G__10970;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__10971_11243 = cljs.core.seq.call(null,reverse_map);
var chunk__10972_11244 = null;
var count__10973_11245 = (0);
var i__10974_11246 = (0);
while(true){
if((i__10974_11246 < count__10973_11245)){
var vec__11109_11247 = cljs.core._nth.call(null,chunk__10972_11244,i__10974_11246);
var line_11248 = cljs.core.nth.call(null,vec__11109_11247,(0),null);
var columns_11249 = cljs.core.nth.call(null,vec__11109_11247,(1),null);
var seq__11112_11250 = cljs.core.seq.call(null,columns_11249);
var chunk__11113_11251 = null;
var count__11114_11252 = (0);
var i__11115_11253 = (0);
while(true){
if((i__11115_11253 < count__11114_11252)){
var vec__11146_11254 = cljs.core._nth.call(null,chunk__11113_11251,i__11115_11253);
var column_11255 = cljs.core.nth.call(null,vec__11146_11254,(0),null);
var column_info_11256 = cljs.core.nth.call(null,vec__11146_11254,(1),null);
var seq__11149_11257 = cljs.core.seq.call(null,column_info_11256);
var chunk__11150_11258 = null;
var count__11151_11259 = (0);
var i__11152_11260 = (0);
while(true){
if((i__11152_11260 < count__11151_11259)){
var map__11157_11261 = cljs.core._nth.call(null,chunk__11150_11258,i__11152_11260);
var map__11157_11262__$1 = (((((!((map__11157_11261 == null))))?(((((map__11157_11261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11157_11261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11157_11261):map__11157_11261);
var gline_11263 = cljs.core.get.call(null,map__11157_11262__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11264 = cljs.core.get.call(null,map__11157_11262__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11265 = cljs.core.get.call(null,map__11157_11262__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11263], null),cljs.core.fnil.call(null,((function (seq__11149_11257,chunk__11150_11258,count__11151_11259,i__11152_11260,seq__11112_11250,chunk__11113_11251,count__11114_11252,i__11115_11253,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11157_11261,map__11157_11262__$1,gline_11263,gcol_11264,name_11265,vec__11146_11254,column_11255,column_info_11256,vec__11109_11247,line_11248,columns_11249,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11264], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11248,new cljs.core.Keyword(null,"col","col",-1959363084),column_11255,new cljs.core.Keyword(null,"name","name",1843675177),name_11265], null));
});})(seq__11149_11257,chunk__11150_11258,count__11151_11259,i__11152_11260,seq__11112_11250,chunk__11113_11251,count__11114_11252,i__11115_11253,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11157_11261,map__11157_11262__$1,gline_11263,gcol_11264,name_11265,vec__11146_11254,column_11255,column_info_11256,vec__11109_11247,line_11248,columns_11249,inverted))
,cljs.core.sorted_map.call(null)));


var G__11266 = seq__11149_11257;
var G__11267 = chunk__11150_11258;
var G__11268 = count__11151_11259;
var G__11269 = (i__11152_11260 + (1));
seq__11149_11257 = G__11266;
chunk__11150_11258 = G__11267;
count__11151_11259 = G__11268;
i__11152_11260 = G__11269;
continue;
} else {
var temp__5720__auto___11270 = cljs.core.seq.call(null,seq__11149_11257);
if(temp__5720__auto___11270){
var seq__11149_11271__$1 = temp__5720__auto___11270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11149_11271__$1)){
var c__4550__auto___11272 = cljs.core.chunk_first.call(null,seq__11149_11271__$1);
var G__11273 = cljs.core.chunk_rest.call(null,seq__11149_11271__$1);
var G__11274 = c__4550__auto___11272;
var G__11275 = cljs.core.count.call(null,c__4550__auto___11272);
var G__11276 = (0);
seq__11149_11257 = G__11273;
chunk__11150_11258 = G__11274;
count__11151_11259 = G__11275;
i__11152_11260 = G__11276;
continue;
} else {
var map__11159_11277 = cljs.core.first.call(null,seq__11149_11271__$1);
var map__11159_11278__$1 = (((((!((map__11159_11277 == null))))?(((((map__11159_11277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11159_11277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11159_11277):map__11159_11277);
var gline_11279 = cljs.core.get.call(null,map__11159_11278__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11280 = cljs.core.get.call(null,map__11159_11278__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11281 = cljs.core.get.call(null,map__11159_11278__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11279], null),cljs.core.fnil.call(null,((function (seq__11149_11257,chunk__11150_11258,count__11151_11259,i__11152_11260,seq__11112_11250,chunk__11113_11251,count__11114_11252,i__11115_11253,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11159_11277,map__11159_11278__$1,gline_11279,gcol_11280,name_11281,seq__11149_11271__$1,temp__5720__auto___11270,vec__11146_11254,column_11255,column_info_11256,vec__11109_11247,line_11248,columns_11249,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11280], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11248,new cljs.core.Keyword(null,"col","col",-1959363084),column_11255,new cljs.core.Keyword(null,"name","name",1843675177),name_11281], null));
});})(seq__11149_11257,chunk__11150_11258,count__11151_11259,i__11152_11260,seq__11112_11250,chunk__11113_11251,count__11114_11252,i__11115_11253,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11159_11277,map__11159_11278__$1,gline_11279,gcol_11280,name_11281,seq__11149_11271__$1,temp__5720__auto___11270,vec__11146_11254,column_11255,column_info_11256,vec__11109_11247,line_11248,columns_11249,inverted))
,cljs.core.sorted_map.call(null)));


var G__11282 = cljs.core.next.call(null,seq__11149_11271__$1);
var G__11283 = null;
var G__11284 = (0);
var G__11285 = (0);
seq__11149_11257 = G__11282;
chunk__11150_11258 = G__11283;
count__11151_11259 = G__11284;
i__11152_11260 = G__11285;
continue;
}
} else {
}
}
break;
}


var G__11286 = seq__11112_11250;
var G__11287 = chunk__11113_11251;
var G__11288 = count__11114_11252;
var G__11289 = (i__11115_11253 + (1));
seq__11112_11250 = G__11286;
chunk__11113_11251 = G__11287;
count__11114_11252 = G__11288;
i__11115_11253 = G__11289;
continue;
} else {
var temp__5720__auto___11290 = cljs.core.seq.call(null,seq__11112_11250);
if(temp__5720__auto___11290){
var seq__11112_11291__$1 = temp__5720__auto___11290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11112_11291__$1)){
var c__4550__auto___11292 = cljs.core.chunk_first.call(null,seq__11112_11291__$1);
var G__11293 = cljs.core.chunk_rest.call(null,seq__11112_11291__$1);
var G__11294 = c__4550__auto___11292;
var G__11295 = cljs.core.count.call(null,c__4550__auto___11292);
var G__11296 = (0);
seq__11112_11250 = G__11293;
chunk__11113_11251 = G__11294;
count__11114_11252 = G__11295;
i__11115_11253 = G__11296;
continue;
} else {
var vec__11161_11297 = cljs.core.first.call(null,seq__11112_11291__$1);
var column_11298 = cljs.core.nth.call(null,vec__11161_11297,(0),null);
var column_info_11299 = cljs.core.nth.call(null,vec__11161_11297,(1),null);
var seq__11164_11300 = cljs.core.seq.call(null,column_info_11299);
var chunk__11165_11301 = null;
var count__11166_11302 = (0);
var i__11167_11303 = (0);
while(true){
if((i__11167_11303 < count__11166_11302)){
var map__11172_11304 = cljs.core._nth.call(null,chunk__11165_11301,i__11167_11303);
var map__11172_11305__$1 = (((((!((map__11172_11304 == null))))?(((((map__11172_11304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11172_11304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11172_11304):map__11172_11304);
var gline_11306 = cljs.core.get.call(null,map__11172_11305__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11307 = cljs.core.get.call(null,map__11172_11305__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11308 = cljs.core.get.call(null,map__11172_11305__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11306], null),cljs.core.fnil.call(null,((function (seq__11164_11300,chunk__11165_11301,count__11166_11302,i__11167_11303,seq__11112_11250,chunk__11113_11251,count__11114_11252,i__11115_11253,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11172_11304,map__11172_11305__$1,gline_11306,gcol_11307,name_11308,vec__11161_11297,column_11298,column_info_11299,seq__11112_11291__$1,temp__5720__auto___11290,vec__11109_11247,line_11248,columns_11249,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11307], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11248,new cljs.core.Keyword(null,"col","col",-1959363084),column_11298,new cljs.core.Keyword(null,"name","name",1843675177),name_11308], null));
});})(seq__11164_11300,chunk__11165_11301,count__11166_11302,i__11167_11303,seq__11112_11250,chunk__11113_11251,count__11114_11252,i__11115_11253,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11172_11304,map__11172_11305__$1,gline_11306,gcol_11307,name_11308,vec__11161_11297,column_11298,column_info_11299,seq__11112_11291__$1,temp__5720__auto___11290,vec__11109_11247,line_11248,columns_11249,inverted))
,cljs.core.sorted_map.call(null)));


var G__11309 = seq__11164_11300;
var G__11310 = chunk__11165_11301;
var G__11311 = count__11166_11302;
var G__11312 = (i__11167_11303 + (1));
seq__11164_11300 = G__11309;
chunk__11165_11301 = G__11310;
count__11166_11302 = G__11311;
i__11167_11303 = G__11312;
continue;
} else {
var temp__5720__auto___11313__$1 = cljs.core.seq.call(null,seq__11164_11300);
if(temp__5720__auto___11313__$1){
var seq__11164_11314__$1 = temp__5720__auto___11313__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11164_11314__$1)){
var c__4550__auto___11315 = cljs.core.chunk_first.call(null,seq__11164_11314__$1);
var G__11316 = cljs.core.chunk_rest.call(null,seq__11164_11314__$1);
var G__11317 = c__4550__auto___11315;
var G__11318 = cljs.core.count.call(null,c__4550__auto___11315);
var G__11319 = (0);
seq__11164_11300 = G__11316;
chunk__11165_11301 = G__11317;
count__11166_11302 = G__11318;
i__11167_11303 = G__11319;
continue;
} else {
var map__11174_11320 = cljs.core.first.call(null,seq__11164_11314__$1);
var map__11174_11321__$1 = (((((!((map__11174_11320 == null))))?(((((map__11174_11320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11174_11320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11174_11320):map__11174_11320);
var gline_11322 = cljs.core.get.call(null,map__11174_11321__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11323 = cljs.core.get.call(null,map__11174_11321__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11324 = cljs.core.get.call(null,map__11174_11321__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11322], null),cljs.core.fnil.call(null,((function (seq__11164_11300,chunk__11165_11301,count__11166_11302,i__11167_11303,seq__11112_11250,chunk__11113_11251,count__11114_11252,i__11115_11253,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11174_11320,map__11174_11321__$1,gline_11322,gcol_11323,name_11324,seq__11164_11314__$1,temp__5720__auto___11313__$1,vec__11161_11297,column_11298,column_info_11299,seq__11112_11291__$1,temp__5720__auto___11290,vec__11109_11247,line_11248,columns_11249,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11323], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11248,new cljs.core.Keyword(null,"col","col",-1959363084),column_11298,new cljs.core.Keyword(null,"name","name",1843675177),name_11324], null));
});})(seq__11164_11300,chunk__11165_11301,count__11166_11302,i__11167_11303,seq__11112_11250,chunk__11113_11251,count__11114_11252,i__11115_11253,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11174_11320,map__11174_11321__$1,gline_11322,gcol_11323,name_11324,seq__11164_11314__$1,temp__5720__auto___11313__$1,vec__11161_11297,column_11298,column_info_11299,seq__11112_11291__$1,temp__5720__auto___11290,vec__11109_11247,line_11248,columns_11249,inverted))
,cljs.core.sorted_map.call(null)));


var G__11325 = cljs.core.next.call(null,seq__11164_11314__$1);
var G__11326 = null;
var G__11327 = (0);
var G__11328 = (0);
seq__11164_11300 = G__11325;
chunk__11165_11301 = G__11326;
count__11166_11302 = G__11327;
i__11167_11303 = G__11328;
continue;
}
} else {
}
}
break;
}


var G__11329 = cljs.core.next.call(null,seq__11112_11291__$1);
var G__11330 = null;
var G__11331 = (0);
var G__11332 = (0);
seq__11112_11250 = G__11329;
chunk__11113_11251 = G__11330;
count__11114_11252 = G__11331;
i__11115_11253 = G__11332;
continue;
}
} else {
}
}
break;
}


var G__11333 = seq__10971_11243;
var G__11334 = chunk__10972_11244;
var G__11335 = count__10973_11245;
var G__11336 = (i__10974_11246 + (1));
seq__10971_11243 = G__11333;
chunk__10972_11244 = G__11334;
count__10973_11245 = G__11335;
i__10974_11246 = G__11336;
continue;
} else {
var temp__5720__auto___11337 = cljs.core.seq.call(null,seq__10971_11243);
if(temp__5720__auto___11337){
var seq__10971_11338__$1 = temp__5720__auto___11337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10971_11338__$1)){
var c__4550__auto___11339 = cljs.core.chunk_first.call(null,seq__10971_11338__$1);
var G__11340 = cljs.core.chunk_rest.call(null,seq__10971_11338__$1);
var G__11341 = c__4550__auto___11339;
var G__11342 = cljs.core.count.call(null,c__4550__auto___11339);
var G__11343 = (0);
seq__10971_11243 = G__11340;
chunk__10972_11244 = G__11341;
count__10973_11245 = G__11342;
i__10974_11246 = G__11343;
continue;
} else {
var vec__11176_11344 = cljs.core.first.call(null,seq__10971_11338__$1);
var line_11345 = cljs.core.nth.call(null,vec__11176_11344,(0),null);
var columns_11346 = cljs.core.nth.call(null,vec__11176_11344,(1),null);
var seq__11179_11347 = cljs.core.seq.call(null,columns_11346);
var chunk__11180_11348 = null;
var count__11181_11349 = (0);
var i__11182_11350 = (0);
while(true){
if((i__11182_11350 < count__11181_11349)){
var vec__11213_11351 = cljs.core._nth.call(null,chunk__11180_11348,i__11182_11350);
var column_11352 = cljs.core.nth.call(null,vec__11213_11351,(0),null);
var column_info_11353 = cljs.core.nth.call(null,vec__11213_11351,(1),null);
var seq__11216_11354 = cljs.core.seq.call(null,column_info_11353);
var chunk__11217_11355 = null;
var count__11218_11356 = (0);
var i__11219_11357 = (0);
while(true){
if((i__11219_11357 < count__11218_11356)){
var map__11224_11358 = cljs.core._nth.call(null,chunk__11217_11355,i__11219_11357);
var map__11224_11359__$1 = (((((!((map__11224_11358 == null))))?(((((map__11224_11358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11224_11358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11224_11358):map__11224_11358);
var gline_11360 = cljs.core.get.call(null,map__11224_11359__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11361 = cljs.core.get.call(null,map__11224_11359__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11362 = cljs.core.get.call(null,map__11224_11359__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11360], null),cljs.core.fnil.call(null,((function (seq__11216_11354,chunk__11217_11355,count__11218_11356,i__11219_11357,seq__11179_11347,chunk__11180_11348,count__11181_11349,i__11182_11350,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11224_11358,map__11224_11359__$1,gline_11360,gcol_11361,name_11362,vec__11213_11351,column_11352,column_info_11353,vec__11176_11344,line_11345,columns_11346,seq__10971_11338__$1,temp__5720__auto___11337,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11361], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11345,new cljs.core.Keyword(null,"col","col",-1959363084),column_11352,new cljs.core.Keyword(null,"name","name",1843675177),name_11362], null));
});})(seq__11216_11354,chunk__11217_11355,count__11218_11356,i__11219_11357,seq__11179_11347,chunk__11180_11348,count__11181_11349,i__11182_11350,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11224_11358,map__11224_11359__$1,gline_11360,gcol_11361,name_11362,vec__11213_11351,column_11352,column_info_11353,vec__11176_11344,line_11345,columns_11346,seq__10971_11338__$1,temp__5720__auto___11337,inverted))
,cljs.core.sorted_map.call(null)));


var G__11363 = seq__11216_11354;
var G__11364 = chunk__11217_11355;
var G__11365 = count__11218_11356;
var G__11366 = (i__11219_11357 + (1));
seq__11216_11354 = G__11363;
chunk__11217_11355 = G__11364;
count__11218_11356 = G__11365;
i__11219_11357 = G__11366;
continue;
} else {
var temp__5720__auto___11367__$1 = cljs.core.seq.call(null,seq__11216_11354);
if(temp__5720__auto___11367__$1){
var seq__11216_11368__$1 = temp__5720__auto___11367__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11216_11368__$1)){
var c__4550__auto___11369 = cljs.core.chunk_first.call(null,seq__11216_11368__$1);
var G__11370 = cljs.core.chunk_rest.call(null,seq__11216_11368__$1);
var G__11371 = c__4550__auto___11369;
var G__11372 = cljs.core.count.call(null,c__4550__auto___11369);
var G__11373 = (0);
seq__11216_11354 = G__11370;
chunk__11217_11355 = G__11371;
count__11218_11356 = G__11372;
i__11219_11357 = G__11373;
continue;
} else {
var map__11226_11374 = cljs.core.first.call(null,seq__11216_11368__$1);
var map__11226_11375__$1 = (((((!((map__11226_11374 == null))))?(((((map__11226_11374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11226_11374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11226_11374):map__11226_11374);
var gline_11376 = cljs.core.get.call(null,map__11226_11375__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11377 = cljs.core.get.call(null,map__11226_11375__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11378 = cljs.core.get.call(null,map__11226_11375__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11376], null),cljs.core.fnil.call(null,((function (seq__11216_11354,chunk__11217_11355,count__11218_11356,i__11219_11357,seq__11179_11347,chunk__11180_11348,count__11181_11349,i__11182_11350,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11226_11374,map__11226_11375__$1,gline_11376,gcol_11377,name_11378,seq__11216_11368__$1,temp__5720__auto___11367__$1,vec__11213_11351,column_11352,column_info_11353,vec__11176_11344,line_11345,columns_11346,seq__10971_11338__$1,temp__5720__auto___11337,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11377], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11345,new cljs.core.Keyword(null,"col","col",-1959363084),column_11352,new cljs.core.Keyword(null,"name","name",1843675177),name_11378], null));
});})(seq__11216_11354,chunk__11217_11355,count__11218_11356,i__11219_11357,seq__11179_11347,chunk__11180_11348,count__11181_11349,i__11182_11350,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11226_11374,map__11226_11375__$1,gline_11376,gcol_11377,name_11378,seq__11216_11368__$1,temp__5720__auto___11367__$1,vec__11213_11351,column_11352,column_info_11353,vec__11176_11344,line_11345,columns_11346,seq__10971_11338__$1,temp__5720__auto___11337,inverted))
,cljs.core.sorted_map.call(null)));


var G__11379 = cljs.core.next.call(null,seq__11216_11368__$1);
var G__11380 = null;
var G__11381 = (0);
var G__11382 = (0);
seq__11216_11354 = G__11379;
chunk__11217_11355 = G__11380;
count__11218_11356 = G__11381;
i__11219_11357 = G__11382;
continue;
}
} else {
}
}
break;
}


var G__11383 = seq__11179_11347;
var G__11384 = chunk__11180_11348;
var G__11385 = count__11181_11349;
var G__11386 = (i__11182_11350 + (1));
seq__11179_11347 = G__11383;
chunk__11180_11348 = G__11384;
count__11181_11349 = G__11385;
i__11182_11350 = G__11386;
continue;
} else {
var temp__5720__auto___11387__$1 = cljs.core.seq.call(null,seq__11179_11347);
if(temp__5720__auto___11387__$1){
var seq__11179_11388__$1 = temp__5720__auto___11387__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11179_11388__$1)){
var c__4550__auto___11389 = cljs.core.chunk_first.call(null,seq__11179_11388__$1);
var G__11390 = cljs.core.chunk_rest.call(null,seq__11179_11388__$1);
var G__11391 = c__4550__auto___11389;
var G__11392 = cljs.core.count.call(null,c__4550__auto___11389);
var G__11393 = (0);
seq__11179_11347 = G__11390;
chunk__11180_11348 = G__11391;
count__11181_11349 = G__11392;
i__11182_11350 = G__11393;
continue;
} else {
var vec__11228_11394 = cljs.core.first.call(null,seq__11179_11388__$1);
var column_11395 = cljs.core.nth.call(null,vec__11228_11394,(0),null);
var column_info_11396 = cljs.core.nth.call(null,vec__11228_11394,(1),null);
var seq__11231_11397 = cljs.core.seq.call(null,column_info_11396);
var chunk__11232_11398 = null;
var count__11233_11399 = (0);
var i__11234_11400 = (0);
while(true){
if((i__11234_11400 < count__11233_11399)){
var map__11239_11401 = cljs.core._nth.call(null,chunk__11232_11398,i__11234_11400);
var map__11239_11402__$1 = (((((!((map__11239_11401 == null))))?(((((map__11239_11401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11239_11401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11239_11401):map__11239_11401);
var gline_11403 = cljs.core.get.call(null,map__11239_11402__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11404 = cljs.core.get.call(null,map__11239_11402__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11405 = cljs.core.get.call(null,map__11239_11402__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11403], null),cljs.core.fnil.call(null,((function (seq__11231_11397,chunk__11232_11398,count__11233_11399,i__11234_11400,seq__11179_11347,chunk__11180_11348,count__11181_11349,i__11182_11350,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11239_11401,map__11239_11402__$1,gline_11403,gcol_11404,name_11405,vec__11228_11394,column_11395,column_info_11396,seq__11179_11388__$1,temp__5720__auto___11387__$1,vec__11176_11344,line_11345,columns_11346,seq__10971_11338__$1,temp__5720__auto___11337,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11404], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11345,new cljs.core.Keyword(null,"col","col",-1959363084),column_11395,new cljs.core.Keyword(null,"name","name",1843675177),name_11405], null));
});})(seq__11231_11397,chunk__11232_11398,count__11233_11399,i__11234_11400,seq__11179_11347,chunk__11180_11348,count__11181_11349,i__11182_11350,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11239_11401,map__11239_11402__$1,gline_11403,gcol_11404,name_11405,vec__11228_11394,column_11395,column_info_11396,seq__11179_11388__$1,temp__5720__auto___11387__$1,vec__11176_11344,line_11345,columns_11346,seq__10971_11338__$1,temp__5720__auto___11337,inverted))
,cljs.core.sorted_map.call(null)));


var G__11406 = seq__11231_11397;
var G__11407 = chunk__11232_11398;
var G__11408 = count__11233_11399;
var G__11409 = (i__11234_11400 + (1));
seq__11231_11397 = G__11406;
chunk__11232_11398 = G__11407;
count__11233_11399 = G__11408;
i__11234_11400 = G__11409;
continue;
} else {
var temp__5720__auto___11410__$2 = cljs.core.seq.call(null,seq__11231_11397);
if(temp__5720__auto___11410__$2){
var seq__11231_11411__$1 = temp__5720__auto___11410__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11231_11411__$1)){
var c__4550__auto___11412 = cljs.core.chunk_first.call(null,seq__11231_11411__$1);
var G__11413 = cljs.core.chunk_rest.call(null,seq__11231_11411__$1);
var G__11414 = c__4550__auto___11412;
var G__11415 = cljs.core.count.call(null,c__4550__auto___11412);
var G__11416 = (0);
seq__11231_11397 = G__11413;
chunk__11232_11398 = G__11414;
count__11233_11399 = G__11415;
i__11234_11400 = G__11416;
continue;
} else {
var map__11241_11417 = cljs.core.first.call(null,seq__11231_11411__$1);
var map__11241_11418__$1 = (((((!((map__11241_11417 == null))))?(((((map__11241_11417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11241_11417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11241_11417):map__11241_11417);
var gline_11419 = cljs.core.get.call(null,map__11241_11418__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11420 = cljs.core.get.call(null,map__11241_11418__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11421 = cljs.core.get.call(null,map__11241_11418__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11419], null),cljs.core.fnil.call(null,((function (seq__11231_11397,chunk__11232_11398,count__11233_11399,i__11234_11400,seq__11179_11347,chunk__11180_11348,count__11181_11349,i__11182_11350,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11241_11417,map__11241_11418__$1,gline_11419,gcol_11420,name_11421,seq__11231_11411__$1,temp__5720__auto___11410__$2,vec__11228_11394,column_11395,column_info_11396,seq__11179_11388__$1,temp__5720__auto___11387__$1,vec__11176_11344,line_11345,columns_11346,seq__10971_11338__$1,temp__5720__auto___11337,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11420], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11345,new cljs.core.Keyword(null,"col","col",-1959363084),column_11395,new cljs.core.Keyword(null,"name","name",1843675177),name_11421], null));
});})(seq__11231_11397,chunk__11232_11398,count__11233_11399,i__11234_11400,seq__11179_11347,chunk__11180_11348,count__11181_11349,i__11182_11350,seq__10971_11243,chunk__10972_11244,count__10973_11245,i__10974_11246,map__11241_11417,map__11241_11418__$1,gline_11419,gcol_11420,name_11421,seq__11231_11411__$1,temp__5720__auto___11410__$2,vec__11228_11394,column_11395,column_info_11396,seq__11179_11388__$1,temp__5720__auto___11387__$1,vec__11176_11344,line_11345,columns_11346,seq__10971_11338__$1,temp__5720__auto___11337,inverted))
,cljs.core.sorted_map.call(null)));


var G__11422 = cljs.core.next.call(null,seq__11231_11411__$1);
var G__11423 = null;
var G__11424 = (0);
var G__11425 = (0);
seq__11231_11397 = G__11422;
chunk__11232_11398 = G__11423;
count__11233_11399 = G__11424;
i__11234_11400 = G__11425;
continue;
}
} else {
}
}
break;
}


var G__11426 = cljs.core.next.call(null,seq__11179_11388__$1);
var G__11427 = null;
var G__11428 = (0);
var G__11429 = (0);
seq__11179_11347 = G__11426;
chunk__11180_11348 = G__11427;
count__11181_11349 = G__11428;
i__11182_11350 = G__11429;
continue;
}
} else {
}
}
break;
}


var G__11430 = cljs.core.next.call(null,seq__10971_11338__$1);
var G__11431 = null;
var G__11432 = (0);
var G__11433 = (0);
seq__10971_11243 = G__11430;
chunk__10972_11244 = G__11431;
count__10973_11245 = G__11432;
i__10974_11246 = G__11433;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
