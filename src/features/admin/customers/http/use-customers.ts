import { type UserCustomerType } from "../types/customers-response"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { api } from "@/services/api"
import type { PaginationType } from "@/types/pagination"
import { useState } from "react"

type DataCalledsType = {
  result: PaginationType
  data: UserCustomerType[]
}

function useCustomer () {
  const [page, setPage] = useState(1)

  const { data, error, isLoading } = useQuery<DataCalledsType>({
    queryKey: ["get_Customer", page],
    queryFn: async () => {
      try {
        const response = await api.get(`/user/list/customer?page=${page}&limit=10`)
        const result = response.data

        return result
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    },
    retry: 1,
    placeholderData: keepPreviousData
  })

  return {
    data, 
    error,
    isLoading,
    pagination: data?.result || null,
    page,
    setPage
  }
}

export { useCustomer }