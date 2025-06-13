import { Menu } from "./menu"
import { useOpenModal } from "../hooks/useOpenModal"
import { IconMobile } from "../assets/icon/iconMobile"

export function MenuMobile({ element }: any){
  const { open, menuRef, setOpen } = useOpenModal()

  return (
    <div ref={menuRef}>
      <button type="button" className="group" onClick={() => setOpen(!open)} >
        <IconMobile className="w-10 h-10 cursor-pointer fill-gray-600 bg-gray-200 p-2.5 rounded" isActive={open} />
      </button>

      <div className={`absolute left-3 top-24 z-10 ${open ? "scale-y-100" : "scale-y-0"} origin-top duration-200 bg-gray-100 flex flex-col gap-3 w-87 rounded-xl p-4`} >
        <div className="flex"> 
          <span className="Text-Xxs text-gray-400">Menu</span>
        </div>
        <Menu element={element} /> 
      </div>
    </div>
  )
}