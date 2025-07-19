import { hourFormatList, type mappedUserType, type UsersType } from "@/lib/formatHours"
import { type UserTechnicalType } from "../schemas/technical.schema"
import { useState } from "react"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { PaginationType } from "@/types/pagination"
import { api } from "@/services/api"
import { AxiosError } from "axios"

type DataTechnicalType = {
  result: PaginationType
  data: UserTechnicalType[]
}

function useTechnicals () {
  const [page, setPage] = useState(1)

  const { data, error, isLoading, isError } = useQuery<DataTechnicalType>({
    queryKey: ['get_technical', page],
    queryFn: async () => {
      try {
        const response = await api.get(`/user/list/technical?page=${page}&limit=10`)
        const result = response.data as DataTechnicalType
        
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
    data: hourFormatList(data?.data as UsersType[]) as mappedUserType[], 
    error,
    isLoading,
    page,
    setPage,
    pagination: data?.result || null,
    isError
  }
}

export { useTechnicals }