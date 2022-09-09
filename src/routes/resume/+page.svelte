<script>
  import { page } from "$app/stores"
  import { Head } from "svead"
  import SvelteMarkdown from "svelte-markdown"

  import Header from "@src/components/Header.svelte"
  import ExternalLink from "@src/components/markdown/ExternalLink.svelte"

  import yaml from "js-yaml"
  import fs from "fs"
  const resume = yaml.load(fs.readFileSync("./src/data/resume.yml", "utf8"))
</script>

<Head title={`${resume.title} – Resume`} description={`${resume.description} – Resume`} url={$page.url.toString()} />

<Header {resume} />

{#if resume.experiences && resume.experiences.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="font-title text-2xl font-bold text-blue-600">Experience</h2>
      </div>
    </div>

    {#each resume.experiences as experience}
      <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
        <div class="print:text-right lg:text-right">
          <span class="text-black/60">
            {experience.date}
          </span>
        </div>
        <div class="print:col-span-3 lg:col-span-3">
          <h2 class="inline font-bold">
            {experience.role}
          </h2>
          <span class="[&>a]:underline">
            {#if experience.place}
              at
              <SvelteMarkdown isInline source={experience.place} renderers={{ link: ExternalLink }} />
            {/if}
            {#if experience.location}
              ({experience.location})
            {/if}
          </span>
        </div>
        <div class="print:text-right lg:text-right">
          <span class="text-sm text-black/60">
            {experience.type}
          </span>
        </div>
        <div class="print:col-span-3 lg:col-span-3">
          {#if experience.desc}
            <p>
              {experience.desc}
            </p>
          {/if}
          <ul class="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
            {#each experience.bullets as bullet}
              <li class="[&>a]:underline">
                <SvelteMarkdown isInline source={bullet} renderers={{ link: ExternalLink }} />
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if resume.educations && resume.educations.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="font-title text-2xl font-bold text-blue-600">Education</h2>
      </div>
    </div>

    {#each resume.educations as education}
      <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
        <div class="print:text-right lg:text-right">
          <span class="text-black/60">
            {education.date}
          </span>
        </div>
        <div class="print:col-span-3 lg:col-span-3">
          <h2 class="inline font-bold">
            {education.degree}
          </h2>
          <span>
            at
            {education.place}
          </span>
        </div>
        <div class="print:text-right lg:text-right">
          <span class="text-sm text-black/60" />
        </div>
        <div class="print:col-span-3 lg:col-span-3">
          <p>
            {education.location}
          </p>
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if resume.skills && resume.skills.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="font-title text-2xl font-bold text-blue-600">Skills and Tech Stack</h2>
      </div>
    </div>

    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
        <ul class="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
          {#each resume.skills as skill}
            <li>
              {skill}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
{/if}

{#if resume.contacts && resume.contacts.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="font-title text-2xl font-bold text-blue-600">Contact Info</h2>
      </div>
    </div>

    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
        <ul class="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
          {#each resume.contacts as contact}
            <li class="[&>a]:underline">
              <SvelteMarkdown isInline source={contact} renderers={{ link: ExternalLink }} />
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
{/if}
