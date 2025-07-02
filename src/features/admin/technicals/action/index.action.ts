import { hourFormatList, type mappedUserType } from "@/lib/formatHours"
import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useEffect, useState } from "react"

type PaginationType = {
  page: number
  totalPage: number
  next?: number
  previous?: number
}

export const IndexAdminTechnicalsAction = () => {
  const [users, setUsers] = useState<mappedUserType[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState("")
  const [pagination, setPagination] = useState<PaginationType | null>(null)
  const [page, setPage] = useState(1)

  const usersData = async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`user/list/technical?page=${page}&limit=10`)

      const data = hourFormatList(response.data.data)
      setUsers(data)
      setPagination(response.data.result)
    }catch(error: any){
      if(error instanceof AxiosError) {
        return setMessageError(error.response?.data.message)
      }

      return setMessageError(error.message)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    usersData()
  },[page])

  return {
    users,
    isLoading, 
    messageError,
    pagination,
    setPage,
    page
  }
}