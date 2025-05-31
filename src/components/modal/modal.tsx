type Props = {
  children: any
  isModal: boolean
}

export function Modal({children, isModal}: Props){

  if(isModal){
     return (
        <div className="bg-gray-100/75 fixed z-30 top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center items-center">
          <div className="bg-gray-600 w-100 h-100 p-5     rounded-2xl flex flex-col justify-between">
            {children}
          </div>
        </div>
      )
  }

 return null
}