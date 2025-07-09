import z from "zod"

export const servicesSchema = z.object({
  title: z.string({ message: "Campo somente string" })
  .min(1, { message: "Campo obrigatório" })
  .regex(/^[a-zA-Z\s]*$/, { message: "Campo nome deve conter apenas letras e espaços." }),
  value: z.string({ message: "Campo somente string" })
  .min(1, { message: "Campo obrigatório" })
})

export type ServicesSchemaType = z.infer<typeof servicesSchema>
