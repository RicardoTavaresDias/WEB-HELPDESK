import { apiServices } from "../api/services.api"
import { useCreate } from "@/hooks/useCreate"
import { useDataForm } from "@/hooks/useDataForm"

const CreateServices = () => {
  
  const {
    errors,
    handleSubmit,
    isSubmitting,
    register,
    reset,
    setError
  } = useDataForm({})

  const response = useCreate({ endpoint: apiServices.create, form: { setError, reset } })

  return {
    errors,
    handleSubmit,
    isSubmitting,
    register,
    onSubmit: response.onSubmit
  }
}

export { CreateServices }

