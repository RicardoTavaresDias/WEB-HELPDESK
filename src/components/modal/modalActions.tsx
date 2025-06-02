type PropsContainer =  {
  children: any
}

export function ModalActions({children}:PropsContainer){
  return (
    <>
      <div className={`flex justify-center mb-6 mx-7 gap-2`}>
        {children}
      </div>
    </>
  )
}