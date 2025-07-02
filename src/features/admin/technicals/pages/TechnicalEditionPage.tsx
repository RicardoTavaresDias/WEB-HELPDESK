import { Input } from "@/components/ui/input";
import { ButtonTime } from "@/components/ui/buttonTime";
import { Modules } from "@/components/modules";
import { UiButton } from "@/components/ui/UiButton";
import { day } from "@/lib/day";

import { v4 as uuid } from "uuid";
import { useTechnicalEdition } from "../hooks/useTechnicalEdition";
import { Alert } from "@/components/ui/alert";
import { Loading } from "@/components/ui/loading";
import { Avatar } from "@/components/ui/avatar";

export function TechnicalEdition() {
  const {
    user,
    register,
    handleSubmit,
    onSubmit,
    isSubmitting,
    errors,
    isLoading,
    fetchLoad,
    addUserHours,
    removeUserHours
  } = useTechnicalEdition()

  return (
    <>
      {isSubmitting || isLoading && <Loading />}
      <Alert severity="error" open={!!errors.root?.message}>
        {errors.root?.message}
      </Alert>
      <Alert severity="success" open={!!errors.root?.sucess}>
        {typeof errors.root?.sucess === "string" && errors.root.sucess}
      </Alert>
      <Alert severity="info" open={!!errors.root?.info}>
        {typeof errors.root?.info === "string" && errors.root.info}
      </Alert>

      <Modules.Root>
        <form onSubmit={handleSubmit(onSubmit as any)}>
          <Modules.Title title="Perfil de técnico" to="/tecnicos">
            <UiButton
              type="button"
              typeColor="gray"
              typeSize="xl"
              onClick={() => fetchLoad()}
              disabled={isSubmitting}
            >
              Cancelar
            </UiButton>
            <UiButton
              type="submit"
              typeColor="black"
              typeSize="xl"
              disabled={isSubmitting}
            >
              Salvar
            </UiButton>
          </Modules.Title>

          <Modules.Container>
            <Modules.Context isType="40">
              <div className="break-words max-sm:w-full">
                <div>
                  <h3 className="text-base font-semibold text-gray-200">
                    Dados pessoais
                  </h3>
                  <span className="Text-Xs text-gray-300">
                    Defina as informações do perfil de técnico
                  </span>
                </div>
                <div className="my-6">
                  {user && <Avatar user={user} size="w-12 h-12" /> }
                </div>
                <Input type="text" {...register("name")} label="nome" error={errors.name?.message} />
                <Input type="text" {...register("email")} label="e-mail" error={errors.email?.message} />
              </div>
            </Modules.Context>

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
                  {user.userHours &&
                    day.morning.map((value) => {
                      if (user.userHours.includes(value)) {
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
                  Tarde{" "}
                </span>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {user.userHours &&
                    day.afternoon.map((value) => {
                      if (user.userHours.includes(value)) {
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
                  {user.userHours &&
                    day.night.map((value) => {
                      if (user.userHours.includes(value)) {
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
          </Modules.Container>
        </form>
      </Modules.Root>
    </>
  );
}