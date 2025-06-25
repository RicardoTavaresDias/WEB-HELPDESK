import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { userTechnicalrSchema } from "@/schemas/users.schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import type { UserTechnicalrSchema } from "@/schemas/users.schemas"


export const useSignup = () => {
  const [messageSucess, setMessageSucess] = useState("")
  
  const { register, handleSubmit, reset, setError, formState: {errors, isSubmitting} } = useForm<UserTechnicalrSchema>(
    { 
      // configuração de inicialização dos campos, criteriaMode e mode ficara assistindo toda ação do formulario
      criteriaMode: 'all',
      mode: 'all',
      defaultValues: {
        name: '',
        email: '',
        password: '',
      },
      resolver: zodResolver(userTechnicalrSchema)
    })
    

  const onSubmit = async (data: UserTechnicalrSchema) => {
    try {
      const response = await api.post("/user/cliente", data)
      setMessageSucess(response.data.message)
      reset()
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
    errors,
    isSubmitting,
    messageSucess
  }
}