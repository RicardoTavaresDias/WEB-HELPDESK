import { useLocation } from "react-router"
import { Link } from "react-router"
import { IconPlus } from "../../assets/icon/iconPlus"
import { IconCicleUser } from "../../assets/icon/iconCicleUser"
import { IconBriefcaseBusiness } from "../../assets/icon/iconBriefcaseBusiness"
import { IconWrench } from "../../assets/icon/iconWrench"
import { IconClipboardList } from "../../assets/icon/iconClipboardList"

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
              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "chamados" ? button.active : button.notActive} cursor-pointer rounded-md h-11 group`}>
                <IconClipboardList className={`ml-3 w-5 h-5  ${currentPath === "chamados" ? "fill-gray-600" : "fill-gray-400 group-hover:fill-gray-500" }`} />
                <Link to="/chamados" >Chamados</Link>
              </li>

              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "tecnicos" ? button.active : button.notActive} cursor-pointer rounded-md h-11 group`}>
                <IconCicleUser className={`ml-3 w-5 h-5  ${currentPath === "tecnicos" ? "fill-gray-600" : "fill-gray-400 group-hover:fill-gray-500" }`} />
                <Link to="/tecnicos" >Técnicos</Link>
              </li>

            
              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "clientes" ? button.active : button.notActive} cursor-pointer rounded-md h-11 group`}>
                <IconBriefcaseBusiness className={`ml-3 w-5 h-5  ${currentPath === "clientes" ? "fill-gray-600" : "fill-gray-400 group-hover:fill-gray-500" }`} />
                <Link to="/clientes" >Clientes</Link>
              </li>

              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "servicos" ? button.active : button.notActive} cursor-pointer rounded-md h-11 group`}>
                <IconWrench className={`ml-3 w-5 h-5  ${currentPath === "servicos" ? "fill-gray-600" : "fill-gray-400 group-hover:fill-gray-500" }`} />
                <Link to="/servicos" >Serviços</Link>
              </li>
            </>
          }

          {element === "técnico" &&
            <>
              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "chamados" ? button.active : button.notActive} cursor-pointer rounded-md h-11 group`}>
                <IconClipboardList className={`ml-3 w-5 h-5  ${currentPath === "chamados" ? "fill-gray-600" : "fill-gray-400 group-hover:fill-gray-500" }`} />
                <Link to="/chamados" >Meus Chamados</Link>
              </li>
            </>
          }
          
          {element === "cliente" &&
            <>
              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "chamados" ? button.active : button.notActive} cursor-pointer rounded-md h-11 group`}>
                <IconClipboardList className={`ml-3 w-5 h-5  ${currentPath === "chamados" ? "fill-gray-600" : "fill-gray-400 group-hover:fill-gray-500" }`} />
                <Link to="/chamados" >Meus Chamados</Link>
              </li>

              {/* Arrumar Icon, remover fill */}
              <li className={`flex items-center gap-3 Text-Sm ${currentPath === "criar_chamado" ? button.active : button.notActive} cursor-pointer rounded-md h-11 group`}>
                <IconPlus className={`ml-3 w-5 h-5  ${currentPath === "chamados" ? "fill-gray-600" : "fill-gray-400 group-hover:fill-gray-500" }`} />
                <Link to="/criar_chamado" >Criar chamado</Link>
              </li>
            </>
          }

        </ul>
      </div>
    </>
  )
}