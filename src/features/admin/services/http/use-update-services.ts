import { type ServicesSchemaType } from "../schemas/services-schema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from 'axios'
import { api } from '@/services/api'

function useUpdateServices (id: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ title, price }: ServicesSchemaType) => {
      try {
        await api.patch(`/services/${id}`, {
          title,
          price: price.replace("R$", "").trim() 
        })
        return { sucess: "Dados atualizado com sucesso." }

      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get_services'] })
    }
  })
}

export { useUpdateServices }