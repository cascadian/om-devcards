// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24798__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24798__auto__){
return or__24798__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24798__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44849_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44849_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__44854 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44855 = null;
var count__44856 = (0);
var i__44857 = (0);
while(true){
if((i__44857 < count__44856)){
var n = cljs.core._nth.call(null,chunk__44855,i__44857);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44858 = seq__44854;
var G__44859 = chunk__44855;
var G__44860 = count__44856;
var G__44861 = (i__44857 + (1));
seq__44854 = G__44858;
chunk__44855 = G__44859;
count__44856 = G__44860;
i__44857 = G__44861;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44854);
if(temp__4657__auto__){
var seq__44854__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44854__$1)){
var c__25609__auto__ = cljs.core.chunk_first.call(null,seq__44854__$1);
var G__44862 = cljs.core.chunk_rest.call(null,seq__44854__$1);
var G__44863 = c__25609__auto__;
var G__44864 = cljs.core.count.call(null,c__25609__auto__);
var G__44865 = (0);
seq__44854 = G__44862;
chunk__44855 = G__44863;
count__44856 = G__44864;
i__44857 = G__44865;
continue;
} else {
var n = cljs.core.first.call(null,seq__44854__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44866 = cljs.core.next.call(null,seq__44854__$1);
var G__44867 = null;
var G__44868 = (0);
var G__44869 = (0);
seq__44854 = G__44866;
chunk__44855 = G__44867;
count__44856 = G__44868;
i__44857 = G__44869;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__44920_44931 = cljs.core.seq.call(null,deps);
var chunk__44921_44932 = null;
var count__44922_44933 = (0);
var i__44923_44934 = (0);
while(true){
if((i__44923_44934 < count__44922_44933)){
var dep_44935 = cljs.core._nth.call(null,chunk__44921_44932,i__44923_44934);
topo_sort_helper_STAR_.call(null,dep_44935,(depth + (1)),state);

var G__44936 = seq__44920_44931;
var G__44937 = chunk__44921_44932;
var G__44938 = count__44922_44933;
var G__44939 = (i__44923_44934 + (1));
seq__44920_44931 = G__44936;
chunk__44921_44932 = G__44937;
count__44922_44933 = G__44938;
i__44923_44934 = G__44939;
continue;
} else {
var temp__4657__auto___44940 = cljs.core.seq.call(null,seq__44920_44931);
if(temp__4657__auto___44940){
var seq__44920_44941__$1 = temp__4657__auto___44940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44920_44941__$1)){
var c__25609__auto___44942 = cljs.core.chunk_first.call(null,seq__44920_44941__$1);
var G__44943 = cljs.core.chunk_rest.call(null,seq__44920_44941__$1);
var G__44944 = c__25609__auto___44942;
var G__44945 = cljs.core.count.call(null,c__25609__auto___44942);
var G__44946 = (0);
seq__44920_44931 = G__44943;
chunk__44921_44932 = G__44944;
count__44922_44933 = G__44945;
i__44923_44934 = G__44946;
continue;
} else {
var dep_44947 = cljs.core.first.call(null,seq__44920_44941__$1);
topo_sort_helper_STAR_.call(null,dep_44947,(depth + (1)),state);

var G__44948 = cljs.core.next.call(null,seq__44920_44941__$1);
var G__44949 = null;
var G__44950 = (0);
var G__44951 = (0);
seq__44920_44931 = G__44948;
chunk__44921_44932 = G__44949;
count__44922_44933 = G__44950;
i__44923_44934 = G__44951;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44924){
var vec__44928 = p__44924;
var seq__44929 = cljs.core.seq.call(null,vec__44928);
var first__44930 = cljs.core.first.call(null,seq__44929);
var seq__44929__$1 = cljs.core.next.call(null,seq__44929);
var x = first__44930;
var xs = seq__44929__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44928,seq__44929,first__44930,seq__44929__$1,x,xs,get_deps__$1){
return (function (p1__44870_SHARP_){
return clojure.set.difference.call(null,p1__44870_SHARP_,x);
});})(vec__44928,seq__44929,first__44930,seq__44929__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__44964 = cljs.core.seq.call(null,provides);
var chunk__44965 = null;
var count__44966 = (0);
var i__44967 = (0);
while(true){
if((i__44967 < count__44966)){
var prov = cljs.core._nth.call(null,chunk__44965,i__44967);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44968_44976 = cljs.core.seq.call(null,requires);
var chunk__44969_44977 = null;
var count__44970_44978 = (0);
var i__44971_44979 = (0);
while(true){
if((i__44971_44979 < count__44970_44978)){
var req_44980 = cljs.core._nth.call(null,chunk__44969_44977,i__44971_44979);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44980,prov);

var G__44981 = seq__44968_44976;
var G__44982 = chunk__44969_44977;
var G__44983 = count__44970_44978;
var G__44984 = (i__44971_44979 + (1));
seq__44968_44976 = G__44981;
chunk__44969_44977 = G__44982;
count__44970_44978 = G__44983;
i__44971_44979 = G__44984;
continue;
} else {
var temp__4657__auto___44985 = cljs.core.seq.call(null,seq__44968_44976);
if(temp__4657__auto___44985){
var seq__44968_44986__$1 = temp__4657__auto___44985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44968_44986__$1)){
var c__25609__auto___44987 = cljs.core.chunk_first.call(null,seq__44968_44986__$1);
var G__44988 = cljs.core.chunk_rest.call(null,seq__44968_44986__$1);
var G__44989 = c__25609__auto___44987;
var G__44990 = cljs.core.count.call(null,c__25609__auto___44987);
var G__44991 = (0);
seq__44968_44976 = G__44988;
chunk__44969_44977 = G__44989;
count__44970_44978 = G__44990;
i__44971_44979 = G__44991;
continue;
} else {
var req_44992 = cljs.core.first.call(null,seq__44968_44986__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44992,prov);

var G__44993 = cljs.core.next.call(null,seq__44968_44986__$1);
var G__44994 = null;
var G__44995 = (0);
var G__44996 = (0);
seq__44968_44976 = G__44993;
chunk__44969_44977 = G__44994;
count__44970_44978 = G__44995;
i__44971_44979 = G__44996;
continue;
}
} else {
}
}
break;
}

var G__44997 = seq__44964;
var G__44998 = chunk__44965;
var G__44999 = count__44966;
var G__45000 = (i__44967 + (1));
seq__44964 = G__44997;
chunk__44965 = G__44998;
count__44966 = G__44999;
i__44967 = G__45000;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44964);
if(temp__4657__auto__){
var seq__44964__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44964__$1)){
var c__25609__auto__ = cljs.core.chunk_first.call(null,seq__44964__$1);
var G__45001 = cljs.core.chunk_rest.call(null,seq__44964__$1);
var G__45002 = c__25609__auto__;
var G__45003 = cljs.core.count.call(null,c__25609__auto__);
var G__45004 = (0);
seq__44964 = G__45001;
chunk__44965 = G__45002;
count__44966 = G__45003;
i__44967 = G__45004;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44964__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44972_45005 = cljs.core.seq.call(null,requires);
var chunk__44973_45006 = null;
var count__44974_45007 = (0);
var i__44975_45008 = (0);
while(true){
if((i__44975_45008 < count__44974_45007)){
var req_45009 = cljs.core._nth.call(null,chunk__44973_45006,i__44975_45008);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45009,prov);

var G__45010 = seq__44972_45005;
var G__45011 = chunk__44973_45006;
var G__45012 = count__44974_45007;
var G__45013 = (i__44975_45008 + (1));
seq__44972_45005 = G__45010;
chunk__44973_45006 = G__45011;
count__44974_45007 = G__45012;
i__44975_45008 = G__45013;
continue;
} else {
var temp__4657__auto___45014__$1 = cljs.core.seq.call(null,seq__44972_45005);
if(temp__4657__auto___45014__$1){
var seq__44972_45015__$1 = temp__4657__auto___45014__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44972_45015__$1)){
var c__25609__auto___45016 = cljs.core.chunk_first.call(null,seq__44972_45015__$1);
var G__45017 = cljs.core.chunk_rest.call(null,seq__44972_45015__$1);
var G__45018 = c__25609__auto___45016;
var G__45019 = cljs.core.count.call(null,c__25609__auto___45016);
var G__45020 = (0);
seq__44972_45005 = G__45017;
chunk__44973_45006 = G__45018;
count__44974_45007 = G__45019;
i__44975_45008 = G__45020;
continue;
} else {
var req_45021 = cljs.core.first.call(null,seq__44972_45015__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45021,prov);

var G__45022 = cljs.core.next.call(null,seq__44972_45015__$1);
var G__45023 = null;
var G__45024 = (0);
var G__45025 = (0);
seq__44972_45005 = G__45022;
chunk__44973_45006 = G__45023;
count__44974_45007 = G__45024;
i__44975_45008 = G__45025;
continue;
}
} else {
}
}
break;
}

