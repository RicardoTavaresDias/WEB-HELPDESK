import { IconPlus } from "@/assets/icon/iconPlus";
import { Modules } from "@/components/modules";
import { Avatar } from "@/components/ui/avatar";
import { UiButton } from "@/components/ui/UiButton";
import { IconPenLine } from "@/assets/icon/iconPenLine";
import { dayjs } from "@/lib/dayjs"
import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize'
import { Save } from "lucide-react"
import { X } from "lucide-react"
import { IconTrash } from "@/assets/icon/iconTrash";
import type { CalledComment } from "@/features/technical/types/calleds-user-response";
import { LoaderSM } from "@/components/ui/loading";
import { useForm } from "react-hook-form";
import { useUpdateCommentCalled } from "../http/use-update-comment-called";
import { useRemoveCommentCalled } from "../http/use-remove-comment-called";

type ModuleCalledComments = {
  data: CalledComment[] | undefined
}

function CalledComments ({ data }: ModuleCalledComments) {
  const [editando, setEditando] = useState<string | null>(null)
  const { isPending: isPendingUpdate, mutateAsync: onUpdateComment } = useUpdateCommentCalled()
  const { isPending: isPendingRemove, mutateAsync: onRemoveComment } = useRemoveCommentCalled()

  const form = useForm({
    criteriaMode: 'all',
    mode: 'all',
  })

  const onSubmit = async (commentId: string) => {
    const newComment = form.getValues(`description-${commentId}`)
    await onUpdateComment({ idComment: commentId, description: newComment })
    setEditando(null)
  }

  return  (
    <>
      <Modules.Context isType="60">
        <div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm" >Comentários</span>
            <UiButton typeColor="black" typeSize="xxs" icon={IconPlus} color="#F9FAFA" />
          </div>

          {/* Opção 1 */}
          {data?.map((comment) => (
            <div className="flex flex-col gap-3 items-end  rounded-sm mt-5 p-3 bg-gray-500/20 shadow-md" key={comment.comment.id} >
              {editando !== comment.comment.id &&
                <UiButton type="button" icon={IconPenLine} typeColor="gray" typeSize="xxs"
                  onClick={() => setEditando(editando === comment.comment.id ? null : comment.comment.id)} />
              }

              {editando === comment.comment.id && 
                <div className="flex gap-2">
                  <UiButton type="button" icon={isPendingRemove ? LoaderSM : IconTrash} typeColor="gray" typeSize="xxs" disabled={isPendingRemove || isPendingUpdate} 
                    onClick={() => onRemoveComment(comment.comment.id)} />

                  <UiButton type="submit" icon={isPendingUpdate ? LoaderSM : Save} typeColor="gray" typeSize="xxs" 
                    onClick={() => onSubmit(comment.comment.id)} disabled={isPendingRemove || isPendingUpdate} />

                  <UiButton type="button" icon={X} typeColor="gray" typeSize="xxs" 
                    onClick={() => { setEditando(editando === comment.comment.id ? null : comment.comment.id), form.reset() }} disabled={isPendingRemove || isPendingUpdate} />
                </div>
              }

              <div className="w-full flex gap-4 lg:gap-6 max-sm:items-start">
                <div className="flex flex-col items-center gap-1.5">
                  <Avatar user={{ name: comment.user.name, avatar: comment.user.avatar }} size="w-10 h-10" sizeText="text-[14px]"/>
                  <span className="text-[11px] w-19 truncate text-center">{comment.user.name}</span>
                </div>

                {editando === comment.comment.id &&
                  <TextareaAutosize 
                    {...form.register(`description-${comment.comment.id}`)}
                    defaultValue={comment.comment.description}
                    className={`w-full text-sm border-gray-500 outline-none overflow-hidden p-2 border rounded resize-none`}
                    rows={4}
                  />
                }

                {editando !== comment.comment.id &&
                  <div className="">
                    <p className="text-sm text-gray-300 ">
                      {comment.comment.description}
                    </p>
                  </div>
                }
              </div>

              <div className="flex justify-between items-center w-full">
                <span className="text-gray-400 Text-Xs" >{dayjs(comment.comment.updatedAt).format("DD/MM/YY HH:mm")}</span>
                <span className="text-gray-400 Text-Xs" >{dayjs().to(comment.comment.updatedAt)}</span>
              </div>
            </div>
          ))}
          {/* Opção 1 */}

        </div>
      </Modules.Context>
    </>
  )
}

export { CalledComments }