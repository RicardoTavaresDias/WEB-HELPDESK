import { api } from "../../services/api"
import { AxiosError } from "axios"
import { useState } from "react";
import { useForm } from 'react-hook-form'

type Inputs = {
  name: string
  email: string,
  password: string,
};

export const useCreateUser = () => {
  const [messageSucess, setMessageSucess] = useState("")
  
  const { register, handleSubmit, reset, setError, formState: {errors, isSubmitting} } = useForm<Inputs>(
    { 
      // configuração de inicialização dos campos, criteriaMode e mode ficara assistindo toda ação do formulario
      criteriaMode: 'all',
      mode: 'all',
      defaultValues: {
        name: '',
        email: '',
        password: '',
      },
    })
    

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await api.post("/user/cliente", data)
      setMessageSucess(response.data.message)
      reset()
    } catch (error){
      if(error instanceof AxiosError) {
        error.response?.data.error.name && setError("name", {message: error.response?.data.error.name[0]})
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
    errors,
    isSubmitting,
    messageSucess
  }
}