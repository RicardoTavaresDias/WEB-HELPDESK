import { Navigate, useParams } from "react-router"
import { IsProfile } from "@/features/layout/profile"
import { Modules } from "@/components/modules"
import { Status } from "@/components/ui/status"
import { useCalledDetails } from "../http/use-called-details"
import { Loading } from "@/components/ui/loading"
import { dayjs } from "@/lib/dayjs"
import { Avatar } from "@/components/ui/avatar"
import { currency } from "@/lib/currency"

export function CallDetails(){
  const { id } = useParams()
  
  if (!id) {
    return <Navigate replace to="/" />
  }

  const { data: dataDetails, isLoading } = useCalledDetails(id).query

  if(isLoading || !dataDetails){
    return <Loading />
  }

  return (
    <>
      <IsProfile myProfile="customers" />

      <Modules.Root>
        <Modules.Title title="Chamado detalhado" to="/" />
        <Modules.Container>

          <Modules.Context isType="50">
            <div className="flex justify-between items-center mb-1">
              <span className="Text-Xs text-gray-300">
                 {
                    dataDetails.id > 0 && dataDetails.id < 10 ? `00${dataDetails.id}` :
                      ( dataDetails.id > 9 && dataDetails.id < 100 ? `0${dataDetails.id}` : dataDetails.id ) 
                  }
              </span>
              <Status type={dataDetails.callStatus as "open" | "in_progress" | "close"} isText />
            </div>
  
            <span className="text-gray-200 text-base font-medium">{dataDetails.titleCalled}</span>

            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Descrição</span>
              <p className="text-sm font-normal text-gray-200" >
                {dataDetails.description}
              </p>
            </div>

            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Categoria</span>
              <p className="text-sm font-normal text-gray-200">{dataDetails.services[0].titleService}</p>
            </div>
           
            <div className="mt-5 flex justify-between">
              <div>
                <span className="text-gray-400 Text-Xs">Criado em</span>
                <p className="text-sm font-normal text-gray-200">{dayjs(dataDetails.createdAt).format("DD/MM/YYYY HH:mm")}</p>
              </div>
              <div>
                <span className="text-gray-400 Text-Xs">Atualizado em</span>
                <p className="text-sm font-normal text-gray-200">{dayjs(dataDetails.updatedAt).format("DD/MM/YYYY HH:mm")}</p>
              </div>
            </div>
          </Modules.Context>

          <Modules.Context isType="40">
            <span className="text-gray-400 Text-Xs">Técnico responsável</span>
            <div className="flex items-center gap-2 mt-2">
              <Avatar user={{ name: dataDetails.UserTechnical?.name, avatar: dataDetails.UserTechnical?.avatar }} size="w-10 h-10" sizeText="text-xs" />
              <div className="flex flex-col justify-center">
                <span className="text-gray-200 Text-Sm">{dataDetails.UserTechnical?.name}</span>
                <span className="Text-Xs text-gray-300">{dataDetails.UserTechnical?.email}</span>
              </div>
            </div>
            
            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Valores</span>
              <div className="flex justify-between items-center">
                <p className="text-sm font-normal text-gray-200">Preço base</p>
                <span className="Text-Xs text-gray-200">{currency({ coinFormatCents: dataDetails.basePrice.toString() })}</span>
              </div>
            </div>

            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Adicionais</span>
              {dataDetails.services.map(service => (
                <div className="flex justify-between items-center mb-1" key={service.id} >
                  <p className="text-sm font-normal text-gray-200">{service.titleService}</p>
                  <span className="Text-Xs text-gray-200">{currency({ coinFormatCents: service.price })}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 mt-4 border-t border-gray-500 flex justify-between items-center">
              <span className="Text-Sm text-gray-200">Total</span>
              <span className="Text-Sm text-gray-200">{currency({ coinFormatCents: String(Number(dataDetails.priceTotal) + Number(dataDetails.basePrice)) })}</span>
            </div>
          </Modules.Context>

        </Modules.Container>
      </Modules.Root>
    </>
  )
}