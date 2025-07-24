import { Modules } from "@/components/modules";
import { Status } from "@/components/ui/status";
import { useEffect, useState } from "react" 
import { Navigate, useParams } from "react-router" 
import { IsProfile } from "@/features/layout/profile";
import { currency } from "@/lib/currency";
import { useCalledById } from "../http/use-called-by-id"
import { type Called } from "../types/calleds-user-response"
import { Loading } from "@/components/ui/loading";
import { dayjs } from "@/lib/dayjs"
import { Avatar } from "@/components/ui/avatar";
import { ModuleTitleStatus } from "../components/module-titile-status";
import { AddServices } from "../components/add-services";
import { ModalCreateServices } from "../components/modal-create-services";

export function CalledDetails(){
  const [called, setCalled] = useState<Called | null>(null)
  const [modalServices, setModalServices] = useState(false)
  const { id } = useParams()

  if (!id) {
    return <Navigate replace to="/" />
  }

  const { data, isLoading } = useCalledById(id).query
  
  useEffect(() => {
    if (data) {
    setCalled(data[0])
  }
  }, [data])

  return (
    <>
      {isLoading && <Loading />}

      <IsProfile myProfile="technical" />
      <ModalCreateServices modalServices={modalServices} setModalServices={setModalServices} idCalled={called?.id} />
      
      <Modules.Root>
        <ModuleTitleStatus data={called} />

        <Modules.Container>
          <Modules.Context isType="60">
            <div className="flex justify-between items-center mb-1">
              <span className="Text-Xs text-gray-300">
                {called &&  (
                  called?.id > 0 && called?.id < 10 ? `00${called?.id}` :
                    ( called?.id > 9 && called?.id < 100 ? `0${called?.id}` : called?.id )  
                )}
              </span>
              {called && <Status type={called?.callStatus as  "open" | "in_progress" | "close"} isText /> }
            </div>
  
            <span className="text-gray-200 text-base font-medium">{called?.titleCalled}</span>

            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Descrição</span>
              <p className="text-sm font-normal text-gray-200" >
                {called?.description}
              </p>
            </div>

            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Categoria</span>
              <p className="text-sm font-normal text-gray-200">{called?.services[0]?.titleService}</p>
            </div>
           
            <div className="mt-5 flex justify-between">
              <div>
                <span className="text-gray-400 Text-Xs">Criado em</span>
                <p className="text-sm font-normal text-gray-200">{dayjs(called?.createdAt).format("DD/MM/YYYY HH:mm")}</p>
              </div>
              <div className="w-50">
                <span className="text-gray-400 Text-Xs">Atualizado em</span>
                <p className="text-sm font-normal text-gray-200">{dayjs(called?.updatedAt).format("DD/MM/YYYY HH:mm")}</p>
              </div>
            </div>

            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Cliente</span>
              <div className="flex gap-2 mt-2 items-center">
                {called && <Avatar user={{ name: called?.UserCustomer.name, avatar: called?.UserCustomer.avatar }} size="w-8 h-8" sizeText="text-[12px]" /> }
                <span className="text-gray-200 Text-Sm">{called?.UserCustomer.name}</span>
              </div>
            </div>
          </Modules.Context>

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
                  <p className="text-sm font-normal text-gray-200 mt-2">{called?.basePrice.description}</p>
                  <span className="Text-Xs text-gray-200">{currency({ coinFormatCents: String(called?.basePrice.price) })}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-normal text-gray-200">Adicionais</p>
                  <span className="Text-Xs text-gray-200">{currency({ coinFormatCents: String(called?.priceTotal) })}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-gray-500 flex justify-between items-center">
              <span className="Text-Sm text-gray-200">Total</span>
              <span className="Text-Sm text-gray-200">{called && currency({ coinFormatCents: String(called?.priceTotal + called?.basePrice.price) })}</span>
            </div>
          </Modules.Context>

          <AddServices calledServices={called?.services} modalServices={modalServices} setModalServices={setModalServices} calledId={called?.id}/>

        </Modules.Container>
      </Modules.Root>
    </>
  )
}