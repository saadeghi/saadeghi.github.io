import yaml from "js-yaml"
import fs from "fs"
const resume = yaml.load(fs.readFileSync("./src/data/resume.yml", "utf8"))
const about = yaml.load(fs.readFileSync("./src/data/about.yml", "utf8"))
const projects = yaml.load(fs.readFileSync("./src/data/projects.yml", "utf8"))

export function load({ params }) {
    return {
      resume,
      about,
      projects,
    }
}
