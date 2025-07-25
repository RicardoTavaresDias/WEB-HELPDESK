import { Modules } from "@/components/modules"
import { LoaderSM } from "@/components/ui/loading"
import { UiButton } from "@/components/ui/UiButton"
import { currency } from "@/lib/currency"
import type { UseFormReturn } from "react-hook-form"
import type { CalledSchemaType } from "../schemas/create-called-schema"

type ModuleCreateCalledRightProps = {
  form: UseFormReturn<CalledSchemaType>
  isPending: boolean
}

function ModuleCreateCalledRight ({ form, isPending }: ModuleCreateCalledRightProps) {
  return (
    <>
      <Modules.Context isType="40" >
        <div>
          <span className="text-md font-semibold text-gray-200" >Resumo</span>
          <p className="Text-Xs text-gray-300 ">Valores e detalhes</p>
          <span className="text-md text-gray-200">{ currency({ coinFormatCents: form.watch("category")?.price || "00"}) }</span>
        </div>

        <div className="mt-6 flex flex-col gap-1">
          <span className="Text-Xs text-gray-300 ">Categoria de serviço</span>
          <span className="text-sm text-gray-200">{form.watch("category")?.titleService}</span>
        </div>

        <div className="mt-6 flex flex-col gap-0.5">
          <span className="Text-Xs text-gray-300 ">Custo inicial</span>

          <div className="mt-1">
            <span className="Text-Sm text-gray-200 ">R$</span>
            <span className="text-xl font-semibold text-gray-200">{currency({ coinFormatCents: String(200) }).replace("R$", "")}</span>
          </div>
        </div>

        <p className="Text-Xs my-6 text-gray-300">O chamado será automaticamente atribuído a um técnico disponível</p>

        <UiButton type="submit" typeColor="black" typeSize="base" disabled={form.formState.isSubmitting} >
          {isPending ? <LoaderSM /> : "Criar chamado"}
        </UiButton>
      </Modules.Context>
    </>
  )
}

export { ModuleCreateCalledRight }