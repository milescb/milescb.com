import { defineCollection, z } from 'astro:content';

const markdownCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  markdown: markdownCollection,
};
