import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import ViteRestart from "vite-plugin-restart"

export default defineConfig({
  plugins: [
    sveltekit(),
    ViteRestart({
      restart: ["src/data/*.{yml,md}"],
    }),
  ],
})
