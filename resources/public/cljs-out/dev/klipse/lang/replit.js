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
return (function (){var obj__18568__auto__ = repl;
var f__18569__auto__ = (function (){var obj24332 = obj__18568__auto__;
var k24333 = "evaluate";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24332,k24333)){
return (obj24332[k24333]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,exp,({"stdout": ((function (obj__18568__auto__,f__18569__auto__){
return (function (output){
return cljs.core.async.put_BANG_.call(null,c,output);
});})(obj__18568__auto__,f__18569__auto__))
}));
})().then((function (result){
if(cljs.core.empty_QMARK_.call(null,(function (){var obj24334 = result;
var k24335 = "error";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24334,k24335)){
return (obj24334[k24335]);
} else {
return null;
}
})())){
return cljs.core.async.put_BANG_.call(null,c,["Result: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj24338 = result;
var k24339 = "data";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24338,k24339)){
return (obj24338[k24339]);
} else {
return null;
}
})()),"\n"].join(''));
} else {
return cljs.core.async.put_BANG_.call(null,c,["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj24342 = result;
var k24343 = "error";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24342,k24343)){
return (obj24342[k24343]);
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
(function (){var obj__18568__auto__ = repl;
var f__18569__auto__ = (function (){var obj24344 = obj__18568__auto__;
var k24345 = "connect";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24344,k24345)){
return (obj24344[k24345]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__);
})().then(cljs.core.partial.call(null,klipse.lang.replit.evaluate,repl,c,exp));

return c;
});

//# sourceMappingURL=replit.js.map
