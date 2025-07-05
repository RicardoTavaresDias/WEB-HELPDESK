import { AxiosError } from "axios"

export const create = ({ onSuccessCallback, endpoint, form, dataCreate}: any) => {
  const { setError, setUser, reset } = form
  
  const onSubmit = async (data: any) => {
     if(!dataCreate.userHours.length){
        return setError("root", { info: "Informe os horários de disponibilidade do técnico "} as object)
     }
    try{
      const response = await endpoint({ 
        ...data,
        ...dataCreate
      })

      reset()
      setUser([])
      return setError("root", {success: response.data.message } as object)

    } catch(error: any){
      if(error instanceof AxiosError) {
        return setError("root", {message: error.response?.data.message})
      }

      return setError("root", {message: error.message})
    }
  }

  return {
    onSubmit
  }

}