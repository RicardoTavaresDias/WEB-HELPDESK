import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "@/services/api"
import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react"
import { AxiosError } from "axios"
import { userTechnicalSchema } from "@/features/admin/technicals/schemas/AdminTechnicalSchema"
import type { UserTechnicalSchemaType } from "@/features/admin/technicals/schemas/AdminTechnicalSchema"
import { formatHours } from "@/lib/formatHours"


export const useTechnicalNew = () => {
  const [user, setUser] = useState<string[]>([])
  const [messageSucess, setMessageSucess] = useState("")
  const [messageError, setMessageError] = useState("")
  

  useEffect(() => {
    if(messageError.length) setMessageError("")
  }, [user])

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
      return setMessageError("Informe os horários de disponibilidade do técnico ")
    }

    const hours = formatHours(user)

    try{
      const response = await api.post("/user/technical", 
        { 
          name: data.name, 
          email: data.email, 
          password: data.password, 
          role: "technical", 
          hours: hours.filter(value => !(value.startTime === null && value.endTime === null)) 
        })

      setMessageSucess(response.data.message)
      onCancel()
      
    } catch(error: any){
      if(error instanceof AxiosError) {
        return setError("root", {message: error.response?.data.message})
      }

      setError("root", {message: error.message})
    }
  }

  const onCancel = () => {
    reset()
    setUser([])
    setMessageError("")
  }

  return {
    register,
    handleSubmit,
    errors,
    setUser,
    user,
    onSubmit,
    messageSucess,
    messageError,
    setMessageSucess,
    onCancel,
    isSubmitting
  }
}