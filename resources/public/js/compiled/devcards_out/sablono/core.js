// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__32166__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32163 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__32164 = cljs.core.seq.call(null,vec__32163);
var first__32165 = cljs.core.first.call(null,seq__32164);
var seq__32164__$1 = cljs.core.next.call(null,seq__32164);
var tag = first__32165;
var body = seq__32164__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32167__i = 0, G__32167__a = new Array(arguments.length -  0);
while (G__32167__i < G__32167__a.length) {G__32167__a[G__32167__i] = arguments[G__32167__i + 0]; ++G__32167__i;}
  args = new cljs.core.IndexedSeq(G__32167__a,0);
} 
return G__32166__delegate.call(this,args);};
G__32166.cljs$lang$maxFixedArity = 0;
G__32166.cljs$lang$applyTo = (function (arglist__32168){
var args = cljs.core.seq(arglist__32168);
return G__32166__delegate(args);
});
G__32166.cljs$core$IFn$_invoke$arity$variadic = G__32166__delegate;
return G__32166;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25578__auto__ = (function sablono$core$update_arglists_$_iter__32173(s__32174){
return (new cljs.core.LazySeq(null,(function (){
var s__32174__$1 = s__32174;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32174__$1);
if(temp__4657__auto__){
var s__32174__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32174__$2)){
var c__25576__auto__ = cljs.core.chunk_first.call(null,s__32174__$2);
var size__25577__auto__ = cljs.core.count.call(null,c__25576__auto__);
var b__32176 = cljs.core.chunk_buffer.call(null,size__25577__auto__);
if((function (){var i__32175 = (0);
while(true){
if((i__32175 < size__25577__auto__)){
var args = cljs.core._nth.call(null,c__25576__auto__,i__32175);
cljs.core.chunk_append.call(null,b__32176,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32177 = (i__32175 + (1));
i__32175 = G__32177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32176),sablono$core$update_arglists_$_iter__32173.call(null,cljs.core.chunk_rest.call(null,s__32174__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32176),null);
}
} else {
var args = cljs.core.first.call(null,s__32174__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32173.call(null,cljs.core.rest.call(null,s__32174__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25578__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25880__auto__ = [];
var len__25873__auto___32183 = arguments.length;
var i__25874__auto___32184 = (0);
while(true){
if((i__25874__auto___32184 < len__25873__auto___32183)){
args__25880__auto__.push((arguments[i__25874__auto___32184]));

var G__32185 = (i__25874__auto___32184 + (1));
i__25874__auto___32184 = G__32185;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25578__auto__ = (function sablono$core$iter__32179(s__32180){
return (new cljs.core.LazySeq(null,(function (){
var s__32180__$1 = s__32180;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32180__$1);
if(temp__4657__auto__){
var s__32180__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32180__$2)){
var c__25576__auto__ = cljs.core.chunk_first.call(null,s__32180__$2);
var size__25577__auto__ = cljs.core.count.call(null,c__25576__auto__);
var b__32182 = cljs.core.chunk_buffer.call(null,size__25577__auto__);
if((function (){var i__32181 = (0);
while(true){
if((i__32181 < size__25577__auto__)){
var style = cljs.core._nth.call(null,c__25576__auto__,i__32181);
cljs.core.chunk_append.call(null,b__32182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32186 = (i__32181 + (1));
i__32181 = G__32186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32182),sablono$core$iter__32179.call(null,cljs.core.chunk_rest.call(null,s__32180__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32182),null);
}
} else {
var style = cljs.core.first.call(null,s__32180__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32179.call(null,cljs.core.rest.call(null,s__32180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25578__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq32178){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32178));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to32187 = (function sablono$core$link_to32187(var_args){
var args__25880__auto__ = [];
var len__25873__auto___32190 = arguments.length;
var i__25874__auto___32191 = (0);
while(true){
if((i__25874__auto___32191 < len__25873__auto___32190)){
args__25880__auto__.push((arguments[i__25874__auto___32191]));

var G__32192 = (i__25874__auto___32191 + (1));
i__25874__auto___32191 = G__32192;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32187.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

sablono.core.link_to32187.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32187.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32187.cljs$lang$applyTo = (function (seq32188){
var G__32189 = cljs.core.first.call(null,seq32188);
var seq32188__$1 = cljs.core.next.call(null,seq32188);
return sablono.core.link_to32187.cljs$core$IFn$_invoke$arity$variadic(G__32189,seq32188__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32187);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32193 = (function sablono$core$mail_to32193(var_args){
var args__25880__auto__ = [];
var len__25873__auto___32200 = arguments.length;
var i__25874__auto___32201 = (0);
while(true){
if((i__25874__auto___32201 < len__25873__auto___32200)){
args__25880__auto__.push((arguments[i__25874__auto___32201]));

var G__32202 = (i__25874__auto___32201 + (1));
i__25874__auto___32201 = G__32202;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32193.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

sablono.core.mail_to32193.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32196){
var vec__32197 = p__32196;
var content = cljs.core.nth.call(null,vec__32197,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24798__auto__ = content;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32193.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32193.cljs$lang$applyTo = (function (seq32194){
var G__32195 = cljs.core.first.call(null,seq32194);
var seq32194__$1 = cljs.core.next.call(null,seq32194);
return sablono.core.mail_to32193.cljs$core$IFn$_invoke$arity$variadic(G__32195,seq32194__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32193);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32203 = (function sablono$core$unordered_list32203(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25578__auto__ = (function sablono$core$unordered_list32203_$_iter__32208(s__32209){
return (new cljs.core.LazySeq(null,(function (){
var s__32209__$1 = s__32209;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32209__$1);
if(temp__4657__auto__){
var s__32209__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32209__$2)){
var c__25576__auto__ = cljs.core.chunk_first.call(null,s__32209__$2);
var size__25577__auto__ = cljs.core.count.call(null,c__25576__auto__);
var b__32211 = cljs.core.chunk_buffer.call(null,size__25577__auto__);
if((function (){var i__32210 = (0);
while(true){
if((i__32210 < size__25577__auto__)){
var x = cljs.core._nth.call(null,c__25576__auto__,i__32210);
cljs.core.chunk_append.call(null,b__32211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32212 = (i__32210 + (1));
i__32210 = G__32212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32211),sablono$core$unordered_list32203_$_iter__32208.call(null,cljs.core.chunk_rest.call(null,s__32209__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32211),null);
}
} else {
var x = cljs.core.first.call(null,s__32209__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32203_$_iter__32208.call(null,cljs.core.rest.call(null,s__32209__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25578__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32203);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32213 = (function sablono$core$ordered_list32213(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25578__auto__ = (function sablono$core$ordered_list32213_$_iter__32218(s__32219){
return (new cljs.core.LazySeq(null,(function (){
var s__32219__$1 = s__32219;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32219__$1);
if(temp__4657__auto__){
var s__32219__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32219__$2)){
var c__25576__auto__ = cljs.core.chunk_first.call(null,s__32219__$2);
var size__25577__auto__ = cljs.core.count.call(null,c__25576__auto__);
var b__32221 = cljs.core.chunk_buffer.call(null,size__25577__auto__);
if((function (){var i__32220 = (0);
while(true){
if((i__32220 < size__25577__auto__)){
var x = cljs.core._nth.call(null,c__25576__auto__,i__32220);
cljs.core.chunk_append.call(null,b__32221,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32222 = (i__32220 + (1));
i__32220 = G__32222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32221),sablono$core$ordered_list32213_$_iter__32218.call(null,cljs.core.chunk_rest.call(null,s__32219__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32221),null);
}
} else {
var x = cljs.core.first.call(null,s__32219__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32213_$_iter__32218.call(null,cljs.core.rest.call(null,s__32219__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25578__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32213);
/**
 * Create an image element.
 */
sablono.core.image32223 = (function sablono$core$image32223(var_args){
var args32224 = [];
var len__25873__auto___32227 = arguments.length;
var i__25874__auto___32228 = (0);
while(true){
if((i__25874__auto___32228 < len__25873__auto___32227)){
args32224.push((arguments[i__25874__auto___32228]));

var G__32229 = (i__25874__auto___32228 + (1));
i__25874__auto___32228 = G__32229;
continue;
} else {
}
break;
}

var G__32226 = args32224.length;
switch (G__32226) {
case 1:
return sablono.core.image32223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32224.length)].join('')));

}
});

sablono.core.image32223.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32223.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32223.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32223);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32231_SHARP_,p2__32232_SHARP_){
return [cljs.core.str(p1__32231_SHARP_),cljs.core.str("["),cljs.core.str(p2__32232_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32233_SHARP_,p2__32234_SHARP_){
return [cljs.core.str(p1__32233_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32234_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24798__auto__ = value;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field32235 = (function sablono$core$color_field32235(var_args){
var args32236 = [];
var len__25873__auto___32303 = arguments.length;
var i__25874__auto___32304 = (0);
while(true){
if((i__25874__auto___32304 < len__25873__auto___32303)){
args32236.push((arguments[i__25874__auto___32304]));

var G__32305 = (i__25874__auto___32304 + (1));
i__25874__auto___32304 = G__32305;
continue;
} else {
}
break;
}

var G__32238 = args32236.length;
switch (G__32238) {
case 1:
return sablono.core.color_field32235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32236.length)].join('')));

}
});

sablono.core.color_field32235.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.color_field32235.call(null,name__32150__auto__,null);
});

sablono.core.color_field32235.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.color_field32235.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32235);

/**
 * Creates a date input field.
 */
sablono.core.date_field32239 = (function sablono$core$date_field32239(var_args){
var args32240 = [];
var len__25873__auto___32307 = arguments.length;
var i__25874__auto___32308 = (0);
while(true){
if((i__25874__auto___32308 < len__25873__auto___32307)){
args32240.push((arguments[i__25874__auto___32308]));

var G__32309 = (i__25874__auto___32308 + (1));
i__25874__auto___32308 = G__32309;
continue;
} else {
}
break;
}

var G__32242 = args32240.length;
switch (G__32242) {
case 1:
return sablono.core.date_field32239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32240.length)].join('')));

}
});

sablono.core.date_field32239.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.date_field32239.call(null,name__32150__auto__,null);
});

sablono.core.date_field32239.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.date_field32239.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32239);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32243 = (function sablono$core$datetime_field32243(var_args){
var args32244 = [];
var len__25873__auto___32311 = arguments.length;
var i__25874__auto___32312 = (0);
while(true){
if((i__25874__auto___32312 < len__25873__auto___32311)){
args32244.push((arguments[i__25874__auto___32312]));

var G__32313 = (i__25874__auto___32312 + (1));
i__25874__auto___32312 = G__32313;
continue;
} else {
}
break;
}

var G__32246 = args32244.length;
switch (G__32246) {
case 1:
return sablono.core.datetime_field32243.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32243.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32244.length)].join('')));

}
});

sablono.core.datetime_field32243.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.datetime_field32243.call(null,name__32150__auto__,null);
});

sablono.core.datetime_field32243.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.datetime_field32243.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32243);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32247 = (function sablono$core$datetime_local_field32247(var_args){
var args32248 = [];
var len__25873__auto___32315 = arguments.length;
var i__25874__auto___32316 = (0);
while(true){
if((i__25874__auto___32316 < len__25873__auto___32315)){
args32248.push((arguments[i__25874__auto___32316]));

var G__32317 = (i__25874__auto___32316 + (1));
i__25874__auto___32316 = G__32317;
continue;
} else {
}
break;
}

var G__32250 = args32248.length;
switch (G__32250) {
case 1:
return sablono.core.datetime_local_field32247.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32247.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32248.length)].join('')));

}
});

sablono.core.datetime_local_field32247.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.datetime_local_field32247.call(null,name__32150__auto__,null);
});

sablono.core.datetime_local_field32247.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.datetime_local_field32247.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32247);

/**
 * Creates a email input field.
 */
sablono.core.email_field32251 = (function sablono$core$email_field32251(var_args){
var args32252 = [];
var len__25873__auto___32319 = arguments.length;
var i__25874__auto___32320 = (0);
while(true){
if((i__25874__auto___32320 < len__25873__auto___32319)){
args32252.push((arguments[i__25874__auto___32320]));

var G__32321 = (i__25874__auto___32320 + (1));
i__25874__auto___32320 = G__32321;
continue;
} else {
}
break;
}

var G__32254 = args32252.length;
switch (G__32254) {
case 1:
return sablono.core.email_field32251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32252.length)].join('')));

}
});

sablono.core.email_field32251.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.email_field32251.call(null,name__32150__auto__,null);
});

sablono.core.email_field32251.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.email_field32251.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32251);

/**
 * Creates a file input field.
 */
sablono.core.file_field32255 = (function sablono$core$file_field32255(var_args){
var args32256 = [];
var len__25873__auto___32323 = arguments.length;
var i__25874__auto___32324 = (0);
while(true){
if((i__25874__auto___32324 < len__25873__auto___32323)){
args32256.push((arguments[i__25874__auto___32324]));

var G__32325 = (i__25874__auto___32324 + (1));
i__25874__auto___32324 = G__32325;
continue;
} else {
}
break;
}

var G__32258 = args32256.length;
switch (G__32258) {
case 1:
return sablono.core.file_field32255.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32255.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32256.length)].join('')));

}
});

sablono.core.file_field32255.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.file_field32255.call(null,name__32150__auto__,null);
});

sablono.core.file_field32255.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.file_field32255.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32255);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32259 = (function sablono$core$hidden_field32259(var_args){
var args32260 = [];
var len__25873__auto___32327 = arguments.length;
var i__25874__auto___32328 = (0);
while(true){
if((i__25874__auto___32328 < len__25873__auto___32327)){
args32260.push((arguments[i__25874__auto___32328]));

var G__32329 = (i__25874__auto___32328 + (1));
i__25874__auto___32328 = G__32329;
continue;
} else {
}
break;
}

var G__32262 = args32260.length;
switch (G__32262) {
case 1:
return sablono.core.hidden_field32259.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32259.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32260.length)].join('')));

}
});

sablono.core.hidden_field32259.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.hidden_field32259.call(null,name__32150__auto__,null);
});

sablono.core.hidden_field32259.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.hidden_field32259.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32259);

/**
 * Creates a month input field.
 */
sablono.core.month_field32263 = (function sablono$core$month_field32263(var_args){
var args32264 = [];
var len__25873__auto___32331 = arguments.length;
var i__25874__auto___32332 = (0);
while(true){
if((i__25874__auto___32332 < len__25873__auto___32331)){
args32264.push((arguments[i__25874__auto___32332]));

var G__32333 = (i__25874__auto___32332 + (1));
i__25874__auto___32332 = G__32333;
continue;
} else {
}
break;
}

var G__32266 = args32264.length;
switch (G__32266) {
case 1:
return sablono.core.month_field32263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32264.length)].join('')));

}
});

sablono.core.month_field32263.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.month_field32263.call(null,name__32150__auto__,null);
});

sablono.core.month_field32263.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.month_field32263.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32263);

/**
 * Creates a number input field.
 */
sablono.core.number_field32267 = (function sablono$core$number_field32267(var_args){
var args32268 = [];
var len__25873__auto___32335 = arguments.length;
var i__25874__auto___32336 = (0);
while(true){
if((i__25874__auto___32336 < len__25873__auto___32335)){
args32268.push((arguments[i__25874__auto___32336]));

var G__32337 = (i__25874__auto___32336 + (1));
i__25874__auto___32336 = G__32337;
continue;
} else {
}
break;
}

var G__32270 = args32268.length;
switch (G__32270) {
case 1:
return sablono.core.number_field32267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32268.length)].join('')));

}
});

sablono.core.number_field32267.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.number_field32267.call(null,name__32150__auto__,null);
});

