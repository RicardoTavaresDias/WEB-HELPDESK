import { IconPenLine } from "@/assets/icon/iconPenLine";
import { Table } from "@/components/table";
import { Avatar } from "@/components/ui/avatar";
import { ButtonTime } from "@/components/ui/buttonTime";
import { UiButton } from "@/components/ui/UiButton";
import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";
import type { mappedUserType } from "@/lib/formatHours";

type MobileAdminTechnicalProps = {
  dataUsers: mappedUserType[] | undefined
}

function MobileAdminTechnical ({ dataUsers }: MobileAdminTechnicalProps) {
  return (
    <>
      <div className="border-1 border-gray-500 rounded-md lg:hidden">
        <Table.Root>
          <Table.Header>
            <Table.Head >Nome</Table.Head>
            <Table.Head >Disponibilidade</Table.Head>
            <Table.Head >{""}</Table.Head>
          </Table.Header>

          <Table.Body>
            {
              dataUsers && dataUsers.map(user => (
                <tr className="border-t border-gray-500 text-left" key={user.id} >
                  <Table.Cell internalSpacing="pl-3 pr-1 py-4.5 flex gap-3 items-center">
                    <Avatar user={{ name: user.name, avatar: user.avatar }} size="w-7 h-7" sizeText="text-[11px]" />
                    <span className="truncate w-28 text-sm">{user.name}</span>
                  </Table.Cell>

                  <Table.Cell clas="w-55">
                    <div className="flex gap-2  w-fit">
                       {
                        user.userHours.flat().map((hour, index) => (
                          <Fragment key={index}>
                            <ButtonTime type="read">{hour}</ButtonTime>
                          </Fragment>
                        )).slice(0, 1)
                      }
                      {
                        user.userHours.flat().length > 1 &&
                          <div className="border rounded-full w-10 text-center border-gray-500 text-gray-400">{"+" + (user.userHours.flat().length - 1)}</div>
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
    </>
  )
}

export { MobileAdminTechnical }