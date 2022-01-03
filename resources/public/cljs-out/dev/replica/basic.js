// Compiled by ClojureScript 1.10.520 {}
goog.provide('replica.basic');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('replica.state');
goog.require('klipse.run.plugin.plugin');
goog.require('klipse.plugin');
replica.basic.rcell_comp = (function replica$basic$rcell_comp(p__34442){
var map__34443 = p__34442;
var map__34443__$1 = (((((!((map__34443 == null))))?(((((map__34443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34443):map__34443);
var id = cljs.core.get.call(null,map__34443__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__34443__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style = cljs.core.get.call(null,map__34443__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var content = cljs.core.get.call(null,map__34443__$1,new cljs.core.Keyword(null,"content","content",15833224));
var jq_settings = cljs.core.get.call(null,map__34443__$1,new cljs.core.Keyword(null,"jq-settings","jq-settings",237120009));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__34443,map__34443__$1,id,title,style,content,jq_settings){
return (function (p1__34441_SHARP_){
return cljs.core.swap_BANG_.call(null,replica.state.rstate,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),id], null),$(reagent.dom.dom_node.call(null,p1__34441_SHARP_)).dialog(cljs.core.clj__GT_js.call(null,jq_settings)));
});})(map__34443,map__34443__$1,id,title,style,content,jq_settings))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (map__34443,map__34443__$1,id,title,style,content,jq_settings){
return (function (p__34445){
var map__34446 = p__34445;
var map__34446__$1 = (((((!((map__34446 == null))))?(((((map__34446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34446):map__34446);
var id__$1 = cljs.core.get.call(null,map__34446__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title__$1 = cljs.core.get.call(null,map__34446__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style__$1 = cljs.core.get.call(null,map__34446__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var content__$1 = cljs.core.get.call(null,map__34446__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rcell","div.rcell",575951422),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null),content__$1], null);
});})(map__34443,map__34443__$1,id,title,style,content,jq_settings))
], null));
});
replica.basic.rcell = (function replica$basic$rcell(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34453 = arguments.length;
var i__4731__auto___34454 = (0);
while(true){
if((i__4731__auto___34454 < len__4730__auto___34453)){
args__4736__auto__.push((arguments[i__4731__auto___34454]));

var G__34455 = (i__4731__auto___34454 + (1));
i__4731__auto___34454 = G__34455;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return replica.basic.rcell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

replica.basic.rcell.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__34450){
var map__34451 = p__34450;
var map__34451__$1 = (((((!((map__34451 == null))))?(((((map__34451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34451):map__34451);
var title = cljs.core.get.call(null,map__34451__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style = cljs.core.get.call(null,map__34451__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var content = cljs.core.get.call(null,map__34451__$1,new cljs.core.Keyword(null,"content","content",15833224));
var jq_settings = cljs.core.get.call(null,map__34451__$1,new cljs.core.Keyword(null,"jq-settings","jq-settings",237120009));
return cljs.core.swap_BANG_.call(null,replica.state.rstate,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rcells","rcells",459774368),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replica.basic.rcell_comp,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__4131__auto__ = title;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return id;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"jq-settings","jq-settings",237120009),jq_settings], null)], null));
});

replica.basic.rcell.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.basic.rcell.cljs$lang$applyTo = (function (seq34448){
var G__34449 = cljs.core.first.call(null,seq34448);
var seq34448__$1 = cljs.core.next.call(null,seq34448);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34449,seq34448__$1);
});

if((typeof replica !== 'undefined') && (typeof replica.basic !== 'undefined') && (typeof replica.basic.default_settings !== 'undefined')){
} else {
replica.basic.default_settings = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"selector","selector",762528866),".cljs",new cljs.core.Keyword(null,"selector_eval_js","selector_eval_js",-1361450105),".js",new cljs.core.Keyword(null,"selector_eval_markdown","selector_eval_markdown",1798387307),".md",new cljs.core.Keyword(null,"selector_eval_html","selector_eval_html",447359765),".html",new cljs.core.Keyword(null,"editor_type","editor_type",195783179),"code-mirror",new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(9999999)], null);
}
replica.basic.rklipse_comp = (function replica$basic$rklipse_comp(p__34456){
var map__34457 = p__34456;
var map__34457__$1 = (((((!((map__34457 == null))))?(((((map__34457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34457):map__34457);
var id = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lang = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var snippet = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"snippet","snippet",953581994));
var from_gist = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"from-gist","from-gist",1094377154));
var settings = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
var extra = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__34457,map__34457__$1,id,lang,snippet,from_gist,settings,extra){
return (function (_){
klipse.plugin.init.call(null,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,replica.basic.default_settings,settings)));

if(cljs.core.truth_(from_gist)){
return loadGist(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(from_gist),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(from_gist),id);
} else {
return null;
}
});})(map__34457,map__34457__$1,id,lang,snippet,from_gist,settings,extra))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (map__34457,map__34457__$1,id,lang,snippet,from_gist,settings,extra){
return (function (p__34459){
var map__34460 = p__34459;
var map__34460__$1 = (((((!((map__34460 == null))))?(((((map__34460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34460):map__34460);
var lang__$1 = cljs.core.get.call(null,map__34460__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var snippet__$1 = cljs.core.get.call(null,map__34460__$1,new cljs.core.Keyword(null,"snippet","snippet",953581994));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rklipse","div.rklipse",-1019793056),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse",lang__$1], null)], null),snippet__$1], null),extra], null);
});})(map__34457,map__34457__$1,id,lang,snippet,from_gist,settings,extra))
], null));
});
replica.basic.rklipse = (function replica$basic$rklipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34467 = arguments.length;
var i__4731__auto___34468 = (0);
while(true){
if((i__4731__auto___34468 < len__4730__auto___34467)){
args__4736__auto__.push((arguments[i__4731__auto___34468]));

var G__34469 = (i__4731__auto___34468 + (1));
i__4731__auto___34468 = G__34469;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return replica.basic.rklipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

replica.basic.rklipse.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__34464){
var map__34465 = p__34464;
var map__34465__$1 = (((((!((map__34465 == null))))?(((((map__34465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34465):map__34465);
var title = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var lang = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104),"cljs");
var snippet = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"snippet","snippet",953581994));
var from_gist = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"from-gist","from-gist",1094377154));
var klipse_settings = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"klipse-settings","klipse-settings",245580036));
var jq_settings = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"jq-settings","jq-settings",237120009));
var extra_content = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"extra-content","extra-content",2010586444));
return replica.basic.rcell.call(null,id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"jq-settings","jq-settings",237120009),jq_settings,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replica.basic.rklipse_comp,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"lang","lang",-1819677104),lang,new cljs.core.Keyword(null,"snippet","snippet",953581994),snippet,new cljs.core.Keyword(null,"from-gist","from-gist",1094377154),from_gist,new cljs.core.Keyword(null,"settings","settings",1556144875),klipse_settings,new cljs.core.Keyword(null,"extra","extra",1612569067),extra_content], null)], null));
});

replica.basic.rklipse.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.basic.rklipse.cljs$lang$applyTo = (function (seq34462){
var G__34463 = cljs.core.first.call(null,seq34462);
var seq34462__$1 = cljs.core.next.call(null,seq34462);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34463,seq34462__$1);
});


//# sourceMappingURL=basic.js.map
