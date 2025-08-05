import { Modules } from "@/components/modules";
import { ButtonTime } from "@/components/ui/buttonTime";
import { v4 as uuid } from "uuid";
import { day } from "@/lib/day";
import { UserHours } from "../http/use-hours";
import type { SearchTechnicalType } from "../http/use-search-user-uuid";

type ModuleUpdateRightProps = {
  userTechnical: SearchTechnicalType | undefined
  setUserTechnical: (value: SearchTechnicalType) => void
}

function ModuleUpdateRight ({ userTechnical, setUserTechnical }: ModuleUpdateRightProps) {
  const userHours = new UserHours(setUserTechnical as any)
  const { addUserHours, removeUserHours } = userHours

  return (
    <>
       <Modules.Context isType="60">
          <div className="mb-10">
            <h3 className="mb-0.5 text-base font-semibold text-gray-200">
              Horários de atendimento
            </h3>
            <span className="Text-Xs text-gray-300 mb-10">
              Selecione os horários de disponibilidade do técnico para
              atendimento
            </span>
          </div>

          <div>
            <span className="text-xs font-semibold text-gray-300 uppercase">
              Manhã
            </span>
            <div className="flex gap-2 mt-2 flex-wrap">
              {userTechnical && userTechnical.userHours &&
                day.morning.map((value) => {
                  if (userTechnical.userHours.includes(value)) {
                    return (
                      <div key={uuid()}>
                        <ButtonTime onClick={() => removeUserHours(value)} isActive >
                          {value}
                        </ButtonTime>
                      </div>
                    );
                  }

                  return (
                    <div key={uuid()}>
                      <ButtonTime onClick={() => addUserHours(value)} >
                        {value}
                      </ButtonTime>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="mt-5">
            <span className="text-xs font-semibold text-gray-300 uppercase">
              Tarde
            </span>
            <div className="flex gap-2 mt-2 flex-wrap">
              {userTechnical && userTechnical.userHours &&
                day.afternoon.map((value) => {
                  if (userTechnical.userHours.includes(value)) {
                    return (
                      <div key={uuid()}>
                        <ButtonTime onClick={() => removeUserHours(value)} isActive >
                          {value}
                        </ButtonTime>
                      </div>
                    );
                  }

                  return (
                    <div key={uuid()}>
                      <ButtonTime onClick={() => addUserHours(value)} >
                        {value}
                      </ButtonTime>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="mt-5">
            <span className="text-xs font-semibold text-gray-300 uppercase">
              Noite
            </span>
            <div className="flex gap-2 mt-2 flex-wrap">
              {userTechnical && userTechnical.userHours &&
                day.night.map((value) => {
                  if (userTechnical.userHours.includes(value)) {
                    return (
                      <div key={uuid()}>
                        <ButtonTime onClick={() => removeUserHours(value)} isActive >
                          {value}
                        </ButtonTime>
                      </div>
                    );
                  }

                  return (
                    <div key={uuid()}>
                      <ButtonTime onClick={() => addUserHours(value)} >
                        {value}
                      </ButtonTime>
                    </div>
                  );
                })}
            </div>
          </div>
        </Modules.Context>
    </>
  )
}
export { ModuleUpdateRight }