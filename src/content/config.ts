// src/content/config.ts
import { defineCollection, z } from "astro:content"

const mainPage = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        image: z.string().optional(),
        image_alt: z.string().optional(),
    }),
})

export const collections = {
    "main-page": mainPage,
}