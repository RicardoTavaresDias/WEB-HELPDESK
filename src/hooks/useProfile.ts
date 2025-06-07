import { use } from "react";
import { ProfileContext } from "../context/ProfileContext"

export function useProfile(){
  const context = use(ProfileContext)

  return context
}