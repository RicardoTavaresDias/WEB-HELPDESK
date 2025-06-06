import { LogoAuth } from "../../components/auth/logoAuth"
import { Form } from "../../components/ui/form"
import { Account } from "../../components/auth/account"
import { Input } from "../../components/ui/input"

import { useState } from "react"

export function Signup(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({ name, email, password })

    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <main className="pt-3 max-sm:pt-8">
      <div className="bg-gray-600 w-170 lg:h-screen ml-auto px-35 py-12 max-sm:py-8 rounded-tl-3xl max-sm:w-95 max-sm:px-4 max-sm:rounded-3xl max-sm:mx-auto">
        <div id="animeAuth" >
          <LogoAuth />
          <form onSubmit={handleSubmit}>
            <Form textTitle="Crie sua conta" subtitle="Informe seu nome, e-mail e senha" textButton="Cadastrar" >
              <Input type= "text" label="nome" placeholder="Digite o nome completo" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
              <Input type= "text" label="e-mail" placeholder="exemplo@mail.com" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
              <Input type= "password" label="senha" placeholder="Digite sua senha" textLabel="Mínimo de 6 dígitos" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            </Form>
          </form>
          <Account texttitle="Já uma conta?" subTitle="Entre agora mesmo" textButton="Acessar conta" to="/"/>
        </div>
        
      </div>
    </main>
  )
}