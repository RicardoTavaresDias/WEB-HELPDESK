import { useState } from "react";
import { Modal } from "../../components/modal";
import { useProfile } from "../../context";
import { IconCamera } from "../../assets/icon/Iconcamera";
import { IconTrash } from "../../assets/icon/iconTrash";
import { Input } from "../../components/ui/input";
import { ButtonTime } from "../../components/ui/buttonTime";
import { UiButton } from "../../components/ui/UiButton";
import avatar from "../../assets/img/Avatar.svg"

type IsProfileProps = {
  myProfile: "technical" | "customers"
}

export function IsProfile({myProfile}: IsProfileProps){
  const [modal, setModal] = useState(false)
  const { profileModal, isModal }: any = useProfile()
  
  return (
    <>
      {/* Perfil */}
      <Modal.Root isActive={profileModal}>
        <Modal.Title title="Perfil" onClose={() => isModal()} />

        <Modal.Context className={myProfile !== "technical" ? "" : "mb-0 border-t"}>
          <div className="lg:w-fit lg:m-auto">
            {/* Avatar */}
            <div className="flex items-center">
              <img src={avatar} className="w-12 h-12 relative"/>
            
              <div className="absolute ml-8 mt-5.5 z-40 cursor-pointer">
                <div className="bg-gray-500/85 rounded-full relative w-5.5 h-5.5 flex justify-center items-center " >
                  <IconCamera className="w-4 h-4 " />
                  <div className="opacity-0 rounded-full absolute top-0 left-0 right-0 bottom-0">
                    <input type="file" className="w-6 h-6" />
                  </div>
                </div>
              </div>


              {/* Icon no avatar lixeira */}
              {/* <div className="absolute z-50 mb-8 -ml-1 cursor-pointer">
                <div className="bg-gray-500/90 rounded-full relative w-5.5 h-5.5 flex justify-center items-center " >
                  <IconTrash className="w-3 h-3" color="#858B99" />
                </div>
              </div> */}

              <div className="ml-6">
                <button className="flex items-center gap-1 bg-gray-500 rounded px-2 py-2 cursor-pointer">
                  <IconTrash className="w-4 h-4" /> 
                  <span className="Text-Xs">Remover</span>
                </button>
              </div>

            </div>
            {/* Avatar */}

            <div className="mt-5">
              <Input type="text" label="nome" value="Carlos Silva" />
              <Input type="text" label="e-mail" value="carlos.silva@test.com" />
              <div className="flex items-center relative ">
                <Input type="password" label="senha" value="carlos.silva@test.com" />
                <div className="absolute right-0 ">
                  <div className="">
                    <button className="p-1 bg-gray-500 rounded-md text-xxs font-semibold cursor-pointer" onClick={() => {setModal(!modal); isModal()}} >
                      <span className="Text-Xs m-3 ">Alterar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Context>

        {myProfile === "technical" &&
        <Modal.Context className="border-t border-b mb-6">
          <div >
            <div>
              <span className="Text-Sm">Disponibilidade</span>
              <p className="Text-Xs text-gray-300">Horários de atendimento definidos pelo admin</p>
            </div>
            <div className="flex gap-1 mt-3">
              <ButtonTime type="read" >09:00</ButtonTime>
              <ButtonTime type="read" >10:00</ButtonTime>
              <ButtonTime type="read" >12:00</ButtonTime>
              <ButtonTime type="read" >13:00</ButtonTime>
              <ButtonTime type="read" >15:00</ButtonTime>
              <ButtonTime type="read" >16:00</ButtonTime>
            </div>
          </div>
        </Modal.Context>
        }

        <div className="m-auto mb-5">
          <UiButton typeSize="xl" typeColor="black" >Salvar</UiButton>
        </div>
      </Modal.Root>
      {/* Perfil */}

      {/* Alterar Senha */}
      <Modal.Root isActive={modal}>
        <Modal.Title title="Alterar senha" onClose={() => {setModal(!modal)}} onClick={() => {isModal(); setModal(!modal)}} />
        <Modal.Context >
          <div className="lg:w-fit lg:m-auto">
            <Input type="password" label="Senha atual" placeholder="Digite sua senha atual" />
            <Input type="password" label="Nova senha" placeholder="Digite sua nova senha" textLabel="Mínimo de 6 dígitos" />
          </div>
        </Modal.Context>
        <div className="m-auto mb-5">
          <UiButton typeSize="xl" typeColor="black" >Salvar</UiButton>
        </div>
      </Modal.Root>
      {/* Alterar Senha */}
    </>
  )
}