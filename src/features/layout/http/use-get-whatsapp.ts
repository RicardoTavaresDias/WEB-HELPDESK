import { urlWhatsapp } from "@/services/api"
import { useMutation } from "@tanstack/react-query"

function useGetWhatsapp () {
  return useMutation({
    mutationFn: async () => {
      const token = localStorage.getItem("@helpDesk:token")
      const response = await fetch(urlWhatsapp, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const result = await response.json()
      return result.message
    }
  })
}

export { useGetWhatsapp }