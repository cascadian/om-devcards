// Compiled by ClojureScript 1.9.229 {}
goog.provide('om_cards.reconciliation');
goog.require('cljs.core');
goog.require('devcards_om_next.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('sablono.core');
om_cards.reconciliation.parser = (function (){var p = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),(function (p__44641,_,params){
var map__44642 = p__44641;
var map__44642__$1 = ((((!((map__44642 == null)))?((((map__44642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44642):map__44642);
var env = map__44642__$1;
var map__44643 = cljs.core.get.call(null,map__44642__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__44643__$1 = ((((!((map__44643 == null)))?((((map__44643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44643):map__44643);
var key = cljs.core.get.call(null,map__44643__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.call(null,map__44642__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var state = cljs.core.get.call(null,map__44642__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var target = cljs.core.get.call(null,map__44642__$1,new cljs.core.Keyword(null,"target","target",253001721));
cljs.core.println.call(null,"key: ",key);

cljs.core.println.call(null,"env: ",env);

if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,true], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),key,"not found")], null);

}
})], null));
return ((function (p){
return (function() {
var G__44646 = null;
var G__44646__2 = (function (env,query){
var res = p.call(null,env,query);
cljs.core.println.call(null,"Parsed: ",res);

return res;
});
var G__44646__3 = (function (env,query,target){
var res = p.call(null,env,query,target);
cljs.core.println.call(null,"Parsed: ",res);

return res;
});
G__44646 = function(env,query,target){
switch(arguments.length){
case 2:
return G__44646__2.call(this,env,query);
case 3:
return G__44646__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44646.cljs$core$IFn$_invoke$arity$2 = G__44646__2;
G__44646.cljs$core$IFn$_invoke$arity$3 = G__44646__3;
return G__44646;
})()
;})(p))
})();
/**
 * @constructor
 */
om_cards.reconciliation.Home = (function om_cards$reconciliation$Home(){
var this__36962__auto__ = this;
React.Component.apply(this__36962__auto__,arguments);

if(!((this__36962__auto__.initLocalState == null))){
this__36962__auto__.state = this__36962__auto__.initLocalState();
} else {
this__36962__auto__.state = {};
}

return this__36962__auto__;
});

om_cards.reconciliation.Home.prototype = goog.object.clone(React.Component.prototype);

var x44651_44663 = om_cards.reconciliation.Home.prototype;
x44651_44663.componentWillUpdate = ((function (x44651_44663){
return (function (next_props__36867__auto__,next_state__36868__auto__){
var this__36866__auto__ = this;
if(((!((this__36866__auto__ == null)))?(((false) || (this__36866__auto__.om$next$Ident$))?true:false):false)){
var ident__36870__auto___44664 = om.next.ident.call(null,this__36866__auto__,om.next.props.call(null,this__36866__auto__));
var next_ident__36871__auto___44665 = om.next.ident.call(null,this__36866__auto__,om.next._next_props.call(null,next_props__36867__auto__,this__36866__auto__));
if(cljs.core.not_EQ_.call(null,ident__36870__auto___44664,next_ident__36871__auto___44665)){
var idxr__36872__auto___44666 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36866__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__36872__auto___44666 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__36872__auto___44666),((function (idxr__36872__auto___44666,ident__36870__auto___44664,next_ident__36871__auto___44665,this__36866__auto__,x44651_44663){
return (function (indexes__36873__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__36873__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__36870__auto___44664], null),cljs.core.disj,this__36866__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__36871__auto___44665], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__36866__auto__);
});})(idxr__36872__auto___44666,ident__36870__auto___44664,next_ident__36871__auto___44665,this__36866__auto__,x44651_44663))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__36866__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__36866__auto__);
});})(x44651_44663))
;

x44651_44663.shouldComponentUpdate = ((function (x44651_44663){
return (function (next_props__36867__auto__,next_state__36868__auto__){
var this__36866__auto__ = this;
var next_children__36869__auto__ = next_props__36867__auto__.children;
var next_props__36867__auto____$1 = goog.object.get(next_props__36867__auto__,"omcljs$value");
var next_props__36867__auto____$2 = (function (){var G__44653 = next_props__36867__auto____$1;
if((next_props__36867__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__44653);
} else {
return G__44653;
}
})();
var or__24798__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__36866__auto__),next_props__36867__auto____$2);
if(or__24798__auto__){
return or__24798__auto__;
} else {
var or__24798__auto____$1 = (function (){var and__24786__auto__ = this__36866__auto__.state;
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__36866__auto__.state,"omcljs$state"),goog.object.get(next_state__36868__auto__,"omcljs$state"));
} else {
return and__24786__auto__;
}
})();
if(cljs.core.truth_(or__24798__auto____$1)){
return or__24798__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__36866__auto__.props.children,next_children__36869__auto__);
}
}
});})(x44651_44663))
;

