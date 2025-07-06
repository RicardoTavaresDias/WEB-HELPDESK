import { Avatar } from "@/components/ui/avatar";
import { Modal } from "@/components/modal/";
import { UiButton } from "@/components/ui/UiButton";
import { Input } from "@/components/ui/input";
import { Loading } from "@/components/ui/loading";
import { Alert } from "@/components/ui/alert";

type ModalUpdateCustomerType = {
  modalEdition: boolean
  setModalEdition: (value: boolean) => void
  form: {
    onSubmit: any
    register: any
    handleSubmit: any
    errors: any
    isSubmitting: any
    resetClose: any
  }
  user: {
    name: string
    avatar: string
  }
} 

export const ModalUpdateCustomersPage = ({modalEdition, setModalEdition, form, user}: ModalUpdateCustomerType) => {

   const {
      errors,
      handleSubmit,
      onSubmit,
      register,
      isSubmitting,
      resetClose
    } = form

  return (
    <>
    {isSubmitting && <Loading />}
      <Alert severity="error" open={!!errors.root?.message}>
        {errors.root?.message}
      </Alert>
      <Alert severity="success" open={!!errors.root?.success}>
        {typeof errors.root?.success === "string" && errors.root.success}
      </Alert>
      <Alert severity="info" open={!!errors.root?.info}>
        {typeof errors.root?.info === "string" && errors.root.info}
      </Alert>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Root isActive={modalEdition} >
          <Modal.Title title="Cliente" onClose={() => {
            resetClose()
            setModalEdition(!modalEdition)
          }} />
          <Modal.Context>
            <div>
              <Avatar user={{ name: user.name, avatar: user.avatar }} size="w-16 h-16" sizeText="text-xl" />
              <div className="pt-3">
                <Input type="text" {...register("name")} label="nome" error={errors.name?.message} />
                <Input type="text" {...register("email")} label="e-mail" error={errors.email?.message} />
              </div>
            </div>  
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black" onClick={() => {
              setModalEdition(!modalEdition)
            }} >
              Salvar
            </UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>
    </>
  )
}