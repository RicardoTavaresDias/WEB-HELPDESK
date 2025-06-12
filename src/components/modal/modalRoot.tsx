type PropsRoot = {
  children: React.ReactNode
  isActive: Boolean
}

export function ModalRoot({children, isActive}: PropsRoot){
  return (
    <>
      <div className={" fixed z-30 top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center items-center" + ` ${isActive ? "bg-gray-100/75 opacity-100": "opacity-0 pointer-events-none"}` }>
        <div className={"bg-gray-600 rounded-2xl flex flex-col justify-between max-sm:w-89 lg:w-110" + ` transition-all duration-300 transform ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
          {children}
        </div>
      </div>
    </>
  ) 
}