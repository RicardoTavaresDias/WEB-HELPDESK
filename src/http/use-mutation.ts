import { AxiosError } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

type QueryMutationType<TData> = {
  queryKey: string 
  fetch: (data: TData) => Promise<void>
}

function useQueryMutation<TData>({ queryKey, fetch }: QueryMutationType<TData>) {
   const queryClient = useQueryClient()

   return useMutation({
    mutationFn: async (data: TData) => {
      try {
        return await fetch(data)
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [queryKey] })
      }
   })
}

export { useQueryMutation }