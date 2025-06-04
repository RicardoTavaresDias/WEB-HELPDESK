import { Route, Routes } from "react-router"
import { Layout } from "../pages/layout"
import { Called } from "../pages/technical"
import { Teste } from "./Testes"

export function Technical(){
  return (
    <Routes>
      <Route element={<Layout identification="técnico"/>} >
        <Route path="/chamados" element={<Called />} />

      </Route>

        {/* Teste */}
        <Route path="/teste" element={<Teste />} />
        {/* Teste */}
      {/* <Route path="*" element={"Not Found"} /> */}
    </Routes>
  )
}