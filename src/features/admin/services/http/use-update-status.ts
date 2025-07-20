import { api } from '@/services/api'
import { useQueryMutation } from "@/http/use-mutation"

type UpdateStatusType = {
  id: string, 
  status: "active" | "inactive" 
}

function useUpdateStatus () {
  return useQueryMutation({
    queryKey: 'get_services',
    fetch: async ({ id, status }: UpdateStatusType) => {
      await api.patch(`/services/${id}`, {
        status: status === "inactive" ? "active" : "inactive"
      })
    }
  })
}

export { useUpdateStatus }

