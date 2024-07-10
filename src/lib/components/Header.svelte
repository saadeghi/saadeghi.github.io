<script>
import { page } from "$app/stores"
export let resume
</script>

<div class="flex gap-10 print:hidden">
  <a class={`text-sm py-1 border-b-2 hover:border-blue-600 ${$page.url.pathname == "/" ? "border-b-blue-600" : "border-b-transparent"}`} href="/">About</a>
  <a class={`text-sm py-1 border-b-2 hover:border-blue-600 ${$page.url.pathname == "/resume/" ? "border-b-blue-600" : "border-b-transparent"}`} href="/resume/">Resume</a>
  <a class={`text-sm py-1 border-b-2 hover:border-blue-600 ${$page.url.pathname == "/projects/" ? "border-b-blue-600" : "border-b-transparent"}`} href="/projects/">Projects</a>
</div>

<div class="flex flex-col gap-6 print:mt-10 print:gap-2">
  <h1 class="text-3xl md:text-6xl" style="font-variation-settings: 'wdth' 125;">
    <span class="font-black" title={resume?.firstnameHint}>
      {resume?.firstname}
    </span>
    <span class="font-extralight" title={resume?.lastnameHint}>
      {resume?.lastname}
    </span>
  </h1>
  <h2 class="md:text-xl">
    {resume?.tagline}
  </h2>
</div>
