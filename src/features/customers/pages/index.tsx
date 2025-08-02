import { Modules } from "@/components/modules"
import { IsProfile } from "@/features/layout/profile"
import { Table } from "@/components/table"
import { Status } from "@/components/ui/status";
import { Link } from "react-router";
import { UiButton } from "@/components/ui/UiButton";
import { IconEye } from "@/assets/icon/iconEye";
import { Avatar } from "@/components/ui/avatar";
import { PaginationIndex } from "@/components/ui/pagination";
import { useCalledsCustomer } from "../http/use-calleds-customers";
import { dayjs } from "@/lib/dayjs"
import { currency } from "@/lib/currency";
import { MobileCalledsIndex } from "../components/mobile-calleds-index";

export function IndexCalledCustomers () {
  const { page, pagination, setPage, query } = useCalledsCustomer()
  const { data, isLoading } = query

  return (
    <>
      <IsProfile myProfile="customers" /> 
      
      <div className="lg:mb-7">
        <Modules.Root displauFull >
          <Modules.Title title="Meus chamados" />
        </Modules.Root>
      </div>

      {/* DESKTOP */}
      <div className="border-1 border-gray-500 rounded-md max-sm:hidden mt-6">
        <Table.Root>
          <Table.Header>
            <Table.Head internalSpacing="px-2 py-1">Atualizado em</Table.Head>
            <Table.Head>Id</Table.Head>
            <Table.Head internalSpacing="px-2 py-1">Título</Table.Head>
            <Table.Head clas="w-60">Serviço</Table.Head>
            <Table.Head internalSpacing="px-2 py-1" clas="w-21">Valor total</Table.Head>
            <Table.Head>Técnico</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>{""}</Table.Head>
          </Table.Header>

            {isLoading && Array.from({ length: 5 }).map((_, i) => (
              <>
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
              </>
            ))}

          <Table.Body>
            {data?.data.map(called => (
              <tr className="border-t border-gray-500 text-left" key={called.id}>
                <Table.Cell internalSpacing="px-2 py-3" clas="w-36 text-sm" >{dayjs(called.updatedAt).format("DD/MM/YYYY HH:mm")}</Table.Cell>

                <Table.Cell clas="text-sm">
                   {
                    called.id > 0 && called.id < 10 ? `00${called.id}` :
                      ( called.id > 9 && called.id < 100 ? `0${called.id}` : called.id ) 
                  }
                </Table.Cell>
                
                <Table.Cell internalSpacing="px-2 py-1" >
                  <span className="flex flex-col Text-Sm ">
                    {called.titleCalled}
                  </span>
                </Table.Cell>

                <Table.Cell internalSpacing="px-2 py-1" >
                  <span className="flex flex-col text-sm ">
                    {called.services[0]?.titleService}
                  </span>
                </Table.Cell>

                <Table.Cell internalSpacing="px-2 py-3 text-sm" >{currency({ coinFormatCents: String(Number(called.priceTotal) + Number(called.basePrice)) })}</Table.Cell>

                <Table.Cell internalSpacing="px-2 py-3">
                  <div className="flex gap-2 items-center w-38 ml-1.5">
                    <Avatar user={{ name: called.UserTechnical?.name, avatar: called.UserTechnical?.avatar }} size="w-8" sizeText="text-[12px]" />
                    <span className="truncate text-sm">
                      {called.UserTechnical?.name}
                    </span>
                  </div>
                </Table.Cell>

                <Table.Cell internalSpacing="px-2 py-3" >
                  <Status type={called.callStatus as "open" | "in_progress" | "close"} />
                </Table.Cell>

                <Table.Cell internalSpacing="px-2 py-3">
                  <div className="flex justify-end pr-1.5">
                    <Link to={`/chamados/${called.id}`}>
                      <UiButton type="button" icon={IconEye} typeSize="xxs" typeColor="gray" />
                    </Link>
                  </div>
                </Table.Cell>
              </tr>
            ))}
          </Table.Body>
        </Table.Root>
      </div>

      <MobileCalledsIndex data={data} isLoading={isLoading} />
      <PaginationIndex pagination={pagination} page={page} setPage={setPage} />
    </>
  )
}