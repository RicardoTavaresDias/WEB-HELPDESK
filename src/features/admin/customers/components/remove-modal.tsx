import { Modal } from "@/components/modal"
import { UiButton } from "@/components/ui/UiButton"
import { removeCustomer } from "../http/use-remove-customers"
import { Loading } from "@/components/ui/loading"
import { Alert } from "@/components/ui/alert"

type ModalUpdateCustomerType = {
  userId: string
  modalRemove: boolean
  setModalRemove: (value: boolean) => void
} 

export const ModalRemoveCustomers = ({ userId, modalRemove, setModalRemove }: ModalUpdateCustomerType) => {
  const { data, error, isSuccess, isError, mutateAsync: onRemove } = removeCustomer()

  return (
    <>
      {/* {isLoading && <Loading />} */}
      <Alert severity="error" open={isError} >
        {error?.message}
      </Alert>
      <Alert severity="success" open={isSuccess} >
        {data?.sucess}
      </Alert>

      <Modal.Root isActive={modalRemove}>
        <Modal.Title onClose={() => setModalRemove(!modalRemove)} title="Cliente" />
        <Modal.Context>
          <span className="Text-md text-gray-200">Deseja realmente excluir <b>André Costa?</b></span>
          <p className="text-gray-200 Text-md mt-5 max-sm:w-75">Ao excluir, todos os chamados deste cliente serão removidos e esta ação não poderá ser desfeita.</p>
        </Modal.Context>
        <Modal.Actions>
          <UiButton type="button" typeSize="lg" typeColor="gray" onClick={() => setModalRemove(!modalRemove)} >
            Cancelar
          </UiButton>
          <UiButton type="button" typeSize="lg" typeColor="black" onClick={() => {
            onRemove(userId) 
            setModalRemove(!modalRemove)
          }}>Sim, excluir</UiButton>
        </Modal.Actions>
      </Modal.Root>
    </>
  )
}