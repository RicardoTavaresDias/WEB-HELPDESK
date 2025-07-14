import { useParams } from "react-router" 
import avatar from "@/assets/img/Avatar.svg"
import { called } from "@/database/admCallList"
import { useState } from "react" 
import { Modules } from "@/components/modules"
import { Status } from "@/components/ui/status"
import { ModuleContext } from "@/components/modules/moduleContext"

import { IconCicleHelp } from "@/assets/icon/iconCicleHelp";
import { IconCicloCheckBig } from "@/assets/icon/iconCicloCheckBig";
import { IconClock } from "@/assets/icon/iconClock";
import { UiButton } from "@/components/ui/UiButton"
import { listCalled } from "../http/use-list-called"
import dayjs from "dayjs"
import { Avatar } from "@/components/ui/avatar"
import { currency } from "@/lib/currency"

export function CallListdetails(){
  const { id } = useParams()
  const { calleds } = listCalled()

  // exemplo backEnd
  const [itemCalled] = called.filter(item => item.id === id)
  const [details, setDetails ] = useState(itemCalled)

  return (
    <>
      <Modules.Root>
        <Modules.Title title="Chamado detalhado" to="/" >
          {/* {details.status === "open" &&
            <>
              <UiButton typeColor="gray" typeSize="md" icon={IconClock} onClick={() => setDetails({...details, status: "in_progress"})} >Em Atendimento</UiButton>
              <UiButton typeColor="gray" typeSize="md" icon={IconCicloCheckBig} onClick={() => setDetails({...details, status: "close"})} >Encerrado</UiButton>
            </>
          }
          {details.status === "in_progress" &&
            <>
              <UiButton typeColor="gray" typeSize="md" icon={IconCicleHelp} onClick={() => setDetails({...details, status: "open"})} >Aberto</UiButton>
              <UiButton typeColor="gray" typeSize="md" icon={IconCicloCheckBig} onClick={() => setDetails({...details, status: "close"})} >Encerrado</UiButton>
            </>
          }
          {details.status === "close" &&
            <>
              <UiButton typeColor="gray" typeSize="md" icon={IconCicleHelp} onClick={() => setDetails({...details, status: "open"})} >Aberto</UiButton>
              <UiButton typeColor="gray" typeSize="md" icon={IconClock} onClick={() => setDetails({...details, status: "in_progress"})} >Em Atendimento</UiButton>
            </>
          } */}
        </Modules.Title>

        <Modules.Container>
          {/* <Conteudo Left> */}
          {calleds && calleds.map((called) => (
            <>
              <Modules.Context isType="50">
                <div className="flex justify-between items-center mb-1">
                  <span className="Text-Xs text-gray-300">{called.id > 0 && called.id < 10 ? `00${called.id}` : called.id }</span>
                  <Status type={called.callStatus as "open" | "in_progress" | "close"} isText />
                </div>
      
                <span className="text-gray-200 text-base font-medium">{called.titleCalled}</span>

                <div className="mt-5">
                  <span className="text-gray-400 Text-Xs">Descrição</span>
                  <p className="text-sm font-normal text-gray-200" >
                    {called.description}
                  </p>
                </div>

                <div className="mt-5">
                  <span className="text-gray-400 Text-Xs">Categoria</span>
                  <p className="text-sm font-normal text-gray-200">{called.services[0].titleService}</p>
                </div>
              
                <div className="mt-5 flex justify-between">
                  <div>
                    <span className="text-gray-400 Text-Xs">Criado em</span>
                    <p className="text-sm font-normal text-gray-200">{dayjs(called.createAt).format("DD/MM/YYYY HH:MM")}</p>
                  </div>
                  <div className="w-50">
                    <span className="text-gray-400 Text-Xs">Atualizado em</span>
                    <p className="text-sm font-normal text-gray-200">{dayjs(called.updatedAt).format("DD/MM/YYYY HH:MM")}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <span className="text-gray-400 Text-Xs">Cliente</span>
                  <div className="flex gap-2 mt-2 items-center">
                    <Avatar user={{ name: called.UserCustomer.name, avatar: called.UserCustomer.avatar }} />
                    <span className="text-gray-200 Text-Sm">{called.UserCustomer.name}</span>
                  </div>
                </div>
              </Modules.Context>
              {/* </Conteudo Left>  */}

              {/* <Conteudo Right>  */}
              <ModuleContext isType="50">
                <span className="text-gray-400 Text-Xs">Técnico responsável</span>
                <div className="flex items-center gap-2 mt-2">
                  <Avatar user={{ name: called.UserTechnical.name, avatar: called.UserTechnical.avatar }} />
                  <div className="flex flex-col justify-center">
                    <span className="text-gray-200 Text-Sm">{called.UserTechnical.name}</span>
                    <span className="Text-Xs text-gray-300">{called.UserTechnical.email}</span>
                  </div>
                </div>
                
                <div className="mt-5">
                  <span className="text-gray-400 Text-Xs">Valores</span>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-normal text-gray-200">Preço base</p>
                    <span className="Text-Xs text-gray-200">R$ 200,00</span>
                  </div>
                </div>


                <div className="mt-5">
                  <span className="text-gray-400 Text-Xs">Adicionais</span>
                  {/* Parei aqui */}
                  {called.services.map((service) => (
                    <div className="flex justify-between items-center mb-0.5">
                      <p className="text-sm font-normal text-gray-200">{service.titleService}</p>
                      <span className="Text-Xs text-gray-200">{currency({ coinFormatCents: service.price.toString()})}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 mt-4 border-t border-gray-500 flex justify-between items-center">
                  <span className="Text-Sm text-gray-200">Total</span>
                  <span className="Text-Sm text-gray-200">{currency({ coinFormatCents: (called.priceTotal + 200).toString()})}</span>
                </div>
              </ModuleContext>
            </>
          ))}
          {/* </Conteudo Right>  */}
        </Modules.Container>
      </Modules.Root>
    </>
  )
}