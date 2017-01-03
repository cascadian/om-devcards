// Compiled by ClojureScript 1.9.229 {}
goog.provide('om_cards.core');
goog.require('cljs.core');
goog.require('devcards_om_next.core');
goog.require('om.dom');
goog.require('om_cards.ds');
goog.require('datascript.core');
goog.require('sablono.core');
goog.require('om_cards.reconciliation');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_cards.core","om_cards.core",-1569758747),new cljs.core.Keyword(null,"first-card","first-card",884452895)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"first-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,React.createElement("h1",null,"This is your first devcard!")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
if(typeof om_cards.core.Counter !== 'undefined'){
} else {
/**
 * @constructor
 */
om_cards.core.Counter = (function om_cards$core$Counter(){
var this__35929__auto__ = this;
React.Component.apply(this__35929__auto__,arguments);

if(!((this__35929__auto__.initLocalState == null))){
this__35929__auto__.state = this__35929__auto__.initLocalState();
} else {
this__35929__auto__.state = {};
}

return this__35929__auto__;
});

om_cards.core.Counter.prototype = goog.object.clone(React.Component.prototype);
}

var x45629_45643 = om_cards.core.Counter.prototype;
x45629_45643.componentWillUpdate = ((function (x45629_45643){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(((!((this__35833__auto__ == null)))?(((false) || (this__35833__auto__.om$next$Ident$))?true:false):false)){
var ident__35837__auto___45644 = om.next.ident.call(null,this__35833__auto__,om.next.props.call(null,this__35833__auto__));
var next_ident__35838__auto___45645 = om.next.ident.call(null,this__35833__auto__,om.next._next_props.call(null,next_props__35834__auto__,this__35833__auto__));
if(cljs.core.not_EQ_.call(null,ident__35837__auto___45644,next_ident__35838__auto___45645)){
var idxr__35839__auto___45646 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__35839__auto___45646 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__35839__auto___45646),((function (idxr__35839__auto___45646,ident__35837__auto___45644,next_ident__35838__auto___45645,this__35833__auto__,x45629_45643){
return (function (indexes__35840__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__35840__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__35837__auto___45644], null),cljs.core.disj,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__35838__auto___45645], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35833__auto__);
});})(idxr__35839__auto___45646,ident__35837__auto___45644,next_ident__35838__auto___45645,this__35833__auto__,x45629_45643))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__35833__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__35833__auto__);
});})(x45629_45643))
;

x45629_45643.shouldComponentUpdate = ((function (x45629_45643){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
var next_children__35836__auto__ = next_props__35834__auto__.children;
var next_props__35834__auto____$1 = goog.object.get(next_props__35834__auto__,"omcljs$value");
var next_props__35834__auto____$2 = (function (){var G__45631 = next_props__35834__auto____$1;
if((next_props__35834__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__45631);
} else {
return G__45631;
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
});})(x45629_45643))
;

x45629_45643.componentWillUnmount = ((function (x45629_45643){
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
});})(x45629_45643))
;

x45629_45643.componentDidUpdate = ((function (x45629_45643){
return (function (prev_props__35841__auto__,prev_state__35842__auto__){
var this__35833__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__35833__auto__);
});})(x45629_45643))
;

x45629_45643.isMounted = ((function (x45629_45643){
return (function (){
var this__35833__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__35833__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x45629_45643))
;

x45629_45643.componentWillMount = ((function (x45629_45643){
return (function (){
var this__35833__auto__ = this;
var indexer__35843__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__35843__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__35843__auto__,this__35833__auto__);
}
});})(x45629_45643))
;

x45629_45643.initLocalState = ((function (x45629_45643){
return (function (){
var this$ = this;
var ret__35811__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),(1)], null);
var obj45633 = {"omcljs$state":ret__35811__auto__};
return obj45633;
});})(x45629_45643))
;