x44651_44663.componentWillUnmount = ((function (x44651_44663){
return (function (){
var this__36866__auto__ = this;
var r__36877__auto__ = om.next.get_reconciler.call(null,this__36866__auto__);
var cfg__36878__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__36877__auto__);
var st__36879__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__36878__auto__);
var indexer__36876__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__36878__auto__);
if(cljs.core.truth_((function (){var and__24786__auto__ = !((st__36879__auto__ == null));
if(and__24786__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__36879__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__36866__auto__], null));
} else {
return and__24786__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__36879__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__36866__auto__);
} else {
}

if((indexer__36876__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__36876__auto__,this__36866__auto__);
}
});})(x44651_44663))
;

x44651_44663.componentDidUpdate = ((function (x44651_44663){
return (function (prev_props__36874__auto__,prev_state__36875__auto__){
var this__36866__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__36866__auto__);
});})(x44651_44663))
;

x44651_44663.isMounted = ((function (x44651_44663){
return (function (){
var this__36866__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__36866__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44651_44663))
;

x44651_44663.componentWillMount = ((function (x44651_44663){
return (function (){
var this__36866__auto__ = this;
var indexer__36876__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36866__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__36876__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__36876__auto__,this__36866__auto__);
}
});})(x44651_44663))
;

x44651_44663.render = ((function (x44651_44663){
return (function (){
var this__36865__auto__ = this;
var this$ = this__36865__auto__;
var _STAR_reconciler_STAR_44654 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44655 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44656 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44657 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44658 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__36865__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__36865__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__36865__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__36865__auto__);

om.next._STAR_parent_STAR_ = this__36865__auto__;

try{var map__44659 = om.next.props.call(null,this$);
var map__44659__$1 = ((((!((map__44659 == null)))?((((map__44659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44659):map__44659);
var home = cljs.core.get.call(null,map__44659__$1,new cljs.core.Keyword("app","home","app/home",-74460510));
var nav_fn = om.next.get_computed.call(null,this$,new cljs.core.Keyword(null,"nav-fn","nav-fn",-397826559));
return om.dom.div.call(null,null,om.dom.h1.call(null,null,home),om.dom.button.call(null,({"onClick": ((function (map__44659,map__44659__$1,home,nav_fn,_STAR_reconciler_STAR_44654,_STAR_depth_STAR_44655,_STAR_shared_STAR_44656,_STAR_instrument_STAR_44657,_STAR_parent_STAR_44658,this$,this__36865__auto__,x44651_44663){
return (function (){
return nav_fn.call(null,new cljs.core.Keyword(null,"about","about",1423892543));
});})(map__44659,map__44659__$1,home,nav_fn,_STAR_reconciler_STAR_44654,_STAR_depth_STAR_44655,_STAR_shared_STAR_44656,_STAR_instrument_STAR_44657,_STAR_parent_STAR_44658,this$,this__36865__auto__,x44651_44663))
}),"About"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44658;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44657;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44656;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44655;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44654;
}});})(x44651_44663))
;


om_cards.reconciliation.Home.prototype.constructor = om_cards.reconciliation.Home;

om_cards.reconciliation.Home.prototype.constructor.displayName = "om-cards.reconciliation/Home";

om_cards.reconciliation.Home.prototype.om$isComponent = true;

var x44661_44667 = om_cards.reconciliation.Home;


var x44662_44668 = om_cards.reconciliation.Home.prototype;


om_cards.reconciliation.Home.cljs$lang$type = true;

om_cards.reconciliation.Home.cljs$lang$ctorStr = "om-cards.reconciliation/Home";

om_cards.reconciliation.Home.cljs$lang$ctorPrWriter = (function (this__36965__auto__,writer__36966__auto__,opt__36967__auto__){
return cljs.core._write.call(null,writer__36966__auto__,"om-cards.reconciliation/Home");
});
/**
 * @constructor
 */
om_cards.reconciliation.About = (function om_cards$reconciliation$About(){
var this__36962__auto__ = this;
React.Component.apply(this__36962__auto__,arguments);

if(!((this__36962__auto__.initLocalState == null))){
this__36962__auto__.state = this__36962__auto__.initLocalState();
} else {
this__36962__auto__.state = {};
}

return this__36962__auto__;
});

om_cards.reconciliation.About.prototype = goog.object.clone(React.Component.prototype);

var x44673_44685 = om_cards.reconciliation.About.prototype;
x44673_44685.componentWillUpdate = ((function (x44673_44685){
return (function (next_props__36867__auto__,next_state__36868__auto__){
var this__36866__auto__ = this;
if(((!((this__36866__auto__ == null)))?(((false) || (this__36866__auto__.om$next$Ident$))?true:false):false)){
var ident__36870__auto___44686 = om.next.ident.call(null,this__36866__auto__,om.next.props.call(null,this__36866__auto__));
var next_ident__36871__auto___44687 = om.next.ident.call(null,this__36866__auto__,om.next._next_props.call(null,next_props__36867__auto__,this__36866__auto__));
if(cljs.core.not_EQ_.call(null,ident__36870__auto___44686,next_ident__36871__auto___44687)){
var idxr__36872__auto___44688 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36866__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__36872__auto___44688 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__36872__auto___44688),((function (idxr__36872__auto___44688,ident__36870__auto___44686,next_ident__36871__auto___44687,this__36866__auto__,x44673_44685){
return (function (indexes__36873__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__36873__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__36870__auto___44686], null),cljs.core.disj,this__36866__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__36871__auto___44687], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__36866__auto__);
});})(idxr__36872__auto___44688,ident__36870__auto___44686,next_ident__36871__auto___44687,this__36866__auto__,x44673_44685))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__36866__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__36866__auto__);
});})(x44673_44685))
;

x44673_44685.shouldComponentUpdate = ((function (x44673_44685){
return (function (next_props__36867__auto__,next_state__36868__auto__){
var this__36866__auto__ = this;
var next_children__36869__auto__ = next_props__36867__auto__.children;
var next_props__36867__auto____$1 = goog.object.get(next_props__36867__auto__,"omcljs$value");
var next_props__36867__auto____$2 = (function (){var G__44675 = next_props__36867__auto____$1;
if((next_props__36867__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__44675);
} else {
return G__44675;
}
})();
var or__24798__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__36866__auto__),next_props__36867__auto____$2);
if(or__24798__auto__){
return or__24798__auto__;
} else {
var or__24798__auto____$1 = (function (){var and__24786__auto__ = this__36866__auto__.state;
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__36866__auto__.state,"omcljs$state"),goog.object.get(next_state__36868__auto__,"omcljs$state"));
} else {
return and__24786__auto__;
}
})();
if(cljs.core.truth_(or__24798__auto____$1)){
return or__24798__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__36866__auto__.props.children,next_children__36869__auto__);
}
}
});})(x44673_44685))
;

