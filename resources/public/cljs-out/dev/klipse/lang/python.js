// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.python');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.python.builtin_read = (function klipse$lang$python$builtin_read(x){
if(((((function (){var obj41932 = Sk;
var k41933 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41932,k41933)){
return (obj41932[k41933]);
} else {
return null;
}
})() == null)) || ((((function (){var obj41936 = (function (){var obj41934 = Sk;
var k41935 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41934,k41935)){
return (obj41934[k41935]);
} else {
return null;
}
})();
var k41937 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41936,k41937)){
return (obj41936[k41937]);
} else {
return null;
}
})()[x]) == null)))){
throw ["File not found: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"'"].join('');
} else {
}

return ((function (){var obj41940 = (function (){var obj41938 = Sk;
var k41939 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41938,k41939)){
return (obj41938[k41939]);
} else {
return null;
}
})();
var k41941 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41940,k41941)){
return (obj41940[k41941]);
} else {
return null;
}
})()[x]);
});
klipse.lang.python.init = klipse.utils.runonce.call(null,(function (){
var obj41942 = Sk;
var obj41943 = (((!((obj41942 == null))))?obj41942:({}));
(obj41943["TurtleGraphics"] = ({}));

return obj41943;
}));
klipse.lang.python.str_eval_async = (function klipse$lang$python$str_eval_async(exp,p__41947){
var map__41948 = p__41947;
var map__41948__$1 = (((((!((map__41948 == null))))?(((((map__41948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41948):map__41948);
var container_id = cljs.core.get.call(null,map__41948__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
klipse.lang.python.init.call(null);

var c = cljs.core.async.chan.call(null);
var obj__26008__auto___41968 = Sk;
var f__26009__auto___41969 = (function (){var obj41950 = obj__26008__auto___41968;
var k41951 = "configure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41950,k41951)){
return (obj41950[k41951]);
} else {
return null;
}
})();
f__26009__auto___41969.call(obj__26008__auto___41968,({"output": ((function (obj__26008__auto___41968,f__26009__auto___41969,c,map__41948,map__41948__$1,container_id){
return (function (p1__41946_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__41946_SHARP_);
});})(obj__26008__auto___41968,f__26009__auto___41969,c,map__41948,map__41948__$1,container_id))
, "read": klipse.lang.python.builtin_read}));

(function (){var parent__26015__auto__ = (function (){var obj41952 = Sk;
var k41953 = "misceval";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41952,k41953)){
return (obj41952[k41953]);
} else {
return null;
}
})();
var f__26016__auto__ = (function (){var obj41954 = parent__26015__auto__;
var k41955 = "asyncToPromise";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41954,k41955)){
return (obj41954[k41955]);
} else {
return null;
}
})();
return f__26016__auto__.call(parent__26015__auto__,((function (parent__26015__auto__,f__26016__auto__,c,map__41948,map__41948__$1,container_id){
return (function (){
cljs.core.async.put_BANG_.call(null,c,"Output:\n");

var obj41956_41970 = Sk;
var obj41956_41971__$1 = (((!((obj41956_41970 == null))))?obj41956_41970:({}));
var inner_obj__25981__auto___41972 = (function (){var child41957 = (obj41956_41971__$1["TurtleGraphics"]);
if((!((child41957 == null)))){
return child41957;
} else {
var new_child__25953__auto__ = ({});
var obj41962_41973 = obj41956_41971__$1;
(obj41962_41973["TurtleGraphics"] = new_child__25953__auto__);


return new_child__25953__auto__;
}
})();
var obj41963_41974 = inner_obj__25981__auto___41972;
(obj41963_41974["target"] = container_id);



var obj__26008__auto__ = Sk;
var f__26009__auto__ = (function (){var obj41964 = obj__26008__auto__;
var k41965 = "importMainWithBody";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41964,k41965)){
return (obj41964[k41965]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,"<stdin>",false,exp,true);
});})(parent__26015__auto__,f__26016__auto__,c,map__41948,map__41948__$1,container_id))
);
})().then(((function (c,map__41948,map__41948__$1,container_id){
return (function (mod){
var obj__26008__auto__ = console;
var f__26009__auto__ = (function (){var obj41966 = obj__26008__auto__;
var k41967 = "info";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41966,k41967)){
return (obj41966[k41967]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,"success to eval skulpt: ");
});})(c,map__41948,map__41948__$1,container_id))
,((function (c,map__41948,map__41948__$1,container_id){
return (function (err){
return cljs.core.async.put_BANG_.call(null,c,["error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''));
});})(c,map__41948,map__41948__$1,container_id))
);

return c;
});
klipse.lang.python.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.python.str_eval_async,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python"),klipse.common.registry.scripts_src.call(null,"skulpt.min.js"),klipse.common.registry.scripts_src.call(null,"skulpt-stdlib.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"eval-python-client","selector_eval_python_client",klipse.lang.python.opts);

//# sourceMappingURL=python.js.map
