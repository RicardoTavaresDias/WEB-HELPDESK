import { Route, Routes } from "react-router"
import { Layout } from "@/features/layout"
import { IndexCalledTechical } from "@/features/technical/pages"
import { CalledDetails } from "@/features/technical/pages/called-details"
import { NotFound } from "@/features/notFound"

export function Technical(){
  return (
    <Routes>
      <Route element={<Layout identification="técnico"/>} >
        <Route path="/" element={<IndexCalledTechical />} />
        <Route path="/chamados/:id" element={<CalledDetails />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  )
}