sablono.core.number_field32267.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.number_field32267.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32267);

/**
 * Creates a password input field.
 */
sablono.core.password_field32271 = (function sablono$core$password_field32271(var_args){
var args32272 = [];
var len__25873__auto___32339 = arguments.length;
var i__25874__auto___32340 = (0);
while(true){
if((i__25874__auto___32340 < len__25873__auto___32339)){
args32272.push((arguments[i__25874__auto___32340]));

var G__32341 = (i__25874__auto___32340 + (1));
i__25874__auto___32340 = G__32341;
continue;
} else {
}
break;
}

var G__32274 = args32272.length;
switch (G__32274) {
case 1:
return sablono.core.password_field32271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32272.length)].join('')));

}
});

sablono.core.password_field32271.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.password_field32271.call(null,name__32150__auto__,null);
});

sablono.core.password_field32271.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.password_field32271.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32271);

/**
 * Creates a range input field.
 */
sablono.core.range_field32275 = (function sablono$core$range_field32275(var_args){
var args32276 = [];
var len__25873__auto___32343 = arguments.length;
var i__25874__auto___32344 = (0);
while(true){
if((i__25874__auto___32344 < len__25873__auto___32343)){
args32276.push((arguments[i__25874__auto___32344]));

var G__32345 = (i__25874__auto___32344 + (1));
i__25874__auto___32344 = G__32345;
continue;
} else {
}
break;
}

var G__32278 = args32276.length;
switch (G__32278) {
case 1:
return sablono.core.range_field32275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32276.length)].join('')));

}
});

