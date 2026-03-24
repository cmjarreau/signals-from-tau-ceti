import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const entries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/entries' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const transmissions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/transmissions' }),
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const factions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/factions' }),
  schema: z.object({
    name: z.string(),
    designator: z.string(),
    role: z.string(),
    classification: z.string(),
    agent: z.string(),
    image: z.string(),
    subtext: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { entries, transmissions, factions };
