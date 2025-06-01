import { DetailsHeaderButton } from "../../../components/details/detailsHeaderButton"
import { DetailsRight } from "../../../components/details/detailsRight"
import { Button } from "../../../components/ui/button"
import { ButtonTime } from "../../../components/ui/buttonTime"
import { Input } from "../../../components/ui/input"


export function TechnicalNew(){
  return (
    <>
      <div className="max-w-[1024px] m-auto">
        <DetailsHeaderButton header="Perfil de técnico" type="twoButtonHeader" link={"/tecnicos"}>
          <div className="max-sm:hidden flex gap-2">
            <Button typeSize="sm" typeColor="gray" onClick={() => alert("Cancelado!")} >Cancelar</Button>
            <Button typeSize="sm" typeColor="black" onClick={() => alert("Salvo com sucesso!")} >Salvar</Button>
          </div>
          <div className="lg:hidden flex gap-2 m-auto mt-3">
            <Button typeSize="md" typeColor="gray">Cancelar</Button>
            <Button typeSize="md" typeColor="black">Salvar</Button>
          </div>
        </DetailsHeaderButton>

        <div className="flex justify-center gap-6 mt-6 max-sm:flex-col max-sm:mt-4 max-sm:gap-4 m-auto">
        
          <div className="border border-gray-500 w-100 h-fit rounded-lg p-5 lg:p-6 break-words max-sm:w-full" >
            <div className="mb-10">
              <h3 className="mb-0.5 text-base font-semibold text-gray-200">Dados pessoais</h3>
              <span className="Text-Xs text-gray-300 mb-10">Defina as informações do perfil de técnico</span>
            </div>
            <Input type="text" label="nome" placeholder="Nome completo" />
            <Input type="text" label="e-mail" placeholder="exemplo@mail.com" />
            <Input type="password" label="senha" placeholder="Defina a senha de acesso" textLabel="Mínimo de 6 dígitos" />
          </div> 
          

          <DetailsRight>
            <div className="mb-10">
              <h3 className="mb-0.5 text-base font-semibold text-gray-200">Horários de atendimento</h3>
              <span className="Text-Xs text-gray-300 mb-10">Selecione os horários de disponibilidade do técnico para atendimento</span>
            </div>

            <div>
              <span className="text-xs font-semibold text-gray-300 uppercase ">Manhã</span>
              <div className="flex gap-2 mt-2 flex-wrap" >
                <ButtonTime>07:00</ButtonTime>
                <ButtonTime>08:00</ButtonTime>
                <ButtonTime>09:00</ButtonTime>
                <ButtonTime>10:00</ButtonTime>
                <ButtonTime>11:00</ButtonTime>
                <ButtonTime>12:00</ButtonTime>
              </div>
            </div>

            <div className="mt-5">
              <span className="text-xs font-semibold text-gray-300 uppercase">Tarde </span>
              <div className="flex gap-2 mt-2 flex-wrap" >
                <ButtonTime>13:00</ButtonTime>
                <ButtonTime>14:00</ButtonTime>
                <ButtonTime>15:00</ButtonTime>
                <ButtonTime>16:00</ButtonTime>
                <ButtonTime>17:00</ButtonTime>
                <ButtonTime>18:00</ButtonTime>
              </div>
            </div>

            <div className="mt-5">
              <span className="text-xs font-semibold text-gray-300 uppercase">Noite</span>
              <div className="flex gap-2 mt-2 flex-wrap" >
                <ButtonTime>19:00</ButtonTime>
                <ButtonTime>20:00</ButtonTime>
                <ButtonTime>21:00</ButtonTime>
                <ButtonTime>22:00</ButtonTime>
                <ButtonTime>23:00</ButtonTime>
              </div>
            </div>   
          </DetailsRight>
        </div>
      </div>
    </>
  )
}