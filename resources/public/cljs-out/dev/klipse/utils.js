// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.utils');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cemerick.url');
goog.require('applied_science.js_interop');
klipse.utils.current_url = (function klipse$utils$current_url(){
var temp__5718__auto__ = (((typeof location !== 'undefined'))?location:"");
if(cljs.core.truth_(temp__5718__auto__)){
var loc = temp__5718__auto__;
return cemerick.url.url.call(null,(loc["href"]));
} else {
return null;
}
});
klipse.utils.url_parameters_STAR_ = (function klipse$utils$url_parameters_STAR_(){
return clojure.walk.keywordize_keys.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(klipse.utils.current_url.call(null)));
});
klipse.utils.url_parameters = cljs.core.memoize.call(null,klipse.utils.url_parameters_STAR_);
/**
 * Returns the current url with an additional parameter.
 *   If the parameter already exists, it is overridden.
 */
klipse.utils.add_url_parameter = (function klipse$utils$add_url_parameter(base_url,key,value){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in.call(null,base_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.name.call(null,key)], null),value));
});
klipse.utils.create_url_with_input = (function klipse$utils$create_url_with_input(base_url,input){
return klipse.utils.add_url_parameter.call(null,(cljs.core.truth_(base_url)?cemerick.url.url.call(null,base_url):klipse.utils.current_url.call(null)),new cljs.core.Keyword(null,"cljs_in","cljs_in",1284321894),input);
});
klipse.utils.debounce = (function klipse$utils$debounce(func,wait_in_ms){
var counter = cljs.core.atom.call(null,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (counter){
return (function (){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,counter){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,counter){
return (function (state_19991){
var state_val_19992 = (state_19991[(1)]);
if((state_val_19992 === (1))){
var inst_19978 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_19979 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_19991__$1 = (function (){var statearr_19993 = state_19991;
(statearr_19993[(7)] = inst_19978);

return statearr_19993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19991__$1,(2),inst_19979);
} else {
if((state_val_19992 === (2))){
var inst_19981 = (state_19991[(2)]);
var inst_19982 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var inst_19983 = cljs.core.deref.call(null,counter);
var inst_19984 = (inst_19983 === (0));
var state_19991__$1 = (function (){var statearr_19994 = state_19991;
(statearr_19994[(8)] = inst_19982);

(statearr_19994[(9)] = inst_19981);

return statearr_19994;
})();
if(cljs.core.truth_(inst_19984)){
var statearr_19995_20018 = state_19991__$1;
(statearr_19995_20018[(1)] = (3));

} else {
var statearr_19996_20019 = state_19991__$1;
(statearr_19996_20019[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (3))){
var inst_19986 = func.call(null);
var state_19991__$1 = state_19991;
var statearr_19997_20020 = state_19991__$1;
(statearr_19997_20020[(2)] = inst_19986);

(statearr_19997_20020[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (4))){
var state_19991__$1 = state_19991;
var statearr_19998_20021 = state_19991__$1;
(statearr_19998_20021[(2)] = null);

(statearr_19998_20021[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (5))){
var inst_19989 = (state_19991[(2)]);
var state_19991__$1 = state_19991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19991__$1,inst_19989);
} else {
return null;
}
}
}
}
}
});})(c__16038__auto__,counter))
;
return ((function (switch__15943__auto__,c__16038__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__15944__auto__ = null;
var klipse$utils$debounce_$_state_machine__15944__auto____0 = (function (){
var statearr_19999 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19999[(0)] = klipse$utils$debounce_$_state_machine__15944__auto__);

(statearr_19999[(1)] = (1));

return statearr_19999;
});
var klipse$utils$debounce_$_state_machine__15944__auto____1 = (function (state_19991){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20000){if((e20000 instanceof Object)){
var ex__15947__auto__ = e20000;
var statearr_20001_20022 = state_19991;
(statearr_20001_20022[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20023 = state_19991;
state_19991 = G__20023;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__15944__auto__ = function(state_19991){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__15944__auto____1.call(this,state_19991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$debounce_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__15944__auto____0;
klipse$utils$debounce_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__15944__auto____1;
return klipse$utils$debounce_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,counter))
})();
var state__16040__auto__ = (function (){var statearr_20002 = f__16039__auto__.call(null);
(statearr_20002[(6)] = c__16038__auto__);

return statearr_20002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,counter))
);

return c__16038__auto__;
});})(counter))
,((function (counter){
return (function (){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,counter){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,counter){
return (function (state_20010){
var state_val_20011 = (state_20010[(1)]);
if((state_val_20011 === (1))){
var inst_20003 = func.call(null);
var inst_20004 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_20005 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_20010__$1 = (function (){var statearr_20012 = state_20010;
(statearr_20012[(7)] = inst_20003);

(statearr_20012[(8)] = inst_20004);

return statearr_20012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20010__$1,(2),inst_20005);
} else {
if((state_val_20011 === (2))){
var inst_20007 = (state_20010[(2)]);
var inst_20008 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var state_20010__$1 = (function (){var statearr_20013 = state_20010;
(statearr_20013[(9)] = inst_20007);

return statearr_20013;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20010__$1,inst_20008);
} else {
return null;
}
}
});})(c__16038__auto__,counter))
;
return ((function (switch__15943__auto__,c__16038__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__15944__auto__ = null;
var klipse$utils$debounce_$_state_machine__15944__auto____0 = (function (){
var statearr_20014 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20014[(0)] = klipse$utils$debounce_$_state_machine__15944__auto__);

(statearr_20014[(1)] = (1));

return statearr_20014;
});
var klipse$utils$debounce_$_state_machine__15944__auto____1 = (function (state_20010){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_20010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20015){if((e20015 instanceof Object)){
var ex__15947__auto__ = e20015;
var statearr_20016_20024 = state_20010;
(statearr_20016_20024[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20025 = state_20010;
state_20010 = G__20025;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__15944__auto__ = function(state_20010){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__15944__auto____1.call(this,state_20010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$debounce_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__15944__auto____0;
klipse$utils$debounce_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__15944__auto____1;
return klipse$utils$debounce_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,counter))
})();
var state__16040__auto__ = (function (){var statearr_20017 = f__16039__auto__.call(null);
(statearr_20017[(6)] = c__16038__auto__);

return statearr_20017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,counter))
);

return c__16038__auto__;
});})(counter))
], null);
});
klipse.utils.gist_path_raw = (function klipse$utils$gist_path_raw(gist_id){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),"/raw","?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join('');
});
klipse.utils.gist_path_page = (function klipse$utils$gist_path_page(gist_id){
return ["https://gist.github.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id)].join('');
});
klipse.utils.read_input_from_gist = (function klipse$utils$read_input_from_gist(gist_id){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__){
return (function (state_20069){
var state_val_20070 = (state_20069[(1)]);
if((state_val_20070 === (7))){
var state_20069__$1 = state_20069;
var statearr_20071_20098 = state_20069__$1;
(statearr_20071_20098[(2)] = false);

(statearr_20071_20098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (1))){
var state_20069__$1 = state_20069;
if(cljs.core.truth_(gist_id)){
var statearr_20072_20099 = state_20069__$1;
(statearr_20072_20099[(1)] = (2));

} else {
var statearr_20073_20100 = state_20069__$1;
(statearr_20073_20100[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (4))){
var inst_20067 = (state_20069[(2)]);
var state_20069__$1 = state_20069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20069__$1,inst_20067);
} else {
if((state_val_20070 === (15))){
var inst_20028 = (state_20069[(7)]);
var inst_20056 = (state_20069[(8)]);
var inst_20061 = ["\"","Wrong gist path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20028),"\n","gist-id= ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),"\n","http status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20056),"\""].join('');
var state_20069__$1 = state_20069;
var statearr_20074_20101 = state_20069__$1;
(statearr_20074_20101[(2)] = inst_20061);

(statearr_20074_20101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (13))){
var inst_20034 = (state_20069[(9)]);
var state_20069__$1 = state_20069;
var statearr_20075_20102 = state_20069__$1;
(statearr_20075_20102[(2)] = inst_20034);

(statearr_20075_20102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (6))){
var inst_20034 = (state_20069[(9)]);
var inst_20039 = inst_20034.cljs$lang$protocol_mask$partition0$;
var inst_20040 = (inst_20039 & (64));
var inst_20041 = inst_20034.cljs$core$ISeq$;
var inst_20042 = (cljs.core.PROTOCOL_SENTINEL === inst_20041);
var inst_20043 = ((inst_20040) || (inst_20042));
var state_20069__$1 = state_20069;
if(cljs.core.truth_(inst_20043)){
var statearr_20076_20103 = state_20069__$1;
(statearr_20076_20103[(1)] = (9));

} else {
var statearr_20077_20104 = state_20069__$1;
(statearr_20077_20104[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (17))){
var inst_20064 = (state_20069[(2)]);
var state_20069__$1 = state_20069;
var statearr_20078_20105 = state_20069__$1;
(statearr_20078_20105[(2)] = inst_20064);

(statearr_20078_20105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (3))){
var state_20069__$1 = state_20069;
var statearr_20079_20106 = state_20069__$1;
(statearr_20079_20106[(2)] = null);

(statearr_20079_20106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (12))){
var inst_20034 = (state_20069[(9)]);
var inst_20052 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20034);
var state_20069__$1 = state_20069;
var statearr_20080_20107 = state_20069__$1;
(statearr_20080_20107[(2)] = inst_20052);

(statearr_20080_20107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (2))){
var inst_20028 = (state_20069[(7)]);
var inst_20028__$1 = klipse.utils.gist_path_raw.call(null,gist_id);
var inst_20029 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_20030 = [false];
var inst_20031 = cljs.core.PersistentHashMap.fromArrays(inst_20029,inst_20030);
var inst_20032 = cljs_http.client.get.call(null,inst_20028__$1,inst_20031);
var state_20069__$1 = (function (){var statearr_20081 = state_20069;
(statearr_20081[(7)] = inst_20028__$1);

return statearr_20081;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20069__$1,(5),inst_20032);
} else {
if((state_val_20070 === (11))){
var inst_20047 = (state_20069[(2)]);
var state_20069__$1 = state_20069;
var statearr_20082_20108 = state_20069__$1;
(statearr_20082_20108[(2)] = inst_20047);

(statearr_20082_20108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (9))){
var state_20069__$1 = state_20069;
var statearr_20083_20109 = state_20069__$1;
(statearr_20083_20109[(2)] = true);

(statearr_20083_20109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (5))){
var inst_20034 = (state_20069[(9)]);
var inst_20034__$1 = (state_20069[(2)]);
var inst_20036 = (inst_20034__$1 == null);
var inst_20037 = cljs.core.not.call(null,inst_20036);
var state_20069__$1 = (function (){var statearr_20084 = state_20069;
(statearr_20084[(9)] = inst_20034__$1);

return statearr_20084;
})();
if(inst_20037){
var statearr_20085_20110 = state_20069__$1;
(statearr_20085_20110[(1)] = (6));

} else {
var statearr_20086_20111 = state_20069__$1;
(statearr_20086_20111[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (14))){
var inst_20056 = (state_20069[(8)]);
var inst_20055 = (state_20069[(2)]);
var inst_20056__$1 = cljs.core.get.call(null,inst_20055,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_20057 = cljs.core.get.call(null,inst_20055,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_20058 = cljs.core._EQ_.call(null,inst_20056__$1,(200));
var inst_20059 = (!(inst_20058));
var state_20069__$1 = (function (){var statearr_20087 = state_20069;
(statearr_20087[(10)] = inst_20057);

(statearr_20087[(8)] = inst_20056__$1);

return statearr_20087;
})();
if(inst_20059){
var statearr_20088_20112 = state_20069__$1;
(statearr_20088_20112[(1)] = (15));

} else {
var statearr_20089_20113 = state_20069__$1;
(statearr_20089_20113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (16))){
var inst_20057 = (state_20069[(10)]);
var state_20069__$1 = state_20069;
var statearr_20090_20114 = state_20069__$1;
(statearr_20090_20114[(2)] = inst_20057);

(statearr_20090_20114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (10))){
var state_20069__$1 = state_20069;
var statearr_20091_20115 = state_20069__$1;
(statearr_20091_20115[(2)] = false);

(statearr_20091_20115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (8))){
var inst_20050 = (state_20069[(2)]);
var state_20069__$1 = state_20069;
if(cljs.core.truth_(inst_20050)){
var statearr_20092_20116 = state_20069__$1;
(statearr_20092_20116[(1)] = (12));

} else {
var statearr_20093_20117 = state_20069__$1;
(statearr_20093_20117[(1)] = (13));

}

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
}
}
}
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
var klipse$utils$read_input_from_gist_$_state_machine__15944__auto__ = null;
var klipse$utils$read_input_from_gist_$_state_machine__15944__auto____0 = (function (){
var statearr_20094 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20094[(0)] = klipse$utils$read_input_from_gist_$_state_machine__15944__auto__);

(statearr_20094[(1)] = (1));

return statearr_20094;
});
var klipse$utils$read_input_from_gist_$_state_machine__15944__auto____1 = (function (state_20069){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_20069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20095){if((e20095 instanceof Object)){
var ex__15947__auto__ = e20095;
var statearr_20096_20118 = state_20069;
(statearr_20096_20118[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20119 = state_20069;
state_20069 = G__20119;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$utils$read_input_from_gist_$_state_machine__15944__auto__ = function(state_20069){
switch(arguments.length){
case 0:
return klipse$utils$read_input_from_gist_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$utils$read_input_from_gist_$_state_machine__15944__auto____1.call(this,state_20069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$read_input_from_gist_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$read_input_from_gist_$_state_machine__15944__auto____0;
klipse$utils$read_input_from_gist_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$read_input_from_gist_$_state_machine__15944__auto____1;
return klipse$utils$read_input_from_gist_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__))
})();
var state__16040__auto__ = (function (){var statearr_20097 = f__16039__auto__.call(null);
(statearr_20097[(6)] = c__16038__auto__);

return statearr_20097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__))
);

return c__16038__auto__;
});
klipse.utils.runonce = (function klipse$utils$runonce(f){
var ran = cljs.core.atom.call(null,false);
return ((function (ran){
return (function() { 
var G__20120__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__20120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20121__i = 0, G__20121__a = new Array(arguments.length -  0);
while (G__20121__i < G__20121__a.length) {G__20121__a[G__20121__i] = arguments[G__20121__i + 0]; ++G__20121__i;}
  args = new cljs.core.IndexedSeq(G__20121__a,0,null);
} 
return G__20120__delegate.call(this,args);};
G__20120.cljs$lang$maxFixedArity = 0;
G__20120.cljs$lang$applyTo = (function (arglist__20122){
var args = cljs.core.seq(arglist__20122);
return G__20120__delegate(args);
});
G__20120.cljs$core$IFn$_invoke$arity$variadic = G__20120__delegate;
return G__20120;
})()
;
;})(ran))
});
/**
 * Returns a function that will run `f` only once.
 *   If `f` succeeds (returns [:ok & args]), on subsequent calls it will return [:ok].
 *   `f` must return a channel.
 */
klipse.utils.runonce_async = (function klipse$utils$runonce_async(f){
var ran = cljs.core.atom.call(null,false);
return ((function (ran){
return (function() { 
var G__20159__delegate = function (args){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,ran){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,ran){
return (function (state_20143){
var state_val_20144 = (state_20143[(1)]);
if((state_val_20144 === (1))){
var inst_20123 = cljs.core.deref.call(null,ran);
var inst_20124 = cljs.core.not.call(null,inst_20123);
var state_20143__$1 = state_20143;
if(inst_20124){
var statearr_20145_20160 = state_20143__$1;
(statearr_20145_20160[(1)] = (2));

} else {
var statearr_20146_20161 = state_20143__$1;
(statearr_20146_20161[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (2))){
var inst_20126 = cljs.core.apply.call(null,f,args);
var state_20143__$1 = state_20143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20143__$1,(5),inst_20126);
} else {
if((state_val_20144 === (3))){
var inst_20137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20138 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_20139 = (new cljs.core.PersistentVector(null,1,(5),inst_20137,inst_20138,null));
var state_20143__$1 = state_20143;
var statearr_20147_20162 = state_20143__$1;
(statearr_20147_20162[(2)] = inst_20139);

(statearr_20147_20162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (4))){
var inst_20141 = (state_20143[(2)]);
var state_20143__$1 = state_20143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20143__$1,inst_20141);
} else {
if((state_val_20144 === (5))){
var inst_20128 = (state_20143[(7)]);
var inst_20128__$1 = (state_20143[(2)]);
var inst_20129 = cljs.core.first.call(null,inst_20128__$1);
var inst_20130 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_20129);
var state_20143__$1 = (function (){var statearr_20148 = state_20143;
(statearr_20148[(7)] = inst_20128__$1);

return statearr_20148;
})();
if(inst_20130){
var statearr_20149_20163 = state_20143__$1;
(statearr_20149_20163[(1)] = (6));

} else {
var statearr_20150_20164 = state_20143__$1;
(statearr_20150_20164[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (6))){
var inst_20132 = cljs.core.reset_BANG_.call(null,ran,true);
var state_20143__$1 = state_20143;
var statearr_20151_20165 = state_20143__$1;
(statearr_20151_20165[(2)] = inst_20132);

(statearr_20151_20165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (7))){
var state_20143__$1 = state_20143;
var statearr_20152_20166 = state_20143__$1;
(statearr_20152_20166[(2)] = null);

(statearr_20152_20166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (8))){
var inst_20128 = (state_20143[(7)]);
var inst_20135 = (state_20143[(2)]);
var state_20143__$1 = (function (){var statearr_20153 = state_20143;
(statearr_20153[(8)] = inst_20135);

return statearr_20153;
})();
var statearr_20154_20167 = state_20143__$1;
(statearr_20154_20167[(2)] = inst_20128);

(statearr_20154_20167[(1)] = (4));


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
}
});})(c__16038__auto__,ran))
;
return ((function (switch__15943__auto__,c__16038__auto__,ran){
return (function() {
var klipse$utils$runonce_async_$_state_machine__15944__auto__ = null;
var klipse$utils$runonce_async_$_state_machine__15944__auto____0 = (function (){
var statearr_20155 = [null,null,null,null,null,null,null,null,null];
(statearr_20155[(0)] = klipse$utils$runonce_async_$_state_machine__15944__auto__);

(statearr_20155[(1)] = (1));

return statearr_20155;
});
var klipse$utils$runonce_async_$_state_machine__15944__auto____1 = (function (state_20143){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_20143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20156){if((e20156 instanceof Object)){
var ex__15947__auto__ = e20156;
var statearr_20157_20168 = state_20143;
(statearr_20157_20168[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20169 = state_20143;
state_20143 = G__20169;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$utils$runonce_async_$_state_machine__15944__auto__ = function(state_20143){
switch(arguments.length){
case 0:
return klipse$utils$runonce_async_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$utils$runonce_async_$_state_machine__15944__auto____1.call(this,state_20143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$runonce_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$runonce_async_$_state_machine__15944__auto____0;
klipse$utils$runonce_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$runonce_async_$_state_machine__15944__auto____1;
return klipse$utils$runonce_async_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,ran))
})();
var state__16040__auto__ = (function (){var statearr_20158 = f__16039__auto__.call(null);
(statearr_20158[(6)] = c__16038__auto__);

return statearr_20158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,ran))
);

return c__16038__auto__;
};
var G__20159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20170__i = 0, G__20170__a = new Array(arguments.length -  0);
while (G__20170__i < G__20170__a.length) {G__20170__a[G__20170__i] = arguments[G__20170__i + 0]; ++G__20170__i;}
  args = new cljs.core.IndexedSeq(G__20170__a,0,null);
} 
return G__20159__delegate.call(this,args);};
G__20159.cljs$lang$maxFixedArity = 0;
G__20159.cljs$lang$applyTo = (function (arglist__20171){
var args = cljs.core.seq(arglist__20171);
return G__20159__delegate(args);
});
G__20159.cljs$core$IFn$_invoke$arity$variadic = G__20159__delegate;
return G__20159;
})()
;
;})(ran))
});
/**
 * Returns a memoized version of f.
 *   If `f` succeeds (returns [:ok & args]), on subsequent calls it will return the cached results.
 *   `f` must return a channel.
 */
klipse.utils.memoize_async = (function klipse$utils$memoize_async(f){
var ran = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (ran){
return (function() { 
var G__20208__delegate = function (args){
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,ran){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,ran){
return (function (state_20192){
var state_val_20193 = (state_20192[(1)]);
if((state_val_20193 === (1))){
var inst_20172 = cljs.core.deref.call(null,ran);
var inst_20173 = cljs.core.contains_QMARK_.call(null,inst_20172,args);
var inst_20174 = (!(inst_20173));
var state_20192__$1 = state_20192;
if(inst_20174){
var statearr_20194_20209 = state_20192__$1;
(statearr_20194_20209[(1)] = (2));

} else {
var statearr_20195_20210 = state_20192__$1;
(statearr_20195_20210[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20193 === (2))){
var inst_20176 = cljs.core.apply.call(null,f,args);
var state_20192__$1 = state_20192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20192__$1,(5),inst_20176);
} else {
if((state_val_20193 === (3))){
var inst_20187 = cljs.core.deref.call(null,ran);
var inst_20188 = cljs.core.get.call(null,inst_20187,args);
var state_20192__$1 = state_20192;
var statearr_20196_20211 = state_20192__$1;
(statearr_20196_20211[(2)] = inst_20188);

(statearr_20196_20211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20193 === (4))){
var inst_20190 = (state_20192[(2)]);
var state_20192__$1 = state_20192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20192__$1,inst_20190);
} else {
if((state_val_20193 === (5))){
var inst_20178 = (state_20192[(7)]);
var inst_20178__$1 = (state_20192[(2)]);
var inst_20179 = cljs.core.first.call(null,inst_20178__$1);
var inst_20180 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_20179);
var state_20192__$1 = (function (){var statearr_20197 = state_20192;
(statearr_20197[(7)] = inst_20178__$1);

return statearr_20197;
})();
if(inst_20180){
var statearr_20198_20212 = state_20192__$1;
(statearr_20198_20212[(1)] = (6));

} else {
var statearr_20199_20213 = state_20192__$1;
(statearr_20199_20213[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20193 === (6))){
var inst_20178 = (state_20192[(7)]);
var inst_20182 = cljs.core.swap_BANG_.call(null,ran,cljs.core.assoc,args,inst_20178);
var state_20192__$1 = state_20192;
var statearr_20200_20214 = state_20192__$1;
(statearr_20200_20214[(2)] = inst_20182);

(statearr_20200_20214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20193 === (7))){
var state_20192__$1 = state_20192;
var statearr_20201_20215 = state_20192__$1;
(statearr_20201_20215[(2)] = null);

(statearr_20201_20215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20193 === (8))){
var inst_20178 = (state_20192[(7)]);
var inst_20185 = (state_20192[(2)]);
var state_20192__$1 = (function (){var statearr_20202 = state_20192;
(statearr_20202[(8)] = inst_20185);

return statearr_20202;
})();
var statearr_20203_20216 = state_20192__$1;
(statearr_20203_20216[(2)] = inst_20178);

(statearr_20203_20216[(1)] = (4));


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
}
});})(c__16038__auto__,ran))
;
return ((function (switch__15943__auto__,c__16038__auto__,ran){
return (function() {
var klipse$utils$memoize_async_$_state_machine__15944__auto__ = null;
var klipse$utils$memoize_async_$_state_machine__15944__auto____0 = (function (){
var statearr_20204 = [null,null,null,null,null,null,null,null,null];
(statearr_20204[(0)] = klipse$utils$memoize_async_$_state_machine__15944__auto__);

(statearr_20204[(1)] = (1));

return statearr_20204;
});
var klipse$utils$memoize_async_$_state_machine__15944__auto____1 = (function (state_20192){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_20192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20205){if((e20205 instanceof Object)){
var ex__15947__auto__ = e20205;
var statearr_20206_20217 = state_20192;
(statearr_20206_20217[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20218 = state_20192;
state_20192 = G__20218;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$utils$memoize_async_$_state_machine__15944__auto__ = function(state_20192){
switch(arguments.length){
case 0:
return klipse$utils$memoize_async_$_state_machine__15944__auto____0.call(this);
case 1:
return klipse$utils$memoize_async_$_state_machine__15944__auto____1.call(this,state_20192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$memoize_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$memoize_async_$_state_machine__15944__auto____0;
klipse$utils$memoize_async_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$memoize_async_$_state_machine__15944__auto____1;
return klipse$utils$memoize_async_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,ran))
})();
var state__16040__auto__ = (function (){var statearr_20207 = f__16039__auto__.call(null);
(statearr_20207[(6)] = c__16038__auto__);

return statearr_20207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,ran))
);

return c__16038__auto__;
};
var G__20208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20219__i = 0, G__20219__a = new Array(arguments.length -  0);
while (G__20219__i < G__20219__a.length) {G__20219__a[G__20219__i] = arguments[G__20219__i + 0]; ++G__20219__i;}
  args = new cljs.core.IndexedSeq(G__20219__a,0,null);
} 
return G__20208__delegate.call(this,args);};
G__20208.cljs$lang$maxFixedArity = 0;
G__20208.cljs$lang$applyTo = (function (arglist__20220){
var args = cljs.core.seq(arglist__20220);
return G__20208__delegate(args);
});
G__20208.cljs$core$IFn$_invoke$arity$variadic = G__20208__delegate;
return G__20208;
})()
;
;})(ran))
});
klipse.utils.default_permitted_symbols = (function klipse$utils$default_permitted_symbols(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["console","setTimeout","setInterval","Math","Date"], null);
});
klipse.utils.default_forbidden_symbols = (function klipse$utils$default_forbidden_symbols(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["document","XMLHttpRequest","eval","window","Function"], null);
});
klipse.utils.secured_eval = false;
klipse.utils.eval_in_global_scope = eval;
klipse.utils.securize_eval_BANG__STAR_ = (function klipse$utils$securize_eval_BANG__STAR_(the_forbidden_symbols){
klipse.utils.secured_eval = true;

var original_eval = eval;
var obj20221_20233 = window;
var obj20222_20234 = (((!((obj20221_20233 == null))))?obj20221_20233:({}));
(obj20222_20234["eval"] = ((function (obj20222_20234,obj20221_20233,original_eval){
return (function (src){
return original_eval.call(null,["with (klipse_eval_sandbox){ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"}"].join(''));
});})(obj20222_20234,obj20221_20233,original_eval))
);


klipse.utils.eval_in_global_scope = eval;

var obj20225_20235 = window;
var obj20226_20236 = (((!((obj20225_20235 == null))))?obj20225_20235:({}));
(obj20226_20236["klipse_unsecured_eval"] = original_eval);


var obj20229 = window;
var obj20230 = (((!((obj20229 == null))))?obj20229:({}));
(obj20230["klipse_eval_sandbox"] = cljs.core.clj__GT_js.call(null,cljs.core.zipmap.call(null,the_forbidden_symbols,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY))));

return obj20230;
});
klipse.utils.securize_eval_BANG_ = klipse.utils.runonce.call(null,klipse.utils.securize_eval_BANG__STAR_);
klipse.utils.setup_container_BANG_ = (function klipse$utils$setup_container_BANG_(container_id){
if(klipse.utils.secured_eval){
return null;
} else {
(window["klipse_container"] = document.getElementById(container_id));

return (window["klipse_container_id"] = container_id);
}
});
klipse.utils.unsecured_eval_in_global_scope = (function klipse$utils$unsecured_eval_in_global_scope(s){
return (function (){var or__4131__auto__ = (function (){var obj20239 = window;
var k20240 = "klipse_unsecured_eval";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20239,k20240)){
return (obj20239[k20240]);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return eval;
}
})().call(null,s);
});
klipse.utils.load_script = (function klipse$utils$load_script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20328 = arguments.length;
var i__4731__auto___20329 = (0);
while(true){
if((i__4731__auto___20329 < len__4730__auto___20328)){
args__4736__auto__.push((arguments[i__4731__auto___20329]));

var G__20330 = (i__4731__auto___20329 + (1));
i__4731__auto___20329 = G__20330;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic = (function (script,p__20243){
var map__20244 = p__20243;
var map__20244__$1 = (((((!((map__20244 == null))))?(((((map__20244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20244):map__20244);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__20244__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,map__20244,map__20244__$1,secured_eval_QMARK_){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,map__20244,map__20244__$1,secured_eval_QMARK_){
return (function (state_20297){
var state_val_20298 = (state_20297[(1)]);
if((state_val_20298 === (7))){
var state_20297__$1 = state_20297;
var statearr_20299_20331 = state_20297__$1;
(statearr_20299_20331[(2)] = false);

(statearr_20299_20331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (1))){
var inst_20246 = console.info("loading:",script);
var inst_20248 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_20249 = [false];
var inst_20250 = cljs.core.PersistentHashMap.fromArrays(inst_20248,inst_20249);
var inst_20251 = cljs_http.client.get.call(null,script,inst_20250);
var state_20297__$1 = (function (){var statearr_20300 = state_20297;
(statearr_20300[(7)] = inst_20246);

return statearr_20300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20297__$1,(2),inst_20251);
} else {
if((state_val_20298 === (4))){
var state_20297__$1 = state_20297;
var statearr_20301_20332 = state_20297__$1;
(statearr_20301_20332[(2)] = false);

(statearr_20301_20332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (15))){
var inst_20276 = (state_20297[(8)]);
var inst_20281 = klipse.utils.eval_in_global_scope.call(null,inst_20276);
var state_20297__$1 = state_20297;
var statearr_20302_20333 = state_20297__$1;
(statearr_20302_20333[(2)] = inst_20281);

(statearr_20302_20333[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (13))){
var inst_20275 = (state_20297[(9)]);
var inst_20291 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20292 = [inst_20275,script];
var inst_20293 = (new cljs.core.PersistentVector(null,2,(5),inst_20291,inst_20292,null));
var state_20297__$1 = state_20297;
var statearr_20303_20334 = state_20297__$1;
(statearr_20303_20334[(2)] = inst_20293);

(statearr_20303_20334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (6))){
var state_20297__$1 = state_20297;
var statearr_20304_20335 = state_20297__$1;
(statearr_20304_20335[(2)] = true);

(statearr_20304_20335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (17))){
var inst_20285 = (state_20297[(2)]);
var inst_20286 = console.info("evaluation done:",script);
var inst_20287 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20288 = [new cljs.core.Keyword(null,"ok","ok",967785236),script];
var inst_20289 = (new cljs.core.PersistentVector(null,2,(5),inst_20287,inst_20288,null));
var state_20297__$1 = (function (){var statearr_20305 = state_20297;
(statearr_20305[(10)] = inst_20286);

(statearr_20305[(11)] = inst_20285);

return statearr_20305;
})();
var statearr_20306_20336 = state_20297__$1;
(statearr_20306_20336[(2)] = inst_20289);

(statearr_20306_20336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (3))){
var inst_20253 = (state_20297[(12)]);
var inst_20258 = inst_20253.cljs$lang$protocol_mask$partition0$;
var inst_20259 = (inst_20258 & (64));
var inst_20260 = inst_20253.cljs$core$ISeq$;
var inst_20261 = (cljs.core.PROTOCOL_SENTINEL === inst_20260);
var inst_20262 = ((inst_20259) || (inst_20261));
var state_20297__$1 = state_20297;
if(cljs.core.truth_(inst_20262)){
var statearr_20307_20337 = state_20297__$1;
(statearr_20307_20337[(1)] = (6));

} else {
var statearr_20308_20338 = state_20297__$1;
(statearr_20308_20338[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (12))){
var inst_20279 = console.info("evaluating:",script);
var state_20297__$1 = (function (){var statearr_20309 = state_20297;
(statearr_20309[(13)] = inst_20279);

return statearr_20309;
})();
if(cljs.core.truth_(secured_eval_QMARK_)){
var statearr_20310_20339 = state_20297__$1;
(statearr_20310_20339[(1)] = (15));

} else {
var statearr_20311_20340 = state_20297__$1;
(statearr_20311_20340[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (2))){
var inst_20253 = (state_20297[(12)]);
var inst_20253__$1 = (state_20297[(2)]);
var inst_20255 = (inst_20253__$1 == null);
var inst_20256 = cljs.core.not.call(null,inst_20255);
var state_20297__$1 = (function (){var statearr_20312 = state_20297;
(statearr_20312[(12)] = inst_20253__$1);

return statearr_20312;
})();
if(inst_20256){
var statearr_20313_20341 = state_20297__$1;
(statearr_20313_20341[(1)] = (3));

} else {
var statearr_20314_20342 = state_20297__$1;
(statearr_20314_20342[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (11))){
var inst_20275 = (state_20297[(9)]);
var inst_20274 = (state_20297[(2)]);
var inst_20275__$1 = cljs.core.get.call(null,inst_20274,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_20276 = cljs.core.get.call(null,inst_20274,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_20277 = cljs.core._EQ_.call(null,(200),inst_20275__$1);
var state_20297__$1 = (function (){var statearr_20315 = state_20297;
(statearr_20315[(8)] = inst_20276);

(statearr_20315[(9)] = inst_20275__$1);

return statearr_20315;
})();
if(inst_20277){
var statearr_20316_20343 = state_20297__$1;
(statearr_20316_20343[(1)] = (12));

} else {
var statearr_20317_20344 = state_20297__$1;
(statearr_20317_20344[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (9))){
var inst_20253 = (state_20297[(12)]);
var inst_20271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20253);
var state_20297__$1 = state_20297;
var statearr_20318_20345 = state_20297__$1;
(statearr_20318_20345[(2)] = inst_20271);

(statearr_20318_20345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (5))){
var inst_20269 = (state_20297[(2)]);
var state_20297__$1 = state_20297;
if(cljs.core.truth_(inst_20269)){
var statearr_20319_20346 = state_20297__$1;
(statearr_20319_20346[(1)] = (9));

} else {
var statearr_20320_20347 = state_20297__$1;
(statearr_20320_20347[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (14))){
var inst_20295 = (state_20297[(2)]);
var state_20297__$1 = state_20297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20297__$1,inst_20295);
} else {
if((state_val_20298 === (16))){
var inst_20276 = (state_20297[(8)]);
var inst_20283 = klipse.utils.unsecured_eval_in_global_scope.call(null,inst_20276);
var state_20297__$1 = state_20297;
var statearr_20321_20348 = state_20297__$1;
(statearr_20321_20348[(2)] = inst_20283);

(statearr_20321_20348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (10))){
var inst_20253 = (state_20297[(12)]);
var state_20297__$1 = state_20297;
var statearr_20322_20349 = state_20297__$1;
(statearr_20322_20349[(2)] = inst_20253);

(statearr_20322_20349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20298 === (8))){
var inst_20266 = (state_20297[(2)]);
var state_20297__$1 = state_20297;
var statearr_20323_20350 = state_20297__$1;
(statearr_20323_20350[(2)] = inst_20266);

(statearr_20323_20350[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
}
});})(c__16038__auto__,map__20244,map__20244__$1,secured_eval_QMARK_))
;
return ((function (switch__15943__auto__,c__16038__auto__,map__20244,map__20244__$1,secured_eval_QMARK_){
return (function() {
var klipse$utils$state_machine__15944__auto__ = null;
var klipse$utils$state_machine__15944__auto____0 = (function (){
var statearr_20324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20324[(0)] = klipse$utils$state_machine__15944__auto__);

(statearr_20324[(1)] = (1));

return statearr_20324;
});
var klipse$utils$state_machine__15944__auto____1 = (function (state_20297){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_20297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20325){if((e20325 instanceof Object)){
var ex__15947__auto__ = e20325;
var statearr_20326_20351 = state_20297;
(statearr_20326_20351[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20352 = state_20297;
state_20297 = G__20352;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$utils$state_machine__15944__auto__ = function(state_20297){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__15944__auto____0.call(this);
case 1:
return klipse$utils$state_machine__15944__auto____1.call(this,state_20297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__15944__auto____0;
klipse$utils$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__15944__auto____1;
return klipse$utils$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,map__20244,map__20244__$1,secured_eval_QMARK_))
})();
var state__16040__auto__ = (function (){var statearr_20327 = f__16039__auto__.call(null);
(statearr_20327[(6)] = c__16038__auto__);

return statearr_20327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,map__20244,map__20244__$1,secured_eval_QMARK_))
);

return c__16038__auto__;
});

klipse.utils.load_script.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
klipse.utils.load_script.cljs$lang$applyTo = (function (seq20241){
var G__20242 = cljs.core.first.call(null,seq20241);
var seq20241__$1 = cljs.core.next.call(null,seq20241);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20242,seq20241__$1);
});

klipse.utils.load_script_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_script);
klipse.utils.load_scripts = (function klipse$utils$load_scripts(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20411 = arguments.length;
var i__4731__auto___20412 = (0);
while(true){
if((i__4731__auto___20412 < len__4730__auto___20411)){
args__4736__auto__.push((arguments[i__4731__auto___20412]));

var G__20413 = (i__4731__auto___20412 + (1));
i__4731__auto___20412 = G__20413;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (scripts,p__20355){
var map__20356 = p__20355;
var map__20356__$1 = (((((!((map__20356 == null))))?(((((map__20356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20356):map__20356);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__20356__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__16038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16038__auto__,map__20356,map__20356__$1,secured_eval_QMARK_){
return (function (){
var f__16039__auto__ = (function (){var switch__15943__auto__ = ((function (c__16038__auto__,map__20356,map__20356__$1,secured_eval_QMARK_){
return (function (state_20391){
var state_val_20392 = (state_20391[(1)]);
if((state_val_20392 === (7))){
var inst_20370 = (state_20391[(7)]);
var inst_20369 = (state_20391[(2)]);
var inst_20370__$1 = cljs.core.nth.call(null,inst_20369,(0),null);
var inst_20371 = cljs.core.nth.call(null,inst_20369,(1),null);
var inst_20372 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_20370__$1);
var state_20391__$1 = (function (){var statearr_20393 = state_20391;
(statearr_20393[(7)] = inst_20370__$1);

(statearr_20393[(8)] = inst_20371);

return statearr_20393;
})();
if(inst_20372){
var statearr_20394_20414 = state_20391__$1;
(statearr_20394_20414[(1)] = (8));

} else {
var statearr_20395_20415 = state_20391__$1;
(statearr_20395_20415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (1))){
var inst_20358 = scripts;
var state_20391__$1 = (function (){var statearr_20396 = state_20391;
(statearr_20396[(9)] = inst_20358);

return statearr_20396;
})();
var statearr_20397_20416 = state_20391__$1;
(statearr_20397_20416[(2)] = null);

(statearr_20397_20416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (4))){
var inst_20358 = (state_20391[(9)]);
var inst_20365 = cljs.core.first.call(null,inst_20358);
var inst_20366 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20365);
var inst_20367 = klipse.utils.load_script_mem.call(null,inst_20366,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),secured_eval_QMARK_);
var state_20391__$1 = state_20391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20391__$1,(7),inst_20367);
} else {
if((state_val_20392 === (6))){
var inst_20387 = (state_20391[(2)]);
var state_20391__$1 = state_20391;
var statearr_20398_20417 = state_20391__$1;
(statearr_20398_20417[(2)] = inst_20387);

(statearr_20398_20417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (3))){
var inst_20389 = (state_20391[(2)]);
var state_20391__$1 = state_20391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20391__$1,inst_20389);
} else {
if((state_val_20392 === (2))){
var inst_20358 = (state_20391[(9)]);
var inst_20360 = cljs.core.seq.call(null,inst_20358);
var state_20391__$1 = state_20391;
if(inst_20360){
var statearr_20399_20418 = state_20391__$1;
(statearr_20399_20418[(1)] = (4));

} else {
var statearr_20400_20419 = state_20391__$1;
(statearr_20400_20419[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (9))){
var state_20391__$1 = state_20391;
var statearr_20401_20420 = state_20391__$1;
(statearr_20401_20420[(2)] = null);

(statearr_20401_20420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (5))){
var inst_20383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20384 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_20385 = (new cljs.core.PersistentVector(null,1,(5),inst_20383,inst_20384,null));
var state_20391__$1 = state_20391;
var statearr_20402_20421 = state_20391__$1;
(statearr_20402_20421[(2)] = inst_20385);

(statearr_20402_20421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (10))){
var inst_20370 = (state_20391[(7)]);
var inst_20371 = (state_20391[(8)]);
var inst_20378 = (state_20391[(2)]);
var inst_20379 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20380 = [inst_20370,inst_20371];
var inst_20381 = (new cljs.core.PersistentVector(null,2,(5),inst_20379,inst_20380,null));
var state_20391__$1 = (function (){var statearr_20403 = state_20391;
(statearr_20403[(10)] = inst_20378);

return statearr_20403;
})();
var statearr_20404_20422 = state_20391__$1;
(statearr_20404_20422[(2)] = inst_20381);

(statearr_20404_20422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20392 === (8))){
var inst_20358 = (state_20391[(9)]);
var inst_20374 = cljs.core.rest.call(null,inst_20358);
var inst_20358__$1 = inst_20374;
var state_20391__$1 = (function (){var statearr_20405 = state_20391;
(statearr_20405[(9)] = inst_20358__$1);

return statearr_20405;
})();
var statearr_20406_20423 = state_20391__$1;
(statearr_20406_20423[(2)] = null);

(statearr_20406_20423[(1)] = (2));


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
}
}
}
});})(c__16038__auto__,map__20356,map__20356__$1,secured_eval_QMARK_))
;
return ((function (switch__15943__auto__,c__16038__auto__,map__20356,map__20356__$1,secured_eval_QMARK_){
return (function() {
var klipse$utils$state_machine__15944__auto__ = null;
var klipse$utils$state_machine__15944__auto____0 = (function (){
var statearr_20407 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20407[(0)] = klipse$utils$state_machine__15944__auto__);

(statearr_20407[(1)] = (1));

return statearr_20407;
});
var klipse$utils$state_machine__15944__auto____1 = (function (state_20391){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_20391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20408){if((e20408 instanceof Object)){
var ex__15947__auto__ = e20408;
var statearr_20409_20424 = state_20391;
(statearr_20409_20424[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20425 = state_20391;
state_20391 = G__20425;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
klipse$utils$state_machine__15944__auto__ = function(state_20391){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__15944__auto____0.call(this);
case 1:
return klipse$utils$state_machine__15944__auto____1.call(this,state_20391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__15944__auto____0;
klipse$utils$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__15944__auto____1;
return klipse$utils$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16038__auto__,map__20356,map__20356__$1,secured_eval_QMARK_))
})();
var state__16040__auto__ = (function (){var statearr_20410 = f__16039__auto__.call(null);
(statearr_20410[(6)] = c__16038__auto__);

return statearr_20410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16040__auto__);
});})(c__16038__auto__,map__20356,map__20356__$1,secured_eval_QMARK_))
);

return c__16038__auto__;
});

klipse.utils.load_scripts.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
klipse.utils.load_scripts.cljs$lang$applyTo = (function (seq20353){
var G__20354 = cljs.core.first.call(null,seq20353);
var seq20353__$1 = cljs.core.next.call(null,seq20353);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20354,seq20353__$1);
});

klipse.utils.load_scripts_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_scripts);
klipse.utils.verbose_QMARK_ = (function klipse$utils$verbose_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "false";
}
})()));
});
klipse.utils.klipse_settings_STAR_ = (function klipse$utils$klipse_settings_STAR_(){
var w = (((typeof window !== 'undefined'))?window:({}));
return cljs.core.js__GT_clj.call(null,(w["klipse_settings"]),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
klipse.utils.klipse_settings = cljs.core.memoize.call(null,klipse.utils.klipse_settings_STAR_);
klipse.utils.add_script_tag_BANG_ = (function klipse$utils$add_script_tag_BANG_(url){
var c = cljs.core.async.chan.call(null);
var node = document.createElement("script");
var body = (document["body"]);
(node["src"] = url);

(node["onerror"] = ((function (node,body,c){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),url], null));
});})(node,body,c))
);

(node["onload"] = ((function (node,body,c){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),url], null));
});})(node,body,c))
);

(node["type"] = "text/javascript");

var obj__18568__auto___20428 = body;
var f__18569__auto___20429 = (function (){var obj20426 = obj__18568__auto___20428;
var k20427 = "appendChild";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20426,k20427)){
return (obj20426[k20427]);
} else {
return null;
}
})();
f__18569__auto___20429.call(obj__18568__auto___20428,node);

return c;
});
klipse.utils.add_script_tag_once_BANG_ = klipse.utils.runonce.call(null,klipse.utils.add_script_tag_BANG_);

//# sourceMappingURL=utils.js.map
