import { IconPlus } from "@/assets/icon/iconPlus";
import { IconTrash } from "@/assets/icon/iconTrash";
import { Modules } from "@/components/modules";
import { UiButton } from "@/components/ui/UiButton";
import { currency } from "@/lib/currency";
import { type Service } from "../types/calleds-user-response"
import { useRemoveervices } from "../http/use-remove-services";
import { LoaderSM } from "@/components/ui/loading";
import { useState } from "react";

type AddServicesType = {
  setModalServices: (value: boolean) => void
  modalServices: boolean
  calledId?: number
  calleddServices?: Service[] | null
}

export function AddServices ({ setModalServices, modalServices, calleddServices, calledId }: AddServicesType) {
  const [remocveId, setRemoveId] = useState<string | null>(null)
  const { mutateAsync: onRemove, isPending } = useRemoveervices()

  return  (
    <>
      <Modules.Context isType="60">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 Text-Xs">Serviços adicionais</span>
          <UiButton type="button" typeColor="black" typeSize="xxs" icon={IconPlus} color="#F9FAFA" onClick={() => setModalServices(!modalServices)}/>
        </div>

        <div className="mt-4 flex flex-col gap-4">

          {calleddServices?.map(service => (
            <div className="flex items-center justify-between" key={service.id}>
              <p className="text-sm font-semibold text-gray-200">{service.titleService}</p>
              <div className="flex items-center gap-6">
                <span className="Text-Xs text-gray-200">{currency({ coinFormatCents: service.price })}</span>
                <UiButton 
                  type="button" 
                  typeColor="gray" 
                  typeSize="xxs" 
                  icon={
                    remocveId === service.id &&
                    isPending ? LoaderSM : IconTrash
                  } 
                  onClick={() => { onRemove({ calledId: calledId!, idServices: service.id }), setRemoveId(service.id) }}
                  disabled={isPending}
                />
              </div>
            </div>
          ))}
          
        </div>
      </Modules.Context>
    </>
  )
}