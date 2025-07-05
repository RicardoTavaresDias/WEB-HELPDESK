import { useDataForm } from "@/hooks/useDataForm"
import { apiCustomer } from "../api/customer.api"
import { Update } from "@/services/update.services"
import { useEffect, useState } from "react"
import { userSchema } from "@/features/admin/technicals/schemas/technical.schema"

const updateCustomer = (onSuccessCallback: () => void) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    avatar: ""
  })
  const form = useDataForm({ schema: userSchema }) 
  
  const {
    register,
    reset,
    handleSubmit,
    errors,
    isSubmitting
  } = form

  useEffect(() => {
    resetClose()
  }, [user])

  const resetClose = () => {
    reset({
      name: user.name,
      email: user.email,
      avatar: user.avatar
    })
  }

  const response = Update({ onSuccessCallback, form, endpoint: apiCustomer.update, uuid: user.id })

  return {
    errors,
    register,
    handleSubmit,
    isSubmitting,
    onSubmit: response.onSubmit,
    user,
    setUser,
    resetClose 
  }
}

export { updateCustomer }