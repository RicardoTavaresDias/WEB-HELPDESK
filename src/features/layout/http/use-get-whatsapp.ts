import { useMutation } from "@tanstack/react-query"

function useGetWhatsapp () {
  return useMutation({
    mutationFn: async () => {
      const response = await fetch("http://localhost:3000")
      const result = await response.json()
      return result.message
    }
  })
}

export { useGetWhatsapp }