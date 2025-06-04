import { Modal } from "../../components/modal";
import { Button } from "../../components/ui/button";
import { useProfile } from "../../context"
import avatar from "../../assets/img/Avatar.svg"
import { IconPenLine } from "../../assets/icon/iconPenLine";
import { IconTrash } from "../../assets/icon/iconTrash";
import { Input } from "../../components/ui/input";
import { ButtonTime } from "../../components/ui/buttonTime";
import { useState } from "react";
import { Modules } from "../../components/modules";
import { Status } from "../../components/ui/status";

export function Called(){
  const [modal, setModal] = useState(false)
  const { profileModal, isModal }: any = useProfile()

  return (
    <>
      {/* Perfil */}
      <Modal.Root isActive={profileModal}>
        <Modal.Title title="Perfil" onClose={() => isModal()} />

        <Modal.Context className="mb-0 border-t">
          <div className="lg:w-fit lg:m-auto">
            {/* Avatar */}
            <div className="flex items-center gap-3">
              <img src={avatar} className="w-12 h-12"/>
              <div className="flex items-center gap-1">
                <Button typeColor="gray" typeSize="xxs" >
                  <div className="p-[3.5px]">
                    <div className="flex gap-1 items-center Text-Xs">
                      <IconPenLine className="w-3.5 h-3.5" />
                      Nova imagem
                    </div>
                  </div>
                </Button>
                <IconTrash />
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
                    <Button typeColor="gray" typeSize="xxs" onClick={() => {setModal(!modal); isModal()}} >
                      <span className="Text-Xs m-3 ">Alterar</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Context>

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

        <div className="m-auto mb-5">
          <Button typeSize="xl" typeColor="black" >Salvar</Button>
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
          <Button typeSize="xl" typeColor="black" >Salvar</Button>
        </div>
      </Modal.Root>
      {/* Alterar Senha */}
      





      {/* Conteúdo */}
      <Modules.Root displauFull>
        <Modules.Title title="Meus chamados" />

        <div className="mt-7 max-sm:mt-1">
          <Status type="progress" isText />
          <Modules.Container>
            <Modules.Context isType="30">
              <div className="w-[346px]">
                Conteúdo 1
              </div>
            </Modules.Context>
          </Modules.Container>
        </div>




        <div className="mt-7">
          <Status type="open" isText />
          <Modules.Container>
            <Modules.Context isType="30">
              <div className="w-[346px]">
                Conteúdo 1
              </div>
            </Modules.Context>

            <Modules.Context isType="30">
              <div className="w-[346px]">
                Conteúdo 2
              </div>
            </Modules.Context>

            <Modules.Context isType="30">
              <div className="w-[346px]">
                Conteúdo 3
              </div>
            </Modules.Context>

            <Modules.Context isType="30">
              <div className="w-[346px]">
                Conteúdo 4
              </div>
            </Modules.Context>
          </Modules.Container>
        </div>




        <div className="mt-7">
          <Status type="close" isText />
          <Modules.Container>
            <Modules.Context isType="30">
              <div className="w-[346px]">
                Conteúdo 1
              </div>
            </Modules.Context>
          </Modules.Container>
        </div>

      </Modules.Root>
      {/* Conteúdo */}
    </>
  )
}