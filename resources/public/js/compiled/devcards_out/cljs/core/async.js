// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28803 = [];
var len__25873__auto___28809 = arguments.length;
var i__25874__auto___28810 = (0);
while(true){
if((i__25874__auto___28810 < len__25873__auto___28809)){
args28803.push((arguments[i__25874__auto___28810]));

var G__28811 = (i__25874__auto___28810 + (1));
i__25874__auto___28810 = G__28811;
continue;
} else {
}
break;
}

var G__28805 = args28803.length;
switch (G__28805) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28803.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28806 = (function (f,blockable,meta28807){
this.f = f;
this.blockable = blockable;
this.meta28807 = meta28807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28808,meta28807__$1){
var self__ = this;
var _28808__$1 = this;
return (new cljs.core.async.t_cljs$core$async28806(self__.f,self__.blockable,meta28807__$1));
});

cljs.core.async.t_cljs$core$async28806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28808){
var self__ = this;
var _28808__$1 = this;
return self__.meta28807;
});

cljs.core.async.t_cljs$core$async28806.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28806.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28807","meta28807",49108808,null)], null);
});

cljs.core.async.t_cljs$core$async28806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28806";

cljs.core.async.t_cljs$core$async28806.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async28806");
});

cljs.core.async.__GT_t_cljs$core$async28806 = (function cljs$core$async$__GT_t_cljs$core$async28806(f__$1,blockable__$1,meta28807){
return (new cljs.core.async.t_cljs$core$async28806(f__$1,blockable__$1,meta28807));
});

}

return (new cljs.core.async.t_cljs$core$async28806(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28815 = [];
var len__25873__auto___28818 = arguments.length;
var i__25874__auto___28819 = (0);
while(true){
if((i__25874__auto___28819 < len__25873__auto___28818)){
args28815.push((arguments[i__25874__auto___28819]));

var G__28820 = (i__25874__auto___28819 + (1));
i__25874__auto___28819 = G__28820;
continue;
} else {
}
break;
}

var G__28817 = args28815.length;
switch (G__28817) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28815.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28822 = [];
var len__25873__auto___28825 = arguments.length;
var i__25874__auto___28826 = (0);
while(true){
if((i__25874__auto___28826 < len__25873__auto___28825)){
args28822.push((arguments[i__25874__auto___28826]));

var G__28827 = (i__25874__auto___28826 + (1));
i__25874__auto___28826 = G__28827;
continue;
} else {
}
break;
}

var G__28824 = args28822.length;
switch (G__28824) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28822.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28829 = [];
var len__25873__auto___28832 = arguments.length;
var i__25874__auto___28833 = (0);
while(true){
if((i__25874__auto___28833 < len__25873__auto___28832)){
args28829.push((arguments[i__25874__auto___28833]));

var G__28834 = (i__25874__auto___28833 + (1));
i__25874__auto___28833 = G__28834;
continue;
} else {
}
break;
}

var G__28831 = args28829.length;
switch (G__28831) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28829.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28836 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28836);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28836,ret){
return (function (){
return fn1.call(null,val_28836);
});})(val_28836,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28837 = [];
var len__25873__auto___28840 = arguments.length;
var i__25874__auto___28841 = (0);
while(true){
if((i__25874__auto___28841 < len__25873__auto___28840)){
args28837.push((arguments[i__25874__auto___28841]));

var G__28842 = (i__25874__auto___28841 + (1));
i__25874__auto___28841 = G__28842;
continue;
} else {
}
break;
}

var G__28839 = args28837.length;
switch (G__28839) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28837.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25713__auto___28844 = n;
var x_28845 = (0);
while(true){
if((x_28845 < n__25713__auto___28844)){
(a[x_28845] = (0));

var G__28846 = (x_28845 + (1));
x_28845 = G__28846;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28847 = (i + (1));
i = G__28847;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28851 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28851 = (function (alt_flag,flag,meta28852){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28852 = meta28852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28853,meta28852__$1){
var self__ = this;
var _28853__$1 = this;
return (new cljs.core.async.t_cljs$core$async28851(self__.alt_flag,self__.flag,meta28852__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28853){
var self__ = this;
var _28853__$1 = this;
return self__.meta28852;
});})(flag))
;

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28851.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28852","meta28852",674953022,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28851.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28851";

cljs.core.async.t_cljs$core$async28851.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async28851");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28851 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28851(alt_flag__$1,flag__$1,meta28852){
return (new cljs.core.async.t_cljs$core$async28851(alt_flag__$1,flag__$1,meta28852));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28851(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28857 = (function (alt_handler,flag,cb,meta28858){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28858 = meta28858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28859,meta28858__$1){
var self__ = this;
var _28859__$1 = this;
return (new cljs.core.async.t_cljs$core$async28857(self__.alt_handler,self__.flag,self__.cb,meta28858__$1));
});

cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28859){
var self__ = this;
var _28859__$1 = this;
return self__.meta28858;
});

cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28858","meta28858",-479100200,null)], null);
});

cljs.core.async.t_cljs$core$async28857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28857";

cljs.core.async.t_cljs$core$async28857.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async28857");
});

cljs.core.async.__GT_t_cljs$core$async28857 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28857(alt_handler__$1,flag__$1,cb__$1,meta28858){
return (new cljs.core.async.t_cljs$core$async28857(alt_handler__$1,flag__$1,cb__$1,meta28858));
});

}

