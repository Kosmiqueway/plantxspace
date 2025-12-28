import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const summarySchema = z
  .string()
  .transform((val) => val.trim())
  .refine((val) => val.split(/\s+/).length >= 40, "Summary must be at least 40 words.")
  .refine((val) => val.split(/\s+/).length <= 120, "Summary must be at most 120 words.");

const baseFields = {
  title: z.string(),
  summary: summarySchema,
  tags: z.array(z.string()).min(1, "At least one tag is required."),
  source: z.string().url(),
  year: z
    .number()
    .int()
    .min(1900, "Year must be reasonable.")
    .max(new Date().getFullYear() + 1, "Year cannot be far in the future."),
  level_of_evidence: z.enum(["L0", "L1", "L2", "L3"]),
  evidence_rationale: z.string().min(10, "Explain the evidence level decision."),
};

const library = defineCollection({
  loader: glob({ base: "./src/content/library", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    ...baseFields,
    authors: z.array(z.string()).min(1, "List at least one author or organisation."),
    canonical_reference: z.string().optional(),
  }),
});

const topics = defineCollection({
  loader: glob({ base: "./src/content/topics", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    ...baseFields,
    scope: z.string(),
  }),
});

const protocols = defineCollection({
  loader: glob({ base: "./src/content/protocols", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    ...baseFields,
    lab_variant: z.string(),
    at_home_variant: z.string().optional(),
    safety_scope: z.string(),
  }),
});

const models = defineCollection({
  loader: glob({ base: "./src/content/models", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    ...baseFields,
    model_type: z.string(),
    inputs: z.array(z.string()).min(1),
    outputs: z.array(z.string()).min(1),
  }),
});

const glossary = defineCollection({
  loader: glob({ base: "./src/content/glossary", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    ...baseFields,
    definition: z.string(),
  }),
});

const sandbox = defineCollection({
  loader: glob({ base: "./src/content/sandbox", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    ...baseFields,
    review_status: z.literal("sandbox"),
    notes: z.string().optional(),
  }),
});

const assumptions = defineCollection({
  loader: glob({ base: "./src/content/assumptions", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    statement: z.string(),
    status: z.enum(["supported", "contested", "context-dependent"]),
    rationale: z.string().min(20),
    related: z.array(z.string()).default([]),
    updated: z.coerce.date(),
  }),
});

export const collections = {
  library,
  topics,
  protocols,
  models,
  glossary,
  sandbox,
  assumptions,
};
