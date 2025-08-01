import { AxiosError } from "axios"
import { useEffect, useState, useCallback } from "react"
import { api } from "@/services/api"
import type { PaginationType } from "@/types/pagination"

const useFethLoad = <T>(httpApi: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState("")
  const [pagination, setPagination] = useState<PaginationType | null>(null)
  const [page, setPage] = useState(1)

  const fethLoad = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`${httpApi}?page=${page}&limit=10`)

      setData(response.data.data)
      setPagination(response.data.result)
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

export { useFethLoad }