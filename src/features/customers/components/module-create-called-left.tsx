import { Modules } from "@/components/modules"
import { Input } from "@/components/ui/input"
import { InputTextarea } from "./input-textarea"
import { Controller, type UseFormReturn } from "react-hook-form"
import type { SelectServicesCategoryType } from "../types/calleds-useCustomers-response"
import { InputSelectServices } from "./input-select-services"
import type { CalledSchemaType } from "../schemas/create-called-schema"

type ModuleCreateCalledLeftProps = {
  form: UseFormReturn<CalledSchemaType>
}

function ModuleCreateCalledLeft ({ form }: ModuleCreateCalledLeftProps) {
  return (
    <>
       <Modules.Context isType="60" >
          <div className="flex flex-col gap-1">
            <span className="Text-Md text-gray-200 font-semibold">Informações</span>
            <span className="text-gray-300 Text-Xs">Configure os dias e horários em que você está disponível para atender chamados</span>
          </div>

          <div className="mt-6">
            <div className="flex flex-col">
              <Input type="text" {...form.register("title")} label="Título" placeholder="Digite um título para o chamado" isScren error={form.formState.errors.title?.message} />
              <InputTextarea form={form} />
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <InputSelectServices
                    value={field.value as SelectServicesCategoryType}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
          </div>
        </Modules.Context>
    </>
  )
}

export { ModuleCreateCalledLeft }