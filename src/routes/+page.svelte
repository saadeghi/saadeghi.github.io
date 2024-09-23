<script>
  import { page } from "$app/stores";
  import { Head } from "svead";
  import Header from "$lib/components/Header.svelte";
  export let data;
</script>

<Head
  title={data.resume.title}
  description={data.resume.description}
  url={$page.url.toString()}
/>

<Header resume={data.resume} />

<div class="[&_a]:underline">
  {@html data.about}
</div>
