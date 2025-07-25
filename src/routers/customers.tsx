import { Route, Routes } from "react-router"
import { Layout } from "@/features/layout"
import { IndexCalledCustomers } from "@/features/customers/pages"
import { CreateCalled } from "@/features/customers/pages/create-called"
import { CallDetails } from "@/features/customers/pages/details-called"
import { NotFound } from "@/features/notFound"

export function Customers(){
  return (
    <Routes>
      <Route element={<Layout identification="cliente"/>} >
        <Route path="/" element={<IndexCalledCustomers />} />
          <Route path="/chamados/:id" element={<CallDetails />} />
        <Route path="/criar_chamado" element={<CreateCalled />} />

      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}