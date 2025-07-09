import { IconCicleHelp } from "@/assets/icon/iconCicleHelp";
import { IconCicloCheckBig } from "@/assets/icon/iconCicloCheckBig";
import { IconClock } from "@/assets/icon/iconClock";
import { Modules } from "@/components/modules";
import { Status } from "@/components/ui/status";
import { UiButton } from "@/components/ui/UiButton";
import { called } from "@/database/admCallList"
import avatar from "@/assets/img/Avatar.svg"
import { useState } from "react" 
import { useParams } from "react-router" 
import { IconPlus } from "@/assets/icon/iconPlus";
import { IconTrash } from "@/assets/icon/iconTrash";
import { IsProfile } from "@/layout/profile";
import { Modal } from "@/components/modal";
import { Input } from "@/components/ui/input";
import { currency } from "@/lib/currency";

export function CallDetails(){
  const { id } = useParams()
  const [modalServices, setModalServices] = useState(false)
   const [value, setValue] = useState("")

  const [itemCalled] = called.filter(item => item.id === id)
  const [details, setDetails ] = useState(itemCalled)

  const handleSubmit = (formData: FormData) => {
    const description = formData.get("description")
    const value = formData.get("value")

    setModalServices(!modalServices)
    console.log("Technical Create Services", { description, value })
  }

  return (
    <>
      <IsProfile myProfile="technical" />

      <form action={handleSubmit}>
        <Modal.Root isActive={modalServices}>
          <Modal.Title title="Serviço adicional" onClose={() => setModalServices(!modalServices)}/>
          <Modal.Context>
            <Input type="text" name="description" label="Descrição" placeholder="Assinatura de backup"/>
            <Input type="text" name="value" label="Valor" placeholder="R$ 120,00" value={value} onChange={(e) => setValue( currency(e.target.value) )} />
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black">Salvar</UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>

      <Modules.Root>
        <Modules.Title title="Chamado detalhado" to="/">
          {details.status === "open" &&
            <>
              <UiButton type="button" typeColor="gray" typeSize="md" icon={IconClock} onClick={() => setDetails({...details, status: "progress"})} >Encerrar</UiButton>
              <UiButton type="button" typeColor="black" typeSize="md" color="#F9FAFA" icon={IconCicloCheckBig} onClick={() => setDetails({...details, status: "close"})} >Iniciar atendimento</UiButton>
            </>
          }
          {details.status === "progress" &&
            <>
              <UiButton type="button" typeColor="gray" typeSize="md" icon={IconCicleHelp} onClick={() => setDetails({...details, status: "open"})} >Abrir</UiButton>
              <UiButton type="button" typeColor="black" typeSize="md" icon={IconCicloCheckBig} color="#F9FAFA" onClick={() => setDetails({...details, status: "close"})} >Encerrar</UiButton>
            </>
          }
          {details.status === "close" &&
            <>
              <UiButton type="button" typeColor="gray" typeSize="md" icon={IconCicleHelp} onClick={() => setDetails({...details, status: "open"})} >Abrir</UiButton>
              <UiButton type="button" typeColor="black" typeSize="md" color="#F9FAFA" icon={IconClock} onClick={() => setDetails({...details, status: "progress"})} >Iniciar atendimento</UiButton>
            </>
          }
        </Modules.Title>

        <Modules.Container>
          <Modules.Context isType="60">
            <div className="flex justify-between items-center mb-1">
              <span className="Text-Xs text-gray-300">{details.id}</span>
              <Status type={details.status as "open" | "progress" | "close"} isText />
            </div>
  
            <span className="text-gray-200 text-base font-medium">Backup não está funcionando	</span>

            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Descrição</span>
              <p className="text-sm font-normal text-gray-200" >
                O sistema de backup automático parou de funcionar. Última execução bem-sucedida foi há uma semana.
              </p>
            </div>

            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Categoria</span>
              <p className="text-sm font-normal text-gray-200">Recuperação de Dados</p>
            </div>
           
            <div className="mt-5 flex justify-between">
              <div>
                <span className="text-gray-400 Text-Xs">Criado em</span>
                <p className="text-sm font-normal text-gray-200">12/04/25 09:12</p>
              </div>
              <div className="w-50">
                <span className="text-gray-400 Text-Xs">Atualizado em</span>
                <p className="text-sm font-normal text-gray-200">{details.date}</p>
              </div>
            </div>

            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Cliente</span>
              <div className="flex gap-2 mt-2">
                <img src={avatar} className="w-5 h-5" />
                <span className="text-gray-200 Text-Sm">{details.customer.name}</span>
              </div>
            </div>
          </Modules.Context>

          <Modules.Context isType="40">
            <span className="text-gray-400 Text-Xs">Técnico responsável</span>
            <div className="flex items-center gap-2 mt-2">
              <img src={avatar} className="w-8 h-8" />
              <div className="flex flex-col justify-center">
                <span className="text-gray-200 Text-Sm">{details.technical.name}</span>
                <span className="Text-Xs text-gray-300">{details.technical.name.toLowerCase() + "@test.com"}</span>
              </div>
            </div>
            
            <div className="mt-5">
              <span className="text-gray-400 Text-Xs">Valores</span>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-normal text-gray-200 mt-2">Preço base</p>
                  <span className="Text-Xs text-gray-200">R$ 200,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-normal text-gray-200">Adicionais</p>
                  <span className="Text-Xs text-gray-200">R$ 195,00</span>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-gray-500 flex justify-between items-center">
              <span className="Text-Sm text-gray-200">Total</span>
              <span className="Text-Sm text-gray-200">R$ 395,00</span>
            </div>
          </Modules.Context>

          <Modules.Context isType="60">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 Text-Xs">Serviços adicionais</span>
              <UiButton type="button" typeColor="black" typeSize="xxs" icon={IconPlus} color="#F9FAFA" onClick={() => setModalServices(!modalServices)}/>
            </div>

            <div className="mt-4 flex flex-col gap-4">

              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-200">Recuperação de Dados</p>
                <div className="flex items-center gap-6">
                  <span className="Text-Xs text-gray-200">R$ 120,00</span>
                  <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconTrash} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-200">Formatação do PC</p>
                <div className="flex items-center gap-6">
                  <span className="Text-Xs text-gray-200">R$ 75,00</span>
                  <UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconTrash} />
                </div>
              </div>
              
            </div>
          </Modules.Context>
        </Modules.Container>
      </Modules.Root>
    </>
  )
}