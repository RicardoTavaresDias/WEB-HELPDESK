import { Modules } from "@/components/modules";
import { Avatar } from "@/components/ui/avatar";
import { Loading } from "@/components/ui/loading";
import { dayjs } from "@/lib/dayjs"
import { type CalledComment } from "../types/calleds-useCustomers-response"

type ModuleCalledComments = {
  data: CalledComment[] | undefined
}

function CalledComments ({ data }: ModuleCalledComments) {

  if(!data) {
    return <Loading />
  }

  return (
    <>
      <Modules.Context isType="60">
        <div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm" >Comentários</span>
          </div>

          {/* Opção 1 */}
          {data.map((comment) => (
            <div className="flex flex-col gap-3 items-end  rounded-sm mt-5 p-3 bg-gray-500/20 shadow-md" key={comment.comment.id} >

              <div className="w-full flex gap-4 lg:gap-6 max-sm:items-start">
                <div className="flex flex-col items-center gap-1.5">
                  <Avatar user={{ name: comment.user.name, avatar: comment.user.avatar }} size="w-10 h-10" sizeText="text-[14px]"/>
                  <span className="text-[11px] w-19 truncate text-center">{comment.user.name}</span>
                </div>

                <div className="">
                  <p className="text-sm text-gray-300 " style={{ whiteSpace: 'pre-line' }} >
                    {comment.comment.description}
                  </p>
                </div>
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