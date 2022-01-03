// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22372){
var map__22373 = p__22372;
var map__22373__$1 = (((((!((map__22373 == null))))?(((((map__22373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22373):map__22373);
var m = map__22373__$1;
var n = cljs.core.get.call(null,map__22373__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22373__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__22375_22407 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22376_22408 = null;
var count__22377_22409 = (0);
var i__22378_22410 = (0);
while(true){
if((i__22378_22410 < count__22377_22409)){
var f_22411 = cljs.core._nth.call(null,chunk__22376_22408,i__22378_22410);
cljs.core.println.call(null,"  ",f_22411);


var G__22412 = seq__22375_22407;
var G__22413 = chunk__22376_22408;
var G__22414 = count__22377_22409;
var G__22415 = (i__22378_22410 + (1));
seq__22375_22407 = G__22412;
chunk__22376_22408 = G__22413;
count__22377_22409 = G__22414;
i__22378_22410 = G__22415;
continue;
} else {
var temp__5720__auto___22416 = cljs.core.seq.call(null,seq__22375_22407);
if(temp__5720__auto___22416){
var seq__22375_22417__$1 = temp__5720__auto___22416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22375_22417__$1)){
var c__4550__auto___22418 = cljs.core.chunk_first.call(null,seq__22375_22417__$1);
var G__22419 = cljs.core.chunk_rest.call(null,seq__22375_22417__$1);
var G__22420 = c__4550__auto___22418;
var G__22421 = cljs.core.count.call(null,c__4550__auto___22418);
var G__22422 = (0);
seq__22375_22407 = G__22419;
chunk__22376_22408 = G__22420;
count__22377_22409 = G__22421;
i__22378_22410 = G__22422;
continue;
} else {
var f_22423 = cljs.core.first.call(null,seq__22375_22417__$1);
cljs.core.println.call(null,"  ",f_22423);


var G__22424 = cljs.core.next.call(null,seq__22375_22417__$1);
var G__22425 = null;
var G__22426 = (0);
var G__22427 = (0);
seq__22375_22407 = G__22424;
chunk__22376_22408 = G__22425;
count__22377_22409 = G__22426;
i__22378_22410 = G__22427;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22428 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22428);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22428)))?cljs.core.second.call(null,arglists_22428):arglists_22428));
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
var seq__22379_22429 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22380_22430 = null;
var count__22381_22431 = (0);
var i__22382_22432 = (0);
while(true){
if((i__22382_22432 < count__22381_22431)){
var vec__22393_22433 = cljs.core._nth.call(null,chunk__22380_22430,i__22382_22432);
var name_22434 = cljs.core.nth.call(null,vec__22393_22433,(0),null);
var map__22396_22435 = cljs.core.nth.call(null,vec__22393_22433,(1),null);
var map__22396_22436__$1 = (((((!((map__22396_22435 == null))))?(((((map__22396_22435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22396_22435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22396_22435):map__22396_22435);
var doc_22437 = cljs.core.get.call(null,map__22396_22436__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22438 = cljs.core.get.call(null,map__22396_22436__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22434);

cljs.core.println.call(null," ",arglists_22438);

if(cljs.core.truth_(doc_22437)){
cljs.core.println.call(null," ",doc_22437);
} else {
}


var G__22439 = seq__22379_22429;
var G__22440 = chunk__22380_22430;
var G__22441 = count__22381_22431;
var G__22442 = (i__22382_22432 + (1));
seq__22379_22429 = G__22439;
chunk__22380_22430 = G__22440;
count__22381_22431 = G__22441;
i__22382_22432 = G__22442;
continue;
} else {
var temp__5720__auto___22443 = cljs.core.seq.call(null,seq__22379_22429);
if(temp__5720__auto___22443){
var seq__22379_22444__$1 = temp__5720__auto___22443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22379_22444__$1)){
var c__4550__auto___22445 = cljs.core.chunk_first.call(null,seq__22379_22444__$1);
var G__22446 = cljs.core.chunk_rest.call(null,seq__22379_22444__$1);
var G__22447 = c__4550__auto___22445;
var G__22448 = cljs.core.count.call(null,c__4550__auto___22445);
var G__22449 = (0);
seq__22379_22429 = G__22446;
chunk__22380_22430 = G__22447;
count__22381_22431 = G__22448;
i__22382_22432 = G__22449;
continue;
} else {
var vec__22398_22450 = cljs.core.first.call(null,seq__22379_22444__$1);
var name_22451 = cljs.core.nth.call(null,vec__22398_22450,(0),null);
var map__22401_22452 = cljs.core.nth.call(null,vec__22398_22450,(1),null);
var map__22401_22453__$1 = (((((!((map__22401_22452 == null))))?(((((map__22401_22452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22401_22452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22401_22452):map__22401_22452);
var doc_22454 = cljs.core.get.call(null,map__22401_22453__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22455 = cljs.core.get.call(null,map__22401_22453__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22451);

cljs.core.println.call(null," ",arglists_22455);

if(cljs.core.truth_(doc_22454)){
cljs.core.println.call(null," ",doc_22454);
} else {
}


var G__22456 = cljs.core.next.call(null,seq__22379_22444__$1);
var G__22457 = null;
var G__22458 = (0);
var G__22459 = (0);
seq__22379_22429 = G__22456;
chunk__22380_22430 = G__22457;
count__22381_22431 = G__22458;
i__22382_22432 = G__22459;
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

var seq__22403 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22404 = null;
var count__22405 = (0);
var i__22406 = (0);
while(true){
if((i__22406 < count__22405)){
var role = cljs.core._nth.call(null,chunk__22404,i__22406);
var temp__5720__auto___22460__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22460__$1)){
var spec_22461 = temp__5720__auto___22460__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22461));
} else {
}


var G__22462 = seq__22403;
var G__22463 = chunk__22404;
var G__22464 = count__22405;
var G__22465 = (i__22406 + (1));
seq__22403 = G__22462;
chunk__22404 = G__22463;
count__22405 = G__22464;
i__22406 = G__22465;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__22403);
if(temp__5720__auto____$1){
var seq__22403__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22403__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22403__$1);
var G__22466 = cljs.core.chunk_rest.call(null,seq__22403__$1);
var G__22467 = c__4550__auto__;
var G__22468 = cljs.core.count.call(null,c__4550__auto__);
var G__22469 = (0);
seq__22403 = G__22466;
chunk__22404 = G__22467;
count__22405 = G__22468;
i__22406 = G__22469;
continue;
} else {
var role = cljs.core.first.call(null,seq__22403__$1);
var temp__5720__auto___22470__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22470__$2)){
var spec_22471 = temp__5720__auto___22470__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22471));
} else {
}


var G__22472 = cljs.core.next.call(null,seq__22403__$1);
var G__22473 = null;
var G__22474 = (0);
var G__22475 = (0);
seq__22403 = G__22472;
chunk__22404 = G__22473;
count__22405 = G__22474;
i__22406 = G__22475;
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
var G__22476 = cljs.core.conj.call(null,via,t);
var G__22477 = cljs.core.ex_cause.call(null,t);
via = G__22476;
t = G__22477;
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
var map__22480 = datafied_throwable;
var map__22480__$1 = (((((!((map__22480 == null))))?(((((map__22480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22480):map__22480);
var via = cljs.core.get.call(null,map__22480__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__22480__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__22480__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22481 = cljs.core.last.call(null,via);
var map__22481__$1 = (((((!((map__22481 == null))))?(((((map__22481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22481):map__22481);
var type = cljs.core.get.call(null,map__22481__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__22481__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__22481__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22482 = data;
var map__22482__$1 = (((((!((map__22482 == null))))?(((((map__22482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22482):map__22482);
var problems = cljs.core.get.call(null,map__22482__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__22482__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__22482__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__22483 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__22483__$1 = (((((!((map__22483 == null))))?(((((map__22483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22483):map__22483);
var top_data = map__22483__$1;
var source = cljs.core.get.call(null,map__22483__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__22488 = phase;
var G__22488__$1 = (((G__22488 instanceof cljs.core.Keyword))?G__22488.fqn:null);
switch (G__22488__$1) {
case "read-source":
var map__22489 = data;
var map__22489__$1 = (((((!((map__22489 == null))))?(((((map__22489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22489):map__22489);
var line = cljs.core.get.call(null,map__22489__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22489__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22491 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__22491__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22491,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22491);
var G__22491__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22491__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22491__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22491__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22491__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22492 = top_data;
var G__22492__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22492,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22492);
var G__22492__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22492__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22492__$1);
var G__22492__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22492__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22492__$2);
var G__22492__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22492__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22492__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22492__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22492__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22493 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22493,(0),null);
var method = cljs.core.nth.call(null,vec__22493,(1),null);
var file = cljs.core.nth.call(null,vec__22493,(2),null);
var line = cljs.core.nth.call(null,vec__22493,(3),null);
var G__22496 = top_data;
var G__22496__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__22496,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22496);
var G__22496__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__22496__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22496__$1);
var G__22496__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__22496__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22496__$2);
var G__22496__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22496__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22496__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22496__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22496__$4;
}

break;
case "execution":
var vec__22497 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22497,(0),null);
var method = cljs.core.nth.call(null,vec__22497,(1),null);
var file = cljs.core.nth.call(null,vec__22497,(2),null);
var line = cljs.core.nth.call(null,vec__22497,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__22497,source__$1,method,file,line,G__22488,G__22488__$1,map__22480,map__22480__$1,via,trace,phase,map__22481,map__22481__$1,type,message,data,map__22482,map__22482__$1,problems,fn,caller,map__22483,map__22483__$1,top_data,source){
return (function (p1__22479_SHARP_){
var or__4131__auto__ = (p1__22479_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__22479_SHARP_);
}
});})(vec__22497,source__$1,method,file,line,G__22488,G__22488__$1,map__22480,map__22480__$1,via,trace,phase,map__22481,map__22481__$1,type,message,data,map__22482,map__22482__$1,problems,fn,caller,map__22483,map__22483__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__22500 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22500__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__22500,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22500);
var G__22500__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22500__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22500__$1);
var G__22500__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__22500__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22500__$2);
var G__22500__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__22500__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22500__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22500__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22500__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22488__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22504){
var map__22505 = p__22504;
var map__22505__$1 = (((((!((map__22505 == null))))?(((((map__22505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22505):map__22505);
var triage_data = map__22505__$1;
var phase = cljs.core.get.call(null,map__22505__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__22505__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__22505__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22505__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__22505__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__22505__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__22505__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__22505__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__22507 = phase;
var G__22507__$1 = (((G__22507 instanceof cljs.core.Keyword))?G__22507.fqn:null);
switch (G__22507__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22508_22517 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22509_22518 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22510_22519 = true;
var _STAR_print_fn_STAR__temp_val__22511_22520 = ((function (_STAR_print_newline_STAR__orig_val__22508_22517,_STAR_print_fn_STAR__orig_val__22509_22518,_STAR_print_newline_STAR__temp_val__22510_22519,sb__4661__auto__,G__22507,G__22507__$1,loc,class_name,simple_class,cause_type,format,map__22505,map__22505__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22508_22517,_STAR_print_fn_STAR__orig_val__22509_22518,_STAR_print_newline_STAR__temp_val__22510_22519,sb__4661__auto__,G__22507,G__22507__$1,loc,class_name,simple_class,cause_type,format,map__22505,map__22505__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22510_22519;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22511_22520;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22508_22517,_STAR_print_fn_STAR__orig_val__22509_22518,_STAR_print_newline_STAR__temp_val__22510_22519,_STAR_print_fn_STAR__temp_val__22511_22520,sb__4661__auto__,G__22507,G__22507__$1,loc,class_name,simple_class,cause_type,format,map__22505,map__22505__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__22508_22517,_STAR_print_fn_STAR__orig_val__22509_22518,_STAR_print_newline_STAR__temp_val__22510_22519,_STAR_print_fn_STAR__temp_val__22511_22520,sb__4661__auto__,G__22507,G__22507__$1,loc,class_name,simple_class,cause_type,format,map__22505,map__22505__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__22502_SHARP_){
return cljs.core.dissoc.call(null,p1__22502_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22508_22517,_STAR_print_fn_STAR__orig_val__22509_22518,_STAR_print_newline_STAR__temp_val__22510_22519,_STAR_print_fn_STAR__temp_val__22511_22520,sb__4661__auto__,G__22507,G__22507__$1,loc,class_name,simple_class,cause_type,format,map__22505,map__22505__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22508_22517,_STAR_print_fn_STAR__orig_val__22509_22518,_STAR_print_newline_STAR__temp_val__22510_22519,_STAR_print_fn_STAR__temp_val__22511_22520,sb__4661__auto__,G__22507,G__22507__$1,loc,class_name,simple_class,cause_type,format,map__22505,map__22505__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22509_22518;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22508_22517;
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
var _STAR_print_newline_STAR__orig_val__22512_22521 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22513_22522 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22514_22523 = true;
var _STAR_print_fn_STAR__temp_val__22515_22524 = ((function (_STAR_print_newline_STAR__orig_val__22512_22521,_STAR_print_fn_STAR__orig_val__22513_22522,_STAR_print_newline_STAR__temp_val__22514_22523,sb__4661__auto__,G__22507,G__22507__$1,loc,class_name,simple_class,cause_type,format,map__22505,map__22505__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22512_22521,_STAR_print_fn_STAR__orig_val__22513_22522,_STAR_print_newline_STAR__temp_val__22514_22523,sb__4661__auto__,G__22507,G__22507__$1,loc,class_name,simple_class,cause_type,format,map__22505,map__22505__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22514_22523;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22515_22524;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22512_22521,_STAR_print_fn_STAR__orig_val__22513_22522,_STAR_print_newline_STAR__temp_val__22514_22523,_STAR_print_fn_STAR__temp_val__22515_22524,sb__4661__auto__,G__22507,G__22507__$1,loc,class_name,simple_class,cause_type,format,map__22505,map__22505__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__22512_22521,_STAR_print_fn_STAR__orig_val__22513_22522,_STAR_print_newline_STAR__temp_val__22514_22523,_STAR_print_fn_STAR__temp_val__22515_22524,sb__4661__auto__,G__22507,G__22507__$1,loc,class_name,simple_class,cause_type,format,map__22505,map__22505__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__22503_SHARP_){
return cljs.core.dissoc.call(null,p1__22503_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22512_22521,_STAR_print_fn_STAR__orig_val__22513_22522,_STAR_print_newline_STAR__temp_val__22514_22523,_STAR_print_fn_STAR__temp_val__22515_22524,sb__4661__auto__,G__22507,G__22507__$1,loc,class_name,simple_class,cause_type,format,map__22505,map__22505__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22512_22521,_STAR_print_fn_STAR__orig_val__22513_22522,_STAR_print_newline_STAR__temp_val__22514_22523,_STAR_print_fn_STAR__temp_val__22515_22524,sb__4661__auto__,G__22507,G__22507__$1,loc,class_name,simple_class,cause_type,format,map__22505,map__22505__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22513_22522;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22512_22521;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22507__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
