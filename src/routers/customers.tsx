import { Route, Routes } from "react-router"
import { Layout } from "@/features/layout"
import { IndexCalledCustomers } from "@/features/customers/pages"
import { CreateCall } from "@/features/customers/pages/CreateCustomerCalledPage"
import { CallDetails } from "@/features/customers/pages/CustomerCalledDetailsPage"
import { NotFound } from "@/features/notFound"

export function Customers(){
  return (
    <Routes>
      <Route element={<Layout identification="cliente"/>} >
        <Route path="/" element={<IndexCalledCustomers />} />
          <Route path="/chamados/:id" element={<CallDetails />} />
        <Route path="/criar_chamado" element={<CreateCall />} />

      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}