import { Modal } from "@/components/modal";
import { Loading } from "@/components/ui/loading";
import { useProfile } from "@/hooks/useProfile";
import { urlWhatsapp } from "@/services/api";
import { QRCodeSVG } from "qrcode.react"
import { useEffect, useState } from "react";

type DataType = {
  data: string
  mutateAsync: () => void
  identification: string
}

export function IsProfileWhatsapp({ data, mutateAsync, identification }: DataType){
  const { profileModal, isModal } = useProfile()
  const [open, setOpen] = useState<string>()
  const [close, setClose] = useState<string>()
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
      setOpen('✅ Conectado ao servidor')
    };

    ws.onmessage = (event) => {
        const onmessageJson = JSON.parse(event.data)
        setMessage(onmessageJson.data)
    };

    ws.onclose = () => {
        setClose('❌ Conexão encerrada ao servidor')
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
            <Modal.Title title={open ? open : close as string} onClose={() => isModal()} /> 
            <Modal.Context className="mb-0 border-t" >
              <div className={`lg:w-full relative flex items-center justify-center ${!data ? "h-65" : ""}`}>
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