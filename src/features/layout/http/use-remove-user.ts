import { api } from "@/services/api"
import { useQueryMutation } from "@/http/use-mutation"

function removeProfile() {
  return useQueryMutation({
    fetch: async (userId: string) => {
      await api.delete(`/user/${userId}`)
      return { sucess: 'Usuário removido com sucesso.' }
    },
  })
}

export { removeProfile }