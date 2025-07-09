import { Route, Routes } from "react-router"
import { Layout } from "@/layout"
import { CallList } from "@/features/admin/called/pages/CalledHomePage"
import { CallListdetails } from "@/features/admin/called/pages/CalledListPage"
import { IndexAdminTechnicals } from "@/features/admin/technicals/pages"
import { CreateAdminTechnicals } from "@/features/admin/technicals/pages/create-technical"
import { UpdateAdminTechnicals } from "@/features/admin/technicals/pages/update-technical"
import { IndexAdminCustomer } from "@/features/admin/customers/pages"
import { AdminServices } from "@/features/admin/services/pages"
import { NotFound } from "@/features/notFound"

export function Admin(){
  return (
    <Routes>
      <Route element={<Layout identification="admin"/>} >
        <Route path="/" element={<CallList />} />
          <Route path="/chamados/:id" element={<CallListdetails />} />
        <Route path="/tecnicos" element={<IndexAdminTechnicals />} />
          <Route path="/tecnicos/novo" element={<CreateAdminTechnicals />} />
          <Route path="/tecnicos/edicao/:id" element={<UpdateAdminTechnicals />} />
        <Route path="/clientes" element={<IndexAdminCustomer />} />
        <Route path="/servicos" element={<AdminServices />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}