x45629_45643.render = ((function (x45629_45643){
return (function (){
var this__35832__auto__ = this;
var this$ = this__35832__auto__;
var _STAR_reconciler_STAR_45634 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45635 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_45636 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_45637 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_45638 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__35832__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__35832__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__35832__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__35832__auto__);

om.next._STAR_parent_STAR_ = this__35832__auto__;

try{var map__45639 = om.next.get_state.call(null,this$);
var map__45639__$1 = ((((!((map__45639 == null)))?((((map__45639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45639):map__45639);
var val = cljs.core.get.call(null,map__45639__$1,new cljs.core.Keyword(null,"val","val",128701612));
return om.dom.div.call(null,null,[cljs.core.str("val: "),cljs.core.str(val)].join(''),om.dom.button.call(null,({"onClick": ((function (map__45639,map__45639__$1,val,_STAR_reconciler_STAR_45634,_STAR_depth_STAR_45635,_STAR_shared_STAR_45636,_STAR_instrument_STAR_45637,_STAR_parent_STAR_45638,this$,this__35832__auto__,x45629_45643){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.update,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.inc);
});})(map__45639,map__45639__$1,val,_STAR_reconciler_STAR_45634,_STAR_depth_STAR_45635,_STAR_shared_STAR_45636,_STAR_instrument_STAR_45637,_STAR_parent_STAR_45638,this$,this__35832__auto__,x45629_45643))
}),"inc!"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_45638;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_45637;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_45636;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_45635;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45634;
}});})(x45629_45643))
;


om_cards.core.Counter.prototype.constructor = om_cards.core.Counter;

om_cards.core.Counter.prototype.constructor.displayName = "om-cards.core/Counter";

om_cards.core.Counter.prototype.om$isComponent = true;

var x45641_45647 = om_cards.core.Counter;


var x45642_45648 = om_cards.core.Counter.prototype;


om_cards.core.Counter.cljs$lang$type = true;

om_cards.core.Counter.cljs$lang$ctorStr = "om-cards.core/Counter";

om_cards.core.Counter.cljs$lang$ctorPrWriter = (function (this__35932__auto__,writer__35933__auto__,opt__35934__auto__){
return cljs.core._write.call(null,writer__35933__auto__,"om-cards.core/Counter");
});
if(typeof om_cards.core.counter_reconciler !== 'undefined'){
} else {
om_cards.core.counter_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.PersistentArrayMap.EMPTY], null);
})], null)], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_cards.core","om_cards.core",-1569758747),new cljs.core.Keyword(null,"om-next-root-example","om-next-root-example",218987524)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"om-next-root-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"`om-next-root` takes a component class and (optionally)\n          a map with the state or a reconciler",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof om_cards.core.t_om_cards$core45649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_cards.core.t_om_cards$core45649 = (function (meta45650){
this.meta45650 = meta45650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

om_cards.core.t_om_cards$core45649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45651,meta45650__$1){
var self__ = this;
var _45651__$1 = this;
return (new om_cards.core.t_om_cards$core45649(meta45650__$1));
});


om_cards.core.t_om_cards$core45649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45651){
var self__ = this;
var _45651__$1 = this;
return self__.meta45650;
});


om_cards.core.t_om_cards$core45649.prototype.devcards$core$IDevcard$ = true;


om_cards.core.t_om_cards$core45649.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this__37806__auto__,devcard_opts__37807__auto__){
var self__ = this;
var this__37806__auto____$1 = this;
var init_data__37808__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcard_opts__37807__auto__);
var state__37809__auto__ = ((om.next.reconciler_QMARK_.call(null,null))?null:(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,init_data__37808__auto__))?init_data__37808__auto__:((!(cljs.core.empty_QMARK_.call(null,init_data__37808__auto__)))?cljs.core.atom.call(null,init_data__37808__auto__):((cljs.core.map_QMARK_.call(null,null))?cljs.core.atom.call(null,null):(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,null))?null:cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)
)))));
var reconciler__37810__auto__ = ((om.next.reconciler_QMARK_.call(null,null))?null:om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state__37809__auto__,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),((function (init_data__37808__auto__,state__37809__auto__,this__37806__auto____$1){
return (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),state__37809__auto__], null);
});})(init_data__37808__auto__,state__37809__auto__,this__37806__auto____$1))
], null))], null)));
var main_obj__37811__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256),(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?((function (init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1){
return (function (p1__37805__37812__auto__){
return om.next.add_root_BANG_.call(null,reconciler__37810__auto__,om_cards.core.Counter,p1__37805__37812__auto__);
});})(init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1))
:((function (init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1){
return (function (){
return om.next.protocols.add_root_BANG_.call(null,reconciler__37810__auto__,om_cards.core.Counter,null,null);
});})(init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1))
),new cljs.core.Keyword(null,"data_atom","data_atom",257894504),om.next.app_state.call(null,reconciler__37810__auto__),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler__37810__auto__,new cljs.core.Keyword(null,"component","component",1555936782),om_cards.core.Counter], null);
var card__37813__auto__ = devcards.core.add_environment_defaults.call(null,cljs.core.assoc.call(null,devcard_opts__37807__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),main_obj__37811__auto__,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__37807__auto__)))));
return React.createElement(devcards_om_next.core.OmNextNode,(function (){var obj45653 = {"card":card__37813__auto__};
return obj45653;
})());
});

