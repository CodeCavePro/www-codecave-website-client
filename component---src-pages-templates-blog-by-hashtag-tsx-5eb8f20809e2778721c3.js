(self.webpackChunkcode_cave=self.webpackChunkcode_cave||[]).push([[899],{6488:function(e,t,l){var n=l(9720).w_;e.exports.p=function(e){return n({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6.5 4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V4.5H7a.5.5 0 01-.5-.5z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M12.354 3.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z",clipRule:"evenodd"}}]})(e)}},1929:function(e,t,l){"use strict";l.d(t,{Z:function(){return m}});var n=l(7294),a=l(8032),r=l(4471),s=l.n(r),o=l(1164);var i=e=>{let{className:t}=e;return n.createElement("div",{className:`flex justify-center items-center h-full w-full ${t}`},n.createElement("svg",{"aria-hidden":"true",className:"w-8 h-8 mr-2 text-main-10 animate-spin dark:text-secondary-10 fill-main-100",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),n.createElement("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})))};var c=()=>{const{0:e,1:t}=(0,n.useState)(!1),a=(0,n.useRef)(!0),r=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(!a.current||!r.current||"undefined"==typeof window)return;a.current=!1;const e=new Worker(new URL(l.p+l.u(475),l.b),{type:void 0});e.onmessage=e=>{let{data:l}=e;"ready"===l&&t(!0)};const n=r.current;n.width=n.clientWidth,n.height=n.clientHeight;const s=n.transferControlToOffscreen();e.postMessage({canvas:s},[s]);const o=()=>{e.postMessage({width:n.clientWidth,height:n.clientHeight})};window.addEventListener("resize",o,{passive:!0});const i=t=>{t.preventDefault(),e.postMessage({wheel:t.deltaY})};n.addEventListener("wheel",i);const c=t=>{e.postMessage({x:t.movementX,y:t.movementY})};n.addEventListener("mousedown",(e=>{e.preventDefault(),window.addEventListener("mousemove",c,{passive:!0}),window.addEventListener("mouseup",(()=>window.removeEventListener("mousemove",c)),{once:!0,passive:!0})}));let m;return n.addEventListener("touchstart",(t=>{if(1!==t.touches.length)return;const l=t.touches[0];t.preventDefault();const n={x:l.screenX,y:l.screenY};m=t=>{const{newX:l,newY:a}=((t,l)=>{const n=t.touches[0];return e.postMessage({x:n.screenX-l.x,y:n.screenY-l.y}),{newX:n.screenX,newY:n.screenY}})(t,n);n.x=l,n.y=a},window.addEventListener("touchmove",m,{passive:!0}),window.addEventListener("touchend",(()=>{window.removeEventListener("touchmove",m)}),{passive:!0})}),{passive:!0}),()=>{window&&(window.removeEventListener("resize",o),window.removeEventListener("mousemove",c),window.removeEventListener("touchmove",m),n&&n.removeEventListener("wheel",i),e.terminate())}}),[]),n.createElement("div",{className:"h-full w-full relative"},n.createElement("canvas",{ref:r,className:"bg-main-100 h-91 w-full flex items-center justify-center cursor-pointer"}),e?null:n.createElement(i,{className:"absolute top-0 left-0 right-0 bottom-0 z-10"}))};var m=e=>{let{heightClass:t="min-h-91",title:l,className:r,borderBottom:i,borderTop:m,babylon:d,image:u,titleBlockClassName:f,children:g}=e;const{0:h,1:p}=(0,n.useState)("translate-y-full");return(0,n.useEffect)((()=>{p("translate-y-0")}),[]),n.createElement("div",{className:`w-full flex items-center bg-main-100 relative overflow-hidden ${t} ${r}`},m?n.createElement(s(),{className:"absolute top-0 left-0 right-0 w-full"}):null,n.createElement(o.Z,{className:"h-full flex flex-col lg:flex-row py-12 lg:py-0 items-center justify-between text-secondary-100 flex-grow gap-y-8"},n.createElement("div",{className:`flex flex-col overflow-hidden items-left h-full justify-center text-secondary-100 h-full w-full ${f||"lg:w-1/2"} bg-main-100`},n.createElement("h1",{className:"overflow-hidden w-full"},n.createElement("span",{className:`banner-title inline-block text-3xl lg:text-4xl w-full text-center lg:text-start transition-all duration-1000 font-light ${h}`},l))),d?n.createElement("div",{className:"w-[85%] lg:w-1/2 lg:h-full hidden md:flex -order-1 lg:order-none"},n.createElement(c,null)):null,u?n.createElement("div",{className:"w-[220px] lg:w-1/2 lg:h-full flex justify-center lg:justify-end items-center -order-1 lg:order-none"},n.createElement(a.G,{image:u,alt:"cover",className:"object-contain aspect-square"})):null,g?n.createElement("div",{className:"w-full lg:h-full flex justify-center lg:justify-start items-center"},g):null),i?n.createElement(s(),{className:"absolute bottom-0 left-0 right-0 w-full"}):null)}},1434:function(e,t,l){"use strict";var n=l(7294),a=l(8322);t.Z=e=>{const{theme:t,onClick:l,className:r,children:s,border:o,...i}=e,c=""+(t===a.Q.dark?"bg-main-100 text-secondary-100 border-secondary-100 hover:bg-main-70":"bg-secondary-100 text-main-100 border-main-100 hover:bg-secondary-30");return n.createElement("button",Object.assign({onClick:l,className:`flex min-w-10 items-center justify-center rounded-lg  border-solid ${o?"border":""} ${c} ${r}`},i),s)}},4568:function(e,t,l){"use strict";var n=l(7294),a=l(4160),r=l(8322),s=l(1434);t.Z=e=>{let{section:t,pagesQuantity:l,currentPage:o,nextPageTitle:i,className:c}=e;const m=Array.from({length:l},((e,t)=>t+1)),d=o+1;return n.createElement("div",{className:`flex justify-center w-full gap-6 ${c}`},o<l?n.createElement(a.rU,{to:`/${t}/page/${d}`,className:"w-max shrink-0"},n.createElement(s.Z,{theme:r.Q.light,border:!0,className:"whitespace-nowrap h-10 px-5 font-bold"},null!=i?i:"Next page")):null,n.createElement("nav",{className:"shrink-0 flex gap-2"},l>1?m.map((e=>n.createElement(a.rU,{key:`pagination-link-${e}`,to:`/${t}/page/${e}`},n.createElement(s.Z,{theme:r.Q.light,border:e===o,className:"h-10 font-bold"},e)))):null))}},3793:function(e,t,l){"use strict";var n=l(7294),a=l(4160),r=l(6488),s=l(9165),o=l(8322);t.Z=e=>{let{post:t,theme:l,className:i,markupData:c,lang:m}=e;const{date:d,title:u,text:f}=t.frontmatter,g=Math.floor(t.wordCount.words/200),h=g||1,p=l===o.Q.light?"text-main-100":"text-secondary-100",v=l===o.Q.light?"text-main-10":"text-secondary-10",w=l===o.Q.light?"hover:text-main-10":"hover:text-secondary-10";return n.createElement(a.rU,{to:`/blog/${t.id}`,className:`flex flex-col sm:flex-row w-full justify-center gap-5 md:gap-14 ${p} ${w} ${i}`,itemScope:!0,itemType:"https://schema.org/Article"},n.createElement("div",{className:"flex flex-col w-full max-w-[400px] gap-2.5"},n.createElement("p",{itemProp:"dateCreated",className:`text-lg ${v}`},d),n.createElement("h3",{itemProp:"headline",className:`text-3xl font-semibold ${p}`},u)),n.createElement("div",{className:"flex flex-col w-full max-w-[500px] gap-5"},n.createElement("p",{className:`font-normal text-base ${p}`,itemProp:"abstract"},f.split(" ").slice(0,70).join(" "),"..."),n.createElement("div",{className:"flex w-full items-center justify-between"},n.createElement("div",{className:"flex items-center gap-3 text-sm font-bold"},n.createElement("span",null,null==c?void 0:c.readPostLink),n.createElement(r.p,{size:14})),n.createElement("p",{className:`text-sm ${v}`},`${null==c?void 0:c.readingTimeTitle}: ~${h} ${null==c?void 0:c.readingTimeUnits}.`))),n.createElement(s.Lx,{itemProp:"copyrightHolder",lang:m}))}},5029:function(e,t,l){"use strict";l.r(t),l.d(t,{Head:function(){return m}});var n=l(7294),a=l(8322),r=l(1929),s=l(1164),o=l(3793),i=l(4568),c=l(9165);t.default=e=>{let{data:t,pageContext:l}=e;const c=t.allMarkdownRemark.nodes,{currentPage:m,pagesQuantity:d,markupData:u,lang:f,hashtag:g}=l;return n.createElement(n.Fragment,null,n.createElement(r.Z,{heightClass:"lg:h-99",titleBlockClassName:"w-full",title:u.blogByHashtagBannerTitle.toUpperCase(),borderBottom:!0},n.createElement("p",{className:"text-xl lg:text-3xl text-secondary-10 border border-solid border-secondary-10 rounded-full px-8 py-4 lg:px-10 lg:py-5"},"#",g)),n.createElement(s.Z,{className:"flex-col items-center p-6 md:p-12 bg-secondary-100 gap-14"},c?c.map((e=>n.createElement(o.Z,{theme:a.Q.light,key:e.id,post:e,markupData:u,lang:f}))):null,n.createElement(i.Z,{section:`blog/${g.split(" ").join("-").toLowerCase()}`,pagesQuantity:d,currentPage:m,nextPageTitle:l.pagination.next})))};const m=e=>{let{pageContext:{markupData:t,currentPage:l,site:a,lang:r,hashtag:s},location:o}=e;return n.createElement(c.Ag,{title:`${t.head} | ${s.toUpperCase()} | ${l}`,description:`${t.head} | ${t.bannerTitle}`,siteUrl:a.siteUrl,path:o.pathname,lang:r})}},8322:function(e,t,l){"use strict";l.d(t,{Q:function(){return n}});let n=function(e){return e.dark="dark",e.light="light",e}({})},4471:function(e,t,l){var n=l(7294);function a(e){return n.createElement("svg",e,[n.createElement("line",{width:"800",height:"8",stroke:"#f9f9f9",strokeWidth:"8",strokeDasharray:"8 8",x1:"0",x2:"100%",y1:"4",y2:"4",key:0}),n.createElement("line",{width:"800",height:"8",stroke:"#111111",strokeWidth:"8",strokeDasharray:"8 8",x1:"8",x2:"100%",y1:"4",y2:"4",key:1})])}a.defaultProps={height:"8"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-templates-blog-by-hashtag-tsx-5eb8f20809e2778721c3.js.map