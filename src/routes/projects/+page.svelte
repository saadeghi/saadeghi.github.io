<script>
  import { page } from "$app/stores";
  import { Head } from "svead";
  import { convertToSlug, formatDate } from "$lib/functions";
  import Header from "$lib/components/Header.svelte";

  export let data;
</script>

<Head
  title={`${data.resume.title} – Projects`}
  description={`${data.resume.description} – Projects`}
  url={$page.url.toString()}
/>

<Header resume={data.resume} />

{#if data.projects && data.projects.length}
  <div class="my-4 grid">
    {#each data.projects as project}
      <a
        href={`/projects/${convertToSlug(project.title)}/`}
        class="grid items-center grid-cols-[40px_1fr] sm:grid-cols-[40px_5ch_1fr] gap-x-4 sm:gap-x-10 transition-colors hover:bg-zinc-50 p-10"
      >
        <img
          src={project.thumb}
          alt={project.title}
          width="40"
          height="40"
          class="w-[40px] max-sm:row-span-2"
        />
        <span class="text-black/50 max-sm:col-start-2 max-sm:self-end">
          {formatDate(project.date, { year: "numeric" })}
        </span>
        <span
          class="[text-wrap:balance] max-sm:col-start-2 [word-break:break-word] max-sm:self-start"
        >
          {project.title}
        </span>
      </a>
    {/each}
  </div>
{/if}
