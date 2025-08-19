import { useNavigate } from "react-router"
import { useAuth } from "@/hooks/useAuth"
import { type signinSchemaType } from "@/features/auth/schemas/AuthSchema"
import { api } from "@/services/api"
import { useQueryMutation } from "@/http/use-mutation"

function useSignin () {
  const navigate = useNavigate()
  const { save } = useAuth()

  return useQueryMutation({
    fetch: async (data: signinSchemaType) => {
      const response = await api.post("/", {
        ...data
      })

      const result = response.data

      save({
        token: result.token,
        user: result.user
      })

      navigate("/?page=1")
    }
  })
}

export { useSignin }