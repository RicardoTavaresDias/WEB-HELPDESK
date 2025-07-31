import { IconCicleHelp } from "@/assets/icon/iconCicleHelp";
import { IconCicloCheckBig } from "@/assets/icon/iconCicloCheckBig";
import { IconClock } from "@/assets/icon/iconClock";
import { Modules } from "@/components/modules";
import { UiButton } from "@/components/ui/UiButton";
import { useCalledUpdateStatusById } from "../http/use-called-update-status";
import { type Called } from "../types/calleds-user-response"
import { Loading } from "@/components/ui/loading";

interface UpdateStatusType {
  data: Called | null
}

function ModuleTitleStatus ({ data }: UpdateStatusType) {
  const { mutateAsync: onUpdateStatus, isPending } = useCalledUpdateStatusById()
  const calledStatus  = data

  return (
    <>
      {isPending && <Loading />}
      
      <Modules.Title title="Chamado detalhado" to="/">
        {calledStatus?.callStatus === "open" &&
          <>
            <UiButton type="button" typeColor="gray" typeSize="md" icon={IconClock} onClick={() => onUpdateStatus({ id: calledStatus.id, status: "close" })} >Encerrar</UiButton>
            <UiButton type="button" typeColor="black" typeSize="md" color="#F9FAFA" icon={IconCicloCheckBig} onClick={() => onUpdateStatus({ id: calledStatus.id, status: "in_progress" })} >Iniciar atendimento</UiButton>
          </>
        }
        {calledStatus?.callStatus === "in_progress" &&
          <>
            <UiButton type="button" typeColor="gray" typeSize="md" icon={IconCicleHelp} onClick={() => onUpdateStatus({ id: calledStatus.id, status: "open" })} >Abrir</UiButton>
            <UiButton type="button" typeColor="black" typeSize="md" icon={IconCicloCheckBig} color="#F9FAFA" onClick={() => onUpdateStatus({ id: calledStatus.id, status: "close" })} >Encerrar</UiButton>
          </>
        }
        {calledStatus?.callStatus === "close" &&
          <>
            <UiButton type="button" typeColor="gray" typeSize="md" icon={IconCicleHelp} onClick={() => onUpdateStatus({ id: calledStatus.id, status: "open" })} >Abrir</UiButton>
            <UiButton type="button" typeColor="black" typeSize="md" color="#F9FAFA" icon={IconClock} onClick={() => onUpdateStatus({ id: calledStatus.id, status: "in_progress" })} >Iniciar atendimento</UiButton>
          </>
        }
      </Modules.Title>
    </>
  )
}

export { ModuleTitleStatus }