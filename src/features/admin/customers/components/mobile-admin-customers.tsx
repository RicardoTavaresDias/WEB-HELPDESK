import { IconPenLine } from "@/assets/icon/iconPenLine";
import { IconTrash } from "@/assets/icon/iconTrash";
import { Table } from "@/components/table";
import { Avatar } from "@/components/ui/avatar";
import { UiButton } from "@/components/ui/UiButton";
import type { UserCustomerType } from "../types/customers-response";

type MobileCustomersType = {
  dataCustomer?: dataType
  setUser: (value: UserCustomerType) => void
  setModalRemove: (value: any) => void
  modalRemove: boolean
  setModalEdition: (value: boolean) => void
  modalEdition: boolean,
  isLoading: boolean
}

type dataType = {
  data: UserCustomerType[]
}

function MobileAdminCustomers ({ dataCustomer, setUser, setModalRemove, modalRemove, setModalEdition, modalEdition, isLoading }: MobileCustomersType) {
  return (
    <>
      <div className="border-1 border-gray-500 rounded-md lg:hidden">
        <Table.Root>
          <Table.Header>
            <Table.Head>Nome</Table.Head>
            <Table.Head>Email</Table.Head>
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
              dataCustomer && dataCustomer.data.map((user) => (
                <tr className="border-t border-gray-500 text-left text-sm" key={user.id} >

                  <Table.Cell internalSpacing="pl-3 pr-1 py-4.5 flex gap-3 items-center">
                    <Avatar user={{ name: user.name, avatar: user.avatar }} size="w-7 h-7" sizeText="text-[11px]" />
                    <span className="truncate w-18">{user.name}</span>
                  </Table.Cell>

                  <Table.Cell internalSpacing="px-1.5 py-4.5">
                    <div className="w-24 truncate">
                      {user.email}
                    </div>
                  </Table.Cell>

                  <Table.Cell internalSpacing="px-1 py-4.5">
                    <div className="flex gap-1.5 w-17">
                      <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconTrash} 
                      onClick={() => {
                        setUser(user)
                        setModalRemove(!modalRemove)
                      }} />
                      <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} 
                      onClick={() => { 
                        setUser(user)
                        setModalEdition(!modalEdition);  
                      }} />
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

export { MobileAdminCustomers }