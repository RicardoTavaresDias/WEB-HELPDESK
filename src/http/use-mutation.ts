import { AxiosError } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

type QueryMutationType<TData> = {
  queryKey?: string | string[]
  fetch: (data: TData) => Promise<void | any>
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
      onSuccess: async () => {
        if(Array.isArray(queryKey)){
          await Promise.all([
            queryClient.invalidateQueries({ queryKey: [queryKey[0]] }),
            queryClient.invalidateQueries({ queryKey: [queryKey[1]] })
          ])
          return
        }

        return queryClient.invalidateQueries({ queryKey: [queryKey] })
      }
   })
}

export { useQueryMutation }