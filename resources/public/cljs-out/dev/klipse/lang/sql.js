// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.sql');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.sql.db = null;
klipse.lang.sql.create_db_STAR_ = (function klipse$lang$sql$create_db_STAR_(){
var klass = (function (){var obj23305 = SQL;
var k23306 = "Database";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23305,k23306)){
return (obj23305[k23306]);
} else {
return null;
}
})();
return klipse.lang.sql.db = (new klass());
});
klipse.lang.sql.create_db = klipse.utils.runonce.call(null,klipse.lang.sql.create_db_STAR_);
klipse.lang.sql.str_eval_async = (function klipse$lang$sql$str_eval_async(query,_){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_23324){
var state_val_23325 = (state_23324[(1)]);
if((state_val_23325 === (1))){
var state_23324__$1 = state_23324;
var statearr_23326_23338 = state_23324__$1;
(statearr_23326_23338[(2)] = null);

(statearr_23326_23338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (2))){
var inst_23322 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23324__$1,inst_23322);
} else {
if((state_val_23325 === (3))){
var inst_23307 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23327_23339 = state_23324__$1;
(statearr_23327_23339[(2)] = inst_23307);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23324,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_23311 = klipse.lang.sql.create_db.call(null);
var inst_23314 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,SQL,"runQuery");
var state_23324__$1 = (function (){var statearr_23328 = state_23324;
(statearr_23328[(7)] = inst_23311);

return statearr_23328;
})();
if(inst_23314){
var statearr_23329_23340 = state_23324__$1;
(statearr_23329_23340[(1)] = (5));

} else {
var statearr_23330_23341 = state_23324__$1;
(statearr_23330_23341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (5))){
var inst_23316 = (SQL["runQuery"]);
var state_23324__$1 = state_23324;
var statearr_23331_23342 = state_23324__$1;
(statearr_23331_23342[(2)] = inst_23316);

(statearr_23331_23342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (6))){
var state_23324__$1 = state_23324;
var statearr_23332_23343 = state_23324__$1;
(statearr_23332_23343[(2)] = null);

(statearr_23332_23343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (7))){
var inst_23319 = (state_23324[(2)]);
var inst_23320 = inst_23319.call(SQL,klipse.lang.sql.db,query);
var state_23324__$1 = state_23324;
var statearr_23333_23344 = state_23324__$1;
(statearr_23333_23344[(2)] = inst_23320);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__16038__auto__))
;
return ((function (switch__15943__auto__,c__16038__auto__){
return (function() {
var klipse$lang$sql$str_eval_async_$_state_machine__15944__auto__ = null;
var klipse$lang$sql$str_eval_async_$_state_machine__15944__auto____0 = (function (){
var statearr_23334 = [null,null,null,null,null,null,null,null];
(statearr_23334[(0)] = klipse$lang$sql$str_eval_async_$_state_machine__15944__auto__);

(statearr_23334[(1)] = (1));

return statearr_23334;
});
var klipse$lang$sql$str_eval_async_$_state_machine__15944__auto____1 = (function (state_23324){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_23324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e23335){if((e23335 instanceof Object)){
var ex__15947__auto__ = e23335;
var statearr_23336_23345 = state_23324;
(statearr_23336_23345[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23346 = state_23324;
state_23324 = G__23346;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$lang$sql$str_eval_async_$_state_machine__15944__auto__ = function(state_23324){
switch(arguments.length){
case 0:
return klipse$lang$sql$str_eval_async_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$lang$sql$str_eval_async_$_state_machine__15944__auto____1.call(this,state_23324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$sql$str_eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$sql$str_eval_async_$_state_machine__15944__auto____0;
klipse$lang$sql$str_eval_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$sql$str_eval_async_$_state_machine__15944__auto____1;
return klipse$lang$sql$str_eval_async_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_23337 = f__16039__auto__.call(null);
(statearr_23337[(6)] = c__16038__auto__);

return statearr_23337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.lang.sql.opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-sql",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.sql.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"sql"),klipse.common.registry.scripts_src.call(null,"sql-formatter.min.js"),klipse.common.registry.scripts_src.call(null,"sql.js"),"https://gist.githubusercontent.com/viebel/fc86366093c27aca0adc103b1d20190d/raw"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"eval-sql","selector_sql",klipse.lang.sql.opts);

//# sourceMappingURL=sql.js.map
