import { type CalledsType } from "../types/calleds-response"
import { api } from "@/services/api"
import type { PaginationType } from "@/types/pagination"
import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"

type DataCalledsType = {
  result: PaginationType
  data: CalledsType[]
}

function useCalleds (page?: number) {
  return useQuery<DataCalledsType>({
    queryKey: ["get_calleds", page],
    queryFn: async () => {
      try {
        const response = await api.get(`/calleds?page=${page}&limit=10`)
        const result = response.data

        return result
      }catch(error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    },
    retry: 1,
  })
}

export { useCalleds }