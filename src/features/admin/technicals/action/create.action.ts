import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "@/services/api"
import { useForm } from 'react-hook-form'
import { useState } from "react"
import { AxiosError } from "axios"
import { userTechnicalSchema } from "@/features/admin/technicals/schemas/technical.schema"
import type { UserTechnicalSchemaType } from "@/features/admin/technicals/schemas/technical.schema"
import { formatHours } from "@/lib/formatHours"


export const CreateAdminTechnicalsAction = () => {
  const [user, setUser] = useState<string[]>([])  

  const { register, handleSubmit, reset, setError, formState: {errors, isSubmitting} } = useForm<UserTechnicalSchemaType>({
    criteriaMode: 'all',
      mode: 'all',
      defaultValues: {
        name: '',
        email: '',
        password: ''
      },
      resolver: zodResolver(userTechnicalSchema)
  })


  const onSubmit = async (data: UserTechnicalSchemaType) => {
    if(!user.length){
      return setError("root", { info: "Informe os horários de disponibilidade do técnico "} as object)
    }

    const hours = formatHours(user)

    try{
      const response = await api.post("/user/technical", 
        { 
          name: data.name, 
          email: data.email, 
          password: data.password, 
          role: "technical", 
          userHours: hours.filter(value => !(value.startTime === null && value.endTime === null)) 
        })

      onCancel()
      return setError("root", {success: response.data.message } as object)

    } catch(error: any){
      if(error instanceof AxiosError) {
        return setError("root", {message: error.response?.data.message})
      }

      return setError("root", {message: error.message})
    }
  }

  const onCancel = () => {
    reset()
    setUser([])
  }

  return {
    register,
    handleSubmit,
    errors,
    setUser,
    user,
    onSubmit,
    onCancel,
    isSubmitting
  }
}