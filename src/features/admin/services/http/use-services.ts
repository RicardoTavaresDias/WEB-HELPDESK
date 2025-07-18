import { type DataServicesType } from "../types/data-services"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { api } from "@/services/api"
import { AxiosError } from "axios"
import type { PaginationType } from "@/types/pagination"

type DataCalledsType = {
  result: PaginationType
  data: DataServicesType[]
}

function useServices () {
  const [page, setPage] = useState(1)

  const { data, error, isLoading, isError } = useQuery<DataCalledsType>({
    queryKey: ['get_services', page],
    queryFn: async () => {
      try {
        const response = await api.get(`/services?page=${page}&limit=10`)
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
  })

  return {
    data, 
    error,
    isLoading,
    page,
    setPage,
    pagination: data?.result || null,
    isError
  }
}

export { useServices }