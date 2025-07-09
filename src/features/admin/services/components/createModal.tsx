import { Modal } from "@/components/modal"
import { Input } from "@/components/ui/input"
import { UiButton } from "@/components/ui/UiButton"
import { currency } from "@/lib/currency"
import { useState } from "react"

type CreateModalType ={
  modalNew: boolean
  setModalNew : (value: boolean) => void
}

const CreateModal = ({ modalNew, setModalNew }: CreateModalType) => {
  const [valueNew, setValueNew] = useState("")

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
            <Input type="text" name="value" label="Valor" placeholder="R$ 0,00" value={valueNew} onChange={(e) => setValueNew( currency({ formatPrice: e.target.value }) )} />
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black">Salvar</UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>
    </>
  )
}

export { CreateModal }