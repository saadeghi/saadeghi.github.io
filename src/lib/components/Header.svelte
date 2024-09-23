<script>
  import { page } from "$app/stores";
  export let resume;
</script>

<div
  class="flex flex-col lg:flex-row print-flex-row justify-between lg:items-center print:mt-10 print:gap-2"
>
  <div>
    <h1 class="text-4xl">
      <span title={resume?.firstnameHint}>
        {resume?.firstname}
      </span>
      <span title={resume?.lastnameHint}>
        {resume?.lastname}
      </span>
    </h1>
    <h2>
      {resume?.tagline}
    </h2>
  </div>

  <nav class="flex gap-2 print:hidden">
    <a
      class={`px-2 rounded ${$page.url.pathname == "/" ? "bg-black text-white" : "bg-black/5 hover:bg-black/10"}`}
      href="/">About</a
    >
    <a
      class={`px-2 rounded ${$page.url.pathname == "/resume/" ? "bg-black text-white" : "bg-black/5 hover:bg-black/10"}`}
      href="/resume/">Resume</a
    >
    <a
      class={`px-2 rounded ${$page.url.pathname == "/projects/" ? "bg-black text-white" : "bg-black/5 hover:bg-black/10"}`}
      href="/projects/">Projects</a
    >
  </nav>
</div>
