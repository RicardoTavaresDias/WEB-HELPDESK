import { Modules } from "@/components/modules";
import { Status } from "@/components/ui/status";
import { IsProfile } from "@/features/layout/profile";
import { useTechicalCalledClose, useTechicalCalledInProgress, useTechicalCalledOpen } from "../http/use-technical-called"
import { CalledsStatus } from "../components/calleds-status"
import { LoaderSM, Loading } from "@/components/ui/loading";

export function IndexCalledTechical(){
  const { data: inProgress, 
    fetchNextPage: 
    fetchNextPageInProgress, 
    hasNextPage: hasNextPageInProgress, 
    isFetchingNextPage: isFetchingNextPageInProgress,
    isPending: isPendingInProgress
  } = useTechicalCalledInProgress()

  
  const { data: open, 
    fetchNextPage: fetchNextPageInProgressOpen, 
    hasNextPage: hasNextPageOpen,
    isFetchingNextPage: isFetchingNextPageOpen,
    isPending: isPendingOpen
  } = useTechicalCalledOpen()

  
  const { data: close, 
    fetchNextPage:fetchNextPageClose, 
    hasNextPage: hasNextPageClose,
    isFetchingNextPage: isFetchingNextPageClose,
    isPending: isPendingIClose 
  } = useTechicalCalledClose()

  if(!inProgress || !open || !close){
    return <Loading />
  }

  return (
    <>
      <IsProfile myProfile="technical" />
      
      <Modules.Root displauFull>
        <Modules.Title title="Meus chamados" />

        {/* Em atendimento */}
        <div className="mt-7 max-sm:mt-1">
          {inProgress?.pages[0].data.length >= 1 && <Status type="in_progress" isText />}
          <Modules.Container>
            <CalledsStatus 
              dataCalleds={inProgress}
              queryKey={["techical_called_Close", "techical_called_inProgress"]}
            />
          </Modules.Container>

          <div className="flex justify-center mt-6">
            {inProgress?.pages[0].data.length >= 10 &&
              <button className="w-100 h-8 border rounded-lg flex justify-center items-center bg-blue-base text-white Text-Sm border-none cursor-pointer hover:shadow-lg transition-shadow" 
                onClick={() => fetchNextPageInProgress()} disabled={!hasNextPageInProgress || isFetchingNextPageInProgress} >
                {isPendingInProgress ? (
                  <LoaderSM />
                ) : isFetchingNextPageInProgress ? (
                  <LoaderSM />
                ) : hasNextPageInProgress ? (
                  inProgress?.pages[0].result.next && "Ver mais"
                ) : (
                  "Fim da lista"
                )}
              </button>  
            }
          </div>
        </div>
        {/* Em atendimento */}

        {/* Aberto */}
        <div className="mt-7">
          {open?.pages[0].data.length >= 1 && <Status type="open" isText />}
          <Modules.Container>
            <CalledsStatus 
              dataCalleds={open}
              queryKey={["techical_called_inProgress", "techical_called_Open"]}
            />
          </Modules.Container>

          <div className="flex justify-center mt-6">
            {open?.pages[0].data.length >= 10 &&
              <button className="w-100 h-8 border rounded-lg flex justify-center items-center bg-blue-base text-white Text-Sm border-none cursor-pointer hover:shadow-lg transition-shadow" 
                onClick={() => fetchNextPageInProgressOpen()} disabled={!hasNextPageOpen || isFetchingNextPageOpen} >
                {isPendingOpen ? (
                  <LoaderSM />
                ) : isFetchingNextPageOpen ? (
                  <LoaderSM />
                ) : hasNextPageOpen ? (
                  open?.pages[0].result.next && 
                      "Ver mais"
                ) : (
                  "Fim da lista"
                )}
              </button>
            }
          </div>
        </div>
        {/* Aberto */}

        {/* Encerrado */}
        <div className="mt-7">
          {close?.pages[0].data.length >= 1 && <Status type="close" isText />}
          <Modules.Container>
            <CalledsStatus 
              dataCalleds={close}
              queryKey={["techical_called_Open", "techical_called_Close"]}
            />
          </Modules.Container>

          <div className="flex items-center mt-6">
            {close?.pages[0].data.length >= 10 &&
              <button className="w-100 h-8 border rounded-lg flex justify-center items-center bg-blue-base text-white Text-Sm border-none cursor-pointer hover:shadow-lg transition-shadow" 
                onClick={() => fetchNextPageClose()} disabled={!hasNextPageClose || isFetchingNextPageClose} >
                  {isPendingIClose ? (
                    <LoaderSM />
                  ) : isFetchingNextPageClose ? (
                    <LoaderSM />
                  ) : hasNextPageClose ? (
                    close?.pages[0].result.next && "Ver mais"
                  ) : (
                    "Fim da lista"
                  )}
                </button>
              }
          </div>
        </div>
        {/* Encerrado */}

      </Modules.Root>
    </>
  )
}