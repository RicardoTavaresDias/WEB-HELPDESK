import { Panel } from "../../../components/table"
import avatar from "../../../assets/img/Avatar.svg"
import plus from "../../../assets/icon/plus.svg";

import { ButtonTime } from "../../../components/ui/buttonTime";
import { Modules } from "../../../components/modules";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router";

export function Technical(){
  return (
    <>
      <div className="mb-7">
        <Modules.Title title="Técnicos" isButton={true} >
          <Link to={"/tecnicos/novo"}>
            <div className="max-sm:hidden">
              <Button typeColor="black" typeSize="sm">
                <div className="flex gap-2 items-center"><img src={plus} className="w-4 h-4" />Novo</div>
              </Button>
            </div>
            <div className="lg:hidden"><Button typeColor="black" typeSize="base"><img src={plus} className="w-4 h-4" /></Button></div>
          </Link>
        </Modules.Title>
      </div>
      
      <Panel.Root className="grid-cols-[auto_auto_350px_73px]">
        <Panel.Column>Nome</Panel.Column>
        <Panel.Column>E-mail</Panel.Column>
        <Panel.Column>Disponibilidade</Panel.Column>
        <Panel.Column>Icon</Panel.Column>

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
          <Link to={"/tecnicos/edicao"}>
            <Button icon="ban"></Button>
          </Link>
        </Panel.Rows>
      </Panel.Root>

      {/* Mobile */}
      <Panel.Root className="grid-cols-[auto_auto_63px]" mobile={true}>
        <Panel.Column>Nome</Panel.Column>
        <Panel.Column>Disponibilidade</Panel.Column>
        <Panel.Column>Icon</Panel.Column>

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
          <Link to={"/tecnicos/edicao"}>
            <Button icon="ban"></Button>
          </Link>
        </Panel.Rows>
      </Panel.Root>
      {/* Mobile */}
    </>
  )
}