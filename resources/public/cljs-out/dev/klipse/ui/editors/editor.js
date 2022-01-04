// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse.ui.editors.editor');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.dom_utils');
goog.require('gadjett.collections');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.edit.closebrackets');
goog.require('cljsjs.codemirror.addon.hint.show_hint');
goog.require('clojure.string');
goog.require('applied_science.js_interop');
klipse.ui.editors.editor.code_mirror = CodeMirror;
klipse.ui.editors.editor.create = (function klipse$ui$editors$editor$create(dom_id,config){
return CodeMirror.fromTextArea(document.getElementById(dom_id),cljs.core.clj__GT_js.call(null,config));
});
klipse.ui.editors.editor.get_value = (function klipse$ui$editors$editor$get_value(editor){
return editor.getValue();
});
klipse.ui.editors.editor.get_selection = (function klipse$ui$editors$editor$get_selection(editor){
return editor.getSelection();
});
klipse.ui.editors.editor.get_selection_or_nil = (function klipse$ui$editors$editor$get_selection_or_nil(editor){
var s = klipse.ui.editors.editor.get_selection.call(null,editor);
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
klipse.ui.editors.editor.get_selection_when_selected = (function klipse$ui$editors$editor$get_selection_when_selected(editor){
var or__4131__auto__ = klipse.ui.editors.editor.get_selection_or_nil.call(null,editor);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return klipse.ui.editors.editor.get_value.call(null,editor);
}
});
klipse.ui.editors.editor.set_value = (function klipse$ui$editors$editor$set_value(editor,value){
editor.setValue(value);

return editor;
});
klipse.ui.editors.editor.on_change = (function klipse$ui$editors$editor$on_change(editor,f){
editor.on("change",f);

return editor;
});
klipse.ui.editors.editor.set_option = (function klipse$ui$editors$editor$set_option(editor,option,value){
editor.setOption(option,value);

return editor;
});
klipse.ui.editors.editor.fix_blank_lines = (function klipse$ui$editors$editor$fix_blank_lines(editor){
return klipse.ui.editors.editor.set_value.call(null,editor,gadjett.collections.fix_blank_lines.call(null,klipse.ui.editors.editor.get_value.call(null,editor)));
});
if((typeof klipse !== 'undefined') && (typeof klipse.ui !== 'undefined') && (typeof klipse.ui.editors !== 'undefined') && (typeof klipse.ui.editors.editor !== 'undefined') && (typeof klipse.ui.editors.editor.beautify_language !== 'undefined')){
} else {
klipse.ui.editors.editor.beautify_language = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.ui.editors.editor","beautify-language"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (editor,mode){
return mode;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,klipse.ui.editors.editor.beautify_language,new cljs.core.Keyword(null,"default","default",-1987822328),(function (editor,_){
return editor;
}));
cljs.core._add_method.call(null,klipse.ui.editors.editor.beautify_language,"text/x-sql",(function (editor,_){
return klipse.ui.editors.editor.set_value.call(null,editor,(function (){var obj__26008__auto__ = sqlFormatter;
var f__26009__auto__ = (function (){var obj33598 = obj__26008__auto__;
var k33599 = "format";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33598,k33599)){
return (obj33598[k33599]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,klipse.ui.editors.editor.get_value.call(null,editor));
})());
}));
klipse.ui.editors.editor.fix_comments_lines = (function klipse$ui$editors$editor$fix_comments_lines(editor,mode){
if(cljs.core._EQ_.call(null,"clojure",mode)){
return klipse.ui.editors.editor.set_value.call(null,editor,gadjett.collections.remove_ending_comments.call(null,klipse.ui.editors.editor.get_value.call(null,editor)));
} else {
return editor;
}
});
klipse.ui.editors.editor.do_indent = (function klipse$ui$editors$editor$do_indent(editor){
var obj__26008__auto___33606 = editor;
var f__26009__auto___33607 = (function (){var obj33600 = obj__26008__auto___33606;
var k33601 = "operation";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33600,k33601)){
return (obj33600[k33601]);
} else {
return null;
}
})();
f__26009__auto___33607.call(obj__26008__auto___33606,((function (obj__26008__auto___33606,f__26009__auto___33607){
return (function (){
var n__4607__auto__ = (function (){var obj__26008__auto____$1 = editor;
var f__26009__auto____$1 = (function (){var obj33602 = obj__26008__auto____$1;
var k33603 = "lineCount";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33602,k33603)){
return (obj33602[k33603]);
} else {
return null;
}
})();
return f__26009__auto____$1.call(obj__26008__auto____$1);
})();
var line = (0);
while(true){
if((line < n__4607__auto__)){
var obj__26008__auto___33608__$1 = editor;
var f__26009__auto___33609__$1 = (function (){var obj33604 = obj__26008__auto___33608__$1;
var k33605 = "indentLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33604,k33605)){
return (obj33604[k33605]);
} else {
return null;
}
})();
f__26009__auto___33609__$1.call(obj__26008__auto___33608__$1,line,"smart");

var G__33610 = (line + (1));
line = G__33610;
continue;
} else {
return null;
}
break;
}
});})(obj__26008__auto___33606,f__26009__auto___33607))
);

