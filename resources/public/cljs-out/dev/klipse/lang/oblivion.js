// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.oblivion');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.oblivion.render_STAR_ = (function klipse$lang$oblivion$render_STAR_(src,p__41758){
var map__41759 = p__41758;
var map__41759__$1 = (((((!((map__41759 == null))))?(((((map__41759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41759):map__41759);
var opts = map__41759__$1;
var container = cljs.core.get.call(null,map__41759__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
try{var _ = goog.dom.setTextContent(container,"");
var vec__41762 = (function (){var obj__26008__auto__ = Oblivion;
var f__26009__auto__ = (function (){var obj41765 = obj__26008__auto__;
var k41766 = "Compile";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj41765,k41766)){
return (obj41765[k41766]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,src,(2));
})();
var stdout = cljs.core.nth.call(null,vec__41762,(0),null);
var svgout = cljs.core.nth.call(null,vec__41762,(1),null);
if(typeof stdout === 'string'){
var obj41767_41771 = container;
var obj41768_41772 = (((!((obj41767_41771 == null))))?obj41767_41771:({}));
(obj41768_41772["innerHTML"] = svgout);


return stdout;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(stdout);
}
}catch (e41761){var e = e41761;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
}});
klipse.lang.oblivion.render = (function klipse$lang$oblivion$render(src,opts){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_41775){
var state_val_41776 = (state_41775[(1)]);
if((state_val_41776 === (1))){
var inst_41773 = klipse.lang.oblivion.render_STAR_.call(null,src,opts);
var state_41775__$1 = state_41775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41775__$1,inst_41773);
} else {
return null;
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$oblivion$render_$_state_machine__21022__auto__ = null;
var klipse$lang$oblivion$render_$_state_machine__21022__auto____0 = (function (){
var statearr_41777 = [null,null,null,null,null,null,null];
(statearr_41777[(0)] = klipse$lang$oblivion$render_$_state_machine__21022__auto__);

(statearr_41777[(1)] = (1));

return statearr_41777;
});
var klipse$lang$oblivion$render_$_state_machine__21022__auto____1 = (function (state_41775){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_41775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e41778){if((e41778 instanceof Object)){
var ex__21025__auto__ = e41778;
var statearr_41779_41781 = state_41775;
(statearr_41779_41781[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41782 = state_41775;
state_41775 = G__41782;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$oblivion$render_$_state_machine__21022__auto__ = function(state_41775){
switch(arguments.length){
case 0:
return klipse$lang$oblivion$render_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$oblivion$render_$_state_machine__21022__auto____1.call(this,state_41775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$oblivion$render_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$oblivion$render_$_state_machine__21022__auto____0;
klipse$lang$oblivion$render_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$oblivion$render_$_state_machine__21022__auto____1;
return klipse$lang$oblivion$render_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_41780 = f__21189__auto__.call(null);
(statearr_41780[(6)] = c__21188__auto__);

return statearr_41780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.oblivion.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.oblivion.render,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"Oblivion.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"oblivion","selector_oblivion",klipse.lang.oblivion.opts);

//# sourceMappingURL=oblivion.js.map
