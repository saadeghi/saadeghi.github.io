<script>
  import { page } from "$app/stores"
  import { Head } from "svead"
  import { convertToSlug } from "$lib/functions"
  import Header from "$lib/components/Header.svelte"

  export let data
</script>

<Head title={`${data.resume.title} – Projects`} description={`${data.resume.description} – Projects`} url={$page.url.toString()} />

<Header resume={data.resume} />

{#if data.projects && data.projects.length}
  <div class="flex flex-col gap-16 lg:gap-6">
    <div class="my-4 grid gap-2 md:grid-cols-2 lg:gap-10">
      {#each data.projects as project}
        <a href={`/projects/${convertToSlug(project.title)}/`} class="flex flex-col bg-slate-50 items-center gap-4 rounded-2xl py-20 text-slate-700 transition-all duration-700 hover:bg-slate-200">
          <img src={project.thumb} alt={project.title} width="200" height="200" class="rounded-lg transition-all duration-300" style={`view-transition-name: img-${convertToSlug(project.title)}`} />
          <div class="text-center text-sm" style={`view-transition-name: title-${convertToSlug(project.title)}`}>
            {project.title}
          </div>
        </a>
      {/each}
    </div>
  </div>
{/if}