sablono.core.range_field32275.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.range_field32275.call(null,name__32150__auto__,null);
});

sablono.core.range_field32275.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.range_field32275.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32275);

/**
 * Creates a search input field.
 */
sablono.core.search_field32279 = (function sablono$core$search_field32279(var_args){
var args32280 = [];
var len__25873__auto___32347 = arguments.length;
var i__25874__auto___32348 = (0);
while(true){
if((i__25874__auto___32348 < len__25873__auto___32347)){
args32280.push((arguments[i__25874__auto___32348]));

var G__32349 = (i__25874__auto___32348 + (1));
i__25874__auto___32348 = G__32349;
continue;
} else {
}
break;
}

var G__32282 = args32280.length;
switch (G__32282) {
case 1:
return sablono.core.search_field32279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32280.length)].join('')));

}
});

sablono.core.search_field32279.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.search_field32279.call(null,name__32150__auto__,null);
});

sablono.core.search_field32279.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.search_field32279.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32279);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32283 = (function sablono$core$tel_field32283(var_args){
var args32284 = [];
var len__25873__auto___32351 = arguments.length;
var i__25874__auto___32352 = (0);
while(true){
if((i__25874__auto___32352 < len__25873__auto___32351)){
args32284.push((arguments[i__25874__auto___32352]));

var G__32353 = (i__25874__auto___32352 + (1));
i__25874__auto___32352 = G__32353;
continue;
} else {
}
break;
}

var G__32286 = args32284.length;
switch (G__32286) {
case 1:
return sablono.core.tel_field32283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32284.length)].join('')));

}
});

