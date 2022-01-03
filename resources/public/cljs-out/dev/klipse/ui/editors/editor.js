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
return klipse.ui.editors.editor.set_value.call(null,editor,(function (){var obj__18568__auto__ = sqlFormatter;
var f__18569__auto__ = (function (){var obj22592 = obj__18568__auto__;
var k22593 = "format";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22592,k22593)){
return (obj22592[k22593]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,klipse.ui.editors.editor.get_value.call(null,editor));
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
var obj__18568__auto___22600 = editor;
var f__18569__auto___22601 = (function (){var obj22594 = obj__18568__auto___22600;
var k22595 = "operation";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22594,k22595)){
return (obj22594[k22595]);
} else {
return null;
}
})();
f__18569__auto___22601.call(obj__18568__auto___22600,((function (obj__18568__auto___22600,f__18569__auto___22601){
return (function (){
var n__4607__auto__ = (function (){var obj__18568__auto____$1 = editor;
var f__18569__auto____$1 = (function (){var obj22596 = obj__18568__auto____$1;
var k22597 = "lineCount";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22596,k22597)){
return (obj22596[k22597]);
} else {
return null;
}
})();
return f__18569__auto____$1.call(obj__18568__auto____$1);
})();
var line = (0);
while(true){
if((line < n__4607__auto__)){
var obj__18568__auto___22602__$1 = editor;
var f__18569__auto___22603__$1 = (function (){var obj22598 = obj__18568__auto___22602__$1;
var k22599 = "indentLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22598,k22599)){
return (obj22598[k22599]);
} else {
return null;
}
})();
f__18569__auto___22603__$1.call(obj__18568__auto___22602__$1,line,"smart");

var G__22604 = (line + (1));
line = G__22604;
continue;
} else {
return null;
}
break;
}
});})(obj__18568__auto___22600,f__18569__auto___22601))
);

