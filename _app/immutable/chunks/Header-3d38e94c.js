import{S as L,i as M,s as O,k as p,q as g,a as H,l as _,m as v,r as k,h,c as P,n as b,b as j,D as c,A as F,H as Q,u as C}from"./index-10bc4979.js";import{p as T}from"./stores-b750f1b4.js";function G(n){let e,a=n[0].firstname+"",l;return{c(){e=p("span"),l=g(a),this.h()},l(r){e=_(r,"SPAN",{class:!0});var t=v(e);l=k(t,a),t.forEach(h),this.h()},h(){b(e,"class","font-title font-bold")},m(r,t){j(r,e,t),c(e,l)},p(r,t){t&1&&a!==(a=r[0].firstname+"")&&C(l,a)},d(r){r&&h(e)}}}function J(n){let e,a=n[0].lastname+"",l;return{c(){e=p("span"),l=g(a),this.h()},l(r){e=_(r,"SPAN",{class:!0});var t=v(e);l=k(t,a),t.forEach(h),this.h()},h(){b(e,"class","font-title font-extralight")},m(r,t){j(r,e,t),c(e,l)},p(r,t){t&1&&a!==(a=r[0].lastname+"")&&C(l,a)},d(r){r&&h(e)}}}function K(n){let e,a=n[0].tagline+"",l;return{c(){e=p("h2"),l=g(a),this.h()},l(r){e=_(r,"H2",{class:!0});var t=v(e);l=k(t,a),t.forEach(h),this.h()},h(){b(e,"class","md:text-xl")},m(r,t){j(r,e,t),c(e,l)},p(r,t){t&1&&a!==(a=r[0].tagline+"")&&C(l,a)},d(r){r&&h(e)}}}function U(n){let e,a,l,r,t,E,N,S,R,A,V,y,D,m,d,$,x,i=n[0].firstname&&G(n),f=n[0].lastname&&J(n),u=n[0].tagline&&K(n);return{c(){e=p("div"),a=p("a"),l=g("About"),t=H(),E=p("a"),N=g("Resume"),R=H(),A=p("a"),V=g("Projects"),D=H(),m=p("div"),d=p("h1"),i&&i.c(),$=H(),f&&f.c(),x=H(),u&&u.c(),this.h()},l(s){e=_(s,"DIV",{class:!0});var o=v(e);a=_(o,"A",{class:!0,href:!0});var w=v(a);l=k(w,"About"),w.forEach(h),t=P(o),E=_(o,"A",{class:!0,href:!0});var z=v(E);N=k(z,"Resume"),z.forEach(h),R=P(o),A=_(o,"A",{class:!0,href:!0});var B=v(A);V=k(B,"Projects"),B.forEach(h),o.forEach(h),D=P(s),m=_(s,"DIV",{class:!0});var q=v(m);d=_(q,"H1",{class:!0});var I=v(d);i&&i.l(I),$=P(I),f&&f.l(I),I.forEach(h),x=P(q),u&&u.l(q),q.forEach(h),this.h()},h(){b(a,"class",r=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${n[1].url.pathname=="/"?"border-b-blue-600":""}`),b(a,"href","/"),b(E,"class",S=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${n[1].url.pathname=="/resume/"?"border-b-blue-600":""}`),b(E,"href","/resume/"),b(A,"class",y=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${n[1].url.pathname=="/projects/"?"border-b-blue-600":""}`),b(A,"href","/projects/"),b(e,"class","flex gap-10 print:hidden"),b(d,"class","text-3xl md:text-6xl"),b(m,"class","flex flex-col gap-6 print:mt-10 print:gap-2")},m(s,o){j(s,e,o),c(e,a),c(a,l),c(e,t),c(e,E),c(E,N),c(e,R),c(e,A),c(A,V),j(s,D,o),j(s,m,o),c(m,d),i&&i.m(d,null),c(d,$),f&&f.m(d,null),c(m,x),u&&u.m(m,null)},p(s,[o]){o&2&&r!==(r=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${s[1].url.pathname=="/"?"border-b-blue-600":""}`)&&b(a,"class",r),o&2&&S!==(S=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${s[1].url.pathname=="/resume/"?"border-b-blue-600":""}`)&&b(E,"class",S),o&2&&y!==(y=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${s[1].url.pathname=="/projects/"?"border-b-blue-600":""}`)&&b(A,"class",y),s[0].firstname?i?i.p(s,o):(i=G(s),i.c(),i.m(d,$)):i&&(i.d(1),i=null),s[0].lastname?f?f.p(s,o):(f=J(s),f.c(),f.m(d,null)):f&&(f.d(1),f=null),s[0].tagline?u?u.p(s,o):(u=K(s),u.c(),u.m(m,null)):u&&(u.d(1),u=null)},i:F,o:F,d(s){s&&h(e),s&&h(D),s&&h(m),i&&i.d(),f&&f.d(),u&&u.d()}}}function W(n,e,a){let l;Q(n,T,t=>a(1,l=t));let{resume:r}=e;return n.$$set=t=>{"resume"in t&&a(0,r=t.resume)},[r,l]}class Z extends L{constructor(e){super(),M(this,e,W,U,O,{resume:0})}}export{Z as H};