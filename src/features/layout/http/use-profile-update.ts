import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useAuth } from "@/hooks/useAuth"
import { useRef } from "react"
import { useMutation } from "@tanstack/react-query"

function useProfileUpdate () {
  const { session, loadUser } = useAuth()
  const fileRef = useRef<File | null>(null)

  const { data, error, isError, mutateAsync, isPending } = useMutation({
    mutationFn: async ({ name, email }: { name?: string, email?: string }) => {
      try {
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

        loadUser()
        return { sucess: "Cadastro atualizado com sucesso." }
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    }
  })

  return {
    data,
    useMutation,
    fileRef,
    error,
    isError,
    mutateAsync,
    isPending,
    session
  }
}

export { useProfileUpdate }