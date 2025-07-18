import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from 'axios'
import { api } from '@/services/api'

function useUpdateStatus () {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, status }: { id: string, status: "active" | "inactive" }) => {
      try {
        await api.patch(`/services/${id}`, {
          status: status === "inactive" ? "active" : "inactive"
        })

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

export { useUpdateStatus }