x44673_44685.componentWillUnmount = ((function (x44673_44685){
return (function (){
var this__36866__auto__ = this;
var r__36877__auto__ = om.next.get_reconciler.call(null,this__36866__auto__);
var cfg__36878__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__36877__auto__);
var st__36879__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__36878__auto__);
var indexer__36876__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__36878__auto__);
if(cljs.core.truth_((function (){var and__24786__auto__ = !((st__36879__auto__ == null));
if(and__24786__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__36879__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__36866__auto__], null));
} else {
return and__24786__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__36879__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__36866__auto__);
} else {
}

if((indexer__36876__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__36876__auto__,this__36866__auto__);
}
});})(x44673_44685))
;

x44673_44685.componentDidUpdate = ((function (x44673_44685){
return (function (prev_props__36874__auto__,prev_state__36875__auto__){
var this__36866__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__36866__auto__);
});})(x44673_44685))
;

x44673_44685.isMounted = ((function (x44673_44685){
return (function (){
var this__36866__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__36866__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44673_44685))
;

x44673_44685.componentWillMount = ((function (x44673_44685){
return (function (){
var this__36866__auto__ = this;
var indexer__36876__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36866__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__36876__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__36876__auto__,this__36866__auto__);
}
});})(x44673_44685))
;

x44673_44685.render = ((function (x44673_44685){
return (function (){
var this__36865__auto__ = this;
var this$ = this__36865__auto__;
var _STAR_reconciler_STAR_44676 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44677 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44678 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44679 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44680 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__36865__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__36865__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__36865__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__36865__auto__);

om.next._STAR_parent_STAR_ = this__36865__auto__;

try{var map__44681 = om.next.props.call(null,this$);
var map__44681__$1 = ((((!((map__44681 == null)))?((((map__44681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44681):map__44681);
var about = cljs.core.get.call(null,map__44681__$1,new cljs.core.Keyword("app","about","app/about",1423468062));
var nav = om.next.get_computed.call(null,this$,new cljs.core.Keyword(null,"nav-fn","nav-fn",-397826559));
return om.dom.div.call(null,null,om.dom.h1.call(null,null,about),om.dom.button.call(null,({"onClick": ((function (map__44681,map__44681__$1,about,nav,_STAR_reconciler_STAR_44676,_STAR_depth_STAR_44677,_STAR_shared_STAR_44678,_STAR_instrument_STAR_44679,_STAR_parent_STAR_44680,this$,this__36865__auto__,x44673_44685){
return (function (){
return nav.call(null,new cljs.core.Keyword(null,"home","home",-74557309));
});})(map__44681,map__44681__$1,about,nav,_STAR_reconciler_STAR_44676,_STAR_depth_STAR_44677,_STAR_shared_STAR_44678,_STAR_instrument_STAR_44679,_STAR_parent_STAR_44680,this$,this__36865__auto__,x44673_44685))
}),"home"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44680;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44679;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44678;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44677;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44676;
}});})(x44673_44685))
;


om_cards.reconciliation.About.prototype.constructor = om_cards.reconciliation.About;

om_cards.reconciliation.About.prototype.constructor.displayName = "om-cards.reconciliation/About";

om_cards.reconciliation.About.prototype.om$isComponent = true;

var x44683_44689 = om_cards.reconciliation.About;


var x44684_44690 = om_cards.reconciliation.About.prototype;


om_cards.reconciliation.About.cljs$lang$type = true;

om_cards.reconciliation.About.cljs$lang$ctorStr = "om-cards.reconciliation/About";

om_cards.reconciliation.About.cljs$lang$ctorPrWriter = (function (this__36965__auto__,writer__36966__auto__,opt__36967__auto__){
return cljs.core._write.call(null,writer__36966__auto__,"om-cards.reconciliation/About");
});
/**
 * @constructor
 */
om_cards.reconciliation.AppRoot = (function om_cards$reconciliation$AppRoot(){
var this__36962__auto__ = this;
React.Component.apply(this__36962__auto__,arguments);

if(!((this__36962__auto__.initLocalState == null))){
this__36962__auto__.state = this__36962__auto__.initLocalState();
} else {
this__36962__auto__.state = {};
}

return this__36962__auto__;
});

om_cards.reconciliation.AppRoot.prototype = goog.object.clone(React.Component.prototype);

var x44695_44713 = om_cards.reconciliation.AppRoot.prototype;
x44695_44713.componentWillUpdate = ((function (x44695_44713){
return (function (next_props__36867__auto__,next_state__36868__auto__){
var this__36866__auto__ = this;
if(((!((this__36866__auto__ == null)))?(((false) || (this__36866__auto__.om$next$Ident$))?true:false):false)){
var ident__36870__auto___44714 = om.next.ident.call(null,this__36866__auto__,om.next.props.call(null,this__36866__auto__));
var next_ident__36871__auto___44715 = om.next.ident.call(null,this__36866__auto__,om.next._next_props.call(null,next_props__36867__auto__,this__36866__auto__));
if(cljs.core.not_EQ_.call(null,ident__36870__auto___44714,next_ident__36871__auto___44715)){
var idxr__36872__auto___44716 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36866__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__36872__auto___44716 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__36872__auto___44716),((function (idxr__36872__auto___44716,ident__36870__auto___44714,next_ident__36871__auto___44715,this__36866__auto__,x44695_44713){
return (function (indexes__36873__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__36873__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__36870__auto___44714], null),cljs.core.disj,this__36866__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__36871__auto___44715], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__36866__auto__);
});})(idxr__36872__auto___44716,ident__36870__auto___44714,next_ident__36871__auto___44715,this__36866__auto__,x44695_44713))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__36866__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__36866__auto__);
});})(x44695_44713))
;

x44695_44713.shouldComponentUpdate = ((function (x44695_44713){
return (function (next_props__36867__auto__,next_state__36868__auto__){
var this__36866__auto__ = this;
var next_children__36869__auto__ = next_props__36867__auto__.children;
var next_props__36867__auto____$1 = goog.object.get(next_props__36867__auto__,"omcljs$value");
var next_props__36867__auto____$2 = (function (){var G__44697 = next_props__36867__auto____$1;
if((next_props__36867__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__44697);
} else {
return G__44697;
}
})();
var or__24798__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__36866__auto__),next_props__36867__auto____$2);
if(or__24798__auto__){
return or__24798__auto__;
} else {
var or__24798__auto____$1 = (function (){var and__24786__auto__ = this__36866__auto__.state;
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__36866__auto__.state,"omcljs$state"),goog.object.get(next_state__36868__auto__,"omcljs$state"));
} else {
return and__24786__auto__;
}
})();
if(cljs.core.truth_(or__24798__auto____$1)){
return or__24798__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__36866__auto__.props.children,next_children__36869__auto__);
}
}
});})(x44695_44713))
;

