import { IconPenLine } from "@/assets/icon/iconPenLine";
import { Status } from "@/components/ui/status";
import { Table } from "@/components/table";
import { Link } from "react-router";
import { UiButton } from "@/components/ui/UiButton";
import { useCalleds } from "../http/use-calleds"
import { Loading } from "@/components/ui/loading";
import { Alert } from "@/components/ui/alert";
import { currency } from "@/lib/currency";
import dayjs from "dayjs";
import { Pagination } from "@/components/pagination";
import { Avatar } from "@/components/ui/avatar";

export function IndexCalleds() {
  const { data, isLoading, error, page, setPage, pagination, isError} = useCalleds()

  return (
    <>
      {isLoading && <Loading/>}
      <Alert severity="error" open={isError}>
        {error?.message} 
      </Alert>
      
      <div className="w-full m-auto ">
        <span className="max-sm:hidden Text-Xl text-blue-dark">Chamados</span>
        <span className="lg:hidden text-xl font-semibold text-blue-dark">Chamados</span>
        
        {/* DESKTOP */}
        <div className="border-1 border-gray-500 rounded-md max-sm:hidden mt-6">
          <Table.Root>
            <Table.Header>
              <Table.Head internalSpacing="px-2 py-1">Atualizado em</Table.Head>
              <Table.Head>Id</Table.Head>
              <Table.Head internalSpacing="px-2 py-1">Título e Serviço</Table.Head>
              <Table.Head internalSpacing="px-2 py-1">Valor total</Table.Head>
              <Table.Head>Cliente</Table.Head>
              <Table.Head>Técnico</Table.Head>
              <Table.Head>Status</Table.Head>
              <Table.Head>{""}</Table.Head>
            </Table.Header>
            <Table.Body>
              {data && data.data.map((called) => (
                <tr className="border-t border-gray-500 text-left" key={called.id}>
                  <Table.Cell internalSpacing="px-2 py-3" clas="w-36 text-sm">
                    {dayjs(called.updatedAt).format("DD/MM/YYYY HH:mm")}
                  </Table.Cell>
                  <Table.Cell clas="text-sm">{called.id > 0 && called.id < 10 ? `00${called.id}` : called.id }</Table.Cell>
                  <Table.Cell internalSpacing="px-2 py-1">
                     <div>
                      <span className="flex flex-col Text-Sm ">
                        {called.titleCalled}
                      </span>
                      <span className="text-sm">{called.services[0].titleService}</span>
                    </div>
                  </Table.Cell>
                  <Table.Cell internalSpacing="px-2 py-3 text-sm">
                    {(currency({ coinFormatCents: (called.priceTotal + called.basePrice.price).toString() }))}
                  </Table.Cell>
                  <Table.Cell internalSpacing="px-2 py-3">
                    <div className="flex gap-2 items-center w-37 truncate ml-1.5">
                      <Avatar user={{ name: called.UserCustomer.name, avatar: called.UserCustomer.avatar }} size="w-8" sizeText="text-[10px]" />
                      <div className="w-37 truncate">
                        {called.UserCustomer.name}
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell internalSpacing="px-2 py-3">
                    {called.UserTechnical && 
                      <div className="flex gap-2 items-center w-37 truncate ml-1.5">
                        <Avatar user={{ name: called.UserTechnical.name, avatar: called.UserTechnical.avatar }} size="w-8" sizeText="text-[10px]" />
                        <div className="w-37 truncate">
                          {called.UserTechnical.name}
                        </div>
                      </div>
                    }
                  </Table.Cell>
                  <Table.Cell internalSpacing="px-2 py-3">
                    <Status type={called.callStatus as "open" | "in_progress" | "close"} />
                  </Table.Cell>
                  <Table.Cell internalSpacing="px-2 py-3">
                    <div className="flex justify-end pr-1.5">
                      <Link to={`/chamados/${called.id}`}>
                        <UiButton icon={IconPenLine} typeSize="xxs" typeColor="gray" />
                      </Link>
                    </div>
                  </Table.Cell>
                </tr>
              ))

              }
            </Table.Body>
          </Table.Root>
        </div>
        {/* DESKTOP */}


        {/* Mobile */}
        <div className="border-1 border-gray-500 rounded-md lg:hidden mt-4">
          <Table.Root>
            <Table.Header>
              <Table.Head internalSpacing="px-2 py-1" ><div className="w-17 truncate">Atualizado em</div></Table.Head>
              <Table.Head>Título e Serviço</Table.Head>
              <Table.Head internalSpacing="">Status</Table.Head>
              <Table.Head>Icon</Table.Head>
            </Table.Header>

            <Table.Body>
               {
                  data && data.data.map(called => (
                    <tr className="border-t border-gray-500 text-left" key={called.id} >
                      <Table.Cell internalSpacing="px-2 py-1" clas="w-17">
                        <div className="text-xs w-17">
                          {dayjs(called.updatedAt).format("DD/MM/YYYY HH:mm")}
                        </div>
                      </Table.Cell>
                      <Table.Cell internalSpacing="px-2 py-1" clas="">
                        <div className="flex flex-col text-xs w-30 ">
                          <span className="Text-Sm truncate">
                            {called.titleCalled}
                          </span>
                          <span className="truncate">
                            {called.services[0].titleService}
                          </span>
                        </div>
                      </Table.Cell>
                      <Table.Cell internalSpacing="px-2 py-3" clas=" flex justify-center item-center">
                        <Status type={called.callStatus as "open" | "in_progress" | "close"} />
                      </Table.Cell>
                      <Table.Cell internalSpacing="px-2 py-3">
                        <div className="flex justify-end pr-1.5">
                          <Link to={`/chamados/${called.id}`}>
                            <UiButton icon={IconPenLine} typeSize="xxs" typeColor="gray" />
                          </Link>
                        </div>
                      </Table.Cell>
                    </tr>
                  ))
               }
            </Table.Body>
          </Table.Root>
        </div>
        {/* Mobile */}

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
        </div>
    
    </>
  )
}