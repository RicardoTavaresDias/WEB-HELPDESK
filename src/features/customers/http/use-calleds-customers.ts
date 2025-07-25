import type { CalledsUserTecnicalType } from "@/features/technical/types/calleds-user-response"
import { useQueryGet } from "@/http/use-query-get"
import { api } from "@/services/api"

function useCalledsCustomer () {
  const result = useQueryGet<CalledsUserTecnicalType>({
    queryKey: "get_calleds",
    fetchGet: async (page) => {
      const response = await api.get(`calleds/user?page=${page}&limit=10`)
      const result = response.data

      return result
    }
  })

  return {
    page: result.page,
    setPage: result.setPage,
    pagination: result.query.data?.result || null,
    query: result.query
  }
}

export { useCalledsCustomer }