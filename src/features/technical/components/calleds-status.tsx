import { Fragment } from "react/jsx-runtime";
import { Modules } from "@/components/modules";
import { UiButton } from "@/components/ui/UiButton";
import { IconPenLine } from "@/assets/icon/iconPenLine";
import { Link } from "react-router";
import { IconCicloCheckBig } from "@/assets/icon/iconCicloCheckBig";
import { currency } from "@/lib/currency";
import { dayjs } from "@/lib/dayjs"
import { Avatar } from "@/components/ui/avatar";
import { Status } from "@/components/ui/status";
import type { Called } from "../types/calleds-user-response";
import { useCalledUpdateStatus, type useCalledUpdateStatusType } from "../http/use-called-update-status"
import { LoaderSM } from "@/components/ui/loading";

export function CalledsStatus ({ dataCalleds }: { dataCalleds?: Called[] }) {
  const { isPending, mutateAsync: onUpdateStatus } = useCalledUpdateStatus()

  const onSubmit = ({ id, status }: useCalledUpdateStatusType) => {
    const newStatusCalled = status === "open" ? "in_progress" : "close"
    onUpdateStatus({ id: id, status: newStatusCalled })
  }
  
  return (
    <>
      {dataCalleds?.map(called => (
        <Fragment key={called.id}>
          <Modules.Context isType="30" >
            <div className="lg:w-[346px]">
              <div className="flex items-center justify-between">
                  {
                    called.id > 0 && called.id < 10 ? `00${called.id}` :
                      ( called.id > 9 && called.id < 100 ? `0${called.id}` : called.id ) 
                  }
                <div className="flex gap-1.5 items-center">
                  <Link to={`/chamados/${called.id}`} ><UiButton type="button" icon={IconPenLine} typeColor="gray" typeSize="xxs" /></Link>
                  {called.callStatus === "close" ||
                    <UiButton 
                      icon={isPending ? LoaderSM : IconCicloCheckBig} 
                      typeColor="black" 
                      typeSize="xxs" 
                      color="#F9FAFA" 
                      onClick={() => onSubmit({ id: called.id, status: called.callStatus })}
                    >
                      <span className="px-1">
                        {called.callStatus === "open" ? "Iniciar" : "Encerrar"}
                      </span>
                    </UiButton> 
                  }
                </div>
              </div>

              <div className="mt-3">
                <span className="text-base font-semibold text-gray-200">{called.titleCalled}</span>
                <p className="text-sm">{called.services[0]?.titleService}</p>
              </div>

              <div className="flex justify-between mt-4.5 text-base">
                <span>{dayjs(called.createdAt).format("DD/MM/YYYY HH:mm")}</span>
                <span>{currency({ coinFormatCents: String(called?.priceTotal + called?.basePrice.price) })}</span>
              </div>

              <span className="text-sm tracking-wide text-gray-400">
                {dayjs().to(called.createdAt)}
              </span>

              <div className="my-4 border-t-1 border-gray-500/45"></div>

              <div className="flex justify-between">
                <div className="flex items-center gap-1.5">
                  <Avatar user={{ name: called.UserTechnical.name, avatar: called.UserTechnical.avatar }} size="w-6.5 h-6.5" sizeText="text-[9px]" />
                  {called.UserTechnical.name}
                </div>
                <Status type={called.callStatus as "open" | "in_progress" | "close"} isIcon />
              </div>
            </div>
          </Modules.Context>
        </Fragment>
      ))}
    </>
  )
  
}