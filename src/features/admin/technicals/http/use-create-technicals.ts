import { userTechnicalSchema, type UserTechnicalSchemaType } from "../schemas/technical.schema";
import { formatHours } from "@/lib/formatHours";
import { AxiosError } from "axios"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "@/services/api";

const createTechnicals = () => {
  const [user, setUser] = useState<string[]>([])

  const form = useForm<UserTechnicalSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(userTechnicalSchema)
  })

  const onCancel = () => {
    form.reset()
    setUser([])
  }
  
  const onSubmit = async (data: UserTechnicalSchemaType) => {
    const hours = formatHours(user)
    const dataUserHours = { 
      role: "technical", 
      userHours: hours.filter(value => !(value.startTime === null && value.endTime === null)) 
    }

    if(!dataUserHours.userHours.length){
      return form.setError("root", { info: "Informe os horários de disponibilidade do técnico "} as object)
    }

    try{
      const response = await api.post(`/user/technical`, { ...data, ...dataUserHours })

      onCancel()
      return form.setError("root", {success: response.data.message } as object)
    } catch(error: any){
      if(error instanceof AxiosError) {
        return form.setError("root", {message: error.response?.data.message})
      }

      return form.setError("root", {message: error.message})
    }
  }

  return {
    onSubmit,
    form,
    user,
    setUser,
    onCancel
  }
}

export { createTechnicals }