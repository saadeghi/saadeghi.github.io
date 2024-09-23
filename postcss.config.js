import tailwindcssPostcss from "@tailwindcss/postcss";
import postcssDropunusedvars from "postcss-dropunusedvars";
import postcssHumanPurgecss from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    tailwindcssPostcss,
    ...process.env.NODE_ENV === 'production'
      ? [
        postcssDropunusedvars({ fix: true }),
        postcssHumanPurgecss({
          content: ["./src/**/*.{svelte,html}"],
          extractors: [
            {
              extractor: (value) => value.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
              extensions: ["svelte", "html"],
            },
          ],
        })
      ]
      : [],
  ],
}
