import { Input } from "@/components/ui/input";
import type { UseFormReturn } from "react-hook-form";

type FormDataUserType = {
  name: string;
  email: string;
  password: string;
}

type FormProfileType = {
  modalPassword: boolean
  setModalPassword: (value: boolean) => void
  isModal: () => void
  form: UseFormReturn<FormDataUserType>
}

export const FormProfile = ({ modalPassword, setModalPassword, isModal, form }: FormProfileType) => {
  return (
    <div className="mt-5">
      <Input type="text" {...form.register("name")} label="nome"  />
      <Input type="text" {...form.register("email")} label="e-mail"  />
      <div className="relative ">
        <Input type="password" {...form.register("password")} label="senha" onChange={() => null} />
        <div className="absolute right-0 ">
          <div className="">
            <button type="button" className="absolute bottom-5 right-1 p-1 bg-gray-500 rounded-md text-xxs font-semibold cursor-pointer hover:shadow-md" onClick={() => {setModalPassword(!modalPassword); isModal()}} >
              <span className="Text-Xs m-3 ">Alterar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}