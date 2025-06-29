import { Route, Routes } from "react-router"
import { Layout } from "@/layout"
import { Called } from "@/features/technical/pages"
import { CallDetails } from "@/features/technical/pages/callDetails"
import { NotFound } from "@/features/notFound"

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