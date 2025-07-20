import { type ServicesSchemaType } from "../schemas/services-schema"
import { api } from '@/services/api'
import { useQueryMutation } from "@/http/use-mutation"

function useUpdateServices (id: string) {
  return useQueryMutation({
    queryKey: 'get_services',
    fetch: async ({ title, price }: ServicesSchemaType) => {
       await api.patch(`/services/${id}`, {
        title,
        price: price.replace("R$", "").trim() 
      })
      return { sucess: "Dados atualizado com sucesso." }
    }
  })
}

export { useUpdateServices }

