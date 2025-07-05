import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type UserTechnicalSchemaType } from "../features/admin/technicals/schemas/technical.schema"

const useDataForm = ({ defaultValues, schema }: {defaultValues?: any, schema?: any}) => {
  const { 
    register, 
    reset, 
    handleSubmit, 
    setError, 
    formState: {errors, isSubmitting} 
  } = useForm<UserTechnicalSchemaType & { avatar: string}>(
    {
      defaultValues: defaultValues,
      criteriaMode: 'all',
      mode: 'all',
      resolver: schema && zodResolver(schema)
    })

  return {
    register,
    reset,
    handleSubmit,
    setError,
    errors, 
    isSubmitting
  }
}

export { useDataForm }