"use strict";(self.webpackChunkcode_cave=self.webpackChunkcode_cave||[]).push([[374],{2074:function(n,t,e){e.d(t,{Z:function(){return o}});const r={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function o(n={}){let t,e,i,c=0,u=!1;function s(){e.off("pointerDown",i),t.stopOnInteraction||e.off("pointerUp",d),l(),c=0}function a(n){l(),void 0!==n&&(u=n),c=window.setTimeout(f,t.delay)}function l(){c&&window.clearTimeout(c)}function d(){c&&(l(),a())}function f(){const{index:n}=e.internalEngine(),r=e.scrollSnapList().length-1;if(t.stopOnLastSnap&&n.get()===r)return s();e.canScrollNext()?e.scrollNext(u):e.scrollTo(0,u),a()}return{name:"autoplay",options:n,init:function(c,f){e=c;const{mergeOptions:p,optionsAtMedia:m}=f,g=p(r,o.globalOptions),h=p(g,n);t=m(h),u=t.jump,i=t.stopOnInteraction?s:l;const{eventStore:y,ownerDocument:x,ownerWindow:v}=e.internalEngine(),b=e.rootNode(),S=t.rootNode&&t.rootNode(b)||b;e.on("pointerDown",i),t.stopOnInteraction||e.on("pointerUp",d),t.stopOnMouseEnter&&(y.add(S,"mouseenter",i),t.stopOnInteraction||y.add(S,"mouseleave",d)),y.add(x,"visibilitychange",(()=>{if("hidden"===x.visibilityState)return l();d()})),y.add(v,"pagehide",(n=>{n.persisted&&l()})),t.playOnInit&&a()},destroy:s,play:a,stop:l,reset:d}}o.globalOptions=void 0},7576:function(n,t,e){e.d(t,{Z:function(){return U}});var r=e(7294);function o(n){return function(n){return"[object Object]"===Object.prototype.toString.call(n)}(n)||Array.isArray(n)}function i(n,t){const e=Object.keys(n),r=Object.keys(t);if(e.length!==r.length)return!1;return JSON.stringify(Object.keys(n.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&e.every((e=>{const r=n[e],c=t[e];return"function"==typeof r?`${r}`==`${c}`:o(r)&&o(c)?i(r,c):r===c}))}function c(n){return n.concat().sort(((n,t)=>n.name>t.name?1:-1)).map((n=>n.options))}function u(n){return"number"==typeof n}function s(n){return"string"==typeof n}function a(n){return"boolean"==typeof n}function l(n){return"[object Object]"===Object.prototype.toString.call(n)}function d(n){return Math.abs(n)}function f(n){return Math.sign(n)}function p(n,t){return d(n-t)}function m(n){return y(n).map(Number)}function g(n){return n[h(n)]}function h(n){return Math.max(0,n.length-1)}function y(n){return Object.keys(n)}function x(n,t){return[n,t].reduce(((n,t)=>(y(t).forEach((e=>{const r=n[e],o=t[e],i=l(r)&&l(o);n[e]=i?x(r,o):o})),n)),{})}function v(n,t){return void 0!==t.MouseEvent&&n instanceof t.MouseEvent}function b(n,t){const e={start:function(){return 0},center:function(n){return r(n)/2},end:r};function r(n){return t-n}return{measure:function(r){return u(n)?t*Number(n):e[n](r)}}}function S(n,t){const e=d(n-t);function r(t){return t<n}function o(n){return n>t}function i(n){return r(n)||o(n)}return{length:e,max:t,min:n,constrain:function(e){return i(e)?r(e)?n:t:e},reachedAny:i,reachedMax:o,reachedMin:r,removeOffset:function(n){return e?n-e*Math.ceil((n-t)/e):n}}}function w(n,t,e){const{constrain:r}=S(0,n),o=n+1;let i=c(t);function c(n){return e?d((o+n)%o):r(n)}function u(){return i}function s(){return w(n,u(),e)}const a={get:u,set:function(n){return i=c(n),a},add:function(n){return s().set(u()+n)},clone:s};return a}function O(){let n=[];const t={add:function(e,r,o,i={passive:!0}){return e.addEventListener(r,o,i),n.push((()=>e.removeEventListener(r,o,i))),t},clear:function(){n=n.filter((n=>n()))}};return t}function E(n,t,e,r,o,i,c,u,s,l,m,g,h,y,x,b,w,E,k){const{cross:D}=n,I=["INPUT","SELECT","TEXTAREA"],M={passive:!1},A=O(),T=O(),L=S(50,225).constrain(x.measure(20)),N={mouse:300,touch:400},P={mouse:500,touch:600},F=b?43:25;let z=!1,B=0,j=0,H=!1,R=!1,C=!1,V=!1;function U(n){const e=c.readPoint(n),r=c.readPoint(n,D),o=p(e,B),u=p(r,j);if(!R&&!V){if(!n.cancelable)return q(n);if(R=o>u,!R)return q(n)}const a=c.pointerMove(n);o>w&&(C=!0),m.useFriction(.3).useDuration(1),s.start(),i.add(t.apply(a)),n.preventDefault()}function q(n){const e=g.byDistance(0,!1).index!==h.get(),r=c.pointerUp(n)*(b?P:N)[V?"mouse":"touch"],o=function(n,t){const e=h.add(-1*f(n)),r=g.byDistance(n,!b).distance;return b||d(n)<L?r:E&&t?.5*r:g.byIndex(e.get(),0).distance}(t.apply(r),e),i=function(n,t){if(0===n||0===t)return 0;if(d(n)<=d(t))return 0;const e=p(d(n),d(t));return d(e/n)}(r,o),u=F-10*i,s=k+i/50;R=!1,H=!1,T.clear(),m.useDuration(u).useFriction(s),l.distance(o,!b),V=!1,y.emit("pointerUp")}function $(n){C&&(n.stopPropagation(),n.preventDefault())}return{init:function(n,t){if(!t)return;function s(s){(a(t)||t(n,s))&&function(n){const t=v(n,o);if(V=t,t&&0!==n.button)return;if(function(n){const t=n.nodeName||"";return I.includes(t)}(n.target))return;C=b&&t&&!n.buttons&&z,z=p(i.get(),u.get())>=2,H=!0,c.pointerDown(n),m.useFriction(0).useDuration(0),i.set(u),function(){const n=V?r:e;T.add(n,"touchmove",U,M).add(n,"touchend",q).add(n,"mousemove",U,M).add(n,"mouseup",q)}(),B=c.readPoint(n),j=c.readPoint(n,D),y.emit("pointerDown")}(s)}const l=e;A.add(l,"dragstart",(n=>n.preventDefault()),M).add(l,"touchmove",(()=>{}),M).add(l,"touchend",(()=>{})).add(l,"touchstart",s).add(l,"mousedown",s).add(l,"touchcancel",q).add(l,"contextmenu",q).add(l,"click",$,!0)},pointerDown:function(){return H},destroy:function(){A.clear(),T.clear()}}}function k(n,t){let e,r;function o(n){return n.timeStamp}function i(e,r){const o="client"+("x"===(r||n.scroll)?"X":"Y");return(v(e,t)?e:e.touches[0])[o]}return{pointerDown:function(n){return e=n,r=n,i(n)},pointerMove:function(n){const t=i(n)-i(r),c=o(n)-o(e)>170;return r=n,c&&(e=n),t},pointerUp:function(n){if(!e||!r)return 0;const t=i(r)-i(e),c=o(n)-o(e),u=o(n)-o(r)>170,s=t/c;return c&&!u&&d(s)>.1?s:0},readPoint:i}}function D(n,t,e,r,o){let i,c,u=[],s=!1;function l(n){return o.measureSize(n.getBoundingClientRect())}return{init:function(o,d){if(!d)return;c=l(n),u=r.map(l),i=new ResizeObserver((i=>{s||(a(d)||d(o,i))&&function(i){for(const s of i){const i=s.target===n,a=r.indexOf(s.target);if((i?c:u[a])!==l(i?n:r[a])){e.requestAnimationFrame((()=>{o.reInit(),t.emit("resize")}));break}}}(i)})),[n].concat(r).forEach((n=>i.observe(n)))},destroy:function(){i&&i.disconnect(),s=!0}}}function I(n,t,e,r,o){const i=o.measure(10),c=o.measure(50),u=S(.1,.99);let s=!1;return{constrain:function(o){if(s||!n.reachedAny(e.get())||!n.reachedAny(t.get()))return;const a=n.reachedMin(t.get())?"min":"max",l=d(n[a]-t.get()),f=e.get()-t.get(),p=u.constrain(l/c);e.subtract(f*p),!o&&d(f)<i&&(e.set(n.constrain(e.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(n){s=!n}}}function M(n,t,e,r){const o=S(-t+n,e[0]),i=e.map(o.constrain).map((n=>parseFloat(n.toFixed(3))));return{snapsContained:function(){if(t<=n)return[o.max];if("keepSnaps"===r)return i;const{min:e,max:c}=function(){const n=i[0],t=g(i),e=i.lastIndexOf(n),r=i.indexOf(t)+1;return S(e,r)}();return i.slice(e,c)}()}}function A(n,t,e,r){const o=t.min+.1,i=t.max+.1,{reachedMin:c,reachedMax:u}=S(o,i);return{loop:function(t){if(!function(n){return 1===n?u(e.get()):-1===n&&c(e.get())}(t))return;const o=n*(-1*t);r.forEach((n=>n.add(o)))}}}function T(n){const{max:t,length:e}=n;return{get:function(n){return(n-t)/-e}}}function L(n,t,e,r,o){const{reachedAny:i,removeOffset:c,constrain:u}=r;function s(n){return n.concat().sort(((n,t)=>d(n)-d(t)))[0]}function a(t,r){const o=[t,t+e,t-e];if(!n)return o[0];if(!r)return s(o);return s(o.filter((n=>f(n)===r)))}return{byDistance:function(e,r){const s=o.get()+e,{index:l,distance:f}=function(e){const r=n?c(e):u(e),o=t.map((n=>n-r)).map((n=>a(n,0))).map(((n,t)=>({diff:n,index:t}))).sort(((n,t)=>d(n.diff)-d(t.diff))),{index:i}=o[0];return{index:i,distance:r}}(s),p=!n&&i(s);return!r||p?{index:l,distance:e}:{index:l,distance:e+a(t[l]-f,0)}},byIndex:function(n,e){return{index:n,distance:a(t[n]-o.get(),e)}},shortcut:a}}function N(n){let t=n;function e(n){return u(n)?n:n.get()}return{get:function(){return t},set:function(n){t=e(n)},add:function(n){t+=e(n)},subtract:function(n){t-=e(n)}}}function P(n,t,e){const r="x"===n.scroll?function(n){return`translate3d(${n}px,0px,0px)`}:function(n){return`translate3d(0px,${n}px,0px)`},o=e.style;let i=!1;return{clear:function(){i||(o.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(n){i||(o.transform=r(t.apply(n)))},toggleActive:function(n){i=!n}}}function F(n,t,e,r,o,i,c,u,s){const a=m(o),l=m(o).reverse(),d=function(){const n=i[0]-1;return g(p(l,n),"end")}().concat(function(){const n=e-i[0]-1;return g(p(a,n),"start")}());function f(n,t){return n.reduce(((n,t)=>n-o[t]),t)}function p(n,t){return n.reduce(((n,e)=>f(n,t)>0?n.concat([e]):n),[])}function g(e,o){const i="start"===o,a=i?-r:r,l=c.findSlideBounds([a]);return e.map((e=>{const o=i?0:-r,c=i?r:0,a=l.filter((n=>n.index===e))[0][i?"end":"start"],d=N(-1),f=P(n,t,s[e]);return{index:e,location:d,translate:f,target:()=>u.get()>a?o:c}}))}return{canLoop:function(){return d.every((({index:n})=>f(a.filter((t=>t!==n)),e)<=.1))},clear:function(){d.forEach((n=>n.translate.clear()))},loop:function(){d.forEach((n=>{const{target:t,translate:e,location:r}=n,o=t();o!==r.get()&&(e.to(o),r.set(o))}))},loopPoints:d}}function z(n,t){let e,r=!1;return{init:function(o,i){i&&(e=new MutationObserver((n=>{r||(a(i)||i(o,n))&&function(n){for(const e of n)if("childList"===e.type){o.reInit(),t.emit("slidesChanged");break}}(n)})),e.observe(n,{childList:!0}))},destroy:function(){e&&e.disconnect(),r=!0}}}function B(n,t,e,r,o,i,c){const{removeOffset:u,constrain:s}=o,a=.5,l=i?[0,t,-t]:[0],d=f(l,c);function f(t,o){const i=t||l,c=function(n){const t=n||0;return e.map((n=>S(a,n-a).constrain(n*t)))}(o);return i.reduce(((t,o)=>{const i=r.map(((t,r)=>({start:t-e[r]+c[r]+o,end:t+n-c[r]+o,index:r})));return t.concat(i)}),[])}return{check:function(n,t){const e=i?u(n):s(n);return(t||d).reduce(((n,t)=>{const{index:r,start:o,end:i}=t;return!n.includes(r)&&(o<e&&i>e)?n.concat([r]):n}),[])},findSlideBounds:f}}function j(n,t,e){const r=u(e);return{groupSlides:function(o){return r?function(n,t){return m(n).filter((n=>n%t==0)).map((e=>n.slice(e,e+t)))}(o,e):function(e){return m(e).reduce(((e,r)=>{const o=t.slice(g(e),r+1).reduce(((n,t)=>n+t),0);return!r||o>n?e.concat(r):e}),[]).map(((n,t,r)=>e.slice(n,r[t+1])))}(o)}}}function H(n,t,e,r,o,i,c,u){const{align:s,axis:a,direction:l,startIndex:p,inViewThreshold:y,loop:x,duration:v,dragFree:H,dragThreshold:R,slidesToScroll:C,skipSnaps:V,containScroll:U}=i,q=t.getBoundingClientRect(),$=e.map((n=>n.getBoundingClientRect())),W=function(n){const t="rtl"===n?-1:1;return{apply:function(n){return n*t}}}(l),G=function(n,t){const e="y"===n?"y":"x";return{scroll:e,cross:"y"===n?"x":"y",startEdge:"y"===e?"top":"rtl"===t?"right":"left",endEdge:"y"===e?"bottom":"rtl"===t?"left":"right",measureSize:function(n){const{width:t,height:r}=n;return"x"===e?t:r}}}(a,l),J=G.measureSize(q),Q=function(n){return{measure:function(t){return n*(t/100)}}}(J),X=b(s,J),Z=!x&&!!U,_=x||!!U,{slideSizes:Y,slideSizesWithGaps:K}=function(n,t,e,r,o,i){const{measureSize:c,startEdge:u,endEdge:s}=n,a=e[0]&&o,l=function(){if(!a)return 0;const n=e[0];return d(t[u]-n[u])}(),f=function(){if(!a)return 0;const n=i.getComputedStyle(g(r));return parseFloat(n.getPropertyValue(`margin-${s}`))}(),p=e.map(c),m=e.map(((n,t,e)=>{const r=!t,o=t===h(e);return r?p[t]+l:o?p[t]+f:e[t+1][u]-n[u]})).map(d);return{slideSizes:p,slideSizesWithGaps:m}}(G,q,$,e,_,o),nn=j(J,K,C),{snaps:tn,snapsAligned:en}=function(n,t,e,r,o,i,c){const{startEdge:u,endEdge:s}=n,{groupSlides:a}=i,l=a(r).map((n=>g(n)[s]-n[0][u])).map(d).map(t.measure),f=r.map((n=>e[u]-n[u])).map((n=>-d(n))),p=function(){const n=g(f)-g(o);return a(f).map((n=>n[0])).map(((t,e,r)=>{const o=!e,i=e===h(r);return c&&o?0:c&&i?n:t+l[e]}))}();return{snaps:f,snapsAligned:p}}(G,X,q,$,K,nn,Z),rn=-g(tn)+g(K),{snapsContained:on}=M(J,rn,en,U),cn=Z?on:en,{limit:un}=function(n,t,e){const r=t[0];return{limit:S(e?r-n:g(t),r)}}(rn,cn,x),sn=w(h(cn),p,x),an=sn.clone(),ln=m(e),dn={update:()=>(({dragHandler:n,scrollBody:t,scrollBounds:e,scrollLooper:r,slideLooper:o,eventHandler:i,animation:c,options:{loop:u}})=>{const s=n.pointerDown();u||e.constrain(s);const a=t.seek().settled();a&&!s&&(c.stop(),i.emit("settle")),a||i.emit("scroll"),u&&(r.loop(t.direction()),o.loop())})(vn),render:n=>(({scrollBody:n,translate:t,location:e},r)=>{const o=n.velocity(),i=e.get()-o+o*r;t.to(i)})(vn,n),start:()=>u.start(vn),stop:()=>u.stop(vn)},fn=cn[sn.get()],pn=N(fn),mn=N(fn),gn=function(n,t,e,r){let o=!0,i=0,c=0,u=e,s=r;function a(n){return u=n,p}function l(n){return s=n,p}const p={direction:function(){return c},seek:function(){const e=t.get()-n.get();return s&&u?(i+=e/u,i*=s,n.add(i)):(i=0,n.set(t)),c=f(i||e),o=d(e)<.001,p},settled:function(){return o&&n.set(t),o},useBaseFriction:function(){return l(r)},useBaseDuration:function(){return a(e)},useFriction:l,useDuration:a,velocity:function(){return i}};return p}(pn,mn,v,.68),hn=L(x,cn,rn,un,mn),yn=function(n,t,e,r,o,i){function c(r){const c=r.distance,u=r.index!==t.get();c&&(n.start(),o.add(c)),u&&(e.set(t.get()),t.set(r.index),i.emit("select"))}return{distance:function(n,t){c(r.byDistance(n,t))},index:function(n,e){const o=t.clone().set(n);c(r.byIndex(o.get(),e))}}}(dn,sn,an,hn,mn,c),xn=B(J,rn,Y,tn,un,x,y),vn={ownerDocument:r,ownerWindow:o,eventHandler:c,containerRect:q,slideRects:$,animation:dn,axis:G,direction:W,dragHandler:E(G,W,n,r,o,mn,k(G,o),pn,dn,yn,gn,hn,sn,c,Q,H,R,V,.68),eventStore:O(),percentOfView:Q,index:sn,indexPrevious:an,limit:un,location:pn,options:i,resizeHandler:D(t,c,o,e,G),scrollBody:gn,scrollBounds:I(un,pn,mn,gn,Q),scrollLooper:A(rn,un,pn,[pn,mn]),scrollProgress:T(un),scrollSnaps:cn,scrollTarget:hn,scrollTo:yn,slideLooper:F(G,W,J,rn,K,cn,xn,pn,e),slidesHandler:z(t,c),slidesInView:xn,slideIndexes:ln,slidesToScroll:nn,target:mn,translate:P(G,W,t)};return vn}const R={align:"center",axis:"x",container:null,slides:null,containScroll:null,direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,dragThreshold:10,inViewThreshold:0,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function C(n){function t(n,t){return x(n,t||{})}const e={mergeOptions:t,optionsAtMedia:function(e){const r=e.breakpoints||{},o=y(r).filter((t=>n.matchMedia(t).matches)).map((n=>r[n])).reduce(((n,e)=>t(n,e)),{});return t(e,o)},optionsMediaQueries:function(t){return t.map((n=>y(n.breakpoints||{}))).reduce(((n,t)=>n.concat(t)),[]).map(n.matchMedia)}};return e}function V(n,t,e){const r=n.ownerDocument,o=r.defaultView,i=C(o),c=function(n){let t=[];return{init:function(e,r){return t=e.filter((({options:t})=>!1!==n.optionsAtMedia(t).active)),t.forEach((t=>t.init(r,n))),e.reduce(((n,t)=>Object.assign(n,{[t.name]:t})),{})},destroy:function(){t=t.filter((n=>n.destroy()))}}}(i),u=O(),a=O(),l=function(){const n={};let t;function e(t){return n[t]||[]}const r={init:function(n){t=n},emit:function(n){return e(n).forEach((e=>e(t,n))),r},off:function(t,o){return n[t]=e(t).filter((n=>n!==o)),r},on:function(t,o){return n[t]=e(t).concat([o]),r}};return r}(),{animationRealms:f}=V,{mergeOptions:p,optionsAtMedia:m,optionsMediaQueries:g}=i,{on:h,off:y,emit:x}=l,v=T;let b,S,w,E,k=!1,D=p(R,V.globalOptions),I=p(D),M=[];function A(t,e){if(k)return;const i=f.find((n=>n.window===o)),h=i||function(n){const t=1e3/60;let e=[],r=null,o=0,i=0;function c(u){r||(r=u);const s=u-r;for(r=u,o+=s;o>=t;)e.forEach((({animation:n})=>n.update())),o-=t;const a=d(o/t);e.forEach((({animation:n})=>n.render(a))),i&&n.requestAnimationFrame(c)}return{start:function(t){e.includes(t)||e.push(t),i||(i=n.requestAnimationFrame(c))},stop:function(t){e=e.filter((n=>n!==t)),e.length||(n.cancelAnimationFrame(i),r=null,o=0,i=0)},reset:function(){r=null,o=0},window:n}}(o);if(i||f.push(h),D=p(D,t),I=m(D),M=e||M,function(){const{container:t,slides:e}=I,r=s(t)?n.querySelector(t):t;w=r||n.children[0];const o=s(e)?w.querySelectorAll(e):e;E=[].slice.call(o||w.children)}(),b=H(n,w,E,r,o,I,l,h),g([D,...M.map((({options:n})=>n))]).forEach((n=>u.add(n,"change",T))),I.active){if(b.translate.to(b.location.get()),b.eventHandler.init(z),b.resizeHandler.init(z,I.watchResize),b.slidesHandler.init(z,I.watchSlides),a.add(r,"visibilitychange",(()=>{r.hidden&&h.reset()})),I.loop){if(!b.slideLooper.canLoop())return L(),A({loop:!1},e),void(D=p(D,{loop:!0}));b.slideLooper.loop()}w.offsetParent&&E.length&&b.dragHandler.init(z,I.watchDrag),S=c.init(M,z)}}function T(n,t){const e=F();L(),A(p({startIndex:e},n),t),l.emit("reInit")}function L(){b.dragHandler.destroy(),b.animation.stop(),b.eventStore.clear(),b.translate.clear(),b.slideLooper.clear(),b.resizeHandler.destroy(),b.slidesHandler.destroy(),c.destroy(),u.clear(),a.clear()}function N(n){const t=b[n?"target":"location"].get(),e=I.loop?"removeOffset":"constrain";return b.slidesInView.check(b.limit[e](t))}function P(n,t,e){I.active&&!k&&(b.scrollBody.useBaseFriction().useDuration(t?0:I.duration),b.scrollTo.index(n,e||0))}function F(){return b.index.get()}const z={canScrollNext:function(){return b.index.add(1).get()!==F()},canScrollPrev:function(){return b.index.add(-1).get()!==F()},containerNode:function(){return w},internalEngine:function(){return b},destroy:function(){k||(k=!0,u.clear(),L(),l.emit("destroy"))},off:y,on:h,emit:x,plugins:function(){return S},previousScrollSnap:function(){return b.indexPrevious.get()},reInit:v,rootNode:function(){return n},scrollNext:function(n){P(b.index.add(1).get(),!0===n,-1)},scrollPrev:function(n){P(b.index.add(-1).get(),!0===n,1)},scrollProgress:function(){return b.scrollProgress.get(b.location.get())},scrollSnapList:function(){return b.scrollSnaps.map(b.scrollProgress.get)},scrollTo:P,selectedScrollSnap:F,slideNodes:function(){return E},slidesInView:N,slidesNotInView:function(n){const t=N(n);return b.slideIndexes.filter((n=>!t.includes(n)))}};return A(t,e),setTimeout((()=>l.emit("init")),0),z}function U(n={},t=[]){const e=(0,r.useRef)(n),o=(0,r.useRef)(t),[u,s]=(0,r.useState)(),[a,l]=(0,r.useState)(),d=(0,r.useCallback)((()=>{u&&u.reInit(e.current,o.current)}),[u]);return(0,r.useEffect)((()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&a){V.globalOptions=U.globalOptions;const n=V(a,e.current,o.current);return s(n),()=>n.destroy()}s(void 0)}),[a,s]),(0,r.useEffect)((()=>{i(e.current,n)||(e.current=n,d())}),[n,d]),(0,r.useEffect)((()=>{(function(n,t){if(n.length!==t.length)return!1;const e=c(n),r=c(t);return e.every(((n,t)=>i(n,r[t])))})(o.current,t)||(o.current=t,d())}),[t,d]),[l,u]}V.animationRealms=[],V.globalOptions=void 0,U.globalOptions=void 0}}]);
//# sourceMappingURL=1470453bba0c0cc23f8aa20c3cefd756f6b7fd4b-836ed7a6c9535bee39d1.js.map