import { useQueryMutation } from "@/http/use-mutation"
import { api } from "@/services/api"

export type useCalledUpdateStatusType = {
  id: number
  status: string
}

function useCalledUpdateStatus ({ queryKey }: { queryKey: string[] }) {
  return useQueryMutation<useCalledUpdateStatusType>({
    queryKey: queryKey,
    fetch: async ({ id, status }: useCalledUpdateStatusType) => {
      await api.patch(`/calleds/${id}`, { status })
    }
  })
}

function useCalledUpdateStatusById () {
  return useQueryMutation<useCalledUpdateStatusType>({
    queryKey: "called_byId",
    fetch: async ({ id, status }: useCalledUpdateStatusType) => {
      await api.patch(`/calleds/${id}`, { status })
    }
  })
}

export { useCalledUpdateStatus, useCalledUpdateStatusById }