import { useEffect, useState } from "react";
import { userSchema, type UserTechnicalType as UserTechnicalTypeSchema } from "../schemas/technical.schema"
import { UserHours } from "./use-hours"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { UserTechnicalType } from "../types/technical-update-response";
import { searchUserUIID } from "./use-search-user-uuid"
import { useUpdate } from "@/hooks/useUpdate";

const updateTechnicals = (uuid: string) => {
  const [user, setUser] = useState<UserTechnicalType>({
    id: "",
    name: "",
    email: "",
    avatar: "",
    userHours: [],
  });

  const form = useForm<UserTechnicalTypeSchema>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(userSchema)
  })

  useEffect(() => {
    searchUserUIID({ form, setUser, uuid})
  }, [])

  useEffect(() => {
    form.reset({
      name: user.name,
      email: user.email
    })
     resetClose()
  }, [user.name, user.email])

  const resetClose = () => {
    form.reset()
    searchUserUIID({ form, setUser, uuid})
  }

  const userHours = new UserHours(setUser)
  const onSubmit = (data: UserTechnicalTypeSchema) => 
    useUpdate({ 
      form, 
      httpApi: `/user/${uuid}`,
      formDataUpdate: { ...data, userHours: userHours.result(user) } 
    })

  return {
    user,
    form,
    onSubmit,
    removeUserHours: userHours.removeUserHours,
    addUserHours: userHours.addUserHours,
    resetClose
  }
}

export { updateTechnicals }