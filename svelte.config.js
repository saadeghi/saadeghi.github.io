import adapter from "@sveltejs/adapter-static"

export default {
  kit: {
    trailingSlash: "always",
    adapter: adapter({
      precompress: true,
    }),
    alias: {
      "@src": "src",
    },
  },
}
