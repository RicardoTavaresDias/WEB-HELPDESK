import { useNavigate } from "react-router"
import { useAuth } from "../useAuth"
import { api } from "../../services/api"
import { AxiosError } from "axios"

import { useForm } from 'react-hook-form'
import { signinSchema } from "../../schemas/signin/signin.schema"
import { zodResolver } from "@hookform/resolvers/zod"

type Inputs = {
  email: string,
  password: string,
};

export const useSignin = () => {
  const navigate = useNavigate()
  const { save } = useAuth()
  const { resultShema } = signinSchema()

  const { register, handleSubmit, reset, setError, formState: {errors, isSubmitting} } = useForm<Inputs>(
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
  

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await api.post("/", data)
      
      save({
        token: response.data.token,
        user: {
          id: response.data.user.id,
          name: response.data.user.name,
          role: response.data.user.role
        }
      })
  
      reset()
      navigate("/")
    } catch (error){
      if(error instanceof AxiosError) {
        setError("root", {message: error.response?.data.error})
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