import{S as L,i as M,s as O,k as d,q as k,a as y,l as _,m as v,r as A,h,c as H,n as b,p as Q,b as j,D as c,A as F,H as T,u as x}from"./index-10bc4979.js";import{p as U}from"./stores-fa64f56a.js";function G(n){let e,r=n[0].firstname+"",l;return{c(){e=d("span"),l=k(r),this.h()},l(t){e=_(t,"SPAN",{class:!0});var a=v(e);l=A(a,r),a.forEach(h),this.h()},h(){b(e,"class","font-title font-black")},m(t,a){j(t,e,a),c(e,l)},p(t,a){a&1&&r!==(r=t[0].firstname+"")&&x(l,r)},d(t){t&&h(e)}}}function J(n){let e,r=n[0].lastname+"",l;return{c(){e=d("span"),l=k(r),this.h()},l(t){e=_(t,"SPAN",{class:!0});var a=v(e);l=A(a,r),a.forEach(h),this.h()},h(){b(e,"class","font-title font-extralight")},m(t,a){j(t,e,a),c(e,l)},p(t,a){a&1&&r!==(r=t[0].lastname+"")&&x(l,r)},d(t){t&&h(e)}}}function K(n){let e,r=n[0].tagline+"",l;return{c(){e=d("h2"),l=k(r),this.h()},l(t){e=_(t,"H2",{class:!0});var a=v(e);l=A(a,r),a.forEach(h),this.h()},h(){b(e,"class","md:text-xl")},m(t,a){j(t,e,a),c(e,l)},p(t,a){a&1&&r!==(r=t[0].tagline+"")&&x(l,r)},d(t){t&&h(e)}}}function W(n){let e,r,l,t,a,E,N,P,R,g,V,S,D,p,m,$,w,o=n[0].firstname&&G(n),f=n[0].lastname&&J(n),u=n[0].tagline&&K(n);return{c(){e=d("div"),r=d("a"),l=k("About"),a=y(),E=d("a"),N=k("Resume"),R=y(),g=d("a"),V=k("Projects"),D=y(),p=d("div"),m=d("h1"),o&&o.c(),$=y(),f&&f.c(),w=y(),u&&u.c(),this.h()},l(s){e=_(s,"DIV",{class:!0});var i=v(e);r=_(i,"A",{class:!0,href:!0});var C=v(r);l=A(C,"About"),C.forEach(h),a=H(i),E=_(i,"A",{class:!0,href:!0});var z=v(E);N=A(z,"Resume"),z.forEach(h),R=H(i),g=_(i,"A",{class:!0,href:!0});var B=v(g);V=A(B,"Projects"),B.forEach(h),i.forEach(h),D=H(s),p=_(s,"DIV",{class:!0});var q=v(p);m=_(q,"H1",{class:!0,style:!0});var I=v(m);o&&o.l(I),$=H(I),f&&f.l(I),I.forEach(h),w=H(q),u&&u.l(q),q.forEach(h),this.h()},h(){b(r,"class",t=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${n[1].url.pathname=="/"?"border-b-blue-600":""}`),b(r,"href","/"),b(E,"class",P=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${n[1].url.pathname=="/resume/"?"border-b-blue-600":""}`),b(E,"href","/resume/"),b(g,"class",S=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${n[1].url.pathname=="/projects/"?"border-b-blue-600":""}`),b(g,"href","/projects/"),b(e,"class","flex gap-10 print:hidden"),b(m,"class","text-3xl md:text-6xl"),Q(m,"font-variation-settings","'wdth' 125"),b(p,"class","flex flex-col gap-6 print:mt-10 print:gap-2")},m(s,i){j(s,e,i),c(e,r),c(r,l),c(e,a),c(e,E),c(E,N),c(e,R),c(e,g),c(g,V),j(s,D,i),j(s,p,i),c(p,m),o&&o.m(m,null),c(m,$),f&&f.m(m,null),c(p,w),u&&u.m(p,null)},p(s,[i]){i&2&&t!==(t=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${s[1].url.pathname=="/"?"border-b-blue-600":""}`)&&b(r,"class",t),i&2&&P!==(P=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${s[1].url.pathname=="/resume/"?"border-b-blue-600":""}`)&&b(E,"class",P),i&2&&S!==(S=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${s[1].url.pathname=="/projects/"?"border-b-blue-600":""}`)&&b(g,"class",S),s[0].firstname?o?o.p(s,i):(o=G(s),o.c(),o.m(m,$)):o&&(o.d(1),o=null),s[0].lastname?f?f.p(s,i):(f=J(s),f.c(),f.m(m,null)):f&&(f.d(1),f=null),s[0].tagline?u?u.p(s,i):(u=K(s),u.c(),u.m(p,null)):u&&(u.d(1),u=null)},i:F,o:F,d(s){s&&h(e),s&&h(D),s&&h(p),o&&o.d(),f&&f.d(),u&&u.d()}}}function X(n,e,r){let l;T(n,U,a=>r(1,l=a));let{resume:t}=e;return n.$$set=a=>{"resume"in a&&r(0,t=a.resume)},[t,l]}class ee extends L{constructor(e){super(),M(this,e,X,W,O,{resume:0})}}export{ee as H};
