import { AxiosError } from 'axios';

type UpdateType = {
  onSuccessCallback?: () => void
  form?: any
  endpoint: (id: string, formdata: object) => Promise<any>
  uuid: string
}

export const useUpdate = ({ onSuccessCallback, form, endpoint, uuid }: UpdateType) => {
  const { setError } = form

   const onUpdate = async (data: any) => {
    try {  
      const response = await endpoint(uuid, data)
      setError("root", { success: response.data.message } as object) 
      if (onSuccessCallback) {
        onSuccessCallback() // Chama a função de recarregamento
      }
    } catch (error: any) {
      if(error instanceof AxiosError) {
        return setError("root", {message: error.response?.data.message})
      }

      setError("root", {message: error.message})
    }
  }

  return {
    onUpdate
  }
}