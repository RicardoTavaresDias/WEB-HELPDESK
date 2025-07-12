import { useEffect, useState } from "react";
import { userSchema, type UserTechnicalType as UserTechnicalTypeSchema } from "../schemas/technical.schema"
import { UserHours } from "./use-hours"
import { AxiosError } from 'axios';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { api } from "@/services/api";
import type { UserTechnicalType } from "../types/technical-update-response";
import { searchUserUIID } from "./use-search-user-uuid"

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
  }, [user.name, user.email])

   useEffect(() => {
    resetClose()
  }, [user.name, user.email])

  const resetClose = () => {
    form.reset()
    searchUserUIID({ form, setUser, uuid})
  }

  const userHours = new UserHours(setUser as any)

  const onSubmit = async (data: UserTechnicalTypeSchema) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify({ ...data, userHours: userHours.result(user as any) }))

    try {  
      await api.patch(`/user/${uuid}`, formData)
      form.setError("root", { success: "Dados atualizado com sucesso." } as object) 
    } catch (error: any) {
      if(error instanceof AxiosError) {
        return form.setError("root", {info: error.response?.data.message} as any)
      }

      form.setError("root", {message: error.message})
    }
  }

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