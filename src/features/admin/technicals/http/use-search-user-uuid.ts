import { hourFormatList } from "@/lib/formatHours";
import { api } from "@/services/api";
import { AxiosError } from "axios";
import type { SearchUserUIIDType } from "../types/technical-user-response";

const searchUserUIID = async ({ setUser, form, uuid }: SearchUserUIIDType) => {
  try {
    const responseByUser = await api.get(`/user/${uuid}`)
        
    const [ userData ] = hourFormatList(responseByUser.data);
    const userHoursData = userData.userHours.flat();
    setUser({ ...userData, userHours: userHoursData });
  } catch (error: any) {
    if(error instanceof AxiosError) {
      return form.setError("root", {message: error.response?.data.message})
    }

    return form.setError("root", {message: error.message})
  }
}

export { searchUserUIID }