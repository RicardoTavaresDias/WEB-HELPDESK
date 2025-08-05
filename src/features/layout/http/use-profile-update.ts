import { api } from "@/services/api"
import { useAuth } from "@/hooks/useAuth"
import { useRef } from "react"
import { useMutation } from "@tanstack/react-query"
import { useQueryMutation } from "@/http/use-mutation"

type ProfileUpdateType = {
  name?: string, 
  email?: string
}

function useProfileUpdate () {
  const { session, loadUser } = useAuth()
  const fileRef = useRef<File | null>(null)

  const result = useQueryMutation({
    fetch: async ({ name, email }: ProfileUpdateType) => {
      const formData = new FormData()
      fileRef.current && formData.append("file", fileRef.current)
      formData.append("data", JSON.stringify({
        name,
        email
      }))

      const dataLocalStorage  = localStorage.getItem("@helpDesk:user") || ""
      const resultLocalStorage = JSON.parse(dataLocalStorage)
      if(resultLocalStorage.name === name && resultLocalStorage.email === email && !fileRef.current){
        return { info: "Nenhum dados para atualizar." }
      }

      const response = await api.patch(`/user/${session?.user.id}`, formData)
      const result = response.data

      localStorage.removeItem("@helpDesk:user")
      localStorage.setItem("@helpDesk:user", JSON.stringify({
        ...result
      }))

      setTimeout(() => loadUser(), 3000)
      return { sucess: "Cadastro atualizado com sucesso." }
    }
  })

   return {
    data: result.data,
    useMutation,
    fileRef,
    error: result.error,
    isError: result.isError,
    mutateAsync: result.mutateAsync,
    isPending: result.isPending,
    session
  }
}

export { useProfileUpdate }