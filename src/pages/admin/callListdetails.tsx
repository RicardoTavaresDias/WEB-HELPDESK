import { useParams } from "react-router" 
import { Button } from "../../components/ui/button"
import { DetailsHeader } from "../../components/details/detailsHeader"
import { DetailsLeftSatus } from "../../components/details/detailsLeft"
import { DetailsRight } from "../../components/details/detailsRight"

import clock from "../../assets/icon/clock-1.svg"
import circleCheck from "../../assets/icon/circle-check-big-2.svg"

import avatar from "../../assets/img/Avatar.svg"
import { called } from "../../database/admCallList"


export function CallListdetails(){
  const { id } = useParams()

  const [ details ] = called.filter(item => item.id === id)

  return (
    <>
      <div className="lg:px-20 max-sm:mb-20">
        <DetailsHeader to="/chamados" title="Chamado detalhado" >
          <Button type="md" typeColor="gray" >
            <div className="flex items-center justify-center gap-2">
              <img src={clock} className="w-4 h-4" />
              Em atendimento
            </div>
          </Button>
          <Button type="sm" typeColor="gray" >
            <div className="flex items-center justify-center gap-2">
              <img src={circleCheck} className="w-4 h-4" />
              Encerrado
            </div>
          </Button>
        </DetailsHeader>
      
        <div className="flex justify-center gap-6 mt-6 max-sm:flex-col max-sm:mt-4 max-sm:gap-4">
       
          <DetailsLeftSatus data={details}>
            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Descrição</span>
              <p className="text-sm font-normal text-gray-200">{details.service.description}</p>
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
              <div>
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
          </DetailsLeftSatus>

          <DetailsRight>
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
          </DetailsRight>
        </div>

      </div>
    </>
  )
}