import { Modules } from "@/components/modules"
import { Status } from "@/components/ui/status"
import { dayjs } from "@/lib/dayjs"
import type { Called } from "../types/calleds-useCustomers-response"

type ModuleDetailsCalledLeftProps = {
  dataDetails: Called
}

function ModuleDetailsCalledLeft ({ dataDetails }: ModuleDetailsCalledLeftProps) {
  return (
    <>
      <Modules.Context isType="50">
        <div className="flex justify-between items-center mb-1">
          <span className="Text-Xs text-gray-300">
              {
                dataDetails.id > 0 && dataDetails.id < 10 ? `00${dataDetails.id}` :
                  ( dataDetails.id > 9 && dataDetails.id < 100 ? `0${dataDetails.id}` : dataDetails.id ) 
              }
          </span>
          <Status type={dataDetails.callStatus as "open" | "in_progress" | "close"} isText />
        </div>

        <span className="text-gray-200 text-base font-medium">{dataDetails.titleCalled}</span>

        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Descrição</span>
          <p className="text-sm font-normal text-gray-200" >
            {dataDetails.description}
          </p>
        </div>

        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Categoria</span>
          <p className="text-sm font-normal text-gray-200">{dataDetails.services[0].titleService}</p>
        </div>

        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Horário agendado</span>
          <p className="text-sm font-normal text-gray-200">{dayjs(dataDetails.appointmentTime).format("DD/MM/YYYY HH:mm")}</p>
        </div>
        
        <div className="mt-5 flex justify-between">
          <div>
            <span className="text-gray-400 Text-Xs">Criado em</span>
            <p className="text-sm font-normal text-gray-200">{dayjs(dataDetails.createdAt).format("DD/MM/YYYY HH:mm")}</p>
          </div>
          <div>
            <span className="text-gray-400 Text-Xs">Atualizado em</span>
            <p className="text-sm font-normal text-gray-200">{dayjs(dataDetails.updatedAt).format("DD/MM/YYYY HH:mm")}</p>
          </div>
        </div>
      </Modules.Context>
    </>
  )
}

export { ModuleDetailsCalledLeft }