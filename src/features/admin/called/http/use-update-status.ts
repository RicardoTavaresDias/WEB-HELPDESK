import { AxiosError } from "axios"
import { api } from "@/services/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"

function updateStatus() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (status: { id: number, status: "open" | "in_progress" | "close"  }) => {
      try {
        await api.patch(`/calleds/${status.id}`, { status: status.status })
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get_list'] })
    }
  })
}

export { updateStatus }