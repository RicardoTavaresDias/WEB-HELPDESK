import { api } from "@/services/api"
import { AxiosError } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

function removeCustomer() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (userId: string) => {
      try {
        await api.delete(`/user/${userId}`)
        return { sucess: 'Usuário removido com sucesso.' }
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get_Customer'] })
    }
  })
}

export { removeCustomer }