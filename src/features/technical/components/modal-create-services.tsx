import { Modal } from "@/components/modal"
import { Input } from "@/components/ui/input"
import { UiButton } from "@/components/ui/UiButton"
import { currency } from "@/lib/currency"
import { useState } from "react"

type ModalCreateServicesType = {
  modalServices: boolean
  setModalServices: (value: boolean) => void
}

function ModalCreateServices ({ modalServices, setModalServices }: ModalCreateServicesType) {

  const [value, setValue] = useState("")
  
  const handleSubmit = (formData: FormData) => {
    const description = formData.get("description")
    const value = formData.get("value")

    setModalServices(!modalServices)
    console.log("Technical Create Services", { description, value })
  }
  
  return (
    <>
      <form action={handleSubmit}>
        <Modal.Root isActive={modalServices}>
          <Modal.Title title="Serviço adicional" onClose={() => setModalServices(!modalServices)}/>
          <Modal.Context>
            <Input type="text" name="description" label="Descrição" placeholder="Assinatura de backup"/>
            <Input type="text" name="value" label="Valor" placeholder="R$ 120,00" value={value} onChange={(e) => setValue( currency( { coinFormatCents: e.target.value }) )} />
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black">Salvar</UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>
    </>
  )
}

export { ModalCreateServices }