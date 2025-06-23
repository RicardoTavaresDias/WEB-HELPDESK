import z from "zod"

export const userSchema = () => {
  const isUserSchema = z.object({
    name: z.string({ message: "string only field" })
    .min(1, { message: "required field" }),
    email: z.string({ message: "string only field" })
    .min(1, { message: "required field" })
    .email({ message: "invalid email" }),
    password: z.string({ message: "string only field" })
    .min(6, { message: "fill in the field with at least 6 characters" })
  })

  return { isUserSchema }
}