sablono.core.tel_field32283.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.tel_field32283.call(null,name__32150__auto__,null);
});

sablono.core.tel_field32283.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.tel_field32283.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32283);

/**
 * Creates a text input field.
 */
sablono.core.text_field32287 = (function sablono$core$text_field32287(var_args){
var args32288 = [];
var len__25873__auto___32355 = arguments.length;
var i__25874__auto___32356 = (0);
while(true){
if((i__25874__auto___32356 < len__25873__auto___32355)){
args32288.push((arguments[i__25874__auto___32356]));

var G__32357 = (i__25874__auto___32356 + (1));
i__25874__auto___32356 = G__32357;
continue;
} else {
}
break;
}

var G__32290 = args32288.length;
switch (G__32290) {
case 1:
return sablono.core.text_field32287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32288.length)].join('')));

}
});

sablono.core.text_field32287.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.text_field32287.call(null,name__32150__auto__,null);
});

sablono.core.text_field32287.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.text_field32287.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32287);

/**
 * Creates a time input field.
 */
sablono.core.time_field32291 = (function sablono$core$time_field32291(var_args){
var args32292 = [];
var len__25873__auto___32359 = arguments.length;
var i__25874__auto___32360 = (0);
while(true){
if((i__25874__auto___32360 < len__25873__auto___32359)){
args32292.push((arguments[i__25874__auto___32360]));

var G__32361 = (i__25874__auto___32360 + (1));
i__25874__auto___32360 = G__32361;
continue;
} else {
}
break;
}

var G__32294 = args32292.length;
switch (G__32294) {
case 1:
return sablono.core.time_field32291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32292.length)].join('')));

}
});

