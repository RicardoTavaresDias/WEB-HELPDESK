import { Modules } from "@/components/modules";
import { Status } from "@/components/ui/status";
import { UiButton } from "@/components/ui/UiButton";
import { IconPenLine } from "@/assets/icon/iconPenLine";
import { IconCicloCheckBig } from "@/assets/icon/iconCicloCheckBig";
import { Link } from "react-router";
import { IconClock } from "@/assets/icon/iconClock";
import { IsProfile } from "@/features/layout/profile";
import { useTechicalCalled } from "../http/use-technical-called"
import { Avatar } from "@/components/ui/avatar";
import { Fragment } from "react/jsx-runtime";
import { currency } from "@/lib/currency";
import { dayjs } from "@/lib/dayjs"



export function IndexCalledTechical(){
  const { data } = useTechicalCalled().query

console.log();

  return (
    <>
      <IsProfile myProfile="technical" />
      <Modules.Root displauFull>
        <Modules.Title title="Meus chamados" />

        {/* Em atendimento */}
        <div className="mt-7 max-sm:mt-1">
          <Status type="in_progress" isText />
          <Modules.Container>

            {data?.CalledInProgress.map(InProgress => (
              <Fragment key={InProgress.id}>
                <Modules.Context isType="30" >
                  <div className="lg:w-[346px]">
                    <div className="flex items-center justify-between">
                        {
                          InProgress.id > 0 && InProgress.id < 10 ? `00${InProgress.id}` :
                            ( InProgress.id > 9 && InProgress.id < 100 ? `0${InProgress.id}` : InProgress.id ) 
                        }
                      <div className="flex gap-1.5 items-center">
                        <Link to={`/chamados/${InProgress.id}`} ><UiButton type="button" icon={IconPenLine} typeColor="gray" typeSize="xxs" /></Link>
                        <UiButton icon={IconCicloCheckBig } typeColor="black" typeSize="xxs" color="#F9FAFA" ><span className="px-1">Encerrar</span></UiButton>
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className="text-base font-semibold text-gray-200">{InProgress.titleCalled}</span>
                      <p className="text-sm">{InProgress.services[0]?.titleService}</p>
                    </div>

                    <div className="flex justify-between mt-4.5 text-base">
                      <span>{dayjs(InProgress.createdAt).format("DD/MM/YYYY HH:mm")}</span>
                      <span>{currency({ coinFormatCents: InProgress.basePrice.price.toString()})}</span>
                    </div>

                    <span className="text-sm tracking-wide text-gray-400">
                      {dayjs().to(InProgress.createdAt)}
                    </span>

                    <div className="my-4 border-t-1 border-gray-500/45"></div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-1.5">
                        <Avatar user={{ name: InProgress.UserTechnical.name, avatar: InProgress.UserTechnical.avatar }} size="w-6.5 h-6.5" />
                        {InProgress.UserTechnical.name}
                      </div>
                      <Status type="in_progress" isIcon />
                    </div>
                  </div>
                </Modules.Context>
              </Fragment>
            ))}

          </Modules.Container>
        </div>
        {/* Em atendimento */}

        {/* Aberto */}
        <div className="mt-7">
          <Status type="open" isText />
          <Modules.Container>

            {data?.CalledOpen.map(open => (
              <Fragment key={open.id}>
                <Modules.Context isType="30">
                  <div className="lg:w-[346px]">
                    <div className="flex items-center justify-between">
                      {
                        open.id > 0 && open.id < 10 ? `00${open.id}` :
                          ( open.id > 9 && open.id < 100 ? `0${open.id}` : open.id ) 
                      }
                      <div className="flex gap-1.5 items-center">
                        <Link to={`/chamados/${open.id}`} ><UiButton type="button" icon={IconPenLine} typeColor="gray" typeSize="xxs" /></Link>
                        <UiButton type="button" icon={IconClock} typeColor="black" typeSize="xxs" color="#F9FAFA" ><span className="px-1">Iniciar</span></UiButton>
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className="text-base font-semibold text-gray-200">{open.titleCalled}</span>
                      <p className="text-sm">{open.services[0]?.titleService}</p>
                    </div>

                    <div className="flex justify-between mt-4.5 text-base">
                      <span>{dayjs(open.createdAt).format("DD/MM/YYYY HH:mm")}</span>
                      <span>{currency({ coinFormatCents: open.basePrice.price.toString()})}</span>
                    </div>

                    <span className="text-sm tracking-wide text-gray-400">
                      {dayjs().to(open.createdAt)}
                    </span>

                    <div className="my-4 border-t-1 border-gray-500/45"></div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-1.5">
                        <Avatar user={{ name: open.UserTechnical.name, avatar: open.UserTechnical.avatar }} size="w-6.5 h-6.5" />
                        {open.UserTechnical?.name}
                      </div>
                      <Status type="open" isIcon />
                    </div>
                  </div>
                </Modules.Context>
              </Fragment>
            ))}

          </Modules.Container>
        </div>
        {/* Aberto */}

        {/* Encerrado */}
        <div className="mt-7">
          <Status type="close" isText />
          <Modules.Container>

            {data?.CalledClose.map(close => (
              <Fragment key={close.id}>
                <Modules.Context isType="30">
                  <div className="lg:w-[346px]">
                    <div className="flex items-center justify-between">
                        {
                          close.id > 0 && close.id < 10 ? `00${close.id}` :
                            ( close.id > 9 && close.id < 100 ? `0${close.id}` : close.id ) 
                        }
                      <div className="flex gap-1.5 items-center">
                        <Link to={`/chamados/${close.id}`} ><UiButton type="button" icon={IconPenLine} typeColor="gray" typeSize="xxs" /></Link>
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className="text-base font-semibold text-gray-200">{close.titleCalled}</span>
                      <p className="text-sm">{close.services[0]?.titleService}</p>
                    </div>

                    <div className="flex justify-between mt-4.5 text-base">
                      <span>{dayjs(close.createdAt).format("DD/MM/YYYY HH:mm")}</span>
                      <span>{currency({ coinFormatCents: close.basePrice.price.toString()})}</span>
                    </div>

                    <span className="text-sm tracking-wide text-gray-400">
                      {dayjs().to(close.createdAt)}
                    </span>

                    <div className="my-4 border-t-1 border-gray-500/45"></div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-1.5">
                        <Avatar user={{ name: close.UserTechnical.name, avatar: close.UserTechnical.avatar }} size="w-6.5 h-6.5" />
                        {close.UserTechnical.name}
                      </div>
                      <Status type="close" isIcon />
                    </div>
                  </div>
                </Modules.Context>
              </Fragment>
            ))}

          </Modules.Container>
        </div>
        {/* Encerrado */}

      </Modules.Root>
    </>
  )
}