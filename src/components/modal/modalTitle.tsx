import close from "../../assets/icon/x-2.svg"

type PropsTitle = {
  onClose: () => void
  title: string
}


export function ModalTitle({onClose, title}: PropsTitle){
  return (
    <>
      <div className="py-5 px-7 flex justify-between items-center">
        <span className="text-base font-semibold text-gray-200" >{title}</span>
        <button onClick={onClose}>
          <img src={close} className="w-4.5 h-4.5 cursor-pointer" />
        </button>
      </div>
    </>
  )
}