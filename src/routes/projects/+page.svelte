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
  <div class="my-4 grid gap-16">
    {#each data.projects as project}
      <a href={`/projects/${convertToSlug(project.title)}/`} class="flex items-center gap-4 lg:gap-10 rounded-4xl transition-colors hover:bg-slate-50 p-4">
        <img src={project.thumb} alt={project.title} width="100" height="100" class="rounded-2xl shrink-0"/>
        {#if project.date}
          <span class="text-black/50 tabular-nums font-extralight text-4xl shrink-0">
            {formatDate(project.date, { year : "numeric"})}
          </span>
        {/if}
        <span class="font-black text-4xl [text-wrap:balance]">
          {project.title}
        </span>
      </a>
    {/each}
  </div>
{/if}
