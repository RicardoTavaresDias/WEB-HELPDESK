import type { UseFormReturn } from "react-hook-form"

export type SearchUserUIIDType = {
  setUser: React.Dispatch<React.SetStateAction<UserTechnicalType>>
  form: UseFormReturn<any>
  uuid: string
}

export type UserTechnicalType = {
  id: string,
  name: string,
  email: string
  avatar: string
  userHours: string[]
}