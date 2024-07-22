"use strict";(self.webpackChunkheitu_hook=self.webpackChunkheitu_hook||[]).push([[904],{78636:function(d,n,e){e.r(n),e.d(n,{demos:function(){return r}});var s=e(67294),t=e(44866),r={}},97086:function(d,n,e){e.r(n),e.d(n,{demos:function(){return r}});var s=e(67294),t=e(29876),r={}},89342:function(d,n,e){e.r(n),e.d(n,{demos:function(){return E}});var s=e(17061),t=e.n(s),r=e(27424),m=e.n(r),v=e(17156),c=e.n(v),l=e(67294),f=e(57491),E={"docs-hooks-use-in-view-demo-0":{component:l.memo(l.lazy(c()(t()().mark(function _(){var h,i,u,a;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=o.sent,i=h.default,o.next=6,Promise.resolve().then(e.bind(e,44606));case 6:return u=o.sent,a=u.useInView,o.abrupt("return",{default:function(){var O=a(),M=m()(O,2),P=M[0],D=M[1];return i.createElement("div",null,i.createElement("div",null,D?"active":"inactive"),i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},i.createElement("div",{ref:P},"12312312")))}});case 9:case"end":return o.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},"heitu-hook":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:e(67294),"heitu-hook":e(44606)},renderOpts:{compile:function(){var _=c()(t()().mark(function i(){var u,a=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(19).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,a));case 3:case"end":return o.stop()}},i)}));function h(){return _.apply(this,arguments)}return h}()}}}},11171:function(d,n,e){e.r(n),e.d(n,{demos:function(){return r}});var s=e(67294),t=e(68537),r={}},73661:function(d,n,e){e.r(n),e.d(n,{demos:function(){return r}});var s=e(67294),t=e(12395),r={}},44606:function(d,n,e){e.r(n),e.d(n,{useInView:function(){return v}});var s=e(27424),t=e.n(s),r=e(67294),m=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,E=(0,r.useState)(!1),_=t()(E,2),h=_[0],i=_[1],u=(0,r.useRef)(null);return(0,r.useEffect)(function(){var a=new IntersectionObserver(function(I){I.forEach(function(o){o.isIntersecting?(i(!0),f&&a.unobserve(o.target)):i(!1)})});return u!=null&&u.current&&a.observe(u.current),function(){u!=null&&u.current&&a.unobserve(u.current)}},[l,f]),[u,h]},v=m},44289:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});var s=e(44866);const t=[{value:"This is a guide example.",paraId:0}]},69236:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});var s=e(29876);const t=[{value:"This is a hooks example.",paraId:0}]},81856:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});var s=e(57491);const t=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3}]},51446:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});var s=e(68537);const t=[]},55900:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});var s=e(12395);const t=[]}}]);
