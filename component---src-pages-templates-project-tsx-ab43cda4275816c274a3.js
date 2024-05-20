"use strict";(self.webpackChunkcode_cave=self.webpackChunkcode_cave||[]).push([[147],{216:function(e,t,l){var a=l(7294),n=l(4854),c=l(1164);t.Z=e=>{let{section:t,title:l,linkTitle:s,className:r,fullWidth:i,children:o}=e;return a.createElement("section",{className:`w-full py-48 px-6 ${r}`},a.createElement(c.Z,{className:"flex-col items-center",fullWidth:i},a.createElement("div",{className:"flex justify-between w-full items-center pb-10 md:pb-16"},a.createElement("h3",{className:"text-4xl md:text-5xl font-black w-full max-w-7xl mx-auto pr-8"},l.toUpperCase()),t?a.createElement(n.Link,{to:`/${t}`,className:"text-end text-2xl md:text-3xl text-secondary-10 hover:text-secondary-100 font-normal cursor-pointer whitespace-nowrap"},s?s.toUpperCase():"SEE MORE"," →"):null),o))}},1601:function(e,t,l){var a=l(7294),n=l(4854),c=l(6745),s=l(216);t.Z=e=>{var t,l,i,o,m,d,u,f;let{excludeId:p,lang:x}=e;const b=(0,n.useStaticQuery)(r),E=null==b||null===(t=b.markupData)||void 0===t||null===(l=t.nodes)||void 0===l||null===(i=l.find((e=>e.fields.language===x)))||void 0===i||null===(o=i.frontmatter)||void 0===o?void 0:o.projects;let h;return h=x in b?null==b||null===(m=b[x])||void 0===m?void 0:m.nodes:null===(d=b.en)||void 0===d?void 0:d.nodes,h?(p&&(h=h.filter((e=>e.id!==p))),a.createElement(s.Z,{section:"projects",title:null!==(u=null==E?void 0:E.moreProjectsSectionTitle)&&void 0!==u?u:"OUR PROJECTS",linkTitle:null!==(f=null==E?void 0:E.moreProjectsSectionLinkTitle)&&void 0!==f?f:"SEE MORE",className:"bg-main-100 text-secondary-100"},a.createElement("div",{className:"flex justify-between flex-col items-center sm:items-stretch sm:flex-row"},h.map(((e,t)=>{if(3!==t)return a.createElement(c.Z,{key:e.id,project:e,theme:"light",className:"basis-[48%] sm:last:hidden md:last:flex md:basis-[31%] mt-16 sm:mt-0"})}))))):a.createElement(a.Fragment,null)};const r="2041872833"},8576:function(e,t,l){l.r(t),l.d(t,{Head:function(){return x},default:function(){return p}});var a=l(7294),n=l(8032),c=l(1164),s=l(1601),r=l(7576),i=l(2074);const o=e=>{let{selected:t,onClick:l}=e;return a.createElement("button",{className:"bg-transparent touch-manipulation inline-flex w-12 h-12 flex items-center mx-3 after:bg-main-10 after:w-full after:h-1.5 after:content-['']".concat(t?" after:bg-main-100":""),type:"button",onClick:l})},m=e=>{let{enabled:t,onClick:l}=e;return a.createElement("button",{className:"bg-transparent touch-manipulation flex z-10 text-main-70 absolute flex items-center justify-center top-1/2 -translate-y-1/2 w-16 h-16 left-6 disabled:opacity-30",onClick:l,disabled:!t},a.createElement("svg",{className:"w-2/3 h-2/3",viewBox:"137.718 -1.001 366.563 644"},a.createElement("path",{fill:"currentColor",d:"M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"})))},d=e=>{let{enabled:t,onClick:l}=e;return a.createElement("button",{className:"bg-transparent touch-manipulation flex z-10 text-main-70 absolute flex items-center justify-center top-1/2 -translate-y-1/2 w-16 h-16 right-6 disabled:opacity-30",onClick:l,disabled:!t},a.createElement("svg",{className:"w-2/3 h-2/3",viewBox:"0 0 238.003 238.003"},a.createElement("path",{fill:"currentColor",d:"M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"})))};var u=e=>{let{screenshots:t}=e;const[l,c]=(0,r.Z)({loop:!0},[(0,i.Z)({stopOnInteraction:!1,stopOnMouseEnter:!0})]),{0:s,1:u}=(0,a.useState)(!1),{0:f,1:p}=(0,a.useState)(!1),{0:x,1:b}=(0,a.useState)(0),{0:E,1:h}=(0,a.useState)([]),v=(0,a.useCallback)((()=>c&&c.scrollPrev()),[c]),g=(0,a.useCallback)((()=>c&&c.scrollNext()),[c]),N=(0,a.useCallback)((e=>c&&c.scrollTo(e)),[c]),y=(0,a.useCallback)((e=>{h(e.scrollSnapList())}),[]),w=(0,a.useCallback)((e=>{b(e.selectedScrollSnap()),u(e.canScrollPrev()),p(e.canScrollNext())}),[]);return(0,a.useEffect)((()=>{c&&(y(c),w(c),c.on("reInit",y),c.on("reInit",w),c.on("select",w))}),[c,y,w]),a.createElement("div",{className:"h-full overflow-hidden relative",ref:l},a.createElement("div",{className:"h-full flex items-center "},t.map((e=>{let{id:t,childImageSharp:l}=e;const c=(0,n.c)(l);return a.createElement("div",{key:t,className:"h-full shrink-0 min-w-0 basis-full p-12 cursor-pointer flex items-center content-center"},c?a.createElement(n.G,{image:c,alt:"logo"}):null)}))),a.createElement(m,{onClick:v,enabled:s}),a.createElement(d,{onClick:g,enabled:f}),a.createElement("div",{className:"z-10 absolute bottom-1 left-0 right-0 flex justify-center items-center"},E.map(((e,t)=>a.createElement(o,{key:t,selected:t===x,onClick:()=>N(t)})))))},f=l(9165);var p=e=>{let{data:{markdownRemark:{frontmatter:t,id:l}},pageContext:{markupData:r,lang:i}}=e;const{title:o,challenge:m,client:d,clientDescription:p,team:x,screenshots:b,stack:E}=t,h=(0,n.c)(t.cover),v=(0,n.c)(t.clientLogo);return a.createElement("div",{itemScope:!0,itemType:"https://schema.org/CreativeWork"},a.createElement("div",{className:"w-full bg-secondary-70 min-h-96 flex flex-wrap p-5 md:px-40 justify-evenly items-center"},a.createElement("h2",{className:"text-bold text-5xl text-main-100 mb-8 grow-1 basis-full lg:basis-1/2 xl:basis-1/3",itemProp:"description"},o),h?a.createElement(n.G,{image:h,alt:o,className:"h-full object-cover",itemProp:"image"}):null),d?a.createElement("section",{className:"w-full bg-secondary-100 text-main-100 py-20"},a.createElement(c.Z,{className:"flex-col items-center"},a.createElement("h3",{className:"text-5xl font-bold pb-6 md:pb-10"},r.clientSectionTitle),a.createElement("div",{className:"flex flex-wrap justify-evenly w-full items-center",itemProp:"sourceOrganization",itemScope:!0,itemType:"https://schema.org/Organization"},a.createElement("div",{className:"grow-1 basis-full lg:basis-1/2 xl:basis-1/3"},v?a.createElement(n.G,{image:v,alt:d,className:"grayscale",itemProp:"logo"}):null),a.createElement("p",{className:"basis-full lg:basis-1/2 xl:basis-2/3 text-xl",itemProp:"description"},p)))):null,null!=m&&m.length?a.createElement("section",{className:"w-full bg-main-100 text-secondary-100 py-20"},a.createElement(c.Z,{className:"flex-col items-center"},a.createElement("h3",{className:"text-5xl font-bold pb-6 md:pb-10"},r.challengeSectionTitle),a.createElement("ul",{className:"text-2xl leading-7 md:leading-10"},m.map(((e,t)=>a.createElement("li",{key:t,className:"list-inside list-disc",itemProp:"about"},e)))))):null,a.createElement("section",{className:"w-full bg-secondary-100 text-main-100 py-20 border-b-2 border-secondary-30 border-solid"},a.createElement(c.Z,{className:"flex-col items-center"},a.createElement("h3",{className:"text-5xl font-bold pb-6 md:pb-10"},r.solutionSectionTitle),a.createElement("h3",{className:"text-4xl font-bold pt-6 md:pt-10"},r.teamSectionTitle),null!=x&&x.length?a.createElement("div",{className:"flex flex-wrap justify-center w-full items-center"},x.map((e=>a.createElement("div",{key:e,className:"team-member w-56 h-36 border-2 border-solid border-secondary-30 m-4 p-4 text-2xl flex justify-center items-center relative transition-all duration-500 hover:text-secondary-100"},a.createElement("p",{className:"w-40 text-center z-[1]",itemProp:"contributor"},e),a.createElement("div",{className:"line w-0 h-full bg-main-100 absolute top-1/2 right-0 -translate-y-1/2 transition-all duration-500"}))))):null,a.createElement("h3",{className:"text-4xl font-bold pt-6 md:pt-10"},r.techSectionTitle),a.createElement("div",{className:"flex flex-wrap justify-center w-full items-center"},E.map((e=>a.createElement("div",{key:e,className:"applied-tech w-56 h-36 border-2 border-solid border-secondary-30 m-4 p-4 text-2xl flex justify-center items-center relative"},a.createElement("p",{className:"w-40 text-center",itemProp:"keywords"},e),a.createElement("div",{className:"line w-1 h-0 bg-main-100 absolute top-1/2 right-0 -translate-y-1/2 transition-all duration-500"}))))))),null!=b&&b.length?a.createElement("section",{className:"w-full bg-secondary-100 text-main-100 py-20"},a.createElement(c.Z,{className:"flex-col items-center"},a.createElement("h3",{className:"text-5xl font-bold pb-6 md:pb-10"},r.resultSectionTitle),a.createElement(u,{screenshots:b}))):null,a.createElement(s.Z,{lang:i,excludeId:l}),a.createElement(f.L,{itemProp:"author"}))};const x=e=>{let{data:{markdownRemark:{frontmatter:{title:t}}},pageContext:l}=e;return a.createElement("title",null,l.markupData.head,": ",t)}}}]);
//# sourceMappingURL=component---src-pages-templates-project-tsx-ab43cda4275816c274a3.js.map