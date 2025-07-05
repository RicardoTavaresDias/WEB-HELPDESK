import { formatHours } from '@/lib/formatHours';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

type UpdateType = {
  onSuccessCallback?: () => void
  form: any
  endpoint: (id: string, formdata: object) => any
  uuid?: string
  dataUpdate?: any
}
export const Update = ({ onSuccessCallback, form, endpoint, uuid, dataUpdate }: UpdateType) => {
  
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    avatar: ""
  })

  const {
    register,
    reset,
    handleSubmit,
    setError,
    errors,
    isSubmitting
  } = form

  useEffect(() => {
    reset({
      name: userData.name,
      email: userData.email,
      avatar: userData.avatar
    })
  }, [userData])

  const onSubmit = async (data: UserAdminCustomersType & {avatar: string}) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(
      { 
        name: data.name, 
        email: data.email,
        avatar: data.avatar,
        userHours: dataUpdate && formatHours(dataUpdate.userHours.flat()).filter(value => value.startTime !== null  && value.endTime !== null)
      }
    ))
    
    try {    
      const response = await endpoint(uuid ? uuid : userData.id, formData)
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
    userData,
    setUserData,
    reset
  }
}
