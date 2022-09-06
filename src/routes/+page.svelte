<script>
  import { page } from "$app/stores"
  import { Head } from "svead"
  import SvelteMarkdown from "svelte-markdown"
  import yaml from "js-yaml"
  import fs from "fs"
  const data = yaml.load(fs.readFileSync("./src/data/resume.yml", "utf8"))
</script>

<Head title={data.title} description={data.description} url={$page.url.toString()} />

<div class="my-64 flex flex-col items-center justify-center px-6 print:my-10">
  <div class="flex w-full max-w-4xl flex-col gap-40 print:gap-10">
    <div class="flex flex-col gap-6 print:gap-2">
      <h1 class="text-3xl md:text-6xl">
        {#if data.firstname}
          <span class="font-title font-bold">
            {data.firstname}
          </span>
        {/if}
        {#if data.lastname}
          <span class="font-title font-extralight">
            {data.lastname}
          </span>
        {/if}
      </h1>
      {#if data.tagline}
        <h2 class="md:text-xl">
          {data.tagline}
        </h2>
      {/if}
    </div>

    {#if data.projects && data.projects.length}
      <div class="flex flex-col gap-16 print:hidden print:gap-6 lg:gap-6">
        <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
          <div class="print:col-start-2 lg:col-span-3 lg:col-start-2">
            <h2 class="font-title text-2xl font-bold text-blue-600">Projects</h2>
          </div>
        </div>

        {#each data.projects as project}
          <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div class="print:text-right lg:text-right">
              <h2 class="inline font-bold [&>a]:underline">
                <SvelteMarkdown isInline source={project.title} />
              </h2>
            </div>
            <div class="lg:col-span-3">
              <p>
                {project.desc}
              </p>
            </div>
          </div>
        {/each}
      </div>
    {/if}

    {#if data.experiences && data.experiences.length}
      <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
        <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
          <div class="print:col-start-2 lg:col-span-3 lg:col-start-2">
            <h2 class="font-title text-2xl font-bold text-blue-600">Experience</h2>
          </div>
        </div>

        {#each data.experiences as experience}
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
                  <SvelteMarkdown isInline source={experience.place} />
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
                    <SvelteMarkdown isInline source={bullet} />
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
    {/if}

    {#if data.educations && data.educations.length}
      <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
        <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
          <div class="print:col-start-2 lg:col-span-3 lg:col-start-2">
            <h2 class="font-title text-2xl font-bold text-blue-600">Education</h2>
          </div>
        </div>

        {#each data.educations as education}
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

    {#if data.skills && data.skills.length}
      <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
        <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
          <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
            <h2 class="font-title text-2xl font-bold text-blue-600">Skills and Tech Stack</h2>
          </div>
        </div>

        <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
          <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
            <ul class="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
              {#each data.skills as skill}
                <li>
                  {skill}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    {/if}

    {#if data.contacts && data.contacts.length}
      <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
        <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
          <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
            <h2 class="font-title text-2xl font-bold text-blue-600">Contact Info</h2>
          </div>
        </div>

        <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
          <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
            <ul class="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
              {#each data.contacts as contact}
                <li class="[&>a]:underline">
                  <SvelteMarkdown isInline source={contact} />
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
