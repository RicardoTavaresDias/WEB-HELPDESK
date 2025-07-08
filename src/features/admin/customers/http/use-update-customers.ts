import { useEffect, useState } from "react"
import { userSchema } from "@/features/admin/technicals/schemas/technical.schema"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "@/services/api"
import { AxiosError } from "axios"
import type { UserCustomerType } from "../types/customers-response"

const updateCustomer = (onSuccessCallback: () => void) => {
  const [user, setUser] = useState<UserCustomerType>({
    id: "",
    name: "",
    email: "",
    avatar: ""
  })

  const form = useForm({
    defaultValues: {
      name: "",
      email: ""
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(userSchema)  // refazer schema para Customer
  })

  useEffect(() => {
    resetClose()
  }, [user])

  const resetClose = () => {
    form.reset({
      name: user.name,
      email: user.email
    })
  }

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify({ ...data }))

    try {  
      const response = await api.patch(`/user/${user.id}`, formData)
      form.setError("root", { success: response.data.message } as object) 
      if (onSuccessCallback) {
        onSuccessCallback() // Chama a função de recarregamento
      }
    } catch (error: any) {
      if(error instanceof AxiosError) {
        return form.setError("root", {message: error.response?.data.message})
      }

      form.setError("root", {message: error.message})
    }
  }
  
  return {
    errors: form.formState.errors,
    register: form.register,
    handleSubmit: form.handleSubmit,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
    user,
    setUser,
    resetClose 
  }
}

export { updateCustomer }