// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.lang.sql');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.sql.db = null;
klipse.lang.sql.create_db_STAR_ = (function klipse$lang$sql$create_db_STAR_(){
var klass = (function (){var obj34955 = SQL;
var k34956 = "Database";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj34955,k34956)){
return (obj34955[k34956]);
} else {
return null;
}
})();
return klipse.lang.sql.db = (new klass());
});
klipse.lang.sql.create_db = klipse.utils.runonce.call(null,klipse.lang.sql.create_db_STAR_);
klipse.lang.sql.str_eval_async = (function klipse$lang$sql$str_eval_async(query,_){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_34974){
var state_val_34975 = (state_34974[(1)]);
if((state_val_34975 === (1))){
var state_34974__$1 = state_34974;
var statearr_34976_34988 = state_34974__$1;
(statearr_34976_34988[(2)] = null);

(statearr_34976_34988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34975 === (2))){
var inst_34972 = (state_34974[(2)]);
var state_34974__$1 = state_34974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34974__$1,inst_34972);
} else {
if((state_val_34975 === (3))){
var inst_34957 = (state_34974[(2)]);
var state_34974__$1 = state_34974;
var statearr_34977_34989 = state_34974__$1;
(statearr_34977_34989[(2)] = inst_34957);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34974__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34975 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34974,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_34961 = klipse.lang.sql.create_db.call(null);
var inst_34964 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,SQL,"runQuery");
var state_34974__$1 = (function (){var statearr_34978 = state_34974;
(statearr_34978[(7)] = inst_34961);

return statearr_34978;
})();
if(inst_34964){
var statearr_34979_34990 = state_34974__$1;
(statearr_34979_34990[(1)] = (5));

} else {
var statearr_34980_34991 = state_34974__$1;
(statearr_34980_34991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34975 === (5))){
var inst_34966 = (SQL["runQuery"]);
var state_34974__$1 = state_34974;
var statearr_34981_34992 = state_34974__$1;
(statearr_34981_34992[(2)] = inst_34966);

(statearr_34981_34992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34975 === (6))){
var state_34974__$1 = state_34974;
var statearr_34982_34993 = state_34974__$1;
(statearr_34982_34993[(2)] = null);

(statearr_34982_34993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34975 === (7))){
var inst_34969 = (state_34974[(2)]);
var inst_34970 = inst_34969.call(SQL,klipse.lang.sql.db,query);
var state_34974__$1 = state_34974;
var statearr_34983_34994 = state_34974__$1;
(statearr_34983_34994[(2)] = inst_34970);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34974__$1);

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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$lang$sql$str_eval_async_$_state_machine__21022__auto__ = null;
var klipse$lang$sql$str_eval_async_$_state_machine__21022__auto____0 = (function (){
var statearr_34984 = [null,null,null,null,null,null,null,null];
(statearr_34984[(0)] = klipse$lang$sql$str_eval_async_$_state_machine__21022__auto__);

(statearr_34984[(1)] = (1));

return statearr_34984;
});
var klipse$lang$sql$str_eval_async_$_state_machine__21022__auto____1 = (function (state_34974){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_34974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e34985){if((e34985 instanceof Object)){
var ex__21025__auto__ = e34985;
var statearr_34986_34995 = state_34974;
(statearr_34986_34995[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34996 = state_34974;
state_34974 = G__34996;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$lang$sql$str_eval_async_$_state_machine__21022__auto__ = function(state_34974){
switch(arguments.length){
case 0:
return klipse$lang$sql$str_eval_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$lang$sql$str_eval_async_$_state_machine__21022__auto____1.call(this,state_34974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$sql$str_eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$sql$str_eval_async_$_state_machine__21022__auto____0;
klipse$lang$sql$str_eval_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$sql$str_eval_async_$_state_machine__21022__auto____1;
return klipse$lang$sql$str_eval_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_34987 = f__21189__auto__.call(null);
(statearr_34987[(6)] = c__21188__auto__);

return statearr_34987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.lang.sql.opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-sql",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.sql.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"sql"),klipse.common.registry.scripts_src.call(null,"sql-formatter.min.js"),klipse.common.registry.scripts_src.call(null,"sql.js"),"https://gist.githubusercontent.com/viebel/fc86366093c27aca0adc103b1d20190d/raw"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"eval-sql","selector_sql",klipse.lang.sql.opts);

//# sourceMappingURL=sql.js.map
