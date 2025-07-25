import { Modules } from "@/components/modules";
import { IsProfile } from "@/features/layout/profile";
import { UiButton } from "@/components/ui/UiButton";
import { Input } from "@/components/ui/input";
import { InputSelectServices } from "../components/input-select-services";
import { currency } from "@/lib/currency";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { calledSchema, type CalledSchemaType } from "../schemas/create-called-schema"
import { useAuth } from "@/hooks/useAuth"
import { LoaderSM } from "@/components/ui/loading";
import type { SelectServicesCategoryType } from "../types/calleds-useCustomers-response";
import { useCreateCalled } from "../http/use-create-called";
import { Alert } from "@/components/ui/alert";
import { InputTextarea } from "../components/input-textarea";

export function CreateCalled(){
  const { session } = useAuth()
  const { data, isSuccess, isError, error, isPending, mutateAsync: onCreateCalled } = useCreateCalled()
 
  const form = useForm<CalledSchemaType>({
    defaultValues: {
      title: "",
      description: "",
      category: undefined,
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(calledSchema)
  })

  const onSubmit = (data: CalledSchemaType) => {
    onCreateCalled({ 
      idCustomer: session?.user.id!,
      titleCalled: data.title, 
      description: data.description, 
      idServices: [{ id: data.category.id }]
    })
    form.reset()
  }

  return (
    <>
      <Alert open={isSuccess} severity="success" >{data?.message}</Alert>
      <Alert open={isError} severity="error" >{error?.message}</Alert>

      <IsProfile myProfile="customers" /> 
      
      <Modules.Root>
        <Modules.Title title="Novo chamado" />
      </Modules.Root>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Modules.Root>
          <Modules.Container>
            <Modules.Context isType="60" >
              <div className="flex flex-col gap-1">
                <span className="Text-Md text-gray-200 font-semibold">Informações</span>
                <span className="text-gray-300 Text-Xs">Configure os dias e horários em que você está disponível para atender chamados</span>
              </div>

              <div className="mt-6">
                <div className="flex flex-col">
                  <Input type="text" {...form.register("title")} label="Título" placeholder="Digite um título para o chamado" isScren error={form.formState.errors.title?.message} />
                  <InputTextarea form={form} />
                  <Controller
                    name="category"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <InputSelectServices
                        value={field.value as SelectServicesCategoryType}
                        onChange={field.onChange}
                        error={fieldState.error?.message}
                      />
                    )}
                  />
                </div>
              </div>
            </Modules.Context>

            <Modules.Context isType="40" >
                <div>
                  <span className="text-md font-semibold text-gray-200" >Resumo</span>
                  <p className="Text-Xs text-gray-300 ">Valores e detalhes</p>
                  <span className="text-md text-gray-200">{ currency({ coinFormatCents: form.watch("category")?.price || "00"}) }</span>
                </div>

                <div className="mt-6 flex flex-col gap-1">
                  <span className="Text-Xs text-gray-300 ">Categoria de serviço</span>
                  <span className="text-sm text-gray-200">{form.watch("category")?.titleService}</span>
                </div>

                <div className="mt-6 flex flex-col gap-0.5">
                  <span className="Text-Xs text-gray-300 ">Custo inicial</span>

                  <div className="mt-1">
                    <span className="Text-Sm text-gray-200 ">R$</span>
                    <span className="text-xl font-semibold text-gray-200">{currency({ coinFormatCents: String(200) }).replace("R$", "")}</span>
                  </div>
                </div>

                <p className="Text-Xs my-6 text-gray-300">O chamado será automaticamente atribuído a um técnico disponível</p>

                <UiButton type="submit" typeColor="black" typeSize="base" disabled={form.formState.isSubmitting} >
                  {isPending ? <LoaderSM /> : "Criar chamado"}
                </UiButton>
            </Modules.Context>
          </Modules.Container>
        </Modules.Root>
      </form>              
    </>
  )
}