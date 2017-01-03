// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards_om_next.core');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('devcards.util.utils');
goog.require('om.next');
goog.require('om.next.protocols');
var base__32496__auto___39218 = ({"getInitialState": (function (){
return ({"state_change_count": (0), "omnext$unique-id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"omnext-component-","omnext-component-",217631378,null)))].join('')});
}), "shouldComponentUpdate": (function (next_props,next_state){
var this$ = this;
var watch_atom_QMARK_ = new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152))));
var or__24798__auto__ = watch_atom_QMARK_;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)),next_state.state_change_count);
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var map__39203 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
var map__39203__$1 = ((((!((map__39203 == null)))?((((map__39203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39203):map__39203);
var data_atom = cljs.core.get.call(null,map__39203__$1,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var mount_fn = cljs.core.get.call(null,map__39203__$1,new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256));
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
var target = document.getElementById(unique_id);
mount_fn.call(null,target);

if(cljs.core.truth_(data_atom)){
return cljs.core.add_watch.call(null,data_atom,unique_id,((function (map__39203,map__39203__$1,data_atom,mount_fn,unique_id,target,this$){
return (function (_,___$1,___$2,___$3){
var new_change_count = (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1));
return this$.setState(({"state_change_count": new_change_count}));
});})(map__39203,map__39203__$1,data_atom,mount_fn,unique_id,target,this$))
);
} else {
return null;
}
}):(function (){
return null;
})), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
if(cljs.core._EQ_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)),prev_state.state_change_count)){
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var map__39205 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
var map__39205__$1 = ((((!((map__39205 == null)))?((((map__39205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39205):map__39205);
var mount_fn = cljs.core.get.call(null,map__39205__$1,new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256));
var component = cljs.core.get.call(null,map__39205__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var reconciler = cljs.core.get.call(null,map__39205__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
var target = document.getElementById(unique_id);
var temp__4655__auto__ = om.next.class__GT_any.call(null,reconciler,component);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return c.forceUpdate();
} else {
return mount_fn.call(null,target);
}
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var data_atom = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),new cljs.core.Keyword(null,"data_atom","data_atom",257894504)], null));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
if(cljs.core.truth_((function (){var and__24786__auto__ = data_atom;
if(cljs.core.truth_(and__24786__auto__)){
return id;
} else {
return and__24786__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var map__39207 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var map__39207__$1 = ((((!((map__39207 == null)))?((((map__39207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39207):map__39207);
var card = map__39207__$1;
var map__39208 = cljs.core.get.call(null,map__39207__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__39208__$1 = ((((!((map__39208 == null)))?((((map__39208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39208):map__39208);
var watch_atom = cljs.core.get.call(null,map__39208__$1,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308));
var map__39209 = cljs.core.get.call(null,map__39207__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var map__39209__$1 = ((((!((map__39209 == null)))?((((map__39209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39209):map__39209);
var mount_fn = cljs.core.get.call(null,map__39209__$1,new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256));
var data_atom = cljs.core.get.call(null,map__39209__$1,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
var main = (function (){var G__39213 = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?React.createElement("div",({"id": unique_id})):mount_fn.call(null));
if(cljs.core.not.call(null,watch_atom)){
return devcards.core.dont_update.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)),G__39213);
} else {
return G__39213;
}
})();
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards_om_next.core.OmNextNode !== 'undefined'){
} else {
devcards_om_next.core.OmNextNode = React.createClass(base__32496__auto___39218);
}

var seq__39214_39219 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__39215_39220 = null;
var count__39216_39221 = (0);
var i__39217_39222 = (0);
while(true){
if((i__39217_39222 < count__39216_39221)){
var property__32497__auto___39223 = cljs.core._nth.call(null,chunk__39215_39220,i__39217_39222);
if(cljs.core.truth_((base__32496__auto___39218[property__32497__auto___39223]))){
(devcards_om_next.core.OmNextNode.prototype[property__32497__auto___39223] = (base__32496__auto___39218[property__32497__auto___39223]));
} else {
}

var G__39224 = seq__39214_39219;
var G__39225 = chunk__39215_39220;
var G__39226 = count__39216_39221;
var G__39227 = (i__39217_39222 + (1));
seq__39214_39219 = G__39224;
chunk__39215_39220 = G__39225;
count__39216_39221 = G__39226;
i__39217_39222 = G__39227;
continue;
} else {
var temp__4657__auto___39228 = cljs.core.seq.call(null,seq__39214_39219);
if(temp__4657__auto___39228){
var seq__39214_39229__$1 = temp__4657__auto___39228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39214_39229__$1)){
var c__25609__auto___39230 = cljs.core.chunk_first.call(null,seq__39214_39229__$1);
var G__39231 = cljs.core.chunk_rest.call(null,seq__39214_39229__$1);
var G__39232 = c__25609__auto___39230;
var G__39233 = cljs.core.count.call(null,c__25609__auto___39230);
var G__39234 = (0);
seq__39214_39219 = G__39231;
chunk__39215_39220 = G__39232;
count__39216_39221 = G__39233;
i__39217_39222 = G__39234;
continue;
} else {
var property__32497__auto___39235 = cljs.core.first.call(null,seq__39214_39229__$1);
if(cljs.core.truth_((base__32496__auto___39218[property__32497__auto___39235]))){
(devcards_om_next.core.OmNextNode.prototype[property__32497__auto___39235] = (base__32496__auto___39218[property__32497__auto___39235]));
} else {
}

var G__39236 = cljs.core.next.call(null,seq__39214_39229__$1);
var G__39237 = null;
var G__39238 = (0);
var G__39239 = (0);
seq__39214_39219 = G__39236;
chunk__39215_39220 = G__39237;
count__39216_39221 = G__39238;
i__39217_39222 = G__39239;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=core.js.map?rel=1483385742625