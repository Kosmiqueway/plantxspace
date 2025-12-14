import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const library = defineCollection({
  loader: glob({ base: "./src/content/library", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    url: z.string().url().optional(),
    authors: z.array(z.string()).default([]),
    year: z.number().int().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { notes, library };