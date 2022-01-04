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
var map__15281 = s;
var map__15281__$1 = (((((!((map__15281 == null))))?(((((map__15281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15281):map__15281);
var name = cljs.core.get.call(null,map__15281__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15281__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15284 = info;
var map__15285 = G__15284;
var map__15285__$1 = (((((!((map__15285 == null))))?(((((map__15285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15285):map__15285);
var shadow = cljs.core.get.call(null,map__15285__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15284__$1 = G__15284;
while(true){
var d__$2 = d__$1;
var map__15289 = G__15284__$1;
var map__15289__$1 = (((((!((map__15289 == null))))?(((((map__15289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15289):map__15289);
var shadow__$1 = cljs.core.get.call(null,map__15289__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__15291 = (d__$2 + (1));
var G__15292 = shadow__$1;
d__$1 = G__15291;
G__15284__$1 = G__15292;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15293){
var map__15294 = p__15293;
var map__15294__$1 = (((((!((map__15294 == null))))?(((((map__15294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15294):map__15294);
var name_var = map__15294__$1;
var name = cljs.core.get.call(null,map__15294__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15294__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__15296 = info;
var map__15296__$1 = (((((!((map__15296 == null))))?(((((map__15296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15296):map__15296);
var ns = cljs.core.get.call(null,map__15296__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__15296__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__15299 = arguments.length;
switch (G__15299) {
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
var G__15301 = cp;
switch (G__15301) {
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
var seq__15303_15307 = cljs.core.seq.call(null,s);
var chunk__15304_15308 = null;
var count__15305_15309 = (0);
var i__15306_15310 = (0);
while(true){
if((i__15306_15310 < count__15305_15309)){
var c_15311 = cljs.core._nth.call(null,chunk__15304_15308,i__15306_15310);
sb.append(cljs.compiler.escape_char.call(null,c_15311));


var G__15312 = seq__15303_15307;
var G__15313 = chunk__15304_15308;
var G__15314 = count__15305_15309;
var G__15315 = (i__15306_15310 + (1));
seq__15303_15307 = G__15312;
chunk__15304_15308 = G__15313;
count__15305_15309 = G__15314;
i__15306_15310 = G__15315;
continue;
} else {
var temp__5720__auto___15316 = cljs.core.seq.call(null,seq__15303_15307);
if(temp__5720__auto___15316){
var seq__15303_15317__$1 = temp__5720__auto___15316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15303_15317__$1)){
var c__4550__auto___15318 = cljs.core.chunk_first.call(null,seq__15303_15317__$1);
var G__15319 = cljs.core.chunk_rest.call(null,seq__15303_15317__$1);
var G__15320 = c__4550__auto___15318;
var G__15321 = cljs.core.count.call(null,c__4550__auto___15318);
var G__15322 = (0);
seq__15303_15307 = G__15319;
chunk__15304_15308 = G__15320;
count__15305_15309 = G__15321;
i__15306_15310 = G__15322;
continue;
} else {
var c_15323 = cljs.core.first.call(null,seq__15303_15317__$1);
sb.append(cljs.compiler.escape_char.call(null,c_15323));


var G__15324 = cljs.core.next.call(null,seq__15303_15317__$1);
var G__15325 = null;
var G__15326 = (0);
var G__15327 = (0);
seq__15303_15307 = G__15324;
chunk__15304_15308 = G__15325;
count__15305_15309 = G__15326;
i__15306_15310 = G__15327;
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
var map__15328_15333 = ast;
var map__15328_15334__$1 = (((((!((map__15328_15333 == null))))?(((((map__15328_15333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15328_15333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15328_15333):map__15328_15333);
var env_15335 = cljs.core.get.call(null,map__15328_15334__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_15335))){
var map__15330_15336 = env_15335;
var map__15330_15337__$1 = (((((!((map__15330_15336 == null))))?(((((map__15330_15336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15330_15336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15330_15336):map__15330_15336);
var line_15338 = cljs.core.get.call(null,map__15330_15337__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_15339 = cljs.core.get.call(null,map__15330_15337__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__15330_15336,map__15330_15337__$1,line_15338,column_15339,map__15328_15333,map__15328_15334__$1,env_15335){
return (function (m){
var minfo = (function (){var G__15332 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__15332,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__15332;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_15338 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__15330_15336,map__15330_15337__$1,line_15338,column_15339,map__15328_15333,map__15328_15334__$1,env_15335){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_15339)?(column_15339 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__15330_15336,map__15330_15337__$1,line_15338,column_15339,map__15328_15333,map__15328_15334__$1,env_15335){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__15330_15336,map__15330_15337__$1,line_15338,column_15339,map__15328_15333,map__15328_15334__$1,env_15335))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__15330_15336,map__15330_15337__$1,line_15338,column_15339,map__15328_15333,map__15328_15334__$1,env_15335))
,cljs.core.sorted_map.call(null)));
});})(map__15330_15336,map__15330_15337__$1,line_15338,column_15339,map__15328_15333,map__15328_15334__$1,env_15335))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__15348 = arguments.length;
switch (G__15348) {
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
var len__4730__auto___15355 = arguments.length;
var i__4731__auto___15356 = (0);
while(true){
if((i__4731__auto___15356 < len__4730__auto___15355)){
args_arr__4751__auto__.push((arguments[i__4731__auto___15356]));

var G__15357 = (i__4731__auto___15356 + (1));
i__4731__auto___15356 = G__15357;
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
var s_15358 = (function (){var G__15349 = a;
if((!(typeof a === 'string'))){
return G__15349.toString();
} else {
return G__15349;
}
})();
var temp__5724__auto___15359 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___15359 == null)){
} else {
var sm_data_15360 = temp__5724__auto___15359;
cljs.core.swap_BANG_.call(null,sm_data_15360,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_15360,temp__5724__auto___15359,s_15358){
return (function (p1__15340_SHARP_){
return (p1__15340_SHARP_ + s_15358.length);
});})(sm_data_15360,temp__5724__auto___15359,s_15358))
);
}

cljs.core.print.call(null,s_15358);

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

var seq__15350 = cljs.core.seq.call(null,xs);
var chunk__15351 = null;
var count__15352 = (0);
var i__15353 = (0);
while(true){
if((i__15353 < count__15352)){
var x = cljs.core._nth.call(null,chunk__15351,i__15353);
cljs.compiler.emits.call(null,x);


var G__15361 = seq__15350;
var G__15362 = chunk__15351;
var G__15363 = count__15352;
var G__15364 = (i__15353 + (1));
seq__15350 = G__15361;
chunk__15351 = G__15362;
count__15352 = G__15363;
i__15353 = G__15364;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15350);
if(temp__5720__auto__){
var seq__15350__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15350__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15350__$1);
var G__15365 = cljs.core.chunk_rest.call(null,seq__15350__$1);
var G__15366 = c__4550__auto__;
var G__15367 = cljs.core.count.call(null,c__4550__auto__);
var G__15368 = (0);
seq__15350 = G__15365;
chunk__15351 = G__15366;
count__15352 = G__15367;
i__15353 = G__15368;
continue;
} else {
var x = cljs.core.first.call(null,seq__15350__$1);
cljs.compiler.emits.call(null,x);


var G__15369 = cljs.core.next.call(null,seq__15350__$1);
var G__15370 = null;
var G__15371 = (0);
var G__15372 = (0);
seq__15350 = G__15369;
chunk__15351 = G__15370;
count__15352 = G__15371;
i__15353 = G__15372;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq15342){
var G__15343 = cljs.core.first.call(null,seq15342);
var seq15342__$1 = cljs.core.next.call(null,seq15342);
var G__15344 = cljs.core.first.call(null,seq15342__$1);
var seq15342__$2 = cljs.core.next.call(null,seq15342__$1);
var G__15345 = cljs.core.first.call(null,seq15342__$2);
var seq15342__$3 = cljs.core.next.call(null,seq15342__$2);
var G__15346 = cljs.core.first.call(null,seq15342__$3);
var seq15342__$4 = cljs.core.next.call(null,seq15342__$3);
var G__15347 = cljs.core.first.call(null,seq15342__$4);
var seq15342__$5 = cljs.core.next.call(null,seq15342__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15343,G__15344,G__15345,G__15346,G__15347,seq15342__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__15373){
var map__15374 = p__15373;
var map__15374__$1 = (((((!((map__15374 == null))))?(((((map__15374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15374):map__15374);
var m = map__15374__$1;
var gen_line = cljs.core.get.call(null,map__15374__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__15383 = arguments.length;
switch (G__15383) {
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
var len__4730__auto___15389 = arguments.length;
var i__4731__auto___15390 = (0);
while(true){
if((i__4731__auto___15390 < len__4730__auto___15389)){
args_arr__4751__auto__.push((arguments[i__4731__auto___15390]));

var G__15391 = (i__4731__auto___15390 + (1));
i__4731__auto___15390 = G__15391;
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

var seq__15384_15392 = cljs.core.seq.call(null,xs);
var chunk__15385_15393 = null;
var count__15386_15394 = (0);
var i__15387_15395 = (0);
while(true){
if((i__15387_15395 < count__15386_15394)){
var x_15396 = cljs.core._nth.call(null,chunk__15385_15393,i__15387_15395);
cljs.compiler.emits.call(null,x_15396);


var G__15397 = seq__15384_15392;
var G__15398 = chunk__15385_15393;
var G__15399 = count__15386_15394;
var G__15400 = (i__15387_15395 + (1));
seq__15384_15392 = G__15397;
chunk__15385_15393 = G__15398;
count__15386_15394 = G__15399;
i__15387_15395 = G__15400;
continue;
} else {
var temp__5720__auto___15401 = cljs.core.seq.call(null,seq__15384_15392);
if(temp__5720__auto___15401){
var seq__15384_15402__$1 = temp__5720__auto___15401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15384_15402__$1)){
var c__4550__auto___15403 = cljs.core.chunk_first.call(null,seq__15384_15402__$1);
var G__15404 = cljs.core.chunk_rest.call(null,seq__15384_15402__$1);
var G__15405 = c__4550__auto___15403;
var G__15406 = cljs.core.count.call(null,c__4550__auto___15403);
var G__15407 = (0);
seq__15384_15392 = G__15404;
chunk__15385_15393 = G__15405;
count__15386_15394 = G__15406;
i__15387_15395 = G__15407;
continue;
} else {
var x_15408 = cljs.core.first.call(null,seq__15384_15402__$1);
cljs.compiler.emits.call(null,x_15408);


var G__15409 = cljs.core.next.call(null,seq__15384_15402__$1);
var G__15410 = null;
var G__15411 = (0);
var G__15412 = (0);
seq__15384_15392 = G__15409;
chunk__15385_15393 = G__15410;
count__15386_15394 = G__15411;
i__15387_15395 = G__15412;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15377){
var G__15378 = cljs.core.first.call(null,seq15377);
var seq15377__$1 = cljs.core.next.call(null,seq15377);
var G__15379 = cljs.core.first.call(null,seq15377__$1);
var seq15377__$2 = cljs.core.next.call(null,seq15377__$1);
var G__15380 = cljs.core.first.call(null,seq15377__$2);
var seq15377__$3 = cljs.core.next.call(null,seq15377__$2);
var G__15381 = cljs.core.first.call(null,seq15377__$3);
var seq15377__$4 = cljs.core.next.call(null,seq15377__$3);
var G__15382 = cljs.core.first.call(null,seq15377__$4);
var seq15377__$5 = cljs.core.next.call(null,seq15377__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15378,G__15379,G__15380,G__15381,G__15382,seq15377__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15413_15417 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15414_15418 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15415_15419 = true;
var _STAR_print_fn_STAR__temp_val__15416_15420 = ((function (_STAR_print_newline_STAR__orig_val__15413_15417,_STAR_print_fn_STAR__orig_val__15414_15418,_STAR_print_newline_STAR__temp_val__15415_15419,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15413_15417,_STAR_print_fn_STAR__orig_val__15414_15418,_STAR_print_newline_STAR__temp_val__15415_15419,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15415_15419;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15416_15420;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15414_15418;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15413_15417;
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
var vec__15421 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__15421,(0),null);
var name = cljs.core.nth.call(null,vec__15421,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__15421,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__15421,ns,name))
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
var vec__15424 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__15424,(0),null);
var flags = cljs.core.nth.call(null,vec__15424,(1),null);
var pattern = cljs.core.nth.call(null,vec__15424,(2),null);
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
return (function (p1__15427_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__15427_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__15429){
var map__15430 = p__15429;
var map__15430__$1 = (((((!((map__15430 == null))))?(((((map__15430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15430):map__15430);
var ast = map__15430__$1;
var info = cljs.core.get.call(null,map__15430__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__15430__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__15430__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__15432 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__15432__$1 = (((((!((map__15432 == null))))?(((((map__15432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15432):map__15432);
var cenv = map__15432__$1;
var options = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__15434 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__15434,cljs.analyzer.es5_allowed);
} else {
return G__15434;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__15435 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__15435,reserved);
} else {
return G__15435;
}
})();
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__15436_15437 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__15436_15438__$1 = (((G__15436_15437 instanceof cljs.core.Keyword))?G__15436_15437.fqn:null);
switch (G__15436_15438__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__15440){
var map__15441 = p__15440;
var map__15441__$1 = (((((!((map__15441 == null))))?(((((map__15441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15441):map__15441);
var arg = map__15441__$1;
var env = cljs.core.get.call(null,map__15441__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__15441__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__15441__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__15441__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__15443 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15443__$1 = (((((!((map__15443 == null))))?(((((map__15443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15443):map__15443);
var name = cljs.core.get.call(null,map__15443__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__15445){
var map__15446 = p__15445;
var map__15446__$1 = (((((!((map__15446 == null))))?(((((map__15446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15446):map__15446);
var expr = cljs.core.get.call(null,map__15446__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__15446__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__15446__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__15448_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15448_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__15449){
var map__15450 = p__15449;
var map__15450__$1 = (((((!((map__15450 == null))))?(((((map__15450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15450):map__15450);
var env = cljs.core.get.call(null,map__15450__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__15450__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15450__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__15452){
var map__15453 = p__15452;
var map__15453__$1 = (((((!((map__15453 == null))))?(((((map__15453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15453):map__15453);
var items = cljs.core.get.call(null,map__15453__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15453__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__15455_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15455_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__15456){
var map__15457 = p__15456;
var map__15457__$1 = (((((!((map__15457 == null))))?(((((map__15457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15457):map__15457);
var items = cljs.core.get.call(null,map__15457__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15457__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___15481 = cljs.core.seq.call(null,items);
if(temp__5720__auto___15481){
var items_15482__$1 = temp__5720__auto___15481;
var vec__15459_15483 = items_15482__$1;
var seq__15460_15484 = cljs.core.seq.call(null,vec__15459_15483);
var first__15461_15485 = cljs.core.first.call(null,seq__15460_15484);
var seq__15460_15486__$1 = cljs.core.next.call(null,seq__15460_15484);
var vec__15462_15487 = first__15461_15485;
var k_15488 = cljs.core.nth.call(null,vec__15462_15487,(0),null);
var v_15489 = cljs.core.nth.call(null,vec__15462_15487,(1),null);
var r_15490 = seq__15460_15486__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_15488),"\": ",emit_js_object_val.call(null,v_15489));

var seq__15465_15491 = cljs.core.seq.call(null,r_15490);
var chunk__15466_15492 = null;
var count__15467_15493 = (0);
var i__15468_15494 = (0);
while(true){
if((i__15468_15494 < count__15467_15493)){
var vec__15475_15495 = cljs.core._nth.call(null,chunk__15466_15492,i__15468_15494);
var k_15496__$1 = cljs.core.nth.call(null,vec__15475_15495,(0),null);
var v_15497__$1 = cljs.core.nth.call(null,vec__15475_15495,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15496__$1),"\": ",emit_js_object_val.call(null,v_15497__$1));


var G__15498 = seq__15465_15491;
var G__15499 = chunk__15466_15492;
var G__15500 = count__15467_15493;
var G__15501 = (i__15468_15494 + (1));
seq__15465_15491 = G__15498;
chunk__15466_15492 = G__15499;
count__15467_15493 = G__15500;
i__15468_15494 = G__15501;
continue;
} else {
var temp__5720__auto___15502__$1 = cljs.core.seq.call(null,seq__15465_15491);
if(temp__5720__auto___15502__$1){
var seq__15465_15503__$1 = temp__5720__auto___15502__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15465_15503__$1)){
var c__4550__auto___15504 = cljs.core.chunk_first.call(null,seq__15465_15503__$1);
var G__15505 = cljs.core.chunk_rest.call(null,seq__15465_15503__$1);
var G__15506 = c__4550__auto___15504;
var G__15507 = cljs.core.count.call(null,c__4550__auto___15504);
var G__15508 = (0);
seq__15465_15491 = G__15505;
chunk__15466_15492 = G__15506;
count__15467_15493 = G__15507;
i__15468_15494 = G__15508;
continue;
} else {
var vec__15478_15509 = cljs.core.first.call(null,seq__15465_15503__$1);
var k_15510__$1 = cljs.core.nth.call(null,vec__15478_15509,(0),null);
var v_15511__$1 = cljs.core.nth.call(null,vec__15478_15509,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15510__$1),"\": ",emit_js_object_val.call(null,v_15511__$1));


var G__15512 = cljs.core.next.call(null,seq__15465_15503__$1);
var G__15513 = null;
var G__15514 = (0);
var G__15515 = (0);
seq__15465_15491 = G__15512;
chunk__15466_15492 = G__15513;
count__15467_15493 = G__15514;
i__15468_15494 = G__15515;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__15516){
var map__15517 = p__15516;
var map__15517__$1 = (((((!((map__15517 == null))))?(((((map__15517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15517):map__15517);
var keys = cljs.core.get.call(null,map__15517__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15517__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__15517__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__15519){
var map__15520 = p__15519;
var map__15520__$1 = (((((!((map__15520 == null))))?(((((map__15520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15520):map__15520);
var items = cljs.core.get.call(null,map__15520__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15520__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__15522){
var map__15523 = p__15522;
var map__15523__$1 = (((((!((map__15523 == null))))?(((((map__15523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15523):map__15523);
var expr = cljs.core.get.call(null,map__15523__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__15525){
var map__15526 = p__15525;
var map__15526__$1 = (((((!((map__15526 == null))))?(((((map__15526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15526):map__15526);
var form = cljs.core.get.call(null,map__15526__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__15526__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__15528 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__15528__$1 = (((((!((map__15528 == null))))?(((((map__15528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15528):map__15528);
var op = cljs.core.get.call(null,map__15528__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15528__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15528__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__15530 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__15530__$1 = (((((!((map__15530 == null))))?(((((map__15530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15530):map__15530);
var op = cljs.core.get.call(null,map__15530__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15530__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15530__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__15532){
var map__15533 = p__15532;
var map__15533__$1 = (((((!((map__15533 == null))))?(((((map__15533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15533):map__15533);
var test = cljs.core.get.call(null,map__15533__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__15533__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__15533__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__15533__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__15533__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__15535){
var map__15536 = p__15535;
var map__15536__$1 = (((((!((map__15536 == null))))?(((((map__15536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15536):map__15536);
var v = cljs.core.get.call(null,map__15536__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__15536__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__15536__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__15536__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__15538_15574 = cljs.core.seq.call(null,nodes);
var chunk__15539_15575 = null;
var count__15540_15576 = (0);
var i__15541_15577 = (0);
while(true){
if((i__15541_15577 < count__15540_15576)){
var map__15558_15578 = cljs.core._nth.call(null,chunk__15539_15575,i__15541_15577);
var map__15558_15579__$1 = (((((!((map__15558_15578 == null))))?(((((map__15558_15578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15558_15578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15558_15578):map__15558_15578);
var ts_15580 = cljs.core.get.call(null,map__15558_15579__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__15559_15581 = cljs.core.get.call(null,map__15558_15579__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__15559_15582__$1 = (((((!((map__15559_15581 == null))))?(((((map__15559_15581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15559_15581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15559_15581):map__15559_15581);
var then_15583 = cljs.core.get.call(null,map__15559_15582__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__15562_15584 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_15580));
var chunk__15563_15585 = null;
var count__15564_15586 = (0);
var i__15565_15587 = (0);
while(true){
if((i__15565_15587 < count__15564_15586)){
var test_15588 = cljs.core._nth.call(null,chunk__15563_15585,i__15565_15587);
cljs.compiler.emitln.call(null,"case ",test_15588,":");


var G__15589 = seq__15562_15584;
var G__15590 = chunk__15563_15585;
var G__15591 = count__15564_15586;
var G__15592 = (i__15565_15587 + (1));
seq__15562_15584 = G__15589;
chunk__15563_15585 = G__15590;
count__15564_15586 = G__15591;
i__15565_15587 = G__15592;
continue;
} else {
var temp__5720__auto___15593 = cljs.core.seq.call(null,seq__15562_15584);
if(temp__5720__auto___15593){
var seq__15562_15594__$1 = temp__5720__auto___15593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15562_15594__$1)){
var c__4550__auto___15595 = cljs.core.chunk_first.call(null,seq__15562_15594__$1);
var G__15596 = cljs.core.chunk_rest.call(null,seq__15562_15594__$1);
var G__15597 = c__4550__auto___15595;
var G__15598 = cljs.core.count.call(null,c__4550__auto___15595);
var G__15599 = (0);
seq__15562_15584 = G__15596;
chunk__15563_15585 = G__15597;
count__15564_15586 = G__15598;
i__15565_15587 = G__15599;
continue;
} else {
var test_15600 = cljs.core.first.call(null,seq__15562_15594__$1);
cljs.compiler.emitln.call(null,"case ",test_15600,":");


var G__15601 = cljs.core.next.call(null,seq__15562_15594__$1);
var G__15602 = null;
var G__15603 = (0);
var G__15604 = (0);
seq__15562_15584 = G__15601;
chunk__15563_15585 = G__15602;
count__15564_15586 = G__15603;
i__15565_15587 = G__15604;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15583);
} else {
cljs.compiler.emitln.call(null,then_15583);
}

cljs.compiler.emitln.call(null,"break;");


var G__15605 = seq__15538_15574;
var G__15606 = chunk__15539_15575;
var G__15607 = count__15540_15576;
var G__15608 = (i__15541_15577 + (1));
seq__15538_15574 = G__15605;
chunk__15539_15575 = G__15606;
count__15540_15576 = G__15607;
i__15541_15577 = G__15608;
continue;
} else {
var temp__5720__auto___15609 = cljs.core.seq.call(null,seq__15538_15574);
if(temp__5720__auto___15609){
var seq__15538_15610__$1 = temp__5720__auto___15609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15538_15610__$1)){
var c__4550__auto___15611 = cljs.core.chunk_first.call(null,seq__15538_15610__$1);
var G__15612 = cljs.core.chunk_rest.call(null,seq__15538_15610__$1);
var G__15613 = c__4550__auto___15611;
var G__15614 = cljs.core.count.call(null,c__4550__auto___15611);
var G__15615 = (0);
seq__15538_15574 = G__15612;
chunk__15539_15575 = G__15613;
count__15540_15576 = G__15614;
i__15541_15577 = G__15615;
continue;
} else {
var map__15566_15616 = cljs.core.first.call(null,seq__15538_15610__$1);
var map__15566_15617__$1 = (((((!((map__15566_15616 == null))))?(((((map__15566_15616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15566_15616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15566_15616):map__15566_15616);
var ts_15618 = cljs.core.get.call(null,map__15566_15617__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__15567_15619 = cljs.core.get.call(null,map__15566_15617__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__15567_15620__$1 = (((((!((map__15567_15619 == null))))?(((((map__15567_15619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15567_15619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15567_15619):map__15567_15619);
var then_15621 = cljs.core.get.call(null,map__15567_15620__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__15570_15622 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_15618));
var chunk__15571_15623 = null;
var count__15572_15624 = (0);
var i__15573_15625 = (0);
while(true){
if((i__15573_15625 < count__15572_15624)){
var test_15626 = cljs.core._nth.call(null,chunk__15571_15623,i__15573_15625);
cljs.compiler.emitln.call(null,"case ",test_15626,":");


var G__15627 = seq__15570_15622;
var G__15628 = chunk__15571_15623;
var G__15629 = count__15572_15624;
var G__15630 = (i__15573_15625 + (1));
seq__15570_15622 = G__15627;
chunk__15571_15623 = G__15628;
count__15572_15624 = G__15629;
i__15573_15625 = G__15630;
continue;
} else {
var temp__5720__auto___15631__$1 = cljs.core.seq.call(null,seq__15570_15622);
if(temp__5720__auto___15631__$1){
var seq__15570_15632__$1 = temp__5720__auto___15631__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15570_15632__$1)){
var c__4550__auto___15633 = cljs.core.chunk_first.call(null,seq__15570_15632__$1);
var G__15634 = cljs.core.chunk_rest.call(null,seq__15570_15632__$1);
var G__15635 = c__4550__auto___15633;
var G__15636 = cljs.core.count.call(null,c__4550__auto___15633);
var G__15637 = (0);
seq__15570_15622 = G__15634;
chunk__15571_15623 = G__15635;
count__15572_15624 = G__15636;
i__15573_15625 = G__15637;
continue;
} else {
var test_15638 = cljs.core.first.call(null,seq__15570_15632__$1);
cljs.compiler.emitln.call(null,"case ",test_15638,":");


var G__15639 = cljs.core.next.call(null,seq__15570_15632__$1);
var G__15640 = null;
var G__15641 = (0);
var G__15642 = (0);
seq__15570_15622 = G__15639;
chunk__15571_15623 = G__15640;
count__15572_15624 = G__15641;
i__15573_15625 = G__15642;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15621);
} else {
cljs.compiler.emitln.call(null,then_15621);
}

cljs.compiler.emitln.call(null,"break;");


var G__15643 = cljs.core.next.call(null,seq__15538_15610__$1);
var G__15644 = null;
var G__15645 = (0);
var G__15646 = (0);
seq__15538_15574 = G__15643;
chunk__15539_15575 = G__15644;
count__15540_15576 = G__15645;
i__15541_15577 = G__15646;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__15647){
var map__15648 = p__15647;
var map__15648__$1 = (((((!((map__15648 == null))))?(((((map__15648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15648):map__15648);
var throw$ = cljs.core.get.call(null,map__15648__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__15648__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__15651 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__15651,(0),null);
var rstr = cljs.core.nth.call(null,vec__15651,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__15651,fstr,rstr,ret_t,axstr){
return (function (p1__15650_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15650_SHARP_);
});})(idx,vec__15651,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__15654 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__15654,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__15654;
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
return (function (p1__15655_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15655_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__15656 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15657 = cljs.core.seq.call(null,vec__15656);
var first__15658 = cljs.core.first.call(null,seq__15657);
var seq__15657__$1 = cljs.core.next.call(null,seq__15657);
var p = first__15658;
var first__15658__$1 = cljs.core.first.call(null,seq__15657__$1);
var seq__15657__$2 = cljs.core.next.call(null,seq__15657__$1);
var ts = first__15658__$1;
var first__15658__$2 = cljs.core.first.call(null,seq__15657__$2);
var seq__15657__$3 = cljs.core.next.call(null,seq__15657__$2);
var n = first__15658__$2;
var xs = seq__15657__$3;
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
var vec__15659 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15660 = cljs.core.seq.call(null,vec__15659);
var first__15661 = cljs.core.first.call(null,seq__15660);
var seq__15660__$1 = cljs.core.next.call(null,seq__15660);
var p = first__15661;
var first__15661__$1 = cljs.core.first.call(null,seq__15660__$1);
var seq__15660__$2 = cljs.core.next.call(null,seq__15660__$1);
var ts = first__15661__$1;
var xs = seq__15660__$2;
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
var G__15664 = arguments.length;
switch (G__15664) {
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
var vec__15672 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__15662_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__15662_SHARP_);
} else {
return p1__15662_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__15673 = cljs.core.seq.call(null,vec__15672);
var first__15674 = cljs.core.first.call(null,seq__15673);
var seq__15673__$1 = cljs.core.next.call(null,seq__15673);
var x = first__15674;
var ys = seq__15673__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__15675 = cljs.core.seq.call(null,ys);
var chunk__15676 = null;
var count__15677 = (0);
var i__15678 = (0);
while(true){
if((i__15678 < count__15677)){
var next_line = cljs.core._nth.call(null,chunk__15676,i__15678);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15684 = seq__15675;
var G__15685 = chunk__15676;
var G__15686 = count__15677;
var G__15687 = (i__15678 + (1));
seq__15675 = G__15684;
chunk__15676 = G__15685;
count__15677 = G__15686;
i__15678 = G__15687;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15675);
if(temp__5720__auto__){
var seq__15675__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15675__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15675__$1);
var G__15688 = cljs.core.chunk_rest.call(null,seq__15675__$1);
var G__15689 = c__4550__auto__;
var G__15690 = cljs.core.count.call(null,c__4550__auto__);
var G__15691 = (0);
seq__15675 = G__15688;
chunk__15676 = G__15689;
count__15677 = G__15690;
i__15678 = G__15691;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__15675__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15692 = cljs.core.next.call(null,seq__15675__$1);
var G__15693 = null;
var G__15694 = (0);
var G__15695 = (0);
seq__15675 = G__15692;
chunk__15676 = G__15693;
count__15677 = G__15694;
i__15678 = G__15695;
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

var seq__15679_15696 = cljs.core.seq.call(null,docs__$2);
var chunk__15680_15697 = null;
var count__15681_15698 = (0);
var i__15682_15699 = (0);
while(true){
if((i__15682_15699 < count__15681_15698)){
var e_15700 = cljs.core._nth.call(null,chunk__15680_15697,i__15682_15699);
if(cljs.core.truth_(e_15700)){
print_comment_lines.call(null,e_15700);
} else {
}


var G__15701 = seq__15679_15696;
var G__15702 = chunk__15680_15697;
var G__15703 = count__15681_15698;
var G__15704 = (i__15682_15699 + (1));
seq__15679_15696 = G__15701;
chunk__15680_15697 = G__15702;
count__15681_15698 = G__15703;
i__15682_15699 = G__15704;
continue;
} else {
var temp__5720__auto___15705 = cljs.core.seq.call(null,seq__15679_15696);
if(temp__5720__auto___15705){
var seq__15679_15706__$1 = temp__5720__auto___15705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15679_15706__$1)){
var c__4550__auto___15707 = cljs.core.chunk_first.call(null,seq__15679_15706__$1);
var G__15708 = cljs.core.chunk_rest.call(null,seq__15679_15706__$1);
var G__15709 = c__4550__auto___15707;
var G__15710 = cljs.core.count.call(null,c__4550__auto___15707);
var G__15711 = (0);
seq__15679_15696 = G__15708;
chunk__15680_15697 = G__15709;
count__15681_15698 = G__15710;
i__15682_15699 = G__15711;
continue;
} else {
var e_15712 = cljs.core.first.call(null,seq__15679_15706__$1);
if(cljs.core.truth_(e_15712)){
print_comment_lines.call(null,e_15712);
} else {
}


var G__15713 = cljs.core.next.call(null,seq__15679_15706__$1);
var G__15714 = null;
var G__15715 = (0);
var G__15716 = (0);
seq__15679_15696 = G__15713;
chunk__15680_15697 = G__15714;
count__15681_15698 = G__15715;
i__15682_15699 = G__15716;
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
return (function (p1__15718_SHARP_){
return goog.string.startsWith(p1__15718_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__15719){
var map__15720 = p__15719;
var map__15720__$1 = (((((!((map__15720 == null))))?(((((map__15720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15720):map__15720);
var doc = cljs.core.get.call(null,map__15720__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__15720__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__15720__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__15720__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__15720__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15720__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__15720__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__15720__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__15720__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__15722){
var map__15723 = p__15722;
var map__15723__$1 = (((((!((map__15723 == null))))?(((((map__15723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15723):map__15723);
var name = cljs.core.get.call(null,map__15723__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15723__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15723__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__15725_15749 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__15726_15750 = null;
var count__15727_15751 = (0);
var i__15728_15752 = (0);
while(true){
if((i__15728_15752 < count__15727_15751)){
var vec__15735_15753 = cljs.core._nth.call(null,chunk__15726_15750,i__15728_15752);
var i_15754 = cljs.core.nth.call(null,vec__15735_15753,(0),null);
var param_15755 = cljs.core.nth.call(null,vec__15735_15753,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15755);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15756 = seq__15725_15749;
var G__15757 = chunk__15726_15750;
var G__15758 = count__15727_15751;
var G__15759 = (i__15728_15752 + (1));
seq__15725_15749 = G__15756;
chunk__15726_15750 = G__15757;
count__15727_15751 = G__15758;
i__15728_15752 = G__15759;
continue;
} else {
var temp__5720__auto___15760 = cljs.core.seq.call(null,seq__15725_15749);
if(temp__5720__auto___15760){
var seq__15725_15761__$1 = temp__5720__auto___15760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15725_15761__$1)){
var c__4550__auto___15762 = cljs.core.chunk_first.call(null,seq__15725_15761__$1);
var G__15763 = cljs.core.chunk_rest.call(null,seq__15725_15761__$1);
var G__15764 = c__4550__auto___15762;
var G__15765 = cljs.core.count.call(null,c__4550__auto___15762);
var G__15766 = (0);
seq__15725_15749 = G__15763;
chunk__15726_15750 = G__15764;
count__15727_15751 = G__15765;
i__15728_15752 = G__15766;
continue;
} else {
var vec__15738_15767 = cljs.core.first.call(null,seq__15725_15761__$1);
var i_15768 = cljs.core.nth.call(null,vec__15738_15767,(0),null);
var param_15769 = cljs.core.nth.call(null,vec__15738_15767,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15769);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15770 = cljs.core.next.call(null,seq__15725_15761__$1);
var G__15771 = null;
var G__15772 = (0);
var G__15773 = (0);
seq__15725_15749 = G__15770;
chunk__15726_15750 = G__15771;
count__15727_15751 = G__15772;
i__15728_15752 = G__15773;
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

var seq__15741_15774 = cljs.core.seq.call(null,params);
var chunk__15742_15775 = null;
var count__15743_15776 = (0);
var i__15744_15777 = (0);
while(true){
if((i__15744_15777 < count__15743_15776)){
var param_15778 = cljs.core._nth.call(null,chunk__15742_15775,i__15744_15777);
cljs.compiler.emit.call(null,param_15778);

if(cljs.core._EQ_.call(null,param_15778,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15779 = seq__15741_15774;
var G__15780 = chunk__15742_15775;
var G__15781 = count__15743_15776;
var G__15782 = (i__15744_15777 + (1));
seq__15741_15774 = G__15779;
chunk__15742_15775 = G__15780;
count__15743_15776 = G__15781;
i__15744_15777 = G__15782;
continue;
} else {
var temp__5720__auto___15783 = cljs.core.seq.call(null,seq__15741_15774);
if(temp__5720__auto___15783){
var seq__15741_15784__$1 = temp__5720__auto___15783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15741_15784__$1)){
var c__4550__auto___15785 = cljs.core.chunk_first.call(null,seq__15741_15784__$1);
var G__15786 = cljs.core.chunk_rest.call(null,seq__15741_15784__$1);
var G__15787 = c__4550__auto___15785;
var G__15788 = cljs.core.count.call(null,c__4550__auto___15785);
var G__15789 = (0);
seq__15741_15774 = G__15786;
chunk__15742_15775 = G__15787;
count__15743_15776 = G__15788;
i__15744_15777 = G__15789;
continue;
} else {
var param_15790 = cljs.core.first.call(null,seq__15741_15784__$1);
cljs.compiler.emit.call(null,param_15790);

if(cljs.core._EQ_.call(null,param_15790,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15791 = cljs.core.next.call(null,seq__15741_15784__$1);
var G__15792 = null;
var G__15793 = (0);
var G__15794 = (0);
seq__15741_15774 = G__15791;
chunk__15742_15775 = G__15792;
count__15743_15776 = G__15793;
i__15744_15777 = G__15794;
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

var seq__15745_15795 = cljs.core.seq.call(null,params);
var chunk__15746_15796 = null;
var count__15747_15797 = (0);
var i__15748_15798 = (0);
while(true){
if((i__15748_15798 < count__15747_15797)){
var param_15799 = cljs.core._nth.call(null,chunk__15746_15796,i__15748_15798);
cljs.compiler.emit.call(null,param_15799);

if(cljs.core._EQ_.call(null,param_15799,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15800 = seq__15745_15795;
var G__15801 = chunk__15746_15796;
var G__15802 = count__15747_15797;
var G__15803 = (i__15748_15798 + (1));
seq__15745_15795 = G__15800;
chunk__15746_15796 = G__15801;
count__15747_15797 = G__15802;
i__15748_15798 = G__15803;
continue;
} else {
var temp__5720__auto___15804 = cljs.core.seq.call(null,seq__15745_15795);
if(temp__5720__auto___15804){
var seq__15745_15805__$1 = temp__5720__auto___15804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15745_15805__$1)){
var c__4550__auto___15806 = cljs.core.chunk_first.call(null,seq__15745_15805__$1);
var G__15807 = cljs.core.chunk_rest.call(null,seq__15745_15805__$1);
var G__15808 = c__4550__auto___15806;
var G__15809 = cljs.core.count.call(null,c__4550__auto___15806);
var G__15810 = (0);
seq__15745_15795 = G__15807;
chunk__15746_15796 = G__15808;
count__15747_15797 = G__15809;
i__15748_15798 = G__15810;
continue;
} else {
var param_15811 = cljs.core.first.call(null,seq__15745_15805__$1);
cljs.compiler.emit.call(null,param_15811);

if(cljs.core._EQ_.call(null,param_15811,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15812 = cljs.core.next.call(null,seq__15745_15805__$1);
var G__15813 = null;
var G__15814 = (0);
var G__15815 = (0);
seq__15745_15795 = G__15812;
chunk__15746_15796 = G__15813;
count__15747_15797 = G__15814;
i__15748_15798 = G__15815;
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
var seq__15816 = cljs.core.seq.call(null,params);
var chunk__15817 = null;
var count__15818 = (0);
var i__15819 = (0);
while(true){
if((i__15819 < count__15818)){
var param = cljs.core._nth.call(null,chunk__15817,i__15819);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15820 = seq__15816;
var G__15821 = chunk__15817;
var G__15822 = count__15818;
var G__15823 = (i__15819 + (1));
seq__15816 = G__15820;
chunk__15817 = G__15821;
count__15818 = G__15822;
i__15819 = G__15823;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15816);
if(temp__5720__auto__){
var seq__15816__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15816__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15816__$1);
var G__15824 = cljs.core.chunk_rest.call(null,seq__15816__$1);
var G__15825 = c__4550__auto__;
var G__15826 = cljs.core.count.call(null,c__4550__auto__);
var G__15827 = (0);
seq__15816 = G__15824;
chunk__15817 = G__15825;
count__15818 = G__15826;
i__15819 = G__15827;
continue;
} else {
var param = cljs.core.first.call(null,seq__15816__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15828 = cljs.core.next.call(null,seq__15816__$1);
var G__15829 = null;
var G__15830 = (0);
var G__15831 = (0);
seq__15816 = G__15828;
chunk__15817 = G__15829;
count__15818 = G__15830;
i__15819 = G__15831;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__15832){
var map__15833 = p__15832;
var map__15833__$1 = (((((!((map__15833 == null))))?(((((map__15833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15833):map__15833);
var expr = cljs.core.get.call(null,map__15833__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__15833__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15833__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15833__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15833__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15833__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__15835){
var map__15836 = p__15835;
var map__15836__$1 = (((((!((map__15836 == null))))?(((((map__15836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15836):map__15836);
var f = map__15836__$1;
var expr = cljs.core.get.call(null,map__15836__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__15836__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__15836__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__15836__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15836__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15836__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15836__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15836__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_15846__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15847 = cljs.compiler.munge.call(null,name_15846__$1);
var delegate_name_15848 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15847),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_15848," = function (");

var seq__15838_15849 = cljs.core.seq.call(null,params);
var chunk__15839_15850 = null;
var count__15840_15851 = (0);
var i__15841_15852 = (0);
while(true){
if((i__15841_15852 < count__15840_15851)){
var param_15853 = cljs.core._nth.call(null,chunk__15839_15850,i__15841_15852);
cljs.compiler.emit.call(null,param_15853);

if(cljs.core._EQ_.call(null,param_15853,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15854 = seq__15838_15849;
var G__15855 = chunk__15839_15850;
var G__15856 = count__15840_15851;
var G__15857 = (i__15841_15852 + (1));
seq__15838_15849 = G__15854;
chunk__15839_15850 = G__15855;
count__15840_15851 = G__15856;
i__15841_15852 = G__15857;
continue;
} else {
var temp__5720__auto___15858 = cljs.core.seq.call(null,seq__15838_15849);
if(temp__5720__auto___15858){
var seq__15838_15859__$1 = temp__5720__auto___15858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15838_15859__$1)){
var c__4550__auto___15860 = cljs.core.chunk_first.call(null,seq__15838_15859__$1);
var G__15861 = cljs.core.chunk_rest.call(null,seq__15838_15859__$1);
var G__15862 = c__4550__auto___15860;
var G__15863 = cljs.core.count.call(null,c__4550__auto___15860);
var G__15864 = (0);
seq__15838_15849 = G__15861;
chunk__15839_15850 = G__15862;
count__15840_15851 = G__15863;
i__15841_15852 = G__15864;
continue;
} else {
var param_15865 = cljs.core.first.call(null,seq__15838_15859__$1);
cljs.compiler.emit.call(null,param_15865);

if(cljs.core._EQ_.call(null,param_15865,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15866 = cljs.core.next.call(null,seq__15838_15859__$1);
var G__15867 = null;
var G__15868 = (0);
var G__15869 = (0);
seq__15838_15849 = G__15866;
chunk__15839_15850 = G__15867;
count__15840_15851 = G__15868;
i__15841_15852 = G__15869;
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

cljs.compiler.emitln.call(null,"var ",mname_15847," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_15870 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_15870,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_15848,".call(this,");

var seq__15842_15871 = cljs.core.seq.call(null,params);
var chunk__15843_15872 = null;
var count__15844_15873 = (0);
var i__15845_15874 = (0);
while(true){
if((i__15845_15874 < count__15844_15873)){
var param_15875 = cljs.core._nth.call(null,chunk__15843_15872,i__15845_15874);
cljs.compiler.emit.call(null,param_15875);

if(cljs.core._EQ_.call(null,param_15875,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15876 = seq__15842_15871;
var G__15877 = chunk__15843_15872;
var G__15878 = count__15844_15873;
var G__15879 = (i__15845_15874 + (1));
seq__15842_15871 = G__15876;
chunk__15843_15872 = G__15877;
count__15844_15873 = G__15878;
i__15845_15874 = G__15879;
continue;
} else {
var temp__5720__auto___15880 = cljs.core.seq.call(null,seq__15842_15871);
if(temp__5720__auto___15880){
var seq__15842_15881__$1 = temp__5720__auto___15880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15842_15881__$1)){
var c__4550__auto___15882 = cljs.core.chunk_first.call(null,seq__15842_15881__$1);
var G__15883 = cljs.core.chunk_rest.call(null,seq__15842_15881__$1);
var G__15884 = c__4550__auto___15882;
var G__15885 = cljs.core.count.call(null,c__4550__auto___15882);
var G__15886 = (0);
seq__15842_15871 = G__15883;
chunk__15843_15872 = G__15884;
count__15844_15873 = G__15885;
i__15845_15874 = G__15886;
continue;
} else {
var param_15887 = cljs.core.first.call(null,seq__15842_15881__$1);
cljs.compiler.emit.call(null,param_15887);

if(cljs.core._EQ_.call(null,param_15887,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15888 = cljs.core.next.call(null,seq__15842_15881__$1);
var G__15889 = null;
var G__15890 = (0);
var G__15891 = (0);
seq__15842_15871 = G__15888;
chunk__15843_15872 = G__15889;
count__15844_15873 = G__15890;
i__15845_15874 = G__15891;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_15847,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_15847,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_15846__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_15847,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_15848,";");

cljs.compiler.emitln.call(null,"return ",mname_15847,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__15895){
var map__15896 = p__15895;
var map__15896__$1 = (((((!((map__15896 == null))))?(((((map__15896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15896):map__15896);
var variadic = cljs.core.get.call(null,map__15896__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__15896__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15896__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__15896__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__15896__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__15896__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__15896__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__15896,map__15896__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__15892_SHARP_){
var and__4120__auto__ = p1__15892_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__15892_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__15896,map__15896__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_15949__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15950 = cljs.compiler.munge.call(null,name_15949__$1);
var maxparams_15951 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_15952 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_15949__$1,mname_15950,maxparams_15951,loop_locals,map__15896,map__15896__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15950),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_15949__$1,mname_15950,maxparams_15951,loop_locals,map__15896,map__15896__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_15953 = cljs.core.sort_by.call(null,((function (name_15949__$1,mname_15950,maxparams_15951,mmap_15952,loop_locals,map__15896,map__15896__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__15893_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15893_SHARP_)));
});})(name_15949__$1,mname_15950,maxparams_15951,mmap_15952,loop_locals,map__15896,map__15896__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_15952));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_15950," = null;");

var seq__15898_15954 = cljs.core.seq.call(null,ms_15953);
var chunk__15899_15955 = null;
var count__15900_15956 = (0);
var i__15901_15957 = (0);
while(true){
if((i__15901_15957 < count__15900_15956)){
var vec__15908_15958 = cljs.core._nth.call(null,chunk__15899_15955,i__15901_15957);
var n_15959 = cljs.core.nth.call(null,vec__15908_15958,(0),null);
var meth_15960 = cljs.core.nth.call(null,vec__15908_15958,(1),null);
cljs.compiler.emits.call(null,"var ",n_15959," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15960))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15960);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15960);
}

cljs.compiler.emitln.call(null,";");


var G__15961 = seq__15898_15954;
var G__15962 = chunk__15899_15955;
var G__15963 = count__15900_15956;
var G__15964 = (i__15901_15957 + (1));
seq__15898_15954 = G__15961;
chunk__15899_15955 = G__15962;
count__15900_15956 = G__15963;
i__15901_15957 = G__15964;
continue;
} else {
var temp__5720__auto___15965 = cljs.core.seq.call(null,seq__15898_15954);
if(temp__5720__auto___15965){
var seq__15898_15966__$1 = temp__5720__auto___15965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15898_15966__$1)){
var c__4550__auto___15967 = cljs.core.chunk_first.call(null,seq__15898_15966__$1);
var G__15968 = cljs.core.chunk_rest.call(null,seq__15898_15966__$1);
var G__15969 = c__4550__auto___15967;
var G__15970 = cljs.core.count.call(null,c__4550__auto___15967);
var G__15971 = (0);
seq__15898_15954 = G__15968;
chunk__15899_15955 = G__15969;
count__15900_15956 = G__15970;
i__15901_15957 = G__15971;
continue;
} else {
var vec__15911_15972 = cljs.core.first.call(null,seq__15898_15966__$1);
var n_15973 = cljs.core.nth.call(null,vec__15911_15972,(0),null);
var meth_15974 = cljs.core.nth.call(null,vec__15911_15972,(1),null);
cljs.compiler.emits.call(null,"var ",n_15973," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15974))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15974);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15974);
}

cljs.compiler.emitln.call(null,";");


var G__15975 = cljs.core.next.call(null,seq__15898_15966__$1);
var G__15976 = null;
var G__15977 = (0);
var G__15978 = (0);
seq__15898_15954 = G__15975;
chunk__15899_15955 = G__15976;
count__15900_15956 = G__15977;
i__15901_15957 = G__15978;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_15950," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_15951),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_15951)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_15951));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__15914_15979 = cljs.core.seq.call(null,ms_15953);
var chunk__15915_15980 = null;
var count__15916_15981 = (0);
var i__15917_15982 = (0);
while(true){
if((i__15917_15982 < count__15916_15981)){
var vec__15924_15983 = cljs.core._nth.call(null,chunk__15915_15980,i__15917_15982);
var n_15984 = cljs.core.nth.call(null,vec__15924_15983,(0),null);
var meth_15985 = cljs.core.nth.call(null,vec__15924_15983,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15985))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15986 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15986," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15987 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15986," = new cljs.core.IndexedSeq(",a_15987,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15984,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15951)),(((cljs.core.count.call(null,maxparams_15951) > (1)))?", ":null),restarg_15986,");");
} else {
var pcnt_15988 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15985));
cljs.compiler.emitln.call(null,"case ",pcnt_15988,":");

cljs.compiler.emitln.call(null,"return ",n_15984,".call(this",(((pcnt_15988 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15988,maxparams_15951)),null,(1),null)),(2),null))),");");
}


var G__15989 = seq__15914_15979;
var G__15990 = chunk__15915_15980;
var G__15991 = count__15916_15981;
var G__15992 = (i__15917_15982 + (1));
seq__15914_15979 = G__15989;
chunk__15915_15980 = G__15990;
count__15916_15981 = G__15991;
i__15917_15982 = G__15992;
continue;
} else {
var temp__5720__auto___15993 = cljs.core.seq.call(null,seq__15914_15979);
if(temp__5720__auto___15993){
var seq__15914_15994__$1 = temp__5720__auto___15993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15914_15994__$1)){
var c__4550__auto___15995 = cljs.core.chunk_first.call(null,seq__15914_15994__$1);
var G__15996 = cljs.core.chunk_rest.call(null,seq__15914_15994__$1);
var G__15997 = c__4550__auto___15995;
var G__15998 = cljs.core.count.call(null,c__4550__auto___15995);
var G__15999 = (0);
seq__15914_15979 = G__15996;
chunk__15915_15980 = G__15997;
count__15916_15981 = G__15998;
i__15917_15982 = G__15999;
continue;
} else {
var vec__15927_16000 = cljs.core.first.call(null,seq__15914_15994__$1);
var n_16001 = cljs.core.nth.call(null,vec__15927_16000,(0),null);
var meth_16002 = cljs.core.nth.call(null,vec__15927_16000,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_16002))){
cljs.compiler.emitln.call(null,"default:");

var restarg_16003 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_16003," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_16004 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_16003," = new cljs.core.IndexedSeq(",a_16004,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_16001,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15951)),(((cljs.core.count.call(null,maxparams_15951) > (1)))?", ":null),restarg_16003,");");
} else {
var pcnt_16005 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16002));
cljs.compiler.emitln.call(null,"case ",pcnt_16005,":");

cljs.compiler.emitln.call(null,"return ",n_16001,".call(this",(((pcnt_16005 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_16005,maxparams_15951)),null,(1),null)),(2),null))),");");
}


var G__16006 = cljs.core.next.call(null,seq__15914_15994__$1);
var G__16007 = null;
var G__16008 = (0);
var G__16009 = (0);
seq__15914_15979 = G__16006;
chunk__15915_15980 = G__16007;
count__15916_15981 = G__16008;
i__15917_15982 = G__16009;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_16010 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_15953)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_16010,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_15950,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_15950,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_15949__$1,mname_15950,maxparams_15951,mmap_15952,ms_15953,loop_locals,map__15896,map__15896__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__15894_SHARP_){
var vec__15930 = p1__15894_SHARP_;
var n = cljs.core.nth.call(null,vec__15930,(0),null);
var m = cljs.core.nth.call(null,vec__15930,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_15949__$1,mname_15950,maxparams_15951,mmap_15952,ms_15953,loop_locals,map__15896,map__15896__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_15953),".cljs$lang$applyTo;");
} else {
}

var seq__15933_16011 = cljs.core.seq.call(null,ms_15953);
var chunk__15934_16012 = null;
var count__15935_16013 = (0);
var i__15936_16014 = (0);
while(true){
if((i__15936_16014 < count__15935_16013)){
var vec__15943_16015 = cljs.core._nth.call(null,chunk__15934_16012,i__15936_16014);
var n_16016 = cljs.core.nth.call(null,vec__15943_16015,(0),null);
var meth_16017 = cljs.core.nth.call(null,vec__15943_16015,(1),null);
var c_16018 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16017));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_16017))){
cljs.compiler.emitln.call(null,mname_15950,".cljs$core$IFn$_invoke$arity$variadic = ",n_16016,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15950,".cljs$core$IFn$_invoke$arity$",c_16018," = ",n_16016,";");
}


var G__16019 = seq__15933_16011;
var G__16020 = chunk__15934_16012;
var G__16021 = count__15935_16013;
var G__16022 = (i__15936_16014 + (1));
seq__15933_16011 = G__16019;
chunk__15934_16012 = G__16020;
count__15935_16013 = G__16021;
i__15936_16014 = G__16022;
continue;
} else {
var temp__5720__auto___16023 = cljs.core.seq.call(null,seq__15933_16011);
if(temp__5720__auto___16023){
var seq__15933_16024__$1 = temp__5720__auto___16023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15933_16024__$1)){
var c__4550__auto___16025 = cljs.core.chunk_first.call(null,seq__15933_16024__$1);
var G__16026 = cljs.core.chunk_rest.call(null,seq__15933_16024__$1);
var G__16027 = c__4550__auto___16025;
var G__16028 = cljs.core.count.call(null,c__4550__auto___16025);
var G__16029 = (0);
seq__15933_16011 = G__16026;
chunk__15934_16012 = G__16027;
count__15935_16013 = G__16028;
i__15936_16014 = G__16029;
continue;
} else {
var vec__15946_16030 = cljs.core.first.call(null,seq__15933_16024__$1);
var n_16031 = cljs.core.nth.call(null,vec__15946_16030,(0),null);
var meth_16032 = cljs.core.nth.call(null,vec__15946_16030,(1),null);
var c_16033 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16032));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_16032))){
cljs.compiler.emitln.call(null,mname_15950,".cljs$core$IFn$_invoke$arity$variadic = ",n_16031,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15950,".cljs$core$IFn$_invoke$arity$",c_16033," = ",n_16031,";");
}


var G__16034 = cljs.core.next.call(null,seq__15933_16024__$1);
var G__16035 = null;
var G__16036 = (0);
var G__16037 = (0);
seq__15933_16011 = G__16034;
chunk__15934_16012 = G__16035;
count__15935_16013 = G__16036;
i__15936_16014 = G__16037;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_15950,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__16038){
var map__16039 = p__16038;
var map__16039__$1 = (((((!((map__16039 == null))))?(((((map__16039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16039):map__16039);
var statements = cljs.core.get.call(null,map__16039__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__16039__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__16039__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__16041_16045 = cljs.core.seq.call(null,statements);
var chunk__16042_16046 = null;
var count__16043_16047 = (0);
var i__16044_16048 = (0);
while(true){
if((i__16044_16048 < count__16043_16047)){
var s_16049 = cljs.core._nth.call(null,chunk__16042_16046,i__16044_16048);
cljs.compiler.emitln.call(null,s_16049);


var G__16050 = seq__16041_16045;
var G__16051 = chunk__16042_16046;
var G__16052 = count__16043_16047;
var G__16053 = (i__16044_16048 + (1));
seq__16041_16045 = G__16050;
chunk__16042_16046 = G__16051;
count__16043_16047 = G__16052;
i__16044_16048 = G__16053;
continue;
} else {
var temp__5720__auto___16054 = cljs.core.seq.call(null,seq__16041_16045);
if(temp__5720__auto___16054){
var seq__16041_16055__$1 = temp__5720__auto___16054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16041_16055__$1)){
var c__4550__auto___16056 = cljs.core.chunk_first.call(null,seq__16041_16055__$1);
var G__16057 = cljs.core.chunk_rest.call(null,seq__16041_16055__$1);
var G__16058 = c__4550__auto___16056;
var G__16059 = cljs.core.count.call(null,c__4550__auto___16056);
var G__16060 = (0);
seq__16041_16045 = G__16057;
chunk__16042_16046 = G__16058;
count__16043_16047 = G__16059;
i__16044_16048 = G__16060;
continue;
} else {
var s_16061 = cljs.core.first.call(null,seq__16041_16055__$1);
cljs.compiler.emitln.call(null,s_16061);


var G__16062 = cljs.core.next.call(null,seq__16041_16055__$1);
var G__16063 = null;
var G__16064 = (0);
var G__16065 = (0);
seq__16041_16045 = G__16062;
chunk__16042_16046 = G__16063;
count__16043_16047 = G__16064;
i__16044_16048 = G__16065;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__16066){
var map__16067 = p__16066;
var map__16067__$1 = (((((!((map__16067 == null))))?(((((map__16067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16067):map__16067);
var try$ = cljs.core.get.call(null,map__16067__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__16067__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__16067__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__16067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__16067__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__16069,is_loop){
var map__16070 = p__16069;
var map__16070__$1 = (((((!((map__16070 == null))))?(((((map__16070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16070):map__16070);
var expr = cljs.core.get.call(null,map__16070__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__16070__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__16070__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__16072_16086 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__16073_16087 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__16072_16086,context,map__16070,map__16070__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__16072_16086,context,map__16070,map__16070__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__16073_16087;

try{var seq__16074_16088 = cljs.core.seq.call(null,bindings);
var chunk__16075_16089 = null;
var count__16076_16090 = (0);
var i__16077_16091 = (0);
while(true){
if((i__16077_16091 < count__16076_16090)){
var map__16082_16092 = cljs.core._nth.call(null,chunk__16075_16089,i__16077_16091);
var map__16082_16093__$1 = (((((!((map__16082_16092 == null))))?(((((map__16082_16092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16082_16092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16082_16092):map__16082_16092);
var binding_16094 = map__16082_16093__$1;
var init_16095 = cljs.core.get.call(null,map__16082_16093__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_16094);

cljs.compiler.emitln.call(null," = ",init_16095,";");


var G__16096 = seq__16074_16088;
var G__16097 = chunk__16075_16089;
var G__16098 = count__16076_16090;
var G__16099 = (i__16077_16091 + (1));
seq__16074_16088 = G__16096;
chunk__16075_16089 = G__16097;
count__16076_16090 = G__16098;
i__16077_16091 = G__16099;
continue;
} else {
var temp__5720__auto___16100 = cljs.core.seq.call(null,seq__16074_16088);
if(temp__5720__auto___16100){
var seq__16074_16101__$1 = temp__5720__auto___16100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16074_16101__$1)){
var c__4550__auto___16102 = cljs.core.chunk_first.call(null,seq__16074_16101__$1);
var G__16103 = cljs.core.chunk_rest.call(null,seq__16074_16101__$1);
var G__16104 = c__4550__auto___16102;
var G__16105 = cljs.core.count.call(null,c__4550__auto___16102);
var G__16106 = (0);
seq__16074_16088 = G__16103;
chunk__16075_16089 = G__16104;
count__16076_16090 = G__16105;
i__16077_16091 = G__16106;
continue;
} else {
var map__16084_16107 = cljs.core.first.call(null,seq__16074_16101__$1);
var map__16084_16108__$1 = (((((!((map__16084_16107 == null))))?(((((map__16084_16107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16084_16107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16084_16107):map__16084_16107);
var binding_16109 = map__16084_16108__$1;
var init_16110 = cljs.core.get.call(null,map__16084_16108__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_16109);

cljs.compiler.emitln.call(null," = ",init_16110,";");


var G__16111 = cljs.core.next.call(null,seq__16074_16101__$1);
var G__16112 = null;
var G__16113 = (0);
var G__16114 = (0);
seq__16074_16088 = G__16111;
chunk__16075_16089 = G__16112;
count__16076_16090 = G__16113;
i__16077_16091 = G__16114;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__16072_16086;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__16115){
var map__16116 = p__16115;
var map__16116__$1 = (((((!((map__16116 == null))))?(((((map__16116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16116):map__16116);
var frame = cljs.core.get.call(null,map__16116__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__16116__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__16116__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___16118 = cljs.core.count.call(null,exprs);
var i_16119 = (0);
while(true){
if((i_16119 < n__4607__auto___16118)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_16119)," = ",exprs.call(null,i_16119),";");

var G__16120 = (i_16119 + (1));
i_16119 = G__16120;
continue;
} else {
}
break;
}

var n__4607__auto___16121 = cljs.core.count.call(null,exprs);
var i_16122 = (0);
while(true){
if((i_16122 < n__4607__auto___16121)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_16122))," = ",temps.call(null,i_16122),";");

var G__16123 = (i_16122 + (1));
i_16122 = G__16123;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__16124){
var map__16125 = p__16124;
var map__16125__$1 = (((((!((map__16125 == null))))?(((((map__16125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16125):map__16125);
var expr = cljs.core.get.call(null,map__16125__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__16125__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__16125__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__16127_16139 = cljs.core.seq.call(null,bindings);
var chunk__16128_16140 = null;
var count__16129_16141 = (0);
var i__16130_16142 = (0);
while(true){
if((i__16130_16142 < count__16129_16141)){
var map__16135_16143 = cljs.core._nth.call(null,chunk__16128_16140,i__16130_16142);
var map__16135_16144__$1 = (((((!((map__16135_16143 == null))))?(((((map__16135_16143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16135_16143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16135_16143):map__16135_16143);
var binding_16145 = map__16135_16144__$1;
var init_16146 = cljs.core.get.call(null,map__16135_16144__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_16145)," = ",init_16146,";");


var G__16147 = seq__16127_16139;
var G__16148 = chunk__16128_16140;
var G__16149 = count__16129_16141;
var G__16150 = (i__16130_16142 + (1));
seq__16127_16139 = G__16147;
chunk__16128_16140 = G__16148;
count__16129_16141 = G__16149;
i__16130_16142 = G__16150;
continue;
} else {
var temp__5720__auto___16151 = cljs.core.seq.call(null,seq__16127_16139);
if(temp__5720__auto___16151){
var seq__16127_16152__$1 = temp__5720__auto___16151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16127_16152__$1)){
var c__4550__auto___16153 = cljs.core.chunk_first.call(null,seq__16127_16152__$1);
var G__16154 = cljs.core.chunk_rest.call(null,seq__16127_16152__$1);
var G__16155 = c__4550__auto___16153;
var G__16156 = cljs.core.count.call(null,c__4550__auto___16153);
var G__16157 = (0);
seq__16127_16139 = G__16154;
chunk__16128_16140 = G__16155;
count__16129_16141 = G__16156;
i__16130_16142 = G__16157;
continue;
} else {
var map__16137_16158 = cljs.core.first.call(null,seq__16127_16152__$1);
var map__16137_16159__$1 = (((((!((map__16137_16158 == null))))?(((((map__16137_16158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16137_16158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16137_16158):map__16137_16158);
var binding_16160 = map__16137_16159__$1;
var init_16161 = cljs.core.get.call(null,map__16137_16159__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_16160)," = ",init_16161,";");


var G__16162 = cljs.core.next.call(null,seq__16127_16152__$1);
var G__16163 = null;
var G__16164 = (0);
var G__16165 = (0);
seq__16127_16139 = G__16162;
chunk__16128_16140 = G__16163;
count__16129_16141 = G__16164;
i__16130_16142 = G__16165;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__16168){
var map__16169 = p__16168;
var map__16169__$1 = (((((!((map__16169 == null))))?(((((map__16169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16169):map__16169);
var expr = map__16169__$1;
var f = cljs.core.get.call(null,map__16169__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__16169__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16169__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__16171 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16169,map__16169__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16169,map__16169__$1,expr,f,args,env){
return (function (p1__16166_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__16166_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16169,map__16169__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16169,map__16169__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16169,map__16169__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16169,map__16169__$1,expr,f,args,env){
return (function (p1__16167_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__16167_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16169,map__16169__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16169,map__16169__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__16171,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__16171,(1),null);
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_16174 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_16174,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_16175 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_16175,args)),(((mfa_16175 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_16175,args)),"], 0))");
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
var fprop_16176 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_16176," ? ",f__$1,fprop_16176,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_16176," ? ",f__$1,fprop_16176,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__16177){
var map__16178 = p__16177;
var map__16178__$1 = (((((!((map__16178 == null))))?(((((map__16178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16178):map__16178);
var ctor = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__16180){
var map__16181 = p__16180;
var map__16181__$1 = (((((!((map__16181 == null))))?(((((map__16181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16181):map__16181);
var target = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
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
var map__16183 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__16183__$1 = (((((!((map__16183 == null))))?(((((map__16183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16183):map__16183);
var options = cljs.core.get.call(null,map__16183__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__16183__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__16184 = options;
var map__16184__$1 = (((((!((map__16184 == null))))?(((((map__16184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16184):map__16184);
var target = cljs.core.get.call(null,map__16184__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__16184__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__16185 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__16190 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__16190__$1 = (((((!((map__16190 == null))))?(((((map__16190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16190):map__16190);
var node_libs = cljs.core.get.call(null,map__16190__$1,true);
var libs_to_load = cljs.core.get.call(null,map__16190__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__16185,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__16185,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__16192_16212 = cljs.core.seq.call(null,libs_to_load);
var chunk__16193_16213 = null;
var count__16194_16214 = (0);
var i__16195_16215 = (0);
while(true){
if((i__16195_16215 < count__16194_16214)){
var lib_16216 = cljs.core._nth.call(null,chunk__16193_16213,i__16195_16215);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_16216)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16216),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16216),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16216),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16216),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_16216,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16216),"');");
}

}
}
}


var G__16217 = seq__16192_16212;
var G__16218 = chunk__16193_16213;
var G__16219 = count__16194_16214;
var G__16220 = (i__16195_16215 + (1));
seq__16192_16212 = G__16217;
chunk__16193_16213 = G__16218;
count__16194_16214 = G__16219;
i__16195_16215 = G__16220;
continue;
} else {
var temp__5720__auto___16221 = cljs.core.seq.call(null,seq__16192_16212);
if(temp__5720__auto___16221){
var seq__16192_16222__$1 = temp__5720__auto___16221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16192_16222__$1)){
var c__4550__auto___16223 = cljs.core.chunk_first.call(null,seq__16192_16222__$1);
var G__16224 = cljs.core.chunk_rest.call(null,seq__16192_16222__$1);
var G__16225 = c__4550__auto___16223;
var G__16226 = cljs.core.count.call(null,c__4550__auto___16223);
var G__16227 = (0);
seq__16192_16212 = G__16224;
chunk__16193_16213 = G__16225;
count__16194_16214 = G__16226;
i__16195_16215 = G__16227;
continue;
} else {
var lib_16228 = cljs.core.first.call(null,seq__16192_16222__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_16228)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16228),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16228),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16228),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16228),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_16228,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16228),"');");
}

}
}
}


var G__16229 = cljs.core.next.call(null,seq__16192_16222__$1);
var G__16230 = null;
var G__16231 = (0);
var G__16232 = (0);
seq__16192_16212 = G__16229;
chunk__16193_16213 = G__16230;
count__16194_16214 = G__16231;
i__16195_16215 = G__16232;
continue;
}
} else {
}
}
break;
}

var seq__16196_16233 = cljs.core.seq.call(null,node_libs);
var chunk__16197_16234 = null;
var count__16198_16235 = (0);
var i__16199_16236 = (0);
while(true){
if((i__16199_16236 < count__16198_16235)){
var lib_16237 = cljs.core._nth.call(null,chunk__16197_16234,i__16199_16236);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_16237)," = require('",lib_16237,"');");


var G__16238 = seq__16196_16233;
var G__16239 = chunk__16197_16234;
var G__16240 = count__16198_16235;
var G__16241 = (i__16199_16236 + (1));
seq__16196_16233 = G__16238;
chunk__16197_16234 = G__16239;
count__16198_16235 = G__16240;
i__16199_16236 = G__16241;
continue;
} else {
var temp__5720__auto___16242 = cljs.core.seq.call(null,seq__16196_16233);
if(temp__5720__auto___16242){
var seq__16196_16243__$1 = temp__5720__auto___16242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16196_16243__$1)){
var c__4550__auto___16244 = cljs.core.chunk_first.call(null,seq__16196_16243__$1);
var G__16245 = cljs.core.chunk_rest.call(null,seq__16196_16243__$1);
var G__16246 = c__4550__auto___16244;
var G__16247 = cljs.core.count.call(null,c__4550__auto___16244);
var G__16248 = (0);
seq__16196_16233 = G__16245;
chunk__16197_16234 = G__16246;
count__16198_16235 = G__16247;
i__16199_16236 = G__16248;
continue;
} else {
var lib_16249 = cljs.core.first.call(null,seq__16196_16243__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_16249)," = require('",lib_16249,"');");


var G__16250 = cljs.core.next.call(null,seq__16196_16243__$1);
var G__16251 = null;
var G__16252 = (0);
var G__16253 = (0);
seq__16196_16233 = G__16250;
chunk__16197_16234 = G__16251;
count__16198_16235 = G__16252;
i__16199_16236 = G__16253;
continue;
}
} else {
}
}
break;
}

var seq__16200_16254 = cljs.core.seq.call(null,global_exports_libs);
var chunk__16201_16255 = null;
var count__16202_16256 = (0);
var i__16203_16257 = (0);
while(true){
if((i__16203_16257 < count__16202_16256)){
var lib_16258 = cljs.core._nth.call(null,chunk__16201_16255,i__16203_16257);
var map__16208_16259 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_16258));
var map__16208_16260__$1 = (((((!((map__16208_16259 == null))))?(((((map__16208_16259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16208_16259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16208_16259):map__16208_16259);
var global_exports_16261 = cljs.core.get.call(null,map__16208_16260__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_16261,lib_16258);


var G__16262 = seq__16200_16254;
var G__16263 = chunk__16201_16255;
var G__16264 = count__16202_16256;
var G__16265 = (i__16203_16257 + (1));
seq__16200_16254 = G__16262;
chunk__16201_16255 = G__16263;
count__16202_16256 = G__16264;
i__16203_16257 = G__16265;
continue;
} else {
var temp__5720__auto___16266 = cljs.core.seq.call(null,seq__16200_16254);
if(temp__5720__auto___16266){
var seq__16200_16267__$1 = temp__5720__auto___16266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16200_16267__$1)){
var c__4550__auto___16268 = cljs.core.chunk_first.call(null,seq__16200_16267__$1);
var G__16269 = cljs.core.chunk_rest.call(null,seq__16200_16267__$1);
var G__16270 = c__4550__auto___16268;
var G__16271 = cljs.core.count.call(null,c__4550__auto___16268);
var G__16272 = (0);
seq__16200_16254 = G__16269;
chunk__16201_16255 = G__16270;
count__16202_16256 = G__16271;
i__16203_16257 = G__16272;
continue;
} else {
var lib_16273 = cljs.core.first.call(null,seq__16200_16267__$1);
var map__16210_16274 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_16273));
var map__16210_16275__$1 = (((((!((map__16210_16274 == null))))?(((((map__16210_16274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16210_16274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16210_16274):map__16210_16274);
var global_exports_16276 = cljs.core.get.call(null,map__16210_16275__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_16276,lib_16273);


var G__16277 = cljs.core.next.call(null,seq__16200_16267__$1);
var G__16278 = null;
var G__16279 = (0);
var G__16280 = (0);
seq__16200_16254 = G__16277;
chunk__16201_16255 = G__16278;
count__16202_16256 = G__16279;
i__16203_16257 = G__16280;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__16281){
var map__16282 = p__16281;
var map__16282__$1 = (((((!((map__16282 == null))))?(((((map__16282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16282):map__16282);
var name = cljs.core.get.call(null,map__16282__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__16282__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__16282__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__16282__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__16282__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__16282__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__16282__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__16284){
var map__16285 = p__16284;
var map__16285__$1 = (((((!((map__16285 == null))))?(((((map__16285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16285):map__16285);
var name = cljs.core.get.call(null,map__16285__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__16285__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__16285__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__16285__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__16285__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__16285__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__16285__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__16287){
var map__16288 = p__16287;
var map__16288__$1 = (((((!((map__16288 == null))))?(((((map__16288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16288):map__16288);
var t = cljs.core.get.call(null,map__16288__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16288__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16288__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16288__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__16288__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16290_16314 = cljs.core.seq.call(null,protocols);
var chunk__16291_16315 = null;
var count__16292_16316 = (0);
var i__16293_16317 = (0);
while(true){
if((i__16293_16317 < count__16292_16316)){
var protocol_16318 = cljs.core._nth.call(null,chunk__16291_16315,i__16293_16317);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16318)),"}");


var G__16319 = seq__16290_16314;
var G__16320 = chunk__16291_16315;
var G__16321 = count__16292_16316;
var G__16322 = (i__16293_16317 + (1));
seq__16290_16314 = G__16319;
chunk__16291_16315 = G__16320;
count__16292_16316 = G__16321;
i__16293_16317 = G__16322;
continue;
} else {
var temp__5720__auto___16323 = cljs.core.seq.call(null,seq__16290_16314);
if(temp__5720__auto___16323){
var seq__16290_16324__$1 = temp__5720__auto___16323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16290_16324__$1)){
var c__4550__auto___16325 = cljs.core.chunk_first.call(null,seq__16290_16324__$1);
var G__16326 = cljs.core.chunk_rest.call(null,seq__16290_16324__$1);
var G__16327 = c__4550__auto___16325;
var G__16328 = cljs.core.count.call(null,c__4550__auto___16325);
var G__16329 = (0);
seq__16290_16314 = G__16326;
chunk__16291_16315 = G__16327;
count__16292_16316 = G__16328;
i__16293_16317 = G__16329;
continue;
} else {
var protocol_16330 = cljs.core.first.call(null,seq__16290_16324__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16330)),"}");


var G__16331 = cljs.core.next.call(null,seq__16290_16324__$1);
var G__16332 = null;
var G__16333 = (0);
var G__16334 = (0);
seq__16290_16314 = G__16331;
chunk__16291_16315 = G__16332;
count__16292_16316 = G__16333;
i__16293_16317 = G__16334;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16294_16335 = cljs.core.seq.call(null,fields__$1);
var chunk__16295_16336 = null;
var count__16296_16337 = (0);
var i__16297_16338 = (0);
while(true){
if((i__16297_16338 < count__16296_16337)){
var fld_16339 = cljs.core._nth.call(null,chunk__16295_16336,i__16297_16338);
cljs.compiler.emitln.call(null,"this.",fld_16339," = ",fld_16339,";");


var G__16340 = seq__16294_16335;
var G__16341 = chunk__16295_16336;
var G__16342 = count__16296_16337;
var G__16343 = (i__16297_16338 + (1));
seq__16294_16335 = G__16340;
chunk__16295_16336 = G__16341;
count__16296_16337 = G__16342;
i__16297_16338 = G__16343;
continue;
} else {
var temp__5720__auto___16344 = cljs.core.seq.call(null,seq__16294_16335);
if(temp__5720__auto___16344){
var seq__16294_16345__$1 = temp__5720__auto___16344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16294_16345__$1)){
var c__4550__auto___16346 = cljs.core.chunk_first.call(null,seq__16294_16345__$1);
var G__16347 = cljs.core.chunk_rest.call(null,seq__16294_16345__$1);
var G__16348 = c__4550__auto___16346;
var G__16349 = cljs.core.count.call(null,c__4550__auto___16346);
var G__16350 = (0);
seq__16294_16335 = G__16347;
chunk__16295_16336 = G__16348;
count__16296_16337 = G__16349;
i__16297_16338 = G__16350;
continue;
} else {
var fld_16351 = cljs.core.first.call(null,seq__16294_16345__$1);
cljs.compiler.emitln.call(null,"this.",fld_16351," = ",fld_16351,";");


var G__16352 = cljs.core.next.call(null,seq__16294_16345__$1);
var G__16353 = null;
var G__16354 = (0);
var G__16355 = (0);
seq__16294_16335 = G__16352;
chunk__16295_16336 = G__16353;
count__16296_16337 = G__16354;
i__16297_16338 = G__16355;
continue;
}
} else {
}
}
break;
}

var seq__16298_16356 = cljs.core.seq.call(null,pmasks);
var chunk__16299_16357 = null;
var count__16300_16358 = (0);
var i__16301_16359 = (0);
while(true){
if((i__16301_16359 < count__16300_16358)){
var vec__16308_16360 = cljs.core._nth.call(null,chunk__16299_16357,i__16301_16359);
var pno_16361 = cljs.core.nth.call(null,vec__16308_16360,(0),null);
var pmask_16362 = cljs.core.nth.call(null,vec__16308_16360,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16361,"$ = ",pmask_16362,";");


var G__16363 = seq__16298_16356;
var G__16364 = chunk__16299_16357;
var G__16365 = count__16300_16358;
var G__16366 = (i__16301_16359 + (1));
seq__16298_16356 = G__16363;
chunk__16299_16357 = G__16364;
count__16300_16358 = G__16365;
i__16301_16359 = G__16366;
continue;
} else {
var temp__5720__auto___16367 = cljs.core.seq.call(null,seq__16298_16356);
if(temp__5720__auto___16367){
var seq__16298_16368__$1 = temp__5720__auto___16367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16298_16368__$1)){
var c__4550__auto___16369 = cljs.core.chunk_first.call(null,seq__16298_16368__$1);
var G__16370 = cljs.core.chunk_rest.call(null,seq__16298_16368__$1);
var G__16371 = c__4550__auto___16369;
var G__16372 = cljs.core.count.call(null,c__4550__auto___16369);
var G__16373 = (0);
seq__16298_16356 = G__16370;
chunk__16299_16357 = G__16371;
count__16300_16358 = G__16372;
i__16301_16359 = G__16373;
continue;
} else {
var vec__16311_16374 = cljs.core.first.call(null,seq__16298_16368__$1);
var pno_16375 = cljs.core.nth.call(null,vec__16311_16374,(0),null);
var pmask_16376 = cljs.core.nth.call(null,vec__16311_16374,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16375,"$ = ",pmask_16376,";");


var G__16377 = cljs.core.next.call(null,seq__16298_16368__$1);
var G__16378 = null;
var G__16379 = (0);
var G__16380 = (0);
seq__16298_16356 = G__16377;
chunk__16299_16357 = G__16378;
count__16300_16358 = G__16379;
i__16301_16359 = G__16380;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__16381){
var map__16382 = p__16381;
var map__16382__$1 = (((((!((map__16382 == null))))?(((((map__16382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16382):map__16382);
var t = cljs.core.get.call(null,map__16382__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16382__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16382__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16382__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__16382__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16384_16408 = cljs.core.seq.call(null,protocols);
var chunk__16385_16409 = null;
var count__16386_16410 = (0);
var i__16387_16411 = (0);
while(true){
if((i__16387_16411 < count__16386_16410)){
var protocol_16412 = cljs.core._nth.call(null,chunk__16385_16409,i__16387_16411);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16412)),"}");


var G__16413 = seq__16384_16408;
var G__16414 = chunk__16385_16409;
var G__16415 = count__16386_16410;
var G__16416 = (i__16387_16411 + (1));
seq__16384_16408 = G__16413;
chunk__16385_16409 = G__16414;
count__16386_16410 = G__16415;
i__16387_16411 = G__16416;
continue;
} else {
var temp__5720__auto___16417 = cljs.core.seq.call(null,seq__16384_16408);
if(temp__5720__auto___16417){
var seq__16384_16418__$1 = temp__5720__auto___16417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16384_16418__$1)){
var c__4550__auto___16419 = cljs.core.chunk_first.call(null,seq__16384_16418__$1);
var G__16420 = cljs.core.chunk_rest.call(null,seq__16384_16418__$1);
var G__16421 = c__4550__auto___16419;
var G__16422 = cljs.core.count.call(null,c__4550__auto___16419);
var G__16423 = (0);
seq__16384_16408 = G__16420;
chunk__16385_16409 = G__16421;
count__16386_16410 = G__16422;
i__16387_16411 = G__16423;
continue;
} else {
var protocol_16424 = cljs.core.first.call(null,seq__16384_16418__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16424)),"}");


var G__16425 = cljs.core.next.call(null,seq__16384_16418__$1);
var G__16426 = null;
var G__16427 = (0);
var G__16428 = (0);
seq__16384_16408 = G__16425;
chunk__16385_16409 = G__16426;
count__16386_16410 = G__16427;
i__16387_16411 = G__16428;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16388_16429 = cljs.core.seq.call(null,fields__$1);
var chunk__16389_16430 = null;
var count__16390_16431 = (0);
var i__16391_16432 = (0);
while(true){
if((i__16391_16432 < count__16390_16431)){
var fld_16433 = cljs.core._nth.call(null,chunk__16389_16430,i__16391_16432);
cljs.compiler.emitln.call(null,"this.",fld_16433," = ",fld_16433,";");


var G__16434 = seq__16388_16429;
var G__16435 = chunk__16389_16430;
var G__16436 = count__16390_16431;
var G__16437 = (i__16391_16432 + (1));
seq__16388_16429 = G__16434;
chunk__16389_16430 = G__16435;
count__16390_16431 = G__16436;
i__16391_16432 = G__16437;
continue;
} else {
var temp__5720__auto___16438 = cljs.core.seq.call(null,seq__16388_16429);
if(temp__5720__auto___16438){
var seq__16388_16439__$1 = temp__5720__auto___16438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16388_16439__$1)){
var c__4550__auto___16440 = cljs.core.chunk_first.call(null,seq__16388_16439__$1);
var G__16441 = cljs.core.chunk_rest.call(null,seq__16388_16439__$1);
var G__16442 = c__4550__auto___16440;
var G__16443 = cljs.core.count.call(null,c__4550__auto___16440);
var G__16444 = (0);
seq__16388_16429 = G__16441;
chunk__16389_16430 = G__16442;
count__16390_16431 = G__16443;
i__16391_16432 = G__16444;
continue;
} else {
var fld_16445 = cljs.core.first.call(null,seq__16388_16439__$1);
cljs.compiler.emitln.call(null,"this.",fld_16445," = ",fld_16445,";");


var G__16446 = cljs.core.next.call(null,seq__16388_16439__$1);
var G__16447 = null;
var G__16448 = (0);
var G__16449 = (0);
seq__16388_16429 = G__16446;
chunk__16389_16430 = G__16447;
count__16390_16431 = G__16448;
i__16391_16432 = G__16449;
continue;
}
} else {
}
}
break;
}

var seq__16392_16450 = cljs.core.seq.call(null,pmasks);
var chunk__16393_16451 = null;
var count__16394_16452 = (0);
var i__16395_16453 = (0);
while(true){
if((i__16395_16453 < count__16394_16452)){
var vec__16402_16454 = cljs.core._nth.call(null,chunk__16393_16451,i__16395_16453);
var pno_16455 = cljs.core.nth.call(null,vec__16402_16454,(0),null);
var pmask_16456 = cljs.core.nth.call(null,vec__16402_16454,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16455,"$ = ",pmask_16456,";");


var G__16457 = seq__16392_16450;
var G__16458 = chunk__16393_16451;
var G__16459 = count__16394_16452;
var G__16460 = (i__16395_16453 + (1));
seq__16392_16450 = G__16457;
chunk__16393_16451 = G__16458;
count__16394_16452 = G__16459;
i__16395_16453 = G__16460;
continue;
} else {
var temp__5720__auto___16461 = cljs.core.seq.call(null,seq__16392_16450);
if(temp__5720__auto___16461){
var seq__16392_16462__$1 = temp__5720__auto___16461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16392_16462__$1)){
var c__4550__auto___16463 = cljs.core.chunk_first.call(null,seq__16392_16462__$1);
var G__16464 = cljs.core.chunk_rest.call(null,seq__16392_16462__$1);
var G__16465 = c__4550__auto___16463;
var G__16466 = cljs.core.count.call(null,c__4550__auto___16463);
var G__16467 = (0);
seq__16392_16450 = G__16464;
chunk__16393_16451 = G__16465;
count__16394_16452 = G__16466;
i__16395_16453 = G__16467;
continue;
} else {
var vec__16405_16468 = cljs.core.first.call(null,seq__16392_16462__$1);
var pno_16469 = cljs.core.nth.call(null,vec__16405_16468,(0),null);
var pmask_16470 = cljs.core.nth.call(null,vec__16405_16468,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16469,"$ = ",pmask_16470,";");


var G__16471 = cljs.core.next.call(null,seq__16392_16462__$1);
var G__16472 = null;
var G__16473 = (0);
var G__16474 = (0);
seq__16392_16450 = G__16471;
chunk__16393_16451 = G__16472;
count__16394_16452 = G__16473;
i__16395_16453 = G__16474;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__16475){
var map__16476 = p__16475;
var map__16476__$1 = (((((!((map__16476 == null))))?(((((map__16476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16476):map__16476);
var target = cljs.core.get.call(null,map__16476__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__16476__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__16476__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__16476__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16476__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__16478){
var map__16479 = p__16478;
var map__16479__$1 = (((((!((map__16479 == null))))?(((((map__16479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16479):map__16479);
var op = cljs.core.get.call(null,map__16479__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__16479__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__16479__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__16479__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__16479__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__14023__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14023__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__16485 = cljs.core.seq.call(null,table);
var chunk__16486 = null;
var count__16487 = (0);
var i__16488 = (0);
while(true){
if((i__16488 < count__16487)){
var vec__16495 = cljs.core._nth.call(null,chunk__16486,i__16488);
var sym = cljs.core.nth.call(null,vec__16495,(0),null);
var value = cljs.core.nth.call(null,vec__16495,(1),null);
var ns_16501 = cljs.core.namespace.call(null,sym);
var name_16502 = cljs.core.name.call(null,sym);
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


var G__16503 = seq__16485;
var G__16504 = chunk__16486;
var G__16505 = count__16487;
var G__16506 = (i__16488 + (1));
seq__16485 = G__16503;
chunk__16486 = G__16504;
count__16487 = G__16505;
i__16488 = G__16506;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16485);
if(temp__5720__auto__){
var seq__16485__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16485__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__16485__$1);
var G__16507 = cljs.core.chunk_rest.call(null,seq__16485__$1);
var G__16508 = c__4550__auto__;
var G__16509 = cljs.core.count.call(null,c__4550__auto__);
var G__16510 = (0);
seq__16485 = G__16507;
chunk__16486 = G__16508;
count__16487 = G__16509;
i__16488 = G__16510;
continue;
} else {
var vec__16498 = cljs.core.first.call(null,seq__16485__$1);
var sym = cljs.core.nth.call(null,vec__16498,(0),null);
var value = cljs.core.nth.call(null,vec__16498,(1),null);
var ns_16511 = cljs.core.namespace.call(null,sym);
var name_16512 = cljs.core.name.call(null,sym);
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


var G__16513 = cljs.core.next.call(null,seq__16485__$1);
var G__16514 = null;
var G__16515 = (0);
var G__16516 = (0);
seq__16485 = G__16513;
chunk__16486 = G__16514;
count__16487 = G__16515;
i__16488 = G__16516;
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
var G__16518 = arguments.length;
switch (G__16518) {
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
var k_16523 = cljs.core.first.call(null,ks);
var vec__16519_16524 = cljs.core.conj.call(null,prefix,k_16523);
var top_16525 = cljs.core.nth.call(null,vec__16519_16524,(0),null);
var prefix_SINGLEQUOTE__16526 = vec__16519_16524;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_16523)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__16526) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_16525)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_16525)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16526)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_16525);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16526)),";");
}
} else {
}

var m_16527 = cljs.core.get.call(null,externs,k_16523);
if(cljs.core.empty_QMARK_.call(null,m_16527)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__16526,m_16527,top_level,known_externs);
}

var G__16528 = cljs.core.next.call(null,ks);
ks = G__16528;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
