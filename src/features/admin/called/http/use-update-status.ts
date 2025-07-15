import { AxiosError } from "axios"
import { useState } from "react"
import { api } from "@/services/api"

const updateStatus = (onSucessCallback: () => void) => {
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState("")

  const onSubmitStatus = async (status: { id: number, status: "open" | "in_progress" | "close"  }) => {
    try {
      setIsLoading(true)
      await api.patch(`/calleds/${status.id}`, {
        status: status.status
      })

      if(onSucessCallback){
        onSucessCallback()
      }
    } catch (error: any) {
      if(error instanceof AxiosError) {
          return setMessageError(error.response?.data.message)
        }
  
      return setMessageError(error.message)
    }finally {
      setIsLoading(false)
    }
  }

  return {
    onSubmitStatus,
    isLoadingUpdate: isLoading,
    messageErrorUpdate: messageError   
  }
}

export { updateStatus }