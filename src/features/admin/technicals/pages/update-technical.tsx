import { Modules } from "@/components/modules";
import { UiButton } from "@/components/ui/UiButton";
import { Alert } from "@/components/ui/alert";
import { Loading } from "@/components/ui/loading";
import { useUpdateTechnical } from "../http/use-update-technicals"
import { Navigate, useParams } from "react-router";
import { useSearchTechnical } from "../http/use-search-user-uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type UserTechnicalType as UserTechnicalTypeSchema  } from "../schemas/technical.schema";
import { useForm } from "react-hook-form";
import { UserHours } from "../http/use-hours";
import { useEffect } from "react";
import { ModuleUpdateLeft } from "../components/module-update-left";
import { ModuleUpdateRight } from "../components/module-update-right";

export function UpdateAdminTechnicals() {
  const { id } = useParams()

  if (!id) {
    return <Navigate replace to="/" />
  }
  
  const { userTechnical, setUserTechnical, query } = useSearchTechnical(id as string)
  const { refetch, isLoading } = query
  const userHours = new UserHours(setUserTechnical as any)

  const form = useForm<UserTechnicalTypeSchema>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(userSchema)
  })

  useEffect(() => {
    form.reset({
      name: userTechnical?.name,
      email: userTechnical?.email
    })
  }, [userTechnical?.name, userTechnical?.email])

  const { isError, error, data, isPending, mutateAsync: onUpdateTechnical} = useUpdateTechnical()
  const onSubmit = async (data: UserTechnicalTypeSchema) => {
    const convertUseHoursTechnical = userHours.result(userTechnical!)
    const result = await onUpdateTechnical({ 
      data, 
      userTechnical: {...userTechnical, userHours: convertUseHoursTechnical } as any
    })

    form.reset({ name: result.data.name, email: result.data.email })
  }

  return (
    <>
      {isLoading && <Loading /> || isPending && <Loading/>}
      <Alert severity="warning" open={isError} >
        {error?.message}
      </Alert>
      <Alert severity="success" open={!!data?.sucess} >
        {data?.sucess}
      </Alert>
      <Alert severity="info" open={!!data?.info} >
        {data?.info}
      </Alert>

      <Modules.Root>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Modules.Title title="Perfil de técnico" to="/tecnicos">
            <UiButton
              type="button"
              typeColor="gray"
              typeSize="xl"
              onClick={() => { form.reset(); refetch() }}
              disabled={isPending}
            >
              Cancelar
            </UiButton>
            <UiButton
              type="submit"
              typeColor="black"
              typeSize="xl"
              disabled={isPending}
            >
              Salvar
            </UiButton>
          </Modules.Title>

          <Modules.Container>
            <ModuleUpdateLeft form={form} userTechnical={userTechnical} />
            <ModuleUpdateRight setUserTechnical={setUserTechnical} userTechnical={userTechnical} />
          </Modules.Container>
        </form>
      </Modules.Root>
    </>
  );
}