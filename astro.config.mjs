import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://usepow.app",
  trailingSlash: "always",
  markdown: {
    syntaxHighlight: "prism",
    smartypants: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
