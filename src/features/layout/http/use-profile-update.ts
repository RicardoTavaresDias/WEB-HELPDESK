import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useAuth } from "@/hooks/useAuth"
import { useRef } from "react"
import { profileUpdateSchema, type ProfileUpdateSchemType } from "../schemas/profileSchema"

const profileUpdate = () => {
  const { session, loadUser } = useAuth()
  const fileRef = useRef<File | null>(null)

  const form = useForm<ProfileUpdateSchemType>({
    defaultValues: {
      name: session?.user.name,
      email: session?.user?.email
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(profileUpdateSchema) 
  })
  
  const onSubmit = async ({ name, email }: { name?: string, email?: string }): Promise<void> => {  
    const formData = new FormData()
    fileRef.current && formData.append("file", fileRef.current)
    formData.append("data", JSON.stringify({
      name,
      email
    }))
      
    try {  
      const dataLocalStorage  = localStorage.getItem("@helpDesk:user") || ""
      const resultLocalStorage = JSON.parse(dataLocalStorage)
      if(resultLocalStorage.name === name && resultLocalStorage.email === email && !fileRef.current){
        return form.setError("root", { info: "Nenhum dados para atualizar." } as object) 
      }

      const response = await api.patch(`/user/${session?.user.id}`, formData)
      if(!response){
        return form.setError("root", { message: "Erro a atualizar no banco" })
      }
      
      localStorage.removeItem("@helpDesk:user")
      localStorage.setItem("@helpDesk:user", JSON.stringify({
        ...response.data
      }))

      loadUser()
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