import { formatHours } from "@/lib/formatHours";
import type { UserTechnicalsHoursType } from "../types/technicals-hours";

export class UserHours {
  setUser: React.Dispatch<React.SetStateAction<UserTechnicalsHoursType>>;

  constructor(setUser:  React.Dispatch<React.SetStateAction<UserTechnicalsHoursType>>) {
    this.setUser = setUser
  }

  removeUserHours = (value: string) => {
    this.setUser((prev: UserTechnicalsHoursType) => {
      if(!prev) return prev
      return {
        ...prev,
        userHours: prev.userHours.filter((hours) => hours !== value),
      }
    });
  };
  
  addUserHours = (value: string) => {
    this.setUser((prev: UserTechnicalsHoursType) => {
      if(!prev) return prev
      return {
        ...prev,
        userHours: [value, ...prev.userHours],
      }
    });
  };

  result = (user: UserTechnicalsHoursType) => {
    const userHoursFormatObject = formatHours(user.userHours.flat())
    .filter(value => value.startTime !== null  && value.endTime !== null)

    return userHoursFormatObject
  }
}