import { IconPenLine } from "@/assets/icon/iconPenLine";
import { Status } from "@/components/ui/status";
import { Table } from "@/components/table";
import { Link } from "react-router";
import { UiButton } from "@/components/ui/UiButton";
import { useCalleds } from "../http/use-calleds"
import { Alert } from "@/components/ui/alert";
import { currency } from "@/lib/currency";
import dayjs from "dayjs";
import { Avatar } from "@/components/ui/avatar";
import { PaginationIndex } from "@/components/ui/pagination"
import { MobileAdminCalled } from "../components/mobile-admin-calleds";

export function IndexCalleds() {
  const { query, pagination } = useCalleds()
  const { data, isLoading, error, isError } = query

  return (
    <>
      
      <Alert severity="warning" open={isError}>
        {error?.message} 
      </Alert>
      
      <div className="w-full m-auto ">
        <span className="max-sm:hidden Text-Xl text-blue-dark">Chamados</span>
        <span className="lg:hidden text-xl font-semibold text-blue-dark">Chamados</span>
        
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

              {isLoading && Array.from({ length: 10 }).map((_, i) => (
                <tr className="border-t border-gray-500 text-left" key={i}>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse" ></div></Table.Cell>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                </tr>
              ))}
                
              {data && data.data.map((called) => (
                <tr className="border-t border-gray-500 text-left" key={called.id}>
                  <Table.Cell internalSpacing="px-2 py-3" clas="w-36 text-sm">
                    {dayjs(called.updatedAt).format("DD/MM/YYYY HH:mm")}
                  </Table.Cell>
                  <Table.Cell clas="text-sm">
                    {
                      called.id > 0 && called.id < 10 ? `00${called.id}` :
                        ( called.id > 9 && called.id < 100 ? `0${called.id}` : called.id ) 
                    }
                  </Table.Cell>
                  <Table.Cell internalSpacing="px-2 py-1">
                     <div>
                      <span className="flex flex-col Text-Sm ">
                        {called.titleCalled}
                      </span>
                      <span className="text-sm">{called.services[0]?.titleService}</span>
                    </div>
                  </Table.Cell>
                  <Table.Cell internalSpacing="px-2 py-3 text-sm">
                    {(currency({ coinFormatCents: (called.priceTotal + Number(called.basePrice)).toString() }))}
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
              ))}
            </Table.Body>
          </Table.Root>
        </div>
        
        <MobileAdminCalled data={data} isLoading={isLoading} />
        <PaginationIndex pagination={pagination} />
      </div>
    </>
  )
}