// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.brainfuck');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.brainfuck.boldify_head = (function klipse$lang$brainfuck$boldify_head(data,head){
var head_value = ["<strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,data,head)),"</strong>"].join('');
return cljs.core.assoc.call(null,data,head,head_value);
});
klipse.lang.brainfuck.to_html = (function klipse$lang$brainfuck$to_html(p__24395){
var map__24396 = p__24395;
var map__24396__$1 = (((((!((map__24396 == null))))?(((((map__24396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24396):map__24396);
var output = cljs.core.get.call(null,map__24396__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var data = cljs.core.get.call(null,map__24396__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pointer = cljs.core.get.call(null,map__24396__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var text = cljs.core.get.call(null,map__24396__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return ["<table>",((cljs.core.seq.call(null,output))?["<tr>\n           <td>Output</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",output)),"</td>\n         </tr>"].join(''):null),"<tr>\n           <td>Data</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",klipse.lang.brainfuck.boldify_head.call(null,data,pointer))),"</td>\n         </tr>\n         <tr>\n           <td>Head</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pointer),"</td>\n           </tr>",((cljs.core.seq.call(null,output))?["<tr>\n           <td>Text</td><td> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</td>\n         </tr>"].join(''):null),"</table>"].join('');
});
klipse.lang.brainfuck.bf = (function klipse$lang$brainfuck$bf(x){
try{var input = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/\[in:\s*(.*)\]/),clojure.string.split_lines.call(null,x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),klipse.lang.brainfuck.to_html.call(null,cljs.core.js__GT_clj.call(null,(function (){var obj__18568__auto__ = window;
var f__18569__auto__ = (function (){var obj24399 = obj__18568__auto__;
var k24400 = "brainfuck";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24399,k24400)){
return (obj24399[k24400]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,x,input);
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))], null);
}catch (e24398){var o = e24398;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.brainfuck.bf_txt = (function klipse$lang$brainfuck$bf_txt(x){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj__18568__auto__ = brainfuck;
var f__18569__auto__ = (function (){var obj24402 = obj__18568__auto__;
var k24403 = "text";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24402,k24403)){
return (obj24402[k24403]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,x);
})()], null);
}catch (e24401){var o = e24401;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.brainfuck.eval_brainfuck = (function klipse$lang$brainfuck$eval_brainfuck(exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_24411){
var state_val_24412 = (state_24411[(1)]);
if((state_val_24412 === (1))){
var inst_24407 = klipse.lang.brainfuck.bf.call(null,exp);
var inst_24408 = cljs.core.nth.call(null,inst_24407,(0),null);
var inst_24409 = cljs.core.nth.call(null,inst_24407,(1),null);
var state_24411__$1 = (function (){var statearr_24413 = state_24411;
(statearr_24413[(7)] = inst_24408);

return statearr_24413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24411__$1,inst_24409);
} else {
return null;
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15944__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15944__auto____0 = (function (){
var statearr_24414 = [null,null,null,null,null,null,null,null];
(statearr_24414[(0)] = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15944__auto__);

(statearr_24414[(1)] = (1));

return statearr_24414;
});
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15944__auto____1 = (function (state_24411){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_24411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e24415){if((e24415 instanceof Object)){
var ex__15947__auto__ = e24415;
var statearr_24416_24418 = state_24411;
(statearr_24416_24418[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24419 = state_24411;
state_24411 = G__24419;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15944__auto__ = function(state_24411){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15944__auto____1.call(this,state_24411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15944__auto____0;
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15944__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_24417 = f__16039__auto__.call(null);
(statearr_24417[(6)] = c__16038__auto__);

return statearr_24417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.brainfuck.eval_brainfuck_txt = (function klipse$lang$brainfuck$eval_brainfuck_txt(exp,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_24427){
var state_val_24428 = (state_24427[(1)]);
if((state_val_24428 === (1))){
var inst_24423 = klipse.lang.brainfuck.bf_txt.call(null,exp);
var inst_24424 = cljs.core.nth.call(null,inst_24423,(0),null);
var inst_24425 = cljs.core.nth.call(null,inst_24423,(1),null);
var state_24427__$1 = (function (){var statearr_24429 = state_24427;
(statearr_24429[(7)] = inst_24424);

return statearr_24429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24427__$1,inst_24425);
} else {
return null;
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15944__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15944__auto____0 = (function (){
var statearr_24430 = [null,null,null,null,null,null,null,null];
(statearr_24430[(0)] = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15944__auto__);

(statearr_24430[(1)] = (1));

return statearr_24430;
});
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15944__auto____1 = (function (state_24427){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_24427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e24431){if((e24431 instanceof Object)){
var ex__15947__auto__ = e24431;
var statearr_24432_24434 = state_24427;
(statearr_24432_24434[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24435 = state_24427;
state_24427 = G__24435;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15944__auto__ = function(state_24427){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15944__auto____1.call(this,state_24427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15944__auto____0;
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15944__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_24433 = f__16039__auto__.call(null);
(statearr_24433[(6)] = c__16038__auto__);

return statearr_24433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.brainfuck.eval_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-brainfuck",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.brainfuck.eval_brainfuck,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"brainfuck"),klipse.common.registry.scripts_src.call(null,"brainfuck.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),""], null);
klipse.lang.brainfuck.eval_txt_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-brainfuck",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.brainfuck.eval_brainfuck_txt,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"brainfuck"),klipse.common.registry.scripts_src.call(null,"brainfuck.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),""], null);
klipse.common.registry.register_mode.call(null,"eval-brainfuck","selector_brainfuck",klipse.lang.brainfuck.eval_opts);
klipse.common.registry.register_mode.call(null,"eval-brainfuck-txt","selector_brainfuck_txt",klipse.lang.brainfuck.eval_txt_opts);

//# sourceMappingURL=brainfuck.js.map
