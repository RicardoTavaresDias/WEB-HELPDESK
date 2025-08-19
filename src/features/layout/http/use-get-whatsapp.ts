import { urlWhatsapp } from "@/services/api"
import { useMutation } from "@tanstack/react-query"

const token = localStorage.getItem("helpDesk:token")

function useGetWhatsapp () {
  return useMutation({
    mutationFn: async () => {
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