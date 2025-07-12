import { Modal } from "@/components/modal"
import { Input } from "@/components/ui/input"
import { UiButton } from "@/components/ui/UiButton"
import { createServices } from "../http/use-create-services"
import { Alert } from "@/components/ui/alert"
import { Loading } from "@/components/ui/loading"

type CreateModalType ={
  modalNew: boolean
  setModalNew : (value: boolean) => void
  fethLoad: () => void
}

const CreateModal = ({ modalNew, setModalNew, fethLoad }: CreateModalType) => {
  const { form, onSubmit } = createServices(fethLoad)

  return (
    <>
      {form.formState.isSubmitting && <Loading />}
      <Alert severity="error" open={!!form.formState.errors.root?.message} onClose={form.clearErrors} >
        {form.formState.errors.root?.message}
      </Alert>
      <Alert severity="success" open={!!form.formState.errors.root?.success} onClose={form.clearErrors} >
        {typeof form.formState.errors.root?.success === "string" && form.formState.errors.root.success}
      </Alert>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Modal.Root isActive={modalNew} >
          <Modal.Title title="Cadastro de serviço" onClose={() => {
            setModalNew(!modalNew)
            form.reset()
          }} />
          <Modal.Context>
            <Input type="text" {...form.register("title")} label="Título" placeholder="Nome do serviço" error={form.formState.errors.title && form.formState.errors.title.message}/>
            <Input type="text" {...form.register("value")} label="Valor" placeholder="R$ 0,00" error={form.formState.errors.value && form.formState.errors.value.message} />
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black" disabled={form.formState.isSubmitting} 
            onClick={() => {
              if(!form.formState.errors.title && !form.formState.errors.value){
                setModalNew(!modalNew)
              }
            }} >Salvar</UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>
    </>
  )
}

export { CreateModal }