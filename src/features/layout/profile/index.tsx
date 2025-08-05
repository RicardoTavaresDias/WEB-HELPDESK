import { useState } from "react";
import { Modal } from "@/components/modal";
import { useProfile } from "@/hooks/useProfile";
import { useProfileUpdate } from "../http/use-profile-update"
import { Alert } from "@/components/ui/alert";
import { Loading } from "@/components/ui/loading";
import { FormPassword } from "./components/form-password";
import { FormHoursTechnical } from "./components/form-hours-technical";
import { FormChooseAvatar } from "./components/form-choose-avatar";
import { FormProfile } from "./components/form-profile";
import { UiButton } from "@/components/ui/UiButton";
import { useForm } from "react-hook-form";
import { profileUpdateSchema, type ProfileUpdateSchemType } from "../schemas/profileSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type IsProfileProps = {
  myProfile: "technical" | "customers"
}

export function IsProfile({ myProfile }: IsProfileProps){
  const [modalPassword, setModalPassword] = useState(false)
  const { profileModal, isModal } = useProfile()
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const { data, session, fileRef, error, isError, mutateAsync: onUpdateProfile, isPending } = useProfileUpdate()

  const form = useForm<ProfileUpdateSchemType>({
    defaultValues: {
      name: session?.user.name,
      email: session?.user?.email
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(profileUpdateSchema) 
  })

  const onSubmit = async (data: ProfileUpdateSchemType) => {
    await onUpdateProfile(data)
    isModal()
  }

  return (
    <>
      <Alert severity="warning" open={isError} >
        {error?.message}
      </Alert>
      <Alert severity="info" open={!!data?.info} >
        {data?.info}
      </Alert>
      <Alert severity="success" open={!!data?.sucess} >
        {data?.sucess}
      </Alert>

      {/* Perfil */}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Modal.Root isActive={profileModal}>
          <Modal.Title title="Perfil" onClose={() => {
            form.reset()
            setImagePreview(null)
            isModal()
          }} />

          <Modal.Context className={myProfile !== "technical" ? "" : "mb-0 border-t"} >

            {isPending && <Loading />}

            <div className="lg:w-full relative">
              {/* Avatar */}
              <FormChooseAvatar 
                setImagePreview={setImagePreview}
                imagePreview={imagePreview}
                fileRef={fileRef}
              />
              {/* Avatar */}

              {/* Formulario */}
              <FormProfile 
                isModal={isModal}
                modalPassword={modalPassword}
                setModalPassword={setModalPassword}
                form={form}
              />
              {/* Formulario */}
            </div>
          </Modal.Context>
          
          {myProfile === "technical" &&
            <FormHoursTechnical />
          }

          <div className="m-auto mb-5">
            <UiButton typeSize="xxl" typeColor="black" disabled={isPending} >
              Salvar
            </UiButton>
          </div>
        </Modal.Root>
      </form>
      {/* Perfil */}

      {/* Alterar Senha */}
      <FormPassword 
        isModal={isModal}
        modalPassword={modalPassword}
        setModalPassword={setModalPassword}
      />
      {/* Alterar Senha */}
    </>
  )
}