import { type UserTechnicalSchemaType } from "../schemas/technical.schema";
import { formatHours } from "@/lib/formatHours";
import { AxiosError } from "axios"
import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query"

function useCreateTechnical () {
  return useMutation({
    mutationFn: async ({ data, userHours }: { data: UserTechnicalSchemaType, userHours: any }) => {
      try {
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
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    }
  })
}

export { useCreateTechnical }
