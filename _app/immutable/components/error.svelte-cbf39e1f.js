import{S as j,i as w,s as z,k as b,p as c,a as C,e as A,b as m,y as v,q as d,n as N,f as u,C as B}from"../chunks/index-9b4f11f1.js";import{p as D}from"../chunks/stores-133e49df.js";function S(o){let r,f=o[0].error.frame+"",l;return{c(){r=b("pre"),l=c(f)},m(s,p){m(s,r,p),v(r,l)},p(s,p){p&1&&f!==(f=s[0].error.frame+"")&&d(l,f)},d(s){s&&u(r)}}}function E(o){let r,f=o[0].error.stack+"",l;return{c(){r=b("pre"),l=c(f)},m(s,p){m(s,r,p),v(r,l)},p(s,p){p&1&&f!==(f=s[0].error.stack+"")&&d(l,f)},d(s){s&&u(r)}}}function F(o){let r,f=o[0].status+"",l,s,p,k=o[0].error.message+"",$,q,n,_,t=o[0].error.frame&&S(o),i=o[0].error.stack&&E(o);return{c(){r=b("h1"),l=c(f),s=C(),p=b("pre"),$=c(k),q=C(),t&&t.c(),n=C(),i&&i.c(),_=A()},m(e,a){m(e,r,a),v(r,l),m(e,s,a),m(e,p,a),v(p,$),m(e,q,a),t&&t.m(e,a),m(e,n,a),i&&i.m(e,a),m(e,_,a)},p(e,[a]){a&1&&f!==(f=e[0].status+"")&&d(l,f),a&1&&k!==(k=e[0].error.message+"")&&d($,k),e[0].error.frame?t?t.p(e,a):(t=S(e),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null),e[0].error.stack?i?i.p(e,a):(i=E(e),i.c(),i.m(_.parentNode,_)):i&&(i.d(1),i=null)},i:N,o:N,d(e){e&&u(r),e&&u(s),e&&u(p),e&&u(q),t&&t.d(e),e&&u(n),i&&i.d(e),e&&u(_)}}}function G(o,r,f){let l;return B(o,D,s=>f(0,l=s)),[l]}class J extends j{constructor(r){super(),w(this,r,G,F,z,{})}}export{J as default};