x44695_44713.componentWillUnmount = ((function (x44695_44713){
return (function (){
var this__36866__auto__ = this;
var r__36877__auto__ = om.next.get_reconciler.call(null,this__36866__auto__);
var cfg__36878__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__36877__auto__);
var st__36879__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__36878__auto__);
var indexer__36876__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__36878__auto__);
if(cljs.core.truth_((function (){var and__24786__auto__ = !((st__36879__auto__ == null));
if(and__24786__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__36879__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__36866__auto__], null));
} else {
return and__24786__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__36879__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__36866__auto__);
} else {
}

if((indexer__36876__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__36876__auto__,this__36866__auto__);
}
});})(x44695_44713))
;

x44695_44713.componentDidUpdate = ((function (x44695_44713){
return (function (prev_props__36874__auto__,prev_state__36875__auto__){
var this__36866__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__36866__auto__);
});})(x44695_44713))
;

x44695_44713.isMounted = ((function (x44695_44713){
return (function (){
var this__36866__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__36866__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44695_44713))
;

x44695_44713.componentWillMount = ((function (x44695_44713){
return (function (){
var this__36866__auto__ = this;
var indexer__36876__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36866__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__36876__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__36876__auto__,this__36866__auto__);
}
});})(x44695_44713))
;

x44695_44713.initLocalState = ((function (x44695_44713){
return (function (){
var this$ = this;
var ret__36844__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-state","nav-state",-979706076),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null)], null),new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_cards.reconciliation.Home,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","home","app/home",-74460510)], null)], null),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_cards.reconciliation.About,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","about","app/about",1423468062)], null)], null)], null)], null);
var obj44699 = {"omcljs$state":ret__36844__auto__};
return obj44699;
});})(x44695_44713))
;

