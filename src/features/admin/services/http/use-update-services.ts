import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type ServicesSchemaType, servicesSchema } from "../schemas/services-schema"
import { currency } from '@/lib/currency'
import { useEffect } from 'react'
import { useUpdate } from '@/hooks/useUpdate'

const updateServices = ({ onSuccessCallback, id }: { onSuccessCallback: () => void, id: string}) => {
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

  const onSubmit = ({ title, price }: ServicesSchemaType) => 
    useUpdate({ 
      onSuccessCallback, 
      form: form, 
      data: 
      { 
        title, 
        price: price.replace("R$", "").trim() 
      }, 
      httpApi: `/services/${id}` 
    })

  return {
    onSubmitUpdate: onSubmit,
    formUpdate: form
  }
}

export { updateServices }