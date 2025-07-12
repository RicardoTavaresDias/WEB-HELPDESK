import { Modules } from "@/components/modules"
import { ButtonTime } from "@/components/ui/buttonTime"
import { Input } from "@/components/ui/input"
import { UiButton } from "@/components/ui/UiButton"
import { v4 as uuid } from 'uuid'
import { day } from "@/lib/day"
import { createTechnicals } from "@/features/admin/technicals/http/use-create-technicals"
import { Alert } from "@/components/ui/alert"
import { Loading } from "@/components/ui/loading"

export function CreateAdminTechnicals(){
  const { onSubmit, form, user, setUser, onCancel } = createTechnicals()
  
  return (
    <>
      {form.formState.isSubmitting && <Loading />}
      <Alert severity="error" open={!!form.formState.errors.root?.message} onClose={form.clearErrors} >
        {form.formState.errors.root?.message}
      </Alert>
      <Alert severity="success" open={!!form.formState.errors.root?.success} onClose={form.clearErrors} >
        {typeof form.formState.errors.root?.success === "string" && form.formState.errors.root.success}
      </Alert>
      <Alert severity="info" open={!!form.formState.errors.root?.info} onClose={form.clearErrors} >
        {typeof form.formState.errors.root?.info === "string" && form.formState.errors.root.info}
      </Alert>

      <form onSubmit={form.handleSubmit(onSubmit)} >
        <Modules.Root>
          <Modules.Title title="Perfil de técnico" to="/tecnicos">
            <UiButton type="button" typeColor="gray" typeSize="xl" onClick={() => onCancel()}>Cancelar</UiButton>
            <UiButton type="submit" typeColor="black" typeSize="xl" >Salvar</UiButton>
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
                      if(user.includes(value)){
                        return (
                          <div key={uuid()}>
                            <ButtonTime onClick={() => setUser(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                          </div>
                        )
                      }

                      return (
                        <div key={uuid()}>
                          <ButtonTime onClick={() => setUser(prev => [value, ...prev])}>{value}</ButtonTime>
                        </div>
                      )
                    })}

                </div>
              </div>

              <div className="mt-5">
                <span className="text-xs font-semibold text-gray-300 uppercase">Tarde </span>
                <div className="flex gap-2 mt-2 flex-wrap" >

                  {day.afternoon.map(value => {
                    if(user.includes(value)){
                      return (
                        <div key={uuid()}>
                          <ButtonTime onClick={() => setUser(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                        </div>
                      )
                    }

                    return (
                      <div key={uuid()}>
                        <ButtonTime onClick={() => setUser(prev => [value, ...prev])}>{value}</ButtonTime>
                      </div>
                    )
                  })}

                </div>
              </div>

              <div className="mt-5">
                <span className="text-xs font-semibold text-gray-300 uppercase">Noite</span>
                <div className="flex gap-2 mt-2 flex-wrap" >

                  {day.night.map(value => {
                    if(user.includes(value)){
                      return (
                        <div key={uuid()}>
                          <ButtonTime onClick={() => setUser(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                        </div>
                      )
                    }

                    return (
                      <div key={uuid()}>
                        <ButtonTime onClick={() => setUser(prev => [value, ...prev])}>{value}</ButtonTime>
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