import { useState } from "react"
import { userSchema as UserCustomerSchema, type UserTechnicalType as UserCustomerSchemaType } from "@/features/admin/technicals/schemas/technical.schema"
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

  const form = useForm<UserCustomerSchemaType>({
    defaultValues: {
      name: "",
      email: ""
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(UserCustomerSchema)
  })

  form.setValue("name", user.name)
  form.setValue("email", user.email)

  const onSubmit = async (data: UserCustomerSchemaType) => {
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
    formUpdate: form,
    onSubmit,
    user,
    setUser
  }
}

export { updateCustomer }