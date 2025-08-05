import { api } from "@/services/api"
import { useQueryMutation } from "@/http/use-mutation"

function removeTechnical() {
  return useQueryMutation({
    queryKey: "get_technical",
    fetch: async (userId: string) => {
      await api.delete(`/user/${userId}`)
      return { sucess: 'Usuário removido com sucesso.' }
    },
  })
}

export { removeTechnical }