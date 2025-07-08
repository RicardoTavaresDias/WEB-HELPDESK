import { AxiosError } from "axios"
import { useCallback, useEffect, useState } from "react"
import type { PaginationType } from "@/types/pagination"
import { api } from "@/services/api"
import type { DataServicesType } from "../types/data-services"

const IndexServices = () => {
  const [data, setData] = useState<DataServicesType[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState("")
  const [pagination, setPagination] = useState<PaginationType | null>(null)
  const [page, setPage] = useState(1)

  const fethLoad = useCallback(async () => {
    try {
      setIsLoading(true)
      const responseCustomer = await api.get(`/services?page=${page}&limit=10`)

      setData(responseCustomer.data.data)
      setPagination(responseCustomer.data.result)
    } catch (error: any) {
      if(error instanceof AxiosError) {
          return setMessageError(error.response?.data.message)
        }
  
      return setMessageError(error.message)
    }finally {
      setIsLoading(false)
    }
  }, [page])

  useEffect(() => {
    fethLoad()
  }, [page])

  return {
    data,
    isLoading,
    messageError,
    pagination,
    setPage,
    page,
    fethLoad
  }
}

export { IndexServices }