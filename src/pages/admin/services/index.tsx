import { Modules } from "../../../components/modules"
import { Panel } from "../../../components/table"

import { IconPenLine } from "../../../assets/icon/iconPenLine"
import { IconBan } from "../../../assets/icon/iconBan"
import { IconCicloCheck } from "../../../assets/icon/iconCicloCheck"

import { Status } from "../../../components/ui/status"
import { Modal } from "../../../components/modal"

import { useState } from "react";
import { Input } from "../../../components/ui/input"
import { UiButton } from "../../../components/ui/UiButton"
import { IconPlus } from "../../../assets/icon/iconPlus"

export function Services(){
  const [modalNew, setModalNew] = useState(false)
  const [modalEdition, setModalEdition] = useState(false)
  const [status, setStatus] = useState(true)

  return (
    <>
      <Modal.Root isActive={modalNew} >
        <Modal.Title title="Cadastro de serviço" onClose={() => setModalNew(!modalNew)} />
        <Modal.Context>
          <Input type="text" label="Título" placeholder="Nome do serviço"/>
          <Input type="text" label="Valor" placeholder="R$ 0,00" />
        </Modal.Context>
        <Modal.Actions>
          <UiButton typeSize="xl" typeColor="black">Salvar</UiButton>
        </Modal.Actions>
      </Modal.Root>

      <Modal.Root isActive={modalEdition}>
        <Modal.Title title="Cadastro de serviço" onClose={() => setModalEdition(!modalEdition)}/>
        <Modal.Context>
          <Input type="text" label="Título"  value="Instalação de rede" />
          <Input type="text" label="Valor" value="R$ 180,00" />
        </Modal.Context>
        <Modal.Actions>
          <UiButton typeSize="xl" typeColor="black">Salvar</UiButton>
        </Modal.Actions>
      </Modal.Root>

      <div className="mb-7">
        <Modules.Title title="Técnicos" isButton={true} >
          <UiButton icon={IconPlus} typeColor="black" typeSize="xs" color="#F9FAFA" onClick={() => setModalNew(!modalNew)} >{<span className="max-sm:hidden">Novo</span>}</UiButton>
        </Modules.Title>
      </div>

      <Panel.Root className="2xl:grid-cols-[auto_auto_10%_12%] lg:grid-cols-[auto_auto_10%_15%]">
        <Panel.Column>Título</Panel.Column>
        <Panel.Column>Valor</Panel.Column>
        <Panel.Column>Status</Panel.Column>
        <Panel.Column>Icon</Panel.Column>

        <Panel.Rows>Instalação de Rede</Panel.Rows>
        <Panel.Rows>R$ 180,00</Panel.Rows>
        <Panel.Rows>
          <Status type={status ? "active" : "inactive"} isButton={true} />
        </Panel.Rows>
        <Panel.Rows>
          <div className="flex items-center gap-1 mr-1">
            {status && <><UiButton typeColor="hoverGray" typeSize="xxs" icon={IconBan} onClick={() => setStatus(!status)} />Desativar</>}
            {!status && <><UiButton typeColor="hoverGray" typeSize="xxs" icon={IconCicloCheck} onClick={() => setStatus(!status)} />Reativar</>}
          </div>
          <UiButton typeColor="hoverGray" typeSize="xxs" icon={IconPenLine} onClick={() => setModalEdition(!modalEdition)} />
        </Panel.Rows>
      </Panel.Root>

      {/* Mobile */}
      <Panel.Root className="grid-cols-[24%_auto_21%_24%]" mobile={true}>
        <Panel.Column>Título</Panel.Column>
        <Panel.Column>Valor</Panel.Column>
        <Panel.Column>Status</Panel.Column>
        <Panel.Column>Icon</Panel.Column>

        <Panel.Rows>
          <span className="truncate">Instalação de Rede</span>
        </Panel.Rows>
        <Panel.Rows>R$ 180,00</Panel.Rows>
        <Panel.Rows>
          <Status type={status ? "active" : "inactive"} isButton={false} />
        </Panel.Rows>
        <Panel.Rows>
          <div className="flex items-center gap-1 mr-0.5">
            {status && <UiButton typeColor="hoverGray" typeSize="xxs" icon={IconBan} onClick={() => setStatus(!status)} />}
            {!status && <UiButton typeColor="hoverGray" typeSize="xxs" icon={IconCicloCheck} onClick={() => setStatus(!status)} />}
          </div>
          <UiButton typeColor="hoverGray" typeSize="xxs" icon={IconPenLine} onClick={() => setModalEdition(!modalEdition)} />
        </Panel.Rows>
      </Panel.Root>
      {/* Mobile */}
    </>
  )
}