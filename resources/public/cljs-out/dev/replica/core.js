// Compiled by ClojureScript 1.10.520 {}
goog.provide('replica.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('replica.basic');
goog.require('replica.state');
replica.core.ui = (function replica$core$ui(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ui","div#ui",1361076716)], null),cljs.core.vals.call(null,new cljs.core.Keyword(null,"rcells","rcells",459774368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replica.state.rstate))));
})], null));
});
replica.core.main = (function replica$core$main(){
replica.basic.rcell.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"start",new cljs.core.Keyword(null,"title","title",636505583),"loading (ns replica.user.basic)",new cljs.core.Keyword(null,"jq-settings","jq-settings",237120009),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dialogClass","dialogClass",-370748154),"no-close",new cljs.core.Keyword(null,"resizable","resizable",-2107060206),false,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"my","my",-1055703269),"top",new cljs.core.Keyword(null,"at","at",1476951349),"top",new cljs.core.Keyword(null,"of","of",-2075414212),"#ui"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replica.basic.rklipse,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"start",new cljs.core.Keyword(null,"lang","lang",-1819677104),"cljs",new cljs.core.Keyword(null,"from-gist","from-gist",1094377154),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"a1d56b4533907915abf3647285e257b4",new cljs.core.Keyword(null,"file","file",-1269645878),"basic.cljs"], null),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(0)], null)], null)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replica.core.ui], null),document.getElementById("app"));
});
goog.exportSymbol('replica.core.main', replica.core.main);

//# sourceMappingURL=core.js.map
