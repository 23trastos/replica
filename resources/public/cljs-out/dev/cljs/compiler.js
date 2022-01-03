// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__11452 = s;
var map__11452__$1 = (((((!((map__11452 == null))))?(((((map__11452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11452):map__11452);
var name = cljs.core.get.call(null,map__11452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11452__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__11455 = info;
var map__11456 = G__11455;
var map__11456__$1 = (((((!((map__11456 == null))))?(((((map__11456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11456):map__11456);
var shadow = cljs.core.get.call(null,map__11456__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__11455__$1 = G__11455;
while(true){
var d__$2 = d__$1;
var map__11460 = G__11455__$1;
var map__11460__$1 = (((((!((map__11460 == null))))?(((((map__11460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11460):map__11460);
var shadow__$1 = cljs.core.get.call(null,map__11460__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__11462 = (d__$2 + (1));
var G__11463 = shadow__$1;
d__$1 = G__11462;
G__11455__$1 = G__11463;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__11464){
var map__11465 = p__11464;
var map__11465__$1 = (((((!((map__11465 == null))))?(((((map__11465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11465):map__11465);
var name_var = map__11465__$1;
var name = cljs.core.get.call(null,map__11465__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11465__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__11467 = info;
var map__11467__$1 = (((((!((map__11467 == null))))?(((((map__11467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11467):map__11467);
var ns = cljs.core.get.call(null,map__11467__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__11467__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__11470 = arguments.length;
switch (G__11470) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(17),(1),(11478),(11478),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__11472 = cp;
switch (G__11472) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__11474_11478 = cljs.core.seq.call(null,s);
var chunk__11475_11479 = null;
var count__11476_11480 = (0);
var i__11477_11481 = (0);
while(true){
if((i__11477_11481 < count__11476_11480)){
var c_11482 = cljs.core._nth.call(null,chunk__11475_11479,i__11477_11481);
sb.append(cljs.compiler.escape_char.call(null,c_11482));


var G__11483 = seq__11474_11478;
var G__11484 = chunk__11475_11479;
var G__11485 = count__11476_11480;
var G__11486 = (i__11477_11481 + (1));
seq__11474_11478 = G__11483;
chunk__11475_11479 = G__11484;
count__11476_11480 = G__11485;
i__11477_11481 = G__11486;
continue;
} else {
var temp__5720__auto___11487 = cljs.core.seq.call(null,seq__11474_11478);
if(temp__5720__auto___11487){
var seq__11474_11488__$1 = temp__5720__auto___11487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11474_11488__$1)){
var c__4550__auto___11489 = cljs.core.chunk_first.call(null,seq__11474_11488__$1);
var G__11490 = cljs.core.chunk_rest.call(null,seq__11474_11488__$1);
var G__11491 = c__4550__auto___11489;
var G__11492 = cljs.core.count.call(null,c__4550__auto___11489);
var G__11493 = (0);
seq__11474_11478 = G__11490;
chunk__11475_11479 = G__11491;
count__11476_11480 = G__11492;
i__11477_11481 = G__11493;
continue;
} else {
var c_11494 = cljs.core.first.call(null,seq__11474_11488__$1);
sb.append(cljs.compiler.escape_char.call(null,c_11494));


var G__11495 = cljs.core.next.call(null,seq__11474_11488__$1);
var G__11496 = null;
var G__11497 = (0);
var G__11498 = (0);
seq__11474_11478 = G__11495;
chunk__11475_11479 = G__11496;
count__11476_11480 = G__11497;
i__11477_11481 = G__11498;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__11499_11504 = ast;
var map__11499_11505__$1 = (((((!((map__11499_11504 == null))))?(((((map__11499_11504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11499_11504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11499_11504):map__11499_11504);
var env_11506 = cljs.core.get.call(null,map__11499_11505__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_11506))){
var map__11501_11507 = env_11506;
var map__11501_11508__$1 = (((((!((map__11501_11507 == null))))?(((((map__11501_11507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11501_11507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11501_11507):map__11501_11507);
var line_11509 = cljs.core.get.call(null,map__11501_11508__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_11510 = cljs.core.get.call(null,map__11501_11508__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__11501_11507,map__11501_11508__$1,line_11509,column_11510,map__11499_11504,map__11499_11505__$1,env_11506){
return (function (m){
var minfo = (function (){var G__11503 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__11503,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__11503;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_11509 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__11501_11507,map__11501_11508__$1,line_11509,column_11510,map__11499_11504,map__11499_11505__$1,env_11506){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_11510)?(column_11510 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__11501_11507,map__11501_11508__$1,line_11509,column_11510,map__11499_11504,map__11499_11505__$1,env_11506){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__11501_11507,map__11501_11508__$1,line_11509,column_11510,map__11499_11504,map__11499_11505__$1,env_11506))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__11501_11507,map__11501_11508__$1,line_11509,column_11510,map__11499_11504,map__11499_11505__$1,env_11506))
,cljs.core.sorted_map.call(null)));
});})(map__11501_11507,map__11501_11508__$1,line_11509,column_11510,map__11499_11504,map__11499_11505__$1,env_11506))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__11519 = arguments.length;
switch (G__11519) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___11526 = arguments.length;
var i__4731__auto___11527 = (0);
while(true){
if((i__4731__auto___11527 < len__4730__auto___11526)){
args_arr__4751__auto__.push((arguments[i__4731__auto___11527]));

var G__11528 = (i__4731__auto___11527 + (1));
i__4731__auto___11527 = G__11528;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
a.call(null);
} else {
var s_11529 = (function (){var G__11520 = a;
if((!(typeof a === 'string'))){
return G__11520.toString();
} else {
return G__11520;
}
})();
var temp__5724__auto___11530 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___11530 == null)){
} else {
var sm_data_11531 = temp__5724__auto___11530;
cljs.core.swap_BANG_.call(null,sm_data_11531,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_11531,temp__5724__auto___11530,s_11529){
return (function (p1__11511_SHARP_){
return (p1__11511_SHARP_ + s_11529.length);
});})(sm_data_11531,temp__5724__auto___11530,s_11529))
);
}

cljs.core.print.call(null,s_11529);

}
}
}
}

return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__11521 = cljs.core.seq.call(null,xs);
var chunk__11522 = null;
var count__11523 = (0);
var i__11524 = (0);
while(true){
if((i__11524 < count__11523)){
var x = cljs.core._nth.call(null,chunk__11522,i__11524);
cljs.compiler.emits.call(null,x);


var G__11532 = seq__11521;
var G__11533 = chunk__11522;
var G__11534 = count__11523;
var G__11535 = (i__11524 + (1));
seq__11521 = G__11532;
chunk__11522 = G__11533;
count__11523 = G__11534;
i__11524 = G__11535;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11521);
if(temp__5720__auto__){
var seq__11521__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11521__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11521__$1);
var G__11536 = cljs.core.chunk_rest.call(null,seq__11521__$1);
var G__11537 = c__4550__auto__;
var G__11538 = cljs.core.count.call(null,c__4550__auto__);
var G__11539 = (0);
seq__11521 = G__11536;
chunk__11522 = G__11537;
count__11523 = G__11538;
i__11524 = G__11539;
continue;
} else {
var x = cljs.core.first.call(null,seq__11521__$1);
cljs.compiler.emits.call(null,x);


var G__11540 = cljs.core.next.call(null,seq__11521__$1);
var G__11541 = null;
var G__11542 = (0);
var G__11543 = (0);
seq__11521 = G__11540;
chunk__11522 = G__11541;
count__11523 = G__11542;
i__11524 = G__11543;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq11513){
var G__11514 = cljs.core.first.call(null,seq11513);
var seq11513__$1 = cljs.core.next.call(null,seq11513);
var G__11515 = cljs.core.first.call(null,seq11513__$1);
var seq11513__$2 = cljs.core.next.call(null,seq11513__$1);
var G__11516 = cljs.core.first.call(null,seq11513__$2);
var seq11513__$3 = cljs.core.next.call(null,seq11513__$2);
var G__11517 = cljs.core.first.call(null,seq11513__$3);
var seq11513__$4 = cljs.core.next.call(null,seq11513__$3);
var G__11518 = cljs.core.first.call(null,seq11513__$4);
var seq11513__$5 = cljs.core.next.call(null,seq11513__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11514,G__11515,G__11516,G__11517,G__11518,seq11513__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__11544){
var map__11545 = p__11544;
var map__11545__$1 = (((((!((map__11545 == null))))?(((((map__11545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11545):map__11545);
var m = map__11545__$1;
var gen_line = cljs.core.get.call(null,map__11545__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__11554 = arguments.length;
switch (G__11554) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___11560 = arguments.length;
var i__4731__auto___11561 = (0);
while(true){
if((i__4731__auto___11561 < len__4730__auto___11560)){
args_arr__4751__auto__.push((arguments[i__4731__auto___11561]));

var G__11562 = (i__4731__auto___11561 + (1));
i__4731__auto___11561 = G__11562;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__11555_11563 = cljs.core.seq.call(null,xs);
var chunk__11556_11564 = null;
var count__11557_11565 = (0);
var i__11558_11566 = (0);
while(true){
if((i__11558_11566 < count__11557_11565)){
var x_11567 = cljs.core._nth.call(null,chunk__11556_11564,i__11558_11566);
cljs.compiler.emits.call(null,x_11567);


var G__11568 = seq__11555_11563;
var G__11569 = chunk__11556_11564;
var G__11570 = count__11557_11565;
var G__11571 = (i__11558_11566 + (1));
seq__11555_11563 = G__11568;
chunk__11556_11564 = G__11569;
count__11557_11565 = G__11570;
i__11558_11566 = G__11571;
continue;
} else {
var temp__5720__auto___11572 = cljs.core.seq.call(null,seq__11555_11563);
if(temp__5720__auto___11572){
var seq__11555_11573__$1 = temp__5720__auto___11572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11555_11573__$1)){
var c__4550__auto___11574 = cljs.core.chunk_first.call(null,seq__11555_11573__$1);
var G__11575 = cljs.core.chunk_rest.call(null,seq__11555_11573__$1);
var G__11576 = c__4550__auto___11574;
var G__11577 = cljs.core.count.call(null,c__4550__auto___11574);
var G__11578 = (0);
seq__11555_11563 = G__11575;
chunk__11556_11564 = G__11576;
count__11557_11565 = G__11577;
i__11558_11566 = G__11578;
continue;
} else {
var x_11579 = cljs.core.first.call(null,seq__11555_11573__$1);
cljs.compiler.emits.call(null,x_11579);


var G__11580 = cljs.core.next.call(null,seq__11555_11573__$1);
var G__11581 = null;
var G__11582 = (0);
var G__11583 = (0);
seq__11555_11563 = G__11580;
chunk__11556_11564 = G__11581;
count__11557_11565 = G__11582;
i__11558_11566 = G__11583;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
});

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq11548){
var G__11549 = cljs.core.first.call(null,seq11548);
var seq11548__$1 = cljs.core.next.call(null,seq11548);
var G__11550 = cljs.core.first.call(null,seq11548__$1);
var seq11548__$2 = cljs.core.next.call(null,seq11548__$1);
var G__11551 = cljs.core.first.call(null,seq11548__$2);
var seq11548__$3 = cljs.core.next.call(null,seq11548__$2);
var G__11552 = cljs.core.first.call(null,seq11548__$3);
var seq11548__$4 = cljs.core.next.call(null,seq11548__$3);
var G__11553 = cljs.core.first.call(null,seq11548__$4);
var seq11548__$5 = cljs.core.next.call(null,seq11548__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11549,G__11550,G__11551,G__11552,G__11553,seq11548__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11584_11588 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11585_11589 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11586_11590 = true;
var _STAR_print_fn_STAR__temp_val__11587_11591 = ((function (_STAR_print_newline_STAR__orig_val__11584_11588,_STAR_print_fn_STAR__orig_val__11585_11589,_STAR_print_newline_STAR__temp_val__11586_11590,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__11584_11588,_STAR_print_fn_STAR__orig_val__11585_11589,_STAR_print_newline_STAR__temp_val__11586_11590,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11586_11590;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11587_11591;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11585_11589;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11584_11588;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__11592 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__11592,(0),null);
var name = cljs.core.nth.call(null,vec__11592,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__11592,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__11592,ns,name))
);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
});})(m))
,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
});})(m))
);
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__11595 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__11595,(0),null);
var flags = cljs.core.nth.call(null,vec__11595,(1),null);
var pattern = cljs.core.nth.call(null,vec__11595,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5718__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5718__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,((function (items){
return (function (p1__11598_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__11598_SHARP_);
});
;})(items))
});})(items))
);
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__11600){
var map__11601 = p__11600;
var map__11601__$1 = (((((!((map__11601 == null))))?(((((map__11601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11601):map__11601);
var ast = map__11601__$1;
var info = cljs.core.get.call(null,map__11601__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__11601__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__11601__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__11603 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__11603__$1 = (((((!((map__11603 == null))))?(((((map__11603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11603):map__11603);
var cenv = map__11603__$1;
var options = cljs.core.get.call(null,map__11603__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4131__auto__ = js_module_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__11605 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__11605,cljs.analyzer.es5_allowed);
} else {
return G__11605;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__11606 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__11606,reserved);
} else {
return G__11606;
}
})();
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__11607_11608 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__11607_11609__$1 = (((G__11607_11608 instanceof cljs.core.Keyword))?G__11607_11608.fqn:null);
switch (G__11607_11609__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4120__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__11611){
var map__11612 = p__11611;
var map__11612__$1 = (((((!((map__11612 == null))))?(((((map__11612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11612):map__11612);
var arg = map__11612__$1;
var env = cljs.core.get.call(null,map__11612__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__11612__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__11612__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__11612__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__11614 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__11614__$1 = (((((!((map__11614 == null))))?(((((map__11614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11614):map__11614);
var name = cljs.core.get.call(null,map__11614__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__11616){
var map__11617 = p__11616;
var map__11617__$1 = (((((!((map__11617 == null))))?(((((map__11617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11617):map__11617);
var expr = cljs.core.get.call(null,map__11617__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__11617__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__11617__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__11619_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11619_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__11620){
var map__11621 = p__11620;
var map__11621__$1 = (((((!((map__11621 == null))))?(((((map__11621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11621):map__11621);
var env = cljs.core.get.call(null,map__11621__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__11621__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__11621__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__11623){
var map__11624 = p__11623;
var map__11624__$1 = (((((!((map__11624 == null))))?(((((map__11624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11624):map__11624);
var items = cljs.core.get.call(null,map__11624__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11624__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__11626_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11626_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__11627){
var map__11628 = p__11627;
var map__11628__$1 = (((((!((map__11628 == null))))?(((((map__11628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11628):map__11628);
var items = cljs.core.get.call(null,map__11628__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11628__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___11652 = cljs.core.seq.call(null,items);
if(temp__5720__auto___11652){
var items_11653__$1 = temp__5720__auto___11652;
var vec__11630_11654 = items_11653__$1;
var seq__11631_11655 = cljs.core.seq.call(null,vec__11630_11654);
var first__11632_11656 = cljs.core.first.call(null,seq__11631_11655);
var seq__11631_11657__$1 = cljs.core.next.call(null,seq__11631_11655);
var vec__11633_11658 = first__11632_11656;
var k_11659 = cljs.core.nth.call(null,vec__11633_11658,(0),null);
var v_11660 = cljs.core.nth.call(null,vec__11633_11658,(1),null);
var r_11661 = seq__11631_11657__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_11659),"\": ",emit_js_object_val.call(null,v_11660));

var seq__11636_11662 = cljs.core.seq.call(null,r_11661);
var chunk__11637_11663 = null;
var count__11638_11664 = (0);
var i__11639_11665 = (0);
while(true){
if((i__11639_11665 < count__11638_11664)){
var vec__11646_11666 = cljs.core._nth.call(null,chunk__11637_11663,i__11639_11665);
var k_11667__$1 = cljs.core.nth.call(null,vec__11646_11666,(0),null);
var v_11668__$1 = cljs.core.nth.call(null,vec__11646_11666,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11667__$1),"\": ",emit_js_object_val.call(null,v_11668__$1));


var G__11669 = seq__11636_11662;
var G__11670 = chunk__11637_11663;
var G__11671 = count__11638_11664;
var G__11672 = (i__11639_11665 + (1));
seq__11636_11662 = G__11669;
chunk__11637_11663 = G__11670;
count__11638_11664 = G__11671;
i__11639_11665 = G__11672;
continue;
} else {
var temp__5720__auto___11673__$1 = cljs.core.seq.call(null,seq__11636_11662);
if(temp__5720__auto___11673__$1){
var seq__11636_11674__$1 = temp__5720__auto___11673__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11636_11674__$1)){
var c__4550__auto___11675 = cljs.core.chunk_first.call(null,seq__11636_11674__$1);
var G__11676 = cljs.core.chunk_rest.call(null,seq__11636_11674__$1);
var G__11677 = c__4550__auto___11675;
var G__11678 = cljs.core.count.call(null,c__4550__auto___11675);
var G__11679 = (0);
seq__11636_11662 = G__11676;
chunk__11637_11663 = G__11677;
count__11638_11664 = G__11678;
i__11639_11665 = G__11679;
continue;
} else {
var vec__11649_11680 = cljs.core.first.call(null,seq__11636_11674__$1);
var k_11681__$1 = cljs.core.nth.call(null,vec__11649_11680,(0),null);
var v_11682__$1 = cljs.core.nth.call(null,vec__11649_11680,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11681__$1),"\": ",emit_js_object_val.call(null,v_11682__$1));


var G__11683 = cljs.core.next.call(null,seq__11636_11674__$1);
var G__11684 = null;
var G__11685 = (0);
var G__11686 = (0);
seq__11636_11662 = G__11683;
chunk__11637_11663 = G__11684;
count__11638_11664 = G__11685;
i__11639_11665 = G__11686;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__11687){
var map__11688 = p__11687;
var map__11688__$1 = (((((!((map__11688 == null))))?(((((map__11688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11688):map__11688);
var keys = cljs.core.get.call(null,map__11688__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__11688__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__11688__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__11690){
var map__11691 = p__11690;
var map__11691__$1 = (((((!((map__11691 == null))))?(((((map__11691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11691):map__11691);
var items = cljs.core.get.call(null,map__11691__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11691__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__11693){
var map__11694 = p__11693;
var map__11694__$1 = (((((!((map__11694 == null))))?(((((map__11694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11694):map__11694);
var expr = cljs.core.get.call(null,map__11694__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__11696){
var map__11697 = p__11696;
var map__11697__$1 = (((((!((map__11697 == null))))?(((((map__11697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11697):map__11697);
var form = cljs.core.get.call(null,map__11697__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__11697__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__11699 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__11699__$1 = (((((!((map__11699 == null))))?(((((map__11699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11699):map__11699);
var op = cljs.core.get.call(null,map__11699__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11699__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11699__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4120__auto__){
var and__4120__auto____$1 = form;
if(cljs.core.truth_(and__4120__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__11701 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__11701__$1 = (((((!((map__11701 == null))))?(((((map__11701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11701):map__11701);
var op = cljs.core.get.call(null,map__11701__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11701__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11701__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__11703){
var map__11704 = p__11703;
var map__11704__$1 = (((((!((map__11704 == null))))?(((((map__11704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11704):map__11704);
var test = cljs.core.get.call(null,map__11704__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__11704__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__11704__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__11704__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__11704__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4131__auto__ = unchecked;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__11706){
var map__11707 = p__11706;
var map__11707__$1 = (((((!((map__11707 == null))))?(((((map__11707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11707):map__11707);
var v = cljs.core.get.call(null,map__11707__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__11707__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__11707__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__11707__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__11709_11745 = cljs.core.seq.call(null,nodes);
var chunk__11710_11746 = null;
var count__11711_11747 = (0);
var i__11712_11748 = (0);
while(true){
if((i__11712_11748 < count__11711_11747)){
var map__11729_11749 = cljs.core._nth.call(null,chunk__11710_11746,i__11712_11748);
var map__11729_11750__$1 = (((((!((map__11729_11749 == null))))?(((((map__11729_11749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11729_11749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11729_11749):map__11729_11749);
var ts_11751 = cljs.core.get.call(null,map__11729_11750__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__11730_11752 = cljs.core.get.call(null,map__11729_11750__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__11730_11753__$1 = (((((!((map__11730_11752 == null))))?(((((map__11730_11752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11730_11752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11730_11752):map__11730_11752);
var then_11754 = cljs.core.get.call(null,map__11730_11753__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__11733_11755 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_11751));
var chunk__11734_11756 = null;
var count__11735_11757 = (0);
var i__11736_11758 = (0);
while(true){
if((i__11736_11758 < count__11735_11757)){
var test_11759 = cljs.core._nth.call(null,chunk__11734_11756,i__11736_11758);
cljs.compiler.emitln.call(null,"case ",test_11759,":");


var G__11760 = seq__11733_11755;
var G__11761 = chunk__11734_11756;
var G__11762 = count__11735_11757;
var G__11763 = (i__11736_11758 + (1));
seq__11733_11755 = G__11760;
chunk__11734_11756 = G__11761;
count__11735_11757 = G__11762;
i__11736_11758 = G__11763;
continue;
} else {
var temp__5720__auto___11764 = cljs.core.seq.call(null,seq__11733_11755);
if(temp__5720__auto___11764){
var seq__11733_11765__$1 = temp__5720__auto___11764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11733_11765__$1)){
var c__4550__auto___11766 = cljs.core.chunk_first.call(null,seq__11733_11765__$1);
var G__11767 = cljs.core.chunk_rest.call(null,seq__11733_11765__$1);
var G__11768 = c__4550__auto___11766;
var G__11769 = cljs.core.count.call(null,c__4550__auto___11766);
var G__11770 = (0);
seq__11733_11755 = G__11767;
chunk__11734_11756 = G__11768;
count__11735_11757 = G__11769;
i__11736_11758 = G__11770;
continue;
} else {
var test_11771 = cljs.core.first.call(null,seq__11733_11765__$1);
cljs.compiler.emitln.call(null,"case ",test_11771,":");


var G__11772 = cljs.core.next.call(null,seq__11733_11765__$1);
var G__11773 = null;
var G__11774 = (0);
var G__11775 = (0);
seq__11733_11755 = G__11772;
chunk__11734_11756 = G__11773;
count__11735_11757 = G__11774;
i__11736_11758 = G__11775;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11754);
} else {
cljs.compiler.emitln.call(null,then_11754);
}

cljs.compiler.emitln.call(null,"break;");


var G__11776 = seq__11709_11745;
var G__11777 = chunk__11710_11746;
var G__11778 = count__11711_11747;
var G__11779 = (i__11712_11748 + (1));
seq__11709_11745 = G__11776;
chunk__11710_11746 = G__11777;
count__11711_11747 = G__11778;
i__11712_11748 = G__11779;
continue;
} else {
var temp__5720__auto___11780 = cljs.core.seq.call(null,seq__11709_11745);
if(temp__5720__auto___11780){
var seq__11709_11781__$1 = temp__5720__auto___11780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11709_11781__$1)){
var c__4550__auto___11782 = cljs.core.chunk_first.call(null,seq__11709_11781__$1);
var G__11783 = cljs.core.chunk_rest.call(null,seq__11709_11781__$1);
var G__11784 = c__4550__auto___11782;
var G__11785 = cljs.core.count.call(null,c__4550__auto___11782);
var G__11786 = (0);
seq__11709_11745 = G__11783;
chunk__11710_11746 = G__11784;
count__11711_11747 = G__11785;
i__11712_11748 = G__11786;
continue;
} else {
var map__11737_11787 = cljs.core.first.call(null,seq__11709_11781__$1);
var map__11737_11788__$1 = (((((!((map__11737_11787 == null))))?(((((map__11737_11787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11737_11787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11737_11787):map__11737_11787);
var ts_11789 = cljs.core.get.call(null,map__11737_11788__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__11738_11790 = cljs.core.get.call(null,map__11737_11788__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__11738_11791__$1 = (((((!((map__11738_11790 == null))))?(((((map__11738_11790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11738_11790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11738_11790):map__11738_11790);
var then_11792 = cljs.core.get.call(null,map__11738_11791__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__11741_11793 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_11789));
var chunk__11742_11794 = null;
var count__11743_11795 = (0);
var i__11744_11796 = (0);
while(true){
if((i__11744_11796 < count__11743_11795)){
var test_11797 = cljs.core._nth.call(null,chunk__11742_11794,i__11744_11796);
cljs.compiler.emitln.call(null,"case ",test_11797,":");


var G__11798 = seq__11741_11793;
var G__11799 = chunk__11742_11794;
var G__11800 = count__11743_11795;
var G__11801 = (i__11744_11796 + (1));
seq__11741_11793 = G__11798;
chunk__11742_11794 = G__11799;
count__11743_11795 = G__11800;
i__11744_11796 = G__11801;
continue;
} else {
var temp__5720__auto___11802__$1 = cljs.core.seq.call(null,seq__11741_11793);
if(temp__5720__auto___11802__$1){
var seq__11741_11803__$1 = temp__5720__auto___11802__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11741_11803__$1)){
var c__4550__auto___11804 = cljs.core.chunk_first.call(null,seq__11741_11803__$1);
var G__11805 = cljs.core.chunk_rest.call(null,seq__11741_11803__$1);
var G__11806 = c__4550__auto___11804;
var G__11807 = cljs.core.count.call(null,c__4550__auto___11804);
var G__11808 = (0);
seq__11741_11793 = G__11805;
chunk__11742_11794 = G__11806;
count__11743_11795 = G__11807;
i__11744_11796 = G__11808;
continue;
} else {
var test_11809 = cljs.core.first.call(null,seq__11741_11803__$1);
cljs.compiler.emitln.call(null,"case ",test_11809,":");


var G__11810 = cljs.core.next.call(null,seq__11741_11803__$1);
var G__11811 = null;
var G__11812 = (0);
var G__11813 = (0);
seq__11741_11793 = G__11810;
chunk__11742_11794 = G__11811;
count__11743_11795 = G__11812;
i__11744_11796 = G__11813;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11792);
} else {
cljs.compiler.emitln.call(null,then_11792);
}

cljs.compiler.emitln.call(null,"break;");


var G__11814 = cljs.core.next.call(null,seq__11709_11781__$1);
var G__11815 = null;
var G__11816 = (0);
var G__11817 = (0);
seq__11709_11745 = G__11814;
chunk__11710_11746 = G__11815;
count__11711_11747 = G__11816;
i__11712_11748 = G__11817;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__11818){
var map__11819 = p__11818;
var map__11819__$1 = (((((!((map__11819 == null))))?(((((map__11819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11819):map__11819);
var throw$ = cljs.core.get.call(null,map__11819__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__11819__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__11822 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__11822,(0),null);
var rstr = cljs.core.nth.call(null,vec__11822,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__11822,fstr,rstr,ret_t,axstr){
return (function (p1__11821_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11821_SHARP_);
});})(idx,vec__11822,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__11825 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__11825,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__11825;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__11826_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11826_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__11827 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11828 = cljs.core.seq.call(null,vec__11827);
var first__11829 = cljs.core.first.call(null,seq__11828);
var seq__11828__$1 = cljs.core.next.call(null,seq__11828);
var p = first__11829;
var first__11829__$1 = cljs.core.first.call(null,seq__11828__$1);
var seq__11828__$2 = cljs.core.next.call(null,seq__11828__$1);
var ts = first__11829__$1;
var first__11829__$2 = cljs.core.first.call(null,seq__11828__$2);
var seq__11828__$3 = cljs.core.next.call(null,seq__11828__$2);
var n = first__11829__$2;
var xs = seq__11828__$3;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__11830 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11831 = cljs.core.seq.call(null,vec__11830);
var first__11832 = cljs.core.first.call(null,seq__11831);
var seq__11831__$1 = cljs.core.next.call(null,seq__11831);
var p = first__11832;
var first__11832__$1 = cljs.core.first.call(null,seq__11831__$1);
var seq__11831__$2 = cljs.core.next.call(null,seq__11831__$1);
var ts = first__11832__$1;
var xs = seq__11831__$2;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__11835 = arguments.length;
switch (G__11835) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__11843 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__11833_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__11833_SHARP_);
} else {
return p1__11833_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__11844 = cljs.core.seq.call(null,vec__11843);
var first__11845 = cljs.core.first.call(null,seq__11844);
var seq__11844__$1 = cljs.core.next.call(null,seq__11844);
var x = first__11845;
var ys = seq__11844__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__11846 = cljs.core.seq.call(null,ys);
var chunk__11847 = null;
var count__11848 = (0);
var i__11849 = (0);
while(true){
if((i__11849 < count__11848)){
var next_line = cljs.core._nth.call(null,chunk__11847,i__11849);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__11855 = seq__11846;
var G__11856 = chunk__11847;
var G__11857 = count__11848;
var G__11858 = (i__11849 + (1));
seq__11846 = G__11855;
chunk__11847 = G__11856;
count__11848 = G__11857;
i__11849 = G__11858;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11846);
if(temp__5720__auto__){
var seq__11846__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11846__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11846__$1);
var G__11859 = cljs.core.chunk_rest.call(null,seq__11846__$1);
var G__11860 = c__4550__auto__;
var G__11861 = cljs.core.count.call(null,c__4550__auto__);
var G__11862 = (0);
seq__11846 = G__11859;
chunk__11847 = G__11860;
count__11848 = G__11861;
i__11849 = G__11862;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__11846__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__11863 = cljs.core.next.call(null,seq__11846__$1);
var G__11864 = null;
var G__11865 = (0);
var G__11866 = (0);
seq__11846 = G__11863;
chunk__11847 = G__11864;
count__11848 = G__11865;
i__11849 = G__11866;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__11850_11867 = cljs.core.seq.call(null,docs__$2);
var chunk__11851_11868 = null;
var count__11852_11869 = (0);
var i__11853_11870 = (0);
while(true){
if((i__11853_11870 < count__11852_11869)){
var e_11871 = cljs.core._nth.call(null,chunk__11851_11868,i__11853_11870);
if(cljs.core.truth_(e_11871)){
print_comment_lines.call(null,e_11871);
} else {
}


var G__11872 = seq__11850_11867;
var G__11873 = chunk__11851_11868;
var G__11874 = count__11852_11869;
var G__11875 = (i__11853_11870 + (1));
seq__11850_11867 = G__11872;
chunk__11851_11868 = G__11873;
count__11852_11869 = G__11874;
i__11853_11870 = G__11875;
continue;
} else {
var temp__5720__auto___11876 = cljs.core.seq.call(null,seq__11850_11867);
if(temp__5720__auto___11876){
var seq__11850_11877__$1 = temp__5720__auto___11876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11850_11877__$1)){
var c__4550__auto___11878 = cljs.core.chunk_first.call(null,seq__11850_11877__$1);
var G__11879 = cljs.core.chunk_rest.call(null,seq__11850_11877__$1);
var G__11880 = c__4550__auto___11878;
var G__11881 = cljs.core.count.call(null,c__4550__auto___11878);
var G__11882 = (0);
seq__11850_11867 = G__11879;
chunk__11851_11868 = G__11880;
count__11852_11869 = G__11881;
i__11853_11870 = G__11882;
continue;
} else {
var e_11883 = cljs.core.first.call(null,seq__11850_11877__$1);
if(cljs.core.truth_(e_11883)){
print_comment_lines.call(null,e_11883);
} else {
}


var G__11884 = cljs.core.next.call(null,seq__11850_11877__$1);
var G__11885 = null;
var G__11886 = (0);
var G__11887 = (0);
seq__11850_11867 = G__11884;
chunk__11851_11868 = G__11885;
count__11852_11869 = G__11886;
i__11853_11870 = G__11887;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4120__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__11889_SHARP_){
return goog.string.startsWith(p1__11889_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = opts;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4120__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__11890){
var map__11891 = p__11890;
var map__11891__$1 = (((((!((map__11891 == null))))?(((((map__11891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11891):map__11891);
var doc = cljs.core.get.call(null,map__11891__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__11891__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__11891__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__11891__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__11891__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__11891__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__11891__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__11891__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__11891__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4131__auto__ = init;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5718__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5718__auto__)){
var define = temp__5718__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4120__auto__){
return test;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__11893){
var map__11894 = p__11893;
var map__11894__$1 = (((((!((map__11894 == null))))?(((((map__11894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11894):map__11894);
var name = cljs.core.get.call(null,map__11894__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11894__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11894__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__11896_11920 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__11897_11921 = null;
var count__11898_11922 = (0);
var i__11899_11923 = (0);
while(true){
if((i__11899_11923 < count__11898_11922)){
var vec__11906_11924 = cljs.core._nth.call(null,chunk__11897_11921,i__11899_11923);
var i_11925 = cljs.core.nth.call(null,vec__11906_11924,(0),null);
var param_11926 = cljs.core.nth.call(null,vec__11906_11924,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11926);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__11927 = seq__11896_11920;
var G__11928 = chunk__11897_11921;
var G__11929 = count__11898_11922;
var G__11930 = (i__11899_11923 + (1));
seq__11896_11920 = G__11927;
chunk__11897_11921 = G__11928;
count__11898_11922 = G__11929;
i__11899_11923 = G__11930;
continue;
} else {
var temp__5720__auto___11931 = cljs.core.seq.call(null,seq__11896_11920);
if(temp__5720__auto___11931){
var seq__11896_11932__$1 = temp__5720__auto___11931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11896_11932__$1)){
var c__4550__auto___11933 = cljs.core.chunk_first.call(null,seq__11896_11932__$1);
var G__11934 = cljs.core.chunk_rest.call(null,seq__11896_11932__$1);
var G__11935 = c__4550__auto___11933;
var G__11936 = cljs.core.count.call(null,c__4550__auto___11933);
var G__11937 = (0);
seq__11896_11920 = G__11934;
chunk__11897_11921 = G__11935;
count__11898_11922 = G__11936;
i__11899_11923 = G__11937;
continue;
} else {
var vec__11909_11938 = cljs.core.first.call(null,seq__11896_11932__$1);
var i_11939 = cljs.core.nth.call(null,vec__11909_11938,(0),null);
var param_11940 = cljs.core.nth.call(null,vec__11909_11938,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11940);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__11941 = cljs.core.next.call(null,seq__11896_11932__$1);
var G__11942 = null;
var G__11943 = (0);
var G__11944 = (0);
seq__11896_11920 = G__11941;
chunk__11897_11921 = G__11942;
count__11898_11922 = G__11943;
i__11899_11923 = G__11944;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__11912_11945 = cljs.core.seq.call(null,params);
var chunk__11913_11946 = null;
var count__11914_11947 = (0);
var i__11915_11948 = (0);
while(true){
if((i__11915_11948 < count__11914_11947)){
var param_11949 = cljs.core._nth.call(null,chunk__11913_11946,i__11915_11948);
cljs.compiler.emit.call(null,param_11949);

if(cljs.core._EQ_.call(null,param_11949,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11950 = seq__11912_11945;
var G__11951 = chunk__11913_11946;
var G__11952 = count__11914_11947;
var G__11953 = (i__11915_11948 + (1));
seq__11912_11945 = G__11950;
chunk__11913_11946 = G__11951;
count__11914_11947 = G__11952;
i__11915_11948 = G__11953;
continue;
} else {
var temp__5720__auto___11954 = cljs.core.seq.call(null,seq__11912_11945);
if(temp__5720__auto___11954){
var seq__11912_11955__$1 = temp__5720__auto___11954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11912_11955__$1)){
var c__4550__auto___11956 = cljs.core.chunk_first.call(null,seq__11912_11955__$1);
var G__11957 = cljs.core.chunk_rest.call(null,seq__11912_11955__$1);
var G__11958 = c__4550__auto___11956;
var G__11959 = cljs.core.count.call(null,c__4550__auto___11956);
var G__11960 = (0);
seq__11912_11945 = G__11957;
chunk__11913_11946 = G__11958;
count__11914_11947 = G__11959;
i__11915_11948 = G__11960;
continue;
} else {
var param_11961 = cljs.core.first.call(null,seq__11912_11955__$1);
cljs.compiler.emit.call(null,param_11961);

if(cljs.core._EQ_.call(null,param_11961,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11962 = cljs.core.next.call(null,seq__11912_11955__$1);
var G__11963 = null;
var G__11964 = (0);
var G__11965 = (0);
seq__11912_11945 = G__11962;
chunk__11913_11946 = G__11963;
count__11914_11947 = G__11964;
i__11915_11948 = G__11965;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__11916_11966 = cljs.core.seq.call(null,params);
var chunk__11917_11967 = null;
var count__11918_11968 = (0);
var i__11919_11969 = (0);
while(true){
if((i__11919_11969 < count__11918_11968)){
var param_11970 = cljs.core._nth.call(null,chunk__11917_11967,i__11919_11969);
cljs.compiler.emit.call(null,param_11970);

if(cljs.core._EQ_.call(null,param_11970,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11971 = seq__11916_11966;
var G__11972 = chunk__11917_11967;
var G__11973 = count__11918_11968;
var G__11974 = (i__11919_11969 + (1));
seq__11916_11966 = G__11971;
chunk__11917_11967 = G__11972;
count__11918_11968 = G__11973;
i__11919_11969 = G__11974;
continue;
} else {
var temp__5720__auto___11975 = cljs.core.seq.call(null,seq__11916_11966);
if(temp__5720__auto___11975){
var seq__11916_11976__$1 = temp__5720__auto___11975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11916_11976__$1)){
var c__4550__auto___11977 = cljs.core.chunk_first.call(null,seq__11916_11976__$1);
var G__11978 = cljs.core.chunk_rest.call(null,seq__11916_11976__$1);
var G__11979 = c__4550__auto___11977;
var G__11980 = cljs.core.count.call(null,c__4550__auto___11977);
var G__11981 = (0);
seq__11916_11966 = G__11978;
chunk__11917_11967 = G__11979;
count__11918_11968 = G__11980;
i__11919_11969 = G__11981;
continue;
} else {
var param_11982 = cljs.core.first.call(null,seq__11916_11976__$1);
cljs.compiler.emit.call(null,param_11982);

if(cljs.core._EQ_.call(null,param_11982,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11983 = cljs.core.next.call(null,seq__11916_11976__$1);
var G__11984 = null;
var G__11985 = (0);
var G__11986 = (0);
seq__11916_11966 = G__11983;
chunk__11917_11967 = G__11984;
count__11918_11968 = G__11985;
i__11919_11969 = G__11986;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__11987 = cljs.core.seq.call(null,params);
var chunk__11988 = null;
var count__11989 = (0);
var i__11990 = (0);
while(true){
if((i__11990 < count__11989)){
var param = cljs.core._nth.call(null,chunk__11988,i__11990);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11991 = seq__11987;
var G__11992 = chunk__11988;
var G__11993 = count__11989;
var G__11994 = (i__11990 + (1));
seq__11987 = G__11991;
chunk__11988 = G__11992;
count__11989 = G__11993;
i__11990 = G__11994;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11987);
if(temp__5720__auto__){
var seq__11987__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11987__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11987__$1);
var G__11995 = cljs.core.chunk_rest.call(null,seq__11987__$1);
var G__11996 = c__4550__auto__;
var G__11997 = cljs.core.count.call(null,c__4550__auto__);
var G__11998 = (0);
seq__11987 = G__11995;
chunk__11988 = G__11996;
count__11989 = G__11997;
i__11990 = G__11998;
continue;
} else {
var param = cljs.core.first.call(null,seq__11987__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11999 = cljs.core.next.call(null,seq__11987__$1);
var G__12000 = null;
var G__12001 = (0);
var G__12002 = (0);
seq__11987 = G__11999;
chunk__11988 = G__12000;
count__11989 = G__12001;
i__11990 = G__12002;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__12003){
var map__12004 = p__12003;
var map__12004__$1 = (((((!((map__12004 == null))))?(((((map__12004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12004):map__12004);
var expr = cljs.core.get.call(null,map__12004__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__12004__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__12004__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__12004__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__12004__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__12004__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__12006){
var map__12007 = p__12006;
var map__12007__$1 = (((((!((map__12007 == null))))?(((((map__12007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12007):map__12007);
var f = map__12007__$1;
var expr = cljs.core.get.call(null,map__12007__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__12007__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__12007__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__12007__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__12007__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__12007__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__12007__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__12007__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_12017__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12018 = cljs.compiler.munge.call(null,name_12017__$1);
var delegate_name_12019 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_12018),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_12019," = function (");

var seq__12009_12020 = cljs.core.seq.call(null,params);
var chunk__12010_12021 = null;
var count__12011_12022 = (0);
var i__12012_12023 = (0);
while(true){
if((i__12012_12023 < count__12011_12022)){
var param_12024 = cljs.core._nth.call(null,chunk__12010_12021,i__12012_12023);
cljs.compiler.emit.call(null,param_12024);

if(cljs.core._EQ_.call(null,param_12024,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12025 = seq__12009_12020;
var G__12026 = chunk__12010_12021;
var G__12027 = count__12011_12022;
var G__12028 = (i__12012_12023 + (1));
seq__12009_12020 = G__12025;
chunk__12010_12021 = G__12026;
count__12011_12022 = G__12027;
i__12012_12023 = G__12028;
continue;
} else {
var temp__5720__auto___12029 = cljs.core.seq.call(null,seq__12009_12020);
if(temp__5720__auto___12029){
var seq__12009_12030__$1 = temp__5720__auto___12029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12009_12030__$1)){
var c__4550__auto___12031 = cljs.core.chunk_first.call(null,seq__12009_12030__$1);
var G__12032 = cljs.core.chunk_rest.call(null,seq__12009_12030__$1);
var G__12033 = c__4550__auto___12031;
var G__12034 = cljs.core.count.call(null,c__4550__auto___12031);
var G__12035 = (0);
seq__12009_12020 = G__12032;
chunk__12010_12021 = G__12033;
count__12011_12022 = G__12034;
i__12012_12023 = G__12035;
continue;
} else {
var param_12036 = cljs.core.first.call(null,seq__12009_12030__$1);
cljs.compiler.emit.call(null,param_12036);

if(cljs.core._EQ_.call(null,param_12036,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12037 = cljs.core.next.call(null,seq__12009_12030__$1);
var G__12038 = null;
var G__12039 = (0);
var G__12040 = (0);
seq__12009_12020 = G__12037;
chunk__12010_12021 = G__12038;
count__12011_12022 = G__12039;
i__12012_12023 = G__12040;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_12018," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_12041 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_12041,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_12019,".call(this,");

var seq__12013_12042 = cljs.core.seq.call(null,params);
var chunk__12014_12043 = null;
var count__12015_12044 = (0);
var i__12016_12045 = (0);
while(true){
if((i__12016_12045 < count__12015_12044)){
var param_12046 = cljs.core._nth.call(null,chunk__12014_12043,i__12016_12045);
cljs.compiler.emit.call(null,param_12046);

if(cljs.core._EQ_.call(null,param_12046,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12047 = seq__12013_12042;
var G__12048 = chunk__12014_12043;
var G__12049 = count__12015_12044;
var G__12050 = (i__12016_12045 + (1));
seq__12013_12042 = G__12047;
chunk__12014_12043 = G__12048;
count__12015_12044 = G__12049;
i__12016_12045 = G__12050;
continue;
} else {
var temp__5720__auto___12051 = cljs.core.seq.call(null,seq__12013_12042);
if(temp__5720__auto___12051){
var seq__12013_12052__$1 = temp__5720__auto___12051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12013_12052__$1)){
var c__4550__auto___12053 = cljs.core.chunk_first.call(null,seq__12013_12052__$1);
var G__12054 = cljs.core.chunk_rest.call(null,seq__12013_12052__$1);
var G__12055 = c__4550__auto___12053;
var G__12056 = cljs.core.count.call(null,c__4550__auto___12053);
var G__12057 = (0);
seq__12013_12042 = G__12054;
chunk__12014_12043 = G__12055;
count__12015_12044 = G__12056;
i__12016_12045 = G__12057;
continue;
} else {
var param_12058 = cljs.core.first.call(null,seq__12013_12052__$1);
cljs.compiler.emit.call(null,param_12058);

if(cljs.core._EQ_.call(null,param_12058,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12059 = cljs.core.next.call(null,seq__12013_12052__$1);
var G__12060 = null;
var G__12061 = (0);
var G__12062 = (0);
seq__12013_12042 = G__12059;
chunk__12014_12043 = G__12060;
count__12015_12044 = G__12061;
i__12016_12045 = G__12062;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_12018,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_12018,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_12017__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_12018,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_12019,";");

cljs.compiler.emitln.call(null,"return ",mname_12018,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__12066){
var map__12067 = p__12066;
var map__12067__$1 = (((((!((map__12067 == null))))?(((((map__12067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12067):map__12067);
var variadic = cljs.core.get.call(null,map__12067__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__12067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__12067__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__12067__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__12067__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__12067__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__12067__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__12067,map__12067__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__12063_SHARP_){
var and__4120__auto__ = p1__12063_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__12063_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__12067,map__12067__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_12120__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12121 = cljs.compiler.munge.call(null,name_12120__$1);
var maxparams_12122 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_12123 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_12120__$1,mname_12121,maxparams_12122,loop_locals,map__12067,map__12067__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_12121),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_12120__$1,mname_12121,maxparams_12122,loop_locals,map__12067,map__12067__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_12124 = cljs.core.sort_by.call(null,((function (name_12120__$1,mname_12121,maxparams_12122,mmap_12123,loop_locals,map__12067,map__12067__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__12064_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__12064_SHARP_)));
});})(name_12120__$1,mname_12121,maxparams_12122,mmap_12123,loop_locals,map__12067,map__12067__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_12123));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_12121," = null;");

var seq__12069_12125 = cljs.core.seq.call(null,ms_12124);
var chunk__12070_12126 = null;
var count__12071_12127 = (0);
var i__12072_12128 = (0);
while(true){
if((i__12072_12128 < count__12071_12127)){
var vec__12079_12129 = cljs.core._nth.call(null,chunk__12070_12126,i__12072_12128);
var n_12130 = cljs.core.nth.call(null,vec__12079_12129,(0),null);
var meth_12131 = cljs.core.nth.call(null,vec__12079_12129,(1),null);
cljs.compiler.emits.call(null,"var ",n_12130," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12131))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12131);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12131);
}

cljs.compiler.emitln.call(null,";");


var G__12132 = seq__12069_12125;
var G__12133 = chunk__12070_12126;
var G__12134 = count__12071_12127;
var G__12135 = (i__12072_12128 + (1));
seq__12069_12125 = G__12132;
chunk__12070_12126 = G__12133;
count__12071_12127 = G__12134;
i__12072_12128 = G__12135;
continue;
} else {
var temp__5720__auto___12136 = cljs.core.seq.call(null,seq__12069_12125);
if(temp__5720__auto___12136){
var seq__12069_12137__$1 = temp__5720__auto___12136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12069_12137__$1)){
var c__4550__auto___12138 = cljs.core.chunk_first.call(null,seq__12069_12137__$1);
var G__12139 = cljs.core.chunk_rest.call(null,seq__12069_12137__$1);
var G__12140 = c__4550__auto___12138;
var G__12141 = cljs.core.count.call(null,c__4550__auto___12138);
var G__12142 = (0);
seq__12069_12125 = G__12139;
chunk__12070_12126 = G__12140;
count__12071_12127 = G__12141;
i__12072_12128 = G__12142;
continue;
} else {
var vec__12082_12143 = cljs.core.first.call(null,seq__12069_12137__$1);
var n_12144 = cljs.core.nth.call(null,vec__12082_12143,(0),null);
var meth_12145 = cljs.core.nth.call(null,vec__12082_12143,(1),null);
cljs.compiler.emits.call(null,"var ",n_12144," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12145))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12145);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12145);
}

cljs.compiler.emitln.call(null,";");


var G__12146 = cljs.core.next.call(null,seq__12069_12137__$1);
var G__12147 = null;
var G__12148 = (0);
var G__12149 = (0);
seq__12069_12125 = G__12146;
chunk__12070_12126 = G__12147;
count__12071_12127 = G__12148;
i__12072_12128 = G__12149;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_12121," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_12122),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_12122)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_12122));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__12085_12150 = cljs.core.seq.call(null,ms_12124);
var chunk__12086_12151 = null;
var count__12087_12152 = (0);
var i__12088_12153 = (0);
while(true){
if((i__12088_12153 < count__12087_12152)){
var vec__12095_12154 = cljs.core._nth.call(null,chunk__12086_12151,i__12088_12153);
var n_12155 = cljs.core.nth.call(null,vec__12095_12154,(0),null);
var meth_12156 = cljs.core.nth.call(null,vec__12095_12154,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12156))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12157 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12157," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12158 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12157," = new cljs.core.IndexedSeq(",a_12158,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12155,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12122)),(((cljs.core.count.call(null,maxparams_12122) > (1)))?", ":null),restarg_12157,");");
} else {
var pcnt_12159 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12156));
cljs.compiler.emitln.call(null,"case ",pcnt_12159,":");

cljs.compiler.emitln.call(null,"return ",n_12155,".call(this",(((pcnt_12159 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12159,maxparams_12122)),null,(1),null)),(2),null))),");");
}


var G__12160 = seq__12085_12150;
var G__12161 = chunk__12086_12151;
var G__12162 = count__12087_12152;
var G__12163 = (i__12088_12153 + (1));
seq__12085_12150 = G__12160;
chunk__12086_12151 = G__12161;
count__12087_12152 = G__12162;
i__12088_12153 = G__12163;
continue;
} else {
var temp__5720__auto___12164 = cljs.core.seq.call(null,seq__12085_12150);
if(temp__5720__auto___12164){
var seq__12085_12165__$1 = temp__5720__auto___12164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12085_12165__$1)){
var c__4550__auto___12166 = cljs.core.chunk_first.call(null,seq__12085_12165__$1);
var G__12167 = cljs.core.chunk_rest.call(null,seq__12085_12165__$1);
var G__12168 = c__4550__auto___12166;
var G__12169 = cljs.core.count.call(null,c__4550__auto___12166);
var G__12170 = (0);
seq__12085_12150 = G__12167;
chunk__12086_12151 = G__12168;
count__12087_12152 = G__12169;
i__12088_12153 = G__12170;
continue;
} else {
var vec__12098_12171 = cljs.core.first.call(null,seq__12085_12165__$1);
var n_12172 = cljs.core.nth.call(null,vec__12098_12171,(0),null);
var meth_12173 = cljs.core.nth.call(null,vec__12098_12171,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12173))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12174 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12174," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12175 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12174," = new cljs.core.IndexedSeq(",a_12175,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12172,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12122)),(((cljs.core.count.call(null,maxparams_12122) > (1)))?", ":null),restarg_12174,");");
} else {
var pcnt_12176 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12173));
cljs.compiler.emitln.call(null,"case ",pcnt_12176,":");

cljs.compiler.emitln.call(null,"return ",n_12172,".call(this",(((pcnt_12176 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12176,maxparams_12122)),null,(1),null)),(2),null))),");");
}


var G__12177 = cljs.core.next.call(null,seq__12085_12165__$1);
var G__12178 = null;
var G__12179 = (0);
var G__12180 = (0);
seq__12085_12150 = G__12177;
chunk__12086_12151 = G__12178;
count__12087_12152 = G__12179;
i__12088_12153 = G__12180;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_12181 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_12124)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_12181,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_12121,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_12121,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_12120__$1,mname_12121,maxparams_12122,mmap_12123,ms_12124,loop_locals,map__12067,map__12067__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__12065_SHARP_){
var vec__12101 = p1__12065_SHARP_;
var n = cljs.core.nth.call(null,vec__12101,(0),null);
var m = cljs.core.nth.call(null,vec__12101,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_12120__$1,mname_12121,maxparams_12122,mmap_12123,ms_12124,loop_locals,map__12067,map__12067__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_12124),".cljs$lang$applyTo;");
} else {
}

var seq__12104_12182 = cljs.core.seq.call(null,ms_12124);
var chunk__12105_12183 = null;
var count__12106_12184 = (0);
var i__12107_12185 = (0);
while(true){
if((i__12107_12185 < count__12106_12184)){
var vec__12114_12186 = cljs.core._nth.call(null,chunk__12105_12183,i__12107_12185);
var n_12187 = cljs.core.nth.call(null,vec__12114_12186,(0),null);
var meth_12188 = cljs.core.nth.call(null,vec__12114_12186,(1),null);
var c_12189 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12188));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12188))){
cljs.compiler.emitln.call(null,mname_12121,".cljs$core$IFn$_invoke$arity$variadic = ",n_12187,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12121,".cljs$core$IFn$_invoke$arity$",c_12189," = ",n_12187,";");
}


var G__12190 = seq__12104_12182;
var G__12191 = chunk__12105_12183;
var G__12192 = count__12106_12184;
var G__12193 = (i__12107_12185 + (1));
seq__12104_12182 = G__12190;
chunk__12105_12183 = G__12191;
count__12106_12184 = G__12192;
i__12107_12185 = G__12193;
continue;
} else {
var temp__5720__auto___12194 = cljs.core.seq.call(null,seq__12104_12182);
if(temp__5720__auto___12194){
var seq__12104_12195__$1 = temp__5720__auto___12194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12104_12195__$1)){
var c__4550__auto___12196 = cljs.core.chunk_first.call(null,seq__12104_12195__$1);
var G__12197 = cljs.core.chunk_rest.call(null,seq__12104_12195__$1);
var G__12198 = c__4550__auto___12196;
var G__12199 = cljs.core.count.call(null,c__4550__auto___12196);
var G__12200 = (0);
seq__12104_12182 = G__12197;
chunk__12105_12183 = G__12198;
count__12106_12184 = G__12199;
i__12107_12185 = G__12200;
continue;
} else {
var vec__12117_12201 = cljs.core.first.call(null,seq__12104_12195__$1);
var n_12202 = cljs.core.nth.call(null,vec__12117_12201,(0),null);
var meth_12203 = cljs.core.nth.call(null,vec__12117_12201,(1),null);
var c_12204 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12203));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12203))){
cljs.compiler.emitln.call(null,mname_12121,".cljs$core$IFn$_invoke$arity$variadic = ",n_12202,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12121,".cljs$core$IFn$_invoke$arity$",c_12204," = ",n_12202,";");
}


var G__12205 = cljs.core.next.call(null,seq__12104_12195__$1);
var G__12206 = null;
var G__12207 = (0);
var G__12208 = (0);
seq__12104_12182 = G__12205;
chunk__12105_12183 = G__12206;
count__12106_12184 = G__12207;
i__12107_12185 = G__12208;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_12121,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__12209){
var map__12210 = p__12209;
var map__12210__$1 = (((((!((map__12210 == null))))?(((((map__12210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12210):map__12210);
var statements = cljs.core.get.call(null,map__12210__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__12210__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__12210__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__12212_12216 = cljs.core.seq.call(null,statements);
var chunk__12213_12217 = null;
var count__12214_12218 = (0);
var i__12215_12219 = (0);
while(true){
if((i__12215_12219 < count__12214_12218)){
var s_12220 = cljs.core._nth.call(null,chunk__12213_12217,i__12215_12219);
cljs.compiler.emitln.call(null,s_12220);


var G__12221 = seq__12212_12216;
var G__12222 = chunk__12213_12217;
var G__12223 = count__12214_12218;
var G__12224 = (i__12215_12219 + (1));
seq__12212_12216 = G__12221;
chunk__12213_12217 = G__12222;
count__12214_12218 = G__12223;
i__12215_12219 = G__12224;
continue;
} else {
var temp__5720__auto___12225 = cljs.core.seq.call(null,seq__12212_12216);
if(temp__5720__auto___12225){
var seq__12212_12226__$1 = temp__5720__auto___12225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12212_12226__$1)){
var c__4550__auto___12227 = cljs.core.chunk_first.call(null,seq__12212_12226__$1);
var G__12228 = cljs.core.chunk_rest.call(null,seq__12212_12226__$1);
var G__12229 = c__4550__auto___12227;
var G__12230 = cljs.core.count.call(null,c__4550__auto___12227);
var G__12231 = (0);
seq__12212_12216 = G__12228;
chunk__12213_12217 = G__12229;
count__12214_12218 = G__12230;
i__12215_12219 = G__12231;
continue;
} else {
var s_12232 = cljs.core.first.call(null,seq__12212_12226__$1);
cljs.compiler.emitln.call(null,s_12232);


var G__12233 = cljs.core.next.call(null,seq__12212_12226__$1);
var G__12234 = null;
var G__12235 = (0);
var G__12236 = (0);
seq__12212_12216 = G__12233;
chunk__12213_12217 = G__12234;
count__12214_12218 = G__12235;
i__12215_12219 = G__12236;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__12237){
var map__12238 = p__12237;
var map__12238__$1 = (((((!((map__12238 == null))))?(((((map__12238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12238):map__12238);
var try$ = cljs.core.get.call(null,map__12238__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__12238__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__12238__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__12238__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__12238__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__12240,is_loop){
var map__12241 = p__12240;
var map__12241__$1 = (((((!((map__12241 == null))))?(((((map__12241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12241):map__12241);
var expr = cljs.core.get.call(null,map__12241__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__12241__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__12241__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__12243_12257 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__12244_12258 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__12243_12257,context,map__12241,map__12241__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__12243_12257,context,map__12241,map__12241__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__12244_12258;

try{var seq__12245_12259 = cljs.core.seq.call(null,bindings);
var chunk__12246_12260 = null;
var count__12247_12261 = (0);
var i__12248_12262 = (0);
while(true){
if((i__12248_12262 < count__12247_12261)){
var map__12253_12263 = cljs.core._nth.call(null,chunk__12246_12260,i__12248_12262);
var map__12253_12264__$1 = (((((!((map__12253_12263 == null))))?(((((map__12253_12263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12253_12263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12253_12263):map__12253_12263);
var binding_12265 = map__12253_12264__$1;
var init_12266 = cljs.core.get.call(null,map__12253_12264__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12265);

cljs.compiler.emitln.call(null," = ",init_12266,";");


var G__12267 = seq__12245_12259;
var G__12268 = chunk__12246_12260;
var G__12269 = count__12247_12261;
var G__12270 = (i__12248_12262 + (1));
seq__12245_12259 = G__12267;
chunk__12246_12260 = G__12268;
count__12247_12261 = G__12269;
i__12248_12262 = G__12270;
continue;
} else {
var temp__5720__auto___12271 = cljs.core.seq.call(null,seq__12245_12259);
if(temp__5720__auto___12271){
var seq__12245_12272__$1 = temp__5720__auto___12271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12245_12272__$1)){
var c__4550__auto___12273 = cljs.core.chunk_first.call(null,seq__12245_12272__$1);
var G__12274 = cljs.core.chunk_rest.call(null,seq__12245_12272__$1);
var G__12275 = c__4550__auto___12273;
var G__12276 = cljs.core.count.call(null,c__4550__auto___12273);
var G__12277 = (0);
seq__12245_12259 = G__12274;
chunk__12246_12260 = G__12275;
count__12247_12261 = G__12276;
i__12248_12262 = G__12277;
continue;
} else {
var map__12255_12278 = cljs.core.first.call(null,seq__12245_12272__$1);
var map__12255_12279__$1 = (((((!((map__12255_12278 == null))))?(((((map__12255_12278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12255_12278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12255_12278):map__12255_12278);
var binding_12280 = map__12255_12279__$1;
var init_12281 = cljs.core.get.call(null,map__12255_12279__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12280);

cljs.compiler.emitln.call(null," = ",init_12281,";");


var G__12282 = cljs.core.next.call(null,seq__12245_12272__$1);
var G__12283 = null;
var G__12284 = (0);
var G__12285 = (0);
seq__12245_12259 = G__12282;
chunk__12246_12260 = G__12283;
count__12247_12261 = G__12284;
i__12248_12262 = G__12285;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__12243_12257;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__12286){
var map__12287 = p__12286;
var map__12287__$1 = (((((!((map__12287 == null))))?(((((map__12287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12287):map__12287);
var frame = cljs.core.get.call(null,map__12287__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__12287__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__12287__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___12289 = cljs.core.count.call(null,exprs);
var i_12290 = (0);
while(true){
if((i_12290 < n__4607__auto___12289)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_12290)," = ",exprs.call(null,i_12290),";");

var G__12291 = (i_12290 + (1));
i_12290 = G__12291;
continue;
} else {
}
break;
}

var n__4607__auto___12292 = cljs.core.count.call(null,exprs);
var i_12293 = (0);
while(true){
if((i_12293 < n__4607__auto___12292)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_12293))," = ",temps.call(null,i_12293),";");

var G__12294 = (i_12293 + (1));
i_12293 = G__12294;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__12295){
var map__12296 = p__12295;
var map__12296__$1 = (((((!((map__12296 == null))))?(((((map__12296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12296):map__12296);
var expr = cljs.core.get.call(null,map__12296__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__12296__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__12296__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__12298_12310 = cljs.core.seq.call(null,bindings);
var chunk__12299_12311 = null;
var count__12300_12312 = (0);
var i__12301_12313 = (0);
while(true){
if((i__12301_12313 < count__12300_12312)){
var map__12306_12314 = cljs.core._nth.call(null,chunk__12299_12311,i__12301_12313);
var map__12306_12315__$1 = (((((!((map__12306_12314 == null))))?(((((map__12306_12314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12306_12314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12306_12314):map__12306_12314);
var binding_12316 = map__12306_12315__$1;
var init_12317 = cljs.core.get.call(null,map__12306_12315__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_12316)," = ",init_12317,";");


var G__12318 = seq__12298_12310;
var G__12319 = chunk__12299_12311;
var G__12320 = count__12300_12312;
var G__12321 = (i__12301_12313 + (1));
seq__12298_12310 = G__12318;
chunk__12299_12311 = G__12319;
count__12300_12312 = G__12320;
i__12301_12313 = G__12321;
continue;
} else {
var temp__5720__auto___12322 = cljs.core.seq.call(null,seq__12298_12310);
if(temp__5720__auto___12322){
var seq__12298_12323__$1 = temp__5720__auto___12322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12298_12323__$1)){
var c__4550__auto___12324 = cljs.core.chunk_first.call(null,seq__12298_12323__$1);
var G__12325 = cljs.core.chunk_rest.call(null,seq__12298_12323__$1);
var G__12326 = c__4550__auto___12324;
var G__12327 = cljs.core.count.call(null,c__4550__auto___12324);
var G__12328 = (0);
seq__12298_12310 = G__12325;
chunk__12299_12311 = G__12326;
count__12300_12312 = G__12327;
i__12301_12313 = G__12328;
continue;
} else {
var map__12308_12329 = cljs.core.first.call(null,seq__12298_12323__$1);
var map__12308_12330__$1 = (((((!((map__12308_12329 == null))))?(((((map__12308_12329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12308_12329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12308_12329):map__12308_12329);
var binding_12331 = map__12308_12330__$1;
var init_12332 = cljs.core.get.call(null,map__12308_12330__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_12331)," = ",init_12332,";");


var G__12333 = cljs.core.next.call(null,seq__12298_12323__$1);
var G__12334 = null;
var G__12335 = (0);
var G__12336 = (0);
seq__12298_12310 = G__12333;
chunk__12299_12311 = G__12334;
count__12300_12312 = G__12335;
i__12301_12313 = G__12336;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__12339){
var map__12340 = p__12339;
var map__12340__$1 = (((((!((map__12340 == null))))?(((((map__12340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12340):map__12340);
var expr = map__12340__$1;
var f = cljs.core.get.call(null,map__12340__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__12340__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12340__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4120__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4120__auto__ = protocol;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = tag;
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = (function (){var and__4120__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto____$2){
var and__4120__auto____$3 = protocol;
if(cljs.core.truth_(and__4120__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto____$2 = (function (){var or__4131__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4120__auto____$2)){
var or__4131__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var and__4120__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__4120__auto____$3){
var and__4120__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__4120__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
}
} else {
return and__4120__auto____$2;
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4131__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4131__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__12342 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (arity > mfa);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12340,map__12340__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12340,map__12340__$1,expr,f,args,env){
return (function (p1__12337_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12337_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12340,map__12340__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12340,map__12340__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12340,map__12340__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12340,map__12340__$1,expr,f,args,env){
return (function (p1__12338_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12338_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12340,map__12340__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12340,map__12340__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__12342,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__12342,(1),null);
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_12345 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_12345,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_12346 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_12346,args)),(((mfa_12346 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_12346,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = js_QMARK_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4120__auto__;
}
})())){
var fprop_12347 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_12347," ? ",f__$1,fprop_12347,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_12347," ? ",f__$1,fprop_12347,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__12348){
var map__12349 = p__12348;
var map__12349__$1 = (((((!((map__12349 == null))))?(((((map__12349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12349):map__12349);
var ctor = cljs.core.get.call(null,map__12349__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__12349__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12349__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__12351){
var map__12352 = p__12351;
var map__12352__$1 = (((((!((map__12352 == null))))?(((((map__12352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12352):map__12352);
var target = cljs.core.get.call(null,map__12352__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__12352__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__12352__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4131__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__12354 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__12354__$1 = (((((!((map__12354 == null))))?(((((map__12354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12354):map__12354);
var options = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__12355 = options;
var map__12355__$1 = (((((!((map__12355 == null))))?(((((map__12355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12355):map__12355);
var target = cljs.core.get.call(null,map__12355__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__12355__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__12356 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__12361 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__12361__$1 = (((((!((map__12361 == null))))?(((((map__12361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12361):map__12361);
var node_libs = cljs.core.get.call(null,map__12361__$1,true);
var libs_to_load = cljs.core.get.call(null,map__12361__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__12356,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__12356,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__12363_12383 = cljs.core.seq.call(null,libs_to_load);
var chunk__12364_12384 = null;
var count__12365_12385 = (0);
var i__12366_12386 = (0);
while(true){
if((i__12366_12386 < count__12365_12385)){
var lib_12387 = cljs.core._nth.call(null,chunk__12364_12384,i__12366_12386);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12387)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12387),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12387),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12387),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12387),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_12387,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12387),"');");
}

}
}
}


var G__12388 = seq__12363_12383;
var G__12389 = chunk__12364_12384;
var G__12390 = count__12365_12385;
var G__12391 = (i__12366_12386 + (1));
seq__12363_12383 = G__12388;
chunk__12364_12384 = G__12389;
count__12365_12385 = G__12390;
i__12366_12386 = G__12391;
continue;
} else {
var temp__5720__auto___12392 = cljs.core.seq.call(null,seq__12363_12383);
if(temp__5720__auto___12392){
var seq__12363_12393__$1 = temp__5720__auto___12392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12363_12393__$1)){
var c__4550__auto___12394 = cljs.core.chunk_first.call(null,seq__12363_12393__$1);
var G__12395 = cljs.core.chunk_rest.call(null,seq__12363_12393__$1);
var G__12396 = c__4550__auto___12394;
var G__12397 = cljs.core.count.call(null,c__4550__auto___12394);
var G__12398 = (0);
seq__12363_12383 = G__12395;
chunk__12364_12384 = G__12396;
count__12365_12385 = G__12397;
i__12366_12386 = G__12398;
continue;
} else {
var lib_12399 = cljs.core.first.call(null,seq__12363_12393__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12399)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12399),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12399),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12399),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12399),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_12399,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12399),"');");
}

}
}
}


var G__12400 = cljs.core.next.call(null,seq__12363_12393__$1);
var G__12401 = null;
var G__12402 = (0);
var G__12403 = (0);
seq__12363_12383 = G__12400;
chunk__12364_12384 = G__12401;
count__12365_12385 = G__12402;
i__12366_12386 = G__12403;
continue;
}
} else {
}
}
break;
}

var seq__12367_12404 = cljs.core.seq.call(null,node_libs);
var chunk__12368_12405 = null;
var count__12369_12406 = (0);
var i__12370_12407 = (0);
while(true){
if((i__12370_12407 < count__12369_12406)){
var lib_12408 = cljs.core._nth.call(null,chunk__12368_12405,i__12370_12407);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12408)," = require('",lib_12408,"');");


var G__12409 = seq__12367_12404;
var G__12410 = chunk__12368_12405;
var G__12411 = count__12369_12406;
var G__12412 = (i__12370_12407 + (1));
seq__12367_12404 = G__12409;
chunk__12368_12405 = G__12410;
count__12369_12406 = G__12411;
i__12370_12407 = G__12412;
continue;
} else {
var temp__5720__auto___12413 = cljs.core.seq.call(null,seq__12367_12404);
if(temp__5720__auto___12413){
var seq__12367_12414__$1 = temp__5720__auto___12413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12367_12414__$1)){
var c__4550__auto___12415 = cljs.core.chunk_first.call(null,seq__12367_12414__$1);
var G__12416 = cljs.core.chunk_rest.call(null,seq__12367_12414__$1);
var G__12417 = c__4550__auto___12415;
var G__12418 = cljs.core.count.call(null,c__4550__auto___12415);
var G__12419 = (0);
seq__12367_12404 = G__12416;
chunk__12368_12405 = G__12417;
count__12369_12406 = G__12418;
i__12370_12407 = G__12419;
continue;
} else {
var lib_12420 = cljs.core.first.call(null,seq__12367_12414__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12420)," = require('",lib_12420,"');");


var G__12421 = cljs.core.next.call(null,seq__12367_12414__$1);
var G__12422 = null;
var G__12423 = (0);
var G__12424 = (0);
seq__12367_12404 = G__12421;
chunk__12368_12405 = G__12422;
count__12369_12406 = G__12423;
i__12370_12407 = G__12424;
continue;
}
} else {
}
}
break;
}

var seq__12371_12425 = cljs.core.seq.call(null,global_exports_libs);
var chunk__12372_12426 = null;
var count__12373_12427 = (0);
var i__12374_12428 = (0);
while(true){
if((i__12374_12428 < count__12373_12427)){
var lib_12429 = cljs.core._nth.call(null,chunk__12372_12426,i__12374_12428);
var map__12379_12430 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12429));
var map__12379_12431__$1 = (((((!((map__12379_12430 == null))))?(((((map__12379_12430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12379_12430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12379_12430):map__12379_12430);
var global_exports_12432 = cljs.core.get.call(null,map__12379_12431__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_12432,lib_12429);


var G__12433 = seq__12371_12425;
var G__12434 = chunk__12372_12426;
var G__12435 = count__12373_12427;
var G__12436 = (i__12374_12428 + (1));
seq__12371_12425 = G__12433;
chunk__12372_12426 = G__12434;
count__12373_12427 = G__12435;
i__12374_12428 = G__12436;
continue;
} else {
var temp__5720__auto___12437 = cljs.core.seq.call(null,seq__12371_12425);
if(temp__5720__auto___12437){
var seq__12371_12438__$1 = temp__5720__auto___12437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12371_12438__$1)){
var c__4550__auto___12439 = cljs.core.chunk_first.call(null,seq__12371_12438__$1);
var G__12440 = cljs.core.chunk_rest.call(null,seq__12371_12438__$1);
var G__12441 = c__4550__auto___12439;
var G__12442 = cljs.core.count.call(null,c__4550__auto___12439);
var G__12443 = (0);
seq__12371_12425 = G__12440;
chunk__12372_12426 = G__12441;
count__12373_12427 = G__12442;
i__12374_12428 = G__12443;
continue;
} else {
var lib_12444 = cljs.core.first.call(null,seq__12371_12438__$1);
var map__12381_12445 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12444));
var map__12381_12446__$1 = (((((!((map__12381_12445 == null))))?(((((map__12381_12445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12381_12445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12381_12445):map__12381_12445);
var global_exports_12447 = cljs.core.get.call(null,map__12381_12446__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_12447,lib_12444);


var G__12448 = cljs.core.next.call(null,seq__12371_12438__$1);
var G__12449 = null;
var G__12450 = (0);
var G__12451 = (0);
seq__12371_12425 = G__12448;
chunk__12372_12426 = G__12449;
count__12373_12427 = G__12450;
i__12374_12428 = G__12451;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__12452){
var map__12453 = p__12452;
var map__12453__$1 = (((((!((map__12453 == null))))?(((((map__12453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12453):map__12453);
var name = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__12455){
var map__12456 = p__12455;
var map__12456__$1 = (((((!((map__12456 == null))))?(((((map__12456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12456):map__12456);
var name = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__12458){
var map__12459 = p__12458;
var map__12459__$1 = (((((!((map__12459 == null))))?(((((map__12459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12459):map__12459);
var t = cljs.core.get.call(null,map__12459__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12459__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12459__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12459__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12459__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12461_12485 = cljs.core.seq.call(null,protocols);
var chunk__12462_12486 = null;
var count__12463_12487 = (0);
var i__12464_12488 = (0);
while(true){
if((i__12464_12488 < count__12463_12487)){
var protocol_12489 = cljs.core._nth.call(null,chunk__12462_12486,i__12464_12488);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12489)),"}");


var G__12490 = seq__12461_12485;
var G__12491 = chunk__12462_12486;
var G__12492 = count__12463_12487;
var G__12493 = (i__12464_12488 + (1));
seq__12461_12485 = G__12490;
chunk__12462_12486 = G__12491;
count__12463_12487 = G__12492;
i__12464_12488 = G__12493;
continue;
} else {
var temp__5720__auto___12494 = cljs.core.seq.call(null,seq__12461_12485);
if(temp__5720__auto___12494){
var seq__12461_12495__$1 = temp__5720__auto___12494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12461_12495__$1)){
var c__4550__auto___12496 = cljs.core.chunk_first.call(null,seq__12461_12495__$1);
var G__12497 = cljs.core.chunk_rest.call(null,seq__12461_12495__$1);
var G__12498 = c__4550__auto___12496;
var G__12499 = cljs.core.count.call(null,c__4550__auto___12496);
var G__12500 = (0);
seq__12461_12485 = G__12497;
chunk__12462_12486 = G__12498;
count__12463_12487 = G__12499;
i__12464_12488 = G__12500;
continue;
} else {
var protocol_12501 = cljs.core.first.call(null,seq__12461_12495__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12501)),"}");


var G__12502 = cljs.core.next.call(null,seq__12461_12495__$1);
var G__12503 = null;
var G__12504 = (0);
var G__12505 = (0);
seq__12461_12485 = G__12502;
chunk__12462_12486 = G__12503;
count__12463_12487 = G__12504;
i__12464_12488 = G__12505;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12465_12506 = cljs.core.seq.call(null,fields__$1);
var chunk__12466_12507 = null;
var count__12467_12508 = (0);
var i__12468_12509 = (0);
while(true){
if((i__12468_12509 < count__12467_12508)){
var fld_12510 = cljs.core._nth.call(null,chunk__12466_12507,i__12468_12509);
cljs.compiler.emitln.call(null,"this.",fld_12510," = ",fld_12510,";");


var G__12511 = seq__12465_12506;
var G__12512 = chunk__12466_12507;
var G__12513 = count__12467_12508;
var G__12514 = (i__12468_12509 + (1));
seq__12465_12506 = G__12511;
chunk__12466_12507 = G__12512;
count__12467_12508 = G__12513;
i__12468_12509 = G__12514;
continue;
} else {
var temp__5720__auto___12515 = cljs.core.seq.call(null,seq__12465_12506);
if(temp__5720__auto___12515){
var seq__12465_12516__$1 = temp__5720__auto___12515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12465_12516__$1)){
var c__4550__auto___12517 = cljs.core.chunk_first.call(null,seq__12465_12516__$1);
var G__12518 = cljs.core.chunk_rest.call(null,seq__12465_12516__$1);
var G__12519 = c__4550__auto___12517;
var G__12520 = cljs.core.count.call(null,c__4550__auto___12517);
var G__12521 = (0);
seq__12465_12506 = G__12518;
chunk__12466_12507 = G__12519;
count__12467_12508 = G__12520;
i__12468_12509 = G__12521;
continue;
} else {
var fld_12522 = cljs.core.first.call(null,seq__12465_12516__$1);
cljs.compiler.emitln.call(null,"this.",fld_12522," = ",fld_12522,";");


var G__12523 = cljs.core.next.call(null,seq__12465_12516__$1);
var G__12524 = null;
var G__12525 = (0);
var G__12526 = (0);
seq__12465_12506 = G__12523;
chunk__12466_12507 = G__12524;
count__12467_12508 = G__12525;
i__12468_12509 = G__12526;
continue;
}
} else {
}
}
break;
}

var seq__12469_12527 = cljs.core.seq.call(null,pmasks);
var chunk__12470_12528 = null;
var count__12471_12529 = (0);
var i__12472_12530 = (0);
while(true){
if((i__12472_12530 < count__12471_12529)){
var vec__12479_12531 = cljs.core._nth.call(null,chunk__12470_12528,i__12472_12530);
var pno_12532 = cljs.core.nth.call(null,vec__12479_12531,(0),null);
var pmask_12533 = cljs.core.nth.call(null,vec__12479_12531,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12532,"$ = ",pmask_12533,";");


var G__12534 = seq__12469_12527;
var G__12535 = chunk__12470_12528;
var G__12536 = count__12471_12529;
var G__12537 = (i__12472_12530 + (1));
seq__12469_12527 = G__12534;
chunk__12470_12528 = G__12535;
count__12471_12529 = G__12536;
i__12472_12530 = G__12537;
continue;
} else {
var temp__5720__auto___12538 = cljs.core.seq.call(null,seq__12469_12527);
if(temp__5720__auto___12538){
var seq__12469_12539__$1 = temp__5720__auto___12538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12469_12539__$1)){
var c__4550__auto___12540 = cljs.core.chunk_first.call(null,seq__12469_12539__$1);
var G__12541 = cljs.core.chunk_rest.call(null,seq__12469_12539__$1);
var G__12542 = c__4550__auto___12540;
var G__12543 = cljs.core.count.call(null,c__4550__auto___12540);
var G__12544 = (0);
seq__12469_12527 = G__12541;
chunk__12470_12528 = G__12542;
count__12471_12529 = G__12543;
i__12472_12530 = G__12544;
continue;
} else {
var vec__12482_12545 = cljs.core.first.call(null,seq__12469_12539__$1);
var pno_12546 = cljs.core.nth.call(null,vec__12482_12545,(0),null);
var pmask_12547 = cljs.core.nth.call(null,vec__12482_12545,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12546,"$ = ",pmask_12547,";");


var G__12548 = cljs.core.next.call(null,seq__12469_12539__$1);
var G__12549 = null;
var G__12550 = (0);
var G__12551 = (0);
seq__12469_12527 = G__12548;
chunk__12470_12528 = G__12549;
count__12471_12529 = G__12550;
i__12472_12530 = G__12551;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__12552){
var map__12553 = p__12552;
var map__12553__$1 = (((((!((map__12553 == null))))?(((((map__12553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12553):map__12553);
var t = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12555_12579 = cljs.core.seq.call(null,protocols);
var chunk__12556_12580 = null;
var count__12557_12581 = (0);
var i__12558_12582 = (0);
while(true){
if((i__12558_12582 < count__12557_12581)){
var protocol_12583 = cljs.core._nth.call(null,chunk__12556_12580,i__12558_12582);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12583)),"}");


var G__12584 = seq__12555_12579;
var G__12585 = chunk__12556_12580;
var G__12586 = count__12557_12581;
var G__12587 = (i__12558_12582 + (1));
seq__12555_12579 = G__12584;
chunk__12556_12580 = G__12585;
count__12557_12581 = G__12586;
i__12558_12582 = G__12587;
continue;
} else {
var temp__5720__auto___12588 = cljs.core.seq.call(null,seq__12555_12579);
if(temp__5720__auto___12588){
var seq__12555_12589__$1 = temp__5720__auto___12588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12555_12589__$1)){
var c__4550__auto___12590 = cljs.core.chunk_first.call(null,seq__12555_12589__$1);
var G__12591 = cljs.core.chunk_rest.call(null,seq__12555_12589__$1);
var G__12592 = c__4550__auto___12590;
var G__12593 = cljs.core.count.call(null,c__4550__auto___12590);
var G__12594 = (0);
seq__12555_12579 = G__12591;
chunk__12556_12580 = G__12592;
count__12557_12581 = G__12593;
i__12558_12582 = G__12594;
continue;
} else {
var protocol_12595 = cljs.core.first.call(null,seq__12555_12589__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12595)),"}");


var G__12596 = cljs.core.next.call(null,seq__12555_12589__$1);
var G__12597 = null;
var G__12598 = (0);
var G__12599 = (0);
seq__12555_12579 = G__12596;
chunk__12556_12580 = G__12597;
count__12557_12581 = G__12598;
i__12558_12582 = G__12599;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12559_12600 = cljs.core.seq.call(null,fields__$1);
var chunk__12560_12601 = null;
var count__12561_12602 = (0);
var i__12562_12603 = (0);
while(true){
if((i__12562_12603 < count__12561_12602)){
var fld_12604 = cljs.core._nth.call(null,chunk__12560_12601,i__12562_12603);
cljs.compiler.emitln.call(null,"this.",fld_12604," = ",fld_12604,";");


var G__12605 = seq__12559_12600;
var G__12606 = chunk__12560_12601;
var G__12607 = count__12561_12602;
var G__12608 = (i__12562_12603 + (1));
seq__12559_12600 = G__12605;
chunk__12560_12601 = G__12606;
count__12561_12602 = G__12607;
i__12562_12603 = G__12608;
continue;
} else {
var temp__5720__auto___12609 = cljs.core.seq.call(null,seq__12559_12600);
if(temp__5720__auto___12609){
var seq__12559_12610__$1 = temp__5720__auto___12609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12559_12610__$1)){
var c__4550__auto___12611 = cljs.core.chunk_first.call(null,seq__12559_12610__$1);
var G__12612 = cljs.core.chunk_rest.call(null,seq__12559_12610__$1);
var G__12613 = c__4550__auto___12611;
var G__12614 = cljs.core.count.call(null,c__4550__auto___12611);
var G__12615 = (0);
seq__12559_12600 = G__12612;
chunk__12560_12601 = G__12613;
count__12561_12602 = G__12614;
i__12562_12603 = G__12615;
continue;
} else {
var fld_12616 = cljs.core.first.call(null,seq__12559_12610__$1);
cljs.compiler.emitln.call(null,"this.",fld_12616," = ",fld_12616,";");


var G__12617 = cljs.core.next.call(null,seq__12559_12610__$1);
var G__12618 = null;
var G__12619 = (0);
var G__12620 = (0);
seq__12559_12600 = G__12617;
chunk__12560_12601 = G__12618;
count__12561_12602 = G__12619;
i__12562_12603 = G__12620;
continue;
}
} else {
}
}
break;
}

var seq__12563_12621 = cljs.core.seq.call(null,pmasks);
var chunk__12564_12622 = null;
var count__12565_12623 = (0);
var i__12566_12624 = (0);
while(true){
if((i__12566_12624 < count__12565_12623)){
var vec__12573_12625 = cljs.core._nth.call(null,chunk__12564_12622,i__12566_12624);
var pno_12626 = cljs.core.nth.call(null,vec__12573_12625,(0),null);
var pmask_12627 = cljs.core.nth.call(null,vec__12573_12625,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12626,"$ = ",pmask_12627,";");


var G__12628 = seq__12563_12621;
var G__12629 = chunk__12564_12622;
var G__12630 = count__12565_12623;
var G__12631 = (i__12566_12624 + (1));
seq__12563_12621 = G__12628;
chunk__12564_12622 = G__12629;
count__12565_12623 = G__12630;
i__12566_12624 = G__12631;
continue;
} else {
var temp__5720__auto___12632 = cljs.core.seq.call(null,seq__12563_12621);
if(temp__5720__auto___12632){
var seq__12563_12633__$1 = temp__5720__auto___12632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12563_12633__$1)){
var c__4550__auto___12634 = cljs.core.chunk_first.call(null,seq__12563_12633__$1);
var G__12635 = cljs.core.chunk_rest.call(null,seq__12563_12633__$1);
var G__12636 = c__4550__auto___12634;
var G__12637 = cljs.core.count.call(null,c__4550__auto___12634);
var G__12638 = (0);
seq__12563_12621 = G__12635;
chunk__12564_12622 = G__12636;
count__12565_12623 = G__12637;
i__12566_12624 = G__12638;
continue;
} else {
var vec__12576_12639 = cljs.core.first.call(null,seq__12563_12633__$1);
var pno_12640 = cljs.core.nth.call(null,vec__12576_12639,(0),null);
var pmask_12641 = cljs.core.nth.call(null,vec__12576_12639,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12640,"$ = ",pmask_12641,";");


var G__12642 = cljs.core.next.call(null,seq__12563_12633__$1);
var G__12643 = null;
var G__12644 = (0);
var G__12645 = (0);
seq__12563_12621 = G__12642;
chunk__12564_12622 = G__12643;
count__12565_12623 = G__12644;
i__12566_12624 = G__12645;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__12646){
var map__12647 = p__12646;
var map__12647__$1 = (((((!((map__12647 == null))))?(((((map__12647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12647):map__12647);
var target = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__12649){
var map__12650 = p__12649;
var map__12650__$1 = (((((!((map__12650 == null))))?(((((map__12650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12650):map__12650);
var op = cljs.core.get.call(null,map__12650__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__12650__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__12650__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__12650__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__12650__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__11444__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11444__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__12656 = cljs.core.seq.call(null,table);
var chunk__12657 = null;
var count__12658 = (0);
var i__12659 = (0);
while(true){
if((i__12659 < count__12658)){
var vec__12666 = cljs.core._nth.call(null,chunk__12657,i__12659);
var sym = cljs.core.nth.call(null,vec__12666,(0),null);
var value = cljs.core.nth.call(null,vec__12666,(1),null);
var ns_12672 = cljs.core.namespace.call(null,sym);
var name_12673 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__12674 = seq__12656;
var G__12675 = chunk__12657;
var G__12676 = count__12658;
var G__12677 = (i__12659 + (1));
seq__12656 = G__12674;
chunk__12657 = G__12675;
count__12658 = G__12676;
i__12659 = G__12677;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12656);
if(temp__5720__auto__){
var seq__12656__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12656__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__12656__$1);
var G__12678 = cljs.core.chunk_rest.call(null,seq__12656__$1);
var G__12679 = c__4550__auto__;
var G__12680 = cljs.core.count.call(null,c__4550__auto__);
var G__12681 = (0);
seq__12656 = G__12678;
chunk__12657 = G__12679;
count__12658 = G__12680;
i__12659 = G__12681;
continue;
} else {
var vec__12669 = cljs.core.first.call(null,seq__12656__$1);
var sym = cljs.core.nth.call(null,vec__12669,(0),null);
var value = cljs.core.nth.call(null,vec__12669,(1),null);
var ns_12682 = cljs.core.namespace.call(null,sym);
var name_12683 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__12684 = cljs.core.next.call(null,seq__12656__$1);
var G__12685 = null;
var G__12686 = (0);
var G__12687 = (0);
seq__12656 = G__12684;
chunk__12657 = G__12685;
count__12658 = G__12686;
i__12659 = G__12687;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__12689 = arguments.length;
switch (G__12689) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_12694 = cljs.core.first.call(null,ks);
var vec__12690_12695 = cljs.core.conj.call(null,prefix,k_12694);
var top_12696 = cljs.core.nth.call(null,vec__12690_12695,(0),null);
var prefix_SINGLEQUOTE__12697 = vec__12690_12695;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_12694)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__12697) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_12696)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_12696)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12697)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_12696);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12697)),";");
}
} else {
}

var m_12698 = cljs.core.get.call(null,externs,k_12694);
if(cljs.core.empty_QMARK_.call(null,m_12698)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__12697,m_12698,top_level,known_externs);
}

var G__12699 = cljs.core.next.call(null,ks);
ks = G__12699;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
