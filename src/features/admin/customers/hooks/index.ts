import { useIndex } from "@/hooks/useIndex"
import { apiCustomer } from "../api/customer.api"
import type { mappedUserType } from "@/lib/formatHours"


const index = () => {
  const response = useIndex(apiCustomer.list)
  
  const {  
    isLoading,
    messageError ,
    page,
    pagination,
    setPage,
    data,
    fethLoad
  } = response

  return {
    isLoading,
    messageError,
    page,
    pagination,
    setPage,
    users: data as mappedUserType[] | null,
    fethLoad
  }
}

export { index }