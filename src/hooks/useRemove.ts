import { AxiosError } from "axios"
import { useState } from "react"

export const useRemove = ({ onSuccessCallback, endpoint }: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ error?: string, sucess?: string }>({
    error: "",
    sucess: ""
  })
 
  const remove = async (id: string) => {
    setMessage({ error: "", sucess: "" })

    try {
      setIsLoading(true)
      const responseRemove = await endpoint(id)
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
    remove,
    message,
    isLoading
  }
}