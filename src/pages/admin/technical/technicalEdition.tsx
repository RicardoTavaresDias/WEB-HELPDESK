import { DetailsHeaderButton } from "../../../components/details/detailsHeaderButton";
import { DetailsRight } from "../../../components/details/detailsRight";
import { Button } from "../../../components/ui/button";
import avatar from "../../../assets/img/Avatar.svg"
import { Input } from "../../../components/ui/input";
import { ButtonTime } from "../../../components/ui/buttonTime";

export function TechnicalEdition(){
  return (
    <div className="max-w-[1024px] m-auto">
      <DetailsHeaderButton link="/tecnicos" header="Perfil de técnico" type="twoButtonHeader">
        <div className="max-sm:hidden flex gap-2">
          <Button typeColor="gray" typeSize="sm" onClick={() => alert("Cancelado!")}>Cancelar</Button>
          <Button typeColor="black" typeSize="sm" onClick={() => alert("Salvo com sucesso!")}>Salvar</Button>
        </div>
        <div className="lg:hidden flex gap-2 m-auto mt-3">
          <Button typeColor="gray" typeSize="md">Cancelar</Button>
          <Button typeColor="black" typeSize="md" >Salvar</Button>
        </div>
      </DetailsHeaderButton>

      <div className="flex justify-center gap-6 mt-6 max-sm:flex-col max-sm:mt-4 max-sm:gap-4 m-auto">
        <div className="border border-gray-500 w-100 h-fit rounded-lg p-5 lg:p-6 break-words max-sm:w-full">
          <div>
            <h3 className="text-base font-semibold text-gray-200">Dados pessoais</h3>
            <span className="Text-Xs text-gray-300">Defina as informações do perfil de técnico</span>
          </div>
          <img className="my-6 w-12 h-12" src={avatar} />
          <Input type="text" value="Carlos Silva" label="nome"/>
          <Input type="text" value="carlos.silva@test.com" label="e-mail"/>
        </div>

        <DetailsRight>
          <div className="mb-10">
            <h3 className="mb-0.5 text-base font-semibold text-gray-200">Horários de atendimento</h3>
            <span className="Text-Xs text-gray-300 mb-10">Selecione os horários de disponibilidade do técnico para atendimento</span>
          </div>

          <div>
            <span className="text-xs font-semibold text-gray-300 uppercase">Manhã</span>
            <div className="flex gap-2 mt-2 flex-wrap" >
              <ButtonTime>07:00</ButtonTime>
              <ButtonTime>08:00</ButtonTime>
              <ButtonTime isActive={true} >09:00</ButtonTime>
              <ButtonTime isActive={true} >10:00</ButtonTime>
              <ButtonTime isActive={true} >11:00</ButtonTime>
              <ButtonTime>12:00</ButtonTime>
            </div>
          </div>

          <div className="mt-5">
            <span className="text-xs font-semibold text-gray-300 uppercase">Tarde </span>
            <div className="flex gap-2 mt-2 flex-wrap" >
              <ButtonTime>13:00</ButtonTime>
              <ButtonTime isActive={true} >14:00</ButtonTime>
              <ButtonTime isActive={true} >15:00</ButtonTime>
              <ButtonTime isActive={true} >16:00</ButtonTime>
              <ButtonTime>17:00</ButtonTime>
              <ButtonTime>18:00</ButtonTime>
            </div>
          </div>

          <div className="mt-5">
            <span className="text-xs font-semibold text-gray-300 uppercase">Noite</span>
            <div className="flex gap-2 mt-2 flex-wrap" >
              <ButtonTime>19:00</ButtonTime>
              <ButtonTime isActive={true} >20:00</ButtonTime>
              <ButtonTime isActive={true} >21:00</ButtonTime>
              <ButtonTime>22:00</ButtonTime>
              <ButtonTime>23:00</ButtonTime>
            </div>
          </div>  
        </DetailsRight>
      </div>
    </div>
  )
}