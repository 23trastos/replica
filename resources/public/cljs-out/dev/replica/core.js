// Compiled by ClojureScript 1.10.520 {}
goog.provide('replica.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('replica.basic');
goog.require('replica.state');
replica.core.ui = (function replica$core$ui(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ui","div#ui",1361076716)], null),cljs.core.vals.call(null,new cljs.core.Keyword(null,"rcells","rcells",459774368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replica.state.rstate))));
})], null));
});
replica.core.main = (function replica$core$main(){
replica.basic.rklipse.call(null,"start",new cljs.core.Keyword(null,"title","title",636505583),"(ns replica.user.basic)",new cljs.core.Keyword(null,"snippet","snippet",953581994),"(js/loadGist \n                     \"a1d56b4533907915abf3647285e257b4\"\n                     \"basic.cljs\" \n                     \"start\")",new cljs.core.Keyword(null,"klipse-settings","klipse-settings",245580036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(0)], null),new cljs.core.Keyword(null,"jq-settings","jq-settings",237120009),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(20)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replica.core.ui], null),document.getElementById("app"));
});
goog.exportSymbol('replica.core.main', replica.core.main);

//# sourceMappingURL=core.js.map
