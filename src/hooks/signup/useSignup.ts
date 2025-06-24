import { api } from "../../services/api"
import { AxiosError } from "axios"
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { signupSchema } from "../../schemas/signup/signup.shema"
import { zodResolver } from "@hookform/resolvers/zod"

type Inputs = {
  name: string
  email: string,
  password: string,
};

export const useSignup = () => {
  const [messageSucess, setMessageSucess] = useState("")
  const { resultShema } = signupSchema()
  
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
      resolver: zodResolver(resultShema)
    })
    

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await api.post("/user/cliente", data)
      setMessageSucess(response.data.message)
      reset()
    } catch (error){
      if(error instanceof AxiosError) {
        setError("root", {message: error.response?.data.message})
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