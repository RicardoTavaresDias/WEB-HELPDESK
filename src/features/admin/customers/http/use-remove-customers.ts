import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useState } from "react"

export const removeCustomer = (onSuccessCallback: () => void) => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ error?: string, sucess?: string }>({
    error: "",
    sucess: ""
  })
 
  const onRemove = async (uuid: string) => {
    setMessage({ error: "", sucess: "" })

    try {
      setIsLoading(true)
      const responseRemove = await api.delete(`/user/${uuid}`)
      setMessage({ sucess: responseRemove.data.message })
      if(onSuccessCallback){
        onSuccessCallback()
      }
    } catch (error: any) {
      setMessage({ error: "", sucess: "" })

      if(error instanceof AxiosError) {
        return setMessage({ error: error.response?.data.message })
      }
      setMessage({ error: error.message })
    }finally{
      setIsLoading(false)
    }
  }

  return {
    onRemove,
    message,
    isLoadingRemove: isLoading
  }
}











// const removeCustomer = (onSuccessCallback: () => any) => {
//   const response = useRemove({ onSuccessCallback, endpoint: apiCustomer.remove })

//   return {
//     removeUser: response.remove,
//     message: response.message,
//     isLoadingRemove: response.isLoading
//   }
// }

// export { removeCustomer }