import { IconPenLine } from "@/assets/icon/iconPenLine"
import { Table } from "@/components/table"
import { Status } from "@/components/ui/status"
import { UiButton } from "@/components/ui/UiButton"
import { dayjs } from "@/lib/dayjs"
import { Link } from "react-router"
import type { DataCalledsType } from "../http/use-calleds"

type MobileAdminCalledProps = {
  data: DataCalledsType | undefined,
  isLoading: boolean
}

function MobileAdminCalled ({ data, isLoading }: MobileAdminCalledProps) {
  return (
    <>
      <div className="border-1 border-gray-500 rounded-md lg:hidden mt-4">
        <Table.Root>
          <Table.Header>
            <Table.Head internalSpacing="px-2 py-1" ><div className="w-17 truncate">Atualizado em</div></Table.Head>
            <Table.Head>Título e Serviço</Table.Head>
            <Table.Head internalSpacing="">Status</Table.Head>
            <Table.Head>{""}</Table.Head>
          </Table.Header>

          <Table.Body>

            {isLoading && Array.from({ length: 5 }).map((_, i) => (
              <>
                <tr className="border-t border-gray-500 text-left" key={i}>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse" ></div></Table.Cell>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                  <Table.Cell><div className="bg-gray-500 w-full h-4 animate-pulse"></div></Table.Cell>
                </tr>
              </>
            ))}

              {
                data && data.data.map((called)=> (
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
                          {called.services[0]?.titleService}
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
    </>
  )
}

export { MobileAdminCalled }