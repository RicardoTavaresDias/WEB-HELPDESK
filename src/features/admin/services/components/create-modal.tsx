import { Modal } from "@/components/modal"
import { Input } from "@/components/ui/input"
import { UiButton } from "@/components/ui/UiButton"
import { useCreateServices } from "../http/use-create-services"
import { Alert } from "@/components/ui/alert"
import { Loader } from "@/components/ui/loading"
import { servicesSchema, type ServicesSchemaType } from "../schemas/services-schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { currency } from "@/lib/currency"

type CreateModalType ={
  modalNew: boolean
  setModalNew : (value: boolean) => void
}

const CreateModal = ({ modalNew, setModalNew }: CreateModalType) => {
  const { data, isSuccess, isError, error, isPending, mutateAsync: onCreateServices } = useCreateServices()

  const form = useForm<ServicesSchemaType>({
      defaultValues: {
        title: "",
        price: ""
      },
      criteriaMode: 'all',
      mode: 'all',
      resolver: zodResolver(servicesSchema)
    })
  
    useEffect(() => {
      form.setValue("price", currency({ formatPriceInput: form.watch("price") }))
    },[form.watch("price")])

    const onSubmit = async (data: ServicesSchemaType) => {
      await onCreateServices(data)
      form.reset()
      setModalNew(!modalNew)
    }

  return (
    <>
      <Alert severity="error" open={isError} >
        {error?.message}
      </Alert>
      <Alert severity="success" open={isSuccess} >
        {data?.message}
      </Alert>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Modal.Root isActive={modalNew} >
          <Modal.Title title="Cadastro de serviço" onClose={() => {
            setModalNew(!modalNew)
            form.reset()
          }} />
          <Modal.Context>
            <Input 
              type="text" 
              {...form.register("title")} 
              label="Título" 
              placeholder="Nome do serviço" 
              error={form.formState.errors.title && form.formState.errors.title.message}
            />
            <Input 
              type="text" 
              {...form.register("price")} 
              label="Valor" 
              placeholder="R$ 0,00" 
              error={form.formState.errors.price && form.formState.errors.price.message} 
            />
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black" disabled={form.formState.isSubmitting} >
              {isPending ? <Loader /> : "Salvar"}
            </UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>
    </>
  )
}

export { CreateModal }