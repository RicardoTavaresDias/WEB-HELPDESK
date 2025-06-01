import { Panel, PanelMobile } from "../../../components/table/panel";
import { PanelRows, PanelRowsMobile } from "../../../components/table/panelRows";
import avatar from "../../../assets/img/Avatar.svg"
import penLine from "../../../assets/icon/pen-line.svg";
import remove from "../../../assets/icon/trash.svg"

import { useState } from "react";
import { Modal } from "../../../components/modal/modal";
import { Input } from "../../../components/ui/input";


export function Customers(){
  const [modalRemove, setModalRemove] = useState(false)
  const [modalEdition, setModalEdition] = useState(false)

  return (
    <>
      <Modal isModal={modalRemove} type="twoButton" title="Cliente" closeModal={() => setModalRemove(!modalRemove)} save={() => {alert("sim, Escluido"); setModalRemove(!modalRemove)}} >
        <div className="w-90">
          <span className="Text-md text-gray-200">Deseja realmente excluir <b>André Costa?</b></span>
          <p className="text-gray-200 Text-md mt-5 max-sm:w-75">Ao excluir, todos os chamados deste cliente serão removidos e esta ação não poderá ser desfeita.</p>
        </div>
      </Modal>

      <Modal isModal={modalEdition} title="Cliente" closeModal={() => setModalEdition(!modalEdition)} save={() => {alert("salvo com sucesso"); setModalEdition(!modalEdition)}} >
        <div>
          <img src={avatar} className="w-12 h-12"/>
          <div className="pt-5">
            <Input type="text" label="nome" value="André Costa"/>
            <Input type="text" label="e-mail" value="andre.costa@client.com"/>
          </div>
        </div>        
      </Modal>

      <div className="flex justify-between lg:items-center max-sm:flex-col">
        <span className="max-sm:hidden Text-Xl text-blue-dark text-xl font-bold">Clientes</span>
        <span className="lg:hidden text-xl font-bold text-blue-dark">Clientes</span>
      </div>

      <div className="lg:mt-6 mt-4 mb-25">
        <Panel type="sm" A1="Nome" B1="E-mail">
          <PanelRows>
            <div className="flex gap-3 items-center">
              <img src={avatar} className="w-7 h-7"/>
              <span className="">André Costa</span>
            </div>
          </PanelRows>
          <PanelRows>
            julia.maria@client.com
          </PanelRows>
          <PanelRows>
            <div className="flex gap-2 w-full justify-end">
              <button onClick={() => setModalRemove(!modalRemove)}>
                <img
                  className="w-7 h-7 min-w-4 min-h-4 rounded-md cursor-pointer hover:bg-gray-500 p-1.5"
                  src={remove}
                />
              </button>
              <button onClick={() => setModalEdition(!modalEdition)}>
                <img
                  className="w-7 h-7 min-w-4 min-h-4 rounded-md cursor-pointer hover:bg-gray-500 p-1.5"
                  src={penLine}
                />
              </button >
            </div>
          </PanelRows>
        </Panel>

        <PanelMobile type="md" A1="Nome" B1="E-mail">
          <PanelRowsMobile>
            <div className="flex gap-3 items-center">
              <img src={avatar} className="w-7 h-7"/>
              <span className="">André Costa</span>
            </div>
          </PanelRowsMobile>
          <PanelRowsMobile>
            <span className="truncate">julia.maria@client.com</span>
          </PanelRowsMobile>
          <PanelRowsMobile>
            <div className="flex gap-2">
              <button onClick={() => setModalRemove(!modalRemove)}>
                <img
                  className="w-7 h-7 min-w-4 min-h-4 rounded-md cursor-pointer hover:bg-gray-500 p-1.5"
                  src={remove}
                />
              </button>
              <button onClick={() => setModalEdition(!modalEdition)}>
                <img
                  className="w-7 h-7 min-w-4 min-h-4 rounded-md cursor-pointer hover:bg-gray-500 p-1.5"
                  src={penLine}
                />
              </button>
            </div>
          </PanelRowsMobile>
        </PanelMobile>
      </div>
    </>
  )
}