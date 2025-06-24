import { Fragment } from "react";
import { Modules } from "@/components/modules"
import { IsProfile } from "@/components/profile"
import { Panel } from "@/components/table"
import avatar from "@/assets/img/Avatar.svg";

import { called } from "@/database/admCallList";
import { Status } from "@/components/ui/status";
import { Link } from "react-router";
import { UiButton } from "@/components/ui/UiButton";
import { IconEye } from "@/assets/icon/iconEye";

export function Called(){
  return (
    <>
      <IsProfile myProfile="customers" /> 
      
      <div className="lg:mb-7">
        <Modules.Root displauFull >
          <Modules.Title title="Meus chamados" />
        </Modules.Root>
      </div>

      <Panel.Root className="grid-cols-[auto_auto_auto_auto_auto_auto_auto_80px]">
        <Panel.Column>Atualizado em</Panel.Column>
        <Panel.Column>Id</Panel.Column>
        <Panel.Column>Título</Panel.Column>
        <Panel.Column>Serviço</Panel.Column>
        <Panel.Column>Valor total</Panel.Column>
        <Panel.Column>Técnico</Panel.Column>
        <Panel.Column>Status</Panel.Column>
        <Panel.Column>{""}</Panel.Column>

        {called.map(item => (
          <Fragment key={item.id}>
            <Panel.Rows>{item.date}</Panel.Rows>
            <Panel.Rows>
              <span className="flex flex-col Text-Sm ">
               {item.id}
              </span>
            </Panel.Rows>
            <Panel.Rows>
              <span className="flex flex-col Text-Sm ">
                {item.service.title}
              </span>
            </Panel.Rows>
            <Panel.Rows>{item.service.description}</Panel.Rows>
            <Panel.Rows>{item.value}</Panel.Rows>
            <Panel.Rows>
              <div className="flex gap-2 justify-center items-center">
                <img src={avatar} className="w-5 h-5" />
                {item.technical.name}
              </div>
            </Panel.Rows>
             <Panel.Rows><Status type={item.status as "open" | "progress" | "close"} /></Panel.Rows>
             <Panel.Rows>
              <Link to={`/chamados/${item.id}`}><UiButton type="button" icon={IconEye} typeSize="xxs" typeColor="gray" /></Link>
            </Panel.Rows>
          </Fragment>
        ))}

      </Panel.Root>

      {/* Mobile */}
      <Panel.Root className="grid-cols-[auto_auto_72px_auto]" mobile={true}>
        <Panel.Column>Atualizado em</Panel.Column>
        <Panel.Column>Título</Panel.Column>
        <Panel.Column>Status</Panel.Column>
        <Panel.Column>{""}</Panel.Column>

        {called.map(item => (
          <Fragment key={item.id}>
            <Panel.Rows>{item.date}</Panel.Rows>
            <Panel.Rows>
              <span className="flex flex-col text-sx font-bold mb-1">
                {item.service.title}
              </span>
            </Panel.Rows>
            <Panel.Rows><Status type={item.status as "open" | "progress" | "close"}/></Panel.Rows>
            <Panel.Rows>
              <Link to={`/chamados/${item.id}`}><UiButton type="button" icon={IconEye} typeSize="xxs" typeColor="gray" /></Link>
            </Panel.Rows>
          </Fragment>
        ))}
      </Panel.Root>
      {/* Mobile */}
    </>
  )
}