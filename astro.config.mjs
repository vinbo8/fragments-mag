import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from '@tailwindcss/vite';


import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig(
/** @type {import('astro').AstroUserConfig} */
{
  markdown: {
    remarkPlugins: [],
    rehypePlugins: ['rehype-slug'],
    shikiConfig: {
      theme: 'poimandres',
      langs: [],
      wrap: false
    }
  },

  site: 'https://disjunctionsmag.com',

  // base: '/disjunctions',

  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
});