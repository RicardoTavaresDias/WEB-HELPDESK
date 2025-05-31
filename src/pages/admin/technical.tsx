import { Panel, PanelMobile } from "../../components/table/panel"
import { PanelRows, PanelRowsMobile } from "../../components/table/panelRows"
import avatar from "../../assets/img/Avatar.svg"
import penLine from "../../assets/icon/pen-line.svg";
import plus from "../../assets/icon/plus.svg"
import { Link } from "react-router"
import { Button } from "../../components/ui/button";

export function Technical(){
  return (
    <>
      <div className="flex justify-between items-center max-w-[1280px] m-auto">
        <span className="max-sm:hidden Text-Xl text-blue-dark">Técnicos</span>
        <span className="lg:hidden text-xl font-semibold text-blue-dark">Técnicos</span>
        <Button type="md" typeColor="black">
          <Link to={"/tecnicos/novo"}>
            <div className="flex items-center gap-2 lg:mx-1">
              <img src={plus} className="w-4 h-4" />
              <span className="max-sm:hidden">Novo</span>
            </div>
          </Link>
        </Button>
      </div>

      <div className=" lg:mt-6 mt-4 mb-25">
        {/* Desktop */}
        <Panel type="md" A1="Nome" B1="E-mail" C1="Disponibilidade">
          <PanelRows>
            <div className="flex gap-2 justify-center items-center">
              <img src={avatar} className="w-5 h-5" />
              Carlos Silva	
            </div>
          </PanelRows>

          <PanelRows>
            carlos.silva@test.com
          </PanelRows>

          <PanelRows>
            <div className="flex gap-2 justify-center items-center">
              <div className="border border-gray-500 p-1.5 rounded-2xl text-gray-300 Text-Sx cursor-pointer">
                08:00
              </div>
              <div className="border border-gray-500 p-1.5 rounded-2xl text-gray-300 Text-Sx cursor-pointer">
                09:00
              </div>
              <div className="border border-gray-500 p-1.5 rounded-2xl text-gray-300 Text-Sx cursor-pointer">
                10:00
              </div>
              <div className="border border-gray-500 p-1.5 rounded-2xl text-gray-300 Text-Sx cursor-pointer">
                11:00
              </div>
              <div className="border border-gray-500 p-1.5 rounded-2xl text-gray-300 Text-Sx cursor-pointer">
                +4
              </div>
            </div>
          </PanelRows>

          <PanelRows>
            <Link to={"/tecnicos/edicao"} >
              <img
                className="w-7 h-7 min-w-4 min-h-4 rounded-md cursor-pointer hover:bg-gray-500 p-1"
                src={penLine}
              />
            </Link>
          </PanelRows>
        </Panel>
        {/* Desktop */}


        {/* Mobile */}
        <PanelMobile type="md" A1="Nome" B1="Disponibilidade">
          <PanelRowsMobile>
            <div className="flex gap-2 justify-center items-center">
              <img src={avatar} className="w-5 h-5" />
              Carlos Silva	
            </div>
          </PanelRowsMobile>

          <PanelRowsMobile>
            <div className="flex gap-2 justify-center items-center">
              <div className="border border-gray-500 p-1.5 rounded-2xl text-gray-300 Text-Sx cursor-pointer">
                08:00
              </div>
              <div className="border border-gray-500 p-1.5 rounded-2xl text-gray-300 Text-Sx cursor-pointer">
                +4
              </div>
            </div>
          </PanelRowsMobile>
        
          <PanelRowsMobile>
            <Link to={"/tecnicos/edicao"} >
              <img
                className="w-7 h-7 min-w-4 min-h-4 rounded-md cursor-pointer hover:bg-gray-500 p-1"
                src={penLine}
              />
              </Link>
          </PanelRowsMobile>
        </PanelMobile>
        {/* Mobile */}
      </div>
    </>
  )
}