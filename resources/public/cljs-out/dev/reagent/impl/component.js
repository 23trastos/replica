// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('create_react_class');
goog.require('react');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component.global$module$create_react_class = goog.global["createReactClass"];
reagent.impl.component.global$module$react = goog.global["React"];
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys.call(null,o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__34556 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),(o[k]));
var G__34557 = (i + (1));
m = G__34556;
i = G__34557;
continue;
} else {
return m;
}
break;
}
});
reagent.impl.component.extract_props = (function reagent$impl$component$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.component.extract_children = (function reagent$impl$component$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_.call(null,p))))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.component.props_argv = (function reagent$impl$component$props_argv(c,p){
var temp__5722__auto__ = (p["argv"]);
if((temp__5722__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,reagent.impl.component.shallow_obj_to_map.call(null,p)], null);
} else {
var a = temp__5722__auto__;
return a;
}
});
reagent.impl.component.get_argv = (function reagent$impl$component$get_argv(c){
return reagent.impl.component.props_argv.call(null,c,(c["props"]));
});
reagent.impl.component.get_props = (function reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5722__auto__ = (p["argv"]);
if((temp__5722__auto__ == null)){
return reagent.impl.component.shallow_obj_to_map.call(null,p);
} else {
var v = temp__5722__auto__;
return reagent.impl.component.extract_props.call(null,v);
}
});
reagent.impl.component.get_children = (function reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5722__auto__ = (p["argv"]);
if((temp__5722__auto__ == null)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,reagent.impl.component.global$module$react.Children.toArray.call(null,(p["children"])));
} else {
var v = temp__5722__auto__;
return reagent.impl.component.extract_children.call(null,v);
}
});
reagent.impl.component.reagent_class_QMARK_ = (function reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && ((!(((function (){var G__34559 = c;
var G__34559__$1 = (((G__34559 == null))?null:G__34559.prototype);
if((G__34559__$1 == null)){
return null;
} else {
return (G__34559__$1["reagentRender"]);
}
})() == null)))));
});
reagent.impl.component.react_class_QMARK_ = (function reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && ((!(((function (){var G__34561 = c;
var G__34561__$1 = (((G__34561 == null))?null:G__34561.prototype);
if((G__34561__$1 == null)){
return null;
} else {
return (G__34561__$1["render"]);
}
})() == null)))));
});
reagent.impl.component.reagent_component_QMARK_ = (function reagent$impl$component$reagent_component_QMARK_(c){
return (!(((c["reagentRender"]) == null)));
});
reagent.impl.component.cached_react_class = (function reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.component.cache_react_class = (function reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if((!((sa == null)))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.call(null,null));
}
});
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.component !== 'undefined') && (typeof reagent.impl.component.as_element !== 'undefined')){
} else {
reagent.impl.component.as_element = null;
}
reagent.impl.component.wrap_render = (function reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = reagent.impl.component.get_argv.call(null,c);
var n = cljs.core.count.call(null,v);
var G__34562 = n;
switch (G__34562) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.call(null,v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)),cljs.core.nth.call(null,v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.call(null,v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return reagent.impl.component.as_element.call(null,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = ((reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (c,f,_,res){
return (function() { 
var G__34564__delegate = function (args){
return reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__34564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34565__i = 0, G__34565__a = new Array(arguments.length -  0);
while (G__34565__i < G__34565__a.length) {G__34565__a[G__34565__i] = arguments[G__34565__i + 0]; ++G__34565__i;}
  args = new cljs.core.IndexedSeq(G__34565__a,0,null);
} 
return G__34564__delegate.call(this,args);};
G__34564.cljs$lang$maxFixedArity = 0;
G__34564.cljs$lang$applyTo = (function (arglist__34566){
var args = cljs.core.seq(arglist__34566);
return G__34564__delegate(args);
});
G__34564.cljs$core$IFn$_invoke$arity$variadic = G__34564__delegate;
return G__34564;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__34567 = c;
c = G__34567;
continue;
} else {
return res;

}
}
break;
}
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR__orig_val__34568 = reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__34569 = c;
reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__34569;

try{var ok = [false];
try{var res = reagent.impl.component.wrap_render.call(null,c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Error rendering component",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))].join(''));
} else {
}
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__34568;
}});
reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function reagent$impl$component$render(){
var c = this;
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
reagent.impl.batching.mark_rendered.call(null,c);

if((rat == null)){
return reagent.ratom.run_in_reaction.call(null,((function (rat,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__34570 = key;
var G__34570__$1 = (((G__34570 instanceof cljs.core.Keyword))?G__34570.fqn:null);
switch (G__34570__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return ((function (G__34570,G__34570__$1){
return (function reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_.call(null,reagent.impl.component.state_atom.call(null,c),f.call(c,c));
});
;})(G__34570,G__34570__$1))

break;
case "componentWillReceiveProps":
return ((function (G__34570,G__34570__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__34570,G__34570__$1))

break;
case "shouldComponentUpdate":
return ((function (G__34570,G__34570__$1){
return (function reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__4131__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(or__4131__auto__){
return or__4131__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
var or__4131__auto____$1 = noargv;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
try{return cljs.core.not_EQ_.call(null,old_argv,new_argv);
}catch (e34574){var e = e34574;
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}}
} else {
if(noargv){
return f.call(c,c,reagent.impl.component.get_argv.call(null,c),reagent.impl.component.props_argv.call(null,c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__34570,G__34570__$1))

break;
case "componentWillUpdate":
return ((function (G__34570,G__34570__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__34570,G__34570__$1))

break;
case "componentDidUpdate":
return ((function (G__34570,G__34570__$1){
return (function reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,oldprops));
});
;})(G__34570,G__34570__$1))

break;
case "componentWillMount":
return ((function (G__34570,G__34570__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count.call(null));

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__34570,G__34570__$1))

break;
case "componentDidMount":
return ((function (G__34570,G__34570__$1){
return (function reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
;})(G__34570,G__34570__$1))

break;
case "componentWillUnmount":
return ((function (G__34570,G__34570__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__34575_34577 = (c["cljsRatom"]);
if((G__34575_34577 == null)){
} else {
reagent.ratom.dispose_BANG_.call(null,G__34575_34577);
}

reagent.impl.batching.mark_rendered.call(null,c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__34570,G__34570__$1))

break;
case "componentDidCatch":
return ((function (G__34570,G__34570__$1){
return (function reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});
;})(G__34570,G__34570__$1))

break;
default:
return null;

}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
var wrap = reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__4120__auto__ = wrap;
if(cljs.core.truth_(and__4120__auto__)){
return f;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__4131__auto__ = wrap;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return f;
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.call(null,reagent.impl.component.obligatory,fun_map);
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
var renders_34579 = cljs.core.select_keys.call(null,fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_34580 = cljs.core.first.call(null,cljs.core.vals.call(null,renders_34579));
if((cljs.core.count.call(null,renders_34579) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count.call(null,renders_34579))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,render_fun_34580)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,render_fun_34580)].join(''),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__4131__auto__ = render_fun;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reagent.impl.util.fun_name.call(null,render_fun__$1);
}
})());
var name__$1 = (function (){var G__34578 = name;
switch (G__34578) {
case "":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent"));

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv.call(null,((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,reagent.impl.component.get_wrapper.call(null,k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.call(null,fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns));
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__34582 = o;
(G__34582[cljs.core.name.call(null,k)] = v);

return G__34582;
}),({}),m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js.call(null,reagent.impl.component.wrap_funs.call(null,reagent.impl.component.add_obligatory.call(null,reagent.impl.component.camelify_map_keys.call(null,body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_.call(null,body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

return reagent.impl.component.global$module$create_react_class.call(null,reagent.impl.component.cljsify.call(null,body));
});
reagent.impl.component.fiber_component_path = (function reagent$impl$component$fiber_component_path(fiber){
var name = (function (){var G__34583 = fiber;
var G__34583__$1 = (((G__34583 == null))?null:(G__34583["type"]));
if((G__34583__$1 == null)){
return null;
} else {
return (G__34583__$1["displayName"]);
}
})();
var parent = (function (){var G__34584 = fiber;
if((G__34584 == null)){
return null;
} else {
return (G__34584["return"]);
}
})();
var path = (function (){var G__34585 = parent;
var G__34585__$1 = (((G__34585 == null))?null:reagent.impl.component.fiber_component_path.call(null,G__34585));
if((G__34585__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34585__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
reagent.impl.component.component_path = (function reagent$impl$component$component_path(c){
var temp__5718__auto__ = (function (){var or__4131__auto__ = (function (){var G__34587 = c;
if((G__34587 == null)){
return null;
} else {
return (G__34587["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__34588 = c;
if((G__34588 == null)){
return null;
} else {
return G__34588._reactInternalFiber;
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var fiber = temp__5718__auto__;
return reagent.impl.component.fiber_component_path.call(null,fiber);
} else {
var instance = (function (){var or__4131__auto__ = (function (){var G__34590 = c;
if((G__34590 == null)){
return null;
} else {
return (G__34590["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var G__34592 = c;
if((G__34592 == null)){
return null;
} else {
return G__34592._reactInternalInstance;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return c;
}
}
})();
var elem = (function (){var or__4131__auto__ = (function (){var G__34594 = instance;
if((G__34594 == null)){
return null;
} else {
return (G__34594["_currentElement"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__34595 = instance;
if((G__34595 == null)){
return null;
} else {
return G__34595._currentElement;
}
}
})();
var name = (function (){var G__34596 = elem;
var G__34596__$1 = (((G__34596 == null))?null:(G__34596["type"]));
if((G__34596__$1 == null)){
return null;
} else {
return (G__34596__$1["displayName"]);
}
})();
var owner = (function (){var or__4131__auto__ = (function (){var G__34598 = elem;
if((G__34598 == null)){
return null;
} else {
return (G__34598["_owner"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__34599 = elem;
if((G__34599 == null)){
return null;
} else {
return G__34599._owner;
}
}
})();
var path = (function (){var G__34600 = owner;
var G__34600__$1 = (((G__34600 == null))?null:reagent.impl.component.component_path.call(null,G__34600));
if((G__34600__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34600__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var c = reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__4131__auto__ = reagent.impl.component.component_path.call(null,c);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__34601 = c;
var G__34601__$1 = (((G__34601 == null))?null:G__34601.constructor);
if((G__34601__$1 == null)){
return null;
} else {
return reagent.impl.util.fun_name.call(null,G__34601__$1);
}
}
})();
if((!(cljs.core.empty_QMARK_.call(null,n)))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
reagent.impl.component.fn_to_class = (function reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}

if((!((!(((reagent.impl.component.react_class_QMARK_.call(null,f)) && ((!(reagent.impl.component.reagent_class_QMARK_.call(null,f)))))))))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = reagent.impl.util.fun_name.call(null,f);
if(cljs.core.empty_QMARK_.call(null,n)){
return f;
} else {
return n;
}
})()),reagent.impl.component.comp_name.call(null)].join(''));
} else {
}
} else {
}

if(reagent.impl.component.reagent_class_QMARK_.call(null,f)){
return reagent.impl.component.cache_react_class.call(null,f,f);
} else {
var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = reagent.impl.component.create_class.call(null,withrender);
return reagent.impl.component.cache_react_class.call(null,f,res);
}
});
reagent.impl.component.as_class = (function reagent$impl$component$as_class(tag){
var temp__5722__auto__ = reagent.impl.component.cached_react_class.call(null,tag);
if((temp__5722__auto__ == null)){
return reagent.impl.component.fn_to_class.call(null,tag);
} else {
var cached_class = temp__5722__auto__;
return cached_class;
}
});
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
if(reagent.impl.component.react_class_QMARK_.call(null,comp)){
return comp;
} else {
return reagent.impl.component.as_class.call(null,comp);
}
});

//# sourceMappingURL=component.js.map
