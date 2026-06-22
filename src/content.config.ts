import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const books = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: "./src/content/books" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    translator: z.string().optional(),
    editor: z.string().optional(),
    category: z.string(),
    coverImage: z.string(),
    prices: z.record(z.string(), z.number()),
    specs: z.object({
      isbn: z.string(),
      pageCount: z.number(),
      weight: z.string(),
      dimensions: z.string(),
    }),
    blurb: z.string().optional().default(''),
    description: z.array(z.string()).or(z.string()).optional(),
    authorBio: z.string().optional().default(''),
    authorImage: z.string().optional().default(''),
    amazonLink: z.string().or(z.record(z.string(), z.string())).optional(),
    videoUrl: z.string().optional(),
    variant: z.string().optional().default('default'),
  })
});

export const collections = { books };
