// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.prolog');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.prolog.session = cljs.core.atom.call(null,null);
klipse.lang.prolog.init = (function klipse$lang$prolog$init(){
if(cljs.core.not.call(null,cljs.core.deref.call(null,klipse.lang.prolog.session))){
return cljs.core.reset_BANG_.call(null,klipse.lang.prolog.session,(function (){var obj__18568__auto__ = pl;
var f__18569__auto__ = (function (){var obj20586 = obj__18568__auto__;
var k20587 = "create";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20586,k20587)){
return (obj20586[k20587]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__);
})());
} else {
return null;
}
});
klipse.lang.prolog.consult_STAR_ = (function klipse$lang$prolog$consult_STAR_(exp){
var my_session = cljs.core.deref.call(null,klipse.lang.prolog.session);
var res = (function (){var obj__18568__auto__ = my_session;
var f__18569__auto__ = (function (){var obj20588 = obj__18568__auto__;
var k20589 = "consult";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20588,k20589)){
return (obj20588[k20589]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,exp);
})();
if(cljs.core._EQ_.call(null,true,res)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),true], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)], null);
}
});
klipse.lang.prolog.consult = (function klipse$lang$prolog$consult(exp,_){
var c = cljs.core.async.chan.call(null);
try{klipse.lang.prolog.init.call(null);

var vec__20591_20594 = klipse.lang.prolog.consult_STAR_.call(null,exp);
var status_20595 = cljs.core.nth.call(null,vec__20591_20594,(0),null);
var res_20596 = cljs.core.nth.call(null,vec__20591_20594,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_20595)){
cljs.core.async.put_BANG_.call(null,c,res_20596);
} else {
cljs.core.async.put_BANG_.call(null,c,"Rules are valid.");
}
}catch (e20590){var o_20597 = e20590;
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_20597));
}
return c;
});
klipse.lang.prolog.query_STAR_ = (function klipse$lang$prolog$query_STAR_(exp){
var my_session = cljs.core.deref.call(null,klipse.lang.prolog.session);
var res = (function (){var obj__18568__auto__ = my_session;
var f__18569__auto__ = (function (){var obj20598 = obj__18568__auto__;
var k20599 = "query";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20598,k20599)){
return (obj20598[k20599]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,exp);
})();
if(cljs.core._EQ_.call(null,true,res)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),true], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)], null);
}
});
klipse.lang.prolog.answer_STAR_ = (function klipse$lang$prolog$answer_STAR_(cnt,num_solutions,callback){
var my_session = cljs.core.deref.call(null,klipse.lang.prolog.session);
var obj__18568__auto__ = my_session;
var f__18569__auto__ = (function (){var obj20600 = obj__18568__auto__;
var k20601 = "answer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20600,k20601)){
return (obj20600[k20601]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,((function (obj__18568__auto__,f__18569__auto__,my_session){
return (function (ans){
var G__20602 = ans;
if(cljs.core._EQ_.call(null,false,G__20602)){
if((num_solutions === (0))){
return callback.call(null,"No solutions.");
} else {
return callback.call(null,["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_solutions)," solutions."].join(''));
}
} else {
if(cljs.core._EQ_.call(null,null,G__20602)){
return setTimeout(((function (G__20602,obj__18568__auto__,f__18569__auto__,my_session){
return (function (){
callback.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_solutions)," solutions after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cnt + (1)) * (1000)))," tries. Continuing to try...\n"].join(''),new cljs.core.Keyword(null,"remove-previous-results","remove-previous-results",883218005),true], null));

return klipse.lang.prolog.answer_STAR_.call(null,(cnt + (1)),num_solutions,callback);
});})(G__20602,obj__18568__auto__,f__18569__auto__,my_session))
,(100));
} else {
callback.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj__18568__auto____$1 = pl;
var f__18569__auto____$1 = (function (){var obj20605 = obj__18568__auto____$1;
var k20606 = "format_answer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20605,k20606)){
return (obj20605[k20606]);
} else {
return null;
}
})();
return f__18569__auto____$1.call(obj__18568__auto____$1,ans);
})()),"\n"].join(''));

return klipse.lang.prolog.answer_STAR_.call(null,(cnt + (1)),(num_solutions + (1)),callback);

}
}
});})(obj__18568__auto__,f__18569__auto__,my_session))
);
});
klipse.lang.prolog.query = (function klipse$lang$prolog$query(exp,_){
var c = cljs.core.async.chan.call(null);
try{klipse.lang.prolog.init.call(null);

var vec__20609_20612 = klipse.lang.prolog.query_STAR_.call(null,exp);
var status_20613 = cljs.core.nth.call(null,vec__20609_20612,(0),null);
var res_20614 = cljs.core.nth.call(null,vec__20609_20612,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_20613)){
cljs.core.async.put_BANG_.call(null,c,res_20614);
} else {
klipse.lang.prolog.answer_STAR_.call(null,(0),(0),((function (vec__20609_20612,status_20613,res_20614,c){
return (function (p1__20607_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__20607_SHARP_);
});})(vec__20609_20612,status_20613,res_20614,c))
);
}
}catch (e20608){var o_20615 = e20608;
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_20615));
}
return c;
});
klipse.lang.prolog.rules_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"logtalk",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.prolog.consult,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://viebel.github.io/klipse/repo/js/tau-prolog.js","https://viebel.github.io/klipse/repo/js/codemirror-logtalk.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"%"], null);
klipse.lang.prolog.query_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"logtalk",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.prolog.query,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://viebel.github.io/klipse/repo/js/tau-prolog.js","https://viebel.github.io/klipse/repo/js/codemirror-logtalk.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"%"], null);
klipse.common.registry.register_mode.call(null,"prolog-rules","selector_prolog_rules",klipse.lang.prolog.rules_opts);
klipse.common.registry.register_mode.call(null,"prolog-query","selector_prolog_query",klipse.lang.prolog.query_opts);

//# sourceMappingURL=prolog.js.map
