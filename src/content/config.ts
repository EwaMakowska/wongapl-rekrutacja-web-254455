// src/content/config.ts
import { defineCollection, z } from "astro:content"

const mainPage = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        image: z.string().optional(),
        image_alt: z.string().optional(),
    }),
})

const internalLinks = defineCollection({
    type: 'data',
    schema: z.object({
        label: z.string(),
        url: z.string(),
        external: z.boolean().optional(),
    })
})

const externalLinks = defineCollection({
    type: 'data',
    schema: z.object({
        label: z.string(),
        url: z.string(),
        icon: z.string().optional(),
        external: z.boolean().optional(),
        description: z.string().optional(),
    })
})

const globals = defineCollection({
    type: 'data',
    schema: z.object({
      footerContent: z.string(),
    }),
  });

  const underConstruction = defineCollection({
    type: 'data',
    schema: z.object({
      content: z.string(),
    }),
  });

const typesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

export const collections = {
    "main-page": mainPage,
    "internal-links": internalLinks,
    "external-links": externalLinks,
    "globals": globals,
    "underConstruction": underConstruction,
    "types": typesCollection,
}