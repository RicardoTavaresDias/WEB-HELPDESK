import Vector from "../../assets/img/Vector.svg"
import avatar from "../../assets/img/Avatar.svg"

import { Outlet } from 'react-router'
import { Menu } from "./menu"
import { MenuMobile } from "./menuMobile"
import { MenuLogOut } from "./menuLogOut"

export function Layout(){
  return (
    
    <>
      <aside className="bg-gray-100 w-full h-screen relative p-6 lg:p-4" >
         {/* <Header Logo> */}
        <div className="flex justify-between items-center lg:flex-col lg:w-42 lg:pt-3 lg:py-6">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">

              <MenuMobile />
            
            </div>
            <div className="flex  items-center gap-3">
              <div>
                <img className="w-10 h-10" src={Vector} alt="logotipo"/>
              </div>
              <div className="flex flex-col gap-0.5 mt-1">
                <div>
                  <h1 className="Text-Lg text-gray-600">HelpDesk</h1>
                </div>
                <div>
                  <span className="Text-Xxs leading-3.5 font-normal text-blue-light" >Admin</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden">

            <button className="group">
              <img className="w-10 h-10 rounded-full cursor-pointer" src={avatar} alt="Foto do Perfil"/>
              <MenuLogOut classmobile="left-3 top-24 w-87"/>
            </button>

          </div>
        </div>
        {/* </Header Logo> */}

        {/* <rodape usuario> */}
        <div className="max-sm:hidden w-fit ">
          <div className="flex flex-col  justify-between h-[calc(100vh-120px)] overflow-auto">
            <div className="max-sm:hidden border border-amber-300 lg:w-42">

              <Menu />

            </div>

            <div>
              
                <div className="flex gap-3 items-center">
                  <button className="group">
                    <div>
                      <img className="w-10 h-10 rounded-full cursor-pointer" src={avatar} alt="Foto do Perfil "/>
                      <MenuLogOut classmobile="left-51 top-[calc(100vh-170px)] w-49 "/>
                    </div>
                  </button>
                  <div>
                    <div>
                      <p className="text-gray-600 Text-Sm mb-1 w-28 truncate">Usuário Adm</p>
                    </div>
                    <div className="w-28 truncate">
                      <p className="text-gray-400 Text-Xs w-28 truncate" >user.adm@test.com</p>
                    </div>
                  </div>
                </div>
                
             
            </div>

          </div>
        </div>
        {/* </rodape usuario> */}
      </aside>
   
      <section className={` overflow-auto fixed bg-gray-600 lg:right-0 lg:left-50 h-screen max-sm:w-screen max-sm:rounded-3xl lg:rounded-tl-3xl lg:top-2.5 top-23`}>

          <div className=" px-6 py-7 lg:px-12 lg:py-13">
            <Outlet />
          </div>
      
      </section>
    </>
    
    
  )
}