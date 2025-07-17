import { AxiosError } from "axios"
import { api } from "@/services/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"

function updateStatus() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (status: { id: number, status: "open" | "in_progress" | "close"  }) => {
      try {
        await api.patch(`/calleds/${status.id}`, { status: status.status })
      } catch (error: any) {
        if(error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
  
        throw new Error(error.message)
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get_list'] })
    }
  })
}

export { updateStatus }
















// const updateStatus = (onSucessCallback: () => void) => {
//   const [isLoading, setIsLoading] = useState(false)
//   const [messageError, setMessageError] = useState("")

//   const onSubmitStatus = async (status: { id: number, status: "open" | "in_progress" | "close"  }) => {
//     try {
//       setIsLoading(true)
//       await api.patch(`/calleds/${status.id}`, {
//         status: status.status
//       })

//       if(onSucessCallback){
//         onSucessCallback()
//       }
//     } catch (error: any) {
//       if(error instanceof AxiosError) {
//           return setMessageError(error.response?.data.message)
//         }
  
//       return setMessageError(error.message)
//     }finally {
//       setIsLoading(false)
//     }
//   }

//   return {
//     onSubmitStatus,
//     isLoadingUpdate: isLoading,
//     messageErrorUpdate: messageError   
//   }
// }

// export { updateStatus }