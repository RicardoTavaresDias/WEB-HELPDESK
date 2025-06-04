import menu from "../../assets/icon/menu.svg"
import x from "../../assets/icon/x.svg"
import { Menu } from "./menu"

import { useState, useRef, useEffect } from "react"

export function MenuMobile({ element }: any){
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
      <button className="group" >
          <img className="w-5 h-5 cursor-pointer" src={open ? x : menu} alt="menu mobile" onClick={() => setOpen(!open)} />
          <div className={`absolute left-3 top-24 z-10 ${open ? "scale-y-100" : "scale-y-0"} origin-top duration-200 bg-gray-100 flex flex-col gap-3 w-87 rounded-xl p-4`} >
            <div className="flex"> 
              <span className="Text-Xxs text-gray-400">Menu</span>
            </div>
              <button onClick={() => setOpen(!open)} >
                <Menu element={element} />
              </button>
            </div>
        </button>
      </div>
  )
}