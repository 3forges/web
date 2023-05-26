// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    url: z.string().url().optional(),
    publishDate: z.string().optional(), // z.date need support
  }),
});

// 2. Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    team: z.string().optional(),
    url: z.string().url(),
    renderer: z.string().optional(), // z.date need support
    mainBadge: z.string().optional(),
    description: z.string().optional(),
    secundaryBadge: z.string().optional(),
    lastBadge: z.string().optional(),
    image: z.string().optional()
  }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'portfolio': portfolioCollection,
  'projects': projectsCollection,
};