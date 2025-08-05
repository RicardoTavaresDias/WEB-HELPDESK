import { Modules } from "@/components/modules";
import { Status } from "@/components/ui/status";

function LoadingCalledDetails () {
  return (
    <>
      <Modules.Context isType="50">
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
            <p className="bg-gray-500 text-transparent w-25 h-5 animate-pulse">p</p>
          </div>
          <div>
            <span className="text-gray-400 Text-Xs">Atualizado em</span>
            <p className="bg-gray-500 text-transparent w-25 h-5 animate-pulse">p</p>
          </div>
        </div>
      </Modules.Context>

      <Modules.Context isType="50">
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
          <div className="flex justify-between items-center">
            <p className="bg-gray-500 text-transparent w-25 h-5 animate-pulse">Preço base</p>
            <span className="bg-gray-500 text-transparent w-15 h-5 animate-pulse">p</span>
          </div>
        </div>

        <div className="mt-5">
          <span className="text-gray-400 Text-Xs">Adicionais</span>
          
            <div className="flex justify-between items-center mb-1" >
              <p className="bg-gray-500 text-transparent w-25 h-5 animate-pulse">p</p>
              <span className="bg-gray-500 text-transparent w-15 h-5 animate-pulse">p</span>
            </div>
        
        </div>

        <div className="pt-3 mt-4 border-t border-gray-500 flex justify-between items-center">
          <span className="Text-Sm text-gray-200">Total</span>
          <span className="bg-gray-500 text-transparent w-15 h-5 animate-pulse">p</span>
        </div>
      </Modules.Context>
    </>
  )
}

export { LoadingCalledDetails }