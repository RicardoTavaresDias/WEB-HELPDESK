import { Panel } from "../../../components/table";
import avatar from "../../../assets/img/Avatar.svg"
import { IconPenLine } from "../../../assets/icon/iconPenLine";
import { IconTrash } from "../../../assets/icon/iconTrash";
import { useState } from "react";
import { Modal } from "../../../components/modal/";
import { Input } from "../../../components/ui/input";
import { Modules } from "../../../components/modules";
import { PanelColumn } from "../../../components/table/panelColumn";
import { UiButton } from "../../../components/ui/UiButton";

export function Customers(){
  const [modalRemove, setModalRemove] = useState(false)
  const [modalEdition, setModalEdition] = useState(false)

  return (
    <>
      <Modal.Root isActive={modalRemove}>
        <Modal.Title onClose={() => setModalRemove(!modalRemove)} title="Cliente" />
        <Modal.Context>
          <span className="Text-md text-gray-200">Deseja realmente excluir <b>André Costa?</b></span>
          <p className="text-gray-200 Text-md mt-5 max-sm:w-75">Ao excluir, todos os chamados deste cliente serão removidos e esta ação não poderá ser desfeita.</p>
        </Modal.Context>
        <Modal.Actions>
          <UiButton typeSize="lg" typeColor="gray" onClick={() => setModalRemove(!modalRemove)} >Cancelar</UiButton>
          <UiButton typeSize="lg" typeColor="black" >Sim, excluir</UiButton>
        </Modal.Actions>
      </Modal.Root>

      <Modal.Root isActive={modalEdition} >
        <Modal.Title title="Cliente" onClose={() => setModalEdition(!modalEdition)}/>
        <Modal.Context>
          <div>
            <img src={avatar} className="w-12 h-12"/>
            <div className="pt-5">
              <Input type="text" label="nome" value="André Costa"/>
              <Input type="text" label="e-mail" value="andre.costa@client.com"/>
            </div>
          </div>  
        </Modal.Context>
        <Modal.Actions>
          <UiButton typeSize="xl" typeColor="black" >Salvar</UiButton>
        </Modal.Actions>
      </Modal.Root>

      <Modules.Root>
        <Modules.Title title="Clientes" />

        <div className="lg:mt-9">
          <Panel.Root className="grid-cols-[48%_auto_10%]">
            <PanelColumn>Nome</PanelColumn>
            <PanelColumn>E-mail</PanelColumn>
            <PanelColumn>Icon</PanelColumn>
            
            <Panel.Rows>
              <div className="flex gap-3 items-center">
                <img src={avatar} className="w-7 h-7"/>
                <span className="">André Costa</span>
              </div>
            </Panel.Rows>
            <Panel.Rows>julia.maria@client.com</Panel.Rows>
            <Panel.Rows>
              <UiButton typeColor="hoverGray" typeSize="xxs" icon={IconTrash} onClick={() => setModalRemove(!modalRemove)} />
              <UiButton typeColor="hoverGray" typeSize="xxs" icon={IconPenLine} onClick={() => setModalEdition(!modalEdition)} />
            </Panel.Rows>
          </Panel.Root>
        </div>
      </Modules.Root>

      {/* Mobile */}
      <Panel.Root mobile={true} className="grid-cols-[40%_35%_auto]" >
        <PanelColumn>Nome</PanelColumn>
        <PanelColumn>E-mail</PanelColumn>
        <PanelColumn>Icon</PanelColumn>

        <Panel.Rows>
            <div className="flex gap-3 items-center">
              <img src={avatar} className="w-7 h-7"/>
              <span className="truncate">André Costa</span>
            </div>
          </Panel.Rows>
          <Panel.Rows><span className="truncate">julia.maria@client.com</span></Panel.Rows>
          <Panel.Rows>
            <UiButton typeColor="hoverGray" typeSize="xxs" icon={IconTrash} onClick={() => setModalRemove(!modalRemove)} />
            <UiButton typeColor="hoverGray" typeSize="xxs" icon={IconPenLine} onClick={() => setModalEdition(!modalEdition)} />
          </Panel.Rows>
        </Panel.Root>
        {/* Mobile */}
    </>
  )
}