import { Input } from "@/components/ui/input";
import { ButtonTime } from "@/components/ui/buttonTime";
import { Modules } from "@/components/modules";
import { UiButton } from "@/components/ui/UiButton";
import { day } from "@/lib/day";
import { v4 as uuid } from "uuid";
import { Alert } from "@/components/ui/alert";
import { Loading } from "@/components/ui/loading";
import { Avatar } from "@/components/ui/avatar";
import { useUpdateTechnical } from "../http/use-update-technicals"
import { Navigate, useParams } from "react-router";
import { useSearchTechnical } from "../http/use-search-user-uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type UserTechnicalType as UserTechnicalTypeSchema  } from "../schemas/technical.schema";
import { useForm } from "react-hook-form";
import { UserHours } from "../http/use-hours";
import { useEffect } from "react";

export function UpdateAdminTechnicals() {
  const { id } = useParams()

  if (!id) {
    return <Navigate replace to="/" />
  }
  
  const { userTechnical, setUserTechnical, queery } = useSearchTechnical(id as string)
  const { refetch, isLoading } = queery
  const userHours = new UserHours(setUserTechnical as any)
  const { addUserHours, removeUserHours } = userHours

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
      <Alert severity="error" open={isError} >
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
            <Modules.Context isType="40">
              <div className="break-words max-sm:w-full">
                <div>
                  <h3 className="text-base font-semibold text-gray-200">
                    Dados pessoais
                  </h3>
                  <span className="Text-Xs text-gray-300">
                    Defina as informações do perfil de técnico
                  </span>
                </div>
                <div className="my-6">
                  {userTechnical && <Avatar user={userTechnical} size="w-18 h-18" sizeText="text-[22px]" /> }
                </div>
                <Input type="text" {...form.register("name")} label="nome" error={form.formState.errors.name?.message} />
                <Input type="text" {...form.register("email")} label="e-mail" error={form.formState.errors.email?.message} />
              </div>
            </Modules.Context>

            <Modules.Context isType="60">
              <div className="mb-10">
                <h3 className="mb-0.5 text-base font-semibold text-gray-200">
                  Horários de atendimento
                </h3>
                <span className="Text-Xs text-gray-300 mb-10">
                  Selecione os horários de disponibilidade do técnico para
                  atendimento
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-gray-300 uppercase">
                  Manhã
                </span>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {userTechnical && userTechnical.userHours &&
                    day.morning.map((value) => {
                      if (userTechnical.userHours.includes(value)) {
                        return (
                          <div key={uuid()}>
                            <ButtonTime onClick={() => removeUserHours(value)} isActive >
                              {value}
                            </ButtonTime>
                          </div>
                        );
                      }

                      return (
                        <div key={uuid()}>
                          <ButtonTime onClick={() => addUserHours(value)} >
                            {value}
                          </ButtonTime>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="mt-5">
                <span className="text-xs font-semibold text-gray-300 uppercase">
                  Tarde{" "}
                </span>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {userTechnical && userTechnical.userHours &&
                    day.afternoon.map((value) => {
                      if (userTechnical.userHours.includes(value)) {
                        return (
                          <div key={uuid()}>
                            <ButtonTime onClick={() => removeUserHours(value)} isActive >
                              {value}
                            </ButtonTime>
                          </div>
                        );
                      }

                      return (
                        <div key={uuid()}>
                          <ButtonTime onClick={() => addUserHours(value)} >
                            {value}
                          </ButtonTime>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="mt-5">
                <span className="text-xs font-semibold text-gray-300 uppercase">
                  Noite
                </span>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {userTechnical && userTechnical.userHours &&
                    day.night.map((value) => {
                      if (userTechnical.userHours.includes(value)) {
                        return (
                          <div key={uuid()}>
                            <ButtonTime onClick={() => removeUserHours(value)} isActive >
                              {value}
                            </ButtonTime>
                          </div>
                        );
                      }

                      return (
                        <div key={uuid()}>
                          <ButtonTime onClick={() => addUserHours(value)} >
                            {value}
                          </ButtonTime>
                        </div>
                      );
                    })}
                </div>
              </div>
            </Modules.Context>
          </Modules.Container>
        </form>
      </Modules.Root>
    </>
  );
}