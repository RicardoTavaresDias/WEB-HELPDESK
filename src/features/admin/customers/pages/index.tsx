import { IconPenLine } from "@/assets/icon/iconPenLine";
import { IconTrash } from "@/assets/icon/iconTrash";
import { useState } from "react";
import { Modules } from "@/components/modules";
import { UiButton } from "@/components/ui/UiButton";
import { Table } from "@/components/table"
import { Avatar } from "@/components/ui/avatar";
import { Alert } from "@/components/ui/alert";
import { ModalUpdateCustomers } from "../components/update-modal"
import { ModalRemoveCustomers } from "../components/remove-modal"
import  { useCustomer } from "../http/use-customers"
import type { UserCustomerType } from "../types/customers-response";
import { PaginationIndex } from "@/components/ui/pagination"
import { MobileAdminCustomers } from "../components/mobile-admin-customers";

export function IndexAdminCustomer(){
  const [modalRemove, setModalRemove] = useState(false)
  const [modalEdition, setModalEdition] = useState(false)
  const [user, setUser] = useState<UserCustomerType>({ id: "", name: "", email: "", avatar: "" })

  const { isLoading, error, pagination, data: dataCustomer } = useCustomer()
  
  return (
    <>
      <Alert severity="error" open={!!error}>
        {error?.message} 
      </Alert>

      {/* Modal Remove */}
      <ModalRemoveCustomers
        userId={user.id}
        modalRemove={modalRemove}
        setModalRemove={setModalRemove}
      />
      {/* Modal Remove */}

      {/* Modal Update */}
      <ModalUpdateCustomers
        setModalEdition={setModalEdition}
        modalEdition={modalEdition}
        user={user}
      />
      {/* Modal Update */}

      <div className="mb-7">
        <Modules.Title title="Clientes" isButton={true} />
      </div>

      {/* DESKTOP */}
      <div className="border-1 border-gray-500 rounded-md max-sm:hidden">
        <Table.Root>
          <Table.Header>
            <Table.Head >Nome</Table.Head>
            <Table.Head >Email</Table.Head>
            <Table.Head >{""}</Table.Head>
          </Table.Header>
          <Table.Body>

           {isLoading && Array.from({ length: 10 }).map((_, i) => (
              <tr className="border-t border-gray-500 text-left" key={i}>
                <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse" ></div></Table.Cell>
                <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
              </tr>
            ))}


          {
            dataCustomer && dataCustomer.data.map((user) => (
              <tr className="border-t border-gray-500 text-left" key={user.id}>

                <Table.Cell clas="w-1/2">
                  <div className="flex gap-3 items-center">
                    <Avatar user={{ name: user.name, avatar: user.avatar }} size="w-7 h-7" sizeText="text-[11px]" />
                    <span className="truncate tracking-wide ">{user.name}</span>
                  </div>
                </Table.Cell>

                <Table.Cell clas="w-1/2">
                  <span className="truncate tracking-wide">{user.email}</span>
                </Table.Cell>

                <Table.Cell clas="flex justify-end w-[95px]" >
                  <div className="flex gap-1.5">
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
      {/* DESKTOP */}

      <MobileAdminCustomers 
        dataCustomer={dataCustomer} 
        modalEdition={modalEdition} 
        modalRemove={modalRemove} 
        setModalEdition={setModalEdition} 
        setModalRemove={setModalRemove} 
        setUser={setUser}
        isLoading={isLoading} 
      />

      <PaginationIndex pagination={pagination} />
    </>
  )
}