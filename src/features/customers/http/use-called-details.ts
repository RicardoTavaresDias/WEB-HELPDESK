import type { Called } from "@/features/technical/types/calleds-user-response"
import { useQueryGet } from "@/http/use-query-get"
import { api } from "@/services/api"

function useCalledDetails (id: string) {
  return useQueryGet<Called>({
    queryKey: "get_by_called",
    fetchGet: async () => {
      const response = await api.get(`/calleds/called/${id}`)
      const result = response.data

      return result[0]
    }
  })
}

export { useCalledDetails }