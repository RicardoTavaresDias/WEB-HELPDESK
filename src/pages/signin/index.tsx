import { LogoAuth } from "../../components/auth/logoAuth"
import { Form } from "../../components/ui/form"
import { Account } from "../../components/auth/account"
import { Input } from "../../components/ui/input"
import { useNavigate } from "react-router"

import { useAuth } from "../../hooks/useAuth"
import type { ResponseType } from "../../database/response"

export function Signin(){
  const navigate = useNavigate()
  const { save } = useAuth()

  const handleSubmit = (formData: FormData) => {
    const email = formData.get("email")
    const password = formData.get("password")

    save({
      token: "123456",
      user: {
        role: email
      }
    } as ResponseType) // authProvider

    console.log("Signin", { email, password })
    navigate("/")
  }

  return (
    <>
      <main className="pt-3">
        <div className="bg-gray-600 2xl:w-170 w-145 ml-auto py-12 max-sm:py-8 rounded-tl-3xl max-sm:w-95 max-sm:px-4 max-sm:rounded-3xl max-sm:mx-auto  lg:h-[calc(100vh-12px)]  flex items-center justify-center">
          <div id="animeAuth" className="w-110 px-4 2xl:px-0">
            <LogoAuth />
            <form action={handleSubmit}>
              <Form textTitle="Acesse o portal" subtitle="Entre usando seu e-mail e senha cadastrados" textButton="Entrar">
                <Input type= "text" name="email" label="e-mail" placeholder="exemplo@mail.com" />
                <Input type= "password" name="password" label="senha" placeholder="Digite sua senha" />
              </Form>
            </form>
            <Account texttitle="Ainda não tem uma conta?" subTitle="Cadastre agora mesmo" textButton="Criar conta" to="/signup"/>
          </div>
          </div>
      </main>
    </>
  )
}
