import Vector from "../../assets/img/Vector.svg"

import { Outlet } from 'react-router'
import { Menu } from "./menu"
import { MenuMobile } from "./menuMobile"
import { MenuLogOut } from "./menuLogOut"

type Props = {
  identification?: string
}

export function Layout({identification}: Props){
  return (
    
    <>
      <aside className="bg-gray-100 w-full h-screen relative p-6 lg:p-4" >
         {/* <Header, Menu Mobile> */}
        <div className="flex justify-between items-center lg:flex-col lg:w-42 lg:pt-3 lg:py-6">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <MenuMobile element={identification} />
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
                  <span className="Text-Xxs leading-3.5 font-normal text-blue-light" >{identification}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <button className="group">
              <MenuLogOut classmobile="left-3 top-24 w-87"/>
            </button>
          </div>
        </div>
        {/* </Header, Menu Mobile> */}

        {/* <Menu Desktop> */}
        <nav className="max-sm:hidden w-fit ">
          <div className="flex flex-col justify-between h-[calc(100vh-120px)] overflow-auto">
            <div className="max-sm:hidden lg:w-46">
              <Menu element={identification} />
            </div>

            <div>
              
                <div className="flex gap-3 items-center">
                  <button className="group">
                    <div>
                      <MenuLogOut classmobile="left-56 top-[calc(100vh-170px)] w-50"/>
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
        </nav>
        {/* </Menu Desktop> */}
      </aside>
   
      {/* </Conteúdo> */}
      <section className={` overflow-auto fixed bg-gray-600 lg:right-0 lg:left-55 h-screen max-sm:w-screen max-sm:rounded-3xl lg:rounded-tl-3xl lg:top-2.5 top-23`}>

          <div className=" px-6 py-7 lg:px-12 lg:py-13">
            <Outlet />
          </div>
      
      </section>
      {/* </Conteúdo> */}
    </>
  )
}