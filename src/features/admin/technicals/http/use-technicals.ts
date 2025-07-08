import { hourFormatList } from "@/lib/formatHours"
import { AxiosError } from "axios"
import { useEffect, useState, useCallback } from "react"
import type { PaginationType } from "@/types/pagination"
import { api } from "@/services/api"

type UserTechnicalType = {
  id: string,
  name: string,
  email: string
  avatar: string
  userHours: string[]
}

export const indexTechnicals = () => {
  const [data, setData] = useState<UserTechnicalType[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState("")
  const [pagination, setPagination] = useState<PaginationType | null>(null)
  const [page, setPage] = useState(1)

  const fethLoad = useCallback(async () => {
    try {
      setIsLoading(true)
      const responseCustomer = await api.get(`/user/list/technical?page=${page}&limit=10`)

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

  const formatUserHours = hourFormatList(data as any) // arrumar a tipagem

  useEffect(() => {
    fethLoad()
  }, [page])

  return {
    dataUsers: formatUserHours,
    isLoading,
    messageError,
    pagination,
    setPage,
    page
  }
}