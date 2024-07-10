import fs from "node:fs"
import yaml from "js-yaml"
import { error } from "@sveltejs/kit"
import { convertToSlug, md2html } from "$lib/functions"

const projects = yaml.load(fs.readFileSync("./src/data/projects.yml", "utf8"))

export async function load({ params }) {
  if (projects.some((item) => convertToSlug(item.title) === params.slug)) {
    const currentItemIndex = projects.findIndex((obj) => convertToSlug(obj.title) === params.slug)
    const currentProject = projects[currentItemIndex]
    return {
      project: { ...currentProject, content: md2html(currentProject.content, { inline: false }) },
    }
  }
  throw error(404, "Not found")
}
