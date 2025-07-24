import { api } from "@/services/api"
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query"

function useListServices () {
  return useInfiniteQuery({
    queryKey: ["add_services_tecnical"],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const response = await api.get(`/services?status=active&page=${pageParam}&limit=5`)
      const result = response.data

      return result
    },
    getNextPageParam: (lastPage, _allPage) => {
      return lastPage.result?.next ?? undefined
    },
    retry: 1,
    placeholderData: keepPreviousData
  })
}

export { useListServices }