import { Avatar } from "@/components/ui/avatar";
import { IconPenLine } from "@/assets/icon/iconPenLine";
import { ButtonTime } from "@/components/ui/buttonTime";
import { Modules } from "@/components/modules";
import { Link } from "react-router";
import { UiButton } from "@/components/ui/UiButton";
import { IconPlus } from "@/assets/icon/iconPlus";
import { Fragment } from "react";
import { Alert } from "@/components/ui/alert";
import { Loading } from "@/components/ui/loading";
import { Table } from "@/components/table"
import { useTechnicals } from "../http/use-technicals"
import { PaginationIndex } from "@/components/ui/pagination";
import { MobileAdminTechnical } from "../components/mobile-admin-technical";

export function IndexAdminTechnicals(){
  const { data: dataUsers, isLoading, error, isError, pagination, page, setPage } = useTechnicals()

  return ( 
    <>
      {isLoading && <Loading />}
        <Alert severity="warning" open={isError}>{error?.message}</Alert>
      
      <div className="mb-7">
        <Modules.Title title="Técnicos" isButton={true} >
          <Link to={"/tecnicos/novo"}>
            <UiButton type="button" icon={IconPlus} typeColor="black" typeSize="xs" color="#F9FAFA" >{<span className="max-sm:hidden">Novo</span>}</UiButton>
          </Link>
        </Modules.Title>
      </div>

      {/* DESKTOP */}
      <div className="border-1 border-gray-500 rounded-md max-sm:hidden">
      <Table.Root>
        <Table.Header>
          <Table.Head >Nome</Table.Head>
          <Table.Head >Email</Table.Head>
          <Table.Head >Disponibilidade</Table.Head>
          <Table.Head >{""}</Table.Head>
        </Table.Header>

        <Table.Body>
          {
            dataUsers && dataUsers.map(user => (
              <tr className="border-t border-gray-500 text-left" key={user.id} >
                <Table.Cell>
                  <div className="flex gap-3 w-full">
                    <Avatar user={{ name: user.name, avatar: user.avatar }} size="w-7 h-7" sizeText="text-[11px]" />
                    <span className="truncate tracking-wide">{user.name}</span>
                  </div>
                </Table.Cell>
                <Table.Cell clas="tracking-wide">
                    {user.email}
                </Table.Cell>
                <Table.Cell clas="w-55">
                  <div className="flex gap-2  w-fit">
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
                        <ButtonTime type="read">{("+" + (user.userHours.flat().length- 4))}</ButtonTime>
                    }
                  </div>
                </Table.Cell>
                <Table.Cell clas="flex justify-end ">
                  <Link to={`/tecnicos/edicao/${user.id}`} ><UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} /></Link>
                </Table.Cell>
              </tr>
            ))
          }
          
        </Table.Body>
      </Table.Root>
      </div>
      
      <MobileAdminTechnical dataUsers={dataUsers} />
      <PaginationIndex pagination={pagination} page={page} setPage={setPage} />
    </>
  )
}