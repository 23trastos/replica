// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.oblivion');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.oblivion.render_STAR_ = (function klipse$lang$oblivion$render_STAR_(src,p__26762){
var map__26763 = p__26762;
var map__26763__$1 = (((((!((map__26763 == null))))?(((((map__26763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26763):map__26763);
var opts = map__26763__$1;
var container = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
try{var _ = goog.dom.setTextContent(container,"");
var vec__26766 = (function (){var obj__18568__auto__ = Oblivion;
var f__18569__auto__ = (function (){var obj26769 = obj__18568__auto__;
var k26770 = "Compile";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26769,k26770)){
return (obj26769[k26770]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,src,(2));
})();
var stdout = cljs.core.nth.call(null,vec__26766,(0),null);
var svgout = cljs.core.nth.call(null,vec__26766,(1),null);
if(typeof stdout === 'string'){
var obj26771_26775 = container;
var obj26772_26776 = (((!((obj26771_26775 == null))))?obj26771_26775:({}));
(obj26772_26776["innerHTML"] = svgout);


return stdout;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(stdout);
}
}catch (e26765){var e = e26765;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
}});
klipse.lang.oblivion.render = (function klipse$lang$oblivion$render(src,opts){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_26779){
var state_val_26780 = (state_26779[(1)]);
if((state_val_26780 === (1))){
var inst_26777 = klipse.lang.oblivion.render_STAR_.call(null,src,opts);
var state_26779__$1 = state_26779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26779__$1,inst_26777);
} else {
return null;
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$oblivion$render_$_state_machine__15944__auto__ = null;
var klipse$lang$oblivion$render_$_state_machine__15944__auto____0 = (function (){
var statearr_26781 = [null,null,null,null,null,null,null];
(statearr_26781[(0)] = klipse$lang$oblivion$render_$_state_machine__15944__auto__);

(statearr_26781[(1)] = (1));

return statearr_26781;
});
var klipse$lang$oblivion$render_$_state_machine__15944__auto____1 = (function (state_26779){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_26779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e26782){if((e26782 instanceof Object)){
var ex__15947__auto__ = e26782;
var statearr_26783_26785 = state_26779;
(statearr_26783_26785[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26786 = state_26779;
state_26779 = G__26786;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$oblivion$render_$_state_machine__15944__auto__ = function(state_26779){
switch(arguments.length){
case 0:
return klipse$lang$oblivion$render_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$oblivion$render_$_state_machine__15944__auto____1.call(this,state_26779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$oblivion$render_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$oblivion$render_$_state_machine__15944__auto____0;
klipse$lang$oblivion$render_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$oblivion$render_$_state_machine__15944__auto____1;
return klipse$lang$oblivion$render_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_26784 = f__16039__auto__.call(null);
(statearr_26784[(6)] = c__16038__auto__);

return statearr_26784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.oblivion.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.oblivion.render,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"Oblivion.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"oblivion","selector_oblivion",klipse.lang.oblivion.opts);

//# sourceMappingURL=oblivion.js.map