sablono.core.time_field32291.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.time_field32291.call(null,name__32150__auto__,null);
});

sablono.core.time_field32291.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.time_field32291.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32291);

/**
 * Creates a url input field.
 */
sablono.core.url_field32295 = (function sablono$core$url_field32295(var_args){
var args32296 = [];
var len__25873__auto___32363 = arguments.length;
var i__25874__auto___32364 = (0);
while(true){
if((i__25874__auto___32364 < len__25873__auto___32363)){
args32296.push((arguments[i__25874__auto___32364]));

var G__32365 = (i__25874__auto___32364 + (1));
i__25874__auto___32364 = G__32365;
continue;
} else {
}
break;
}

var G__32298 = args32296.length;
switch (G__32298) {
case 1:
return sablono.core.url_field32295.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32295.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32296.length)].join('')));

}
});

sablono.core.url_field32295.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.url_field32295.call(null,name__32150__auto__,null);
});

sablono.core.url_field32295.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.url_field32295.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32295);

/**
 * Creates a week input field.
 */
sablono.core.week_field32299 = (function sablono$core$week_field32299(var_args){
var args32300 = [];
var len__25873__auto___32367 = arguments.length;
var i__25874__auto___32368 = (0);
while(true){
if((i__25874__auto___32368 < len__25873__auto___32367)){
args32300.push((arguments[i__25874__auto___32368]));

var G__32369 = (i__25874__auto___32368 + (1));
i__25874__auto___32368 = G__32369;
continue;
} else {
}
break;
}

var G__32302 = args32300.length;
switch (G__32302) {
case 1:
return sablono.core.week_field32299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32300.length)].join('')));

}
});

