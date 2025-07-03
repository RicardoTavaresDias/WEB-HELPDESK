import { Modal } from "@/components/modal"
import { UiButton } from "@/components/ui/UiButton"

type ModalUpdateCustomerType = {
  isOpen: boolean
  onClose: () => void
  onSalve: () => void 
} 

export const ModalRemoveCustomersPage = ({isOpen, onClose, onSalve}: ModalUpdateCustomerType) => {
  return (
    <>
      <Modal.Root isActive={isOpen}>
        <Modal.Title onClose={onClose} title="Cliente" />
        <Modal.Context>
          <span className="Text-md text-gray-200">Deseja realmente excluir <b>André Costa?</b></span>
          <p className="text-gray-200 Text-md mt-5 max-sm:w-75">Ao excluir, todos os chamados deste cliente serão removidos e esta ação não poderá ser desfeita.</p>
        </Modal.Context>
        <Modal.Actions>
          <UiButton type="button" typeSize="lg" typeColor="gray" onClick={onClose} >
            Cancelar
          </UiButton>
          <UiButton type="button" typeSize="lg" typeColor="black" onClick={onSalve}>Sim, excluir</UiButton>
        </Modal.Actions>
      </Modal.Root>
    </>
  )
}