import { apiServices } from "../api/services.api"
import { useUpdate } from "@/hooks/useUpdate"
import { useDataForm } from "@/hooks/useDataForm"

const UpdateServices = (onSuccessCallback) => {

  const { setError, errors } = useDataForm({})
  
  const statusUpdate = (uuid, status) => {
    useUpdate({ onSuccessCallback, endpoint: apiServices.update, uuid, form: { setError } })
    .onUpdate({ status: status === "inactive" ? "active" : "inactive" })
  }

    return  {
      errors,
      setError,
      onSubmit: statusUpdate
    }
  }

  

export { UpdateServices }