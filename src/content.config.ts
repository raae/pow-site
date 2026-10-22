import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const generateId = ({ entry }: { entry: string }) => entry.replace(/\.md$/, "");

// Every index.md in /content becomes a page, its folder is the url:
// content/index/index.md -> /, content/changelog/index.md -> /changelog/
const pages = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./content", generateId }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      robots: z.string().optional(),
      author: z.string().optional(),
      date: z.coerce.date().optional(),
      sections: z
        .array(
          z.object({
            title: z.string().optional(),
            subtitle: z.string().optional(),
            form: z.literal("newsletter").optional(),
            // Path to a markdown file, relative to the page's index.md
            body: z.string().optional(),
            image: image().optional(),
            imageAlt: z.string().optional(),
            cta: z.object({ path: z.string(), label: z.string() }).optional(),
            videos: z
              .array(z.object({ id: z.string(), action: z.string().optional() }))
              .optional(),
          })
        )
        .optional(),
    }),
});

// The other markdown files are section bodies referenced from a page
const sections = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/index.md"], base: "./content", generateId }),
});

export const collections = { pages, sections };
