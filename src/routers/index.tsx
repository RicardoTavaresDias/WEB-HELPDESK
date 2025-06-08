import { BrowserRouter } from "react-router";
import { Admin } from "../routers/admin"
import { Auth } from "../routers/auth"
import { Technical } from "../routers/technical"
import { Customers } from "../routers/customers"

export function Routes(){

  return (
    <BrowserRouter>
      <Auth />
      <Admin />
      {/* <Technical /> */}
      {/* <Customers /> */}
    </BrowserRouter>
  )
}