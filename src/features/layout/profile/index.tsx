import { useState } from "react";
import { Modal } from "@/components/modal";
import { useProfile } from "@/hooks/useProfile";
import { profileUpdate } from "../http/use-profile-update"
import { Alert } from "@/components/ui/alert";
import { Loading, Loader } from "@/components/ui/loading";
import { FormPassword } from "./components/form-password";
import { FormHoursTechnical } from "./components/form-hours-technical";
import { FormChooseAvatar } from "./components/form-choose-avatar";
import { FormProfile } from "./components/form-profile";
import { UiButton } from "@/components/ui/UiButton";

type IsProfileProps = {
  myProfile: "technical" | "customers"
}

export function IsProfile({ myProfile }: IsProfileProps){
  const [modalPassword, setModalPassword] = useState(false)
  const { profileModal, isModal } = useProfile()
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const { onSubmit, form, fileRef } = profileUpdate()

  return (
    <>
      {form.formState.isSubmitting && <Loading />}
        <Alert severity="error" open={!!form.formState.errors.root?.message} onClose={form.clearErrors} >
          {form.formState.errors.root?.message}
        </Alert>
        <Alert severity="info" open={!!form.formState.errors.root?.info} onClose={form.clearErrors} >
          {typeof form.formState.errors.root?.info === "string" && form.formState.errors.root.info}
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
            <UiButton typeSize="xxl" typeColor="black" disabled={form.formState.isSubmitting} >
              { form.formState.isSubmitting ? <Loader /> : "Salvar" }
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