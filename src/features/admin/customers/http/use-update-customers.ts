import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "@/services/api"
import { AxiosError } from "axios"
import { type UserTechnicalType as UserCustomerSchemaType } from "@/features/admin/technicals/schemas/technical.schema"

function useUpdateCustomer (id: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: UserCustomerSchemaType) => {
      try {
        const formData = new FormData()
        formData.append("data", JSON.stringify(data))

        await api.patch(`/user/${id}`, formData)
        return { sucess: "Dados atualizado com sucesso." }

      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get_Customer'] })
    }
  })
}

export { useUpdateCustomer }