import { hourFormatList } from "@/lib/formatHours";
import { useEffect, useState } from "react";

export const IndexId = ({ endpoint, uuid }) => {
  const [user, setUser] = useState<any>({
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
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    fetchUser,
    user,
    setUser
  }
}

// realizar tipagem 