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
return cljs.core.reduce.call(null,(function (m,p__12921){
var vec__12922 = p__12921;
var i = cljs.core.nth.call(null,vec__12922,(0),null);
var v = cljs.core.nth.call(null,vec__12922,(1),null);
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
var vec__12925 = seg;
var gcol = cljs.core.nth.call(null,vec__12925,(0),null);
var source = cljs.core.nth.call(null,vec__12925,(1),null);
var line = cljs.core.nth.call(null,vec__12925,(2),null);
var col = cljs.core.nth.call(null,vec__12925,(3),null);
var name = cljs.core.nth.call(null,vec__12925,(4),null);
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
var vec__12928 = seg;
var gcol = cljs.core.nth.call(null,vec__12928,(0),null);
var source = cljs.core.nth.call(null,vec__12928,(1),null);
var line = cljs.core.nth.call(null,vec__12928,(2),null);
var col = cljs.core.nth.call(null,vec__12928,(3),null);
var name = cljs.core.nth.call(null,vec__12928,(4),null);
var vec__12931 = relseg;
var rgcol = cljs.core.nth.call(null,vec__12931,(0),null);
var rsource = cljs.core.nth.call(null,vec__12931,(1),null);
var rline = cljs.core.nth.call(null,vec__12931,(2),null);
var rcol = cljs.core.nth.call(null,vec__12931,(3),null);
var rname = cljs.core.nth.call(null,vec__12931,(4),null);
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
var map__12934 = segmap;
var map__12934__$1 = (((((!((map__12934 == null))))?(((((map__12934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12934):map__12934);
var gcol = cljs.core.get.call(null,map__12934__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12934__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12934__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12934__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__12934,map__12934__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__12934,map__12934__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__12934,map__12934__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__12934,map__12934__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12934,map__12934__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__12934,map__12934__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__12937 = arguments.length;
switch (G__12937) {
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
var vec__12941 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12945 = cljs.core.next.call(null,segs__$1);
var G__12946 = nrelseg;
var G__12947 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12945;
relseg__$1 = G__12946;
result__$1 = G__12947;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12941,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12941,(1),null);
var G__12948 = (gline + (1));
var G__12949 = cljs.core.next.call(null,lines__$1);
var G__12950 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12951 = result__$1;
gline = G__12948;
lines__$1 = G__12949;
relseg = G__12950;
result = G__12951;
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
var map__12953 = segmap;
var map__12953__$1 = (((((!((map__12953 == null))))?(((((map__12953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12953):map__12953);
var gcol = cljs.core.get.call(null,map__12953__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12953__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12953__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12953__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12953__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__12953,map__12953__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__12953,map__12953__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__12952_SHARP_){
return cljs.core.conj.call(null,p1__12952_SHARP_,d__$1);
});})(map__12953,map__12953__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12953,map__12953__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__12956 = arguments.length;
switch (G__12956) {
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
var vec__12960 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12964 = cljs.core.next.call(null,segs__$1);
var G__12965 = nrelseg;
var G__12966 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12964;
relseg__$1 = G__12965;
result__$1 = G__12966;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12960,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12960,(1),null);
var G__12967 = (gline + (1));
var G__12968 = cljs.core.next.call(null,lines__$1);
var G__12969 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12970 = result__$1;
gline = G__12967;
lines__$1 = G__12968;
relseg = G__12969;
result = G__12970;
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
return (function (p__12971){
var vec__12972 = p__12971;
var _ = cljs.core.nth.call(null,vec__12972,(0),null);
var source = cljs.core.nth.call(null,vec__12972,(1),null);
var line = cljs.core.nth.call(null,vec__12972,(2),null);
var col = cljs.core.nth.call(null,vec__12972,(3),null);
var name = cljs.core.nth.call(null,vec__12972,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__12975){
var vec__12976 = p__12975;
var gcol = cljs.core.nth.call(null,vec__12976,(0),null);
var sidx = cljs.core.nth.call(null,vec__12976,(1),null);
var line = cljs.core.nth.call(null,vec__12976,(2),null);
var col = cljs.core.nth.call(null,vec__12976,(3),null);
var name = cljs.core.nth.call(null,vec__12976,(4),null);
var seg = vec__12976;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__12976,gcol,sidx,line,col,name,seg,relseg){
return (function (p__12979){
var vec__12980 = p__12979;
var _ = cljs.core.nth.call(null,vec__12980,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12980,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__12980,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__12980,(3),null);
var lname = cljs.core.nth.call(null,vec__12980,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__12976,gcol,sidx,line,col,name,seg,relseg))
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
var seq__12986 = cljs.core.seq.call(null,infos);
var chunk__12987 = null;
var count__12988 = (0);
var i__12989 = (0);
while(true){
if((i__12989 < count__12988)){
var info = cljs.core._nth.call(null,chunk__12987,i__12989);
var segv_13340 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_13341 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13342 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_13341 > (lc_13342 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12986,chunk__12987,count__12988,i__12989,segv_13340,gline_13341,lc_13342,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_13341 - (lc_13342 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13340], null));
});})(seq__12986,chunk__12987,count__12988,i__12989,segv_13340,gline_13341,lc_13342,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12986,chunk__12987,count__12988,i__12989,segv_13340,gline_13341,lc_13342,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13341], null),cljs.core.conj,segv_13340);
});})(seq__12986,chunk__12987,count__12988,i__12989,segv_13340,gline_13341,lc_13342,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__13343 = seq__12986;
var G__13344 = chunk__12987;
var G__13345 = count__12988;
var G__13346 = (i__12989 + (1));
seq__12986 = G__13343;
chunk__12987 = G__13344;
count__12988 = G__13345;
i__12989 = G__13346;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12986);
if(temp__5720__auto__){
var seq__12986__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12986__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__12986__$1);
var G__13347 = cljs.core.chunk_rest.call(null,seq__12986__$1);
var G__13348 = c__4550__auto__;
var G__13349 = cljs.core.count.call(null,c__4550__auto__);
var G__13350 = (0);
seq__12986 = G__13347;
chunk__12987 = G__13348;
count__12988 = G__13349;
i__12989 = G__13350;
continue;
} else {
var info = cljs.core.first.call(null,seq__12986__$1);
var segv_13351 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_13352 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13353 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_13352 > (lc_13353 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12986,chunk__12987,count__12988,i__12989,segv_13351,gline_13352,lc_13353,info,seq__12986__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_13352 - (lc_13353 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13351], null));
});})(seq__12986,chunk__12987,count__12988,i__12989,segv_13351,gline_13352,lc_13353,info,seq__12986__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12986,chunk__12987,count__12988,i__12989,segv_13351,gline_13352,lc_13353,info,seq__12986__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13352], null),cljs.core.conj,segv_13351);
});})(seq__12986,chunk__12987,count__12988,i__12989,segv_13351,gline_13352,lc_13353,info,seq__12986__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__13354 = cljs.core.next.call(null,seq__12986__$1);
var G__13355 = null;
var G__13356 = (0);
var G__13357 = (0);
seq__12986 = G__13354;
chunk__12987 = G__13355;
count__12988 = G__13356;
i__12989 = G__13357;
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
var seq__12990_13358 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__12991_13359 = null;
var count__12992_13360 = (0);
var i__12993_13361 = (0);
while(true){
if((i__12993_13361 < count__12992_13360)){
var vec__13166_13362 = cljs.core._nth.call(null,chunk__12991_13359,i__12993_13361);
var source_idx_13363 = cljs.core.nth.call(null,vec__13166_13362,(0),null);
var vec__13169_13364 = cljs.core.nth.call(null,vec__13166_13362,(1),null);
var __13365 = cljs.core.nth.call(null,vec__13169_13364,(0),null);
var lines_13366__$1 = cljs.core.nth.call(null,vec__13169_13364,(1),null);
var seq__13172_13367 = cljs.core.seq.call(null,lines_13366__$1);
var chunk__13173_13368 = null;
var count__13174_13369 = (0);
var i__13175_13370 = (0);
while(true){
if((i__13175_13370 < count__13174_13369)){
var vec__13214_13371 = cljs.core._nth.call(null,chunk__13173_13368,i__13175_13370);
var line_13372 = cljs.core.nth.call(null,vec__13214_13371,(0),null);
var cols_13373 = cljs.core.nth.call(null,vec__13214_13371,(1),null);
var seq__13217_13374 = cljs.core.seq.call(null,cols_13373);
var chunk__13218_13375 = null;
var count__13219_13376 = (0);
var i__13220_13377 = (0);
while(true){
if((i__13220_13377 < count__13219_13376)){
var vec__13227_13378 = cljs.core._nth.call(null,chunk__13218_13375,i__13220_13377);
var col_13379 = cljs.core.nth.call(null,vec__13227_13378,(0),null);
var infos_13380 = cljs.core.nth.call(null,vec__13227_13378,(1),null);
encode_cols.call(null,infos_13380,source_idx_13363,line_13372,col_13379);


var G__13381 = seq__13217_13374;
var G__13382 = chunk__13218_13375;
var G__13383 = count__13219_13376;
var G__13384 = (i__13220_13377 + (1));
seq__13217_13374 = G__13381;
chunk__13218_13375 = G__13382;
count__13219_13376 = G__13383;
i__13220_13377 = G__13384;
continue;
} else {
var temp__5720__auto___13385 = cljs.core.seq.call(null,seq__13217_13374);
if(temp__5720__auto___13385){
var seq__13217_13386__$1 = temp__5720__auto___13385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13217_13386__$1)){
var c__4550__auto___13387 = cljs.core.chunk_first.call(null,seq__13217_13386__$1);
var G__13388 = cljs.core.chunk_rest.call(null,seq__13217_13386__$1);
var G__13389 = c__4550__auto___13387;
var G__13390 = cljs.core.count.call(null,c__4550__auto___13387);
var G__13391 = (0);
seq__13217_13374 = G__13388;
chunk__13218_13375 = G__13389;
count__13219_13376 = G__13390;
i__13220_13377 = G__13391;
continue;
} else {
var vec__13230_13392 = cljs.core.first.call(null,seq__13217_13386__$1);
var col_13393 = cljs.core.nth.call(null,vec__13230_13392,(0),null);
var infos_13394 = cljs.core.nth.call(null,vec__13230_13392,(1),null);
encode_cols.call(null,infos_13394,source_idx_13363,line_13372,col_13393);


var G__13395 = cljs.core.next.call(null,seq__13217_13386__$1);
var G__13396 = null;
var G__13397 = (0);
var G__13398 = (0);
seq__13217_13374 = G__13395;
chunk__13218_13375 = G__13396;
count__13219_13376 = G__13397;
i__13220_13377 = G__13398;
continue;
}
} else {
}
}
break;
}


var G__13399 = seq__13172_13367;
var G__13400 = chunk__13173_13368;
var G__13401 = count__13174_13369;
var G__13402 = (i__13175_13370 + (1));
seq__13172_13367 = G__13399;
chunk__13173_13368 = G__13400;
count__13174_13369 = G__13401;
i__13175_13370 = G__13402;
continue;
} else {
var temp__5720__auto___13403 = cljs.core.seq.call(null,seq__13172_13367);
if(temp__5720__auto___13403){
var seq__13172_13404__$1 = temp__5720__auto___13403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13172_13404__$1)){
var c__4550__auto___13405 = cljs.core.chunk_first.call(null,seq__13172_13404__$1);
var G__13406 = cljs.core.chunk_rest.call(null,seq__13172_13404__$1);
var G__13407 = c__4550__auto___13405;
var G__13408 = cljs.core.count.call(null,c__4550__auto___13405);
var G__13409 = (0);
seq__13172_13367 = G__13406;
chunk__13173_13368 = G__13407;
count__13174_13369 = G__13408;
i__13175_13370 = G__13409;
continue;
} else {
var vec__13233_13410 = cljs.core.first.call(null,seq__13172_13404__$1);
var line_13411 = cljs.core.nth.call(null,vec__13233_13410,(0),null);
var cols_13412 = cljs.core.nth.call(null,vec__13233_13410,(1),null);
var seq__13236_13413 = cljs.core.seq.call(null,cols_13412);
var chunk__13237_13414 = null;
var count__13238_13415 = (0);
var i__13239_13416 = (0);
while(true){
if((i__13239_13416 < count__13238_13415)){
var vec__13246_13417 = cljs.core._nth.call(null,chunk__13237_13414,i__13239_13416);
var col_13418 = cljs.core.nth.call(null,vec__13246_13417,(0),null);
var infos_13419 = cljs.core.nth.call(null,vec__13246_13417,(1),null);
encode_cols.call(null,infos_13419,source_idx_13363,line_13411,col_13418);


var G__13420 = seq__13236_13413;
var G__13421 = chunk__13237_13414;
var G__13422 = count__13238_13415;
var G__13423 = (i__13239_13416 + (1));
seq__13236_13413 = G__13420;
chunk__13237_13414 = G__13421;
count__13238_13415 = G__13422;
i__13239_13416 = G__13423;
continue;
} else {
var temp__5720__auto___13424__$1 = cljs.core.seq.call(null,seq__13236_13413);
if(temp__5720__auto___13424__$1){
var seq__13236_13425__$1 = temp__5720__auto___13424__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13236_13425__$1)){
var c__4550__auto___13426 = cljs.core.chunk_first.call(null,seq__13236_13425__$1);
var G__13427 = cljs.core.chunk_rest.call(null,seq__13236_13425__$1);
var G__13428 = c__4550__auto___13426;
var G__13429 = cljs.core.count.call(null,c__4550__auto___13426);
var G__13430 = (0);
seq__13236_13413 = G__13427;
chunk__13237_13414 = G__13428;
count__13238_13415 = G__13429;
i__13239_13416 = G__13430;
continue;
} else {
var vec__13249_13431 = cljs.core.first.call(null,seq__13236_13425__$1);
var col_13432 = cljs.core.nth.call(null,vec__13249_13431,(0),null);
var infos_13433 = cljs.core.nth.call(null,vec__13249_13431,(1),null);
encode_cols.call(null,infos_13433,source_idx_13363,line_13411,col_13432);


var G__13434 = cljs.core.next.call(null,seq__13236_13425__$1);
var G__13435 = null;
var G__13436 = (0);
var G__13437 = (0);
seq__13236_13413 = G__13434;
chunk__13237_13414 = G__13435;
count__13238_13415 = G__13436;
i__13239_13416 = G__13437;
continue;
}
} else {
}
}
break;
}


var G__13438 = cljs.core.next.call(null,seq__13172_13404__$1);
var G__13439 = null;
var G__13440 = (0);
var G__13441 = (0);
seq__13172_13367 = G__13438;
chunk__13173_13368 = G__13439;
count__13174_13369 = G__13440;
i__13175_13370 = G__13441;
continue;
}
} else {
}
}
break;
}


