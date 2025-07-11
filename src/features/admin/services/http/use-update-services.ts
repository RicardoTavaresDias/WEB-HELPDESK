import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { api } from '@/services/api'
import { type ServicesSchemaType, servicesSchema } from "../schemas/services-schema"
import { currency } from '@/lib/currency'
import { useEffect } from 'react'

const updateServices = ({ onSuccessCallback, id }: { onSuccessCallback: () => void, id: string}) => {
  const form = useForm<ServicesSchemaType>({
    defaultValues: {
      title: "",
      value: ""
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(servicesSchema)
  })

  useEffect(() => {
    form.setValue("value", currency({ formatPriceInput: form.watch("value") }))
  },[form.watch("value")])

  const onSubmit = async ({ title, value }: ServicesSchemaType) => {
    try{
      const response = await api.patch(`/services/${id}`, {
        title, 
        value: value.replace("R$", "").trim()
      })

      form.setError("root", {success: response.data.message } as object)
      if (onSuccessCallback) {
        onSuccessCallback() // Chama a função de recarregamento
      }
    } catch(error: any){
      if(error instanceof AxiosError) {
        return form.setError("root", {message: error.response?.data.message})
      }

      return form.setError("root", {message: error.message})
    }
  }

  return {
    onSubmitUpdate: onSubmit,
    formUpdate: form
  }
}

export { updateServices }