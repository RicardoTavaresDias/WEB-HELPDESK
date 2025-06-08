import { BrowserRouter } from "react-router";
import { Admin } from "../routers/admin"
import { Auth } from "../routers/auth"
import { Technical } from "../routers/technical"
import { Customers } from "../routers/customers"

import { useProfile } from "../hooks/useProfile" // remover

export function Routes(){
  const { teste } = useProfile() // remover

  function Route() {
    switch (teste) {
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




// Remover
// ProfileContext.tsx
// signin
// menuLogOut.tsx