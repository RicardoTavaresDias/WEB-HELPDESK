// import { formatHours, hourFormatList } from "@/lib/formatHours"
// import { api } from "@/services/api"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router"
// import { useForm } from 'react-hook-form'
// import { AxiosError } from "axios"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { userSchema } from "../schemas/technical.schema"
// import type { UserTechnicalType } from "../schemas/technical.schema"

// type UserType = {
//   id: string
//   name: string
//   email: string
//   avatar: string
//   userHours: string[],
// }

// export const updateAdminTechnicalAction = () => {
//   const [user, setUser ] = useState<UserType>({
//     id: "",
//     name: "",
//     email: "",
//     avatar: "",
//     userHours: [],
//   })
//   const [isLoading, setIsLoading] = useState(false)
//   const { id } = useParams()

//   const { register, reset, handleSubmit, setError, formState: {errors, isSubmitting} } = useForm<UserTechnicalType>({
//     criteriaMode: 'all',
//     mode: 'all',
//     resolver: zodResolver(userSchema)
//   })

//   const fetchLoad = async () => {
//     try {
//       setIsLoading(true)
//       const response = await api.get(`/user/${id}`)
//       const data = response.data

//       const [ userData ] =  hourFormatList([data])
//       const userHoursData = userData.userHours.flat()
//       setUser({...userData,  userHours: userHoursData})

//       reset({
//         name: userData.name,
//         email: userData.email
//       })

//     }catch (error: any){
//       if(error instanceof AxiosError) {
//         return setError("root", {message: error.response?.data.message})
//       }

//       setError("root", {message: error.message})
//     }finally{
//       setIsLoading(false)
//     }
//   }

//   const onSubmit = async (data: UserTechnicalType) => {
//     if(!user.userHours.length){
//       return setError("root", { info: "Informe os horários de disponibilidade do técnico"} as object)
//     }

//     const userHours = formatHours(user.userHours)

//     const formData = new FormData();
//     formData.append("data", JSON.stringify(
//       {
//         name: data.name,
//         email: data.email,
//         userHours: userHours.filter(value => !(value.startTime === null && value.endTime === null))
//       }
//     ))

//     try{
//       const response = await api.patch(`/user/${id}`, formData)
//       setError("root", { success: response.data.message } as object)

//     } catch(error: any){
//       if(error instanceof AxiosError) {
//         return setError("root", {message: error.response?.data.message})
//       }

//       setError("root", {message: error.message})
//     }
//   }

//   const removeUserHours = (value: string) => {
//     setUser(prev => (
//       {
//         ...prev,
//         userHours: prev.userHours.filter(hours => hours !== value)
//       }
//     ))
//   }

//   const addUserHours = (value: string) => {
//     setUser(prev => (
//       {
//         ...prev,
//         userHours: [value, ...prev.userHours]
//       }
//     ))
//   }

//    useEffect(() => {
//     fetchLoad()
//   },[])

//   return {
//     user,
//     handleSubmit,
//     register,
//     onSubmit,
//     errors,
//     isSubmitting,
//     isLoading,
//     fetchLoad,
//     addUserHours,
//     removeUserHours
//   }
// }

import { useDataForm } from "@/hooks/useDataForm";
import { apiTechnicals } from "../api/technicals.api";
import { Update } from "@/services/update.services";
import { useEffect, useState } from "react";
import { hourFormatList } from "@/lib/formatHours";
import { IndexId } from "@/services/indexId.services";
import { userSchema } from "../schemas/technical.schema"

const updateTechnicals = ({
  onSuccessCallback,
  uuid,
}: {
  onSuccessCallback?: () => any;
  uuid: string;
}) => {
  const form = useDataForm({ schema: userSchema })

  const responseByUser = IndexId({ endpoint: apiTechnicals.byUser, uuid})
  const { user, setUser, fetchUser } = responseByUser
  
  const removeUserHours = (value: string) => {
    responseByUser.setUser((prev) => ({
      ...prev,
      userHours: prev.userHours.filter((hours) => hours !== value),
    }));
  };

  const addUserHours = (value: string) => {
    responseByUser.setUser((prev) => ({
      ...prev,
      userHours: [value, ...prev.userHours],
    }));
  };

  useEffect(() => {
    response.reset({
      name: user.name,
      email: user.email
    })
  }, [user]);



  const response = Update({
    onSuccessCallback,
    form,
    endpoint: apiTechnicals.update,
    uuid,
    dataUpdate: user
  });


  

  return {
    user,
    setUser,
    errors: response.errors,
    register: response.register,
    handleSubmit: response.handleSubmit,
    isSubmitting: response.isSubmitting,
    onSubmit: response.onSubmit,
    setUserData: response.setUserData,
    removeUserHours,
    addUserHours,
    fetchUser
  };
};

export { updateTechnicals };
