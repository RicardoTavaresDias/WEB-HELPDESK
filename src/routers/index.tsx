import { BrowserRouter } from "react-router";
import { Admin } from "../routers/admin"

export function Routes(){

  return (
    <BrowserRouter>
      <Admin />
    </BrowserRouter>
  )
}