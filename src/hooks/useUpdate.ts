import { api } from "@/services/api";
import { AxiosError } from "axios";
//import type { UseFormReturn } from "react-hook-form"

type UseUpdateType = {
  onSuccessCallback?: () => void 
  form: any
  data?: object
  formDataUpdate?: object
  httpApi: string
}

const useUpdate = async ({ onSuccessCallback, form, data, formDataUpdate, httpApi }: UseUpdateType) => {
  const formData = new FormData();
  formData.append("data", JSON.stringify({ ...formDataUpdate }))
  console.log({ onSuccessCallback, form, data, formDataUpdate, httpApi })

  try {  
    await api.patch((httpApi+4), formDataUpdate ? formData : data)
    form.setError("root", { success: "Dados atuliazado com sucesso." } as object) 
    if (onSuccessCallback) {
      onSuccessCallback() // Chama a função de recarregamento
    }
  } catch (error: any) {
    if(error instanceof AxiosError) {
      return form.setError("root", {message: error.response?.data.message})
    }

    form.setError("root", {message: error.message})
  }
}

export { useUpdate }