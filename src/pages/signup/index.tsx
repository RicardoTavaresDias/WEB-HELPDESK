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
      <div className="bg-gray-600 2xl:w-170 w-145 lg:h-screen ml-auto py-12 max-sm:py-8 rounded-tl-3xl max-sm:w-95 max-sm:px-4 max-sm:rounded-3xl max-sm:mx-auto flex items-center justify-center">
        <div id="animeAuth" className="w-110 px-4 2xl:px-0" >
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