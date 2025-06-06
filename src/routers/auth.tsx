import { Route, Routes } from "react-router"
import { Signin } from "../pages/signin"
import { Signup } from "../pages/signup"
import { NotFound } from "../pages/notFound"

export function Auth(){
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}