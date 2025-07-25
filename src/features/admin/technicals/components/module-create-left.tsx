import { Modules } from "@/components/modules"
import { Input } from "@/components/ui/input"
import type { UseFormReturn } from "react-hook-form"
import type { UserTechnicalSchemaType } from "../schemas/technical.schema"

type ModuleCreateLeftProps = {
  form: UseFormReturn<UserTechnicalSchemaType>
}

function ModuleCreateLeft ({ form }: ModuleCreateLeftProps) {
  return (
    <>
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
    </>
  )
}

export { ModuleCreateLeft }