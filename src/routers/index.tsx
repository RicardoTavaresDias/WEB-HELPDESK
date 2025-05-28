import { BrowserRouter } from "react-router";
import { Auth } from "./auth";
import { Admin } from "../routers/admin"

export function Routes(){

  return (
    <BrowserRouter>
      <Admin />
    </BrowserRouter>
  )
}