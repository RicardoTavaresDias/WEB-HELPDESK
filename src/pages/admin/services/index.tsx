import { Modules } from "@/components/modules"
import { Panel } from "@/components/table"

import { IconPenLine } from "@/assets/icon/iconPenLine"
import { IconBan } from "@/assets/icon/iconBan"
import { IconCicloCheck } from "@/assets/icon/iconCicloCheck"

import { Status } from "@/components/ui/status"
import { Modal } from "@/components/modal"

import { useState } from "react";
import { Input } from "@/components/ui/input"
import { UiButton } from "@/components/ui/UiButton"
import { IconPlus } from "@/assets/icon/iconPlus"
import { currency } from "@/lib/currency"

export function Services(){
  const [modalNew, setModalNew] = useState(false)
  const [modalEdition, setModalEdition] = useState(false)
  const [status, setStatus] = useState(true)

  const [title, setTitle] = useState("Instalação de rede")
  const [value, setValue] = useState("R$ 180,00")
  const [valueNew, setValueNew] =useState("")

  const handleEditionSubmit = (formData: FormData) => {
    const title = formData.get("title")
    const value = formData.get("value")

    setModalEdition(!modalEdition)
    console.log("Services Edition", {title, value})
  }

  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title")
    const value = formData.get("value")

    setModalNew(!modalNew)
    console.log("services", {title, value})
  }

  return (
    <>
      <form action={handleSubmit}>
        <Modal.Root isActive={modalNew} >
          <Modal.Title title="Cadastro de serviço" onClose={() => setModalNew(!modalNew)} />
          <Modal.Context>
            <Input type="text" name="title" label="Título" placeholder="Nome do serviço"/>
            <Input type="text" name="value" label="Valor" placeholder="R$ 0,00" value={valueNew} onChange={(e) => setValueNew( currency(e.target.value) )} />
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black">Salvar</UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>

      <form action={handleEditionSubmit}>
        <Modal.Root isActive={modalEdition}>
          <Modal.Title title="Cadastro de serviço" onClose={() => setModalEdition(!modalEdition)}/>
          <Modal.Context>
            <Input type="text" name="title" label="Título"  value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input type="text" name="value" label="Valor" value={value} onChange={(e) => setValue( currency(e.target.value) )} />
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black">Salvar</UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>

      <div className="mb-7">
        <Modules.Title title="Técnicos" isButton={true} >
          <UiButton type="button" icon={IconPlus} typeColor="black" typeSize="xs" color="#F9FAFA" onClick={() => setModalNew(!modalNew)} >{<span className="max-sm:hidden">Novo</span>}</UiButton>
        </Modules.Title>
      </div>

      <Panel.Root className="2xl:grid-cols-[auto_auto_10%_12%] lg:grid-cols-[auto_auto_10%_15%]">
        <Panel.Column>Título</Panel.Column>
        <Panel.Column>Valor</Panel.Column>
        <Panel.Column>Status</Panel.Column>
        <Panel.Column>{""}</Panel.Column>

        <Panel.Rows>Instalação de Rede</Panel.Rows>
        <Panel.Rows>R$ 180,00</Panel.Rows>
        <Panel.Rows>
          <Status type={status ? "active" : "inactive"} isButton={true} />
        </Panel.Rows>
        <Panel.Rows>
          <div className="flex items-center gap-1 mr-2.5">
            {status && <><IconBan className="w-4 h-4 cursor-pointer" onClick={() => setStatus(!status)} />Desativar</>}
            {!status && <><IconCicloCheck className="w-4 h-4 cursor-pointer" onClick={() => setStatus(!status)} />Reativar</>}
          </div>
          <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} onClick={() => setModalEdition(!modalEdition)} />
        </Panel.Rows>
      </Panel.Root>

      {/* Mobile */}
      <Panel.Root className="grid-cols-[24%_auto_21%_24%]" mobile={true}>
        <Panel.Column>Título</Panel.Column>
        <Panel.Column>Valor</Panel.Column>
        <Panel.Column>Status</Panel.Column>
        <Panel.Column>{""}</Panel.Column>

        <Panel.Rows>
          <span className="truncate">Instalação de Rede</span>
        </Panel.Rows>
        <Panel.Rows>R$ 180,00</Panel.Rows>
        <Panel.Rows>
          <Status type={status ? "active" : "inactive"} isButton={false} />
        </Panel.Rows>
        <Panel.Rows>
          <div className="flex items-center gap-1 mr-2.5">
            {status && <IconBan className="w-4 h-4 cursor-pointer" onClick={() => setStatus(!status)} />}
            {!status && <IconCicloCheck className="w-4 h-4 cursor-pointer" onClick={() => setStatus(!status)} />}
          </div>
          <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} onClick={() => setModalEdition(!modalEdition)} />
        </Panel.Rows>
      </Panel.Root>
      {/* Mobile */}
    </>
  )
}