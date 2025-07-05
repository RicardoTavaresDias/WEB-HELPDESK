import { hourFormatList } from "@/lib/formatHours";
import { AxiosError, type AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type UserType = {
  id: string
  name: string
  email: string
  avatar: string
  userHours: string[]
}

export const IndexUser = ({ endpoint, uuid }: {endpoint: (id: string) => Promise<AxiosResponse>, uuid: string}) => {
  const [messageError, setMessageError] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<UserType>({
    id: "",
    name: "",
    email: "",
    avatar: "",
    userHours: [],
  });

  const fetchUser = async () => {
    try {
      const responseByUser = await endpoint(uuid);
   
      const [ userData ] = hourFormatList(responseByUser.data);
      const userHoursData = userData.userHours.flat();
      setUser({ ...userData, userHours: userHoursData });
    } catch (error: any) {
      if(error instanceof AxiosError) {
        return setMessageError(error.response?.data.message)
      }
      setMessageError(error.message)
    }finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    fetchUser,
    user,
    setUser,
    messageError,
    isLoading
  }
}