import { hourFormatList, type mappedUserType, type UsersType } from "@/lib/formatHours"
import { type UserTechnicalType } from "../schemas/technical.schema"
import type { PaginationType } from "@/types/pagination"
import { api } from "@/services/api"
import { useQueryGet } from "@/http/use-query-get"

type DataTechnicalType = {
  result: PaginationType
  data: UserTechnicalType[]
}

function useTechnicals () {
  const result = useQueryGet<DataTechnicalType>({
    queryKey: 'get_technical',
    fetchGet: async (page) => {
      const response = await api.get(`/user/list/technical?page=${page}&limit=10`)
      const result = response.data
      
      return result 
    }
  })

  return {
    data: hourFormatList(result.query.data?.data as UsersType[]) as mappedUserType[], 
    error: result.query.error,
    isLoading: result.query.isLoading,
    page: result.page,
    pagination: result.query.data?.result || null,
    isError: result.query.isError
  }
}

export { useTechnicals }