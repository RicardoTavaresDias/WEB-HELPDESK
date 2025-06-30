import { Route, Routes } from "react-router"
import { Layout } from "@/layout"
import { CallList } from "@/features/admin/called/pages/CalledHomePage"
import { CallListdetails } from "@/features/admin/called/pages/CalledListPage"
import { Technical } from "@/features/admin/technicals/pages/TechnicalsHomePage"
import { TechnicalNew } from "@/features/admin/technicals/pages/TechnicalNewPage"
import { TechnicalEdition } from "@/features/admin/technicals/pages/TechnicalEditionPage"
import { Customers } from "@/features/admin/customers/pages/CustomersHomePage"
import { Services } from "@/features/admin/services/pages/ServiceHomePage"
import { NotFound } from "@/features/notFound"

export function Admin(){
  return (
    <Routes>
      <Route element={<Layout identification="admin"/>} >
        <Route path="/" element={<CallList />} />
          <Route path="/chamados/:id" element={<CallListdetails />} />
        <Route path="/tecnicos" element={<Technical />} />
          <Route path="/tecnicos/novo" element={<TechnicalNew />} />
          <Route path="/tecnicos/edicao/:id" element={<TechnicalEdition />} />
        <Route path="/clientes" element={<Customers />} />
        <Route path="/servicos" element={<Services />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}