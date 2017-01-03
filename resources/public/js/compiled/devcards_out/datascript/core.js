// Compiled by ClojureScript 1.9.229 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.impl.entity');
datascript.core.q = datascript.query.q;
goog.exportSymbol('datascript.core.q', datascript.core.q);
datascript.core.entity = datascript.impl.entity.entity;
goog.exportSymbol('datascript.core.entity', datascript.core.entity);
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
goog.exportSymbol('datascript.core.entity_db', datascript.core.entity_db);
datascript.core.datom = datascript.db.datom;
goog.exportSymbol('datascript.core.datom', datascript.core.datom);
datascript.core.pull = datascript.pull_api.pull;
goog.exportSymbol('datascript.core.pull', datascript.core.pull);
datascript.core.pull_many = datascript.pull_api.pull_many;
goog.exportSymbol('datascript.core.pull_many', datascript.core.pull_many);
datascript.core.touch = datascript.impl.entity.touch;
goog.exportSymbol('datascript.core.touch', datascript.core.touch);
datascript.core.empty_db = datascript.db.empty_db;
goog.exportSymbol('datascript.core.empty_db', datascript.core.empty_db);
datascript.core.init_db = datascript.db.init_db;
goog.exportSymbol('datascript.core.init_db', datascript.core.init_db);
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
goog.exportSymbol('datascript.core.datom_QMARK_', datascript.core.datom_QMARK_);
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
goog.exportSymbol('datascript.core.db_QMARK_', datascript.core.db_QMARK_);
datascript.core.tx0 = datascript.db.tx0;
goog.exportSymbol('datascript.core.tx0', datascript.core.tx0);
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
goog.exportSymbol('datascript.core.is_filtered', datascript.core.is_filtered);
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var orig_pred = fdb.pred;
var orig_db = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(orig_db,((function (fdb,orig_pred,orig_db){
return (function (p1__44434_SHARP_){
var and__24786__auto__ = orig_pred.call(null,p1__44434_SHARP_);
if(cljs.core.truth_(and__24786__auto__)){
return pred.call(null,orig_db,p1__44434_SHARP_);
} else {
return and__24786__auto__;
}
});})(fdb,orig_pred,orig_db))
,cljs.core.atom.call(null,(0)),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__44435_SHARP_){
return pred.call(null,db,p1__44435_SHARP_);
}),cljs.core.atom.call(null,(0)),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args44436 = [];
var len__25873__auto___44439 = arguments.length;
var i__25874__auto___44440 = (0);
while(true){
if((i__25874__auto___44440 < len__25873__auto___44439)){
args44436.push((arguments[i__25874__auto___44440]));

var G__44441 = (i__25874__auto___44440 + (1));
i__25874__auto___44440 = G__44441;
continue;
} else {
}
break;
}

var G__44438 = args44436.length;
switch (G__44438) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44436.length)].join('')));

}
});
goog.exportSymbol('datascript.core.with$', datascript.core.with$);

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;

datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
goog.exportSymbol('datascript.core.db_with', datascript.core.db_with);
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args44443 = [];
var len__25873__auto___44446 = arguments.length;
var i__25874__auto___44447 = (0);
while(true){
if((i__25874__auto___44447 < len__25873__auto___44446)){
args44443.push((arguments[i__25874__auto___44447]));

var G__44448 = (i__25874__auto___44447 + (1));
i__25874__auto___44447 = G__44448;
continue;
} else {
}
break;
}

var G__44445 = args44443.length;
switch (G__44445) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44443.length)].join('')));

}
});
goog.exportSymbol('datascript.core.datoms', datascript.core.datoms);

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;

datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args44450 = [];
var len__25873__auto___44453 = arguments.length;
var i__25874__auto___44454 = (0);
while(true){
if((i__25874__auto___44454 < len__25873__auto___44453)){
args44450.push((arguments[i__25874__auto___44454]));

var G__44455 = (i__25874__auto___44454 + (1));
i__25874__auto___44454 = G__44455;
continue;
} else {
}
break;
}

