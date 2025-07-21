import { Avatar } from "@/components/ui/avatar";
import { Modal } from "@/components/modal/";
import { UiButton } from "@/components/ui/UiButton";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ui/loading";
import { Alert } from "@/components/ui/alert";
import { useForm } from "react-hook-form"
import { userSchema as UserCustomerSchema, type UserTechnicalType as UserCustomerSchemaType } from "@/features/admin/technicals/schemas/technical.schema"
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from "react";
import { useUpdateCustomer } from "../http/use-update-customers";
import type { UserCustomerType } from "../types/customers-response";

type ModalUpdateCustomerType = {
  modalEdition: boolean
  setModalEdition: (value: boolean) => void
  user: UserCustomerType
} 

export const ModalUpdateCustomers = ({modalEdition, setModalEdition, user}: ModalUpdateCustomerType) => {
  const { mutateAsync: updateCustomer, error, isSuccess, data, isError } = useUpdateCustomer(user.id)

  const form = useForm<UserCustomerSchemaType>({
    defaultValues: {
      name: "",
      email: ""
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(UserCustomerSchema)
  })

  useEffect(() => {
    form.reset({
      name: user?.name,
      email: user?.email
    })
  },[user])

  const onUpdate = async (data: UserCustomerSchemaType) => {
    await updateCustomer(data)
    setModalEdition(!modalEdition)
  }

  return (
    <>
      <Alert severity="error" open={isError} >
        {error?.message}
      </Alert>
      <Alert severity="success" open={isSuccess}  >
        {data?.sucess}
      </Alert>

      <form onSubmit={form.handleSubmit(onUpdate)}>
        <Modal.Root isActive={modalEdition} >
          <Modal.Title title="Cliente" onClose={() => {
            form.reset()
            setModalEdition(!modalEdition)
          }} />
          <Modal.Context>
            <div>
              <Avatar user={{ name: user.name, avatar: user.avatar }} size="w-16 h-16" sizeText="text-xl" />
              <div className="pt-3">
                <Input type="text" {...form.register("name")} label="nome" error={form.formState.errors.name?.message} />
                <Input type="text" {...form.register("email")} label="e-mail" error={form.formState.errors.email?.message} />
              </div>
            </div>  
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black" disabled={form.formState.isSubmitting} >
              {form.formState.isSubmitting ? <Loader /> : "Salvar"}
            </UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>
    </>
  )
}