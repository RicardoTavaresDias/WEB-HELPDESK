import { Route, Routes } from "react-router"
import { Layout } from "@/layout"
import { CallList } from "@/features/admin/called/pages/CalledHomePage"
import { CallListdetails } from "@/features/admin/called/pages/CalledListPage"
import { IndexAdminTechnicalsPage } from "@/features/admin/technicals/pages/index.page"
import { CreateAdminTechnicalsPage } from "@/features/admin/technicals/pages/create.page"
import { UpdateAdminTechnicalsPage } from "@/features/admin/technicals/pages/update.page"
import { Customers } from "@/features/admin/customers/pages/CustomersHomePage"
import { Services } from "@/features/admin/services/pages/ServiceHomePage"
import { NotFound } from "@/features/notFound"

export function Admin(){
  return (
    <Routes>
      <Route element={<Layout identification="admin"/>} >
        <Route path="/" element={<CallList />} />
          <Route path="/chamados/:id" element={<CallListdetails />} />
        <Route path="/tecnicos" element={<IndexAdminTechnicalsPage />} />
          <Route path="/tecnicos/novo" element={<CreateAdminTechnicalsPage />} />
          <Route path="/tecnicos/edicao/:id" element={<UpdateAdminTechnicalsPage />} />
        <Route path="/clientes" element={<Customers />} />
        <Route path="/servicos" element={<Services />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}