import { Index } from "@/services/list.services"
import { apiTechnicals } from "../api/technicals.api"
import { hourFormatList, type mappedUserType } from "@/lib/formatHours"

const index = () => {
  const response = Index(apiTechnicals.list)
  const formatUserHours = hourFormatList(response.users as any) 

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

// arrumar a tipagem, remover any