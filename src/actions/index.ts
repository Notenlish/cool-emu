import { defineAction } from 'astro:actions';
import { formSchema } from '$lib/data/schema';
import { ActionError } from 'astro:actions';
import { ZodError } from 'astro:schema';
import { z } from "zod";


export const server = {
    sendContactRequest: defineAction({
        accept: "form",
        input: formSchema,
        handler: async (input) => {
            try {
                formSchema.parse(input)
            } catch (error) {
                if (error instanceof ZodError) {
                    // zod is not v4, its v3 so no pretty errors :(
                    throw new ActionError({ code: "BAD_REQUEST", message: `Incorrectly formatted message. ${error}` })
                }
            }

            let msg = `New Contact Request!\nName: ${input.name} - Lastname: ${input.lastname}\nTitle: ${input.title}\nEmail:${input.email}\n${input.content}`

            const init = { method: "POST", body: JSON.stringify({ content: msg }), headers: { "Content-Type": "application/json" } }

            const response = await fetch(import.meta.env.CONTACT_WEBHOOK as string, init)

            if (!response.ok) throw new ActionError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Server had an issue processing your request.",
            });
            return `Successfully sent contact request.`
        }
    })
}