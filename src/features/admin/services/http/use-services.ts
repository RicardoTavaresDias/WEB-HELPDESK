import { useFethLoad } from "@/hooks/useFethLoad"
import { type DataServicesType } from "../types/data-services"

const IndexServices = () => {
  const response = useFethLoad<DataServicesType[]>("/services")

  return {
    data: response.data,
    isLoading: response.isLoading,
    messageError: response.messageError,
    pagination: response.pagination,
    setPage: response.setPage,
    page: response.page,
    fethLoad: response.fethLoad
  }
}

export { IndexServices }