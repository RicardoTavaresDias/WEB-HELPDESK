import { api } from "@/services/api"
import { useAuth } from "@/hooks/useAuth"
import { useQueryMutation } from "@/http/use-mutation"

function useRemoveAvatar () {
  const { session, loadUser } = useAuth()
  
  return useQueryMutation<void>({
    fetch: async () => {
      const response = await api.delete(`/user/avatar/${session?.user.id}`)
      const result = response.data

      localStorage.removeItem("@helpDesk:user")
      localStorage.setItem("@helpDesk:user", JSON.stringify({
        ...result
      }))

      loadUser()
      return ({ sucess: "Avatar Removido com sucess" })
    }
  })
}

export { useRemoveAvatar }