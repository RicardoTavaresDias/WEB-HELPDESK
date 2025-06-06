import logOut from "../../assets/icon/log-out.svg"
import avatar from "../../assets/img/Avatar.svg"

import { useProfile } from "../../context"
import { Link } from "react-router"
import { useOpenModal } from "../../hooks/useOpenModal"
import { IconCicleUser } from "../../assets/icon/iconCicleUser"

type MenuLogOutProps = {
  classmobile?: string
  classLg?: string
  identification?: string
}

export function MenuLogOut({ classLg, classmobile, identification }: MenuLogOutProps){
  const { menuRef, open, setOpen } = useOpenModal()
  const { isModal }: any = useProfile()

  return (
    <div ref={menuRef}>

      <img className="w-10 h-10 rounded-full cursor-pointer" src={avatar} alt="Foto do Perfil" onClick={() => setOpen(!open)}/>
        <div className={`${classmobile} ${classLg} ${open ? "max-sm:scale-y-100 lg:scale-x-100" : "max-sm:scale-y-0 lg:scale-x-0" } origin-left max-sm:origin-top absolute z-20 duration-200 bg-gray-100 flex flex-col gap-3 rounded-xl p-4`}>
       
          <div className="flex"> 
            <span className="Text-Xxs text-gray-400">opções</span>
          </div>

          <div>
            <ul className="mt-1 flex flex-col gap-1">
              {identification === "admin" ||
                <button onClick={() => {setOpen(!open); isModal()}} >
                  <li className="flex items-center gap-3 Text-Sm text-gray-400 cursor-pointer rounded-md h-11 hover:bg-gray-200 hover:text-gray-600 group/user">
                    <IconCicleUser className="ml-3 w-5 h-5 fill-gray-400 group-hover/user:fill-gray-600" />
                    Perfil
                  </li>
                </button>
              }
              <Link to="/" >
                <li className="flex items-center gap-3 Text-Sm text-feedback-danger cursor-pointer rounded-md h-11 hover:bg-gray-200">
                  <img src={logOut} className="ml-3 w-5 h-5"  />
                  Sair
                </li>
              </Link>
               
            </ul>
          </div>
        </div>
    </div>
  )
}