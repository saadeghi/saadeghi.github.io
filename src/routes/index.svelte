<script>
  import { page } from '$app/stores'
  import { Head } from 'svead'

  let title = 'Pouya Saadeghi'
  let description = 'Pouya Saadeghi – UI designer and front-end developer'
  let url = $page.url.toString()
</script>

<Head {title} {description} {url} />

<div class="flex flex-col justify-center items-center">
  <div class="max-w-7xl w-full p-4">
    <!-- <img src="https://manasky.com/profile-pictures/pouya.jpg" alt="Pouya Saadeghi" class="w-24 h-24 inline-block mask mask-squircle" /> -->
    <!-- <div class="h-6"></div> -->
    <div class="h-[100vh] flex flex-col justify-center">
      <div>
        <h1 class="font-black text-3xl md:text-5xl">Pouya Saadeghi</h1>
        <div class="h-6"></div>
        <div class="md:text-2xl">
          <span>Product designer</span>
          <span>&</span>
          <span>Front-end developer</span>
        </div>
        <div class="h-6"></div>
        <div class="flex gap-10">
          <a class="link" href="https://github.com/saadeghi" rel="nofollow" aria-label="Link" target="_blank">
            GitHub
          </a>
          <a class="link" href="https://twitter.com/saadeghi" rel="nofollow" aria-label="Link" target="_blank">
            Twitter
          </a>
          <a class="link" href="https://www.linkedin.com/in/saadeghi" rel="nofollow" aria-label="Link" target="_blank">
            LinkedIn
          </a>
          <a class="link" href="mailto:pouya.saadeghi@gmail.com" rel="nofollow" aria-label="Link" target="_blank">
            Email
          </a>
        </div>
      </div>
    </div>
    
    <h2 class="font-black text-3xl md:text-5xl">Projects</h2>
    <div class="h-20"></div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-20">
      <div>
        <h3 class="text-lg font-bold font-mono">daisyUI</h3>
        <div class="h-1"></div>
        <p class="text-base-content/70 text-sm">The most popular, free and open&nbsp;source Tailwind&nbsp;CSS component library, currently being used in more than 16,000 open&nbsp;source projects</p>
        <div class="h-2"></div>
        <div class="flex gap-2">
          <span class="tooltip" data-tip="GitHub">
            <a href="https://github.com/saadeghi/daisyui" rel="nofollow" aria-label="Link" class="btn btn-sm btn-ghost btn-circle">
              <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z"></path></svg>
            </a>
          </span>
          <span class="tooltip" data-tip="Link">
            <a href="https://daisyui.com" rel="nofollow" aria-label="Link" class="btn btn-sm btn-ghost btn-circle">
              <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"></path></svg>
            </a>
          </span>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-bold font-mono">Atbox</h3>
        <div class="h-1"></div>
        <p class="text-base-content/70 text-sm">Resume builder and portfolio hosting service with more than 100,000 users</p>
        <div class="h-2"></div>
        <div class="flex gap-2">

          <span class="tooltip" data-tip="Link">
            <a href="https://atbox.io" rel="nofollow" aria-label="Link" class="btn btn-sm btn-ghost btn-circle">
              <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"></path></svg>
            </a>
          </span>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-bold font-mono">Lorem.space</h3>
        <div class="h-1"></div>
        <p class="text-base-content/70 text-sm">Placeholder image generator for developers and designers with open&nbsp;source API</p>
        <div class="h-2"></div>
        <div class="flex gap-2">

          <span class="tooltip" data-tip="GitHub">
            <a href="https://github.com/manasky/lorem.space" rel="nofollow" aria-label="GitHub" class="btn btn-sm btn-ghost btn-circle">
              <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z"></path></svg>
            </a>
          </span>
          <span class="tooltip" data-tip="Link">
            <a href="https://lorem.space" rel="nofollow" aria-label="Link" class="btn btn-sm btn-ghost btn-circle">
              <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"></path></svg>
            </a>
          </span>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-bold font-mono">svelte-countup</h3>
        <div class="h-1"></div>
        <p class="text-base-content/70 text-sm">Open&nbsp;source component for Svelte.js</p>
        <div class="h-2"></div>
        <div class="flex gap-2">
          <span class="tooltip" data-tip="GitHub">
            <a href="https://github.com/saadeghi/svelte-countup" rel="nofollow" aria-label="Link" class="btn btn-sm btn-ghost btn-circle">
              <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z"></path></svg>
            </a>
          </span>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-bold font-mono">theme-change</h3>
        <div class="h-1"></div>
        <p class="text-base-content/70 text-sm">Open&nbsp;source JS library to handle CSS theming with more than 60,000 NPM downloads</p>
        <div class="h-2"></div>
        <div class="flex gap-2">
          <span class="tooltip" data-tip="GitHub">
            <a href="https://github.com/saadeghi/theme-change" rel="nofollow" aria-label="Link" class="btn btn-sm btn-ghost btn-circle">
              <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z"></path></svg>
            </a>
          </span>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-bold font-mono">CryptoMeme.WTF</h3>
        <div class="h-1"></div>
        <p class="text-base-content/70 text-sm">Open&nbsp;source meme generator based on current crypto price</p>
        <div class="h-2"></div>
        <div class="flex gap-2">

          <span class="tooltip" data-tip="GitHub">
            <a href="https://github.com/manasky/cryptomeme" rel="nofollow" aria-label="Link" class="btn btn-sm btn-ghost btn-circle">
              <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z"></path></svg>
            </a>
          </span>
          <span class="tooltip" data-tip="Link">
            <a href="https://cryptomeme.wtf/" rel="nofollow" aria-label="Link" class="btn btn-sm btn-ghost btn-circle">
              <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"></path></svg>
            </a>
          </span>
        </div>
      </div>
    </div>

    <div class="h-40"></div>
    <!-- <h2 class="font-black text-3xl md:text-5xl">Resume</h2>
    <div class="h-20"></div> -->

  </div>
</div>