x44695_44713.render = ((function (x44695_44713){
return (function (){
var this__36865__auto__ = this;
var this$ = this__36865__auto__;
var _STAR_reconciler_STAR_44700 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44701 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44702 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44703 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44704 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__36865__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__36865__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__36865__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__36865__auto__);

om.next._STAR_parent_STAR_ = this__36865__auto__;

try{var props = om.next.props.call(null,this$);
var nav_map = om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"nav","nav",719540477));
var nav_index = om.next.get_state.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-state","nav-state",-979706076),new cljs.core.Keyword(null,"index","index",-1531685915)], null));
var nav_route = om.next.get_state.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-state","nav-state",-979706076),new cljs.core.Keyword(null,"routes","routes",457900162),nav_index], null));
var vec__44705 = om.next.get_state.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(nav_route)], null));
var ui = cljs.core.nth.call(null,vec__44705,(0),null);
var query = cljs.core.nth.call(null,vec__44705,(1),null);
var factory = om.next.factory.call(null,ui);
var nav_fn = ((function (props,nav_map,nav_index,nav_route,vec__44705,ui,query,factory,_STAR_reconciler_STAR_44700,_STAR_depth_STAR_44701,_STAR_shared_STAR_44702,_STAR_instrument_STAR_44703,_STAR_parent_STAR_44704,this$,this__36865__auto__,x44695_44713){
return (function (nav_key){
var vec__44708 = om.next.get_state.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),nav_key], null));
var ui__$1 = cljs.core.nth.call(null,vec__44708,(0),null);
var query__$1 = cljs.core.nth.call(null,vec__44708,(1),null);
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-state","nav-state",-979706076),new cljs.core.Keyword(null,"routes","routes",457900162)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nav_key], null)], null));

return om.next.set_query_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null));
});})(props,nav_map,nav_index,nav_route,vec__44705,ui,query,factory,_STAR_reconciler_STAR_44700,_STAR_depth_STAR_44701,_STAR_shared_STAR_44702,_STAR_instrument_STAR_44703,_STAR_parent_STAR_44704,this$,this__36865__auto__,x44695_44713))
;
return factory.call(null,om.next.computed.call(null,om.next.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-fn","nav-fn",-397826559),nav_fn], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44704;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44703;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44702;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44701;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44700;
}});})(x44695_44713))
;


