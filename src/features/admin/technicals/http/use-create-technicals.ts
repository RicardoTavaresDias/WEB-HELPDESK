import { type UserTechnicalSchemaType } from "../schemas/technical.schema";
import { formatHours } from "@/lib/formatHours";
import { api } from "@/services/api";
import { useQueryMutation } from "@/http/use-mutation"

type CreateTechnicalType = {
  data: UserTechnicalSchemaType, 
  userHours: any
}

function useCreateTechnical () {
  return useQueryMutation({
    fetch: async ({ data, userHours }: CreateTechnicalType) => {
      const hours = formatHours(userHours)
      const dataUserHours = { 
        role: "technical", 
        userHours: hours.filter(value => !(value.startTime === null && value.endTime === null)) 
      }

      if(!dataUserHours.userHours.length){
        return { info: "Informe os horários de disponibilidade do técnico "}
      }

      const response = await api.post(`/user/technical`, { ...data, ...dataUserHours })
      const result = response.data

      return { success: result.message }
    }
  })
}

export { useCreateTechnical }