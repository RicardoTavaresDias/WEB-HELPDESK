import { useNavigate } from "react-router"
import { useAuth } from "@/hooks/useAuth"
import { signinSchema } from "@/features/auth/schemas/AuthSchema"
import { useDataForm } from "@/hooks/useDataForm"
import { useCreate } from "@/hooks/useCreate"
import { apiAuth } from "../api/auth.api"
import { useEffect } from "react"
//import type { UserSession } from "@/types/users"

// type UserData = {
//   token: string
//   user: UserSession
// } 

export const useSignin = () => {
  const navigate = useNavigate()
  const { save } = useAuth()

  const { 
    register, 
    reset, 
    setError, 
    handleSubmit, 
    errors, 
    isSubmitting 
  } = useDataForm({
    defaultValues: {
      email: "",
      password: ''
    },
    schema: signinSchema
  })

  
  const response = useCreate({ endpoint: apiAuth.login, form: { setError, reset } }) as any
 
  useEffect(() => {
    if(response.data !== null){
      save({
        token: response.data.token,
        user: {
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          role: response.data.user.role,
          avatar: response.data.user.avatar
        }, 
      })

      navigate("/")
    }
  },[response.data])
  

  return {
    register,
    handleSubmit,
    onSubmit: response.onSubmit,
    isSubmitting,
    errors
  }
}