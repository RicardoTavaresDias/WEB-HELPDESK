import { Modal } from "@/components/modal";
import { Input } from "@/components/ui/input";
import { UiButton } from "@/components/ui/UiButton";
import { useChangePassword } from "../../http/use-change-password";
import { Alert } from "@/components/ui/alert";
import { Loader } from "@/components/ui/loading";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileChangePasswordSchema, type ProfileChangePasswordSchemaType } from "../../schemas/profileSchema";
import { useForm } from "react-hook-form";

type FormPasswordType = {
  modalPassword: boolean;
  setModalPassword: (value: boolean) => void;
  isModal: () => void;
};

export const FormPassword = ({
  isModal,
  modalPassword,
  setModalPassword,
}: FormPasswordType) => {
  const { data, isError, error, isSuccess, mutateAsync: onCreateNewPassword, isPending } = useChangePassword()

  const form = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: ''
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(profileChangePasswordSchema)
  })

  const onSubmit = (data: ProfileChangePasswordSchemaType) => {
    onCreateNewPassword(data)
    form.reset()
  }

  return (
    <>
      <Alert severity="error" open={isError} >
        {error?.message}
      </Alert>
      <Alert severity="success" open={isSuccess} >
        {data?.message}
      </Alert>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Modal.Root isActive={modalPassword}>
          <Modal.Title
            title="Alterar senha"
            onClose={() => {
              setModalPassword(!modalPassword);
              form.reset();
            }}
            onClick={() => {
              isModal();
              form.reset();
              setModalPassword(!modalPassword);
            }}
          />
          <Modal.Context>
            <div>
              <Input
                type="password"
                {...form.register("oldPassword")}
                label="Senha atual"
                placeholder="Digite sua senha atual"
                autoComplete="oldPassword"
                error={form.formState.errors.oldPassword?.message}
              />
              <Input
                type="password"
                {...form.register("newPassword")}
                label="Nova senha"
                placeholder="Digite sua nova senha"
                textLabel="Mínimo de 6 dígitos"
                autoComplete="oldPassword"
                error={form.formState.errors.newPassword?.message}
              />
            </div>
          </Modal.Context>
          <div className="m-auto mb-5">
            <UiButton
              type="submit"
              typeSize="xxl"
              typeColor="black"
              disabled={isPending}
            >
              {isPending ? <Loader /> : "Salvar"}
            </UiButton>
          </div>
        </Modal.Root>
      </form>
    </>
  );
};
