import { type CalledsType } from "../types/calleds-response"
import { api } from "@/services/api"
import type { PaginationType } from "@/types/pagination"
import { useQueryGet } from "@/http/use-query-get"

export type DataCalledsType = {
  result: PaginationType
  data: CalledsType[]
}

function useCalleds () {
  const result =  useQueryGet<DataCalledsType>({
    queryKey: "get_calleds",
    fetchGet: async (page) => {
      const response = await api.get(`/calleds?page=${page}&limit=10`)
      const result = response.data

      return result
    }
  })

  return {
    pagination: result.query.data?.result || null,
    query: result.query,
    page: result.page
  }
}

export { useCalleds }