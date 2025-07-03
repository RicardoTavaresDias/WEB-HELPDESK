import { IconPenLine } from "@/assets/icon/iconPenLine";
import { IconTrash } from "@/assets/icon/iconTrash";
import { useState } from "react";
import { Modules } from "@/components/modules";
import { UiButton } from "@/components/ui/UiButton";
import { Table } from "@/components/table"
import { Avatar } from "@/components/ui/avatar";
import { IndexAdminCustomersAction } from "../action/index.action"
import { updateAdminCustomersAction } from "../action/update.action";
import { removeAdminCustomersAction } from "../action/remove.action"
import { Alert } from "@/components/ui/alert";
import { Pagination } from "@/components/pagination";
import { Loading } from "@/components/ui/loading";

import { ModalUpdateCustomersPage } from "../pages/update.page"
import { ModalRemoveCustomersPage } from "../pages/remove.page"

export function IndexAdminCustomerPage(){
  const [modalRemove, setModalRemove] = useState(false)
  const [modalEdition, setModalEdition] = useState(false)

  const {
    isLoading,
    messageError,
    page,
    pagination,
    setPage,
    users,
    userCustomerLoad
  } = IndexAdminCustomersAction()

  const {
    errors,
    handleSubmit,
    onSubmit,
    register,
    isSubmitting,
    userCustomerData,
    setuserCustomerData
  } = updateAdminCustomersAction(userCustomerLoad)

  const {
    removeUser,
    sucessRemove,
    errorRemove
  } = removeAdminCustomersAction(userCustomerLoad)

  return (
    <>
      {isLoading || isSubmitting && <Loading />}
        <Alert severity="error" open={!!messageError || !!errorRemove}>
          {messageError && messageError} 
          {errorRemove && errorRemove}
        </Alert>
        <Alert severity="error" open={!!errors.root?.message}>
          {errors.root?.message}
        </Alert>
        <Alert severity="success" open={!!errors.root?.success || !!sucessRemove}>
          {typeof errors.root?.success === "string" && errors.root.success}
          {sucessRemove && sucessRemove}
        </Alert>
        <Alert severity="info" open={!!errors.root?.info}>
          {typeof errors.root?.info === "string" && errors.root.info}
        </Alert>

      {/* Modal Remove */}
      <ModalRemoveCustomersPage 
        isOpen={modalRemove}
        onClose={() => setModalRemove(!modalRemove)}
        onSalve={() => {
          removeUser(userCustomerData.id) 
          setModalRemove(!modalRemove)
        }}
      />
      {/* Modal Remove */}

      {/* Modal Update */}
      <ModalUpdateCustomersPage 
        form={{ register, handleSubmit, onSubmit }}
        isOpen={modalEdition}
        onClose={() => {
          setModalEdition(!modalEdition)
        }}
        user={{ name: userCustomerData.name, avatar: userCustomerData.avatar }}
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
            users && users.map(user => (
              <tr className="border-t border-gray-500 text-left" key={user.id}>

                <Table.Cell clas="w-1/2">
                  <div className="flex gap-3 items-center">
                    <Avatar user={{ name: user.name, avatar: user.avatar }} size="w-7 h-7" sizeText="text-[11px]" />
                    <span className="truncate">{user.name}</span>
                  </div>
                </Table.Cell>

                <Table.Cell clas="w-1/2">
                  <span className="truncate">{user.email}</span>
                </Table.Cell>

                <Table.Cell clas="flex justify-end w-[95px]" >
                  <div className="flex gap-1.5">
                    <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconTrash} 
                    onClick={() => {
                      setuserCustomerData(user)
                      setModalRemove(!modalRemove)
                    }} />
                    <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} 
                    onClick={() => { 
                      setuserCustomerData(user)
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
              users && users.map(user => (
                <tr className="border-t border-gray-500 text-left text-sm" key={user.id} >

                  <Table.Cell internalSpacing="pl-3 pr-1 py-4.5">
                    <div className="flex gap-3 items-center w-30">
                      <Avatar user={{ name: user.name, avatar: user.avatar }} size="w-7 h-7" sizeText="text-[11px]" />
                      <span className="truncate ">{user.name}</span>
                    </div>
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
                        setuserCustomerData(user)
                        setModalRemove(!modalRemove)
                      }} />
                      <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} 
                      onClick={() => { 
                        setuserCustomerData(user)
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