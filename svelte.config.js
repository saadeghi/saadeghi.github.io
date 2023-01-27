import adapter from "@sveltejs/adapter-static"

export default {
  kit: {
    adapter: adapter({
      precompress: true,
    }),
    alias: {
      "@src": "src",
    },
  },
}
