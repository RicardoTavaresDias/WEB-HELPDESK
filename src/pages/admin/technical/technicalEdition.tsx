import avatar from "../../../assets/img/Avatar.svg"
import { Input } from "../../../components/ui/input";
import { ButtonTime } from "../../../components/ui/buttonTime";
import { Modules } from "../../../components/modules";
import { UiButton } from "../../../components/ui/UiButton";

import { useState } from "react";
import { v4 as uuid } from 'uuid'

const day = {
  morning: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
  afternoon: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  night: ["19:00", "20:00", "21:00", "22:00", "23:00"]
}

export function TechnicalEdition(){
  const [user, setUser] = useState<string[]>(["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "20:00", "21:00" ])
  const [name, setName] = useState("Carlos Silva")
  const [email, setEmail] = useState("carlos.silva@test.com")

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name")
    const email = formData.get("email")

    console.log("Technical Edition", {name, email, user})
  }

  return (
    <Modules.Root>
      <form action={handleSubmit}>
        <Modules.Title title="Perfil de técnico" to="/tecnicos">
          <UiButton type="button" typeColor="gray" typeSize="xl">Cancelar</UiButton>
          <UiButton type="submit" typeColor="black" typeSize="xl" >Salvar</UiButton>
        </Modules.Title>

        <Modules.Container>
          <Modules.Context isType="40" >
            <div className="break-words max-sm:w-full">
              <div>
                <h3 className="text-base font-semibold text-gray-200">Dados pessoais</h3>
                <span className="Text-Xs text-gray-300">Defina as informações do perfil de técnico</span>
              </div>
              <img className="my-6 w-12 h-12" src={avatar} />
              <Input type="text" name="name" value={name} label="nome" onChange={(e) => setName(e.target.value)} />
              <Input type="text" name="email" value={email} label="e-mail" onChange={(e) => setEmail(e.target.value)} />
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

                  {day.morning.map(value => {
                    if(user.includes(value)){
                      return (
                        <div key={uuid()}>
                          <ButtonTime onClick={() => setUser(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                        </div>
                      )
                    }

                    return (
                      <div key={uuid()}>
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
                        <div key={uuid()}>
                          <ButtonTime onClick={() => setUser(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                        </div>
                      )
                    }

                    return (
                      <div key={uuid()}>
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
                        <div key={uuid()}>
                          <ButtonTime onClick={() => setUser(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                        </div>
                      )
                    }

                    return (
                      <div key={uuid()}>
                        <ButtonTime onClick={() => setUser(prev => [value, ...prev])}>{value}</ButtonTime>
                      </div>
                    )
                  })}

              </div>
            </div>  
          </Modules.Context>
        </Modules.Container>
      </form>
    </Modules.Root>
  )
}