om_cards.core.t_om_cards$core45649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45650","meta45650",475214414,null)], null);
});

om_cards.core.t_om_cards$core45649.cljs$lang$type = true;

om_cards.core.t_om_cards$core45649.cljs$lang$ctorStr = "om-cards.core/t_om_cards$core45649";

om_cards.core.t_om_cards$core45649.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"om-cards.core/t_om_cards$core45649");
});

om_cards.core.__GT_t_om_cards$core45649 = (function om_cards$core$__GT_t_om_cards$core45649(meta45650){
return (new om_cards.core.t_om_cards$core45649(meta45650));
});

}

return (new om_cards.core.t_om_cards$core45649(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_cards.core","om_cards.core",-1569758747),new cljs.core.Keyword(null,"defcard-om-next-example","defcard-om-next-example",1321756877)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"defcard-om-next-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"`defcard-om-next` example with a Component class and a reconciler",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof om_cards.core.t_om_cards$core45654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_cards.core.t_om_cards$core45654 = (function (meta45655){
this.meta45655 = meta45655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

om_cards.core.t_om_cards$core45654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45656,meta45655__$1){
var self__ = this;
var _45656__$1 = this;
return (new om_cards.core.t_om_cards$core45654(meta45655__$1));
});


om_cards.core.t_om_cards$core45654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45656){
var self__ = this;
var _45656__$1 = this;
return self__.meta45655;
});


om_cards.core.t_om_cards$core45654.prototype.devcards$core$IDevcard$ = true;


om_cards.core.t_om_cards$core45654.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this__37806__auto__,devcard_opts__37807__auto__){
var self__ = this;
var this__37806__auto____$1 = this;
var init_data__37808__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcard_opts__37807__auto__);
var state__37809__auto__ = ((om.next.reconciler_QMARK_.call(null,om_cards.core.counter_reconciler))?null:(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,init_data__37808__auto__))?init_data__37808__auto__:((!(cljs.core.empty_QMARK_.call(null,init_data__37808__auto__)))?cljs.core.atom.call(null,init_data__37808__auto__):((cljs.core.map_QMARK_.call(null,om_cards.core.counter_reconciler))?cljs.core.atom.call(null,om_cards.core.counter_reconciler):(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,om_cards.core.counter_reconciler))?om_cards.core.counter_reconciler:cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)
)))));
var reconciler__37810__auto__ = ((om.next.reconciler_QMARK_.call(null,om_cards.core.counter_reconciler))?om_cards.core.counter_reconciler:om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state__37809__auto__,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),((function (init_data__37808__auto__,state__37809__auto__,this__37806__auto____$1){
return (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),state__37809__auto__], null);
});})(init_data__37808__auto__,state__37809__auto__,this__37806__auto____$1))
], null))], null)));
var main_obj__37811__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256),(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?((function (init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1){
return (function (p1__37805__37812__auto__){
return om.next.add_root_BANG_.call(null,reconciler__37810__auto__,om_cards.core.Counter,p1__37805__37812__auto__);
});})(init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1))
:((function (init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1){
return (function (){
return om.next.protocols.add_root_BANG_.call(null,reconciler__37810__auto__,om_cards.core.Counter,null,null);
});})(init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1))
),new cljs.core.Keyword(null,"data_atom","data_atom",257894504),om.next.app_state.call(null,reconciler__37810__auto__),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler__37810__auto__,new cljs.core.Keyword(null,"component","component",1555936782),om_cards.core.Counter], null);
var card__37813__auto__ = devcards.core.add_environment_defaults.call(null,cljs.core.assoc.call(null,devcard_opts__37807__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),main_obj__37811__auto__,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__37807__auto__)))));
return React.createElement(devcards_om_next.core.OmNextNode,(function (){var obj45658 = {"card":card__37813__auto__};
return obj45658;
})());
});

