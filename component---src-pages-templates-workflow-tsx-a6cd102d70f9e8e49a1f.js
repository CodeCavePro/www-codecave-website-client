"use strict";(self.webpackChunkcode_cave=self.webpackChunkcode_cave||[]).push([[548],{240:function(e,t,l){l.r(t),l.d(t,{Head:function(){return E},default:function(){return w}});var a=l(7294),n=l(8032),r=l(1929),s=l(1164);var o=e=>{let{step:t,scroll:l,stepNumber:n,className:r}=e;const s=(0,a.useRef)(null),{0:o,1:c}=(0,a.useState)("w-[100%]");(0,a.useEffect)((()=>{if(!s.current||!window)return;const e=s.current.getBoundingClientRect().bottom;window.innerHeight>e&&c("w-0")}),[l]);const{html:m,frontmatter:{title:i}}=t;return a.createElement("div",{ref:s,className:`workflow-step relative flex w-full items-center justify-between text-main-100 gap-5 md:gap-28 max-w-4.5xl ${r}`},a.createElement("div",{className:`hidden md:block cover absolute -top-2 -bottom-2 z-10 bg-secondary-100 transition-all duration-1000 ${o}`}),a.createElement("p",{className:"text-center px-5 md:px-20 text-[88px] sm:text-[148px] font-bold shrink-0 py-4"},n),a.createElement("div",{className:"flex flex-col flex-1 gap-2.5"},a.createElement("h2",{className:"font-bold text-2xl sm:text-3xl"},i),a.createElement("p",{className:"w-full font-normal text-sm sm:text-lg",dangerouslySetInnerHTML:{__html:m}})))},c=l(4160),m=l(8322),i=l(216);var u=e=>{let{reason:{frontmatter:{title:t},html:l},className:n}=e;return a.createElement("div",{className:`why-us-card relative first:mt-0 my-14 flex flex-col flex-1 text-secondary-100 gap-2.5 cursor-pointer break-inside-avoid ${n}`},a.createElement("h3",{className:"text-3xl"},t),a.createElement("div",{className:"text-lg text-secondary-70",dangerouslySetInnerHTML:{__html:l}}),a.createElement("div",{className:"line w-1 h-0 bg-secondary-100 absolute top-1/2 -left-5 -translate-y-1/2 transition-all duration-500"}))};var d=e=>{var t,l,n,r,s,o,d,v,p;let{lang:x}=e;const g=(0,c.K2)(f);let w;x in g?w=null==g||null===(t=g[x])||void 0===t?void 0:t.nodes:null==g||null===(l=g.en)||void 0===l||l.nodes;const E=null!==(n=null==g||null===(r=g.markupData)||void 0===r||null===(s=r.nodes)||void 0===s||null===(o=s.find((e=>e.fields.language===x)))||void 0===o||null===(d=o.frontmatter)||void 0===d||null===(v=d.whyUs)||void 0===v?void 0:v.title)&&void 0!==n?n:"why us";return a.createElement(a.Fragment,null,null!==(p=w)&&void 0!==p&&p.length?a.createElement(i.Z,{theme:m.Q.dark,title:E,borderB:!0},a.createElement("div",{className:"columns-1 md:columns-2 w-full gap-x-28 max-w-4.5xl"},w.map((e=>a.createElement(u,{key:e.id,reason:e}))))):null)};const f="941943045";var v=l(9165),p=l(4471),x=l.n(p),g=l(577);var w=e=>{let{data:t,pageContext:{markupData:l,lang:c}}=e;const m=t.allMarkdownRemark.nodes,i=(0,n.c)(l.image),u=(0,a.useRef)(!0),{0:f,1:v}=(0,a.useState)(!1),p=()=>{v((e=>!e))};return(0,a.useEffect)((()=>{if(u.current&&window)return u.current=!1,window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)}),[]),a.createElement(a.Fragment,null,a.createElement(r.Z,{heightClass:"lg:h-99",title:l.bannerTitle,image:i,borderBottom:!0}),a.createElement("div",{className:"bg-secondary-100"},a.createElement(s.Z,{className:"flex-col items-center relative transition-all duration-1000 py-16"},m?m.map(((e,t)=>a.createElement(o,{key:e.id,step:e,className:"even:flex-row-reverse",scroll:f,stepNumber:t+1}))):null),a.createElement(x(),{className:"w-full"})),a.createElement(d,{lang:c}),a.createElement(g.Z,{lang:c}))};const E=e=>{let{pageContext:{markupData:t,site:l,lang:n},location:r}=e;return a.createElement(v.Ag,{title:`${t.head} | ${t.bannerTitle.toUpperCase()}`,siteUrl:l.siteUrl,path:r.pathname,lang:n})}}}]);
//# sourceMappingURL=component---src-pages-templates-workflow-tsx-a6cd102d70f9e8e49a1f.js.map