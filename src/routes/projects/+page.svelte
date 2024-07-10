<script>
import { page } from "$app/stores"
import { Head } from "svead"
import { convertToSlug, formatDate } from "$lib/functions"
import Header from "$lib/components/Header.svelte"

export let data
</script>

<Head title={`${data.resume.title} – Projects`} description={`${data.resume.description} – Projects`} url={$page.url.toString()} />

<Header resume={data.resume} />

{#if data.projects && data.projects.length}
  <div class="my-4 grid gap-6 sm:gap-20">
    {#each data.projects as project}
      <a href={`/projects/${convertToSlug(project.title)}/`} class="grid items-center grid-cols-[80px_1fr] sm:grid-cols-[100px_5ch_1fr] gap-x-4 sm:gap-x-10 rounded-4xl transition-colors hover:bg-slate-50 p-4 text-[clamp(.8rem,4vw,2.5rem)]">
        <img src={project.thumb} alt={project.title} width="100" height="100" class="rounded-2xl w-[80px] sm:w-[100px] max-sm:row-span-2"/>
        <span class="text-black/50 tabular-nums max-sm:col-start-2 sm:font-extralight max-sm:self-end">
          {formatDate(project.date, { year : "numeric"})}
        </span>
        <span class="sm:font-black [text-wrap:balance] max-sm:col-start-2 [word-break:break-word] max-sm:self-start text-[1.2em]">
          {project.title}
        </span>
      </a>
    {/each}
  </div>
{/if}