om_cards.core.t_om_cards$core45654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45655","meta45655",408716119,null)], null);
});

om_cards.core.t_om_cards$core45654.cljs$lang$type = true;

om_cards.core.t_om_cards$core45654.cljs$lang$ctorStr = "om-cards.core/t_om_cards$core45654";

om_cards.core.t_om_cards$core45654.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"om-cards.core/t_om_cards$core45654");
});

om_cards.core.__GT_t_om_cards$core45654 = (function om_cards$core$__GT_t_om_cards$core45654(meta45655){
return (new om_cards.core.t_om_cards$core45654(meta45655));
});

}

return (new om_cards.core.t_om_cards$core45654(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_cards.core","om_cards.core",-1569758747),new cljs.core.Keyword(null,"test","test",577538877)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"REconciler",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof om_cards.core.t_om_cards$core45659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_cards.core.t_om_cards$core45659 = (function (meta45660){
this.meta45660 = meta45660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

om_cards.core.t_om_cards$core45659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45661,meta45660__$1){
var self__ = this;
var _45661__$1 = this;
return (new om_cards.core.t_om_cards$core45659(meta45660__$1));
});


om_cards.core.t_om_cards$core45659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45661){
var self__ = this;
var _45661__$1 = this;
return self__.meta45660;
});


om_cards.core.t_om_cards$core45659.prototype.devcards$core$IDevcard$ = true;


om_cards.core.t_om_cards$core45659.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this__37806__auto__,devcard_opts__37807__auto__){
var self__ = this;
var this__37806__auto____$1 = this;
var init_data__37808__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcard_opts__37807__auto__);
var state__37809__auto__ = ((om.next.reconciler_QMARK_.call(null,om_cards.reconciliation.reconciler))?null:(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,init_data__37808__auto__))?init_data__37808__auto__:((!(cljs.core.empty_QMARK_.call(null,init_data__37808__auto__)))?cljs.core.atom.call(null,init_data__37808__auto__):((cljs.core.map_QMARK_.call(null,om_cards.reconciliation.reconciler))?cljs.core.atom.call(null,om_cards.reconciliation.reconciler):(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,om_cards.reconciliation.reconciler))?om_cards.reconciliation.reconciler:cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)
)))));
var reconciler__37810__auto__ = ((om.next.reconciler_QMARK_.call(null,om_cards.reconciliation.reconciler))?om_cards.reconciliation.reconciler:om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state__37809__auto__,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),((function (init_data__37808__auto__,state__37809__auto__,this__37806__auto____$1){
return (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),state__37809__auto__], null);
});})(init_data__37808__auto__,state__37809__auto__,this__37806__auto____$1))
], null))], null)));
var main_obj__37811__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256),(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?((function (init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1){
return (function (p1__37805__37812__auto__){
return om.next.add_root_BANG_.call(null,reconciler__37810__auto__,om_cards.reconciliation.AppRoot,p1__37805__37812__auto__);
});})(init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1))
:((function (init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1){
return (function (){
return om.next.protocols.add_root_BANG_.call(null,reconciler__37810__auto__,om_cards.reconciliation.AppRoot,null,null);
});})(init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1))
),new cljs.core.Keyword(null,"data_atom","data_atom",257894504),om.next.app_state.call(null,reconciler__37810__auto__),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler__37810__auto__,new cljs.core.Keyword(null,"component","component",1555936782),om_cards.reconciliation.AppRoot], null);
var card__37813__auto__ = devcards.core.add_environment_defaults.call(null,cljs.core.assoc.call(null,devcard_opts__37807__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),main_obj__37811__auto__,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__37807__auto__)))));
return React.createElement(devcards_om_next.core.OmNextNode,(function (){var obj45663 = {"card":card__37813__auto__};
return obj45663;
})());
});

om_cards.core.t_om_cards$core45659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45660","meta45660",-885009221,null)], null);
});

om_cards.core.t_om_cards$core45659.cljs$lang$type = true;

om_cards.core.t_om_cards$core45659.cljs$lang$ctorStr = "om-cards.core/t_om_cards$core45659";

