<script>
import { page } from "$app/stores"
import { Head } from "svead"
import { prettyUrl, formatDate, convertToSlug } from "$lib/functions"

export let data
</script>

<Head title={`${data.project.title} – ${data.resume.title}`} description={data.resume.description} url={$page.url.toString()} />

<div class="flex flex-col gap-12 lg:gap-20">
  <div>
    <a href="/projects/">← Back</a>
  </div>

  <div class="flex flex-col items-center gap-10 lg:flex-row">
    <img src={data.project.thumb} alt={`${data.project.title} by ${data.resume.title}`} width="150" height="150" class="rounded-xl" style={`view-transition-name: img-${convertToSlug(data.project.title)}`} />
    <div class="flex flex-col gap-4 text-center lg:text-left">
      <h1 class="text-2xl font-bold md:text-4xl lg:text-6xl" style={`view-transition-name: title-${convertToSlug(data.project.title)}`}>
        {data.project.title}
      </h1>
      <div class="flex flex-col items-center gap-4 lg:flex-row">
        {#if data.project.url}
          <a href={data.project.url} target="_blank" rel="noreferrer nofollow" class="text-blue-600">
            {prettyUrl(data.project.url)}
          </a>
        {/if}
        {#if data.project.url && data.project.date}
          <span class="hidden text-sm text-black/50 lg:inline">–</span>
        {/if}
        {#if data.project.date}
          <span class="text-sm text-black/50">{formatDate(data.project.date)}</span>
        {/if}
      </div>
    </div>
  </div>

  <div class="text-xl leading-snug md:text-3xl lg:text-6xl lg:font-extralight lg:leading-tight [&_a]:border-b [&_a]:border-b-black">
    {@html data.project.content}
  </div>

  {#if data.project.photos && data.project.photos.length}
    <div class="grid grid-cols-1 gap-20">
      {#each data.project.photos as photo}
        <div class="flex max-h-screen items-center justify-center rounded sm:bg-slate-900 sm:p-20">
          <img src={photo} alt={`${data.project.title} by ${data.resume.title} - ${photo}`} class="max-h-[90vh] w-auto" />
        </div>
      {/each}
    </div>
  {/if}
  {#if data.project.tags && data.project.tags.length}
    <div class="flex flex-wrap gap-2">
      {#each data.project.tags as tag}
        <span class="rounded-3xl border border-black/10 px-3 py-1 text-sm text-black/40">
          {tag}
        </span>
      {/each}
    </div>
  {/if}
</div>
