import { Route, Routes } from "react-router"
import { Layout } from "@/layout"
import { Called } from "@/features/customers/pages"
import { CreateCall } from "@/features/customers/pages/createCall"
import { CallDetails } from "@/features/customers/pages/callDetails"
import { NotFound } from "@/features/notFound"

export function Customers(){
  return (
    <Routes>
      <Route element={<Layout identification="cliente"/>} >
        <Route path="/" element={<Called />} />
          <Route path="/chamados/:id" element={<CallDetails />} />
        <Route path="/criar_chamado" element={<CreateCall />} />

      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}