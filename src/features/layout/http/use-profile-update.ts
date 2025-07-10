import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useAuth } from "@/hooks/useAuth"
import { useRef } from "react"

const profileUpdate = () => {
  const { session, loadUser } = useAuth()
  const fileRef = useRef<File | null>(null)

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
  
    const onSubmit = async ({ name, email }: any) => {  
      const formData = new FormData()
      fileRef.current && formData.append("file", fileRef.current)
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
      form,
      fileRef
    }
}

export { profileUpdate }