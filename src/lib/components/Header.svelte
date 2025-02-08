<script>
  import { page } from "$app/stores";
  export let resume;
</script>

<div
  class="flex flex-col sm:flex-row gap-y-10 print-flex-row justify-between sm:items-center print:mt-10 print:gap-2"
>
  <div>
    <h1 class="text-3xl">
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

  <nav class="flex gap-6 print:hidden">
    <a
      class={`px-1 ${$page.url.pathname == "/" ? "text-black border-b-2" : "text-black/30"}`}
      href="/">about</a
    >
    <a
      class={`px-1 ${$page.url.pathname == "/resume/" ? "text-black border-b-2" : "text-black/30"}`}
      href="/resume/">cv</a
    >
    <a
      class={`px-1 ${$page.url.pathname == "/projects/" ? "text-black border-b-2" : "text-black/30"}`}
      href="/projects/">projects</a
    >
  </nav>
</div>