om_cards.reconciliation.AppRoot.prototype.constructor = om_cards.reconciliation.AppRoot;

om_cards.reconciliation.AppRoot.prototype.constructor.displayName = "om-cards.reconciliation/AppRoot";

om_cards.reconciliation.AppRoot.prototype.om$isComponent = true;

var x44711_44717 = om_cards.reconciliation.AppRoot;
/** @nocollapse */
x44711_44717.om$next$IQuery$ = true;

/** @nocollapse */
x44711_44717.om$next$IQuery$query$arity$1 = ((function (x44711_44717){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null)], true, false)], null);
});})(x44711_44717))
;


var x44712_44718 = om_cards.reconciliation.AppRoot.prototype;

x44712_44718.om$next$IQuery$ = true;


x44712_44718.om$next$IQuery$query$arity$1 = ((function (x44712_44718){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null)], true, false)], null);
});})(x44712_44718))
;


om_cards.reconciliation.AppRoot.cljs$lang$type = true;

om_cards.reconciliation.AppRoot.cljs$lang$ctorStr = "om-cards.reconciliation/AppRoot";

om_cards.reconciliation.AppRoot.cljs$lang$ctorPrWriter = (function (this__36965__auto__,writer__36966__auto__,opt__36967__auto__){
return cljs.core._write.call(null,writer__36966__auto__,"om-cards.reconciliation/AppRoot");
});
om_cards.reconciliation.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","home","app/home",-74460510),"Welcome Home",new cljs.core.Keyword("app","about","app/about",1423468062),"About us"], null)),new cljs.core.Keyword(null,"parser","parser",-1543495310),om_cards.reconciliation.parser,new cljs.core.Keyword(null,"send","send",-652151114),(function (query_map,callback){
cljs.core.println.call(null,"Sending: ",query_map);

var seq__44719 = cljs.core.seq.call(null,query_map);
var chunk__44720 = null;
var count__44721 = (0);
var i__44722 = (0);
while(true){
if((i__44722 < count__44721)){
var vec__44723 = cljs.core._nth.call(null,chunk__44720,i__44722);
var target = cljs.core.nth.call(null,vec__44723,(0),null);
var query = cljs.core.nth.call(null,vec__44723,(1),null);
callback.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null)], true, false));

var G__44729 = seq__44719;
var G__44730 = chunk__44720;
var G__44731 = count__44721;
var G__44732 = (i__44722 + (1));
seq__44719 = G__44729;
chunk__44720 = G__44730;
count__44721 = G__44731;
i__44722 = G__44732;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44719);
if(temp__4657__auto__){
var seq__44719__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44719__$1)){
var c__25609__auto__ = cljs.core.chunk_first.call(null,seq__44719__$1);
var G__44733 = cljs.core.chunk_rest.call(null,seq__44719__$1);
var G__44734 = c__25609__auto__;
var G__44735 = cljs.core.count.call(null,c__25609__auto__);
var G__44736 = (0);
seq__44719 = G__44733;
chunk__44720 = G__44734;
count__44721 = G__44735;
i__44722 = G__44736;
continue;
} else {
var vec__44726 = cljs.core.first.call(null,seq__44719__$1);
var target = cljs.core.nth.call(null,vec__44726,(0),null);
var query = cljs.core.nth.call(null,vec__44726,(1),null);
callback.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"foo","foo",1268894036)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null)], true, false));

var G__44737 = cljs.core.next.call(null,seq__44719__$1);
var G__44738 = null;
var G__44739 = (0);
var G__44740 = (0);
seq__44719 = G__44737;
chunk__44720 = G__44738;
count__44721 = G__44739;
i__44722 = G__44740;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static","static",1214358571)], null)], null));

//# sourceMappingURL=reconciliation.js.map?rel=1483385753586