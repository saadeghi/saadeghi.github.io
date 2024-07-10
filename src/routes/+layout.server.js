import yaml from "js-yaml"
import fs from "node:fs"
import { md2html } from "$lib/functions"
import about from "../data/about.md?raw"

const resume = yaml.load(fs.readFileSync("./src/data/resume.yml", "utf8"))
const projects = yaml.load(fs.readFileSync("./src/data/projects.yml", "utf8"))

export async function load({ params }) {
  return {
    resume: {
      ...resume,
      experiences: resume.experiences.map((experience) => ({
        ...experience,
        place: experience.place ? md2html(experience.place) : null,
        bullets: experience.bullets ? experience.bullets.map((bullet) => md2html(bullet)) : null,
      })),
      contacts: resume.contacts.map((contact) => md2html(contact)),
    },
    about: md2html(about, { inline: false }),
    projects: projects,
  }
}
