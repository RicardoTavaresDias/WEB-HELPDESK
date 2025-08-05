import { Modules } from "@/components/modules";

function LoadingUpdatePage () {
  return (
    <>
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
            <div className="w-14 h-14 rounded-full bg-gray-500 animate-pulse"></div>
          </div>
          <label className="Text-Xxs text-gray-300">nome</label>
          <div className="w-full bg-gray-500 text-transparent animate-pulse mt-2 mb-4">p</div>

          <label className="Text-Xxs text-gray-300">e-mail</label>
          <div className="w-full bg-gray-500 text-transparent animate-pulse mt-2">p</div>
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
          <div className="max-sm:w-full w-100 bg-gray-500 mt-3 text-transparent animate-pulse">p</div>
        </div>

        <div className="mt-5">
          <span className="text-xs font-semibold text-gray-300 uppercase">
            Tarde
          </span>
          <div className="max-sm:w-full w-100 bg-gray-500 mt-3 text-transparent animate-pulse">p</div>
        </div>

        <div className="mt-5">
          <span className="text-xs font-semibold text-gray-300 uppercase">
            Noite
          </span>
          <div className="max-sm:w-full w-100 bg-gray-500 mt-3 text-transparent animate-pulse">p</div>
        </div>
      </Modules.Context>
    </>
  )
}

export { LoadingUpdatePage }