return (new cljs.core.async.t_cljs$core$async28857(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28860_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28860_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28861_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28861_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24798__auto__ = wport;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28862 = (i + (1));
i = G__28862;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24798__auto__ = ret;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24786__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24786__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25880__auto__ = [];
var len__25873__auto___28868 = arguments.length;
var i__25874__auto___28869 = (0);
while(true){
if((i__25874__auto___28869 < len__25873__auto___28868)){
args__25880__auto__.push((arguments[i__25874__auto___28869]));

var G__28870 = (i__25874__auto___28869 + (1));
i__25874__auto___28869 = G__28870;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28865){
var map__28866 = p__28865;
var map__28866__$1 = ((((!((map__28866 == null)))?((((map__28866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28866):map__28866);
var opts = map__28866__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28863){
var G__28864 = cljs.core.first.call(null,seq28863);
var seq28863__$1 = cljs.core.next.call(null,seq28863);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28864,seq28863__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28871 = [];
var len__25873__auto___28921 = arguments.length;
var i__25874__auto___28922 = (0);
while(true){
if((i__25874__auto___28922 < len__25873__auto___28921)){
args28871.push((arguments[i__25874__auto___28922]));

var G__28923 = (i__25874__auto___28922 + (1));
i__25874__auto___28922 = G__28923;
continue;
} else {
}
break;
}

var G__28873 = args28871.length;
switch (G__28873) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28871.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28758__auto___28925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___28925){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___28925){
return (function (state_28897){
var state_val_28898 = (state_28897[(1)]);
if((state_val_28898 === (7))){
var inst_28893 = (state_28897[(2)]);
var state_28897__$1 = state_28897;
var statearr_28899_28926 = state_28897__$1;
(statearr_28899_28926[(2)] = inst_28893);

(statearr_28899_28926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (1))){
var state_28897__$1 = state_28897;
var statearr_28900_28927 = state_28897__$1;
(statearr_28900_28927[(2)] = null);

(statearr_28900_28927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (4))){
var inst_28876 = (state_28897[(7)]);
var inst_28876__$1 = (state_28897[(2)]);
var inst_28877 = (inst_28876__$1 == null);
var state_28897__$1 = (function (){var statearr_28901 = state_28897;
(statearr_28901[(7)] = inst_28876__$1);

return statearr_28901;
})();
if(cljs.core.truth_(inst_28877)){
var statearr_28902_28928 = state_28897__$1;
(statearr_28902_28928[(1)] = (5));

} else {
var statearr_28903_28929 = state_28897__$1;
(statearr_28903_28929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (13))){
var state_28897__$1 = state_28897;
var statearr_28904_28930 = state_28897__$1;
(statearr_28904_28930[(2)] = null);

(statearr_28904_28930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (6))){
var inst_28876 = (state_28897[(7)]);
var state_28897__$1 = state_28897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28897__$1,(11),to,inst_28876);
} else {
if((state_val_28898 === (3))){
var inst_28895 = (state_28897[(2)]);
var state_28897__$1 = state_28897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28897__$1,inst_28895);
} else {
if((state_val_28898 === (12))){
var state_28897__$1 = state_28897;
var statearr_28905_28931 = state_28897__$1;
(statearr_28905_28931[(2)] = null);

(statearr_28905_28931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (2))){
var state_28897__$1 = state_28897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28897__$1,(4),from);
} else {
if((state_val_28898 === (11))){
var inst_28886 = (state_28897[(2)]);
var state_28897__$1 = state_28897;
if(cljs.core.truth_(inst_28886)){
var statearr_28906_28932 = state_28897__$1;
(statearr_28906_28932[(1)] = (12));

} else {
var statearr_28907_28933 = state_28897__$1;
(statearr_28907_28933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (9))){
var state_28897__$1 = state_28897;
var statearr_28908_28934 = state_28897__$1;
(statearr_28908_28934[(2)] = null);

(statearr_28908_28934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (5))){
var state_28897__$1 = state_28897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28909_28935 = state_28897__$1;
(statearr_28909_28935[(1)] = (8));

} else {
var statearr_28910_28936 = state_28897__$1;
(statearr_28910_28936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (14))){
var inst_28891 = (state_28897[(2)]);
var state_28897__$1 = state_28897;
var statearr_28911_28937 = state_28897__$1;
(statearr_28911_28937[(2)] = inst_28891);

(statearr_28911_28937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (10))){
var inst_28883 = (state_28897[(2)]);
var state_28897__$1 = state_28897;
var statearr_28912_28938 = state_28897__$1;
(statearr_28912_28938[(2)] = inst_28883);

(statearr_28912_28938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (8))){
var inst_28880 = cljs.core.async.close_BANG_.call(null,to);
var state_28897__$1 = state_28897;
var statearr_28913_28939 = state_28897__$1;
(statearr_28913_28939[(2)] = inst_28880);

(statearr_28913_28939[(1)] = (10));


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
});})(c__28758__auto___28925))
;
return ((function (switch__28646__auto__,c__28758__auto___28925){
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_28917 = [null,null,null,null,null,null,null,null];
(statearr_28917[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_28917[(1)] = (1));

return statearr_28917;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_28897){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_28897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e28918){if((e28918 instanceof Object)){
var ex__28650__auto__ = e28918;
var statearr_28919_28940 = state_28897;
(statearr_28919_28940[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28941 = state_28897;
state_28897 = G__28941;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_28897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_28897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___28925))
})();
var state__28760__auto__ = (function (){var statearr_28920 = f__28759__auto__.call(null);
(statearr_28920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___28925);

return statearr_28920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___28925))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29129){
var vec__29130 = p__29129;
var v = cljs.core.nth.call(null,vec__29130,(0),null);
var p = cljs.core.nth.call(null,vec__29130,(1),null);
var job = vec__29130;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28758__auto___29316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___29316,res,vec__29130,v,p,job,jobs,results){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___29316,res,vec__29130,v,p,job,jobs,results){
return (function (state_29137){
var state_val_29138 = (state_29137[(1)]);
if((state_val_29138 === (1))){
var state_29137__$1 = state_29137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29137__$1,(2),res,v);
} else {
if((state_val_29138 === (2))){
var inst_29134 = (state_29137[(2)]);
var inst_29135 = cljs.core.async.close_BANG_.call(null,res);
var state_29137__$1 = (function (){var statearr_29139 = state_29137;
(statearr_29139[(7)] = inst_29134);

return statearr_29139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29137__$1,inst_29135);
} else {
return null;
}
}
});})(c__28758__auto___29316,res,vec__29130,v,p,job,jobs,results))
;
return ((function (switch__28646__auto__,c__28758__auto___29316,res,vec__29130,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0 = (function (){
var statearr_29143 = [null,null,null,null,null,null,null,null];
(statearr_29143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__);

(statearr_29143[(1)] = (1));

return statearr_29143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1 = (function (state_29137){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29144){if((e29144 instanceof Object)){
var ex__28650__auto__ = e29144;
var statearr_29145_29317 = state_29137;
(statearr_29145_29317[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29318 = state_29137;
state_29137 = G__29318;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = function(state_29137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1.call(this,state_29137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___29316,res,vec__29130,v,p,job,jobs,results))
})();
var state__28760__auto__ = (function (){var statearr_29146 = f__28759__auto__.call(null);
(statearr_29146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___29316);

return statearr_29146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___29316,res,vec__29130,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29147){
var vec__29148 = p__29147;
var v = cljs.core.nth.call(null,vec__29148,(0),null);
var p = cljs.core.nth.call(null,vec__29148,(1),null);
var job = vec__29148;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25713__auto___29319 = n;
var __29320 = (0);
while(true){
if((__29320 < n__25713__auto___29319)){
var G__29151_29321 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29151_29321) {
case "compute":
var c__28758__auto___29323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29320,c__28758__auto___29323,G__29151_29321,n__25713__auto___29319,jobs,results,process,async){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (__29320,c__28758__auto___29323,G__29151_29321,n__25713__auto___29319,jobs,results,process,async){
return (function (state_29164){
var state_val_29165 = (state_29164[(1)]);
if((state_val_29165 === (1))){
var state_29164__$1 = state_29164;
var statearr_29166_29324 = state_29164__$1;
(statearr_29166_29324[(2)] = null);

(statearr_29166_29324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (2))){
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29164__$1,(4),jobs);
} else {
if((state_val_29165 === (3))){
var inst_29162 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29164__$1,inst_29162);
} else {
if((state_val_29165 === (4))){
var inst_29154 = (state_29164[(2)]);
var inst_29155 = process.call(null,inst_29154);
var state_29164__$1 = state_29164;
if(cljs.core.truth_(inst_29155)){
var statearr_29167_29325 = state_29164__$1;
(statearr_29167_29325[(1)] = (5));

} else {
var statearr_29168_29326 = state_29164__$1;
(statearr_29168_29326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (5))){
var state_29164__$1 = state_29164;
var statearr_29169_29327 = state_29164__$1;
(statearr_29169_29327[(2)] = null);

(statearr_29169_29327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (6))){
var state_29164__$1 = state_29164;
var statearr_29170_29328 = state_29164__$1;
(statearr_29170_29328[(2)] = null);

(statearr_29170_29328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (7))){
var inst_29160 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29171_29329 = state_29164__$1;
(statearr_29171_29329[(2)] = inst_29160);

(statearr_29171_29329[(1)] = (3));


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
});})(__29320,c__28758__auto___29323,G__29151_29321,n__25713__auto___29319,jobs,results,process,async))
;
return ((function (__29320,switch__28646__auto__,c__28758__auto___29323,G__29151_29321,n__25713__auto___29319,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0 = (function (){
var statearr_29175 = [null,null,null,null,null,null,null];
(statearr_29175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__);

(statearr_29175[(1)] = (1));

return statearr_29175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1 = (function (state_29164){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29176){if((e29176 instanceof Object)){
var ex__28650__auto__ = e29176;
var statearr_29177_29330 = state_29164;
(statearr_29177_29330[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29331 = state_29164;
state_29164 = G__29331;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = function(state_29164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1.call(this,state_29164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__;
})()
;})(__29320,switch__28646__auto__,c__28758__auto___29323,G__29151_29321,n__25713__auto___29319,jobs,results,process,async))
})();
var state__28760__auto__ = (function (){var statearr_29178 = f__28759__auto__.call(null);
(statearr_29178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___29323);

return statearr_29178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(__29320,c__28758__auto___29323,G__29151_29321,n__25713__auto___29319,jobs,results,process,async))
);


break;
case "async":
var c__28758__auto___29332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29320,c__28758__auto___29332,G__29151_29321,n__25713__auto___29319,jobs,results,process,async){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (__29320,c__28758__auto___29332,G__29151_29321,n__25713__auto___29319,jobs,results,process,async){
return (function (state_29191){
var state_val_29192 = (state_29191[(1)]);
if((state_val_29192 === (1))){
var state_29191__$1 = state_29191;
var statearr_29193_29333 = state_29191__$1;
(statearr_29193_29333[(2)] = null);

(statearr_29193_29333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (2))){
var state_29191__$1 = state_29191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29191__$1,(4),jobs);
} else {
if((state_val_29192 === (3))){
var inst_29189 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29191__$1,inst_29189);
} else {
if((state_val_29192 === (4))){
var inst_29181 = (state_29191[(2)]);
var inst_29182 = async.call(null,inst_29181);
var state_29191__$1 = state_29191;
if(cljs.core.truth_(inst_29182)){
var statearr_29194_29334 = state_29191__$1;
(statearr_29194_29334[(1)] = (5));

} else {
var statearr_29195_29335 = state_29191__$1;
(statearr_29195_29335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (5))){
var state_29191__$1 = state_29191;
var statearr_29196_29336 = state_29191__$1;
(statearr_29196_29336[(2)] = null);

(statearr_29196_29336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (6))){
var state_29191__$1 = state_29191;
var statearr_29197_29337 = state_29191__$1;
(statearr_29197_29337[(2)] = null);

(statearr_29197_29337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (7))){
var inst_29187 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
var statearr_29198_29338 = state_29191__$1;
(statearr_29198_29338[(2)] = inst_29187);

(statearr_29198_29338[(1)] = (3));


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
});})(__29320,c__28758__auto___29332,G__29151_29321,n__25713__auto___29319,jobs,results,process,async))
;
return ((function (__29320,switch__28646__auto__,c__28758__auto___29332,G__29151_29321,n__25713__auto___29319,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0 = (function (){
var statearr_29202 = [null,null,null,null,null,null,null];
(statearr_29202[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__);

(statearr_29202[(1)] = (1));

return statearr_29202;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1 = (function (state_29191){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29203){if((e29203 instanceof Object)){
var ex__28650__auto__ = e29203;
var statearr_29204_29339 = state_29191;
(statearr_29204_29339[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29340 = state_29191;
state_29191 = G__29340;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = function(state_29191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1.call(this,state_29191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__;
})()
;})(__29320,switch__28646__auto__,c__28758__auto___29332,G__29151_29321,n__25713__auto___29319,jobs,results,process,async))
})();
var state__28760__auto__ = (function (){var statearr_29205 = f__28759__auto__.call(null);
(statearr_29205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___29332);

return statearr_29205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(__29320,c__28758__auto___29332,G__29151_29321,n__25713__auto___29319,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29341 = (__29320 + (1));
__29320 = G__29341;
continue;
} else {
}
break;
}

var c__28758__auto___29342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___29342,jobs,results,process,async){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___29342,jobs,results,process,async){
return (function (state_29227){
var state_val_29228 = (state_29227[(1)]);
if((state_val_29228 === (1))){
var state_29227__$1 = state_29227;
var statearr_29229_29343 = state_29227__$1;
(statearr_29229_29343[(2)] = null);

(statearr_29229_29343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (2))){
var state_29227__$1 = state_29227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29227__$1,(4),from);
} else {
if((state_val_29228 === (3))){
var inst_29225 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29227__$1,inst_29225);
} else {
if((state_val_29228 === (4))){
var inst_29208 = (state_29227[(7)]);
var inst_29208__$1 = (state_29227[(2)]);
var inst_29209 = (inst_29208__$1 == null);
var state_29227__$1 = (function (){var statearr_29230 = state_29227;
(statearr_29230[(7)] = inst_29208__$1);

return statearr_29230;
})();
if(cljs.core.truth_(inst_29209)){
var statearr_29231_29344 = state_29227__$1;
(statearr_29231_29344[(1)] = (5));

} else {
var statearr_29232_29345 = state_29227__$1;
(statearr_29232_29345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (5))){
var inst_29211 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29227__$1 = state_29227;
var statearr_29233_29346 = state_29227__$1;
(statearr_29233_29346[(2)] = inst_29211);

(statearr_29233_29346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (6))){
var inst_29213 = (state_29227[(8)]);
var inst_29208 = (state_29227[(7)]);
var inst_29213__$1 = cljs.core.async.chan.call(null,(1));
var inst_29214 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29215 = [inst_29208,inst_29213__$1];
var inst_29216 = (new cljs.core.PersistentVector(null,2,(5),inst_29214,inst_29215,null));
var state_29227__$1 = (function (){var statearr_29234 = state_29227;
(statearr_29234[(8)] = inst_29213__$1);

return statearr_29234;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29227__$1,(8),jobs,inst_29216);
} else {
if((state_val_29228 === (7))){
var inst_29223 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29235_29347 = state_29227__$1;
(statearr_29235_29347[(2)] = inst_29223);

(statearr_29235_29347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (8))){
var inst_29213 = (state_29227[(8)]);
var inst_29218 = (state_29227[(2)]);
var state_29227__$1 = (function (){var statearr_29236 = state_29227;
(statearr_29236[(9)] = inst_29218);

return statearr_29236;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29227__$1,(9),results,inst_29213);
} else {
if((state_val_29228 === (9))){
var inst_29220 = (state_29227[(2)]);
var state_29227__$1 = (function (){var statearr_29237 = state_29227;
(statearr_29237[(10)] = inst_29220);

return statearr_29237;
})();
var statearr_29238_29348 = state_29227__$1;
(statearr_29238_29348[(2)] = null);

(statearr_29238_29348[(1)] = (2));


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
});})(c__28758__auto___29342,jobs,results,process,async))
;
return ((function (switch__28646__auto__,c__28758__auto___29342,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0 = (function (){
var statearr_29242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__);

(statearr_29242[(1)] = (1));

return statearr_29242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1 = (function (state_29227){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29243){if((e29243 instanceof Object)){
var ex__28650__auto__ = e29243;
var statearr_29244_29349 = state_29227;
(statearr_29244_29349[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29350 = state_29227;
state_29227 = G__29350;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = function(state_29227){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1.call(this,state_29227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___29342,jobs,results,process,async))
})();
var state__28760__auto__ = (function (){var statearr_29245 = f__28759__auto__.call(null);
(statearr_29245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___29342);

return statearr_29245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___29342,jobs,results,process,async))
);


var c__28758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto__,jobs,results,process,async){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto__,jobs,results,process,async){
return (function (state_29283){
var state_val_29284 = (state_29283[(1)]);
if((state_val_29284 === (7))){
var inst_29279 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29285_29351 = state_29283__$1;
(statearr_29285_29351[(2)] = inst_29279);

(statearr_29285_29351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (20))){
var state_29283__$1 = state_29283;
var statearr_29286_29352 = state_29283__$1;
(statearr_29286_29352[(2)] = null);

(statearr_29286_29352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (1))){
var state_29283__$1 = state_29283;
var statearr_29287_29353 = state_29283__$1;
(statearr_29287_29353[(2)] = null);

(statearr_29287_29353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (4))){
var inst_29248 = (state_29283[(7)]);
var inst_29248__$1 = (state_29283[(2)]);
var inst_29249 = (inst_29248__$1 == null);
var state_29283__$1 = (function (){var statearr_29288 = state_29283;
(statearr_29288[(7)] = inst_29248__$1);

return statearr_29288;
})();
if(cljs.core.truth_(inst_29249)){
var statearr_29289_29354 = state_29283__$1;
(statearr_29289_29354[(1)] = (5));

} else {
var statearr_29290_29355 = state_29283__$1;
(statearr_29290_29355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (15))){
var inst_29261 = (state_29283[(8)]);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29283__$1,(18),to,inst_29261);
} else {
if((state_val_29284 === (21))){
var inst_29274 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29291_29356 = state_29283__$1;
(statearr_29291_29356[(2)] = inst_29274);

(statearr_29291_29356[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (13))){
var inst_29276 = (state_29283[(2)]);
var state_29283__$1 = (function (){var statearr_29292 = state_29283;
(statearr_29292[(9)] = inst_29276);

return statearr_29292;
})();
var statearr_29293_29357 = state_29283__$1;
(statearr_29293_29357[(2)] = null);

(statearr_29293_29357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (6))){
var inst_29248 = (state_29283[(7)]);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(11),inst_29248);
} else {
if((state_val_29284 === (17))){
var inst_29269 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29269)){
var statearr_29294_29358 = state_29283__$1;
(statearr_29294_29358[(1)] = (19));

} else {
var statearr_29295_29359 = state_29283__$1;
(statearr_29295_29359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (3))){
var inst_29281 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29283__$1,inst_29281);
} else {
if((state_val_29284 === (12))){
var inst_29258 = (state_29283[(10)]);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(14),inst_29258);
} else {
if((state_val_29284 === (2))){
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(4),results);
} else {
if((state_val_29284 === (19))){
var state_29283__$1 = state_29283;
var statearr_29296_29360 = state_29283__$1;
(statearr_29296_29360[(2)] = null);

(statearr_29296_29360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (11))){
var inst_29258 = (state_29283[(2)]);
var state_29283__$1 = (function (){var statearr_29297 = state_29283;
(statearr_29297[(10)] = inst_29258);

return statearr_29297;
})();
var statearr_29298_29361 = state_29283__$1;
(statearr_29298_29361[(2)] = null);

(statearr_29298_29361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (9))){
var state_29283__$1 = state_29283;
var statearr_29299_29362 = state_29283__$1;
(statearr_29299_29362[(2)] = null);

(statearr_29299_29362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (5))){
var state_29283__$1 = state_29283;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29300_29363 = state_29283__$1;
(statearr_29300_29363[(1)] = (8));

} else {
var statearr_29301_29364 = state_29283__$1;
(statearr_29301_29364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (14))){
var inst_29263 = (state_29283[(11)]);
var inst_29261 = (state_29283[(8)]);
var inst_29261__$1 = (state_29283[(2)]);
var inst_29262 = (inst_29261__$1 == null);
var inst_29263__$1 = cljs.core.not.call(null,inst_29262);
var state_29283__$1 = (function (){var statearr_29302 = state_29283;
(statearr_29302[(11)] = inst_29263__$1);

(statearr_29302[(8)] = inst_29261__$1);

return statearr_29302;
})();
if(inst_29263__$1){
var statearr_29303_29365 = state_29283__$1;
(statearr_29303_29365[(1)] = (15));

} else {
var statearr_29304_29366 = state_29283__$1;
(statearr_29304_29366[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (16))){
var inst_29263 = (state_29283[(11)]);
var state_29283__$1 = state_29283;
var statearr_29305_29367 = state_29283__$1;
(statearr_29305_29367[(2)] = inst_29263);

(statearr_29305_29367[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (10))){
var inst_29255 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29306_29368 = state_29283__$1;
(statearr_29306_29368[(2)] = inst_29255);

(statearr_29306_29368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (18))){
var inst_29266 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29307_29369 = state_29283__$1;
(statearr_29307_29369[(2)] = inst_29266);

(statearr_29307_29369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (8))){
var inst_29252 = cljs.core.async.close_BANG_.call(null,to);
var state_29283__$1 = state_29283;
var statearr_29308_29370 = state_29283__$1;
(statearr_29308_29370[(2)] = inst_29252);

(statearr_29308_29370[(1)] = (10));


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
});})(c__28758__auto__,jobs,results,process,async))
;
return ((function (switch__28646__auto__,c__28758__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0 = (function (){
var statearr_29312 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__);

(statearr_29312[(1)] = (1));

return statearr_29312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1 = (function (state_29283){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29313){if((e29313 instanceof Object)){
var ex__28650__auto__ = e29313;
var statearr_29314_29371 = state_29283;
(statearr_29314_29371[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29372 = state_29283;
state_29283 = G__29372;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = function(state_29283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1.call(this,state_29283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto__,jobs,results,process,async))
})();
var state__28760__auto__ = (function (){var statearr_29315 = f__28759__auto__.call(null);
(statearr_29315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto__);

return statearr_29315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto__,jobs,results,process,async))
);

return c__28758__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29373 = [];
var len__25873__auto___29376 = arguments.length;
var i__25874__auto___29377 = (0);
while(true){
if((i__25874__auto___29377 < len__25873__auto___29376)){
args29373.push((arguments[i__25874__auto___29377]));

var G__29378 = (i__25874__auto___29377 + (1));
i__25874__auto___29377 = G__29378;
continue;
} else {
}
break;
}

var G__29375 = args29373.length;
switch (G__29375) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29373.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29380 = [];
var len__25873__auto___29383 = arguments.length;
var i__25874__auto___29384 = (0);
while(true){
if((i__25874__auto___29384 < len__25873__auto___29383)){
args29380.push((arguments[i__25874__auto___29384]));

var G__29385 = (i__25874__auto___29384 + (1));
i__25874__auto___29384 = G__29385;
continue;
} else {
}
break;
}

var G__29382 = args29380.length;
switch (G__29382) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29380.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29387 = [];
var len__25873__auto___29440 = arguments.length;
var i__25874__auto___29441 = (0);
while(true){
if((i__25874__auto___29441 < len__25873__auto___29440)){
args29387.push((arguments[i__25874__auto___29441]));

var G__29442 = (i__25874__auto___29441 + (1));
i__25874__auto___29441 = G__29442;
continue;
} else {
}
break;
}

var G__29389 = args29387.length;
switch (G__29389) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29387.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28758__auto___29444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___29444,tc,fc){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___29444,tc,fc){
return (function (state_29415){
var state_val_29416 = (state_29415[(1)]);
if((state_val_29416 === (7))){
var inst_29411 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29417_29445 = state_29415__$1;
(statearr_29417_29445[(2)] = inst_29411);

(statearr_29417_29445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (1))){
var state_29415__$1 = state_29415;
var statearr_29418_29446 = state_29415__$1;
(statearr_29418_29446[(2)] = null);

(statearr_29418_29446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (4))){
var inst_29392 = (state_29415[(7)]);
var inst_29392__$1 = (state_29415[(2)]);
var inst_29393 = (inst_29392__$1 == null);
var state_29415__$1 = (function (){var statearr_29419 = state_29415;
(statearr_29419[(7)] = inst_29392__$1);

return statearr_29419;
})();
if(cljs.core.truth_(inst_29393)){
var statearr_29420_29447 = state_29415__$1;
(statearr_29420_29447[(1)] = (5));

} else {
var statearr_29421_29448 = state_29415__$1;
(statearr_29421_29448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (13))){
var state_29415__$1 = state_29415;
var statearr_29422_29449 = state_29415__$1;
(statearr_29422_29449[(2)] = null);

(statearr_29422_29449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (6))){
var inst_29392 = (state_29415[(7)]);
var inst_29398 = p.call(null,inst_29392);
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29398)){
var statearr_29423_29450 = state_29415__$1;
(statearr_29423_29450[(1)] = (9));

} else {
var statearr_29424_29451 = state_29415__$1;
(statearr_29424_29451[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (3))){
var inst_29413 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29415__$1,inst_29413);
} else {
if((state_val_29416 === (12))){
var state_29415__$1 = state_29415;
var statearr_29425_29452 = state_29415__$1;
(statearr_29425_29452[(2)] = null);

(statearr_29425_29452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (2))){
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29415__$1,(4),ch);
} else {
if((state_val_29416 === (11))){
var inst_29392 = (state_29415[(7)]);
var inst_29402 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29415__$1,(8),inst_29402,inst_29392);
} else {
if((state_val_29416 === (9))){
var state_29415__$1 = state_29415;
var statearr_29426_29453 = state_29415__$1;
(statearr_29426_29453[(2)] = tc);

(statearr_29426_29453[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (5))){
var inst_29395 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29396 = cljs.core.async.close_BANG_.call(null,fc);
var state_29415__$1 = (function (){var statearr_29427 = state_29415;
(statearr_29427[(8)] = inst_29395);

return statearr_29427;
})();
var statearr_29428_29454 = state_29415__$1;
(statearr_29428_29454[(2)] = inst_29396);

(statearr_29428_29454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (14))){
var inst_29409 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29429_29455 = state_29415__$1;
(statearr_29429_29455[(2)] = inst_29409);

(statearr_29429_29455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (10))){
var state_29415__$1 = state_29415;
var statearr_29430_29456 = state_29415__$1;
(statearr_29430_29456[(2)] = fc);

(statearr_29430_29456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (8))){
var inst_29404 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29404)){
var statearr_29431_29457 = state_29415__$1;
(statearr_29431_29457[(1)] = (12));

} else {
var statearr_29432_29458 = state_29415__$1;
(statearr_29432_29458[(1)] = (13));

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
});})(c__28758__auto___29444,tc,fc))
;
return ((function (switch__28646__auto__,c__28758__auto___29444,tc,fc){
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_29436 = [null,null,null,null,null,null,null,null,null];
(statearr_29436[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_29436[(1)] = (1));

return statearr_29436;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_29415){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29437){if((e29437 instanceof Object)){
var ex__28650__auto__ = e29437;
var statearr_29438_29459 = state_29415;
(statearr_29438_29459[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29460 = state_29415;
state_29415 = G__29460;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_29415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_29415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___29444,tc,fc))
})();
var state__28760__auto__ = (function (){var statearr_29439 = f__28759__auto__.call(null);
(statearr_29439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___29444);

return statearr_29439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___29444,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto__){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto__){
return (function (state_29524){
var state_val_29525 = (state_29524[(1)]);
if((state_val_29525 === (7))){
var inst_29520 = (state_29524[(2)]);
var state_29524__$1 = state_29524;
var statearr_29526_29547 = state_29524__$1;
(statearr_29526_29547[(2)] = inst_29520);

(statearr_29526_29547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (1))){
var inst_29504 = init;
var state_29524__$1 = (function (){var statearr_29527 = state_29524;
(statearr_29527[(7)] = inst_29504);

return statearr_29527;
})();
var statearr_29528_29548 = state_29524__$1;
(statearr_29528_29548[(2)] = null);

(statearr_29528_29548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (4))){
var inst_29507 = (state_29524[(8)]);
var inst_29507__$1 = (state_29524[(2)]);
var inst_29508 = (inst_29507__$1 == null);
var state_29524__$1 = (function (){var statearr_29529 = state_29524;
(statearr_29529[(8)] = inst_29507__$1);

return statearr_29529;
})();
if(cljs.core.truth_(inst_29508)){
var statearr_29530_29549 = state_29524__$1;
(statearr_29530_29549[(1)] = (5));

} else {
var statearr_29531_29550 = state_29524__$1;
(statearr_29531_29550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (6))){
var inst_29507 = (state_29524[(8)]);
var inst_29504 = (state_29524[(7)]);
var inst_29511 = (state_29524[(9)]);
var inst_29511__$1 = f.call(null,inst_29504,inst_29507);
var inst_29512 = cljs.core.reduced_QMARK_.call(null,inst_29511__$1);
var state_29524__$1 = (function (){var statearr_29532 = state_29524;
(statearr_29532[(9)] = inst_29511__$1);

return statearr_29532;
})();
if(inst_29512){
var statearr_29533_29551 = state_29524__$1;
(statearr_29533_29551[(1)] = (8));

} else {
var statearr_29534_29552 = state_29524__$1;
(statearr_29534_29552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (3))){
var inst_29522 = (state_29524[(2)]);
var state_29524__$1 = state_29524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29524__$1,inst_29522);
} else {
if((state_val_29525 === (2))){
var state_29524__$1 = state_29524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29524__$1,(4),ch);
} else {
if((state_val_29525 === (9))){
var inst_29511 = (state_29524[(9)]);
var inst_29504 = inst_29511;
var state_29524__$1 = (function (){var statearr_29535 = state_29524;
(statearr_29535[(7)] = inst_29504);

return statearr_29535;
})();
var statearr_29536_29553 = state_29524__$1;
(statearr_29536_29553[(2)] = null);

(statearr_29536_29553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (5))){
var inst_29504 = (state_29524[(7)]);
var state_29524__$1 = state_29524;
var statearr_29537_29554 = state_29524__$1;
(statearr_29537_29554[(2)] = inst_29504);

(statearr_29537_29554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (10))){
var inst_29518 = (state_29524[(2)]);
var state_29524__$1 = state_29524;
var statearr_29538_29555 = state_29524__$1;
(statearr_29538_29555[(2)] = inst_29518);

(statearr_29538_29555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (8))){
var inst_29511 = (state_29524[(9)]);
var inst_29514 = cljs.core.deref.call(null,inst_29511);
var state_29524__$1 = state_29524;
var statearr_29539_29556 = state_29524__$1;
(statearr_29539_29556[(2)] = inst_29514);

(statearr_29539_29556[(1)] = (10));


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
});})(c__28758__auto__))
;
return ((function (switch__28646__auto__,c__28758__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28647__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28647__auto____0 = (function (){
var statearr_29543 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29543[(0)] = cljs$core$async$reduce_$_state_machine__28647__auto__);

(statearr_29543[(1)] = (1));

return statearr_29543;
});
var cljs$core$async$reduce_$_state_machine__28647__auto____1 = (function (state_29524){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29544){if((e29544 instanceof Object)){
var ex__28650__auto__ = e29544;
var statearr_29545_29557 = state_29524;
(statearr_29545_29557[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29558 = state_29524;
state_29524 = G__29558;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28647__auto__ = function(state_29524){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28647__auto____1.call(this,state_29524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28647__auto____0;
cljs$core$async$reduce_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28647__auto____1;
return cljs$core$async$reduce_$_state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto__))
})();
var state__28760__auto__ = (function (){var statearr_29546 = f__28759__auto__.call(null);
(statearr_29546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto__);

return statearr_29546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto__))
);

return c__28758__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29559 = [];
var len__25873__auto___29611 = arguments.length;
var i__25874__auto___29612 = (0);
while(true){
if((i__25874__auto___29612 < len__25873__auto___29611)){
args29559.push((arguments[i__25874__auto___29612]));

var G__29613 = (i__25874__auto___29612 + (1));
i__25874__auto___29612 = G__29613;
continue;
} else {
}
break;
}

var G__29561 = args29559.length;
switch (G__29561) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29559.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto__){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto__){
return (function (state_29586){
var state_val_29587 = (state_29586[(1)]);
if((state_val_29587 === (7))){
var inst_29568 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29588_29615 = state_29586__$1;
(statearr_29588_29615[(2)] = inst_29568);

(statearr_29588_29615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (1))){
var inst_29562 = cljs.core.seq.call(null,coll);
var inst_29563 = inst_29562;
var state_29586__$1 = (function (){var statearr_29589 = state_29586;
(statearr_29589[(7)] = inst_29563);

return statearr_29589;
})();
var statearr_29590_29616 = state_29586__$1;
(statearr_29590_29616[(2)] = null);

(statearr_29590_29616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (4))){
var inst_29563 = (state_29586[(7)]);
var inst_29566 = cljs.core.first.call(null,inst_29563);
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29586__$1,(7),ch,inst_29566);
} else {
if((state_val_29587 === (13))){
var inst_29580 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29591_29617 = state_29586__$1;
(statearr_29591_29617[(2)] = inst_29580);

(statearr_29591_29617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (6))){
var inst_29571 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
if(cljs.core.truth_(inst_29571)){
var statearr_29592_29618 = state_29586__$1;
(statearr_29592_29618[(1)] = (8));

} else {
var statearr_29593_29619 = state_29586__$1;
(statearr_29593_29619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (3))){
var inst_29584 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29586__$1,inst_29584);
} else {
if((state_val_29587 === (12))){
var state_29586__$1 = state_29586;
var statearr_29594_29620 = state_29586__$1;
(statearr_29594_29620[(2)] = null);

(statearr_29594_29620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (2))){
var inst_29563 = (state_29586[(7)]);
var state_29586__$1 = state_29586;
if(cljs.core.truth_(inst_29563)){
var statearr_29595_29621 = state_29586__$1;
(statearr_29595_29621[(1)] = (4));

} else {
var statearr_29596_29622 = state_29586__$1;
(statearr_29596_29622[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (11))){
var inst_29577 = cljs.core.async.close_BANG_.call(null,ch);
var state_29586__$1 = state_29586;
var statearr_29597_29623 = state_29586__$1;
(statearr_29597_29623[(2)] = inst_29577);

(statearr_29597_29623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (9))){
var state_29586__$1 = state_29586;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29598_29624 = state_29586__$1;
(statearr_29598_29624[(1)] = (11));

} else {
var statearr_29599_29625 = state_29586__$1;
(statearr_29599_29625[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (5))){
var inst_29563 = (state_29586[(7)]);
var state_29586__$1 = state_29586;
var statearr_29600_29626 = state_29586__$1;
(statearr_29600_29626[(2)] = inst_29563);

(statearr_29600_29626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (10))){
var inst_29582 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29601_29627 = state_29586__$1;
(statearr_29601_29627[(2)] = inst_29582);

(statearr_29601_29627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (8))){
var inst_29563 = (state_29586[(7)]);
var inst_29573 = cljs.core.next.call(null,inst_29563);
var inst_29563__$1 = inst_29573;
var state_29586__$1 = (function (){var statearr_29602 = state_29586;
(statearr_29602[(7)] = inst_29563__$1);

return statearr_29602;
})();
var statearr_29603_29628 = state_29586__$1;
(statearr_29603_29628[(2)] = null);

(statearr_29603_29628[(1)] = (2));


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
});})(c__28758__auto__))
;
return ((function (switch__28646__auto__,c__28758__auto__){
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_29607 = [null,null,null,null,null,null,null,null];
(statearr_29607[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_29607[(1)] = (1));

return statearr_29607;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_29586){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29608){if((e29608 instanceof Object)){
var ex__28650__auto__ = e29608;
var statearr_29609_29629 = state_29586;
(statearr_29609_29629[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29630 = state_29586;
state_29586 = G__29630;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_29586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_29586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto__))
})();
var state__28760__auto__ = (function (){var statearr_29610 = f__28759__auto__.call(null);
(statearr_29610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto__);

return statearr_29610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto__))
);

return c__28758__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25461__auto__ = (((_ == null))?null:_);
var m__25462__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,_);
} else {
var m__25462__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25462__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,ch);
} else {
var m__25462__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m);
} else {
var m__25462__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29856 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29856 = (function (mult,ch,cs,meta29857){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29857 = meta29857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29858,meta29857__$1){
var self__ = this;
var _29858__$1 = this;
return (new cljs.core.async.t_cljs$core$async29856(self__.mult,self__.ch,self__.cs,meta29857__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29858){
var self__ = this;
var _29858__$1 = this;
return self__.meta29857;
});})(cs))
;

cljs.core.async.t_cljs$core$async29856.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29856.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29856.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29856.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29856.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29856.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29856.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29857","meta29857",-1717552196,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29856";

cljs.core.async.t_cljs$core$async29856.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async29856");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29856 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29856(mult__$1,ch__$1,cs__$1,meta29857){
return (new cljs.core.async.t_cljs$core$async29856(mult__$1,ch__$1,cs__$1,meta29857));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29856(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28758__auto___30081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___30081,cs,m,dchan,dctr,done){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___30081,cs,m,dchan,dctr,done){
return (function (state_29993){
var state_val_29994 = (state_29993[(1)]);
if((state_val_29994 === (7))){
var inst_29989 = (state_29993[(2)]);
var state_29993__$1 = state_29993;
var statearr_29995_30082 = state_29993__$1;
(statearr_29995_30082[(2)] = inst_29989);

(statearr_29995_30082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (20))){
var inst_29892 = (state_29993[(7)]);
var inst_29904 = cljs.core.first.call(null,inst_29892);
var inst_29905 = cljs.core.nth.call(null,inst_29904,(0),null);
var inst_29906 = cljs.core.nth.call(null,inst_29904,(1),null);
var state_29993__$1 = (function (){var statearr_29996 = state_29993;
(statearr_29996[(8)] = inst_29905);

return statearr_29996;
})();
if(cljs.core.truth_(inst_29906)){
var statearr_29997_30083 = state_29993__$1;
(statearr_29997_30083[(1)] = (22));

} else {
var statearr_29998_30084 = state_29993__$1;
(statearr_29998_30084[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (27))){
var inst_29861 = (state_29993[(9)]);
var inst_29941 = (state_29993[(10)]);
var inst_29934 = (state_29993[(11)]);
var inst_29936 = (state_29993[(12)]);
var inst_29941__$1 = cljs.core._nth.call(null,inst_29934,inst_29936);
var inst_29942 = cljs.core.async.put_BANG_.call(null,inst_29941__$1,inst_29861,done);
var state_29993__$1 = (function (){var statearr_29999 = state_29993;
(statearr_29999[(10)] = inst_29941__$1);

return statearr_29999;
})();
if(cljs.core.truth_(inst_29942)){
var statearr_30000_30085 = state_29993__$1;
(statearr_30000_30085[(1)] = (30));

} else {
var statearr_30001_30086 = state_29993__$1;
(statearr_30001_30086[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (1))){
var state_29993__$1 = state_29993;
var statearr_30002_30087 = state_29993__$1;
(statearr_30002_30087[(2)] = null);

(statearr_30002_30087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (24))){
var inst_29892 = (state_29993[(7)]);
var inst_29911 = (state_29993[(2)]);
var inst_29912 = cljs.core.next.call(null,inst_29892);
var inst_29870 = inst_29912;
var inst_29871 = null;
var inst_29872 = (0);
var inst_29873 = (0);
var state_29993__$1 = (function (){var statearr_30003 = state_29993;
(statearr_30003[(13)] = inst_29870);

(statearr_30003[(14)] = inst_29871);

(statearr_30003[(15)] = inst_29873);

(statearr_30003[(16)] = inst_29911);

(statearr_30003[(17)] = inst_29872);

return statearr_30003;
})();
var statearr_30004_30088 = state_29993__$1;
(statearr_30004_30088[(2)] = null);

(statearr_30004_30088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (39))){
var state_29993__$1 = state_29993;
var statearr_30008_30089 = state_29993__$1;
(statearr_30008_30089[(2)] = null);

(statearr_30008_30089[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (4))){
var inst_29861 = (state_29993[(9)]);
var inst_29861__$1 = (state_29993[(2)]);
var inst_29862 = (inst_29861__$1 == null);
var state_29993__$1 = (function (){var statearr_30009 = state_29993;
(statearr_30009[(9)] = inst_29861__$1);

return statearr_30009;
})();
if(cljs.core.truth_(inst_29862)){
var statearr_30010_30090 = state_29993__$1;
(statearr_30010_30090[(1)] = (5));

} else {
var statearr_30011_30091 = state_29993__$1;
(statearr_30011_30091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (15))){
var inst_29870 = (state_29993[(13)]);
var inst_29871 = (state_29993[(14)]);
var inst_29873 = (state_29993[(15)]);
var inst_29872 = (state_29993[(17)]);
var inst_29888 = (state_29993[(2)]);
var inst_29889 = (inst_29873 + (1));
var tmp30005 = inst_29870;
var tmp30006 = inst_29871;
var tmp30007 = inst_29872;
var inst_29870__$1 = tmp30005;
var inst_29871__$1 = tmp30006;
var inst_29872__$1 = tmp30007;
var inst_29873__$1 = inst_29889;
var state_29993__$1 = (function (){var statearr_30012 = state_29993;
(statearr_30012[(18)] = inst_29888);

(statearr_30012[(13)] = inst_29870__$1);

(statearr_30012[(14)] = inst_29871__$1);

(statearr_30012[(15)] = inst_29873__$1);

(statearr_30012[(17)] = inst_29872__$1);

return statearr_30012;
})();
var statearr_30013_30092 = state_29993__$1;
(statearr_30013_30092[(2)] = null);

(statearr_30013_30092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (21))){
var inst_29915 = (state_29993[(2)]);
var state_29993__$1 = state_29993;
var statearr_30017_30093 = state_29993__$1;
(statearr_30017_30093[(2)] = inst_29915);

(statearr_30017_30093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (31))){
var inst_29941 = (state_29993[(10)]);
var inst_29945 = done.call(null,null);
var inst_29946 = cljs.core.async.untap_STAR_.call(null,m,inst_29941);
var state_29993__$1 = (function (){var statearr_30018 = state_29993;
(statearr_30018[(19)] = inst_29945);

return statearr_30018;
})();
var statearr_30019_30094 = state_29993__$1;
(statearr_30019_30094[(2)] = inst_29946);

(statearr_30019_30094[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (32))){
var inst_29935 = (state_29993[(20)]);
var inst_29934 = (state_29993[(11)]);
var inst_29933 = (state_29993[(21)]);
var inst_29936 = (state_29993[(12)]);
var inst_29948 = (state_29993[(2)]);
var inst_29949 = (inst_29936 + (1));
var tmp30014 = inst_29935;
var tmp30015 = inst_29934;
var tmp30016 = inst_29933;
var inst_29933__$1 = tmp30016;
var inst_29934__$1 = tmp30015;
var inst_29935__$1 = tmp30014;
var inst_29936__$1 = inst_29949;
var state_29993__$1 = (function (){var statearr_30020 = state_29993;
(statearr_30020[(20)] = inst_29935__$1);

(statearr_30020[(11)] = inst_29934__$1);

(statearr_30020[(22)] = inst_29948);

(statearr_30020[(21)] = inst_29933__$1);

(statearr_30020[(12)] = inst_29936__$1);

return statearr_30020;
})();
var statearr_30021_30095 = state_29993__$1;
(statearr_30021_30095[(2)] = null);

(statearr_30021_30095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (40))){
var inst_29961 = (state_29993[(23)]);
var inst_29965 = done.call(null,null);
var inst_29966 = cljs.core.async.untap_STAR_.call(null,m,inst_29961);
var state_29993__$1 = (function (){var statearr_30022 = state_29993;
(statearr_30022[(24)] = inst_29965);

return statearr_30022;
})();
var statearr_30023_30096 = state_29993__$1;
(statearr_30023_30096[(2)] = inst_29966);

(statearr_30023_30096[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (33))){
var inst_29952 = (state_29993[(25)]);
var inst_29954 = cljs.core.chunked_seq_QMARK_.call(null,inst_29952);
var state_29993__$1 = state_29993;
if(inst_29954){
var statearr_30024_30097 = state_29993__$1;
(statearr_30024_30097[(1)] = (36));

} else {
var statearr_30025_30098 = state_29993__$1;
(statearr_30025_30098[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (13))){
var inst_29882 = (state_29993[(26)]);
var inst_29885 = cljs.core.async.close_BANG_.call(null,inst_29882);
var state_29993__$1 = state_29993;
var statearr_30026_30099 = state_29993__$1;
(statearr_30026_30099[(2)] = inst_29885);

(statearr_30026_30099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (22))){
var inst_29905 = (state_29993[(8)]);
var inst_29908 = cljs.core.async.close_BANG_.call(null,inst_29905);
var state_29993__$1 = state_29993;
var statearr_30027_30100 = state_29993__$1;
(statearr_30027_30100[(2)] = inst_29908);

(statearr_30027_30100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (36))){
var inst_29952 = (state_29993[(25)]);
var inst_29956 = cljs.core.chunk_first.call(null,inst_29952);
var inst_29957 = cljs.core.chunk_rest.call(null,inst_29952);
var inst_29958 = cljs.core.count.call(null,inst_29956);
var inst_29933 = inst_29957;
var inst_29934 = inst_29956;
var inst_29935 = inst_29958;
var inst_29936 = (0);
var state_29993__$1 = (function (){var statearr_30028 = state_29993;
(statearr_30028[(20)] = inst_29935);

(statearr_30028[(11)] = inst_29934);

(statearr_30028[(21)] = inst_29933);

(statearr_30028[(12)] = inst_29936);

return statearr_30028;
})();
var statearr_30029_30101 = state_29993__$1;
(statearr_30029_30101[(2)] = null);

(statearr_30029_30101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (41))){
var inst_29952 = (state_29993[(25)]);
var inst_29968 = (state_29993[(2)]);
var inst_29969 = cljs.core.next.call(null,inst_29952);
var inst_29933 = inst_29969;
var inst_29934 = null;
var inst_29935 = (0);
var inst_29936 = (0);
var state_29993__$1 = (function (){var statearr_30030 = state_29993;
(statearr_30030[(20)] = inst_29935);

(statearr_30030[(27)] = inst_29968);

(statearr_30030[(11)] = inst_29934);

(statearr_30030[(21)] = inst_29933);

(statearr_30030[(12)] = inst_29936);

return statearr_30030;
})();
var statearr_30031_30102 = state_29993__$1;
(statearr_30031_30102[(2)] = null);

(statearr_30031_30102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (43))){
var state_29993__$1 = state_29993;
var statearr_30032_30103 = state_29993__$1;
(statearr_30032_30103[(2)] = null);

(statearr_30032_30103[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (29))){
var inst_29977 = (state_29993[(2)]);
var state_29993__$1 = state_29993;
var statearr_30033_30104 = state_29993__$1;
(statearr_30033_30104[(2)] = inst_29977);

(statearr_30033_30104[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (44))){
var inst_29986 = (state_29993[(2)]);
var state_29993__$1 = (function (){var statearr_30034 = state_29993;
(statearr_30034[(28)] = inst_29986);

return statearr_30034;
})();
var statearr_30035_30105 = state_29993__$1;
(statearr_30035_30105[(2)] = null);

(statearr_30035_30105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (6))){
var inst_29925 = (state_29993[(29)]);
var inst_29924 = cljs.core.deref.call(null,cs);
var inst_29925__$1 = cljs.core.keys.call(null,inst_29924);
var inst_29926 = cljs.core.count.call(null,inst_29925__$1);
var inst_29927 = cljs.core.reset_BANG_.call(null,dctr,inst_29926);
var inst_29932 = cljs.core.seq.call(null,inst_29925__$1);
var inst_29933 = inst_29932;
var inst_29934 = null;
var inst_29935 = (0);
var inst_29936 = (0);
var state_29993__$1 = (function (){var statearr_30036 = state_29993;
(statearr_30036[(30)] = inst_29927);

(statearr_30036[(20)] = inst_29935);

(statearr_30036[(11)] = inst_29934);

(statearr_30036[(29)] = inst_29925__$1);

(statearr_30036[(21)] = inst_29933);

(statearr_30036[(12)] = inst_29936);

return statearr_30036;
})();
var statearr_30037_30106 = state_29993__$1;
(statearr_30037_30106[(2)] = null);

(statearr_30037_30106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (28))){
var inst_29933 = (state_29993[(21)]);
var inst_29952 = (state_29993[(25)]);
var inst_29952__$1 = cljs.core.seq.call(null,inst_29933);
var state_29993__$1 = (function (){var statearr_30038 = state_29993;
(statearr_30038[(25)] = inst_29952__$1);

return statearr_30038;
})();
if(inst_29952__$1){
var statearr_30039_30107 = state_29993__$1;
(statearr_30039_30107[(1)] = (33));

} else {
var statearr_30040_30108 = state_29993__$1;
(statearr_30040_30108[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (25))){
var inst_29935 = (state_29993[(20)]);
var inst_29936 = (state_29993[(12)]);
var inst_29938 = (inst_29936 < inst_29935);
var inst_29939 = inst_29938;
var state_29993__$1 = state_29993;
if(cljs.core.truth_(inst_29939)){
var statearr_30041_30109 = state_29993__$1;
(statearr_30041_30109[(1)] = (27));

} else {
var statearr_30042_30110 = state_29993__$1;
(statearr_30042_30110[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (34))){
var state_29993__$1 = state_29993;
var statearr_30043_30111 = state_29993__$1;
(statearr_30043_30111[(2)] = null);

(statearr_30043_30111[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (17))){
var state_29993__$1 = state_29993;
var statearr_30044_30112 = state_29993__$1;
(statearr_30044_30112[(2)] = null);

(statearr_30044_30112[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (3))){
var inst_29991 = (state_29993[(2)]);
var state_29993__$1 = state_29993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29993__$1,inst_29991);
} else {
if((state_val_29994 === (12))){
var inst_29920 = (state_29993[(2)]);
var state_29993__$1 = state_29993;
var statearr_30045_30113 = state_29993__$1;
(statearr_30045_30113[(2)] = inst_29920);

(statearr_30045_30113[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (2))){
var state_29993__$1 = state_29993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29993__$1,(4),ch);
} else {
if((state_val_29994 === (23))){
var state_29993__$1 = state_29993;
var statearr_30046_30114 = state_29993__$1;
(statearr_30046_30114[(2)] = null);

(statearr_30046_30114[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (35))){
var inst_29975 = (state_29993[(2)]);
var state_29993__$1 = state_29993;
var statearr_30047_30115 = state_29993__$1;
(statearr_30047_30115[(2)] = inst_29975);

(statearr_30047_30115[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (19))){
var inst_29892 = (state_29993[(7)]);
var inst_29896 = cljs.core.chunk_first.call(null,inst_29892);
var inst_29897 = cljs.core.chunk_rest.call(null,inst_29892);
var inst_29898 = cljs.core.count.call(null,inst_29896);
var inst_29870 = inst_29897;
var inst_29871 = inst_29896;
var inst_29872 = inst_29898;
var inst_29873 = (0);
var state_29993__$1 = (function (){var statearr_30048 = state_29993;
(statearr_30048[(13)] = inst_29870);

(statearr_30048[(14)] = inst_29871);

(statearr_30048[(15)] = inst_29873);

(statearr_30048[(17)] = inst_29872);

return statearr_30048;
})();
var statearr_30049_30116 = state_29993__$1;
(statearr_30049_30116[(2)] = null);

(statearr_30049_30116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (11))){
var inst_29870 = (state_29993[(13)]);
var inst_29892 = (state_29993[(7)]);
var inst_29892__$1 = cljs.core.seq.call(null,inst_29870);
var state_29993__$1 = (function (){var statearr_30050 = state_29993;
(statearr_30050[(7)] = inst_29892__$1);

return statearr_30050;
})();
if(inst_29892__$1){
var statearr_30051_30117 = state_29993__$1;
(statearr_30051_30117[(1)] = (16));

} else {
var statearr_30052_30118 = state_29993__$1;
(statearr_30052_30118[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (9))){
var inst_29922 = (state_29993[(2)]);
var state_29993__$1 = state_29993;
var statearr_30053_30119 = state_29993__$1;
(statearr_30053_30119[(2)] = inst_29922);

(statearr_30053_30119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (5))){
var inst_29868 = cljs.core.deref.call(null,cs);
var inst_29869 = cljs.core.seq.call(null,inst_29868);
var inst_29870 = inst_29869;
var inst_29871 = null;
var inst_29872 = (0);
var inst_29873 = (0);
var state_29993__$1 = (function (){var statearr_30054 = state_29993;
(statearr_30054[(13)] = inst_29870);

(statearr_30054[(14)] = inst_29871);

(statearr_30054[(15)] = inst_29873);

(statearr_30054[(17)] = inst_29872);

return statearr_30054;
})();
var statearr_30055_30120 = state_29993__$1;
(statearr_30055_30120[(2)] = null);

(statearr_30055_30120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (14))){
var state_29993__$1 = state_29993;
var statearr_30056_30121 = state_29993__$1;
(statearr_30056_30121[(2)] = null);

(statearr_30056_30121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (45))){
var inst_29983 = (state_29993[(2)]);
var state_29993__$1 = state_29993;
var statearr_30057_30122 = state_29993__$1;
(statearr_30057_30122[(2)] = inst_29983);

(statearr_30057_30122[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (26))){
var inst_29925 = (state_29993[(29)]);
var inst_29979 = (state_29993[(2)]);
var inst_29980 = cljs.core.seq.call(null,inst_29925);
var state_29993__$1 = (function (){var statearr_30058 = state_29993;
(statearr_30058[(31)] = inst_29979);

return statearr_30058;
})();
if(inst_29980){
var statearr_30059_30123 = state_29993__$1;
(statearr_30059_30123[(1)] = (42));

} else {
var statearr_30060_30124 = state_29993__$1;
(statearr_30060_30124[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (16))){
var inst_29892 = (state_29993[(7)]);
var inst_29894 = cljs.core.chunked_seq_QMARK_.call(null,inst_29892);
var state_29993__$1 = state_29993;
if(inst_29894){
var statearr_30061_30125 = state_29993__$1;
(statearr_30061_30125[(1)] = (19));

} else {
var statearr_30062_30126 = state_29993__$1;
(statearr_30062_30126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (38))){
var inst_29972 = (state_29993[(2)]);
var state_29993__$1 = state_29993;
var statearr_30063_30127 = state_29993__$1;
(statearr_30063_30127[(2)] = inst_29972);

(statearr_30063_30127[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (30))){
var state_29993__$1 = state_29993;
var statearr_30064_30128 = state_29993__$1;
(statearr_30064_30128[(2)] = null);

(statearr_30064_30128[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (10))){
var inst_29871 = (state_29993[(14)]);
var inst_29873 = (state_29993[(15)]);
var inst_29881 = cljs.core._nth.call(null,inst_29871,inst_29873);
var inst_29882 = cljs.core.nth.call(null,inst_29881,(0),null);
var inst_29883 = cljs.core.nth.call(null,inst_29881,(1),null);
var state_29993__$1 = (function (){var statearr_30065 = state_29993;
(statearr_30065[(26)] = inst_29882);

return statearr_30065;
})();
if(cljs.core.truth_(inst_29883)){
var statearr_30066_30129 = state_29993__$1;
(statearr_30066_30129[(1)] = (13));

} else {
var statearr_30067_30130 = state_29993__$1;
(statearr_30067_30130[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (18))){
var inst_29918 = (state_29993[(2)]);
var state_29993__$1 = state_29993;
var statearr_30068_30131 = state_29993__$1;
(statearr_30068_30131[(2)] = inst_29918);

(statearr_30068_30131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (42))){
var state_29993__$1 = state_29993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29993__$1,(45),dchan);
} else {
if((state_val_29994 === (37))){
var inst_29861 = (state_29993[(9)]);
var inst_29952 = (state_29993[(25)]);
var inst_29961 = (state_29993[(23)]);
var inst_29961__$1 = cljs.core.first.call(null,inst_29952);
var inst_29962 = cljs.core.async.put_BANG_.call(null,inst_29961__$1,inst_29861,done);
var state_29993__$1 = (function (){var statearr_30069 = state_29993;
(statearr_30069[(23)] = inst_29961__$1);

return statearr_30069;
})();
if(cljs.core.truth_(inst_29962)){
var statearr_30070_30132 = state_29993__$1;
(statearr_30070_30132[(1)] = (39));

} else {
var statearr_30071_30133 = state_29993__$1;
(statearr_30071_30133[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29994 === (8))){
var inst_29873 = (state_29993[(15)]);
var inst_29872 = (state_29993[(17)]);
var inst_29875 = (inst_29873 < inst_29872);
var inst_29876 = inst_29875;
var state_29993__$1 = state_29993;
if(cljs.core.truth_(inst_29876)){
var statearr_30072_30134 = state_29993__$1;
(statearr_30072_30134[(1)] = (10));

} else {
var statearr_30073_30135 = state_29993__$1;
(statearr_30073_30135[(1)] = (11));

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
});})(c__28758__auto___30081,cs,m,dchan,dctr,done))
;
return ((function (switch__28646__auto__,c__28758__auto___30081,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28647__auto__ = null;
var cljs$core$async$mult_$_state_machine__28647__auto____0 = (function (){
var statearr_30077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30077[(0)] = cljs$core$async$mult_$_state_machine__28647__auto__);

(statearr_30077[(1)] = (1));

return statearr_30077;
});
var cljs$core$async$mult_$_state_machine__28647__auto____1 = (function (state_29993){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30078){if((e30078 instanceof Object)){
var ex__28650__auto__ = e30078;
var statearr_30079_30136 = state_29993;
(statearr_30079_30136[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30137 = state_29993;
state_29993 = G__30137;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28647__auto__ = function(state_29993){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28647__auto____1.call(this,state_29993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28647__auto____0;
cljs$core$async$mult_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28647__auto____1;
return cljs$core$async$mult_$_state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___30081,cs,m,dchan,dctr,done))
})();
var state__28760__auto__ = (function (){var statearr_30080 = f__28759__auto__.call(null);
(statearr_30080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___30081);

return statearr_30080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___30081,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30138 = [];
var len__25873__auto___30141 = arguments.length;
var i__25874__auto___30142 = (0);
while(true){
if((i__25874__auto___30142 < len__25873__auto___30141)){
args30138.push((arguments[i__25874__auto___30142]));

var G__30143 = (i__25874__auto___30142 + (1));
i__25874__auto___30142 = G__30143;
continue;
} else {
}
break;
}

var G__30140 = args30138.length;
switch (G__30140) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30138.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,ch);
} else {
var m__25462__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,ch);
} else {
var m__25462__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m);
} else {
var m__25462__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,state_map);
} else {
var m__25462__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,mode);
} else {
var m__25462__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25880__auto__ = [];
var len__25873__auto___30155 = arguments.length;
var i__25874__auto___30156 = (0);
while(true){
if((i__25874__auto___30156 < len__25873__auto___30155)){
args__25880__auto__.push((arguments[i__25874__auto___30156]));

var G__30157 = (i__25874__auto___30156 + (1));
i__25874__auto___30156 = G__30157;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((3) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25881__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30149){
var map__30150 = p__30149;
var map__30150__$1 = ((((!((map__30150 == null)))?((((map__30150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30150):map__30150);
var opts = map__30150__$1;
var statearr_30152_30158 = state;
(statearr_30152_30158[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30150,map__30150__$1,opts){
return (function (val){
var statearr_30153_30159 = state;
(statearr_30153_30159[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30150,map__30150__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30154_30160 = state;
(statearr_30154_30160[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30145){
var G__30146 = cljs.core.first.call(null,seq30145);
var seq30145__$1 = cljs.core.next.call(null,seq30145);
var G__30147 = cljs.core.first.call(null,seq30145__$1);
var seq30145__$2 = cljs.core.next.call(null,seq30145__$1);
var G__30148 = cljs.core.first.call(null,seq30145__$2);
var seq30145__$3 = cljs.core.next.call(null,seq30145__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30146,G__30147,G__30148,seq30145__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30326 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30327){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30327 = meta30327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30328,meta30327__$1){
var self__ = this;
var _30328__$1 = this;
return (new cljs.core.async.t_cljs$core$async30326(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30327__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30328){
var self__ = this;
var _30328__$1 = this;
return self__.meta30327;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30326.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30326.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30327","meta30327",-386192469,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30326";

cljs.core.async.t_cljs$core$async30326.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async30326");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30326 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30326(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30327){
return (new cljs.core.async.t_cljs$core$async30326(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30327));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30326(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28758__auto___30491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___30491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___30491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30428){
var state_val_30429 = (state_30428[(1)]);
if((state_val_30429 === (7))){
var inst_30344 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
var statearr_30430_30492 = state_30428__$1;
(statearr_30430_30492[(2)] = inst_30344);

(statearr_30430_30492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (20))){
var inst_30356 = (state_30428[(7)]);
var state_30428__$1 = state_30428;
var statearr_30431_30493 = state_30428__$1;
(statearr_30431_30493[(2)] = inst_30356);

(statearr_30431_30493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (27))){
var state_30428__$1 = state_30428;
var statearr_30432_30494 = state_30428__$1;
(statearr_30432_30494[(2)] = null);

(statearr_30432_30494[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (1))){
var inst_30332 = (state_30428[(8)]);
var inst_30332__$1 = calc_state.call(null);
var inst_30334 = (inst_30332__$1 == null);
var inst_30335 = cljs.core.not.call(null,inst_30334);
var state_30428__$1 = (function (){var statearr_30433 = state_30428;
(statearr_30433[(8)] = inst_30332__$1);

return statearr_30433;
})();
if(inst_30335){
var statearr_30434_30495 = state_30428__$1;
(statearr_30434_30495[(1)] = (2));

} else {
var statearr_30435_30496 = state_30428__$1;
(statearr_30435_30496[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (24))){
var inst_30388 = (state_30428[(9)]);
var inst_30379 = (state_30428[(10)]);
var inst_30402 = (state_30428[(11)]);
var inst_30402__$1 = inst_30379.call(null,inst_30388);
var state_30428__$1 = (function (){var statearr_30436 = state_30428;
(statearr_30436[(11)] = inst_30402__$1);

return statearr_30436;
})();
if(cljs.core.truth_(inst_30402__$1)){
var statearr_30437_30497 = state_30428__$1;
(statearr_30437_30497[(1)] = (29));

} else {
var statearr_30438_30498 = state_30428__$1;
(statearr_30438_30498[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (4))){
var inst_30347 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
if(cljs.core.truth_(inst_30347)){
var statearr_30439_30499 = state_30428__$1;
(statearr_30439_30499[(1)] = (8));

} else {
var statearr_30440_30500 = state_30428__$1;
(statearr_30440_30500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (15))){
var inst_30373 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
if(cljs.core.truth_(inst_30373)){
var statearr_30441_30501 = state_30428__$1;
(statearr_30441_30501[(1)] = (19));

} else {
var statearr_30442_30502 = state_30428__$1;
(statearr_30442_30502[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (21))){
var inst_30378 = (state_30428[(12)]);
var inst_30378__$1 = (state_30428[(2)]);
var inst_30379 = cljs.core.get.call(null,inst_30378__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30380 = cljs.core.get.call(null,inst_30378__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30381 = cljs.core.get.call(null,inst_30378__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30428__$1 = (function (){var statearr_30443 = state_30428;
(statearr_30443[(13)] = inst_30380);

(statearr_30443[(12)] = inst_30378__$1);

(statearr_30443[(10)] = inst_30379);

return statearr_30443;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30428__$1,(22),inst_30381);
} else {
if((state_val_30429 === (31))){
var inst_30410 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
if(cljs.core.truth_(inst_30410)){
var statearr_30444_30503 = state_30428__$1;
(statearr_30444_30503[(1)] = (32));

} else {
var statearr_30445_30504 = state_30428__$1;
(statearr_30445_30504[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (32))){
var inst_30387 = (state_30428[(14)]);
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30428__$1,(35),out,inst_30387);
} else {
if((state_val_30429 === (33))){
var inst_30378 = (state_30428[(12)]);
var inst_30356 = inst_30378;
var state_30428__$1 = (function (){var statearr_30446 = state_30428;
(statearr_30446[(7)] = inst_30356);

return statearr_30446;
})();
var statearr_30447_30505 = state_30428__$1;
(statearr_30447_30505[(2)] = null);

(statearr_30447_30505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (13))){
var inst_30356 = (state_30428[(7)]);
var inst_30363 = inst_30356.cljs$lang$protocol_mask$partition0$;
var inst_30364 = (inst_30363 & (64));
var inst_30365 = inst_30356.cljs$core$ISeq$;
var inst_30366 = (inst_30364) || (inst_30365);
var state_30428__$1 = state_30428;
if(cljs.core.truth_(inst_30366)){
var statearr_30448_30506 = state_30428__$1;
(statearr_30448_30506[(1)] = (16));

} else {
var statearr_30449_30507 = state_30428__$1;
(statearr_30449_30507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (22))){
var inst_30387 = (state_30428[(14)]);
var inst_30388 = (state_30428[(9)]);
var inst_30386 = (state_30428[(2)]);
var inst_30387__$1 = cljs.core.nth.call(null,inst_30386,(0),null);
var inst_30388__$1 = cljs.core.nth.call(null,inst_30386,(1),null);
var inst_30389 = (inst_30387__$1 == null);
var inst_30390 = cljs.core._EQ_.call(null,inst_30388__$1,change);
var inst_30391 = (inst_30389) || (inst_30390);
var state_30428__$1 = (function (){var statearr_30450 = state_30428;
(statearr_30450[(14)] = inst_30387__$1);

(statearr_30450[(9)] = inst_30388__$1);

return statearr_30450;
})();
if(cljs.core.truth_(inst_30391)){
var statearr_30451_30508 = state_30428__$1;
(statearr_30451_30508[(1)] = (23));

} else {
var statearr_30452_30509 = state_30428__$1;
(statearr_30452_30509[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (36))){
var inst_30378 = (state_30428[(12)]);
var inst_30356 = inst_30378;
var state_30428__$1 = (function (){var statearr_30453 = state_30428;
(statearr_30453[(7)] = inst_30356);

return statearr_30453;
})();
var statearr_30454_30510 = state_30428__$1;
(statearr_30454_30510[(2)] = null);

(statearr_30454_30510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (29))){
var inst_30402 = (state_30428[(11)]);
var state_30428__$1 = state_30428;
var statearr_30455_30511 = state_30428__$1;
(statearr_30455_30511[(2)] = inst_30402);

(statearr_30455_30511[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (6))){
var state_30428__$1 = state_30428;
var statearr_30456_30512 = state_30428__$1;
(statearr_30456_30512[(2)] = false);

(statearr_30456_30512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (28))){
var inst_30398 = (state_30428[(2)]);
var inst_30399 = calc_state.call(null);
var inst_30356 = inst_30399;
var state_30428__$1 = (function (){var statearr_30457 = state_30428;
(statearr_30457[(15)] = inst_30398);

(statearr_30457[(7)] = inst_30356);

return statearr_30457;
})();
var statearr_30458_30513 = state_30428__$1;
(statearr_30458_30513[(2)] = null);

(statearr_30458_30513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (25))){
var inst_30424 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
var statearr_30459_30514 = state_30428__$1;
(statearr_30459_30514[(2)] = inst_30424);

(statearr_30459_30514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (34))){
var inst_30422 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
var statearr_30460_30515 = state_30428__$1;
(statearr_30460_30515[(2)] = inst_30422);

(statearr_30460_30515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (17))){
var state_30428__$1 = state_30428;
var statearr_30461_30516 = state_30428__$1;
(statearr_30461_30516[(2)] = false);

(statearr_30461_30516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (3))){
var state_30428__$1 = state_30428;
var statearr_30462_30517 = state_30428__$1;
(statearr_30462_30517[(2)] = false);

(statearr_30462_30517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (12))){
var inst_30426 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30428__$1,inst_30426);
} else {
if((state_val_30429 === (2))){
var inst_30332 = (state_30428[(8)]);
var inst_30337 = inst_30332.cljs$lang$protocol_mask$partition0$;
var inst_30338 = (inst_30337 & (64));
var inst_30339 = inst_30332.cljs$core$ISeq$;
var inst_30340 = (inst_30338) || (inst_30339);
var state_30428__$1 = state_30428;
if(cljs.core.truth_(inst_30340)){
var statearr_30463_30518 = state_30428__$1;
(statearr_30463_30518[(1)] = (5));

} else {
var statearr_30464_30519 = state_30428__$1;
(statearr_30464_30519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (23))){
var inst_30387 = (state_30428[(14)]);
var inst_30393 = (inst_30387 == null);
var state_30428__$1 = state_30428;
if(cljs.core.truth_(inst_30393)){
var statearr_30465_30520 = state_30428__$1;
(statearr_30465_30520[(1)] = (26));

} else {
var statearr_30466_30521 = state_30428__$1;
(statearr_30466_30521[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (35))){
var inst_30413 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
if(cljs.core.truth_(inst_30413)){
var statearr_30467_30522 = state_30428__$1;
(statearr_30467_30522[(1)] = (36));

} else {
var statearr_30468_30523 = state_30428__$1;
(statearr_30468_30523[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (19))){
var inst_30356 = (state_30428[(7)]);
var inst_30375 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30356);
var state_30428__$1 = state_30428;
var statearr_30469_30524 = state_30428__$1;
(statearr_30469_30524[(2)] = inst_30375);

(statearr_30469_30524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (11))){
var inst_30356 = (state_30428[(7)]);
var inst_30360 = (inst_30356 == null);
var inst_30361 = cljs.core.not.call(null,inst_30360);
var state_30428__$1 = state_30428;
if(inst_30361){
var statearr_30470_30525 = state_30428__$1;
(statearr_30470_30525[(1)] = (13));

} else {
var statearr_30471_30526 = state_30428__$1;
(statearr_30471_30526[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (9))){
var inst_30332 = (state_30428[(8)]);
var state_30428__$1 = state_30428;
var statearr_30472_30527 = state_30428__$1;
(statearr_30472_30527[(2)] = inst_30332);

(statearr_30472_30527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (5))){
var state_30428__$1 = state_30428;
var statearr_30473_30528 = state_30428__$1;
(statearr_30473_30528[(2)] = true);

(statearr_30473_30528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (14))){
var state_30428__$1 = state_30428;
var statearr_30474_30529 = state_30428__$1;
(statearr_30474_30529[(2)] = false);

(statearr_30474_30529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (26))){
var inst_30388 = (state_30428[(9)]);
var inst_30395 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30388);
var state_30428__$1 = state_30428;
var statearr_30475_30530 = state_30428__$1;
(statearr_30475_30530[(2)] = inst_30395);

(statearr_30475_30530[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (16))){
var state_30428__$1 = state_30428;
var statearr_30476_30531 = state_30428__$1;
(statearr_30476_30531[(2)] = true);

(statearr_30476_30531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (38))){
var inst_30418 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
var statearr_30477_30532 = state_30428__$1;
(statearr_30477_30532[(2)] = inst_30418);

(statearr_30477_30532[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (30))){
var inst_30380 = (state_30428[(13)]);
var inst_30388 = (state_30428[(9)]);
var inst_30379 = (state_30428[(10)]);
var inst_30405 = cljs.core.empty_QMARK_.call(null,inst_30379);
var inst_30406 = inst_30380.call(null,inst_30388);
var inst_30407 = cljs.core.not.call(null,inst_30406);
var inst_30408 = (inst_30405) && (inst_30407);
var state_30428__$1 = state_30428;
var statearr_30478_30533 = state_30428__$1;
(statearr_30478_30533[(2)] = inst_30408);

(statearr_30478_30533[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (10))){
var inst_30332 = (state_30428[(8)]);
var inst_30352 = (state_30428[(2)]);
var inst_30353 = cljs.core.get.call(null,inst_30352,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30354 = cljs.core.get.call(null,inst_30352,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30355 = cljs.core.get.call(null,inst_30352,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30356 = inst_30332;
var state_30428__$1 = (function (){var statearr_30479 = state_30428;
(statearr_30479[(7)] = inst_30356);

(statearr_30479[(16)] = inst_30353);

(statearr_30479[(17)] = inst_30354);

(statearr_30479[(18)] = inst_30355);

return statearr_30479;
})();
var statearr_30480_30534 = state_30428__$1;
(statearr_30480_30534[(2)] = null);

(statearr_30480_30534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (18))){
var inst_30370 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
var statearr_30481_30535 = state_30428__$1;
(statearr_30481_30535[(2)] = inst_30370);

(statearr_30481_30535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (37))){
var state_30428__$1 = state_30428;
var statearr_30482_30536 = state_30428__$1;
(statearr_30482_30536[(2)] = null);

(statearr_30482_30536[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (8))){
var inst_30332 = (state_30428[(8)]);
var inst_30349 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30332);
var state_30428__$1 = state_30428;
var statearr_30483_30537 = state_30428__$1;
(statearr_30483_30537[(2)] = inst_30349);

(statearr_30483_30537[(1)] = (10));


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
});})(c__28758__auto___30491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28646__auto__,c__28758__auto___30491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28647__auto__ = null;
var cljs$core$async$mix_$_state_machine__28647__auto____0 = (function (){
var statearr_30487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30487[(0)] = cljs$core$async$mix_$_state_machine__28647__auto__);

(statearr_30487[(1)] = (1));

return statearr_30487;
});
var cljs$core$async$mix_$_state_machine__28647__auto____1 = (function (state_30428){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_30428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30488){if((e30488 instanceof Object)){
var ex__28650__auto__ = e30488;
var statearr_30489_30538 = state_30428;
(statearr_30489_30538[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30539 = state_30428;
state_30428 = G__30539;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28647__auto__ = function(state_30428){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28647__auto____1.call(this,state_30428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28647__auto____0;
cljs$core$async$mix_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28647__auto____1;
return cljs$core$async$mix_$_state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___30491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28760__auto__ = (function (){var statearr_30490 = f__28759__auto__.call(null);
(statearr_30490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___30491);

return statearr_30490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___30491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25461__auto__ = (((p == null))?null:p);
var m__25462__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25462__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25461__auto__ = (((p == null))?null:p);
var m__25462__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,p,v,ch);
} else {
var m__25462__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30540 = [];
var len__25873__auto___30543 = arguments.length;
var i__25874__auto___30544 = (0);
while(true){
if((i__25874__auto___30544 < len__25873__auto___30543)){
args30540.push((arguments[i__25874__auto___30544]));

var G__30545 = (i__25874__auto___30544 + (1));
i__25874__auto___30544 = G__30545;
continue;
} else {
}
break;
}

var G__30542 = args30540.length;
switch (G__30542) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30540.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25461__auto__ = (((p == null))?null:p);
var m__25462__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,p);
} else {
var m__25462__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25461__auto__ = (((p == null))?null:p);
var m__25462__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,p,v);
} else {
var m__25462__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30548 = [];
var len__25873__auto___30673 = arguments.length;
var i__25874__auto___30674 = (0);
while(true){
if((i__25874__auto___30674 < len__25873__auto___30673)){
args30548.push((arguments[i__25874__auto___30674]));

var G__30675 = (i__25874__auto___30674 + (1));
i__25874__auto___30674 = G__30675;
continue;
} else {
}
break;
}

var G__30550 = args30548.length;
switch (G__30550) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30548.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24798__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24798__auto__,mults){
return (function (p1__30547_SHARP_){
if(cljs.core.truth_(p1__30547_SHARP_.call(null,topic))){
return p1__30547_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30547_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24798__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30551 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30552){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30552 = meta30552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30553,meta30552__$1){
var self__ = this;
var _30553__$1 = this;
return (new cljs.core.async.t_cljs$core$async30551(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30552__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30553){
var self__ = this;
var _30553__$1 = this;
return self__.meta30552;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30551.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30551.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30551.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30551.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30551.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30551.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30551.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30552","meta30552",-528722502,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30551";

cljs.core.async.t_cljs$core$async30551.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async30551");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30551 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30551(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30552){
return (new cljs.core.async.t_cljs$core$async30551(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30552));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30551(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28758__auto___30677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___30677,mults,ensure_mult,p){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___30677,mults,ensure_mult,p){
return (function (state_30625){
var state_val_30626 = (state_30625[(1)]);
if((state_val_30626 === (7))){
var inst_30621 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
var statearr_30627_30678 = state_30625__$1;
(statearr_30627_30678[(2)] = inst_30621);

(statearr_30627_30678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (20))){
var state_30625__$1 = state_30625;
var statearr_30628_30679 = state_30625__$1;
(statearr_30628_30679[(2)] = null);

(statearr_30628_30679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (1))){
var state_30625__$1 = state_30625;
var statearr_30629_30680 = state_30625__$1;
(statearr_30629_30680[(2)] = null);

(statearr_30629_30680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (24))){
var inst_30604 = (state_30625[(7)]);
var inst_30613 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30604);
var state_30625__$1 = state_30625;
var statearr_30630_30681 = state_30625__$1;
(statearr_30630_30681[(2)] = inst_30613);

(statearr_30630_30681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (4))){
var inst_30556 = (state_30625[(8)]);
var inst_30556__$1 = (state_30625[(2)]);
var inst_30557 = (inst_30556__$1 == null);
var state_30625__$1 = (function (){var statearr_30631 = state_30625;
(statearr_30631[(8)] = inst_30556__$1);

return statearr_30631;
})();
if(cljs.core.truth_(inst_30557)){
var statearr_30632_30682 = state_30625__$1;
(statearr_30632_30682[(1)] = (5));

} else {
var statearr_30633_30683 = state_30625__$1;
(statearr_30633_30683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (15))){
var inst_30598 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
var statearr_30634_30684 = state_30625__$1;
(statearr_30634_30684[(2)] = inst_30598);

(statearr_30634_30684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (21))){
var inst_30618 = (state_30625[(2)]);
var state_30625__$1 = (function (){var statearr_30635 = state_30625;
(statearr_30635[(9)] = inst_30618);

return statearr_30635;
})();
var statearr_30636_30685 = state_30625__$1;
(statearr_30636_30685[(2)] = null);

(statearr_30636_30685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (13))){
var inst_30580 = (state_30625[(10)]);
var inst_30582 = cljs.core.chunked_seq_QMARK_.call(null,inst_30580);
var state_30625__$1 = state_30625;
if(inst_30582){
var statearr_30637_30686 = state_30625__$1;
(statearr_30637_30686[(1)] = (16));

} else {
var statearr_30638_30687 = state_30625__$1;
(statearr_30638_30687[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (22))){
var inst_30610 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
if(cljs.core.truth_(inst_30610)){
var statearr_30639_30688 = state_30625__$1;
(statearr_30639_30688[(1)] = (23));

} else {
var statearr_30640_30689 = state_30625__$1;
(statearr_30640_30689[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (6))){
var inst_30604 = (state_30625[(7)]);
var inst_30556 = (state_30625[(8)]);
var inst_30606 = (state_30625[(11)]);
var inst_30604__$1 = topic_fn.call(null,inst_30556);
var inst_30605 = cljs.core.deref.call(null,mults);
var inst_30606__$1 = cljs.core.get.call(null,inst_30605,inst_30604__$1);
var state_30625__$1 = (function (){var statearr_30641 = state_30625;
(statearr_30641[(7)] = inst_30604__$1);

(statearr_30641[(11)] = inst_30606__$1);

return statearr_30641;
})();
if(cljs.core.truth_(inst_30606__$1)){
var statearr_30642_30690 = state_30625__$1;
(statearr_30642_30690[(1)] = (19));

} else {
var statearr_30643_30691 = state_30625__$1;
(statearr_30643_30691[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (25))){
var inst_30615 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
var statearr_30644_30692 = state_30625__$1;
(statearr_30644_30692[(2)] = inst_30615);

(statearr_30644_30692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (17))){
var inst_30580 = (state_30625[(10)]);
var inst_30589 = cljs.core.first.call(null,inst_30580);
var inst_30590 = cljs.core.async.muxch_STAR_.call(null,inst_30589);
var inst_30591 = cljs.core.async.close_BANG_.call(null,inst_30590);
var inst_30592 = cljs.core.next.call(null,inst_30580);
var inst_30566 = inst_30592;
var inst_30567 = null;
var inst_30568 = (0);
var inst_30569 = (0);
var state_30625__$1 = (function (){var statearr_30645 = state_30625;
(statearr_30645[(12)] = inst_30567);

(statearr_30645[(13)] = inst_30566);

(statearr_30645[(14)] = inst_30591);

(statearr_30645[(15)] = inst_30569);

(statearr_30645[(16)] = inst_30568);

return statearr_30645;
})();
var statearr_30646_30693 = state_30625__$1;
(statearr_30646_30693[(2)] = null);

(statearr_30646_30693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (3))){
var inst_30623 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30625__$1,inst_30623);
} else {
if((state_val_30626 === (12))){
var inst_30600 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
var statearr_30647_30694 = state_30625__$1;
(statearr_30647_30694[(2)] = inst_30600);

(statearr_30647_30694[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (2))){
var state_30625__$1 = state_30625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30625__$1,(4),ch);
} else {
if((state_val_30626 === (23))){
var state_30625__$1 = state_30625;
var statearr_30648_30695 = state_30625__$1;
(statearr_30648_30695[(2)] = null);

(statearr_30648_30695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (19))){
var inst_30556 = (state_30625[(8)]);
var inst_30606 = (state_30625[(11)]);
var inst_30608 = cljs.core.async.muxch_STAR_.call(null,inst_30606);
var state_30625__$1 = state_30625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30625__$1,(22),inst_30608,inst_30556);
} else {
if((state_val_30626 === (11))){
var inst_30566 = (state_30625[(13)]);
var inst_30580 = (state_30625[(10)]);
var inst_30580__$1 = cljs.core.seq.call(null,inst_30566);
var state_30625__$1 = (function (){var statearr_30649 = state_30625;
(statearr_30649[(10)] = inst_30580__$1);

return statearr_30649;
})();
if(inst_30580__$1){
var statearr_30650_30696 = state_30625__$1;
(statearr_30650_30696[(1)] = (13));

} else {
var statearr_30651_30697 = state_30625__$1;
(statearr_30651_30697[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (9))){
var inst_30602 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
var statearr_30652_30698 = state_30625__$1;
(statearr_30652_30698[(2)] = inst_30602);

(statearr_30652_30698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (5))){
var inst_30563 = cljs.core.deref.call(null,mults);
var inst_30564 = cljs.core.vals.call(null,inst_30563);
var inst_30565 = cljs.core.seq.call(null,inst_30564);
var inst_30566 = inst_30565;
var inst_30567 = null;
var inst_30568 = (0);
var inst_30569 = (0);
var state_30625__$1 = (function (){var statearr_30653 = state_30625;
(statearr_30653[(12)] = inst_30567);

(statearr_30653[(13)] = inst_30566);

(statearr_30653[(15)] = inst_30569);

(statearr_30653[(16)] = inst_30568);

return statearr_30653;
})();
var statearr_30654_30699 = state_30625__$1;
(statearr_30654_30699[(2)] = null);

(statearr_30654_30699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (14))){
var state_30625__$1 = state_30625;
var statearr_30658_30700 = state_30625__$1;
(statearr_30658_30700[(2)] = null);

(statearr_30658_30700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (16))){
var inst_30580 = (state_30625[(10)]);
var inst_30584 = cljs.core.chunk_first.call(null,inst_30580);
var inst_30585 = cljs.core.chunk_rest.call(null,inst_30580);
var inst_30586 = cljs.core.count.call(null,inst_30584);
var inst_30566 = inst_30585;
var inst_30567 = inst_30584;
var inst_30568 = inst_30586;
var inst_30569 = (0);
var state_30625__$1 = (function (){var statearr_30659 = state_30625;
(statearr_30659[(12)] = inst_30567);

(statearr_30659[(13)] = inst_30566);

(statearr_30659[(15)] = inst_30569);

(statearr_30659[(16)] = inst_30568);

return statearr_30659;
})();
var statearr_30660_30701 = state_30625__$1;
(statearr_30660_30701[(2)] = null);

(statearr_30660_30701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (10))){
var inst_30567 = (state_30625[(12)]);
var inst_30566 = (state_30625[(13)]);
var inst_30569 = (state_30625[(15)]);
var inst_30568 = (state_30625[(16)]);
var inst_30574 = cljs.core._nth.call(null,inst_30567,inst_30569);
var inst_30575 = cljs.core.async.muxch_STAR_.call(null,inst_30574);
var inst_30576 = cljs.core.async.close_BANG_.call(null,inst_30575);
var inst_30577 = (inst_30569 + (1));
var tmp30655 = inst_30567;
var tmp30656 = inst_30566;
var tmp30657 = inst_30568;
var inst_30566__$1 = tmp30656;
var inst_30567__$1 = tmp30655;
var inst_30568__$1 = tmp30657;
var inst_30569__$1 = inst_30577;
var state_30625__$1 = (function (){var statearr_30661 = state_30625;
(statearr_30661[(12)] = inst_30567__$1);

(statearr_30661[(13)] = inst_30566__$1);

(statearr_30661[(15)] = inst_30569__$1);

(statearr_30661[(17)] = inst_30576);

(statearr_30661[(16)] = inst_30568__$1);

return statearr_30661;
})();
var statearr_30662_30702 = state_30625__$1;
(statearr_30662_30702[(2)] = null);

(statearr_30662_30702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (18))){
var inst_30595 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
var statearr_30663_30703 = state_30625__$1;
(statearr_30663_30703[(2)] = inst_30595);

(statearr_30663_30703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (8))){
var inst_30569 = (state_30625[(15)]);
var inst_30568 = (state_30625[(16)]);
var inst_30571 = (inst_30569 < inst_30568);
var inst_30572 = inst_30571;
var state_30625__$1 = state_30625;
if(cljs.core.truth_(inst_30572)){
var statearr_30664_30704 = state_30625__$1;
(statearr_30664_30704[(1)] = (10));

} else {
var statearr_30665_30705 = state_30625__$1;
(statearr_30665_30705[(1)] = (11));

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
});})(c__28758__auto___30677,mults,ensure_mult,p))
;
return ((function (switch__28646__auto__,c__28758__auto___30677,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_30669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30669[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_30669[(1)] = (1));

return statearr_30669;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_30625){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_30625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30670){if((e30670 instanceof Object)){
var ex__28650__auto__ = e30670;
var statearr_30671_30706 = state_30625;
(statearr_30671_30706[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30707 = state_30625;
state_30625 = G__30707;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_30625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_30625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___30677,mults,ensure_mult,p))
})();
var state__28760__auto__ = (function (){var statearr_30672 = f__28759__auto__.call(null);
(statearr_30672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___30677);

return statearr_30672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___30677,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30708 = [];
var len__25873__auto___30711 = arguments.length;
var i__25874__auto___30712 = (0);
while(true){
if((i__25874__auto___30712 < len__25873__auto___30711)){
args30708.push((arguments[i__25874__auto___30712]));

var G__30713 = (i__25874__auto___30712 + (1));
i__25874__auto___30712 = G__30713;
continue;
} else {
}
break;
}

var G__30710 = args30708.length;
switch (G__30710) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30708.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30715 = [];
var len__25873__auto___30718 = arguments.length;
var i__25874__auto___30719 = (0);
while(true){
if((i__25874__auto___30719 < len__25873__auto___30718)){
args30715.push((arguments[i__25874__auto___30719]));

var G__30720 = (i__25874__auto___30719 + (1));
i__25874__auto___30719 = G__30720;
continue;
} else {
}
break;
}

var G__30717 = args30715.length;
switch (G__30717) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30715.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30722 = [];
var len__25873__auto___30793 = arguments.length;
var i__25874__auto___30794 = (0);
while(true){
if((i__25874__auto___30794 < len__25873__auto___30793)){
args30722.push((arguments[i__25874__auto___30794]));

var G__30795 = (i__25874__auto___30794 + (1));
i__25874__auto___30794 = G__30795;
continue;
} else {
}
break;
}

var G__30724 = args30722.length;
switch (G__30724) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30722.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28758__auto___30797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___30797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___30797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30763){
var state_val_30764 = (state_30763[(1)]);
if((state_val_30764 === (7))){
var state_30763__$1 = state_30763;
var statearr_30765_30798 = state_30763__$1;
(statearr_30765_30798[(2)] = null);

(statearr_30765_30798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (1))){
var state_30763__$1 = state_30763;
var statearr_30766_30799 = state_30763__$1;
(statearr_30766_30799[(2)] = null);

(statearr_30766_30799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (4))){
var inst_30727 = (state_30763[(7)]);
var inst_30729 = (inst_30727 < cnt);
var state_30763__$1 = state_30763;
if(cljs.core.truth_(inst_30729)){
var statearr_30767_30800 = state_30763__$1;
(statearr_30767_30800[(1)] = (6));

} else {
var statearr_30768_30801 = state_30763__$1;
(statearr_30768_30801[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (15))){
var inst_30759 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30769_30802 = state_30763__$1;
(statearr_30769_30802[(2)] = inst_30759);

(statearr_30769_30802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (13))){
var inst_30752 = cljs.core.async.close_BANG_.call(null,out);
var state_30763__$1 = state_30763;
var statearr_30770_30803 = state_30763__$1;
(statearr_30770_30803[(2)] = inst_30752);

(statearr_30770_30803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (6))){
var state_30763__$1 = state_30763;
var statearr_30771_30804 = state_30763__$1;
(statearr_30771_30804[(2)] = null);

(statearr_30771_30804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (3))){
var inst_30761 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30763__$1,inst_30761);
} else {
if((state_val_30764 === (12))){
var inst_30749 = (state_30763[(8)]);
var inst_30749__$1 = (state_30763[(2)]);
var inst_30750 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30749__$1);
var state_30763__$1 = (function (){var statearr_30772 = state_30763;
(statearr_30772[(8)] = inst_30749__$1);

return statearr_30772;
})();
if(cljs.core.truth_(inst_30750)){
var statearr_30773_30805 = state_30763__$1;
(statearr_30773_30805[(1)] = (13));

} else {
var statearr_30774_30806 = state_30763__$1;
(statearr_30774_30806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (2))){
var inst_30726 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30727 = (0);
var state_30763__$1 = (function (){var statearr_30775 = state_30763;
(statearr_30775[(9)] = inst_30726);

(statearr_30775[(7)] = inst_30727);

return statearr_30775;
})();
var statearr_30776_30807 = state_30763__$1;
(statearr_30776_30807[(2)] = null);

(statearr_30776_30807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (11))){
var inst_30727 = (state_30763[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30763,(10),Object,null,(9));
var inst_30736 = chs__$1.call(null,inst_30727);
var inst_30737 = done.call(null,inst_30727);
var inst_30738 = cljs.core.async.take_BANG_.call(null,inst_30736,inst_30737);
var state_30763__$1 = state_30763;
var statearr_30777_30808 = state_30763__$1;
(statearr_30777_30808[(2)] = inst_30738);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30763__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (9))){
var inst_30727 = (state_30763[(7)]);
var inst_30740 = (state_30763[(2)]);
var inst_30741 = (inst_30727 + (1));
var inst_30727__$1 = inst_30741;
var state_30763__$1 = (function (){var statearr_30778 = state_30763;
(statearr_30778[(10)] = inst_30740);

(statearr_30778[(7)] = inst_30727__$1);

return statearr_30778;
})();
var statearr_30779_30809 = state_30763__$1;
(statearr_30779_30809[(2)] = null);

(statearr_30779_30809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (5))){
var inst_30747 = (state_30763[(2)]);
var state_30763__$1 = (function (){var statearr_30780 = state_30763;
(statearr_30780[(11)] = inst_30747);

return statearr_30780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30763__$1,(12),dchan);
} else {
if((state_val_30764 === (14))){
var inst_30749 = (state_30763[(8)]);
var inst_30754 = cljs.core.apply.call(null,f,inst_30749);
var state_30763__$1 = state_30763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30763__$1,(16),out,inst_30754);
} else {
if((state_val_30764 === (16))){
var inst_30756 = (state_30763[(2)]);
var state_30763__$1 = (function (){var statearr_30781 = state_30763;
(statearr_30781[(12)] = inst_30756);

return statearr_30781;
})();
var statearr_30782_30810 = state_30763__$1;
(statearr_30782_30810[(2)] = null);

(statearr_30782_30810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (10))){
var inst_30731 = (state_30763[(2)]);
var inst_30732 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30763__$1 = (function (){var statearr_30783 = state_30763;
(statearr_30783[(13)] = inst_30731);

return statearr_30783;
})();
var statearr_30784_30811 = state_30763__$1;
(statearr_30784_30811[(2)] = inst_30732);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30763__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (8))){
var inst_30745 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30785_30812 = state_30763__$1;
(statearr_30785_30812[(2)] = inst_30745);

(statearr_30785_30812[(1)] = (5));


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
});})(c__28758__auto___30797,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28646__auto__,c__28758__auto___30797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_30789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30789[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_30789[(1)] = (1));

return statearr_30789;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_30763){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_30763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30790){if((e30790 instanceof Object)){
var ex__28650__auto__ = e30790;
var statearr_30791_30813 = state_30763;
(statearr_30791_30813[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30814 = state_30763;
state_30763 = G__30814;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_30763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_30763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___30797,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28760__auto__ = (function (){var statearr_30792 = f__28759__auto__.call(null);
(statearr_30792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___30797);

return statearr_30792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___30797,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30816 = [];
var len__25873__auto___30874 = arguments.length;
var i__25874__auto___30875 = (0);
while(true){
if((i__25874__auto___30875 < len__25873__auto___30874)){
args30816.push((arguments[i__25874__auto___30875]));

var G__30876 = (i__25874__auto___30875 + (1));
i__25874__auto___30875 = G__30876;
continue;
} else {
}
break;
}

var G__30818 = args30816.length;
switch (G__30818) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30816.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28758__auto___30878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___30878,out){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___30878,out){
return (function (state_30850){
var state_val_30851 = (state_30850[(1)]);
if((state_val_30851 === (7))){
var inst_30830 = (state_30850[(7)]);
var inst_30829 = (state_30850[(8)]);
var inst_30829__$1 = (state_30850[(2)]);
var inst_30830__$1 = cljs.core.nth.call(null,inst_30829__$1,(0),null);
var inst_30831 = cljs.core.nth.call(null,inst_30829__$1,(1),null);
var inst_30832 = (inst_30830__$1 == null);
var state_30850__$1 = (function (){var statearr_30852 = state_30850;
(statearr_30852[(7)] = inst_30830__$1);

(statearr_30852[(8)] = inst_30829__$1);

(statearr_30852[(9)] = inst_30831);

return statearr_30852;
})();
if(cljs.core.truth_(inst_30832)){
var statearr_30853_30879 = state_30850__$1;
(statearr_30853_30879[(1)] = (8));

} else {
var statearr_30854_30880 = state_30850__$1;
(statearr_30854_30880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (1))){
var inst_30819 = cljs.core.vec.call(null,chs);
var inst_30820 = inst_30819;
var state_30850__$1 = (function (){var statearr_30855 = state_30850;
(statearr_30855[(10)] = inst_30820);

return statearr_30855;
})();
var statearr_30856_30881 = state_30850__$1;
(statearr_30856_30881[(2)] = null);

(statearr_30856_30881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (4))){
var inst_30820 = (state_30850[(10)]);
var state_30850__$1 = state_30850;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30850__$1,(7),inst_30820);
} else {
if((state_val_30851 === (6))){
var inst_30846 = (state_30850[(2)]);
var state_30850__$1 = state_30850;
var statearr_30857_30882 = state_30850__$1;
(statearr_30857_30882[(2)] = inst_30846);

(statearr_30857_30882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (3))){
var inst_30848 = (state_30850[(2)]);
var state_30850__$1 = state_30850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30850__$1,inst_30848);
} else {
if((state_val_30851 === (2))){
var inst_30820 = (state_30850[(10)]);
var inst_30822 = cljs.core.count.call(null,inst_30820);
var inst_30823 = (inst_30822 > (0));
var state_30850__$1 = state_30850;
if(cljs.core.truth_(inst_30823)){
var statearr_30859_30883 = state_30850__$1;
(statearr_30859_30883[(1)] = (4));

} else {
var statearr_30860_30884 = state_30850__$1;
(statearr_30860_30884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (11))){
var inst_30820 = (state_30850[(10)]);
var inst_30839 = (state_30850[(2)]);
var tmp30858 = inst_30820;
var inst_30820__$1 = tmp30858;
var state_30850__$1 = (function (){var statearr_30861 = state_30850;
(statearr_30861[(11)] = inst_30839);

(statearr_30861[(10)] = inst_30820__$1);

return statearr_30861;
})();
var statearr_30862_30885 = state_30850__$1;
(statearr_30862_30885[(2)] = null);

(statearr_30862_30885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (9))){
var inst_30830 = (state_30850[(7)]);
var state_30850__$1 = state_30850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30850__$1,(11),out,inst_30830);
} else {
if((state_val_30851 === (5))){
var inst_30844 = cljs.core.async.close_BANG_.call(null,out);
var state_30850__$1 = state_30850;
var statearr_30863_30886 = state_30850__$1;
(statearr_30863_30886[(2)] = inst_30844);

(statearr_30863_30886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (10))){
var inst_30842 = (state_30850[(2)]);
var state_30850__$1 = state_30850;
var statearr_30864_30887 = state_30850__$1;
(statearr_30864_30887[(2)] = inst_30842);

(statearr_30864_30887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (8))){
var inst_30830 = (state_30850[(7)]);
var inst_30829 = (state_30850[(8)]);
var inst_30831 = (state_30850[(9)]);
var inst_30820 = (state_30850[(10)]);
var inst_30834 = (function (){var cs = inst_30820;
var vec__30825 = inst_30829;
var v = inst_30830;
var c = inst_30831;
return ((function (cs,vec__30825,v,c,inst_30830,inst_30829,inst_30831,inst_30820,state_val_30851,c__28758__auto___30878,out){
return (function (p1__30815_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30815_SHARP_);
});
;})(cs,vec__30825,v,c,inst_30830,inst_30829,inst_30831,inst_30820,state_val_30851,c__28758__auto___30878,out))
})();
var inst_30835 = cljs.core.filterv.call(null,inst_30834,inst_30820);
var inst_30820__$1 = inst_30835;
var state_30850__$1 = (function (){var statearr_30865 = state_30850;
(statearr_30865[(10)] = inst_30820__$1);

return statearr_30865;
})();
var statearr_30866_30888 = state_30850__$1;
(statearr_30866_30888[(2)] = null);

(statearr_30866_30888[(1)] = (2));


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
});})(c__28758__auto___30878,out))
;
return ((function (switch__28646__auto__,c__28758__auto___30878,out){
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_30870 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30870[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_30870[(1)] = (1));

return statearr_30870;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_30850){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_30850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30871){if((e30871 instanceof Object)){
var ex__28650__auto__ = e30871;
var statearr_30872_30889 = state_30850;
(statearr_30872_30889[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30890 = state_30850;
state_30850 = G__30890;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_30850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_30850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___30878,out))
})();
var state__28760__auto__ = (function (){var statearr_30873 = f__28759__auto__.call(null);
(statearr_30873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___30878);

return statearr_30873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___30878,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30891 = [];
var len__25873__auto___30940 = arguments.length;
var i__25874__auto___30941 = (0);
while(true){
if((i__25874__auto___30941 < len__25873__auto___30940)){
args30891.push((arguments[i__25874__auto___30941]));

var G__30942 = (i__25874__auto___30941 + (1));
i__25874__auto___30941 = G__30942;
continue;
} else {
}
break;
}

var G__30893 = args30891.length;
switch (G__30893) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30891.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28758__auto___30944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___30944,out){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___30944,out){
return (function (state_30917){
var state_val_30918 = (state_30917[(1)]);
if((state_val_30918 === (7))){
var inst_30899 = (state_30917[(7)]);
var inst_30899__$1 = (state_30917[(2)]);
var inst_30900 = (inst_30899__$1 == null);
var inst_30901 = cljs.core.not.call(null,inst_30900);
var state_30917__$1 = (function (){var statearr_30919 = state_30917;
(statearr_30919[(7)] = inst_30899__$1);

return statearr_30919;
})();
if(inst_30901){
var statearr_30920_30945 = state_30917__$1;
(statearr_30920_30945[(1)] = (8));

} else {
var statearr_30921_30946 = state_30917__$1;
(statearr_30921_30946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (1))){
var inst_30894 = (0);
var state_30917__$1 = (function (){var statearr_30922 = state_30917;
(statearr_30922[(8)] = inst_30894);

return statearr_30922;
})();
var statearr_30923_30947 = state_30917__$1;
(statearr_30923_30947[(2)] = null);

(statearr_30923_30947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (4))){
var state_30917__$1 = state_30917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30917__$1,(7),ch);
} else {
if((state_val_30918 === (6))){
var inst_30912 = (state_30917[(2)]);
var state_30917__$1 = state_30917;
var statearr_30924_30948 = state_30917__$1;
(statearr_30924_30948[(2)] = inst_30912);

(statearr_30924_30948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (3))){
var inst_30914 = (state_30917[(2)]);
var inst_30915 = cljs.core.async.close_BANG_.call(null,out);
var state_30917__$1 = (function (){var statearr_30925 = state_30917;
(statearr_30925[(9)] = inst_30914);

return statearr_30925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30917__$1,inst_30915);
} else {
if((state_val_30918 === (2))){
var inst_30894 = (state_30917[(8)]);
var inst_30896 = (inst_30894 < n);
var state_30917__$1 = state_30917;
if(cljs.core.truth_(inst_30896)){
var statearr_30926_30949 = state_30917__$1;
(statearr_30926_30949[(1)] = (4));

} else {
var statearr_30927_30950 = state_30917__$1;
(statearr_30927_30950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (11))){
var inst_30894 = (state_30917[(8)]);
var inst_30904 = (state_30917[(2)]);
var inst_30905 = (inst_30894 + (1));
var inst_30894__$1 = inst_30905;
var state_30917__$1 = (function (){var statearr_30928 = state_30917;
(statearr_30928[(10)] = inst_30904);

(statearr_30928[(8)] = inst_30894__$1);

return statearr_30928;
})();
var statearr_30929_30951 = state_30917__$1;
(statearr_30929_30951[(2)] = null);

(statearr_30929_30951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (9))){
var state_30917__$1 = state_30917;
var statearr_30930_30952 = state_30917__$1;
(statearr_30930_30952[(2)] = null);

(statearr_30930_30952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (5))){
var state_30917__$1 = state_30917;
var statearr_30931_30953 = state_30917__$1;
(statearr_30931_30953[(2)] = null);

(statearr_30931_30953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (10))){
var inst_30909 = (state_30917[(2)]);
var state_30917__$1 = state_30917;
var statearr_30932_30954 = state_30917__$1;
(statearr_30932_30954[(2)] = inst_30909);

(statearr_30932_30954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (8))){
var inst_30899 = (state_30917[(7)]);
var state_30917__$1 = state_30917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30917__$1,(11),out,inst_30899);
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
});})(c__28758__auto___30944,out))
;
return ((function (switch__28646__auto__,c__28758__auto___30944,out){
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_30936 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30936[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_30936[(1)] = (1));

return statearr_30936;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_30917){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_30917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30937){if((e30937 instanceof Object)){
var ex__28650__auto__ = e30937;
var statearr_30938_30955 = state_30917;
(statearr_30938_30955[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30956 = state_30917;
state_30917 = G__30956;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_30917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_30917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___30944,out))
})();
var state__28760__auto__ = (function (){var statearr_30939 = f__28759__auto__.call(null);
(statearr_30939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___30944);

return statearr_30939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___30944,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30964 = (function (map_LT_,f,ch,meta30965){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30965 = meta30965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30966,meta30965__$1){
var self__ = this;
var _30966__$1 = this;
return (new cljs.core.async.t_cljs$core$async30964(self__.map_LT_,self__.f,self__.ch,meta30965__$1));
});

cljs.core.async.t_cljs$core$async30964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30966){
var self__ = this;
var _30966__$1 = this;
return self__.meta30965;
});

cljs.core.async.t_cljs$core$async30964.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30964.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30964.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30967 = (function (map_LT_,f,ch,meta30965,_,fn1,meta30968){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30965 = meta30965;
this._ = _;
this.fn1 = fn1;
this.meta30968 = meta30968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30969,meta30968__$1){
var self__ = this;
var _30969__$1 = this;
return (new cljs.core.async.t_cljs$core$async30967(self__.map_LT_,self__.f,self__.ch,self__.meta30965,self__._,self__.fn1,meta30968__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30969){
var self__ = this;
var _30969__$1 = this;
return self__.meta30968;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30967.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30967.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30957_SHARP_){
return f1.call(null,(((p1__30957_SHARP_ == null))?null:self__.f.call(null,p1__30957_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30967.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30965","meta30965",-704694236,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30964","cljs.core.async/t_cljs$core$async30964",-471352933,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30968","meta30968",1800168624,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30967";

cljs.core.async.t_cljs$core$async30967.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async30967");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30967 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30967(map_LT___$1,f__$1,ch__$1,meta30965__$1,___$2,fn1__$1,meta30968){
return (new cljs.core.async.t_cljs$core$async30967(map_LT___$1,f__$1,ch__$1,meta30965__$1,___$2,fn1__$1,meta30968));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30967(self__.map_LT_,self__.f,self__.ch,self__.meta30965,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24786__auto__ = ret;
if(cljs.core.truth_(and__24786__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24786__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30964.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30965","meta30965",-704694236,null)], null);
});

cljs.core.async.t_cljs$core$async30964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30964";

cljs.core.async.t_cljs$core$async30964.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async30964");
});

cljs.core.async.__GT_t_cljs$core$async30964 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30964(map_LT___$1,f__$1,ch__$1,meta30965){
return (new cljs.core.async.t_cljs$core$async30964(map_LT___$1,f__$1,ch__$1,meta30965));
});

}

return (new cljs.core.async.t_cljs$core$async30964(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30973 = (function (map_GT_,f,ch,meta30974){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30974 = meta30974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30975,meta30974__$1){
var self__ = this;
var _30975__$1 = this;
return (new cljs.core.async.t_cljs$core$async30973(self__.map_GT_,self__.f,self__.ch,meta30974__$1));
});

cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30975){
var self__ = this;
var _30975__$1 = this;
return self__.meta30974;
});

cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30974","meta30974",-1776820658,null)], null);
});

cljs.core.async.t_cljs$core$async30973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30973";

cljs.core.async.t_cljs$core$async30973.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async30973");
});

cljs.core.async.__GT_t_cljs$core$async30973 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30973(map_GT___$1,f__$1,ch__$1,meta30974){
return (new cljs.core.async.t_cljs$core$async30973(map_GT___$1,f__$1,ch__$1,meta30974));
});

}

return (new cljs.core.async.t_cljs$core$async30973(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30979 = (function (filter_GT_,p,ch,meta30980){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30980 = meta30980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30981,meta30980__$1){
var self__ = this;
var _30981__$1 = this;
return (new cljs.core.async.t_cljs$core$async30979(self__.filter_GT_,self__.p,self__.ch,meta30980__$1));
});

cljs.core.async.t_cljs$core$async30979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30981){
var self__ = this;
var _30981__$1 = this;
return self__.meta30980;
});

cljs.core.async.t_cljs$core$async30979.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30979.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30979.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30979.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30980","meta30980",-1045653182,null)], null);
});

cljs.core.async.t_cljs$core$async30979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30979";

cljs.core.async.t_cljs$core$async30979.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async30979");
});

cljs.core.async.__GT_t_cljs$core$async30979 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30979(filter_GT___$1,p__$1,ch__$1,meta30980){
return (new cljs.core.async.t_cljs$core$async30979(filter_GT___$1,p__$1,ch__$1,meta30980));
});

}

return (new cljs.core.async.t_cljs$core$async30979(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30982 = [];
var len__25873__auto___31026 = arguments.length;
var i__25874__auto___31027 = (0);
while(true){
if((i__25874__auto___31027 < len__25873__auto___31026)){
args30982.push((arguments[i__25874__auto___31027]));

var G__31028 = (i__25874__auto___31027 + (1));
i__25874__auto___31027 = G__31028;
continue;
} else {
}
break;
}

var G__30984 = args30982.length;
switch (G__30984) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30982.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28758__auto___31030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___31030,out){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___31030,out){
return (function (state_31005){
var state_val_31006 = (state_31005[(1)]);
if((state_val_31006 === (7))){
var inst_31001 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31007_31031 = state_31005__$1;
(statearr_31007_31031[(2)] = inst_31001);

(statearr_31007_31031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (1))){
var state_31005__$1 = state_31005;
var statearr_31008_31032 = state_31005__$1;
(statearr_31008_31032[(2)] = null);

(statearr_31008_31032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (4))){
var inst_30987 = (state_31005[(7)]);
var inst_30987__$1 = (state_31005[(2)]);
var inst_30988 = (inst_30987__$1 == null);
var state_31005__$1 = (function (){var statearr_31009 = state_31005;
(statearr_31009[(7)] = inst_30987__$1);

return statearr_31009;
})();
if(cljs.core.truth_(inst_30988)){
var statearr_31010_31033 = state_31005__$1;
(statearr_31010_31033[(1)] = (5));

} else {
var statearr_31011_31034 = state_31005__$1;
(statearr_31011_31034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (6))){
var inst_30987 = (state_31005[(7)]);
var inst_30992 = p.call(null,inst_30987);
var state_31005__$1 = state_31005;
if(cljs.core.truth_(inst_30992)){
var statearr_31012_31035 = state_31005__$1;
(statearr_31012_31035[(1)] = (8));

} else {
var statearr_31013_31036 = state_31005__$1;
(statearr_31013_31036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (3))){
var inst_31003 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31005__$1,inst_31003);
} else {
if((state_val_31006 === (2))){
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(4),ch);
} else {
if((state_val_31006 === (11))){
var inst_30995 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31014_31037 = state_31005__$1;
(statearr_31014_31037[(2)] = inst_30995);

(statearr_31014_31037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (9))){
var state_31005__$1 = state_31005;
var statearr_31015_31038 = state_31005__$1;
(statearr_31015_31038[(2)] = null);

(statearr_31015_31038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (5))){
var inst_30990 = cljs.core.async.close_BANG_.call(null,out);
var state_31005__$1 = state_31005;
var statearr_31016_31039 = state_31005__$1;
(statearr_31016_31039[(2)] = inst_30990);

(statearr_31016_31039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (10))){
var inst_30998 = (state_31005[(2)]);
var state_31005__$1 = (function (){var statearr_31017 = state_31005;
(statearr_31017[(8)] = inst_30998);

return statearr_31017;
})();
var statearr_31018_31040 = state_31005__$1;
(statearr_31018_31040[(2)] = null);

(statearr_31018_31040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (8))){
var inst_30987 = (state_31005[(7)]);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31005__$1,(11),out,inst_30987);
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
});})(c__28758__auto___31030,out))
;
return ((function (switch__28646__auto__,c__28758__auto___31030,out){
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_31022 = [null,null,null,null,null,null,null,null,null];
(statearr_31022[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_31022[(1)] = (1));

return statearr_31022;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_31005){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_31005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e31023){if((e31023 instanceof Object)){
var ex__28650__auto__ = e31023;
var statearr_31024_31041 = state_31005;
(statearr_31024_31041[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31042 = state_31005;
state_31005 = G__31042;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_31005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_31005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___31030,out))
})();
var state__28760__auto__ = (function (){var statearr_31025 = f__28759__auto__.call(null);
(statearr_31025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___31030);

return statearr_31025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___31030,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31043 = [];
var len__25873__auto___31046 = arguments.length;
var i__25874__auto___31047 = (0);
while(true){
if((i__25874__auto___31047 < len__25873__auto___31046)){
args31043.push((arguments[i__25874__auto___31047]));

var G__31048 = (i__25874__auto___31047 + (1));
i__25874__auto___31047 = G__31048;
continue;
} else {
}
break;
}

var G__31045 = args31043.length;
switch (G__31045) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31043.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto__){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto__){
return (function (state_31215){
var state_val_31216 = (state_31215[(1)]);
if((state_val_31216 === (7))){
var inst_31211 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31217_31258 = state_31215__$1;
(statearr_31217_31258[(2)] = inst_31211);

(statearr_31217_31258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (20))){
var inst_31181 = (state_31215[(7)]);
var inst_31192 = (state_31215[(2)]);
var inst_31193 = cljs.core.next.call(null,inst_31181);
var inst_31167 = inst_31193;
var inst_31168 = null;
var inst_31169 = (0);
var inst_31170 = (0);
var state_31215__$1 = (function (){var statearr_31218 = state_31215;
(statearr_31218[(8)] = inst_31169);

(statearr_31218[(9)] = inst_31167);

(statearr_31218[(10)] = inst_31168);

(statearr_31218[(11)] = inst_31192);

(statearr_31218[(12)] = inst_31170);

return statearr_31218;
})();
var statearr_31219_31259 = state_31215__$1;
(statearr_31219_31259[(2)] = null);

(statearr_31219_31259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (1))){
var state_31215__$1 = state_31215;
var statearr_31220_31260 = state_31215__$1;
(statearr_31220_31260[(2)] = null);

(statearr_31220_31260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (4))){
var inst_31156 = (state_31215[(13)]);
var inst_31156__$1 = (state_31215[(2)]);
var inst_31157 = (inst_31156__$1 == null);
var state_31215__$1 = (function (){var statearr_31221 = state_31215;
(statearr_31221[(13)] = inst_31156__$1);

return statearr_31221;
})();
if(cljs.core.truth_(inst_31157)){
var statearr_31222_31261 = state_31215__$1;
(statearr_31222_31261[(1)] = (5));

} else {
var statearr_31223_31262 = state_31215__$1;
(statearr_31223_31262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (15))){
var state_31215__$1 = state_31215;
var statearr_31227_31263 = state_31215__$1;
(statearr_31227_31263[(2)] = null);

(statearr_31227_31263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (21))){
var state_31215__$1 = state_31215;
var statearr_31228_31264 = state_31215__$1;
(statearr_31228_31264[(2)] = null);

(statearr_31228_31264[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (13))){
var inst_31169 = (state_31215[(8)]);
var inst_31167 = (state_31215[(9)]);
var inst_31168 = (state_31215[(10)]);
var inst_31170 = (state_31215[(12)]);
var inst_31177 = (state_31215[(2)]);
var inst_31178 = (inst_31170 + (1));
var tmp31224 = inst_31169;
var tmp31225 = inst_31167;
var tmp31226 = inst_31168;
var inst_31167__$1 = tmp31225;
var inst_31168__$1 = tmp31226;
var inst_31169__$1 = tmp31224;
var inst_31170__$1 = inst_31178;
var state_31215__$1 = (function (){var statearr_31229 = state_31215;
(statearr_31229[(8)] = inst_31169__$1);

(statearr_31229[(14)] = inst_31177);

(statearr_31229[(9)] = inst_31167__$1);

(statearr_31229[(10)] = inst_31168__$1);

(statearr_31229[(12)] = inst_31170__$1);

return statearr_31229;
})();
var statearr_31230_31265 = state_31215__$1;
(statearr_31230_31265[(2)] = null);

(statearr_31230_31265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (22))){
var state_31215__$1 = state_31215;
var statearr_31231_31266 = state_31215__$1;
(statearr_31231_31266[(2)] = null);

(statearr_31231_31266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (6))){
var inst_31156 = (state_31215[(13)]);
var inst_31165 = f.call(null,inst_31156);
var inst_31166 = cljs.core.seq.call(null,inst_31165);
var inst_31167 = inst_31166;
var inst_31168 = null;
var inst_31169 = (0);
var inst_31170 = (0);
var state_31215__$1 = (function (){var statearr_31232 = state_31215;
(statearr_31232[(8)] = inst_31169);

(statearr_31232[(9)] = inst_31167);

(statearr_31232[(10)] = inst_31168);

(statearr_31232[(12)] = inst_31170);

return statearr_31232;
})();
var statearr_31233_31267 = state_31215__$1;
(statearr_31233_31267[(2)] = null);

(statearr_31233_31267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (17))){
var inst_31181 = (state_31215[(7)]);
var inst_31185 = cljs.core.chunk_first.call(null,inst_31181);
var inst_31186 = cljs.core.chunk_rest.call(null,inst_31181);
var inst_31187 = cljs.core.count.call(null,inst_31185);
var inst_31167 = inst_31186;
var inst_31168 = inst_31185;
var inst_31169 = inst_31187;
var inst_31170 = (0);
var state_31215__$1 = (function (){var statearr_31234 = state_31215;
(statearr_31234[(8)] = inst_31169);

(statearr_31234[(9)] = inst_31167);

(statearr_31234[(10)] = inst_31168);

(statearr_31234[(12)] = inst_31170);

return statearr_31234;
})();
var statearr_31235_31268 = state_31215__$1;
(statearr_31235_31268[(2)] = null);

(statearr_31235_31268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (3))){
var inst_31213 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31215__$1,inst_31213);
} else {
if((state_val_31216 === (12))){
var inst_31201 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31236_31269 = state_31215__$1;
(statearr_31236_31269[(2)] = inst_31201);

(statearr_31236_31269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (2))){
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31215__$1,(4),in$);
} else {
if((state_val_31216 === (23))){
var inst_31209 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31237_31270 = state_31215__$1;
(statearr_31237_31270[(2)] = inst_31209);

(statearr_31237_31270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (19))){
var inst_31196 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31238_31271 = state_31215__$1;
(statearr_31238_31271[(2)] = inst_31196);

(statearr_31238_31271[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (11))){
var inst_31181 = (state_31215[(7)]);
var inst_31167 = (state_31215[(9)]);
var inst_31181__$1 = cljs.core.seq.call(null,inst_31167);
var state_31215__$1 = (function (){var statearr_31239 = state_31215;
(statearr_31239[(7)] = inst_31181__$1);

return statearr_31239;
})();
if(inst_31181__$1){
var statearr_31240_31272 = state_31215__$1;
(statearr_31240_31272[(1)] = (14));

} else {
var statearr_31241_31273 = state_31215__$1;
(statearr_31241_31273[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (9))){
var inst_31203 = (state_31215[(2)]);
var inst_31204 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31215__$1 = (function (){var statearr_31242 = state_31215;
(statearr_31242[(15)] = inst_31203);

return statearr_31242;
})();
if(cljs.core.truth_(inst_31204)){
var statearr_31243_31274 = state_31215__$1;
(statearr_31243_31274[(1)] = (21));

} else {
var statearr_31244_31275 = state_31215__$1;
(statearr_31244_31275[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (5))){
var inst_31159 = cljs.core.async.close_BANG_.call(null,out);
var state_31215__$1 = state_31215;
var statearr_31245_31276 = state_31215__$1;
(statearr_31245_31276[(2)] = inst_31159);

(statearr_31245_31276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (14))){
var inst_31181 = (state_31215[(7)]);
var inst_31183 = cljs.core.chunked_seq_QMARK_.call(null,inst_31181);
var state_31215__$1 = state_31215;
if(inst_31183){
var statearr_31246_31277 = state_31215__$1;
(statearr_31246_31277[(1)] = (17));

} else {
var statearr_31247_31278 = state_31215__$1;
(statearr_31247_31278[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (16))){
var inst_31199 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31248_31279 = state_31215__$1;
(statearr_31248_31279[(2)] = inst_31199);

(statearr_31248_31279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (10))){
var inst_31168 = (state_31215[(10)]);
var inst_31170 = (state_31215[(12)]);
var inst_31175 = cljs.core._nth.call(null,inst_31168,inst_31170);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31215__$1,(13),out,inst_31175);
} else {
if((state_val_31216 === (18))){
var inst_31181 = (state_31215[(7)]);
var inst_31190 = cljs.core.first.call(null,inst_31181);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31215__$1,(20),out,inst_31190);
} else {
if((state_val_31216 === (8))){
var inst_31169 = (state_31215[(8)]);
var inst_31170 = (state_31215[(12)]);
var inst_31172 = (inst_31170 < inst_31169);
var inst_31173 = inst_31172;
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31173)){
var statearr_31249_31280 = state_31215__$1;
(statearr_31249_31280[(1)] = (10));

} else {
var statearr_31250_31281 = state_31215__$1;
(statearr_31250_31281[(1)] = (11));

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
});})(c__28758__auto__))
;
return ((function (switch__28646__auto__,c__28758__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28647__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28647__auto____0 = (function (){
var statearr_31254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31254[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28647__auto__);

(statearr_31254[(1)] = (1));

return statearr_31254;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28647__auto____1 = (function (state_31215){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_31215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e31255){if((e31255 instanceof Object)){
var ex__28650__auto__ = e31255;
var statearr_31256_31282 = state_31215;
(statearr_31256_31282[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31283 = state_31215;
state_31215 = G__31283;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28647__auto__ = function(state_31215){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28647__auto____1.call(this,state_31215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28647__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28647__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto__))
})();
var state__28760__auto__ = (function (){var statearr_31257 = f__28759__auto__.call(null);
(statearr_31257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto__);

return statearr_31257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto__))
);

return c__28758__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31284 = [];
var len__25873__auto___31287 = arguments.length;
var i__25874__auto___31288 = (0);
while(true){
if((i__25874__auto___31288 < len__25873__auto___31287)){
args31284.push((arguments[i__25874__auto___31288]));

var G__31289 = (i__25874__auto___31288 + (1));
i__25874__auto___31288 = G__31289;
continue;
} else {
}
break;
}

var G__31286 = args31284.length;
switch (G__31286) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31284.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31291 = [];
var len__25873__auto___31294 = arguments.length;
var i__25874__auto___31295 = (0);
while(true){
if((i__25874__auto___31295 < len__25873__auto___31294)){
args31291.push((arguments[i__25874__auto___31295]));

var G__31296 = (i__25874__auto___31295 + (1));
i__25874__auto___31295 = G__31296;
continue;
} else {
}
break;
}

var G__31293 = args31291.length;
switch (G__31293) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31291.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31298 = [];
var len__25873__auto___31349 = arguments.length;
var i__25874__auto___31350 = (0);
while(true){
if((i__25874__auto___31350 < len__25873__auto___31349)){
args31298.push((arguments[i__25874__auto___31350]));

var G__31351 = (i__25874__auto___31350 + (1));
i__25874__auto___31350 = G__31351;
continue;
} else {
}
break;
}

var G__31300 = args31298.length;
switch (G__31300) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31298.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28758__auto___31353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___31353,out){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___31353,out){
return (function (state_31324){
var state_val_31325 = (state_31324[(1)]);
if((state_val_31325 === (7))){
var inst_31319 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31326_31354 = state_31324__$1;
(statearr_31326_31354[(2)] = inst_31319);

(statearr_31326_31354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (1))){
var inst_31301 = null;
var state_31324__$1 = (function (){var statearr_31327 = state_31324;
(statearr_31327[(7)] = inst_31301);

return statearr_31327;
})();
var statearr_31328_31355 = state_31324__$1;
(statearr_31328_31355[(2)] = null);

(statearr_31328_31355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (4))){
var inst_31304 = (state_31324[(8)]);
var inst_31304__$1 = (state_31324[(2)]);
var inst_31305 = (inst_31304__$1 == null);
var inst_31306 = cljs.core.not.call(null,inst_31305);
var state_31324__$1 = (function (){var statearr_31329 = state_31324;
(statearr_31329[(8)] = inst_31304__$1);

return statearr_31329;
})();
if(inst_31306){
var statearr_31330_31356 = state_31324__$1;
(statearr_31330_31356[(1)] = (5));

} else {
var statearr_31331_31357 = state_31324__$1;
(statearr_31331_31357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (6))){
var state_31324__$1 = state_31324;
var statearr_31332_31358 = state_31324__$1;
(statearr_31332_31358[(2)] = null);

(statearr_31332_31358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (3))){
var inst_31321 = (state_31324[(2)]);
var inst_31322 = cljs.core.async.close_BANG_.call(null,out);
var state_31324__$1 = (function (){var statearr_31333 = state_31324;
(statearr_31333[(9)] = inst_31321);

return statearr_31333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31324__$1,inst_31322);
} else {
if((state_val_31325 === (2))){
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31324__$1,(4),ch);
} else {
if((state_val_31325 === (11))){
var inst_31304 = (state_31324[(8)]);
var inst_31313 = (state_31324[(2)]);
var inst_31301 = inst_31304;
var state_31324__$1 = (function (){var statearr_31334 = state_31324;
(statearr_31334[(7)] = inst_31301);

(statearr_31334[(10)] = inst_31313);

return statearr_31334;
})();
var statearr_31335_31359 = state_31324__$1;
(statearr_31335_31359[(2)] = null);

(statearr_31335_31359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (9))){
var inst_31304 = (state_31324[(8)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31324__$1,(11),out,inst_31304);
} else {
if((state_val_31325 === (5))){
var inst_31301 = (state_31324[(7)]);
var inst_31304 = (state_31324[(8)]);
var inst_31308 = cljs.core._EQ_.call(null,inst_31304,inst_31301);
var state_31324__$1 = state_31324;
if(inst_31308){
var statearr_31337_31360 = state_31324__$1;
(statearr_31337_31360[(1)] = (8));

} else {
var statearr_31338_31361 = state_31324__$1;
(statearr_31338_31361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (10))){
var inst_31316 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31339_31362 = state_31324__$1;
(statearr_31339_31362[(2)] = inst_31316);

(statearr_31339_31362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (8))){
var inst_31301 = (state_31324[(7)]);
var tmp31336 = inst_31301;
var inst_31301__$1 = tmp31336;
var state_31324__$1 = (function (){var statearr_31340 = state_31324;
(statearr_31340[(7)] = inst_31301__$1);

return statearr_31340;
})();
var statearr_31341_31363 = state_31324__$1;
(statearr_31341_31363[(2)] = null);

(statearr_31341_31363[(1)] = (2));


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
});})(c__28758__auto___31353,out))
;
return ((function (switch__28646__auto__,c__28758__auto___31353,out){
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_31345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31345[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_31345[(1)] = (1));

return statearr_31345;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_31324){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_31324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e31346){if((e31346 instanceof Object)){
var ex__28650__auto__ = e31346;
var statearr_31347_31364 = state_31324;
(statearr_31347_31364[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31365 = state_31324;
state_31324 = G__31365;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_31324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_31324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___31353,out))
})();
var state__28760__auto__ = (function (){var statearr_31348 = f__28759__auto__.call(null);
(statearr_31348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___31353);

return statearr_31348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___31353,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31366 = [];
var len__25873__auto___31436 = arguments.length;
var i__25874__auto___31437 = (0);
while(true){
if((i__25874__auto___31437 < len__25873__auto___31436)){
args31366.push((arguments[i__25874__auto___31437]));

var G__31438 = (i__25874__auto___31437 + (1));
i__25874__auto___31437 = G__31438;
continue;
} else {
}
break;
}

var G__31368 = args31366.length;
switch (G__31368) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31366.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28758__auto___31440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___31440,out){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___31440,out){
return (function (state_31406){
var state_val_31407 = (state_31406[(1)]);
if((state_val_31407 === (7))){
var inst_31402 = (state_31406[(2)]);
var state_31406__$1 = state_31406;
var statearr_31408_31441 = state_31406__$1;
(statearr_31408_31441[(2)] = inst_31402);

(statearr_31408_31441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (1))){
var inst_31369 = (new Array(n));
var inst_31370 = inst_31369;
var inst_31371 = (0);
var state_31406__$1 = (function (){var statearr_31409 = state_31406;
(statearr_31409[(7)] = inst_31370);

(statearr_31409[(8)] = inst_31371);

return statearr_31409;
})();
var statearr_31410_31442 = state_31406__$1;
(statearr_31410_31442[(2)] = null);

(statearr_31410_31442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (4))){
var inst_31374 = (state_31406[(9)]);
var inst_31374__$1 = (state_31406[(2)]);
var inst_31375 = (inst_31374__$1 == null);
var inst_31376 = cljs.core.not.call(null,inst_31375);
var state_31406__$1 = (function (){var statearr_31411 = state_31406;
(statearr_31411[(9)] = inst_31374__$1);

return statearr_31411;
})();
if(inst_31376){
var statearr_31412_31443 = state_31406__$1;
(statearr_31412_31443[(1)] = (5));

} else {
var statearr_31413_31444 = state_31406__$1;
(statearr_31413_31444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (15))){
var inst_31396 = (state_31406[(2)]);
var state_31406__$1 = state_31406;
var statearr_31414_31445 = state_31406__$1;
(statearr_31414_31445[(2)] = inst_31396);

(statearr_31414_31445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (13))){
var state_31406__$1 = state_31406;
var statearr_31415_31446 = state_31406__$1;
(statearr_31415_31446[(2)] = null);

(statearr_31415_31446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (6))){
var inst_31371 = (state_31406[(8)]);
var inst_31392 = (inst_31371 > (0));
var state_31406__$1 = state_31406;
if(cljs.core.truth_(inst_31392)){
var statearr_31416_31447 = state_31406__$1;
(statearr_31416_31447[(1)] = (12));

} else {
var statearr_31417_31448 = state_31406__$1;
(statearr_31417_31448[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (3))){
var inst_31404 = (state_31406[(2)]);
var state_31406__$1 = state_31406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31406__$1,inst_31404);
} else {
if((state_val_31407 === (12))){
var inst_31370 = (state_31406[(7)]);
var inst_31394 = cljs.core.vec.call(null,inst_31370);
var state_31406__$1 = state_31406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31406__$1,(15),out,inst_31394);
} else {
if((state_val_31407 === (2))){
var state_31406__$1 = state_31406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31406__$1,(4),ch);
} else {
if((state_val_31407 === (11))){
var inst_31386 = (state_31406[(2)]);
var inst_31387 = (new Array(n));
var inst_31370 = inst_31387;
var inst_31371 = (0);
var state_31406__$1 = (function (){var statearr_31418 = state_31406;
(statearr_31418[(7)] = inst_31370);

(statearr_31418[(8)] = inst_31371);

(statearr_31418[(10)] = inst_31386);

return statearr_31418;
})();
var statearr_31419_31449 = state_31406__$1;
(statearr_31419_31449[(2)] = null);

(statearr_31419_31449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (9))){
var inst_31370 = (state_31406[(7)]);
var inst_31384 = cljs.core.vec.call(null,inst_31370);
var state_31406__$1 = state_31406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31406__$1,(11),out,inst_31384);
} else {
if((state_val_31407 === (5))){
var inst_31370 = (state_31406[(7)]);
var inst_31371 = (state_31406[(8)]);
var inst_31379 = (state_31406[(11)]);
var inst_31374 = (state_31406[(9)]);
var inst_31378 = (inst_31370[inst_31371] = inst_31374);
var inst_31379__$1 = (inst_31371 + (1));
var inst_31380 = (inst_31379__$1 < n);
var state_31406__$1 = (function (){var statearr_31420 = state_31406;
(statearr_31420[(12)] = inst_31378);

(statearr_31420[(11)] = inst_31379__$1);

return statearr_31420;
})();
if(cljs.core.truth_(inst_31380)){
var statearr_31421_31450 = state_31406__$1;
(statearr_31421_31450[(1)] = (8));

} else {
var statearr_31422_31451 = state_31406__$1;
(statearr_31422_31451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (14))){
var inst_31399 = (state_31406[(2)]);
var inst_31400 = cljs.core.async.close_BANG_.call(null,out);
var state_31406__$1 = (function (){var statearr_31424 = state_31406;
(statearr_31424[(13)] = inst_31399);

return statearr_31424;
})();
var statearr_31425_31452 = state_31406__$1;
(statearr_31425_31452[(2)] = inst_31400);

(statearr_31425_31452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (10))){
var inst_31390 = (state_31406[(2)]);
var state_31406__$1 = state_31406;
var statearr_31426_31453 = state_31406__$1;
(statearr_31426_31453[(2)] = inst_31390);

(statearr_31426_31453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (8))){
var inst_31370 = (state_31406[(7)]);
var inst_31379 = (state_31406[(11)]);
var tmp31423 = inst_31370;
var inst_31370__$1 = tmp31423;
var inst_31371 = inst_31379;
var state_31406__$1 = (function (){var statearr_31427 = state_31406;
(statearr_31427[(7)] = inst_31370__$1);

(statearr_31427[(8)] = inst_31371);

return statearr_31427;
})();
var statearr_31428_31454 = state_31406__$1;
(statearr_31428_31454[(2)] = null);

(statearr_31428_31454[(1)] = (2));


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
});})(c__28758__auto___31440,out))
;
return ((function (switch__28646__auto__,c__28758__auto___31440,out){
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_31432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31432[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_31432[(1)] = (1));

return statearr_31432;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_31406){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_31406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e31433){if((e31433 instanceof Object)){
var ex__28650__auto__ = e31433;
var statearr_31434_31455 = state_31406;
(statearr_31434_31455[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31456 = state_31406;
state_31406 = G__31456;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_31406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_31406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___31440,out))
})();
var state__28760__auto__ = (function (){var statearr_31435 = f__28759__auto__.call(null);
(statearr_31435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___31440);

return statearr_31435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___31440,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31457 = [];
var len__25873__auto___31531 = arguments.length;
var i__25874__auto___31532 = (0);
while(true){
if((i__25874__auto___31532 < len__25873__auto___31531)){
args31457.push((arguments[i__25874__auto___31532]));

var G__31533 = (i__25874__auto___31532 + (1));
i__25874__auto___31532 = G__31533;
continue;
} else {
}
break;
}

var G__31459 = args31457.length;
switch (G__31459) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31457.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28758__auto___31535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28758__auto___31535,out){
return (function (){
var f__28759__auto__ = (function (){var switch__28646__auto__ = ((function (c__28758__auto___31535,out){
return (function (state_31501){
var state_val_31502 = (state_31501[(1)]);
if((state_val_31502 === (7))){
var inst_31497 = (state_31501[(2)]);
var state_31501__$1 = state_31501;
var statearr_31503_31536 = state_31501__$1;
(statearr_31503_31536[(2)] = inst_31497);

(statearr_31503_31536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (1))){
var inst_31460 = [];
var inst_31461 = inst_31460;
var inst_31462 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31501__$1 = (function (){var statearr_31504 = state_31501;
(statearr_31504[(7)] = inst_31461);

(statearr_31504[(8)] = inst_31462);

return statearr_31504;
})();
var statearr_31505_31537 = state_31501__$1;
(statearr_31505_31537[(2)] = null);

(statearr_31505_31537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (4))){
var inst_31465 = (state_31501[(9)]);
var inst_31465__$1 = (state_31501[(2)]);
var inst_31466 = (inst_31465__$1 == null);
var inst_31467 = cljs.core.not.call(null,inst_31466);
var state_31501__$1 = (function (){var statearr_31506 = state_31501;
(statearr_31506[(9)] = inst_31465__$1);

return statearr_31506;
})();
if(inst_31467){
var statearr_31507_31538 = state_31501__$1;
(statearr_31507_31538[(1)] = (5));

} else {
var statearr_31508_31539 = state_31501__$1;
(statearr_31508_31539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (15))){
var inst_31491 = (state_31501[(2)]);
var state_31501__$1 = state_31501;
var statearr_31509_31540 = state_31501__$1;
(statearr_31509_31540[(2)] = inst_31491);

(statearr_31509_31540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (13))){
var state_31501__$1 = state_31501;
var statearr_31510_31541 = state_31501__$1;
(statearr_31510_31541[(2)] = null);

(statearr_31510_31541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (6))){
var inst_31461 = (state_31501[(7)]);
var inst_31486 = inst_31461.length;
var inst_31487 = (inst_31486 > (0));
var state_31501__$1 = state_31501;
if(cljs.core.truth_(inst_31487)){
var statearr_31511_31542 = state_31501__$1;
(statearr_31511_31542[(1)] = (12));

} else {
var statearr_31512_31543 = state_31501__$1;
(statearr_31512_31543[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (3))){
var inst_31499 = (state_31501[(2)]);
var state_31501__$1 = state_31501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31501__$1,inst_31499);
} else {
if((state_val_31502 === (12))){
var inst_31461 = (state_31501[(7)]);
var inst_31489 = cljs.core.vec.call(null,inst_31461);
var state_31501__$1 = state_31501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31501__$1,(15),out,inst_31489);
} else {
if((state_val_31502 === (2))){
var state_31501__$1 = state_31501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31501__$1,(4),ch);
} else {
if((state_val_31502 === (11))){
var inst_31469 = (state_31501[(10)]);
var inst_31465 = (state_31501[(9)]);
var inst_31479 = (state_31501[(2)]);
var inst_31480 = [];
var inst_31481 = inst_31480.push(inst_31465);
var inst_31461 = inst_31480;
var inst_31462 = inst_31469;
var state_31501__$1 = (function (){var statearr_31513 = state_31501;
(statearr_31513[(7)] = inst_31461);

(statearr_31513[(8)] = inst_31462);

(statearr_31513[(11)] = inst_31481);

(statearr_31513[(12)] = inst_31479);

return statearr_31513;
})();
var statearr_31514_31544 = state_31501__$1;
(statearr_31514_31544[(2)] = null);

(statearr_31514_31544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (9))){
var inst_31461 = (state_31501[(7)]);
var inst_31477 = cljs.core.vec.call(null,inst_31461);
var state_31501__$1 = state_31501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31501__$1,(11),out,inst_31477);
} else {
if((state_val_31502 === (5))){
var inst_31469 = (state_31501[(10)]);
var inst_31462 = (state_31501[(8)]);
var inst_31465 = (state_31501[(9)]);
var inst_31469__$1 = f.call(null,inst_31465);
var inst_31470 = cljs.core._EQ_.call(null,inst_31469__$1,inst_31462);
var inst_31471 = cljs.core.keyword_identical_QMARK_.call(null,inst_31462,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31472 = (inst_31470) || (inst_31471);
var state_31501__$1 = (function (){var statearr_31515 = state_31501;
(statearr_31515[(10)] = inst_31469__$1);

return statearr_31515;
})();
if(cljs.core.truth_(inst_31472)){
var statearr_31516_31545 = state_31501__$1;
(statearr_31516_31545[(1)] = (8));

} else {
var statearr_31517_31546 = state_31501__$1;
(statearr_31517_31546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (14))){
var inst_31494 = (state_31501[(2)]);
var inst_31495 = cljs.core.async.close_BANG_.call(null,out);
var state_31501__$1 = (function (){var statearr_31519 = state_31501;
(statearr_31519[(13)] = inst_31494);

return statearr_31519;
})();
var statearr_31520_31547 = state_31501__$1;
(statearr_31520_31547[(2)] = inst_31495);

(statearr_31520_31547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (10))){
var inst_31484 = (state_31501[(2)]);
var state_31501__$1 = state_31501;
var statearr_31521_31548 = state_31501__$1;
(statearr_31521_31548[(2)] = inst_31484);

(statearr_31521_31548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (8))){
var inst_31461 = (state_31501[(7)]);
var inst_31469 = (state_31501[(10)]);
var inst_31465 = (state_31501[(9)]);
var inst_31474 = inst_31461.push(inst_31465);
var tmp31518 = inst_31461;
var inst_31461__$1 = tmp31518;
var inst_31462 = inst_31469;
var state_31501__$1 = (function (){var statearr_31522 = state_31501;
(statearr_31522[(7)] = inst_31461__$1);

(statearr_31522[(14)] = inst_31474);

(statearr_31522[(8)] = inst_31462);

return statearr_31522;
})();
var statearr_31523_31549 = state_31501__$1;
(statearr_31523_31549[(2)] = null);

(statearr_31523_31549[(1)] = (2));


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
});})(c__28758__auto___31535,out))
;
return ((function (switch__28646__auto__,c__28758__auto___31535,out){
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_31527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31527[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_31527[(1)] = (1));

return statearr_31527;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_31501){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_31501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e31528){if((e31528 instanceof Object)){
var ex__28650__auto__ = e31528;
var statearr_31529_31550 = state_31501;
(statearr_31529_31550[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31551 = state_31501;
state_31501 = G__31551;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_31501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_31501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
;})(switch__28646__auto__,c__28758__auto___31535,out))
})();
var state__28760__auto__ = (function (){var statearr_31530 = f__28759__auto__.call(null);
(statearr_31530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28758__auto___31535);

return statearr_31530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28760__auto__);
});})(c__28758__auto___31535,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1483385718261