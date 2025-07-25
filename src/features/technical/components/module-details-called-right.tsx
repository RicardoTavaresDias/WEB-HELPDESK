import { Modules } from "@/components/modules"
import { Avatar } from "@/components/ui/avatar"
import { currency } from "@/lib/currency"
import type { Called } from "../types/calleds-user-response"

type ModuleDetailsCalledRightProps = {
  called: Called | null
}

function ModuleDetailsCalledRight ({ called }: ModuleDetailsCalledRightProps) {
  return (
    <>
      <Modules.Context isType="40">
        <span className="text-gray-400 Text-Xs">Técnico responsável</span>
        <div className="flex items-center gap-2 mt-2">
          {called && <Avatar user={{ name: called?.UserTechnical.name, avatar: called?.UserTechnical.avatar }} size="w-10 h-10" sizeText="text-xs" /> }
          <div className="flex flex-col justify-center">
            <span className="text-gray-200 Text-Sm">{called?.UserTechnical.name}</span>
            <span className="Text-Xs text-gray-300">{called?.UserTechnical.email}</span>
          </div>
        </div>
        
        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Valores</span>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="text-sm font-normal text-gray-200 mt-2">Preço base</p>
              <span className="Text-Xs text-gray-200">{currency({ coinFormatCents: called?.basePrice.toString() })}</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-normal text-gray-200">Adicionais</p>
              <span className="Text-Xs text-gray-200">{currency({ coinFormatCents: called?.priceTotal.toString() })}</span>
            </div>
          </div>
        </div>

        <div className="pt-3 mt-4 border-t border-gray-500 flex justify-between items-center">
          <span className="Text-Sm text-gray-200">Total</span>
          <span className="Text-Sm text-gray-200">{called && currency({ coinFormatCents: String(called?.priceTotal + Number(called?.basePrice)) })}</span>
        </div>
      </Modules.Context>
    </>
  )
}

export { ModuleDetailsCalledRight }