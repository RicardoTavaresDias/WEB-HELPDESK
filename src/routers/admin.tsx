import { Route, Routes } from "react-router"
import { Layout } from "../components/layout"
import { CallList } from "../pages/admin/callList"

export function Admin(){
  return (
    <Routes>
      <Route path='/' element={<Layout identification="admin"/>} >
        <Route path="/chamados" index element={<CallList />} />
        <Route path="/tecnicos" index element={"Em Breve..."} />
        <Route path="/clientes" index element={"Em Breve..."} />
        <Route path="/servicos" index element={"Em Breve..."} />
      </Route>

      <Route path="*" element={"Not Found"} />
    </Routes>
  )
}