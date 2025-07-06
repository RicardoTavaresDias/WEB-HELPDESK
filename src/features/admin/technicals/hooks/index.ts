import { useIndex } from "@/hooks/useIndex"
import { apiTechnicals } from "../api/technicals.api"
import { hourFormatList } from "@/lib/formatHours"

const index = () => {
  const response = useIndex(apiTechnicals.list)
  const formatUserHours = hourFormatList(response.data as any) 

  return {
    isLoading: response.isLoading,
    messageError: response.messageError,
    page: response.page,
    pagination: response.pagination,
    setPage: response.setPage,
    users: formatUserHours,
    fethLoad: response.fethLoad
  }
}

export { index }