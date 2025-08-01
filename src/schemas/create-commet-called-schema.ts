import z from "zod"

export const createCommentCalledSchema = z.object({
  description: z.string().min(1, { message: "Campo obrigatório" })
    .transform(word => word[0].toUpperCase().concat(word.substring(1))),
    type: z.string().min(1, { message: "Campo obrigatório" })
      .refine(value => (typeof value === "string" ? value : ""))
})

export type CreateCommentCalledSchemaType = z.infer<typeof createCommentCalledSchema>