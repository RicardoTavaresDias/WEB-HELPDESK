import avatar from "../../assets/img/Avatar.svg";
import penLine from "../../assets/icon/pen-line.svg";
import { Status } from "../../components/ui/status";

import { Panel, PanelMobile } from "../../components/table/panel";
import { PanelRows, PanelRowsMobile } from "../../components/table/panelRows";

import { useState, Fragment } from "react";

const chamados = [
  {
    id: "00003",
    date: "13/04/25 20:56",
    service: { title: "Rede lenta	", description: "Instalação de Rede	" },
    value: "R$ 180,00",
    customer: { avatar: "avatar", name: "André Costa" },
    technical: { avatar: "avatar", name: "Carlos Silva	" },
    status: "open",
  },
  {
    id: "00004",
    date: "12/04/25 15:20",
    service: {
      title: "Backup não está funcionando	",
      description: "Recuperação de Dados	",
    },
    value: "R$ 200,00",
    customer: { avatar: "avatar", name: "André Costa" },
    technical: { avatar: "avatar", name: "Carlos Silva	" },
    status: "open",
  },
  {
    id: "00001",
    date: "12/04/25 09:01",
    service: {
      title: "Computador não liga",
      description: "Manutenção de Hardware	",
    },
    value: "R$ 150,00",
    customer: { avatar: "avatar", name: "Aline Souza" },
    technical: { avatar: "avatar", name: "Carlos Silva	" },
    status: "progress",
  },
  {
    id: "00002",
    date: "10/04/25 10:15",
    service: {
      title: "Instalação de software de gestão",
      description: "Suporte de Software",
    },
    value: "R$ 200,00",
    customer: { avatar: "avatar", name: "Julia Maria" },
    technical: { avatar: "avatar", name: "Ana Oliveira" },
    status: "progress",
  },
  {
    id: "00005",
    date: "11/04/25 15:16",
    service: {
      title: "Meu fone não conecta no computador",
      description: "Suporte de Software	",
    },
    value: "R$ 80,00",
    customer: { avatar: "avatar", name: "Suzane Moura" },
    technical: { avatar: "avatar", name: "Ana Oliveira" },
    status: "close",
  },
];

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
