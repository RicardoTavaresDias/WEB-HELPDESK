import { AxiosError } from "axios"
import { useCallback, useEffect, useState } from "react"
import { api } from "@/services/api"
import type { CalledsType } from "../types/calleds-response"

const listCalled = (id: number) => {
  const [data, setData] = useState<CalledsType[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState("")

  const fethLoad = useCallback(async () => {
    try {
      setIsLoading(true)
      const responseCalleds = await api.get(`/calleds/called/${id}`)
      const data = responseCalleds.data

      setData(data)
    } catch (error: any) {
      if(error instanceof AxiosError) {
          return setMessageError(error.response?.data.message)
        }
  
      return setMessageError(error.message)
    }finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fethLoad()
  }, [])

  return {
    fethLoad,
    calleds: data,
    isLoading,
    messageError
  }
}

export { listCalled }