import { Modules } from "@/components/modules"
import { Table } from "@/components/table/index"
import { Status } from "@/components/ui/status"
import { useState } from "react";
import { UiButton } from "@/components/ui/UiButton"
import { IconPlus } from "@/assets/icon/iconPlus"
import { CreateModal } from "../components/create-modal"
import { UpdateModal } from "../components/update-modal"
import { useServices } from "../http/use-services"
import { currency } from "@/lib/currency"
import { Alert } from "@/components/ui/alert"
import { UpdateStatus } from "../components/update-status"
import type { DataServicesType } from "../types/data-services"
import { PaginationIndex } from "@/components/ui/pagination";

export function AdminServices(){
  const [modalNew, setModalNew] = useState(false)
  const [modalEdition, setModalEdition] = useState(false)
  const [service, setServices] = useState<DataServicesType>()
  const { data: serivicesData, error, isLoading, page, setPage, pagination, isError } = useServices()

  return (
    <>
      <Alert severity="warning" open={isError}>{error?.message}</Alert>

      <CreateModal 
        modalNew={modalNew}
        setModalNew={setModalNew}
      />

      <UpdateModal 
        modalEdition={modalEdition}
        setModalEdition={setModalEdition}
        service={service}
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
              <Table.Head internalSpacing="px-1 py-3 lg:px-4 lg:py-3">Status</Table.Head>
              <Table.Head >{""}</Table.Head>
            </Table.Header>

              {isLoading && Array.from({ length: 10 }).map((_, i) => (
                <>
                  <tr className="border-t border-gray-500 text-left" key={i}>
                    <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse" ></div></Table.Cell>
                    <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                    <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                    <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                  </tr>
                </>
              ))}
    
            <Table.Body>
              {serivicesData && serivicesData.data.map((item) => (
                <tr className="border-t border-gray-500 text-left" key={item.id} >
                  <Table.Cell clas="lg:w-1/2" internalSpacing="px-2 py-3 lg:px-4 lg:py-3">
                    <div className="max-sm:w-30 max-w-120 max-sm:text-xs">
                      {item.titleService}
                    </div>
                      
                    </Table.Cell>

                    <Table.Cell clas=" lg:w-full" internalSpacing="px-1 py-3 lg:px-4 lg:py-3">
                      <div className="max-sm:w-full">
                        <span className="max-sm:text-xs">{currency({ coinFormatCents: item.price })}</span>
                      </div>
                    </Table.Cell>

                    <Table.Cell internalSpacing="py-3 lg:px-4 lg:py-3">
                      <div className="max-sm:hidden">
                        <Status type={item.serviceStatus} isButton={true} />
                      </div>
                      <div className="lg:hidden flex justify-center ml-2" >
                        <Status type={item.serviceStatus} isButton={false} />
                      </div>
                    </Table.Cell>
                   
                    <Table.Cell clas=" " internalSpacing="px-2.5 py-3 lg:px-4 lg:py-3" >
                      <div className="flex justify-end">
                        <UpdateStatus 
                          service={item}
                          modalEdition={modalEdition}
                          setModalEdition={setModalEdition}
                          setServices={setServices}
                        />
                      </div>
                    </Table.Cell>
                  </tr>
               ))
              }
            </Table.Body>
          </Table.Root>
        </div>
      
      <PaginationIndex pagination={pagination} page={page} setPage={setPage} />
    </>
  )
}