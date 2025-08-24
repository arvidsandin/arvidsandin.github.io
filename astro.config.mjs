// @ts-check
import { defineConfig } from "astro/config";
import rehypeInlineCodeClass from "./rehype-inline-code-class.js";

// https://astro.build/config
export default defineConfig({
  site: "https://arvid.sandin.dev",
  markdown: {
    rehypePlugins: [rehypeInlineCodeClass],
    syntaxHighlight: "prism",
  },
});