var G__44452 = args44450.length;
switch (G__44452) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44450.length)].join('')));

}
});
goog.exportSymbol('datascript.core.seek_datoms', datascript.core.seek_datoms);

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;

datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
goog.exportSymbol('datascript.core.index_range', datascript.core.index_range);
datascript.core.entid = datascript.db.entid;
goog.exportSymbol('datascript.core.entid', datascript.core.entid);
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__24786__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || (conn.cljs$core$IDeref$))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__24786__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__24786__auto__;
}
});
goog.exportSymbol('datascript.core.conn_QMARK_', datascript.core.conn_QMARK_);
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
goog.exportSymbol('datascript.core.conn_from_db', datascript.core.conn_from_db);
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args44461 = [];
var len__25873__auto___44464 = arguments.length;
var i__25874__auto___44465 = (0);
while(true){
if((i__25874__auto___44465 < len__25873__auto___44464)){
args44461.push((arguments[i__25874__auto___44465]));

var G__44466 = (i__25874__auto___44465 + (1));
i__25874__auto___44465 = G__44466;
continue;
} else {
}
break;
}

var G__44463 = args44461.length;
switch (G__44463) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44461.length)].join('')));

}
});
goog.exportSymbol('datascript.core.conn_from_datoms', datascript.core.conn_from_datoms);

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms,schema));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;

datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args44468 = [];
var len__25873__auto___44471 = arguments.length;
var i__25874__auto___44472 = (0);
while(true){
if((i__25874__auto___44472 < len__25873__auto___44471)){
args44468.push((arguments[i__25874__auto___44472]));

var G__44473 = (i__25874__auto___44472 + (1));
i__25874__auto___44472 = G__44473;
continue;
} else {
}
break;
}

var G__44470 = args44468.length;
switch (G__44470) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44468.length)].join('')));

}
});
goog.exportSymbol('datascript.core.create_conn', datascript.core.create_conn);

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null,schema));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;

datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args44475 = [];
var len__25873__auto___44488 = arguments.length;
var i__25874__auto___44489 = (0);
while(true){
if((i__25874__auto___44489 < len__25873__auto___44488)){
args44475.push((arguments[i__25874__auto___44489]));

var G__44490 = (i__25874__auto___44489 + (1));
i__25874__auto___44489 = G__44490;
continue;
} else {
}
break;
}

