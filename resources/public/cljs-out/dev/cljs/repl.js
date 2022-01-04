// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33250){
var map__33251 = p__33250;
var map__33251__$1 = (((((!((map__33251 == null))))?(((((map__33251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33251):map__33251);
var m = map__33251__$1;
var n = cljs.core.get.call(null,map__33251__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33251__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33253_33285 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33254_33286 = null;
var count__33255_33287 = (0);
var i__33256_33288 = (0);
while(true){
if((i__33256_33288 < count__33255_33287)){
var f_33289 = cljs.core._nth.call(null,chunk__33254_33286,i__33256_33288);
cljs.core.println.call(null,"  ",f_33289);


var G__33290 = seq__33253_33285;
var G__33291 = chunk__33254_33286;
var G__33292 = count__33255_33287;
var G__33293 = (i__33256_33288 + (1));
seq__33253_33285 = G__33290;
chunk__33254_33286 = G__33291;
count__33255_33287 = G__33292;
i__33256_33288 = G__33293;
continue;
} else {
var temp__5720__auto___33294 = cljs.core.seq.call(null,seq__33253_33285);
if(temp__5720__auto___33294){
var seq__33253_33295__$1 = temp__5720__auto___33294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33253_33295__$1)){
var c__4550__auto___33296 = cljs.core.chunk_first.call(null,seq__33253_33295__$1);
var G__33297 = cljs.core.chunk_rest.call(null,seq__33253_33295__$1);
var G__33298 = c__4550__auto___33296;
var G__33299 = cljs.core.count.call(null,c__4550__auto___33296);
var G__33300 = (0);
seq__33253_33285 = G__33297;
chunk__33254_33286 = G__33298;
count__33255_33287 = G__33299;
i__33256_33288 = G__33300;
continue;
} else {
var f_33301 = cljs.core.first.call(null,seq__33253_33295__$1);
cljs.core.println.call(null,"  ",f_33301);


var G__33302 = cljs.core.next.call(null,seq__33253_33295__$1);
var G__33303 = null;
var G__33304 = (0);
var G__33305 = (0);
seq__33253_33285 = G__33302;
chunk__33254_33286 = G__33303;
count__33255_33287 = G__33304;
i__33256_33288 = G__33305;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33306 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33306);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33306)))?cljs.core.second.call(null,arglists_33306):arglists_33306));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33257_33307 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33258_33308 = null;
var count__33259_33309 = (0);
var i__33260_33310 = (0);
while(true){
if((i__33260_33310 < count__33259_33309)){
var vec__33271_33311 = cljs.core._nth.call(null,chunk__33258_33308,i__33260_33310);
var name_33312 = cljs.core.nth.call(null,vec__33271_33311,(0),null);
var map__33274_33313 = cljs.core.nth.call(null,vec__33271_33311,(1),null);
var map__33274_33314__$1 = (((((!((map__33274_33313 == null))))?(((((map__33274_33313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33274_33313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33274_33313):map__33274_33313);
var doc_33315 = cljs.core.get.call(null,map__33274_33314__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33316 = cljs.core.get.call(null,map__33274_33314__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33312);

cljs.core.println.call(null," ",arglists_33316);

if(cljs.core.truth_(doc_33315)){
cljs.core.println.call(null," ",doc_33315);
} else {
}


var G__33317 = seq__33257_33307;
var G__33318 = chunk__33258_33308;
var G__33319 = count__33259_33309;
var G__33320 = (i__33260_33310 + (1));
seq__33257_33307 = G__33317;
chunk__33258_33308 = G__33318;
count__33259_33309 = G__33319;
i__33260_33310 = G__33320;
continue;
} else {
var temp__5720__auto___33321 = cljs.core.seq.call(null,seq__33257_33307);
if(temp__5720__auto___33321){
var seq__33257_33322__$1 = temp__5720__auto___33321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33257_33322__$1)){
var c__4550__auto___33323 = cljs.core.chunk_first.call(null,seq__33257_33322__$1);
var G__33324 = cljs.core.chunk_rest.call(null,seq__33257_33322__$1);
var G__33325 = c__4550__auto___33323;
var G__33326 = cljs.core.count.call(null,c__4550__auto___33323);
var G__33327 = (0);
seq__33257_33307 = G__33324;
chunk__33258_33308 = G__33325;
count__33259_33309 = G__33326;
i__33260_33310 = G__33327;
continue;
} else {
var vec__33276_33328 = cljs.core.first.call(null,seq__33257_33322__$1);
var name_33329 = cljs.core.nth.call(null,vec__33276_33328,(0),null);
var map__33279_33330 = cljs.core.nth.call(null,vec__33276_33328,(1),null);
var map__33279_33331__$1 = (((((!((map__33279_33330 == null))))?(((((map__33279_33330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33279_33330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33279_33330):map__33279_33330);
var doc_33332 = cljs.core.get.call(null,map__33279_33331__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33333 = cljs.core.get.call(null,map__33279_33331__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33329);

cljs.core.println.call(null," ",arglists_33333);

if(cljs.core.truth_(doc_33332)){
cljs.core.println.call(null," ",doc_33332);
} else {
}


var G__33334 = cljs.core.next.call(null,seq__33257_33322__$1);
var G__33335 = null;
var G__33336 = (0);
var G__33337 = (0);
seq__33257_33307 = G__33334;
chunk__33258_33308 = G__33335;
count__33259_33309 = G__33336;
i__33260_33310 = G__33337;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__33281 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33282 = null;
var count__33283 = (0);
var i__33284 = (0);
while(true){
if((i__33284 < count__33283)){
var role = cljs.core._nth.call(null,chunk__33282,i__33284);
var temp__5720__auto___33338__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___33338__$1)){
var spec_33339 = temp__5720__auto___33338__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33339));
} else {
}


var G__33340 = seq__33281;
var G__33341 = chunk__33282;
var G__33342 = count__33283;
var G__33343 = (i__33284 + (1));
seq__33281 = G__33340;
chunk__33282 = G__33341;
count__33283 = G__33342;
i__33284 = G__33343;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__33281);
if(temp__5720__auto____$1){
var seq__33281__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33281__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33281__$1);
var G__33344 = cljs.core.chunk_rest.call(null,seq__33281__$1);
var G__33345 = c__4550__auto__;
var G__33346 = cljs.core.count.call(null,c__4550__auto__);
var G__33347 = (0);
seq__33281 = G__33344;
chunk__33282 = G__33345;
count__33283 = G__33346;
i__33284 = G__33347;
continue;
} else {
var role = cljs.core.first.call(null,seq__33281__$1);
var temp__5720__auto___33348__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___33348__$2)){
var spec_33349 = temp__5720__auto___33348__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33349));
} else {
}


var G__33350 = cljs.core.next.call(null,seq__33281__$1);
var G__33351 = null;
var G__33352 = (0);
var G__33353 = (0);
seq__33281 = G__33350;
chunk__33282 = G__33351;
count__33283 = G__33352;
i__33284 = G__33353;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__33354 = cljs.core.conj.call(null,via,t);
var G__33355 = cljs.core.ex_cause.call(null,t);
via = G__33354;
t = G__33355;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__33358 = datafied_throwable;
var map__33358__$1 = (((((!((map__33358 == null))))?(((((map__33358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33358):map__33358);
var via = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__33359 = cljs.core.last.call(null,via);
var map__33359__$1 = (((((!((map__33359 == null))))?(((((map__33359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33359):map__33359);
var type = cljs.core.get.call(null,map__33359__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__33359__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__33359__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__33360 = data;
var map__33360__$1 = (((((!((map__33360 == null))))?(((((map__33360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33360):map__33360);
var problems = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__33361 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__33361__$1 = (((((!((map__33361 == null))))?(((((map__33361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33361):map__33361);
var top_data = map__33361__$1;
var source = cljs.core.get.call(null,map__33361__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__33366 = phase;
var G__33366__$1 = (((G__33366 instanceof cljs.core.Keyword))?G__33366.fqn:null);
switch (G__33366__$1) {
case "read-source":
var map__33367 = data;
var map__33367__$1 = (((((!((map__33367 == null))))?(((((map__33367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33367):map__33367);
var line = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__33369 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__33369__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33369,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33369);
var G__33369__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33369__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33369__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33369__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33369__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__33370 = top_data;
var G__33370__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33370,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33370);
var G__33370__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33370__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33370__$1);
var G__33370__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33370__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33370__$2);
var G__33370__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33370__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33370__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33370__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33370__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__33371 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33371,(0),null);
var method = cljs.core.nth.call(null,vec__33371,(1),null);
var file = cljs.core.nth.call(null,vec__33371,(2),null);
var line = cljs.core.nth.call(null,vec__33371,(3),null);
var G__33374 = top_data;
var G__33374__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__33374,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__33374);
var G__33374__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__33374__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__33374__$1);
var G__33374__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__33374__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__33374__$2);
var G__33374__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33374__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33374__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33374__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33374__$4;
}

break;
case "execution":
var vec__33375 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33375,(0),null);
var method = cljs.core.nth.call(null,vec__33375,(1),null);
var file = cljs.core.nth.call(null,vec__33375,(2),null);
var line = cljs.core.nth.call(null,vec__33375,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__33375,source__$1,method,file,line,G__33366,G__33366__$1,map__33358,map__33358__$1,via,trace,phase,map__33359,map__33359__$1,type,message,data,map__33360,map__33360__$1,problems,fn,caller,map__33361,map__33361__$1,top_data,source){
return (function (p1__33357_SHARP_){
var or__4131__auto__ = (p1__33357_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__33357_SHARP_);
}
});})(vec__33375,source__$1,method,file,line,G__33366,G__33366__$1,map__33358,map__33358__$1,via,trace,phase,map__33359,map__33359__$1,type,message,data,map__33360,map__33360__$1,problems,fn,caller,map__33361,map__33361__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__33378 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__33378__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__33378,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__33378);
var G__33378__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33378__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33378__$1);
var G__33378__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__33378__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__33378__$2);
var G__33378__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__33378__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__33378__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33378__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33378__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33366__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__33382){
var map__33383 = p__33382;
var map__33383__$1 = (((((!((map__33383 == null))))?(((((map__33383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33383):map__33383);
var triage_data = map__33383__$1;
var phase = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__33385 = phase;
var G__33385__$1 = (((G__33385 instanceof cljs.core.Keyword))?G__33385.fqn:null);
switch (G__33385__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33386_33395 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33387_33396 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33388_33397 = true;
var _STAR_print_fn_STAR__temp_val__33389_33398 = ((function (_STAR_print_newline_STAR__orig_val__33386_33395,_STAR_print_fn_STAR__orig_val__33387_33396,_STAR_print_newline_STAR__temp_val__33388_33397,sb__4661__auto__,G__33385,G__33385__$1,loc,class_name,simple_class,cause_type,format,map__33383,map__33383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33386_33395,_STAR_print_fn_STAR__orig_val__33387_33396,_STAR_print_newline_STAR__temp_val__33388_33397,sb__4661__auto__,G__33385,G__33385__$1,loc,class_name,simple_class,cause_type,format,map__33383,map__33383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33388_33397;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33389_33398;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__33386_33395,_STAR_print_fn_STAR__orig_val__33387_33396,_STAR_print_newline_STAR__temp_val__33388_33397,_STAR_print_fn_STAR__temp_val__33389_33398,sb__4661__auto__,G__33385,G__33385__$1,loc,class_name,simple_class,cause_type,format,map__33383,map__33383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__33386_33395,_STAR_print_fn_STAR__orig_val__33387_33396,_STAR_print_newline_STAR__temp_val__33388_33397,_STAR_print_fn_STAR__temp_val__33389_33398,sb__4661__auto__,G__33385,G__33385__$1,loc,class_name,simple_class,cause_type,format,map__33383,map__33383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__33380_SHARP_){
return cljs.core.dissoc.call(null,p1__33380_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__33386_33395,_STAR_print_fn_STAR__orig_val__33387_33396,_STAR_print_newline_STAR__temp_val__33388_33397,_STAR_print_fn_STAR__temp_val__33389_33398,sb__4661__auto__,G__33385,G__33385__$1,loc,class_name,simple_class,cause_type,format,map__33383,map__33383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__33386_33395,_STAR_print_fn_STAR__orig_val__33387_33396,_STAR_print_newline_STAR__temp_val__33388_33397,_STAR_print_fn_STAR__temp_val__33389_33398,sb__4661__auto__,G__33385,G__33385__$1,loc,class_name,simple_class,cause_type,format,map__33383,map__33383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33387_33396;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33386_33395;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33390_33399 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33391_33400 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33392_33401 = true;
var _STAR_print_fn_STAR__temp_val__33393_33402 = ((function (_STAR_print_newline_STAR__orig_val__33390_33399,_STAR_print_fn_STAR__orig_val__33391_33400,_STAR_print_newline_STAR__temp_val__33392_33401,sb__4661__auto__,G__33385,G__33385__$1,loc,class_name,simple_class,cause_type,format,map__33383,map__33383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33390_33399,_STAR_print_fn_STAR__orig_val__33391_33400,_STAR_print_newline_STAR__temp_val__33392_33401,sb__4661__auto__,G__33385,G__33385__$1,loc,class_name,simple_class,cause_type,format,map__33383,map__33383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33392_33401;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33393_33402;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__33390_33399,_STAR_print_fn_STAR__orig_val__33391_33400,_STAR_print_newline_STAR__temp_val__33392_33401,_STAR_print_fn_STAR__temp_val__33393_33402,sb__4661__auto__,G__33385,G__33385__$1,loc,class_name,simple_class,cause_type,format,map__33383,map__33383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__33390_33399,_STAR_print_fn_STAR__orig_val__33391_33400,_STAR_print_newline_STAR__temp_val__33392_33401,_STAR_print_fn_STAR__temp_val__33393_33402,sb__4661__auto__,G__33385,G__33385__$1,loc,class_name,simple_class,cause_type,format,map__33383,map__33383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__33381_SHARP_){
return cljs.core.dissoc.call(null,p1__33381_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__33390_33399,_STAR_print_fn_STAR__orig_val__33391_33400,_STAR_print_newline_STAR__temp_val__33392_33401,_STAR_print_fn_STAR__temp_val__33393_33402,sb__4661__auto__,G__33385,G__33385__$1,loc,class_name,simple_class,cause_type,format,map__33383,map__33383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__33390_33399,_STAR_print_fn_STAR__orig_val__33391_33400,_STAR_print_newline_STAR__temp_val__33392_33401,_STAR_print_fn_STAR__temp_val__33393_33402,sb__4661__auto__,G__33385,G__33385__$1,loc,class_name,simple_class,cause_type,format,map__33383,map__33383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33391_33400;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33390_33399;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33385__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
