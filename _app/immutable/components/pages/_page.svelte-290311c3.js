import{S as I,i as J,s as C,k as h,e as _,l as t,y as w,n as y,f as c,a as x,b as m,r as A,u as R,d as U,t as N,v as T,C as F}from"../../chunks/index-9b4f11f1.js";import{p as M}from"../../chunks/stores-133e49df.js";function S(n){let i,o,a,v,l;return{c(){i=h("meta"),o=x(),a=h("meta"),v=x(),l=h("meta"),t(i,"itemprop","name"),t(i,"content",n[1]),t(a,"itemprop","description"),t(a,"content",n[2]),t(l,"itemprop","image"),t(l,"content",n[5])},m(r,p){m(r,i,p),m(r,o,p),m(r,a,p),m(r,v,p),m(r,l,p)},p(r,p){p&2&&t(i,"content",r[1]),p&4&&t(a,"content",r[2]),p&32&&t(l,"content",r[5])},d(r){r&&c(i),r&&c(o),r&&c(a),r&&c(v),r&&c(l)}}}function P(n){let i,o,a,v,l,r,p,b,u;return{c(){i=h("meta"),o=x(),a=h("meta"),v=x(),l=h("meta"),r=x(),p=h("meta"),b=x(),u=h("meta"),t(i,"property","og:url"),t(i,"content",n[0]),t(a,"property","og:type"),t(a,"content","website"),t(l,"property","og:title"),t(l,"content",n[1]),t(p,"property","og:description"),t(p,"content",n[2]),t(u,"property","og:image"),t(u,"content",n[5])},m(e,d){m(e,i,d),m(e,o,d),m(e,a,d),m(e,v,d),m(e,l,d),m(e,r,d),m(e,p,d),m(e,b,d),m(e,u,d)},p(e,d){d&1&&t(i,"content",e[0]),d&2&&t(l,"content",e[1]),d&4&&t(p,"content",e[2]),d&32&&t(u,"content",e[5])},d(e){e&&c(i),e&&c(o),e&&c(a),e&&c(v),e&&c(l),e&&c(r),e&&c(p),e&&c(b),e&&c(u)}}}function j(n){let i,o,a,v,l,r,p,b,u,e,d;return{c(){i=h("meta"),o=x(),a=h("meta"),v=x(),l=h("meta"),r=x(),p=h("meta"),b=x(),u=h("meta"),e=x(),d=h("meta"),t(i,"name","twitter:card"),t(i,"content","summary_large_image"),t(a,"property","twitter:domain"),t(a,"content",n[3]),t(l,"property","twitter:url"),t(l,"content",n[0]),t(p,"name","twitter:title"),t(p,"content",n[1]),t(u,"name","twitter:description"),t(u,"content",n[2]),t(d,"name","twitter:image"),t(d,"content",n[5])},m(s,g){m(s,i,g),m(s,o,g),m(s,a,g),m(s,v,g),m(s,l,g),m(s,r,g),m(s,p,g),m(s,b,g),m(s,u,g),m(s,e,g),m(s,d,g)},p(s,g){g&8&&t(a,"content",s[3]),g&1&&t(l,"content",s[0]),g&2&&t(p,"content",s[1]),g&4&&t(u,"content",s[2]),g&32&&t(d,"content",s[5])},d(s){s&&c(i),s&&c(o),s&&c(a),s&&c(v),s&&c(l),s&&c(r),s&&c(p),s&&c(b),s&&c(u),s&&c(e),s&&c(d)}}}function D(n){let i;return{c(){i=h("meta"),t(i,"name","monetization"),t(i,"content",n[6])},m(o,a){m(o,i,a)},p(o,a){a&64&&t(i,"content",o[6])},d(o){o&&c(i)}}}function W(n){let i,o,a,v,l,r,p,b,u;document.title=o=n[1];let e=n[5].length>0&&S(n),d=n[5].length>0&&P(n),s=n[5].length>0&&j(n),g=n[6].length>0&&D(n);return{c(){i=h("link"),a=h("meta"),v=h("meta"),l=h("meta"),e&&e.c(),r=_(),d&&d.c(),p=_(),s&&s.c(),b=_(),g&&g.c(),u=_(),t(i,"rel","canonical"),t(i,"href",n[0]),t(a,"name","title"),t(a,"content",n[1]),t(v,"name","description"),t(v,"content",n[2]),t(l,"name","author"),t(l,"content",n[4])},m(f,k){w(document.head,i),w(document.head,a),w(document.head,v),w(document.head,l),e&&e.m(document.head,null),w(document.head,r),d&&d.m(document.head,null),w(document.head,p),s&&s.m(document.head,null),w(document.head,b),g&&g.m(document.head,null),w(document.head,u)},p(f,[k]){k&1&&t(i,"href",f[0]),k&2&&o!==(o=f[1])&&(document.title=o),k&2&&t(a,"content",f[1]),k&4&&t(v,"content",f[2]),k&16&&t(l,"content",f[4]),f[5].length>0?e?e.p(f,k):(e=S(f),e.c(),e.m(r.parentNode,r)):e&&(e.d(1),e=null),f[5].length>0?d?d.p(f,k):(d=P(f),d.c(),d.m(p.parentNode,p)):d&&(d.d(1),d=null),f[5].length>0?s?s.p(f,k):(s=j(f),s.c(),s.m(b.parentNode,b)):s&&(s.d(1),s=null),f[6].length>0?g?g.p(f,k):(g=D(f),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},i:y,o:y,d(f){c(i),c(a),c(v),c(l),e&&e.d(f),c(r),d&&d.d(f),c(p),s&&s.d(f),c(b),g&&g.d(f),c(u)}}}function E(n,i,o){let{url:a}=i,{title:v}=i,{description:l}=i,{website:r=""}=i,{authorName:p=""}=i,{image:b=""}=i,{paymentPointer:u=""}=i;return n.$$set=e=>{"url"in e&&o(0,a=e.url),"title"in e&&o(1,v=e.title),"description"in e&&o(2,l=e.description),"website"in e&&o(3,r=e.website),"authorName"in e&&o(4,p=e.authorName),"image"in e&&o(5,b=e.image),"paymentPointer"in e&&o(6,u=e.paymentPointer)},[a,v,l,r,p,b,u]}class L extends I{constructor(i){super(),J(this,i,E,W,C,{url:0,title:1,description:2,website:3,authorName:4,image:5,paymentPointer:6})}}function O(n){let i,o,a,v;return i=new L({props:{title:q,description:G,url:n[0]}}),{c(){A(i.$$.fragment),o=x(),a=h("div"),a.innerHTML=`<div class="max-w-4xl w-full flex flex-col gap-40 print:gap-10"><div class="flex flex-col justify-center"><div class="flex flex-col gap-6 print:gap-2"><h1 class="text-3xl md:text-6xl"><span class="font-title font-bold">Pouya</span> 
          <span class="font-title font-extralight">Saadeghi</span></h1> 
        <h2 class="md:text-xl"><span>Product designer</span> 
          <span>&amp;</span> 
          <span>Front-end developer</span></h2></div></div> 
    

    <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose print:hidden"><div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60"></span></div> 
        <div class="col-span-3"><h2 class="font-title font-bold text-2xl text-blue-600">Projects</h2></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><a href="https://daisyui.com/" rel="nofollow" target="_blank" class="underline"><h2 class="font-bold inline">daisyUI</h2></a></div> 
        <div class="col-span-3"><p>The most popular, free and open-source Tailwind CSS component library, currently being used in more than 20,000 open-source projects</p></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><a href="https://atbox.io/" rel="nofollow" target="_blank" class="underline"><h2 class="font-bold inline">Atbox.io</h2></a></div> 
        <div class="col-span-3"><p>Atbox was a resume builder and portfolio hosting startup, successfully provided services to more than 120K users in a 8-year period and finally retired in 2022 June.</p></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><a href="https://lorem.space/" rel="nofollow" target="_blank" class="underline"><h2 class="font-bold inline">Lorem.space</h2></a></div> 
        <div class="col-span-3"><p>Placeholder image generator for developers and designers with open-source API</p></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><a href="https://github.com/saadeghi/svelte-countup" rel="nofollow" target="_blank" class="underline"><h2 class="font-bold inline">svelte-countup</h2></a></div> 
        <div class="col-span-3"><p>Open-source component for Svelte.js</p></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><a href="https://github.com/saadeghi/theme-change" rel="nofollow" target="_blank" class="underline"><h2 class="font-bold inline">theme-change</h2></a></div> 
        <div class="col-span-3"><p>Open-source JS library to handle CSS theming with more than 70,000 NPM downloads</p></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><a href="https://cryptomeme.wtf/" rel="nofollow" target="_blank" class="underline"><h2 class="font-bold inline">CryptoMeme.wtf</h2></a></div> 
        <div class="col-span-3"><p>Open-source meme generator based on current crypto price</p></div></div></div> 

    <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose"><div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60"></span></div> 
        <div class="col-span-3"><h2 class="font-title font-bold text-2xl text-blue-600">Experience</h2></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60">Dec 2020 \u2013 Present</span></div> 
        <div class="col-span-3"><h2 class="font-bold inline">Open-source contributor</h2></div> 
        <div class="lg:text-right print:text-right"><span class="text-black/60 text-sm">Part-time</span></div> 
        <div class="col-span-3"><p>Created and actively maintaining open-source projects such as:</p> 
          <ul class="list-disc mx-4 text-sm"><li><a class="underline" rel="nofollow" target="_blank" href="https://daisyui.com/">daisyui.com</a>: the most popular, free and open-source Tailwind CSS component library, currently being used in 20,000+ open-source projects</li> 
            <li><a class="underline" rel="nofollow" target="_blank" href="https://lorem.space/">lorem.space</a>: placeholder image generator API</li> 
            <li><a class="underline" rel="nofollow" target="_blank" href="https://github.com/saadeghi/svelte-countup">svelte-countup</a>: component for Svelte.js</li> 
            <li><a class="underline" rel="nofollow" target="_blank" href="https://github.com/saadeghi/theme-change">theme-change</a>: JavaScript theme management package</li></ul></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60">Dec 2015 \u2013 Present</span></div> 
        <div class="col-span-3"><h2 class="font-bold inline">Product designer, web developer</h2> 
          <span>at <a class="underline" rel="nofollow" target="_blank" href="https://manasky.com/">ManaSky</a> (Istanbul, Turkey)</span></div> 
        <div class="lg:text-right print:text-right"><span class="text-black/60 text-sm">Part-time</span></div> 
        <div class="col-span-3"><ul class="list-disc mx-4 text-sm"><li>Designed and developed front-end projects using Svelte.js, Vue.js and React.js frameworks</li> 
            <li>Delivered solutions to clients, startups and open-source projects from Europe and North America</li> 
            <li>Designed and developed a website for Ministry of Science, Research and Technology of Iran to register, evaluate and publish tech inventions: <a class="underline" rel="nofollow" target="_blank" href="https://irantechhub.ir/">irantechhub.ir</a></li></ul></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60">Apr 2014 \u2013 Jun 2022</span></div> 
        <div class="col-span-3"><h2 class="font-bold inline">Co-founder, product designer, front-end developer</h2> 
          <span>at <a class="underline" rel="nofollow" target="_blank" href="https://atbox.io/">Atbox.io</a> (Rasht, Iran)</span></div> 
        <div class="lg:text-right print:text-right"><span class="text-black/60 text-sm">Self-employed</span></div> 
        <div class="col-span-3"><ul class="list-disc mx-4 text-sm"><li>Developed Atbox.io since prototype, and it served more than 120k happy users worldwide</li> 
            <li>Responsible for UI/UX design and day to day improvements</li> 
            <li>Designed and developed responsive web pages based on web design best practices</li> 
            <li>Provided marketing solutions for user base growth and customer satisfaction that resulted in significant revenue</li></ul></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60">Jan 2020 \u2013 Sep 2021</span></div> 
        <div class="col-span-3"><h2 class="font-bold inline">UI designer, front-end developer</h2> 
          <span>at Dowuz Startup (Rasht, Iran)</span></div> 
        <div class="lg:text-right print:text-right"><span class="text-black/60 text-sm">Full-time</span></div> 
        <div class="col-span-3"><ul class="list-disc mx-4 text-sm"><li>Created user interface for a game service API platform</li> 
            <li>Worked on the product website based on Laravel framework (PHP Blade template language)</li> 
            <li>Designed and developed React.js client for browser-based mini-games</li></ul></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60">Mar 2017 \u2013 Jan 2019</span></div> 
        <div class="col-span-3"><h2 class="font-bold inline">Web Developer</h2> 
          <span>at <a class="underline" rel="nofollow" target="_blank" href="https://markitdone.com/">Mark It Done (Los Angeles, United States)</a></span></div> 
        <div class="lg:text-right print:text-right"><span class="text-black/60 text-sm">Remote contractor</span></div> 
        <div class="col-span-3"><ul class="list-disc mx-4 text-sm"><li>Designed and developed WordPress theme for <a class="underline" rel="nofollow" target="_blank" href="https://wymararesortandvillas.com/">wymararesortandvillas.com</a></li> 
            <li>Designed and developed WordPress theme for <a class="underline" rel="nofollow" target="_blank" href="https://evoeventsgroup.com/">evoeventsgroup.com</a></li> 
            <li>Designed and developed Shopify theme for <a class="underline" rel="nofollow" target="_blank" href="https://gjustagoods.com/">gjustagoods.com</a></li> 
            <li>Fixed bugs from existing websites and enhanced code performance and functionality</li> 
            <li>Delivered more than 20 successful projects</li></ul></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60">Jun 2016 \u2013 Oct 2017</span></div> 
        <div class="col-span-3"><h2 class="font-bold inline">Co-founder, UI designer, front-end developer</h2> 
          <span>at Gametime.ir (Anzali, Iran)</span></div> 
        <div class="lg:text-right print:text-right"><span class="text-black/60 text-sm">Remote contractor</span></div> 
        <div class="col-span-3"><ul class="list-disc mx-4 text-sm"><li>Designed a content-based android app about mobile game news that hit more than 1k active users</li></ul></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60">Oct 2014 \u2013 Jan 2016</span></div> 
        <div class="col-span-3"><h2 class="font-bold inline">UI designer, Web developer</h2> 
          <span>at Arsess (Rasht, Iran)</span></div> 
        <div class="lg:text-right print:text-right"><span class="text-black/60 text-sm">Full-time</span></div> 
        <div class="col-span-3"><ul class="list-disc mx-4 text-sm"><li>Redesigned and developed the company website (a hosting service named Ugig)</li> 
            <li>Designed and developed a payment gateway website named &quot;Upal&quot;</li> 
            <li>Designed UI for an audiobook store Android app named &quot;Gilibo&quot;</li> 
            <li>Worked on more than 50 web development projects as a front-end engineer</li> 
            <li>Provided SEO and WordPress optimization services to web hosting clients</li></ul></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60">Jan 2009 \u2013 Dec 2015</span></div> 
        <div class="col-span-3"><h2 class="font-bold inline">Founder, Designer, Developer</h2> 
          <span>at Pasargad Graphic (Rasht, Iran)</span></div> 
        <div class="lg:text-right print:text-right"><span class="text-black/60 text-sm">Self-employed</span></div> 
        <div class="col-span-3"><ul class="list-disc mx-4 text-sm"><li>Founded Pasargad Graphic website to provide design and web development solutions</li> 
            <li>Designed and developed more than 300 projects for small businesses</li> 
            <li>Followed my passion in graphic design and coding and improved my skills for 7 years in UI design, CSS, HTML and JavaScript</li></ul></div></div></div> 


    <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose"><div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60"></span></div> 
        <div class="col-span-3"><h2 class="font-title font-bold text-2xl text-blue-600">Education</h2></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60">Jan 2012 \u2013 Jan 2015</span></div> 
        <div class="col-span-3"><h2 class="font-bold inline">B.Sc. in Software Engineering</h2> 
          <span>at Jabir ibn Hayyan University</span></div> 
        <div class="lg:text-right print:text-right"><span class="text-black/60 text-sm"></span></div> 
        <div class="col-span-3"><p>Rasht, Iran</p></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60">Jan 2009 \u2013 Jan 2012</span></div> 
        <div class="col-span-3"><h2 class="font-bold inline">Associate&#39;s degree in Software Engineering</h2> 
          <span>at Shahid Chamran University</span></div> 
        <div class="lg:text-right print:text-right"><span class="text-black/60 text-sm"></span></div> 
        <div class="col-span-3"><p>Rasht, Iran</p></div></div></div> 


    <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose"><div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60"></span></div> 
        <div class="col-span-3"><h2 class="font-title font-bold text-2xl text-blue-600">Skills and Tech Stack</h2></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60"></span></div> 
        <div class="col-span-3"><ul class="list-disc mx-4 text-sm"><li>CSS libraries and tools including Tailwind CSS, Bootstrap, Sass, PostCSS</li> 
            <li>JavaScript frameworks including Svelte.js, Vue.js, React.js, Alpine.js</li> 
            <li>JavaScript meta frameworks including SvelteKit, Nuxt.js, Next.js</li> 
            <li>Build tools like Vite.js, Webpack, Snowpack</li> 
            <li>Design tools like Figma, Sketch, etc.</li></ul></div></div></div> 


    <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose"><div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60"></span></div> 
        <div class="col-span-3"><h2 class="font-title font-bold text-2xl text-blue-600">Contact Info</h2></div></div> 

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4"><div class="lg:text-right print:text-right"><span class="text-black/60"></span></div> 
        <div class="col-span-3"><ul class="list-disc mx-4 text-sm"><li>Email: <a href="mailto:pouya.saadeghi@gmail.com" class="underline">pouya.saadeghi@gmail.com</a></li> 
            <li>Github: <a href="https://github.com/saadeghi" rel="nofollow" target="_blank" class="underline">github.com/saadeghi</a></li> 
            <li>Twitter: <a href="https://twitter.com/saadeghi" rel="nofollow" target="_blank" class="underline">twitter.com/saadeghi</a></li> 
            <li>Linkedin: <a href="https://linkedin.com/in/saadeghi/" rel="nofollow" target="_blank" class="underline">linkedin.com/in/saadeghi</a></li> 
            <li>Location: Istanbul, Turkey (open to relocation)</li></ul></div></div></div></div>`,t(a,"class","flex flex-col justify-center items-center px-6 my-64 print:my-10")},m(l,r){R(i,l,r),m(l,o,r),m(l,a,r),v=!0},p:y,i(l){v||(U(i.$$.fragment,l),v=!0)},o(l){N(i.$$.fragment,l),v=!1},d(l){T(i,l),l&&c(o),l&&c(a)}}}let q="Pouya Saadeghi",G="Pouya Saadeghi \u2013 front-end developer in Istanbul";function H(n,i,o){let a;return F(n,M,l=>o(1,a=l)),[a.url.toString()]}class V extends I{constructor(i){super(),J(this,i,H,O,C,{})}}export{V as default};
