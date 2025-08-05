import { AxiosError } from "axios"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

type UseGetType<TData> = {
  queryKey?: string
  fetchGet: (page?: number) => Promise<TData>,
}

function useQueryGet<TData>({ queryKey, fetchGet }: UseGetType<TData>) {
  const [page, setPage] = useState(1)
  
  const query = useQuery<TData>({
    queryKey: [queryKey, page],
    queryFn: async () => {
       try {
        return await fetchGet(page)
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    },
    retry: 1
  })

  return {
    query,
    page,
    setPage
  }
}

export { useQueryGet }