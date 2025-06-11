import { BrowserRouter } from "react-router";
import { Admin } from "../routers/admin"
import { Auth } from "../routers/auth"
import { Technical } from "../routers/technical"
import { Customers } from "../routers/customers"

import { useAuth } from "../hooks/useAuth"

export function Routes(){
  const { session, isLoading } = useAuth()

  function Route() {
    switch (session?.user.role) {
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

  if(isLoading){
    return (
      <>
        <div className="w-screen h-screen bg-white flex justify-center items-center text-[90px] max-sm:text-[45px] ">
          Carregando....
        </div>
      </>
    )
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  )
}


/**
 * Ultimas Atualizações
 * 
 * criado AuthContext.tsx
 * criado response.ts
 * adicionado session router
 * menuLogOut.tsx adicionado remove()
 * signin adicionado save()
 * 
 */