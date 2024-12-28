import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import bootstrap from 'bootstrap';

// https://astro.build/config
export default defineConfig(
/** @type {import('astro').AstroUserConfig} */
{
  markdown: {
    remarkPlugins: [],
    rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', {
      behavior: 'wrap'
    }]],
    shikiConfig: {
      theme: 'poimandres',
      langs: [],
      wrap: false
    }
  },
  site: 'http://vinbo8.github.io/',
  base: '/fragments-mag',
  trailingSlash: 'never',
  integrations: [sitemap(), 
    tailwind({applyBaseStyles: false,}),
    bootstrap(),
  ],
});