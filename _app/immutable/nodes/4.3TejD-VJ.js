import{a as o,t as l,f as J,c as a,s as f,b as t}from"../chunks/disclose-version._teVE01z.js";import{p as K,t as p,a as N,g as L,d as y,u as g}from"../chunks/runtime.a2jmU_ql.js";import{p as O,i as c}from"../chunks/props.BJP15wM2.js";import{e as H,i as B}from"../chunks/each.BA-GzZ7F.js";import{h as P}from"../chunks/html.w9p4_aRn.js";import{H as Q,s as _}from"../chunks/head.IGv4aV3H.js";import{s as R,i as T,a as W,p as X}from"../chunks/stores.NPx38soT.js";import{p as Y,f as ee}from"../chunks/functions.Bg-QlRdh.js";var te=l('<a target="_blank" rel="noreferrer nofollow" class="text-blue-600"> </a>'),re=l('<span class="hidden text-black/50 lg:inline">–</span>'),ae=l('<span class="text-black/50"> </span>'),se=l('<div class="flex max-h-screen items-center justify-center"><img class="max-h-[90vh] w-auto rounded-3xl"></div>'),oe=l('<div class="grid grid-cols-1 gap-20"></div>'),le=l('<span class="rounded-3xl border border-black/10 px-3 py-1 text-black/40"> </span>'),ie=l('<div class="flex flex-wrap gap-2"></div>'),pe=l('<!> <div class="flex flex-col gap-12 lg:gap-20"><div><a href="/projects/" class="inline-flex gap-4 items-center"><svg class="h-[1cap] w-auto" width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0224 0.0022583L0.0246582 12L12.0224 23.9978L14.5336 21.4308L6.8885 13.7857H80V10.2143H6.8885L14.5336 2.56922L12.0224 0.0022583Z" fill="currentColor"></path></svg> Back</a></div> <div class="flex flex-col items-center gap-10 lg:flex-row"><div class="flex flex-col gap-4 text-center lg:text-left"><h1 class="font-bold text-4xl"> </h1> <div class="flex flex-col items-center gap-4 lg:flex-row"><!> <!> <!></div></div></div> <div class="[&amp;_a]:border-b [&amp;_a]:border-b-black"><!></div> <!> <!></div>',1);function me(q,x){K(x,!1);const C=R(),D=()=>W(X,"$page",C);let e=O(x,"data");T();var m=pe(),u=J(m),M=y(()=>`${e().project.title} – ${e().resume.title}`),S=y(()=>D().url.toString());Q(u,{get title(){return L(M)},get description(){return e().resume.description},get url(){return L(S)},$$legacy:!0});var U=t(t(u,!0)),V=a(U),h=t(t(V,!0)),Z=a(h),b=a(Z),z=a(b),A=t(t(b,!0)),j=a(A);c(j,()=>e().project.url,s=>{var r=te(),i=a(r);p(()=>f(i,Y(e().project.url))),p(()=>_(r,"href",e().project.url)),o(s,r)});var w=t(t(j,!0));c(w,()=>e().project.url&&e().project.date,s=>{var r=re();o(s,r)});var E=t(t(w,!0));c(E,()=>e().project.date,s=>{var r=ae(),i=a(r);p(()=>f(i,ee(e().project.date))),o(s,r)});var $=t(t(h,!0)),F=a($);P(F,()=>e().project.content);var k=t(t($,!0));c(k,()=>e().project.photos&&e().project.photos.length,s=>{var r=oe();H(r,9,()=>e().project.photos,B,(i,d,I)=>{var v=se(),n=a(v);p(()=>{_(n,"src",g(d)),_(n,"alt",`${e().project.title} by ${e().resume.title} - ${g(d)}`)}),o(i,v)}),o(s,r)});var G=t(t(k,!0));c(G,()=>e().project.tags&&e().project.tags.length,s=>{var r=ie();H(r,9,()=>e().project.tags,B,(i,d,I)=>{var v=le(),n=a(v);p(()=>f(n,g(d))),o(i,v)}),o(s,r)}),p(()=>f(z,e().project.title)),o(q,m),N()}export{me as component};