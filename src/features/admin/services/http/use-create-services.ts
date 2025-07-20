import { api } from '@/services/api'
import { useQueryMutation } from "@/http/use-mutation"

type DataCreateServiceRequestType = {
  title: string
  price: string
}

function useCreateServices () {
  return useQueryMutation({
    queryKey: 'get_services',
    fetch: async ({ title, price }: DataCreateServiceRequestType) => {
      const response = await api.post(`/services`, {
          title, 
          price: price.replace("R$", "").trim()
        })
        const result = response.data

        return result
    }
  })
}

export { useCreateServices }

