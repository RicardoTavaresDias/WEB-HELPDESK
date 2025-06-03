import { Modules } from "../../../components/modules"
import { Panel } from "../../../components/table"

import { IconPenLine } from "../../../assets/icon/iconPenLine"
import { IconBan } from "../../../assets/icon/iconBan"
import { IconCicloCheck } from "../../../assets/icon/iconCicloCheck"

import { Button } from "../../../components/ui/button"
import { Status } from "../../../components/ui/status"
import plus from "../../../assets/icon/plus.svg"
import { Modal } from "../../../components/modal"

import { useState } from "react";
import { Input } from "../../../components/ui/input"

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
        <div className="m-auto mb-5">
          <Button typeSize="xl" typeColor="black">Salvar</Button>
        </div>
      </Modal.Root>

      <Modal.Root isActive={modalEdition}>
        <Modal.Title title="Cadastro de serviço" onClose={() => setModalEdition(!modalEdition)}/>
        <Modal.Context>
          <Input type="text" label="Título"  value="Instalação de rede" />
          <Input type="text" label="Valor" value="R$ 180,00" />
        </Modal.Context>
        <div className="m-auto mb-5">
          <Button typeSize="xl" typeColor="black">Salvar</Button>
        </div>
      </Modal.Root>

      <div className="mb-7">
        <Modules.Title title="Técnicos" isButton={true} >
          <div className="max-sm:hidden">
            <Button typeColor="black" typeSize="sm" onClick={() => setModalNew(!modalNew)}>
              <div className="flex gap-2 items-center"><img src={plus} className="w-4 h-4" />Novo</div>
            </Button>
          </div>
          <div className="lg:hidden">
            <Button typeColor="black" typeSize="base" onClick={() => setModalNew(!modalNew)} ><img src={plus} className="w-4 h-4" /></Button>
          </div>
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
          <div className="flex items-center gap-1.5">
            <Button icon={status ? IconBan : IconCicloCheck} bakground="#535964" onClick={() => setStatus(!status) } /> Desativar
            <Button icon={IconPenLine} bakground="#535964" onClick={() => setModalEdition(!modalEdition)} />
          </div>
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
          <div className="flex items-center gap-1">
            <Button icon={status ? IconBan : IconCicloCheck} bakground="#535964" onClick={() => setStatus(!status) } />
            <Button icon={IconPenLine} bakground="#535964" onClick={() => setModalEdition(!modalEdition)} />
          </div>
        </Panel.Rows>
      </Panel.Root>
      {/* Mobile */}
    </>
  )
}