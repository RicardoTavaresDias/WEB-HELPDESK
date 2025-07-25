import { Navigate, useParams } from "react-router" 
import { Modules } from "@/components/modules"
import { IconCicleHelp } from "@/assets/icon/iconCicleHelp";
import { IconCicloCheckBig } from "@/assets/icon/iconCicloCheckBig";
import { IconClock } from "@/assets/icon/iconClock";
import { UiButton } from "@/components/ui/UiButton"
import { useListCalled } from "../http/use-list-called"
import { updateStatus } from "../http/use-update-status"
import { Loading } from "@/components/ui/loading"
import { Alert } from "@/components/ui/alert"
import { Fragment } from "react/jsx-runtime"
import { ListCalleLeft } from "../components/list-called-left";
import { ListCalleRight } from "../components/list-called-right";

export function CallListdetails(){
  const { id } = useParams()

  if (!id) {
    return <Navigate replace to="/" />
  }

  const { data: calleds, isLoading, error, isError } = useListCalled(Number(id)).query
  const { error: errorUpdate, mutateAsync: onSubmitStatus, isError: isErrorUpdate } = updateStatus()

  return (
    <>
    {isLoading && <Loading />}
      <Alert severity="error" open={isError || isErrorUpdate}>
        {error?.message}
        {errorUpdate?.message}
      </Alert>
        
    <Modules.Root>
        <Modules.Title title="Chamado detalhado" to="/" >
          {calleds && calleds.map((called) => {
            if(called.callStatus === "open"){
              return (
                <Fragment key={called.id}>
                  <UiButton typeColor="gray" typeSize="md" icon={IconClock} onClick={() => onSubmitStatus({id: called.id, status: "in_progress"})} >Em Atendimento</UiButton>
                  <UiButton typeColor="gray" typeSize="md" icon={IconCicloCheckBig} onClick={() => onSubmitStatus({id: called.id, status: "close"})} >Encerrado</UiButton>
                </Fragment>
              )
            }
              
            if(called.callStatus === "in_progess") {
              return (
                <Fragment key={called.id}>
                  <UiButton typeColor="gray" typeSize="md" icon={IconCicleHelp} onClick={() => onSubmitStatus({id: called.id, status: "open"})} >Aberto</UiButton>
                  <UiButton typeColor="gray" typeSize="md" icon={IconCicloCheckBig} onClick={() => onSubmitStatus({id: called.id, status: "close"})} >Encerrado</UiButton>
                </Fragment>
              )
            }
              
            return (
              <Fragment key={called.id}>
                <UiButton typeColor="gray" typeSize="md" icon={IconCicleHelp} onClick={() => onSubmitStatus({id: called.id, status: "open"})} >Aberto</UiButton>
                <UiButton typeColor="gray" typeSize="md" icon={IconClock} onClick={() => onSubmitStatus({id: called.id, status: "in_progress"})} >Em Atendimento</UiButton>
              </Fragment>
            )
          })}
         
        </Modules.Title>

        <Modules.Container>
          <ListCalleLeft calleds={calleds} />
          <ListCalleRight calleds={calleds} />
        </Modules.Container>
      </Modules.Root>
    </>
  )
}