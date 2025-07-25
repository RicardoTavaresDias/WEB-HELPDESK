import { Modules } from "@/components/modules"
import { Avatar } from "@/components/ui/avatar"
import { currency } from "@/lib/currency"
import type { Called } from "../types/calleds-useCustomers-response"

type ModuleDetailsCalledRightProps = {
  dataDetails: Called
}

function ModuleDetailsCalledRight ({ dataDetails }: ModuleDetailsCalledRightProps) {
  return (
    <>
      <Modules.Context isType="40">
        <span className="text-gray-400 Text-Xs">Técnico responsável</span>
        <div className="flex items-center gap-2 mt-2">
          <Avatar user={{ name: dataDetails.UserTechnical?.name, avatar: dataDetails.UserTechnical?.avatar }} size="w-10 h-10" sizeText="text-xs" />
          <div className="flex flex-col justify-center">
            <span className="text-gray-200 Text-Sm">{dataDetails.UserTechnical?.name}</span>
            <span className="Text-Xs text-gray-300">{dataDetails.UserTechnical?.email}</span>
          </div>
        </div>
        
        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Valores</span>
          <div className="flex justify-between items-center">
            <p className="text-sm font-normal text-gray-200">Preço base</p>
            <span className="Text-Xs text-gray-200">{currency({ coinFormatCents: dataDetails.basePrice.toString() })}</span>
          </div>
        </div>

        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Adicionais</span>
          {dataDetails.services.map(service => (
            <div className="flex justify-between items-center mb-1" key={service.id} >
              <p className="text-sm font-normal text-gray-200">{service.titleService}</p>
              <span className="Text-Xs text-gray-200">{currency({ coinFormatCents: service.price })}</span>
            </div>
          ))}
        </div>

        <div className="pt-3 mt-4 border-t border-gray-500 flex justify-between items-center">
          <span className="Text-Sm text-gray-200">Total</span>
          <span className="Text-Sm text-gray-200">{currency({ coinFormatCents: String(Number(dataDetails.priceTotal) + Number(dataDetails.basePrice)) })}</span>
        </div>
      </Modules.Context>
    </>
  )
}

export { ModuleDetailsCalledRight }