om_cards.core.t_om_cards$core45659.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"om-cards.core/t_om_cards$core45659");
});

om_cards.core.__GT_t_om_cards$core45659 = (function om_cards$core$__GT_t_om_cards$core45659(meta45660){
return (new om_cards.core.t_om_cards$core45659(meta45660));
});

}

return (new om_cards.core.t_om_cards$core45659(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_cards.core","om_cards.core",-1569758747),new cljs.core.Keyword(null,"ds-test","ds-test",1709458536)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"ds-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"REconciler",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof om_cards.core.t_om_cards$core45664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_cards.core.t_om_cards$core45664 = (function (meta45665){
this.meta45665 = meta45665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

om_cards.core.t_om_cards$core45664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45666,meta45665__$1){
var self__ = this;
var _45666__$1 = this;
return (new om_cards.core.t_om_cards$core45664(meta45665__$1));
});


om_cards.core.t_om_cards$core45664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45666){
var self__ = this;
var _45666__$1 = this;
return self__.meta45665;
});


om_cards.core.t_om_cards$core45664.prototype.devcards$core$IDevcard$ = true;


om_cards.core.t_om_cards$core45664.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this__37806__auto__,devcard_opts__37807__auto__){
var self__ = this;
var this__37806__auto____$1 = this;
var init_data__37808__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcard_opts__37807__auto__);
var state__37809__auto__ = ((om.next.reconciler_QMARK_.call(null,om_cards.ds.reconciler))?null:(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,init_data__37808__auto__))?init_data__37808__auto__:((!(cljs.core.empty_QMARK_.call(null,init_data__37808__auto__)))?cljs.core.atom.call(null,init_data__37808__auto__):((cljs.core.map_QMARK_.call(null,om_cards.ds.reconciler))?cljs.core.atom.call(null,om_cards.ds.reconciler):(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,om_cards.ds.reconciler))?om_cards.ds.reconciler:cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)
)))));
var reconciler__37810__auto__ = ((om.next.reconciler_QMARK_.call(null,om_cards.ds.reconciler))?om_cards.ds.reconciler:om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state__37809__auto__,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),((function (init_data__37808__auto__,state__37809__auto__,this__37806__auto____$1){
return (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),state__37809__auto__], null);
});})(init_data__37808__auto__,state__37809__auto__,this__37806__auto____$1))
], null))], null)));
var main_obj__37811__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256),(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?((function (init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1){
return (function (p1__37805__37812__auto__){
return om.next.add_root_BANG_.call(null,reconciler__37810__auto__,om_cards.ds.AppRoot,p1__37805__37812__auto__);
});})(init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1))
:((function (init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1){
return (function (){
return om.next.protocols.add_root_BANG_.call(null,reconciler__37810__auto__,om_cards.ds.AppRoot,null,null);
});})(init_data__37808__auto__,state__37809__auto__,reconciler__37810__auto__,this__37806__auto____$1))
),new cljs.core.Keyword(null,"data_atom","data_atom",257894504),om.next.app_state.call(null,reconciler__37810__auto__),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler__37810__auto__,new cljs.core.Keyword(null,"component","component",1555936782),om_cards.ds.AppRoot], null);
var card__37813__auto__ = devcards.core.add_environment_defaults.call(null,cljs.core.assoc.call(null,devcard_opts__37807__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),main_obj__37811__auto__,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__37807__auto__)))));
return React.createElement(devcards_om_next.core.OmNextNode,(function (){var obj45668 = {"card":card__37813__auto__};
return obj45668;
})());
});

om_cards.core.t_om_cards$core45664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45665","meta45665",1963335522,null)], null);
});

om_cards.core.t_om_cards$core45664.cljs$lang$type = true;

om_cards.core.t_om_cards$core45664.cljs$lang$ctorStr = "om-cards.core/t_om_cards$core45664";

om_cards.core.t_om_cards$core45664.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"om-cards.core/t_om_cards$core45664");
});

om_cards.core.__GT_t_om_cards$core45664 = (function om_cards$core$__GT_t_om_cards$core45664(meta45665){
return (new om_cards.core.t_om_cards$core45664(meta45665));
});

}

return (new om_cards.core.t_om_cards$core45664(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true], null)], null));
})], null));
om_cards.core.main = (function om_cards$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return ReactDOM.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
om_cards.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1483401373385