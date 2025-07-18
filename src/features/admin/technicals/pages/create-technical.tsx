import { Modules } from "@/components/modules"
import { ButtonTime } from "@/components/ui/buttonTime"
import { Input } from "@/components/ui/input"
import { UiButton } from "@/components/ui/UiButton"
import { v4 as uuid } from 'uuid'
import { day } from "@/lib/day"
import { useCreateTechnical } from "@/features/admin/technicals/http/use-create-technicals"
import { Alert } from "@/components/ui/alert"
import { Loading } from "@/components/ui/loading"
import { useForm } from "react-hook-form"
import { userTechnicalSchema, type UserTechnicalSchemaType } from "../schemas/technical.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

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
      <Alert severity="error" open={isError} >
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
          <Modules.Title title="Perfil de técnico" to="/tecnicos">
            <UiButton type="button" typeColor="gray" typeSize="xl" onClick={() => { form.reset(); setUserHours([]) }} disabled={isPending} >Cancelar</UiButton>
            <UiButton type="submit" typeColor="black" typeSize="xl" disabled={isPending} >Salvar</UiButton>
          </Modules.Title>

          <Modules.Container>
            <Modules.Context isType="40">
              <div className="break-words max-sm:w-full" >
                <div className="mb-5">
                  <h3 className="mb-0.5 text-base font-semibold text-gray-200">Dados pessoais</h3>
                  <span className="Text-Xs text-gray-300 mb-10">Defina as informações do perfil de técnico</span>
                </div>
            
                <Input 
                  {...form.register("name")} 
                  type="text" 
                  label="nome" 
                  placeholder="Nome completo" 
                  error={form.formState.errors.name?.message}
                  autoComplete="current-name"
                />
                
                <Input 
                  {...form.register("email")} 
                  type="text" 
                  label="e-mail" 
                  placeholder="exemplo@mail.com" 
                  error={form.formState.errors.email?.message}
                  autoComplete="current-email"
                />

                <Input 
                  {...form.register("password")} 
                  type="password" 
                  label="senha" 
                  placeholder="Defina a senha de acesso" 
                  textLabel={form.formState.errors.password ? "" : "Mínimo de 6 dígitos"} 
                  error={form.formState.errors.password?.message}
                  autoComplete="current-password"
                />
              </div> 
            </Modules.Context>
          
            <Modules.Context isType="60">
              <div className="mb-5">
                <h3 className="mb-0.5 text-base font-semibold text-gray-200">Horários de atendimento</h3>
                <span className="Text-Xs text-gray-300 mb-10">Selecione os horários de disponibilidade do técnico para atendimento</span>
              </div>

              <div>
                <span className="text-xs font-semibold text-gray-300 uppercase ">Manhã</span>
                <div className="flex gap-2 mt-2 flex-wrap" >

                  {day.morning.map(value => {
                      if(userHours.includes(value)){
                        return (
                          <div key={uuid()}>
                            <ButtonTime onClick={() => setUserHours(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                          </div>
                        )
                      }

                      return (
                        <div key={uuid()}>
                          <ButtonTime onClick={() => setUserHours(prev => [value, ...prev])}>{value}</ButtonTime>
                        </div>
                      )
                    })}

                </div>
              </div>

              <div className="mt-5">
                <span className="text-xs font-semibold text-gray-300 uppercase">Tarde </span>
                <div className="flex gap-2 mt-2 flex-wrap" >

                  {day.afternoon.map(value => {
                    if(userHours.includes(value)){
                      return (
                        <div key={uuid()}>
                          <ButtonTime onClick={() => setUserHours(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                        </div>
                      )
                    }

                    return (
                      <div key={uuid()}>
                        <ButtonTime onClick={() => setUserHours(prev => [value, ...prev])}>{value}</ButtonTime>
                      </div>
                    )
                  })}

                </div>
              </div>

              <div className="mt-5">
                <span className="text-xs font-semibold text-gray-300 uppercase">Noite</span>
                <div className="flex gap-2 mt-2 flex-wrap" >

                  {day.night.map(value => {
                    if(userHours.includes(value)){
                      return (
                        <div key={uuid()}>
                          <ButtonTime onClick={() => setUserHours(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                        </div>
                      )
                    }

                    return (
                      <div key={uuid()}>
                        <ButtonTime onClick={() => setUserHours(prev => [value, ...prev])}>{value}</ButtonTime>
                      </div>
                    )
                  })}

                </div>
              </div>   
            </Modules.Context>
          </Modules.Container>
        </Modules.Root>
      </form>
    </>
  )
}