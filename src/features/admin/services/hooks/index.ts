import { apiServices } from "../api/services.api"
import { useIndex } from "@/hooks/useIndex"

type DataType = {
  id: string
  titleService: string
  value: string
  serviceStatus: "inactive" | "active"
}

const IndexServices = () => {
  const response = useIndex(apiServices.list)
  const data: DataType[]  = response.data || []

  const { 
    fethLoad, 
    isLoading, 
    messageError, 
    page, 
    pagination, 
    setPage 
  } = response

  return {
    isLoading,
    messageError,
    pagination,
    page,
    setPage,
    fethLoad,
    data
  }
}

export { IndexServices }