import z from "zod"

export const profileUpdateSchema = z.object({
  name: z.string({ message: "Campo somente string" })
  .min(1, { message: "Campo obrigatório" })
  .regex(/^[a-zA-Z\s]*$/, { message: "Campo nome deve conter apenas letras e espaços." })
  .transform((name) => {
    return name
      .trim()
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase().concat(word.substring(1));
      }).join(" ")
  }).optional(),
  email: z.string({ message: "Campo somente string" })
  .min(1, { message: "Campo obrigatório" })
  .email({ message: "E-mail inválido" }).optional()
})

export type ProfileUpdateSchemType = z.infer<typeof profileUpdateSchema>

export const profileChangePasswordSchema = z.object({
  oldPassword: z.string().min(1, { message: "Campo obrigatório" }),
  newPassword: z.string().min(6, { message: "Preencha o campo com pelo menos 6 caracteres" })
})

export type ProfileChangePasswordSchemaType = z.infer<typeof profileChangePasswordSchema>