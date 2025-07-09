import { Modules } from "@/components/modules"
import { Table } from "@/components/table/index"
import { IconPenLine } from "@/assets/icon/iconPenLine"
import { IconBan } from "@/assets/icon/iconBan"
import { IconCicloCheck } from "@/assets/icon/iconCicloCheck"
import { Status } from "@/components/ui/status"
import { useState } from "react";
import { UiButton } from "@/components/ui/UiButton"
import { IconPlus } from "@/assets/icon/iconPlus"
import { CreateModal } from "../components/create-modal"
import { UpdateModal } from "../components/update-modal"
import { IndexServices } from "../http/use-services"
import { Pagination } from "@/components/pagination"
import { currency } from "@/lib/currency"
import { Alert } from "@/components/ui/alert"
import { Loading } from "@/components/ui/loading"
import { UpdateStatus } from "../http/use-update-status"
import { updateServices } from "../http/use-update-services"

export function Services(){
  const [modalNew, setModalNew] = useState(false)
  const [modalEdition, setModalEdition] = useState(false)
  const [serviceId, setServicesId] = useState("")

  const {
    data,
    fethLoad,
    isLoading,
    messageError,
    page,
    pagination,
    setPage
  } = IndexServices()

  const {
    errors,
    onSubmit
  } = UpdateStatus(fethLoad)

  const form = updateServices({ onSuccessCallback: fethLoad, id: serviceId })

  return (
    <>
      {isLoading && <Loading />}
      <Alert severity="error" open={!!messageError}>{messageError}</Alert>
      <Alert severity="error" open={!!errors.root?.message}>
        {errors.root?.message}
      </Alert>
      <Alert severity="success" open={!!errors.root?.success}>
        {typeof errors.root?.success === "string" && errors.root.success}
      </Alert>

      <CreateModal 
        modalNew={modalNew}
        setModalNew={setModalNew}
        fethLoad={fethLoad}
      />

      <UpdateModal 
        modalEdition={modalEdition}
        setModalEdition={setModalEdition}
        form={form}
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
              {data && data.map((item) => (
                <tr className="border-t border-gray-500 text-left" key={item.id} >
                  <Table.Cell clas="lg:w-1/2 " internalSpacing="px-2 py-3 lg:px-4 lg:py-3">
                    <div className="max-sm:w-20 truncate ">
                      {item.titleService}
                    </div>
                      
                    </Table.Cell>

                    <Table.Cell clas=" lg:w-full" internalSpacing="px-1 py-3 lg:px-4 lg:py-3">
                      <div className="max-sm:w-22">
                        <span >{currency({ price: item.value })}</span>
                      </div>
                    </Table.Cell>

                    <Table.Cell internalSpacing="py-3 lg:px-4 lg:py-3">
                      <div className="max-sm:hidden w-35">
                        <Status type={item.serviceStatus} isButton={true} />
                      </div>
                      <div className="lg:hidden flex justify-center">
                        <Status type={item.serviceStatus} isButton={false} />
                      </div>
                    </Table.Cell>

                    <Table.Cell clas="flex justify-end" internalSpacing="px-2.5 py-3 lg:px-4 lg:py-3">
                      <div className="flex items-center gap-1 mr-2.5 max-sm:hidden">
                        {item.serviceStatus === "active" && <><IconBan className="w-4 h-4 cursor-pointer" onClick={() => onSubmit(item.id, item.serviceStatus)} />Desativar</>}
                        {item.serviceStatus === "inactive" && <><IconCicloCheck className="w-4 h-4 cursor-pointer" onClick={() => onSubmit(item.id, item.serviceStatus)} />Reativar</>}
                      </div>
                      <div className="flex items-center gap-1 mr-2.5 lg:hidden">
                        {item.serviceStatus === "active" && <IconBan className="w-4 h-4 cursor-pointer" onClick={() => onSubmit(item.id, item.serviceStatus)} />}
                        {item.serviceStatus === "inactive" && <IconCicloCheck className="w-4 h-4 cursor-pointer" onClick={() => onSubmit(item.id, item.serviceStatus)} />}
                      </div>
                      <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} onClick={() => {
                        setModalEdition(!modalEdition)
                        form.setValue("title", item.titleService)
                        form.setValue("value", currency({ price: item.value }))
                        setServicesId(item.id)
                      }} />
                    </Table.Cell>
                  </tr>
               ))
              }
            </Table.Body>
          </Table.Root>
        </div>
      
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