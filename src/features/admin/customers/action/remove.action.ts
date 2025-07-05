import { apiCustomer } from "../api/customer.api"
import { Remove } from "@/services/remove.services"

const removeCustomer = (onSuccessCallback: () => any) => {
  const response = Remove({ onSuccessCallback, endpoint: apiCustomer.remove })

  return {
    removeUser: response.remove,
    message: response.message
  }
}

export { removeCustomer }