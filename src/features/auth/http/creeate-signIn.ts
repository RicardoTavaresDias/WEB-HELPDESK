import { useNavigate } from "react-router"
import { useAuth } from "@/hooks/useAuth"
import { signinSchema } from "@/features/auth/schemas/AuthSchema"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AxiosError } from "axios"
import { api } from "@/services/api"

const useSignin = () => {
  const navigate = useNavigate()
  const { save } = useAuth()

  const form = useForm({
    defaultValues: {
      email: "",
      password: ''
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(signinSchema)
  })

  const onSubmit = async (data: any) => {
    try{
      const response = await api.post("/", { 
        ...data
      })

      save({
        token: response.data.token,
        user: response.data.user
      })

      navigate("/")
    } catch(error: any){
      if(error instanceof AxiosError) {
        return form.setError("root", {message: error.response?.data.message})
      }

      return form.setError("root", {message: error.message})
    }
  }

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
    errors: form.formState.errors
  }
}

export { useSignin }