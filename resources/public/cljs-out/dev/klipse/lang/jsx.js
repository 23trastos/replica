// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.jsx');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.jsx.babel = (function klipse$lang$jsx$babel(src){
return ((function (){var obj__26008__auto__ = Babel;
var f__26009__auto__ = (function (){var obj35079 = obj__26008__auto__;
var k35080 = "transform";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj35079,k35080)){
return (obj35079[k35080]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,src,({"presets": ["react"]}));
})()["code"]);
});
klipse.lang.jsx.eval_jsx = (function klipse$lang$jsx$eval_jsx(exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_35091){
var state_val_35092 = (state_35091[(1)]);
if((state_val_35092 === (1))){
var state_35091__$1 = state_35091;
var statearr_35093_35101 = state_35091__$1;
(statearr_35093_35101[(2)] = null);

(statearr_35093_35101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (2))){
var inst_35089 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35091__$1,inst_35089);
} else {
if((state_val_35092 === (3))){
var inst_35081 = (state_35091[(2)]);
var inst_35082 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35081);
var state_35091__$1 = state_35091;
var statearr_35094_35102 = state_35091__$1;
(statearr_35094_35102[(2)] = inst_35082);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35091__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35091,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_35086 = klipse.lang.jsx.babel.call(null,exp);
var inst_35087 = klipse.utils.eval_in_global_scope.call(null,inst_35086);
var state_35091__$1 = (function (){var statearr_35095 = state_35091;
(statearr_35095[(7)] = inst_35087);

return statearr_35095;
})();
var statearr_35096_35103 = state_35091__$1;
(statearr_35096_35103[(2)] = "//Evaluation done");


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35091__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$jsx$eval_jsx_$_state_machine__21022__auto__ = null;
var klipse$lang$jsx$eval_jsx_$_state_machine__21022__auto____0 = (function (){
var statearr_35097 = [null,null,null,null,null,null,null,null];
(statearr_35097[(0)] = klipse$lang$jsx$eval_jsx_$_state_machine__21022__auto__);

(statearr_35097[(1)] = (1));

return statearr_35097;
});
var klipse$lang$jsx$eval_jsx_$_state_machine__21022__auto____1 = (function (state_35091){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_35091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e35098){if((e35098 instanceof Object)){
var ex__21025__auto__ = e35098;
var statearr_35099_35104 = state_35091;
(statearr_35099_35104[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35105 = state_35091;
state_35091 = G__35105;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$jsx$eval_jsx_$_state_machine__21022__auto__ = function(state_35091){
switch(arguments.length){
case 0:
return klipse$lang$jsx$eval_jsx_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$jsx$eval_jsx_$_state_machine__21022__auto____1.call(this,state_35091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$eval_jsx_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$eval_jsx_$_state_machine__21022__auto____0;
klipse$lang$jsx$eval_jsx_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$eval_jsx_$_state_machine__21022__auto____1;
return klipse$lang$jsx$eval_jsx_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_35100 = f__21189__auto__.call(null);
(statearr_35100[(6)] = c__21188__auto__);

return statearr_35100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.jsx.render_jsx_STAR_ = (function klipse$lang$jsx$render_jsx_STAR_(exp,p__35106){
var map__35107 = p__35106;
var map__35107__$1 = (((((!((map__35107 == null))))?(((((map__35107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35107):map__35107);
var container_id = cljs.core.get.call(null,map__35107__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{klipse.lang.jsx.babel.call(null,exp);

var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-jsx - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,klipse.lang.jsx.babel.call(null,wrapped_exp));
}catch (e35109){var e = e35109;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_jsx = (function klipse$lang$jsx$render_jsx(exp,opts){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_35112){
var state_val_35113 = (state_35112[(1)]);
if((state_val_35113 === (1))){
var inst_35110 = klipse.lang.jsx.render_jsx_STAR_.call(null,exp,opts);
var state_35112__$1 = state_35112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35112__$1,inst_35110);
} else {
return null;
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$jsx$render_jsx_$_state_machine__21022__auto__ = null;
var klipse$lang$jsx$render_jsx_$_state_machine__21022__auto____0 = (function (){
var statearr_35114 = [null,null,null,null,null,null,null];
(statearr_35114[(0)] = klipse$lang$jsx$render_jsx_$_state_machine__21022__auto__);

(statearr_35114[(1)] = (1));

return statearr_35114;
});
var klipse$lang$jsx$render_jsx_$_state_machine__21022__auto____1 = (function (state_35112){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_35112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e35115){if((e35115 instanceof Object)){
var ex__21025__auto__ = e35115;
var statearr_35116_35118 = state_35112;
(statearr_35116_35118[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35119 = state_35112;
state_35112 = G__35119;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$jsx$render_jsx_$_state_machine__21022__auto__ = function(state_35112){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_jsx_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_jsx_$_state_machine__21022__auto____1.call(this,state_35112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_jsx_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_jsx_$_state_machine__21022__auto____0;
klipse$lang$jsx$render_jsx_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_jsx_$_state_machine__21022__auto____1;
return klipse$lang$jsx$render_jsx_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_35117 = f__21189__auto__.call(null);
(statearr_35117[(6)] = c__21188__auto__);

return statearr_35117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.jsx.render_react_STAR_ = (function klipse$lang$jsx$render_react_STAR_(exp,p__35120){
var map__35121 = p__35120;
var map__35121__$1 = (((((!((map__35121 == null))))?(((((map__35121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35121):map__35121);
var container_id = cljs.core.get.call(null,map__35121__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-react - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,wrapped_exp);
}catch (e35123){var e = e35123;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_react = (function klipse$lang$jsx$render_react(exp,opts){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_35126){
var state_val_35127 = (state_35126[(1)]);
if((state_val_35127 === (1))){
var inst_35124 = klipse.lang.jsx.render_react_STAR_.call(null,exp,opts);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35126__$1,inst_35124);
} else {
return null;
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$jsx$render_react_$_state_machine__21022__auto__ = null;
var klipse$lang$jsx$render_react_$_state_machine__21022__auto____0 = (function (){
var statearr_35128 = [null,null,null,null,null,null,null];
(statearr_35128[(0)] = klipse$lang$jsx$render_react_$_state_machine__21022__auto__);

(statearr_35128[(1)] = (1));

return statearr_35128;
});
var klipse$lang$jsx$render_react_$_state_machine__21022__auto____1 = (function (state_35126){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_35126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e35129){if((e35129 instanceof Object)){
var ex__21025__auto__ = e35129;
var statearr_35130_35132 = state_35126;
(statearr_35130_35132[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35133 = state_35126;
state_35126 = G__35133;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$jsx$render_react_$_state_machine__21022__auto__ = function(state_35126){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_react_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_react_$_state_machine__21022__auto____1.call(this,state_35126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_react_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_react_$_state_machine__21022__auto____0;
klipse$lang$jsx$render_react_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_react_$_state_machine__21022__auto____1;
return klipse$lang$jsx$render_react_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_35131 = f__21189__auto__.call(null);
(statearr_35131[(6)] = c__21188__auto__);

return statearr_35131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.jsx.transpile_jsx = (function klipse$lang$jsx$transpile_jsx(exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_35143){
var state_val_35144 = (state_35143[(1)]);
if((state_val_35144 === (1))){
var state_35143__$1 = state_35143;
var statearr_35145_35152 = state_35143__$1;
(statearr_35145_35152[(2)] = null);

(statearr_35145_35152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (2))){
var inst_35141 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35143__$1,inst_35141);
} else {
if((state_val_35144 === (3))){
var inst_35134 = (state_35143[(2)]);
var inst_35135 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35134);
var state_35143__$1 = state_35143;
var statearr_35146_35153 = state_35143__$1;
(statearr_35146_35153[(2)] = inst_35135);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35143__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35143,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_35139 = klipse.lang.jsx.babel.call(null,exp);
var state_35143__$1 = state_35143;
var statearr_35147_35154 = state_35143__$1;
(statearr_35147_35154[(2)] = inst_35139);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35143__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$jsx$transpile_jsx_$_state_machine__21022__auto__ = null;
var klipse$lang$jsx$transpile_jsx_$_state_machine__21022__auto____0 = (function (){
var statearr_35148 = [null,null,null,null,null,null,null];
(statearr_35148[(0)] = klipse$lang$jsx$transpile_jsx_$_state_machine__21022__auto__);

(statearr_35148[(1)] = (1));

return statearr_35148;
});
var klipse$lang$jsx$transpile_jsx_$_state_machine__21022__auto____1 = (function (state_35143){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_35143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e35149){if((e35149 instanceof Object)){
var ex__21025__auto__ = e35149;
var statearr_35150_35155 = state_35143;
(statearr_35150_35155[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35156 = state_35143;
state_35143 = G__35156;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$jsx$transpile_jsx_$_state_machine__21022__auto__ = function(state_35143){
switch(arguments.length){
case 0:
return klipse$lang$jsx$transpile_jsx_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$jsx$transpile_jsx_$_state_machine__21022__auto____1.call(this,state_35143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$transpile_jsx_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$transpile_jsx_$_state_machine__21022__auto____0;
klipse$lang$jsx$transpile_jsx_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$transpile_jsx_$_state_machine__21022__auto____1;
return klipse$lang$jsx$transpile_jsx_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_35151 = f__21189__auto__.call(null);
(statearr_35151[(6)] = c__21188__auto__);

return statearr_35151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.jsx.eval_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.eval_jsx,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.transpile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.transpile_jsx,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.render_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.render_jsx,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.render_react_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.render_react,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-jsx","selector_jsx",klipse.lang.jsx.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-jsx","selector_transpile_jsx",klipse.lang.jsx.transpile_opts);
klipse.common.registry.register_mode.call(null,"render-jsx","selector_render_jsx",klipse.lang.jsx.render_opts);
klipse.common.registry.register_mode.call(null,"render-react","selector_react",klipse.lang.jsx.render_react_opts);

//# sourceMappingURL=jsx.js.map
