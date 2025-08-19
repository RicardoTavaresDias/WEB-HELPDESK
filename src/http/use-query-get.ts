import { AxiosError } from "axios"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"

type UseGetType<TData> = {
  queryKey?: string
  fetchGet: (page?: number) => Promise<TData>,
}

function useQueryGet<TData>({ queryKey, fetchGet }: UseGetType<TData>) {
   const [searchParams] = useSearchParams()

   const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1
  
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
    retry: 1,
    refetchOnWindowFocus: false // Desativa carregamento automático na troca de abas do navegador.
  })

  return {
    query,
    page
  }
}

export { useQueryGet }