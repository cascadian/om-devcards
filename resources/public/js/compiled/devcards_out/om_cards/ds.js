// Compiled by ClojureScript 1.9.229 {}
goog.provide('om_cards.ds');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om.util');
om_cards.ds.conn = datascript.core.create_conn.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("app","user","app/user",1532338651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null));
datascript.core.transact_BANG_.call(null,om_cards.ds.conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("remote","user","remote/user",1762403266),new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"question","question",-1411720117),"What"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword("app","msg","app/msg",-1386003639),"Hello",new cljs.core.Keyword("app","user","app/user",1532338651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("remote","user","remote/user",1762403266)], null)], null)], null));
om_cards.ds.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conn","conn",278309663),om_cards.ds.conn], null));
om_cards.ds.read = (function om_cards$ds$read(p__45596,key,params){
var map__45599 = p__45596;
var map__45599__$1 = ((((!((map__45599 == null)))?((((map__45599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45599):map__45599);
var env = map__45599__$1;
var query = cljs.core.get.call(null,map__45599__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.call(null,map__45599__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state = cljs.core.get.call(null,map__45599__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var target = cljs.core.get.call(null,map__45599__$1,new cljs.core.Keyword(null,"target","target",253001721));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var db = datascript.core.db.call(null,conn);
cljs.core.println.call(null,"ast: ",ast);

if(om.util.ident_QMARK_.call(null,k)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),datascript.core.pull_many.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("remote","user","remote/user",1762403266)], null)))], null);
} else {
return null;
}
});
om_cards.ds.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_cards.ds.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),om_cards.ds.read], null))], null));
/**
 * @constructor
 */
om_cards.ds.AppRoot = (function om_cards$ds$AppRoot(){
var this__35929__auto__ = this;
React.Component.apply(this__35929__auto__,arguments);

if(!((this__35929__auto__.initLocalState == null))){
this__35929__auto__.state = this__35929__auto__.initLocalState();
} else {
this__35929__auto__.state = {};
}

return this__35929__auto__;
});

om_cards.ds.AppRoot.prototype = goog.object.clone(React.Component.prototype);

var x45605_45615 = om_cards.ds.AppRoot.prototype;
x45605_45615.componentWillUpdate = ((function (x45605_45615){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(((!((this__35833__auto__ == null)))?(((false) || (this__35833__auto__.om$next$Ident$))?true:false):false)){
var ident__35837__auto___45616 = om.next.ident.call(null,this__35833__auto__,om.next.props.call(null,this__35833__auto__));
var next_ident__35838__auto___45617 = om.next.ident.call(null,this__35833__auto__,om.next._next_props.call(null,next_props__35834__auto__,this__35833__auto__));
if(cljs.core.not_EQ_.call(null,ident__35837__auto___45616,next_ident__35838__auto___45617)){
var idxr__35839__auto___45618 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__35839__auto___45618 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__35839__auto___45618),((function (idxr__35839__auto___45618,ident__35837__auto___45616,next_ident__35838__auto___45617,this__35833__auto__,x45605_45615){
return (function (indexes__35840__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__35840__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__35837__auto___45616], null),cljs.core.disj,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__35838__auto___45617], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35833__auto__);
});})(idxr__35839__auto___45618,ident__35837__auto___45616,next_ident__35838__auto___45617,this__35833__auto__,x45605_45615))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__35833__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__35833__auto__);
});})(x45605_45615))
;

x45605_45615.shouldComponentUpdate = ((function (x45605_45615){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
var next_children__35836__auto__ = next_props__35834__auto__.children;
var next_props__35834__auto____$1 = goog.object.get(next_props__35834__auto__,"omcljs$value");
var next_props__35834__auto____$2 = (function (){var G__45607 = next_props__35834__auto____$1;
if((next_props__35834__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__45607);
} else {
return G__45607;
}
})();
var or__24798__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__35833__auto__),next_props__35834__auto____$2);
if(or__24798__auto__){
return or__24798__auto__;
} else {
var or__24798__auto____$1 = (function (){var and__24786__auto__ = this__35833__auto__.state;
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__35833__auto__.state,"omcljs$state"),goog.object.get(next_state__35835__auto__,"omcljs$state"));
} else {
return and__24786__auto__;
}
})();
if(cljs.core.truth_(or__24798__auto____$1)){
return or__24798__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__35833__auto__.props.children,next_children__35836__auto__);
}
}
});})(x45605_45615))
;

