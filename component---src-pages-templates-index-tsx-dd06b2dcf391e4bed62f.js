(self.webpackChunkcode_cave=self.webpackChunkcode_cave||[]).push([[832],{1929:function(e,t,l){"use strict";l.d(t,{Z:function(){return c}});var n=l(7294),a=l(4471),r=l.n(a),i=l(1164);var s=e=>{let{className:t}=e;return n.createElement("div",{className:`flex justify-center items-center h-full w-full ${t}`},n.createElement("svg",{"aria-hidden":"true",className:"w-8 h-8 mr-2 text-main-10 animate-spin dark:text-secondary-10 fill-main-100",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),n.createElement("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})))};var o=()=>{const{0:e,1:t}=(0,n.useState)(!1),a=(0,n.useRef)(!0),r=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(!a.current||!r.current||"undefined"==typeof window)return;a.current=!1;const e=new Worker(new URL(l.p+l.u(475),l.b),{type:void 0});e.onmessage=e=>{let{data:l}=e;"ready"===l&&t(!0)};const n=r.current;n.width=n.clientWidth,n.height=n.clientHeight;const i=n.transferControlToOffscreen();e.postMessage({canvas:i},[i]);const s=()=>{e.postMessage({width:n.clientWidth,height:n.clientHeight})};window.addEventListener("resize",s,{passive:!0});const o=t=>{t.preventDefault(),e.postMessage({wheel:t.deltaY})};n.addEventListener("wheel",o);const c=t=>{e.postMessage({x:t.movementX,y:t.movementY})};n.addEventListener("mousedown",(e=>{e.preventDefault(),window.addEventListener("mousemove",c,{passive:!0}),window.addEventListener("mouseup",(()=>window.removeEventListener("mousemove",c)),{once:!0,passive:!0})}));let m;return n.addEventListener("touchstart",(t=>{if(1!==t.touches.length)return;const l=t.touches[0];t.preventDefault();const n={x:l.screenX,y:l.screenY};m=t=>{const{newX:l,newY:a}=((t,l)=>{const n=t.touches[0];return e.postMessage({x:n.screenX-l.x,y:n.screenY-l.y}),{newX:n.screenX,newY:n.screenY}})(t,n);n.x=l,n.y=a},window.addEventListener("touchmove",m,{passive:!0}),window.addEventListener("touchend",(()=>{window.removeEventListener("touchmove",m)}),{passive:!0})}),{passive:!0}),()=>{window&&(window.removeEventListener("resize",s),window.removeEventListener("mousemove",c),window.removeEventListener("touchmove",m),n&&n.removeEventListener("wheel",o),e.terminate())}}),[]),n.createElement("div",{className:"h-full w-full relative"},n.createElement("canvas",{ref:r,className:"bg-main-100 h-160 w-full flex items-center justify-center cursor-pointer"}),e?null:n.createElement(s,{className:"absolute top-0 left-0 right-0 bottom-0 z-10"}))};var c=e=>{let{heightClass:t="min-h-160",title:l,text:a,className:s,borderBottom:c,borderTop:m,babylon:d}=e;const{0:u,1:f}=(0,n.useState)("translate-y-full");return(0,n.useEffect)((()=>{f("translate-y-0")}),[]),n.createElement("div",{className:`w-full flex items-center bg-main-100 relative overflow-hidden px-6 ${t} ${s}`},m?n.createElement(r(),{className:"absolute top-0 left-0 right-0 w-full"}):null,n.createElement(i.Z,{className:"h-full flex flex-col lg:flex-row py-12 lg:py-0 items-center text-secondary-100 flex-grow"},n.createElement("div",{className:"flex flex-col overflow-hidden items-left h-full justify-center text-secondary-100 h-full w-full lg:w-1/2 bg-main-100"},n.createElement("h1",{className:"overflow-hidden mb-8 w-full"},n.createElement("span",{className:`banner-title inline-block text-4xl sm:text-6xl w-full text-center lg:text-start transition-all duration-1000 ${u}`},l.toUpperCase())),n.createElement("p",{className:"overflow-hidden w-full"},n.createElement("span",{className:`inline-block w-full text-3xl sm:text-4xl font-light text-center lg:text-start transition-all duration-1000 ${u}`},a.toUpperCase()))),d?n.createElement("div",{className:"w-[85%] lg:w-1/2 lg:h-full hidden md:flex"},n.createElement(o,null)):null),c?n.createElement(r(),{className:"absolute bottom-0 left-0 right-0 w-full"}):null)}},216:function(e,t,l){"use strict";var n=l(7294),a=l(4854),r=l(1164);t.Z=e=>{let{section:t,title:l,linkTitle:i,className:s,fullWidth:o,children:c}=e;return n.createElement("section",{className:`w-full py-48 px-6 ${s}`},n.createElement(r.Z,{className:"flex-col items-center",fullWidth:o},n.createElement("div",{className:"flex justify-between w-full items-center pb-10 md:pb-16 flex-col sm:flex-row"},n.createElement("h2",{className:"text-4xl md:text-5xl font-black w-full max-w-7xl mx-auto pr-8"},l.toUpperCase()),t?n.createElement(a.Link,{to:`/${t}`,className:"text-end text-2xl md:text-3xl text-secondary-10 hover:text-secondary-100 font-normal cursor-pointer whitespace-nowrap w-full sm:w-auto"},i?i.toUpperCase():"SEE MORE"," →"):null),c))}},3793:function(e,t,l){"use strict";var n=l(7294),a=l(4854),r=l(4344),i=l.n(r),s=l(4697),o=l.n(s),c=l(9165);t.Z=e=>{let{post:t,className:l,fontColor:r,gradientBorder:s,markupData:m,lang:d}=e;const{date:u,title:f,text:v}=t.frontmatter,p=Math.floor(t.wordCount.words/200),h=p||1,x="main"===r?"text-main-100":"text-secondary-100",w="main"===r?"text-main-100":"text-secondary-10",E="main"===r?"hover:text-main-10":"hover:text-secondary-100";return n.createElement(a.Link,{to:`/blog/${t.id}`,className:`flex flex-col sm:flex-row w-full ${w} ${E} ${l} ${s?"gradient-border":""}`,itemScope:!0,itemType:"https://schema.org/Article"},n.createElement("div",{className:"hidden md:flex md:basis-1/4 shrink-0 justify-center p-6",itemProp:"image"},n.createElement(i(),{className:"secondary"===r?"":"brightness-0"})),n.createElement("div",{className:"flex flex-col basis-1/2 md:basis-1/3 shrink-0 mb-12 sm:mb-0"},n.createElement("p",{className:`text-3xl font-light ${w} pb-5`},u),n.createElement("h3",{className:`text-4xl font-bold ${x}`,itemProp:"headline"},f)),n.createElement("div",{className:"flex flex-col basis-1/2 md:basis-1/3 shrink-0"},n.createElement("p",{className:`font-normal text-2xl ${w}`,itemProp:"abstract"},v.split(" ").slice(0,60).join(" "),"..."),n.createElement("div",{className:"flex justify-between items-center pt-6"},n.createElement("p",{className:"text-2xl font-bold"},null==m?void 0:m.readPostLink),n.createElement("p",{className:"grow w-max whitespace-nowrap flex items-center justify-end"},n.createElement(o(),{className:"inline"}),n.createElement("span",{className:"inline text-xl font-light italic pl-2"},null==m?void 0:m.readingTimeTitle,": ",h,null==m?void 0:m.readingTimeUnits,".")))),n.createElement(c.Lx,{itemProp:"copyrightHolder",lang:d}))}},1601:function(e,t,l){"use strict";var n=l(7294),a=l(4854),r=l(6745),i=l(216);t.Z=e=>{var t,l,o,c,m,d,u,f;let{excludeId:v,lang:p}=e;const h=(0,a.useStaticQuery)(s),x=null==h||null===(t=h.markupData)||void 0===t||null===(l=t.nodes)||void 0===l||null===(o=l.find((e=>e.fields.language===p)))||void 0===o||null===(c=o.frontmatter)||void 0===c?void 0:c.projects;let w;return w=p in h?null==h||null===(m=h[p])||void 0===m?void 0:m.nodes:null===(d=h.en)||void 0===d?void 0:d.nodes,w?(v&&(w=w.filter((e=>e.id!==v))),n.createElement(i.Z,{section:"projects",title:null!==(u=null==x?void 0:x.moreProjectsSectionTitle)&&void 0!==u?u:"OUR PROJECTS",linkTitle:null!==(f=null==x?void 0:x.moreProjectsSectionLinkTitle)&&void 0!==f?f:"SEE MORE",className:"bg-main-100 text-secondary-100"},n.createElement("div",{className:"flex justify-between flex-col items-center sm:items-stretch sm:flex-row"},w.map(((e,t)=>{if(3!==t)return n.createElement(r.Z,{key:e.id,project:e,theme:"light",className:"basis-[48%] sm:last:hidden md:last:flex md:basis-[31%] mt-16 sm:mt-0"})}))))):n.createElement(n.Fragment,null)};const s="2041872833"},735:function(e,t,l){"use strict";l.d(t,{Z:function(){return m}});var n=l(7294),a=l(4854),r=l(4471),i=l.n(r),s=l(7576),o=l(2074);var c=(0,n.forwardRef)(((e,t)=>{let{className:l,children:a}=e;const[r,i]=(0,s.Z)({loop:!0,dragFree:!0,duration:1e4,align:0},[(0,o.Z)({delay:0,stopOnInteraction:!1,stopOnMouseEnter:!0})]);return n.createElement("div",{className:`overflow-hidden ${l}`,ref:r},n.createElement("div",{ref:t,className:"h-full flex items-center",onMouseEnter:()=>{null==i||i.internalEngine().animation.stop()},onMouseLeave:()=>{null==i||i.internalEngine().animation.start()}},a))}));var m=()=>{var e,t;const l=(0,a.useStaticQuery)(d),r=null==l||null===(e=l.markdownRemark)||void 0===e||null===(t=e.frontmatter)||void 0===t?void 0:t.stack;return n.createElement(n.Fragment,null,r?n.createElement("section",{className:"h-28 flex flex-col relative",id:"clients"},n.createElement(c,{className:"grow"},r.map((e=>n.createElement("div",{key:e,className:"h-full shrink-0 min-w-0 cursor-pointer flex flex-col justify-between items-center content-center w-[352px] md:w-[400px] xl:w-[480px] 3xl:w-[576px]"},n.createElement(i(),{className:"min-w-0 shrink-0 w-full"}),n.createElement("p",{className:"text-4xl font-extrabold whitespace-nowrap"},e),n.createElement(i(),{className:"min-w-0 shrink-0 w-full"})))))):null)};const d="3518807326"},2923:function(e,t,l){"use strict";l.r(t),l.d(t,{Head:function(){return y},default:function(){return b}});var n=l(7294),a=l(9720),r=l(1929),i=l(735),s=l(4854),o=l(7576),c=l(2074),m=l(4471),d=l.n(m),u=l(8032),f=l(9165);var v=e=>{let{lang:t,review:{frontmatter:{company:l,person:a,position:r,location:i,image:s},html:o}}=e;const c=(0,u.c)(s);return n.createElement(n.Fragment,null,n.createElement("div",{className:"h-full flex flex-col grow p-8 text-main-100",itemProp:"review",itemScope:!0,itemType:"https://schema.org/Review"},n.createElement("div",{className:"mb-6 flex flex-nowrap justify-start items-center border-b-[4px] border-dashed border-secondary-100 gradient-border pb-10",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"inline-block rounded-full h-32 w-32 flex items-center mr-10"},c?n.createElement(u.G,{image:c,alt:l,className:"h-full object-cover rounded-full h-32 w-32",itemProp:"image"}):null),n.createElement("div",null,n.createElement("h3",{className:"text-xl font-extrabold whitespace-nowrap",itemProp:"familyName"},a),n.createElement("meta",{itemProp:"name",content:a}),n.createElement("h4",{className:"text-xl font-extrabold whitespace-nowrap"},n.createElement("span",{itemProp:"jobTitle"},r),","," ",n.createElement("span",{itemProp:"worksFor"},l)),n.createElement("h4",{className:"text-xl font-extrabold whitespace-nowrap",itemProp:"workLocation"},i))),n.createElement("div",{className:"review-body shrink-0 text-2xl",itemProp:"reviewBody",dangerouslySetInnerHTML:{__html:o}}),n.createElement("span",{itemProp:"reviewRating",itemScope:!0,itemType:"https://schema.org/Rating",className:"hidden"},n.createElement("meta",{itemProp:"ratingValue",content:"5"})),n.createElement(f.Lx,{itemProp:"itemReviewed",lang:t})),n.createElement("span",{itemProp:"aggregateRating",itemType:"https://schema.org/AggregateRating",itemScope:!0,className:"hidden"},n.createElement(f.Lx,{itemProp:"itemReviewed",lang:t}),n.createElement("meta",{itemProp:"reviewCount",content:"1000"}),n.createElement("meta",{itemProp:"ratingValue",content:"5"})))},p=l(216);var h=e=>{var t,l,a,r,i,m,u;let{lang:f}=e;const[h,w]=(0,o.Z)({loop:!0,dragFree:!0,duration:3e4,align:0},[(0,c.Z)({delay:0,stopOnInteraction:!1,stopOnMouseEnter:!0})]),E=(0,s.useStaticQuery)(x),C=null==E||null===(t=E.markupData)||void 0===t||null===(l=t.nodes)||void 0===l||null===(a=l.find((e=>e.fields.language===f)))||void 0===a||null===(r=a.frontmatter)||void 0===r?void 0:r.reviews;let g;return g=f in E?null==E||null===(i=E[f])||void 0===i?void 0:i.nodes:null==E||null===(m=E.en)||void 0===m?void 0:m.nodes,n.createElement(n.Fragment,null,g?n.createElement(n.Fragment,null,n.createElement(d(),{className:"w-full"}),n.createElement(p.Z,{fullWidth:!0,title:null!==(u=null==C?void 0:C.title)&&void 0!==u?u:"our clients' testimonials",className:"bg-secondary-100 text-main-100 w-full"},n.createElement("div",{className:"w-full overflow-hidden min-h-max",ref:h},n.createElement("div",{id:"container",className:"flex",onMouseEnter:()=>{null==w||w.internalEngine().animation.stop()},onMouseLeave:()=>{null==w||w.internalEngine().animation.start()}},g.map((e=>n.createElement("div",{key:e.id,className:"flex shrink-0 min-w-0 cursor-pointer basis-full sm:basis-5/6 md:basis-4/6 lg:basis-1/2 xl:basis-2/5 3xl:basis-1/3 4xl:basis-1/4 rounded-2xl border-dashed border-main-10 mx-12 top-0 bottom-0"},n.createElement(v,{review:e}))))))),n.createElement(d(),{className:"w-full"})):null)};const x="636591482";var w=l(3793);var E=e=>{var t,l,a,r,i,o,c,m,d,u;let{lang:f}=e;const v=(0,s.useStaticQuery)(C),h=null==v||null===(t=v.markupData)||void 0===t||null===(l=t.nodes)||void 0===l||null===(a=l.find((e=>e.fields.language===f)))||void 0===a||null===(r=a.frontmatter)||void 0===r?void 0:r.blog;let x;return x=f in v?null==v||null===(i=v[f])||void 0===i||null===(o=i.nodes)||void 0===o?void 0:o[0]:null==v||null===(c=v.en)||void 0===c||null===(m=c.nodes)||void 0===m?void 0:m[0],n.createElement(n.Fragment,null,x?n.createElement(p.Z,{title:null!==(d=null==h?void 0:h.blogSectionTitle)&&void 0!==d?d:"new in our blog",linkTitle:null!==(u=null==h?void 0:h.blogSectionLinkTitle)&&void 0!==u?u:"all posts",section:"blog",className:"bg-main-100 text-secondary-100"},n.createElement(w.Z,{post:x,fontColor:"secondary",markupData:h})):null)};const C="3434022509";var g=l(1601);var b=e=>{let{pageContext:{markupData:t,lang:l}}=e;return n.createElement(a.Pd.Provider,{value:{style:{verticalAlign:"middle"}}},n.createElement(r.Z,{title:t.bannerTitle,text:t.bannerText,babylon:!0}),n.createElement(i.Z,null),n.createElement(g.Z,{lang:l}),n.createElement(h,{lang:l}),n.createElement(E,{lang:l}))};const y=e=>{let{pageContext:{markupData:t}}=e;return n.createElement(f.Ag,{title:`${t.head} | ${t.bannerTitle.toUpperCase()}`,description:t.metaDescription})}},4471:function(e,t,l){var n=l(7294);function a(e){return n.createElement("svg",e,[n.createElement("line",{width:"800",height:"8",stroke:"white",strokeWidth:"8",strokeDasharray:"8 8",x1:"0",x2:"100%",y1:"4",y2:"4",key:0}),n.createElement("line",{width:"800",height:"8",stroke:"black",strokeWidth:"8",strokeDasharray:"8 8",x1:"8",x2:"100%",y1:"4",y2:"4",key:1})])}a.defaultProps={height:"8"},e.exports=a,a.default=a},4344:function(e,t,l){var n=l(7294);function a(e){return n.createElement("svg",e,[n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.875 7.9375H111.125C113.23 7.9375 115.249 8.77377 116.738 10.2623C118.226 11.7509 119.062 13.7698 119.062 15.875V107.839L103.188 91.9639C100.211 88.9865 96.1738 87.3134 91.9639 87.3125H15.875C13.7698 87.3125 11.7509 86.4762 10.2623 84.9877C8.77377 83.4991 7.9375 81.4802 7.9375 79.375V15.875C7.9375 13.7698 8.77377 11.7509 10.2623 10.2623C11.7509 8.77377 13.7698 7.9375 15.875 7.9375ZM111.125 0C115.335 0 119.373 1.67254 122.35 4.64968C125.327 7.62682 127 11.6647 127 15.875V117.419C127 118.205 126.767 118.972 126.33 119.625C125.893 120.278 125.273 120.786 124.547 121.086C123.822 121.386 123.023 121.464 122.253 121.31C121.483 121.156 120.776 120.777 120.221 120.221L97.5757 97.5757C96.0875 96.087 94.0689 95.2505 91.9639 95.25H15.875C11.6647 95.25 7.62682 93.5775 4.64968 90.6003C1.67254 87.6232 0 83.5853 0 79.375V15.875C0 11.6647 1.67254 7.62682 4.64968 4.64968C7.62682 1.67254 11.6647 0 15.875 0L111.125 0Z",fill:"#FAFAFA",key:0}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M56.0865 37.7825C54.5404 35.3747 52.2544 33.5337 49.5723 32.5363C46.8902 31.5389 43.9569 31.439 41.2131 32.2515C38.4694 33.0641 36.0635 34.7453 34.357 37.0423C32.6506 39.3394 31.7358 42.1283 31.7502 44.9898C31.7516 47.3594 32.3893 49.6851 33.5968 51.7241C34.8042 53.763 36.537 55.4402 38.6142 56.5806C40.6914 57.721 43.0367 58.2826 45.4051 58.2069C47.7735 58.1311 50.0781 57.4207 52.0781 56.1499C51.0383 59.2376 49.1015 62.5316 45.9107 65.8336C45.3002 66.4652 44.9656 67.3134 44.9804 68.1916C44.9953 69.0699 45.3585 69.9063 45.99 70.5168C46.6216 71.1273 47.4698 71.4619 48.348 71.447C49.2263 71.4321 50.0627 71.0689 50.6732 70.4374C62.4683 58.2136 60.9364 44.9263 56.0865 37.7984V37.7825ZM87.8365 37.7825C86.2904 35.3747 84.0044 33.5337 81.3223 32.5363C78.6403 31.5389 75.7069 31.439 72.9631 32.2515C70.2194 33.0641 67.8135 34.7453 66.107 37.0423C64.4006 39.3394 63.4858 42.1283 63.5002 44.9898C63.5016 47.3594 64.1393 49.6851 65.3468 51.7241C66.5542 53.763 68.287 55.4402 70.3642 56.5806C72.4414 57.721 74.7867 58.2826 77.1551 58.2069C79.5235 58.1311 81.8281 57.4207 83.8281 56.1499C82.7883 59.2376 80.8515 62.5316 77.6607 65.8336C77.0502 66.4652 76.7156 67.3134 76.7304 68.1916C76.7453 69.0699 77.1085 69.9063 77.74 70.5168C78.3716 71.1273 79.2198 71.4619 80.098 71.447C80.9763 71.4321 81.8127 71.0689 82.4232 70.4374C94.2183 58.2136 92.6864 44.9263 87.8365 37.7984V37.7825Z",fill:"#FAFAFA",key:1})])}a.defaultProps={width:"127",height:"127",viewBox:"0 0 127 127",fill:"none"},e.exports=a,a.default=a},4697:function(e,t,l){var n=l(7294);function a(e){return n.createElement("svg",e,[n.createElement("g",{clipPath:"url(#clip0_829_432)",key:0},[n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.57938 1.14638C9.38658 1.13214 9.19332 1.12501 9 1.125V0C9.2211 0.000107806 9.44213 0.00836341 9.66262 0.02475L9.57938 1.14638ZM11.8339 1.65263C11.4733 1.51347 11.1029 1.40104 10.7258 1.31625L10.9721 0.21825C11.403 0.315 11.8271 0.44325 12.2389 0.603L11.8339 1.65263ZM13.3751 2.45138C13.2143 2.34411 13.0495 2.24279 12.8812 2.14763L13.4359 1.16888C13.8205 1.38683 14.1886 1.63274 14.5372 1.90463L13.8454 2.79225C13.6929 2.67326 13.536 2.55993 13.3751 2.4525V2.45138ZM15.4384 4.46513C15.2158 4.14897 14.9703 3.84966 14.7037 3.56963L15.5182 2.79338C15.822 3.114 16.1032 3.45713 16.3586 3.81713L15.4384 4.46513ZM16.2754 5.98613C16.2015 5.80777 16.1212 5.63215 16.0346 5.45963L17.0392 4.95338C17.2379 5.34835 17.4071 5.75746 17.5455 6.17738L16.4767 6.5295C16.4163 6.34597 16.3491 6.16473 16.2754 5.98613ZM16.8716 8.8065C16.8625 8.41988 16.8249 8.03446 16.7591 7.65338L17.8672 7.46213C17.9426 7.89638 17.9865 8.33738 17.9977 8.77838L16.8727 8.8065H16.8716ZM16.7242 10.5368C16.7614 10.3455 16.7917 10.1554 16.8154 9.963L17.9325 10.1014C17.8785 10.5403 17.792 10.9746 17.6737 11.4008L16.5892 11.1004C16.641 10.9148 16.686 10.7269 16.7242 10.5368ZM15.6532 13.2131C15.8602 12.8869 16.0425 12.5449 16.2 12.1916L17.2282 12.6473C17.0482 13.0523 16.8401 13.4415 16.6039 13.815L15.6532 13.2131ZM14.5687 14.5688C14.706 14.4315 14.8376 14.2898 14.9625 14.1435L15.8152 14.8781C15.6708 15.0456 15.5204 15.2077 15.3641 15.3641L14.5687 14.5688Z",fill:"black",key:0}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.99961 1.125C7.7046 1.12509 6.4296 1.44455 5.28753 2.05508C4.14547 2.66561 3.1716 3.54836 2.45217 4.62516C1.73275 5.70195 1.28998 6.93954 1.16308 8.22832C1.03618 9.5171 1.22907 10.8173 1.72466 12.0137C2.22025 13.2101 3.00325 14.2659 4.0043 15.0874C5.00535 15.909 6.19356 16.471 7.46368 16.7237C8.73381 16.9763 10.0466 16.9119 11.2859 16.536C12.5252 16.1601 13.6526 15.4844 14.5684 14.5688L15.3637 15.3641C14.3172 16.4113 13.0285 17.1841 11.6119 17.6141C10.1953 18.0442 8.69447 18.1182 7.24243 17.8295C5.79039 17.5409 4.43195 16.8986 3.28748 15.9595C2.143 15.0204 1.24784 13.8135 0.681284 12.4458C0.114733 11.078 -0.105707 9.59162 0.0394939 8.1183C0.184695 6.64499 0.691055 5.23024 1.51371 3.9994C2.33636 2.76855 3.44991 1.75962 4.75569 1.062C6.06147 0.364382 7.51916 -0.000392324 8.99961 3.16641e-07V1.125Z",fill:"black",key:1}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.4375 3.375C8.58668 3.375 8.72976 3.43426 8.83525 3.53975C8.94074 3.64524 9 3.78832 9 3.9375V9.79875L12.654 11.8867C12.7798 11.9626 12.8709 12.0847 12.9078 12.2268C12.9448 12.369 12.9247 12.5199 12.8518 12.6475C12.779 12.775 12.6591 12.869 12.5179 12.9093C12.3766 12.9496 12.2252 12.9331 12.096 12.8632L8.1585 10.6132C8.07241 10.5641 8.00084 10.493 7.95106 10.4073C7.90127 10.3215 7.87503 10.2241 7.875 10.125V3.9375C7.875 3.78832 7.93426 3.64524 8.03975 3.53975C8.14524 3.43426 8.28832 3.375 8.4375 3.375Z",fill:"black",key:2})]),n.createElement("defs",{key:1},n.createElement("clipPath",{id:"clip0_829_432"},n.createElement("rect",{width:"18",height:"18",fill:"white"})))])}a.defaultProps={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-templates-index-tsx-dd06b2dcf391e4bed62f.js.map