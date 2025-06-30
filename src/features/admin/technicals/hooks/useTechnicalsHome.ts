import { hourFormatList, type mappedUserType } from "@/lib/formatHours"
import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useEffect, useState } from "react"

export const useTechnicalHome = () => {
  const [users, setUsers] = useState<mappedUserType[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [messageError, setMessageError] = useState("")

  const usersData = async () => {
    try {
      const response = await api.get("user/list/technical?page=1&limit=10")

      const data = hourFormatList(response.data.data)
      setUsers(data)
    }catch(error: any){
      if(error instanceof AxiosError) {
        return setMessageError(error.response?.data.message)
      }

      setMessageError(error.message)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    usersData()
  },[])

  return {
    users,
    isLoading, 
    messageError
  }
}