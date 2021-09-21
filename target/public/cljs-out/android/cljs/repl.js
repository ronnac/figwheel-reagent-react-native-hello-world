// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9942){
var map__9943 = p__9942;
var map__9943__$1 = (((((!((map__9943 == null))))?(((((map__9943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9943):map__9943);
var m = map__9943__$1;
var n = cljs.core.get.call(null,map__9943__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9943__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9945_9977 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9946_9978 = null;
var count__9947_9979 = (0);
var i__9948_9980 = (0);
while(true){
if((i__9948_9980 < count__9947_9979)){
var f_9981 = cljs.core._nth.call(null,chunk__9946_9978,i__9948_9980);
cljs.core.println.call(null,"  ",f_9981);


var G__9982 = seq__9945_9977;
var G__9983 = chunk__9946_9978;
var G__9984 = count__9947_9979;
var G__9985 = (i__9948_9980 + (1));
seq__9945_9977 = G__9982;
chunk__9946_9978 = G__9983;
count__9947_9979 = G__9984;
i__9948_9980 = G__9985;
continue;
} else {
var temp__5753__auto___9986 = cljs.core.seq.call(null,seq__9945_9977);
if(temp__5753__auto___9986){
var seq__9945_9987__$1 = temp__5753__auto___9986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9945_9987__$1)){
var c__4556__auto___9988 = cljs.core.chunk_first.call(null,seq__9945_9987__$1);
var G__9989 = cljs.core.chunk_rest.call(null,seq__9945_9987__$1);
var G__9990 = c__4556__auto___9988;
var G__9991 = cljs.core.count.call(null,c__4556__auto___9988);
var G__9992 = (0);
seq__9945_9977 = G__9989;
chunk__9946_9978 = G__9990;
count__9947_9979 = G__9991;
i__9948_9980 = G__9992;
continue;
} else {
var f_9993 = cljs.core.first.call(null,seq__9945_9987__$1);
cljs.core.println.call(null,"  ",f_9993);


var G__9994 = cljs.core.next.call(null,seq__9945_9987__$1);
var G__9995 = null;
var G__9996 = (0);
var G__9997 = (0);
seq__9945_9977 = G__9994;
chunk__9946_9978 = G__9995;
count__9947_9979 = G__9996;
i__9948_9980 = G__9997;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9998 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9998);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9998)))?cljs.core.second.call(null,arglists_9998):arglists_9998));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9949_9999 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9950_10000 = null;
var count__9951_10001 = (0);
var i__9952_10002 = (0);
while(true){
if((i__9952_10002 < count__9951_10001)){
var vec__9963_10003 = cljs.core._nth.call(null,chunk__9950_10000,i__9952_10002);
var name_10004 = cljs.core.nth.call(null,vec__9963_10003,(0),null);
var map__9966_10005 = cljs.core.nth.call(null,vec__9963_10003,(1),null);
var map__9966_10006__$1 = (((((!((map__9966_10005 == null))))?(((((map__9966_10005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9966_10005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9966_10005):map__9966_10005);
var doc_10007 = cljs.core.get.call(null,map__9966_10006__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10008 = cljs.core.get.call(null,map__9966_10006__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10004);

cljs.core.println.call(null," ",arglists_10008);

if(cljs.core.truth_(doc_10007)){
cljs.core.println.call(null," ",doc_10007);
} else {
}


var G__10009 = seq__9949_9999;
var G__10010 = chunk__9950_10000;
var G__10011 = count__9951_10001;
var G__10012 = (i__9952_10002 + (1));
seq__9949_9999 = G__10009;
chunk__9950_10000 = G__10010;
count__9951_10001 = G__10011;
i__9952_10002 = G__10012;
continue;
} else {
var temp__5753__auto___10013 = cljs.core.seq.call(null,seq__9949_9999);
if(temp__5753__auto___10013){
var seq__9949_10014__$1 = temp__5753__auto___10013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9949_10014__$1)){
var c__4556__auto___10015 = cljs.core.chunk_first.call(null,seq__9949_10014__$1);
var G__10016 = cljs.core.chunk_rest.call(null,seq__9949_10014__$1);
var G__10017 = c__4556__auto___10015;
var G__10018 = cljs.core.count.call(null,c__4556__auto___10015);
var G__10019 = (0);
seq__9949_9999 = G__10016;
chunk__9950_10000 = G__10017;
count__9951_10001 = G__10018;
i__9952_10002 = G__10019;
continue;
} else {
var vec__9968_10020 = cljs.core.first.call(null,seq__9949_10014__$1);
var name_10021 = cljs.core.nth.call(null,vec__9968_10020,(0),null);
var map__9971_10022 = cljs.core.nth.call(null,vec__9968_10020,(1),null);
var map__9971_10023__$1 = (((((!((map__9971_10022 == null))))?(((((map__9971_10022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9971_10022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9971_10022):map__9971_10022);
var doc_10024 = cljs.core.get.call(null,map__9971_10023__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10025 = cljs.core.get.call(null,map__9971_10023__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10021);

cljs.core.println.call(null," ",arglists_10025);

if(cljs.core.truth_(doc_10024)){
cljs.core.println.call(null," ",doc_10024);
} else {
}


var G__10026 = cljs.core.next.call(null,seq__9949_10014__$1);
var G__10027 = null;
var G__10028 = (0);
var G__10029 = (0);
seq__9949_9999 = G__10026;
chunk__9950_10000 = G__10027;
count__9951_10001 = G__10028;
i__9952_10002 = G__10029;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__9973 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9974 = null;
var count__9975 = (0);
var i__9976 = (0);
while(true){
if((i__9976 < count__9975)){
var role = cljs.core._nth.call(null,chunk__9974,i__9976);
var temp__5753__auto___10030__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___10030__$1)){
var spec_10031 = temp__5753__auto___10030__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_10031));
} else {
}


var G__10032 = seq__9973;
var G__10033 = chunk__9974;
var G__10034 = count__9975;
var G__10035 = (i__9976 + (1));
seq__9973 = G__10032;
chunk__9974 = G__10033;
count__9975 = G__10034;
i__9976 = G__10035;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__9973);
if(temp__5753__auto____$1){
var seq__9973__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9973__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__9973__$1);
var G__10036 = cljs.core.chunk_rest.call(null,seq__9973__$1);
var G__10037 = c__4556__auto__;
var G__10038 = cljs.core.count.call(null,c__4556__auto__);
var G__10039 = (0);
seq__9973 = G__10036;
chunk__9974 = G__10037;
count__9975 = G__10038;
i__9976 = G__10039;
continue;
} else {
var role = cljs.core.first.call(null,seq__9973__$1);
var temp__5753__auto___10040__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___10040__$2)){
var spec_10041 = temp__5753__auto___10040__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_10041));
} else {
}


var G__10042 = cljs.core.next.call(null,seq__9973__$1);
var G__10043 = null;
var G__10044 = (0);
var G__10045 = (0);
seq__9973 = G__10042;
chunk__9974 = G__10043;
count__9975 = G__10044;
i__9976 = G__10045;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__10046 = cljs.core.conj.call(null,via,t);
var G__10047 = cljs.core.ex_cause.call(null,t);
via = G__10046;
t = G__10047;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__10050 = datafied_throwable;
var map__10050__$1 = (((((!((map__10050 == null))))?(((((map__10050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10050):map__10050);
var via = cljs.core.get.call(null,map__10050__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__10050__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__10050__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__10051 = cljs.core.last.call(null,via);
var map__10051__$1 = (((((!((map__10051 == null))))?(((((map__10051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10051):map__10051);
var type = cljs.core.get.call(null,map__10051__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__10051__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__10051__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__10052 = data;
var map__10052__$1 = (((((!((map__10052 == null))))?(((((map__10052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10052):map__10052);
var problems = cljs.core.get.call(null,map__10052__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__10052__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__10052__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__10053 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__10053__$1 = (((((!((map__10053 == null))))?(((((map__10053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10053):map__10053);
var top_data = map__10053__$1;
var source = cljs.core.get.call(null,map__10053__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__10058 = phase;
var G__10058__$1 = (((G__10058 instanceof cljs.core.Keyword))?G__10058.fqn:null);
switch (G__10058__$1) {
case "read-source":
var map__10059 = data;
var map__10059__$1 = (((((!((map__10059 == null))))?(((((map__10059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10059):map__10059);
var line = cljs.core.get.call(null,map__10059__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__10059__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__10061 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__10061__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__10061,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__10061);
var G__10061__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__10061__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__10061__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__10061__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__10061__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__10062 = top_data;
var G__10062__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__10062,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__10062);
var G__10062__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__10062__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__10062__$1);
var G__10062__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__10062__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__10062__$2);
var G__10062__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__10062__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__10062__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__10062__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__10062__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__10063 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__10063,(0),null);
var method = cljs.core.nth.call(null,vec__10063,(1),null);
var file = cljs.core.nth.call(null,vec__10063,(2),null);
var line = cljs.core.nth.call(null,vec__10063,(3),null);
var G__10066 = top_data;
var G__10066__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__10066,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__10066);
var G__10066__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__10066__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__10066__$1);
var G__10066__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__10066__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__10066__$2);
var G__10066__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__10066__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__10066__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__10066__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__10066__$4;
}

break;
case "execution":
var vec__10067 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__10067,(0),null);
var method = cljs.core.nth.call(null,vec__10067,(1),null);
var file = cljs.core.nth.call(null,vec__10067,(2),null);
var line = cljs.core.nth.call(null,vec__10067,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__10049_SHARP_){
var or__4126__auto__ = (p1__10049_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__10049_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__10070 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__10070__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__10070,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__10070);
var G__10070__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__10070__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__10070__$1);
var G__10070__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__10070__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__10070__$2);
var G__10070__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__10070__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__10070__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__10070__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__10070__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10058__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__10074){
var map__10075 = p__10074;
var map__10075__$1 = (((((!((map__10075 == null))))?(((((map__10075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10075):map__10075);
var triage_data = map__10075__$1;
var phase = cljs.core.get.call(null,map__10075__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__10075__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__10075__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__10075__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__10075__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__10075__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__10075__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__10075__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__10077 = phase;
var G__10077__$1 = (((G__10077 instanceof cljs.core.Keyword))?G__10077.fqn:null);
switch (G__10077__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10078_10087 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10079_10088 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10080_10089 = true;
var _STAR_print_fn_STAR__temp_val__10081_10090 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10080_10089);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10081_10090);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__10072_SHARP_){
return cljs.core.dissoc.call(null,p1__10072_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10079_10088);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10078_10087);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10082_10091 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10083_10092 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10084_10093 = true;
var _STAR_print_fn_STAR__temp_val__10085_10094 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10084_10093);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10085_10094);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__10073_SHARP_){
return cljs.core.dissoc.call(null,p1__10073_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10083_10092);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10082_10091);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10077__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
