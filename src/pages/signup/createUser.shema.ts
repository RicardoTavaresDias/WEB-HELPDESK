import z from "zod"

export const userSchema = () => {
  const isUserSchema = z.object({
    name: z.string({ message: "Campo somente string" })
    .min(1, { message: "Campo obrigatório" }),
    email: z.string({ message: "Campo somente string" })
    .min(1, { message: "Campo obrigatório" })
    .email({ message: "E-mail inválido" }),
    password: z.string({ message: "Campo somente string" })
    .min(6, { message: "Preencha o campo com pelo menos 6 caracteres" })
  })

  return { isUserSchema }
}