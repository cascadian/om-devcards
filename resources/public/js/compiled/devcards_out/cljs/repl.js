// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47201){
var map__47226 = p__47201;
var map__47226__$1 = ((((!((map__47226 == null)))?((((map__47226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47226):map__47226);
var m = map__47226__$1;
var n = cljs.core.get.call(null,map__47226__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47226__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47228_47250 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47229_47251 = null;
var count__47230_47252 = (0);
var i__47231_47253 = (0);
while(true){
if((i__47231_47253 < count__47230_47252)){
var f_47254 = cljs.core._nth.call(null,chunk__47229_47251,i__47231_47253);
cljs.core.println.call(null,"  ",f_47254);

var G__47255 = seq__47228_47250;
var G__47256 = chunk__47229_47251;
var G__47257 = count__47230_47252;
var G__47258 = (i__47231_47253 + (1));
seq__47228_47250 = G__47255;
chunk__47229_47251 = G__47256;
count__47230_47252 = G__47257;
i__47231_47253 = G__47258;
continue;
} else {
var temp__4657__auto___47259 = cljs.core.seq.call(null,seq__47228_47250);
if(temp__4657__auto___47259){
var seq__47228_47260__$1 = temp__4657__auto___47259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47228_47260__$1)){
var c__25609__auto___47261 = cljs.core.chunk_first.call(null,seq__47228_47260__$1);
var G__47262 = cljs.core.chunk_rest.call(null,seq__47228_47260__$1);
var G__47263 = c__25609__auto___47261;
var G__47264 = cljs.core.count.call(null,c__25609__auto___47261);
var G__47265 = (0);
seq__47228_47250 = G__47262;
chunk__47229_47251 = G__47263;
count__47230_47252 = G__47264;
i__47231_47253 = G__47265;
continue;
} else {
var f_47266 = cljs.core.first.call(null,seq__47228_47260__$1);
cljs.core.println.call(null,"  ",f_47266);

var G__47267 = cljs.core.next.call(null,seq__47228_47260__$1);
var G__47268 = null;
var G__47269 = (0);
var G__47270 = (0);
seq__47228_47250 = G__47267;
chunk__47229_47251 = G__47268;
count__47230_47252 = G__47269;
i__47231_47253 = G__47270;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47271 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24798__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47271);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47271)))?cljs.core.second.call(null,arglists_47271):arglists_47271));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47232_47272 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47233_47273 = null;
var count__47234_47274 = (0);
var i__47235_47275 = (0);
while(true){
if((i__47235_47275 < count__47234_47274)){
var vec__47236_47276 = cljs.core._nth.call(null,chunk__47233_47273,i__47235_47275);
var name_47277 = cljs.core.nth.call(null,vec__47236_47276,(0),null);
var map__47239_47278 = cljs.core.nth.call(null,vec__47236_47276,(1),null);
var map__47239_47279__$1 = ((((!((map__47239_47278 == null)))?((((map__47239_47278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47239_47278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47239_47278):map__47239_47278);
var doc_47280 = cljs.core.get.call(null,map__47239_47279__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47281 = cljs.core.get.call(null,map__47239_47279__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47277);

cljs.core.println.call(null," ",arglists_47281);

if(cljs.core.truth_(doc_47280)){
cljs.core.println.call(null," ",doc_47280);
} else {
}

var G__47282 = seq__47232_47272;
var G__47283 = chunk__47233_47273;
var G__47284 = count__47234_47274;
var G__47285 = (i__47235_47275 + (1));
seq__47232_47272 = G__47282;
chunk__47233_47273 = G__47283;
count__47234_47274 = G__47284;
i__47235_47275 = G__47285;
continue;
} else {
var temp__4657__auto___47286 = cljs.core.seq.call(null,seq__47232_47272);
if(temp__4657__auto___47286){
var seq__47232_47287__$1 = temp__4657__auto___47286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47232_47287__$1)){
var c__25609__auto___47288 = cljs.core.chunk_first.call(null,seq__47232_47287__$1);
var G__47289 = cljs.core.chunk_rest.call(null,seq__47232_47287__$1);
var G__47290 = c__25609__auto___47288;
var G__47291 = cljs.core.count.call(null,c__25609__auto___47288);
var G__47292 = (0);
seq__47232_47272 = G__47289;
chunk__47233_47273 = G__47290;
count__47234_47274 = G__47291;
i__47235_47275 = G__47292;
continue;
} else {
var vec__47241_47293 = cljs.core.first.call(null,seq__47232_47287__$1);
var name_47294 = cljs.core.nth.call(null,vec__47241_47293,(0),null);
var map__47244_47295 = cljs.core.nth.call(null,vec__47241_47293,(1),null);
var map__47244_47296__$1 = ((((!((map__47244_47295 == null)))?((((map__47244_47295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47244_47295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47244_47295):map__47244_47295);
var doc_47297 = cljs.core.get.call(null,map__47244_47296__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47298 = cljs.core.get.call(null,map__47244_47296__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47294);

cljs.core.println.call(null," ",arglists_47298);

if(cljs.core.truth_(doc_47297)){
cljs.core.println.call(null," ",doc_47297);
} else {
}

var G__47299 = cljs.core.next.call(null,seq__47232_47287__$1);
var G__47300 = null;
var G__47301 = (0);
var G__47302 = (0);
seq__47232_47272 = G__47299;
chunk__47233_47273 = G__47300;
count__47234_47274 = G__47301;
i__47235_47275 = G__47302;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__47246 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47247 = null;
var count__47248 = (0);
var i__47249 = (0);
while(true){
if((i__47249 < count__47248)){
var role = cljs.core._nth.call(null,chunk__47247,i__47249);
var temp__4657__auto___47303__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47303__$1)){
var spec_47304 = temp__4657__auto___47303__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_47304));
} else {
}

var G__47305 = seq__47246;
var G__47306 = chunk__47247;
var G__47307 = count__47248;
var G__47308 = (i__47249 + (1));
seq__47246 = G__47305;
chunk__47247 = G__47306;
count__47248 = G__47307;
i__47249 = G__47308;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47246);
if(temp__4657__auto____$1){
var seq__47246__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47246__$1)){
var c__25609__auto__ = cljs.core.chunk_first.call(null,seq__47246__$1);
var G__47309 = cljs.core.chunk_rest.call(null,seq__47246__$1);
var G__47310 = c__25609__auto__;
var G__47311 = cljs.core.count.call(null,c__25609__auto__);
var G__47312 = (0);
seq__47246 = G__47309;
chunk__47247 = G__47310;
count__47248 = G__47311;
i__47249 = G__47312;
continue;
} else {
var role = cljs.core.first.call(null,seq__47246__$1);
var temp__4657__auto___47313__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47313__$2)){
var spec_47314 = temp__4657__auto___47313__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_47314));
} else {
}

var G__47315 = cljs.core.next.call(null,seq__47246__$1);
var G__47316 = null;
var G__47317 = (0);
var G__47318 = (0);
seq__47246 = G__47315;
chunk__47247 = G__47316;
count__47248 = G__47317;
i__47249 = G__47318;
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

//# sourceMappingURL=repl.js.map?rel=1483385757708