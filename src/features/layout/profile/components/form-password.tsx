import { Modal } from "@/components/modal";
import { Input } from "@/components/ui/input";
import { UiButton } from "@/components/ui/UiButton";

type FormPasswordType = {
  modalPassword: boolean
  setModalPassword: (value: boolean) => void
  isModal: () => void
}

export const FormPassword = ({ isModal, modalPassword, setModalPassword }: FormPasswordType) => {

  return (
    <form >
      <Modal.Root isActive={modalPassword}>
        <Modal.Title title="Alterar senha" onClose={() => {setModalPassword(!modalPassword)}} onClick={() => {isModal(); setModalPassword(!modalPassword)}} />
        <Modal.Context >
          <div>
            <Input type="password" name="currentPassword" label="Senha atual" placeholder="Digite sua senha atual" />
            <Input type="password" name="newPassword" label="Nova senha" placeholder="Digite sua nova senha" textLabel="Mínimo de 6 dígitos" />
          </div>
        </Modal.Context>
        <div className="m-auto mb-5">
          <UiButton type="submit" typeSize="xxl" typeColor="black" >Salvar</UiButton>
        </div>
      </Modal.Root>
    </form>
  )
}