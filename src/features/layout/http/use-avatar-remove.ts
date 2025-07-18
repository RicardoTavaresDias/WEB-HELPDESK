import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useAuth } from "@/hooks/useAuth"
import { useMutation } from "@tanstack/react-query"

function useRemoveAvatar () {
    const { session, loadUser } = useAuth()

  return useMutation({
    mutationFn: async () => {
      try {
        const response = await api.delete(`/user/avatar/${session?.user.id}`)
        const result = response.data

        localStorage.removeItem("@helpDesk:user")
        localStorage.setItem("@helpDesk:user", JSON.stringify({
          ...result
        }))

        loadUser()
        return ({ sucess: "Avatar Removido com sucess" })
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    }
  })
}

export { useRemoveAvatar }