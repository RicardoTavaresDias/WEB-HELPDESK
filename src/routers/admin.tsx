import { Route, Routes } from "react-router"
import { Layout } from "../components/layout"
import { CallList } from "../pages/admin/callList"
import { CallListdetails } from "../pages/admin/callList/callListdetails"
import { Technical } from "../pages/admin/technical"
import { TechnicalNew } from "../pages/admin/technical/technicalNew"
import { TechnicalEdition } from "../pages/admin/technical/technicalEdition"

export function Admin(){
  return (
    <Routes>
      <Route element={<Layout identification="admin"/>} >
      
        <Route path="/chamados" index element={<CallList />} />
          <Route path="/chamados/:id" element={<CallListdetails />} />

        <Route path="/tecnicos" element={<Technical />} />
          <Route path="/tecnicos/novo" element={<TechnicalNew />} />
          <Route path="/tecnicos/edicao" element={<TechnicalEdition />} />

        <Route path="/clientes" element={"Em Breve..."} />
        <Route path="/servicos" element={"Em Breve..."} />
      </Route>

      <Route path="*" element={"Not Found"} />
    </Routes>
  )
}