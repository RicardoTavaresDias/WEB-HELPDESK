import { Modal } from "@/components/modal"
import { Input } from "@/components/ui/input"
import { UiButton } from "@/components/ui/UiButton"
import { Loading } from "@/components/ui/loading"
import { Alert } from "@/components/ui/alert"

type UpdateMOdalType = {
  modalEdition: boolean
  setModalEdition: (value: boolean) => void
  form: any
}

const UpdateModal = ({ modalEdition, setModalEdition, form }: UpdateMOdalType) => {
    const {
      handleSubmit,
      onSubmit,
      register,
      errors,
      isSubmitting,
      reset
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Root isActive={modalEdition}>
          <Modal.Title title="Cadastro de serviço" onClose={() => {
            setModalEdition(!modalEdition)
            reset()
          }} />
          <Modal.Context>
            <Input type="text" {...register("title")} label="Título" error={errors.title && errors.title.message} />
            <Input type="text" {...register("value")} label="Valor"  error={errors.value && errors.value.message} />
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black" disabled={isSubmitting} onClick={() => {
              if(!errors.title && !errors.value){
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