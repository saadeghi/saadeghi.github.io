<script>
  import { page } from "$app/stores";
  import { Head } from "svead";
  import Header from "$lib/components/Header.svelte";
  export let data;
</script>

<Head
  title={`${data.resume.title} – Resume`}
  description={`${data.resume.description} – Resume`}
  url={$page.url.toString()}
/>

<Header resume={data.resume} />

{#if data.resume.experiences && data.resume.experiences.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div
      class="grid items-baseline gap-x-10 print:grid-cols-[22ch_1fr] lg:grid-cols-[22ch_1fr]"
    >
      <div class="print:col-start-2 lg:col-start-2">
        <h2 class="text-blue-600 font-bold">Experience</h2>
      </div>
    </div>

    {#each data.resume.experiences as experience}
      <div
        class="grid items-baseline gap-x-10 print:grid-cols-[22ch_1fr] lg:grid-cols-[22ch_1fr]"
      >
        <div>
          <div class="text-black/50">
            {experience.date}
          </div>
          <div class="text-black/50">
            {experience.type}
          </div>
        </div>
        <div class="lg:col-start-2 print:col-start-2">
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
          {#if experience.desc}
            <p>
              {experience.desc}
            </p>
          {/if}
          <ul class="mx-5 my-2 flex list-disc flex-col gap-1">
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
    <div
      class="grid items-baseline gap-x-10 print:grid-cols-[22ch_1fr] lg:grid-cols-[22ch_1fr]"
    >
      <div class="print:col-start-2 lg:col-start-2">
        <h2 class="text-blue-600 font-bold">Education</h2>
      </div>
    </div>

    {#each data.resume.educations as education}
      <div
        class="grid items-baseline gap-x-10 print:grid-cols-[22ch_1fr] lg:grid-cols-[22ch_1fr]"
      >
        <div class="print:text-right lg:text-right">
          <span class="text-black/50">
            {education.date}
          </span>
        </div>
        <div class="">
          <h2 class="inline">
            {education.degree}
          </h2>
          <span>
            at
            {education.place}
          </span>
        </div>
        <div class="print:text-right lg:text-right">
          <span class="text-black/50"></span>
        </div>
        <div class="">
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
    <div
      class="grid items-baseline gap-x-10 print:grid-cols-[22ch_1fr] lg:grid-cols-[22ch_1fr]"
    >
      <div class="print:col-start-2 lg:col-start-2">
        <h2 class="text-blue-600 font-bold">Skills and Tech Stack</h2>
      </div>
    </div>

    <div
      class="grid items-baseline gap-x-10 print:grid-cols-[22ch_1fr] lg:grid-cols-[22ch_1fr]"
    >
      <div class="print:col-start-2 lg:col-start-2">
        <ul class="mx-5 my-2 flex list-disc flex-col gap-1">
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
    <div
      class="grid items-baseline gap-x-10 print:grid-cols-[22ch_1fr] lg:grid-cols-[22ch_1fr]"
    >
      <div class="print:col-start-2 lg:col-start-2">
        <h2 class="text-blue-600 font-bold">Contact Info</h2>
      </div>
    </div>

    <div
      class="grid items-baseline gap-x-10 print:grid-cols-[22ch_1fr] lg:grid-cols-[22ch_1fr]"
    >
      <div class="print:col-start-2 lg:col-start-2">
        <ul class="mx-5 my-2 flex list-disc flex-col gap-1">
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
