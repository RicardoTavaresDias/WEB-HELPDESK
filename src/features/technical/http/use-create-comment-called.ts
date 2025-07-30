import { useQueryMutation } from "@/http/use-mutation"
import { api } from "@/services/api"

export type DataCreateCommentType = {
  idCalled: number
  idUser: string
  description: string
}

function useCreateCommentCalled () {
  return useQueryMutation<DataCreateCommentType>({
    queryKey: "called_byId",
    fetch: async (dataComment: DataCreateCommentType) => {
      const response = await api.post("/calleds/comment", dataComment)
      const result = response.data

      return result
    },
  })
}

export { useCreateCommentCalled }