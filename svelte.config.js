import adapter from '@sveltejs/adapter-static'

export default {
  kit: {
    adapter: adapter({
      precompress: true,
    }),
    browser: {
      hydrate: false,
      router: false,
    },
    prerender: {
      default: true
    },
  },
}