sablono.core.week_field32299.cljs$core$IFn$_invoke$arity$1 = (function (name__32150__auto__){
return sablono.core.week_field32299.call(null,name__32150__auto__,null);
});

sablono.core.week_field32299.cljs$core$IFn$_invoke$arity$2 = (function (name__32150__auto__,value__32151__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__32150__auto__,value__32151__auto__);
});

sablono.core.week_field32299.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32299);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32371 = (function sablono$core$check_box32371(var_args){
var args32372 = [];
var len__25873__auto___32375 = arguments.length;
var i__25874__auto___32376 = (0);
while(true){
if((i__25874__auto___32376 < len__25873__auto___32375)){
args32372.push((arguments[i__25874__auto___32376]));

var G__32377 = (i__25874__auto___32376 + (1));
i__25874__auto___32376 = G__32377;
continue;
} else {
}
break;
}

var G__32374 = args32372.length;
switch (G__32374) {
case 1:
return sablono.core.check_box32371.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32371.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32371.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32372.length)].join('')));

}
});

sablono.core.check_box32371.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32371.call(null,name,null);
});

sablono.core.check_box32371.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32371.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32371.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24798__auto__ = value;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32371.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32371);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32379 = (function sablono$core$radio_button32379(var_args){
var args32380 = [];
var len__25873__auto___32383 = arguments.length;
var i__25874__auto___32384 = (0);
while(true){
if((i__25874__auto___32384 < len__25873__auto___32383)){
args32380.push((arguments[i__25874__auto___32384]));

var G__32385 = (i__25874__auto___32384 + (1));
i__25874__auto___32384 = G__32385;
continue;
} else {
}
break;
}

var G__32382 = args32380.length;
switch (G__32382) {
case 1:
return sablono.core.radio_button32379.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32379.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32379.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32380.length)].join('')));

}
});

sablono.core.radio_button32379.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32379.call(null,group,null);
});

