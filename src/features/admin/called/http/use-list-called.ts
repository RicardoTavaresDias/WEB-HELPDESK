import { api } from "@/services/api"
import type { CalledsType } from "../types/calleds-response"
import { useQueryGet } from "@/http/use-query-get"

function useListCalled(id: number) {
  return useQueryGet<CalledsType[]>({
    queryKey: 'get_list',
    fetchGet: async () => {
      const response = await api.get(`/calleds/called/${id}`)
      const result = response.data

      return result
    }
  })
}

export { useListCalled }