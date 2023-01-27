<script>
  import { page } from "$app/stores"
  import { Head } from "svead"
  import { prettyUrl, formatDate } from "@src/lib/functions"

  import SvelteMarkdown from "svelte-markdown"
  import ExternalLink from "@src/components/markdown/ExternalLink.svelte"

  import yaml from "js-yaml"
  import fs from "fs"
  const resume = yaml.load(fs.readFileSync("./src/data/resume.yml", "utf8"))

  export let data
</script>

<Head title={`${data.title} – ${resume.title}`} description={resume.description} url={$page.url.toString()} />

<div class="flex flex-col gap-12 lg:gap-20">
  <div>
    <a href="/projects/">← Back</a>
  </div>

  <div class="flex flex-col items-center gap-10 lg:flex-row">
    <img src={data.thumb} alt={`${data.title} by ${resume.title}`} width="150" height="150" class="rounded-xl" />
    <div class="flex flex-col gap-4 text-center lg:text-left">
      <h1 class="text-2xl font-bold md:text-4xl lg:text-6xl">
        {data.title}
      </h1>
      <div class="flex flex-col items-center gap-4 lg:flex-row">
        {#if data.url}
          <a href={data.url} target="_blank" rel="noreferrer nofollow" class="text-blue-600">
            {prettyUrl(data.url)}
          </a>
        {/if}
        {#if data.url && data.date}
          <span class="hidden text-sm text-black/50 lg:inline">–</span>
        {/if}
        {#if data.date}
          <span class="text-sm text-black/50">{formatDate(data.date)}</span>
        {/if}
      </div>
    </div>
  </div>

  <div class="text-xl leading-snug md:text-3xl lg:text-6xl lg:font-extralight lg:leading-tight [&_a]:border-b [&_a]:border-b-black">
    <SvelteMarkdown isInline source={data.content} renderers={{ link: ExternalLink }} />
  </div>

  {#if data.photos && data.photos.length}
    <div class="grid grid-cols-1 gap-20">
      {#each data.photos as photo}
        <div class="flex max-h-screen items-center justify-center rounded sm:bg-slate-900 sm:p-20">
          <img src={photo} alt={`${data.title} by ${resume.title} - ${photo}`} class="max-h-[90vh] w-auto" />
        </div>
      {/each}
    </div>
  {/if}
  {#if data.tags && data.tags.length}
    <div class="flex flex-wrap gap-2">
      {#each data.tags as tag}
        <span class="rounded-3xl border border-black/10 px-3 py-1 text-sm text-black/40">
          {tag}
        </span>
      {/each}
    </div>
  {/if}
</div>
