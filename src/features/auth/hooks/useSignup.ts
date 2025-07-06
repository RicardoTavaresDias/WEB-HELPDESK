import { signupSchema } from "@/features/auth/schemas/AuthSchema"
import { useDataForm } from "@/hooks/useDataForm"
import { useCreate } from "@/hooks/useCreate"
import { apiAuth } from "../api/auth.api"

export const useSignup = () => {

  const { 
    register, 
    reset, 
    setError, 
    handleSubmit, 
    errors, 
    isSubmitting 
  } = useDataForm({
    defaultValues: {
      name: "",
      email: "",
      password: ''
    },
    schema: signupSchema
  })

  const response = useCreate({ endpoint: apiAuth.create, form: { setError, reset } })
    
  return {
    register,
    handleSubmit,
    onSubmit: response.onSubmit,
    errors,
    isSubmitting
  }
}