import { Modules } from "@/components/modules"
import { Avatar } from "@/components/ui/avatar"
import { Status } from "@/components/ui/status"
import { dayjs } from "@/lib/dayjs"
import type { Called } from "@/types/calleds-response"
import { Loading } from "@/components/ui/loading"

type ModuleDetailsCalledLeftProps = {
  called: Called | null
}

function ModuleDetailsCalledLeft ({ called }: ModuleDetailsCalledLeftProps) {
  if(!called) return <Loading />

  return (
    <>
      <Modules.Context isType="60">
        <div className="flex justify-between items-center mb-1">
          <span className="Text-Xs text-gray-300">
            {called &&  (
              called.id > 0 && called.id < 10 ? `00${called.id}` :
                ( called.id > 9 && called.id < 100 ? `0${called.id}` : called.id )  
            )}
          </span>
          <Status type={called.callStatus as "open" | "in_progress" | "close"} isText /> 
        </div>

        <span className="text-gray-200 text-base font-medium">{called.titleCalled}</span>

        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Descrição</span>
          <p className="text-sm font-normal text-gray-200" >
            {called.description}
          </p>
        </div>

        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Categoria</span>
          <p className="text-sm font-normal text-gray-200">{called.services[0].titleService}</p>
        </div>
        
        <div className="mt-5 flex justify-between">
          <div>
            <span className="text-gray-400 Text-Xs">Criado em</span>
            <p className="text-sm font-normal text-gray-200">{dayjs(called.createdAt).format("DD/MM/YYYY HH:mm")}</p>
          </div>
          <div className="lg:w-50">
            <span className="text-gray-400 Text-Xs">Atualizado em</span>
            <p className="text-sm font-normal text-gray-200">{dayjs(called.updatedAt).format("DD/MM/YYYY HH:mm")}</p>
          </div>
        </div>

        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Cliente</span>
          <div className="flex gap-2 mt-2 items-center">
            {called && <Avatar user={{ name: called.UserCustomer.name, avatar: called.UserCustomer.avatar }} size="w-8 h-8" sizeText="text-[12px]" /> }
            <span className="text-gray-200 Text-Sm">{called.UserCustomer.name}</span>
          </div>
        </div>
      </Modules.Context>
    </>
  )
}

export { ModuleDetailsCalledLeft }