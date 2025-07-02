import { IconPenLine } from "@/assets/icon/iconPenLine";
import { IconTrash } from "@/assets/icon/iconTrash";
import { useState } from "react";
import { Modal } from "@/components/modal/";
import { Input } from "@/components/ui/input";
import { Modules } from "@/components/modules";
import { UiButton } from "@/components/ui/UiButton";
import { Table } from "@/components/table"
import { Avatar } from "@/components/ui/avatar";
import { IndexAdminCustomersAction } from "../action/index.action"
import { updateAdminCustomersAction } from "../action/update.action";
import { Alert } from "@/components/ui/alert";
import { Pagination } from "@/components/pagination";
import { Loading } from "@/components/ui/loading";

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
    setuserCustomerData,
    reset
  } = updateAdminCustomersAction(userCustomerLoad)

  return (
    <>
      {isLoading || isSubmitting && <Loading />}
        <Alert severity="error" open={!!messageError}>{messageError}</Alert>
        <Alert severity="error" open={!!errors.root?.message}>
          {errors.root?.message}
        </Alert>
        <Alert severity="success" open={!!errors.root?.success}>
          {typeof errors.root?.success === "string" && errors.root.success}
        </Alert>
        <Alert severity="info" open={!!errors.root?.info}>
          {typeof errors.root?.info === "string" && errors.root.info}
        </Alert>

      <Modal.Root isActive={modalRemove}>
        <Modal.Title onClose={() => setModalRemove(!modalRemove)} title="Cliente" />
        <Modal.Context>
          <span className="Text-md text-gray-200">Deseja realmente excluir <b>André Costa?</b></span>
          <p className="text-gray-200 Text-md mt-5 max-sm:w-75">Ao excluir, todos os chamados deste cliente serão removidos e esta ação não poderá ser desfeita.</p>
        </Modal.Context>
        <Modal.Actions>
          <UiButton type="button" typeSize="lg" typeColor="gray" onClick={() => setModalRemove(!modalRemove)} >
            Cancelar
          </UiButton>
          <UiButton type="button" typeSize="lg" typeColor="black" >Sim, excluir</UiButton>
        </Modal.Actions>
      </Modal.Root>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Root isActive={modalEdition} >
          <Modal.Title title="Cliente" onClose={() => {
            setModalEdition(!modalEdition)
            reset()
          }}/>
          <Modal.Context>
            <div>
              <Avatar user={{ name: userCustomerData.name, avatar: "default.svg" }} size="w-12 h-12"/>
              <div className="pt-5">
                <Input type="text" {...register("name")} label="nome"  />

                <Input type="text" {...register("email")} label="e-mail" />
              </div>
            </div>  
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black" onClick={() => {
              setModalEdition(!modalEdition)
              // reflech pagina principal
            }}>
              Salvar
            </UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>

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
                    <Avatar user={{ name: user.name, avatar: "default.svg" }} size="w-7 h-7" sizeText="text-[11px]" />
                    <span className="truncate">{user.name}</span>
                  </div>
                </Table.Cell>

                <Table.Cell clas="w-1/2">
                  <span className="truncate">{user.email}</span>
                </Table.Cell>

                <Table.Cell clas="flex justify-end w-[95px]" >
                  <div className="flex gap-1.5">
                    <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconTrash} onClick={() => setModalRemove(!modalRemove)} />
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
                      <Avatar user={{ name: user.name, avatar: "default.svg" }} size="w-7 h-7" sizeText="text-[11px]" />
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
                      <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconTrash} onClick={() => setModalRemove(!modalRemove)} />
                      <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} 
                      onClick={() => { 
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