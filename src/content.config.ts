import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { EVIDENCE_IDS, LOOP_IDS, PHASE_IDS } from './data/taxonomy';

const source = z.object({
  title: z.string(),
  label: z.enum(EVIDENCE_IDS),
  url: z.url().optional(),
  note: z.string().optional(),
});

const lessons = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/lessons' }),
  schema: z.object({
    no: z.string(),
    title: z.string(),
    summary: z.string(),
    phase: z.enum(PHASE_IDS),
    loops: z.array(z.enum(LOOP_IDS)).min(1),
    goal: z.string(),
    duration: z.string(),
    prerequisites: z.string(),
    status: z.enum(['draft', 'review', 'published']).default('draft'),
    version: z.string().default('v0.1'),
    updated: z.string(),
    worksheets: z.array(z.string()).default([]),
    books: z.array(z.string()).default([]),
    sources: z.array(source).default([]),
    next: z.array(z.string()).default([]),
    soronChapters: z.array(z.number()).default([]),
  }),
});

const phases = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/phases' }),
  schema: z.object({
    phase: z.enum(PHASE_IDS),
    title: z.string(),
    summary: z.string(),
    loops: z.array(z.enum(LOOP_IDS)),
    books: z.array(z.string()).default([]),
    worksheets: z.array(z.string()).default([]),
    soronChapters: z.array(z.number()).default([]),
    updated: z.string(),
  }),
});

const themes = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/themes' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    summary: z.string(),
    order: z.number(),
    loops: z.array(z.enum(LOOP_IDS)).default([]),
    books: z.array(z.string()).default([]),
    worksheets: z.array(z.string()).default([]),
    sources: z.array(source).default([]),
    soronChapters: z.array(z.number()).default([]),
    updated: z.string(),
  }),
});

export const collections = { lessons, phases, themes };
