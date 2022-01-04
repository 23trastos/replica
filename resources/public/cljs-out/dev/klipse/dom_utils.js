// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.dom_utils');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('applied_science.js_interop');
klipse.dom_utils.add_class = (function klipse$dom_utils$add_class(element,klass){
if(cljs.core.coll_QMARK_.call(null,klass)){
var seq__33491 = cljs.core.seq.call(null,klass);
var chunk__33492 = null;
var count__33493 = (0);
var i__33494 = (0);
while(true){
if((i__33494 < count__33493)){
var k = cljs.core._nth.call(null,chunk__33492,i__33494);
var parent__26015__auto___33513 = (function (){var obj33503 = element;
var k33504 = "classList";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33503,k33504)){
return (obj33503[k33504]);
} else {
return null;
}
})();
var f__26016__auto___33514 = (function (){var obj33505 = parent__26015__auto___33513;
var k33506 = "add";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33505,k33506)){
return (obj33505[k33506]);
} else {
return null;
}
})();
f__26016__auto___33514.call(parent__26015__auto___33513,k);


var G__33515 = seq__33491;
var G__33516 = chunk__33492;
var G__33517 = count__33493;
var G__33518 = (i__33494 + (1));
seq__33491 = G__33515;
chunk__33492 = G__33516;
count__33493 = G__33517;
i__33494 = G__33518;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33491);
if(temp__5720__auto__){
var seq__33491__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33491__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33491__$1);
var G__33519 = cljs.core.chunk_rest.call(null,seq__33491__$1);
var G__33520 = c__4550__auto__;
var G__33521 = cljs.core.count.call(null,c__4550__auto__);
var G__33522 = (0);
seq__33491 = G__33519;
chunk__33492 = G__33520;
count__33493 = G__33521;
i__33494 = G__33522;
continue;
} else {
var k = cljs.core.first.call(null,seq__33491__$1);
var parent__26015__auto___33523 = (function (){var obj33507 = element;
var k33508 = "classList";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33507,k33508)){
return (obj33507[k33508]);
} else {
return null;
}
})();
var f__26016__auto___33524 = (function (){var obj33509 = parent__26015__auto___33523;
var k33510 = "add";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33509,k33510)){
return (obj33509[k33510]);
} else {
return null;
}
})();
f__26016__auto___33524.call(parent__26015__auto___33523,k);


var G__33525 = cljs.core.next.call(null,seq__33491__$1);
var G__33526 = null;
var G__33527 = (0);
var G__33528 = (0);
seq__33491 = G__33525;
chunk__33492 = G__33526;
count__33493 = G__33527;
i__33494 = G__33528;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var obj__26008__auto__ = element;
var f__26009__auto__ = (function (){var obj33511 = obj__26008__auto__;
var k33512 = applied_science.js_interop.impl.wrap_key.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classList","classList",122185784),new cljs.core.Keyword(null,"add","add",235287739)], null));
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33511,k33512)){
return (obj33511[k33512]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,klass);
}
});
klipse.dom_utils.create_div_after = (function klipse$dom_utils$create_div_after(element,attrs){
var div = goog.dom.createDom("div",cljs.core.clj__GT_js.call(null,attrs),goog.dom.createTextNode(""));
goog.dom.insertSiblingAfter(div,element);

return div;
});
klipse.dom_utils.value = (function klipse$dom_utils$value(element){
var obj33529 = element;
var k33530 = "value";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33529,k33530)){
return (obj33529[k33530]);
} else {
return null;
}
});
klipse.dom_utils.add_event_listener = (function klipse$dom_utils$add_event_listener(element,event,listener){
var obj__26008__auto__ = element;
var f__26009__auto__ = (function (){var obj33531 = obj__26008__auto__;
var k33532 = "addEventListener";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33531,k33532)){
return (obj33531[k33532]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,event,listener);
});

//# sourceMappingURL=dom_utils.js.map
