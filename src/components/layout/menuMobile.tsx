import menu from "../../assets/icon/menu.svg"
import clipboardList from "../../assets/icon/clipboard-list.svg"
import circleUser from "../../assets/icon/circle-user.svg"
import wrench from "../../assets/icon/wrench.svg"

export function MenuMobile(){
  return (
     <button className="group">
        <img className="w-5 h-5 cursor-pointer" src={menu} alt="menu mobile" />
        <div className="absolute left-3 top-24 z-50 scale-y-0 group-focus:scale-y-100 origin-top duration-200 bg-gray-100 flex flex-col gap-3 w-87 rounded-xl p-4">
          <div className="flex"> 
            <span className="Text-Xxs text-gray-400">Menu</span>
          </div>

          <div>
            <ul className="mt-4 flex flex-col gap-1">
              <li className="flex items-center gap-3 Text-Sm text-gray-600 cursor-pointer rounded-md hover:bg-gray-200 h-11 active:bg-blue-dark">
                <img src={clipboardList} className="ml-3 w-5 h-5" />
                <a href="#" className="">Chamados</a>
              </li>

              <li className="flex items-center gap-3 Text-Sm text-gray-600 cursor-pointer rounded-md hover:bg-gray-200 h-11 active:bg-blue-dark">
                <img src={circleUser} className="ml-3 w-5 h-5" />
                <a href="#" className="">Técnicos</a>
              </li>

              <li className="flex items-center gap-3 Text-Sm text-gray-600 cursor-pointer rounded-md hover:bg-gray-200 h-11 active:bg-blue-dark">
                <img src={wrench} className="ml-3 w-5 h-5" />
                <a href="#" className="">Serviços</a>
              </li>
            </ul>
          </div>

          </div>
      </button>
  )
}