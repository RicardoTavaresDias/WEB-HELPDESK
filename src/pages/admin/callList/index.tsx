import avatar from "../../../assets/img/Avatar.svg";
import { IconPenLine } from "../../../assets/icon/iconPenLine";
import { Status } from "../../../components/ui/status";
import { Panel } from "../../../components/table";

import { Fragment } from "react";
import { called } from "../../../database/admCallList";
import { Link } from "react-router";
import { UiButton } from "../../../components/ui/UiButton";

export function CallList() {

  return (
    <>
      <div className="w-full m-auto ">
        <span className="max-sm:hidden Text-Xl text-blue-dark">Chamados</span>
        <span className="lg:hidden text-xl font-semibold text-blue-dark">Chamados</span>

        <div className=" lg:mt-6 mt-4">

          <Panel.Root className="grid-cols-[auto_auto_auto_auto_auto_auto_auto_80px]">
            <Panel.Column>Atualizado em</Panel.Column>
            <Panel.Column>Id</Panel.Column>
            <Panel.Column>Título e Serviço</Panel.Column>
            <Panel.Column>Valor total</Panel.Column>
            <Panel.Column>Cliente</Panel.Column>
            <Panel.Column>Técnico</Panel.Column>
            <Panel.Column>Status</Panel.Column>
            <Panel.Column>{""}</Panel.Column>

            {called.map((item) => (
              <Fragment key={item.id}>
                <Panel.Rows>{item.date}</Panel.Rows>
                <Panel.Rows>{item.id}</Panel.Rows>
                <Panel.Rows>
                  <div>
                    <span className="flex flex-col Text-Sm ">
                      {item.service.title}
                    </span>
                    {item.service.description}
                  </div>
                </Panel.Rows>
                <Panel.Rows>{item.value}</Panel.Rows>
                <Panel.Rows>
                  <div className="flex gap-2 justify-center items-center">
                    <img src={avatar} className="w-5 h-5" />
                    {item.customer.name}
                  </div>
                </Panel.Rows>
                <Panel.Rows>
                  <div className="flex gap-2 justify-center items-center">
                    <img src={avatar} className="w-5 h-5" />
                    {item.technical.name}
                  </div>
                </Panel.Rows>
                <Panel.Rows><Status type={item.status as "open" | "progress" | "close"} /></Panel.Rows>
                <Panel.Rows>
                  <Link to={`/chamados/${item.id}`}><UiButton icon={IconPenLine} typeSize="xxs" typeColor="gray" /></Link>
                </Panel.Rows>
              </Fragment>
            ))}        
          </Panel.Root>

          {/* Mobile */}
          <Panel.Root className="grid-cols-[auto_auto_auto_auto]" mobile={true}>
            <Panel.Column>Atualizado em</Panel.Column>
            <Panel.Column>Título e Serviço</Panel.Column>
            <Panel.Column>Status</Panel.Column>
            <Panel.Column>{""}</Panel.Column>

            {called.map((item) => (
              <Fragment key={item.id}>
                <Panel.Rows>{item.date}</Panel.Rows>
                <Panel.Rows>
                  <div>
                      <span className="flex flex-col text-sx font-bold mb-1">
                        {item.service.title}
                      </span>
                      {item.service.description}
                    </div>
                </Panel.Rows>
                <Panel.Rows><Status type={item.status as "open" | "progress" | "close"}/></Panel.Rows>
                <Panel.Rows>
                  <Link to={`/chamados/${item.id}`}><UiButton icon={IconPenLine} typeSize="xxs" typeColor="gray" /></Link>
                </Panel.Rows>
              </Fragment>
            ))}
          </Panel.Root>
          {/* Mobile */}
        </div>
      </div>
    </>
  )
}