x45605_45615.componentWillUnmount = ((function (x45605_45615){
return (function (){
var this__35833__auto__ = this;
var r__35844__auto__ = om.next.get_reconciler.call(null,this__35833__auto__);
var cfg__35845__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__35844__auto__);
var st__35846__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__35845__auto__);
var indexer__35843__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__35845__auto__);
if(cljs.core.truth_((function (){var and__24786__auto__ = !((st__35846__auto__ == null));
if(and__24786__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__35846__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__35833__auto__], null));
} else {
return and__24786__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__35846__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__35833__auto__);
} else {
}

if((indexer__35843__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__35843__auto__,this__35833__auto__);
}
});})(x45605_45615))
;

x45605_45615.componentDidUpdate = ((function (x45605_45615){
return (function (prev_props__35841__auto__,prev_state__35842__auto__){
var this__35833__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__35833__auto__);
});})(x45605_45615))
;

x45605_45615.isMounted = ((function (x45605_45615){
return (function (){
var this__35833__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__35833__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x45605_45615))
;

x45605_45615.componentWillMount = ((function (x45605_45615){
return (function (){
var this__35833__auto__ = this;
var indexer__35843__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__35843__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__35843__auto__,this__35833__auto__);
}
});})(x45605_45615))
;

x45605_45615.render = ((function (x45605_45615){
return (function (){
var this__35832__auto__ = this;
var this$ = this__35832__auto__;
var _STAR_reconciler_STAR_45608 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45609 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_45610 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_45611 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_45612 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__35832__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__35832__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__35832__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__35832__auto__);

om.next._STAR_parent_STAR_ = this__35832__auto__;

try{return om.dom.p.call(null,null,[cljs.core.str(om.next.props.call(null,this$))].join(''));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_45612;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_45611;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_45610;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_45609;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45608;
}});})(x45605_45615))
;


om_cards.ds.AppRoot.prototype.constructor = om_cards.ds.AppRoot;

om_cards.ds.AppRoot.prototype.constructor.displayName = "om-cards.ds/AppRoot";

om_cards.ds.AppRoot.prototype.om$isComponent = true;

var x45613_45619 = om_cards.ds.AppRoot;
/** @nocollapse */
x45613_45619.om$next$IQuery$ = true;

/** @nocollapse */
x45613_45619.om$next$IQuery$query$arity$1 = ((function (x45613_45619){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","msg","app/msg",-1386003639),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","user","app/user",1532338651),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"question","question",-1411720117)], null)], null)], null)], null)], null)], true, false)], null);
});})(x45613_45619))
;


var x45614_45620 = om_cards.ds.AppRoot.prototype;

x45614_45620.om$next$IQuery$ = true;


x45614_45620.om$next$IQuery$query$arity$1 = ((function (x45614_45620){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","msg","app/msg",-1386003639),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","user","app/user",1532338651),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"question","question",-1411720117)], null)], null)], null)], null)], null)], true, false)], null);
});})(x45614_45620))
;


om_cards.ds.AppRoot.cljs$lang$type = true;

om_cards.ds.AppRoot.cljs$lang$ctorStr = "om-cards.ds/AppRoot";

om_cards.ds.AppRoot.cljs$lang$ctorPrWriter = (function (this__35932__auto__,writer__35933__auto__,opt__35934__auto__){
return cljs.core._write.call(null,writer__35933__auto__,"om-cards.ds/AppRoot");
});

//# sourceMappingURL=ds.js.map?rel=1483401372850