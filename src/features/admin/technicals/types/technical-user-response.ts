import type { UseFormReturn } from "react-hook-form"
import type { UserTechnicalType } from "./technical-update-response"

export type SearchUserUIIDType = {
  setUser: React.Dispatch<React.SetStateAction<UserTechnicalType>>
  form: UseFormReturn<any>
  uuid: string
}