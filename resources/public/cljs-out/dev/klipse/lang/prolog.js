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
return cljs.core.reset_BANG_.call(null,klipse.lang.prolog.session,(function (){var obj__26008__auto__ = pl;
var f__26009__auto__ = (function (){var obj29555 = obj__26008__auto__;
var k29556 = "create";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29555,k29556)){
return (obj29555[k29556]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__);
})());
} else {
return null;
}
});
klipse.lang.prolog.consult_STAR_ = (function klipse$lang$prolog$consult_STAR_(exp){
var my_session = cljs.core.deref.call(null,klipse.lang.prolog.session);
var res = (function (){var obj__26008__auto__ = my_session;
var f__26009__auto__ = (function (){var obj29557 = obj__26008__auto__;
var k29558 = "consult";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29557,k29558)){
return (obj29557[k29558]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,exp);
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

var vec__29560_29563 = klipse.lang.prolog.consult_STAR_.call(null,exp);
var status_29564 = cljs.core.nth.call(null,vec__29560_29563,(0),null);
var res_29565 = cljs.core.nth.call(null,vec__29560_29563,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_29564)){
cljs.core.async.put_BANG_.call(null,c,res_29565);
} else {
cljs.core.async.put_BANG_.call(null,c,"Rules are valid.");
}
}catch (e29559){var o_29566 = e29559;
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_29566));
}
return c;
});
klipse.lang.prolog.query_STAR_ = (function klipse$lang$prolog$query_STAR_(exp){
var my_session = cljs.core.deref.call(null,klipse.lang.prolog.session);
var res = (function (){var obj__26008__auto__ = my_session;
var f__26009__auto__ = (function (){var obj29567 = obj__26008__auto__;
var k29568 = "query";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29567,k29568)){
return (obj29567[k29568]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,exp);
})();
if(cljs.core._EQ_.call(null,true,res)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),true], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)], null);
}
});
klipse.lang.prolog.answer_STAR_ = (function klipse$lang$prolog$answer_STAR_(cnt,num_solutions,callback){
var my_session = cljs.core.deref.call(null,klipse.lang.prolog.session);
var obj__26008__auto__ = my_session;
var f__26009__auto__ = (function (){var obj29569 = obj__26008__auto__;
var k29570 = "answer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29569,k29570)){
return (obj29569[k29570]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,((function (obj__26008__auto__,f__26009__auto__,my_session){
return (function (ans){
var G__29571 = ans;
if(cljs.core._EQ_.call(null,false,G__29571)){
if((num_solutions === (0))){
return callback.call(null,"No solutions.");
} else {
return callback.call(null,["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_solutions)," solutions."].join(''));
}
} else {
if(cljs.core._EQ_.call(null,null,G__29571)){
return setTimeout(((function (G__29571,obj__26008__auto__,f__26009__auto__,my_session){
return (function (){
callback.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_solutions)," solutions after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cnt + (1)) * (1000)))," tries. Continuing to try...\n"].join(''),new cljs.core.Keyword(null,"remove-previous-results","remove-previous-results",883218005),true], null));

return klipse.lang.prolog.answer_STAR_.call(null,(cnt + (1)),num_solutions,callback);
});})(G__29571,obj__26008__auto__,f__26009__auto__,my_session))
,(100));
} else {
callback.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj__26008__auto____$1 = pl;
var f__26009__auto____$1 = (function (){var obj29574 = obj__26008__auto____$1;
var k29575 = "format_answer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29574,k29575)){
return (obj29574[k29575]);
} else {
return null;
}
})();
return f__26009__auto____$1.call(obj__26008__auto____$1,ans);
})()),"\n"].join(''));

return klipse.lang.prolog.answer_STAR_.call(null,(cnt + (1)),(num_solutions + (1)),callback);

}
}
});})(obj__26008__auto__,f__26009__auto__,my_session))
);
});
klipse.lang.prolog.query = (function klipse$lang$prolog$query(exp,_){
var c = cljs.core.async.chan.call(null);
try{klipse.lang.prolog.init.call(null);

var vec__29578_29581 = klipse.lang.prolog.query_STAR_.call(null,exp);
var status_29582 = cljs.core.nth.call(null,vec__29578_29581,(0),null);
var res_29583 = cljs.core.nth.call(null,vec__29578_29581,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_29582)){
cljs.core.async.put_BANG_.call(null,c,res_29583);
} else {
klipse.lang.prolog.answer_STAR_.call(null,(0),(0),((function (vec__29578_29581,status_29582,res_29583,c){
return (function (p1__29576_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__29576_SHARP_);
});})(vec__29578_29581,status_29582,res_29583,c))
);
}
}catch (e29577){var o_29584 = e29577;
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_29584));
}
return c;
});
klipse.lang.prolog.rules_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"logtalk",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.prolog.consult,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://viebel.github.io/klipse/repo/js/tau-prolog.js","https://viebel.github.io/klipse/repo/js/codemirror-logtalk.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"%"], null);
klipse.lang.prolog.query_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"logtalk",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.prolog.query,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://viebel.github.io/klipse/repo/js/tau-prolog.js","https://viebel.github.io/klipse/repo/js/codemirror-logtalk.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"%"], null);
klipse.common.registry.register_mode.call(null,"prolog-rules","selector_prolog_rules",klipse.lang.prolog.rules_opts);
klipse.common.registry.register_mode.call(null,"prolog-query","selector_prolog_query",klipse.lang.prolog.query_opts);

//# sourceMappingURL=prolog.js.map
