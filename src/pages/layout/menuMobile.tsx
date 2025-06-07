import menu from "../../assets/icon/menu.svg"
import x from "../../assets/icon/x.svg"
import { Menu } from "./menu"

import { useOpenModal } from "../../hooks/useOpenModal"

export function MenuMobile({ element }: any){
  const { open, menuRef, setOpen } = useOpenModal()

  return (
    <div ref={menuRef}>
      <button className="group" onClick={() => setOpen(!open)}>
          <img className="w-5 h-5 cursor-pointer" src={open ? x : menu} alt="menu mobile" onClick={() => setOpen(!open)} />
          <div className={`absolute left-3 top-24 z-10 ${open ? "scale-y-100" : "scale-y-0"} origin-top duration-200 bg-gray-100 flex flex-col gap-3 w-87 rounded-xl p-4`} >
            <div className="flex"> 
              <span className="Text-Xxs text-gray-400">Menu</span>
            </div>
              <Menu element={element} /> 
            </div>
        </button>
      </div>
  )
}