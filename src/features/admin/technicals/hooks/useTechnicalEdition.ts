import { formatHours, hourFormatList } from "@/lib/formatHours"
import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useForm } from 'react-hook-form'
import { userTechnicalSchema, type UserTechnicalSchemaType } from "../schemas/AdminTechnicalSchema"
import { AxiosError } from "axios"
import { zodResolver } from "@hookform/resolvers/zod"


export const useTechnicalEdition = () => {
  const [hours, setHours ] = useState<string[]>([])
  const [messageSucess, setMessageSucess] = useState("")
  const [messageError, setMessageError] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [avatar, setAvatar] = useState<{ name: string, avatar: string } | null>(null)
  const { id } = useParams()

  type UserTechnicalType = Omit<UserTechnicalSchemaType, "password">
  const userSchema = userTechnicalSchema.omit({ password: true })

  const { register, reset, handleSubmit, setError, formState: {errors, isSubmitting} } = useForm<UserTechnicalType>({
    criteriaMode: 'all',
      mode: 'all',
      resolver: zodResolver(userSchema)
  })


  const fetchLoad = async () => {
    if(messageError.length || messageSucess.length){
      setMessageError("")
      setMessageSucess("")
    }

    try {
      const response = await api.get(`/user/${id}`)
      const data = response.data

      const [ user ] =  hourFormatList([data])
      const  userHours  = user.userHours.flat()
      setHours(userHours)
     
      reset({
        name: user.name,
        email: user.email
      })

      setAvatar({ name: data.name, avatar: data.avatar })
    }catch (error: any){
      if(error instanceof AxiosError) {
        return setError("root", {message: error.response?.data.message})
      }

      setError("root", {message: error.message})
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchLoad()    
  },[])


 
  
  
  const onSubmit = async (data: UserTechnicalType) => {
    if(!hours.length){
      setMessageSucess("")
      return setMessageError("Informe os horários de disponibilidade do técnico")
    }

    const userHours = formatHours(hours)

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
        
      setMessageError("")
      setMessageSucess(response.data.message)
      
    } catch(error: any){
      if(error instanceof AxiosError) {
        return setError("root", {message: error.response?.data.message})
      }

      setError("root", {message: error.message})
    }
  }

  return {
    hours,
    setHours,
    handleSubmit,
    register,
    onSubmit,
    errors, 
    isSubmitting,
    messageError,
    messageSucess,
    isLoading,
    avatar,
    fetchLoad
  }
}