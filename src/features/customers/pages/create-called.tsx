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

  const onSubmit = (data: CalledSchemaType) => {
    return console.log(data)
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
            <ModuleCreateCalledLeft form={form} />
            <ModuleCreateCalledRight form={form} isPending={isPending} />
          </Modules.Container>
        </Modules.Root>
      </form>              
    </>
  )
}