var G__44477 = args44475.length;
switch (G__44477) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44475.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_BANG_', datascript.core.transact_BANG_);

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__44478_44492 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__44479_44493 = null;
var count__44480_44494 = (0);
var i__44481_44495 = (0);
while(true){
if((i__44481_44495 < count__44480_44494)){
var vec__44482_44496 = cljs.core._nth.call(null,chunk__44479_44493,i__44481_44495);
var __44497 = cljs.core.nth.call(null,vec__44482_44496,(0),null);
var callback_44498 = cljs.core.nth.call(null,vec__44482_44496,(1),null);
callback_44498.call(null,report);

var G__44499 = seq__44478_44492;
var G__44500 = chunk__44479_44493;
var G__44501 = count__44480_44494;
var G__44502 = (i__44481_44495 + (1));
seq__44478_44492 = G__44499;
chunk__44479_44493 = G__44500;
count__44480_44494 = G__44501;
i__44481_44495 = G__44502;
continue;
} else {
var temp__4657__auto___44503 = cljs.core.seq.call(null,seq__44478_44492);
if(temp__4657__auto___44503){
var seq__44478_44504__$1 = temp__4657__auto___44503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44478_44504__$1)){
var c__25609__auto___44505 = cljs.core.chunk_first.call(null,seq__44478_44504__$1);
var G__44506 = cljs.core.chunk_rest.call(null,seq__44478_44504__$1);
var G__44507 = c__25609__auto___44505;
var G__44508 = cljs.core.count.call(null,c__25609__auto___44505);
var G__44509 = (0);
seq__44478_44492 = G__44506;
chunk__44479_44493 = G__44507;
count__44480_44494 = G__44508;
i__44481_44495 = G__44509;
continue;
} else {
var vec__44485_44510 = cljs.core.first.call(null,seq__44478_44504__$1);
var __44511 = cljs.core.nth.call(null,vec__44485_44510,(0),null);
var callback_44512 = cljs.core.nth.call(null,vec__44485_44510,(1),null);
callback_44512.call(null,report);

var G__44513 = cljs.core.next.call(null,seq__44478_44504__$1);
var G__44514 = null;
var G__44515 = (0);
var G__44516 = (0);
seq__44478_44492 = G__44513;
chunk__44479_44493 = G__44514;
count__44480_44494 = G__44515;
i__44481_44495 = G__44516;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var args44518 = [];
var len__25873__auto___44531 = arguments.length;
var i__25874__auto___44532 = (0);
while(true){
if((i__25874__auto___44532 < len__25873__auto___44531)){
args44518.push((arguments[i__25874__auto___44532]));

var G__44533 = (i__25874__auto___44532 + (1));
i__25874__auto___44532 = G__44533;
continue;
} else {
}
break;
}

var G__44520 = args44518.length;
switch (G__44520) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44518.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__44517_SHARP_){
return cljs.core.assoc.call(null,p1__44517_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__44521_44535 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__44522_44536 = null;
var count__44523_44537 = (0);
var i__44524_44538 = (0);
while(true){
if((i__44524_44538 < count__44523_44537)){
var vec__44525_44539 = cljs.core._nth.call(null,chunk__44522_44536,i__44524_44538);
var __44540 = cljs.core.nth.call(null,vec__44525_44539,(0),null);
var callback_44541 = cljs.core.nth.call(null,vec__44525_44539,(1),null);
callback_44541.call(null,report);

var G__44542 = seq__44521_44535;
var G__44543 = chunk__44522_44536;
var G__44544 = count__44523_44537;
var G__44545 = (i__44524_44538 + (1));
seq__44521_44535 = G__44542;
chunk__44522_44536 = G__44543;
count__44523_44537 = G__44544;
i__44524_44538 = G__44545;
continue;
} else {
var temp__4657__auto___44546 = cljs.core.seq.call(null,seq__44521_44535);
if(temp__4657__auto___44546){
var seq__44521_44547__$1 = temp__4657__auto___44546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44521_44547__$1)){
var c__25609__auto___44548 = cljs.core.chunk_first.call(null,seq__44521_44547__$1);
var G__44549 = cljs.core.chunk_rest.call(null,seq__44521_44547__$1);
var G__44550 = c__25609__auto___44548;
var G__44551 = cljs.core.count.call(null,c__25609__auto___44548);
var G__44552 = (0);
seq__44521_44535 = G__44549;
chunk__44522_44536 = G__44550;
count__44523_44537 = G__44551;
i__44524_44538 = G__44552;
continue;
} else {
var vec__44528_44553 = cljs.core.first.call(null,seq__44521_44547__$1);
var __44554 = cljs.core.nth.call(null,vec__44528_44553,(0),null);
var callback_44555 = cljs.core.nth.call(null,vec__44528_44553,(1),null);
callback_44555.call(null,report);

var G__44556 = cljs.core.next.call(null,seq__44521_44547__$1);
var G__44557 = null;
var G__44558 = (0);
var G__44559 = (0);
seq__44521_44535 = G__44556;
chunk__44522_44536 = G__44557;
count__44523_44537 = G__44558;
i__44524_44538 = G__44559;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args44560 = [];
var len__25873__auto___44563 = arguments.length;
var i__25874__auto___44564 = (0);
while(true){
if((i__25874__auto___44564 < len__25873__auto___44563)){
args44560.push((arguments[i__25874__auto___44564]));

var G__44565 = (i__25874__auto___44564 + (1));
i__25874__auto___44564 = G__44565;
continue;
} else {
}
break;
}

var G__44562 = args44560.length;
switch (G__44562) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44560.length)].join('')));

}
});
goog.exportSymbol('datascript.core.listen_BANG_', datascript.core.listen_BANG_);

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
goog.exportSymbol('datascript.core.unlisten_BANG_', datascript.core.unlisten_BANG_);
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__44567_44577 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__44568_44578 = null;
var count__44569_44579 = (0);
var i__44570_44580 = (0);
while(true){
if((i__44570_44580 < count__44569_44579)){
var vec__44571_44581 = cljs.core._nth.call(null,chunk__44568_44578,i__44570_44580);
var tag_44582 = cljs.core.nth.call(null,vec__44571_44581,(0),null);
var cb_44583 = cljs.core.nth.call(null,vec__44571_44581,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_44582,cb_44583);

var G__44584 = seq__44567_44577;
var G__44585 = chunk__44568_44578;
var G__44586 = count__44569_44579;
var G__44587 = (i__44570_44580 + (1));
seq__44567_44577 = G__44584;
chunk__44568_44578 = G__44585;
count__44569_44579 = G__44586;
i__44570_44580 = G__44587;
continue;
} else {
var temp__4657__auto___44588 = cljs.core.seq.call(null,seq__44567_44577);
if(temp__4657__auto___44588){
var seq__44567_44589__$1 = temp__4657__auto___44588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44567_44589__$1)){
var c__25609__auto___44590 = cljs.core.chunk_first.call(null,seq__44567_44589__$1);
var G__44591 = cljs.core.chunk_rest.call(null,seq__44567_44589__$1);
var G__44592 = c__25609__auto___44590;
var G__44593 = cljs.core.count.call(null,c__25609__auto___44590);
var G__44594 = (0);
seq__44567_44577 = G__44591;
chunk__44568_44578 = G__44592;
count__44569_44579 = G__44593;
i__44570_44580 = G__44594;
continue;
} else {
var vec__44574_44595 = cljs.core.first.call(null,seq__44567_44589__$1);
var tag_44596 = cljs.core.nth.call(null,vec__44574_44595,(0),null);
var cb_44597 = cljs.core.nth.call(null,vec__44574_44595,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_44596,cb_44597);

var G__44598 = cljs.core.next.call(null,seq__44567_44589__$1);
var G__44599 = null;
var G__44600 = (0);
var G__44601 = (0);
seq__44567_44577 = G__44598;
chunk__44568_44578 = G__44599;
count__44569_44579 = G__44600;
i__44570_44580 = G__44601;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args44602 = [];
var len__25873__auto___44605 = arguments.length;
var i__25874__auto___44606 = (0);
while(true){
if((i__25874__auto___44606 < len__25873__auto___44605)){
args44602.push((arguments[i__25874__auto___44606]));

var G__44607 = (i__25874__auto___44606 + (1));
i__25874__auto___44606 = G__44607;
continue;
} else {
}
break;
}

var G__44604 = args44602.length;
switch (G__44604) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44602.length)].join('')));

}
});
goog.exportSymbol('datascript.core.tempid', datascript.core.tempid);

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;

datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
goog.exportSymbol('datascript.core.resolve_tempid', datascript.core.resolve_tempid);
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.deref.call(null,conn);
});
goog.exportSymbol('datascript.core.db', datascript.core.db);
datascript.core.transact = (function datascript$core$transact(var_args){
var args44609 = [];
var len__25873__auto___44615 = arguments.length;
var i__25874__auto___44616 = (0);
while(true){
if((i__25874__auto___44616 < len__25873__auto___44615)){
args44609.push((arguments[i__25874__auto___44616]));

var G__44617 = (i__25874__auto___44616 + (1));
i__25874__auto___44616 = G__44617;
continue;
} else {
}
break;
}

var G__44611 = args44609.length;
switch (G__44611) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44609.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact', datascript.core.transact);

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core44612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core44612 = (function (conn,tx_data,tx_meta,res,meta44613){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta44613 = meta44613;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})

datascript.core.t_datascript$core44612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_44614,meta44613__$1){
var self__ = this;
var _44614__$1 = this;
return (new datascript.core.t_datascript$core44612(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta44613__$1));
});})(res))
;


datascript.core.t_datascript$core44612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_44614){
var self__ = this;
var _44614__$1 = this;
return self__.meta44613;
});})(res))
;


datascript.core.t_datascript$core44612.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;


