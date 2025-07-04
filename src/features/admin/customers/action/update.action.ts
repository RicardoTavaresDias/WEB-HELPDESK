import { useDataForm } from "@/hooks/useDataForm"
import { apiCustomer } from "../api/customer.api"
import { Update } from "@/services/update.services"

const updateCustomer = (onSuccessCallback: () => any) => {
  const form = useDataForm({})

  const response = Update({ onSuccessCallback, form, endpoint: apiCustomer.update })

  return {
    errors: response.errors,
    register: response.register,
    handleSubmit: response.handleSubmit,
    isSubmitting: response.isSubmitting,
    onSubmit: response.onSubmit,
    userData: response.userData,
    setUserData: response.setUserData,
  }
}

export { updateCustomer }