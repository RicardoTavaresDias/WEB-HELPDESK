import avatar from "../../../assets/img/Avatar.svg"
import { Input } from "../../../components/ui/input";
import { ButtonTime } from "../../../components/ui/buttonTime";
import { Modules } from "../../../components/modules";
import { UiButton } from "../../../components/ui/UiButton";

export function TechnicalEdition(){
  return (
    <Modules.Root>
      <Modules.Title title="Perfil de técnico" to="/tecnicos">
        <UiButton typeColor="gray" typeSize="xl" >Cancelar</UiButton>
        <UiButton typeColor="black" typeSize="xl" >Salvar</UiButton>
      </Modules.Title>

      <Modules.Container>
        <Modules.Context isType="40" >
          <div className="break-words max-sm:w-full">
            <div>
              <h3 className="text-base font-semibold text-gray-200">Dados pessoais</h3>
              <span className="Text-Xs text-gray-300">Defina as informações do perfil de técnico</span>
            </div>
            <img className="my-6 w-12 h-12" src={avatar} />
            <Input type="text" value="Carlos Silva" label="nome"/>
            <Input type="text" value="carlos.silva@test.com" label="e-mail"/>
          </div>
        </Modules.Context>

        <Modules.Context  isType="60" >
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
        </Modules.Context>
      </Modules.Container>
    </Modules.Root>
  )
}