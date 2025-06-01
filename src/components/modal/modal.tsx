import close from "../../assets/icon/x-2.svg"
import { Button } from "../ui/button"

type Props = {
  children: any
  isModal: boolean
  closeModal: () => void
  type?: "twoButton"
  save: () => void
  title: string
}

export function Modal({children, isModal, closeModal, type, save, title}: Props){

  if(isModal){
    if(type){
      return (
        <>
          <div className="bg-gray-100/75 fixed z-30 top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center items-center">
            <div className="bg-gray-600 rounded-2xl flex flex-col justify-between max-sm:w-89">
              <div className="py-5 px-7 flex justify-between items-center">
                <span className="text-base font-semibold text-gray-200" >{title}</span>
                <button onClick={closeModal}>
                  <img src={close} className="w-4.5 h-4.5 cursor-pointer" />
                </button>
              </div>
                <div className="border-b border-t w-full border-gray-500 mb-6 p-7">
                  {children}
                </div>
                <div className="flex justify-center mb-6 mx-7 gap-2">
                  <Button typeSize="md" typeColor="gray" onClick={closeModal}>Cancelar</Button>
                  <Button typeSize="md" typeColor="black" onClick={save} >Sim, excluir</Button>
                </div>
            </div>
          </div>
        </>
      )
    }


     return (
        <div className="bg-gray-100/75 fixed z-30 top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center items-center">
          <div className="bg-gray-600 rounded-2xl flex flex-col justify-between">
            <div className="py-5 px-7 flex justify-between items-center">
              <span className="text-base font-semibold text-gray-200" >Cliente</span>
              <button onClick={closeModal}>
                <img src={close} className="w-4.5 h-4.5 cursor-pointer" />
              </button>
            </div>
              <div className="border-b border-t w-full border-gray-500 mb-6 p-7">
                {children}
              </div>
              <div className="flex justify-center mb-6 mx-7">
                <Button typeSize="lg" typeColor="black" onClick={save} >Salvar</Button>
              </div>
          </div>
        </div>
      )
  }

 return null
}