<script>
  import { page } from '$app/stores'
  import { Head } from 'svead'

  let title = 'Pouya Saadeghi'
  let description = 'Pouya Saadeghi – front-end developer in Istanbul'
  let url = $page.url.toString()
</script>

<Head {title} {description} {url} />

<div class="flex flex-col justify-center items-center px-6 my-64 print:my-10">
  <div class="max-w-4xl w-full flex flex-col gap-40 print:gap-10">


    <div class="flex flex-col justify-center">
      <div class="flex flex-col gap-6 print:gap-2">
        <h1 class="text-3xl md:text-6xl">
          <span class="font-title font-bold">Pouya</span>
          <span class="font-title font-extralight">Saadeghi</span>
        </h1>
        <h2 class="md:text-xl">
          <span>Product designer</span>
          <span>&</span>
          <span>Front-end developer</span>
        </h2>
      </div>
    </div>
    

    <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose print:hidden">

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60"></span>
        </div>
        <div class="col-span-3">
          <h2 class="font-title font-bold text-2xl text-blue-600">Projects</h2>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <a href="https://daisyui.com/" rel="nofollow" target="_blank" class="underline">
            <h2 class="font-bold inline">daisyUI</h2>
          </a>
        </div>
        <div class="col-span-3">
          <p>The most popular, free and open-source Tailwind CSS component library, currently being used in more than 20,000 open-source projects</p>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <a href="https://atbox.io/" rel="nofollow" target="_blank" class="underline">
            <h2 class="font-bold inline">Atbox.io</h2>
          </a>
        </div>
        <div class="col-span-3">
          <p>Atbox was a resume builder and portfolio hosting startup, successfully provided services to more than 120K users in a 8-year period and finally retired in 2022 June.</p>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <a href="https://lorem.space/" rel="nofollow" target="_blank" class="underline">
            <h2 class="font-bold inline">Lorem.space</h2>
          </a>
        </div>
        <div class="col-span-3">
          <p>Placeholder image generator for developers and designers with open-source API</p>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <a href="https://github.com/saadeghi/svelte-countup" rel="nofollow" target="_blank" class="underline">
            <h2 class="font-bold inline">svelte-countup</h2>
          </a>
        </div>
        <div class="col-span-3">
          <p>Open-source component for Svelte.js</p>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <a href="https://github.com/saadeghi/theme-change" rel="nofollow" target="_blank" class="underline">
            <h2 class="font-bold inline">theme-change</h2>
          </a>
        </div>
        <div class="col-span-3">
          <p>Open-source JS library to handle CSS theming with more than 70,000 NPM downloads</p>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <a href="https://cryptomeme.wtf/" rel="nofollow" target="_blank" class="underline">
            <h2 class="font-bold inline">CryptoMeme.wtf</h2>
          </a>
        </div>
        <div class="col-span-3">
          <p>Open-source meme generator based on current crypto price</p>
        </div>
      </div>


    </div>

    <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose">

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60"></span>
        </div>
        <div class="col-span-3">
          <h2 class="font-title font-bold text-2xl text-blue-600">Experience</h2>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60">Dec 2020 – Present</span>
        </div>
        <div class="col-span-3">
          <h2 class="font-bold inline">Open-source contributor</h2>
        </div>
        <div class="lg:text-right print:text-right">
          <span class="text-black/60 text-sm">Part-time</span>
        </div>
        <div class="col-span-3">
          <p>
            Created and actively maintaining open-source projects such as:
          </p>
          <ul class="list-disc mx-4 text-sm">
            <li><a class="underline" rel="nofollow" target="_blank" href="https://daisyui.com/">daisyui.com</a>: the most popular, free and open-source Tailwind CSS component library, currently being used in 20,000+ open-source projects</li>
            <li><a class="underline" rel="nofollow" target="_blank" href="https://lorem.space/">lorem.space</a>: placeholder image generator API</li>
            <li><a class="underline" rel="nofollow" target="_blank" href="https://github.com/saadeghi/svelte-countup">svelte-countup</a>: component for Svelte.js</li>
            <li><a class="underline" rel="nofollow" target="_blank" href="https://github.com/saadeghi/theme-change">theme-change</a>: JavaScript theme management package</li>
          </ul>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60">Dec 2015 – Present</span>
        </div>
        <div class="col-span-3">
          <h2 class="font-bold inline">Product designer, web developer</h2>
          <span>at <a class="underline" rel="nofollow" target="_blank" href="https://manasky.com/">ManaSky</a> (Istanbul, Turkey)</span>
        </div>
        <div class="lg:text-right print:text-right">
          <span class="text-black/60 text-sm">Part-time</span>
        </div>
        <div class="col-span-3">
          <ul class="list-disc mx-4 text-sm">
            <li>Designed and developed front-end projects using Svelte.js, Vue.js and React.js frameworks</li>
            <li>Delivered solutions to clients, startups and open-source projects from Europe and North America</li>
            <li>Designed and developed a website for Ministry of Science, Research and Technology of Iran to register, evaluate and publish tech inventions: <a class="underline" rel="nofollow" target="_blank" href="https://irantechhub.ir/">irantechhub.ir</a></li>
          </ul>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60">Apr 2014 – Jun 2022</span>
        </div>
        <div class="col-span-3">
          <h2 class="font-bold inline">Co-founder, product designer, front-end developer</h2>
          <span>at <a class="underline" rel="nofollow" target="_blank" href="https://atbox.io/">Atbox.io</a> (Rasht, Iran)</span>
        </div>
        <div class="lg:text-right print:text-right">
          <span class="text-black/60 text-sm">Self-employed</span>
        </div>
        <div class="col-span-3">
          <ul class="list-disc mx-4 text-sm">
            <li>Developed Atbox.io since prototype, and it served more than 120k happy users worldwide</li>
            <li>Responsible for UI/UX design and day to day improvements</li>
            <li>Designed and developed responsive web pages based on web design best practices</li>
            <li>Provided marketing solutions for user base growth and customer satisfaction that resulted in significant revenue</li>
          </ul>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60">Jan 2020 – Sep 2021</span>
        </div>
        <div class="col-span-3">
          <h2 class="font-bold inline">UI designer, front-end developer</h2>
          <span>at Dowuz Startup (Rasht, Iran)</span>
        </div>
        <div class="lg:text-right print:text-right">
          <span class="text-black/60 text-sm">Full-time</span>
        </div>
        <div class="col-span-3">
          <ul class="list-disc mx-4 text-sm">
            <li>Created user interface for a game service API platform</li>
            <li>Worked on the product website based on Laravel framework (PHP Blade template language)</li>
            <li>Designed and developed React.js client for browser-based mini-games</li>
          </ul>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60">Mar 2017 – Jan 2019</span>
        </div>
        <div class="col-span-3">
          <h2 class="font-bold inline">Web Developer</h2>
          <span>at <a class="underline" rel="nofollow" target="_blank" href="https://markitdone.com/">Mark It Done (Los Angeles, United States)</span>
        </div>
        <div class="lg:text-right print:text-right">
          <span class="text-black/60 text-sm">Remote contractor</span>
        </div>
        <div class="col-span-3">
          <ul class="list-disc mx-4 text-sm">
            <li>Designed and developed WordPress theme for <a class="underline" rel="nofollow" target="_blank" href="https://wymararesortandvillas.com/">wymararesortandvillas.com</a></li>
            <li>Designed and developed WordPress theme for <a class="underline" rel="nofollow" target="_blank" href="https://evoeventsgroup.com/">evoeventsgroup.com</a></li>
            <li>Designed and developed Shopify theme for <a class="underline" rel="nofollow" target="_blank" href="https://gjustagoods.com/">gjustagoods.com</a></li>
            <li>Fixed bugs from existing websites and enhanced code performance and functionality</li>
            <li>Delivered more than 20 successful projects</li>
          </ul>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60">Jun 2016 – Oct 2017</span>
        </div>
        <div class="col-span-3">
          <h2 class="font-bold inline">Co-founder, UI designer, front-end developer</h2>
          <span>at Gametime.ir (Anzali, Iran)</span>
        </div>
        <div class="lg:text-right print:text-right">
          <span class="text-black/60 text-sm">Remote contractor</span>
        </div>
        <div class="col-span-3">
          <ul class="list-disc mx-4 text-sm">
            <li>Designed a content-based android app about mobile game news that hit more than 1k active users</li>
          </ul>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60">Oct 2014 – Jan 2016</span>
        </div>
        <div class="col-span-3">
          <h2 class="font-bold inline">UI designer, Web developer</h2>
          <span>at Arsess (Rasht, Iran)</span>
        </div>
        <div class="lg:text-right print:text-right">
          <span class="text-black/60 text-sm">Full-time</span>
        </div>
        <div class="col-span-3">
          <ul class="list-disc mx-4 text-sm">
            <li>Redesigned and developed the company website (a hosting service named Ugig)</li>
            <li>Designed and developed a payment gateway website named "Upal"</li>
            <li>Designed UI for an audiobook store Android app named "Gilibo"</li>
            <li>Worked on more than 50 web development projects as a front-end engineer</li>
            <li>Provided SEO and WordPress optimization services to web hosting clients</li>
          </ul>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60">Jan 2009 – Dec 2015</span>
        </div>
        <div class="col-span-3">
          <h2 class="font-bold inline">Founder, Designer, Developer</h2>
          <span>at Pasargad Graphic (Rasht, Iran)</span>
        </div>
        <div class="lg:text-right print:text-right">
          <span class="text-black/60 text-sm">Self-employed</span>
        </div>
        <div class="col-span-3">
          <ul class="list-disc mx-4 text-sm">
            <li>Founded Pasargad Graphic website to provide design and web development solutions</li>
            <li>Designed and developed more than 300 projects for small businesses</li>
            <li>Followed my passion in graphic design and coding and improved my skills for 7 years in UI design, CSS, HTML and JavaScript</li>
          </ul>
        </div>
      </div>

    </div>


    <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose">

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60"></span>
        </div>
        <div class="col-span-3">
          <h2 class="font-title font-bold text-2xl text-blue-600">Education</h2>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60">Jan 2012 – Jan 2015</span>
        </div>
        <div class="col-span-3">
          <h2 class="font-bold inline">B.Sc. in Software Engineering</h2>
          <span>at Jabir ibn Hayyan University</span>
        </div>
        <div class="lg:text-right print:text-right">
          <span class="text-black/60 text-sm"></span>
        </div>
        <div class="col-span-3">
          <p>Rasht, Iran</p>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60">Jan 2009 – Jan 2012</span>
        </div>
        <div class="col-span-3">
          <h2 class="font-bold inline">Associate's degree in Software Engineering</h2>
          <span>at Shahid Chamran University</span>
        </div>
        <div class="lg:text-right print:text-right">
          <span class="text-black/60 text-sm"></span>
        </div>
        <div class="col-span-3">
          <p>Rasht, Iran</p>
        </div>
      </div>


    </div>


    <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose">

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60"></span>
        </div>
        <div class="col-span-3">
          <h2 class="font-title font-bold text-2xl text-blue-600">Skills and Tech Stack</h2>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60"></span>
        </div>
        <div class="col-span-3">
          <ul class="list-disc mx-4 text-sm">
            <li>CSS libraries and tools including Tailwind CSS, Bootstrap, Sass, PostCSS</li>
            <li>JavaScript frameworks including Svelte.js, Vue.js, React.js, Alpine.js</li>
            <li>JavaScript meta frameworks including SvelteKit, Nuxt.js, Next.js</li>
            <li>Build tools like Vite.js, Webpack, Snowpack</li>
            <li>Design tools like Figma, Sketch, etc.</li>
          </ul>
        </div>
      </div>


    </div>


    <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose">

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60"></span>
        </div>
        <div class="col-span-3">
          <h2 class="font-title font-bold text-2xl text-blue-600">Contact Info</h2>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
        <div class="lg:text-right print:text-right">
          <span class="text-black/60"></span>
        </div>
        <div class="col-span-3">
          <ul class="list-disc mx-4 text-sm">
            <li>Email: <a href="mailto:pouya.saadeghi@gmail.com" class="underline">pouya.saadeghi@gmail.com</a></li>
            <li>Github: <a href="https://github.com/saadeghi" rel="nofollow" target="_blank" class="underline">github.com/saadeghi</a></li>
            <li>Twitter: <a href="https://twitter.com/saadeghi" rel="nofollow" target="_blank" class="underline">twitter.com/saadeghi</a></li>
            <li>Linkedin: <a href="https://linkedin.com/in/saadeghi/" rel="nofollow" target="_blank" class="underline">linkedin.com/in/saadeghi</a></li>
            <li>Location: Istanbul, Turkey (open to relocation)</li>
          </ul>
        </div>
      </div>


    </div>

  </div>
</div>
