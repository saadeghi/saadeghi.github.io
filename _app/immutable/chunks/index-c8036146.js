function E(){}function K(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function H(){return Object.create(null)}function p(t){t.forEach(P)}function q(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ht(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function Q(t){return Object.keys(t).length===0}function U(t,...n){if(t==null)return E;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(U(n,e))}function pt(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?K(e.ctx.slice(),t[1](i(n))):e.ctx}function gt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let l=0;l<c;l+=1)o[l]=n.dirty[l]|r[l];return o}return n.dirty|r}return n.dirty}function yt(t,n,e,i,r,o){if(r){const c=O(n,e,i,o);t.p(c,r)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function bt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function $t(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let N=!1;function V(){N=!0}function W(){N=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&s.push(a)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const u=n[s].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:X(1,r,y=>n[e[y]].claim_order,u))-1;i[s]=e[a]+1;const f=a+1;e[f]=s,r=Math.max(f,r)}const o=[],c=[];let l=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(o.push(n[s-1]);l>=s;l--)c.push(n[l]);l--}for(;l>=0;l--)c.push(n[l]);o.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<o.length&&c[s].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[s],a)}}function Z(t,n){if(N){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){N&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function wt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function Et(){return C(" ")}function vt(){return C("")}function Nt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){R(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(n(l)){const s=e(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(n(l)){const s=e(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function rt(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];e[l.name]||o.push(l.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Tt(t,n,e){return rt(t,n,e,G)}function ct(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function At(t){return ct(t," ")}function M(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function St(t,n){const e=M(t,"HTML_TAG_START",0),i=M(t,"HTML_TAG_END",e);if(e===i)return new D(void 0,n);R(t);const r=t.splice(e,i-e+1);v(r[0]),v(r[r.length-1]);const o=r.slice(1,r.length-1);for(const c of o)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new D(o,n)}function Ct(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function st(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function kt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,e.push(r)):o===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}class ot{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=G(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(v)}}class D extends ot{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}function Ht(t,n){return new t(n)}let m;function h(t){m=t}function g(){if(!m)throw new Error("Function called outside component initialization");return m}function Mt(t){g().$$.on_mount.push(t)}function Dt(t){g().$$.after_update.push(t)}function Bt(){const t=g();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=st(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Lt(t,n){return g().$$.context.set(t,n),n}function Pt(t){return g().$$.context.get(t)}const d=[],B=[],$=[],L=[],F=Promise.resolve();let A=!1;function I(){A||(A=!0,F.then(J))}function qt(){return I(),F}function S(t){$.push(t)}const T=new Set;let b=0;function J(){const t=m;do{for(;b<d.length;){const n=d[b];b++,h(n),lt(n.$$)}for(h(null),d.length=0,b=0;B.length;)B.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];T.has(e)||(T.add(e),e())}$.length=0}while(d.length);for(;L.length;)L.pop()();A=!1,T.clear(),h(t)}function lt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const w=new Set;let _;function Ot(){_={r:0,c:[],p:_}}function Gt(){_.r||p(_.c),_=_.p}function ut(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Rt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function zt(t,n){const e={},i={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],l=n[o];if(l){for(const s in c)s in l||(i[s]=1);for(const s in l)r[s]||(e[s]=l[s],r[s]=1);t[o]=l}else for(const s in c)r[s]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Ft(t){return typeof t=="object"&&t!==null?t:{}}function It(t){t&&t.c()}function Jt(t,n){t&&t.l(n)}function ft(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||S(()=>{const c=t.$$.on_mount.map(P).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(S)}function at(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(d.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Kt(t,n,e,i,r,o,c,l=[-1]){const s=m;h(t);const u=t.$$={fragment:null,ctx:[],props:o,update:E,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:n.target||s.$$.root};c&&c(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...j)=>{const k=j.length?j[0]:y;return u.ctx&&r(u.ctx[f],u.ctx[f]=k)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](k),a&&_t(t,f)),y}):[],u.update(),a=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){V();const f=it(n.target);u.fragment&&u.fragment.l(f),f.forEach(v)}else u.fragment&&u.fragment.c();n.intro&&ut(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),W(),J()}h(s)}class Qt{$destroy(){at(this,1),this.$destroy=E}$on(n,e){if(!q(e))return E;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{qt as A,E as B,pt as C,kt as D,Z as E,yt as F,xt as G,gt as H,mt as I,$t as J,K,bt as L,wt as M,zt as N,Ft as O,Pt as P,ht as Q,D as R,Qt as S,St as T,Bt as U,Lt as V,Et as a,nt as b,At as c,Gt as d,vt as e,ut as f,Ot as g,v as h,Kt as i,Dt as j,G as k,Tt as l,it as m,Nt as n,Mt as o,jt as p,C as q,ct as r,dt as s,Rt as t,Ct as u,Ht as v,It as w,Jt as x,ft as y,at as z};
