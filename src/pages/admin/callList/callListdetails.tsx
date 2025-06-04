import { useParams } from "react-router" 
import avatar from "../../../assets/img/Avatar.svg"
import { called } from "../../../database/admCallList"
import { useState } from "react" 
import { Modules } from "../../../components/modules"
import { Status } from "../../../components/ui/status"
import { ModuleContext } from "../../../components/modules/moduleContext"
import { ButtonServices } from "../../../components/ui/buttonServices"


export function CallListdetails(){
  const { id } = useParams()

  // exemplo backEnd
  const [itemCalled] = called.filter(item => item.id === id)
  const [details, setDetails ] = useState(itemCalled)

  type ServicesStatus = "open" | "progress" | "close"

  const service = (value: string): [ServicesStatus, ServicesStatus] => {
    if(value === "progress"){
      return ["open", "close"]
    }else if(value === "open"){
      return ["progress", "close"]
    }
    return ["open", "progress"]
  }
  //

  return (
    <>
      <Modules.Root>
        <Modules.Title title="Chamado detalhado" to="/chamados" >
          <ButtonServices status={service(details.status)[0]} onClick={() => setDetails({...details, status: service(details.status)[0]})} />
          <ButtonServices status={service(details.status)[1]} onClick={() => setDetails({...details, status: service(details.status)[1]})} />
        </Modules.Title>

        <Modules.Container>
          {/* <Conteudo Left> */}
          <Modules.Context isType="50">
            <div className="flex justify-between items-center mb-1">
              <span className="Text-Xs text-gray-300">{details.id}</span>
              <Status type={details.status as "open" | "progress" | "close"} isText />
            </div>
  
            <span className="text-gray-200 text-base font-medium">Backup não está funcionando	</span>

            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Descrição</span>
              <p className="text-sm font-normal text-gray-200" >
                O sistema de backup automático parou de funcionar. Última execução bem-sucedida foi há uma semana.
              </p>
            </div>

            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Categoria</span>
              <p className="text-sm font-normal text-gray-200">Recuperação de Dados</p>
            </div>
           
            <div className="mt-5 flex justify-between">
              <div>
                <span className="text-gray-400 Text-Xs">Criado em</span>
                <p className="text-sm font-normal text-gray-200">12/04/25 09:12</p>
              </div>
              <div className="w-50">
                <span className="text-gray-400 Text-Xs">Atualizado em</span>
                <p className="text-sm font-normal text-gray-200">{details.date}</p>
              </div>
            </div>

            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Cliente</span>
              <div className="flex gap-2 mt-2">
                <img src={avatar} className="w-5 h-5" />
                <span className="text-gray-200 Text-Sm">{details.customer.name}</span>
              </div>
            </div>
          </Modules.Context>
          {/* </Conteudo Left>  */}

          {/* <Conteudo Right>  */}
          <ModuleContext isType="50">
            <span className="text-gray-400 Text-Xs">Técnico responsável</span>
            <div className="flex items-center gap-2 mt-2">
              <img src={avatar} className="w-8 h-8" />
              <div className="flex flex-col justify-center">
                <span className="text-gray-200 Text-Sm">{details.technical.name}</span>
                <span className="Text-Xs text-gray-300">{details.technical.name.toLowerCase() + "@test.com"}</span>
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
              <div className="flex justify-between items-center">
                <p className="text-sm font-normal text-gray-200">Assinatura de backup</p>
                <span className="Text-Xs text-gray-200">R$ 120,00</span>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm font-normal text-gray-200">Formatação do PC</p>
                <span className="Text-Xs text-gray-200">R$ 75,00</span>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-gray-500 flex justify-between items-center">
              <span className="Text-Sm text-gray-200">Total</span>
              <span className="Text-Sm text-gray-200">{details.value}</span>
            </div>
          </ModuleContext>
          {/* </Conteudo Right>  */}
        </Modules.Container>
      </Modules.Root>
    </>
  )
}