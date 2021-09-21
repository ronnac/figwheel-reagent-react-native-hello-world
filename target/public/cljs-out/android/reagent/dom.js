// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.node$module$react_dom = require('react-dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.node$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__14422 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14423 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14423);

try{return reagent.dom.node$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__14424 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14425 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14425);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14424);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14422);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__14427 = arguments.length;
switch (G__14427) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__14428 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__14428,(0),null);
var callback = cljs.core.nth.call(null,vec__14428,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.node$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__14432_14448 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__14433_14449 = null;
var count__14434_14450 = (0);
var i__14435_14451 = (0);
while(true){
if((i__14435_14451 < count__14434_14450)){
var vec__14442_14452 = cljs.core._nth.call(null,chunk__14433_14449,i__14435_14451);
var container_14453 = cljs.core.nth.call(null,vec__14442_14452,(0),null);
var comp_14454 = cljs.core.nth.call(null,vec__14442_14452,(1),null);
reagent.dom.re_render_component.call(null,comp_14454,container_14453);


var G__14455 = seq__14432_14448;
var G__14456 = chunk__14433_14449;
var G__14457 = count__14434_14450;
var G__14458 = (i__14435_14451 + (1));
seq__14432_14448 = G__14455;
chunk__14433_14449 = G__14456;
count__14434_14450 = G__14457;
i__14435_14451 = G__14458;
continue;
} else {
var temp__5753__auto___14459 = cljs.core.seq.call(null,seq__14432_14448);
if(temp__5753__auto___14459){
var seq__14432_14460__$1 = temp__5753__auto___14459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14432_14460__$1)){
var c__4556__auto___14461 = cljs.core.chunk_first.call(null,seq__14432_14460__$1);
var G__14462 = cljs.core.chunk_rest.call(null,seq__14432_14460__$1);
var G__14463 = c__4556__auto___14461;
var G__14464 = cljs.core.count.call(null,c__4556__auto___14461);
var G__14465 = (0);
seq__14432_14448 = G__14462;
chunk__14433_14449 = G__14463;
count__14434_14450 = G__14464;
i__14435_14451 = G__14465;
continue;
} else {
var vec__14445_14466 = cljs.core.first.call(null,seq__14432_14460__$1);
var container_14467 = cljs.core.nth.call(null,vec__14445_14466,(0),null);
var comp_14468 = cljs.core.nth.call(null,vec__14445_14466,(1),null);
reagent.dom.re_render_component.call(null,comp_14468,container_14467);


var G__14469 = cljs.core.next.call(null,seq__14432_14460__$1);
var G__14470 = null;
var G__14471 = (0);
var G__14472 = (0);
seq__14432_14448 = G__14469;
chunk__14433_14449 = G__14470;
count__14434_14450 = G__14471;
i__14435_14451 = G__14472;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
