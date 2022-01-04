// Compiled by ClojureScript 1.10.520 {}
goog.provide('replica.basic');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('replica.state');
goog.require('klipse.run.plugin.plugin');
goog.require('klipse.plugin');
replica.basic.rcell_comp = (function replica$basic$rcell_comp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48795 = arguments.length;
var i__4731__auto___48796 = (0);
while(true){
if((i__4731__auto___48796 < len__4730__auto___48795)){
args__4736__auto__.push((arguments[i__4731__auto___48796]));

var G__48797 = (i__4731__auto___48796 + (1));
i__4731__auto___48796 = G__48797;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return replica.basic.rcell_comp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

replica.basic.rcell_comp.cljs$core$IFn$_invoke$arity$variadic = (function (p__48789,extra){
var map__48790 = p__48789;
var map__48790__$1 = (((((!((map__48790 == null))))?(((((map__48790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48790):map__48790);
var id = cljs.core.get.call(null,map__48790__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__48790__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style = cljs.core.get.call(null,map__48790__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var jq_settings = cljs.core.get.call(null,map__48790__$1,new cljs.core.Keyword(null,"jq-settings","jq-settings",237120009));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__48790,map__48790__$1,id,title,style,jq_settings){
return (function (p1__48786_SHARP_){
return cljs.core.swap_BANG_.call(null,replica.state.rstate,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),id], null),$(reagent.dom.dom_node.call(null,p1__48786_SHARP_)).dialog(cljs.core.clj__GT_js.call(null,jq_settings)));
});})(map__48790,map__48790__$1,id,title,style,jq_settings))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (map__48790,map__48790__$1,id,title,style,jq_settings){
return (function() { 
var G__48798__delegate = function (p__48792,extra__$1){
var map__48793 = p__48792;
var map__48793__$1 = (((((!((map__48793 == null))))?(((((map__48793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48793):map__48793);
var id__$1 = cljs.core.get.call(null,map__48793__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title__$1 = cljs.core.get.call(null,map__48793__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style__$1 = cljs.core.get.call(null,map__48793__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rcell","div.rcell",575951422),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null)], null),extra__$1);
};
var G__48798 = function (p__48792,var_args){
var extra__$1 = null;
if (arguments.length > 1) {
var G__48799__i = 0, G__48799__a = new Array(arguments.length -  1);
while (G__48799__i < G__48799__a.length) {G__48799__a[G__48799__i] = arguments[G__48799__i + 1]; ++G__48799__i;}
  extra__$1 = new cljs.core.IndexedSeq(G__48799__a,0,null);
} 
return G__48798__delegate.call(this,p__48792,extra__$1);};
G__48798.cljs$lang$maxFixedArity = 1;
G__48798.cljs$lang$applyTo = (function (arglist__48800){
var p__48792 = cljs.core.first(arglist__48800);
var extra__$1 = cljs.core.rest(arglist__48800);
return G__48798__delegate(p__48792,extra__$1);
});
G__48798.cljs$core$IFn$_invoke$arity$variadic = G__48798__delegate;
return G__48798;
})()
;})(map__48790,map__48790__$1,id,title,style,jq_settings))
], null));
});

replica.basic.rcell_comp.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.basic.rcell_comp.cljs$lang$applyTo = (function (seq48787){
var G__48788 = cljs.core.first.call(null,seq48787);
var seq48787__$1 = cljs.core.next.call(null,seq48787);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48788,seq48787__$1);
});

replica.basic.rcell = (function replica$basic$rcell(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48806 = arguments.length;
var i__4731__auto___48807 = (0);
while(true){
if((i__4731__auto___48807 < len__4730__auto___48806)){
args__4736__auto__.push((arguments[i__4731__auto___48807]));

var G__48808 = (i__4731__auto___48807 + (1));
i__4731__auto___48807 = G__48808;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return replica.basic.rcell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

replica.basic.rcell.cljs$core$IFn$_invoke$arity$variadic = (function (p__48803,extra){
var map__48804 = p__48803;
var map__48804__$1 = (((((!((map__48804 == null))))?(((((map__48804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48804):map__48804);
var id = cljs.core.get.call(null,map__48804__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__48804__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style = cljs.core.get.call(null,map__48804__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var content = cljs.core.get.call(null,map__48804__$1,new cljs.core.Keyword(null,"content","content",15833224));
var jq_settings = cljs.core.get.call(null,map__48804__$1,new cljs.core.Keyword(null,"jq-settings","jq-settings",237120009));
return cljs.core.swap_BANG_.call(null,replica.state.rstate,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rcells","rcells",459774368),id], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replica.basic.rcell_comp,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__4131__auto__ = title;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return id;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"jq-settings","jq-settings",237120009),jq_settings], null)], null),extra));
});

replica.basic.rcell.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.basic.rcell.cljs$lang$applyTo = (function (seq48801){
var G__48802 = cljs.core.first.call(null,seq48801);
var seq48801__$1 = cljs.core.next.call(null,seq48801);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48802,seq48801__$1);
});

if((typeof replica !== 'undefined') && (typeof replica.basic !== 'undefined') && (typeof replica.basic.default_settings !== 'undefined')){
} else {
replica.basic.default_settings = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"selector","selector",762528866),".cljs",new cljs.core.Keyword(null,"selector_eval_js","selector_eval_js",-1361450105),".js",new cljs.core.Keyword(null,"selector_eval_markdown","selector_eval_markdown",1798387307),".md",new cljs.core.Keyword(null,"selector_eval_html","selector_eval_html",447359765),".html",new cljs.core.Keyword(null,"editor_type","editor_type",195783179),"code-mirror",new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(9999999)], null);
}
replica.basic.rklipse = (function replica$basic$rklipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48817 = arguments.length;
var i__4731__auto___48818 = (0);
while(true){
if((i__4731__auto___48818 < len__4730__auto___48817)){
args__4736__auto__.push((arguments[i__4731__auto___48818]));

var G__48819 = (i__4731__auto___48818 + (1));
i__4731__auto___48818 = G__48819;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return replica.basic.rklipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

replica.basic.rklipse.cljs$core$IFn$_invoke$arity$variadic = (function (p__48811,extra){
var map__48812 = p__48811;
var map__48812__$1 = (((((!((map__48812 == null))))?(((((map__48812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48812):map__48812);
var id = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lang = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var snippet = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"snippet","snippet",953581994));
var from_gist = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"from-gist","from-gist",1094377154));
var settings = cljs.core.get.call(null,map__48812__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__48812,map__48812__$1,id,lang,snippet,from_gist,settings){
return (function (_){
klipse.plugin.init.call(null,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,replica.basic.default_settings,settings)));

if(cljs.core.truth_(from_gist)){
return loadGist(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(from_gist),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(from_gist),id);
} else {
return null;
}
});})(map__48812,map__48812__$1,id,lang,snippet,from_gist,settings))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (map__48812,map__48812__$1,id,lang,snippet,from_gist,settings){
return (function() { 
var G__48820__delegate = function (p__48814,extra__$1){
var map__48815 = p__48814;
var map__48815__$1 = (((((!((map__48815 == null))))?(((((map__48815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48815):map__48815);
var id__$1 = cljs.core.get.call(null,map__48815__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lang__$1 = cljs.core.get.call(null,map__48815__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var snippet__$1 = cljs.core.get.call(null,map__48815__$1,new cljs.core.Keyword(null,"snippet","snippet",953581994));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rklipse","div.rklipse",-1019793056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id__$1),"-klipse"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse",lang__$1], null)], null),snippet__$1], null)], null),extra__$1);
};
var G__48820 = function (p__48814,var_args){
var extra__$1 = null;
if (arguments.length > 1) {
var G__48821__i = 0, G__48821__a = new Array(arguments.length -  1);
while (G__48821__i < G__48821__a.length) {G__48821__a[G__48821__i] = arguments[G__48821__i + 1]; ++G__48821__i;}
  extra__$1 = new cljs.core.IndexedSeq(G__48821__a,0,null);
} 
return G__48820__delegate.call(this,p__48814,extra__$1);};
G__48820.cljs$lang$maxFixedArity = 1;
G__48820.cljs$lang$applyTo = (function (arglist__48822){
var p__48814 = cljs.core.first(arglist__48822);
var extra__$1 = cljs.core.rest(arglist__48822);
return G__48820__delegate(p__48814,extra__$1);
});
G__48820.cljs$core$IFn$_invoke$arity$variadic = G__48820__delegate;
return G__48820;
})()
;})(map__48812,map__48812__$1,id,lang,snippet,from_gist,settings))
], null));
});

replica.basic.rklipse.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.basic.rklipse.cljs$lang$applyTo = (function (seq48809){
var G__48810 = cljs.core.first.call(null,seq48809);
var seq48809__$1 = cljs.core.next.call(null,seq48809);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48810,seq48809__$1);
});


//# sourceMappingURL=basic.js.map
