import { useState } from "react";
import { Modal } from "@/components/modal";
import { useProfile } from "@/hooks/useProfile";
import { IconCamera } from "@/assets/icon/Iconcamera";
import { IconTrash } from "@/assets/icon/iconTrash";
import { Input } from "@/components/ui/input";
import { ButtonTime } from "@/components/ui/buttonTime";
import { UiButton } from "@/components/ui/UiButton";
import { IconPlay } from "@/assets/icon/IconPlay";
import { useOpenModal } from "@/hooks/useOpenModal"

import { profileUpdate } from "../http/use-profile-update"
import { useAuth } from "@/hooks/useAuth"
import { hourFormatList } from "@/lib/formatHours";
import { Avatar } from "@/components/ui/avatar";
import { Alert } from "@/components/ui/alert";
import { Loading } from "@/components/ui/loading";

type IsProfileProps = {
  myProfile: "technical" | "customers"
}

export function IsProfile({myProfile}: IsProfileProps){
  const { menuRef, open, setOpen } = useOpenModal()
  const [modalPassword, setModalPassword] = useState(false)
  const { profileModal, isModal }: any = useProfile()
  const [imagePreview, setImagePreview] = useState()

  const { session } = useAuth()
  const data = hourFormatList(session.user)
 
  const { onSubmit, form } = profileUpdate()

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>){
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url as any)
      form.setValue("file", file)
    }
  }
  
  return (
    <>
      {form.formState.isSubmitting && <Loading /> || form.formState.isLoading && <Loading/>}
        <Alert severity="error" open={!!form.formState.errors.root?.message}>
          {form.formState.errors.root?.message}
        </Alert>
        <Alert severity="success" open={!!form.formState.errors.root?.success}>
          {typeof form.formState.errors.root?.success === "string" && form.formState.errors.root.success}
        </Alert>
        <Alert severity="info" open={!!form.formState.errors.root?.info}>
          {typeof form.formState.errors.root?.info === "string" && form.formState.errors.root.info}
        </Alert>

      {/* Perfil */}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Modal.Root isActive={profileModal}>
          <Modal.Title title="Perfil" onClose={() => isModal()} />
          <Modal.Context className={myProfile !== "technical" ? "" : "mb-0 border-t"}>
            <div className="lg:w-full relative">
              {/* Avatar */}
              <div className="flex items-center w-fit" ref={menuRef}>
                <Avatar user={session.user} size="w-20 h-20" sizeText="text-[22px]" />

                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="absolute top-0 left-0 w-20 h-20 object-cover rounded-full border-2 border-none"
                  />
                )}
                              
                <div className="absolute ml-15 mt-11 z-40 cursor-pointer" onClick={() => setOpen(!open)}>
                  <div className="bg-gray-500 rounded-full w-6.5 h-6.5 flex justify-center items-center" >
                    <IconCamera className="w-5 h-5 fill-gray-400 hover:fill-gray-200" />
                  </div>
                </div>

                {/* Modal Escolher foto do perfil */}
                <div className={`absolute top-22 left-13 z-20 ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 hidden"} origin-top transition ease-out duration-200`}>
                  <IconPlay className="w-5 absolute -top-2 left-3 fill-gray-600 drop-shadow-xl/60  border-none -z-10" />
                  <div className={`w-50 bg-gray-600 p-2 drop-shadow-2xl/10 rounded-lg  `} >
                    <ul className="Text-Xs">
                      <li className="hover:bg-gray-400/8 cursor-pointer p-1.5 flex items-center gap-2 rounded" onClick={() => setOpen(!open)}>
                        <IconCamera className="w-5.5 fill-gray-400/70 stroke-gray-600" />
                        Escolher foto
                        <input type="file" {...form.register("file")} className="absolute w-42 opacity-0" onChange={handleImageChange}/>
                      </li>
                      <li className="hover:bg-gray-400/8 cursor-pointer p-1.5 flex items-center gap-2 rounded" onClick={() => setOpen(!open)}>
                        <IconTrash className="w-4 ml-1" />
                        Remover foto atual
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Modal Escolher foto do perfil */}

              </div>
              {/* Avatar */}

              <div className="mt-5">
                <Input type="text" {...form.register("name")} label="nome"  />
                <Input type="text" {...form.register("email")} label="e-mail"  />
                <div className="relative ">
                  <Input type="password" {...form.register("password")} label="senha" onChange={() => null} />
                  <div className="absolute right-0 ">
                    <div className="">
                      <button type="button" className="absolute bottom-5 right-1 p-1 bg-gray-500 rounded-md text-xxs font-semibold cursor-pointer hover:shadow-md" onClick={() => {setModalPassword(!modalPassword); isModal()}} >
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
                {
                  data && data.map((user) => (
                    <div className="flex gap-1 mt-3" key={user.id}>
                      {
                        user.userHours.flat().slice(0,6).map((useHours) => (
                        <>
                          <ButtonTime type="read" >{useHours}</ButtonTime>
                        </>
                        ))
                      }
                    </div>
                  ))
                } 
              </div>
            </Modal.Context>
          }

          <div className="m-auto mb-5">
            <UiButton typeSize="xxl" typeColor="black" disabled={form.formState.isSubmitting} onClick={() => {
              isModal()
            }} >Salvar</UiButton>
          </div>
        </Modal.Root>
      </form>
      {/* Perfil */}

      {/* Alterar Senha */}
      <form >
        <Modal.Root isActive={modalPassword}>
          <Modal.Title title="Alterar senha" onClose={() => {setModalPassword(!modalPassword)}} onClick={() => {isModal(); setModalPassword(!modalPassword)}} />
          <Modal.Context >
            <div>
              <Input type="password" name="currentPassword" label="Senha atual" placeholder="Digite sua senha atual" />
              <Input type="password" name="newPassword" label="Nova senha" placeholder="Digite sua nova senha" textLabel="Mínimo de 6 dígitos" />
            </div>
          </Modal.Context>
          <div className="m-auto mb-5">
            <UiButton type="submit" typeSize="xxl" typeColor="black" >Salvar</UiButton>
          </div>
        </Modal.Root>
      </form>
      {/* Alterar Senha */}
    </>
  )
}