import { LogoAuth } from "@/components/auth/logoAuth"
import { Form } from "@/components/ui/form"
import { Account } from "@/components/auth/account"
import { Input } from "@/components/ui/input"
import { useSignin } from "../hooks/useSignin"
import { Alert } from "@/components/ui/alert"
import { Loading } from "@/components/ui/loading"

export function Signin(){
  const { register, handleSubmit, onSubmit, isSubmitting, errors } = useSignin()
  
  return (
    <>
      <Alert severity="error" open={!!errors.root?.message} >{errors.root?.message}</Alert>
      {isSubmitting && <Loading />}

      <main className="pt-3">
        <div className="bg-gray-600 2xl:w-170 w-145 ml-auto py-12 max-sm:py-8 rounded-tl-3xl max-sm:w-95 max-sm:px-4 max-sm:rounded-3xl max-sm:mx-auto  lg:h-[calc(100vh-12px)]  flex items-center justify-center">
          <div id="animeAuth" className="w-110 px-4 2xl:px-0">
            <LogoAuth />
            <form onSubmit={handleSubmit(onSubmit)} >
              <Form textTitle="Acesse o portal" subtitle="Entre usando seu e-mail e senha cadastrados" textButton="Entrar" isLoading={isSubmitting} >
                <Input {...register('email')} type="text"  label="e-mail" placeholder="exemplo@mail.com" error={errors.email && errors.email.message}  autoComplete="current-email"/>
                <Input {...register('password')} type="password" label="senha" placeholder="Digite sua senha" error={errors.password && errors.password.message} autoComplete="current-password" />
              </Form>
            </form>
            <Account texttitle="Ainda não tem uma conta?" subTitle="Cadastre agora mesmo" textButton="Criar conta" to="/signup"/>
          </div>
          </div>
      </main>
    </>
  )
}
