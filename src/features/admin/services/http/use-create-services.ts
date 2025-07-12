import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { api } from '@/services/api'
import { type ServicesSchemaType, servicesSchema } from "../schemas/services-schema"
import { currency } from '@/lib/currency'
import { useEffect } from 'react'

const createServices = (onSuccessCallback: () => void) => {
  const form = useForm<ServicesSchemaType>({
    defaultValues: {
      title: "",
      price: ""
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(servicesSchema)
  })

  useEffect(() => {
    form.setValue("price", currency({ formatPriceInput: form.watch("price") }))
  },[form.watch("price")])

  const onSubmit = async ({ title, price }: ServicesSchemaType) => {
    try{
      const response = await api.post(`/services`, {
        title, 
        price: price.replace("R$", "").trim()
      })

      form.reset()
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
    onSubmit,
    form
  }
}

export { createServices }