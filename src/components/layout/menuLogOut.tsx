import circleUser from "../../assets/icon/circle-user.svg"
import logOut from "../../assets/icon/log-out.svg"
import avatar from "../../assets/img/Avatar.svg"

type Props = {
  classmobile?: string
  classLg?: string
}

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router"

export function MenuLogOut({ classLg, classmobile }: Props){
  const [open, setOpen] =useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Fecha o menu se clicar fora
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div ref={menuRef}>

      <img className="w-10 h-10 rounded-full cursor-pointer" src={avatar} alt="Foto do Perfil" onClick={() => setOpen(!open)}/>
        <div className={`${classmobile} ${classLg} ${open ? "max-sm:scale-y-100 lg:scale-x-100" : "max-sm:scale-y-0 lg:scale-x-0" } origin-left max-sm:origin-top absolute z-20 duration-200 bg-gray-100 flex flex-col gap-3 rounded-xl p-4`}>
       
          <div className="flex"> 
            <span className="Text-Xxs text-gray-400">opções</span>
          </div>

          <div>
            <ul className="mt-1 flex flex-col gap-1">
              <li className="flex items-center gap-3 Text-Sm text-gray-400 cursor-pointer rounded-md h-11 hover:bg-gray-200 hover:text-gray-600">
                <img src={circleUser} className="ml-3 w-5 h-5" />
                <a href="#" className="">Perfil</a>
              </li>

              <li className="flex items-center gap-3 Text-Sm text-feedback-danger cursor-pointer rounded-md h-11 hover:bg-gray-200">
                <img src={logOut} className="ml-3 w-5 h-5"  />
                <Link to="/servicos" >Sair</Link>
              </li>
            </ul>
          </div>

        </div>
  
    </div>
  )
}