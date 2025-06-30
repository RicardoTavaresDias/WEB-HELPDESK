import { useNavigate } from "react-router"
import { useAuth } from "@/hooks/useAuth"
import { api } from "@/services/api"
import { AxiosError } from "axios"

import { useForm } from 'react-hook-form'
import { signinSchema } from "@/features/auth/schemas/AuthSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import type { signinSchemaType } from "@/features/auth/schemas/AuthSchema"


export const useSignin = () => {
  const navigate = useNavigate()
  const { save } = useAuth()

  const { register, handleSubmit, reset, setError, formState: {errors, isSubmitting} } = useForm<signinSchemaType>(
    { 
      // configuração de inicialização dos campos, criteriaMode e mode ficara assistindo toda ação do formulario
      criteriaMode: 'all',
      mode: 'all',
      defaultValues: {
        email: '',
        password: '',
        
      },
      resolver: zodResolver(signinSchema)
    })
  

  const onSubmit = async (data: signinSchemaType) => {
    try {
      const response = await api.post("/", data)
      
      save({
        token: response.data.token,
        user: {
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          role: response.data.user.role,
          avatar: response.data.user.avatar
        }, 
      })
  
      reset()
      navigate("/")
    } catch (error: any){
      if(error instanceof AxiosError) {
        return setError("root", {message: error.response?.data.message})
      }
      return setError("root", {message: error.message})
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    isSubmitting,
    errors
  }
}