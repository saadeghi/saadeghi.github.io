<script>
import { page } from "$app/stores"
import { Head } from "svead"
import { prettyUrl, formatDate, convertToSlug } from "$lib/functions"

export let data
</script>

<Head title={`${data.project.title} – ${data.resume.title}`} description={data.resume.description} url={$page.url.toString()} />

<div class="flex flex-col gap-12 lg:gap-20">
  <div>
    <a href="/projects/" class="inline-flex gap-4 items-center">
      <svg class="h-[1cap] w-auto" width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0224 0.0022583L0.0246582 12L12.0224 23.9978L14.5336 21.4308L6.8885 13.7857H80V10.2143H6.8885L14.5336 2.56922L12.0224 0.0022583Z" fill="currentColor"/>
      </svg>
      Back
    </a>
  </div>

  <div class="flex flex-col items-center gap-10 lg:flex-row">
    <!-- <img src={data.project.thumb} alt={`${data.project.title} by ${data.resume.title}`} width="150" height="150" class="rounded-3xl" /> -->
    <div class="flex flex-col gap-4 text-center lg:text-left">
      <h1 class="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-black">
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

  <div class="text-xl leading-snug md:text-3xl lg:text-4xl lg:font-extralight lg:leading-tight [&_a]:border-b [&_a]:border-b-black">
    {@html data.project.content}
  </div>

  {#if data.project.photos && data.project.photos.length}
    <div class="grid grid-cols-1 gap-20">
      {#each data.project.photos as photo}
        <div class="flex max-h-screen items-center justify-center">
          <img src={photo} alt={`${data.project.title} by ${data.resume.title} - ${photo}`} class="max-h-[90vh] w-auto rounded-3xl" />
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
