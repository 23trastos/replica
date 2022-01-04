// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse_clj.lang.cljs_repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
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
klipse_clj.lang.cljs_repl.Error__GT_map = (function klipse_clj$lang$cljs_repl$Error__GT_map(o){
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
var G__39918 = cljs.core.conj.call(null,via,t);
var G__39919 = cljs.core.ex_cause.call(null,t);
via = G__39918;
t = G__39919;
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
klipse_clj.lang.cljs_repl.ex_triage = (function klipse_clj$lang$cljs_repl$ex_triage(datafied_throwable){
var map__39922 = datafied_throwable;
var map__39922__$1 = (((((!((map__39922 == null))))?(((((map__39922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39922):map__39922);
var via = cljs.core.get.call(null,map__39922__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__39922__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__39922__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39923 = cljs.core.last.call(null,via);
var map__39923__$1 = (((((!((map__39923 == null))))?(((((map__39923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39923):map__39923);
var type = cljs.core.get.call(null,map__39923__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__39923__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__39923__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39924 = data;
var map__39924__$1 = (((((!((map__39924 == null))))?(((((map__39924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39924):map__39924);
var problems = cljs.core.get.call(null,map__39924__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__39924__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__39924__$1,new cljs.core.Keyword("cljs.spec.alpha","caller","cljs.spec.alpha/caller",1365484640));
var map__39925 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__39925__$1 = (((((!((map__39925 == null))))?(((((map__39925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39925):map__39925);
var top_data = map__39925__$1;
var source = cljs.core.get.call(null,map__39925__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__39930 = phase;
var G__39930__$1 = (((G__39930 instanceof cljs.core.Keyword))?G__39930.fqn:null);
switch (G__39930__$1) {
case "read-source":
var map__39931 = data;
var map__39931__$1 = (((((!((map__39931 == null))))?(((((map__39931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39931):map__39931);
var line = cljs.core.get.call(null,map__39931__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__39931__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39933 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__39933__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__39933,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39933);
var G__39933__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__39933__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39933__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__39933__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39933__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39934 = top_data;
var G__39934__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__39934,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39934);
var G__39934__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__39934__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39934__$1);
var G__39934__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__39934__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39934__$2);
var G__39934__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__39934__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39934__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__39934__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39934__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39935 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__39935,(0),null);
var method = cljs.core.nth.call(null,vec__39935,(1),null);
var file = cljs.core.nth.call(null,vec__39935,(2),null);
var line = cljs.core.nth.call(null,vec__39935,(3),null);
var G__39938 = top_data;
var G__39938__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__39938,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39938);
var G__39938__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__39938__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39938__$1);
var G__39938__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__39938__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39938__$2);
var G__39938__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__39938__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39938__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__39938__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39938__$4;
}

break;
case "execution":
var vec__39939 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__39939,(0),null);
var method = cljs.core.nth.call(null,vec__39939,(1),null);
var file = cljs.core.nth.call(null,vec__39939,(2),null);
var line = cljs.core.nth.call(null,vec__39939,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__39939,source__$1,method,file,line,G__39930,G__39930__$1,map__39922,map__39922__$1,via,trace,phase,map__39923,map__39923__$1,type,message,data,map__39924,map__39924__$1,problems,fn,caller,map__39925,map__39925__$1,top_data,source){
return (function (p1__39921_SHARP_){
var or__4131__auto__ = (p1__39921_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__39921_SHARP_);
}
});})(vec__39939,source__$1,method,file,line,G__39930,G__39930__$1,map__39922,map__39922__$1,via,trace,phase,map__39923,map__39923__$1,type,message,data,map__39924,map__39924__$1,problems,fn,caller,map__39925,map__39925__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__39942 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39942__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__39942,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39942);
var G__39942__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__39942__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39942__$1);
var G__39942__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__39942__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39942__$2);
var G__39942__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__39942__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39942__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__39942__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39942__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39930__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
klipse_clj.lang.cljs_repl.ex_str = (function klipse_clj$lang$cljs_repl$ex_str(p__39946){
var map__39947 = p__39946;
var map__39947__$1 = (((((!((map__39947 == null))))?(((((map__39947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39947):map__39947);
var triage_data = map__39947__$1;
var phase = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__39949 = phase;
var G__39949__$1 = (((G__39949 instanceof cljs.core.Keyword))?G__39949.fqn:null);
switch (G__39949__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39950_39959 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39951_39960 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39952_39961 = true;
var _STAR_print_fn_STAR__temp_val__39953_39962 = ((function (_STAR_print_newline_STAR__orig_val__39950_39959,_STAR_print_fn_STAR__orig_val__39951_39960,_STAR_print_newline_STAR__temp_val__39952_39961,sb__4661__auto__,G__39949,G__39949__$1,loc,class_name,simple_class,cause_type,format,map__39947,map__39947__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__39950_39959,_STAR_print_fn_STAR__orig_val__39951_39960,_STAR_print_newline_STAR__temp_val__39952_39961,sb__4661__auto__,G__39949,G__39949__$1,loc,class_name,simple_class,cause_type,format,map__39947,map__39947__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39952_39961;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39953_39962;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39950_39959,_STAR_print_fn_STAR__orig_val__39951_39960,_STAR_print_newline_STAR__temp_val__39952_39961,_STAR_print_fn_STAR__temp_val__39953_39962,sb__4661__auto__,G__39949,G__39949__$1,loc,class_name,simple_class,cause_type,format,map__39947,map__39947__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__39950_39959,_STAR_print_fn_STAR__orig_val__39951_39960,_STAR_print_newline_STAR__temp_val__39952_39961,_STAR_print_fn_STAR__temp_val__39953_39962,sb__4661__auto__,G__39949,G__39949__$1,loc,class_name,simple_class,cause_type,format,map__39947,map__39947__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39944_SHARP_){
return cljs.core.dissoc.call(null,p1__39944_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39950_39959,_STAR_print_fn_STAR__orig_val__39951_39960,_STAR_print_newline_STAR__temp_val__39952_39961,_STAR_print_fn_STAR__temp_val__39953_39962,sb__4661__auto__,G__39949,G__39949__$1,loc,class_name,simple_class,cause_type,format,map__39947,map__39947__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39950_39959,_STAR_print_fn_STAR__orig_val__39951_39960,_STAR_print_newline_STAR__temp_val__39952_39961,_STAR_print_fn_STAR__temp_val__39953_39962,sb__4661__auto__,G__39949,G__39949__$1,loc,class_name,simple_class,cause_type,format,map__39947,map__39947__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39951_39960;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39950_39959;
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
var _STAR_print_newline_STAR__orig_val__39954_39963 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39955_39964 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39956_39965 = true;
var _STAR_print_fn_STAR__temp_val__39957_39966 = ((function (_STAR_print_newline_STAR__orig_val__39954_39963,_STAR_print_fn_STAR__orig_val__39955_39964,_STAR_print_newline_STAR__temp_val__39956_39965,sb__4661__auto__,G__39949,G__39949__$1,loc,class_name,simple_class,cause_type,format,map__39947,map__39947__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__39954_39963,_STAR_print_fn_STAR__orig_val__39955_39964,_STAR_print_newline_STAR__temp_val__39956_39965,sb__4661__auto__,G__39949,G__39949__$1,loc,class_name,simple_class,cause_type,format,map__39947,map__39947__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39956_39965;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39957_39966;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39954_39963,_STAR_print_fn_STAR__orig_val__39955_39964,_STAR_print_newline_STAR__temp_val__39956_39965,_STAR_print_fn_STAR__temp_val__39957_39966,sb__4661__auto__,G__39949,G__39949__$1,loc,class_name,simple_class,cause_type,format,map__39947,map__39947__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__39954_39963,_STAR_print_fn_STAR__orig_val__39955_39964,_STAR_print_newline_STAR__temp_val__39956_39965,_STAR_print_fn_STAR__temp_val__39957_39966,sb__4661__auto__,G__39949,G__39949__$1,loc,class_name,simple_class,cause_type,format,map__39947,map__39947__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39945_SHARP_){
return cljs.core.dissoc.call(null,p1__39945_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39954_39963,_STAR_print_fn_STAR__orig_val__39955_39964,_STAR_print_newline_STAR__temp_val__39956_39965,_STAR_print_fn_STAR__temp_val__39957_39966,sb__4661__auto__,G__39949,G__39949__$1,loc,class_name,simple_class,cause_type,format,map__39947,map__39947__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39954_39963,_STAR_print_fn_STAR__orig_val__39955_39964,_STAR_print_newline_STAR__temp_val__39956_39965,_STAR_print_fn_STAR__temp_val__39957_39966,sb__4661__auto__,G__39949,G__39949__$1,loc,class_name,simple_class,cause_type,format,map__39947,map__39947__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39955_39964;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39954_39963;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39949__$1)].join('')));

}
});
klipse_clj.lang.cljs_repl.error__GT_str = (function klipse_clj$lang$cljs_repl$error__GT_str(error){
return klipse_clj.lang.cljs_repl.ex_str.call(null,klipse_clj.lang.cljs_repl.ex_triage.call(null,klipse_clj.lang.cljs_repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=cljs_repl.js.map
