import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';

export const server = {
    sendContactRequest: defineAction({
        accept: "form",
        input: z.object({ name: z.string(), }),
        handler: async (input) => {
            return `Hello ${input.name}!`
        }
    })
}