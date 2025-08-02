import z from "zod";

export const signinSchema = z.object({
  email: z
    .string({ message: "Campo somente string" })
    .min(1, { message: "Campo obrigatório" })
    .email({ message: "E-mail inválido" }),
  password: z
    .string({ message: "Campo somente string" })
    .min(6, { message: "Preencha o campo com pelo menos 6 caracteres" }),
});

export type signinSchemaType = z.infer<typeof signinSchema>



export const signupSchema = z.object({
  name: z
    .string({ message: "Campo somente string" })
    .min(1, { message: "Campo obrigatório" })
    .regex(/^[\p{L}\s]+$/u, { message: "Campo nome deve conter apenas letras e espaços." }),
    ...signinSchema.shape
});

export type signupSchemaType = z.infer<typeof signupSchema>