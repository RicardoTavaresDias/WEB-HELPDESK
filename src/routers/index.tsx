import { BrowserRouter } from "react-router";
import { Admin } from "../routers/admin"
import { Auth } from "../routers/auth"

export function Routes(){

  return (
    <BrowserRouter>
      <Auth />
      <Admin />
    </BrowserRouter>
  )
}