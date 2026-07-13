// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import rehypeSlug from 'rehype-slug';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],

  // ponytail: Astro's HTML compressor drops the space when a line ends
  // `</a> ` and the next line starts with text (e.g. "collaboration</a>at").
  // Disabling it avoids reflowing every paragraph to dodge the bug.
  compressHTML: false,

  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeSlug, rehypeMathjax],
    }),
  },

  adapter: cloudflare({
    imageService: 'compile',
  })
});