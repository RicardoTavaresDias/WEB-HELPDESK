import { Panel } from "@/components/table"
import avatar from "@/assets/img/Avatar.svg"
import { IconPenLine } from "@/assets/icon/iconPenLine";

import { ButtonTime } from "@/components/ui/buttonTime";
import { Modules } from "@/components/modules";
import { Link } from "react-router";
import { UiButton } from "@/components/ui/UiButton";
import { IconPlus } from "@/assets/icon/iconPlus";

export function Technical(){
  return (
    <>
      <div className="mb-7">
        <Modules.Title title="Técnicos" isButton={true} >
          <Link to={"/tecnicos/novo"}>
            <UiButton type="button" icon={IconPlus} typeColor="black" typeSize="xs" color="#F9FAFA" >{<span className="max-sm:hidden">Novo</span>}</UiButton>
          </Link>
        </Modules.Title>
      </div>
      
      <Panel.Root className="grid-cols-[auto_auto_350px_73px]">
        <Panel.Column>Nome</Panel.Column>
        <Panel.Column>E-mail</Panel.Column>
        <Panel.Column>Disponibilidade</Panel.Column>
        <Panel.Column>{""}</Panel.Column>

        <Panel.Rows>
          <div className="flex gap-2 justify-center items-center">
            <img src={avatar} className="w-5 h-5" />
            Carlos Silva
          </div>
        </Panel.Rows>
        <Panel.Rows>
          carlos.silva@test.com
        </Panel.Rows>
        <Panel.Rows>
          <div className="flex gap-2">
            <ButtonTime type="read">08:00</ButtonTime>
            <ButtonTime type="read">09:00</ButtonTime>
            <ButtonTime type="read">10:00</ButtonTime>
            <ButtonTime type="read">11:00</ButtonTime>
            <ButtonTime type="read">+4</ButtonTime>
          </div>
        </Panel.Rows>
        <Panel.Rows>
          <Link to="/tecnicos/edicao" ><UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} /></Link>
        </Panel.Rows>
      </Panel.Root>

      {/* Mobile */}
      <Panel.Root className="grid-cols-[auto_auto_63px]" mobile={true}>
        <Panel.Column>Nome</Panel.Column>
        <Panel.Column>Disponibilidade</Panel.Column>
        <Panel.Column>{""}</Panel.Column>

        <Panel.Rows>
          <div className="flex gap-2 justify-center items-cente">
            <img src={avatar} className="w-5 h-5" />
            Carlos Silva
          </div>
        </Panel.Rows>
        <Panel.Rows>
          <div className="flex gap-1">
            <ButtonTime type="read">08:00</ButtonTime>
            <ButtonTime type="read">+4</ButtonTime>
          </div>
        </Panel.Rows>
        <Panel.Rows>
          <Link to="/tecnicos/edicao" ><UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} /></Link>
        </Panel.Rows>
      </Panel.Root>
      {/* Mobile */}
    </>
  )
}