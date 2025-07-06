import { apiCustomer } from "../api/customer.api"
import { useRemove } from "@/hooks/useRemove"

const removeCustomer = (onSuccessCallback: () => any) => {
  const response = useRemove({ onSuccessCallback, endpoint: apiCustomer.remove })

  return {
    removeUser: response.remove,
    message: response.message,
    isLoadingRemove: response.isLoading
  }
}

export { removeCustomer }