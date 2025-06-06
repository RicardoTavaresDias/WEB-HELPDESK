import clipboardList from "../../assets/icon/clipboard-list.svg"
import circleUser from "../../assets/icon/circle-user.svg"
import wrench from "../../assets/icon/wrench.svg"
import briefcaseBusiness from "../../assets/icon/briefcase-business.svg"
import plus from "../../assets/icon/plus.svg"

import { useLocation } from "react-router"
import { Link } from "react-router"

export function Menu({ element }: any){
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1]

  const button = {
    active: "text-gray-600 bg-blue-dark",
    notActive: "text-gray-400 hover:bg-gray-200 hover:text-gray-600 "
  }

  return (
    <>
      <div>
        <ul className="mt-4 flex flex-col gap-1">

          {element === "admin" &&
            <>
              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "chamados" ? button.active : button.notActive} cursor-pointer rounded-md h-11`}>
                <img src={clipboardList} className="ml-3 w-5 h-5" />
                <Link to="/chamados" >Chamados</Link>
              </li>

              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "tecnicos" ? button.active : button.notActive} cursor-pointer rounded-md h-11`}>
                <img src={circleUser} className="ml-3 w-5 h-5" />
                <Link to="/tecnicos" >Técnicos</Link>
              </li>

            
              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "clientes" ? button.active : button.notActive} cursor-pointer rounded-md h-11`}>
                <img src={briefcaseBusiness} className="ml-3 w-5 h-5" />
                <Link to="/clientes" >Clientes</Link>
              </li>

              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "servicos" ? button.active : button.notActive} cursor-pointer rounded-md h-11`}>
                <img src={wrench} className="ml-3 w-5 h-5" />
                <Link to="/servicos" >Serviços</Link>
              </li>
            </>
          }

          {element === "técnico" &&
            <>
              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "chamados" ? button.active : button.notActive} cursor-pointer rounded-md h-11`}>
                <img src={clipboardList} className="ml-3 w-5 h-5" />
                <Link to="/chamados" >Meus Chamados</Link>
              </li>
            </>
          }

          {element === "cliente" &&
            <>
              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "chamados" ? button.active : button.notActive} cursor-pointer rounded-md h-11`}>
                <img src={clipboardList} className="ml-3 w-5 h-5" />
                <Link to="/chamados" >Meus Chamados</Link>
              </li>

              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "criar_chamado" ? button.active : button.notActive} cursor-pointer rounded-md h-11`}>
                <img src={plus} className="ml-3 w-5 h-5" />
                <Link to="/criar_chamado" >Criar chamado</Link>
              </li>
            </>
          }

        </ul>
      </div>
    </>
  )
}