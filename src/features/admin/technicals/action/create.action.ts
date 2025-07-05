import { useState } from "react"
import { useDataForm } from "@/hooks/useDataForm";
import { userTechnicalSchema } from "../schemas/technical.schema";
import { formatHours } from "@/lib/formatHours";
import { apiTechnicals } from "../api/technicals.api";
import { create } from "@/services/create.services"

export const CreateAdminTechnical = () => {
  const [user, setUser] = useState<string[]>([])

  const { 
    errors,
    register,
    handleSubmit,
    isSubmitting,
    reset,
    setError
  } = useDataForm({ 
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    schema: userTechnicalSchema 
  })

    const onCancel = () => {
      reset()
      setUser([])
    }
    
    const hours = formatHours(user)

    const data = { 
      role: "technical", 
      userHours: hours.filter(value => !(value.startTime === null && value.endTime === null)) 
    }

    const responseCreate = create({ endpoint: apiTechnicals.create, dataCreate: data, form: { setError, reset, setUser } })
    const { onSubmit } = responseCreate

    return {
      onSubmit,
      errors,
      handleSubmit,
      isSubmitting,
      register,
      user,
      setUser,
      onCancel
    }
}

