<script>
  import { page } from "$app/stores"
  export let resume
</script>

<div class="flex gap-10 print:hidden">
  <a class={`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${$page.url.pathname == "/" ? "border-b-blue-600" : ""}`} href="/">About</a>
  <a class={`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${$page.url.pathname == "/resume/" ? "border-b-blue-600" : ""}`} href="/resume/">Resume</a>
  <a class={`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${$page.url.pathname == "/projects/" ? "border-b-blue-600" : ""}`} href="/projects/">Projects</a>
</div>

<div class="flex flex-col gap-6 print:mt-10 print:gap-2">
  <h1 class="text-3xl md:text-6xl">
    {#if resume.firstname}
      <span class="font-title font-bold">
        {resume.firstname}
      </span>
    {/if}
    {#if resume.lastname}
      <span class="font-title font-extralight">
        {resume.lastname}
      </span>
    {/if}
  </h1>
  {#if resume.tagline}
    <h2 class="md:text-xl">
      {resume.tagline}
    </h2>
  {/if}
</div>
