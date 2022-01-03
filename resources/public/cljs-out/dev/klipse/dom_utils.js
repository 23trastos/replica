// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.dom_utils');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('applied_science.js_interop');
klipse.dom_utils.add_class = (function klipse$dom_utils$add_class(element,klass){
if(cljs.core.coll_QMARK_.call(null,klass)){
var seq__22548 = cljs.core.seq.call(null,klass);
var chunk__22549 = null;
var count__22550 = (0);
var i__22551 = (0);
while(true){
if((i__22551 < count__22550)){
var k = cljs.core._nth.call(null,chunk__22549,i__22551);
var parent__18575__auto___22570 = (function (){var obj22560 = element;
var k22561 = "classList";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22560,k22561)){
return (obj22560[k22561]);
} else {
return null;
}
})();
var f__18576__auto___22571 = (function (){var obj22562 = parent__18575__auto___22570;
var k22563 = "add";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22562,k22563)){
return (obj22562[k22563]);
} else {
return null;
}
})();
f__18576__auto___22571.call(parent__18575__auto___22570,k);


var G__22572 = seq__22548;
var G__22573 = chunk__22549;
var G__22574 = count__22550;
var G__22575 = (i__22551 + (1));
seq__22548 = G__22572;
chunk__22549 = G__22573;
count__22550 = G__22574;
i__22551 = G__22575;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22548);
if(temp__5720__auto__){
var seq__22548__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22548__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22548__$1);
var G__22576 = cljs.core.chunk_rest.call(null,seq__22548__$1);
var G__22577 = c__4550__auto__;
var G__22578 = cljs.core.count.call(null,c__4550__auto__);
var G__22579 = (0);
seq__22548 = G__22576;
chunk__22549 = G__22577;
count__22550 = G__22578;
i__22551 = G__22579;
continue;
} else {
var k = cljs.core.first.call(null,seq__22548__$1);
var parent__18575__auto___22580 = (function (){var obj22564 = element;
var k22565 = "classList";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22564,k22565)){
return (obj22564[k22565]);
} else {
return null;
}
})();
var f__18576__auto___22581 = (function (){var obj22566 = parent__18575__auto___22580;
var k22567 = "add";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22566,k22567)){
return (obj22566[k22567]);
} else {
return null;
}
})();
f__18576__auto___22581.call(parent__18575__auto___22580,k);


var G__22582 = cljs.core.next.call(null,seq__22548__$1);
var G__22583 = null;
var G__22584 = (0);
var G__22585 = (0);
seq__22548 = G__22582;
chunk__22549 = G__22583;
count__22550 = G__22584;
i__22551 = G__22585;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var obj__18568__auto__ = element;
var f__18569__auto__ = (function (){var obj22568 = obj__18568__auto__;
var k22569 = applied_science.js_interop.impl.wrap_key.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classList","classList",122185784),new cljs.core.Keyword(null,"add","add",235287739)], null));
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22568,k22569)){
return (obj22568[k22569]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,klass);
}
});
klipse.dom_utils.create_div_after = (function klipse$dom_utils$create_div_after(element,attrs){
var div = goog.dom.createDom("div",cljs.core.clj__GT_js.call(null,attrs),goog.dom.createTextNode(""));
goog.dom.insertSiblingAfter(div,element);

return div;
});
klipse.dom_utils.value = (function klipse$dom_utils$value(element){
var obj22586 = element;
var k22587 = "value";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22586,k22587)){
return (obj22586[k22587]);
} else {
return null;
}
});
klipse.dom_utils.add_event_listener = (function klipse$dom_utils$add_event_listener(element,event,listener){
var obj__18568__auto__ = element;
var f__18569__auto__ = (function (){var obj22588 = obj__18568__auto__;
var k22589 = "addEventListener";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22588,k22589)){
return (obj22588[k22589]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,event,listener);
});

//# sourceMappingURL=dom_utils.js.map
