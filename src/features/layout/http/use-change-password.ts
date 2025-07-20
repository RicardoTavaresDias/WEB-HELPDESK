import { api } from "@/services/api"
import { useAuth } from "@/hooks/useAuth"
import { type ProfileChangePasswordSchemaType } from "../schemas/profileSchema"
import { useQueryMutation } from "@/http/use-mutation"

function useChangePassword () {
  const { session } = useAuth()

  return useQueryMutation({
    fetch: async ({ oldPassword, newPassword }: ProfileChangePasswordSchemaType) => {
      const response = await api.patch(
        `/user/${session?.user.id}/changePassword`, 
        { oldPassword, newPassword }
      )
      const result = await response.data

      return result
    }
  })
}

export { useChangePassword }