var G__13442 = seq__12990_13358;
var G__13443 = chunk__12991_13359;
var G__13444 = count__12992_13360;
var G__13445 = (i__12993_13361 + (1));
seq__12990_13358 = G__13442;
chunk__12991_13359 = G__13443;
count__12992_13360 = G__13444;
i__12993_13361 = G__13445;
continue;
} else {
var temp__5720__auto___13446 = cljs.core.seq.call(null,seq__12990_13358);
if(temp__5720__auto___13446){
var seq__12990_13447__$1 = temp__5720__auto___13446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12990_13447__$1)){
var c__4550__auto___13448 = cljs.core.chunk_first.call(null,seq__12990_13447__$1);
var G__13449 = cljs.core.chunk_rest.call(null,seq__12990_13447__$1);
var G__13450 = c__4550__auto___13448;
var G__13451 = cljs.core.count.call(null,c__4550__auto___13448);
var G__13452 = (0);
seq__12990_13358 = G__13449;
chunk__12991_13359 = G__13450;
count__12992_13360 = G__13451;
i__12993_13361 = G__13452;
continue;
} else {
var vec__13252_13453 = cljs.core.first.call(null,seq__12990_13447__$1);
var source_idx_13454 = cljs.core.nth.call(null,vec__13252_13453,(0),null);
var vec__13255_13455 = cljs.core.nth.call(null,vec__13252_13453,(1),null);
var __13456 = cljs.core.nth.call(null,vec__13255_13455,(0),null);
var lines_13457__$1 = cljs.core.nth.call(null,vec__13255_13455,(1),null);
var seq__13258_13458 = cljs.core.seq.call(null,lines_13457__$1);
var chunk__13259_13459 = null;
var count__13260_13460 = (0);
var i__13261_13461 = (0);
while(true){
if((i__13261_13461 < count__13260_13460)){
var vec__13300_13462 = cljs.core._nth.call(null,chunk__13259_13459,i__13261_13461);
var line_13463 = cljs.core.nth.call(null,vec__13300_13462,(0),null);
var cols_13464 = cljs.core.nth.call(null,vec__13300_13462,(1),null);
var seq__13303_13465 = cljs.core.seq.call(null,cols_13464);
var chunk__13304_13466 = null;
var count__13305_13467 = (0);
var i__13306_13468 = (0);
while(true){
if((i__13306_13468 < count__13305_13467)){
var vec__13313_13469 = cljs.core._nth.call(null,chunk__13304_13466,i__13306_13468);
var col_13470 = cljs.core.nth.call(null,vec__13313_13469,(0),null);
var infos_13471 = cljs.core.nth.call(null,vec__13313_13469,(1),null);
encode_cols.call(null,infos_13471,source_idx_13454,line_13463,col_13470);


var G__13472 = seq__13303_13465;
var G__13473 = chunk__13304_13466;
var G__13474 = count__13305_13467;
var G__13475 = (i__13306_13468 + (1));
seq__13303_13465 = G__13472;
chunk__13304_13466 = G__13473;
count__13305_13467 = G__13474;
i__13306_13468 = G__13475;
continue;
} else {
var temp__5720__auto___13476__$1 = cljs.core.seq.call(null,seq__13303_13465);
if(temp__5720__auto___13476__$1){
var seq__13303_13477__$1 = temp__5720__auto___13476__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13303_13477__$1)){
var c__4550__auto___13478 = cljs.core.chunk_first.call(null,seq__13303_13477__$1);
var G__13479 = cljs.core.chunk_rest.call(null,seq__13303_13477__$1);
var G__13480 = c__4550__auto___13478;
var G__13481 = cljs.core.count.call(null,c__4550__auto___13478);
var G__13482 = (0);
seq__13303_13465 = G__13479;
chunk__13304_13466 = G__13480;
count__13305_13467 = G__13481;
i__13306_13468 = G__13482;
continue;
} else {
var vec__13316_13483 = cljs.core.first.call(null,seq__13303_13477__$1);
var col_13484 = cljs.core.nth.call(null,vec__13316_13483,(0),null);
var infos_13485 = cljs.core.nth.call(null,vec__13316_13483,(1),null);
encode_cols.call(null,infos_13485,source_idx_13454,line_13463,col_13484);


var G__13486 = cljs.core.next.call(null,seq__13303_13477__$1);
var G__13487 = null;
var G__13488 = (0);
var G__13489 = (0);
seq__13303_13465 = G__13486;
chunk__13304_13466 = G__13487;
count__13305_13467 = G__13488;
i__13306_13468 = G__13489;
continue;
}
} else {
}
}
break;
}


var G__13490 = seq__13258_13458;
var G__13491 = chunk__13259_13459;
var G__13492 = count__13260_13460;
var G__13493 = (i__13261_13461 + (1));
seq__13258_13458 = G__13490;
chunk__13259_13459 = G__13491;
count__13260_13460 = G__13492;
i__13261_13461 = G__13493;
continue;
} else {
var temp__5720__auto___13494__$1 = cljs.core.seq.call(null,seq__13258_13458);
if(temp__5720__auto___13494__$1){
var seq__13258_13495__$1 = temp__5720__auto___13494__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13258_13495__$1)){
var c__4550__auto___13496 = cljs.core.chunk_first.call(null,seq__13258_13495__$1);
var G__13497 = cljs.core.chunk_rest.call(null,seq__13258_13495__$1);
var G__13498 = c__4550__auto___13496;
var G__13499 = cljs.core.count.call(null,c__4550__auto___13496);
var G__13500 = (0);
seq__13258_13458 = G__13497;
chunk__13259_13459 = G__13498;
count__13260_13460 = G__13499;
i__13261_13461 = G__13500;
continue;
} else {
var vec__13319_13501 = cljs.core.first.call(null,seq__13258_13495__$1);
var line_13502 = cljs.core.nth.call(null,vec__13319_13501,(0),null);
var cols_13503 = cljs.core.nth.call(null,vec__13319_13501,(1),null);
var seq__13322_13504 = cljs.core.seq.call(null,cols_13503);
var chunk__13323_13505 = null;
var count__13324_13506 = (0);
var i__13325_13507 = (0);
while(true){
if((i__13325_13507 < count__13324_13506)){
var vec__13332_13508 = cljs.core._nth.call(null,chunk__13323_13505,i__13325_13507);
var col_13509 = cljs.core.nth.call(null,vec__13332_13508,(0),null);
var infos_13510 = cljs.core.nth.call(null,vec__13332_13508,(1),null);
encode_cols.call(null,infos_13510,source_idx_13454,line_13502,col_13509);


var G__13511 = seq__13322_13504;
var G__13512 = chunk__13323_13505;
var G__13513 = count__13324_13506;
var G__13514 = (i__13325_13507 + (1));
seq__13322_13504 = G__13511;
chunk__13323_13505 = G__13512;
count__13324_13506 = G__13513;
i__13325_13507 = G__13514;
continue;
} else {
var temp__5720__auto___13515__$2 = cljs.core.seq.call(null,seq__13322_13504);
if(temp__5720__auto___13515__$2){
var seq__13322_13516__$1 = temp__5720__auto___13515__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13322_13516__$1)){
var c__4550__auto___13517 = cljs.core.chunk_first.call(null,seq__13322_13516__$1);
var G__13518 = cljs.core.chunk_rest.call(null,seq__13322_13516__$1);
var G__13519 = c__4550__auto___13517;
var G__13520 = cljs.core.count.call(null,c__4550__auto___13517);
var G__13521 = (0);
seq__13322_13504 = G__13518;
chunk__13323_13505 = G__13519;
count__13324_13506 = G__13520;
i__13325_13507 = G__13521;
continue;
} else {
var vec__13335_13522 = cljs.core.first.call(null,seq__13322_13516__$1);
var col_13523 = cljs.core.nth.call(null,vec__13335_13522,(0),null);
var infos_13524 = cljs.core.nth.call(null,vec__13335_13522,(1),null);
encode_cols.call(null,infos_13524,source_idx_13454,line_13502,col_13523);


var G__13525 = cljs.core.next.call(null,seq__13322_13516__$1);
var G__13526 = null;
var G__13527 = (0);
var G__13528 = (0);
seq__13322_13504 = G__13525;
chunk__13323_13505 = G__13526;
count__13324_13506 = G__13527;
i__13325_13507 = G__13528;
continue;
}
} else {
}
}
break;
}


