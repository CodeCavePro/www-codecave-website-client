(self.webpackChunkcode_cave=self.webpackChunkcode_cave||[]).push([[650],{6488:function(e,t,a){var r=a(9720).w_;e.exports.p=function(e){return r({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6.5 4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V4.5H7a.5.5 0 01-.5-.5z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M12.354 3.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z",clipRule:"evenodd"}}]})(e)}},1434:function(e,t,a){"use strict";var r=a(7294),n=a(8322);t.Z=e=>{const{theme:t,onClick:a,className:l,children:c,border:s,...o}=e,i=""+(t===n.Q.dark?"bg-main-100 text-secondary-100 border-secondary-100 hover:bg-main-70":"bg-secondary-100 text-main-100 border-main-100 hover:bg-secondary-30");return r.createElement("button",Object.assign({onClick:a,className:`flex min-w-10 items-center justify-center rounded-lg  border-solid ${s?"border":""} ${i} ${l}`},o),c)}},4568:function(e,t,a){"use strict";var r=a(7294),n=a(4160),l=a(8322),c=a(1434);t.Z=e=>{let{section:t,pagesQuantity:a,currentPage:s,nextPageTitle:o,className:i}=e;const m=Array.from({length:a},((e,t)=>t+1)),d=s+1;return r.createElement("div",{className:`flex justify-center w-full gap-6 ${i}`},s<a?r.createElement(n.rU,{to:`/${t}/page/${d}`,className:"w-max shrink-0"},r.createElement(c.Z,{theme:l.Q.light,border:!0,"aria-label":null!=o?o:"Next page",className:"whitespace-nowrap h-10 px-5 font-bold"},null!=o?o:"Next page")):null,r.createElement("nav",{className:"shrink-0 flex gap-2"},a>1?m.map((e=>r.createElement(n.rU,{key:`pagination-link-${e}`,to:`/${t}/page/${e}`},r.createElement(c.Z,{theme:l.Q.light,border:e===s,"aria-label":"view page",className:"h-10 font-bold"},e)))):null))}},6745:function(e,t,a){"use strict";var r=a(7294),n=a(4160),l=a(8032),c=a(8322),s=a(6488),o=a(9165);t.Z=e=>{let{project:t,className:a,theme:i,lang:m}=e;const d=(0,l.c)(t.frontmatter.cover),{title:u,teamSize:g,duration:p}=t.frontmatter,h=i===c.Q.light?"text-main-100 hover:text-main-10":"text-secondary-100 hover:text-secondary-10",f=i===c.Q.light?"bg-secondary-100 hover:bg-secondary-100":"bg-main-100 hover:bg-main-100";return r.createElement(n.rU,{to:`/projects/${t.id}`,className:`${f} ${h} flex flex-col justify-between hover:text-main-10 rounded-2xl p-2.5 gap-2.5 ${a}`,itemScope:!0,itemType:"https://schema.org/CreativeWork"},r.createElement("div",{className:"group flex-1 relative"},d?r.createElement(l.G,{image:d,alt:"cover",itemProp:"image",className:"object-contain w-full rounded-[10px] transition-all group-hover:scale-[1.01]"}):null,r.createElement("div",{className:"absolute left-2 bottom-2 flex items-center gap-2.5 z-10"},r.createElement("p",{className:"backdrop-blur-sm backdrop-brightness-75 text-secondary-100 px-5 h-10 flex items-center rounded-lg"},p),r.createElement("p",{className:"backdrop-blur-sm backdrop-brightness-75 text-secondary-100 px-5 h-10 flex items-center rounded-lg"},g))),r.createElement("div",{className:"flex px-2.5 py-1 items-center grow"},r.createElement("h3",{className:"text-base grow font-medium h-full",itemProp:"description"},u),r.createElement(s.p,{size:20})),r.createElement(o.Lx,{itemProp:"author",lang:m}))}},3997:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return i}});var r=a(7294),n=a(8322),l=a(1164),c=a(6745),s=a(4568),o=a(9165);t.default=e=>{let{data:t,pageContext:a}=e;const o=t.allMarkdownRemark.nodes,{currentPage:i,pagesQuantity:m,lang:d}=a;return r.createElement("div",{className:"flex w-full justify-center bg-main-100"},r.createElement(l.Z,{maxWidthClass:"max-w-4.5xl",className:"flex-col py-16"},r.createElement("div",{className:"w-full grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-8"},o?o.map((e=>r.createElement(c.Z,{key:e.id,project:e,lang:d,theme:n.Q.light}))):null),m>1?r.createElement(s.Z,{section:"projects",pagesQuantity:m,currentPage:i,nextPageTitle:a.pagination.next}):null))};const i=e=>{let{pageContext:{markupData:t,site:a,lang:n},location:l}=e;return r.createElement(o.Ag,{title:`${t.head} | ${t.bannerTitle.toUpperCase()}`,siteUrl:a.siteUrl,path:l.pathname,lang:n})}},8322:function(e,t,a){"use strict";a.d(t,{Q:function(){return r}});let r=function(e){return e.dark="dark",e.light="light",e}({})}}]);
//# sourceMappingURL=component---src-pages-templates-projects-tsx-d133fbb6fc92ec667920.js.map