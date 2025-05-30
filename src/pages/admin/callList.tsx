import avatar from "../../assets/img/Avatar.svg";
import penLine from "../../assets/icon/pen-line.svg";
import { Status } from "../../components/ui/status";

import { Panel, PanelMobile } from "../../components/table/panel";
import { PanelRows, PanelRowsMobile } from "../../components/table/panelRows";

import { useState, Fragment } from "react";
import { chamados } from "../../database/admCallList";

export function CallList() {
  const [items, setItems] = useState(chamados);

  return (
    <>
      <div>
        <span className="Text-Xl text-blue-dark">Chamados</span>
      </div>

      <div className=" lg:mt-6 mt-4 mb-25">
        <Panel type="lg" A1="Atualizado em" B1="Id" C1="Título e Serviço" D1="Valor total" E1="Cliente" F1="Técnico" G1="Status" > 
           {/* <Grid desktop row> */}
            {items.map((chamado) => (
              <Fragment key={chamado.id}>
                <PanelRows>{chamado.date}</PanelRows>
                <PanelRows>{chamado.id}</PanelRows>
                <PanelRows>
                  <div>
                    <span className="flex flex-col Text-Sm ">
                      {chamado.service.title}
                    </span>
                    {chamado.service.description}
                  </div>
                </PanelRows>
                <PanelRows>{chamado.value}</PanelRows>
                <PanelRows>
                  <div className="flex gap-2 justify-center items-center">
                    <img src={avatar} className="w-5 h-5" />
                    {chamado.customer.name}
                  </div>
                </PanelRows>
                <PanelRows>
                  <div className="flex gap-2 justify-center items-center">
                    <img src={avatar} className="w-5 h-5" />
                    {chamado.technical.name}
                  </div>
                </PanelRows>
                <PanelRows>
                  <Status type={chamado.status as "open" | "progress" | "close"} />
                </PanelRows>
                <PanelRows>
                  <button onClick={() => setItems((prev) => prev.filter((value) => value.id !== chamado.id))} >
                    <img
                      className="w-7 h-7 min-w-4 min-h-4 rounded-md cursor-pointer hover:bg-gray-500 p-1"
                      src={penLine}
                    />
                  </button>
                </PanelRows>
              </Fragment>
            ))}
            {/* </Grid desktop row> */}
        </Panel>

        <PanelMobile type="lg" A1="Atualizado em" B1="Título e Serviço" C1="Status">
          {items.map((chamado) => (
              <Fragment key={chamado.id}>
                <PanelRowsMobile>{chamado.date}</PanelRowsMobile>
                <PanelRowsMobile>
                  <div>
                    <span className="flex flex-col text-sx font-bold mb-1">
                      {chamado.service.title}
                    </span>
                    {chamado.service.description}
                  </div>
                </PanelRowsMobile>
                <PanelRowsMobile>
                  <Status type={chamado.status as "open" | "progress" | "close"} mobile={true} />
                </PanelRowsMobile>
                <PanelRowsMobile>
                  <button onClick={() => setItems((prev) => prev.filter((value) => value.id !== chamado.id))} >
                    <img className="w-7 h-7 rounded-md cursor-pointer hover:bg-gray-500 p-1" src={penLine} />
                  </button>
                </PanelRowsMobile>
              </Fragment>
            ))}
          </PanelMobile>
      </div>
    </>
  )
}