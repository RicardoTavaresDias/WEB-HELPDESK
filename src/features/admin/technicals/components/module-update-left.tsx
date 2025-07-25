import { Modules } from "@/components/modules";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import type { SearchTechnicalType } from "../http/use-search-user-uuid";
import type { UseFormReturn } from "react-hook-form";
import { type UserTechnicalType as UserTechnicalTypeSchema  } from "../schemas/technical.schema";

type ModuleUpdateLeftProps = {
  userTechnical: SearchTechnicalType | undefined
  form: UseFormReturn<UserTechnicalTypeSchema>
}

function ModuleUpdateLeft ({ userTechnical, form }: ModuleUpdateLeftProps) {
  return (
    <>
      <Modules.Context isType="40">
        <div className="break-words max-sm:w-full">
          <div>
            <h3 className="text-base font-semibold text-gray-200">
              Dados pessoais
            </h3>
            <span className="Text-Xs text-gray-300">
              Defina as informações do perfil de técnico
            </span>
          </div>
          <div className="my-6">
            {userTechnical && <Avatar user={userTechnical} size="w-18 h-18" sizeText="text-[22px]" /> }
          </div>
          <Input type="text" {...form.register("name")} label="nome" error={form.formState.errors.name?.message} />
          <Input type="text" {...form.register("email")} label="e-mail" error={form.formState.errors.email?.message} />
        </div>
      </Modules.Context>
    </>
  )
}

export { ModuleUpdateLeft }