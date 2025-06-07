import { useState } from "react";
import { Modal } from "../../components/modal";
import { useProfile } from "../../hooks/useProfile";
import { IconCamera } from "../../assets/icon/Iconcamera";
import { IconTrash } from "../../assets/icon/iconTrash";
import { Input } from "../../components/ui/input";
import { ButtonTime } from "../../components/ui/buttonTime";
import { UiButton } from "../../components/ui/UiButton";
import avatar from "../../assets/img/Avatar.svg"
import { IconPlay } from "../../assets/icon/IconPlay";
import { useOpenModal } from "../../hooks/useOpenModal"

type IsProfileProps = {
  myProfile: "technical" | "customers"
}

export function IsProfile({myProfile}: IsProfileProps){
  const { menuRef, open, setOpen } = useOpenModal()
  const [modalPassword, setModalPassword] = useState(false)
  const { profileModal, isModal }: any = useProfile()
  
  return (
    <>
      {/* Perfil */}
      <Modal.Root isActive={profileModal}>
        <Modal.Title title="Perfil" onClose={() => isModal()} />
        <Modal.Context className={myProfile !== "technical" ? "" : "mb-0 border-t"}>
          <div className="lg:w-fit lg:m-auto relative">
            {/* Avatar */}
            <div className="flex items-center w-fit" ref={menuRef}>
              <img src={avatar} className="w-15 h-15 relative"/>
            
              <div className="absolute ml-10 mt-9 z-40 cursor-pointer" onClick={() => setOpen(!open)}>
                <div className="bg-gray-500 rounded-full relative w-6 h-6 flex justify-center items-center" >
                  <IconCamera className="w-5 h-5 fill-gray-400 hover:fill-gray-200" />
                </div>
              </div>
              
              {/* Modal foto input file e remove, com animação de transição */}
              <div className={`${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"} w-50 bg-gray-500 p-2 absolute top-19 left-8 rounded shadow-lg transition-transform duration-200 ease-out transform`} >
                <ul className="Text-Xs relative">
                  <IconPlay className="w-5 absolute -top-4" />
                  <li className="hover:bg-gray-400/15 cursor-pointer p-1.5 flex items-center gap-2 relative rounded" onClick={() => setOpen(!open)}>
                    <IconCamera className="w-5.5 fill-gray-400" />
                    Escolher foto
                    <input type="file" className="absolute w-42 opacity-0" />
                  </li>
                  <li className="hover:bg-gray-400/15 cursor-pointer p-1.5 flex items-center gap-2 rounded" onClick={() => setOpen(!open)}>
                    <IconTrash className="w-4 ml-1" />
                    Remover foto atual
                  </li>
                </ul>
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
                    <button className="p-1 bg-gray-500 rounded-md text-xxs font-semibold cursor-pointer" onClick={() => {setModalPassword(!modalPassword); isModal()}} >
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
      <Modal.Root isActive={modalPassword}>
        <Modal.Title title="Alterar senha" onClose={() => {setModalPassword(!modalPassword)}} onClick={() => {isModal(); setModalPassword(!modalPassword)}} />
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