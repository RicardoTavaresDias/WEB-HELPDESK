import { Route, Routes } from "react-router"
import { Layout } from "../components/layout"
import { Body } from "../components/layout/body"

export function Admin(){
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path="/" index element={<Body />} />
      </Route>

      <Route path="*" element={"Not Found"} />
    </Routes>
  )
}