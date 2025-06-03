import { Route, Routes } from "react-router"
import { Layout } from "../components/layout"
import { CallList } from "../pages/admin/callList"
import { CallListdetails } from "../pages/admin/callList/callListdetails"
import { Technical } from "../pages/admin/technical"
import { TechnicalNew } from "../pages/admin/technical/technicalNew"
import { TechnicalEdition } from "../pages/admin/technical/technicalEdition"
import { Customers } from "../pages/admin/customers"
import { Services } from "../pages/admin/services"

import { Teste } from "./Testes"

export function Admin(){
  return (
    <Routes>
      <Route element={<Layout identification="admin"/>} >
        <Route path="/chamados" index element={<CallList />} />
          <Route path="/chamados/:id" element={<CallListdetails />} />
        <Route path="/tecnicos" element={<Technical />} />
          <Route path="/tecnicos/novo" element={<TechnicalNew />} />
          <Route path="/tecnicos/edicao" element={<TechnicalEdition />} />
        <Route path="/clientes" element={<Customers />} />
        <Route path="/servicos" element={<Services />} />

        {/* Teste */}
        <Route path="/teste" element={<Teste />} />
        {/* Teste */}
      </Route>

      {/* <Route path="*" element={"Not Found"} /> */}
    </Routes>
  )
}