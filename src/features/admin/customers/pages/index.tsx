import { IconPenLine } from "@/assets/icon/iconPenLine";
import { IconTrash } from "@/assets/icon/iconTrash";
import { useState } from "react";
import { Modules } from "@/components/modules";
import { UiButton } from "@/components/ui/UiButton";
import { Table } from "@/components/table"
import { Avatar } from "@/components/ui/avatar";
import { Alert } from "@/components/ui/alert";
import { Pagination } from "@/components/pagination";
import { Loading } from "@/components/ui/loading";
import { ModalUpdateCustomers } from "../components/update-modal"
import { ModalRemoveCustomers } from "../components/remove-modal"
import  { useCustomer } from "../http/use-customers"
import type { UserCustomerType } from "../types/customers-response";

export function IndexAdminCustomer(){
  const [modalRemove, setModalRemove] = useState(false)
  const [modalEdition, setModalEdition] = useState(false)
  const [user, setUser] = useState<UserCustomerType>({ id: "", name: "", email: "", avatar: "" })

  const { isLoading, error, page, pagination, setPage, data: dataCustomer } = useCustomer()
  
  return (
    <>
      {isLoading && <Loading/>}
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

      {/* MOBILE */}
      <div className="border-1 border-gray-500 rounded-md lg:hidden">
        <Table.Root>
          <Table.Header>
            <Table.Head>Nome</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head >{""}</Table.Head>
          </Table.Header>

          <Table.Body>
            {
              dataCustomer && dataCustomer.data.map(user => (
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
      {/* MOBILE */}

      {/* PAGINAÇÃO */}
      <Pagination.Root>
        <Pagination.Previous previous={pagination?.previous} onClick={() => setPage(page - 1)} />
          <Pagination.Body 
            pagination={pagination} 
            onClickPrevius={() => setPage(pagination?.previous as number)} 
            onClickNext={() => setPage(pagination?.next as number)}
            page={page}
          />
          <Pagination.Next next={pagination?.next} onClick={() => setPage(page + 1)} />
      </Pagination.Root>
      {/* PAGINAÇÃO */}
      
    </>
  )
}