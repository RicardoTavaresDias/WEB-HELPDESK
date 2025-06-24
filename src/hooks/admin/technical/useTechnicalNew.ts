import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../../services/api"
import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react"
import { day } from "../../../lib/day"
import dayjs from "dayjs"
import { AxiosError } from "axios"
import { technicalNewSchema } from "../../../schemas/admin/technical/technicalNew.schema"

type Inputs = {
  name: string
  email: string
  password: string
}

export const useTechnicalNew = () => {
  const [user, setUser] = useState<string[]>([])
  const [messageSucess, setMessageSucess] = useState("")
  const [messageError, setMessageError] = useState("")
  const { resultShema } =  technicalNewSchema()

  useEffect(() => {
    if(messageError.length) setMessageError("")
  }, [user])

  const { register, handleSubmit, reset, setError, formState: {errors} } = useForm<Inputs>({
    criteriaMode: 'all',
      mode: 'all',
      defaultValues: {
        name: '',
        email: '',
        password: ''
      },
      resolver: zodResolver(resultShema)
  })

  const formatHours = () => {
    let morning: Date[] = []
    let afternoon: Date[] = []
    let night: Date[] =  []

    for(const hour of user){
      if(day.morning.includes(hour)){
        morning.push(dayjs(`${dayjs().format("YYYY-MM-DD")}${hour}`, "YYYY-MM-DD HH:mm").toDate()) 
      } else if(day.afternoon.includes(hour)){
        afternoon.push(dayjs(`${dayjs().format("YYYY-MM-DD")}${hour}`, "YYYY-MM-DD HH:mm").toDate()) 
      }else {
        night.push(dayjs(`${dayjs().format("YYYY-MM-DD")}${hour}`, "YYYY-MM-DD HH:mm").toDate()) 
      }
    }

    return (
        [
          {startTime: morning.sort()[0] || null, endTime: morning.sort()[morning.length - 1] || null}, 
          {startTime: afternoon.sort()[0] || null, endTime: afternoon.sort()[afternoon.length - 1] || null}, 
          {startTime: night.sort()[0] || null, endTime: night.sort()[night.length - 1] || null}
        ]
      )
  }

  const onSubmit = async (data: Inputs) => {
    if(!user.length){
      return setMessageError("Informe os horários de disponibilidade do técnico ")
    }

    const hours = formatHours()

    try{
      const response = await api.post("/user/tecnico", 
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
    onCancel
  }
}