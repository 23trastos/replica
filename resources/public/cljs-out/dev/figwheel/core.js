// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__29019_SHARP_){
var k = f.call(null,p1__29019_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29020){
var vec__29021 = p__29020;
var k = cljs.core.nth.call(null,vec__29021,(0),null);
var v = cljs.core.nth.call(null,vec__29021,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29025 = arguments.length;
var i__4731__auto___29026 = (0);
while(true){
if((i__4731__auto___29026 < len__4730__auto___29025)){
args__4736__auto__.push((arguments[i__4731__auto___29026]));

var G__29027 = (i__4731__auto___29026 + (1));
i__4731__auto___29026 = G__29027;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq29024){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29024));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__29030){
var map__29031 = p__29030;
var map__29031__$1 = (((((!((map__29031 == null))))?(((((map__29031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29031):map__29031);
var message = cljs.core.get.call(null,map__29031__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__29031__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__29031,map__29031__$1,message,column){
return (function (p1__29029_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29029_SHARP_], null)));
});})(map__29031,map__29031__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__29031,map__29031__$1,message,column){
return (function (p1__29028_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__29028_SHARP_);
});})(map__29031,map__29031__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__29034){
var map__29035 = p__29034;
var map__29035__$1 = (((((!((map__29035 == null))))?(((((map__29035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29035):map__29035);
var message_data = map__29035__$1;
var message = cljs.core.get.call(null,map__29035__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__29035__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29035__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__29035__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__29037 = file_excerpt;
var map__29037__$1 = (((((!((map__29037 == null))))?(((((map__29037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29037):map__29037);
var start_line = cljs.core.get.call(null,map__29037__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__29037__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__29037__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__29037,map__29037__$1,start_line,path,excerpt,map__29035,map__29035__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__29037,map__29037__$1,start_line,path,excerpt,map__29035,map__29035__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__29038 = cljs.core.split_with.call(null,((function (map__29037,map__29037__$1,start_line,path,excerpt,lines,map__29035,map__29035__$1,message_data,message,line,column,file_excerpt){
return (function (p1__29033_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__29033_SHARP_));
});})(map__29037,map__29037__$1,start_line,path,excerpt,lines,map__29035,map__29035__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__29038,(0),null);
var end = cljs.core.nth.call(null,vec__29038,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__29042){
var map__29043 = p__29042;
var map__29043__$1 = (((((!((map__29043 == null))))?(((((map__29043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29043):map__29043);
var file = cljs.core.get.call(null,map__29043__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29043__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29043__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29045 = "";
var G__29045__$1 = (cljs.core.truth_(file)?[G__29045,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29045);
var G__29045__$2 = (cljs.core.truth_(line)?[G__29045__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29045__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29045__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29045__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_29100 = (new goog.debug.Console());
var G__29052_29101 = c_29100.getFormatter();
goog.object.set(G__29052_29101,"showAbsoluteTime",false);

goog.object.set(G__29052_29101,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_29100);

}

var temp__5720__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5720__auto__)){
var console_instance = temp__5720__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__29053 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__29053,"data",(function (){var or__4131__auto__ = data;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__29053;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5718__auto__ = e.event_;
if(cljs.core.truth_(temp__5718__auto__)){
var e__$1 = temp__5718__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && ((!((goog.global.document == null)))));
});

var last_reload_timestamp_29102 = cljs.core.atom.call(null,(0));
var promise_chain_29103 = (new goog.Promise(((function (last_reload_timestamp_29102){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_29102))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_29102,promise_chain_29103){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(figwheel.core.heads_up_display_QMARK_.call(null)){
var temp__5718__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var ts = temp__5720__auto__;
var and__4120__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_29102) < ts);
if(and__4120__auto__){
return ts;
} else {
return and__4120__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var ts = temp__5718__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_29102,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_29103.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_29102,promise_chain_29103){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__29054 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__29055 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__29055;

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR__orig_val__29054,_STAR_inline_code_message_max_column_STAR__temp_val__29055,warn,warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_29102,promise_chain_29103){
return (function (){
var seq__29056 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__29057 = null;
var count__29058 = (0);
var i__29059 = (0);
while(true){
if((i__29059 < count__29058)){
var w = cljs.core._nth.call(null,chunk__29057,i__29059);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__29104 = seq__29056;
var G__29105 = chunk__29057;
var G__29106 = count__29058;
var G__29107 = (i__29059 + (1));
seq__29056 = G__29104;
chunk__29057 = G__29105;
count__29058 = G__29106;
i__29059 = G__29107;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29056);
if(temp__5720__auto__){
var seq__29056__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29056__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29056__$1);
var G__29108 = cljs.core.chunk_rest.call(null,seq__29056__$1);
var G__29109 = c__4550__auto__;
var G__29110 = cljs.core.count.call(null,c__4550__auto__);
var G__29111 = (0);
seq__29056 = G__29108;
chunk__29057 = G__29109;
count__29058 = G__29110;
i__29059 = G__29111;
continue;
} else {
var w = cljs.core.first.call(null,seq__29056__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__29112 = cljs.core.next.call(null,seq__29056__$1);
var G__29113 = null;
var G__29114 = (0);
var G__29115 = (0);
seq__29056 = G__29112;
chunk__29057 = G__29113;
count__29058 = G__29114;
i__29059 = G__29115;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR__orig_val__29054,_STAR_inline_code_message_max_column_STAR__temp_val__29055,warn,warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_29102,promise_chain_29103))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__29054;
}});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_29102,promise_chain_29103))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_29103.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_29102,promise_chain_29103){
return (function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__29060 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__29061 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__29061;

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__29060;
}});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_29102,promise_chain_29103))
);
} else {
return promise_chain_29103.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_29102,promise_chain_29103){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_29102,promise_chain_29103))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_29102,promise_chain_29103))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4120__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4120__auto____$1){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29116 = arguments.length;
var i__4731__auto___29117 = (0);
while(true){
if((i__4731__auto___29117 < len__4730__auto___29116)){
args__4736__auto__.push((arguments[i__4731__auto___29117]));

var G__29118 = (i__4731__auto___29117 + (1));
i__4731__auto___29117 = G__29118;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__29064){
var vec__29065 = p__29064;
var n = cljs.core.nth.call(null,vec__29065,(0),null);
var mdata = cljs.core.nth.call(null,vec__29065,(1),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__29068 = cljs.core.seq.call(null,hooks);
var chunk__29069 = null;
var count__29070 = (0);
var i__29071 = (0);
while(true){
if((i__29071 < count__29070)){
var vec__29078 = cljs.core._nth.call(null,chunk__29069,i__29071);
var n = cljs.core.nth.call(null,vec__29078,(0),null);
var f = cljs.core.nth.call(null,vec__29078,(1),null);
var temp__5718__auto___29119 = cljs.core.reduce.call(null,((function (seq__29068,chunk__29069,count__29070,i__29071,vec__29078,n,f,hooks){
return (function (p1__29046_SHARP_,p2__29047_SHARP_){
if(cljs.core.truth_(p1__29046_SHARP_)){
return goog.object.get(p1__29046_SHARP_,p2__29047_SHARP_);
} else {
return null;
}
});})(seq__29068,chunk__29069,count__29070,i__29071,vec__29078,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___29119)){
var hook_29120 = temp__5718__auto___29119;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_29120,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__29121 = seq__29068;
var G__29122 = chunk__29069;
var G__29123 = count__29070;
var G__29124 = (i__29071 + (1));
seq__29068 = G__29121;
chunk__29069 = G__29122;
count__29070 = G__29123;
i__29071 = G__29124;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29068);
if(temp__5720__auto__){
var seq__29068__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29068__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29068__$1);
var G__29125 = cljs.core.chunk_rest.call(null,seq__29068__$1);
var G__29126 = c__4550__auto__;
var G__29127 = cljs.core.count.call(null,c__4550__auto__);
var G__29128 = (0);
seq__29068 = G__29125;
chunk__29069 = G__29126;
count__29070 = G__29127;
i__29071 = G__29128;
continue;
} else {
var vec__29081 = cljs.core.first.call(null,seq__29068__$1);
var n = cljs.core.nth.call(null,vec__29081,(0),null);
var f = cljs.core.nth.call(null,vec__29081,(1),null);
var temp__5718__auto___29129 = cljs.core.reduce.call(null,((function (seq__29068,chunk__29069,count__29070,i__29071,vec__29081,n,f,seq__29068__$1,temp__5720__auto__,hooks){
return (function (p1__29046_SHARP_,p2__29047_SHARP_){
if(cljs.core.truth_(p1__29046_SHARP_)){
return goog.object.get(p1__29046_SHARP_,p2__29047_SHARP_);
} else {
return null;
}
});})(seq__29068,chunk__29069,count__29070,i__29071,vec__29081,n,f,seq__29068__$1,temp__5720__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___29129)){
var hook_29130 = temp__5718__auto___29129;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_29130,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__29131 = cljs.core.next.call(null,seq__29068__$1);
var G__29132 = null;
var G__29133 = (0);
var G__29134 = (0);
seq__29068 = G__29131;
chunk__29069 = G__29132;
count__29070 = G__29133;
i__29071 = G__29134;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq29062){
var G__29063 = cljs.core.first.call(null,seq29062);
var seq29062__$1 = cljs.core.next.call(null,seq29062);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29063,seq29062__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29084){
var vec__29085 = p__29084;
var k = cljs.core.nth.call(null,vec__29085,(0),null);
var v = cljs.core.nth.call(null,vec__29085,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__29048_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__29048_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__29048_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__29049_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__29049_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__4120__auto__ = (!(figwheel.core.load_warninged_code));
if(and__4120__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4120__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__29050_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__29050_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__29088_29135 = cljs.core.seq.call(null,to_reload);
var chunk__29089_29136 = null;
var count__29090_29137 = (0);
var i__29091_29138 = (0);
while(true){
if((i__29091_29138 < count__29090_29137)){
var ns_29139 = cljs.core._nth.call(null,chunk__29089_29136,i__29091_29138);
goog.require(cljs.core.name.call(null,ns_29139),true);


var G__29140 = seq__29088_29135;
var G__29141 = chunk__29089_29136;
var G__29142 = count__29090_29137;
var G__29143 = (i__29091_29138 + (1));
seq__29088_29135 = G__29140;
chunk__29089_29136 = G__29141;
count__29090_29137 = G__29142;
i__29091_29138 = G__29143;
continue;
} else {
var temp__5720__auto___29144 = cljs.core.seq.call(null,seq__29088_29135);
if(temp__5720__auto___29144){
var seq__29088_29145__$1 = temp__5720__auto___29144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29088_29145__$1)){
var c__4550__auto___29146 = cljs.core.chunk_first.call(null,seq__29088_29145__$1);
var G__29147 = cljs.core.chunk_rest.call(null,seq__29088_29145__$1);
var G__29148 = c__4550__auto___29146;
var G__29149 = cljs.core.count.call(null,c__4550__auto___29146);
var G__29150 = (0);
seq__29088_29135 = G__29147;
chunk__29089_29136 = G__29148;
count__29090_29137 = G__29149;
i__29091_29138 = G__29150;
continue;
} else {
var ns_29151 = cljs.core.first.call(null,seq__29088_29145__$1);
goog.require(cljs.core.name.call(null,ns_29151),true);


var G__29152 = cljs.core.next.call(null,seq__29088_29145__$1);
var G__29153 = null;
var G__29154 = (0);
var G__29155 = (0);
seq__29088_29135 = G__29152;
chunk__29089_29136 = G__29153;
count__29090_29137 = G__29154;
i__29091_29138 = G__29155;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_29156 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var not_loaded = temp__5720__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_29156);
} else {
setTimeout(after_reload_fn_29156,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__29092 = cljs.core.seq.call(null,warnings);
var chunk__29093 = null;
var count__29094 = (0);
var i__29095 = (0);
while(true){
if((i__29095 < count__29094)){
var warning = cljs.core._nth.call(null,chunk__29093,i__29095);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__29157 = seq__29092;
var G__29158 = chunk__29093;
var G__29159 = count__29094;
var G__29160 = (i__29095 + (1));
seq__29092 = G__29157;
chunk__29093 = G__29158;
count__29094 = G__29159;
i__29095 = G__29160;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29092);
if(temp__5720__auto__){
var seq__29092__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29092__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29092__$1);
var G__29161 = cljs.core.chunk_rest.call(null,seq__29092__$1);
var G__29162 = c__4550__auto__;
var G__29163 = cljs.core.count.call(null,c__4550__auto__);
var G__29164 = (0);
seq__29092 = G__29161;
chunk__29093 = G__29162;
count__29094 = G__29163;
i__29095 = G__29164;
continue;
} else {
var warning = cljs.core.first.call(null,seq__29092__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__29165 = cljs.core.next.call(null,seq__29092__$1);
var G__29166 = null;
var G__29167 = (0);
var G__29168 = (0);
seq__29092 = G__29165;
chunk__29093 = G__29166;
count__29094 = G__29167;
i__29095 = G__29168;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__29096){
var map__29097 = p__29096;
var map__29097__$1 = (((((!((map__29097 == null))))?(((((map__29097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29097):map__29097);
var exception_data = map__29097__$1;
var file = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__29097,map__29097__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__29097,map__29097__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__29097,map__29097__$1,exception_data,file,type,message){
return (function (p1__29051_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__29051_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__29097,map__29097__$1,exception_data,file,type,message))
);

return goog.log.warning(figwheel.core.logger,(function (){var G__29099 = "Compile Exception - ";
var G__29099__$1 = (cljs.core.truth_((function (){var or__4131__auto__ = type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return message;
}
})())?[G__29099,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))))].join(''):G__29099);
if(cljs.core.truth_(file)){
return [G__29099__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__29099__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
