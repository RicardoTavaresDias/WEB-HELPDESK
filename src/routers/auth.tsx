import { Route, Routes } from "react-router"
import { Signin } from "@/features/auth/pages/signIn"
import { Signup } from "@/features/auth/pages/signUp"
import { NotFound } from "@/features/notFound"

export function Auth(){
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}