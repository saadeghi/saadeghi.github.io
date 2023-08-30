import adapter from "@sveltejs/adapter-static"

export default {
  kit: {
    inlineStyleThreshold: 10000,
    adapter: adapter({
      precompress: true,
    }),
  },
}
