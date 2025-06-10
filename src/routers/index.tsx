import { BrowserRouter } from "react-router";
import { Admin } from "../routers/admin"
import { Auth } from "../routers/auth"
import { Technical } from "../routers/technical"
import { Customers } from "../routers/customers"

export function Routes(){
  const session = ""

  function Route() {
    switch (session) {
      case "admin":
        return <Admin /> 
      case "cliente":
        return <Customers /> 
      case "tecnico":
        return <Technical /> 
      default:
        return <Auth />
    }
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  )
}