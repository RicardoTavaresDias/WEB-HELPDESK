import { AxiosError } from "axios"
import { useEffect, useState, useCallback } from "react"
import { api } from "@/services/api"
import type { CalledsMapType, CalledsType } from "../types/calleds-response"
import type { PaginationType } from "@/types/pagination"

const indexCalleds = () => {
  const [data, setData] = useState<CalledsMapType[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState("")
  const [pagination, setPagination] = useState<PaginationType | null>(null)
  const [page, setPage] = useState(1)

  const fethLoad = useCallback(async () => {
    try {
      setIsLoading(true)
      const responseCalleds = await api.get(`/calleds?page=${page}&limit=10`)
      const { result, data } = responseCalleds.data
      
      const descriptionServiceCalled = data.map((called: CalledsType) => {
        return {
        ...called,
          services: { 
            titleServices: called.services[0].services.titleService 
          }
        }
      })

      setData(descriptionServiceCalled)
      setPagination(result)
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
    calleds: data,
    isLoading,
    messageError,
    pagination,
    setPage,
    page,
    fethLoad
  }
}

export { indexCalleds }