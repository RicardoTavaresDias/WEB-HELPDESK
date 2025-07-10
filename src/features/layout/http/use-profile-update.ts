import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useAuth } from "@/hooks/useAuth"

const profileUpdate = () => {
  const { session, save, loadUser } = useAuth()

   const form = useForm({
      defaultValues: {
        name: session?.user.name,
        email: session?.user?.email,
        password: "password"
      },
      criteriaMode: 'all',
      mode: 'all',
      //resolver: zodResolver(userSchema) 
    })
  
    const onSubmit = async ({ name, email, file }: any) => {  
      const formData = new FormData()
      formData.append("file", file[0])
      formData.append("data", JSON.stringify({
        name,
        email
      }))
       
      try {  
        const response = await api.patch(`/user/${session?.user.id}`, formData)

        if(!response){
          return form.setError("root", {message: "Erro a atualizar no banco"})
        }
    
        localStorage.removeItem("@helpDesk:user")
        localStorage.setItem("@helpDesk:user", JSON.stringify({
          ...response.data
        }))

        loadUser()
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
      form
    }
}

export { profileUpdate }