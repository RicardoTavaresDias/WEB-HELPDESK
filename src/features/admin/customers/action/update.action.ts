import { api } from '@/services/api';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'

type UserAdminCustomersType = {
  id: string
  name: string
  email: string
}

export const updateAdminCustomersAction = (onSuccessCallback?: () => void) => {
  const [userCustomerData, setuserCustomerData] = useState({
    id: "",
    name: "",
    email: ""
  })

  const { register, reset, handleSubmit, setError, formState: {errors, isSubmitting} } = useForm<UserAdminCustomersType>({
    criteriaMode: 'all',
    mode: 'all'
    //resolver: zodResolver(userSchema)
  })

  useEffect(() => {
    reset({
      name: userCustomerData.name,
      email: userCustomerData.email
    })
  }, [userCustomerData])

  const onSubmit = async (data: UserAdminCustomersType) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(
      { 
        name: data.name, 
        email: data.email, 
      }
    ))

    try {
      const response = await api.patch(`/user/${userCustomerData.id}`, formData)
      setError("root", { success: response.data.message } as object) 
      if (onSuccessCallback) {
        onSuccessCallback() // Chama a função de recarregamento
      }
    } catch (error: any) {
      if(error instanceof AxiosError) {
        return setError("root", {message: error.response?.data.message})
      }

      setError("root", {message: error.message})
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    userCustomerData,
    setuserCustomerData,
    reset
  }
}