import { IconCamera } from "@/assets/icon/Iconcamera"
import { IconPlay } from "@/assets/icon/IconPlay"
import { IconTrash } from "@/assets/icon/iconTrash"
import { Avatar } from "@/components/ui/avatar"
import { useOpenModal } from "@/hooks/useOpenModal"
import { useAuth } from "@/hooks/useAuth"
import type { MutableRefObject } from "react";
import { useRemoveAvatar } from "../../http/use-avatar-remove"
import { LoaderSM, Loading } from "@/components/ui/loading"
import { UiButton } from "@/components/ui/UiButton"
import { UserX } from "lucide-react"
import { removeProfile } from "../../http/use-remove-user"

type FormChooseAvatarType = {
  imagePreview: string | null
  setImagePreview: (value: string | null) => void
  fileRef: MutableRefObject<File | null>
}

type SessionUser = {
  name: string
  avatar: string
}

export const FormChooseAvatar = ({ imagePreview, setImagePreview, fileRef }: FormChooseAvatarType) => {
   const { menuRef, open, setOpen } = useOpenModal()
   const { session, remove } = useAuth()
   const { mutateAsync: onRemove, isPending } = useRemoveAvatar()

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>){
    fileRef.current = event.target.files?.[0] ?? null
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url as any)
    }
  }

  const { mutateAsync: onRemoveProfile, isPending: removeIsPending } = removeProfile()

  const onSubmit = async () => {
    await onRemoveProfile(session?.user.id as any)
    remove()
  }

  return (
    <>
      {isPending && <Loading/>} 
      <div className="flex items-center w-fit" ref={menuRef}>

        {/* Avatar */}
        <Avatar user={session?.user as SessionUser} size="w-14 h-14" sizeText="text-[22px]" />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="absolute top-0 left-0 w-14 h-14 object-cover rounded-full border-2 border-none"
          />
        )}

        <div className="absolute ml-10 mt-8 z-40 cursor-pointer" onClick={() => setOpen(!open)}>
          <div className="bg-gray-500 rounded-full w-6.5 h-6.5 flex justify-center items-center" >
            <IconCamera className="w-5 h-5 fill-gray-400 hover:fill-gray-200" />
          </div>
        </div>
        {/* Avatar */}

        {/* Modal Escolher foto do perfil */}
        <div className={`absolute top-18 left-8 z-20 ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 hidden"} origin-top transition ease-out duration-200`}>
          <IconPlay className="w-5 absolute -top-2 left-3 fill-gray-600 drop-shadow-xl/60  border-none -z-10" />
          <div className={`w-50 bg-gray-600 p-2 drop-shadow-2xl/10 rounded-lg  `} >
            <ul className="Text-Xs">
              <li className="hover:bg-gray-400/8 cursor-pointer p-1.5 flex items-center gap-2 rounded" onClick={() => setOpen(!open)}>
                <IconCamera className="w-5.5 fill-gray-400/70 stroke-gray-600" />
                Escolher foto

                <input type="file" className="absolute w-42 opacity-0" onChange={handleImageChange}/>
                
              </li>
              <li className="hover:bg-gray-400/8 cursor-pointer p-1.5 flex items-center gap-2 rounded" onClick={() => {
                onRemove()
                setOpen(!open)}
              }
              >
                <IconTrash className="w-4 ml-1" />
                Remover foto atual
              </li>
            </ul>
          </div>
        </div>
        {/* Modal Escolher foto do perfil */}

        {session?.user.role !== "technical" && 
          <div className="ml-8">
            <UiButton 
              type="button"
              typeColor="gray"
              typeSize="xxs"
              icon={removeIsPending ? LoaderSM : UserX }
              onClick={() => {
                onSubmit()
              }}
            >
              <span className="text-xs font-normal">
                Remover Conta
              </span>
            </UiButton>
          </div>
        }
        
      </div>

      
    </>
  )
}