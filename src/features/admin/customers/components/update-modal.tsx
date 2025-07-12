import { Avatar } from "@/components/ui/avatar";
import { Modal } from "@/components/modal/";
import { UiButton } from "@/components/ui/UiButton";
import { Input } from "@/components/ui/input";
import { Loading } from "@/components/ui/loading";
import { Alert } from "@/components/ui/alert";
import type { UseFormReturn } from "react-hook-form";
import type { UserTechnicalType } from "@/features/admin/technicals/schemas/technical.schema"

type ModalUpdateCustomerType = {
  modalEdition: boolean
  setModalEdition: (value: boolean) => void
  form: {
    onSubmit: (data: UserTechnicalType) => void
    formUpdate: UseFormReturn<UserTechnicalType> 
  }
  user: {
    name: string
    avatar: string
  }
} 

export const ModalUpdateCustomers = ({modalEdition, setModalEdition, form, user}: ModalUpdateCustomerType) => {
  const { formUpdate, onSubmit } = form

  return (
    <>
    {formUpdate.formState.isSubmitting && <Loading />}
      <Alert severity="error" open={!!formUpdate.formState.errors.root?.message} onClose={formUpdate.clearErrors} >
        {formUpdate.formState.errors.root?.message}
      </Alert>
      <Alert severity="success" open={!!formUpdate.formState.errors.root?.success} onClose={formUpdate.clearErrors} >
        {typeof formUpdate.formState.errors.root?.success === "string" && formUpdate.formState.errors.root.success}
      </Alert>
      <Alert severity="info" open={!!formUpdate.formState.errors.root?.info} onClose={formUpdate.clearErrors} >
        {typeof formUpdate.formState.errors.root?.info === "string" && formUpdate.formState.errors.root.info}
      </Alert>

      <form onSubmit={formUpdate.handleSubmit(onSubmit)}>
        <Modal.Root isActive={modalEdition} >
          <Modal.Title title="Cliente" onClose={() => {
            formUpdate.reset()
            setModalEdition(!modalEdition)
          }} />
          <Modal.Context>
            <div>
              <Avatar user={{ name: user.name, avatar: user.avatar }} size="w-16 h-16" sizeText="text-xl" />
              <div className="pt-3">
                <Input type="text" {...formUpdate.register("name")} label="nome" error={formUpdate.formState.errors.name?.message} />
                <Input type="text" {...formUpdate.register("email")} label="e-mail" error={formUpdate.formState.errors.email?.message} />
              </div>
            </div>  
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black" disabled={formUpdate.formState.isSubmitting}
              onClick={() => {
                setModalEdition(!modalEdition)
              }
            } >
              Salvar
            </UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>
    </>
  )
}