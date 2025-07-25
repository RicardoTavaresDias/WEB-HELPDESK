import { Modules } from "@/components/modules"
import { IsProfile } from "@/features/layout/profile"
import { Table } from "@/components/table"
import { called } from "@/database/admCallList";
import { Status } from "@/components/ui/status";
import { Link } from "react-router";
import { UiButton } from "@/components/ui/UiButton";
import { IconEye } from "@/assets/icon/iconEye";
import { Avatar } from "@/components/ui/avatar";

export function IndexCalledCustomers () {
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
            <Table.Head >Serviço</Table.Head>
            <Table.Head internalSpacing="px-2 py-1" >Valor total</Table.Head>
            <Table.Head>Técnico</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>{""}</Table.Head>
          </Table.Header>

          <Table.Body>
            {called.map(item => (
              <tr className="border-t border-gray-500 text-left" key={item.id}>
                <Table.Cell internalSpacing="px-2 py-3" clas="w-36 text-sm" >{item.date}</Table.Cell>

                <Table.Cell clas="text-sm"> {item.id} </Table.Cell>
                
                <Table.Cell internalSpacing="px-2 py-1" >
                  <span className="flex flex-col Text-Sm ">
                    {item.service.title}
                  </span>
                </Table.Cell>

                <Table.Cell internalSpacing="px-2 py-1" >
                  <span className="flex flex-col text-sm ">
                    {item.service.description}
                  </span>
                </Table.Cell>

                <Table.Cell internalSpacing="px-2 py-3 text-sm" >{item.value}</Table.Cell>

                <Table.Cell internalSpacing="px-2 py-3">
                  <div className="flex gap-2 items-center w-37 truncate ml-1.5">
                    <Avatar user={{ name: item.technical.name, avatar: "default.svg" }} size="w-8" sizeText="text-[12px]" />
                    {item.technical.name}
                  </div>
                </Table.Cell>

                <Table.Cell internalSpacing="px-2 py-3" >
                  <Status type={item.status as "open" | "in_progress" | "close"} />
                </Table.Cell>

                <Table.Cell internalSpacing="px-2 py-3">
                  <div className="flex justify-end pr-1.5">
                    <Link to={`/chamados/${item.id}`}>
                      <UiButton type="button" icon={IconEye} typeSize="xxs" typeColor="gray" />
                    </Link>
                  </div>
                </Table.Cell>
              </tr>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
      {/* DESKTOP */}

    
      {/* Mobile */}
      <div className="border-1 border-gray-500 rounded-md lg:hidden mt-4">
        <Table.Root>
          <Table.Header>
            <Table.Head internalSpacing="px-2 py-1" ><div className="w-17 truncate">Atualizado em</div></Table.Head>
            <Table.Head>Título</Table.Head>
            <Table.Head internalSpacing="">Status</Table.Head>
            <Table.Head>{""}</Table.Head>
          </Table.Header>

          <Table.Body>
            {called?.map(item => (
              <tr className="border-t border-gray-500 text-left" key={item.id} >
                <Table.Cell internalSpacing="px-2 py-1" clas="w-17">
                  <div className="text-xs w-17">
                    {item.date}
                  </div>
                </Table.Cell>
                <Table.Cell internalSpacing="px-2 py-1" clas="">
                  <div className="flex flex-col text-xs w-30 ">            
                    <span className="text-sx font-bold">
                      {item.service.title}
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell internalSpacing="px-2 py-3" clas=" flex justify-center item-center">
                  <Status type={item.status as "open" | "in_progress" | "close"} />
                </Table.Cell>
                <Table.Cell internalSpacing="px-2 py-3">
                  <div className="flex justify-end pr-1.5">
                    <Link to={`/chamados/${item.id}`}>
                      <UiButton type="button" icon={IconEye} typeSize="xxs" typeColor="gray" />
                    </Link>
                  </div>
                </Table.Cell>
              </tr>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
      {/* Mobile */}

      {/* PAGINAÇÃO */}
      {/* <Pagination.Root>
        <Pagination.Previous previous={pagination?.previous} onClick={() => setPage(page - 1)} />
          <Pagination.Body 
            pagination={pagination} 
            onClickPrevius={() => setPage(pagination?.previous as number)} 
            onClickNext={() => setPage(pagination?.next as number)}
            page={page}
          />
          <Pagination.Next next={pagination?.next} onClick={() => setPage(page + 1)} />
      </Pagination.Root> */}
      {/* PAGINAÇÃO */}
    </>
  )
}