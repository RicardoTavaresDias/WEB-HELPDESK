import { type UserTechnicalType as UserTechnicalTypeSchema } from "../schemas/technical.schema"
import { api } from "@/services/api";
import type { SearchTechnicalType } from "./use-search-user-uuid";
import { useQueryMutation } from "@/http/use-mutation"

export type UpdateTechnicalType = {
  data: UserTechnicalTypeSchema
  userTechnical: SearchTechnicalType
}

function useUpdateTechnical () {
  return useQueryMutation({
    queryKey: "get_technical",
    fetch: async ({ data, userTechnical }: UpdateTechnicalType) => {
      if(!userTechnical.userHours.length){
        return { info: "Informe os horários de disponibilidade do técnico "}
      }

      const formdata = new FormData()
      formdata.append("data", JSON.stringify({ ...data, userHours: userTechnical.userHours }))

      const response = await api.patch(`/user/${userTechnical.id}`, formdata)
      const result = response.data

      return { sucess: "Dados Atualizado com sucesso", data: result }
    }
  })
}

export { useUpdateTechnical }