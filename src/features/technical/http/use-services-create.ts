import { useQueryMutation } from "@/http/use-mutation"
import type { Service } from "../types/calleds-user-response"
import { api } from "@/services/api"

import { useQueryGet } from "@/http/use-query-get"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useState } from "react"

function useCreateServices () {
  return useQueryMutation<Service>({
    queryKey: "called_byId",
    fetch: async ({ titleService, price }) => {
      const response = await api.post("", { titleService, price })
    }
  })
}




// TESTE

function useGetServices () {
  return useInfiniteQuery({
    queryKey: ["add_services_tecnical"],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const response = await api.get(`/services?status=active&page=${pageParam}&limit=5`)
      const result = response.data

      return result
    },
    getNextPageParam: (lastPage, allPage) => {
      // console.log("lastPage", lastPage)
      // console.log("allPage", allPage)
      return lastPage.result?.next ?? undefined
    },
  })
}


// TESTE



export { useCreateServices, useGetServices }