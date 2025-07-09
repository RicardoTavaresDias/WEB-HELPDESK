import { Route, Routes } from "react-router"
import { Layout } from "@/features/layout"
import { Called } from "@/features/technical/pages/TechnicalHomePage"
import { CallDetails } from "@/features/technical/pages/TechnicalCalledDetailsPage"
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