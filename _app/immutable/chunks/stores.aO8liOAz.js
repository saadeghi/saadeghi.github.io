import{J as n,K as i,m as o,s as c,g as a}from"./index-client.DPNa-s5k.js";import{s as f}from"./entry.mquyJ67F.js";function g(s,u,r){if(s==null)return u(void 0),n;const e=s.subscribe(u,r);return e.unsubscribe?()=>e.unsubscribe():e}function v(s,u,r){const e=r[u]??(r[u]={store:null,source:o(void 0),unsubscribe:n});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)c(e.source,void 0),e.unsubscribe=n;else{var t=!0;e.unsubscribe=g(s,b=>{t?(e.source.v=b,t=!1):c(e.source,b)})}return a(e.source)}function m(){const s={};return i(()=>{for(var u in s)s[u].unsubscribe()}),s}const p=()=>{const s=f;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},w={subscribe(s){return p().page.subscribe(s)}};export{v as a,w as p,m as s};
