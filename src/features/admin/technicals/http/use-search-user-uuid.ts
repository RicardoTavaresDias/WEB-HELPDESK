import { hourFormatList } from "@/lib/formatHours";
import { api } from "@/services/api";
import { AxiosError } from "axios"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { useState } from "react";

export interface SearchTechnicalType {
  id: string
  name: string
  email: string
  avatar: string
  userHours: string[]
}

function useSearchTechnical (id: string) {
  const [userTechnical, setUserTechnical] = useState<SearchTechnicalType>()

  const queery =  useQuery({
    queryKey: ['get_search_technical'],
    queryFn: async () => {
      try {
        const response = await api.get(`/user/${id}`)
        const result = response.data

        const [ userData ] = hourFormatList(result);
        const userHoursData = userData.userHours.flat()

        setUserTechnical({ ...userData, userHours: userHoursData })
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
    userTechnical,
    setUserTechnical,
    queery
  }
}

export { useSearchTechnical }