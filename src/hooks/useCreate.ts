import { AxiosError } from "axios"
import { useState } from "react"

export const useCreate = ({ onSuccessCallback, endpoint, form, dataCreate}: any) => {
  const { setError, reset } = form
  const [data, setData] = useState(null)
  
  const onSubmit = async (data: any) => {
     if(dataCreate && !dataCreate.userHours.length){
        return setError("root", { info: "Informe os horários de disponibilidade do técnico "} as object)
     }
    try{
      const response = await endpoint({ 
        ...data,
        ...dataCreate
      })

      reset()
      setError("root", {success: response.data.message } as object)
      return setData(response.data)
    } catch(error: any){
      if(error instanceof AxiosError) {
        return setError("root", {message: error.response?.data.message})
      }

      return setError("root", {message: error.message})
    }
  }

  return {
    onSubmit,
    data
  }
}