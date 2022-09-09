export const convertToSlug = (input) => {
  return input.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export const prettyUrl = (input) => {
  return input.replace(/(^\w+:|^)\/\//, '')
}

export const formatDate = (input) => {
  let date = new Date(input)
  return date.toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
  })
}