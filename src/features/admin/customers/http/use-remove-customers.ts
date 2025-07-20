import { api } from "@/services/api"
import { useQueryMutation } from "@/http/use-mutation"

function removeCustomer() {
  return useQueryMutation({
    queryKey: "get_Customer",
    fetch: async (userId: string) => {
      await api.delete(`/user/${userId}`)
      return { sucess: 'Usuário removido com sucesso.' }
    },
  })
}

export { removeCustomer }