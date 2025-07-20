import { hourFormatList } from "@/lib/formatHours";
import { api } from "@/services/api";
import { useState } from "react";
import { useQueryGet } from "@/http/use-query-get"

export interface SearchTechnicalType {
  id: string
  name: string
  email: string
  avatar: string
  userHours: string[]
}

function useSearchTechnical (id: string) {
  const [userTechnical, setUserTechnical] = useState<SearchTechnicalType>()

  const result = useQueryGet({
    queryKey: 'get_search_technical',
    fetchGet: async () => {
      const response = await api.get(`/user/${id}`)
      const result = response.data

      const [ userData ] = hourFormatList(result);
      const userHoursData = userData.userHours.flat()

      setUserTechnical({ ...userData, userHours: userHoursData })
      return result
    }
  })

  return {
    userTechnical,
    setUserTechnical,
    query: result.query
  }
}

export { useSearchTechnical }