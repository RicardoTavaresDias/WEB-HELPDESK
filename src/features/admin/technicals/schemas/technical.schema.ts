import z from "zod"
import { signupSchema } from "@/features/auth/schemas/AuthSchema"
import type { signupSchemaType } from "@/features/auth/schemas/AuthSchema"

export const userTechnicalSchema = z.object({
  ...signupSchema.shape
})

export type UserTechnicalSchemaType = z.infer<typeof userTechnicalSchema>


  // Reproveitando o schema e type do Auth
 export const userSchema = signupSchema.omit({ password: true })
 export type UserTechnicalType = Omit<signupSchemaType, "password">