import { formatHours, hourFormatList } from "@/lib/formatHours"
import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useForm } from 'react-hook-form'
import { AxiosError } from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema } from "../schemas/AdminTechnicalSchema"
import type { UserTechnicalType } from "../schemas/AdminTechnicalSchema"

type UserType = {
  id: string
  name: string
  email: string
  avatar: string
  userHours: string[],
}

export const useTechnicalEdition = () => {
  const [user, setUser ] = useState<UserType>({
    id: "",
    name: "",
    email: "",
    avatar: "",
    userHours: [],
  })
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  const { register, reset, handleSubmit, setError, formState: {errors, isSubmitting} } = useForm<UserTechnicalType>({
    criteriaMode: 'all',
      mode: 'all',
      resolver: zodResolver(userSchema)
  })


  const fetchLoad = async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/user/${id}`)
      const data = response.data

      const [ userData ] =  hourFormatList([data])
      const userHoursData = userData.userHours.flat()
      setUser({...userData,  userHours: userHoursData})

      reset({
        name: userData.name,
        email: userData.email
      })

    }catch (error: any){
      if(error instanceof AxiosError) {
        return setError("root", {message: error.response?.data.message})
      }

      setError("root", {message: error.message})
    }finally{
      setIsLoading(false)
    }
  }
  
  const onSubmit = async (data: UserTechnicalType) => {
    if(!user.userHours.length){
      return setError("root", { info: "Informe os horários de disponibilidade do técnico"} as object)
    }

    const userHours = formatHours(user.userHours)

    const formData = new FormData();
    formData.append("data", JSON.stringify(
      { 
        name: data.name, 
        email: data.email, 
        userHours: userHours.filter(value => !(value.startTime === null && value.endTime === null)) 
      }
    ))

    try{
      const response = await api.patch(`/user/${id}`, formData)
      setError("root", { sucess: response.data.message } as object)  
      
    } catch(error: any){
      if(error instanceof AxiosError) {
        return setError("root", {message: error.response?.data.message})
      }

      setError("root", {message: error.message})
    }
  }

   useEffect(() => {
    fetchLoad()    
  },[])

  return {
    user,
    setUser,
    handleSubmit,
    register,
    onSubmit,
    errors, 
    isSubmitting,
    isLoading,
    fetchLoad
  }
}