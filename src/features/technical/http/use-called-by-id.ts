import { useQueryGet } from "@/http/use-query-get"
import { api } from "@/services/api"
import { type Called } from "@/types/calleds-response"

function useCalledById (id: string) {
  return useQueryGet<Called>({
    queryKey: "called_byId",
    fetchGet: async () => {
      const response = await api.get(`/calleds/${id}`)
      const result = response.data

      const [ ...rest ] = result

      return rest
    }
  })
}

export { useCalledById }