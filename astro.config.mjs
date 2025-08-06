// @ts-check
import { defineConfig } from 'astro/config';
import rehypeInlineCodeClass from './rehype-inline-code-class.js';

// https://astro.build/config
export default defineConfig({
  integrations: [],
    markdown: {
    rehypePlugins: [rehypeInlineCodeClass],
    syntaxHighlight: 'prism',
  }
});