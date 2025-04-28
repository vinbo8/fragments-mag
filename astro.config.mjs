import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from '@tailwindcss/vite';


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

  site: 'http://vinbo8.github.io/',
  base: '/fragments-mag',

  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },
});