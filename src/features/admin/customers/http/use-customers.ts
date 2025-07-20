import { type UserCustomerType } from "../types/customers-response"
import { api } from "@/services/api"
import type { PaginationType } from "@/types/pagination"
import { useQueryGet } from "@/http/use-query-get"

type DataCalledsType = {
  result: PaginationType
  data: UserCustomerType[]
}

function useCustomer () {
  const result =  useQueryGet<DataCalledsType>({
    queryKey: "get_Customer",
    fetchGet: async (page) => {
      const response = await api.get(`/user/list/customer?page=${page}&limit=10`)
      const result = response.data

      return result
    }
  })

  return {
    data: result.query.data, 
    error: result.query.error,
    isLoading: result.query.isLoading,
    pagination: result.query.data?.result || null,
    page: result.page,
    setPage: result.setPage
  }
}

export { useCustomer }