datascript.core.t_datascript$core44612.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;


datascript.core.t_datascript$core44612.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core44612.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta44613","meta44613",594682946,null)], null);
});})(res))
;

datascript.core.t_datascript$core44612.cljs$lang$type = true;

datascript.core.t_datascript$core44612.cljs$lang$ctorStr = "datascript.core/t_datascript$core44612";

datascript.core.t_datascript$core44612.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"datascript.core/t_datascript$core44612");
});})(res))
;

datascript.core.__GT_t_datascript$core44612 = ((function (res){
return (function datascript$core$__GT_t_datascript$core44612(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta44613){
return (new datascript.core.t_datascript$core44612(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta44613));
});})(res))
;

}

return (new datascript.core.t_datascript$core44612(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;

datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core44622 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core44622 = (function (future_call,f,res,realized,meta44623){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta44623 = meta44623;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})

datascript.core.t_datascript$core44622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_44624,meta44623__$1){
var self__ = this;
var _44624__$1 = this;
return (new datascript.core.t_datascript$core44622(self__.future_call,self__.f,self__.res,self__.realized,meta44623__$1));
});})(res,realized))
;


datascript.core.t_datascript$core44622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_44624){
var self__ = this;
var _44624__$1 = this;
return self__.meta44623;
});})(res,realized))
;


datascript.core.t_datascript$core44622.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;


datascript.core.t_datascript$core44622.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;


datascript.core.t_datascript$core44622.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core44622.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta44623","meta44623",-736380125,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core44622.cljs$lang$type = true;

datascript.core.t_datascript$core44622.cljs$lang$ctorStr = "datascript.core/t_datascript$core44622";

datascript.core.t_datascript$core44622.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"datascript.core/t_datascript$core44622");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core44622 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core44622(future_call__$1,f__$1,res__$1,realized__$1,meta44623){
return (new datascript.core.t_datascript$core44622(future_call__$1,f__$1,res__$1,realized__$1,meta44623));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core44622(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args44625 = [];
var len__25873__auto___44628 = arguments.length;
var i__25874__auto___44629 = (0);
while(true){
if((i__25874__auto___44629 < len__25873__auto___44628)){
args44625.push((arguments[i__25874__auto___44629]));

var G__44630 = (i__25874__auto___44629 + (1));
i__25874__auto___44629 = G__44630;
continue;
} else {
}
break;
}

var G__44627 = args44625.length;
switch (G__44627) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44625.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_async', datascript.core.transact_async);

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;

datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args44632 = [];
var len__25873__auto___44635 = arguments.length;
var i__25874__auto___44636 = (0);
while(true){
if((i__25874__auto___44636 < len__25873__auto___44635)){
args44632.push((arguments[i__25874__auto___44636]));

var G__44637 = (i__25874__auto___44636 + (1));
i__25874__auto___44636 = G__44637;
continue;
} else {
}
break;
}

var G__44634 = args44632.length;
switch (G__44634) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44632.length)].join('')));

}
});
goog.exportSymbol('datascript.core.squuid', datascript.core.squuid);

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;

datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str(uuid)].join(''),(0),(8)),(16)) * (1000));
});
goog.exportSymbol('datascript.core.squuid_time_millis', datascript.core.squuid_time_millis);

//# sourceMappingURL=core.js.map?rel=1483385753203