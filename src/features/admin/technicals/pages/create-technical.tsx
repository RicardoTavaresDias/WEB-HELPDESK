import { Modules } from "@/components/modules"
import { UiButton } from "@/components/ui/UiButton"
import { useCreateTechnical } from "@/features/admin/technicals/http/use-create-technicals"
import { Alert } from "@/components/ui/alert"
import { Loading } from "@/components/ui/loading"
import { useForm } from "react-hook-form"
import { userTechnicalSchema, type UserTechnicalSchemaType } from "../schemas/technical.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { ModuleCreateLeft } from "../components/module-create-left"
import { ModuleCreateRight } from "../components/module-create-right"

export function CreateAdminTechnicals(){
  const [userHours, setUserHours] = useState<string[]>([])
  const { data, isError, error, isPending, mutateAsync: onCreateTechnical } = useCreateTechnical()

  const form = useForm<UserTechnicalSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(userTechnicalSchema)
  })

  const onSubmit = async (data: UserTechnicalSchemaType) => {
    const response = await onCreateTechnical({ data, userHours })
    if(response.success) {
      form.reset()
      setUserHours([])
    }
  }
  
  return (
    <>
      {isPending && <Loading />}
      <Alert severity="warning" open={isError} >
        {error?.message}
      </Alert>
      <Alert severity="success" open={!!data?.success} >
        {data?.success}
      </Alert>
      <Alert severity="info" open={!!data?.info} >
        {data?.info}
      </Alert>

      <form onSubmit={form.handleSubmit(onSubmit)} >
        <Modules.Root>
          <Modules.Title title="Perfil de técnico" to="/tecnicos/?page=1">
            <UiButton type="button" typeColor="gray" typeSize="xl" onClick={() => { form.reset(); setUserHours([]) }} disabled={isPending} >Cancelar</UiButton>
            <UiButton type="submit" typeColor="black" typeSize="xl" disabled={isPending} >Salvar</UiButton>
          </Modules.Title>

          <Modules.Container>
            <ModuleCreateLeft form={form} />
            <ModuleCreateRight setUserHours={setUserHours} userHours={userHours} />
          </Modules.Container>
        </Modules.Root>
      </form>
    </>
  )
}