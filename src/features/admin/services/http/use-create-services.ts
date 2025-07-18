import { AxiosError } from 'axios'
import { api } from '@/services/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type DataCreateServiceRequestType = {
  title: string
  price: string
}

function useCreateServices () {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ title, price }: DataCreateServiceRequestType) => {
      try {
        const response = await api.post(`/services`, {
          title, 
          price: price.replace("R$", "").trim()
        })
        const result = response.data

        return result
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

export { useCreateServices }