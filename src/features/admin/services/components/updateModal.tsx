import { Modal } from "@/components/modal"
import { Input } from "@/components/ui/input"
import { UiButton } from "@/components/ui/UiButton"
import { currency } from "@/lib/currency"
import { useState } from "react"

type UpdateMOdalType = {
  modalEdition: boolean
  setModalEdition: (value: boolean) => void
}

const UpdateModal = ({ modalEdition, setModalEdition }: UpdateMOdalType) => {
    const [title, setTitle] = useState("Instalação de rede")
    const [value, setValue] = useState("R$ 180,00")

    const handleEditionSubmit = (formData: FormData) => {
      const title = formData.get("title")
      const value = formData.get("value")

      setModalEdition(!modalEdition)
      console.log("Services Edition", {title, value})
    }

  return (
    <>
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
    </>
  )
}

export { UpdateModal }