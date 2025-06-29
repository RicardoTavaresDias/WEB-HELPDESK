import { Route, Routes } from "react-router"
import { Layout } from "@/layout"
import { CallList } from "@/features/admin/called/pages"
import { CallListdetails } from "@/features/admin/called/pages/callListdetails"
import { Technical } from "@/features/admin/technicals/pages"
import { TechnicalNew } from "@/features/admin/technicals/pages/technicalNew"
import { TechnicalEdition } from "@/features/admin/technicals/pages/technicalEdition"
import { Customers } from "@/features/admin/customers/pages"
import { Services } from "@/features/admin/services/pages"
import { NotFound } from "@/features/notFound"

export function Admin(){
  return (
    <Routes>
      <Route element={<Layout identification="admin"/>} >
        <Route path="/" element={<CallList />} />
          <Route path="/chamados/:id" element={<CallListdetails />} />
        <Route path="/tecnicos" element={<Technical />} />
          <Route path="/tecnicos/novo" element={<TechnicalNew />} />
          <Route path="/tecnicos/edicao" element={<TechnicalEdition />} />
        <Route path="/clientes" element={<Customers />} />
        <Route path="/servicos" element={<Services />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}