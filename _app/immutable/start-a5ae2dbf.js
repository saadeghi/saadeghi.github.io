import{S as rt,i as ot,s as st,a as it,e as B,c as lt,b as J,g as de,t as F,d as pe,f as M,h as G,j as ct,o as Ie,k as ft,l as ut,m as dt,n as be,p as V,q as pt,r as ht,u as mt,v as X,w as Z,x as Pe,y as x,z as Q,A as fe}from"./chunks/index-6c33c1a3.js";import{S as et,I as C,g as Je,f as Ke,a as Ee,b as ue,s as q,i as ze,c as ae,P as We,d as _t,e as gt,h as yt}from"./chunks/singletons-5fabc32d.js";function wt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function vt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(a,e){const n=new URL(a);for(const i of Et){let o=n[i];Object.defineProperty(n,i,{get(){return e(),o},enumerable:!0,configurable:!0})}return Rt(n),n}function Rt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const St="/__data.json";function Lt(a){return a.replace(/\/$/,"")+St}function It(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&re.delete(Ue(a)),he(a,e));const re=new Map;function At(a,e){const n=Ue(a,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:o,...d}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&re.set(n,{body:o,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,d))}return he(a,e)}function Ot(a,e,n){if(re.size>0){const i=Ue(a,n),o=re.get(i);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);re.delete(i)}}return he(e,n)}function Ue(a,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${It(e.body)}"]`),i}const Pt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ut(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Nt(a).map(i=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,h)=>{if(h%2){if(_.startsWith("x+"))return ke(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ke(String.fromCharCode(..._.slice(2).split("-").map(I=>parseInt(I,16))));const g=Pt.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,S,T,D]=g;return e.push({name:T,matcher:D,optional:!!w,rest:!!S,chained:S?h===1&&t[0]==="":!1}),S?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return ke(_)}).join("")}).join("")}/?$`),params:e}}function $t(a){return!/^\([^)]+\)$/.test(a)}function Nt(a){return a.slice(1).split("/").filter($t)}function Tt(a,e,n){const i={},o=a.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let _=o[t];if(f.chained&&f.rest&&d&&(_=_?d+"/"+_:d),d="",_===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](_)){if(f.optional&&f.chained){let h=o.indexOf(void 0,t);if(h===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=_;else return}for(;h>=t;)o[h]=o[h-1],h-=1;continue}return}i[f.name]=_}}if(!d)return i}function ke(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(a,e,n,i){const o=new Set(e);return Object.entries(n).map(([f,[_,h,g]])=>{const{pattern:w,params:S}=Ut(f),T={id:f,exec:D=>{const I=w.exec(D);if(I)return Tt(I,S,i)},errors:[1,...g||[]].map(D=>a[D]),layouts:[0,...h||[]].map(t),leaf:d(_)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function d(f){const _=f<0;return _&&(f=~f),[_,a[f]]}function t(f){return f===void 0?f:[o.has(f),a[f]]}}function Dt(a){let e,n,i;var o=a[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=X(o,d(a))),{c(){e&&Z(e.$$.fragment),n=B()},l(t){e&&Pe(e.$$.fragment,t),n=B()},m(t,f){e&&x(e,t,f),J(t,n,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),o!==(o=t[0][0])){if(e){de();const h=e;F(h.$$.fragment,1,0,()=>{Q(h,1)}),pe()}o?(e=X(o,d(t)),Z(e.$$.fragment),M(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&M(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&Q(e,t)}}}function Ct(a){let e,n,i;var o=a[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return o&&(e=X(o,d(a))),{c(){e&&Z(e.$$.fragment),n=B()},l(t){e&&Pe(e.$$.fragment,t),n=B()},m(t,f){e&&x(e,t,f),J(t,n,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){de();const h=e;F(h.$$.fragment,1,0,()=>{Q(h,1)}),pe()}o?(e=X(o,d(t)),Z(e.$$.fragment),M(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&M(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&Q(e,t)}}}function Vt(a){let e,n,i;var o=a[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=X(o,d(a))),{c(){e&&Z(e.$$.fragment),n=B()},l(t){e&&Pe(e.$$.fragment,t),n=B()},m(t,f){e&&x(e,t,f),J(t,n,f),i=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),o!==(o=t[0][1])){if(e){de();const h=e;F(h.$$.fragment,1,0,()=>{Q(h,1)}),pe()}o?(e=X(o,d(t)),Z(e.$$.fragment),M(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&M(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&Q(e,t)}}}function Ye(a){let e,n=a[5]&&Xe(a);return{c(){e=ft("div"),n&&n.c(),this.h()},l(i){e=ut(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=dt(e);n&&n.l(o),o.forEach(G),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(i,o){J(i,e,o),n&&n.m(e,null)},p(i,o){i[5]?n?n.p(i,o):(n=Xe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&G(e),n&&n.d()}}}function Xe(a){let e;return{c(){e=pt(a[6])},l(n){e=ht(n,a[6])},m(n,i){J(n,e,i)},p(n,i){i&64&&mt(e,n[6])},d(n){n&&G(e)}}}function qt(a){let e,n,i,o,d;const t=[Ct,Dt],f=[];function _(g,w){return g[0][1]?0:1}e=_(a),n=f[e]=t[e](a);let h=a[4]&&Ye(a);return{c(){n.c(),i=it(),h&&h.c(),o=B()},l(g){n.l(g),i=lt(g),h&&h.l(g),o=B()},m(g,w){f[e].m(g,w),J(g,i,w),h&&h.m(g,w),J(g,o,w),d=!0},p(g,[w]){let S=e;e=_(g),e===S?f[e].p(g,w):(de(),F(f[S],1,1,()=>{f[S]=null}),pe(),n=f[e],n?n.p(g,w):(n=f[e]=t[e](g),n.c()),M(n,1),n.m(i.parentNode,i)),g[4]?h?h.p(g,w):(h=Ye(g),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i(g){d||(M(n),d=!0)},o(g){F(n),d=!1},d(g){f[e].d(g),g&&G(i),h&&h.d(g),g&&G(o)}}}function Bt(a,e,n){let{stores:i}=e,{page:o}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;ct(i.page.notify);let h=!1,g=!1,w=null;return Ie(()=>{const S=i.page.subscribe(()=>{h&&(n(5,g=!0),n(6,w=document.title||"untitled page"))});return n(4,h=!0),S}),a.$$set=S=>{"stores"in S&&n(7,i=S.stores),"page"in S&&n(8,o=S.page),"components"in S&&n(0,d=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,_=S.data_1)},a.$$.update=()=>{a.$$.dirty&384&&i.page.set(o)},[d,t,f,_,h,g,w,i,o]}class Ft extends rt{constructor(e){super(),ot(this,e,Bt,qt,st,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Mt="modulepreload",Gt=function(a,e){return new URL(a,e).href},Ze={},W=function(e,n,i){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Gt(d,i),d in Ze)return;Ze[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const w=o[g];if(w.href===d&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const h=document.createElement("link");if(h.rel=t?"stylesheet":Mt,t||(h.as="script",h.crossOrigin=""),h.href=d,document.head.appendChild(h),t)return new Promise((g,w)=>{h.addEventListener("load",g),h.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Ht={},me=[()=>W(()=>import("./chunks/0-0f2f437a.js"),["./chunks/0-0f2f437a.js","./chunks/_layout-733a617e.js","./components/pages/_layout.svelte-1cc43fef.js","./chunks/index-6c33c1a3.js","./assets/_layout-bef60b93.css"],import.meta.url),()=>W(()=>import("./chunks/1-fd2865a2.js"),["./chunks/1-fd2865a2.js","./components/error.svelte-bfad104c.js","./chunks/index-6c33c1a3.js","./chunks/stores-99ec1d34.js","./chunks/singletons-5fabc32d.js"],import.meta.url),()=>W(()=>import("./chunks/2-71a5ee57.js"),["./chunks/2-71a5ee57.js","./components/pages/_page.svelte-c0f8d1e6.js","./chunks/index-6c33c1a3.js","./chunks/stores-99ec1d34.js","./chunks/singletons-5fabc32d.js","./chunks/__vite-browser-external-e7d434ca.js","./chunks/ExternalLink-4cb996b4.js","./chunks/Header-94ff33c1.js"],import.meta.url),()=>W(()=>import("./chunks/3-f30967fd.js"),["./chunks/3-f30967fd.js","./components/pages/projects/_page.svelte-42b226dc.js","./chunks/index-6c33c1a3.js","./chunks/stores-99ec1d34.js","./chunks/singletons-5fabc32d.js","./chunks/__vite-browser-external-e7d434ca.js","./chunks/functions-17e0eab6.js","./chunks/Header-94ff33c1.js"],import.meta.url),()=>W(()=>import("./chunks/4-8cf9a5ae.js"),["./chunks/4-8cf9a5ae.js","./components/pages/projects/_slug_/_page.svelte-0a5c7be0.js","./chunks/index-6c33c1a3.js","./chunks/stores-99ec1d34.js","./chunks/singletons-5fabc32d.js","./chunks/__vite-browser-external-e7d434ca.js","./chunks/functions-17e0eab6.js","./chunks/ExternalLink-4cb996b4.js"],import.meta.url),()=>W(()=>import("./chunks/5-5368b490.js"),["./chunks/5-5368b490.js","./components/pages/resume/_page.svelte-6f255326.js","./chunks/index-6c33c1a3.js","./chunks/stores-99ec1d34.js","./chunks/singletons-5fabc32d.js","./chunks/__vite-browser-external-e7d434ca.js","./chunks/ExternalLink-4cb996b4.js","./chunks/Header-94ff33c1.js"],import.meta.url)],tt=[],Jt={"/":[2],"/projects":[3],"/projects/[slug]":[-5],"/resume":[5]},Kt={handleError:({error:a})=>{console.error(a)}};let Ae=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},xe=class{constructor(e,n){this.status=e,this.location=n}};async function zt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([i,o])=>[i,await o])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,xt=-5,Qt=-6;function en(a){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function i(o,d=!1){if(o===Wt)return;if(o===Xt)return NaN;if(o===Zt)return 1/0;if(o===xt)return-1/0;if(o===Qt)return-0;if(d)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const _=new Set;n[o]=_;for(let w=1;w<t.length;w+=1)_.add(i(t[w]));break;case"Map":const h=new Map;n[o]=h;for(let w=1;w<t.length;w+=2)h.set(i(t[w]),i(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[o]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=i(t[w+1]);break}else{const f=new Array(t.length);n[o]=f;for(let _=0;_<t.length;_+=1){const h=t[_];h!==Yt&&(f[_]=i(h))}}else{const f={};n[o]=f;for(const _ in t){const h=t[_];f[_]=i(h)}}return n[o]}return i(0)}function tn(a){return a.filter(e=>e!=null)}const Re=jt(me,tt,Jt,Ht),nt=me[0],Oe=me[1];nt();Oe();let Y={};try{Y=JSON.parse(sessionStorage[et])}catch{}function Se(a){Y[a]=ae()}function nn({target:a,base:e}){var Me;const n=document.documentElement,i=[];let o=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,h=!0,g=!1,w=!1,S=!1,T=!1,D,I=(Me=history.state)==null?void 0:Me[C];I||(I=Date.now(),history.replaceState({...history.state,[C]:I},"",location.href));const _e=Y[I];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let H,$e,oe;async function Ne(){oe=oe||Promise.resolve(),await oe,oe=null;const r=new URL(location.href),s=le(r,!0);o=null,await je(s,r,[])}async function ge(r,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:u=!1},m,b){return typeof r=="string"&&(r=new URL(r,Je(document))),ce({url:r,scroll:s?ae():null,keepfocus:l,redirect_chain:m,details:{state:p,replaceState:c},nav_token:b,accepted:()=>{u&&(T=!0)},blocked:()=>{},type:"goto"})}async function Te(r){const s=le(r,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return o={id:s.id,promise:Ve(s).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function se(...r){const c=Re.filter(l=>r.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function je(r,s,c,l,p={},u){var b,v;$e=p;let m=r&&await Ve(r);if(m||(m=await Fe(s,{id:null},await ne(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(r==null?void 0:r.url)||s,$e!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(s.pathname))m=await ie({status:500,error:await ne(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return ge(new URL(m.location,s).href,{},[...c,s.pathname],p),!1;else((v=(b=m.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await q.updated.check()&&await te(s);if(i.length=0,T=!1,g=!0,l&&l.details){const{details:y}=l,k=y.replaceState?0:1;y.state[C]=I+=k,history[y.replaceState?"replaceState":"pushState"](y.state,"",s)}if(o=null,_?(t=m.state,m.props.page&&(m.props.page.url=s),D.$set(m.props)):De(m),l){const{scroll:y,keepfocus:k}=l,{activeElement:P}=document;await fe();const j=document.activeElement!==P&&document.activeElement!==document.body;if(!k&&!j&&await Le(),h){const L=s.hash&&document.getElementById(s.hash.slice(1));y?scrollTo(y.x,y.y):L?L.scrollIntoView():scrollTo(0,0)}}else await fe();h=!0,m.props.page&&(H=m.props.page),u&&u(),g=!1}function De(r){var l;t=r.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),H=r.props.page,D=new Ft({target:a,props:{...r.props,stores:q},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(p=>p(c)),_=!0}async function ee({url:r,params:s,branch:c,status:l,error:p,route:u,form:m}){let b="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(b=L.slash);r.pathname=wt(r.pathname,b),r.search=r.search;const v={type:"loaded",state:{url:r,params:s,branch:c,error:p,route:u},props:{components:tn(c).map(L=>L.node.component)}};m!==void 0&&(v.props.form=m);let y={},k=!H,P=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const E=c[L],U=t.branch[L];(E==null?void 0:E.data)!==(U==null?void 0:U.data)&&(k=!0),E&&(y={...y,...E.data},k&&(v.props[`data_${P}`]=y),P+=1)}return(!t.url||r.href!==t.url.href||t.error!==p||m!==void 0&&m!==H.form||k)&&(v.props.page={error:p,params:s,route:{id:(u==null?void 0:u.id)??null},status:l,url:new URL(r),form:m??null,data:k?y:H.data}),v}async function ye({loader:r,parent:s,url:c,params:l,route:p,server_data_node:u}){var y,k,P;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await r();if((y=v.universal)!=null&&y.load){let j=function(...E){for(const U of E){const{href:N}=new URL(U,c);b.dependencies.add(N)}};const L={route:{get id(){return b.route=!0,p.id}},params:new Proxy(l,{get:(E,U)=>(b.params.add(U),E[U])}),data:(u==null?void 0:u.data)??null,url:kt(c,()=>{b.url=!0}),async fetch(E,U){let N;E instanceof Request?(N=E.url,U={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...U}):N=E;const R=new URL(N,c).href;return j(R),_?Ot(N,R,U):At(N,U)},setHeaders:()=>{},depends:j,parent(){return b.parent=!0,s()}};m=await v.universal.load.call(null,L)??null,m=m?await zt(m):null}return{node:v,loader:r,server:u,universal:(k=v.universal)!=null&&k.load?{type:"data",data:m,uses:b}:null,data:m??(u==null?void 0:u.data)??null,slash:((P=v.universal)==null?void 0:P.trailingSlash)??(u==null?void 0:u.slash)}}function Ce(r,s,c,l,p){if(T)return!0;if(!l)return!1;if(l.parent&&r||l.route&&s||l.url&&c)return!0;for(const u of l.params)if(p[u]!==t.params[u])return!0;for(const u of l.dependencies)if(i.some(m=>m(new URL(u))))return!0;return!1}function we(r,s){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?s??null:null}async function Ve({id:r,invalidating:s,url:c,params:l,route:p}){if((o==null?void 0:o.id)===r)return o.promise;const{errors:u,layouts:m,leaf:b}=p,v=[...m,b];u.forEach(R=>R==null?void 0:R().catch(()=>{})),v.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let y=null;const k=t.url?r!==t.url.pathname+t.url.search:!1,P=t.route?p.id!==t.route.id:!1,j=v.reduce((R,O,$)=>{var z;const A=t.branch[$],K=!!(O!=null&&O[0])&&((A==null?void 0:A.loader)!==O[1]||Ce(R.some(Boolean),P,k,(z=A.server)==null?void 0:z.uses,l));return R.push(K),R},[]);if(j.some(Boolean)){try{y=await Qe(c,j)}catch(R){return ie({status:500,error:await ne(R,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const L=y==null?void 0:y.nodes;let E=!1;const U=v.map(async(R,O)=>{var z;if(!R)return;const $=t.branch[O],A=L==null?void 0:L[O];if((!A||A.type==="skip")&&R[1]===($==null?void 0:$.loader)&&!Ce(E,P,k,(z=$.universal)==null?void 0:z.uses,l))return $;if(E=!0,(A==null?void 0:A.type)==="error")throw A;return ye({loader:R[1],url:c,params:l,route:p,parent:async()=>{var He;const Ge={};for(let ve=0;ve<O;ve+=1)Object.assign(Ge,(He=await U[ve])==null?void 0:He.data);return Ge},server_data_node:we(A===void 0&&R[0]?{type:"skip"}:A??null,$==null?void 0:$.server)})});for(const R of U)R.catch(()=>{});const N=[];for(let R=0;R<v.length;R+=1)if(v[R])try{N.push(await U[R])}catch(O){if(O instanceof xe)return{type:"redirect",location:O.location};let $=500,A;if(L!=null&&L.includes(O))$=O.status??$,A=O.error;else if(O instanceof Ae)$=O.status,A=O.body;else{if(await q.updated.check())return await te(c);A=await ne(O,{params:l,url:c,route:{id:p.id}})}const K=await qe(R,N,u);return K?await ee({url:c,params:l,branch:N.slice(0,K.idx).concat(K.node),status:$,error:A,route:p}):await Fe(c,{id:p.id},A,$)}else N.push(void 0);return await ee({url:c,params:l,branch:N,status:200,error:null,route:p,form:s?void 0:null})}async function qe(r,s,c){for(;r--;)if(c[r]){let l=r;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:r,error:s,url:c,route:l}){const p={};let u=null;if(tt[0]===0)try{const y=await Qe(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;u=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await te(c)}const b=await ye({loader:nt,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:we(u)}),v={node:await Oe(),loader:Oe,universal:null,server:null,data:null};return await ee({url:c,params:p,branch:[b,v],status:r,error:s,route:null})}function le(r,s){if(ze(r,e))return;const c=vt(r.pathname.slice(e.length)||"/");for(const l of Re){const p=l.exec(c);if(p)return{id:r.pathname+r.search,invalidating:s,route:l,params:bt(p),url:r}}}function Be({url:r,type:s,intent:c,delta:l}){var b,v;let p=!1;const u={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:r},willUnload:!c,type:s};l!==void 0&&(u.delta=l);const m={...u,cancel:()=>{p=!0}};return w||d.before_navigate.forEach(y=>y(m)),p?null:u}async function ce({url:r,scroll:s,keepfocus:c,redirect_chain:l,details:p,type:u,delta:m,nav_token:b,accepted:v,blocked:y}){const k=le(r,!1),P=Be({url:r,type:u,delta:m,intent:k});if(!P){y();return}Se(I),v(),w=!0,_&&q.navigating.set(P),await je(k,r,l,{scroll:s,keepfocus:c,details:p},b,()=>{w=!1,d.after_navigate.forEach(j=>j(P)),q.navigating.set(null)})}async function Fe(r,s,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await ie({status:l,error:c,url:r,route:s}):await te(r)}function te(r){return location.href=r.href,new Promise(()=>{})}function at(){let r;n.addEventListener("mousemove",u=>{const m=u.target;clearTimeout(r),r=setTimeout(()=>{l(m,2)},20)});function s(u){l(u.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(u=>{for(const m of u)m.isIntersecting&&(se(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(u,m){const b=Ke(u,n);if(!b)return;const{url:v,external:y}=Ee(b,e);if(y)return;const k=ue(b);k.reload||(m<=k.preload_data?Te(v):m<=k.preload_code&&se(v.pathname))}function p(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:m,external:b}=Ee(u,e);if(b)continue;const v=ue(u);v.reload||(v.preload_code===We.viewport&&c.observe(u),v.preload_code===We.eager&&se(m.pathname))}}d.after_navigate.push(p),p()}return{after_navigate:r=>{Ie(()=>(d.after_navigate.push(r),()=>{const s=d.after_navigate.indexOf(r);d.after_navigate.splice(s,1)}))},before_navigate:r=>{Ie(()=>(d.before_navigate.push(r),()=>{const s=d.before_navigate.indexOf(r);d.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!_)&&(h=!1)},goto:(r,s={})=>ge(r,s,[]),invalidate:r=>{if(typeof r=="function")i.push(r);else{const{href:s}=new URL(r,location.href);i.push(c=>c.href===s)}return Ne()},invalidateAll:()=>(T=!0,Ne()),preload_data:async r=>{const s=new URL(r,Je(document));await Te(s)},preload_code:se,apply_action:async r=>{if(r.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await qe(t.branch.length,c,l.errors);if(p){const u=await ee({url:s,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:l});t=u.state,D.$set(u.props),fe().then(Le)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const s={form:r.data,page:{...H,form:r.data,status:r.status}};D.$set(s),r.type==="success"&&fe().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!w){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(u=>u(p))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(I);try{sessionStorage[et]=JSON.stringify(Y)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||at(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=Ke(s.composedPath()[0],n);if(!c)return;const{url:l,external:p,target:u}=Ee(c,e);if(!l)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const m=ue(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||m.reload){Be({url:l,type:"link"})||s.preventDefault(),w=!0;return}const[v,y]=l.href.split("#");if(y!==void 0&&v===location.href.split("#")[0]){S=!0,Se(I),t.url=l,q.page.set({...H,url:l}),q.page.notify();return}ce({url:l,scroll:m.noscroll?ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const u=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(ze(u,e))return;const m=s.target,{noscroll:b,reload:v}=ue(m);if(v)return;s.preventDefault(),s.stopPropagation();const y=new FormData(m),k=l==null?void 0:l.getAttribute("name");k&&y.append(k,(l==null?void 0:l.getAttribute("value"))??""),u.search=new URLSearchParams(y).toString(),ce({url:u,scroll:b?ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[C]){if(s.state[C]===I)return;const l=Y[s.state[C]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){Y[I]=ae(),I=s.state[C],scrollTo(l.x,l.y);return}const p=s.state[C]-I;ce({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=s.state[C]},blocked:()=>{history.go(-p)},type:"popstate",delta:p})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[C]:++I},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&q.navigating.set(null)})},_hydrate:async({status:r=200,error:s,node_ids:c,params:l,route:p,data:u,form:m})=>{f=!0;const b=new URL(location.href);({params:l={},route:p={id:null}}=le(b,!1)||{});let v;try{const y=c.map(async(k,P)=>{const j=u[P];return ye({loader:me[k],url:b,params:l,route:p,parent:async()=>{const L={};for(let E=0;E<P;E+=1)Object.assign(L,(await y[E]).data);return L},server_data_node:we(j)})});v=await ee({url:b,params:l,branch:await Promise.all(y),status:r,error:s,form:m,route:Re.find(({id:k})=>k===p.id)??null})}catch(y){if(y instanceof xe){await te(new URL(y.location,location.href));return}v=await ie({status:y instanceof Ae?y.status:500,error:await ne(y,{url:b,params:l,route:p}),url:b,route:p})}De(v)}}}async function Qe(a,e){var d;const n=new URL(a);n.pathname=Lt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await he(n.href),o=await i.json();if(!i.ok)throw new Error(o);return(d=o.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function ne(a,e){return a instanceof Ae?a.body:Kt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(i=>{setTimeout(()=>{var o;i((o=getSelection())==null?void 0:o.removeAllRanges())})})}}async function ln({env:a,hydrate:e,paths:n,target:i,version:o}){_t(n),yt(o);const d=nn({target:i,base:n.base});gt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{ln as start};
