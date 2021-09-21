// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__13966__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13967__i = 0, G__13967__a = new Array(arguments.length -  0);
while (G__13967__i < G__13967__a.length) {G__13967__a[G__13967__i] = arguments[G__13967__i + 0]; ++G__13967__i;}
  args = new cljs.core.IndexedSeq(G__13967__a,0,null);
} 
return G__13966__delegate.call(this,args);};
G__13966.cljs$lang$maxFixedArity = 0;
G__13966.cljs$lang$applyTo = (function (arglist__13968){
var args = cljs.core.seq(arglist__13968);
return G__13966__delegate(args);
});
G__13966.cljs$core$IFn$_invoke$arity$variadic = G__13966__delegate;
return G__13966;
})()
);

(o.error = (function() { 
var G__13969__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13970__i = 0, G__13970__a = new Array(arguments.length -  0);
while (G__13970__i < G__13970__a.length) {G__13970__a[G__13970__i] = arguments[G__13970__i + 0]; ++G__13970__i;}
  args = new cljs.core.IndexedSeq(G__13970__a,0,null);
} 
return G__13969__delegate.call(this,args);};
G__13969.cljs$lang$maxFixedArity = 0;
G__13969.cljs$lang$applyTo = (function (arglist__13971){
var args = cljs.core.seq(arglist__13971);
return G__13969__delegate(args);
});
G__13969.cljs$core$IFn$_invoke$arity$variadic = G__13969__delegate;
return G__13969;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
