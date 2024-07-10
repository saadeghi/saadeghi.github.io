import { marked } from "marked"

export const convertToSlug = (input) => {
  return input
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}

export const prettyUrl = (input) => {
  return input.replace(/(^\w+:|^)\/\//, "")
}

export const formatDate = (input, format = { year: "numeric", month: "long" }) => {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", format)
}

export const md2html = (md, { inline = true } = {}) => {
  const renderer = {
    link(href, title, text) {
      return `<a href="${href}" target="_blank" rel="noreferrer nofollow">${text}</a>`
    },
  }
  marked.use({ renderer })

  if (inline === true) {
    return marked.parseInline(md)
  }
  return marked.parse(md)
}
