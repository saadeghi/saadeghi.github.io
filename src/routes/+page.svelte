<script>
  import { page } from '$app/stores'
  import { Head } from 'svead'
  import SvelteMarkdown from 'svelte-markdown'
  import data from '@src/data/resume.json';
</script>

<Head title={data.title} description={data.description} url={$page.url.toString()} />

<div class="flex flex-col justify-center items-center px-6 my-64 print:my-10">
  <div class="max-w-4xl w-full flex flex-col gap-40 print:gap-10">

    <div class="flex flex-col gap-6 print:gap-2">
      <h1 class="text-3xl md:text-6xl">
        {#if data.firstname}
          <span class="font-title font-bold">{data.firstname}</span>
        {/if}
        {#if data.lastname}
          <span class="font-title font-extralight">{data.lastname}</span>
        {/if}
      </h1>
      {#if data.tagline}
        <h2 class="md:text-xl">{data.tagline}</h2>
      {/if}
    </div>

    {#if data.projects && data.projects.length}
      <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose print:hidden">

        <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
          <div class="col-span-3 col-start-2">
            <h2 class="font-title font-bold text-2xl text-blue-600">Projects</h2>
          </div>
        </div>

        {#each data.projects as project}
          <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
            <div class="lg:text-right print:text-right">
              <a href={project.url} rel="nofollow" target="_blank" class="underline">
                <h2 class="font-bold inline">{project.title}</h2>
              </a>
            </div>
            <div class="col-span-3">
              <p>{project.desc}</p>
            </div>
          </div>
        {/each}

      </div>
    {/if}

    {#if data.experiences && data.experiences.length}
      <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose">

        <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
          <div class="col-span-3 col-start-2">
            <h2 class="font-title font-bold text-2xl text-blue-600">Experience</h2>
          </div>
        </div>

        {#each data.experiences as experience}
          <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
            <div class="lg:text-right print:text-right">
              <span class="text-black/60">{experience.date}</span>
            </div>
            <div class="col-span-3">
              <h2 class="font-bold inline">{experience.role}</h2>
              <span class="[&>a]:underline">
                {#if experience.place}
                  at <SvelteMarkdown isInline source={experience.place} />
                {/if}
                {#if experience.location}
                  ({experience.location})
                {/if}
              </span>
            </div>
            <div class="lg:text-right print:text-right">
              <span class="text-black/60 text-sm">{experience.type}</span>
            </div>
            <div class="col-span-3">
              <p>{experience.desc}</p>
              <ul class="list-disc mx-4 text-sm">
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
      <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose">

        <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
          <div class="col-span-3 col-start-2">
            <h2 class="font-title font-bold text-2xl text-blue-600">Education</h2>
          </div>
        </div>

        {#each data.educations as education}
          <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
            <div class="lg:text-right print:text-right">
              <span class="text-black/60">{education.date}</span>
            </div>
            <div class="col-span-3">
              <h2 class="font-bold inline">{education.degree}</h2>
              <span>at {education.place}</span>
            </div>
            <div class="lg:text-right print:text-right">
              <span class="text-black/60 text-sm"></span>
            </div>
            <div class="col-span-3">
              <p>{education.location}</p>
            </div>
          </div>
        {/each}

      </div>
    {/if}

    {#if data.skills && data.skills.length}
      <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose">

        <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
          <div class="col-span-3 col-start-2">
            <h2 class="font-title font-bold text-2xl text-blue-600">Skills and Tech Stack</h2>
          </div>
        </div>

        <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
          <div class="col-span-3 col-start-2">
            <ul class="list-disc mx-4 text-sm">
              {#each data.skills as skill}
                <li>{skill}</li>
              {/each}
            </ul>
          </div>
        </div>

      </div>
    {/if}

    {#if data.contacts && data.contacts.length}
      <div class="flex flex-col gap-16 lg:gap-6 print:gap-6 leading-loose">

        <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
          <div class="col-span-3 col-start-2">
            <h2 class="font-title font-bold text-2xl text-blue-600">Contact Info</h2>
          </div>
        </div>

        <div class="grid lg:grid-cols-4 gap-x-10 items-baseline print:grid-cols-4">
          <div class="col-span-3 col-start-2">
            <ul class="list-disc mx-4 text-sm">
              {#each data.contacts as contact}
                <li class="[&>a]:underline"><SvelteMarkdown isInline source={contact} /></li>
              {/each}
            </ul>
          </div>
        </div>

      </div>
    {/if}

  </div>
</div>
