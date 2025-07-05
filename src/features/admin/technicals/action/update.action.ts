import { useDataForm } from "@/hooks/useDataForm";
import { apiTechnicals } from "../api/technicals.api";
import { Update } from "@/services/update.services";
import { useEffect } from "react";
import { formatHours } from "@/lib/formatHours";
import { IndexUser } from "@/services/indexId.services";
import { userSchema } from "../schemas/technical.schema"

const updateTechnicals = ({
  onSuccessCallback,
  uuid,
}: {
  onSuccessCallback?: () => void;
  uuid: string;
}) => {
  const form = useDataForm({ schema: userSchema })
  const {
    errors,
    register,
    handleSubmit,
    isSubmitting,
    reset
  } = form

  const responseByUser = IndexUser({ endpoint: apiTechnicals.byUser, uuid})
  const { user, fetchUser, messageError, isLoading } = responseByUser
  
  const removeUserHours = (value: string) => {
    responseByUser.setUser((prev) => {
      if(!prev) return prev
      return {
        ...prev,
        userHours: prev.userHours.filter((hours) => hours !== value),
      }
  });
  };

  const addUserHours = (value: string) => {
    responseByUser.setUser((prev) => {
      if(!prev) return prev
      return {
        ...prev,
        userHours: [value, ...prev.userHours],
      }
    });
  };

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

  const userHoursFormatObject = formatHours(user.userHours.flat())
    .filter(value => value.startTime !== null  && value.endTime !== null)

  const response = Update({
    onSuccessCallback,
    form,
    endpoint: apiTechnicals.update,
    uuid,
    dataUpdate: userHoursFormatObject
  });

  return {
    user,
    errors,
    register,
    handleSubmit,
    isSubmitting,
    onSubmit: response.onSubmit,
    removeUserHours,
    addUserHours,
    messageError,
    resetClose,
    isLoading
  };
};

export { updateTechnicals }