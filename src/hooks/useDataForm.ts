import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const useDataForm = ({ defaultValues, schema }: {defaultValues?: any, schema?: any}) => {
  const { register, reset, handleSubmit, setError, formState: {errors, isSubmitting} } = useForm({
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