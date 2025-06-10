import { IconArrowLeft } from "../../assets/icon/iconArrowLeft"
import { IconX } from "../../assets/icon/iconX"

type PropsTitle = {
  onClose: () => void
  title: string
  onClick?: () => void
}

export function ModalTitle({onClose, title, onClick}: PropsTitle){
  return (
    <>
      <div className="py-5 px-7 flex justify-between items-center">
        <div className="flex items-center">
          {onClick &&
            <IconArrowLeft onClick={onClick} />
          }
          <span className="text-base font-semibold text-gray-200" >{title}</span>
        </div>
        <button onClick={onClose}>
          <IconX className="w-4.5 h-4.5 cursor-pointer fill-gray-200" />
        </button>
      </div>
    </>
  )
}