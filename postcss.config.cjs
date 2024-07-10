module.exports = {
  plugins: [
    require("@tailwindcss/postcss"),
    require("postcss-dropunusedvars")({ fix: true }),
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/**/*.{svelte,html}"],
      extractors: [
        {
          extractor: (value) => value.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ["svelte", "html"],
        },
      ],
    }),
  ],
}
