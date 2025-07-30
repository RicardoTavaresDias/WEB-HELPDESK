import { useQueryMutation } from "@/http/use-mutation"
import { api } from "@/services/api"

type DataUpdateCommentType = {
  idComment: string
  description: string
}

function useUpdateCommentCalled () {
  return useQueryMutation<DataUpdateCommentType>({
    queryKey: "called_byId",
    fetch: async (dataComment) => {
      const response = await api.patch(`/calleds/comment/${dataComment.idComment}`, { description: dataComment.description })
      const result = response.data

      return result
    },
  })
}

export { useUpdateCommentCalled }