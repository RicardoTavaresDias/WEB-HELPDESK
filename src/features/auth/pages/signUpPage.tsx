import { LogoAuth } from "@/components/auth/logoAuth"
import { Form } from "@/components/ui/form"
import { Account } from "@/components/auth/account"
import { Input } from "@/components/ui/input"

import { useSignup } from "@/features/auth/hooks/useSignUp"
import { Alert } from "@/components/ui/alert"
import { Loading } from "@/components/ui/loading"

export function Signup(){
  const { register, handleSubmit, onSubmit, errors, isSubmitting, messageSucess } = useSignup()
   
  return (
    <>
      {isSubmitting && <Loading />}
      <Alert severity="error" open={!!errors.root?.message} >{errors.root?.message}</Alert>
      <Alert severity="success" open={!!messageSucess}>{messageSucess}</Alert>

      <main className="pt-3 max-sm:pt-8">
        <div className="bg-gray-600 2xl:w-170 w-145 lg:h-screen ml-auto py-12 max-sm:py-8 rounded-tl-3xl max-sm:w-95 max-sm:px-4 max-sm:rounded-3xl max-sm:mx-auto flex items-center justify-center">
          <div id="animeAuth" className="w-110 px-4 2xl:px-0" >
            <LogoAuth />
            <form onSubmit={handleSubmit(onSubmit)} >
              <Form textTitle="Crie sua conta" subtitle="Informe seu nome, e-mail e senha" textButton="Cadastrar" isLoading={isSubmitting}>
                <Input {...register("name")} type="text" label="nome" placeholder="Digite o nome completo" error={errors.name && errors.name.message} />
                <Input {...register("email")} type="text" label="e-mail" placeholder="exemplo@mail.com" error={errors.email && errors.email.message} />
                <Input {...register("password")} type="password" label="senha" placeholder="Digite sua senha" textLabel="Mínimo de 6 dígitos" error={errors.password && errors.password.message} />
              </Form>
            </form>
            <Account texttitle="Já uma conta?" subTitle="Entre agora mesmo" textButton="Acessar conta" to="/"/>
          </div>
          
        </div>
      </main>
    </>
  )
}