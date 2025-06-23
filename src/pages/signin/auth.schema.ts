import z from "zod"

export const authSchema = () => {
  const shema = z.object({
    email: z.string({ message: "string only field" })
    .min(1, { message: "required field" })
    .email({ message: "invalid email" }),
    password: z.string({ message: "string only field" })
    .min(6, { message: "fill in the field with at least 6 characters" })
  })

  return { shema } 
}