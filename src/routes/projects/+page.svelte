<script>
  import { page } from "$app/stores"
  import { Head } from "svead"
  import { convertToSlug } from "@src/lib/functions"
  import Header from "@src/components/Header.svelte"

  import yaml from "js-yaml"
  import fs from "fs"
  const resume = yaml.load(fs.readFileSync("./src/data/resume.yml", "utf8"))
  const projects = yaml.load(fs.readFileSync("./src/data/projects.yml", "utf8"))
</script>

<Head title={`${resume.title} – Projects`} description={`${resume.description} – Projects`} url={$page.url.toString()} />

<Header {resume} />

{#if projects && projects.length}
  <div class="flex flex-col gap-16 lg:gap-6">
    <div class="my-4 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
      {#each projects as project}
        <a href={`/projects/${convertToSlug(project.title)}`} class="group flex flex-col items-center gap-4 rounded bg-slate-50 py-20 text-slate-700 transition duration-700 hover:bg-slate-800 hover:text-slate-200">
          <img src={project.thumb} alt={project.title} width="200" height="200" class="rounded transition duration-300 group-hover:scale-105" />
          <div class="text-center text-sm">
            {project.title}
          </div>
        </a>
      {/each}
    </div>
  </div>
{/if}
