import { error } from '@sveltejs/kit';
import { convertToSlug } from "@src/lib/functions"

import yaml from "js-yaml"
import fs from "fs"
const data = yaml.load(fs.readFileSync("./src/data/projects.yml", "utf8"))

export function load({ params }) {
  if (data.some(item => convertToSlug(item.title) === params.slug)) {
    let currentItemIndex = data.findIndex(obj => convertToSlug(obj.title) == params.slug)
    return data[currentItemIndex]
  }
  throw error(404, 'Not found');
}