return editor;
});
klipse.ui.editors.editor.beautify = (function klipse$ui$editors$editor$beautify(editor,mode,p__33611){
var map__33612 = p__33611;
var map__33612__$1 = (((((!((map__33612 == null))))?(((((map__33612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33612):map__33612);
var indent_QMARK_ = cljs.core.get.call(null,map__33612__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__33612__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614));
var $ = editor;
var $__$1 = (cljs.core.truth_(indent_QMARK_)?klipse.ui.editors.editor.do_indent.call(null,$):$);
var $__$2 = klipse.ui.editors.editor.fix_blank_lines.call(null,$__$1);
var $__$3 = (cljs.core.truth_(remove_ending_comments_QMARK_)?klipse.ui.editors.editor.fix_comments_lines.call(null,$__$2,mode):$__$2);
return klipse.ui.editors.editor.beautify_language.call(null,$__$3,mode);
});
klipse.ui.editors.editor.set_value_and_beautify = (function klipse$ui$editors$editor$set_value_and_beautify(editor,mode,value,opts){
return klipse.ui.editors.editor.beautify.call(null,klipse.ui.editors.editor.set_value.call(null,editor,value),mode,opts);
});
klipse.ui.editors.editor.list_completions = (function klipse$ui$editors$editor$list_completions(completions,editor){
var cursor = (function (){var obj__26008__auto__ = editor;
var f__26009__auto__ = (function (){var obj33614 = obj__26008__auto__;
var k33615 = "getCursor";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33614,k33615)){
return (obj33614[k33615]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__);
})();
var token = (function (){var obj__26008__auto__ = editor;
var f__26009__auto__ = (function (){var obj33616 = obj__26008__auto__;
var k33617 = "getTokenAt";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33616,k33617)){
return (obj33616[k33617]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,cursor);
})();
var start = (function (){var obj33618 = token;
var k33619 = "start";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33618,k33619)){
return (obj33618[k33619]);
} else {
return null;
}
})();
var end = (function (){var obj33620 = cursor;
var k33621 = "ch";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33620,k33621)){
return (obj33620[k33621]);
} else {
return null;
}
})();
var line = (function (){var obj33622 = cursor;
var k33623 = "line";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33622,k33623)){
return (obj33622[k33623]);
} else {
return null;
}
})();
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),cljs.core.rest.call(null,completions),new cljs.core.Keyword(null,"from","from",1815293044),CodeMirror.Pos(line,start),new cljs.core.Keyword(null,"to","to",192099007),CodeMirror.Pos(line,end)], null));
});
klipse.ui.editors.editor.current_token = (function klipse$ui$editors$editor$current_token(editor){
var cursor = (function (){var obj__26008__auto__ = editor;
var f__26009__auto__ = (function (){var obj33624 = obj__26008__auto__;
var k33625 = "getCursor";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33624,k33625)){
return (obj33624[k33625]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__);
})();
var token = (function (){var obj__26008__auto__ = editor;
var f__26009__auto__ = (function (){var obj33626 = obj__26008__auto__;
var k33627 = "getTokenAt";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33626,k33627)){
return (obj33626[k33627]);
} else {
return null;
}
})();
return f__26009__auto__.call(obj__26008__auto__,cursor);
})();
var obj33628 = token;
var k33629 = "string";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33628,k33629)){
return (obj33628[k33629]);
} else {
return null;
}
});
klipse.ui.editors.editor.trigger_autocomplete = (function klipse$ui$editors$editor$trigger_autocomplete(editor,completions){
var hint_fn = cljs.core.partial.call(null,klipse.ui.editors.editor.list_completions,completions);
return setTimeout(((function (hint_fn){
return (function (){
return editor.showHint(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hint","hint",439639918),hint_fn,new cljs.core.Keyword(null,"completeSingle","completeSingle",-665527534),true], null)));
});})(hint_fn))
,(100));
});
klipse.ui.editors.editor.replace_element_by_editor = (function klipse$ui$editors$editor$replace_element_by_editor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33640 = arguments.length;
var i__4731__auto___33641 = (0);
while(true){
if((i__4731__auto___33641 < len__4730__auto___33640)){
args__4736__auto__.push((arguments[i__4731__auto___33641]));

var G__33642 = (i__4731__auto___33641 + (1));
i__4731__auto___33641 = G__33642;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,p__33634,p__33635){
var map__33636 = p__33634;
var map__33636__$1 = (((((!((map__33636 == null))))?(((((map__33636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33636):map__33636);
var opts = map__33636__$1;
var mode = cljs.core.get.call(null,map__33636__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var map__33637 = p__33635;
var map__33637__$1 = (((((!((map__33637 == null))))?(((((map__33637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33637):map__33637);
var klass = cljs.core.get.call(null,map__33637__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var indent_QMARK_ = cljs.core.get.call(null,map__33637__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true);
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__33637__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),true);
var editor = CodeMirror(((function (map__33636,map__33636__$1,opts,mode,map__33637,map__33637__$1,klass,indent_QMARK_,remove_ending_comments_QMARK_){
return (function (elt){
if(cljs.core.not.call(null,klass)){
return goog.dom.replaceNode(elt,element);
} else {
var wrapping_div = goog.dom.createElement("div");
goog.dom.appendChild(wrapping_div,elt);

goog.dom.replaceNode(wrapping_div,element);

return klipse.dom_utils.add_class.call(null,wrapping_div,klass);
}
});})(map__33636,map__33636__$1,opts,mode,map__33637,map__33637__$1,klass,indent_QMARK_,remove_ending_comments_QMARK_))
,cljs.core.clj__GT_js.call(null,opts));
return klipse.ui.editors.editor.beautify.call(null,klipse.ui.editors.editor.set_value.call(null,editor,value),mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_], null));
});

klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$applyTo = (function (seq33630){
var G__33631 = cljs.core.first.call(null,seq33630);
var seq33630__$1 = cljs.core.next.call(null,seq33630);
var G__33632 = cljs.core.first.call(null,seq33630__$1);
var seq33630__$2 = cljs.core.next.call(null,seq33630__$1);
var G__33633 = cljs.core.first.call(null,seq33630__$2);
var seq33630__$3 = cljs.core.next.call(null,seq33630__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33631,G__33632,G__33633,seq33630__$3);
});

klipse.ui.editors.editor.replace_id_by_editor = (function klipse$ui$editors$editor$replace_id_by_editor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33646 = arguments.length;
var i__4731__auto___33647 = (0);
while(true){
if((i__4731__auto___33647 < len__4730__auto___33646)){
args__4736__auto__.push((arguments[i__4731__auto___33647]));

var G__33648 = (i__4731__auto___33647 + (1));
i__4731__auto___33647 = G__33648;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (id,cm_opts,more_opts){
var element = goog.dom.getElement(id);
var value = (element["textContent"]);
return cljs.core.apply.call(null,klipse.ui.editors.editor.replace_element_by_editor,element,value,cm_opts,more_opts);
});

klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$applyTo = (function (seq33643){
var G__33644 = cljs.core.first.call(null,seq33643);
var seq33643__$1 = cljs.core.next.call(null,seq33643);
var G__33645 = cljs.core.first.call(null,seq33643__$1);
var seq33643__$2 = cljs.core.next.call(null,seq33643__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33644,G__33645,seq33643__$2);
});

klipse.ui.editors.editor.create_editor_after_element = (function klipse$ui$editors$editor$create_editor_after_element(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33656 = arguments.length;
var i__4731__auto___33657 = (0);
while(true){
if((i__4731__auto___33657 < len__4730__auto___33656)){
args__4736__auto__.push((arguments[i__4731__auto___33657]));

var G__33658 = (i__4731__auto___33657 + (1));
i__4731__auto___33657 = G__33658;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,opts,p__33653){
var map__33654 = p__33653;
var map__33654__$1 = (((((!((map__33654 == null))))?(((((map__33654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33654):map__33654);
var klass = cljs.core.get.call(null,map__33654__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__33654__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false);
var indent_QMARK_ = cljs.core.get.call(null,map__33654__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false);
return klipse.ui.editors.editor.replace_element_by_editor.call(null,klipse.dom_utils.create_div_after.call(null,element,cljs.core.PersistentArrayMap.EMPTY),value,opts,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),klass);
});

klipse.ui.editors.editor.create_editor_after_element.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
klipse.ui.editors.editor.create_editor_after_element.cljs$lang$applyTo = (function (seq33649){
var G__33650 = cljs.core.first.call(null,seq33649);
var seq33649__$1 = cljs.core.next.call(null,seq33649);
var G__33651 = cljs.core.first.call(null,seq33649__$1);
var seq33649__$2 = cljs.core.next.call(null,seq33649__$1);
var G__33652 = cljs.core.first.call(null,seq33649__$2);
var seq33649__$3 = cljs.core.next.call(null,seq33649__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33650,G__33651,G__33652,seq33649__$3);
});


//# sourceMappingURL=editor.js.map
