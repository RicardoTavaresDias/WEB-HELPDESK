import { useNavigate } from "react-router"
import { useAuth } from "@/hooks/useAuth"
import { type signinSchemaType } from "@/features/auth/schemas/AuthSchema"
import { AxiosError } from "axios"
import { api } from "@/services/api"
import { useMutation } from "@tanstack/react-query"

function useSignin () {
  const navigate = useNavigate()
  const { save } = useAuth()

  return useMutation({
    mutationFn: async (data: signinSchemaType) => {
      try {
        const response = await api.post("/", {
          ...data
        })

        const result = response.data

        save({
          token: result.token,
          user: result.user
        })

        navigate("/")
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    }
  })
}

export { useSignin }