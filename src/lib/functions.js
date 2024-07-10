import { onNavigate } from "$app/navigation"
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

export const formatDate = (input) => {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  })
}

export const preparePageTransition = () => {
  onNavigate(async (navigation) => {
    if (!document.startViewTransition) {
      return
    }

    return new Promise((oldStateCaptureResolve) => {
      document.startViewTransition(async () => {
        oldStateCaptureResolve()
        await navigation.complete
      })
    })
  })
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
