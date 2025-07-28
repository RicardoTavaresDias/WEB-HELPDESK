import { api } from "@/services/api"

import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query"

function useTechicalCalledInProgress () {
  return useInfiniteQuery({
    queryKey: ["techical_called_inProgress"],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const response =  await api.get(`/calleds/user?page=${pageParam}&limit=10&status=in_progress`)
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

function useTechicalCalledOpen () {
  return useInfiniteQuery({
    queryKey: ["techical_called_Open"],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const response =  await api.get(`/calleds/user?page=${pageParam}&limit=10&status=open`)
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

function useTechicalCalledClose () {
  return useInfiniteQuery({
    queryKey: ["techical_called_Close"],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const response =  await api.get(`/calleds/user?page=${pageParam}&limit=10&status=close`)
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

export { useTechicalCalledInProgress, useTechicalCalledOpen, useTechicalCalledClose }