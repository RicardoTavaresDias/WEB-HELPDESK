import { IconPlus } from "@/assets/icon/iconPlus";
import { Modules } from "@/components/modules";
import { Status } from "@/components/ui/status";
import { UiButton } from "@/components/ui/UiButton";

function LoadingCalledDetails () {
  return (
    <>
      <Modules.Context isType="60">
        <div className="flex justify-between items-center mb-1">
          <span className="Text-Xs text-gray-300">000</span>
          <Status type="open" isText /> 
        </div>

        <p className="bg-gray-500 text-transparent w-1/2 h-5 animate-pulse">p</p>

        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Descrição</span>
          <p className="bg-gray-500 text-transparent w-full h-5 animate-pulse" >p</p>
        </div>

        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Categoria</span>
          <p className="bg-gray-500 text-transparent w-full h-5 animate-pulse">p</p>
        </div>

        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Horário agendado</span>
          <p className="bg-gray-500 text-transparent w-full h-5 animate-pulse">p</p>
        </div>
        
        <div className="mt-5 flex justify-between">
          <div>
            <span className="text-gray-400 Text-Xs">Criado em</span>
            <p className="bg-gray-500 text-transparent w-30 h-5 animate-pulse">p</p>
          </div>
          <div className="">
            <span className="text-gray-400 Text-Xs">Atualizado em</span>
            <p className="bg-gray-500 text-transparent w-30 h-5 animate-pulse">p</p>
          </div>
        </div>

        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Cliente</span>
          <div className="flex gap-2 mt-2 items-center">
            <div className="w-10 h-10 rounded-full bg-gray-500 animate-pulse"></div>
            <span className="bg-gray-500 text-transparent w-30 h-5 animate-pulse">p</span>
          </div>
        </div>
      </Modules.Context>

      <Modules.Context isType="40">
        <span className="text-gray-400 Text-Xs">Técnico responsável</span>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-10 h-10 rounded-full bg-gray-500 animate-pulse"></div>
          <div className="flex flex-col justify-center gap-2">
            <span className="bg-gray-500 text-transparent w-25 h-3 animate-pulse">p</span>
            <span className="bg-gray-500 text-transparent w-25 h-3 animate-pulse">p</span>
          </div>
        </div>
        
        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Valores</span>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="bg-gray-500 text-transparent w-55 max-sm:w-45 h-5 animate-pulse">Preço base</p>
              <span className="bg-gray-500 text-transparent w-15 h-5 animate-pulse">p</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-normal text-gray-200">Adicionais</p>
              <span className="bg-gray-500 text-transparent w-15 h-5 animate-pulse">p</span>
            </div>
          </div>
        </div>

        <div className="pt-3 mt-4 border-t border-gray-500 flex justify-between items-center">
          <span className="Text-Sm text-gray-200">Total</span>
          <span className="bg-gray-500 text-transparent w-15 h-5 animate-pulse">p</span>
        </div>
      </Modules.Context>

      {/* Services */}
      <Modules.Context isType="60">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 Text-Xs">Serviços adicionais</span>
          <UiButton type="button" typeColor="black" typeSize="xxs" icon={IconPlus} color="#F9FAFA" />
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between" >
            <p className="bg-gray-500 text-transparent w-75 h-5 animate-pulse">p</p>
            <div className="flex items-center gap-6">
              <span className="bg-gray-500 text-transparent w-15 h-5 animate-pulse">p</span>
            </div>
          </div>
        </div>
      </Modules.Context>
      {/* Services */}
    </>
  )
}

export { LoadingCalledDetails }