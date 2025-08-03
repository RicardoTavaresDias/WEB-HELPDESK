import { IconPlus } from "@/assets/icon/iconPlus";
import { Modules } from "@/components/modules";
import { Avatar } from "@/components/ui/avatar";
import { UiButton } from "@/components/ui/UiButton";
import { IconPenLine } from "@/assets/icon/iconPenLine";
import { dayjs } from "@/lib/dayjs";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Save, NotebookText, X } from "lucide-react";
import { IconTrash } from "@/assets/icon/iconTrash";
import type { CalledComment } from "@/types/calleds-response";
import { LoaderSM } from "@/components/ui/loading";
import { useForm } from "react-hook-form";
import {
  useUpdateCommentCalled,
  type DataUpdateCommentType,
} from "@/http/use-update-comment-called";
import { useRemoveCommentCalled } from "@/http/use-remove-comment-called";
import { useAuth } from "@/hooks/useAuth";

type ModuleCalledComments = {
  dataComments: CalledComment[] | undefined;
  modalComment: boolean;
  setModalComment: (value: boolean) => void;
  statusCalled: string | undefined;
  queryKeyIndex: string
};

function CalledComments({
  dataComments,
  modalComment,
  setModalComment,
  statusCalled,
  queryKeyIndex
}: ModuleCalledComments) {
  const { session } = useAuth();
  const [isLoadingInput, setIsLoadingInput] = useState<string | null>(null);
  const [isLoadingType, setIsLoadingType] = useState<string | null>(null);
  const { isPending: isPendingUpdate, mutateAsync: onUpdateComment } =
    useUpdateCommentCalled(queryKeyIndex);
  const { isPending: isPendingRemove, mutateAsync: onRemoveComment } =
    useRemoveCommentCalled(queryKeyIndex);

  const form = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  const onSubmit = async (commentId: string) => {
    const newComment = form.getValues(`description-${commentId}`);
    await onUpdateComment({ idComment: commentId, description: newComment });
    setIsLoadingInput(null);
  };

  const onSubmitType = async (dataType: DataUpdateCommentType) => {
    await onUpdateComment(dataType);
    setIsLoadingType(null);
  };

  return (
    <>
      <Modules.Context isType="60">
        <div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Acompanhamento</span>
            {statusCalled !== "close" && (
              <UiButton
                typeColor="black"
                typeSize="xxs"
                icon={IconPlus}
                color="#F9FAFA"
                onClick={() => setModalComment(!modalComment)}
              />
            )}
          </div>

          {dataComments?.map((comment) => (
            <div
              className={`flex flex-col gap-3 items-end  rounded-sm mt-5 p-3 ${
                comment.comment.type === "task"
                  ? "bg-yellow-100/50"
                  : "bg-gray-500/20"
              }  shadow-md`}
              key={comment.comment.id}
            >
              {/* Buttons  */}
              <div className="flex w-full justify-between">
                <span className="Text-Xs text-gray-400 font-semibold">
                  {comment.comment.type === "task"
                    ? "Tarefa"
                    : "Acompanhamento"}
                </span>
                {isLoadingInput !== comment.comment.id &&
                  statusCalled !== "close" &&
                  comment.user.id === session?.user.id && (
                    <div className="flex gap-2">
                      <UiButton
                        type="button"
                        icon={
                          isPendingUpdate &&
                          isLoadingType === comment.comment.id
                            ? LoaderSM
                            : NotebookText
                        }
                        typeColor="gray"
                        typeSize="xxs"
                        onClick={() => {
                          onSubmitType({
                            idComment: comment.comment.id,
                            type:
                              comment.comment.type === "task"
                                ? "followUp"
                                : "task",
                          });
                          setIsLoadingType(
                            isLoadingType === comment.comment.id
                              ? null
                              : comment.comment.id
                          );
                        }}
                      />
                      <UiButton
                        type="button"
                        icon={IconPenLine}
                        typeColor="gray"
                        typeSize="xxs"
                        onClick={() =>
                          setIsLoadingInput(
                            isLoadingInput === comment.comment.id
                              ? null
                              : comment.comment.id
                          )
                        }
                      />
                    </div>
                  )}
              </div>
              {/* Buttons  */}

              {/* Buttons  */}
              {isLoadingInput === comment.comment.id &&
                statusCalled !== "close" &&
                comment.user.id === session?.user.id && (
                  <div className="flex gap-2">
                    <UiButton
                      type="button"
                      icon={isPendingRemove ? LoaderSM : IconTrash}
                      typeColor="gray"
                      typeSize="xxs"
                      disabled={isPendingRemove || isPendingUpdate}
                      onClick={() => onRemoveComment(comment.comment.id)}
                    />

                    <UiButton
                      type="submit"
                      icon={isPendingUpdate ? LoaderSM : Save}
                      typeColor="gray"
                      typeSize="xxs"
                      onClick={() => onSubmit(comment.comment.id)}
                      disabled={isPendingRemove || isPendingUpdate}
                    />

                    <UiButton
                      type="button"
                      icon={X}
                      typeColor="gray"
                      typeSize="xxs"
                      onClick={() => {
                        setIsLoadingInput(
                          isLoadingInput === comment.comment.id
                            ? null
                            : comment.comment.id
                        ),
                          form.reset();
                      }}
                      disabled={isPendingRemove || isPendingUpdate}
                    />
                  </div>
                )}
              {/* Buttons  */}

              {/* Info */}
              <div className="w-full flex gap-4 lg:gap-6 max-sm:items-start">
                <div className="flex flex-col items-center gap-1.5">
                  <Avatar
                    user={{
                      name: comment.user.name,
                      avatar: comment.user.avatar,
                    }}
                    size="w-10 h-10"
                    sizeText="text-[14px]"
                  />
                  <span className="text-[11px] w-13 truncate text-center">
                    {comment.user.name}
                  </span>
                </div>

                {isLoadingInput === comment.comment.id &&
                  comment.user.id === session?.user.id && (
                    <TextareaAutosize
                      {...form.register(`description-${comment.comment.id}`)}
                      defaultValue={comment.comment.description}
                      className={`w-full text-sm border-gray-500 outline-none overflow-hidden p-2 border rounded resize-none`}
                      rows={4}
                    />
                  )}

                {isLoadingInput !== comment.comment.id && (
                  <div className="">
                    <p
                      className="text-sm text-gray-300 break-words whitespace-pre-line w-full"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {comment.comment.description}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center w-full">
                <span className="text-gray-400 Text-Xs">
                  {dayjs(comment.comment.updatedAt).format("DD/MM/YY HH:mm")}
                </span>
                <span className="text-gray-400 Text-Xs">
                  {dayjs().to(comment.comment.updatedAt)}
                </span>
              </div>
            </div>
          ))}
          {/* Info */}
        </div>
      </Modules.Context>
    </>
  );
}

export { CalledComments };