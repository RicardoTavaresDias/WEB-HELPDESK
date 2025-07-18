import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useAuth } from "@/hooks/useAuth"
import { type ProfileChangePasswordSchemaType } from "../schemas/profileSchema"
import { useMutation } from "@tanstack/react-query"

function useChangePassword () {
  const { session } = useAuth()

  return useMutation({
    mutationFn: async ({ oldPassword, newPassword }: ProfileChangePasswordSchemaType) => {
      try {
        const response = await api.patch(`/user/${session?.user.id}/changePassword`, { oldPassword, newPassword })
        const result = await response.data

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

export { useChangePassword }