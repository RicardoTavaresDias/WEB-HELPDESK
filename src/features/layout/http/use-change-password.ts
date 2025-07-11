import { useForm } from "react-hook-form"
import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useAuth } from "@/hooks/useAuth"
import { zodResolver } from '@hookform/resolvers/zod'
import { profileChangePasswordSchema, type ProfileChangePasswordSchemaType } from "../schemas/profileSchema"

const changePassword = () => {
   const { session } = useAuth()

   const form = useForm({
      defaultValues: {
        oldPassword: '',
        newPassword: ''
      },
      criteriaMode: 'all',
      mode: 'all',
      resolver: zodResolver(profileChangePasswordSchema)
    })
  
    const onSubmit = async ({ oldPassword, newPassword }: ProfileChangePasswordSchemaType) => {  
      try {  
        const response = await api.patch(`/user/${session?.user.id}/changePassword`, { oldPassword, newPassword })
        if(!response){
          return form.setError("root", {message: "Erro a atualizar no banco"})
        }

        form.reset()
        form.setError("root", { success: response.data.message } as object) 
      } catch (error: any) {
        if(error instanceof AxiosError) {
          return form.setError("root", {message: error.response?.data.message})
        }

        form.setError("root", {message: error.message})
      }
    }

    return {
      onSubmit,
      form,
    }
}

export { changePassword }