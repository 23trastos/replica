// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.python');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.python.builtin_read = (function klipse$lang$python$builtin_read(x){
if(((((function (){var obj26841 = Sk;
var k26842 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26841,k26842)){
return (obj26841[k26842]);
} else {
return null;
}
})() == null)) || ((((function (){var obj26845 = (function (){var obj26843 = Sk;
var k26844 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26843,k26844)){
return (obj26843[k26844]);
} else {
return null;
}
})();
var k26846 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26845,k26846)){
return (obj26845[k26846]);
} else {
return null;
}
})()[x]) == null)))){
throw ["File not found: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"'"].join('');
} else {
}

return ((function (){var obj26849 = (function (){var obj26847 = Sk;
var k26848 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26847,k26848)){
return (obj26847[k26848]);
} else {
return null;
}
})();
var k26850 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26849,k26850)){
return (obj26849[k26850]);
} else {
return null;
}
})()[x]);
});
klipse.lang.python.init = klipse.utils.runonce.call(null,(function (){
var obj26851 = Sk;
var obj26852 = (((!((obj26851 == null))))?obj26851:({}));
(obj26852["TurtleGraphics"] = ({}));

return obj26852;
}));
klipse.lang.python.str_eval_async = (function klipse$lang$python$str_eval_async(exp,p__26856){
var map__26857 = p__26856;
var map__26857__$1 = (((((!((map__26857 == null))))?(((((map__26857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26857):map__26857);
var container_id = cljs.core.get.call(null,map__26857__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
klipse.lang.python.init.call(null);

var c = cljs.core.async.chan.call(null);
var obj__18568__auto___26877 = Sk;
var f__18569__auto___26878 = (function (){var obj26859 = obj__18568__auto___26877;
var k26860 = "configure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26859,k26860)){
return (obj26859[k26860]);
} else {
return null;
}
})();
f__18569__auto___26878.call(obj__18568__auto___26877,({"output": ((function (obj__18568__auto___26877,f__18569__auto___26878,c,map__26857,map__26857__$1,container_id){
return (function (p1__26855_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__26855_SHARP_);
});})(obj__18568__auto___26877,f__18569__auto___26878,c,map__26857,map__26857__$1,container_id))
, "read": klipse.lang.python.builtin_read}));

(function (){var parent__18575__auto__ = (function (){var obj26861 = Sk;
var k26862 = "misceval";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26861,k26862)){
return (obj26861[k26862]);
} else {
return null;
}
})();
var f__18576__auto__ = (function (){var obj26863 = parent__18575__auto__;
var k26864 = "asyncToPromise";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26863,k26864)){
return (obj26863[k26864]);
} else {
return null;
}
})();
return f__18576__auto__.call(parent__18575__auto__,((function (parent__18575__auto__,f__18576__auto__,c,map__26857,map__26857__$1,container_id){
return (function (){
cljs.core.async.put_BANG_.call(null,c,"Output:\n");

var obj26865_26879 = Sk;
var obj26865_26880__$1 = (((!((obj26865_26879 == null))))?obj26865_26879:({}));
var inner_obj__18541__auto___26881 = (function (){var child26866 = (obj26865_26880__$1["TurtleGraphics"]);
if((!((child26866 == null)))){
return child26866;
} else {
var new_child__18513__auto__ = ({});
var obj26871_26882 = obj26865_26880__$1;
(obj26871_26882["TurtleGraphics"] = new_child__18513__auto__);


return new_child__18513__auto__;
}
})();
var obj26872_26883 = inner_obj__18541__auto___26881;
(obj26872_26883["target"] = container_id);



var obj__18568__auto__ = Sk;
var f__18569__auto__ = (function (){var obj26873 = obj__18568__auto__;
var k26874 = "importMainWithBody";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26873,k26874)){
return (obj26873[k26874]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,"<stdin>",false,exp,true);
});})(parent__18575__auto__,f__18576__auto__,c,map__26857,map__26857__$1,container_id))
);
})().then(((function (c,map__26857,map__26857__$1,container_id){
return (function (mod){
var obj__18568__auto__ = console;
var f__18569__auto__ = (function (){var obj26875 = obj__18568__auto__;
var k26876 = "info";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26875,k26876)){
return (obj26875[k26876]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,"success to eval skulpt: ");
});})(c,map__26857,map__26857__$1,container_id))
,((function (c,map__26857,map__26857__$1,container_id){
return (function (err){
return cljs.core.async.put_BANG_.call(null,c,["error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''));
});})(c,map__26857,map__26857__$1,container_id))
);

return c;
});
klipse.lang.python.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.python.str_eval_async,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python"),klipse.common.registry.scripts_src.call(null,"skulpt.min.js"),klipse.common.registry.scripts_src.call(null,"skulpt-stdlib.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"eval-python-client","selector_eval_python_client",klipse.lang.python.opts);

//# sourceMappingURL=python.js.map
