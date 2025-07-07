import { useDataForm } from "@/hooks/useDataForm";
import { apiTechnicals } from "../api/technicals.api";
import { useUpdate } from "@/hooks/useUpdate";
import { useEffect } from "react";
import { useIndexUser } from "@/hooks/useIndexUser";
import { userSchema } from "../schemas/technical.schema"
import { UserHours } from "../hooks/userHours"

const updateTechnicals = ({ onSuccessCallback, uuid, }: { onSuccessCallback?: () => void, uuid: string }) => {
  const form = useDataForm({ schema: userSchema })
  const {
    errors,
    register,
    handleSubmit,
    isSubmitting,
    reset
  } = form

  const responseByUser = useIndexUser({ endpoint: apiTechnicals.byUser, uuid})
  const { user, fetchUser, messageError, isLoading } = responseByUser
  
  useEffect(() => {
    resetClose()
  }, [user.name, user.email])

  const resetClose = () => {
    reset({
      name: user.name,
      email: user.email,
      avatar: user.avatar
    })
    fetchUser()
  }

  const userHours = new UserHours(responseByUser as any)

  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(
      { 
        ...data,
        userHours: userHours.result(user as any)
      } 
    ))

    const response = useUpdate({
      onSuccessCallback,
      form,
      endpoint: apiTechnicals.update,
      uuid
    })
    response.onUpdate(formData)
  }

  return {
    user,
    errors,
    register,
    handleSubmit,
    isSubmitting,
    onSubmit,
    removeUserHours: userHours.removeUserHours,
    addUserHours: userHours.addUserHours,
    messageError,
    resetClose,
    isLoading
  };
};

export { updateTechnicals }