import { Modules } from "@/components/modules"
import { ButtonTime } from "@/components/ui/buttonTime"
import { v4 as uuid } from 'uuid'
import { day } from "@/lib/day"
import type { SetStateAction } from "react"

type ModuleCreateRightProps = {
  userHours: string[]
  setUserHours: (value: SetStateAction<string[]>) => void
}

function ModuleCreateRight ({ userHours, setUserHours }: ModuleCreateRightProps) {
  return (
    <>
      <Modules.Context isType="60">
        <div className="mb-5">
          <h3 className="mb-0.5 text-base font-semibold text-gray-200">Horários de atendimento</h3>
          <span className="Text-Xs text-gray-300 mb-10">Selecione os horários de disponibilidade do técnico para atendimento</span>
        </div>

        <div>
          <span className="text-xs font-semibold text-gray-300 uppercase ">Manhã</span>
          <div className="flex gap-2 mt-2 flex-wrap" >

            {day.morning.map(value => {
                if(userHours.includes(value)){
                  return (
                    <div key={uuid()}>
                      <ButtonTime onClick={() => setUserHours(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                    </div>
                  )
                }

                return (
                  <div key={uuid()}>
                    <ButtonTime onClick={() => setUserHours(prev => [value, ...prev])}>{value}</ButtonTime>
                  </div>
                )
              })}

          </div>
        </div>

        <div className="mt-5">
          <span className="text-xs font-semibold text-gray-300 uppercase">Tarde </span>
          <div className="flex gap-2 mt-2 flex-wrap" >

            {day.afternoon.map(value => {
              if(userHours.includes(value)){
                return (
                  <div key={uuid()}>
                    <ButtonTime onClick={() => setUserHours(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                  </div>
                )
              }

              return (
                <div key={uuid()}>
                  <ButtonTime onClick={() => setUserHours(prev => [value, ...prev])}>{value}</ButtonTime>
                </div>
              )
            })}

          </div>
        </div>

        <div className="mt-5">
          <span className="text-xs font-semibold text-gray-300 uppercase">Noite</span>
          <div className="flex gap-2 mt-2 flex-wrap" >

            {day.night.map(value => {
              if(userHours.includes(value)){
                return (
                  <div key={uuid()}>
                    <ButtonTime onClick={() => setUserHours(prev => prev.filter(use => use !== value))} isActive>{value}</ButtonTime>
                  </div>
                )
              }

              return (
                <div key={uuid()}>
                  <ButtonTime onClick={() => setUserHours(prev => [value, ...prev])}>{value}</ButtonTime>
                </div>
              )
            })}

          </div>
        </div>   
      </Modules.Context>
    </>
  )
}

export { ModuleCreateRight }