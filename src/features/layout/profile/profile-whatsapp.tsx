import { IconX } from "@/assets/icon/iconX";
import { Modal } from "@/components/modal";
import { Loading } from "@/components/ui/loading";
import { useProfile } from "@/hooks/useProfile";
import { urlWhatsapp } from "@/services/api";
import { QRCodeSVG } from "qrcode.react"
import { useEffect, useState } from "react";
import { Server, ServerOff } from "lucide-react"

type DataType = {
  data: string
  mutateAsync: () => void
  identification: string
}

export function IsProfileWhatsapp({ data, mutateAsync, identification }: DataType){
  const { profileModal, isModal } = useProfile()
  const [open, setOpen] = useState<string>()
  const [message, setMessage] = useState<string>()

  useEffect(() => {
    if(message === "disconnected") {
      mutateAsync()
    }
  }, [message])

  useEffect(() => {
    // Troque pelo IP/porta do seu servidor
    const ws = new WebSocket(urlWhatsapp)

    ws.onopen = () => {
      ws.send('Olá servidor!');
      setOpen('Conectado ao servidor')
    };

    ws.onmessage = (event) => {
        const onmessageJson = JSON.parse(event.data)
        setMessage(onmessageJson.data)
    };

    ws.onclose = () => {
        console.log('Conexão encerrada ao servidor')
    };

    ws.onerror = (error: any) => {
        console.log('⚠️ Erro: ' + error.message);
    };

    // cleanup ao desmontar o componente
    return () => {
      ws.close()
    } 
  }, [])
   
  return (
    <>
      {/* Perfil */}
      {identification === "admin" &&
        <div className="max-sm:hidden">
          <Modal.Root isActive={profileModal}>

            {/* Title */}
            <div className="py-5 px-7 flex justify-between items-center bg-[#00c07f] rounded-t-xl">
              <div className="flex items-center justify-center w-full">
                <span className="text-[25px] font-semibold text-white" >{"WhatsApp API "}</span>
              </div>
              <button type="button" onClick={() => isModal()}>
                <IconX className="w-4.5 h-4.5 cursor-pointer fill-white" />
              </button>
            </div>
            {/* Title */}

            <Modal.Context className="mb-0 border-t" >
              <div className={`lg:w-full relative flex items-center justify-center`}>
                <div className="flex flex-col items-center">

                  <div className="flex flex-col justify-center items-center gap-4">

                    {/* Servidor */}
                    {open ? 
                      <div className="flex gap-2 items-center">
                        {<Server className="stroke-green-400 w-5" />}
                        <span className="text-gray-300 text-[14px]">
                          {open}
                        </span>
                      </div> 
                      : 
                      <div className="flex gap-2 items-center">
                        {<ServerOff className="stroke-[#D03E3E] w-5" />} 
                        <span className="text-gray-300 text-[14px]">
                          Servidor fora, startando, pode levar alguns minutos.
                        </span>
                      </div> 
                    }
                    {/* Servidor */}

                    {/* QRcode ou img */}
                    <div className="w-65 h-65 flex justify-center">
                      {message === "connection" ||
                        <>
                          {!data ? <Loading /> : 
                            <QRCodeSVG 
                              value={`${data && data}`} 
                              className="w-65 h-65"
                            />
                          }
                        </>
                      }

                      {message === "connection" &&
                        <>
                          <img src="https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/ok_cool_save_okay-512.png" className="w-65 h-65" />
                        </>
                      }
                    </div>
                    {/* QRcode ou img */}
                    
                  </div>

                </div>
              </div>
            </Modal.Context>
            <div className="m-auto mb-5">
              {message === "disconnected" && '❌ Conexão encerrada'}
              {message === "connection" && "✅ Conectado"}
            </div>
          </Modal.Root>
        </div>
      }
      {/* Perfil */}
    </>
  )
}