import { useForm } from 'react-hook-form'
import { api } from "@/services/api"
import { AxiosError } from "axios"

const UpdateStatus = (onSuccessCallback: () => void) => {
  const formStatus = useForm({
    criteriaMode: 'all',
    mode: 'all',
  })

  const onSubmit = async (uuid: string, status: string) => {
    try {  
      await api.patch(`/services/${uuid}`, { 
        status: status === "inactive" ? "active" : "inactive" 
      })

      if (onSuccessCallback) {
        onSuccessCallback() // Chama a função de recarregamento
      }
    } catch (error: any) {
      if(error instanceof AxiosError) {
        return formStatus.setError("root", {message: error.response?.data.message})
      }

      formStatus.setError("root", {message: error.message})
    }
  }

  return {
    onSubmitStatus: onSubmit,
    formStatus
  }
}

export { UpdateStatus }