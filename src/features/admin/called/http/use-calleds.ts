import { type CalledsType } from "../types/calleds-response"
import { useFethLoad } from "@/hooks/useFethLoad"

const indexCalleds = () => {
  const response = useFethLoad<CalledsType[]>("/calleds")
  
  const descriptionServiceCalled = response.data?.map((called: CalledsType) => {
    return {
    ...called,
      services: [{ 
        titleService: called.services[0]?.titleService
      }]
    }
  }) ?? []

  return {
    calleds: descriptionServiceCalled,
    isLoading: response.isLoading,
    messageError: response.messageError,
    pagination: response.pagination,
    setPage: response.setPage,
    page: response.page
  }
}

export { indexCalleds }