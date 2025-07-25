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
          <ModuleDetailsCalledLeft called={called} />
          <ModuleDetailsCalledRight called={called} />
          <AddServices calledServices={called?.services} modalServices={modalServices} setModalServices={setModalServices} calledId={called?.id}/>
        </Modules.Container>

      </Modules.Root>
    </>
  )
}