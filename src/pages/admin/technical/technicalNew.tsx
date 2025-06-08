import { Modules } from "../../../components/modules"
import { ButtonTime } from "../../../components/ui/buttonTime"
import { Input } from "../../../components/ui/input"
import { UiButton } from "../../../components/ui/UiButton"


export function TechnicalNew(){
  return (
    <>
      <Modules.Root>
        <Modules.Title title="Perfil de técnico" to="/tecnicos">
          <UiButton typeColor="gray" typeSize="xl" >Cancelar</UiButton>
          <UiButton typeColor="black" typeSize="xl" >Salvar</UiButton>
        </Modules.Title>

        <Modules.Container>
          <Modules.Context isType="40">
            <div className="break-words max-sm:w-full" >
              <div className="mb-10">
                <h3 className="mb-0.5 text-base font-semibold text-gray-200">Dados pessoais</h3>
                <span className="Text-Xs text-gray-300 mb-10">Defina as informações do perfil de técnico</span>
              </div>
              <Input type="text" label="nome" placeholder="Nome completo" />
              <Input type="text" label="e-mail" placeholder="exemplo@mail.com" />
              <Input type="password" label="senha" placeholder="Defina a senha de acesso" textLabel="Mínimo de 6 dígitos" />
            </div> 
          </Modules.Context>
        
          <Modules.Context isType="60">
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
          </Modules.Context>
        </Modules.Container>
      </Modules.Root>
      
      
    </>
  )
}