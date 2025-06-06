import { LogoAuth } from "../../components/auth/logoAuth"
import { Form } from "../../components/ui/form"
import { Account } from "../../components/auth/account"
import { Input } from "../../components/ui/input"

import { useState } from "react"
import { useNavigate } from "react-router"

export function Signin(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({ email, password })

    setEmail("")
    setPassword("")
    navigate("/chamados")
  }

  return (
    <>    
      <main className="">
        <div className="bg-gray-600 w-170 ml-auto px-35 py-12 max-sm:py-8 rounded-tl-3xl max-sm:w-95 max-sm:px-4 max-sm:rounded-3xl max-sm:mx-auto  lg:h-[calc(100vh-12px)] lg:mt-3">
          <div id="animeAuth">
            <LogoAuth />
            <form onSubmit={handleSubmit}>
              <Form textTitle="Acesse o portal" subtitle="Entre usando seu e-mail e senha cadastrados" textButton="Entrar">
                <Input type= "text" label="e-mail" placeholder="exemplo@mail.com" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <Input type= "password" label="senha" placeholder="Digite sua senha" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
              </Form>
            </form>
            <Account texttitle="Ainda não tem uma conta?" subTitle="Cadastre agora mesmo" textButton="Criar conta" to="/signup"/>
          </div>
          </div>
      </main>
    </>
  )
}
