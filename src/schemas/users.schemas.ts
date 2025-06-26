import z from "zod";

export const userTechnicalrSchema = z.object({
  name: z
    .string({ message: "Campo somente string" })
    .min(1, { message: "Campo obrigatório" })
    .regex(/^[a-zA-Z\s]*$/, { message: "Campo nome deve conter apenas letras e espaços." }),
  email: z
    .string({ message: "Campo somente string" })
    .min(1, { message: "Campo obrigatório" })
    .email({ message: "E-mail inválido" }),
  password: z
    .string({ message: "Campo somente string" })
    .min(6, { message: "Preencha o campo com pelo menos 6 caracteres" }),
});

export type UserTechnicalrSchema = z.infer<typeof userTechnicalrSchema>


export const userCustomerSchema = z.object({
  email: z
    .string({ message: "Campo somente string" })
    .min(1, { message: "Campo obrigatório" })
    .email({ message: "E-mail inválido" }),
  password: z
    .string({ message: "Campo somente string" })
    .min(6, { message: "Preencha o campo com pelo menos 6 caracteres" }),
});

export type UserCustomerSchema = z.infer<typeof userCustomerSchema>