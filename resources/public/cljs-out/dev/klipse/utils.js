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
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,counter){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,counter){
return (function (state_28774){
var state_val_28775 = (state_28774[(1)]);
if((state_val_28775 === (1))){
var inst_28761 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_28762 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_28774__$1 = (function (){var statearr_28776 = state_28774;
(statearr_28776[(7)] = inst_28761);

return statearr_28776;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(2),inst_28762);
} else {
if((state_val_28775 === (2))){
var inst_28764 = (state_28774[(2)]);
var inst_28765 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var inst_28766 = cljs.core.deref.call(null,counter);
var inst_28767 = (inst_28766 === (0));
var state_28774__$1 = (function (){var statearr_28777 = state_28774;
(statearr_28777[(8)] = inst_28764);

(statearr_28777[(9)] = inst_28765);

return statearr_28777;
})();
if(cljs.core.truth_(inst_28767)){
var statearr_28778_28801 = state_28774__$1;
(statearr_28778_28801[(1)] = (3));

} else {
var statearr_28779_28802 = state_28774__$1;
(statearr_28779_28802[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (3))){
var inst_28769 = func.call(null);
var state_28774__$1 = state_28774;
var statearr_28780_28803 = state_28774__$1;
(statearr_28780_28803[(2)] = inst_28769);

(statearr_28780_28803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (4))){
var state_28774__$1 = state_28774;
var statearr_28781_28804 = state_28774__$1;
(statearr_28781_28804[(2)] = null);

(statearr_28781_28804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (5))){
var inst_28772 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28774__$1,inst_28772);
} else {
return null;
}
}
}
}
}
});})(c__21188__auto__,counter))
;
return ((function (switch__21021__auto__,c__21188__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__21022__auto__ = null;
var klipse$utils$debounce_$_state_machine__21022__auto____0 = (function (){
var statearr_28782 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28782[(0)] = klipse$utils$debounce_$_state_machine__21022__auto__);

(statearr_28782[(1)] = (1));

return statearr_28782;
});
var klipse$utils$debounce_$_state_machine__21022__auto____1 = (function (state_28774){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_28774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e28783){if((e28783 instanceof Object)){
var ex__21025__auto__ = e28783;
var statearr_28784_28805 = state_28774;
(statearr_28784_28805[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28806 = state_28774;
state_28774 = G__28806;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__21022__auto__ = function(state_28774){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__21022__auto____1.call(this,state_28774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$debounce_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__21022__auto____0;
klipse$utils$debounce_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__21022__auto____1;
return klipse$utils$debounce_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,counter))
})();
var state__21190__auto__ = (function (){var statearr_28785 = f__21189__auto__.call(null);
(statearr_28785[(6)] = c__21188__auto__);

return statearr_28785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,counter))
);

return c__21188__auto__;
});})(counter))
,((function (counter){
return (function (){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,counter){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,counter){
return (function (state_28793){
var state_val_28794 = (state_28793[(1)]);
if((state_val_28794 === (1))){
var inst_28786 = func.call(null);
var inst_28787 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_28788 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_28793__$1 = (function (){var statearr_28795 = state_28793;
(statearr_28795[(7)] = inst_28787);

(statearr_28795[(8)] = inst_28786);

return statearr_28795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28793__$1,(2),inst_28788);
} else {
if((state_val_28794 === (2))){
var inst_28790 = (state_28793[(2)]);
var inst_28791 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var state_28793__$1 = (function (){var statearr_28796 = state_28793;
(statearr_28796[(9)] = inst_28790);

return statearr_28796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28793__$1,inst_28791);
} else {
return null;
}
}
});})(c__21188__auto__,counter))
;
return ((function (switch__21021__auto__,c__21188__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__21022__auto__ = null;
var klipse$utils$debounce_$_state_machine__21022__auto____0 = (function (){
var statearr_28797 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28797[(0)] = klipse$utils$debounce_$_state_machine__21022__auto__);

(statearr_28797[(1)] = (1));

return statearr_28797;
});
var klipse$utils$debounce_$_state_machine__21022__auto____1 = (function (state_28793){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_28793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e28798){if((e28798 instanceof Object)){
var ex__21025__auto__ = e28798;
var statearr_28799_28807 = state_28793;
(statearr_28799_28807[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28808 = state_28793;
state_28793 = G__28808;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__21022__auto__ = function(state_28793){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__21022__auto____1.call(this,state_28793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$debounce_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__21022__auto____0;
klipse$utils$debounce_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__21022__auto____1;
return klipse$utils$debounce_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,counter))
})();
var state__21190__auto__ = (function (){var statearr_28800 = f__21189__auto__.call(null);
(statearr_28800[(6)] = c__21188__auto__);

return statearr_28800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,counter))
);

return c__21188__auto__;
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
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__){
return (function (state_28852){
var state_val_28853 = (state_28852[(1)]);
if((state_val_28853 === (7))){
var state_28852__$1 = state_28852;
var statearr_28854_28881 = state_28852__$1;
(statearr_28854_28881[(2)] = false);

(statearr_28854_28881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (1))){
var state_28852__$1 = state_28852;
if(cljs.core.truth_(gist_id)){
var statearr_28855_28882 = state_28852__$1;
(statearr_28855_28882[(1)] = (2));

} else {
var statearr_28856_28883 = state_28852__$1;
(statearr_28856_28883[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (4))){
var inst_28850 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28852__$1,inst_28850);
} else {
if((state_val_28853 === (15))){
var inst_28839 = (state_28852[(7)]);
var inst_28811 = (state_28852[(8)]);
var inst_28844 = ["\"","Wrong gist path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28811),"\n","gist-id= ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),"\n","http status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28839),"\""].join('');
var state_28852__$1 = state_28852;
var statearr_28857_28884 = state_28852__$1;
(statearr_28857_28884[(2)] = inst_28844);

(statearr_28857_28884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (13))){
var inst_28817 = (state_28852[(9)]);
var state_28852__$1 = state_28852;
var statearr_28858_28885 = state_28852__$1;
(statearr_28858_28885[(2)] = inst_28817);

(statearr_28858_28885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (6))){
var inst_28817 = (state_28852[(9)]);
var inst_28822 = inst_28817.cljs$lang$protocol_mask$partition0$;
var inst_28823 = (inst_28822 & (64));
var inst_28824 = inst_28817.cljs$core$ISeq$;
var inst_28825 = (cljs.core.PROTOCOL_SENTINEL === inst_28824);
var inst_28826 = ((inst_28823) || (inst_28825));
var state_28852__$1 = state_28852;
if(cljs.core.truth_(inst_28826)){
var statearr_28859_28886 = state_28852__$1;
(statearr_28859_28886[(1)] = (9));

} else {
var statearr_28860_28887 = state_28852__$1;
(statearr_28860_28887[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (17))){
var inst_28847 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
var statearr_28861_28888 = state_28852__$1;
(statearr_28861_28888[(2)] = inst_28847);

(statearr_28861_28888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (3))){
var state_28852__$1 = state_28852;
var statearr_28862_28889 = state_28852__$1;
(statearr_28862_28889[(2)] = null);

(statearr_28862_28889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (12))){
var inst_28817 = (state_28852[(9)]);
var inst_28835 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28817);
var state_28852__$1 = state_28852;
var statearr_28863_28890 = state_28852__$1;
(statearr_28863_28890[(2)] = inst_28835);

(statearr_28863_28890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (2))){
var inst_28811 = (state_28852[(8)]);
var inst_28811__$1 = klipse.utils.gist_path_raw.call(null,gist_id);
var inst_28812 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_28813 = [false];
var inst_28814 = cljs.core.PersistentHashMap.fromArrays(inst_28812,inst_28813);
var inst_28815 = cljs_http.client.get.call(null,inst_28811__$1,inst_28814);
var state_28852__$1 = (function (){var statearr_28864 = state_28852;
(statearr_28864[(8)] = inst_28811__$1);

return statearr_28864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28852__$1,(5),inst_28815);
} else {
if((state_val_28853 === (11))){
var inst_28830 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
var statearr_28865_28891 = state_28852__$1;
(statearr_28865_28891[(2)] = inst_28830);

(statearr_28865_28891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (9))){
var state_28852__$1 = state_28852;
var statearr_28866_28892 = state_28852__$1;
(statearr_28866_28892[(2)] = true);

(statearr_28866_28892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (5))){
var inst_28817 = (state_28852[(9)]);
var inst_28817__$1 = (state_28852[(2)]);
var inst_28819 = (inst_28817__$1 == null);
var inst_28820 = cljs.core.not.call(null,inst_28819);
var state_28852__$1 = (function (){var statearr_28867 = state_28852;
(statearr_28867[(9)] = inst_28817__$1);

return statearr_28867;
})();
if(inst_28820){
var statearr_28868_28893 = state_28852__$1;
(statearr_28868_28893[(1)] = (6));

} else {
var statearr_28869_28894 = state_28852__$1;
(statearr_28869_28894[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (14))){
var inst_28839 = (state_28852[(7)]);
var inst_28838 = (state_28852[(2)]);
var inst_28839__$1 = cljs.core.get.call(null,inst_28838,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_28840 = cljs.core.get.call(null,inst_28838,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_28841 = cljs.core._EQ_.call(null,inst_28839__$1,(200));
var inst_28842 = (!(inst_28841));
var state_28852__$1 = (function (){var statearr_28870 = state_28852;
(statearr_28870[(7)] = inst_28839__$1);

(statearr_28870[(10)] = inst_28840);

return statearr_28870;
})();
if(inst_28842){
var statearr_28871_28895 = state_28852__$1;
(statearr_28871_28895[(1)] = (15));

} else {
var statearr_28872_28896 = state_28852__$1;
(statearr_28872_28896[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (16))){
var inst_28840 = (state_28852[(10)]);
var state_28852__$1 = state_28852;
var statearr_28873_28897 = state_28852__$1;
(statearr_28873_28897[(2)] = inst_28840);

(statearr_28873_28897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (10))){
var state_28852__$1 = state_28852;
var statearr_28874_28898 = state_28852__$1;
(statearr_28874_28898[(2)] = false);

(statearr_28874_28898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (8))){
var inst_28833 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
if(cljs.core.truth_(inst_28833)){
var statearr_28875_28899 = state_28852__$1;
(statearr_28875_28899[(1)] = (12));

} else {
var statearr_28876_28900 = state_28852__$1;
(statearr_28876_28900[(1)] = (13));

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
});})(c__21188__auto__))
;
return ((function (switch__21021__auto__,c__21188__auto__){
return (function() {
var klipse$utils$read_input_from_gist_$_state_machine__21022__auto__ = null;
var klipse$utils$read_input_from_gist_$_state_machine__21022__auto____0 = (function (){
var statearr_28877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28877[(0)] = klipse$utils$read_input_from_gist_$_state_machine__21022__auto__);

(statearr_28877[(1)] = (1));

return statearr_28877;
});
var klipse$utils$read_input_from_gist_$_state_machine__21022__auto____1 = (function (state_28852){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_28852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e28878){if((e28878 instanceof Object)){
var ex__21025__auto__ = e28878;
var statearr_28879_28901 = state_28852;
(statearr_28879_28901[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28902 = state_28852;
state_28852 = G__28902;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$utils$read_input_from_gist_$_state_machine__21022__auto__ = function(state_28852){
switch(arguments.length){
case 0:
return klipse$utils$read_input_from_gist_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$utils$read_input_from_gist_$_state_machine__21022__auto____1.call(this,state_28852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$read_input_from_gist_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$read_input_from_gist_$_state_machine__21022__auto____0;
klipse$utils$read_input_from_gist_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$read_input_from_gist_$_state_machine__21022__auto____1;
return klipse$utils$read_input_from_gist_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__))
})();
var state__21190__auto__ = (function (){var statearr_28880 = f__21189__auto__.call(null);
(statearr_28880[(6)] = c__21188__auto__);

return statearr_28880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__))
);

return c__21188__auto__;
});
klipse.utils.runonce = (function klipse$utils$runonce(f){
var ran = cljs.core.atom.call(null,false);
return ((function (ran){
return (function() { 
var G__28903__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__28903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28904__i = 0, G__28904__a = new Array(arguments.length -  0);
while (G__28904__i < G__28904__a.length) {G__28904__a[G__28904__i] = arguments[G__28904__i + 0]; ++G__28904__i;}
  args = new cljs.core.IndexedSeq(G__28904__a,0,null);
} 
return G__28903__delegate.call(this,args);};
G__28903.cljs$lang$maxFixedArity = 0;
G__28903.cljs$lang$applyTo = (function (arglist__28905){
var args = cljs.core.seq(arglist__28905);
return G__28903__delegate(args);
});
G__28903.cljs$core$IFn$_invoke$arity$variadic = G__28903__delegate;
return G__28903;
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
var G__28942__delegate = function (args){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,ran){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,ran){
return (function (state_28926){
var state_val_28927 = (state_28926[(1)]);
if((state_val_28927 === (1))){
var inst_28906 = cljs.core.deref.call(null,ran);
var inst_28907 = cljs.core.not.call(null,inst_28906);
var state_28926__$1 = state_28926;
if(inst_28907){
var statearr_28928_28943 = state_28926__$1;
(statearr_28928_28943[(1)] = (2));

} else {
var statearr_28929_28944 = state_28926__$1;
(statearr_28929_28944[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (2))){
var inst_28909 = cljs.core.apply.call(null,f,args);
var state_28926__$1 = state_28926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28926__$1,(5),inst_28909);
} else {
if((state_val_28927 === (3))){
var inst_28920 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28921 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_28922 = (new cljs.core.PersistentVector(null,1,(5),inst_28920,inst_28921,null));
var state_28926__$1 = state_28926;
var statearr_28930_28945 = state_28926__$1;
(statearr_28930_28945[(2)] = inst_28922);

(statearr_28930_28945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (4))){
var inst_28924 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28926__$1,inst_28924);
} else {
if((state_val_28927 === (5))){
var inst_28911 = (state_28926[(7)]);
var inst_28911__$1 = (state_28926[(2)]);
var inst_28912 = cljs.core.first.call(null,inst_28911__$1);
var inst_28913 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_28912);
var state_28926__$1 = (function (){var statearr_28931 = state_28926;
(statearr_28931[(7)] = inst_28911__$1);

return statearr_28931;
})();
if(inst_28913){
var statearr_28932_28946 = state_28926__$1;
(statearr_28932_28946[(1)] = (6));

} else {
var statearr_28933_28947 = state_28926__$1;
(statearr_28933_28947[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (6))){
var inst_28915 = cljs.core.reset_BANG_.call(null,ran,true);
var state_28926__$1 = state_28926;
var statearr_28934_28948 = state_28926__$1;
(statearr_28934_28948[(2)] = inst_28915);

(statearr_28934_28948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (7))){
var state_28926__$1 = state_28926;
var statearr_28935_28949 = state_28926__$1;
(statearr_28935_28949[(2)] = null);

(statearr_28935_28949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (8))){
var inst_28911 = (state_28926[(7)]);
var inst_28918 = (state_28926[(2)]);
var state_28926__$1 = (function (){var statearr_28936 = state_28926;
(statearr_28936[(8)] = inst_28918);

return statearr_28936;
})();
var statearr_28937_28950 = state_28926__$1;
(statearr_28937_28950[(2)] = inst_28911);

(statearr_28937_28950[(1)] = (4));


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
});})(c__21188__auto__,ran))
;
return ((function (switch__21021__auto__,c__21188__auto__,ran){
return (function() {
var klipse$utils$runonce_async_$_state_machine__21022__auto__ = null;
var klipse$utils$runonce_async_$_state_machine__21022__auto____0 = (function (){
var statearr_28938 = [null,null,null,null,null,null,null,null,null];
(statearr_28938[(0)] = klipse$utils$runonce_async_$_state_machine__21022__auto__);

(statearr_28938[(1)] = (1));

return statearr_28938;
});
var klipse$utils$runonce_async_$_state_machine__21022__auto____1 = (function (state_28926){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_28926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e28939){if((e28939 instanceof Object)){
var ex__21025__auto__ = e28939;
var statearr_28940_28951 = state_28926;
(statearr_28940_28951[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28952 = state_28926;
state_28926 = G__28952;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$utils$runonce_async_$_state_machine__21022__auto__ = function(state_28926){
switch(arguments.length){
case 0:
return klipse$utils$runonce_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$utils$runonce_async_$_state_machine__21022__auto____1.call(this,state_28926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$runonce_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$runonce_async_$_state_machine__21022__auto____0;
klipse$utils$runonce_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$runonce_async_$_state_machine__21022__auto____1;
return klipse$utils$runonce_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,ran))
})();
var state__21190__auto__ = (function (){var statearr_28941 = f__21189__auto__.call(null);
(statearr_28941[(6)] = c__21188__auto__);

return statearr_28941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,ran))
);

return c__21188__auto__;
};
var G__28942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28953__i = 0, G__28953__a = new Array(arguments.length -  0);
while (G__28953__i < G__28953__a.length) {G__28953__a[G__28953__i] = arguments[G__28953__i + 0]; ++G__28953__i;}
  args = new cljs.core.IndexedSeq(G__28953__a,0,null);
} 
return G__28942__delegate.call(this,args);};
G__28942.cljs$lang$maxFixedArity = 0;
G__28942.cljs$lang$applyTo = (function (arglist__28954){
var args = cljs.core.seq(arglist__28954);
return G__28942__delegate(args);
});
G__28942.cljs$core$IFn$_invoke$arity$variadic = G__28942__delegate;
return G__28942;
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
var G__28991__delegate = function (args){
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,ran){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,ran){
return (function (state_28975){
var state_val_28976 = (state_28975[(1)]);
if((state_val_28976 === (1))){
var inst_28955 = cljs.core.deref.call(null,ran);
var inst_28956 = cljs.core.contains_QMARK_.call(null,inst_28955,args);
var inst_28957 = (!(inst_28956));
var state_28975__$1 = state_28975;
if(inst_28957){
var statearr_28977_28992 = state_28975__$1;
(statearr_28977_28992[(1)] = (2));

} else {
var statearr_28978_28993 = state_28975__$1;
(statearr_28978_28993[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (2))){
var inst_28959 = cljs.core.apply.call(null,f,args);
var state_28975__$1 = state_28975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28975__$1,(5),inst_28959);
} else {
if((state_val_28976 === (3))){
var inst_28970 = cljs.core.deref.call(null,ran);
var inst_28971 = cljs.core.get.call(null,inst_28970,args);
var state_28975__$1 = state_28975;
var statearr_28979_28994 = state_28975__$1;
(statearr_28979_28994[(2)] = inst_28971);

(statearr_28979_28994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (4))){
var inst_28973 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28975__$1,inst_28973);
} else {
if((state_val_28976 === (5))){
var inst_28961 = (state_28975[(7)]);
var inst_28961__$1 = (state_28975[(2)]);
var inst_28962 = cljs.core.first.call(null,inst_28961__$1);
var inst_28963 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_28962);
var state_28975__$1 = (function (){var statearr_28980 = state_28975;
(statearr_28980[(7)] = inst_28961__$1);

return statearr_28980;
})();
if(inst_28963){
var statearr_28981_28995 = state_28975__$1;
(statearr_28981_28995[(1)] = (6));

} else {
var statearr_28982_28996 = state_28975__$1;
(statearr_28982_28996[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (6))){
var inst_28961 = (state_28975[(7)]);
var inst_28965 = cljs.core.swap_BANG_.call(null,ran,cljs.core.assoc,args,inst_28961);
var state_28975__$1 = state_28975;
var statearr_28983_28997 = state_28975__$1;
(statearr_28983_28997[(2)] = inst_28965);

(statearr_28983_28997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (7))){
var state_28975__$1 = state_28975;
var statearr_28984_28998 = state_28975__$1;
(statearr_28984_28998[(2)] = null);

(statearr_28984_28998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (8))){
var inst_28961 = (state_28975[(7)]);
var inst_28968 = (state_28975[(2)]);
var state_28975__$1 = (function (){var statearr_28985 = state_28975;
(statearr_28985[(8)] = inst_28968);

return statearr_28985;
})();
var statearr_28986_28999 = state_28975__$1;
(statearr_28986_28999[(2)] = inst_28961);

(statearr_28986_28999[(1)] = (4));


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
});})(c__21188__auto__,ran))
;
return ((function (switch__21021__auto__,c__21188__auto__,ran){
return (function() {
var klipse$utils$memoize_async_$_state_machine__21022__auto__ = null;
var klipse$utils$memoize_async_$_state_machine__21022__auto____0 = (function (){
var statearr_28987 = [null,null,null,null,null,null,null,null,null];
(statearr_28987[(0)] = klipse$utils$memoize_async_$_state_machine__21022__auto__);

(statearr_28987[(1)] = (1));

return statearr_28987;
});
var klipse$utils$memoize_async_$_state_machine__21022__auto____1 = (function (state_28975){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_28975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e28988){if((e28988 instanceof Object)){
var ex__21025__auto__ = e28988;
var statearr_28989_29000 = state_28975;
(statearr_28989_29000[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29001 = state_28975;
state_28975 = G__29001;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$utils$memoize_async_$_state_machine__21022__auto__ = function(state_28975){
switch(arguments.length){
case 0:
return klipse$utils$memoize_async_$_state_machine__21022__auto____0.call(this);
case 1:
return klipse$utils$memoize_async_$_state_machine__21022__auto____1.call(this,state_28975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$memoize_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$memoize_async_$_state_machine__21022__auto____0;
klipse$utils$memoize_async_$_state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$memoize_async_$_state_machine__21022__auto____1;
return klipse$utils$memoize_async_$_state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,ran))
})();
var state__21190__auto__ = (function (){var statearr_28990 = f__21189__auto__.call(null);
(statearr_28990[(6)] = c__21188__auto__);

return statearr_28990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,ran))
);

return c__21188__auto__;
};
var G__28991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29002__i = 0, G__29002__a = new Array(arguments.length -  0);
while (G__29002__i < G__29002__a.length) {G__29002__a[G__29002__i] = arguments[G__29002__i + 0]; ++G__29002__i;}
  args = new cljs.core.IndexedSeq(G__29002__a,0,null);
} 
return G__28991__delegate.call(this,args);};
G__28991.cljs$lang$maxFixedArity = 0;
G__28991.cljs$lang$applyTo = (function (arglist__29003){
var args = cljs.core.seq(arglist__29003);
return G__28991__delegate(args);
});
G__28991.cljs$core$IFn$_invoke$arity$variadic = G__28991__delegate;
return G__28991;
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
var obj29004_29016 = window;
var obj29005_29017 = (((!((obj29004_29016 == null))))?obj29004_29016:({}));
(obj29005_29017["eval"] = ((function (obj29005_29017,obj29004_29016,original_eval){
return (function (src){
return original_eval.call(null,["with (klipse_eval_sandbox){ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"}"].join(''));
});})(obj29005_29017,obj29004_29016,original_eval))
);


klipse.utils.eval_in_global_scope = eval;

var obj29008_29018 = window;
var obj29009_29019 = (((!((obj29008_29018 == null))))?obj29008_29018:({}));
(obj29009_29019["klipse_unsecured_eval"] = original_eval);


var obj29012 = window;
var obj29013 = (((!((obj29012 == null))))?obj29012:({}));
(obj29013["klipse_eval_sandbox"] = cljs.core.clj__GT_js.call(null,cljs.core.zipmap.call(null,the_forbidden_symbols,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY))));

return obj29013;
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
return (function (){var or__4131__auto__ = (function (){var obj29022 = window;
var k29023 = "klipse_unsecured_eval";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29022,k29023)){
return (obj29022[k29023]);
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
var len__4730__auto___29111 = arguments.length;
var i__4731__auto___29112 = (0);
while(true){
if((i__4731__auto___29112 < len__4730__auto___29111)){
args__4736__auto__.push((arguments[i__4731__auto___29112]));

var G__29113 = (i__4731__auto___29112 + (1));
i__4731__auto___29112 = G__29113;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic = (function (script,p__29026){
var map__29027 = p__29026;
var map__29027__$1 = (((((!((map__29027 == null))))?(((((map__29027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29027):map__29027);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__29027__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,map__29027,map__29027__$1,secured_eval_QMARK_){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,map__29027,map__29027__$1,secured_eval_QMARK_){
return (function (state_29080){
var state_val_29081 = (state_29080[(1)]);
if((state_val_29081 === (7))){
var state_29080__$1 = state_29080;
var statearr_29082_29114 = state_29080__$1;
(statearr_29082_29114[(2)] = false);

(statearr_29082_29114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (1))){
var inst_29029 = console.info("loading:",script);
var inst_29031 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_29032 = [false];
var inst_29033 = cljs.core.PersistentHashMap.fromArrays(inst_29031,inst_29032);
var inst_29034 = cljs_http.client.get.call(null,script,inst_29033);
var state_29080__$1 = (function (){var statearr_29083 = state_29080;
(statearr_29083[(7)] = inst_29029);

return statearr_29083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29080__$1,(2),inst_29034);
} else {
if((state_val_29081 === (4))){
var state_29080__$1 = state_29080;
var statearr_29084_29115 = state_29080__$1;
(statearr_29084_29115[(2)] = false);

(statearr_29084_29115[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (15))){
var inst_29059 = (state_29080[(8)]);
var inst_29064 = klipse.utils.eval_in_global_scope.call(null,inst_29059);
var state_29080__$1 = state_29080;
var statearr_29085_29116 = state_29080__$1;
(statearr_29085_29116[(2)] = inst_29064);

(statearr_29085_29116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (13))){
var inst_29058 = (state_29080[(9)]);
var inst_29074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29075 = [inst_29058,script];
var inst_29076 = (new cljs.core.PersistentVector(null,2,(5),inst_29074,inst_29075,null));
var state_29080__$1 = state_29080;
var statearr_29086_29117 = state_29080__$1;
(statearr_29086_29117[(2)] = inst_29076);

(statearr_29086_29117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (6))){
var state_29080__$1 = state_29080;
var statearr_29087_29118 = state_29080__$1;
(statearr_29087_29118[(2)] = true);

(statearr_29087_29118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (17))){
var inst_29068 = (state_29080[(2)]);
var inst_29069 = console.info("evaluation done:",script);
var inst_29070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29071 = [new cljs.core.Keyword(null,"ok","ok",967785236),script];
var inst_29072 = (new cljs.core.PersistentVector(null,2,(5),inst_29070,inst_29071,null));
var state_29080__$1 = (function (){var statearr_29088 = state_29080;
(statearr_29088[(10)] = inst_29068);

(statearr_29088[(11)] = inst_29069);

return statearr_29088;
})();
var statearr_29089_29119 = state_29080__$1;
(statearr_29089_29119[(2)] = inst_29072);

(statearr_29089_29119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (3))){
var inst_29036 = (state_29080[(12)]);
var inst_29041 = inst_29036.cljs$lang$protocol_mask$partition0$;
var inst_29042 = (inst_29041 & (64));
var inst_29043 = inst_29036.cljs$core$ISeq$;
var inst_29044 = (cljs.core.PROTOCOL_SENTINEL === inst_29043);
var inst_29045 = ((inst_29042) || (inst_29044));
var state_29080__$1 = state_29080;
if(cljs.core.truth_(inst_29045)){
var statearr_29090_29120 = state_29080__$1;
(statearr_29090_29120[(1)] = (6));

} else {
var statearr_29091_29121 = state_29080__$1;
(statearr_29091_29121[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (12))){
var inst_29062 = console.info("evaluating:",script);
var state_29080__$1 = (function (){var statearr_29092 = state_29080;
(statearr_29092[(13)] = inst_29062);

return statearr_29092;
})();
if(cljs.core.truth_(secured_eval_QMARK_)){
var statearr_29093_29122 = state_29080__$1;
(statearr_29093_29122[(1)] = (15));

} else {
var statearr_29094_29123 = state_29080__$1;
(statearr_29094_29123[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (2))){
var inst_29036 = (state_29080[(12)]);
var inst_29036__$1 = (state_29080[(2)]);
var inst_29038 = (inst_29036__$1 == null);
var inst_29039 = cljs.core.not.call(null,inst_29038);
var state_29080__$1 = (function (){var statearr_29095 = state_29080;
(statearr_29095[(12)] = inst_29036__$1);

return statearr_29095;
})();
if(inst_29039){
var statearr_29096_29124 = state_29080__$1;
(statearr_29096_29124[(1)] = (3));

} else {
var statearr_29097_29125 = state_29080__$1;
(statearr_29097_29125[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (11))){
var inst_29058 = (state_29080[(9)]);
var inst_29057 = (state_29080[(2)]);
var inst_29058__$1 = cljs.core.get.call(null,inst_29057,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_29059 = cljs.core.get.call(null,inst_29057,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_29060 = cljs.core._EQ_.call(null,(200),inst_29058__$1);
var state_29080__$1 = (function (){var statearr_29098 = state_29080;
(statearr_29098[(9)] = inst_29058__$1);

(statearr_29098[(8)] = inst_29059);

return statearr_29098;
})();
if(inst_29060){
var statearr_29099_29126 = state_29080__$1;
(statearr_29099_29126[(1)] = (12));

} else {
var statearr_29100_29127 = state_29080__$1;
(statearr_29100_29127[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (9))){
var inst_29036 = (state_29080[(12)]);
var inst_29054 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29036);
var state_29080__$1 = state_29080;
var statearr_29101_29128 = state_29080__$1;
(statearr_29101_29128[(2)] = inst_29054);

(statearr_29101_29128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (5))){
var inst_29052 = (state_29080[(2)]);
var state_29080__$1 = state_29080;
if(cljs.core.truth_(inst_29052)){
var statearr_29102_29129 = state_29080__$1;
(statearr_29102_29129[(1)] = (9));

} else {
var statearr_29103_29130 = state_29080__$1;
(statearr_29103_29130[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (14))){
var inst_29078 = (state_29080[(2)]);
var state_29080__$1 = state_29080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29080__$1,inst_29078);
} else {
if((state_val_29081 === (16))){
var inst_29059 = (state_29080[(8)]);
var inst_29066 = klipse.utils.unsecured_eval_in_global_scope.call(null,inst_29059);
var state_29080__$1 = state_29080;
var statearr_29104_29131 = state_29080__$1;
(statearr_29104_29131[(2)] = inst_29066);

(statearr_29104_29131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (10))){
var inst_29036 = (state_29080[(12)]);
var state_29080__$1 = state_29080;
var statearr_29105_29132 = state_29080__$1;
(statearr_29105_29132[(2)] = inst_29036);

(statearr_29105_29132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (8))){
var inst_29049 = (state_29080[(2)]);
var state_29080__$1 = state_29080;
var statearr_29106_29133 = state_29080__$1;
(statearr_29106_29133[(2)] = inst_29049);

(statearr_29106_29133[(1)] = (5));


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
});})(c__21188__auto__,map__29027,map__29027__$1,secured_eval_QMARK_))
;
return ((function (switch__21021__auto__,c__21188__auto__,map__29027,map__29027__$1,secured_eval_QMARK_){
return (function() {
var klipse$utils$state_machine__21022__auto__ = null;
var klipse$utils$state_machine__21022__auto____0 = (function (){
var statearr_29107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29107[(0)] = klipse$utils$state_machine__21022__auto__);

(statearr_29107[(1)] = (1));

return statearr_29107;
});
var klipse$utils$state_machine__21022__auto____1 = (function (state_29080){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_29080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e29108){if((e29108 instanceof Object)){
var ex__21025__auto__ = e29108;
var statearr_29109_29134 = state_29080;
(statearr_29109_29134[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29135 = state_29080;
state_29080 = G__29135;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$utils$state_machine__21022__auto__ = function(state_29080){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__21022__auto____0.call(this);
case 1:
return klipse$utils$state_machine__21022__auto____1.call(this,state_29080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__21022__auto____0;
klipse$utils$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__21022__auto____1;
return klipse$utils$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,map__29027,map__29027__$1,secured_eval_QMARK_))
})();
var state__21190__auto__ = (function (){var statearr_29110 = f__21189__auto__.call(null);
(statearr_29110[(6)] = c__21188__auto__);

return statearr_29110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,map__29027,map__29027__$1,secured_eval_QMARK_))
);

return c__21188__auto__;
});

klipse.utils.load_script.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
klipse.utils.load_script.cljs$lang$applyTo = (function (seq29024){
var G__29025 = cljs.core.first.call(null,seq29024);
var seq29024__$1 = cljs.core.next.call(null,seq29024);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29025,seq29024__$1);
});

klipse.utils.load_script_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_script);
klipse.utils.load_scripts = (function klipse$utils$load_scripts(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29194 = arguments.length;
var i__4731__auto___29195 = (0);
while(true){
if((i__4731__auto___29195 < len__4730__auto___29194)){
args__4736__auto__.push((arguments[i__4731__auto___29195]));

var G__29196 = (i__4731__auto___29195 + (1));
i__4731__auto___29195 = G__29196;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (scripts,p__29138){
var map__29139 = p__29138;
var map__29139__$1 = (((((!((map__29139 == null))))?(((((map__29139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29139):map__29139);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__29139__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__21188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21188__auto__,map__29139,map__29139__$1,secured_eval_QMARK_){
return (function (){
var f__21189__auto__ = (function (){var switch__21021__auto__ = ((function (c__21188__auto__,map__29139,map__29139__$1,secured_eval_QMARK_){
return (function (state_29174){
var state_val_29175 = (state_29174[(1)]);
if((state_val_29175 === (7))){
var inst_29153 = (state_29174[(7)]);
var inst_29152 = (state_29174[(2)]);
var inst_29153__$1 = cljs.core.nth.call(null,inst_29152,(0),null);
var inst_29154 = cljs.core.nth.call(null,inst_29152,(1),null);
var inst_29155 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29153__$1);
var state_29174__$1 = (function (){var statearr_29176 = state_29174;
(statearr_29176[(7)] = inst_29153__$1);

(statearr_29176[(8)] = inst_29154);

return statearr_29176;
})();
if(inst_29155){
var statearr_29177_29197 = state_29174__$1;
(statearr_29177_29197[(1)] = (8));

} else {
var statearr_29178_29198 = state_29174__$1;
(statearr_29178_29198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (1))){
var inst_29141 = scripts;
var state_29174__$1 = (function (){var statearr_29179 = state_29174;
(statearr_29179[(9)] = inst_29141);

return statearr_29179;
})();
var statearr_29180_29199 = state_29174__$1;
(statearr_29180_29199[(2)] = null);

(statearr_29180_29199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (4))){
var inst_29141 = (state_29174[(9)]);
var inst_29148 = cljs.core.first.call(null,inst_29141);
var inst_29149 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29148);
var inst_29150 = klipse.utils.load_script_mem.call(null,inst_29149,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),secured_eval_QMARK_);
var state_29174__$1 = state_29174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29174__$1,(7),inst_29150);
} else {
if((state_val_29175 === (6))){
var inst_29170 = (state_29174[(2)]);
var state_29174__$1 = state_29174;
var statearr_29181_29200 = state_29174__$1;
(statearr_29181_29200[(2)] = inst_29170);

(statearr_29181_29200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (3))){
var inst_29172 = (state_29174[(2)]);
var state_29174__$1 = state_29174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29174__$1,inst_29172);
} else {
if((state_val_29175 === (2))){
var inst_29141 = (state_29174[(9)]);
var inst_29143 = cljs.core.seq.call(null,inst_29141);
var state_29174__$1 = state_29174;
if(inst_29143){
var statearr_29182_29201 = state_29174__$1;
(statearr_29182_29201[(1)] = (4));

} else {
var statearr_29183_29202 = state_29174__$1;
(statearr_29183_29202[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (9))){
var state_29174__$1 = state_29174;
var statearr_29184_29203 = state_29174__$1;
(statearr_29184_29203[(2)] = null);

(statearr_29184_29203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (5))){
var inst_29166 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29167 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_29168 = (new cljs.core.PersistentVector(null,1,(5),inst_29166,inst_29167,null));
var state_29174__$1 = state_29174;
var statearr_29185_29204 = state_29174__$1;
(statearr_29185_29204[(2)] = inst_29168);

(statearr_29185_29204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (10))){
var inst_29153 = (state_29174[(7)]);
var inst_29154 = (state_29174[(8)]);
var inst_29161 = (state_29174[(2)]);
var inst_29162 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29163 = [inst_29153,inst_29154];
var inst_29164 = (new cljs.core.PersistentVector(null,2,(5),inst_29162,inst_29163,null));
var state_29174__$1 = (function (){var statearr_29186 = state_29174;
(statearr_29186[(10)] = inst_29161);

return statearr_29186;
})();
var statearr_29187_29205 = state_29174__$1;
(statearr_29187_29205[(2)] = inst_29164);

(statearr_29187_29205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (8))){
var inst_29141 = (state_29174[(9)]);
var inst_29157 = cljs.core.rest.call(null,inst_29141);
var inst_29141__$1 = inst_29157;
var state_29174__$1 = (function (){var statearr_29188 = state_29174;
(statearr_29188[(9)] = inst_29141__$1);

return statearr_29188;
})();
var statearr_29189_29206 = state_29174__$1;
(statearr_29189_29206[(2)] = null);

(statearr_29189_29206[(1)] = (2));


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
});})(c__21188__auto__,map__29139,map__29139__$1,secured_eval_QMARK_))
;
return ((function (switch__21021__auto__,c__21188__auto__,map__29139,map__29139__$1,secured_eval_QMARK_){
return (function() {
var klipse$utils$state_machine__21022__auto__ = null;
var klipse$utils$state_machine__21022__auto____0 = (function (){
var statearr_29190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29190[(0)] = klipse$utils$state_machine__21022__auto__);

(statearr_29190[(1)] = (1));

return statearr_29190;
});
var klipse$utils$state_machine__21022__auto____1 = (function (state_29174){
while(true){
var ret_value__21023__auto__ = (function (){try{while(true){
var result__21024__auto__ = switch__21021__auto__.call(null,state_29174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21024__auto__;
}
break;
}
}catch (e29191){if((e29191 instanceof Object)){
var ex__21025__auto__ = e29191;
var statearr_29192_29207 = state_29174;
(statearr_29192_29207[(5)] = ex__21025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29208 = state_29174;
state_29174 = G__29208;
continue;
} else {
return ret_value__21023__auto__;
}
break;
}
});
klipse$utils$state_machine__21022__auto__ = function(state_29174){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__21022__auto____0.call(this);
case 1:
return klipse$utils$state_machine__21022__auto____1.call(this,state_29174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__21022__auto____0;
klipse$utils$state_machine__21022__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__21022__auto____1;
return klipse$utils$state_machine__21022__auto__;
})()
;})(switch__21021__auto__,c__21188__auto__,map__29139,map__29139__$1,secured_eval_QMARK_))
})();
var state__21190__auto__ = (function (){var statearr_29193 = f__21189__auto__.call(null);
(statearr_29193[(6)] = c__21188__auto__);

return statearr_29193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
});})(c__21188__auto__,map__29139,map__29139__$1,secured_eval_QMARK_))
);

return c__21188__auto__;
});

klipse.utils.load_scripts.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
klipse.utils.load_scripts.cljs$lang$applyTo = (function (seq29136){
var G__29137 = cljs.core.first.call(null,seq29136);
var seq29136__$1 = cljs.core.next.call(null,seq29136);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29137,seq29136__$1);
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

var obj__26008__auto___29211 = body;
var f__26009__auto___29212 = (function (){var obj29209 = obj__26008__auto___29211;
var k29210 = "appendChild";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29209,k29210)){
return (obj29209[k29210]);
} else {
return null;
}
})();
f__26009__auto___29212.call(obj__26008__auto___29211,node);

return c;
});
klipse.utils.add_script_tag_once_BANG_ = klipse.utils.runonce.call(null,klipse.utils.add_script_tag_BANG_);

//# sourceMappingURL=utils.js.map
