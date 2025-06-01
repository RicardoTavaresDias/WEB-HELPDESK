import avatar from "../../../assets/img/Avatar.svg";
import penLine from "../../../assets/icon/pen-line.svg";
import { Status } from "../../../components/ui/status";

import { Panel, PanelMobile } from "../../../components/table/panel";
import { PanelRows, PanelRowsMobile } from "../../../components/table/panelRows";

import { Fragment } from "react";
import { Link } from "react-router";
import { called } from "../../../database/admCallList";

export function CallList() {

  return (
    <>
      <div className="w-full m-auto ">
        <span className="max-sm:hidden Text-Xl text-blue-dark">Chamados</span>
        <span className="lg:hidden text-xl font-semibold text-blue-dark">Chamados</span>

        <div className=" lg:mt-6 mt-4">
          <Panel type="lg" A1="Atualizado em" B1="Id" C1="Título e Serviço" D1="Valor total" E1="Cliente" F1="Técnico" G1="Status" > 
            {/* <Grid desktop row> */}
              {called.map((item) => (
                <Fragment key={item.id}>
                  <PanelRows>{item.date}</PanelRows>
                  <PanelRows>{item.id}</PanelRows>
                  <PanelRows>
                    <div>
                      <span className="flex flex-col Text-Sm ">
                        {item.service.title}
                      </span>
                      {item.service.description}
                    </div>
                  </PanelRows>
                  <PanelRows>{item.value}</PanelRows>
                  <PanelRows>
                    <div className="flex gap-2 justify-center items-center">
                      <img src={avatar} className="w-5 h-5" />
                      {item.customer.name}
                    </div>
                  </PanelRows>
                  <PanelRows>
                    <div className="flex gap-2 justify-center items-center">
                      <img src={avatar} className="w-5 h-5" />
                      {item.technical.name}
                    </div>
                  </PanelRows>
                  <PanelRows>
                    <Status type={item.status as "open" | "progress" | "close"} />
                  </PanelRows>
                  <PanelRows>
                    <Link to={`/chamados/${item.id}`} >
                      <img
                        className="w-7 h-7 min-w-4 min-h-4 rounded-md cursor-pointer hover:bg-gray-500 p-1"
                        src={penLine}
                      />
                    </Link>
                  </PanelRows>
                </Fragment>
              ))}
              {/* </Grid desktop row> */}
          </Panel>

          <PanelMobile type="lg" A1="Atualizado em" B1="Título e Serviço" C1="Status">
            {called.map((item) => (
                <Fragment key={item.id}>
                  <PanelRowsMobile>{item.date}</PanelRowsMobile>
                  <PanelRowsMobile>
                    <div>
                      <span className="flex flex-col text-sx font-bold mb-1">
                        {item.service.title}
                      </span>
                      {item.service.description}
                    </div>
                  </PanelRowsMobile>
                  <PanelRowsMobile>
                    <Status type={item.status as "open" | "progress" | "close"} mobile={true} />
                  </PanelRowsMobile>
                  <PanelRowsMobile>
                    <Link to={`/chamados/${item.id}`} >
                      <img className="w-7 h-7 rounded-md cursor-pointer hover:bg-gray-500 p-1" src={penLine} />
                    </Link>
                  </PanelRowsMobile>
                </Fragment>
              ))}
            </PanelMobile>
        </div>
      </div>
    </>
  )
}