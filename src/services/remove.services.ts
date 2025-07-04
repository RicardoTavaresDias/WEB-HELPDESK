import { AxiosError } from "axios"
import { useState } from "react"

export const Remove = ({ onSuccessCallback, endpoint }: any) => {
  const [message, setMessage] = useState<{ error?: string, sucess?: string }>({
    error: "",
    sucess: ""
  })
 
  const removeUser = async (id: string) => {
    setMessage({ error: "", sucess: "" })

    try {
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
    }
  }

  return {
    removeUser,
    message
  }
}