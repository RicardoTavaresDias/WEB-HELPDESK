import { api } from "@/services/api"
import { type UserTechnicalType as UserCustomerSchemaType } from "@/features/admin/technicals/schemas/technical.schema"
import { useQueryMutation } from "@/http/use-mutation"

function useUpdateCustomer (id: string) {
  return useQueryMutation({
    queryKey: 'get_Customer',
    fetch: async (data: UserCustomerSchemaType) => {
      const formData = new FormData()
      formData.append("data", JSON.stringify(data))

      await api.patch(`/user/${id}`, formData)
      return { sucess: "Dados atualizado com sucesso." }
    }
  })
}

export { useUpdateCustomer }