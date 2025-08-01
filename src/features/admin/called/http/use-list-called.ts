import { api } from "@/services/api"
import type { Called } from "@/types/calleds-response"
import { useQueryGet } from "@/http/use-query-get"

function useListCalled(id: number) {
  return useQueryGet<Called[]>({
    queryKey: 'get_list',
    fetchGet: async () => {
      const response = await api.get(`/calleds/${id}`)
      const result = response.data

      return result
    }
  })
}

export { useListCalled }