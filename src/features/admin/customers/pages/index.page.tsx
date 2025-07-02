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
import { Alert } from "@/components/ui/alert";
import { Pagination } from "@/components/pagination";

export function IndexAdminCustomerPage(){
  const [modalRemove, setModalRemove] = useState(false)
  const [modalEdition, setModalEdition] = useState(false)

  const [editionUserData, setEditionUserData] = useState({
    name: "",
    email: ""
  })

  const {
    isLoading,
    messageError,
    page,
    pagination,
    setPage,
    users
  } = IndexAdminCustomersAction()

  return (
    <>
      {/* {isLoading && <Loading />} */}
        <Alert severity="error" open={!!messageError}>{messageError}</Alert>

      <Modal.Root isActive={modalRemove}>
        <Modal.Title onClose={() => setModalRemove(!modalRemove)} title="Cliente" />
        <Modal.Context>
          <span className="Text-md text-gray-200">Deseja realmente excluir <b>André Costa?</b></span>
          <p className="text-gray-200 Text-md mt-5 max-sm:w-75">Ao excluir, todos os chamados deste cliente serão removidos e esta ação não poderá ser desfeita.</p>
        </Modal.Context>
        <Modal.Actions>
          <UiButton type="button" typeSize="lg" typeColor="gray" onClick={() => setModalRemove(!modalRemove)} >Cancelar</UiButton>
          <UiButton type="button" typeSize="lg" typeColor="black" >Sim, excluir</UiButton>
        </Modal.Actions>
      </Modal.Root>

      <form >
        <Modal.Root isActive={modalEdition} >
          <Modal.Title title="Cliente" onClose={() => setModalEdition(!modalEdition)}/>
          <Modal.Context>
            <div>
              <Avatar user={{ name: editionUserData.name, avatar: "default.svg" }} size="w-12 h-12"/>
              <div className="pt-5">
                <Input type="text" label="nome" value={editionUserData.name} onChange={(e) => 
                  setEditionUserData((prev) => ({ ...prev, name: e.target.value }) )} />

                <Input type="text" label="e-mail" value={editionUserData.email} onChange={(e) => 
                  setEditionUserData((prev) => ({ ...prev, email: e.target.value }) )} />
              </div>
            </div>  
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black" >Salvar</UiButton>
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
                      setEditionUserData(user)
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
                        setEditionUserData(user)
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