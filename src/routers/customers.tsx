import { Route, Routes } from "react-router"
import { Layout } from "../layout"
import { Called } from "../pages/customers"
import { CreateCall } from "../pages/customers/createCall"
import { CallDetails } from "../pages/customers/callDetails"
import { NotFound } from "../pages/notFound"

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