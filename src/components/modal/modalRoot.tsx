type PropsRoot = {
  children: React.ReactNode
  isActive: Boolean
}

export function ModalRoot({children, isActive}: PropsRoot){
  if(isActive){
    return (
    <>
       <div className="bg-gray-100/75 fixed z-30 top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center items-center">
        <div className="bg-gray-600 rounded-2xl flex flex-col justify-between max-sm:w-89 lg:w-110">
          {children}
        </div>
       </div>
    </>
  )
  }
  
}