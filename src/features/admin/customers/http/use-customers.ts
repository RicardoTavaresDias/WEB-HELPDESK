import { useFethLoad } from "@/hooks/useFethLoad"
import { type UserCustomerType } from "../types/customers-response"

const indexCustomers = () => {
  const response = useFethLoad<UserCustomerType[]>("/user/list/customer")

  return {
    users: response.data,
    isLoading: response.isLoading,
    messageError: response.messageError,
    pagination: response.pagination,
    setPage: response.setPage,
    page: response.page,
    fethLoad: response.fethLoad
  }
}

export { indexCustomers }