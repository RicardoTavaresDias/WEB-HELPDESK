import { Route, Routes } from "react-router"
import { Layout } from "../pages/layout"
import { Called } from "../pages/customers"
import { CreateCall } from "../pages/customers/createCall"

import { Teste } from "./Testes"
import { CallDetails } from "../pages/customers/callDetails"

export function Customers(){
  return (
    <Routes>
      <Route element={<Layout identification="cliente"/>} >
        <Route path="/chamados" element={<Called />} />
          <Route path="/chamados/:id" element={<CallDetails />} />
        <Route path="/criar_chamado" element={<CreateCall />} />

        <Route path="/teste" element={<Teste />} />
      </Route>

       
      {/* <Route path="*" element={"Not Found"} /> */}
    </Routes>
  )
}