import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import content from "@astrojs/content";

export default defineConfig({
  integrations: [mdx(), content()],
  markdown: { shikiConfig: { theme: 'dracula' } }
});
