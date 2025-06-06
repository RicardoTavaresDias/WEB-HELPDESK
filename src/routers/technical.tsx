import { Route, Routes } from "react-router"
import { Layout } from "../pages/layout"
import { Called } from "../pages/technical"
import { CallDetails } from "../pages/technical/callDetails"
import { NotFound } from "../pages/notFound"

export function Technical(){
  return (
    <Routes>
      <Route element={<Layout identification="técnico"/>} >
        <Route path="/chamados" element={<Called />} />
        <Route path="/chamados/:id" element={<CallDetails />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  )
}