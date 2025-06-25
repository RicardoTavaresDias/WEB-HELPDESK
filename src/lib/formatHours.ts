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