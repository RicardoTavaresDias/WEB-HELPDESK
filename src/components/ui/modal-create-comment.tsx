import { IconCicloAlert } from "@/assets/icon/iconCicleAlert";
import { Modal } from "@/components/modal";
import { Alert } from "@/components/ui/alert";
import { LoaderSM } from "@/components/ui/loading";
import { UiButton } from "@/components/ui/UiButton";
import { useForm } from "react-hook-form";
import {
  useCreateCommentCalled,
  type DataCreateCommentType,
} from "@/http/use-create-comment-called";
import { useAuth } from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createCommentCalledSchema,
  type CreateCommentCalledSchemaType,
} from "@/schemas/create-commet-called-schema";

type ModalCreateCommentType = {
  modalComment: boolean;
  setModalComment: (value: boolean) => void;
  idCalled: number | undefined;
  queryKeyIndex: string
};

function ModalCreateComment({
  modalComment,
  setModalComment,
  idCalled,
  queryKeyIndex
}: ModalCreateCommentType) {
  const { session } = useAuth();
  const {
    data,
    isPending,
    isSuccess,
    isError,
    error,
    mutateAsync: onCreateComment,
  } = useCreateCommentCalled(queryKeyIndex);

  const form = useForm<CreateCommentCalledSchemaType>({
    defaultValues: {
      description: "",
      type: "",
    },
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(createCommentCalledSchema),
  });

  const onSubmit = async (data: CreateCommentCalledSchemaType) => {
    await onCreateComment({
      idCalled,
      idUser: session?.user.id,
      description: data.description,
      type: data.type,
    } as DataCreateCommentType);
    setModalComment(!modalComment);
    form.reset();
  };

  return (
    <>
      <Alert severity="success" open={isSuccess}>
        {data?.message}
      </Alert>
      <Alert severity="warning" open={isError}>
        {error?.message}
      </Alert>

      <Modal.Root isActive={modalComment}>
        <Modal.Title
          title="Acompanhamento"
          onClose={() => {
            setModalComment(!modalComment);
            form.reset();
          }}
        />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Modal.Context>
            <div className="group/description flex flex-col mt-4">
              <label
                className={`Text-Xxs group-focus-within/description:text-blue-base ${
                  form.formState.errors.description
                    ? "text-feedback-danger"
                    : "text-gray-300"
                }`}
              >
                Comentários
              </label>
              <textarea
                {...form.register("description")}
                className="w-full h-[150px] border-b-1 border-gray-500 max-sm:w-73 Heading-Md my-2 pb-2 outline-none group-focus-within/description:border-blue-base resize-none"
                placeholder="Descreva o acompanhamento do serviço"
                style={{ lineHeight: "1.8" }}
              />

              {form.formState.errors.description && (
                <div className="flex gap-1">
                  <IconCicloAlert className="w-4 h-4 fill-feedback-danger" />
                  <span className="Text-Xs text-feedback-danger">
                    {form.formState.errors.description?.message}
                  </span>
                </div>
              )}
            </div>

            <div className="group/type">
              <label
                className={`Text-Xxs mt-5 group-focus-within/type:text-blue-base ${
                  form.formState.errors.type
                    ? "text-feedback-danger"
                    : "text-gray-300"
                }`}
              >
                Tipo de Acompanhamento
              </label>
              <div className=" flex gap-4 mt-4 justify-center items-center">
                <label className="flex gap-4 text-sm text-gray-300" >
                  <input type="radio" 
                    {...form.register("type")}
                    value="followUp"
                    className="w-5 h-5"
                  />
                  Acompanhamento
                </label>
               
                
                <label className="flex gap-4 text-sm text-gray-300" >
                  <input type="radio"
                    {...form.register("type")}
                    value="task"
                    className="w-5 h-5"
                  />
                  Tarefa
                </label>                
              </div>
              {form.formState.errors.type && (
                <div className="flex gap-1 mt-4">
                  <IconCicloAlert className="w-4 h-4 fill-feedback-danger" />
                  <span className="Text-Xs text-feedback-danger">
                    {form.formState.errors.type?.message}
                  </span>
                </div>
              )}
            </div>
          </Modal.Context>

          <Modal.Actions>
            <UiButton
              type="submit"
              typeSize="xxl"
              typeColor="black"
              disabled={isPending}
            >
              {isPending ? <LoaderSM /> : "Salvar"}
            </UiButton>
          </Modal.Actions>
        </form>
      </Modal.Root>
    </>
  );
}

export { ModalCreateComment };