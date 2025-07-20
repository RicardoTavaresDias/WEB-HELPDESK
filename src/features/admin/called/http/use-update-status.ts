import { api } from "@/services/api"
import { useQueryMutation } from "@/http/use-mutation"

export type UpdateStatusType = { 
  id: number, 
  status: "open" | "in_progress" | "close"  
}

function updateStatus() {
  return useQueryMutation<UpdateStatusType>({
    queryKey: 'get_list',
    fetch: async (statusData: UpdateStatusType) => {
      await api.patch(`/calleds/${statusData.id}`, { status: statusData.status })
    }
  })
}

export { updateStatus }