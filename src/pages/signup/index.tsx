import { LogoAuth } from "../../components/auth/logoAuth"
import { Form } from "../../components/ui/form"
import { Account } from "../../components/auth/account"
import { Input } from "../../components/ui/input"

export function Signup(){

   const handleSubmit = (formData: FormData) => {
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    console.log("Singup", { name, email, password })
  }

  return (
    <main className="pt-3 max-sm:pt-8">
      <div className="bg-gray-600 w-170 lg:h-screen ml-auto px-35 py-12 max-sm:py-8 rounded-tl-3xl max-sm:w-95 max-sm:px-4 max-sm:rounded-3xl max-sm:mx-auto">
        <div id="animeAuth" >
          <LogoAuth />
          <form action={handleSubmit}>
            <Form textTitle="Crie sua conta" subtitle="Informe seu nome, e-mail e senha" textButton="Cadastrar" >
              <Input type= "text" name="name" label="nome" placeholder="Digite o nome completo" />
              <Input type= "text" name="email" label="e-mail" placeholder="exemplo@mail.com" />
              <Input type= "password" name="password" label="senha" placeholder="Digite sua senha" textLabel="Mínimo de 6 dígitos" />
            </Form>
          </form>
          <Account texttitle="Já uma conta?" subTitle="Entre agora mesmo" textButton="Acessar conta" to="/"/>
        </div>
        
      </div>
    </main>
  )
}