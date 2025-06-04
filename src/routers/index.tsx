import { BrowserRouter } from "react-router";
import { Admin } from "../routers/admin"
import { Auth } from "../routers/auth"
import { Technical } from "../routers/technical"

export function Routes(){

  return (
    <BrowserRouter>
      <Auth />
      {/* <Admin /> */}
      <Technical />
    </BrowserRouter>
  )
}