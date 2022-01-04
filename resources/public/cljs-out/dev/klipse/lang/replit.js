// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.replit');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('applied_science.js_interop');
klipse.lang.replit.token = ({"msg_mac": "6GpVqi640U22dcEhfB5C58m0oqAWXuVZr+SQ4sBoTMQ=", "time_created": (1468951584000)});
klipse.lang.replit.init_repl_STAR_ = (function klipse$lang$replit$init_repl_STAR_(language){
return (new ReplitClient("api.repl.it",(80),language,klipse.lang.replit.token));
});
klipse.lang.replit.init_repl = cljs.core.memoize.call(null,klipse.lang.replit.init_repl_STAR_);
klipse.lang.replit.evaluate = (function klipse$lang$replit$evaluate(repl,c,exp){
return (function (){var obj__26008__auto__ = repl;
var f__26009__auto__ = (function (){var obj36981 = obj__26008__auto__;
var k36982 = "evaluate";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj36981,k36982)){
return (obj36981[k36982]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,exp,({"stdout": ((function (obj__26008__auto__,f__26009__auto__){
return (function (output){
return cljs.core.async.put_BANG_.call(null,c,output);
});})(obj__26008__auto__,f__26009__auto__))
}));
})().then((function (result){
if(cljs.core.empty_QMARK_.call(null,(function (){var obj36983 = result;
var k36984 = "error";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj36983,k36984)){
return (obj36983[k36984]);
} else {
return null;
}
})())){
return cljs.core.async.put_BANG_.call(null,c,["Result: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj36987 = result;
var k36988 = "data";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj36987,k36988)){
return (obj36987[k36988]);
} else {
return null;
}
})()),"\n"].join(''));
} else {
return cljs.core.async.put_BANG_.call(null,c,["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj36991 = result;
var k36992 = "error";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj36991,k36992)){
return (obj36991[k36992]);
} else {
return null;
}
})()),"\n"].join(''));
}
}),(function (error){
return cljs.core.async.put_BANG_.call(null,c,error);
}));
});
klipse.lang.replit.connect_and_evaluate = (function klipse$lang$replit$connect_and_evaluate(language,exp){
var c = cljs.core.async.chan.call(null);
var repl = klipse.lang.replit.init_repl.call(null,language);
(function (){var obj__26008__auto__ = repl;
var f__26009__auto__ = (function (){var obj36993 = obj__26008__auto__;
var k36994 = "connect";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj36993,k36994)){
return (obj36993[k36994]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__);
})().then(cljs.core.partial.call(null,klipse.lang.replit.evaluate,repl,c,exp));

return c;
});

//# sourceMappingURL=replit.js.map
