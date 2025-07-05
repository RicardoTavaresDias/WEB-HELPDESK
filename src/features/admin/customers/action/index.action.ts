import { Index } from "@/services/list.services"
import { apiCustomer } from "../api/customer.api"

const index = () => {
  const response = Index(apiCustomer.list)

  return {
    isLoading: response.isLoading,
    messageError: response.messageError,
    page: response.page,
    pagination: response.pagination,
    setPage: response.setPage,
    users: response.data,
    fethLoad: response.fethLoad
  }
}

export { index }