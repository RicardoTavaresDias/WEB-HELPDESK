import z from "zod"
import { signupSchema } from "@/features/auth/schemas/AuthSchema"

export const userTechnicalSchema = z.object({
  ...signupSchema.shape
})

export type UserTechnicalSchemaType = z.infer<typeof userTechnicalSchema>