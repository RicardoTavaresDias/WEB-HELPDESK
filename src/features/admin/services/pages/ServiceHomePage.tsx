import { Modules } from "@/components/modules"
import { Table } from "@/components/table/index"

import { IconPenLine } from "@/assets/icon/iconPenLine"
import { IconBan } from "@/assets/icon/iconBan"
import { IconCicloCheck } from "@/assets/icon/iconCicloCheck"

import { Status } from "@/components/ui/status"

import { useState } from "react";
import { UiButton } from "@/components/ui/UiButton"
import { IconPlus } from "@/assets/icon/iconPlus"

import { CreateModal } from "../components/createModal"
import { UpdateModal } from "../components/updateModal"

export function Services(){
  const [modalNew, setModalNew] = useState(false)
  const [modalEdition, setModalEdition] = useState(false)
  const [status, setStatus] = useState(true)

  return (
    <>
      <CreateModal 
        modalNew={modalNew}
        setModalNew={setModalNew}
      />

      <UpdateModal 
        modalEdition={modalEdition}
        setModalEdition={setModalEdition}
      />

      <div className="mb-7">
        <Modules.Title title="Serviços" isButton={true} >
          <UiButton type="button" icon={IconPlus} typeColor="black" typeSize="xs" color="#F9FAFA" onClick={() => setModalNew(!modalNew)} >{<span className="max-sm:hidden">Novo</span>}</UiButton>
        </Modules.Title>
      </div>

   
        <div className="border-1 border-gray-500 rounded-md">
          <Table.Root>
            <Table.Header>
              <Table.Head clas="w-20 flex items-start" internalSpacing="px-2 py-3 lg:px-4 lg:py-3">Título</Table.Head>
              <Table.Head internalSpacing="px-1 py-3 lg:px-4 lg:py-3">Valor</Table.Head>
              <Table.Head internalSpacing="px-1 py-3 lg:px-4 lg:py-3" >Status</Table.Head>
              <Table.Head >{""}</Table.Head>
            </Table.Header>
    
            <Table.Body>

              <Table.Cell clas="lg:w-1/2 " internalSpacing="px-2 py-3 lg:px-4 lg:py-3">
              <div className="max-sm:w-20 truncate ">
                Instalação de Rede
              </div>
                
              </Table.Cell>

              <Table.Cell clas=" lg:w-full" internalSpacing="px-1 py-3 lg:px-4 lg:py-3">
                <div className="max-sm:w-22">
                  <span  >R$ 180,00</span>
                </div>
              </Table.Cell>

              <Table.Cell internalSpacing="py-3 lg:px-4 lg:py-3">
                <div className="max-sm:hidden w-35"><Status type={status ? "active" : "inactive"} isButton={true} /></div>
                <div className="lg:hidden flex justify-center"><Status type={status ? "active" : "inactive"} isButton={false} /></div>
              </Table.Cell>

              <Table.Cell clas="flex justify-end" internalSpacing="px-2.5 py-3 lg:px-4 lg:py-3">
                <div className="flex items-center gap-1 mr-2.5 max-sm:hidden">
                  {status && <><IconBan className="w-4 h-4 cursor-pointer" onClick={() => setStatus(!status)} />Desativar</>}
                  {!status && <><IconCicloCheck className="w-4 h-4 cursor-pointer" onClick={() => setStatus(!status)} />Reativar</>}
                </div>
                <div className="flex items-center gap-1 mr-2.5 lg:hidden">
                  {status && <IconBan className="w-4 h-4 cursor-pointer" onClick={() => setStatus(!status)} />}
                  {!status && <IconCicloCheck className="w-4 h-4 cursor-pointer" onClick={() => setStatus(!status)} />}
                </div>
                <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} onClick={() => setModalEdition(!modalEdition)} />
              </Table.Cell>

            </Table.Body>
          </Table.Root>
        </div>
      
    </>
  )
}