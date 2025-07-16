import { hourFormatList, type mappedUserType, type UsersType } from "@/lib/formatHours"
import { useFethLoad } from "@/hooks/useFethLoad"
import { type UserTechnicalType } from "../schemas/technical.schema"

const indexTechnicals = () => {
  const response = useFethLoad<UserTechnicalType[]>("/user/list/technical")
  const formatUserHours = hourFormatList(response.data as UsersType[]) as mappedUserType[]

  console.log(formatUserHours)

  return {
    dataUsers: formatUserHours,
    isLoading: response.isLoading,
    messageError: response.messageError,
    pagination: response.pagination,
    setPage: response.setPage,
    page: response.page
  }
}

export { indexTechnicals }