sablono.core.radio_button32379.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32379.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32379.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24798__auto__ = value;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32379.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32379);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32387 = (function sablono$core$select_options32387(coll){
var iter__25578__auto__ = (function sablono$core$select_options32387_$_iter__32404(s__32405){
return (new cljs.core.LazySeq(null,(function (){
var s__32405__$1 = s__32405;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32405__$1);
if(temp__4657__auto__){
var s__32405__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32405__$2)){
var c__25576__auto__ = cljs.core.chunk_first.call(null,s__32405__$2);
var size__25577__auto__ = cljs.core.count.call(null,c__25576__auto__);
var b__32407 = cljs.core.chunk_buffer.call(null,size__25577__auto__);
if((function (){var i__32406 = (0);
while(true){
if((i__32406 < size__25577__auto__)){
var x = cljs.core._nth.call(null,c__25576__auto__,i__32406);
cljs.core.chunk_append.call(null,b__32407,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32414 = x;
var text = cljs.core.nth.call(null,vec__32414,(0),null);
var val = cljs.core.nth.call(null,vec__32414,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32414,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32387.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32420 = (i__32406 + (1));
i__32406 = G__32420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32407),sablono$core$select_options32387_$_iter__32404.call(null,cljs.core.chunk_rest.call(null,s__32405__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32407),null);
}
} else {
var x = cljs.core.first.call(null,s__32405__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32417 = x;
var text = cljs.core.nth.call(null,vec__32417,(0),null);
var val = cljs.core.nth.call(null,vec__32417,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32417,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32387.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32387_$_iter__32404.call(null,cljs.core.rest.call(null,s__32405__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25578__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32387);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32421 = (function sablono$core$drop_down32421(var_args){
var args32422 = [];
var len__25873__auto___32425 = arguments.length;
var i__25874__auto___32426 = (0);
while(true){
if((i__25874__auto___32426 < len__25873__auto___32425)){
args32422.push((arguments[i__25874__auto___32426]));

var G__32427 = (i__25874__auto___32426 + (1));
i__25874__auto___32426 = G__32427;
continue;
} else {
}
break;
}

var G__32424 = args32422.length;
switch (G__32424) {
case 2:
return sablono.core.drop_down32421.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32421.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32422.length)].join('')));

}
});

sablono.core.drop_down32421.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32421.call(null,name,options,null);
});

sablono.core.drop_down32421.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32421.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32421);
/**
 * Creates a text area element.
 */
sablono.core.text_area32429 = (function sablono$core$text_area32429(var_args){
var args32430 = [];
var len__25873__auto___32433 = arguments.length;
var i__25874__auto___32434 = (0);
while(true){
if((i__25874__auto___32434 < len__25873__auto___32433)){
args32430.push((arguments[i__25874__auto___32434]));

var G__32435 = (i__25874__auto___32434 + (1));
i__25874__auto___32434 = G__32435;
continue;
} else {
}
break;
}

var G__32432 = args32430.length;
switch (G__32432) {
case 1:
return sablono.core.text_area32429.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32429.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32430.length)].join('')));

}
});

sablono.core.text_area32429.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32429.call(null,name,null);
});

sablono.core.text_area32429.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24798__auto__ = value;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32429.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32429);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32437 = (function sablono$core$label32437(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32437);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32438 = (function sablono$core$submit_button32438(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32438);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32439 = (function sablono$core$reset_button32439(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32439);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32440 = (function sablono$core$form_to32440(var_args){
var args__25880__auto__ = [];
var len__25873__auto___32447 = arguments.length;
var i__25874__auto___32448 = (0);
while(true){
if((i__25874__auto___32448 < len__25873__auto___32447)){
args__25880__auto__.push((arguments[i__25874__auto___32448]));

var G__32449 = (i__25874__auto___32448 + (1));
i__25874__auto___32448 = G__32449;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32440.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

sablono.core.form_to32440.cljs$core$IFn$_invoke$arity$variadic = (function (p__32443,body){
var vec__32444 = p__32443;
var method = cljs.core.nth.call(null,vec__32444,(0),null);
var action = cljs.core.nth.call(null,vec__32444,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32440.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32440.cljs$lang$applyTo = (function (seq32441){
var G__32442 = cljs.core.first.call(null,seq32441);
var seq32441__$1 = cljs.core.next.call(null,seq32441);
return sablono.core.form_to32440.cljs$core$IFn$_invoke$arity$variadic(G__32442,seq32441__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32440);

//# sourceMappingURL=core.js.map?rel=1483385719266