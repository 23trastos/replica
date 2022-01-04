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
klipse.lang.brainfuck.to_html = (function klipse$lang$brainfuck$to_html(p__37134){
var map__37135 = p__37134;
var map__37135__$1 = (((((!((map__37135 == null))))?(((((map__37135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37135):map__37135);
var output = cljs.core.get.call(null,map__37135__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var data = cljs.core.get.call(null,map__37135__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pointer = cljs.core.get.call(null,map__37135__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var text = cljs.core.get.call(null,map__37135__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return ["<table>",((cljs.core.seq.call(null,output))?["<tr>\n           <td>Output</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",output)),"</td>\n         </tr>"].join(''):null),"<tr>\n           <td>Data</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",klipse.lang.brainfuck.boldify_head.call(null,data,pointer))),"</td>\n         </tr>\n         <tr>\n           <td>Head</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pointer),"</td>\n           </tr>",((cljs.core.seq.call(null,output))?["<tr>\n           <td>Text</td><td> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</td>\n         </tr>"].join(''):null),"</table>"].join('');
});
klipse.lang.brainfuck.bf = (function klipse$lang$brainfuck$bf(x){
try{var input = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/\[in:\s*(.*)\]/),clojure.string.split_lines.call(null,x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),klipse.lang.brainfuck.to_html.call(null,cljs.core.js__GT_clj.call(null,(function (){var obj__26008__auto__ = window;
var f__26009__auto__ = (function (){var obj37138 = obj__26008__auto__;
var k37139 = "brainfuck";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj37138,k37139)){
return (obj37138[k37139]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,x,input);
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))], null);
}catch (e37137){var o = e37137;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.brainfuck.bf_txt = (function klipse$lang$brainfuck$bf_txt(x){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj__26008__auto__ = brainfuck;
var f__26009__auto__ = (function (){var obj37141 = obj__26008__auto__;
var k37142 = "text";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj37141,k37142)){
return (obj37141[k37142]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,x);
})()], null);
}catch (e37140){var o = e37140;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.brainfuck.eval_brainfuck = (function klipse$lang$brainfuck$eval_brainfuck(exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_37150){
var state_val_37151 = (state_37150[(1)]);
if((state_val_37151 === (1))){
var inst_37146 = klipse.lang.brainfuck.bf.call(null,exp);
var inst_37147 = cljs.core.nth.call(null,inst_37146,(0),null);
var inst_37148 = cljs.core.nth.call(null,inst_37146,(1),null);
var state_37150__$1 = (function (){var statearr_37152 = state_37150;
(statearr_37152[(7)] = inst_37147);

return statearr_37152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37150__$1,inst_37148);
} else {
return null;
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__21022__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__21022__auto____0 = (function (){
var statearr_37153 = [null,null,null,null,null,null,null,null];
(statearr_37153[(0)] = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__21022__auto__);

(statearr_37153[(1)] = (1));

return statearr_37153;
});
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__21022__auto____1 = (function (state_37150){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_37150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e37154){if((e37154 instanceof Object)){
var ex__21025__auto__ = e37154;
var statearr_37155_37157 = state_37150;
(statearr_37155_37157[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37158 = state_37150;
state_37150 = G__37158;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__21022__auto__ = function(state_37150){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__21022__auto____1.call(this,state_37150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__21022__auto____0;
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__21022__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_37156 = f__21189__auto__.call(null);
(statearr_37156[(6)] = c__21188__auto__);

return statearr_37156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.brainfuck.eval_brainfuck_txt = (function klipse$lang$brainfuck$eval_brainfuck_txt(exp,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_37166){
var state_val_37167 = (state_37166[(1)]);
if((state_val_37167 === (1))){
var inst_37162 = klipse.lang.brainfuck.bf_txt.call(null,exp);
var inst_37163 = cljs.core.nth.call(null,inst_37162,(0),null);
var inst_37164 = cljs.core.nth.call(null,inst_37162,(1),null);
var state_37166__$1 = (function (){var statearr_37168 = state_37166;
(statearr_37168[(7)] = inst_37163);

return statearr_37168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37166__$1,inst_37164);
} else {
return null;
}
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__21022__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__21022__auto____0 = (function (){
var statearr_37169 = [null,null,null,null,null,null,null,null];
(statearr_37169[(0)] = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__21022__auto__);

(statearr_37169[(1)] = (1));

return statearr_37169;
});
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__21022__auto____1 = (function (state_37166){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_37166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e37170){if((e37170 instanceof Object)){
var ex__21025__auto__ = e37170;
var statearr_37171_37173 = state_37166;
(statearr_37171_37173[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37174 = state_37166;
state_37166 = G__37174;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__21022__auto__ = function(state_37166){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__21022__auto____1.call(this,state_37166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__21022__auto____0;
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__21022__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_37172 = f__21189__auto__.call(null);
(statearr_37172[(6)] = c__21188__auto__);

return statearr_37172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.brainfuck.eval_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-brainfuck",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.brainfuck.eval_brainfuck,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"brainfuck"),klipse.common.registry.scripts_src.call(null,"brainfuck.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),""], null);
klipse.lang.brainfuck.eval_txt_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-brainfuck",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.brainfuck.eval_brainfuck_txt,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"brainfuck"),klipse.common.registry.scripts_src.call(null,"brainfuck.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),""], null);
klipse.common.registry.register_mode.call(null,"eval-brainfuck","selector_brainfuck",klipse.lang.brainfuck.eval_opts);
klipse.common.registry.register_mode.call(null,"eval-brainfuck-txt","selector_brainfuck_txt",klipse.lang.brainfuck.eval_txt_opts);

//# sourceMappingURL=brainfuck.js.map
