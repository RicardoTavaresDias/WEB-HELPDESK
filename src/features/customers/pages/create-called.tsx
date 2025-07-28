import { Modules } from "@/components/modules";
import { IsProfile } from "@/features/layout/profile";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { calledSchema, type CalledSchemaType } from "../schemas/create-called-schema"
import { useAuth } from "@/hooks/useAuth"
import { useCreateCalled } from "../http/use-create-called";
import { Alert } from "@/components/ui/alert";
import { ModuleCreateCalledLeft } from "../components/module-create-called-left";
import { ModuleCreateCalledRight } from "../components/module-create-called-right";

export function CreateCalled(){
  const { session } = useAuth()
  const { data, isSuccess, isError, error, isPending, mutateAsync: onCreateCalled } = useCreateCalled()
 
  const form = useForm<CalledSchemaType>({
    defaultValues: {
      title: "",
      description: "",
      date: "",
      hour: "",
      category: undefined,
    },
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(calledSchema)
  })

  const onSubmit = async (data: CalledSchemaType) => {
    const teste = await onCreateCalled({ 
      titleCalled: data.title, 
      description: data.description, 
      idCustomer: session?.user.id!,
      dateCustomer: data.date,
      hourCustomer: data.hour,
      idServices: [{ id: data.category.id }]
    })

    if(teste) {
      form.reset()
    }
  }

  return (
    <>
      <Alert open={isSuccess} severity="success" >{data?.message}</Alert>
      <Alert open={isError} severity="info" >{error?.message}</Alert>

      <IsProfile myProfile="customers" /> 
      
      <Modules.Root>
        <Modules.Title title="Novo chamado" />
      </Modules.Root>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Modules.Root>
          <Modules.Container>
            <ModuleCreateCalledLeft form={form} />
            <ModuleCreateCalledRight form={form} isPending={isPending} />
          </Modules.Container>
        </Modules.Root>
      </form>              
    </>
  )
}