var G__45026 = cljs.core.next.call(null,seq__44964__$1);
var G__45027 = null;
var G__45028 = (0);
var G__45029 = (0);
seq__44964 = G__45026;
chunk__44965 = G__45027;
count__44966 = G__45028;
i__44967 = G__45029;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__45034_45038 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45035_45039 = null;
var count__45036_45040 = (0);
var i__45037_45041 = (0);
while(true){
if((i__45037_45041 < count__45036_45040)){
var ns_45042 = cljs.core._nth.call(null,chunk__45035_45039,i__45037_45041);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45042);

var G__45043 = seq__45034_45038;
var G__45044 = chunk__45035_45039;
var G__45045 = count__45036_45040;
var G__45046 = (i__45037_45041 + (1));
seq__45034_45038 = G__45043;
chunk__45035_45039 = G__45044;
count__45036_45040 = G__45045;
i__45037_45041 = G__45046;
continue;
} else {
var temp__4657__auto___45047 = cljs.core.seq.call(null,seq__45034_45038);
if(temp__4657__auto___45047){
var seq__45034_45048__$1 = temp__4657__auto___45047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45034_45048__$1)){
var c__25609__auto___45049 = cljs.core.chunk_first.call(null,seq__45034_45048__$1);
var G__45050 = cljs.core.chunk_rest.call(null,seq__45034_45048__$1);
var G__45051 = c__25609__auto___45049;
var G__45052 = cljs.core.count.call(null,c__25609__auto___45049);
var G__45053 = (0);
seq__45034_45038 = G__45050;
chunk__45035_45039 = G__45051;
count__45036_45040 = G__45052;
i__45037_45041 = G__45053;
continue;
} else {
var ns_45054 = cljs.core.first.call(null,seq__45034_45048__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45054);

var G__45055 = cljs.core.next.call(null,seq__45034_45048__$1);
var G__45056 = null;
var G__45057 = (0);
var G__45058 = (0);
seq__45034_45038 = G__45055;
chunk__45035_45039 = G__45056;
count__45036_45040 = G__45057;
i__45037_45041 = G__45058;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24798__auto__ = goog.require__;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__45059__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45060__i = 0, G__45060__a = new Array(arguments.length -  0);
while (G__45060__i < G__45060__a.length) {G__45060__a[G__45060__i] = arguments[G__45060__i + 0]; ++G__45060__i;}
  args = new cljs.core.IndexedSeq(G__45060__a,0);
} 
return G__45059__delegate.call(this,args);};
G__45059.cljs$lang$maxFixedArity = 0;
G__45059.cljs$lang$applyTo = (function (arglist__45061){
var args = cljs.core.seq(arglist__45061);
return G__45059__delegate(args);
});
G__45059.cljs$core$IFn$_invoke$arity$variadic = G__45059__delegate;
return G__45059;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45063 = cljs.core._EQ_;
var expr__45064 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45063.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45064))){
var path_parts = ((function (pred__45063,expr__45064){
return (function (p1__45062_SHARP_){
return clojure.string.split.call(null,p1__45062_SHARP_,/[\/\\]/);
});})(pred__45063,expr__45064))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__45063,expr__45064){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e45066){if((e45066 instanceof Error)){
var e = e45066;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45066;

}
}})());
});
;})(path_parts,sep,root,pred__45063,expr__45064))
} else {
if(cljs.core.truth_(pred__45063.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45064))){
return ((function (pred__45063,expr__45064){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__45063,expr__45064){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__45063,expr__45064))
);

return deferred.addErrback(((function (deferred,pred__45063,expr__45064){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__45063,expr__45064))
);
});
;})(pred__45063,expr__45064))
} else {
return ((function (pred__45063,expr__45064){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45063,expr__45064))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45067,callback){
var map__45070 = p__45067;
var map__45070__$1 = ((((!((map__45070 == null)))?((((map__45070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45070):map__45070);
var file_msg = map__45070__$1;
var request_url = cljs.core.get.call(null,map__45070__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__45070,map__45070__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45070,map__45070__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto__){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto__){
return (function (state_45094){
var state_val_45095 = (state_45094[(1)]);
if((state_val_45095 === (7))){
var inst_45090 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
var statearr_45096_45116 = state_45094__$1;
(statearr_45096_45116[(2)] = inst_45090);

(statearr_45096_45116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (1))){
var state_45094__$1 = state_45094;
var statearr_45097_45117 = state_45094__$1;
(statearr_45097_45117[(2)] = null);

(statearr_45097_45117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (4))){
var inst_45074 = (state_45094[(7)]);
var inst_45074__$1 = (state_45094[(2)]);
var state_45094__$1 = (function (){var statearr_45098 = state_45094;
(statearr_45098[(7)] = inst_45074__$1);

return statearr_45098;
})();
if(cljs.core.truth_(inst_45074__$1)){
var statearr_45099_45118 = state_45094__$1;
(statearr_45099_45118[(1)] = (5));

} else {
var statearr_45100_45119 = state_45094__$1;
(statearr_45100_45119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (6))){
var state_45094__$1 = state_45094;
var statearr_45101_45120 = state_45094__$1;
(statearr_45101_45120[(2)] = null);

(statearr_45101_45120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (3))){
var inst_45092 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45094__$1,inst_45092);
} else {
if((state_val_45095 === (2))){
var state_45094__$1 = state_45094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45094__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45095 === (11))){
var inst_45086 = (state_45094[(2)]);
var state_45094__$1 = (function (){var statearr_45102 = state_45094;
(statearr_45102[(8)] = inst_45086);

return statearr_45102;
})();
var statearr_45103_45121 = state_45094__$1;
(statearr_45103_45121[(2)] = null);

(statearr_45103_45121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (9))){
var inst_45078 = (state_45094[(9)]);
var inst_45080 = (state_45094[(10)]);
var inst_45082 = inst_45080.call(null,inst_45078);
var state_45094__$1 = state_45094;
var statearr_45104_45122 = state_45094__$1;
(statearr_45104_45122[(2)] = inst_45082);

(statearr_45104_45122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (5))){
var inst_45074 = (state_45094[(7)]);
var inst_45076 = figwheel.client.file_reloading.blocking_load.call(null,inst_45074);
var state_45094__$1 = state_45094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45094__$1,(8),inst_45076);
} else {
if((state_val_45095 === (10))){
var inst_45078 = (state_45094[(9)]);
var inst_45084 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45078);
var state_45094__$1 = state_45094;
var statearr_45105_45123 = state_45094__$1;
(statearr_45105_45123[(2)] = inst_45084);

(statearr_45105_45123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (8))){
var inst_45074 = (state_45094[(7)]);
var inst_45080 = (state_45094[(10)]);
var inst_45078 = (state_45094[(2)]);
var inst_45079 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45080__$1 = cljs.core.get.call(null,inst_45079,inst_45074);
var state_45094__$1 = (function (){var statearr_45106 = state_45094;
(statearr_45106[(9)] = inst_45078);

(statearr_45106[(10)] = inst_45080__$1);

return statearr_45106;
})();
if(cljs.core.truth_(inst_45080__$1)){
var statearr_45107_45124 = state_45094__$1;
(statearr_45107_45124[(1)] = (9));

} else {
var statearr_45108_45125 = state_45094__$1;
(statearr_45108_45125[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28758__auto__))
;
return ((function (switch__28646__auto__,c__28758__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28647__auto__ = null;
var figwheel$client$file_reloading$state_machine__28647__auto____0 = (function (){
var statearr_45112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45112[(0)] = figwheel$client$file_reloading$state_machine__28647__auto__);

(statearr_45112[(1)] = (1));

return statearr_45112;
});
var figwheel$client$file_reloading$state_machine__28647__auto____1 = (function (state_45094){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_45094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e45113){if((e45113 instanceof Object)){
var ex__28650__auto__ = e45113;
var statearr_45114_45126 = state_45094;
(statearr_45114_45126[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45127 = state_45094;
state_45094 = G__45127;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28647__auto__ = function(state_45094){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28647__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28647__auto____1.call(this,state_45094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28647__auto____0;
figwheel$client$file_reloading$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28647__auto____1;
return figwheel$client$file_reloading$state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto__))
})();
var state__28760__auto__ = (function (){var statearr_45115 = f__28759__auto__.call(null);
(statearr_45115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto__);

return statearr_45115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto__))
);

return c__28758__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45128,callback){
var map__45131 = p__45128;
var map__45131__$1 = ((((!((map__45131 == null)))?((((map__45131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45131):map__45131);
var file_msg = map__45131__$1;
var namespace = cljs.core.get.call(null,map__45131__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45131,map__45131__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45131,map__45131__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45133){
var map__45136 = p__45133;
var map__45136__$1 = ((((!((map__45136 == null)))?((((map__45136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45136):map__45136);
var file_msg = map__45136__$1;
var namespace = cljs.core.get.call(null,map__45136__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24786__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24786__auto__){
var or__24798__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
var or__24798__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24798__auto____$1)){
return or__24798__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24786__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45138,callback){
var map__45141 = p__45138;
var map__45141__$1 = ((((!((map__45141 == null)))?((((map__45141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45141):map__45141);
var file_msg = map__45141__$1;
var request_url = cljs.core.get.call(null,map__45141__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45141__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28758__auto___45245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___45245,out){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___45245,out){
return (function (state_45227){
var state_val_45228 = (state_45227[(1)]);
if((state_val_45228 === (1))){
var inst_45201 = cljs.core.seq.call(null,files);
var inst_45202 = cljs.core.first.call(null,inst_45201);
var inst_45203 = cljs.core.next.call(null,inst_45201);
var inst_45204 = files;
var state_45227__$1 = (function (){var statearr_45229 = state_45227;
(statearr_45229[(7)] = inst_45204);

(statearr_45229[(8)] = inst_45202);

(statearr_45229[(9)] = inst_45203);

return statearr_45229;
})();
var statearr_45230_45246 = state_45227__$1;
(statearr_45230_45246[(2)] = null);

(statearr_45230_45246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45228 === (2))){
var inst_45204 = (state_45227[(7)]);
var inst_45210 = (state_45227[(10)]);
var inst_45209 = cljs.core.seq.call(null,inst_45204);
var inst_45210__$1 = cljs.core.first.call(null,inst_45209);
var inst_45211 = cljs.core.next.call(null,inst_45209);
var inst_45212 = (inst_45210__$1 == null);
var inst_45213 = cljs.core.not.call(null,inst_45212);
var state_45227__$1 = (function (){var statearr_45231 = state_45227;
(statearr_45231[(10)] = inst_45210__$1);

(statearr_45231[(11)] = inst_45211);

return statearr_45231;
})();
if(inst_45213){
var statearr_45232_45247 = state_45227__$1;
(statearr_45232_45247[(1)] = (4));

} else {
var statearr_45233_45248 = state_45227__$1;
(statearr_45233_45248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45228 === (3))){
var inst_45225 = (state_45227[(2)]);
var state_45227__$1 = state_45227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45227__$1,inst_45225);
} else {
if((state_val_45228 === (4))){
var inst_45210 = (state_45227[(10)]);
var inst_45215 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45210);
var state_45227__$1 = state_45227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45227__$1,(7),inst_45215);
} else {
if((state_val_45228 === (5))){
var inst_45221 = cljs.core.async.close_BANG_.call(null,out);
var state_45227__$1 = state_45227;
var statearr_45234_45249 = state_45227__$1;
(statearr_45234_45249[(2)] = inst_45221);

(statearr_45234_45249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45228 === (6))){
var inst_45223 = (state_45227[(2)]);
var state_45227__$1 = state_45227;
var statearr_45235_45250 = state_45227__$1;
(statearr_45235_45250[(2)] = inst_45223);

(statearr_45235_45250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45228 === (7))){
var inst_45211 = (state_45227[(11)]);
var inst_45217 = (state_45227[(2)]);
var inst_45218 = cljs.core.async.put_BANG_.call(null,out,inst_45217);
var inst_45204 = inst_45211;
var state_45227__$1 = (function (){var statearr_45236 = state_45227;
(statearr_45236[(7)] = inst_45204);

(statearr_45236[(12)] = inst_45218);

return statearr_45236;
})();
var statearr_45237_45251 = state_45227__$1;
(statearr_45237_45251[(2)] = null);

(statearr_45237_45251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28758__auto___45245,out))
;
return ((function (switch__28646__auto__,c__28758__auto___45245,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto____0 = (function (){
var statearr_45241 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45241[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto__);

(statearr_45241[(1)] = (1));

return statearr_45241;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto____1 = (function (state_45227){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_45227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e45242){if((e45242 instanceof Object)){
var ex__28650__auto__ = e45242;
var statearr_45243_45252 = state_45227;
(statearr_45243_45252[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45253 = state_45227;
state_45227 = G__45253;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto__ = function(state_45227){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto____1.call(this,state_45227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___45245,out))
})();
var state__28760__auto__ = (function (){var statearr_45244 = f__28759__auto__.call(null);
(statearr_45244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___45245);

return statearr_45244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___45245,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45254,opts){
var map__45258 = p__45254;
var map__45258__$1 = ((((!((map__45258 == null)))?((((map__45258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45258):map__45258);
var eval_body__$1 = cljs.core.get.call(null,map__45258__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45258__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24786__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24786__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24786__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e45260){var e = e45260;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__45261_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45261_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__45270){
var vec__45271 = p__45270;
var k = cljs.core.nth.call(null,vec__45271,(0),null);
var v = cljs.core.nth.call(null,vec__45271,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45274){
var vec__45275 = p__45274;
var k = cljs.core.nth.call(null,vec__45275,(0),null);
var v = cljs.core.nth.call(null,vec__45275,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45281,p__45282){
var map__45529 = p__45281;
var map__45529__$1 = ((((!((map__45529 == null)))?((((map__45529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45529):map__45529);
var opts = map__45529__$1;
var before_jsload = cljs.core.get.call(null,map__45529__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45529__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45529__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45530 = p__45282;
var map__45530__$1 = ((((!((map__45530 == null)))?((((map__45530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45530):map__45530);
var msg = map__45530__$1;
var files = cljs.core.get.call(null,map__45530__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45530__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45530__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45683){
var state_val_45684 = (state_45683[(1)]);
if((state_val_45684 === (7))){
var inst_45546 = (state_45683[(7)]);
var inst_45545 = (state_45683[(8)]);
var inst_45547 = (state_45683[(9)]);
var inst_45544 = (state_45683[(10)]);
var inst_45552 = cljs.core._nth.call(null,inst_45545,inst_45547);
var inst_45553 = figwheel.client.file_reloading.eval_body.call(null,inst_45552,opts);
var inst_45554 = (inst_45547 + (1));
var tmp45685 = inst_45546;
var tmp45686 = inst_45545;
var tmp45687 = inst_45544;
var inst_45544__$1 = tmp45687;
var inst_45545__$1 = tmp45686;
var inst_45546__$1 = tmp45685;
var inst_45547__$1 = inst_45554;
var state_45683__$1 = (function (){var statearr_45688 = state_45683;
(statearr_45688[(7)] = inst_45546__$1);

(statearr_45688[(8)] = inst_45545__$1);

(statearr_45688[(9)] = inst_45547__$1);

(statearr_45688[(11)] = inst_45553);

(statearr_45688[(10)] = inst_45544__$1);

return statearr_45688;
})();
var statearr_45689_45775 = state_45683__$1;
(statearr_45689_45775[(2)] = null);

(statearr_45689_45775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (20))){
var inst_45587 = (state_45683[(12)]);
var inst_45595 = figwheel.client.file_reloading.sort_files.call(null,inst_45587);
var state_45683__$1 = state_45683;
var statearr_45690_45776 = state_45683__$1;
(statearr_45690_45776[(2)] = inst_45595);

(statearr_45690_45776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (27))){
var state_45683__$1 = state_45683;
var statearr_45691_45777 = state_45683__$1;
(statearr_45691_45777[(2)] = null);

(statearr_45691_45777[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (1))){
var inst_45536 = (state_45683[(13)]);
var inst_45533 = before_jsload.call(null,files);
var inst_45534 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45535 = (function (){return ((function (inst_45536,inst_45533,inst_45534,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45278_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45278_SHARP_);
});
;})(inst_45536,inst_45533,inst_45534,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45536__$1 = cljs.core.filter.call(null,inst_45535,files);
var inst_45537 = cljs.core.not_empty.call(null,inst_45536__$1);
var state_45683__$1 = (function (){var statearr_45692 = state_45683;
(statearr_45692[(14)] = inst_45534);

(statearr_45692[(13)] = inst_45536__$1);

(statearr_45692[(15)] = inst_45533);

return statearr_45692;
})();
if(cljs.core.truth_(inst_45537)){
var statearr_45693_45778 = state_45683__$1;
(statearr_45693_45778[(1)] = (2));

} else {
var statearr_45694_45779 = state_45683__$1;
(statearr_45694_45779[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (24))){
var state_45683__$1 = state_45683;
var statearr_45695_45780 = state_45683__$1;
(statearr_45695_45780[(2)] = null);

(statearr_45695_45780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (39))){
var inst_45637 = (state_45683[(16)]);
var state_45683__$1 = state_45683;
var statearr_45696_45781 = state_45683__$1;
(statearr_45696_45781[(2)] = inst_45637);

(statearr_45696_45781[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (46))){
var inst_45678 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
var statearr_45697_45782 = state_45683__$1;
(statearr_45697_45782[(2)] = inst_45678);

(statearr_45697_45782[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (4))){
var inst_45581 = (state_45683[(2)]);
var inst_45582 = cljs.core.List.EMPTY;
var inst_45583 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45582);
var inst_45584 = (function (){return ((function (inst_45581,inst_45582,inst_45583,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45279_SHARP_){
var and__24786__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45279_SHARP_);
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45279_SHARP_));
} else {
return and__24786__auto__;
}
});
;})(inst_45581,inst_45582,inst_45583,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45585 = cljs.core.filter.call(null,inst_45584,files);
var inst_45586 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45587 = cljs.core.concat.call(null,inst_45585,inst_45586);
var state_45683__$1 = (function (){var statearr_45698 = state_45683;
(statearr_45698[(17)] = inst_45583);

(statearr_45698[(12)] = inst_45587);

(statearr_45698[(18)] = inst_45581);

return statearr_45698;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45699_45783 = state_45683__$1;
(statearr_45699_45783[(1)] = (16));

} else {
var statearr_45700_45784 = state_45683__$1;
(statearr_45700_45784[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (15))){
var inst_45571 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
var statearr_45701_45785 = state_45683__$1;
(statearr_45701_45785[(2)] = inst_45571);

(statearr_45701_45785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (21))){
var inst_45597 = (state_45683[(19)]);
var inst_45597__$1 = (state_45683[(2)]);
var inst_45598 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45597__$1);
var state_45683__$1 = (function (){var statearr_45702 = state_45683;
(statearr_45702[(19)] = inst_45597__$1);

return statearr_45702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45683__$1,(22),inst_45598);
} else {
if((state_val_45684 === (31))){
var inst_45681 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45683__$1,inst_45681);
} else {
if((state_val_45684 === (32))){
var inst_45637 = (state_45683[(16)]);
var inst_45642 = inst_45637.cljs$lang$protocol_mask$partition0$;
var inst_45643 = (inst_45642 & (64));
var inst_45644 = inst_45637.cljs$core$ISeq$;
var inst_45645 = (inst_45643) || (inst_45644);
var state_45683__$1 = state_45683;
if(cljs.core.truth_(inst_45645)){
var statearr_45703_45786 = state_45683__$1;
(statearr_45703_45786[(1)] = (35));

} else {
var statearr_45704_45787 = state_45683__$1;
(statearr_45704_45787[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (40))){
var inst_45658 = (state_45683[(20)]);
var inst_45657 = (state_45683[(2)]);
var inst_45658__$1 = cljs.core.get.call(null,inst_45657,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45659 = cljs.core.get.call(null,inst_45657,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45660 = cljs.core.not_empty.call(null,inst_45658__$1);
var state_45683__$1 = (function (){var statearr_45705 = state_45683;
(statearr_45705[(20)] = inst_45658__$1);

(statearr_45705[(21)] = inst_45659);

return statearr_45705;
})();
if(cljs.core.truth_(inst_45660)){
var statearr_45706_45788 = state_45683__$1;
(statearr_45706_45788[(1)] = (41));

} else {
var statearr_45707_45789 = state_45683__$1;
(statearr_45707_45789[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (33))){
var state_45683__$1 = state_45683;
var statearr_45708_45790 = state_45683__$1;
(statearr_45708_45790[(2)] = false);

(statearr_45708_45790[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (13))){
var inst_45557 = (state_45683[(22)]);
var inst_45561 = cljs.core.chunk_first.call(null,inst_45557);
var inst_45562 = cljs.core.chunk_rest.call(null,inst_45557);
var inst_45563 = cljs.core.count.call(null,inst_45561);
var inst_45544 = inst_45562;
var inst_45545 = inst_45561;
var inst_45546 = inst_45563;
var inst_45547 = (0);
var state_45683__$1 = (function (){var statearr_45709 = state_45683;
(statearr_45709[(7)] = inst_45546);

(statearr_45709[(8)] = inst_45545);

(statearr_45709[(9)] = inst_45547);

(statearr_45709[(10)] = inst_45544);

return statearr_45709;
})();
var statearr_45710_45791 = state_45683__$1;
(statearr_45710_45791[(2)] = null);

(statearr_45710_45791[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (22))){
var inst_45605 = (state_45683[(23)]);
var inst_45597 = (state_45683[(19)]);
var inst_45601 = (state_45683[(24)]);
var inst_45600 = (state_45683[(25)]);
var inst_45600__$1 = (state_45683[(2)]);
var inst_45601__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45600__$1);
var inst_45602 = (function (){var all_files = inst_45597;
var res_SINGLEQUOTE_ = inst_45600__$1;
var res = inst_45601__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45605,inst_45597,inst_45601,inst_45600,inst_45600__$1,inst_45601__$1,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45280_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45280_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45605,inst_45597,inst_45601,inst_45600,inst_45600__$1,inst_45601__$1,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45603 = cljs.core.filter.call(null,inst_45602,inst_45600__$1);
var inst_45604 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45605__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45604);
var inst_45606 = cljs.core.not_empty.call(null,inst_45605__$1);
var state_45683__$1 = (function (){var statearr_45711 = state_45683;
(statearr_45711[(23)] = inst_45605__$1);

(statearr_45711[(26)] = inst_45603);

(statearr_45711[(24)] = inst_45601__$1);

(statearr_45711[(25)] = inst_45600__$1);

return statearr_45711;
})();
if(cljs.core.truth_(inst_45606)){
var statearr_45712_45792 = state_45683__$1;
(statearr_45712_45792[(1)] = (23));

} else {
var statearr_45713_45793 = state_45683__$1;
(statearr_45713_45793[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (36))){
var state_45683__$1 = state_45683;
var statearr_45714_45794 = state_45683__$1;
(statearr_45714_45794[(2)] = false);

(statearr_45714_45794[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (41))){
var inst_45658 = (state_45683[(20)]);
var inst_45662 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45663 = cljs.core.map.call(null,inst_45662,inst_45658);
var inst_45664 = cljs.core.pr_str.call(null,inst_45663);
var inst_45665 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_45664)].join('');
var inst_45666 = figwheel.client.utils.log.call(null,inst_45665);
var state_45683__$1 = state_45683;
var statearr_45715_45795 = state_45683__$1;
(statearr_45715_45795[(2)] = inst_45666);

(statearr_45715_45795[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (43))){
var inst_45659 = (state_45683[(21)]);
var inst_45669 = (state_45683[(2)]);
var inst_45670 = cljs.core.not_empty.call(null,inst_45659);
var state_45683__$1 = (function (){var statearr_45716 = state_45683;
(statearr_45716[(27)] = inst_45669);

return statearr_45716;
})();
if(cljs.core.truth_(inst_45670)){
var statearr_45717_45796 = state_45683__$1;
(statearr_45717_45796[(1)] = (44));

} else {
var statearr_45718_45797 = state_45683__$1;
(statearr_45718_45797[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (29))){
var inst_45637 = (state_45683[(16)]);
var inst_45605 = (state_45683[(23)]);
var inst_45603 = (state_45683[(26)]);
var inst_45597 = (state_45683[(19)]);
var inst_45601 = (state_45683[(24)]);
var inst_45600 = (state_45683[(25)]);
var inst_45633 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45636 = (function (){var all_files = inst_45597;
var res_SINGLEQUOTE_ = inst_45600;
var res = inst_45601;
var files_not_loaded = inst_45603;
var dependencies_that_loaded = inst_45605;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45637,inst_45605,inst_45603,inst_45597,inst_45601,inst_45600,inst_45633,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45635){
var map__45719 = p__45635;
var map__45719__$1 = ((((!((map__45719 == null)))?((((map__45719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45719):map__45719);
var namespace = cljs.core.get.call(null,map__45719__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45637,inst_45605,inst_45603,inst_45597,inst_45601,inst_45600,inst_45633,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45637__$1 = cljs.core.group_by.call(null,inst_45636,inst_45603);
var inst_45639 = (inst_45637__$1 == null);
var inst_45640 = cljs.core.not.call(null,inst_45639);
var state_45683__$1 = (function (){var statearr_45721 = state_45683;
(statearr_45721[(16)] = inst_45637__$1);

(statearr_45721[(28)] = inst_45633);

return statearr_45721;
})();
if(inst_45640){
var statearr_45722_45798 = state_45683__$1;
(statearr_45722_45798[(1)] = (32));

} else {
var statearr_45723_45799 = state_45683__$1;
(statearr_45723_45799[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (44))){
var inst_45659 = (state_45683[(21)]);
var inst_45672 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45659);
var inst_45673 = cljs.core.pr_str.call(null,inst_45672);
var inst_45674 = [cljs.core.str("not required: "),cljs.core.str(inst_45673)].join('');
var inst_45675 = figwheel.client.utils.log.call(null,inst_45674);
var state_45683__$1 = state_45683;
var statearr_45724_45800 = state_45683__$1;
(statearr_45724_45800[(2)] = inst_45675);

(statearr_45724_45800[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (6))){
var inst_45578 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
var statearr_45725_45801 = state_45683__$1;
(statearr_45725_45801[(2)] = inst_45578);

(statearr_45725_45801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (28))){
var inst_45603 = (state_45683[(26)]);
var inst_45630 = (state_45683[(2)]);
var inst_45631 = cljs.core.not_empty.call(null,inst_45603);
var state_45683__$1 = (function (){var statearr_45726 = state_45683;
(statearr_45726[(29)] = inst_45630);

return statearr_45726;
})();
if(cljs.core.truth_(inst_45631)){
var statearr_45727_45802 = state_45683__$1;
(statearr_45727_45802[(1)] = (29));

} else {
var statearr_45728_45803 = state_45683__$1;
(statearr_45728_45803[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (25))){
var inst_45601 = (state_45683[(24)]);
var inst_45617 = (state_45683[(2)]);
var inst_45618 = cljs.core.not_empty.call(null,inst_45601);
var state_45683__$1 = (function (){var statearr_45729 = state_45683;
(statearr_45729[(30)] = inst_45617);

return statearr_45729;
})();
if(cljs.core.truth_(inst_45618)){
var statearr_45730_45804 = state_45683__$1;
(statearr_45730_45804[(1)] = (26));

} else {
var statearr_45731_45805 = state_45683__$1;
(statearr_45731_45805[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (34))){
var inst_45652 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
if(cljs.core.truth_(inst_45652)){
var statearr_45732_45806 = state_45683__$1;
(statearr_45732_45806[(1)] = (38));

} else {
var statearr_45733_45807 = state_45683__$1;
(statearr_45733_45807[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (17))){
var state_45683__$1 = state_45683;
var statearr_45734_45808 = state_45683__$1;
(statearr_45734_45808[(2)] = recompile_dependents);

(statearr_45734_45808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (3))){
var state_45683__$1 = state_45683;
var statearr_45735_45809 = state_45683__$1;
(statearr_45735_45809[(2)] = null);

(statearr_45735_45809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (12))){
var inst_45574 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
var statearr_45736_45810 = state_45683__$1;
(statearr_45736_45810[(2)] = inst_45574);

(statearr_45736_45810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (2))){
var inst_45536 = (state_45683[(13)]);
var inst_45543 = cljs.core.seq.call(null,inst_45536);
var inst_45544 = inst_45543;
var inst_45545 = null;
var inst_45546 = (0);
var inst_45547 = (0);
var state_45683__$1 = (function (){var statearr_45737 = state_45683;
(statearr_45737[(7)] = inst_45546);

(statearr_45737[(8)] = inst_45545);

(statearr_45737[(9)] = inst_45547);

(statearr_45737[(10)] = inst_45544);

return statearr_45737;
})();
var statearr_45738_45811 = state_45683__$1;
(statearr_45738_45811[(2)] = null);

(statearr_45738_45811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (23))){
var inst_45605 = (state_45683[(23)]);
var inst_45603 = (state_45683[(26)]);
var inst_45597 = (state_45683[(19)]);
var inst_45601 = (state_45683[(24)]);
var inst_45600 = (state_45683[(25)]);
var inst_45608 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45610 = (function (){var all_files = inst_45597;
var res_SINGLEQUOTE_ = inst_45600;
var res = inst_45601;
var files_not_loaded = inst_45603;
var dependencies_that_loaded = inst_45605;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45605,inst_45603,inst_45597,inst_45601,inst_45600,inst_45608,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45609){
var map__45739 = p__45609;
var map__45739__$1 = ((((!((map__45739 == null)))?((((map__45739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45739):map__45739);
var request_url = cljs.core.get.call(null,map__45739__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45605,inst_45603,inst_45597,inst_45601,inst_45600,inst_45608,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45611 = cljs.core.reverse.call(null,inst_45605);
var inst_45612 = cljs.core.map.call(null,inst_45610,inst_45611);
var inst_45613 = cljs.core.pr_str.call(null,inst_45612);
var inst_45614 = figwheel.client.utils.log.call(null,inst_45613);
var state_45683__$1 = (function (){var statearr_45741 = state_45683;
(statearr_45741[(31)] = inst_45608);

return statearr_45741;
})();
var statearr_45742_45812 = state_45683__$1;
(statearr_45742_45812[(2)] = inst_45614);

(statearr_45742_45812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (35))){
var state_45683__$1 = state_45683;
var statearr_45743_45813 = state_45683__$1;
(statearr_45743_45813[(2)] = true);

(statearr_45743_45813[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (19))){
var inst_45587 = (state_45683[(12)]);
var inst_45593 = figwheel.client.file_reloading.expand_files.call(null,inst_45587);
var state_45683__$1 = state_45683;
var statearr_45744_45814 = state_45683__$1;
(statearr_45744_45814[(2)] = inst_45593);

(statearr_45744_45814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (11))){
var state_45683__$1 = state_45683;
var statearr_45745_45815 = state_45683__$1;
(statearr_45745_45815[(2)] = null);

(statearr_45745_45815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (9))){
var inst_45576 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
var statearr_45746_45816 = state_45683__$1;
(statearr_45746_45816[(2)] = inst_45576);

(statearr_45746_45816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (5))){
var inst_45546 = (state_45683[(7)]);
var inst_45547 = (state_45683[(9)]);
var inst_45549 = (inst_45547 < inst_45546);
var inst_45550 = inst_45549;
var state_45683__$1 = state_45683;
if(cljs.core.truth_(inst_45550)){
var statearr_45747_45817 = state_45683__$1;
(statearr_45747_45817[(1)] = (7));

} else {
var statearr_45748_45818 = state_45683__$1;
(statearr_45748_45818[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (14))){
var inst_45557 = (state_45683[(22)]);
var inst_45566 = cljs.core.first.call(null,inst_45557);
var inst_45567 = figwheel.client.file_reloading.eval_body.call(null,inst_45566,opts);
var inst_45568 = cljs.core.next.call(null,inst_45557);
var inst_45544 = inst_45568;
var inst_45545 = null;
var inst_45546 = (0);
var inst_45547 = (0);
var state_45683__$1 = (function (){var statearr_45749 = state_45683;
(statearr_45749[(7)] = inst_45546);

(statearr_45749[(8)] = inst_45545);

(statearr_45749[(9)] = inst_45547);

(statearr_45749[(10)] = inst_45544);

(statearr_45749[(32)] = inst_45567);

return statearr_45749;
})();
var statearr_45750_45819 = state_45683__$1;
(statearr_45750_45819[(2)] = null);

(statearr_45750_45819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (45))){
var state_45683__$1 = state_45683;
var statearr_45751_45820 = state_45683__$1;
(statearr_45751_45820[(2)] = null);

(statearr_45751_45820[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (26))){
var inst_45605 = (state_45683[(23)]);
var inst_45603 = (state_45683[(26)]);
var inst_45597 = (state_45683[(19)]);
var inst_45601 = (state_45683[(24)]);
var inst_45600 = (state_45683[(25)]);
var inst_45620 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45622 = (function (){var all_files = inst_45597;
var res_SINGLEQUOTE_ = inst_45600;
var res = inst_45601;
var files_not_loaded = inst_45603;
var dependencies_that_loaded = inst_45605;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45605,inst_45603,inst_45597,inst_45601,inst_45600,inst_45620,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45621){
var map__45752 = p__45621;
var map__45752__$1 = ((((!((map__45752 == null)))?((((map__45752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45752):map__45752);
var namespace = cljs.core.get.call(null,map__45752__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45752__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45605,inst_45603,inst_45597,inst_45601,inst_45600,inst_45620,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45623 = cljs.core.map.call(null,inst_45622,inst_45601);
var inst_45624 = cljs.core.pr_str.call(null,inst_45623);
var inst_45625 = figwheel.client.utils.log.call(null,inst_45624);
var inst_45626 = (function (){var all_files = inst_45597;
var res_SINGLEQUOTE_ = inst_45600;
var res = inst_45601;
var files_not_loaded = inst_45603;
var dependencies_that_loaded = inst_45605;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45605,inst_45603,inst_45597,inst_45601,inst_45600,inst_45620,inst_45622,inst_45623,inst_45624,inst_45625,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45605,inst_45603,inst_45597,inst_45601,inst_45600,inst_45620,inst_45622,inst_45623,inst_45624,inst_45625,state_val_45684,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45627 = setTimeout(inst_45626,(10));
var state_45683__$1 = (function (){var statearr_45754 = state_45683;
(statearr_45754[(33)] = inst_45620);

(statearr_45754[(34)] = inst_45625);

return statearr_45754;
})();
var statearr_45755_45821 = state_45683__$1;
(statearr_45755_45821[(2)] = inst_45627);

(statearr_45755_45821[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (16))){
var state_45683__$1 = state_45683;
var statearr_45756_45822 = state_45683__$1;
(statearr_45756_45822[(2)] = reload_dependents);

(statearr_45756_45822[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (38))){
var inst_45637 = (state_45683[(16)]);
var inst_45654 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45637);
var state_45683__$1 = state_45683;
var statearr_45757_45823 = state_45683__$1;
(statearr_45757_45823[(2)] = inst_45654);

(statearr_45757_45823[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (30))){
var state_45683__$1 = state_45683;
var statearr_45758_45824 = state_45683__$1;
(statearr_45758_45824[(2)] = null);

(statearr_45758_45824[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (10))){
var inst_45557 = (state_45683[(22)]);
var inst_45559 = cljs.core.chunked_seq_QMARK_.call(null,inst_45557);
var state_45683__$1 = state_45683;
if(inst_45559){
var statearr_45759_45825 = state_45683__$1;
(statearr_45759_45825[(1)] = (13));

} else {
var statearr_45760_45826 = state_45683__$1;
(statearr_45760_45826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (18))){
var inst_45591 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
if(cljs.core.truth_(inst_45591)){
var statearr_45761_45827 = state_45683__$1;
(statearr_45761_45827[(1)] = (19));

} else {
var statearr_45762_45828 = state_45683__$1;
(statearr_45762_45828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (42))){
var state_45683__$1 = state_45683;
var statearr_45763_45829 = state_45683__$1;
(statearr_45763_45829[(2)] = null);

(statearr_45763_45829[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (37))){
var inst_45649 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
var statearr_45764_45830 = state_45683__$1;
(statearr_45764_45830[(2)] = inst_45649);

(statearr_45764_45830[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (8))){
var inst_45557 = (state_45683[(22)]);
var inst_45544 = (state_45683[(10)]);
var inst_45557__$1 = cljs.core.seq.call(null,inst_45544);
var state_45683__$1 = (function (){var statearr_45765 = state_45683;
(statearr_45765[(22)] = inst_45557__$1);

return statearr_45765;
})();
if(inst_45557__$1){
var statearr_45766_45831 = state_45683__$1;
(statearr_45766_45831[(1)] = (10));

} else {
var statearr_45767_45832 = state_45683__$1;
(statearr_45767_45832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28646__auto__,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto____0 = (function (){
var statearr_45771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45771[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto__);

(statearr_45771[(1)] = (1));

return statearr_45771;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto____1 = (function (state_45683){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_45683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e45772){if((e45772 instanceof Object)){
var ex__28650__auto__ = e45772;
var statearr_45773_45833 = state_45683;
(statearr_45773_45833[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45834 = state_45683;
state_45683 = G__45834;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto__ = function(state_45683){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto____1.call(this,state_45683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28760__auto__ = (function (){var statearr_45774 = f__28759__auto__.call(null);
(statearr_45774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto__);

return statearr_45774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto__,map__45529,map__45529__$1,opts,before_jsload,on_jsload,reload_dependents,map__45530,map__45530__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28758__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45837,link){
var map__45840 = p__45837;
var map__45840__$1 = ((((!((map__45840 == null)))?((((map__45840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45840):map__45840);
var file = cljs.core.get.call(null,map__45840__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__45840,map__45840__$1,file){
return (function (p1__45835_SHARP_,p2__45836_SHARP_){
if(cljs.core._EQ_.call(null,p1__45835_SHARP_,p2__45836_SHARP_)){
return p1__45835_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__45840,map__45840__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45846){
var map__45847 = p__45846;
var map__45847__$1 = ((((!((map__45847 == null)))?((((map__45847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45847):map__45847);
var match_length = cljs.core.get.call(null,map__45847__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__45847__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45842_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45842_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args45849 = [];
var len__25873__auto___45852 = arguments.length;
var i__25874__auto___45853 = (0);
while(true){
if((i__25874__auto___45853 < len__25873__auto___45852)){
args45849.push((arguments[i__25874__auto___45853]));

var G__45854 = (i__25874__auto___45853 + (1));
i__25874__auto___45853 = G__45854;
continue;
} else {
}
break;
}

var G__45851 = args45849.length;
switch (G__45851) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45849.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__45856_SHARP_,p2__45857_SHARP_){
return cljs.core.assoc.call(null,p1__45856_SHARP_,cljs.core.get.call(null,p2__45857_SHARP_,key),p2__45857_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__45858){
var map__45861 = p__45858;
var map__45861__$1 = ((((!((map__45861 == null)))?((((map__45861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45861):map__45861);
var f_data = map__45861__$1;
var file = cljs.core.get.call(null,map__45861__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45863,p__45864){
var map__45873 = p__45863;
var map__45873__$1 = ((((!((map__45873 == null)))?((((map__45873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45873):map__45873);
var opts = map__45873__$1;
var on_cssload = cljs.core.get.call(null,map__45873__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__45874 = p__45864;
var map__45874__$1 = ((((!((map__45874 == null)))?((((map__45874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45874):map__45874);
var files_msg = map__45874__$1;
var files = cljs.core.get.call(null,map__45874__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__45877_45881 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__45878_45882 = null;
var count__45879_45883 = (0);
var i__45880_45884 = (0);
while(true){
if((i__45880_45884 < count__45879_45883)){
var f_45885 = cljs.core._nth.call(null,chunk__45878_45882,i__45880_45884);
figwheel.client.file_reloading.reload_css_file.call(null,f_45885);

var G__45886 = seq__45877_45881;
var G__45887 = chunk__45878_45882;
var G__45888 = count__45879_45883;
var G__45889 = (i__45880_45884 + (1));
seq__45877_45881 = G__45886;
chunk__45878_45882 = G__45887;
count__45879_45883 = G__45888;
i__45880_45884 = G__45889;
continue;
} else {
var temp__4657__auto___45890 = cljs.core.seq.call(null,seq__45877_45881);
if(temp__4657__auto___45890){
var seq__45877_45891__$1 = temp__4657__auto___45890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45877_45891__$1)){
var c__25609__auto___45892 = cljs.core.chunk_first.call(null,seq__45877_45891__$1);
var G__45893 = cljs.core.chunk_rest.call(null,seq__45877_45891__$1);
var G__45894 = c__25609__auto___45892;
var G__45895 = cljs.core.count.call(null,c__25609__auto___45892);
var G__45896 = (0);
seq__45877_45881 = G__45893;
chunk__45878_45882 = G__45894;
count__45879_45883 = G__45895;
i__45880_45884 = G__45896;
continue;
} else {
var f_45897 = cljs.core.first.call(null,seq__45877_45891__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_45897);

var G__45898 = cljs.core.next.call(null,seq__45877_45891__$1);
var G__45899 = null;
var G__45900 = (0);
var G__45901 = (0);
seq__45877_45881 = G__45898;
chunk__45878_45882 = G__45899;
count__45879_45883 = G__45900;
i__45880_45884 = G__45901;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__45873,map__45873__$1,opts,on_cssload,map__45874,map__45874__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__45873,map__45873__$1,opts,on_cssload,map__45874,map__45874__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1483385754751