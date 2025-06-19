import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import content from "@astrojs/content";

export default defineConfig({
  output: "static",
  integrations: [mdx(), content()],
});