module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-dropunusedvars"),
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
