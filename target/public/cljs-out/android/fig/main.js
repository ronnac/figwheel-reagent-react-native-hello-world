// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('fig.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.react_native');
goog.require('clojure.string');
fig.main.hello = (function fig$main$hello(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.react_native.text,"Hello my World!"], null)], null);
});
fig.main.renderfn = (function fig$main$renderfn(props){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fig.main.hello], null));
});
fig.main.figwheel_rn_root = (function fig$main$figwheel_rn_root(){
return fig.main.renderfn.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=main.js.map
