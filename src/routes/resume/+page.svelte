<script>
import { page } from "$app/stores"
import { Head } from "svead"
import Header from "$lib/components/Header.svelte"
export let data
</script>

<Head title={`${data.resume.title} – Resume`} description={`${data.resume.description} – Resume`} url={$page.url.toString()} />

<Header resume={data.resume} />

{#if data.resume.experiences && data.resume.experiences.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="text-2xl font-bold text-blue-600">Experience</h2>
      </div>
    </div>

    {#each data.resume.experiences as experience}
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
          <span class="[&_a]:underline">
            {#if experience.place}
              at
              {@html experience.place}
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
              <li class="[&_a]:underline">
                {@html bullet}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if data.resume.educations && data.resume.educations.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="text-2xl font-bold text-blue-600">Education</h2>
      </div>
    </div>

    {#each data.resume.educations as education}
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
          <span class="text-sm text-black/60"></span>
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

{#if data.resume.skills && data.resume.skills.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="text-2xl font-bold text-blue-600">Skills and Tech Stack</h2>
      </div>
    </div>

    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
        <ul class="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
          {#each data.resume.skills as skill}
            <li>
              {skill}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
{/if}

{#if data.resume.contacts && data.resume.contacts.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="text-2xl font-bold text-blue-600">Contact Info</h2>
      </div>
    </div>

    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
        <ul class="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
          {#each data.resume.contacts as contact}
            <li class="[&_a]:underline">
              {@html contact}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
{/if}
