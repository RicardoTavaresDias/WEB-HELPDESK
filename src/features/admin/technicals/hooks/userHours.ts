import { formatHours } from "@/lib/formatHours";

interface User {
  name: string;
  email: string;
  avatar: string;
  userHours: string[];
  setUser: any
}

interface ResponseByUser {
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export class UserHours {
  setUser: React.Dispatch<React.SetStateAction<User>>;

  constructor(responseByUser: ResponseByUser) {
    this.setUser = responseByUser.setUser
  }

  removeUserHours = (value: string) => {
    this.setUser((prev: User) => {
      if(!prev) return prev
      return {
        ...prev,
        userHours: prev.userHours.filter((hours) => hours !== value),
      }
    });
  };
  
  addUserHours = (value: string) => {
    this.setUser((prev: User) => {
      if(!prev) return prev
      return {
        ...prev,
        userHours: [value, ...prev.userHours],
      }
    });
  };

  result = (user: User) => {
    const userHoursFormatObject = formatHours(user.userHours.flat())
    .filter(value => value.startTime !== null  && value.endTime !== null)

    return userHoursFormatObject
  }
}