import { api } from "@/services/api"
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query"
import { useQueryGet } from "@/http/use-query-get"

function useListServices () {
  return useInfiniteQuery({
    queryKey: ["list_services_customers"],
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

function useServicePriceBase () {
  return useQueryGet({
    queryKey: "get_base_price",
    fetchGet: async () => {
      const response = await api.get("/services/base")
      const result = response.data
      
      return result
    }
  })
}

export { useListServices, useServicePriceBase }