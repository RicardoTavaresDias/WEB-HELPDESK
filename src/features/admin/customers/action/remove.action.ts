import { api } from "@/services/api"
import { useState } from "react"

export const removeAdminCustomersAction = (onSuccessCallback?: () => void) => {
  const [sucess, setsucess] = useState("")
 
  const removeUser = async (id: string) => {
    setsucess("")
    try {
      const responseRemove = await api.delete(`/user/${id}`)
      setsucess(responseRemove.data.message)
      if(onSuccessCallback){
        onSuccessCallback()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    removeUser,
    sucess
  }
}