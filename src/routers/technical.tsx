import { Route, Routes } from "react-router"
import { Layout } from "../pages/layout"
import { Called } from "../pages/technical"
import { CallDetails } from "../pages/technical/callDetails"

import { Teste } from "./Testes"

export function Technical(){
  return (
    <Routes>
      <Route element={<Layout identification="técnico"/>} >
        <Route path="/meus_chamados" element={<Called />} />
        <Route path="/meus_chamados/:id" element={<CallDetails />} />

      </Route>

        {/* Teste */}
        <Route path="/teste" element={<Teste />} />
        {/* Teste */}
      {/* <Route path="*" element={"Not Found"} /> */}
    </Routes>
  )
}