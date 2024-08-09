"use strict";(self.webpackChunkheitu_hook=self.webpackChunkheitu_hook||[]).push([[904],{78636:function(D,t,e){e.r(t),e.d(t,{demos:function(){return E}});var m=e(67294),a=e(44866),E={}},97086:function(D,t,e){e.r(t),e.d(t,{demos:function(){return E}});var m=e(67294),a=e(29876),E={}},38483:function(D,t,e){e.r(t),e.d(t,{demos:function(){return O}});var m=e(17061),a=e.n(m),E=e(27424),R=e.n(E),k=e(17156),C=e.n(k),I=e(67294),$=e(31416),O={"docs-hooks-use-count-down-demo-0":{component:I.memo(I.lazy(C()(a()().mark(function _(){var h,d,f,l;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=o.sent,d=h.default,o.next=6,Promise.resolve().then(e.bind(e,10855));case 6:return f=o.sent,l=f.useCountDown,o.abrupt("return",{default:function(){var B=l(),c=R()(B,3),S=c[0],T=c[1],x=c[2];return d.createElement("div",null,S,d.createElement("button",{type:"default",onClick:function(){T(60)}},"\u5F00\u59CB"),d.createElement("button",{type:"default",onClick:function(){x()}},"\u6682\u505C"),d.createElement("button",{type:"default",onClick:function(){T()}},"\u7EE7\u7EED"))}});case 9:case"end":return o.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
import { useCountDown } from 'heitu-hook';

export default () => {
  const [seconds,startCountDown,stopCountDown] = useCountDown();
  return (
    <div>
      {seconds}
      <button
        type="default"
        onClick={() => {
          startCountDown(60)
        }}
      >
        \u5F00\u59CB
      </button>
      <button
        type="default"
        onClick={() => {
          stopCountDown();
        }}
      >
        \u6682\u505C
      </button>
      <button
        type="default"
        onClick={() => {
         startCountDown()
        }}
      >
        \u7EE7\u7EED
      </button>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"heitu-hook":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:e(67294),"heitu-hook":e(10855)},renderOpts:{compile:function(){var _=C()(a()().mark(function d(){var f,l=arguments;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(19).then(e.bind(e,4019));case 2:return o.abrupt("return",(f=o.sent).default.apply(f,l));case 3:case"end":return o.stop()}},d)}));function h(){return _.apply(this,arguments)}return h}()}}}},88412:function(D,t,e){e.r(t),e.d(t,{demos:function(){return I}});var m=e(17061),a=e.n(m),E=e(17156),R=e.n(E),k=e(67294),C=e(74798),I={"docs-hooks-use-ht-axios-demo-0":{component:k.memo(k.lazy(R()(a()().mark(function $(){var O,_,h,d;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,10855));case 2:return O=l.sent,_=O.useHtAxios,l.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return h=l.sent,d=h.default,l.abrupt("return",{default:function(){var o=_({config:{timeout:3e3},requestInterceptorsCallBack:function(c){return c},responseInterceptorsCallBack:function(c){return c.data}}),N=function(){var B=R()(a()().mark(function c(){var S;return a()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,o.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:S=x.sent,console.log(S);case 4:case"end":return x.stop()}},c)}));return function(){return B.apply(this,arguments)}}();return d.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},d.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){N()}},"123"))}});case 9:case"end":return l.stop()}},$)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu-hook';
import React from 'react';
export default () => {
  const htAxios = useHtAxios({
    config: { timeout: 3000 },
    requestInterceptorsCallBack: (config) => {
      return config;
    },
    responseInterceptorsCallBack: (response) => {
      return response.data;
    },
  });

  const getInfo = async () => {
    const res = await htAxios.get('http://jsonplaceholder.typicode.com/posts', {
      aa: '23123',
    });
    console.log(res);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <button
        type="button"
        style={{ width: '50px' }}
        onClick={() => {
          getInfo();
        }}
      >
        123
      </button>
    </div>
  );
};`},"heitu-hook":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"heitu-hook":e(10855),react:e(67294)},renderOpts:{compile:function(){var $=R()(a()().mark(function _(){var h,d=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(h=l.sent).default.apply(h,d));case 3:case"end":return l.stop()}},_)}));function O(){return $.apply(this,arguments)}return O}()}}}},89342:function(D,t,e){e.r(t),e.d(t,{demos:function(){return O}});var m=e(17061),a=e.n(m),E=e(27424),R=e.n(E),k=e(17156),C=e.n(k),I=e(67294),$=e(57491),O={"docs-hooks-use-in-view-demo-0":{component:I.memo(I.lazy(C()(a()().mark(function _(){var h,d,f,l;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=o.sent,d=h.default,o.next=6,Promise.resolve().then(e.bind(e,10855));case 6:return f=o.sent,l=f.useInView,o.abrupt("return",{default:function(){var B=l(),c=R()(B,2),S=c[0],T=c[1];return d.createElement("div",null,d.createElement("div",null,T?"active":"inactive"),d.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},d.createElement("div",{ref:S},"12312312")))}});case 9:case"end":return o.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
import { useInView } from 'heitu-hook';

export default () => {
  const [targetRef, inView] = useInView();
  return (
    <div>
      <div>{inView ? 'active' : 'inactive'}</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '900px',
        }}
      >
        <div ref={targetRef as LegacyRef<HTMLDivElement>}>12312312</div>
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"heitu-hook":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:e(67294),"heitu-hook":e(10855)},renderOpts:{compile:function(){var _=C()(a()().mark(function d(){var f,l=arguments;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(19).then(e.bind(e,4019));case 2:return o.abrupt("return",(f=o.sent).default.apply(f,l));case 3:case"end":return o.stop()}},d)}));function h(){return _.apply(this,arguments)}return h}()}}}},23929:function(D,t,e){e.r(t),e.d(t,{demos:function(){return O}});var m=e(17061),a=e.n(m),E=e(27424),R=e.n(E),k=e(17156),C=e.n(k),I=e(67294),$=e(86556),O={"docs-hooks-use-infinite-scroll-demo-0":{component:I.memo(I.lazy(C()(a()().mark(function _(){var h,d,f,l,L,o,N;return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return N=function(T){var x=T.hasMore,g=T.loadMore,Y=o(),H=R()(Y,2),G=H[0],Z=H[1];return f(function(){Z&&x&&(g==null||g())},[x,Z,g]),d.createElement("div",{ref:G},x?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},c.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return h=c.sent,d=h.default,f=h.useEffect,c.next=8,Promise.resolve().then(e.bind(e,10855));case 8:return l=c.sent,L=l.useInfiniteScroll,o=l.useInView,c.abrupt("return",{default:function(){var T=new Array(100).fill(1).map(function(G,Z){return Z}),x=L({dataSource:T,pageSize:10,delay:100}),g=x.data,Y=x.hasMore,H=x.loadMore;return d.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},g==null?void 0:g.map(function(G){return d.createElement("span",null,G)}),d.createElement(N,{loadMore:H,hasMore:Y}))}});case 12:case"end":return c.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
import { useInfiniteScroll, useInView } from 'heitu-hook';

function InfiniteScrollTrigger({ hasMore, loadMore }) {
  const [targetRef, inView] = useInView();
  useEffect(() => {
    if (inView && hasMore) loadMore?.();
  }, [hasMore, inView, loadMore]);
  return <div ref={targetRef}>{hasMore ? '\u52A0\u8F7D\u4E2D...' : '\u6CA1\u6709\u66F4\u591A\u4E86~'}</div>;
}

export default () => {
  // mock\u63A5\u53E3\u83B7\u53D6\u7684\u6570\u636E
  const dataSource = new Array(100).fill(1).map((item, index) => index);
  const { data, hasMore, loadMore } = useInfiniteScroll({
    dataSource, // \u6240\u6709\u6570\u636E\u6E90
    pageSize: 10, // \u4E00\u6B21\u6027\u52A0\u8F7D10\u6761
    delay: 100, // 100ms\u5EF6\u65F6
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
        overflowY: 'auto',
      }}
    >
      {data?.map((item) => {
        return <span>{item}</span>;
      })}
      <InfiniteScrollTrigger loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"heitu-hook":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:e(67294),"heitu-hook":e(10855)},renderOpts:{compile:function(){var _=C()(a()().mark(function d(){var f,l=arguments;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(19).then(e.bind(e,4019));case 2:return o.abrupt("return",(f=o.sent).default.apply(f,l));case 3:case"end":return o.stop()}},d)}));function h(){return _.apply(this,arguments)}return h}()}}}},11171:function(D,t,e){e.r(t),e.d(t,{demos:function(){return E}});var m=e(67294),a=e(68537),E={}},73661:function(D,t,e){e.r(t),e.d(t,{demos:function(){return E}});var m=e(67294),a=e(12395),E={}},10855:function(D,t,e){e.r(t),e.d(t,{useCountDown:function(){return Ie},useHtAxios:function(){return me},useInView:function(){return _},useInfiniteScroll:function(){return $}});var m=e(17061),a=e.n(m),E=e(17156),R=e.n(E),k=e(27424),C=e.n(k),I=e(67294);function $(r){var n=r.dataSource,u=r.delay,s=u===void 0?100:u,i=r.pageSize,v=i===void 0?10:i,p=r.fetchData,y=(0,I.useState)(!1),M=C()(y,2),W=M[0],w=M[1],b=(0,I.useState)(!0),J=C()(b,2),U=J[0],K=J[1],j=(0,I.useState)([]),oe=C()(j,2),P=oe[0],Q=oe[1];function pe(){return q.apply(this,arguments)}function q(){return q=R()(a()().mark(function _e(){return a()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(!(!(n!=null&&n.length)&&!p)){A.next=2;break}return A.abrupt("return");case 2:if(!(!U||W)){A.next=4;break}return A.abrupt("return");case 4:if(w(!0),!n){A.next=10;break}return A.next=8,new Promise(function(V){setTimeout(function(){V(n==null?void 0:n.slice(P.length,P.length+v))},s)}).then(function(V){K((P==null?void 0:P.length)+(V==null?void 0:V.length)<(n==null?void 0:n.length)),Q(function(F){return F==null?void 0:F.concat(V)})});case 8:A.next=12;break;case 10:return A.next=12,p==null?void 0:p({pageNum:P!=null&&P.length?Math.ceil((P==null?void 0:P.length)/v)+1:1,pageSize:v}).then(function(V){var F=V.list,z=F===void 0?[]:F,re=V.total,Ee=re===void 0?0:re;K((P==null?void 0:P.length)+(z==null?void 0:z.length)<Ee&&(z==null?void 0:z.length)>0),Q(function(ee){return ee==null?void 0:ee.concat(z)})});case 12:w(!1);case 13:case"end":return A.stop()}},_e)})),q.apply(this,arguments)}return{data:P,setData:Q,loading:W,hasMore:U,loadMore:pe}}var O=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=(0,I.useState)(!1),i=C()(s,2),v=i[0],p=i[1],y=(0,I.useRef)(null);return(0,I.useEffect)(function(){var M=new IntersectionObserver(function(W){W.forEach(function(w){w.isIntersecting?(p(!0),u&&M.unobserve(w.target)):p(!1)})},n);return y!=null&&y.current&&M.observe(y.current),function(){y!=null&&y.current&&M.unobserve(y.current)}},[n,u]),[y,v]},_=O,h=e(42122),d=e.n(h),f=e(9669),l=e.n(f),L=e(5332),o="application/json;charset=utf-8",N="application/x-www-form-urlencoded",B={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":o,Accept:"application/json;version=3.0;compress=false;"},c=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},S=e(54998),T=e.n(S),x=e(49360),g=e(58146),Y=e(73505),H=e(27771),G=e(77226),Z=e(36378),X=function r(n){if((0,x.Z)(n)||(0,g.Z)(n)||(0,Y.Z)(n))return n;if((0,H.Z)(n))return n.map(function(s){return r(s)});if((0,G.Z)(n)){var u=Object.create(null);return Object.keys(n).forEach(function(s){u[s]=r(n[s])}),u}else return(0,Z.Z)(n)?n.trim():n};function xe(){return typeof window=="undefined"?!1:window&&window.__debug__}function Me(r){var n=atob(r);return Uint8Array.from(n,function(u){return u.codePointAt(0)})}function ne(r){var n=Array.from(r,function(u){return String.fromCodePoint(u)}).join("");return btoa(n)}function ae(r){var n=r.data,u=r.headers["Content-Transfer-Encoding"];try{!(r.headers["Content-Transfer-Encoding"]||r.headers["content-transfer-encoding"])&&["post","put"].includes((r.method||"").toLocaleLowerCase())&&r.headers["Content-Type"]===o&&n&&(r.headers["Content-Transfer-Encoding"]="base64",r.headers["Content-Encoding"]==="gzip"?r.data=ne(n):r.data=ne(new TextEncoder().encode(JSON.stringify(n))))}catch(s){console.error(s),r.data=n,u?r.headers["Content-Transfer-Encoding"]=u:delete r.headers["Content-Transfer-Encoding"]}}var te=e(93778);function ue(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:8e3,u=r.data,s=r.headers["Content-Encoding"];try{if(!(r.headers["Content-Encoding"]||r.headers["content-encoding"])&&["post","put"].includes((r.method||"").toLocaleLowerCase())&&r.headers["Content-Type"]===o&&u){var i=(0,te.TD)(JSON.stringify(u));i.length>n&&(r.headers["Content-Encoding"]="gzip",r.data=(0,te.rZ)(i))}}catch(v){console.error(v),r.data=u,s?r.headers["Content-Encoding"]=s:delete r.headers["Content-Encoding"]}}var se=l().CancelToken.source(),de=function(n){n.cancelToken=se.token;var u=T()(n.url);if(n.url=u.query(X(u.query(!0))||{}).toString(),n.data&&(n.data=X(n.data)),n.params=X(n.params||{}),n.cache&&(n.params=n.params||{},n.params.__cache__=Math.random()),n.filter){var s=n.data,i=s===void 0?{}:s;for(var v in i)if(i.hasOwnProperty(v)){var p=i[v];p==null&&delete i[v]}}return n.method==="get"&&n.data&&(n.params=n.data,delete n.data),n.gzip&&ue(n,n.gzipThresholdSize),n.base64&&ae(n),n},le=function(n,u){u&&n.interceptors.request.use(function(s){return u(s)},function(s){return Promise.reject(s)}),n.interceptors.request.use(function(s){return de(s)},function(s){return Promise.reject(s)})},ie=function(n){var u,s=n.data;try{if(s instanceof Blob){var i=n.headers["content-disposition"],v=i.split("filename=")[1];return{success:!0,data:{file:s,fileName:v}}}}catch(p){console.error(p)}return((u=n.headers)===null||u===void 0?void 0:u["content-type"].indexOf("application/json"))<0,s},ce=function(n){var u="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!n.__CANCEL__){if(n){if(n.response&&n.response.data){var s=n.response.data.errors,i=s===void 0?[]:s,v=i&&i[0]||{};return Promise.reject({message:v.message||n.message||u,arguments:v.arguments||void 0,code:v.code||null})}return Promise.reject({message:n.message||u,arguments:void 0,code:null})}return Promise.reject({message:u,arguments:void 0,code:null})}},he=function(n,u,s){u&&n.interceptors.response.use(function(i){return u(i)},function(i){return Promise.reject(i)}),u&&n.interceptors.response.use(function(i){return i},s),n.interceptors.response.use(ie,ce)},ve=function(n){var u=n.config,s=u===void 0?{}:u,i=n.requestInterceptorsCallback,v=n.responseInterceptorOnSuccessCallback,p=n.responseInterceptorOnErrorCallback,y=(0,L.Z)(c(),s),M=l().create(y);le(M,i),he(M,v,p);function W(U,K,j){return M.request(d()({url:U,params:K},j))}function w(U,K,j){return M.request(d()({url:U,method:"post",params:K},j))}function b(U,K,j){return M.request(d()({url:U,method:"put",params:K},j))}function J(U,K,j){return M.request(d()({url:U,method:"delet",params:K},j))}return{get:W,post:w,del:J,put:b}},me=ve,fe=function(){var n=(0,I.useState)(0),u=C()(n,2),s=u[0],i=u[1],v,p=function(){clearTimeout(v)},y=function(W){p(),i(W||function(w){return w-1})};return(0,I.useEffect)(function(){return v=setTimeout(function(){s>0?i(function(M){return M-1}):p()},1e3),function(){return p()}},[s]),[s,y,p]},Ie=fe},44289:function(D,t,e){e.r(t),e.d(t,{texts:function(){return a}});var m=e(44866);const a=[{value:"This is a guide example.",paraId:0}]},69236:function(D,t,e){e.r(t),e.d(t,{texts:function(){return a}});var m=e(29876);const a=[]},11694:function(D,t,e){e.r(t),e.d(t,{texts:function(){return a}});var m=e(31416);const a=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},4164:function(D,t,e){e.r(t),e.d(t,{texts:function(){return a}});var m=e(74798);const a=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},81856:function(D,t,e){e.r(t),e.d(t,{texts:function(){return a}});var m=e(57491);const a=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},37306:function(D,t,e){e.r(t),e.d(t,{texts:function(){return a}});var m=e(86556);const a=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},51446:function(D,t,e){e.r(t),e.d(t,{texts:function(){return a}});var m=e(68537);const a=[]},55900:function(D,t,e){e.r(t),e.d(t,{texts:function(){return a}});var m=e(12395);const a=[]}}]);
