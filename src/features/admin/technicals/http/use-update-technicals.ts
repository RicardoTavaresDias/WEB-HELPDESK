import { type UserTechnicalType as UserTechnicalTypeSchema } from "../schemas/technical.schema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios";
import { api } from "@/services/api";
import type { SearchTechnicalType } from "./use-search-user-uuid";

export type UpdateTechnicalType = {
  data: UserTechnicalTypeSchema
  userTechnical: SearchTechnicalType
}

function useUpdateTechnical () {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ data, userTechnical }: UpdateTechnicalType) => {
      try {
        if(!userTechnical.userHours.length){
          return { info: "Informe os horários de disponibilidade do técnico "}
        }

        const formdata = new FormData()
        formdata.append("data", JSON.stringify({ ...data, userHours: userTechnical.userHours }))

        const response = await api.patch(`/user/${userTechnical.id}`, formdata)
        const result = response.data

        return { sucess: "Dados Atualizado com sucesso", data: result }
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get_technical"] })
    }
  })
}

export { useUpdateTechnical }