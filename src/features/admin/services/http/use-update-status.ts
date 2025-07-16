import { useForm } from 'react-hook-form'
import { useUpdate } from '@/hooks/useUpdate'

const UpdateStatus = (onSuccessCallback: () => void) => {
  const formStatus = useForm({
    criteriaMode: 'all',
    mode: 'all',
  })

  const onSubmit = (uuid: string, status: string) => 
    useUpdate({ onSuccessCallback, form: formStatus, httpApi: `/services/${uuid}`, data: { 
      status: status === "inactive" ? "active" : "inactive" 
    }})

  return {
    onSubmitStatus: onSubmit,
    formStatus
  }
}

export { UpdateStatus }