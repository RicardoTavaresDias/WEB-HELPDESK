import Vector from "@/assets/img/Vector.svg"

import { Outlet } from 'react-router'
import { Menu } from "./components/menu"
import { MenuMobile } from "./components/menuMobile"
import { MenuLogOut } from "./components/menuLogOut"
import { useAuth } from "@/hooks/useAuth"

type LayoutProps = {
  identification: "admin" | "técnico" | "cliente"
}

export function Layout({ identification }: LayoutProps){
  const { session } = useAuth()

  return (
    <>
      <aside className="bg-gray-100  h-[100dvh] relative lg:p-4 overflow-hidden" >
         {/* <Header, Menu Mobile> */}
        <div className="flex justify-between items-center lg:flex-col lg:w-42 lg:pt-3 overflow-hidden lg:py-6 p-6">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <MenuMobile element={identification} />
            </div>
            <div className="flex  items-center gap-3 w-max">
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
            <div className="group">
              <MenuLogOut classmobile="right-3 top-24 w-87" identification={identification}/>
            </div>
          </div>
        </div>
        {/* </Header, Menu Mobile> */}

        {/* <Menu Desktop> */}
        <nav className="max-sm:hidden w-fit ">
          <div className="flex flex-col justify-between h-[calc(100vh-120px)] overflow-auto ">
            <div className="max-sm:hidden lg:w-46 ">
              <Menu element={identification} />
            </div>

            <div>
              
                <div className="flex gap-3 items-center">
                  <div className="group">
                    <div>
                      <MenuLogOut classmobile={`left-56 ${identification === "admin" ? "top-[calc(100vh-110px)]" : "top-[calc(100vh-158px)]"}  w-50`} identification={identification} />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="text-gray-600 Text-Sm mb-1 w-28 truncate">{`${session?.user.name[0].toUpperCase()}${session?.user.name.substring(1)}`}</p>
                    </div>
                    <div className="w-28 truncate">
                      <p className="text-gray-400 Text-Xs w-28 truncate" >{session?.user.email}</p>
                    </div>
                  </div>
                </div>
                
            </div>

          </div>
        </nav>
        {/* </Menu Desktop> */}
      
        {/* </Conteúdo> */}
        <section className={`lg:fixed  overflow-auto inset-0 bg-gray-600 lg:right-0 lg:left-55 h-[100dvh] max-sm:w-full max-sm:rounded-2xl lg:rounded-tl-3xl lg:top-2.5 top-23`}>
          <div className=" p-4 py-7 lg:px-12 lg:py-13 max-sm:w-[375px] m-auto max-w-[1366px] max-sm:mb-20" >
            <Outlet />
          </div>
        </section>
        {/* </Conteúdo> */}
      </aside>
    </>
  )
}