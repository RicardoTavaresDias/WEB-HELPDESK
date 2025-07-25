import { Navigate, useParams } from "react-router"
import { IsProfile } from "@/features/layout/profile"
import { Modules } from "@/components/modules"
import { useCalledDetails } from "../http/use-called-details"
import { Loading } from "@/components/ui/loading"
import { ModuleDetailsCalledLeft } from "../components/module-details-called-left"
import { ModuleDetailsCalledRight } from "../components/module-details-called-right"

export function CallDetails(){
  const { id } = useParams()
  
  if (!id) {
    return <Navigate replace to="/" />
  }

  const { data: dataDetails, isLoading } = useCalledDetails(id).query

  if(isLoading || !dataDetails){
    return <Loading />
  }

  return (
    <>
      <IsProfile myProfile="customers" />

      <Modules.Root>
        <Modules.Title title="Chamado detalhado" to="/" />
        <Modules.Container>
          <ModuleDetailsCalledLeft dataDetails={dataDetails} />
          <ModuleDetailsCalledRight dataDetails={dataDetails} />
        </Modules.Container>
      </Modules.Root>
    </>
  )
}