var G__13529 = cljs.core.next.call(null,seq__13258_13495__$1);
var G__13530 = null;
var G__13531 = (0);
var G__13532 = (0);
seq__13258_13458 = G__13529;
chunk__13259_13459 = G__13530;
count__13260_13460 = G__13531;
i__13261_13461 = G__13532;
continue;
}
} else {
}
}
break;
}


var G__13533 = cljs.core.next.call(null,seq__12990_13447__$1);
var G__13534 = null;
var G__13535 = (0);
var G__13536 = (0);
seq__12990_13358 = G__13533;
chunk__12991_13359 = G__13534;
count__12992_13360 = G__13535;
i__12993_13361 = G__13536;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__13338 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12983_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12983_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12984_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__12984_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12985_SHARP_){
return clojure.string.join.call(null,",",p1__12985_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__13339 = G__13338;
goog.object.set(G__13339,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__13339;
} else {
return G__13338;
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
var vec__13537 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__13537,(0),null);
var col_map = cljs.core.nth.call(null,vec__13537,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__13540 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__13540,(0),null);
var infos = cljs.core.nth.call(null,vec__13540,(1),null);
var G__13546 = cljs.core.next.call(null,col_map_seq);
var G__13547 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__13540,col,infos,vec__13537,line,col_map){
return (function (v,p__13543){
var map__13544 = p__13543;
var map__13544__$1 = (((((!((map__13544 == null))))?(((((map__13544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13544):map__13544);
var gline = cljs.core.get.call(null,map__13544__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__13544__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__13540,col,infos,vec__13537,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__13546;
new_cols = G__13547;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__13548 = cljs.core.next.call(null,line_map_seq);
var G__13549 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__13548;
new_lines = G__13549;
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
var seq__13550_13822 = cljs.core.seq.call(null,reverse_map);
var chunk__13551_13823 = null;
var count__13552_13824 = (0);
var i__13553_13825 = (0);
while(true){
if((i__13553_13825 < count__13552_13824)){
var vec__13688_13826 = cljs.core._nth.call(null,chunk__13551_13823,i__13553_13825);
var line_13827 = cljs.core.nth.call(null,vec__13688_13826,(0),null);
var columns_13828 = cljs.core.nth.call(null,vec__13688_13826,(1),null);
var seq__13691_13829 = cljs.core.seq.call(null,columns_13828);
var chunk__13692_13830 = null;
var count__13693_13831 = (0);
var i__13694_13832 = (0);
while(true){
if((i__13694_13832 < count__13693_13831)){
var vec__13725_13833 = cljs.core._nth.call(null,chunk__13692_13830,i__13694_13832);
var column_13834 = cljs.core.nth.call(null,vec__13725_13833,(0),null);
var column_info_13835 = cljs.core.nth.call(null,vec__13725_13833,(1),null);
var seq__13728_13836 = cljs.core.seq.call(null,column_info_13835);
var chunk__13729_13837 = null;
var count__13730_13838 = (0);
var i__13731_13839 = (0);
while(true){
if((i__13731_13839 < count__13730_13838)){
var map__13736_13840 = cljs.core._nth.call(null,chunk__13729_13837,i__13731_13839);
var map__13736_13841__$1 = (((((!((map__13736_13840 == null))))?(((((map__13736_13840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13736_13840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13736_13840):map__13736_13840);
var gline_13842 = cljs.core.get.call(null,map__13736_13841__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13843 = cljs.core.get.call(null,map__13736_13841__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13844 = cljs.core.get.call(null,map__13736_13841__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13842], null),cljs.core.fnil.call(null,((function (seq__13728_13836,chunk__13729_13837,count__13730_13838,i__13731_13839,seq__13691_13829,chunk__13692_13830,count__13693_13831,i__13694_13832,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13736_13840,map__13736_13841__$1,gline_13842,gcol_13843,name_13844,vec__13725_13833,column_13834,column_info_13835,vec__13688_13826,line_13827,columns_13828,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13843], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13827,new cljs.core.Keyword(null,"col","col",-1959363084),column_13834,new cljs.core.Keyword(null,"name","name",1843675177),name_13844], null));
});})(seq__13728_13836,chunk__13729_13837,count__13730_13838,i__13731_13839,seq__13691_13829,chunk__13692_13830,count__13693_13831,i__13694_13832,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13736_13840,map__13736_13841__$1,gline_13842,gcol_13843,name_13844,vec__13725_13833,column_13834,column_info_13835,vec__13688_13826,line_13827,columns_13828,inverted))
,cljs.core.sorted_map.call(null)));


var G__13845 = seq__13728_13836;
var G__13846 = chunk__13729_13837;
var G__13847 = count__13730_13838;
var G__13848 = (i__13731_13839 + (1));
seq__13728_13836 = G__13845;
chunk__13729_13837 = G__13846;
count__13730_13838 = G__13847;
i__13731_13839 = G__13848;
continue;
} else {
var temp__5720__auto___13849 = cljs.core.seq.call(null,seq__13728_13836);
if(temp__5720__auto___13849){
var seq__13728_13850__$1 = temp__5720__auto___13849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13728_13850__$1)){
var c__4550__auto___13851 = cljs.core.chunk_first.call(null,seq__13728_13850__$1);
var G__13852 = cljs.core.chunk_rest.call(null,seq__13728_13850__$1);
var G__13853 = c__4550__auto___13851;
var G__13854 = cljs.core.count.call(null,c__4550__auto___13851);
var G__13855 = (0);
seq__13728_13836 = G__13852;
chunk__13729_13837 = G__13853;
count__13730_13838 = G__13854;
i__13731_13839 = G__13855;
continue;
} else {
var map__13738_13856 = cljs.core.first.call(null,seq__13728_13850__$1);
var map__13738_13857__$1 = (((((!((map__13738_13856 == null))))?(((((map__13738_13856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13738_13856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13738_13856):map__13738_13856);
var gline_13858 = cljs.core.get.call(null,map__13738_13857__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13859 = cljs.core.get.call(null,map__13738_13857__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13860 = cljs.core.get.call(null,map__13738_13857__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13858], null),cljs.core.fnil.call(null,((function (seq__13728_13836,chunk__13729_13837,count__13730_13838,i__13731_13839,seq__13691_13829,chunk__13692_13830,count__13693_13831,i__13694_13832,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13738_13856,map__13738_13857__$1,gline_13858,gcol_13859,name_13860,seq__13728_13850__$1,temp__5720__auto___13849,vec__13725_13833,column_13834,column_info_13835,vec__13688_13826,line_13827,columns_13828,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13859], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13827,new cljs.core.Keyword(null,"col","col",-1959363084),column_13834,new cljs.core.Keyword(null,"name","name",1843675177),name_13860], null));
});})(seq__13728_13836,chunk__13729_13837,count__13730_13838,i__13731_13839,seq__13691_13829,chunk__13692_13830,count__13693_13831,i__13694_13832,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13738_13856,map__13738_13857__$1,gline_13858,gcol_13859,name_13860,seq__13728_13850__$1,temp__5720__auto___13849,vec__13725_13833,column_13834,column_info_13835,vec__13688_13826,line_13827,columns_13828,inverted))
,cljs.core.sorted_map.call(null)));


var G__13861 = cljs.core.next.call(null,seq__13728_13850__$1);
var G__13862 = null;
var G__13863 = (0);
var G__13864 = (0);
seq__13728_13836 = G__13861;
chunk__13729_13837 = G__13862;
count__13730_13838 = G__13863;
i__13731_13839 = G__13864;
continue;
}
} else {
}
}
break;
}


var G__13865 = seq__13691_13829;
var G__13866 = chunk__13692_13830;
var G__13867 = count__13693_13831;
var G__13868 = (i__13694_13832 + (1));
seq__13691_13829 = G__13865;
chunk__13692_13830 = G__13866;
count__13693_13831 = G__13867;
i__13694_13832 = G__13868;
continue;
} else {
var temp__5720__auto___13869 = cljs.core.seq.call(null,seq__13691_13829);
if(temp__5720__auto___13869){
var seq__13691_13870__$1 = temp__5720__auto___13869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13691_13870__$1)){
var c__4550__auto___13871 = cljs.core.chunk_first.call(null,seq__13691_13870__$1);
var G__13872 = cljs.core.chunk_rest.call(null,seq__13691_13870__$1);
var G__13873 = c__4550__auto___13871;
var G__13874 = cljs.core.count.call(null,c__4550__auto___13871);
var G__13875 = (0);
seq__13691_13829 = G__13872;
chunk__13692_13830 = G__13873;
count__13693_13831 = G__13874;
i__13694_13832 = G__13875;
continue;
} else {
var vec__13740_13876 = cljs.core.first.call(null,seq__13691_13870__$1);
var column_13877 = cljs.core.nth.call(null,vec__13740_13876,(0),null);
var column_info_13878 = cljs.core.nth.call(null,vec__13740_13876,(1),null);
var seq__13743_13879 = cljs.core.seq.call(null,column_info_13878);
var chunk__13744_13880 = null;
var count__13745_13881 = (0);
var i__13746_13882 = (0);
while(true){
if((i__13746_13882 < count__13745_13881)){
var map__13751_13883 = cljs.core._nth.call(null,chunk__13744_13880,i__13746_13882);
var map__13751_13884__$1 = (((((!((map__13751_13883 == null))))?(((((map__13751_13883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13751_13883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13751_13883):map__13751_13883);
var gline_13885 = cljs.core.get.call(null,map__13751_13884__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13886 = cljs.core.get.call(null,map__13751_13884__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13887 = cljs.core.get.call(null,map__13751_13884__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13885], null),cljs.core.fnil.call(null,((function (seq__13743_13879,chunk__13744_13880,count__13745_13881,i__13746_13882,seq__13691_13829,chunk__13692_13830,count__13693_13831,i__13694_13832,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13751_13883,map__13751_13884__$1,gline_13885,gcol_13886,name_13887,vec__13740_13876,column_13877,column_info_13878,seq__13691_13870__$1,temp__5720__auto___13869,vec__13688_13826,line_13827,columns_13828,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13886], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13827,new cljs.core.Keyword(null,"col","col",-1959363084),column_13877,new cljs.core.Keyword(null,"name","name",1843675177),name_13887], null));
});})(seq__13743_13879,chunk__13744_13880,count__13745_13881,i__13746_13882,seq__13691_13829,chunk__13692_13830,count__13693_13831,i__13694_13832,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13751_13883,map__13751_13884__$1,gline_13885,gcol_13886,name_13887,vec__13740_13876,column_13877,column_info_13878,seq__13691_13870__$1,temp__5720__auto___13869,vec__13688_13826,line_13827,columns_13828,inverted))
,cljs.core.sorted_map.call(null)));


var G__13888 = seq__13743_13879;
var G__13889 = chunk__13744_13880;
var G__13890 = count__13745_13881;
var G__13891 = (i__13746_13882 + (1));
seq__13743_13879 = G__13888;
chunk__13744_13880 = G__13889;
count__13745_13881 = G__13890;
i__13746_13882 = G__13891;
continue;
} else {
var temp__5720__auto___13892__$1 = cljs.core.seq.call(null,seq__13743_13879);
if(temp__5720__auto___13892__$1){
var seq__13743_13893__$1 = temp__5720__auto___13892__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13743_13893__$1)){
var c__4550__auto___13894 = cljs.core.chunk_first.call(null,seq__13743_13893__$1);
var G__13895 = cljs.core.chunk_rest.call(null,seq__13743_13893__$1);
var G__13896 = c__4550__auto___13894;
var G__13897 = cljs.core.count.call(null,c__4550__auto___13894);
var G__13898 = (0);
seq__13743_13879 = G__13895;
chunk__13744_13880 = G__13896;
count__13745_13881 = G__13897;
i__13746_13882 = G__13898;
continue;
} else {
var map__13753_13899 = cljs.core.first.call(null,seq__13743_13893__$1);
var map__13753_13900__$1 = (((((!((map__13753_13899 == null))))?(((((map__13753_13899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13753_13899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13753_13899):map__13753_13899);
var gline_13901 = cljs.core.get.call(null,map__13753_13900__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13902 = cljs.core.get.call(null,map__13753_13900__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13903 = cljs.core.get.call(null,map__13753_13900__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13901], null),cljs.core.fnil.call(null,((function (seq__13743_13879,chunk__13744_13880,count__13745_13881,i__13746_13882,seq__13691_13829,chunk__13692_13830,count__13693_13831,i__13694_13832,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13753_13899,map__13753_13900__$1,gline_13901,gcol_13902,name_13903,seq__13743_13893__$1,temp__5720__auto___13892__$1,vec__13740_13876,column_13877,column_info_13878,seq__13691_13870__$1,temp__5720__auto___13869,vec__13688_13826,line_13827,columns_13828,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13902], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13827,new cljs.core.Keyword(null,"col","col",-1959363084),column_13877,new cljs.core.Keyword(null,"name","name",1843675177),name_13903], null));
});})(seq__13743_13879,chunk__13744_13880,count__13745_13881,i__13746_13882,seq__13691_13829,chunk__13692_13830,count__13693_13831,i__13694_13832,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13753_13899,map__13753_13900__$1,gline_13901,gcol_13902,name_13903,seq__13743_13893__$1,temp__5720__auto___13892__$1,vec__13740_13876,column_13877,column_info_13878,seq__13691_13870__$1,temp__5720__auto___13869,vec__13688_13826,line_13827,columns_13828,inverted))
,cljs.core.sorted_map.call(null)));


var G__13904 = cljs.core.next.call(null,seq__13743_13893__$1);
var G__13905 = null;
var G__13906 = (0);
var G__13907 = (0);
seq__13743_13879 = G__13904;
chunk__13744_13880 = G__13905;
count__13745_13881 = G__13906;
i__13746_13882 = G__13907;
continue;
}
} else {
}
}
break;
}


var G__13908 = cljs.core.next.call(null,seq__13691_13870__$1);
var G__13909 = null;
var G__13910 = (0);
var G__13911 = (0);
seq__13691_13829 = G__13908;
chunk__13692_13830 = G__13909;
count__13693_13831 = G__13910;
i__13694_13832 = G__13911;
continue;
}
} else {
}
}
break;
}


var G__13912 = seq__13550_13822;
var G__13913 = chunk__13551_13823;
var G__13914 = count__13552_13824;
var G__13915 = (i__13553_13825 + (1));
seq__13550_13822 = G__13912;
chunk__13551_13823 = G__13913;
count__13552_13824 = G__13914;
i__13553_13825 = G__13915;
continue;
} else {
var temp__5720__auto___13916 = cljs.core.seq.call(null,seq__13550_13822);
if(temp__5720__auto___13916){
var seq__13550_13917__$1 = temp__5720__auto___13916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13550_13917__$1)){
var c__4550__auto___13918 = cljs.core.chunk_first.call(null,seq__13550_13917__$1);
var G__13919 = cljs.core.chunk_rest.call(null,seq__13550_13917__$1);
var G__13920 = c__4550__auto___13918;
var G__13921 = cljs.core.count.call(null,c__4550__auto___13918);
var G__13922 = (0);
seq__13550_13822 = G__13919;
chunk__13551_13823 = G__13920;
count__13552_13824 = G__13921;
i__13553_13825 = G__13922;
continue;
} else {
var vec__13755_13923 = cljs.core.first.call(null,seq__13550_13917__$1);
var line_13924 = cljs.core.nth.call(null,vec__13755_13923,(0),null);
var columns_13925 = cljs.core.nth.call(null,vec__13755_13923,(1),null);
var seq__13758_13926 = cljs.core.seq.call(null,columns_13925);
var chunk__13759_13927 = null;
var count__13760_13928 = (0);
var i__13761_13929 = (0);
while(true){
if((i__13761_13929 < count__13760_13928)){
var vec__13792_13930 = cljs.core._nth.call(null,chunk__13759_13927,i__13761_13929);
var column_13931 = cljs.core.nth.call(null,vec__13792_13930,(0),null);
var column_info_13932 = cljs.core.nth.call(null,vec__13792_13930,(1),null);
var seq__13795_13933 = cljs.core.seq.call(null,column_info_13932);
var chunk__13796_13934 = null;
var count__13797_13935 = (0);
var i__13798_13936 = (0);
while(true){
if((i__13798_13936 < count__13797_13935)){
var map__13803_13937 = cljs.core._nth.call(null,chunk__13796_13934,i__13798_13936);
var map__13803_13938__$1 = (((((!((map__13803_13937 == null))))?(((((map__13803_13937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13803_13937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13803_13937):map__13803_13937);
var gline_13939 = cljs.core.get.call(null,map__13803_13938__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13940 = cljs.core.get.call(null,map__13803_13938__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13941 = cljs.core.get.call(null,map__13803_13938__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13939], null),cljs.core.fnil.call(null,((function (seq__13795_13933,chunk__13796_13934,count__13797_13935,i__13798_13936,seq__13758_13926,chunk__13759_13927,count__13760_13928,i__13761_13929,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13803_13937,map__13803_13938__$1,gline_13939,gcol_13940,name_13941,vec__13792_13930,column_13931,column_info_13932,vec__13755_13923,line_13924,columns_13925,seq__13550_13917__$1,temp__5720__auto___13916,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13940], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13924,new cljs.core.Keyword(null,"col","col",-1959363084),column_13931,new cljs.core.Keyword(null,"name","name",1843675177),name_13941], null));
});})(seq__13795_13933,chunk__13796_13934,count__13797_13935,i__13798_13936,seq__13758_13926,chunk__13759_13927,count__13760_13928,i__13761_13929,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13803_13937,map__13803_13938__$1,gline_13939,gcol_13940,name_13941,vec__13792_13930,column_13931,column_info_13932,vec__13755_13923,line_13924,columns_13925,seq__13550_13917__$1,temp__5720__auto___13916,inverted))
,cljs.core.sorted_map.call(null)));


var G__13942 = seq__13795_13933;
var G__13943 = chunk__13796_13934;
var G__13944 = count__13797_13935;
var G__13945 = (i__13798_13936 + (1));
seq__13795_13933 = G__13942;
chunk__13796_13934 = G__13943;
count__13797_13935 = G__13944;
i__13798_13936 = G__13945;
continue;
} else {
var temp__5720__auto___13946__$1 = cljs.core.seq.call(null,seq__13795_13933);
if(temp__5720__auto___13946__$1){
var seq__13795_13947__$1 = temp__5720__auto___13946__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13795_13947__$1)){
var c__4550__auto___13948 = cljs.core.chunk_first.call(null,seq__13795_13947__$1);
var G__13949 = cljs.core.chunk_rest.call(null,seq__13795_13947__$1);
var G__13950 = c__4550__auto___13948;
var G__13951 = cljs.core.count.call(null,c__4550__auto___13948);
var G__13952 = (0);
seq__13795_13933 = G__13949;
chunk__13796_13934 = G__13950;
count__13797_13935 = G__13951;
i__13798_13936 = G__13952;
continue;
} else {
var map__13805_13953 = cljs.core.first.call(null,seq__13795_13947__$1);
var map__13805_13954__$1 = (((((!((map__13805_13953 == null))))?(((((map__13805_13953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13805_13953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13805_13953):map__13805_13953);
var gline_13955 = cljs.core.get.call(null,map__13805_13954__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13956 = cljs.core.get.call(null,map__13805_13954__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13957 = cljs.core.get.call(null,map__13805_13954__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13955], null),cljs.core.fnil.call(null,((function (seq__13795_13933,chunk__13796_13934,count__13797_13935,i__13798_13936,seq__13758_13926,chunk__13759_13927,count__13760_13928,i__13761_13929,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13805_13953,map__13805_13954__$1,gline_13955,gcol_13956,name_13957,seq__13795_13947__$1,temp__5720__auto___13946__$1,vec__13792_13930,column_13931,column_info_13932,vec__13755_13923,line_13924,columns_13925,seq__13550_13917__$1,temp__5720__auto___13916,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13956], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13924,new cljs.core.Keyword(null,"col","col",-1959363084),column_13931,new cljs.core.Keyword(null,"name","name",1843675177),name_13957], null));
});})(seq__13795_13933,chunk__13796_13934,count__13797_13935,i__13798_13936,seq__13758_13926,chunk__13759_13927,count__13760_13928,i__13761_13929,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13805_13953,map__13805_13954__$1,gline_13955,gcol_13956,name_13957,seq__13795_13947__$1,temp__5720__auto___13946__$1,vec__13792_13930,column_13931,column_info_13932,vec__13755_13923,line_13924,columns_13925,seq__13550_13917__$1,temp__5720__auto___13916,inverted))
,cljs.core.sorted_map.call(null)));


var G__13958 = cljs.core.next.call(null,seq__13795_13947__$1);
var G__13959 = null;
var G__13960 = (0);
var G__13961 = (0);
seq__13795_13933 = G__13958;
chunk__13796_13934 = G__13959;
count__13797_13935 = G__13960;
i__13798_13936 = G__13961;
continue;
}
} else {
}
}
break;
}


var G__13962 = seq__13758_13926;
var G__13963 = chunk__13759_13927;
var G__13964 = count__13760_13928;
var G__13965 = (i__13761_13929 + (1));
seq__13758_13926 = G__13962;
chunk__13759_13927 = G__13963;
count__13760_13928 = G__13964;
i__13761_13929 = G__13965;
continue;
} else {
var temp__5720__auto___13966__$1 = cljs.core.seq.call(null,seq__13758_13926);
if(temp__5720__auto___13966__$1){
var seq__13758_13967__$1 = temp__5720__auto___13966__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13758_13967__$1)){
var c__4550__auto___13968 = cljs.core.chunk_first.call(null,seq__13758_13967__$1);
var G__13969 = cljs.core.chunk_rest.call(null,seq__13758_13967__$1);
var G__13970 = c__4550__auto___13968;
var G__13971 = cljs.core.count.call(null,c__4550__auto___13968);
var G__13972 = (0);
seq__13758_13926 = G__13969;
chunk__13759_13927 = G__13970;
count__13760_13928 = G__13971;
i__13761_13929 = G__13972;
continue;
} else {
var vec__13807_13973 = cljs.core.first.call(null,seq__13758_13967__$1);
var column_13974 = cljs.core.nth.call(null,vec__13807_13973,(0),null);
var column_info_13975 = cljs.core.nth.call(null,vec__13807_13973,(1),null);
var seq__13810_13976 = cljs.core.seq.call(null,column_info_13975);
var chunk__13811_13977 = null;
var count__13812_13978 = (0);
var i__13813_13979 = (0);
while(true){
if((i__13813_13979 < count__13812_13978)){
var map__13818_13980 = cljs.core._nth.call(null,chunk__13811_13977,i__13813_13979);
var map__13818_13981__$1 = (((((!((map__13818_13980 == null))))?(((((map__13818_13980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13818_13980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13818_13980):map__13818_13980);
var gline_13982 = cljs.core.get.call(null,map__13818_13981__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13983 = cljs.core.get.call(null,map__13818_13981__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13984 = cljs.core.get.call(null,map__13818_13981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13982], null),cljs.core.fnil.call(null,((function (seq__13810_13976,chunk__13811_13977,count__13812_13978,i__13813_13979,seq__13758_13926,chunk__13759_13927,count__13760_13928,i__13761_13929,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13818_13980,map__13818_13981__$1,gline_13982,gcol_13983,name_13984,vec__13807_13973,column_13974,column_info_13975,seq__13758_13967__$1,temp__5720__auto___13966__$1,vec__13755_13923,line_13924,columns_13925,seq__13550_13917__$1,temp__5720__auto___13916,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13983], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13924,new cljs.core.Keyword(null,"col","col",-1959363084),column_13974,new cljs.core.Keyword(null,"name","name",1843675177),name_13984], null));
});})(seq__13810_13976,chunk__13811_13977,count__13812_13978,i__13813_13979,seq__13758_13926,chunk__13759_13927,count__13760_13928,i__13761_13929,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13818_13980,map__13818_13981__$1,gline_13982,gcol_13983,name_13984,vec__13807_13973,column_13974,column_info_13975,seq__13758_13967__$1,temp__5720__auto___13966__$1,vec__13755_13923,line_13924,columns_13925,seq__13550_13917__$1,temp__5720__auto___13916,inverted))
,cljs.core.sorted_map.call(null)));


var G__13985 = seq__13810_13976;
var G__13986 = chunk__13811_13977;
var G__13987 = count__13812_13978;
var G__13988 = (i__13813_13979 + (1));
seq__13810_13976 = G__13985;
chunk__13811_13977 = G__13986;
count__13812_13978 = G__13987;
i__13813_13979 = G__13988;
continue;
} else {
var temp__5720__auto___13989__$2 = cljs.core.seq.call(null,seq__13810_13976);
if(temp__5720__auto___13989__$2){
var seq__13810_13990__$1 = temp__5720__auto___13989__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13810_13990__$1)){
var c__4550__auto___13991 = cljs.core.chunk_first.call(null,seq__13810_13990__$1);
var G__13992 = cljs.core.chunk_rest.call(null,seq__13810_13990__$1);
var G__13993 = c__4550__auto___13991;
var G__13994 = cljs.core.count.call(null,c__4550__auto___13991);
var G__13995 = (0);
seq__13810_13976 = G__13992;
chunk__13811_13977 = G__13993;
count__13812_13978 = G__13994;
i__13813_13979 = G__13995;
continue;
} else {
var map__13820_13996 = cljs.core.first.call(null,seq__13810_13990__$1);
var map__13820_13997__$1 = (((((!((map__13820_13996 == null))))?(((((map__13820_13996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13820_13996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13820_13996):map__13820_13996);
var gline_13998 = cljs.core.get.call(null,map__13820_13997__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13999 = cljs.core.get.call(null,map__13820_13997__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14000 = cljs.core.get.call(null,map__13820_13997__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13998], null),cljs.core.fnil.call(null,((function (seq__13810_13976,chunk__13811_13977,count__13812_13978,i__13813_13979,seq__13758_13926,chunk__13759_13927,count__13760_13928,i__13761_13929,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13820_13996,map__13820_13997__$1,gline_13998,gcol_13999,name_14000,seq__13810_13990__$1,temp__5720__auto___13989__$2,vec__13807_13973,column_13974,column_info_13975,seq__13758_13967__$1,temp__5720__auto___13966__$1,vec__13755_13923,line_13924,columns_13925,seq__13550_13917__$1,temp__5720__auto___13916,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13999], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13924,new cljs.core.Keyword(null,"col","col",-1959363084),column_13974,new cljs.core.Keyword(null,"name","name",1843675177),name_14000], null));
});})(seq__13810_13976,chunk__13811_13977,count__13812_13978,i__13813_13979,seq__13758_13926,chunk__13759_13927,count__13760_13928,i__13761_13929,seq__13550_13822,chunk__13551_13823,count__13552_13824,i__13553_13825,map__13820_13996,map__13820_13997__$1,gline_13998,gcol_13999,name_14000,seq__13810_13990__$1,temp__5720__auto___13989__$2,vec__13807_13973,column_13974,column_info_13975,seq__13758_13967__$1,temp__5720__auto___13966__$1,vec__13755_13923,line_13924,columns_13925,seq__13550_13917__$1,temp__5720__auto___13916,inverted))
,cljs.core.sorted_map.call(null)));


var G__14001 = cljs.core.next.call(null,seq__13810_13990__$1);
var G__14002 = null;
var G__14003 = (0);
var G__14004 = (0);
seq__13810_13976 = G__14001;
chunk__13811_13977 = G__14002;
count__13812_13978 = G__14003;
i__13813_13979 = G__14004;
continue;
}
} else {
}
}
break;
}


var G__14005 = cljs.core.next.call(null,seq__13758_13967__$1);
var G__14006 = null;
var G__14007 = (0);
var G__14008 = (0);
seq__13758_13926 = G__14005;
chunk__13759_13927 = G__14006;
count__13760_13928 = G__14007;
i__13761_13929 = G__14008;
continue;
}
} else {
}
}
break;
}


var G__14009 = cljs.core.next.call(null,seq__13550_13917__$1);
var G__14010 = null;
var G__14011 = (0);
var G__14012 = (0);
seq__13550_13822 = G__14009;
chunk__13551_13823 = G__14010;
count__13552_13824 = G__14011;
i__13553_13825 = G__14012;
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
