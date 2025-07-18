import { type signupSchemaType } from "@/features/auth/schemas/AuthSchema"
import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useMutation } from "@tanstack/react-query"

function useSignup () {
  return useMutation({
    mutationFn: async (data: signupSchemaType) => {
      try {
        const response = await api.post("/user/customer", {
          ...data
        })

        const result = response.data
        return result
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    }
  })
}

export { useSignup }