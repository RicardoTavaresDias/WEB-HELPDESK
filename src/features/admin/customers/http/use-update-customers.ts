import { useEffect, useState } from "react"
import { userSchema as UserCustomerSchema, type UserTechnicalType as UserCustomerSchemaType } from "@/features/admin/technicals/schemas/technical.schema"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import type { UserCustomerType } from "../types/customers-response"
import { useUpdate } from "@/hooks/useUpdate"

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

  useEffect(() => {
    form.reset({
      name: user.name,
      email: user.email
    })
  },[user])

  const onSubmit = (data: UserCustomerSchemaType) => 
    useUpdate({ onSuccessCallback, form, httpApi: `/user/${user.id}`, formDataUpdate: data })
  
  return {
    formUpdate: form,
    onSubmit,
    user,
    setUser
  }
}

export { updateCustomer }