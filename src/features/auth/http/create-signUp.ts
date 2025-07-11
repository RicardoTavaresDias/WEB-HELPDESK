import { signupSchema, type signupSchemaType } from "@/features/auth/schemas/AuthSchema"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { api } from "@/services/api"
import { AxiosError } from "axios"

const useSignup = () => {
  const form = useForm<signupSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: ''
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = async (data: signupSchemaType) => {
    try{
      const response = await api.post("/user/customer", { 
        ...data
      })

      form.reset()
      form.setError("root", { success: response.data.message } as object)
    } catch(error: any){
      if(error instanceof AxiosError) {
        return form.setError("root", {message: error.response?.data.message})
      }

      return form.setError("root", {message: error.message})
    }
  }

   return {
    form,
    onSubmit,
  }
}

export { useSignup }