import { useNavigate } from "react-router"
import { useAuth } from "../../hooks/useAuth"
import type { ResponseType } from "../../database/response"
import { api } from "../../services/api"
import { AxiosError } from "axios"

import { useForm } from 'react-hook-form'

type Inputs = {
  email: string,
  password: string,
};

export const useSignin = () => {
  const navigate = useNavigate()
  const { save } = useAuth()

  const { register, handleSubmit, reset, setError, formState: {errors, isSubmitting} } = useForm<Inputs>(
    { 
      // configuração de inicialização dos campos, criteriaMode e mode ficara assistindo toda ação do formulario
      criteriaMode: 'all',
      mode: 'all',
      defaultValues: {
        email: '',
        password: '',
      },
    })
  

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await api.post("/", data)
      
      save({
        token: response.data.token,
        user: {
          name: response.data.user.name,
          role: response.data.user.role
        }
      } as ResponseType) // authProvider
  
      reset()
      navigate("/")
    } catch (error){
      if(error instanceof AxiosError) {
        error.response?.data.error.email && setError("email", {message: error.response?.data.error.email[0]})
        error.response?.data.error.password && setError("password", {message: error.response?.data.error.password[0]})
        typeof error.response?.data.error === "string" && setError("root", {message: error.response?.data.error})
      }
      console.log(error)
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