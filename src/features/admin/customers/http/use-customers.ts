import { AxiosError } from "axios"
import { useEffect, useState, useCallback } from "react"
import { api } from "@/services/api"
import type { UserCustomerType } from "../types/customers-response"
import type { PaginationType } from "@/types/pagination"

const indexCustomers = () => {
  const [data, setData] = useState<UserCustomerType[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState("")
  const [pagination, setPagination] = useState<PaginationType | null>(null)
  const [page, setPage] = useState(1)

  const fethLoad = useCallback(async () => {
    try {
      setIsLoading(true)
      const responseCustomer = await api.get(`/user/list/customer?page=${page}&limit=10`)

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
    users: data,
    isLoading,
    messageError,
    pagination,
    setPage,
    page,
    fethLoad
  }
}

export { indexCustomers }