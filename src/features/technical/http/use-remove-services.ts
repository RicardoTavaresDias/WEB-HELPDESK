import { useQueryMutation } from "@/http/use-mutation"
import { api } from "@/services/api"

type RemoveServicesType = {
  calledId: number
  idServices: string
}

function useRemoveervices () {
  return useQueryMutation<RemoveServicesType>({
    queryKey: "called_byId",
    fetch: async ({ calledId, idServices }) => {
      await api.delete(`/calleds/${calledId}/${idServices}`)
    }
  })
}

export { useRemoveervices }