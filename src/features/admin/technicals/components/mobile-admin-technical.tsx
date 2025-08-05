import { IconPenLine } from "@/assets/icon/iconPenLine";
import { Table } from "@/components/table";
import { Avatar } from "@/components/ui/avatar";
import { ButtonTime } from "@/components/ui/buttonTime";
import { UiButton } from "@/components/ui/UiButton";
import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";
import type { mappedUserType } from "@/lib/formatHours";
import { IconTrash } from "@/assets/icon/iconTrash";

type MobileAdminTechnicalProps = {
  dataUsers: mappedUserType[] | undefined
  isLoading: boolean
  setUser: (value: any) => void
  modalRemove: boolean
  setModalRemove: (value: any) => void
}

function MobileAdminTechnical ({ dataUsers, isLoading, setUser, modalRemove, setModalRemove }: MobileAdminTechnicalProps) {
  return (
    <>
      <div className="border-1 border-gray-500 rounded-md lg:hidden">
        <Table.Root>
          <Table.Header>
            <Table.Head >Nome</Table.Head>
            <Table.Head internalSpacing="" >Disponibilidade</Table.Head>
            <Table.Head >{""}</Table.Head>
          </Table.Header>

          <Table.Body>

            {isLoading && Array.from({ length: 5 }).map((_, i) => (
              <>
                <tr className="border-t border-gray-500 text-left" key={i}>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse" ></div></Table.Cell>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                </tr>
              </>
            ))}

            {
              dataUsers && dataUsers.map(user => (
                <tr className="border-t border-gray-500 text-left" key={user.id} >
                  <Table.Cell internalSpacing="pl-3 pr-1 py-4.5 flex gap-3 items-center">
                    <Avatar user={{ name: user.name, avatar: user.avatar }} size="w-7 h-7" sizeText="text-[11px]" />
                    <span className="truncate w-18 text-xs">{user.name}</span>
                  </Table.Cell>

                  <Table.Cell internalSpacing="p-1.5" >
                    <div className="flex gap-1  w-fit">
                       {
                        user.userHours.flat().map((hour, index) => (
                          <Fragment key={index}>
                            <ButtonTime type="read">{hour}</ButtonTime>
                          </Fragment>
                        )).slice(0, 1)
                      }
                      {
                        user.userHours.flat().length > 1 &&
                          <div className="border rounded-full w-10 text-center border-gray-500 text-gray-400 flex justify-center items-center">
                            <p className="text-[12px]">+</p>
                            {(user.userHours.flat().length - 1)}
                          </div>
                      }
                    </div>
                  </Table.Cell>

                  <Table.Cell clas="flex justify-end ">
                    <div className="flex gap-1.5 w-17">
                      <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconTrash} 
                        onClick={() => {
                          setUser(user)
                          setModalRemove(!modalRemove)
                        }} />
                        
                      <Link to={`/tecnicos/edicao/${user.id}`} >
                        <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} />
                      </Link>
                    </div>

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