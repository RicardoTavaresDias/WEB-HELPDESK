import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"

export const removeAvatar = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ error?: string, sucess?: string }>({
    error: "",
    sucess: ""
  })
  const { session, loadUser } = useAuth()

  const onRemove = async () => {
    setMessage({ error: "", sucess: "" })

    try {
      setIsLoading(true)
      const responseRemove = await api.delete(`/user/avatar/${session?.user.id}`)
      if(!responseRemove){
        return setMessage({ error: "Erro a atualizar no banco"})
      }
      
      localStorage.removeItem("@helpDesk:user")
      localStorage.setItem("@helpDesk:user", JSON.stringify({
        ...responseRemove.data
      }))

      loadUser()
      setMessage({ sucess: "Avatar Removido com sucess" })
    } catch (error: any) {
      setMessage({ error: "", sucess: "" })

      if(error instanceof AxiosError) {
        return setMessage({ error: error.response?.data.message })
      }
      setMessage({ error: error.message })
    }finally{
      setIsLoading(false)
    }
  }

  return {
    onRemove,
    isLoading,
    message,
  }
}