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
  const {
    errors,
    handleSubmit,
    isSubmitting,
    onSubmit,
    register,
    reset
  } = createServices(fethLoad)

  return (
    <>
      {isSubmitting && <Loading />}
      <Alert severity="error" open={!!errors.root?.message}>
        {errors.root?.message}
      </Alert>
      <Alert severity="success" open={!!errors.root?.success}>
        {typeof errors.root?.success === "string" && errors.root.success}
      </Alert>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Root isActive={modalNew} >
          <Modal.Title title="Cadastro de serviço" onClose={() => {
            setModalNew(!modalNew)
            reset()
          }} />
          <Modal.Context>
            <Input type="text" {...register("title")} label="Título" placeholder="Nome do serviço" error={errors.title && errors.title.message}/>
            <Input type="text" {...register("value")} label="Valor" placeholder="R$ 0,00" error={errors.value && errors.value.message} />
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black" disabled={isSubmitting} 
            onClick={() => {
              if(!errors.title && !errors.value){
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