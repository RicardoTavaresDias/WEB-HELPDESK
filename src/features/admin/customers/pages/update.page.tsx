import { Avatar } from "@/components/ui/avatar";
import { Modal } from "@/components/modal/";
import { UiButton } from "@/components/ui/UiButton";
import { Input } from "@/components/ui/input";


type ModalUpdateCustomerType = {
  isOpen: boolean
  onClose: () => void
  form: {
    onSubmit: any
    register: any
    handleSubmit: any
  }
  user: {
    name: string
    avatar: string
  }
} 

export const ModalUpdateCustomersPage = ({isOpen, onClose, form, user}: ModalUpdateCustomerType) => {
  const { handleSubmit, register, onSubmit } = form 

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Root isActive={isOpen} >
          <Modal.Title title="Cliente" onClose={onClose} />
          <Modal.Context>
            <div>
              <Avatar user={{ name: user.name, avatar: user.avatar }} size="w-16 h-16" sizeText="text-xl" />
              <div className="pt-3">
                <Input type="text" {...register("name")} label="nome" />
                <Input type="text" {...register("email")} label="e-mail" />
              </div>
            </div>  
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black" onClick={onClose} >
              Salvar
            </UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>
    </>
  )
}