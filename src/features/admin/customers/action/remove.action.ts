import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useState } from "react"

export const removeAdminCustomersAction = (onSuccessCallback?: () => void) => {
  const [sucessRemove, setsucessRemove] = useState("")
  const [errorRemove, setErrorRemove]= useState("")
 
  const removeUser = async (id: string) => {
    setErrorRemove("")
    setsucessRemove("")
    try {
      const responseRemove = await api.delete(`/user/${id}`)
      setsucessRemove(responseRemove.data.message)
      if(onSuccessCallback){
        onSuccessCallback()
      }
    } catch (error: any) {
      setsucessRemove("")

      if(error instanceof AxiosError) {
        return setErrorRemove(error.response?.data.message)
      }
      setErrorRemove(error.message)
    }
  }

  return {
    removeUser,
    sucessRemove,
    errorRemove
  }
}