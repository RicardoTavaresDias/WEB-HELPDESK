import { Navigate, useParams } from "react-router"
import { IsProfile } from "@/features/layout/profile"
import { Modules } from "@/components/modules"
import { useCalledDetails } from "../http/use-called-details"
import { ModuleDetailsCalledLeft } from "../components/module-details-called-left"
import { ModuleDetailsCalledRight } from "../components/module-details-called-right"
import { CalledComments } from "../components/module-called-comments"
import { LoadingCalledDetails } from "../components/loading-called-details"

export function CallDetails(){
  const { id } = useParams()
  
  if (!id) {
    return <Navigate replace to="/" />
  }

  const { data: dataDetails } = useCalledDetails(id).query

  return (
    <>
      <IsProfile myProfile="customers" />

      <Modules.Root>
        <Modules.Title title="Chamado detalhado" to="/" />
        <Modules.Container>

          {!dataDetails && <LoadingCalledDetails />}
          
          {dataDetails &&
            <>
              <ModuleDetailsCalledLeft dataDetails={dataDetails} />
              <ModuleDetailsCalledRight dataDetails={dataDetails} />

              {dataDetails.calledComments.length > 0 &&
                <div className="w-full">
                  <CalledComments data={dataDetails.calledComments} />
                </div>
              }
            </>
          }    
        </Modules.Container>
      </Modules.Root>
    </>
  )
}