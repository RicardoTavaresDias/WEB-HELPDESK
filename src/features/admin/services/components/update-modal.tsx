import { Modal } from "@/components/modal"
import { Input } from "@/components/ui/input"
import { UiButton } from "@/components/ui/UiButton"
import { Loading } from "@/components/ui/loading"
import { Alert } from "@/components/ui/alert"
import type { ServicesSchemaType } from "../schemas/services-schema"
import type { UseFormReturn } from "react-hook-form";

type UpdateMOdalType = {
  modalEdition: boolean
  setModalEdition: (value: boolean) => void
  form: { 
    formUpdate:  UseFormReturn<ServicesSchemaType>
    onSubmitUpdate: (data: ServicesSchemaType) => void
  }
}

const UpdateModal = ({ modalEdition, setModalEdition, form }: UpdateMOdalType) => {
    const { formUpdate, onSubmitUpdate } = form

  return (
    <>
      {formUpdate.formState.isSubmitting && <Loading />}
      <Alert severity="error" open={!!formUpdate.formState.errors.root?.message} onClose={formUpdate.clearErrors} >
        {formUpdate.formState.errors.root?.message}
      </Alert>
      <Alert severity="success" open={!!formUpdate.formState.errors.root?.success} onClose={formUpdate.clearErrors}>
        {typeof formUpdate.formState.errors.root?.success === "string" && formUpdate.formState.errors.root.success}
      </Alert>

      <form onSubmit={formUpdate.handleSubmit(onSubmitUpdate)}>
        <Modal.Root isActive={modalEdition}>
          <Modal.Title title="Cadastro de serviço" onClose={() => {
            setModalEdition(!modalEdition)
            formUpdate.reset()
          }} />
          <Modal.Context>
            <Input type="text" {...formUpdate.register("title")} label="Título" error={formUpdate.formState.errors.title && formUpdate.formState.errors.title.message} />
            <Input type="text" {...formUpdate.register("value")} label="Valor"  error={formUpdate.formState.errors.value && formUpdate.formState.errors.value.message} />
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black" disabled={formUpdate.formState.isSubmitting} onClick={() => {
              if(!formUpdate.formState.errors.title && !formUpdate.formState.errors.value){
                setModalEdition(!modalEdition)
              }
            }} >Salvar</UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>
    </>
  )
}

export { UpdateModal }