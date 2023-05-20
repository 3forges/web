// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    url: z.string().url().optional(),
    publishDate: z.date().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'portfolio': projectsCollection,
};