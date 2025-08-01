import { useQueryMutation } from "@/http/use-mutation"
import { api } from "@/services/api"

function useRemoveCommentCalled (queryKey: string) {
  return useQueryMutation({
    queryKey: queryKey,
    fetch: async (id: string) => {
      const response = await api.delete(`/calleds/comment/${id}`)
      const result = response.data

      return result
    },
  })
}

export { useRemoveCommentCalled }