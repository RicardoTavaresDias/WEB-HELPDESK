import { Modules } from "@/components/modules";
import { useEffect, useState } from "react" 
import { Navigate, useParams } from "react-router" 
import { IsProfile } from "@/features/layout/profile";
import { useCalledById } from "../http/use-called-by-id"
import { type Called } from "../types/calleds-user-response"
import { Loading } from "@/components/ui/loading";
import { ModuleTitleStatus } from "../components/module-titile-status";
import { AddServices } from "../components/add-services";
import { ModalCreateServices } from "../components/modal-create-services";
import { ModuleDetailsCalledLeft } from "../components/module-details-called-left";
import { ModuleDetailsCalledRight } from "../components/module-details-called-right";
import { CalledComments } from "../components/module-called-comments";
import { ModalCreateComment } from "../components/modal-create-comment";

export function CalledDetails(){
  const [called, setCalled] = useState<Called | null>(null)
  const [modalServices, setModalServices] = useState(false)
  const [modalComment, setModalComment] = useState(false)
  const { id } = useParams()

  if (!id) {
    return <Navigate replace to="/" />
  }

  const { data, isLoading } = useCalledById(id).query
  
  useEffect(() => {
    if (Array.isArray(data)) {
      setCalled(data[0])
    }
  }, [data])

  return (
    <>
      {isLoading && <Loading />}

      <IsProfile myProfile="technical" />
      <ModalCreateServices modalServices={modalServices} setModalServices={setModalServices} idCalled={called?.id} />
      <ModalCreateComment modalComment={modalComment} setModalComment={setModalComment} idCalled={called?.id} />
      
      <Modules.Root>
        <ModuleTitleStatus data={called} />

        <Modules.Container>
          <ModuleDetailsCalledLeft called={called} />
          <ModuleDetailsCalledRight called={called} />
          <AddServices calledServices={called?.services} modalServices={modalServices} setModalServices={setModalServices} calledId={called?.id} />

          {/* <Modules.Context isType="40">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm" >Itens</span>
                <UiButton typeColor="black" typeSize="xxs" icon={IconPlus} color="#F9FAFA" />
              </div>

              <div className="w-full mt-4 rounded-sm p-4 bg-gray-500/30 shadow-md">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-300">Impressora</p>
                  <span className="text-sm text-gray-300">24008W0363</span>
                </div>
              </div>

              <div className="w-full mt-4 rounded-sm p-4 bg-gray-500/30 shadow-md">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-300">Computador</p>
                  <span className="text-sm text-gray-300">BRJ402CQ08</span>
                </div>
              </div>

              <div className="w-full mt-4 rounded-sm p-4 bg-gray-500/30 shadow-md">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-300">Monitor</p>
                  <span className="text-sm text-gray-300">BRC45001XW</span>
                </div>
              </div>
            </div>
          </Modules.Context> */}

        </Modules.Container>

        <div className="w-full mt-6">
          <CalledComments data={called?.calledComments} modalComment={modalComment} setModalComment={setModalComment} />
        </div>

      </Modules.Root>
    </>
  )
}