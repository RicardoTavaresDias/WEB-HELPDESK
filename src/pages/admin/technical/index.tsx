import { Panel, PanelMobile } from "../../../components/table/panel"
import { PanelRows, PanelRowsMobile } from "../../../components/table/panelRows"
import avatar from "../../../assets/img/Avatar.svg"
import penLine from "../../../assets/icon/pen-line.svg";
import { Link } from "react-router"
import { ButtonTime } from "../../../components/ui/buttonTime";
import { DetailsHeaderButton } from "../../../components/details/detailsHeaderButton"

export function Technical(){
  return (
    <>
      <DetailsHeaderButton header={"Técnicos"} link="/tecnicos/novo" />

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
              <ButtonTime type="read">08:00</ButtonTime>
              <ButtonTime type="read">09:00</ButtonTime>
              <ButtonTime type="read">10:00</ButtonTime>
              <ButtonTime type="read">11:00</ButtonTime>
              <ButtonTime type="read">+4</ButtonTime>
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
              <ButtonTime type="read" >08:00</ButtonTime>
              <ButtonTime type="read" >+4</ButtonTime>
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