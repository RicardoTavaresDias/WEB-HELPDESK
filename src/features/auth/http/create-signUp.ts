import { type signupSchemaType } from "@/features/auth/schemas/AuthSchema"
import { api } from "@/services/api"
import { useQueryMutation } from "@/http/use-mutation"

function useSignup () {
  return useQueryMutation({
    fetch: async (data: signupSchemaType) => {
      const response = await api.post("/user/customer", {
        ...data
      })

      const result = response.data
      return result
    }
  })
}

export { useSignup }