return editor;
});
klipse.ui.editors.editor.beautify = (function klipse$ui$editors$editor$beautify(editor,mode,p__22605){
var map__22606 = p__22605;
var map__22606__$1 = (((((!((map__22606 == null))))?(((((map__22606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22606):map__22606);
var indent_QMARK_ = cljs.core.get.call(null,map__22606__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__22606__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614));
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
var cursor = (function (){var obj__18568__auto__ = editor;
var f__18569__auto__ = (function (){var obj22608 = obj__18568__auto__;
var k22609 = "getCursor";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22608,k22609)){
return (obj22608[k22609]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__);
})();
var token = (function (){var obj__18568__auto__ = editor;
var f__18569__auto__ = (function (){var obj22610 = obj__18568__auto__;
var k22611 = "getTokenAt";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22610,k22611)){
return (obj22610[k22611]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,cursor);
})();
var start = (function (){var obj22612 = token;
var k22613 = "start";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22612,k22613)){
return (obj22612[k22613]);
} else {
return null;
}
})();
var end = (function (){var obj22614 = cursor;
var k22615 = "ch";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22614,k22615)){
return (obj22614[k22615]);
} else {
return null;
}
})();
var line = (function (){var obj22616 = cursor;
var k22617 = "line";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22616,k22617)){
return (obj22616[k22617]);
} else {
return null;
}
})();
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),cljs.core.rest.call(null,completions),new cljs.core.Keyword(null,"from","from",1815293044),CodeMirror.Pos(line,start),new cljs.core.Keyword(null,"to","to",192099007),CodeMirror.Pos(line,end)], null));
});
klipse.ui.editors.editor.current_token = (function klipse$ui$editors$editor$current_token(editor){
var cursor = (function (){var obj__18568__auto__ = editor;
var f__18569__auto__ = (function (){var obj22618 = obj__18568__auto__;
var k22619 = "getCursor";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22618,k22619)){
return (obj22618[k22619]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__);
})();
var token = (function (){var obj__18568__auto__ = editor;
var f__18569__auto__ = (function (){var obj22620 = obj__18568__auto__;
var k22621 = "getTokenAt";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22620,k22621)){
return (obj22620[k22621]);
} else {
return null;
}
})();
return f__18569__auto__.call(obj__18568__auto__,cursor);
})();
var obj22622 = token;
var k22623 = "string";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj22622,k22623)){
return (obj22622[k22623]);
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
var len__4730__auto___22634 = arguments.length;
var i__4731__auto___22635 = (0);
while(true){
if((i__4731__auto___22635 < len__4730__auto___22634)){
args__4736__auto__.push((arguments[i__4731__auto___22635]));

var G__22636 = (i__4731__auto___22635 + (1));
i__4731__auto___22635 = G__22636;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,p__22628,p__22629){
var map__22630 = p__22628;
var map__22630__$1 = (((((!((map__22630 == null))))?(((((map__22630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22630):map__22630);
var opts = map__22630__$1;
var mode = cljs.core.get.call(null,map__22630__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var map__22631 = p__22629;
var map__22631__$1 = (((((!((map__22631 == null))))?(((((map__22631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22631):map__22631);
var klass = cljs.core.get.call(null,map__22631__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var indent_QMARK_ = cljs.core.get.call(null,map__22631__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true);
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__22631__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),true);
var editor = CodeMirror(((function (map__22630,map__22630__$1,opts,mode,map__22631,map__22631__$1,klass,indent_QMARK_,remove_ending_comments_QMARK_){
return (function (elt){
if(cljs.core.not.call(null,klass)){
return goog.dom.replaceNode(elt,element);
} else {
var wrapping_div = goog.dom.createElement("div");
goog.dom.appendChild(wrapping_div,elt);

goog.dom.replaceNode(wrapping_div,element);

return klipse.dom_utils.add_class.call(null,wrapping_div,klass);
}
});})(map__22630,map__22630__$1,opts,mode,map__22631,map__22631__$1,klass,indent_QMARK_,remove_ending_comments_QMARK_))
,cljs.core.clj__GT_js.call(null,opts));
return klipse.ui.editors.editor.beautify.call(null,klipse.ui.editors.editor.set_value.call(null,editor,value),mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_], null));
});

klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$applyTo = (function (seq22624){
var G__22625 = cljs.core.first.call(null,seq22624);
var seq22624__$1 = cljs.core.next.call(null,seq22624);
var G__22626 = cljs.core.first.call(null,seq22624__$1);
var seq22624__$2 = cljs.core.next.call(null,seq22624__$1);
var G__22627 = cljs.core.first.call(null,seq22624__$2);
var seq22624__$3 = cljs.core.next.call(null,seq22624__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22625,G__22626,G__22627,seq22624__$3);
});

klipse.ui.editors.editor.replace_id_by_editor = (function klipse$ui$editors$editor$replace_id_by_editor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22640 = arguments.length;
var i__4731__auto___22641 = (0);
while(true){
if((i__4731__auto___22641 < len__4730__auto___22640)){
args__4736__auto__.push((arguments[i__4731__auto___22641]));

var G__22642 = (i__4731__auto___22641 + (1));
i__4731__auto___22641 = G__22642;
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
klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$applyTo = (function (seq22637){
var G__22638 = cljs.core.first.call(null,seq22637);
var seq22637__$1 = cljs.core.next.call(null,seq22637);
var G__22639 = cljs.core.first.call(null,seq22637__$1);
var seq22637__$2 = cljs.core.next.call(null,seq22637__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22638,G__22639,seq22637__$2);
});

klipse.ui.editors.editor.create_editor_after_element = (function klipse$ui$editors$editor$create_editor_after_element(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22650 = arguments.length;
var i__4731__auto___22651 = (0);
while(true){
if((i__4731__auto___22651 < len__4730__auto___22650)){
args__4736__auto__.push((arguments[i__4731__auto___22651]));

var G__22652 = (i__4731__auto___22651 + (1));
i__4731__auto___22651 = G__22652;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,opts,p__22647){
var map__22648 = p__22647;
var map__22648__$1 = (((((!((map__22648 == null))))?(((((map__22648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22648):map__22648);
var klass = cljs.core.get.call(null,map__22648__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__22648__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false);
var indent_QMARK_ = cljs.core.get.call(null,map__22648__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false);
return klipse.ui.editors.editor.replace_element_by_editor.call(null,klipse.dom_utils.create_div_after.call(null,element,cljs.core.PersistentArrayMap.EMPTY),value,opts,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),klass);
});

klipse.ui.editors.editor.create_editor_after_element.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
klipse.ui.editors.editor.create_editor_after_element.cljs$lang$applyTo = (function (seq22643){
var G__22644 = cljs.core.first.call(null,seq22643);
var seq22643__$1 = cljs.core.next.call(null,seq22643);
var G__22645 = cljs.core.first.call(null,seq22643__$1);
var seq22643__$2 = cljs.core.next.call(null,seq22643__$1);
var G__22646 = cljs.core.first.call(null,seq22643__$2);
var seq22643__$3 = cljs.core.next.call(null,seq22643__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22644,G__22645,G__22646,seq22643__$3);
});


//# sourceMappingURL=editor.js.map
