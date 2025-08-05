import { Modules } from "@/components/modules";
import { useEffect, useState } from "react" 
import { Navigate, useParams } from "react-router" 
import { IsProfile } from "@/features/layout/profile";
import { useCalledById } from "../http/use-called-by-id"
import { type Called } from "@/types/calleds-response"
import { ModuleTitleStatus } from "../components/module-titile-status";
import { AddServices } from "../components/add-services";
import { ModalCreateServices } from "../components/modal-create-services";
import { ModuleDetailsCalledLeft } from "../components/module-details-called-left";
import { ModuleDetailsCalledRight } from "../components/module-details-called-right";
import { CalledComments } from "@/components/ui/module-called-comments";
import { ModalCreateComment } from "@/components/ui/modal-create-comment";
import { LoadingCalledDetails } from "../components/loading-called-details";

export function CalledDetails(){
  const [called, setCalled] = useState<Called | null>(null)
  const [modalServices, setModalServices] = useState(false)
  const [modalComment, setModalComment] = useState(false)
  const { id } = useParams()

  if (!id) {
    return <Navigate replace to="/" />
  }

  const { data, isLoading, isFetching } = useCalledById(id).query
  
  useEffect(() => {
    if (Array.isArray(data)) {
      setCalled(data[0])
    }
  }, [data])

  return (
    <>
      <IsProfile myProfile="technical" />
      <ModalCreateServices 
        modalServices={modalServices}
        setModalServices={setModalServices} 
        idCalled={called?.id} 
      />
      <ModalCreateComment 
        modalComment={modalComment} 
        setModalComment={setModalComment}
        idCalled={called?.id} 
        queryKeyIndex="called_byId"
      />
      
      <Modules.Root>
        <ModuleTitleStatus data={called} />

        <Modules.Container>

          {isLoading && <LoadingCalledDetails /> || isFetching && <LoadingCalledDetails />}

          {!isFetching && called &&
            <>
              <ModuleDetailsCalledLeft called={called} />
              <ModuleDetailsCalledRight called={called} />
              <AddServices 
                calledServices={called?.services} 
                modalServices={modalServices} 
                setModalServices={setModalServices} 
                calledId={called?.id} 
                statusCalled={called?.callStatus} 
              />
            </>
          }

        </Modules.Container>

        <div className="w-full mt-6">
          <CalledComments 
            dataComments={called?.calledComments} 
            modalComment={modalComment} 
            setModalComment={setModalComment}
            statusCalled={called?.callStatus} 
            queryKeyIndex="called_byId"
          />
        </div>

      </Modules.Root>
    </>
  )
}