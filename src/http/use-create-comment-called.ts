import { useQueryMutation } from "@/http/use-mutation"
import { api } from "@/services/api"

export type DataCreateCommentType = {
  idCalled: number
  idUser: string
  description: string
  type: string
}

function useCreateCommentCalled (queryKey: string) {
  return useQueryMutation<DataCreateCommentType>({
    queryKey: queryKey,
    fetch: async (dataComment: DataCreateCommentType) => {
      const response = await api.post("/calleds/comment", dataComment)
      const result = response.data

      return result
    },
  })
}

export { useCreateCommentCalled }