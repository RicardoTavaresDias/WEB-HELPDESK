import z from "zod"

export const calledSchema = z.object({
  title: z.string().min(1, { message: "Campo obrigatório" }),
  description: z.string().min(1, { message: "Campo obrigatório" }).max(300, { message: "Maximo 300 caracteres" }),
  category: z.object({
    id: z.string(),
    titleService: z.string(),
    price: z.string()
  }, { message: "Categoria de serviço é obrigatória" })
})

export type CalledSchemaType = z.infer<typeof calledSchema>
