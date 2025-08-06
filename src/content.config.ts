import { defineCollection, z, type CollectionEntry } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
    schema: z.object({
        slug: z.string(),
        date: z.coerce.date(),
        lastChanged: z.coerce.date(),
        title: z.string(),
        description: z.string(),
        image: z.string(),
        excerpt: z.string().optional(),
    })
});
export type BlogEntry = CollectionEntry<"blog">;

const portfolio = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/portfolio" }),
    schema: z.object({
        slug: z.string(),
        title: z.string(),
        headerLink: z.string().url().optional(),
    })
});
export type PortfolioEntry = CollectionEntry<"portfolio">;

export const collections = { blog, portfolio };