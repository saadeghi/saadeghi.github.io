<script>
  import { page } from "$app/stores"
  import { Head } from "svead"
  import SvelteMarkdown from "svelte-markdown"

  import Header from "@src/components/Header.svelte"
  import ExternalLink from "@src/components/markdown/ExternalLink.svelte"

  import yaml from "js-yaml"
  import fs from "fs"
  const resume = yaml.load(fs.readFileSync("./src/data/resume.yml", "utf8"))
  const about = yaml.load(fs.readFileSync("./src/data/about.yml", "utf8"))
</script>

<Head title={resume.title} description={resume.description} url={$page.url.toString()} />

<Header {resume} />

<div class="leading-loose [&_a]:font-bold [&_a]:underline">
  <SvelteMarkdown source={about} renderers={{ link: ExternalLink }} />
</div>
