import { useQueryMutation } from "@/http/use-mutation"
import { api } from "@/services/api"

type CreateServiceType = {
  idCalled: number
  idServices: string
}

function useCreateServices () {
  return useQueryMutation<CreateServiceType>({
    queryKey: "called_byId",
    fetch: async ({ idCalled, idServices }) => {
      const response = await api.patch("/calleds/services", { idCalled, idServices })
      const result = response.data

      return result
    }
  })
}

export { useCreateServices }