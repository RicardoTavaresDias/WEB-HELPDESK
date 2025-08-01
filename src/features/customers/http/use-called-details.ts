import type { Called } from "@/types/calleds-response"
import { useQueryGet } from "@/http/use-query-get"
import { api } from "@/services/api"

function useCalledDetails (id: string) {
  return useQueryGet<Called>({
    queryKey: "get_by_called",
    fetchGet: async () => {
      const response = await api.get(`/calleds/${id}`)
      const result = response.data

      return result[0]
    }
  })
}

export { useCalledDetails }