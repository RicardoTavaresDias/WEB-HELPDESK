import type { mappedUserType } from "@/lib/formatHours"
import { AxiosError } from "axios"
import { useEffect, useState, useCallback } from "react"

type PaginationType = {
  page: number
  totalPage: number
  next?: number
  previous?: number
}

export const Index = (endpoint: (page: number) => any) => {
  const [users, setUsers] = useState<mappedUserType[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState("")
  const [pagination, setPagination] = useState<PaginationType | null>(null)
  const [page, setPage] = useState(1)

  const fethLoad = useCallback(async () => {
    try {
      setIsLoading(true)
      const responseCustomer = await endpoint(page)

      setUsers(responseCustomer.data.data)
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
    users,
    isLoading,
    messageError,
    pagination,
    setPage,
    page,
    fethLoad
  }
}