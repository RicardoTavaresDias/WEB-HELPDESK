import { type DataServicesType } from "../types/data-services"
import { api } from "@/services/api"
import type { PaginationType } from "@/types/pagination"
import { useQueryGet } from "@/http/use-query-get"

type ServicesType = {
  result: PaginationType
  data: DataServicesType[]
}

function useServices () {
  const result = useQueryGet<ServicesType>({
    queryKey: 'get_services',
    fetchGet: async (page) => {
      const response = await api.get(`/services?page=${page}&limit=10`)
      const result = response.data

      return result
    }
  })
  
  return {
    data: result.query.data, 
    error: result.query.error,
    isLoading: result.query.isLoading,
    page: result.page,
    setPage: result.setPage,
    pagination: result.query.data?.result || null,
    isError: result.query.isError
  }
}

export { useServices }