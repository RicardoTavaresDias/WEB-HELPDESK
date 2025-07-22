import { useQueryGet } from "@/http/use-query-get"
import { api } from "@/services/api"
import type { CalledsUserTecnicalType } from "../types/calleds-user-response"

function useTechicalCalled () {
  return useQueryGet({
    queryKey: "techical_called",
    fetchGet: async (page) => {
      const response =  await api.get(`/calleds/user?page=${page}&limit=50`)
      const result = response.data
      const format = calledsCategory(result)

      return { ...format }
    }
  })
}

export { useTechicalCalled }

const calledsCategory = (calleds: CalledsUserTecnicalType) => {
  const CalledOpen = calleds.data.filter(open => open.callStatus === "open")
  const CalledInProgress = calleds.data.filter(inProgress => inProgress.callStatus === "in_progress")
  const CalledClose = calleds.data.filter(close => close.callStatus === "close")

  return {
    CalledOpen,
    CalledInProgress,
    CalledClose
  }
}