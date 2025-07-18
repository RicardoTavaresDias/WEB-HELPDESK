import { Modal } from "@/components/modal"
import { Input } from "@/components/ui/input"
import { UiButton } from "@/components/ui/UiButton"
import { Loading } from "@/components/ui/loading"
import { Alert } from "@/components/ui/alert"
import { servicesSchema, type ServicesSchemaType } from "../schemas/services-schema"
import { useForm } from "react-hook-form";
import { useUpdateServices } from "../http/use-update-services"
import { zodResolver } from "@hookform/resolvers/zod"
import { currency } from "@/lib/currency"
import { useEffect } from "react"
import type { DataServicesType } from "../types/data-services"

type UpdateMOdalType = {
  modalEdition: boolean
  setModalEdition: (value: boolean) => void
  service?: DataServicesType
}

const UpdateModal = ({ modalEdition, setModalEdition, service }: UpdateMOdalType) => {
  if (!service) return null
  const { data, isSuccess, isError, error, mutateAsync: onUpdateService } = useUpdateServices(service.id)

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
      if (service) {
        form.setValue("title", service.titleService);
        form.setValue("price", currency({ coinFormatCents: service.price }));
      }
    }, [service, form]);
  
    useEffect(() => {
      form.setValue("price", currency({ formatPriceInput: form.watch("price") }))
    },[form.watch("price")])

    const onSubmitUpdate = (data: ServicesSchemaType) => {
      onUpdateService(data)
    }

  return (
    <>
      {form.formState.isSubmitting && <Loading />}
      <Alert severity="warning" open={!!form.formState.errors.root?.message} onClose={form.clearErrors} >
        {form.formState.errors.root?.message}
      </Alert>
      <Alert severity="error" open={isError} >
        {error?.message}
      </Alert>
      <Alert severity="success" open={isSuccess} >
        {data?.sucess}
      </Alert>

      <form onSubmit={form.handleSubmit(onSubmitUpdate)}>
        <Modal.Root isActive={modalEdition}>
          <Modal.Title title="Cadastro de serviço" onClose={() => {
            setModalEdition(!modalEdition)
            form.reset({
              title: service.titleService,
              price: service.price
            })
          }} />
          <Modal.Context>
            <Input 
              type="text" 
              {...form.register("title")} 
              label="Título" 
              error={form.formState.errors.title && form.formState.errors.title.message} 
            />
            <Input 
              type="text" 
              {...form.register("price")} 
              label="Valor" 
              error={form.formState.errors.price && form.formState.errors.price.message} 
            />
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black" disabled={form.formState.isSubmitting} onClick={() => {
              if(!form.formState.errors.title && !form.formState.errors.price){
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