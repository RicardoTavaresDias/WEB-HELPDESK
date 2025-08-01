import { ModuleContext } from "@/components/modules/moduleContext";
import { Avatar } from "@/components/ui/avatar";
import { currency } from "@/lib/currency";
import { Fragment } from "react/jsx-runtime";
import { v4 as uuid } from 'uuid'
import type { Called } from "@/types/calleds-response";

type ListCalleLeftTye = {
  calleds: Called[] | undefined
}

function ListCalleRight ({ calleds }: ListCalleLeftTye) {
  return (
    <>
      {calleds && calleds.map((called) => (
      <Fragment key={called.id} >
        <ModuleContext isType="50">
          <span className="text-gray-400 Text-Xs">Técnico responsável</span>
          <div className="flex items-center gap-2 mt-2">
            <Avatar user={{ name: called.UserTechnical?.name, avatar: called.UserTechnical?.avatar }} />
            <div className="flex flex-col justify-center">
              <span className="text-gray-200 Text-Sm">{called.UserTechnical?.name}</span>
              <span className="Text-Xs text-gray-300">{called.UserTechnical?.email}</span>
            </div>
          </div>
          
          <div className="mt-5">
            <span className="text-gray-400 Text-Xs">Valores</span>
            <div className="flex justify-between items-center">
              <p className="text-sm font-normal text-gray-200">Preço base</p>
              <span className="Text-Xs text-gray-200">{currency({ coinFormatCents: Number(called.basePrice).toString() })}</span>
            </div>
          </div>


          <div className="mt-5">
            <span className="text-gray-400 Text-Xs">Adicionais</span>
            
            {called.services.map((service) => (
              <div className="flex justify-between items-center mb-0.5" key={uuid()} >
                <p className="text-sm font-normal text-gray-200">{service.titleService}</p>
                <span className="Text-Xs text-gray-200">{currency({ coinFormatCents: service.price.toString()})}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 mt-4 border-t border-gray-500 flex justify-between items-center">
            <span className="Text-Sm text-gray-200">Total</span>
            <span className="Text-Sm text-gray-200">{currency({ coinFormatCents: (called.priceTotal + 200).toString()})}</span>
          </div>
        </ModuleContext>
      </Fragment>
      ))}
    </>
  )
}

export { ListCalleRight }