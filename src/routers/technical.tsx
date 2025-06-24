import { Route, Routes } from "react-router"
import { Layout } from "@/layout"
import { Called } from "@/pages/technical"
import { CallDetails } from "@/pages/technical/callDetails"
import { NotFound } from "@/pages/notFound"

export function Technical(){
  return (
    <Routes>
      <Route element={<Layout identification="técnico"/>} >
        <Route path="/" element={<Called />} />
        <Route path="/chamados/:id" element={<CallDetails />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  )
}