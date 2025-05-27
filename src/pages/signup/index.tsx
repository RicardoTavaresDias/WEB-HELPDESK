import { LogoAuth } from "../../components/auth/logoAuth"
import { FormAuth } from "../../components/auth/formAuth"
import { Account } from "../../components/auth/account"
import { Input } from "../../components/ui/input"

import { useState } from "react"

export function Signup(){
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({ nome, email, password })

    setNome("")
    setEmail("")
    setPassword("")
  }

  return (
    <>
      <div className="bg-gray-600 w-170 lg:h-screen ml-auto px-35 py-12 max-sm:py-8 rounded-tl-3xl max-sm:w-95 max-sm:px-4 max-sm:rounded-3xl max-sm:mx-auto">
        <LogoAuth />
        <form onSubmit={handleSubmit}>
          <FormAuth textTitle="Crie sua conta" textSpan="Informe seu nome, e-mail e senha" label="Cadastrar">
            <Input type= "text" label="NOME" placeholder="Digite o nome completo" value={nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}/>
            <Input type= "text" label="E-MAIL" placeholder="exemplo@mail.com" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            <Input type= "password" label="SENHA" placeholder="Digite sua senha" error="Mínimo de 6 dígitos" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
          </FormAuth>
        </form>
        <Account h3="Já uma conta?" span="Entre agora mesmo" label="Acessar conta"/>
      </div>
    </>
  )
}