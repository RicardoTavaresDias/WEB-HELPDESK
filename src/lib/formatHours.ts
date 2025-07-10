import { day } from "@/lib/day"
import dayjs from "dayjs"

type userHoursReturn = {
  startTime: Date
  endTime: Date
}[]

export const formatHours = (userHours: string[]): userHoursReturn => {
  let morning: Date[] = []
  let afternoon: Date[] = []
  let night: Date[] =  []

  for(const hour of userHours){
    const date = dayjs(`${dayjs().format("YYYY-MM-DD")}${hour}`, "YYYY-MM-DD HH:mm").toDate()

    if(day.morning.includes(hour)){
      morning.push(date) 
    } else if(day.afternoon.includes(hour)){
      afternoon.push(date) 
    }else {
      night.push(date) 
    }
  }

  return (
      [
        {startTime: morning.sort()[0] || null, endTime: morning.sort()[morning.length - 1] || null}, 
        {startTime: afternoon.sort()[0] || null, endTime: afternoon.sort()[afternoon.length - 1] || null}, 
        {startTime: night.sort()[0] || null, endTime: night.sort()[night.length - 1] || null}
      ]
    )
}


type usersType = {
  id: string
  name: string
  email: string
  role: string
  avatar: string
  createdAt: Date
  updatedAt: Date
  userHours: hoursType[]
}

type hoursType = {
  id: string
  fkUserTechnical: string
  startTime: Date
  endTime: Date
  createdAt: Date
  updatedAt: Date
}

export type mappedUserType = Omit<usersType, "userHours"> & {
  userHours: string[][]
}

export const hourFormatList = (user: usersType[]): mappedUserType[] => {
  if(user === null) return []
  const users = Array.isArray(user) ? user : [user]

  const userMap = users.map(user => {
    const userHours = user.userHours.map(hour => {

      const morning = day.morning.filter(morning => 
        morning >= dayjs(hour.startTime).format("HH:mm") && 
        morning <= dayjs(hour.endTime).format("HH:mm"))
      if(morning.length > 0) return morning

      const afternoon = day.afternoon.filter(afternoon => 
        afternoon >= dayjs(hour.startTime).format("HH:mm") && 
        afternoon <= dayjs(hour.endTime).format("HH:mm"))
      if(afternoon.length > 0) return afternoon

      const night = day.night.filter(night => 
        night >= dayjs(hour.startTime).format("HH:mm") && 
        night <= dayjs(hour.endTime).format("HH:mm"))
      if(night.length > 0) return night

      return []
    })
    
    return {
      ...user,
      userHours
    }
  })

  return userMap
}