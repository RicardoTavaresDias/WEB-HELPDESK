import { apiServices } from "../api/services.api"
import { useUpdate } from "@/hooks/useUpdate"
import { useDataForm } from "@/hooks/useDataForm"

const UpdateServices = (onSuccessCallback: () => void) => {

  const { setError, errors } = useDataForm({})
  
  const statusUpdate = (uuid: string, status: string) => {
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