import { LogoAuth } from "@/components/auth/logoAuth";
import { Form } from "@/components/ui/form";
import { Account } from "@/components/auth/account";
import { Input } from "@/components/ui/input";
import { useSignup } from "@/features/auth/http/create-signUp";
import { Alert } from "@/components/ui/alert";
import { Loading } from "@/components/ui/loading";
import { signupSchema, type signupSchemaType } from "../schemas/AuthSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function Signup() {
  const { data, error, isError, isSuccess, isPending, mutateAsync: onCreateSignup } = useSignup();

  const form = useForm<signupSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: ''
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = async (data: signupSchemaType) => {
    await onCreateSignup(data)
    form.reset()
  }

  return (
    <>
      {isPending && <Loading />}
      <Alert severity="warning" open={isError} >
        {error?.message}
      </Alert>
      <Alert severity="success" open={isSuccess} >
        {data?.message}
      </Alert>

      <main className="pt-3 max-sm:pt-8">
        <div className="bg-gray-600 2xl:w-170 w-145 lg:h-screen ml-auto py-12 max-sm:py-8 rounded-tl-3xl max-sm:w-95 max-sm:px-4 max-sm:rounded-3xl max-sm:mx-auto flex items-center justify-center">
          <div id="animeAuth" className="w-110 px-4 2xl:px-0">
            <LogoAuth />
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Form
                textTitle="Crie sua conta"
                subtitle="Informe seu nome, e-mail e senha"
                textButton="Cadastrar"
                isLoading={form.formState.isSubmitting}
              >
                <Input
                  {...form.register("name")}
                  type="text"
                  label="nome"
                  placeholder="Digite o nome completo"
                  error={
                    form.formState.errors.name &&
                    form.formState.errors.name.message
                  }
                  autoComplete="current-nome"
                />
                <Input
                  {...form.register("email")}
                  type="text"
                  label="e-mail"
                  placeholder="exemplo@mail.com"
                  error={
                    form.formState.errors.email &&
                    form.formState.errors.email.message
                  }
                  autoComplete="current-e-mail"
                />
                <Input
                  {...form.register("password")}
                  type="password"
                  label="senha"
                  placeholder="Digite sua senha"
                  textLabel="Mínimo de 6 dígitos"
                  error={
                    form.formState.errors.password &&
                    form.formState.errors.password.message
                  }
                  autoComplete="current-password"
                />
              </Form>
            </form>
            <Account
              texttitle="Já uma conta?"
              subTitle="Entre agora mesmo"
              textButton="Acessar conta"
              to="/"
            />
          </div>
        </div>
      </main>
    </>
  );
}