import { Route, Routes } from "react-router"
import { Layout } from "@/features/layout"
import { IndexCalledTechical } from "@/features/technical/pages"
import { CallDetails } from "@/features/technical/pages/TechnicalCalledDetailsPage"
import { NotFound } from "@/features/notFound"

export function Technical(){
  return (
    <Routes>
      <Route element={<Layout identification="técnico"/>} >
        <Route path="/" element={<IndexCalledTechical />} />
        <Route path="/chamados/:id" element={<CallDetails />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  )
}