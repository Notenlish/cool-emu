// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

const romgames = defineCollection({
    loader: file("src/data/roms.json"),
    schema: z.object({
        href: z.string().startsWith("https://"),
        name: z.string(),
        imgPath: z.string(),
        imgUrl: z.string(),
        category: z.string(),
        slug: z.string(),
    })
});

export const collections = { romgames };