import { useQueryMutation } from "@/http/use-mutation"
import { api } from "@/services/api"

export type DataUpdateCommentType = {
  idComment: string
  description?: string
  type?: string
}

function useUpdateCommentCalled () {
  return useQueryMutation<DataUpdateCommentType>({
    queryKey: "called_byId",
    fetch: async (dataComment) => {
      const response = await api.patch(`/calleds/comment/${dataComment.idComment}`, { 
        description: dataComment.description, 
        type: dataComment.type
      })
      const result = response.data

      return result
    },
  })
}

export { useUpdateCommentCalled }