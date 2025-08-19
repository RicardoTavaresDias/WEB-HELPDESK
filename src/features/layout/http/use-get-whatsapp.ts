import { urlWhatsapp } from "@/services/api"
import { useMutation } from "@tanstack/react-query"

function useGetWhatsapp () {
  return useMutation({
    mutationFn: async () => {
      const response = await fetch(urlWhatsapp)
      const result = await response.json()
      return result.message
    }
  })
}

export { useGetWhatsapp }