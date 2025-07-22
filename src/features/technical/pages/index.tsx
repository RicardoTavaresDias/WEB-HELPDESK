import { Modules } from "@/components/modules";
import { Status } from "@/components/ui/status";
import { IsProfile } from "@/features/layout/profile";
import { useTechicalCalled } from "../http/use-technical-called"
import { CalledsStatus } from "../components/calleds-status"
import { Loading } from "@/components/ui/loading";

export function IndexCalledTechical(){
  const { data, isLoading } = useTechicalCalled().query
  
  return (
    <>
      {isLoading && <Loading />}
      <IsProfile myProfile="technical" />
      
      <Modules.Root displauFull>
        <Modules.Title title="Meus chamados" />

        {/* Em atendimento */}
        <div className="mt-7 max-sm:mt-1">
          <Status type="in_progress" isText />
          <Modules.Container>
            <CalledsStatus 
              dataCalleds={data?.CalledInProgress}
            />
          </Modules.Container>
        </div>
        {/* Em atendimento */}

        {/* Aberto */}
        <div className="mt-7">
          <Status type="open" isText />
          <Modules.Container>
            <CalledsStatus 
              dataCalleds={data?.CalledOpen}
            />
          </Modules.Container>
        </div>
        {/* Aberto */}

        {/* Encerrado */}
        <div className="mt-7">
          <Status type="close" isText />
          <Modules.Container>
            <CalledsStatus 
              dataCalleds={data?.CalledClose}
            />
          </Modules.Container>
        </div>
        {/* Encerrado */}

      </Modules.Root>
    </>
  )
}