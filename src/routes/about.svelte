<script>
  import { page } from '$app/stores'
  import { Head } from 'svead'

  let title = 'Pouya Saadeghi – About'
  let description = 'Pouya Saadeghi – UI designer and front-end developer'
  let url = $page.url.toString()
</script>

<Head {title} {description} {url} />

<div class="flex flex-col justify-center items-center">
  <div class="max-w-xl w-full p-4">
    <span class="tooltip tooltip-secondary tooltip-right" data-tip="Go back">
      <a href="/" class="btn btn-ghost btn-square">
        <svg class="fill-current" width="32px" height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"/></svg>
      </a>
    </span>
    <div class="h-10"></div>
    <div class="flex justify-center">
      <img src="https://manasky.com/profile-pictures/pouya.jpg" alt="Pouya Saadeghi" class="w-40 h-40 inline-block mask mask-squircle" />
    </div>
    <div class="h-10"></div>
    <div class="prose prose-xl">
      <p>
        Hey! My name is <b>Pouya Saadeghi</b>.
        <br/>
        I'm a UI/UX designer and front-end web developer and I live in Istanbul.
      </p>
      <p>
        I created and developed many websites, apps and tools since 2009 such as the popular UI library named <b>daisyUI</b>. 
        Currently I work as a freelance developer.
      </p>
    </div>
  </div>
</div>
