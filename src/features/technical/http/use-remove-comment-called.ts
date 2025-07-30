import { useQueryMutation } from "@/http/use-mutation"
import { api } from "@/services/api"

function useRemoveCommentCalled () {
  return useQueryMutation({
    queryKey: "called_byId",
    fetch: async (id: string) => {
      const response = await api.delete(`/calleds/comment/${id}`)
      const result = response.data

      return result
    },
  })
}

export { useRemoveCommentCalled }