import { AxiosError } from "axios"
import { api } from "@/services/api"
import { useQuery } from "@tanstack/react-query"
import type { CalledsType } from "../types/calleds-response"

function useListCalled(id: number) {
  return useQuery<CalledsType[]>({
    queryKey: ['get_list'],
    queryFn: async () => {
      try {
        const response = await api.get(`/calleds/called/${id}`)
        const result = response.data

        return result
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    }
  })
}

export { useListCalled }