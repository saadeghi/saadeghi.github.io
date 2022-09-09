import{S as He,i as Me,s as Xe,a as Ye,e as J,c as Qe,b as H,g as ie,t as z,d as le,f as K,h as x,j as Ze,o as be,k as et,l as tt,m as nt,n as ge,p as N,q as rt,r as at,u as st,v as M,w as Re,x as X,y as Y,z as Ve}from"./chunks/index-10bc4979.js";import{g as qe,f as Be,s as G,a as ve,b as ot,i as it}from"./chunks/singletons-076c7a49.js";const lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ct=function(r,e){return new URL(r,e).href},Je={},W=function(e,t,c){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=ct(o,c),o in Je)return;Je[o]=!0;const d=o.endsWith(".css"),n=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":lt,d||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),d)return new Promise((w,_)=>{f.addEventListener("load",w),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};class we{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(e,t){this.status=e,this.location=t}}function ft(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ut(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const dt=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const t=new URL(r);for(const c of dt){let o=t[c];Object.defineProperty(t,c,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,o,d)=>d(r,o),ht(t),t}function ht(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function mt(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Se=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;oe.delete(c)}return Se(r,e)};const oe=new Map;function _t(r,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${mt(t.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:n,...f}=JSON.parse(d.textContent),w=d.getAttribute("data-ttl");return w&&oe.set(e,{body:n,init:f,ttl:1e3*Number(w)}),Promise.resolve(new Response(n,f))}return Se(r,t)}function gt(r,e){const t=oe.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(r)}return Se(r,e)}const wt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function yt(r){const e=[],t=[];let c=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(bt).map((d,n,f)=>{const w=decodeURIComponent(d),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(_)return e.push(_[1]),t.push(_[2]),"(?:/(.*))?";const b=n===f.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map((L,R)=>{if(R%2){const T=wt.exec(L);if(!T)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,j,D,C]=T;return e.push(D),t.push(C),j?"(.*?)":"([^/]+?)"}return b&&L.includes(".")&&(c=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function bt(r){return!/^\([^)]+\)$/.test(r)}function vt(r,e,t,c){const o={};for(let d=0;d<e.length;d+=1){const n=e[d],f=t[d],w=r[d+1]||"";if(f){const _=c[f];if(!_)throw new Error(`Missing "${f}" param matcher`);if(!_(w))return}o[n]=w}return o}function Et(r,e,t,c){const o=new Set(e);return Object.entries(t).map(([f,[w,_,b]])=>{const{pattern:L,names:R,types:T}=yt(f),j={id:f,exec:D=>{const C=L.exec(D);if(C)return vt(C,R,T,c)},errors:[1,...b||[]].map(D=>r[D]),layouts:[0,..._||[]].map(n),leaf:d(w)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function d(f){const w=f<0;return w&&(f=~f),[w,r[f]]}function n(f){return f===void 0?f:[o.has(f),r[f]]}}function kt(r){let e,t,c;var o=r[0][0];function d(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=new o(d(r))),{c(){e&&M(e.$$.fragment),t=J()},l(n){e&&Re(e.$$.fragment,n),t=J()},m(n,f){e&&X(e,n,f),H(n,t,f),c=!0},p(n,f){const w={};if(f&4&&(w.data=n[2]),f&2&&(w.form=n[1]),o!==(o=n[0][0])){if(e){ie();const _=e;z(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}o?(e=new o(d(n)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&z(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&Y(e,n)}}}function Rt(r){let e,t,c;var o=r[0][0];function d(n){return{props:{data:n[2],$$slots:{default:[St]},$$scope:{ctx:n}}}}return o&&(e=new o(d(r))),{c(){e&&M(e.$$.fragment),t=J()},l(n){e&&Re(e.$$.fragment,n),t=J()},m(n,f){e&&X(e,n,f),H(n,t,f),c=!0},p(n,f){const w={};if(f&4&&(w.data=n[2]),f&523&&(w.$$scope={dirty:f,ctx:n}),o!==(o=n[0][0])){if(e){ie();const _=e;z(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}o?(e=new o(d(n)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&z(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&Y(e,n)}}}function St(r){let e,t,c;var o=r[0][1];function d(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=new o(d(r))),{c(){e&&M(e.$$.fragment),t=J()},l(n){e&&Re(e.$$.fragment,n),t=J()},m(n,f){e&&X(e,n,f),H(n,t,f),c=!0},p(n,f){const w={};if(f&8&&(w.data=n[3]),f&2&&(w.form=n[1]),o!==(o=n[0][1])){if(e){ie();const _=e;z(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}o?(e=new o(d(n)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&z(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&Y(e,n)}}}function Ke(r){let e,t=r[5]&&xe(r);return{c(){e=et("div"),t&&t.c(),this.h()},l(c){e=tt(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=nt(e);t&&t.l(o),o.forEach(x),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),N(e,"position","absolute"),N(e,"left","0"),N(e,"top","0"),N(e,"clip","rect(0 0 0 0)"),N(e,"clip-path","inset(50%)"),N(e,"overflow","hidden"),N(e,"white-space","nowrap"),N(e,"width","1px"),N(e,"height","1px")},m(c,o){H(c,e,o),t&&t.m(e,null)},p(c,o){c[5]?t?t.p(c,o):(t=xe(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&x(e),t&&t.d()}}}function xe(r){let e;return{c(){e=rt(r[6])},l(t){e=at(t,r[6])},m(t,c){H(t,e,c)},p(t,c){c&64&&st(e,t[6])},d(t){t&&x(e)}}}function Lt(r){let e,t,c,o,d;const n=[Rt,kt],f=[];function w(b,L){return b[0][1]?0:1}e=w(r),t=f[e]=n[e](r);let _=r[4]&&Ke(r);return{c(){t.c(),c=Ye(),_&&_.c(),o=J()},l(b){t.l(b),c=Qe(b),_&&_.l(b),o=J()},m(b,L){f[e].m(b,L),H(b,c,L),_&&_.m(b,L),H(b,o,L),d=!0},p(b,[L]){let R=e;e=w(b),e===R?f[e].p(b,L):(ie(),z(f[R],1,1,()=>{f[R]=null}),le(),t=f[e],t?t.p(b,L):(t=f[e]=n[e](b),t.c()),K(t,1),t.m(c.parentNode,c)),b[4]?_?_.p(b,L):(_=Ke(b),_.c(),_.m(o.parentNode,o)):_&&(_.d(1),_=null)},i(b){d||(K(t),d=!0)},o(b){z(t),d=!1},d(b){f[e].d(b),b&&x(c),_&&_.d(b),b&&x(o)}}}function $t(r,e,t){let{stores:c}=e,{page:o}=e,{components:d}=e,{form:n}=e,{data_0:f=null}=e,{data_1:w=null}=e;Ze(c.page.notify);let _=!1,b=!1,L=null;return be(()=>{const R=c.page.subscribe(()=>{_&&(t(5,b=!0),t(6,L=document.title||"untitled page"))});return t(4,_=!0),R}),r.$$set=R=>{"stores"in R&&t(7,c=R.stores),"page"in R&&t(8,o=R.page),"components"in R&&t(0,d=R.components),"form"in R&&t(1,n=R.form),"data_0"in R&&t(2,f=R.data_0),"data_1"in R&&t(3,w=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&c.page.set(o)},[d,n,f,w,_,b,L,c,o]}class Pt extends He{constructor(e){super(),Me(this,e,$t,Lt,Xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ot={},ce=[()=>W(()=>import("./chunks/0-e4e336f4.js"),["chunks/0-e4e336f4.js","chunks/_layout-30fd11f6.js","components/pages/_layout.svelte-ec9d6fbe.js","assets/_layout-06d245af.css","chunks/index-10bc4979.js"],import.meta.url),()=>W(()=>import("./chunks/1-40ba13fa.js"),["chunks/1-40ba13fa.js","components/error.svelte-4509af47.js","chunks/index-10bc4979.js","chunks/stores-4b43bf42.js","chunks/singletons-076c7a49.js"],import.meta.url),()=>W(()=>import("./chunks/2-8e8ae7e1.js"),["chunks/2-8e8ae7e1.js","components/pages/_page.svelte-cd90e6d3.js","chunks/index-10bc4979.js","chunks/stores-4b43bf42.js","chunks/singletons-076c7a49.js","chunks/__vite-browser-external-c158c41d.js","chunks/ExternalLink-69462d36.js","chunks/Header-57b98e45.js"],import.meta.url),()=>W(()=>import("./chunks/3-81b50dcd.js"),["chunks/3-81b50dcd.js","components/pages/projects/_page.svelte-f3e6c2ad.js","chunks/index-10bc4979.js","chunks/stores-4b43bf42.js","chunks/singletons-076c7a49.js","chunks/__vite-browser-external-c158c41d.js","chunks/functions-ca609d86.js","chunks/Header-57b98e45.js"],import.meta.url),()=>W(()=>import("./chunks/4-d04bba6c.js"),["chunks/4-d04bba6c.js","components/pages/projects/_slug_/_page.svelte-bcb8e3f0.js","chunks/index-10bc4979.js","chunks/stores-4b43bf42.js","chunks/singletons-076c7a49.js","chunks/__vite-browser-external-c158c41d.js","chunks/functions-ca609d86.js","chunks/ExternalLink-69462d36.js"],import.meta.url),()=>W(()=>import("./chunks/5-90ce9b01.js"),["chunks/5-90ce9b01.js","components/pages/resume/_page.svelte-8e2c8f7c.js","chunks/index-10bc4979.js","chunks/stores-4b43bf42.js","chunks/singletons-076c7a49.js","chunks/__vite-browser-external-c158c41d.js","chunks/ExternalLink-69462d36.js","chunks/Header-57b98e45.js"],import.meta.url)],jt=[],It={"":[2],projects:[3],resume:[5],"projects/[slug]":[-5]},Ut={handleError:({error:r})=>(console.error(r),{message:"Internal Error"})},At="/__data.js",We="sveltekit:scroll",B="sveltekit:index",re=Et(ce,jt,It,Ot),Ee=ce[0],ke=ce[1];Ee();ke();let te={};try{te=JSON.parse(sessionStorage[We])}catch{}function ye(r){te[r]=ve()}function Tt({target:r,base:e,trailing_slash:t}){var Te;const c=[],o={id:null,promise:null},d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},f=!1,w=!0,_=!1,b=1,L=null,R=!1,T,j=(Te=history.state)==null?void 0:Te[B];j||(j=Date.now(),history.replaceState({...history.state,[B]:j},"",location.href));const D=te[j];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let C=!1,V,Le;function $e(){if(!L){const a=new URL(location.href);L=Promise.resolve().then(async()=>{const i=pe(a,!0);await Oe(i,a,[]),L=null,R=!1})}return L}async function fe(a,{noscroll:i=!1,replaceState:p=!1,keepfocus:s=!1,state:l={}},h){return typeof a=="string"&&(a=new URL(a,qe(document))),he({url:a,scroll:i?ve():null,keepfocus:s,redirect_chain:h,details:{state:l,replaceState:p},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(a){const i=pe(a,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o.promise=Ue(i),o.id=i.id,o.promise}async function Oe(a,i,p,s,l){var v,E;const h=Le={};let m=a&&await Ue(a);if(!m&&i.origin===location.origin&&i.pathname===location.pathname&&(m=await ne({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!m)return await Z(i),!1;if(i=(a==null?void 0:a.url)||i,Le!==h)return!1;if(c.length=0,m.type==="redirect")if(p.length>10||p.includes(i.pathname))m=await ne({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return fe(new URL(m.location,i).href,{},[...p,i.pathname]),!1;else((E=(v=m.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await G.updated.check()&&await Z(i);if(_=!0,s&&s.details){const{details:y}=s,g=y.replaceState?0:1;y.state[B]=j+=g,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(f){n=m.state,m.props.page&&(m.props.page.url=i);const y=se();T.$set(m.props),y()}else je(m);if(s){const{scroll:y,keepfocus:g}=s;if(!g){const k=document.body,I=k.getAttribute("tabindex");k.tabIndex=-1,k.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),I!==null?k.setAttribute("tabindex",I):k.removeAttribute("tabindex")}if(await Ve(),w){const k=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):k?k.scrollIntoView():scrollTo(0,0)}}else await Ve();o.promise=null,o.id=null,w=!0,m.props.page&&(V=m.props.page),l&&l(),_=!1}function je(a){var l,h;n=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),V=a.props.page;const p=se();T=new Pt({target:r,props:{...a.props,stores:G},hydrate:!0}),p();const s={from:null,to:ae("to",{params:n.params,routeId:(h=(l=n.route)==null?void 0:l.id)!=null?h:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(m=>m(s)),f=!0}async function Q({url:a,params:i,branch:p,status:s,error:l,route:h,form:m}){var I;const v=p.filter(Boolean),E={type:"loaded",state:{url:a,params:i,branch:p,error:l,route:h,session_id:b},props:{components:v.map($=>$.node.component)}};m!==void 0&&(E.props.form=m);let y={},g=!V;for(let $=0;$<v.length;$+=1){const U=v[$];y={...y,...U.data},(g||!n.branch.some(A=>A===U))&&(E.props[`data_${$}`]=y,g=g||Object.keys((I=U.data)!=null?I:{}).length>0)}if(g||(g=Object.keys(V.data).length!==Object.keys(y).length),!n.url||a.href!==n.url.href||n.error!==l||g){E.props.page={error:l,params:i,routeId:h&&h.id,status:s,url:a,data:g?y:V.data};const $=(U,A)=>{Object.defineProperty(E.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${A}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function ue({loader:a,parent:i,url:p,params:s,routeId:l,server_data_node:h}){var y,g,k,I,$;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let U=function(...u){for(const S of u){const{href:P}=new URL(S,p);v.dependencies.add(P)}};const A={};for(const u in s)Object.defineProperty(A,u,{get(){return v.params.add(u),s[u]},enumerable:!0});const q={routeId:l,params:A,data:(g=h==null?void 0:h.data)!=null?g:null,url:pt(p,()=>{v.url=!0}),async fetch(u,S){let P;typeof u=="string"?P=u:(P=u.url,S={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...S});const O=new URL(P,p).href;return U(O),f?gt(O,S):_t(P,O,S)},setHeaders:()=>{},depends:U,parent(){return v.parent=!0,i()}};Object.defineProperties(q,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(k=await E.shared.load.call(null,q))!=null?k:null}return{node:E,loader:a,server:h,shared:(I=E.shared)!=null&&I.load?{type:"data",data:m,uses:v}:null,data:($=m!=null?m:h==null?void 0:h.data)!=null?$:null}}function Ie(a,i,p){if(R)return!0;if(!p)return!1;if(p.parent&&i||a.url&&p.url)return!0;for(const s of a.params)if(p.params.has(s))return!0;for(const s of p.dependencies)if(c.some(l=>l(new URL(s))))return!0;return!1}function de(a,i){var p,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function Ue({id:a,invalidating:i,url:p,params:s,route:l}){var q;if(o.id===a&&o.promise)return o.promise;const{errors:h,layouts:m,leaf:v}=l,E=n.url&&{url:a!==n.url.pathname+n.url.search,params:Object.keys(s).filter(u=>n.params[u]!==s[u])},y=[...m,v];h.forEach(u=>u==null?void 0:u().catch(()=>{})),y.forEach(u=>u==null?void 0:u[1]().catch(()=>{}));let g=null;const k=y.reduce((u,S,P)=>{var F;const O=n.branch[P],ee=!!(S!=null&&S[0])&&((O==null?void 0:O.loader)!==S[1]||Ie(E,u.some(Boolean),(F=O.server)==null?void 0:F.uses));return u.push(ee),u},[]);if(k.some(Boolean)){try{g=await Fe(p,k)}catch(u){return ne({status:500,error:u,url:p,routeId:l.id})}if(g.type==="redirect")return g}const I=g==null?void 0:g.nodes;let $=!1;const U=y.map(async(u,S)=>{var me,De;if(!u)return;const P=n.branch[S],O=(me=I==null?void 0:I[S])!=null?me:null;if((!O||O.type==="skip")&&u[1]===(P==null?void 0:P.loader)&&!Ie(E,$,(De=P.shared)==null?void 0:De.uses))return P;if($=!0,(O==null?void 0:O.type)==="error")throw O;return ue({loader:u[1],url:p,params:s,routeId:l.id,parent:async()=>{var Ce;const Ne={};for(let _e=0;_e<S;_e+=1)Object.assign(Ne,(Ce=await U[_e])==null?void 0:Ce.data);return Ne},server_data_node:de(O,P==null?void 0:P.server)})});for(const u of U)u.catch(()=>{});const A=[];for(let u=0;u<y.length;u+=1)if(y[u])try{A.push(await U[u])}catch(S){if(S instanceof ze)return{type:"redirect",location:S.location};let P=500,O;for(I!=null&&I.includes(S)?(P=(q=S.status)!=null?q:P,O=S.error):S instanceof we?(P=S.status,O=S.body):O=Ge(S,{params:s,url:p,routeId:l.id});u--;)if(h[u]){let ee,F=u;for(;!A[F];)F-=1;try{return ee={node:await h[u](),loader:h[u],data:{},server:null,shared:null},await Q({url:p,params:s,branch:A.slice(0,F+1).concat(ee),status:P,error:O,route:l})}catch{continue}}await Z(p);return}else A.push(void 0);return await Q({url:p,params:s,branch:A,status:200,error:null,route:l,form:i?void 0:null})}async function ne({status:a,error:i,url:p,routeId:s}){var y;const l={},h=await Ee();let m=null;if(h.server)try{const g=await Fe(p,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;m=(y=g.nodes[0])!=null?y:null}catch{await Z(p);return}const v=await ue({loader:Ee,url:p,params:l,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(m)}),E={node:await ke(),loader:ke,shared:null,server:null,data:null};return await Q({url:p,params:l,branch:[v,E],status:a,error:i instanceof we?i.body:Ge(i,{url:p,params:l,routeId:null}),route:null})}function pe(a,i){if(Ae(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const s of re){const l=s.exec(p);if(l){const h=new URL(a.origin+ft(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:i,route:s,params:ut(l),url:h}}}}function Ae(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function he({url:a,scroll:i,keepfocus:p,redirect_chain:s,details:l,type:h,delta:m,accepted:v,blocked:E}){var $,U,A,q;let y=!1;const g=pe(a,!1),k={from:ae("from",{params:n.params,routeId:(U=($=n.route)==null?void 0:$.id)!=null?U:null,url:n.url}),to:ae("to",{params:(A=g==null?void 0:g.params)!=null?A:null,routeId:(q=g==null?void 0:g.route.id)!=null?q:null,url:a}),type:h};m!==void 0&&(k.delta=m);const I={...k,cancel:()=>{y=!0}};if(d.before_navigate.forEach(u=>u(I)),y){E();return}ye(j),v(),f&&G.navigating.set(k),await Oe(g,a,s,{scroll:i,keepfocus:p,details:l},()=>{d.after_navigate.forEach(u=>u(k)),G.navigating.set(null)})}function Z(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{be(()=>(d.after_navigate.push(a),()=>{const i=d.after_navigate.indexOf(a);d.after_navigate.splice(i,1)}))},before_navigate:a=>{be(()=>(d.before_navigate.push(a),()=>{const i=d.before_navigate.indexOf(a);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(_||!f)&&(w=!1)},goto:(a,i={})=>fe(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")c.push(a);else{const{href:i}=new URL(a,location.href);c.push(p=>p.href===i)}return $e()},invalidateAll:()=>(R=!0,$e()),prefetch:async a=>{const i=new URL(a,qe(document));await Pe(i)},prefetch_routes:async a=>{const p=(a?re.filter(s=>a.some(l=>s.exec(l))):re).map(s=>Promise.all([...s.layouts,s.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:p,route:s}=n;if(!s)return;let l=n.branch.length;for(;l--;)if(s.errors[l]){let h,m=l;for(;!p[m];)m-=1;try{h={node:await s.errors[l](),loader:s.errors[l],data:{},server:null,shared:null};const v=await Q({url:i,params:n.params,branch:p.slice(0,m+1).concat(h),status:500,error:a.error,route:s});n=v.state;const E=se();T.$set(v.props),E();return}catch{continue}}}else if(a.type==="redirect")fe(a.location,{},[]);else{const i={form:a.data};a.status!==V.status&&(i.page={...V,status:a.status});const p=se();T.$set(i),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,v;let l=!1;const h={from:ae("from",{params:n.params,routeId:(v=(m=n.route)==null?void 0:m.id)!=null?v:null,url:n.url}),to:null,type:"unload",cancel:()=>l=!0};d.before_navigate.forEach(E=>E(h)),l?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(j);try{sessionStorage[We]=JSON.stringify(te)}catch{}}});const a=s=>{const{url:l,options:h}=Be(s);if(l&&h.prefetch){if(Ae(l))return;Pe(l)}};let i;const p=s=>{clearTimeout(i),i=setTimeout(()=>{var l;(l=s.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:l,url:h,options:m}=Be(s);if(!l||!h)return;const v=l instanceof SVGAElement;if(!v&&!(h.protocol==="https:"||h.protocol==="http:"))return;const E=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||E.includes("external")||m.reload||(v?l.target.baseVal:l.target))return;const[y,g]=h.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){C=!0,ye(j),G.page.set({...V,url:h}),G.page.notify();return}he({url:h,scroll:m.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[B]===j)return;const l=s.state[B]-j;he({url:new URL(location.href),scroll:te[s.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=s.state[B]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[B]:++j},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&G.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:p,params:s,routeId:l,data:h,form:m})=>{var y;const v=new URL(location.href);let E;try{const g=p.map(async(k,I)=>{const $=h[I];return ue({loader:ce[k],url:v,params:s,routeId:l,parent:async()=>{const U={};for(let A=0;A<I;A+=1)Object.assign(U,(await g[A]).data);return U},server_data_node:de($)})});E=await Q({url:v,params:s,branch:await Promise.all(g),status:a,error:i,form:m,route:(y=re.find(k=>k.id===l))!=null?y:null})}catch(g){const k=g;if(k instanceof ze){await Z(new URL(g.location,location.href));return}E=await ne({status:k instanceof we?k.status:500,error:k,url:v,routeId:l})}je(E)}}}let Dt=1;async function Fe(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+At,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(Dt++)),await W(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}function Ge(r,e){var t;return(t=Ut.handleError({error:r,event:e}))!=null?t:{message:"Internal Error"}}const Nt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ae(r,e){for(const t of Nt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)}});return e}function se(){return()=>{}}async function qt({env:r,hydrate:e,paths:t,target:c,trailing_slash:o}){ot(t);const d=Tt({target:c,base:t.base,trailing_slash:o});it({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{qt as start};
