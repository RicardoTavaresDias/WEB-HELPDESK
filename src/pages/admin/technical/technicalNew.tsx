import { useState } from "react"
import { Modules } from "../../../components/modules"
import { ButtonTime } from "../../../components/ui/buttonTime"
import { Input } from "../../../components/ui/input"
import { UiButton } from "../../../components/ui/UiButton"
import { v4 as uuidv4 } from 'uuid'


const day = {
  morning: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
  afternoon: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  night: ["19:00", "20:00", "21:00", "22:00", "23:00"]
}

export function TechnicalNew(){
  const [user, setUser] = useState<string[]>([])

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    console.log("Technical New", {name, email, password, user})
  }
  
  return (
    <>
      <form action={handleSubmit}>
        <Modules.Root>
          <Modules.Title title="Perfil de técnico" to="/tecnicos">
            <UiButton type="button" typeColor="gray" typeSize="xl" >Cancelar</UiButton>
            <UiButton type="submit" typeColor="black" typeSize="xl" >Salvar</UiButton>
          </Modules.Title>

          <Modules.Container>
            <Modules.Context isType="40">
              <div className="break-words max-sm:w-full" >
                <div className="mb-10">
                  <h3 className="mb-0.5 text-base font-semibold text-gray-200">Dados pessoais</h3>
                  <span className="Text-Xs text-gray-300 mb-10">Defina as informações do perfil de técnico</span>
                </div>
                <Input type="text" name="name" label="nome" placeholder="Nome completo" />
                <Input type="text" name="email" label="e-mail" placeholder="exemplo@mail.com" />
                <Input type="password" name="password" label="senha" placeholder="Defina a senha de acesso" textLabel="Mínimo de 6 dígitos" />
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

                  {day.morning.map(value => {
                      if(user.includes(value)){
                        return (
                          <div key={uuidv4()}>
                            <ButtonTime onClick={() => setUser(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                          </div>
                        )
                      }

                      return (
                        <div key={uuidv4()}>
                          <ButtonTime onClick={() => setUser(prev => [value, ...prev])}>{value}</ButtonTime>
                        </div>
                      )
                    })}

                </div>
              </div>

              <div className="mt-5">
                <span className="text-xs font-semibold text-gray-300 uppercase">Tarde </span>
                <div className="flex gap-2 mt-2 flex-wrap" >

                  {day.afternoon.map(value => {
                    if(user.includes(value)){
                      return (
                        <div key={uuidv4()}>
                          <ButtonTime onClick={() => setUser(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                        </div>
                      )
                    }

                    return (
                      <div key={uuidv4()}>
                        <ButtonTime onClick={() => setUser(prev => [value, ...prev])}>{value}</ButtonTime>
                      </div>
                    )
                  })}

                </div>
              </div>

              <div className="mt-5">
                <span className="text-xs font-semibold text-gray-300 uppercase">Noite</span>
                <div className="flex gap-2 mt-2 flex-wrap" >

                  {day.night.map(value => {
                    if(user.includes(value)){
                      return (
                        <div key={uuidv4()}>
                          <ButtonTime onClick={() => setUser(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                        </div>
                      )
                    }

                    return (
                      <div key={uuidv4()}>
                        <ButtonTime onClick={() => setUser(prev => [value, ...prev])}>{value}</ButtonTime>
                      </div>
                    )
                  })}

                </div>
              </div>   
            </Modules.Context>
          </Modules.Container>
        </Modules.Root>
      </form>
    </>
  )
}