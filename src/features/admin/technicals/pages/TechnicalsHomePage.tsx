import { Panel } from "@/components/table"
import { Avatar } from "@/components/ui/avatar";
import { IconPenLine } from "@/assets/icon/iconPenLine";

import { ButtonTime } from "@/components/ui/buttonTime";
import { Modules } from "@/components/modules";
import { Link } from "react-router";
import { UiButton } from "@/components/ui/UiButton";
import { IconPlus } from "@/assets/icon/iconPlus";
import { Fragment } from "react";
import { useTechnicalHome } from "../hooks/useTechnicalsHome"
import { Alert } from "@/components/ui/alert";
import { Loading } from "@/components/ui/loading";

export function Technical(){
  const { users, isLoading, messageError } = useTechnicalHome()

  return (
    <>
      {isLoading && <Loading />}
        <Alert severity="error" open={!!messageError}>{messageError}</Alert>
      
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

        {
          users && users.map(user => (
            <Fragment key={user.id}>
              <Panel.Rows>
                <div className="flex gap-2 justify-center items-center">
                  <Avatar user={{ name: user.name, avatar: "default.svg" }} size="w-6 h-6" />
                  {user.name}
                </div>
              </Panel.Rows>
              <Panel.Rows>
                  {user.email}
              </Panel.Rows>
              <Panel.Rows>
                <div className="flex gap-2">
                  {
                    user.userHours.flat().map((hour, index) => {
                      return (
                        <Fragment key={index}>
                          <ButtonTime type="read">{hour}</ButtonTime>
                        </Fragment>
                      )
                    }).slice(0, 4)
                  }
                  {
                    user.userHours.flat().length > 4 &&
                      <ButtonTime type="read">{("+" + (user.userHours.flat().length - 4))}</ButtonTime>
                  }
                </div>
              </Panel.Rows>
              <Panel.Rows>
                <Link to={`/tecnicos/edicao/${user.id}`} ><UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} /></Link>
              </Panel.Rows>
            </Fragment>
          ))
        }
      </Panel.Root>

      {/* Mobile */}
      <Panel.Root className="grid-cols-[auto_auto_63px]" mobile={true}>
        <Panel.Column>Nome</Panel.Column>
        <Panel.Column>Disponibilidade</Panel.Column>
        <Panel.Column>{""}</Panel.Column>

        {
          users && users.map(user => (
            <Fragment key={user.id}>
              <Panel.Rows>
                <div className="flex gap-2 justify-center items-cente">
                  <Avatar user={{ name: user.name, avatar: "default.svg" }} size="w-6 h-6" />
                  <span className="truncate w-18 self-center">{user.name}</span>
                </div>
              </Panel.Rows>
              <Panel.Rows>
                <div className="flex gap-1">
                  {
                    user.userHours.flat().map((hour, index) => (
                      <Fragment key={index}>
                        <ButtonTime type="read">{hour}</ButtonTime>
                      </Fragment>
                    )).slice(0, 1)
                  }
                  {
                    user.userHours.flat().length > 1 &&
                      <ButtonTime type="read">{"+" + (user.userHours.flat().length - 1)}</ButtonTime>
                  }
                </div>
              </Panel.Rows>
              <Panel.Rows>
                <Link to={`/tecnicos/edicao/${user.id}`} ><UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} /></Link>
              </Panel.Rows>
            </Fragment>
          ))
        }  
      </Panel.Root>
      {/* Mobile */}
    </>
  )
}