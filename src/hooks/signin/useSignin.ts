import { useNavigate } from "react-router"
import { useAuth } from "../useAuth"
import { api } from "@/services/api"
import { AxiosError } from "axios"

import { useForm } from 'react-hook-form'
import { userCustomerSchema } from "@/schemas/users.schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import type { InputsSigninUser } from "@/types/users"


export const useSignin = () => {
  const navigate = useNavigate()
  const { save } = useAuth()
  const { resultShema } = userCustomerSchema()

  const { register, handleSubmit, reset, setError, formState: {errors, isSubmitting} } = useForm<InputsSigninUser>(
    { 
      // configuração de inicialização dos campos, criteriaMode e mode ficara assistindo toda ação do formulario
      criteriaMode: 'all',
      mode: 'all',
      defaultValues: {
        email: '',
        password: '',
        
      },
      resolver: zodResolver(resultShema)
    })
  

  const onSubmit = async (data: InputsSigninUser) => {
    try {
      const response = await api.post("/", data)
      
      save({
        token: response.data.token,
        user: {
          id: response.data.user.id,
          name: response.data.user.name,
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