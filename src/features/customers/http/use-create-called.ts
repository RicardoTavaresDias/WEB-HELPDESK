import { useQueryMutation } from "@/http/use-mutation"
import { api } from "@/services/api"

export type CreateCalled = {
  idCustomer: string
  idTechnical?: string | undefined
  titleCalled: string
  description: string
  idServices: Services[]
}

type Services = {
  id: string
}

function useCreateCalled () {
  return useQueryMutation<CreateCalled>({
    queryKey: "get_calleds",
    fetch: async (data) => {
      const response = await api.post("/calleds", data)
      const result = response.data

      return result
    }
  })
}

export { useCreateCalled }